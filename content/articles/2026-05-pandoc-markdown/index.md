---
title: "Pandoc #02: Markdown"
summary: "A comprehensive guide to writing documents using Pandoc version Markdown syntax, covering text formatting, tables, program code, images, as well as footnotes and references."
description: "A comprehensive guide to writing documents using Pandoc version Markdown syntax, covering text formatting, tables, program code, images, as well as footnotes and references."
categories: ["Pandoc"]
tags: ["markdown", "writing", "documentation"]
series: ["Pandoc Book"]
series_order: 2
date: 2026-05-28T05:02:50+07:00
draft: false
---

## Markdown Syntax

To write a book, we use markdown syntax. Markdown was first created by John Gruber. The following is the philosophy of Markdown according to John Gruber.

> A Markdown-formatted document should be publishable as-is, as plain
> text, without looking like it's been marked up with tags or formatting
> instructions.
> -- [John Gruber](http://daringfireball.net/projects/markdown/syntax#philosophy)

Loosely translated as follows.

> A Markdown-formatted document should be publishable as-is in the form of _plain text_,
> without looking like it has been decorated with certain formatting commands.

The original Markdown version by John Gruber has several shortcomings,
among them he did not explain
how to create tables.
Besides John Gruber's version,
there are also other versions like MultiMarkdown and Pandoc.

We will use the more complete Pandoc version, because it already supports:

- tables
- source code highlighting
- covers
- footnotes

Next, we will discuss how to format text using Pandoc's markdown syntax.

### Paragraphs

A paragraph is one or more lines of text. One paragraph and another are separated by a blank line.
Line breaks that we type do not determine the line breaks in the final result,
so we can break lines as we please. If we want the final result to also have a line break,
we can use double spaces at the end of the line, or a backslash (\\) followed by a new line.

### Headers

There are two types of header writing, setext and atx. We will only discuss atx.

Atx-headers start with one to six `#` characters. Here are examples:

    # Chapter 1

    ## Subchapter 1.1

    ### Sub-subchapter 1.1.1

We may add a trailing `#` or omit it. The following example:

    # Chapter 1

is the same as this:

    # Chapter 1 #

#### Providing IDs for Headers

When converted to HTML, each header will be given an id so that it can be linked.
Here are the rules for assigning an id:

- All formatting, links, etc., are removed.
- All punctuation is removed except underscores, hyphens, and periods.
- Replace spaces and line breaks with hyphens.
- All letters are made lowercase.
- All strange characters are removed up to the first letter (an id cannot start with a number or punctuation).
- If nothing is left, use the id `section`.

For example:

Header Identifier

---

Header identifiers in HTML `header-identifiers-in-html`
_Dogs_?--in _my_ house? `dogs--in-my-house`
[HTML], [S5], or [RTF]? `html-s5-or-rtf` 3. Applications `applications`
33 `section`

If an identical identifier is found during the process, a sequence number will be added,
for example `section-1`, `section-2`, and so on.

This identifier can be used as a link within the document,
like this:

    Please see the
    [explanation about markdown syntax](#markdown-syntax).

Additionally, this identifier is also used in creating a table of contents.

### Blockquotes

To display a quote, we use a syntax like when replying to an email,
which is using the `>` marker. This marker can be written just at the beginning of the quote like this:

    > The difference between stupidity and genius
    is that genius has its limits.

And it can also be on every line like this:

    > Have you ever noticed that
    > anybody driving slower than you is an idiot,
    > and anyone going faster than you is a maniac?

Except at the beginning of a file, quotes must be preceded by a blank line.

Here is an example of how a quote is displayed.

> When you borrow five thousand from a bank and you can’t pay back,
> you’ve got a problem.
> When you borrow five million from a bank and you can’t pay back,
> they’ve got a problem.

### Program Code

To display program code, we use three backticks (`), like this:

    ```
    System.out.println("Hello world");
    ```

This will produce a display like this:

```
System.out.println("Hello world");
```

We can activate _syntax highlighting_ by listing the type of programming language used.

    ```java
    System.out.println("Hello world");
    ```

This will produce a display like this:

```java
System.out.println("Hello world");
```

If we output to PDF, this second example will
be colored according to the selected programming language keywords.

### Lists and Numbers

#### Lists

Lists start with the \*, +, or - sign. Here's an example:

    * apple
    * mango
    * durian

If it is too long, we are free to break lines, like this:

    * markdown. This is a
      format invented by John Gruber
    * docbook
    * latex

We can also create a list within a list, like this:

    * fruits
        + apple
        + mango
            - indramayu
            - harum manis
        + durian

    * vegetables
        + water spinach
        + spinach

The requirement is that the second level list must be indented by 4 spaces. The example above will produce a display like this:

- fruits
  - apple
  - mango
    - indramayu
    - harum manis
  - durian
- vegetables
  - water spinach
  - spinach

#### Numbers

Generally speaking, numbered lists are the same as bulleted lists. The difference is only in the marker characters.
Numbers are indicated with digits like this:

    1. Adi
    2. Awan
    3. Ifnu

The numbers don't have to be sequential, this is also okay:

    1. Adi
    3. Awan
    1. Ifnu

The starting number will follow the first number we use. If we write it like this:

    4. Adi
    2. Awan
    3. Ifnu

then the result is

    4. Adi
    5. Awan
    6. Ifnu

Besides using Arabic numerals, we can also use letters and Roman numerals. Moreover, there are still other features like example numbering, how to interrupt lists, and so on. Details can be seen in the [Pandoc documentation](http://johnmacfarlane.net/pandoc/README.html).

### Horizontal Rules

A line consisting of three or more `*`, `-`, or `_` characters
consecutively (may be separated by spaces)
will be converted into a horizontal line.

Here is an example:

    ***
    hello
    - - -

will produce an output like this:

---

### Tables

Here are examples of how to write tables:

      Right     Left     Center     Default
    -------     ------ ----------   -------
         12     12        12            12
        123     123       123          123
          1     1          1             1

    Table:  A simple table example.

Which will produce a table like this:

Right Left Center Default

---

     12     12        12            12
    123     123       123          123
      1     1          1             1

Table: A simple table example.

From the example above, we can also understand how to make right-aligned, left-aligned, and centered.
In addition, we can also provide a table title.

If one row consists of multiple lines, for example like this:

    -------------------------------------------------------------
      Centered  Default            Right Left
       Align    Aligned           Align Align
    ----------- ------- --------------- -------------------------
      First     hello              12.0 Example of a row with more
                                        than one line

      Second    try                 5.0 This is the second row. Rows
                                        are separated by a blank
                                        line.
    -------------------------------------------------------------

    Table: This is the label.
    Labels can also be multi-line

The result is like this:

---

Centered Default Right Left
Align Align Align Align

---

First hello 12.0 Example of a row with more
than one line

Second try 5.0 This is the second row. Rows
are separated by a blank
line.

---

Table: This is the label.
Labels can also be multi-line

### Cover

To create a book cover, we must create a file containing a title block like this:

    % Using Pandoc and Markdown
    % Ulee
    % 27 January 2024

The first line is the title, the second line is the author, and the third line is the date of writing.
If there is more than one author, it is written like this:

    % Using Pandoc and Markdown
    % Ulee
      Fona
    % 27 January 2024

### Backslash

Except in code blocks or inline code, all punctuation and spaces preceded by a backslash
will be written as they are, including formatting characters. Example:

    *\*hello\**

will produce

    <em>*hello*</em>

instead of

    <strong>hello</strong>

### Inline Formatting

#### Italics

To make _italics_, use the `*` or `_` character. For example:

    Writing program code in Java is _case sensitive_.
    Unlike SQL which is *case insensitive*.

The example above will produce a display like this:

> Writing program code in Java is _case sensitive_.
> Unlike SQL which is _case insensitive_.

#### Bold

**Bold** text is similar to italics, but uses two characters.
For example:

    Writing program code in Java is __case sensitive__.
    Unlike SQL which is **case insensitive**.

The example above will produce a display like this:

> Writing program code in Java is **case sensitive**.
> Unlike SQL which is **case insensitive**.

#### Strikeout

To write a ~~correction~~, use \~\~ like this:

    The weakness of the Spring Framework is
    ~~the necessity to write many xml files~~.

#### Verbatim

Verbatim means as is, not converted into anything. To create verbatim, we use backticks like this:

    To compare numbers, use the greater than sign `>`

### Links

#### Automatic Links

Markdown can automatically convert text into links, provided they are enclosed in angle brackets.
Here's an example:

    <http://azriel.id>
    <fidzlieazriel@gmail.com>

#### Inline Links

Links and their destination URLs can be directly combined into one part.

To display a link to a specific website, the format is like this:

    Please see
    [my website](http://azriel.id/about "Azriel's Website")
    for more complete information.

There are three parts to creating a link:

1. The text to be linked. Written in square brackets `[]`
2. The URL for the link, written in parentheses `()`
3. The link title, written in parentheses, after the URL, enclosed in double quotes. This link title is optional, it can be present or not.

#### Reference Links

We can also separate the link and the destination URL with the following format:

    [link label][link id]

With the method above, the destination URL is not directly written next to its label.
We have to provide a reference to the destination URL in another part of the document (usually at the end) like this:

    [link id]: http://destination-url.com "Link Title"

The link id can be omitted, so the link id is the same as its label, like this:

    Please visit [my website]

At the end of the document, include its reference:

    [my website]: http://azriel.id "Azriel's Website"

#### Document Links

We can create links to other parts of the document, for example `headings`.
As we discussed in the [Providing IDs for Headers](#providing-ids-for-headers) section,
pandoc will create an id for every heading we define.

Here is an example:

    Please see the [Inline Formatting](#inline-formatting) section.

### Images

Displaying images is similar to links. The difference is, we put an exclamation mark in front of the square brackets. An example using a relative path is like this:

    ![ArtiVisi Logo](resources/logo-artivisi.png)

The example above will produce a display like this:

\begin{figure}[H]
\centering
\includegraphics{resources/logo-artivisi}
\caption{ArtiVisi Logo}
\end{figure}

If we notice, the ArtiVisi logo image above is slightly blurry.
Unlike the ArtiVisi logo on the front page.
The reason is because the resolution of the image above is only 90 dpi.
For the image to be sharp, the ideal resolution is 300 dpi.

This needs to be considered when inserting screenshots.
Generally, screenshot taking applications will produce images
with a resolution of 72 dpi, so it will certainly look blurrier than the logo above.
For the image to display well, we need to change its resolution to 300 dpi.

The image size also needs to be adjusted so that it is not too wide or too small
when converted into a PDF document. For an A4-sized PDF with the default \LaTeX book layout,
namely `\documentclass[a4]{book}`, an image size that fills one page
is approximately 1200 pixels wide and 1500 pixels high.

Image resolution and size can be edited using image processing applications like Gimp or Photoshop.
But keep in mind that enlarging the resolution and size will make the image blurry.
For that we need to take other actions such as _sharpening_, contrast adjustment, and others.

Here is the display of a screenshot edited in Gimp.

\begin{figure}[H]
\centering
\includegraphics{resources/setting-image}
\caption{Setting Image in Gimp}
\end{figure}

The image above is 1200 pixels wide and 741 pixels high with a resolution of 300dpi.

The description above explains to us that the screenshots we take
cannot simply be placed into a document just like that.
We must do some editing first with an image processing application like Gimp or Photoshop.

### Footnotes

Footnotes are written like this:

    This text has a footnote,[^1] and this one too.[^longnote]

    [^1]: Footnote number one.

    [^longnote]: A long multi-line footnote.

        The next paragraph is indented to show
        that it is part of the footnote above it.

            { program code example }

        Indentation can be just on the first line or
        the whole paragraph.

    This paragraph is not part of the footnote, because it is not indented.

The example above will produce the following display:

---

This text has a footnote,[^1] and this one too.[^longnote]

[^1]: Footnote number one.

[^longnote]: A long multi-line footnote.

    The next paragraph is indented to show
    that it is part of the footnote above it.

        { program code example }

    Indentation can be just on the first line or
    the whole paragraph.

This paragraph is not part of the footnote, because it is not indented.

---

Footnotes need an identifier, which is a label starting with `^` inside square brackets. This identifier must not contain spaces, tabs, or line breaks. The identifier is only used to connect the reference point with its footnote. While the numbering in the output will be calculated automatically.

### References and Bibliography

Pandoc also supports references (citations) to other people's writings, such as those usually listed as a bibliography. This is usually used if we create scientific writings such as journals, theses, or dissertations.

For more details, you can refer to the pandoc documentation.
