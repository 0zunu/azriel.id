---
title: "Web Programming I #06: Branching"
summary: "Discusses the concept of branching in web programming languages"
description: "Discusses the concept of branching in web programming languages"
categories: ["Web Programming I"]
tags: ["Branching", "PHP"]
series: ["Web Programming I Module"]
series_order: 6
date: 2026-05-06T05:10:50+07:00
draft: false
---

Discusses the concept of branching in web programming languages

## Selection Statements

Most programming languages contain selection statements. Basically, a selection statement is a mechanism that explains whether a statement will be executed or not, depending on a formulated condition. In the PHP programming language, selection statements are applied using the IF and Switch Case statements.

### 1. IF Statement

#### a. Single IF

The IF statement is an important statement that is definitely present in all programming languages. This statement is useful for creating branches based on certain conditions that must be met.

The general form of the IF Statement is as follows :

```php
if (kondisi) {
   statement;
}
else {
   statement;
}
```

The working principle is that the command above will be executed if the condition is TRUE or correct, whereas if the condition is wrong / FALSE then the statement above will not be executed.

#### b. IF and Else Statements

The ELSE statement is a part of the if statement. Else is used to provide an alternative command if the condition is wrong / FALSE.

General form :

```php
if (kondisi) {
   statement_1;
}
else {
   statement_2;
}
```

**Example: contohpercabanganifelse.php**

```php
<html>

<head>
    <title> Contoh IF ELSE</title>
</head>
<?php

$nilai = 40;
if ($nilai >= 60) {
    echo "Nilai Anda = $nilai. Selamat, Anda Lulus";
} else {
    echo "Nilai Anda = $nilai. Sorry, Anda Tidak Lulus";
}

?>
</body>

</html>
```

Result:

![ifelse](ifelse.png)

#### c. Compound IF Statements

If the else statement provides a second alternative choice, then the ElseIf statement can be used to formulate multiple alternative choices (more than two choices).

General form :

```php
if ( kondisi_1 )
{
Statement_1;
}
elseif ( kondis_2)
{
Statement_2;
}
elseif ( kondisi_3)
{
Statement_3;
}
else
{
Statement_n;
}
```

**Example : contohpercabanganifmajemuk.php**

```php
<html>
<head>
        <title> Contoh IF Majemuk</title>
</head>
<?php
    $nilai = 90;
    if (($nilai >= 0)&&($nilai < 50))
    { $grade ="E";}
    elseif(($nilai >= 50)&&($nilai < 60))
    { $grade ="D";}
    elseif(($nilai >= 60)&&($nilai < 75))
    { $grade ="C";}
    elseif(($nilai >= 75)&&($nilai < 85))
    { $grade ="B";}
    elseif(($nilai >= 85)&&($nilai < 100))
    { $grade ="A";}
    else
    { $grade = "Nilai anda di luar jangkauan"; }
    echo "Nilai Anda : $nilai, dikonversi menjadi $grade";
?>
</body>
</html>
```

Result:

![majemuk](majemuk.png)

## Switch Statement

The next program flow control statement is switch. One of the advantages of switch is that you can immediately evaluate one statement and command actions in larger numbers.

General form :

```php
Switch ( nilai_ekspresi ){
Case nilai_1 : statement_1; break;
Case nilai_2 : statement_2; brea;
Default: statement_n;}
```

**Example:**

```php
<?php
$angka = 6;
switch ($angka){
case 0: $terbilang = "NOL"; break;
case 1: $terbilang = "SATU"; break;
case 2: $terbilang = "DUA"; break;
case 3: $terbilang = "TIGA"; break;
case 4: $terbilang = "EMPAT"; break;
case 5: $terbilang = "LIMA"; break;
case 6: $terbilang = "ENAM"; break;
case 7: $terbilang = "TUJUH"; break;
case 8: $terbilang = "DELAPAN"; break;
case 9: $terbilang = "SEMBILAN"; break;
default: $terbilang = "Nilai diluar jangkuan!!";
}
echo "Bentuk terbilang dari angka  $angka adalah  $terbilang";
?>
```

Result:

![switch](switch.png)
