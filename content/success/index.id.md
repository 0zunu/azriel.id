---
title: "Pesan terkirim"
draft: false
description: "Pesan Anda telah berhasil dikirim."
type: "page"
layoutBackgroundHeaderSpace: false
showViews: false
showLikes: false
showSummary: false
sharingLinks: false
showTaxonomies: false
showWordCount: false
showHeadingAnchors: false
showDate: false
showDateUpdated: false
showComments: false
showPagination: false
showReadingTime: false
showRelatedContent: false
showTableOfContents: false
showRelated: false
showAuthor: false
showShareLinks: false
---

Terima kasih telah menghubungi saya. Pesan Anda telah berhasil dikirim.

Saya akan membalas pesan Anda sesegera mungkin.

{{< button href="/contact/" >}}Kembali ke formulir kontak{{< /button >}}

<script>
document.addEventListener('DOMContentLoaded', function () {
  const allowed = sessionStorage.getItem('contact-success-access');

  if (allowed !== 'true') {
    window.location.replace('/contact/');
    return;
  }

  sessionStorage.removeItem('contact-success-access');
});
</script>
