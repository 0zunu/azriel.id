import { PDFDocument } from 'pdf-lib';

(() => {
  const dropzone = document.getElementById('mergePdfDropzone');
  const fileInput = document.getElementById('mergePdfInput');
  const moreInput = document.getElementById('mergePdfMoreInput');
  const workspace = document.getElementById('mergePdfWorkspace');
  const fileList = document.getElementById('mergePdfFileList');
  const count = document.getElementById('mergePdfCount');
  const mergeButton = document.getElementById('mergePdfButton');
  const clearButton = document.getElementById('mergePdfClear');
  const status = document.getElementById('mergePdfStatus');

  const requiredElements = [dropzone, fileInput, moreInput, workspace, fileList, count, mergeButton, clearButton, status];
  if (requiredElements.some((element) => !element)) {
    console.error('PDF merger initialization failed: required page elements are missing.');
    return;
  }

  const isIndonesian = document.documentElement.lang.toLowerCase().startsWith('id');
  const messages = isIndonesian
    ? {
        invalid: 'Pilih file PDF yang valid.',
        empty: 'File PDF kosong dan tidak dapat diproses.',
        added: (number) => `${number} file PDF ditambahkan.`,
        count: (number) => `${number} file PDF · ${number} halaman akan digabungkan sesuai urutan`,
        moveUp: 'Geser ke atas',
        moveDown: 'Geser ke bawah',
        remove: 'Hapus file',
        processing: 'Menggabungkan file PDF...',
        success: 'PDF berhasil digabungkan dan siap diunduh.',
        error: (name) => `Tidak dapat membaca "${name}". Pastikan PDF tidak rusak atau terkunci.`,
        completeError: 'PDF gagal digabungkan. Periksa file dan coba lagi.',
      }
    : {
        invalid: 'Choose valid PDF files.',
        empty: 'The PDF file is empty and cannot be processed.',
        added: (number) => `${number} PDF file${number === 1 ? '' : 's'} added.`,
        count: (number) => `${number} PDF files · ${number} pages will be merged in this order`,
        moveUp: 'Move up',
        moveDown: 'Move down',
        remove: 'Remove file',
        processing: 'Merging PDF files...',
        success: 'Your PDF has been merged and is ready to download.',
        error: (name) => `Could not read "${name}". Make sure the PDF is not damaged or locked.`,
        completeError: 'Could not merge the PDFs. Check the files and try again.',
      };

  let files = [];
  let isProcessing = false;
  let draggedIndex = null;

  function formatBytes(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    const units = ['KB', 'MB', 'GB'];
    const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)) - 1, units.length - 1);
    return `${(bytes / (1024 ** (index + 1))).toFixed(1)} ${units[index]}`;
  }

  function updateView() {
    dropzone.classList.toggle('hidden', files.length > 0);
    workspace.classList.toggle('hidden', files.length === 0);
    mergeButton.disabled = isProcessing || files.length < 2;
    clearButton.disabled = isProcessing || files.length === 0;
    fileInput.disabled = isProcessing;
    moreInput.disabled = isProcessing;
    fileList.replaceChildren();

    files.forEach((file, index) => {
      const item = document.createElement('li');
      item.draggable = !isProcessing;
      item.dataset.index = String(index);
      item.className = 'merge-pdf-item flex min-w-0 items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition-colors dark:border-neutral-700 dark:bg-neutral-800';

      const icon = document.createElement('span');
      icon.className = 'flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-300';
      icon.setAttribute('aria-hidden', 'true');
      icon.innerHTML = '<svg class="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M7 3h7l5 5v13H7a2 2 0 01-2-2V5a2 2 0 012-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M14 3v6h6M8 15h8M8 18h6"></path></svg>';

      const details = document.createElement('div');
      details.className = 'min-w-0 flex-1';
      const name = document.createElement('p');
      name.className = 'm-0 truncate text-sm font-semibold text-neutral-900 dark:text-neutral-100';
      name.textContent = file.name;
      name.title = file.name;
      const meta = document.createElement('p');
      meta.className = 'm-0 mt-1 text-xs text-neutral-500 dark:text-neutral-400';
      meta.textContent = formatBytes(file.size);
      details.append(name, meta);

      const controls = document.createElement('div');
      controls.className = 'flex shrink-0 flex-col gap-1';
      controls.append(
        createControlButton('↑', messages.moveUp, index === 0, () => moveFile(index, index - 1)),
        createControlButton('↓', messages.moveDown, index === files.length - 1, () => moveFile(index, index + 1)),
        createControlButton('×', messages.remove, false, () => removeFile(index)),
      );
      item.append(icon, details, controls);
      fileList.append(item);
    });

    const pageCount = files.reduce((total, entry) => total + (entry.pageCount || 0), 0);
    count.textContent = files.length
      ? `${files.length} ${isIndonesian ? 'file dipilih' : `file${files.length === 1 ? '' : 's'} selected`}${pageCount ? ` · ${pageCount} ${isIndonesian ? 'halaman' : 'pages'}` : ''}`
      : '';
  }

  function createControlButton(label, title, disabled, onClick) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.title = title;
    button.setAttribute('aria-label', title);
    button.disabled = disabled || isProcessing;
    button.className = 'flex h-6 w-6 items-center justify-center rounded text-sm font-bold text-neutral-600 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-40 dark:text-neutral-300 dark:hover:bg-neutral-700';
    button.addEventListener('click', onClick);
    return button;
  }

  function moveFile(from, to) {
    if (isProcessing || to < 0 || to >= files.length) return;
    const [file] = files.splice(from, 1);
    files.splice(to, 0, file);
    updateView();
  }

  function removeFile(index) {
    if (isProcessing) return;
    files.splice(index, 1);
    updateView();
    status.textContent = '';
  }

  function addFiles(fileCollection) {
    if (isProcessing) return;
    let added = 0;
    const problems = [];
    Array.from(fileCollection).forEach((file) => {
      if (file.size === 0) {
        problems.push(`${file.name}: ${messages.empty}`);
      } else if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
        problems.push(`${file.name}: ${messages.invalid}`);
      } else {
        files.push({ file, name: file.name, size: file.size, pageCount: 0 });
        added += 1;
      }
    });
    updateView();
    status.textContent = problems.length
      ? problems.join(' ')
      : added
        ? messages.added(added)
        : '';
    fileInput.value = '';
    moreInput.value = '';
  }

  dropzone.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropzone.classList.add('border-primary-500', 'bg-primary-100', 'dark:border-primary-400', 'dark:bg-neutral-800');
  });
  dropzone.addEventListener('dragleave', (event) => {
    if (!dropzone.contains(event.relatedTarget)) {
      dropzone.classList.remove('border-primary-500', 'bg-primary-100', 'dark:border-primary-400', 'dark:bg-neutral-800');
    }
  });
  dropzone.addEventListener('drop', (event) => {
    event.preventDefault();
    dropzone.classList.remove('border-primary-500', 'bg-primary-100', 'dark:border-primary-400', 'dark:bg-neutral-800');
    if (event.dataTransfer.files.length) addFiles(event.dataTransfer.files);
  });
  fileInput.addEventListener('change', () => addFiles(fileInput.files));
  moreInput.addEventListener('change', () => addFiles(moreInput.files));

  fileList.addEventListener('dragstart', (event) => {
    const item = event.target.closest('[data-index]');
    if (!item || isProcessing) return;
    draggedIndex = Number(item.dataset.index);
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', String(draggedIndex));
    item.classList.add('opacity-50');
  });
  fileList.addEventListener('dragover', (event) => {
    if (event.target.closest('[data-index]')) event.preventDefault();
  });
  fileList.addEventListener('drop', (event) => {
    const target = event.target.closest('[data-index]');
    if (!target || draggedIndex === null) return;
    event.preventDefault();
    const targetIndex = Number(target.dataset.index);
    const [file] = files.splice(draggedIndex, 1);
    files.splice(targetIndex, 0, file);
    draggedIndex = null;
    updateView();
  });
  fileList.addEventListener('dragend', () => {
    draggedIndex = null;
    fileList.querySelectorAll('.opacity-50').forEach((item) => item.classList.remove('opacity-50'));
  });

  clearButton.addEventListener('click', () => {
    if (isProcessing) return;
    files = [];
    updateView();
    status.textContent = isIndonesian ? 'Daftar file telah dikosongkan.' : 'The file list has been cleared.';
  });

  mergeButton.addEventListener('click', async () => {
    if (isProcessing || files.length < 2) return;
    isProcessing = true;
    updateView();
    status.textContent = messages.processing;
    try {
      const mergedPdf = await PDFDocument.create();
      for (const entry of files) {
        let sourcePdf;
        try {
          sourcePdf = await PDFDocument.load(await entry.file.arrayBuffer());
        } catch (error) {
          console.error(`PDF merger could not load "${entry.name}".`, error);
          status.textContent = messages.error(entry.name);
          return;
        }
        entry.pageCount = sourcePdf.getPageCount();
        const pages = await mergedPdf.copyPages(sourcePdf, sourcePdf.getPageIndices());
        pages.forEach((page) => mergedPdf.addPage(page));
      }

      const bytes = await mergedPdf.save();
      const url = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.href = url;
      link.download = 'merged.pdf';
      link.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      status.textContent = messages.success;
    } catch (error) {
      console.error('PDF merger failed.', error);
      status.textContent = messages.completeError;
    } finally {
      isProcessing = false;
      updateView();
    }
  });

  updateView();
})();
