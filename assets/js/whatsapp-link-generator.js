import QRCode from 'qrcode';
import { getCountries, getCountryCallingCode } from 'libphonenumber-js';

(() => {
  const countrySelect = document.getElementById('whatsappCountry');
  const phoneInput = document.getElementById('whatsappPhone');
  const messageInput = document.getElementById('whatsappMessage');
  if (!countrySelect || !phoneInput) return;

  const isIndonesian = document.documentElement.lang.toLowerCase().startsWith('id');
  const displayNames = new Intl.DisplayNames([isIndonesian ? 'id' : 'en'], { type: 'region' });
  const countries = getCountries()
    .map((country) => ({
      code: country,
      name: displayNames.of(country) || country,
      callingCode: getCountryCallingCode(country),
    }))
    .sort((a, b) => a.name.localeCompare(b.name, isIndonesian ? 'id' : 'en'));

  countrySelect.replaceChildren(...countries.map(({ code, name, callingCode }) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = `${name} (+${callingCode})`;
    return option;
  }));
  countrySelect.value = 'ID';

  const messages = isIndonesian
    ? {
        invalid: 'Masukkan kode negara dan nomor WhatsApp yang valid.',
        initial: 'Isi kode negara dan nomor WhatsApp yang valid untuk menghasilkan link.',
        copySuccess: 'Link berhasil disalin.',
        copyError: 'Link tidak dapat disalin. Silakan salin link secara manual.',
        qrError: 'QR code gagal dibuat. Silakan coba lagi.',
        downloadError: 'QR code gagal diunduh. Silakan coba lagi.',
        qrLoading: 'Membuat QR code...',
      }
    : {
        invalid: 'Enter a valid country code and WhatsApp number.',
        initial: 'Enter a valid country code and WhatsApp number to generate a link.',
        copySuccess: 'Link copied.',
        copyError: 'Could not copy the link. Please copy it manually.',
        qrError: 'Could not generate the QR code. Please try again.',
        downloadError: 'Could not download the QR code. Please try again.',
        qrLoading: 'Generating QR code...',
      };

  const status = document.getElementById('whatsappStatus');
  const result = document.getElementById('whatsappResult');
  const linkText = document.getElementById('whatsappLink');
  const testLink = document.getElementById('testWhatsappLink');
  const qrImage = document.getElementById('whatsappQrCode');
  const qrLoading = document.getElementById('whatsappQrLoading');
  const copyButton = document.getElementById('copyWhatsappLink');
  const pngButton = document.getElementById('downloadWhatsappPng');
  const svgButton = document.getElementById('downloadWhatsappSvg');
  let currentLink = '';
  let currentPng = '';
  let generation = 0;

  const getPhoneNumber = (country, phoneValue) => {
    let phone = phoneValue.replace(/\D/g, '');
    if (phone.startsWith('0')) phone = phone.slice(1);
    const internationalNumber = `${getCountryCallingCode(country)}${phone}`;
    return /^\d{8,15}$/.test(internationalNumber) && phone ? internationalNumber : '';
  };

  const setStatus = (message, isError = false) => {
    status.textContent = message;
    status.classList.toggle('hidden', !message);
    status.classList.toggle('text-red-600', isError);
    status.classList.toggle('dark:text-red-400', isError);
    status.classList.toggle('text-neutral-500', !isError);
    status.classList.toggle('dark:text-neutral-400', !isError);
  };

  const downloadFile = (url, filename) => {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
  };

  const updateLink = async () => {
    const phone = getPhoneNumber(countrySelect.value, phoneInput.value);
    const currentGeneration = ++generation;
    currentPng = '';

    if (!phone) {
      currentLink = '';
      result.classList.add('hidden');
      setStatus(phoneInput.value.trim() ? messages.invalid : messages.initial, Boolean(phoneInput.value.trim()));
      return;
    }

    const message = messageInput.value.trim();
    const messageQuery = message ? `?text=${encodeURIComponent(message)}` : '';
    currentLink = `https://wa.me/${phone}${messageQuery}`;
    linkText.textContent = currentLink;
    testLink.href = currentLink;
    qrImage.classList.add('hidden');
    qrImage.removeAttribute('src');
    qrLoading.textContent = messages.qrLoading;
    qrLoading.classList.remove('hidden');
    result.classList.remove('hidden');
    pngButton.disabled = true;
    svgButton.disabled = true;
    setStatus('');

    try {
      const png = await QRCode.toDataURL(currentLink, {
        errorCorrectionLevel: 'H',
        margin: 4,
        width: 512,
        color: { dark: '#000000', light: '#ffffff' },
      });
      if (currentGeneration !== generation) return;
      currentPng = png;
      qrImage.src = png;
      qrImage.classList.remove('hidden');
      qrLoading.classList.add('hidden');
      pngButton.disabled = false;
      svgButton.disabled = false;
    } catch (error) {
      if (currentGeneration !== generation) return;
      qrLoading.textContent = messages.qrError;
      console.error('Failed to generate WhatsApp QR code.', error);
    }
  };

  countrySelect.addEventListener('change', updateLink);
  phoneInput.addEventListener('input', updateLink);
  messageInput.addEventListener('input', updateLink);
  copyButton.addEventListener('click', async () => {
    if (!currentLink) return;
    try {
      await navigator.clipboard.writeText(currentLink);
      setStatus(messages.copySuccess);
    } catch (error) {
      console.error('Failed to copy WhatsApp link.', error);
      setStatus(messages.copyError, true);
    }
  });
  pngButton.addEventListener('click', () => {
    if (currentPng) downloadFile(currentPng, 'whatsapp-qr.png');
  });
  svgButton.addEventListener('click', async () => {
    if (!currentLink) return;
    try {
      const svg = await QRCode.toString(currentLink, {
        errorCorrectionLevel: 'H',
        margin: 4,
        type: 'svg',
        width: 512,
        color: { dark: '#000000', light: '#ffffff' },
      });
      downloadFile(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`, 'whatsapp-qr.svg');
    } catch (error) {
      console.error('Failed to download WhatsApp QR code.', error);
      setStatus(messages.downloadError, true);
    }
  });
})();
