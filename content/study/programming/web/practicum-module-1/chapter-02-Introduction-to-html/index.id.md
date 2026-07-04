---
title: "Web Programming I #02: Pengenalan HTML"
summary: "Mampu mengenal skrip html, menggunakan ragam tag dan pendeklarasian tabel beserta atributnya, mampu menuliskan skrip dalam html"
description: "Mampu mengenal skrip html, menggunakan ragam tag dan pendeklarasian tabel beserta atributnya, mampu menuliskan skrip dalam html"
categories: ["Web Programming I"]
tags: ["learn", "coding", "web", "programming", "HTML"]
series: ["Web Programming I Module"]
series_order: 2
date: 2026-05-02T05:10:50+07:00
draft: false
---

Mampu mengenal skrip html, menggunakan ragam tag dan pendeklarasian tabel beserta atributnya, mampu menuliskan skrip dalam html

## Pengertian HTML (Hypertext Markup Language)

**Hypertext Markup Language (HTML)** adalah sebuah bahasa untuk menampilkan konten di web. HTML sendiri adalah bahasa pemrograman yang bebas, artinya tidak dimiliki oleh siapapun, pengembangannya dilakukan oleh banyak orang di banyak Negara dan bias dikatakan sebagai sebuah bahasa yang dikembangkan bersama-sama secara global.

Sebuah dokumen HTML sendiri adalah dokumen teks yang dapat diedit oleh editor teks apapun. Dokumen HTML punya beberapa elemen yang dikelilingi oleh tagteks yang dimulai dengan symbol < dan berakhir dengan sebuah symbol >.

Editor teks yang digunakan oleh penyusun adalah menggunakan Notepad dan XAMPP Versi 1.8.1 untuk web servernya dengan bahasa pemrograman PHP Versi 5.

## Struktur Dasar HTML

Elemen HTML dimulai dengan tag awal, yang diikuti dengan isi elemen dan tag akhir. Tag berakhir termasuksimbol / diikuti oleh tipe elemen, misalnya </HEAD>. Sebuah elemen HTML dapat bersarang di dalam elemen lainnya. Sebuah dokumen HTML standar terlihat seperti ini :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Judul Halaman Web</title>
  </head>
  <body></body>
</html>
```

Keterangan :

1. Tag HTML secara default dimulai dari `<HTML>` dan diakhiri dengan `</HTML>`.
2. Tag `<HEAD>`… `</HEAD>` merupakan tag kepala sebelum badan. Tag kepala ini akan terlebih dulu dieksekusi sebelum tag badan. Di dalam tag ini berisi tag `<META>` dan `<TITLE>`. Tag `<META>` merupakan informasi atau header suatu dokumen HTML. Atribut yang dimiliki oleh tag ini antara lain:

   a. HTTP_EQUIV, atribut ini berfungsi untuk menampilkan dokumen HTML secara otomatis dalam jangka waktu tertentu.

   b. CONTENT, atribut ini berisi informasi tentang isi document HTML yang akan
   dipanggil.

   c. NAME, atribut ini merupakan identifikasi dari meta itu sendiri. Tag `<META>` dalam suatu document HTML boleh ada maupun tidak.

3. Tag `<TITLE>` … `</TITLE>` adalah tag judul. Sebaiknya setiap halaman web memiliki judul, dan judul tersebut dituliskan di dalam `<TITLE>` … `</TITLE>`. Judul ini akan muncul dalam titlebar dari browser.
4. Tag `<BODY>` … `</BODY>` adalah tag berisi content dari suatu halaman web. **Contoh penggunaan script HTML** Buat lembar baru pada Notepad, kemudian ketikkan perintah di bawah ini. Simpan dengan nama **Contoh01.php**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Judul Web -->
    <title>Contoh 01</title>
  </head>
  <body>
    <!-- Perintah dibuat diantara -->
    <!-- <body> dan </body> -->
    Halo <br />
    ini script HTML pertamaku
  </body>
</html>
```

Kemudian simpan file di atas di dalam folder c:\XAMPP\htdocs\ buat folder baru untuk menyimpan file di dalam folder htdocs. Simpan file dengan nama contoh01.html. Pembuatan nama file pada saat penyimpanan harus diakhiri dengan extention “.html”

**Cara penyimpanan dengan Notepad, perhatikan cara berikut :**

![contoh01](contoh01.png)

