---
title: "Web Programming I #04: Operator"
summary: "Discusses the use of various types of operators available in web programming languages and how to implement each of them"
description: "Discusses the use of various types of operators available in web programming languages and how to implement each of them"
categories: ["Web Programming I"]
tags: ["Operator", "PHP"]
series: ["Web Programming I Module"]
series_order: 4
date: 2026-05-04T05:10:50+07:00
draft: false
---

## Understanding Operators

A programming language is also required to be able to process operand values (variables or constants being operated on) using operators, such as adding, dividing, and so on.

An operator is a symbol that functions to perform a specific action / operation on an operand value, which generally produces a new value from the result of the operation. While an operand is a value involved in the operation by the operator.

## Types of Operators

1. Arithmetic Operators
   These operators are used to perform mathematical calculations, as follows:

| Operator | Name           | Example  | Result |
| :------: | :------------- | :------- | :----: |
|    +     | Addition       | 1+4      |   5    |
|    -     | Subtraction    | 1-4      |   -3   |
|    /     | Division       | 1/4      |  0.25  |
|    \*    | Multiplication | 1\*4     |   4    |
|    %     | Modulus        | 5%2      |   1    |
|    ++    | Increment      | X=5; X++ |  X=6   |
|    -     | Decrement      | X=5; X-  |  X=4   |

Script example:

**Operatoraritmatika.php**

```php
<?php
$bil1=200;
$bil2=40;
$hasil = $bil1+$bil2;
echo "$bil1 + $bil2 = $hasil<br>";
$hasil = $bil1-$bil2;
echo "$bil1 - $bil2 = $hasil<br>";
$hasil = $bil1*$bil2;
echo "$bil1 * $bil2 = $hasil<br>";
$hasil = $bil1/$bil2;
echo "$bil1 / $bil2 = $hasil<br>";
?>
```

Result:

![operator](operator.png)

2. Comparison Operators
   Comparison operators are used to produce 2 values whose final result is a Boolean value of true and false. These operators are very useful in programming because they can determine the direction of programming. Comparison operators in PHP are:

| Operator | Name                     | Example | Result |
| :------: | :----------------------- | :-----: | :----: |
|    ==    | Equal to                 | 6 == 6  | False  |
|    !=    | Not equal to             |  3!=3   | False  |
|    >     | Greater than             |   1>5   | False  |
|    >=    | Greater than or equal to |  3>=4   | False  |
|    <     | Less than                |   2<4   |  True  |
|    <=    | Less than or equal to    |  5<=4   | False  |

**Opertorperbandingan.php**

```php
<?php
$bil1 = 200;
$bil2 = 40;
$teks1 = "PHP";
$teks2 = "php";

$hasil = $bil1 == $bil2;
echo "$bil1 == $bil2 = $hasil<br>";

$hasil = $bil1 != $bil2;
echo "$bil1 != $bil2 = $hasil<br>";

$hasil = $bil1 >= $bil2;
echo "$bil1 >= $bil2 = $hasil<br>";

$hasil = $teks1 == $teks2;
echo "$teks1 == $teks2 = $hasil<br>";

$hasil = $teks1 != $teks2;
echo "$teks1 != $teks2 = $hasil<br>";
?>
```

Result:
![comparison](perbandingan.png)

3. Logical Operators
   Operators for composing logical expression statements. The result of this operation will get a value of one if true and zero if false.

|  Operator  | Function                       |
| :--------: | :----------------------------- |
| AND or &&  | AND logical operation          |
| OR or \|\| | OR logical operation           |
|    XOR     | Exclusive OR logical operation |
|     !      | Negation/NOT                   |

**Operatorlogika.php**

```php
<?php
$bil1 = 100;
$bil2 = 20;
$teks1 = "PHP";
$teks2 = "php";

$hasil = ($bil1 <> $bil2) or ($teks1 == $teks2);
echo "$bil1 <> $bil2 or $teks1==$teks2 adalah $hasil<br>";

$hasil = !($teks1 == $teks2);
echo "!($teks1==$teks2) adalah $hasil";
?>
```

Result:

![logic](logika.png)

4. String Operators
   In PHP there are also string operators, which are used for text concatenation operations. The symbol used is a dot (.) character.

**Operatorstring.php**

```php
<?php

$teks1 = "Aku Sedang belajar";
$teks2 = "Pemrograman Web";
$teks3 = "Menggunakan bahasa script PHP";
$hasil = $teks1 . $teks2 . $teks3;

echo "$hasil ";
?>
```

Result:

![string](string.png)
