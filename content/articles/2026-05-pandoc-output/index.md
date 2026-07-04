---
title: "Pandoc #03: Output"
summary: "Pandoc to convert Markdown documents into various output formats such as PDF, HTML Presentation Slides, OpenOffice Writer documents, and HTML."
description: "Pandoc to convert Markdown documents into various output formats such as PDF, HTML Presentation Slides, OpenOffice Writer documents, and HTML."
categories: ["Pandoc"]
tags: ["output", "pdf", "html", "presentation slides", "openoffice"]
series: ["Pandoc Book"]
series_order: 3
date: 2026-05-29T05:02:50+07:00
draft: false
---

## Output

Markdown documents that we have written can be converted into various formats as needed.
Among the frequently used formats are:

- PDF : for printing or sending via email
- HTML : for displaying on a website
- Presentation Slides :
  actually the generated presentation slide format is HTML.
  But because its format is specific and different, we had better separate it.

### Some conventions

#### Command execution location

The conversion process is done by typing the `pandoc` command at the command prompt.
This command is executed in the folder location where the file to be processed is located.
If the file to be processed is in another folder,
I assume the reader already knows [how to write paths, either absolute or relative](<http://en.wikipedia.org/wiki/Path_(computing)>).

#### File Extension

Even though a markdown file can be given a `.txt` extension, we will use the `.md` extension
so that it can be displayed well in text editors like Gedit or Notepad++.

### PDF

#### Basic Commands

To generate a PDF file, the command is as follows:

```
pandoc -o output.pdf *.md
```

We can add a Table of Contents with the `--toc` option.
To number chapters and sub-chapters, include the `-N` option.

```
pandoc --toc -N -o output.pdf *.md
```

#### Using \LaTeX Templates

Specifically for ArtiVisi documents, I usually have included a separate \LaTeX template.
This template has options for changing fonts and placing a version number.
We need the Xetex engine for this template to be used.
Here is the command (run in one line):

```
pandoc \
--template artivisi-template.tex \
--variable mainfont="Droid Serif" \
--variable sansfont="Droid Sans" \
--variable fontsize=12pt \
--variable version=1.0 \
--latex-engine=xelatex --toc -N -o output.pdf *md
```

#### Manual Page Break

For PDF specifically, we usually want a neat and nice printed display.
The automatic layout provided by \LaTeX is sometimes not good at adjusting image placement,
so images often appear misaligned, not in accordance with the text sequence, which is caused by _page break_ settings.
For this reason, we need manual arrangement. The way to do this is to add a \LaTeX command like this:

```
First paragraph
\newpage
This paragraph will be written on a new page
```

This was explained by John MacFarlane via email

> There’s no general way to force page breaks, by the way.
> If you just want page breaks in PDF (via latex), you can insert a raw latex command,

```
\newpage
```

> This should be ignored in HTML and ODT output, so it will only affect latex and PDF via latex.

This `\newpage` command will be ignored if we produce HTML and ODT output.

#### Links and Footnotes

By default, all _hyperlinks_ that we write will be made into clickable links in the resulting PDF document.
This is good if we only read the PDF on a computer; if we want to open the link, we just click it and the browser will open.

But it's another matter if we want to print the PDF document. All links will only become blue text.
Therefore, we want to convert _hyperlinks_ into footnotes. This can be done with the `links-as-notes` variable like this:

```
pandoc -V links-as-notes -o output.pdf *.md
```

#### Without Color

Sometimes we want colorless PDF results so they can be printed without color ink.
The use of color in a black-and-white printer will cause the letter colors to not be perfectly black,
making the document difficult to photocopy.
For this, we can add the `--no-highlight` option so that the program code is not colored.
Besides program code, hyperlinks are also usually colored blue.
We can change that blue color to black through
the `linkcolor` and `urlcolor` variables. Here is the complete command:

```
pandoc \
-V urlcolor=black \
-V linkcolor=black \
--no-highlight \
-o markdown-and-pandoc-bw.pdf *md
```

### Presentation Slides

To generate presentation slides, the command is as follows:

```
pandoc -s --self-contained -t s5 -o slide.html using-pandoc.md
```

The command above will produce ready-to-use presentation slides, complete with standard colors and font settings from [S5](<http://en.wikipedia.org/wiki/S5_(file_format)>).

Sometimes we want to use other themes like those available at [S5 Reloaded](http://www.netzgesta.de/S5/).
For this, we do not produce complete presentation slides, but only the HTML so that later the theme can be changed as desired.

Use the following command:

```
pandoc -s -t s5 -o slide.html using-pandoc.md
```

After that, the resulting `slide.html` file can be edited, the contents of the `<head></head>` tags are replaced with those in the custom theme from S5 Reloaded.

So that _bullet points_ appear one by one, we need to provide the `-i` option, which is incremental.

```
pandoc -s --self-contained -i -t s5 -o slide.html using-pandoc.md
```

### Open Office

To generate an OpenOffice Writer file, the command is as follows:

```
pandoc -o output.odt *md
```

If we want to customize the style, namely setting the font type, font size, spacing between paragraphs, etc.,
we can edit the `output.odt` file and make it a template.

Once we have a template, we give it to pandoc with the `--reference-odt` option as follows:

```
pandoc --reference-odt=template.odt -o output.odt *md
```

### HTML

To generate HTML output, the command is as follows:

```
pandoc -o output.html *md
```

Like PDF, we can also create a table of contents:

```
pandoc --toc -N -o output.html *md
```

To make the table of contents appear, we need to provide the `-s` option, which is standalone. This means generating complete output with a cover page.

```
pandoc -s --toc -N -o output.html *md
```
