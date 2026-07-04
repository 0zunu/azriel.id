---
title: "Web Programming I #08: JavaScript"
summary: "Discusses the basic concepts and writing simple scripts using Javascript, discusses step-by-step how to create and save Javascript files."
description: "Discusses the basic concepts and writing simple scripts using Javascript, discusses step-by-step how to create and save Javascript files."
categories: ["Web Programming I"]
tags: ["JavaScript"]
series: ["Web Programming I Module"]
series_order: 8
date: 2026-05-08T05:10:50+07:00
draft: false
---

Javascript is a scripting language that is popular on the internet and can work in most web browsers such as Internet Explorer (IE), Mozilla Firefox, Netscape, Opera and other web browsers. Javascript code is usually written in the form of a function (Function) which is placed inside the `<head>` tag which is opened with the `<script language="javascript">` tag.

The content of a Javascript script is the same as the concepts learned in the PHP material, namely there are variable declarations, use of operators, branching, looping, and functions. Inside javascript there is also an Alert component which is used to display a message box in the browser when the function is executed. To practice declaring scripts in javascript, copy the following examples into your editor. And run it in a browser, observe the appearance.

## Javascript Exercise :

#### 1. Writing text = contohjs1.html

```html
<html>
  <body>
    <script type="text/javascript">
      document.write("Hello World!");
    </script>
  </body>
</html>
```

#### 2. Formatting text with HTML tags = contohjs2.html

```html
<html>
  <body>
    <script type="text/javascript">
      document.write("<h1>Hello World!</h1>");
    </script>
  </body>
</html>
```

#### 3. JavaScript placed in the HEAD section = contohjs3.html

```html
<html>
  <head>
    <script type="text/javascript">

      function message()
      {
      alert("This alert box was called with the
              onload event")
      }
    </script>
  </head>
  <body onload="message()"></body>
</html>
```

#### 4. JavaScript placed in the BODY section = contohjs4.html

```html
<html>
  <head> </head>
  <body>
    <script type="text/javascript">
      document.write("This message is written
              when the page loads")
    </script>
  </body>
</html>
```

#### 5. Functions = contohjs5.html

```html
<html>
  <head>
    <script type="text/javascript">
      function myfunction() {
        alert("HELLO");
      }
    </script>
  </head>
  <body>
    <form>
      <input type="button" onclick="myfunction()" value="Panggil MyFunction" />
    </form>
    <p>tekan tombol untuk memanggil fungsi myfunction di dalam javascript</p>
  </body>
</html>
```

#### 6. Functions with arguments = contohjs6.html

```html
<html>
  <head>
    <script type="text/javascript">
      function myfunction(txt) {
        alert(txt);
      }
    </script>
  </head>
  <body>
    <form>
      <input
        type="button"
        onclick="myfunction('Good Morning!')"
        value="Selamat Pagi"
      />
      <input
        type="button"
        onclick="myfunction('Good Evening!')"
        value="Selamat Malam"
      />
    </form>
    <p>
      ketika di tekan salah satu tombol maka fungsi akan di panggil dan pesan
      akan di tampilkan
    </p>
  </body>
</html>
```

#### 7. Displaying full date = contohjs7.html

```html
<html>
  <body>
    <script type="text/javascript">
      var d = new Date();
      var weekday = new Array(
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      );
      var monthname = new Array(
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      );
      document.write(weekday[d.getDay()] + " ");
      document.write(d.getDate() + ". ");
      document.write(monthname[d.getMonth()] + " ");

      document.write(d.getFullYear());
    </script>
  </body>
</html>
```
