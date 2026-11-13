(() => {
  const uploadInput = document.getElementById('imageUpload');
  const dropzoneLabel = document.getElementById('dropzoneLabel');
  const uploadSection = document.getElementById('uploadSection');
  const resultSection = document.getElementById('resultSection');
  const modeToggleArea = document.getElementById('modeToggleArea');
  const btnSmaller = document.getElementById('btnSmaller');
  const btnHigherQuality = document.getElementById('btnHigherQuality');
  const modeDescription = document.getElementById('modeDescription');
  const fileNameTxt = document.getElementById('fileName');
  const txtSizeOld = document.getElementById('txtSizeOld');
  const txtSizeNew = document.getElementById('txtSizeNew');
  const badgePercent = document.getElementById('badgePercent');
  const statSizeOld = document.getElementById('statSizeOld');
  const statSizeNew = document.getElementById('statSizeNew');
  const statPercent = document.getElementById('statPercent');
  const btnDownload = document.getElementById('btnDownload');
  const btnReset = document.getElementById('btnReset');
  const compareSlider = document.getElementById('compareSlider');
  const imgOriginal = document.getElementById('imgOriginal');
  const imgCompressed = document.getElementById('imgCompressed');
  const sliderLine = document.getElementById('sliderLine');
  const sliderButton = document.getElementById('sliderButton');
  const uploadError = document.getElementById('uploadError');
  const processingStatus = document.getElementById('processingStatus');

  const requiredElements = [
    uploadInput,
    dropzoneLabel,
    uploadSection,
    resultSection,
    modeToggleArea,
    btnSmaller,
    btnHigherQuality,
    modeDescription,
    fileNameTxt,
    txtSizeOld,
    txtSizeNew,
    badgePercent,
    statSizeOld,
    statSizeNew,
    statPercent,
    btnDownload,
    btnReset,
    compareSlider,
    imgOriginal,
    imgCompressed,
    sliderLine,
    sliderButton,
    uploadError,
    processingStatus,
  ];
  if (requiredElements.some((element) => !element)) {
    console.error('Image compressor initialization failed: required page elements are missing.');
    return;
  }

  const isIndonesian = document.documentElement.lang.toLowerCase().startsWith('id');
  const messages = isIndonesian
    ? {
        invalidType: 'Pilih file JPG, PNG, WebP, AVIF, atau GIF.',
        fileTooLarge: 'Ukuran file melebihi batas 50 MB.',
        emptyFile: 'File gambar kosong dan tidak dapat diproses.',
        preparing: 'Menyiapkan gambar...',
        compressing: 'Mengompres gambar...',
        openError: 'Gambar tidak dapat dibuka. Silakan pilih file lain.',
        browserError: 'Browser tidak dapat memproses gambar ini.',
        processingError: 'Terjadi kesalahan saat memproses gambar.',
        createError: 'Gambar hasil kompresi tidak dapat dibuat. Coba gambar lain.',
        webpError: 'Browser tidak mendukung ekspor WebP.',
        done: 'Selesai. Geser untuk membandingkan gambar.',
        highQuality: 'Kualitas visual lebih tinggi dengan kompresi WebP.',
        smaller: 'Ukuran file lebih kecil dengan sedikit penurunan kualitas visual.',
        smallerResult: 'lebih kecil',
        largerResult: 'lebih besar',
        highQualityFile: 'kualitas-tinggi',
        smallerFile: 'ukuran-kecil',
      }
    : {
        invalidType: 'Choose a JPG, PNG, WebP, AVIF, or GIF file.',
        fileTooLarge: 'File size exceeds the 50 MB limit.',
        emptyFile: 'The image file is empty and cannot be processed.',
        preparing: 'Preparing image...',
        compressing: 'Compressing image...',
        openError: 'Unable to open the image. Please choose another file.',
        browserError: 'Your browser cannot process this image.',
        processingError: 'An error occurred while processing the image.',
        createError: 'Could not create the compressed image. Try another image.',
        webpError: 'Your browser does not support WebP export.',
        done: 'Done. Move the slider to compare the images.',
        highQuality: 'Higher visual quality with WebP compression.',
        smaller: 'Smaller files with a slight reduction in visual quality.',
        smallerResult: 'smaller',
        largerResult: 'larger',
        highQualityFile: 'high-quality',
        smallerFile: 'smaller-file',
      };

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

  function setDropzoneActive(active) {
    dropzoneLabel.classList.toggle('border-primary-500', active);
    dropzoneLabel.classList.toggle('bg-primary-100', active);
    dropzoneLabel.classList.toggle('dark:border-primary-400', active);
    dropzoneLabel.classList.toggle('dark:bg-neutral-700', active);
  }

  dropzoneLabel.addEventListener('dragover', (event) => {
    event.preventDefault();
    setDropzoneActive(true);
  });
  dropzoneLabel.addEventListener('dragleave', (event) => {
    event.preventDefault();
    setDropzoneActive(false);
  });
  dropzoneLabel.addEventListener('drop', (event) => {
    event.preventDefault();
    setDropzoneActive(false);
    if (event.dataTransfer.files.length) processFile(event.dataTransfer.files[0]);
  });
  uploadInput.addEventListener('change', () => {
    if (uploadInput.files.length) processFile(uploadInput.files[0]);
  });

  function setActiveMode(mode) {
    currentMode = mode;
    const isHighQuality = mode === 'high';
    const activeClasses = [
      'bg-primary-600',
      'text-white',
      'shadow-sm',
      'hover:bg-primary-500',
      'dark:bg-primary-500',
      'dark:hover:bg-primary-400',
    ];
    const inactiveClasses = [
      'border',
      'border-neutral-300',
      'bg-white',
      'text-neutral-800',
      'hover:border-primary-400',
      'hover:text-primary-600',
      'dark:border-neutral-700',
      'dark:bg-neutral-900',
      'dark:text-neutral-100',
      'dark:hover:border-primary-700',
      'dark:hover:text-primary-400',
    ];
    const activeButton = isHighQuality ? btnHigherQuality : btnSmaller;
    const inactiveButton = isHighQuality ? btnSmaller : btnHigherQuality;

    [btnSmaller, btnHigherQuality].forEach((button) => {
      button.classList.remove(...activeClasses, ...inactiveClasses);
    });
    activeButton.classList.add(...activeClasses);
    inactiveButton.classList.add(...inactiveClasses);
    activeButton.setAttribute('aria-pressed', 'true');
    inactiveButton.setAttribute('aria-pressed', 'false');
    activeButton.querySelector('.mode-check').classList.remove('hidden');
    inactiveButton.querySelector('.mode-check').classList.add('hidden');
    modeDescription.textContent = isHighQuality ? messages.highQuality : messages.smaller;
    if (originalFile) processCompression();
  }

  btnSmaller.addEventListener('click', () => setActiveMode('small'));
  btnHigherQuality.addEventListener('click', () => setActiveMode('high'));

  function processFile(file) {
    clearUploadError();
    if (!SUPPORTED_TYPES.includes(file.type)) {
      uploadInput.value = '';
      showUploadError(messages.invalidType);
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      uploadInput.value = '';
      showUploadError(messages.fileTooLarge);
      return;
    }
    if (file.size === 0) {
      uploadInput.value = '';
      showUploadError(messages.emptyFile);
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
    txtSizeNew.textContent = isIndonesian ? 'Memproses...' : 'Processing...';
    statSizeNew.textContent = '—';
    badgePercent.textContent = '—';
    statPercent.textContent = '—';
    processingStatus.textContent = messages.preparing;
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
    processingStatus.textContent = messages.compressing;
    btnDownload.disabled = true;
    revokeObjectUrl(compressedObjectUrl);
    compressedObjectUrl = null;
    imgCompressed.src = originalObjectUrl;

    image.onerror = () => {
      if (requestId === compressionId) processingStatus.textContent = messages.openError;
    };
    image.onload = () => {
      if (requestId !== compressionId) return;

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) {
        processingStatus.textContent = messages.browserError;
        return;
      }

      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      try {
        context.drawImage(image, 0, 0);
      } catch (error) {
        processingStatus.textContent = messages.processingError;
        console.error('Image compression failed while drawing to canvas.', error);
        return;
      }
      canvas.toBlob((blob) => {
        if (requestId !== compressionId) return;
        if (!blob) {
          processingStatus.textContent = messages.createError;
          return;
        }
        if (blob.type !== 'image/webp') {
          processingStatus.textContent = messages.webpError;
          return;
        }

        revokeObjectUrl(compressedObjectUrl);
        compressedObjectUrl = URL.createObjectURL(blob);
        imgCompressed.src = compressedObjectUrl;
        const compressedSize = formatBytes(blob.size);
        txtSizeNew.textContent = compressedSize;
        statSizeNew.textContent = compressedSize;
        const delta = Math.round(((file.size - blob.size) / file.size) * 100);
        const changeText = delta >= 0
          ? `${delta}% ${messages.smallerResult}`
          : `${Math.abs(delta)}% ${messages.largerResult}`;
        badgePercent.textContent = delta >= 0 ? `−${delta}%` : `+${Math.abs(delta)}%`;
        badgePercent.setAttribute('aria-label', changeText);
        statPercent.textContent = changeText;
        processingStatus.textContent = messages.done;
        btnDownload.disabled = false;
      }, 'image/webp', currentMode === 'high' ? 1 : 0.6);
    };
    image.src = originalObjectUrl;
  }

  compareSlider.addEventListener('input', (event) => {
    updateSliderUI(event.target.value);
  });

  btnDownload.addEventListener('click', () => {
    if (!compressedObjectUrl || !originalFile) return;
    const link = document.createElement('a');
    const baseName = originalFile.name.replace(/\.[^.]+$/, '');
    const suffix = currentMode === 'high' ? messages.highQualityFile : messages.smallerFile;
    link.href = compressedObjectUrl;
    link.download = `${baseName}_${suffix}.webp`;
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
    txtSizeNew.textContent = isIndonesian ? 'Memproses...' : 'Processing...';
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
