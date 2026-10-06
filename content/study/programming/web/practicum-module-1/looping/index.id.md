---
title: "Web Programming I #07: Perulangan"
summary: "Membahas pengertian dasar struktur perulangan atau dikenal juga dengan istilah loop, mempraktikan cara penggunaan perulangan for, while, do while dan Foreach."
description: "Membahas pengertian dasar struktur perulangan atau dikenal juga dengan istilah loop, mempraktikan cara penggunaan perulangan for, while, do while dan Foreach."
categories: ["Web Programming I"]
tags: ["Looping", "PHP"]
series: ["Web Programming I Module"]
series_order: 7
date: 2026-05-07T05:10:50+07:00
draft: false
---

Membahas pengertian dasar struktur perulangan atau dikenal juga dengan istilah loop, mempraktikan cara penggunaan perulangan **for, while, do while dan Foreach**.

Perulangan / looping (kadang juga disebut iterasi) adalah sebuah instruksi program yang memerintahkan suatu tugas diulang – ulang berdasarkan kondisi tertentu.

## 1. Perulangan FOR

Merupakan bentuk perulangan yang sangat sederhana, dengan menggunakan fungsi ini, anda dapat melakukan pengulangan data sampai melampaui batas yang diinginkan.

```
for (init counter; test counter; increment counter) {
    code to be executed;
}
```

## 2. Perulangan WHILE

Pada bentuk perulangan ini, pernyataan akan terus dikerjakan apabila masih belum mencapai batas perulangan.

```
while (condition is true) {
    code to be executed;
}
```

## 3. Perulangan DO – WHILE

pernyataan akan dikerjakan terlebih dahulu sebelum melakukan pengecekan batas perulangan. Apabila masih belum mencapai batas perulangan maka pengulangan akan terus dilakukan.

```
do {
    code to be executed;
} while (condition is true);
```

## 4. Pernyataan foreach -

perulangan yang dilakukan untuk blok kode dari setiap elemen yang ada di array

```
foreach ($array as $value) {
    code to be executed;
}
```

**Contoh :**

### 1. Perulangan FOR = contohfor.php

```php
<html>
<head>
  <title> Perulangan FOR </title>
</head>
<body>
nilai awal angka = 1
<br><br>
<?php
  for ($angka = 1; $angka <= 10 ; $angka++)
  {
    echo "Angka :".$angka."<br>";
  }
?>
</body>
</html>
```

### 2. Perulangan FOR dalam FORM = contohfor_form.php

```php
<html>
<head>
  <title> Perulangan FOR </title>
</head>
<body>
Penggunaan pada form :
<br>
<?php
  echo "<form name = form1 method=post>";
  echo "Tanggal" ;
  echo "<select name = tanggal>";
  for ($tanggal = 1 ;$tanggal <=31 ; $tanggal++)
  {
    echo "<option value=".$tanggal.">".$tanggal."</option>";
  }
  echo "</select>";
  echo "</form>";
?>
</body>
</html>
```

### 3. Perulangan WHILE = contohwhile.php

```php
<html>
<head>
  <title> Penggunaan WHILE </title>
</head>
<body>
Menggunakan WHILE
<br>
<?php
  $jumlah=1;
  while ($jumlah <=5)
  {
  echo $jumlah++;
  echo "<br>";
  }
?>
</body>
</html>
```

### 4. Perulangan DO – WHILE= contohdowhile.php

```php
<html>
<head>
  <title> Penggunaan DO WHILE </title>
</head>
<body>
Menggunakan DO WHILE
<br>
<?php
  $jumlah=10;
  do
  {
  echo $jumlah++;
  echo "<br>";
  }
  while ($jumlah <=1)
?>
</body>
</html>
```

### 5. Perulangan Foreach = contoforeach.php

```php
<html>
<head>
<title> Penggunaan Foreach </title>
</head>
<body>
Menggunakan Foreach
<br>
<?php
  $warna = array("merah","biru","hijau","kuning");
  foreach ($warna as $nilai) {
    echo "$nilai <br>";
  }
?>
</body>
</html>
```