Untuk melihat hasil dari file di atas dapat menggunakan browser Mozilla, google chrome, internet explorer atau jenis browser lain. Ketikkan pada address bar “Localhost\Nama Folder Penyimpanan\”, kemudian pilih file contoh01.html

Sebelum di ketikkan alamat file tersebut, pastikan anda telah menjalankan Module Apache pada Xampp Control Panel.

Lihat gambar dibawah ini:

![contoh02](contoh02.png)

Kode-kode dalam HTML biasanya disebut **TAG**. Tag adalah sesuatu yang digunakan untuk menandai elemen-elemen dalam suatu dokumen HTML. Tag dalam HTML terdiri dari tanda lebih kecil ( < ), tanda lebih besar ( > ), dan garismiring ( / ). Biasanya Tag dituliskan secara berpasangan, misanya `<h1>`dan `</h1>`. Tag yang tidak menggunakan garis miring ( / ) adalah Tag pembuka atau awal elemen. Sedangkan yang Tag yang mengandung garis miring ( / ) adalah penutup elemen atau akhir elemen. Namun, ada juga Tag yang dalam pemakaiannya tidak berpasangan, diantaranya adalah :

1. Tag untuk ganti paragraph yaitu `<p>`
2. Tag untuk ganti baris atau line break yaitu `<br>`
3. Tag untuk garis datar yaitu `<hr>`
4. Tag list item yaitu `<li>`

Untuk tag yang tidak berpasangan diatas, sebaiknya tetap ditulis menggunakan pasangannya. Hal ini dilakukan untuk mengantisipasi standar rekomendasi HTML kedepannya. Penulisan untuk semua Tag bebas, maksudnya kita bisa menggunakan huruf besar, huruf kecil, bahkan dicampur ( tidak case sensitive ). Tapi untuk mengantisipasi standar penulisan Tag, sebaiknya kita menggunakan huruf kecil semua.

Jenis – jenis tag dalam HTML :

### Tag Performatan

| Tag awal  | Kegunaan                                     |
| :-------- | :------------------------------------------- |
| `<b>`     | Definisi teks yang ditebalkan                |
| `<big>`   | Definisi teks yang besar ukurannya           |
| `<em>`    | Definisi teks yang ditekan                   |
| `<i>`     | Definisi teks yang dicetak miring ( italic ) |
| `<small>` | Definisi teks kecil ukurannya                |
| `<u>`     | Definisi teks yang bergaris bawah            |
| `<sub>`   | Definisi teks yang jadi subscript            |
| `<sup>`   | Definisi teks yang jadi superscript          |
| `<ins>`   | Definisi teks yang disisipkan                |
| `<del>`   | Definisi teks yang dihapus                   |

### Tag Computer Output

| Tag awal | Kegunaan                      |
| :------- | :---------------------------- |
| `<code>` | Definisi teks computer code   |
| `<kbd>`  | Definisi teks keyboard        |
| `<samp>` | Definisi contoh computer code |
| `<tt>`   | Definisi teks teletype        |
| `<var>`  | Definisi suatu variabel       |
| `<pre>`  | Definisi teks preformatted    |

### Tag Citation, Quotation, Definition

| Tag awal       | Kegunaan                   |
| :------------- | :------------------------- |
| `<abbr>`       | Definisi suatu singkatan   |
| `<acronym>`    | Definisi suatu akronim     |
| `<address>`    | Definisi penulisan alamat  |
| `<bdo>`        | Definisi arah penulisan    |
| `<blockquote>` | Definisi quotation panjang |
| `<q>`          | Definisi quotation pendek  |
| `<cite>`       | Definisi suatu citation    |
| `<dfn>`        | Definisi istilah ( term )  |

### Tag Link

| Tag awal | Kegunaan                  |
| :------- | :------------------------ |
| `<a>`    | Mendefinisikan suatu link |

### Tag Image

| Tag awal | Kegunaan                            |
| :------- | :---------------------------------- |
| `<img>`  | Definisi sebuah image dalam dokumen |
| `<map>`  | Definisi sebuah imame map           |
| `<area>` | Definisi suatu area dalam image map |

### Tag List

| Tag awal | Kegunaan                                    |
| :------- | :------------------------------------------ |
| `<ol>`   | Mendefinisikan sebuah list ordered          |
| `<ul>`   | Mendefinisikan sebuah list unordered        |
| `<li>`   | Mendefinisikan sebuah item dalam list       |
| `<dl>`   | Mendefinisikan sebuah list definisi         |
| `<dt>`   | Mendefinisikan sebuah istilah list definisi |

