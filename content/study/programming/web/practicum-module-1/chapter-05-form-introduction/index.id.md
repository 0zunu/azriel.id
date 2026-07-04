---
title: "Web Programming I #05: Pengenalan Form"
summary: "Membahas komponen form, pengolahan data dari form yang ada dalam bahasa pemrograman web, mempraktikkan penggunaan HTTP SERVER dengan metode GET dan POST."
description: "Membahas komponen form, pengolahan data dari form yang ada dalam bahasa pemrograman web, mempraktikkan penggunaan HTTP SERVER dengan metode GET dan POST."
categories: ["Web Programming I"]
tags: ["Form", "PHP"]
series: ["Web Programming I Module"]
series_order: 5
date: 2026-05-05T05:10:50+07:00
draft: false
---

## Komponen Form

Sebuah website dinamis seringkali memerlukan interaksi antara browser client dan server bisa berupa pemasukan data teks, angka, atau upload file untuk diproses oleh server. Untuk mewadahi suatu data yang dikirimkan oleh browser client, dibutuhkan adanya FORM HTML. Penggunaan form misalnya untuk pendaftaran keanggotaan, pemasukan kode kartu kredit, login user, transaksi perbelanjaan, dan upload file.

Dalam FORM HTML terdapat beberapa komponen yang bisa digunakan, antara lain :

### a. Form

`<FORM ACTION=action METHOD=method ENCTYPE=media type> </FORM>`

### b. Text Box

<INPUT TYPE=TEXT NAME=”nama_variabel” VALUE="textbox">

Text box : untuk menginput data string ataupun angka.

`<INPUT TYPE=TEXT NAME=”nama_variabel” VALUE=”value”>`

### c. Text Area

<textarea rows=” ” cols=” ” name=”nama_variabel”> </textarea>

Text area : untuk menginput string ataupun angka yang terdiri atas banyak baris.

`<textarea rows=” ” cols=” ” name=”nama_variabel”> </textarea>`

### d. Radio Button

<input type="radio" id="laki-laki" name="nama_variabel" value="Laki-laki">
<label for="laki-laki">Laki-laki</label><br>
<input type="radio" id="perempuan" name="nama_variabel" value="Perempuan">
<label for="perempuan">Perempuan</label><br>

Radio button : untuk memilih satu pernyataan dari beberapa pernyataan yang
disediakan.

`<input type=”radio” name=”nama_variabel” value=” ”>Isi_Radio_Button`

### e. Combo Box

Combo box untuk menampilkan daftar data.

```html
<select name="”nama_variabel”" value="”" “>
  <option>Combo1</option>
  <option>Combo2</option>
</select>
```

### f. Check Box

Check box untuk memilih satu atau lebih pernyataan dari beberapa pernyataan yang
disediakan.

`<input type=”checkbox” name=”nama_variabel” value=”ON” checked>`

### g. Submit

Submit untuk mengirimkan semua variable data pada komponen-komponen form
yang ada.

`<input type=”submit” name=”submit” value=”submit”>`

### h. Reset

Reset untuk membatalkan semua penginputan yang telah dituliskan.

`<input type=”reset” name=”reset” value=”reset”>`

## Pengolahan Data Dari Form

Form di HTML dikenal dengan adanya tag `<FORM>` dan ditutup dengan tag `</FORM>`. Di dalam tag pembuka `<FORM>` diikuti dengan atribut action dan method. Action menjelaskan ke h alaman yang digunakan untuk memproses input, sementara method digunakan untuk mengatur cara mem-parsing konten

Web menerima input dari user atau pengunjung menggunakan metode GET dan POST. GET akan mengirimkan data bersama dengan URL, sedangkan POST akan mengirimkannya secara terpisah. User mengirimkan data input dengan mengisi teks atau pilihan pada attibut form html.

Proses Form menggunakan Metode GET.
File **metodeget.php**

```php
<html>
<head>
        <title>FORM METODE GET</title>
</head>
<body>
<form action="metodegetproses.php" method="get">
Masukkan nama : <input type="text" name="nama" size="25">
<input type="submit" value="Proses">
</form>
</body>
</html>
```

Hasil:
![metodeget](metodeget.png)

Buat file untuk memproses variable yang diberikan oleh file metodeget.php, beri nama
filenya : **metodegetproses.php**

```php
<html>
<head>
        <title>Method Get Proses</title>
</head>
<body>
Data Nama Yang Diinputkan Adalah : <?php echo $_GET["nama"]; ?>
</body>
</html>
```

Hasil:
![metodegetproses](metodegetproses.png)

**Proses Form menggunakan metode : POST**

Untuk membuat inputan, dan beri nama file : **metodepost.php**

```php
<html>
<head>
        <title>FORM METODE POST</title>
</head>
<body>
<form action="metodepostproses.php" method="post">
Masukkan nama : <input type="text" name="nama" size="25">
<input type="submit" value="Proses">
</form>
</body>
</html>
```

Hasil:
![metodepost](metodepost.png)

Buat file untuk memproses variable yang diberikan oleh file metodepost.php beri nama
filenya : **metodepostproses.php**

```php
<html>
<head>
        <title>Method Post Proses</title>
</head>
<body>
Data Nama Yang Diinputkan Adalah : <?php echo $_POST["nama"]; ?>
</body>
</html>
```

Hasil:
![metodepostproses](metodepostproses.png)
