---
title: Image Compressor
draft: false
description: Reduce image file sizes directly in your browser. Your files stay on your device.
layout: "simple"
layoutBackgroundHeaderSpace: false
showViews: false
showLikes: false
showSummary: false
sharingLinks: false
showTaxonomies: false
showWordCount: false
showDateOnlyInArticle: false
showDateUpdated: false
showComments: false
showHeadingAnchors: false
showPagination: false
showReadingTime: false
showRelatedContent: false
showTableOfContents: false
showRelated: false
showAuthor: false
showDate: false
showShareLinks: false
---

Reduce image file sizes directly in your browser. Your files stay on your device and are never uploaded to a server.

<div class="image-compressor mx-auto mt-6 max-w-5xl space-y-6">
  <div id="modeToggleArea" class="hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800 sm:p-6">
    <p class="mb-3 text-sm font-semibold text-neutral-800 dark:text-neutral-200">Choose a compression setting</p>
    <div class="flex rounded-xl border border-neutral-200 bg-white p-1 dark:border-neutral-600 dark:bg-neutral-900" role="group" aria-label="Compression mode">
      <button id="btnSmaller" type="button" aria-pressed="false" class="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-100 sm:px-4">
        <svg class="mode-check hidden h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        <span>Smaller file</span>
      </button>
      <button id="btnHigherQuality" type="button" aria-pressed="true" class="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary-600 px-3 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:bg-primary-500 dark:hover:bg-primary-400 dark:focus-visible:ring-offset-neutral-800 sm:px-4">
        <svg class="mode-check h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        <span>Higher quality</span>
      </button>
    </div>
    <p id="modeDescription" class="mb-0 mt-3 text-sm text-neutral-600 dark:text-neutral-400">Higher visual quality with WebP compression.</p>
  </div>
  <div id="uploadSection">
    <label id="dropzoneLabel" for="imageUpload" class="group flex min-h-72 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-neutral-300 bg-white px-5 py-10 text-center transition-colors hover:border-primary-500 hover:bg-primary-100 dark:border-neutral-600 dark:bg-neutral-800 dark:hover:border-primary-400 dark:hover:bg-neutral-700 sm:py-14" style="border-style: dashed;">
      <span class="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-primary-100 text-primary-700 transition-transform group-hover:-translate-y-1 dark:bg-primary-900 dark:text-primary-300">
        <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
      </span>
      <span class="text-lg font-bold text-neutral-900 dark:text-neutral-100">Choose an image to get started</span>
      <span class="mt-2 text-sm text-neutral-600 dark:text-neutral-300">or drag and drop a file here</span>
      <span class="mt-5 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">JPG, PNG, WebP, AVIF, GIF · max. 50 MB</span>
      <input type="file" id="imageUpload" class="sr-only" accept="image/jpeg, image/png, image/webp, image/avif, image/gif" aria-describedby="uploadError" />
    </label>
    <p id="uploadError" class="mt-3 hidden rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-neutral-900 dark:text-red-300" role="alert"></p>
  </div>

  <!-- Result card -->
  <section id="resultSection" class="hidden overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800 sm:p-6">
    <!-- File information -->
    <div class="mb-6 flex items-center justify-between gap-4 border-b border-neutral-200 pb-5 dark:border-neutral-700">
      <div class="flex min-w-0 items-center gap-4">
        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        </div>
        <div class="min-w-0">
          <h3 id="fileName" class="mb-1 max-w-[220px] truncate text-base font-semibold text-neutral-900 dark:text-neutral-100 sm:max-w-sm">Image</h3>
          <p class="m-0 text-sm text-neutral-600 dark:text-neutral-300">
            <span id="txtSizeOld">0 KB</span> <span class="mx-1 text-neutral-400" aria-hidden="true">→</span> <span id="txtSizeNew" class="font-medium text-neutral-900 dark:text-neutral-100">Processing...</span>
          </p>
        </div>
      </div>
      <div id="badgePercent" class="rounded-full bg-green-100 px-3 py-1.5 text-sm font-bold text-green-800 dark:bg-green-900 dark:text-green-300" aria-label="File size change">
        —
      </div>
    </div>
    <!-- Image Slider Comparison -->
    <div class="group relative isolate w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900" id="sliderContainer">
      <img id="imgCompressed" class="block h-auto max-h-[60vh] w-full object-contain" alt="Compressed image" />
      <img id="imgOriginal" class="pointer-events-none absolute inset-0 h-full w-full object-contain" style="clip-path: inset(0 50% 0 0);" alt="" />
      <!-- Slider Controls -->
      <div id="sliderLine" class="pointer-events-none absolute inset-y-0 left-1/2 z-10 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_4px_rgba(0,0,0,0.5)] dark:bg-neutral-200"></div>
      <div id="sliderButton" class="pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-700 shadow-md transition-transform group-hover:scale-110 dark:bg-neutral-700 dark:text-neutral-100">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l-3 3 3 3m8-6l3 3-3 3"></path></svg>
      </div>
      <input type="range" id="compareSlider" min="0" max="100" value="50" class="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0" aria-label="Slide to compare the original and compressed images">
      <!-- Labels -->
      <div class="pointer-events-none absolute bottom-3 left-3 z-10 rounded-full bg-neutral-900/75 px-3 py-1 text-xs font-medium text-white">Original</div>
      <div class="pointer-events-none absolute bottom-3 right-3 z-10 rounded-full bg-neutral-900/75 px-3 py-1 text-xs font-medium text-white">Compressed</div>
    </div>
    <!-- Stats Grid -->
    <p id="processingStatus" class="mb-0 mt-3 min-h-5 text-sm text-neutral-500 dark:text-neutral-400" role="status" aria-live="polite"></p>
    <dl class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div class="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-900">
        <dt class="text-sm text-neutral-600 dark:text-neutral-400">Original size</dt>
        <dd id="statSizeOld" class="mb-0 mt-1 text-lg font-bold text-neutral-900 dark:text-neutral-100">0 KB</dd>
      </div>
      <div class="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-900">
        <dt class="text-sm text-neutral-600 dark:text-neutral-400">Compressed size</dt>
        <dd id="statSizeNew" class="mb-0 mt-1 text-lg font-bold text-neutral-900 dark:text-neutral-100">—</dd>
      </div>
      <div class="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-neutral-900">
        <dt class="text-sm text-green-800 dark:text-green-300">File size change</dt>
        <dd id="statPercent" class="mb-0 mt-1 text-lg font-bold text-green-900 dark:text-green-200">—</dd>
      </div>
    </dl>
    <div class="mt-5 flex flex-col gap-4 sm:flex-row">
      <button id="btnDownload" type="button" disabled class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-primary-500 dark:hover:bg-primary-400 dark:focus-visible:ring-offset-neutral-800">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
        Download image
      </button>
      <button id="btnReset" type="button" class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3 font-semibold text-neutral-800 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:focus-visible:ring-offset-neutral-800">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        Compress another image
      </button>
    </div>
  </section>
  <aside class="flex items-center gap-4 rounded-2xl border border-primary-200 bg-primary-100 p-4 dark:border-primary-900 dark:bg-primary-900 sm:p-6">
    <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary-700 dark:bg-neutral-800 dark:text-primary-300">
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    </span>
    <div>
      <h3 class="mb-1 text-base font-bold text-neutral-900 dark:text-neutral-100">Your privacy is protected</h3>
      <p class="mb-0 text-sm leading-6 text-neutral-700 dark:text-neutral-300">Images are processed directly on your device. No files are uploaded to or stored on a server.</p>
    </div>
  </aside>

