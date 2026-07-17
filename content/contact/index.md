---
title: "Contact"
draft: false
description: "Please use the form below if you would like to contact me about my work."
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
showDate: true
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

Please use the form below if you would like to contact me about my work.

<form name="contact" action="/contact/success" method="POST" data-netlify="true">
<div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
    Your name
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Jhon Doe" required="required">
</div>
<div class="mt-4 mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
    Your email
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="jhon@gmail.com" required="required">
</div>
<div class="mt-4 mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
    Your message
    </label>
    <textarea class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" type="message" placeholder="Hello World!" required="required" rows=5></textarea>
</div>
<button type="submit">
{{< button type="submit" >}}
Send
{{< /button >}}
</form>