**Contoh script penggunaan Tag HTML**

Buat lembar baru pada Notepad, kemudian ketikkan perintah di bawah ini. Simpan dengan nama **Contoh02.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contoh 02</title>
  </head>
  <body bgcolor="#00CCFF" text="#FF0000">
    <p>
      ini adaalah contoh pengunaan formating TAG dalam HTML <br />
      masing-masing TAG memiliki atribut masing-masing<br />
    </p>
    <font color="#000000"
      >Ini juga termasuk contoh penggunaan formating TAG<br
    /></font>
    <h1>
      <marquee width="50%" bgcolor="#000099">
        Ini uga salah satu penggunaan Tag
      </marquee>
    </h1>
  </body>
</html>
```

Hasil Tampilan

![contoh03](contoh03.png)

## Pembuatan Tabel Menggunakan HTML

Tabel penting peranannya dalam halaman Web, selain untuk menampilkan teks atau gambar dalam format lajur dan kolom bias juga menggunakan tabel untuk membantu me-layout tampilan halaman

Tabel merupakan sebuah kotak yang terdiri atas baris/row dan kolom.column. Untuk membuat tabel, anda menggunakan tag `<table>` dan menutupnya dengan tag `</table>`. Anda bisa juga menambahkan atribut lain di tag `<table>` pembuka. Misalnya menentukan warna, border, dan sebagainya.

Di dalam tag `<table>` ada beberapa tag lain yang perlu dipahami, yaitu :

1. Tag `<tr>`

   Artinya tag untuk menuliskan baris biasa di tabel. TR singkatan dari Table Row.

2. Tag `<td>`

   Artinya tag untuk menuliskan kotak di dalam baris, makanya tag `<td>` ada di dalam tag `<tr>`. TD singkatan dari Table Data.

3. Tag `<th>`

   Artinya tag untuk menuliskan kotak biasa seperti `<td>`, namun untuk header tabel. TH singkatan dari Table Header.

## Menggabungkan sel

Sel-sel tabel secara normal memiliki lebar dan tinggi yang sama. Jika kita ingin membuat sebuah sel memiliki lebar atau tinggi yang berbeda dari sel-sel lainnya, maka satu-satunya cara yang bisa kita lakukan adalah dengan menggabungkan beberapa sel menjadi satu. Cara ini disebut merge atau penggabungan sel.

Untuk menggabungkan sel-sel tabel ini diperlukan atribut rowspan atau colspan. Atribut rowspan digunakan untuk menggabungkan sel-sel tabel pada kolom yang sama. Atribut colspan untuk menggabungkan sel-sel tabel pada baris yang sama.

Berikut contoh penggabungan kedua jenis :

1. Secara Vertikal (Rowspan)<br>
   Tabel dengan kode HTML dibawah ini sel-sel kolom pertama akan digabung:

```html
<table>
  <tr>
    <td>...</td>
    <td>...</td>
  </tr>
  <tr>
    <td>...</td>
    <td>...</td>
  </tr>
  <tr>
    <td>...</td>
    <td>...</td>
  </tr>
</table>
```

<table>
    <tr>
        <td>...</td>
        <td>...</td>
    </tr>
    <tr>
        <td>...</td>
        <td>...</td>
    </tr>
    <tr>
        <td>...</td>
        <td>...</td>
    </tr>
</table>

Setelah digabung maka kondisi kode HTML menjadi seperti berikut:

```html
<table>
  <tr>
    <td rowspan="3">...</td>
    <td>...</td>
  </tr>
  <tr>
    <td>...</td>
  </tr>
  <tr>
    <td>...</td>
  </tr>
</table>
```

<table>
  <tr>
    <td rowspan="3">...</td>
    <td>...</td>
  </tr>
  <tr>
    <td>...</td>
  </tr>
  <tr>
    <td>...</td>
  </tr>
</table>

2. Secara Horisontal (Colspan)<br>
   Tabel dengan kode HTML dibawah ini sel-sel baris pertama akan digabung:

```html
<table>
  <tr>
    <td>...</td>
    <td>...</td>
  </tr>
  <tr>
    <td>...</td>
    <td>...</td>
  </tr>
  <tr>
    <td>...</td>
    <td>...</td>
  </tr>
