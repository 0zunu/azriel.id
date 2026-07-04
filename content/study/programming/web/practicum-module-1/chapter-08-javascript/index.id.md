---
title: "Web Programming I #08: JavaScript"
summary: "Membahas pengertian dasar dan penulisan script sederhana menggunakan Javascript, membahas tentang bagaimana step by step pembuatan dan penyimpanan file Javascript."
description: "Membahas pengertian dasar dan penulisan script sederhana menggunakan Javascript, membahas tentang bagaimana step by step pembuatan dan penyimpanan file Javascript."
categories: ["Web Programming I"]
tags: ["JavaScript"]
series: ["Web Programming I Module"]
series_order: 8
date: 2026-05-08T05:10:50+07:00
draft: false
---

Javascript adalah bahasa script yang populer di internet dan dapat bekerja di sebagian besar penjelajah web browser seperti Internet Explorer (IE), Mozilla Firefox, Netscape, opera dan web browser lainnya. Kode javascript biasa dituliskan dalam bentuk fungsi (Function) yang ditaruh di bagian dalam tag `<head>` yang dibuka dengan tag `<script language =” javascript”>`

Isi dari script javascript sama dengan konsep yang sudah dipelajari dalam materi PHP, yakni ada deklarasi variabel, penggunaan operator, percabangan, looping, dan fungsi. Di dalam java script juga sebuah komponen Alert yang digunakan untuk menampilkan kotak pesan pada browser ketika fungsinya di jalankan. Untuk berlatih deklarasi script pada javascript, salin contoh-contoh berikut ini pada editor anda. Dan jalankan pada browser, amati tampilannya.

## Latihan Javacsript :

#### 1. Menuliskan teks = contohjs1.html

```html
<html>
  <body>
    <script type="text/javascript">
      document.write("Hello World!");
    </script>
  </body>
</html>
```

#### 2. Memformat teks dengan tag HTML = contohjs2.html

```html
<html>
  <body>
    <script type="text/javascript">
      document.write("<h1>Hello World!</h1>");
    </script>
  </body>
</html>
```

#### 3. JavaScript yang diletakkan pada bagian HEAD = contohjs3.html

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

#### 4. JavaScript yang diletakkan pada bagian BODY = contohjs4.html

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

#### 5. Fungsi = contohjs5.html

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

#### 6. Fungsi dengan argumen = contohjs6.html

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

#### 7. Memunculkan tanggal lengkap = contohjs7.html

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
