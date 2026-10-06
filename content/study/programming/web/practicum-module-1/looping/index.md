---
title: "Web Programming I #07: Looping"
summary: "Discusses the basic concept of loop structure, also known as looping, and practicing how to use for, while, do while, and Foreach loops."
description: "Discusses the basic concept of loop structure, also known as looping, and practicing how to use for, while, do while, and Foreach loops."
categories: ["Web Programming I"]
tags: ["Looping", "PHP"]
series: ["Web Programming I Module"]
series_order: 7
date: 2026-05-07T05:10:50+07:00
draft: false
---

Discusses the basic concept of loop structure, also known as looping, and practicing how to use **for, while, do while, and Foreach** loops.

Looping (sometimes also called iteration) is a program instruction that commands a task to be repeated based on certain conditions.

## 1. FOR Loop

It is a very simple form of looping; by using this function, you can repeat data until it exceeds the desired limit.

```
for (init counter; test counter; increment counter) {
    code to be executed;
}
```

## 2. WHILE Loop

In this form of looping, the statement will continue to be executed if it has not yet reached the loop limit.

```
while (condition is true) {
    code to be executed;
}
```

## 3. DO – WHILE Loop

The statement will be executed first before checking the loop limit. If it has not yet reached the loop limit, the repetition will continue.

```
do {
    code to be executed;
} while (condition is true);
```

## 4. foreach Statement -

A loop executed for a block of code for each element present in an array.

```
foreach ($array as $value) {
    code to be executed;
}
```

**Example:**

### 1. FOR Loop = contohfor.php

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

### 2. FOR Loop in FORM = contohfor_form.php

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

### 3. WHILE Loop = contohwhile.php

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

### 4. DO - WHILE Loop = contohdowhile.php

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

### 5. Foreach Loop = contoforeach.php

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
