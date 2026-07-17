---
title: "Contact sent"
draft: false
description: "Your message has been sent successfully."
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

Thank you for reaching out. Your message has been sent successfully.

I will get back to you as soon as possible.

{{< button href="/contact/" >}}Back to contact form{{< /button >}}

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