</div>

<script>
(() => {
  // Elements
  const uploadInput = document.getElementById('imageUpload');
  const dropzoneLabel = document.getElementById('dropzoneLabel');
  const uploadSection = document.getElementById('uploadSection');
  const resultSection = document.getElementById('resultSection');
  const modeToggleArea = document.getElementById('modeToggleArea');
  
  // Toggles
  const btnSmaller = document.getElementById('btnSmaller');
  const btnHigherQuality = document.getElementById('btnHigherQuality');
  const modeDescription = document.getElementById('modeDescription');
  
  // Results Elements
  const fileNameTxt = document.getElementById('fileName');
  const txtSizeOld = document.getElementById('txtSizeOld');
  const txtSizeNew = document.getElementById('txtSizeNew');
  const badgePercent = document.getElementById('badgePercent');
  const statSizeOld = document.getElementById('statSizeOld');
  const statSizeNew = document.getElementById('statSizeNew');
  const statPercent = document.getElementById('statPercent');
  const btnDownload = document.getElementById('btnDownload');
  const btnReset = document.getElementById('btnReset');
  
  // Slider Elements
  const compareSlider = document.getElementById('compareSlider');
  const imgOriginal = document.getElementById('imgOriginal');
  const imgCompressed = document.getElementById('imgCompressed');
  const sliderLine = document.getElementById('sliderLine');
  const sliderButton = document.getElementById('sliderButton');
  const uploadError = document.getElementById('uploadError');
  const processingStatus = document.getElementById('processingStatus');

  const requiredElements = [
      uploadInput, dropzoneLabel, uploadSection, resultSection, modeToggleArea,
      btnSmaller, btnHigherQuality, modeDescription, fileNameTxt, txtSizeOld,
      txtSizeNew, badgePercent, statSizeOld, statSizeNew, statPercent,
      btnDownload, btnReset, compareSlider, imgOriginal, imgCompressed,
      sliderLine, sliderButton, uploadError, processingStatus
  ];
  if (requiredElements.some((element) => !element)) {
      console.error('Image compressor initialization failed: required page elements are missing.');
      return;
  }

  // State
  let originalFile = null;
  let currentMode = 'high';
  let originalObjectUrl = null;
  let compressedObjectUrl = null;
  let compressionId = 0;
  const MAX_FILE_SIZE = 50 * 1024 * 1024;
  const SUPPORTED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif'];

  function revokeObjectUrl(url) {
      if (url) URL.revokeObjectURL(url);
  }

  function formatBytes(bytes) {
      if (bytes === 0) return '0 Bytes';
      const units = ['Bytes', 'KB', 'MB', 'GB'];
      const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
      return `${(bytes / (1024 ** index)).toFixed(index === 0 ? 0 : 1)} ${units[index]}`;
  }

  function showUploadError(message) {
      uploadError.textContent = message;
      uploadError.classList.remove('hidden');
  }

  function clearUploadError() {
      uploadError.textContent = '';
      uploadError.classList.add('hidden');
  }

  function updateSliderUI(value) {
      imgOriginal.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
      sliderLine.style.left = `${value}%`;
      sliderButton.style.left = `${value}%`;
  }

  const setDropzoneActive = (active) => {
      dropzoneLabel.classList.toggle('border-primary-500', active);
      dropzoneLabel.classList.toggle('bg-primary-100', active);
      dropzoneLabel.classList.toggle('dark:border-primary-400', active);
      dropzoneLabel.classList.toggle('dark:bg-neutral-700', active);
  };

  dropzoneLabel.addEventListener('dragover', (e) => {
      e.preventDefault();
      setDropzoneActive(true);
  });
  dropzoneLabel.addEventListener('dragleave', (e) => {
      e.preventDefault();
      setDropzoneActive(false);
  });
  dropzoneLabel.addEventListener('drop', (e) => {
      e.preventDefault();
      setDropzoneActive(false);
      if (e.dataTransfer.files.length) processFile(e.dataTransfer.files[0]);
  });
  uploadInput.addEventListener('change', () => {
      if (uploadInput.files.length) processFile(uploadInput.files[0]);
  });

  function setActiveMode(mode) {
      currentMode = mode;
      const isHighQuality = mode === 'high';
      const activeClasses = ['bg-primary-600', 'text-white', 'shadow-sm', 'dark:bg-primary-500'];
      const inactiveClasses = ['text-neutral-700', 'dark:text-neutral-300'];
      const activeHoverClasses = ['hover:bg-primary-500', 'dark:hover:bg-primary-400'];
      const inactiveHoverClasses = ['hover:bg-neutral-100', 'dark:hover:bg-neutral-700', 'hover:text-neutral-900', 'dark:hover:text-neutral-100'];
      const activeButton = isHighQuality ? btnHigherQuality : btnSmaller;
      const inactiveButton = isHighQuality ? btnSmaller : btnHigherQuality;
      [btnSmaller, btnHigherQuality].forEach((button) => {
          button.classList.remove(...activeHoverClasses, ...inactiveHoverClasses);
      });
      activeButton.classList.add(...activeClasses);
      activeButton.classList.remove(...inactiveClasses);
      activeButton.classList.add(...activeHoverClasses);
      inactiveButton.classList.remove(...activeClasses);
      inactiveButton.classList.add(...inactiveClasses);
      inactiveButton.classList.add(...inactiveHoverClasses);
      activeButton.setAttribute('aria-pressed', 'true');
      inactiveButton.setAttribute('aria-pressed', 'false');
      activeButton.querySelector('.mode-check').classList.remove('hidden');
      inactiveButton.querySelector('.mode-check').classList.add('hidden');
      modeDescription.textContent = isHighQuality
          ? 'Higher visual quality with WebP compression.'
          : 'Smaller files with a slight reduction in visual quality.';
      if (originalFile) processCompression();
  }

  btnSmaller.addEventListener('click', () => setActiveMode('small'));
  btnHigherQuality.addEventListener('click', () => setActiveMode('high'));

  function processFile(file) {
      clearUploadError();
      if (!SUPPORTED_TYPES.includes(file.type)) {
          uploadInput.value = '';
          showUploadError('Choose a JPG, PNG, WebP, AVIF, or GIF file.');
          return;
      }
      if (file.size > MAX_FILE_SIZE) {
          uploadInput.value = '';
          showUploadError('File size exceeds the 50 MB limit.');
          return;
      }
      if (file.size === 0) {
          uploadInput.value = '';
          showUploadError('The image file is empty and cannot be processed.');
          return;
      }

      originalFile = file;
      compressionId += 1;
      revokeObjectUrl(originalObjectUrl);
      revokeObjectUrl(compressedObjectUrl);
      originalObjectUrl = URL.createObjectURL(file);
      compressedObjectUrl = null;
      imgOriginal.src = originalObjectUrl;
      imgCompressed.src = originalObjectUrl;
      fileNameTxt.textContent = file.name;
      txtSizeOld.textContent = formatBytes(file.size);
      statSizeOld.textContent = formatBytes(file.size);
      txtSizeNew.textContent = 'Processing...';
      statSizeNew.textContent = '—';
      badgePercent.textContent = '—';
      statPercent.textContent = '—';
      processingStatus.textContent = 'Preparing image...';
      btnDownload.disabled = true;
      uploadSection.classList.add('hidden');
      modeToggleArea.classList.remove('hidden');
      resultSection.classList.remove('hidden');
      compareSlider.value = 50;
      updateSliderUI(50);
      processCompression();
  }

  function processCompression() {
      if (!originalFile || !originalObjectUrl) return;

      const requestId = ++compressionId;
      const file = originalFile;
      const image = new Image();
      processingStatus.textContent = 'Compressing image...';
      btnDownload.disabled = true;
      revokeObjectUrl(compressedObjectUrl);
      compressedObjectUrl = null;
      imgCompressed.src = originalObjectUrl;

      image.onerror = () => {
          if (requestId === compressionId) {
              processingStatus.textContent = 'Unable to open the image. Please choose another file.';
          }
      };
      image.onload = () => {
          if (requestId !== compressionId) return;

          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          if (!context) {
              processingStatus.textContent = 'Your browser cannot process this image.';
              return;
          }

          canvas.width = image.naturalWidth;
          canvas.height = image.naturalHeight;
          try {
              context.drawImage(image, 0, 0);
          } catch (error) {
              processingStatus.textContent = 'An error occurred while processing the image.';
              console.error('Image compression failed while drawing to canvas.', error);
              return;
          }
          canvas.toBlob((blob) => {
              if (requestId !== compressionId) return;
              if (!blob) {
                  processingStatus.textContent = 'Could not create the compressed image. Try another image.';
                  return;
              }
              if (blob.type !== 'image/webp') {
                  processingStatus.textContent = 'Your browser does not support WebP export.';
                  return;
              }

              revokeObjectUrl(compressedObjectUrl);
              compressedObjectUrl = URL.createObjectURL(blob);
              imgCompressed.src = compressedObjectUrl;
              const compressedSize = formatBytes(blob.size);
              txtSizeNew.textContent = compressedSize;
              statSizeNew.textContent = compressedSize;
              const delta = Math.round(((file.size - blob.size) / file.size) * 100);
              const changeText = delta >= 0 ? `${delta}% smaller` : `${Math.abs(delta)}% larger`;
              badgePercent.textContent = delta >= 0 ? `−${delta}%` : `+${Math.abs(delta)}%`;
              badgePercent.setAttribute('aria-label', changeText);
              statPercent.textContent = changeText;
              processingStatus.textContent = 'Done. Move the slider to compare the images.';
              btnDownload.disabled = false;
          }, 'image/webp', currentMode === 'high' ? 1 : 0.6);
      };
      image.src = originalObjectUrl;
  }

  compareSlider.addEventListener('input', (e) => {
      updateSliderUI(e.target.value);
  });

  btnDownload.addEventListener('click', () => {
      if (!compressedObjectUrl || !originalFile) return;
      const link = document.createElement('a');
      const baseName = originalFile.name.replace(/\.[^.]+$/, '');
      link.href = compressedObjectUrl;
      link.download = `${baseName}_${currentMode === 'high' ? 'high-quality' : 'smaller-file'}.webp`;
      link.click();
  });

  btnReset.addEventListener('click', () => {
      compressionId += 1;
      uploadSection.classList.remove('hidden');
      modeToggleArea.classList.add('hidden');
      resultSection.classList.add('hidden');
      uploadInput.value = '';
      originalFile = null;
      revokeObjectUrl(originalObjectUrl);
      revokeObjectUrl(compressedObjectUrl);
      originalObjectUrl = null;
      compressedObjectUrl = null;
      imgOriginal.src = '';
      imgCompressed.src = '';
      txtSizeNew.textContent = 'Processing...';
      statSizeNew.textContent = '—';
      badgePercent.textContent = '—';
      statPercent.textContent = '—';
      processingStatus.textContent = '';
      btnDownload.disabled = true;
      clearUploadError();
      setActiveMode('high');
  });

  setActiveMode('high');
})();
</script>
