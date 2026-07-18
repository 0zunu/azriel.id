---
title: "Kontak"
draft: false
description: "Silakan gunakan formulir di bawah ini jika Anda ingin menghubungi saya terkait pekerjaan saya."
type: "page"
layoutBackgroundHeaderSpace: false
showViews: false
showLikes: false
showSummary: false
sharingLinks: false
showTaxonomies: false
showWordCount: false
showHeadingAnchors: false
showDateOnlyInArticle: false
showDateUpdated: true
showDate: false
date: 2025-04-28
showComments: false
showPagination: false
showReadingTime: false
showRelatedContent: false
showTableOfContents: true
showRelated: false
showAuthor: false
showShareLinks: false
---

Silakan gunakan formulir di bawah ini jika Anda ingin menghubungi saya terkait pekerjaan saya.

<form id="contact-form" name="contact" action="/success/" method="POST" data-netlify="true">
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
  <div>
    <label class="block text-orange-800 dark:text-orange-300 text-sm font-bold mb-2" for="name">
    Nama Anda
    </label>
    <input class="shadow appearance-none border border-orange-300 dark:border-orange-700 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 dark:bg-neutral-800 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" id="name" name="name" type="text" placeholder="Jhon Doe" required="required">
  </div>
  <div>
    <label class="block text-orange-800 dark:text-orange-300 text-sm font-bold mb-2" for="email">
    Email Anda
    </label>
    <input class="shadow appearance-none border border-orange-300 dark:border-orange-700 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 dark:bg-neutral-800 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" id="email" name="email" type="email" placeholder="jhon@gmail.com" required="required">
  </div>
</div>
<div class="mt-4 mb-4">
    <label class="block text-orange-800 dark:text-orange-300 text-sm font-bold mb-2" for="subject">
    Subject
    </label>
    <input class="shadow appearance-none border border-orange-300 dark:border-orange-700 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 dark:bg-neutral-800 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" id="subject" name="subject" type="text" placeholder="Subjek..." required="required">
</div>
<div class="mt-4 mb-6">
    <label class="block text-orange-800 dark:text-orange-300 text-sm font-bold mb-2" for="message">
    Pesan Anda
    </label>
    <textarea class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 dark:bg-neutral-800 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" id="message" name="message" type="message" placeholder="Hello World!" required="required" rows=5></textarea>
</div>
<button type="submit">
{{< button type="submit" class="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white" >}}
Kirim
{{< /button >}}
</form>

<script>
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function () {
    sessionStorage.setItem('contact-success-access', 'true');
  });
});
</script>
