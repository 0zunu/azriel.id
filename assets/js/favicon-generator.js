import JSZip from 'jszip';

(() => {
  const fileInput = document.getElementById('faviconUpload');
  const preview = document.getElementById('faviconPreview');
  const fileName = document.getElementById('faviconFileName');
  const downloadButton = document.getElementById('downloadFavicon');
  const copyButton = document.getElementById('copyFaviconHtml');
  const htmlSnippet = document.getElementById('faviconHtml');
  const status = document.getElementById('faviconStatus');
  if (!fileInput || !preview || !fileName || !downloadButton || !copyButton || !htmlSnippet || !status) return;

  const isIndonesian = document.documentElement.lang.toLowerCase().startsWith('id');
  const messages = isIndonesian
    ? {
        invalidType: 'Pilih gambar PNG, JPG, WebP, atau GIF.',
        tooLarge: 'Ukuran file melebihi batas 10 MB.',
        empty: 'File gambar kosong dan tidak dapat diproses.',
        loadError: 'Gambar tidak dapat dibuka. Silakan pilih file lain.',
        ready: 'Logo siap. Gambar diproses secara lokal di browser.',
        processing: 'Membuat paket favicon...',
        downloadError: 'Paket favicon gagal dibuat. Silakan coba lagi.',
        copySuccess: 'HTML berhasil disalin.',
        copyError: 'HTML tidak dapat disalin. Silakan salin secara manual.',
      }
    : {
        invalidType: 'Choose a PNG, JPG, WebP, or GIF image.',
        tooLarge: 'File size exceeds the 10 MB limit.',
        empty: 'The image file is empty and cannot be processed.',
        loadError: 'Unable to open the image. Please choose another file.',
        ready: 'Your logo is ready. It is processed locally in your browser.',
        processing: 'Creating your favicon package...',
        downloadError: 'Could not create the favicon package. Please try again.',
        copySuccess: 'HTML copied.',
        copyError: 'Could not copy the HTML. Please copy it manually.',
      };
  const maxFileSize = 10 * 1024 * 1024;
  const supportedTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/gif'];
  const html = [
    '<link rel="icon" href="/favicon.ico" sizes="any">',
    '<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">',
    '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">',
  ].join('\n');
  htmlSnippet.value = html;

  let currentImage = null;
  let currentObjectUrl = '';
  let loadId = 0;

  preview.addEventListener('load', () => preview.classList.remove('hidden'));

  function setStatus(message, isError = false) {
    status.textContent = message;
    status.classList.toggle('text-primary-700', isError);
    status.classList.toggle('dark:text-primary-300', isError);
    status.classList.toggle('text-neutral-500', !isError);
    status.classList.toggle('dark:text-neutral-400', !isError);
  }

  function loadImage(file) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      const objectUrl = URL.createObjectURL(file);
      image.onload = () => resolve({ image, objectUrl });
      image.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        reject(new Error('Image decoding failed.'));
      };
      image.src = objectUrl;
    });
  }

  function canvasToBlob(canvas) {
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Canvas image export failed.'));
      }, 'image/png');
    });
  }

  async function createPng(image, size) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Canvas is not available.');

    const padding = size * 0.1;
    const scale = Math.min((size - padding * 2) / image.naturalWidth, (size - padding * 2) / image.naturalHeight);
    const width = image.naturalWidth * scale;
    const height = image.naturalHeight * scale;
    context.drawImage(image, (size - width) / 2, (size - height) / 2, width, height);
    return canvasToBlob(canvas);
  }

  async function createIco(image) {
    const sizes = [16, 32, 48];
    const pngs = await Promise.all(sizes.map(async (size) => new Uint8Array(await (await createPng(image, size)).arrayBuffer())));
    const directorySize = 6 + sizes.length * 16;
    const totalSize = directorySize + pngs.reduce((sum, png) => sum + png.length, 0);
    const buffer = new ArrayBuffer(totalSize);
    const view = new DataView(buffer);
    const bytes = new Uint8Array(buffer);

    view.setUint16(0, 0, true);
    view.setUint16(2, 1, true);
    view.setUint16(4, sizes.length, true);
    let offset = directorySize;
    pngs.forEach((png, index) => {
      const entry = 6 + index * 16;
      view.setUint8(entry, sizes[index]);
      view.setUint8(entry + 1, sizes[index]);
      view.setUint8(entry + 2, 0);
      view.setUint8(entry + 3, 0);
      view.setUint16(entry + 4, 1, true);
      view.setUint16(entry + 6, 32, true);
      view.setUint32(entry + 8, png.length, true);
      view.setUint32(entry + 12, offset, true);
      bytes.set(png, offset);
      offset += png.length;
    });
    return new Blob([buffer], { type: 'image/x-icon' });
  }

  fileInput.addEventListener('change', async () => {
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;
    const currentLoadId = ++loadId;
    downloadButton.disabled = true;
    currentImage = null;
    if (currentObjectUrl) URL.revokeObjectURL(currentObjectUrl);
    currentObjectUrl = '';
    preview.removeAttribute('src');
    preview.classList.add('hidden');
    fileName.textContent = '';

    if (!supportedTypes.includes(file.type)) {
      setStatus(messages.invalidType, true);
      return;
    }
    if (file.size === 0) {
      setStatus(messages.empty, true);
      return;
    }
    if (file.size > maxFileSize) {
      setStatus(messages.tooLarge, true);
      return;
    }

    try {
      const loaded = await loadImage(file);
      if (currentLoadId !== loadId) {
        URL.revokeObjectURL(loaded.objectUrl);
        return;
      }
      currentImage = loaded.image;
      currentObjectUrl = loaded.objectUrl;
      fileName.textContent = file.name;
      preview.src = currentObjectUrl;
      downloadButton.disabled = false;
      setStatus(messages.ready);
    } catch (error) {
      if (currentLoadId !== loadId) return;
      console.error('Failed to load favicon source image.', error);
      setStatus(messages.loadError, true);
    }
  });

  downloadButton.addEventListener('click', async () => {
    if (!currentImage) return;
    const image = currentImage;
    downloadButton.disabled = true;
    fileInput.disabled = true;
    setStatus(messages.processing);
    try {
      const zip = new JSZip();
      zip.file('favicon.ico', await createIco(image));
      zip.file('favicon-16x16.png', await createPng(image, 16));
      zip.file('favicon-32x32.png', await createPng(image, 32));
      zip.file('apple-touch-icon.png', await createPng(image, 180));
      const archive = await zip.generateAsync({ type: 'blob' });
      const archiveUrl = URL.createObjectURL(archive);
      const link = document.createElement('a');
      link.href = archiveUrl;
      link.download = 'favicon-package.zip';
      document.body.append(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(archiveUrl), 1000);
      setStatus(messages.ready);
    } catch (error) {
      console.error('Failed to generate favicon package.', error);
      setStatus(messages.downloadError, true);
    } finally {
      downloadButton.disabled = false;
      fileInput.disabled = false;
    }
  });

  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(htmlSnippet.value);
      setStatus(messages.copySuccess);
    } catch (error) {
      console.error('Failed to copy favicon HTML.', error);
      setStatus(messages.copyError, true);
      htmlSnippet.focus();
      htmlSnippet.select();
    }
  });

  window.addEventListener('pagehide', () => {
    if (currentObjectUrl) URL.revokeObjectURL(currentObjectUrl);
  });
})();