</table>
```

<table>
    <tr>
        <td>...</td>
        <td>...</td>
    </tr>
    <tr>
        <td>...</td>
        <td>...</td>
    </tr>
    <tr>
        <td>...</td>
        <td>...</td>
    </tr>
</table>

Setelah digabung maka kondisi kode HTML menjadi seperti berikut:

```html
<table>
  <tr>
    <td colspan="2">...</td>
  </tr>
  <tr>
    <td>...</td>
    <td>...</td>
  </tr>
  <tr>
    <td>...</td>
    <td>...</td>
  </tr>
</table>
```

<table>
    <tr>
        <td colspan="2">...</td>
    </tr>
    <tr>
        <td>...</td>
        <td>...</td>
    </tr>
    <tr>
        <td>...</td>
        <td>...</td>
    </tr>
</table>

**Contoh script pembuatan tabel**<br>
Buat lembar baru pada Notepad, kemudian ketikkan perintah di bawah ini. Simpan dengan nama **Contoh03.html**

```html
<html>
  <head>
    <title>Contoh 03</title>
  </head>
  <body>
    <h1>Tabel Data Siswa</h1>
    <table border="1" bgcolor="black">
      <tr>
        <th>Nim</th>
        <th>Nama</th>
        <th>Alamat</th>
        <th>Tempat, Tanggal Lahir</th>
        <th>Jurusan</th>
      </tr>
      <tr>
        <td>12110001</td>
        <td>Anita</td>
        <td>Cengkareng</td>
        <td>Jakarta, 20 Agustus 1990</td>
        <td>Tehnik Informatika</td>
      </tr>
      <tr>
        <td>12110002</td>
        <td>Aditya</td>
        <td>Tangerang</td>
        <td>Semarang, 01 Januari 1989</td>
        <td>Tehnik Informatika</td>
      </tr>
      <tr>
        <td>12110003</td>
        <td>Firman</td>
        <td>Bogor</td>
        <td>Jakarta, 18 September 1988</td>
        <td>Tehnik Informatika</td>
      </tr>
    </table>
  </body>
</html>
```

Jika dilihat di browser, maka terlihat sebagai berikut :

![contoh04](contoh04.png)

## Penggunaan Cellpadding dan cellspacing

Buat lembar baru pada Notepad, kemudian ketikkan perintah di bawah ini. Simpan dengan nama **tabelcell.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Penggunaan atribut Cellpadding dan cellspacing dalam Tabel</title>
  </head>
  <body>
    <h3>Belajar atribut cellpadding & cellspacing dalam Tabel</h3>

    <table border="1" cellspacing="0" cellpadding="0">
      <tr>
        <td>Baris 1, Kolom 1</td>
        <td>Baris 1, Kolom 2</td>
        <td>Baris 1, Kolom 3</td>
      </tr>
      <tr>
        <td>Baris 2, Kolom 1</td>
        <td>Baris 2, Kolom 2</td>
        <td>Baris 2, Kolom 3</td>
      </tr>
    </table>

    <br />

    <table border="1" cellspacing="3" cellpadding="5">
      <tr>
        <td>Baris 1, Kolom 1</td>
        <td>Baris 1, Kolom 2</td>
        <td>Baris 1, Kolom 3</td>
      </tr>
      <tr>
        <td>Baris 2, Kolom 1</td>
        <td>Baris 2, Kolom 2</td>
        <td>Baris 2, Kolom 3</td>
      </tr>
    </table>
  </body>
</html>
```

Hasil Tampilan :

![contoh05](contoh05.png)

## Penggunaan Rowspan dan colspan

Buat lembar baru pada Notepad, kemudian ketikkan perintah di bawah ini. Simpan dengan nama **tabelspan.html**

```html
<html>
  <head>
    <title>Contoh Penggunaan Atribut Colspan dan Rowspan Tag Tabel</title>
  </head>
  <body>
    <h1>Contoh atribut colspan dan rowspan</h1>
    <table border="1">
      <tr>
        <td>Baris 1, Kolom 1</td>
        <td>Baris 1, Kolom 2</td>
        <td>Baris 1, Kolom 3</td>
      </tr>
      <tr>
        <td>Baris 2, Kolom 1</td>
        <td colspan="2">Baris 2, Kolom 2 & 3</td>
      </tr>
      <tr>
        <td rowspan="2">Baris 3 & 4, Kolom 1</td>
        <td>Baris 3, Kolom 2</td>
        <td>Baris 3, Kolom 3</td>
      </tr>
      <tr>
        <td>Baris 4, Kolom 2</td>
        <td>Baris 4, Kolom 3</td>
      </tr>
    </table>
  </body>
</html>
```

Hasil Tampilan :

![contoh06](contoh06.png)
