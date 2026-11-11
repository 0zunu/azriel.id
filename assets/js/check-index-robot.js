(() => {
  const form = document.getElementById('indexCheckForm');
  if (!form) return;

  const isIndonesian = document.documentElement.lang.toLowerCase().startsWith('id');
  const input = document.getElementById('indexCheckUrl');
  const button = document.getElementById('indexCheckButton');
  const status = document.getElementById('indexCheckStatus');
  const result = document.getElementById('indexCheckResult');
  const resultTitle = document.getElementById('indexCheckResultTitle');
  const robotsSummary = document.getElementById('indexCheckRobotsSummary');
  const canonical = document.getElementById('indexCheckCanonical');
  const robotsStatus = document.getElementById('indexCheckRobotsStatus');
  const robotsText = document.getElementById('indexCheckRobotsText');
  const sitemapStatus = document.getElementById('indexCheckSitemapStatus');
  const sitemapSummary = document.getElementById('indexCheckSitemapSummary');
  let requestId = 0;

  const messages = isIndonesian
    ? {
        checking: 'Memeriksa halaman dan petunjuk teknis...',
        invalid: 'Masukkan URL publik yang valid dengan alamat http:// atau https://.',
        failed: 'Halaman tidak dapat diperiksa. Pastikan URL dapat diakses publik dan situs mengizinkan permintaan lintas-origin (CORS).',
        noRobots: 'Tidak ada direktif robots pada HTML atau header yang dapat dibaca.',
        headerMayBeHidden: 'Header X-Robots-Tag mungkin tidak dapat dibaca karena pembatasan lintas-origin.',
        noindex: 'Ditemukan direktif noindex. Mesin pencari diminta untuk tidak mengindeks halaman ini.',
        indexable: 'Tidak ada direktif noindex pada HTML atau header yang ditemukan.',
        canonicalMissing: 'Tidak ditemukan.',
        fetchError: 'Tidak dapat mengambil berkas ini. Situs mungkin membatasi permintaan lintas-origin (CORS).',
        noRobotsFile: 'Tidak ditemukan (HTTP 404).',
        sitemapUnavailable: 'Tidak ada sitemap yang dapat diperiksa.',
        sitemapIndex: (count) => `Sitemap index berisi ${count} lokasi; sitemap anak belum diperiksa.`,
        sitemapUrls: (count) => `Sitemap berisi ${count} URL.`,
        notXml: 'Respons sitemap bukan dokumen XML yang valid.',
        invalidSitemap: 'Struktur XML sitemap tidak dikenali.',
        onlyFirst: 'Memeriksa sitemap pertama yang ditemukan.',
      }
    : {
        checking: 'Checking the page and technical directives...',
        invalid: 'Enter a valid public URL beginning with http:// or https://.',
        failed: 'The page could not be checked. Make sure the URL is publicly accessible and the site allows cross-origin (CORS) requests.',
        noRobots: 'No robots directives were found in the readable HTML or headers.',
        headerMayBeHidden: 'The X-Robots-Tag header may be hidden by cross-origin restrictions.',
        noindex: 'A noindex directive was found. Search engines are instructed not to index this page.',
        indexable: 'No noindex directive was found in the HTML or headers.',
        canonicalMissing: 'Not found.',
        fetchError: 'This file could not be fetched. The site may restrict cross-origin (CORS) requests.',
        noRobotsFile: 'Not found (HTTP 404).',
        sitemapUnavailable: 'No sitemap could be checked.',
        sitemapIndex: (count) => `Sitemap index contains ${count} locations; child sitemaps were not checked.`,
        sitemapUrls: (count) => `Sitemap contains ${count} URLs.`,
        notXml: 'The sitemap response is not valid XML.',
        invalidSitemap: 'The XML sitemap structure was not recognized.',
        onlyFirst: 'Checking only the first sitemap found.',
      };

  const setStatus = (message, isError = false) => {
    status.textContent = message;
    status.classList.toggle('hidden', !message);
    status.classList.toggle('text-red-600', isError);
    status.classList.toggle('dark:text-red-400', isError);
    status.classList.toggle('text-neutral-600', !isError);
    status.classList.toggle('dark:text-neutral-300', !isError);
  };

  const fetchText = async (url, maxBytes) => {
    const response = await fetch(url, {
      credentials: 'omit',
      redirect: 'follow',
      headers: { Accept: 'text/html, text/plain, application/xml, text/xml;q=0.9, */*;q=0.1' },
      signal: AbortSignal.timeout(12000),
    });

    const contentLength = Number(response.headers.get('Content-Length'));
    if (Number.isFinite(contentLength) && contentLength > maxBytes) {
      throw new Error('Response exceeds the size limit.');
    }

    if (!response.body) {
      const text = await response.text();
      if (new TextEncoder().encode(text).byteLength > maxBytes) throw new Error('Response exceeds the size limit.');
      return { response, text };
    }

    const reader = response.body.getReader();
    const chunks = [];
    let totalBytes = 0;
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        totalBytes += value.byteLength;
        if (totalBytes > maxBytes) {
          await reader.cancel();
          throw new Error('Response exceeds the size limit.');
        }
        chunks.push(value);
      }
    } finally {
      reader.releaseLock();
    }
    const bytes = new Uint8Array(totalBytes);
    let offset = 0;
    chunks.forEach((chunk) => {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    });
    return { response, text: new TextDecoder().decode(bytes) };
  };

  const getRobotsDirectives = (html, response) => {
    const document = new DOMParser().parseFromString(html, 'text/html');
    const directives = [];
    document.querySelectorAll('meta[name]').forEach((meta) => {
      if (/^(robots|googlebot)$/i.test(meta.getAttribute('name').trim())) {
        directives.push(meta.getAttribute('content') || '');
      }
    });
    const header = response.headers.get('X-Robots-Tag');
    if (header) directives.push(header);
    return { document, directives: directives.join(', ').split(/[,\s]+/).filter(Boolean) };
  };

  const inspectSitemap = (xml) => {
    const document = new DOMParser().parseFromString(xml, 'application/xml');
    if (document.querySelector('parsererror')) return messages.notXml;
    const rootName = document.documentElement.localName.toLowerCase();
    if (rootName === 'sitemapindex') {
      const count = document.getElementsByTagNameNS('*', 'sitemap').length;
      return messages.sitemapIndex(count);
    }
    if (rootName === 'urlset') {
      const count = document.getElementsByTagNameNS('*', 'url').length;
      return messages.sitemapUrls(count);
    }
    return messages.invalidSitemap;
  };

  const checkFile = async (url, maxBytes) => {
    try {
      const { response, text } = await fetchText(url, maxBytes);
      return { response, text };
    } catch (error) {
      console.error(`Failed to fetch ${url}.`, error);
      return null;
    }
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const thisRequest = ++requestId;
    let pageUrl;
    try {
      const value = input.value.trim();
      pageUrl = new URL(/^[a-z][a-z\d+.-]*:\/\//i.test(value) ? value : `https://${value}`);
      if (!['http:', 'https:'].includes(pageUrl.protocol) || !pageUrl.hostname) throw new Error('Invalid URL');
      pageUrl.hash = '';
    } catch (error) {
      setStatus(messages.invalid, true);
      result.classList.add('hidden');
      return;
    }

    button.disabled = true;
    setStatus(messages.checking);
    result.classList.add('hidden');

    try {
      const { response: pageResponse, text: html } = await fetchText(pageUrl.href, 1024 * 1024);
      if (!pageResponse.ok) throw new Error(`Page returned HTTP ${pageResponse.status}.`);
      if (thisRequest !== requestId) return;

      const finalPageUrl = new URL(pageResponse.url || pageUrl.href);
      const { document, directives } = getRobotsDirectives(html, pageResponse);
      const noindex = directives.some((directive) => /^(noindex|none)$/i.test(directive));
      const crossOrigin = finalPageUrl.origin !== location.origin;
      const canonicalElement = [...document.querySelectorAll('link[rel]')]
        .find((link) => link.relList.contains('canonical'));
      const canonicalUrl = canonicalElement?.getAttribute('href')?.trim();
      resultTitle.textContent = `${isIndonesian ? 'Hasil untuk' : 'Results for'} ${finalPageUrl.href}`;
      robotsSummary.textContent = directives.length
        ? (noindex ? messages.noindex : directives.join(', '))
        : (crossOrigin ? `${messages.noRobots} ${messages.headerMayBeHidden}` : messages.noRobots);
      if (directives.length && !noindex) {
        robotsSummary.textContent = `${messages.indexable} (${directives.join(', ')})${crossOrigin ? ` ${messages.headerMayBeHidden}` : ''}`;
      }
      canonical.replaceChildren();
      if (canonicalUrl) {
        const canonicalLink = document.createElement('a');
        canonicalLink.href = new URL(canonicalUrl, finalPageUrl).href;
        canonicalLink.textContent = canonicalLink.href;
        canonicalLink.className = 'text-primary-600 underline decoration-primary-500/40 underline-offset-2 hover:decoration-primary-600 dark:text-primary-400';
        canonical.append(canonicalLink);
      } else {
        canonical.textContent = messages.canonicalMissing;
      }
      result.classList.remove('hidden');
      setStatus('');

      const robotsUrl = new URL('/robots.txt', finalPageUrl);
      const robotsResult = await checkFile(robotsUrl.href, 256 * 1024);
      if (thisRequest !== requestId) return;
      let sitemapUrl = new URL('/sitemap.xml', finalPageUrl);
      let sitemapHint = '';
      if (!robotsResult) {
        robotsStatus.textContent = messages.fetchError;
      } else if (robotsResult.response.status === 404) {
        robotsStatus.textContent = messages.noRobotsFile;
      } else {
        robotsStatus.textContent = `HTTP ${robotsResult.response.status}: ${robotsResult.response.url || robotsUrl.href}`;
        robotsText.textContent = robotsResult.text;
        robotsText.classList.toggle('hidden', !robotsResult.text);
        const sitemapMatch = robotsResult.text.match(/^\s*Sitemap:\s*(\S+)/im);
        if (sitemapMatch) {
          try {
            sitemapUrl = new URL(sitemapMatch[1], finalPageUrl);
            sitemapHint = messages.onlyFirst;
          } catch (error) {
            console.error('Invalid sitemap URL in robots.txt.', error);
          }
        }
      }

      sitemapStatus.textContent = sitemapUrl.href;
      const sitemapResult = await checkFile(sitemapUrl.href, 2 * 1024 * 1024);
      if (thisRequest !== requestId) return;
      if (!sitemapResult) {
        sitemapSummary.textContent = messages.fetchError;
      } else {
        sitemapStatus.textContent = `HTTP ${sitemapResult.response.status}: ${sitemapResult.response.url || sitemapUrl.href}`;
        sitemapSummary.textContent = sitemapResult.response.ok
          ? [inspectSitemap(sitemapResult.text), sitemapHint].filter(Boolean).join(' ')
          : messages.sitemapUnavailable;
      }
    } catch (error) {
      if (thisRequest !== requestId) return;
      console.error('Failed to check index readiness.', error);
      setStatus(messages.failed, true);
    } finally {
      if (thisRequest === requestId) button.disabled = false;
    }
  });
})();
