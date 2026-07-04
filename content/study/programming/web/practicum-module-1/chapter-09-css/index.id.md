---
title: "Web Programming I #09: CSS"
summary: "CSS merupakan bahasa yang digunakan untuk mengatur tampilan suatu dokumen yang ditulis dalam bahasa markup / markup language. apabila kita membahasnya dalam konteks web, bisa di artikan sebagai bahasa yang digunakan untuk mengatur tampilan / desain sebuah halaman HTML."
description: "CSS merupakan bahasa yang digunakan untuk mengatur tampilan suatu dokumen yang ditulis dalam bahasa markup / markup language. apabila kita membahasnya dalam konteks web, bisa di artikan sebagai bahasa yang digunakan untuk mengatur tampilan / desain sebuah halaman HTML."
categories: ["Web Programming I"]
tags: ["CSS"]
series: ["Web Programming I Module"]
series_order: 9
date: 2026-05-09T05:10:50+07:00
draft: false
---

CSS merupakan bahasa yang digunakan untuk mengatur tampilan suatu dokumen yang ditulis dalam bahasa markup / markup language. apabila kita membahasnya dalam konteks web, bisa di artikan sebagai bahasa yang digunakan untuk mengatur tampilan / desain sebuah halaman HTML.

## Pengertian CSS

CSS = Cascading Style Sheets ( Bahasa lembar Gaya ). CSS merupakan bahasa yang digunakan untuk mengatur tampilan suatu dokumen yang ditulis dalam bahasa markup / markup language. Jika kita berbicara dalam konteks web, bisa di artikan secara bebas sebagai : CSS merupakan bahasa yang digunakan untuk mengatur tampilan / desain suatu halaman HTML.

## Beberapa hal yang dapat dilakukan dengan CSS.

- Perancangan desain text dapat dilakukan dengan mendefinisikan fonts (huruf), colors (warna), margins (ukuran), latar belakang (background), ukuran font (font sizes) dan lain-lain. Elemen-elemen seperti colors (warna), fonts (huruf), sizes (ukuran) dan spacing (jarak) disebut juga “styles”.
- Cascading Style Sheets juga bisa berarti meletakkan styles yang berbeda pada layers (lapisan) yang berbeda.

### Ada 3 cara untuk memasang CSS pada dokumen HTML yaitu:

- External Style Sheet<br>
  Aturan CSS disimpan pada suatu file sehingga terpisah dari dokumen HTML. Kemudian tambahkan kode pemanggilan file CSS dalam dokumen HTML. Akhiran file CSS adalah .css

File CSS (misalnya style.css) berisi:

```css
p {
  text-align: justify;
}
```

Dokumen HTML berisi:

```html
<head>
  <title>CSS secara eksternal</title>
  <link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
  <p>Paragraph yang ini diatur CSS secara eksternal</p>
</body>
```

- Internal Style Sheet<br>
  Aturan CSS ditulis pada bagian HEAD dokumen HTML menggunakan tag `<style>`

```html
<head>
  <title>CSS secara internal</title>
  <style type="text/css">
    P {
      text-align: justify;
    }
  </style>
</head>
<body>
  <p>Paragrap yang ini diatur CSS secara internal</p>
</body>
```

- Inline Style Sheet<br>
  Aturan CSS ditulis langsung pada tag HTML yang akan diatur tampilannya menggunakan atribut style:

```html
<p style="text-align:justify;">Paragrap ini diatur CSS secara inline</p>
```

## Satuan Dalam CSS

1. Statik

- in -- satuan inchi
- cm -- satuan centimeter
- mm -- satuan milimeter
- pt -- satuan point (1point = 1/72 inchi)
- pc -- satuan pica (1pica = 12 point)
- px -- satuan pixel (satu titik gambar terkecil dalam layar monitor)

2. Relatif

- % -- satuan persen
- em -- atau ems (1em = ukuran font yang tengah ada dalam elemen)
- ex -- 1ex = x-height suatu font (x-height biasanya setengah ukuran font)

## Menulis CSS

### Sintaks penulisan CSS sebagai berikut:

![sintaks](sintaks.png)

**Penjelasan:**

Aturan CSS terdiri 2 bagian:

- Selector

  Biasanya berupa tag HTML, id, class id menggunakan tanda # didepan nama selector class menggunakan tanda titik didepan nama selector

contoh :
h1 { color : blue ; } ➔ tag html h1<br>
#teks { color :green; } ➔ id<br>
.warna { color : red; } ➔ class

- Declaration

  Berisi aturan-aturan css yang terdiri dari properti dan nilainya yang dipisahkan oleh tanda titik dua. Setiap aturan css harus diakhiri dengan tanda titik koma.

### Selector ID dan Class pada CSS

Untuk selector id pada css ditandai dengan tanda #(pagar) contoh penulisan seperti berikut :

```css
#teks {
  color: blue;
  font-family: Calibri;
}
```

Penggunaanya dalam script HTML :

```html
<body>
  <p id="teks">TEST</p>
</body>
```

Yang perlu di perhatikan jika menggunakan selector id :

- Sebuah elemen HTML hanya boleh memiliki 1 id
- Setiap halaman hanya boleh memiliki 1 elemen dengan id tersebut
- Dapat di gunakan sebagai penanda halaman untuk link
- Digunakan juga untuk javascript
- Sebaiknya tidak digunakan untuk css ( lebih baik gunakan class)

Untuk selector class pada css ditandai dengan tanda .(titik) contoh penulisan seperti berikut :

```css
.warna {
  background-color: lightgreen;
}
```

Penggunaanya dalam script HTML :

```html
<body class="warna"></body>
```

### Properti-properti CSS

Properti CSS jumlahnya sangat banyak, berikut beberapa diantaranya:

| Properti             | Fungsi                         | Nilai                                                                                     | Contoh                              |
| :------------------- | :----------------------------- | :---------------------------------------------------------------------------------------- | :---------------------------------- |
| **color**            | Mengatur warna teks            | Nama warna, kode hexa warna (#ffffff:putih, #000000:hitam, #ff0000:merah), rgb(0,250,100) | `color:#ff5590;`                    |
| **Background-color** | Mengatur warna latar           | Nama warna, kode hexa warna, rgb(200,200,200)                                             | `background-color:rgb(200,0,55);`   |
| **Background-image** | Mengatur gambar latar          | Nama file gambar                                                                          | `background-image:url(banner.jpg);` |
| **Text-align**       | Mengatur perataan teks         | Left, right, center, justify                                                              | `text-align:justify;`               |
| **Text-decoration**  | Mengatur dekorasi teks         | Underline, none                                                                           | `text-decoration:underline;`        |
| **Line-height**      | Mengatur tinggi baris          | Piksel, prosentase, em                                                                    | `line-height:120%;`                 |
| **Font-family**      | Mengatur jenis font            | "times new roman", arial, georgia                                                         | `font-family:arial;`                |
| **Font-size**        | Mengatur ukuran karakter       | Piksel, prosentase, em, pt                                                                | `font-size:12pt;`                   |
| **Margin**           |                                |                                                                                           |                                     |
| **Padding**          |                                |                                                                                           |                                     |
| **Border-width**     | Mengatur ketebalan garis batas | Piksel, prosentase, thin, thick                                                           | `border-width:1px;`                 |
| **Border-style**     | Mengatur jenis garis batas     | Solid, dotted, dashed, double, none                                                       | `border-style:solid;`               |
| **float**            | Mengatur obyek agar mengambang | Left, right, none                                                                         | `float:left;`                       |
| **clear**            | Menghentikan (float)           | Left, right, both, none                                                                   | `clear:both;`                       |

### Pseudo-Class

Adalah sebuah kelas semu yang dimiliki oleh elemen HTML, yang membuat kita dapat mendefinisikan style pada keadaan tertentu dari elemen tersebut. Pseudo-class terbagi menjadi beberapa type, sebagai berikut :

1. Yang berhubungan dengan link

- : link<br>
  Style default pada sebuah link (a yang memiliki href)
- : hover<br>
  Style ketika kursor mouse berada diatas sebuah link / elemen
- : active<br>
  Style ketika sebuah link di klik (keadaan aktif)
- : visited<br>
  Style ketika sebuah link sudah pernah di kunjungi sebelumnya (menggunakan
  browser yang sama)

2. Yang berhubungan dengan posisi elemen (ada pada css 3)

- : first-child<br>
  Memilih elemen pertama dari sebuah parent (elemen pembungkusnya )
- : last-child<br>
  Memilih elemen terakhir dari sebuah parent (elemen pembungkusnya )
- : nth-child(n)<br>
  Memilih elemen ke (n) dari sebuah parent (elemen pembungkusnya ) n bisa berarti urutan 1,2,3,….. atau pola (2n),(3n+2), atau ganjil dan genap, even & odd
- : first-of-type<br>
  Memilih elemen pertama dari sebuah jenis / tipe tag
- : last-of-type<br>
  Memilih elemen terakhir dari sebuah jenis / tipe tag

## Padding, Margin, dan Border

Dalam CSS dikenal istilah ‘Box Model’. Perhatikan gambar berikut ini:

![border](border.png)

- Padding : Menentukan jarak komponen body ke border atau Ukuran jarak bagian dalam
- Border : Adalah garis tepi dari komponen
- Margin : Adalah Ukuran jarak bagian luar atau ukuran jarak sesudah Border

CSS menggunakan konsep ini dalam mengatur tag-tag HTML. Pada gambar, bayangkan area ‘Content’ misalnya adalah sebuah paragraph. Obyek paragraph ini akan dianggap CSS memiliki area padding, border, dan margin disekitarnya.

Keberadaan area-area ini berguna untuk pengaturan tata letak. Misalnya ingin diaturagar 2 buah gambar yang terletak berdampingan tidak terlalu rapat, maka kita dapat memperbesar lebar dari area margin agar jarak antara gambar lebih lebar.

### Padding

ditulis dengan CSS padding:5px 5px 5px 5px; urutan nilai angkanya adalah atas, kanan, bawah dan kiri, atau Anda bisa menggunakan

- padding-left:5px; ➔ini adalah untuk pengaturan padding bagian kiri
- padding-right:5px; ➔ ini adalah untuk pengaturan padding kanan
- padding-top:5px; ➔ untuk bagian atas dan
- padding-bottom:5px; ➔ untuk bagian bawah, Ingat satuan px(pixels) bisa kamu ganti sesuai satuan yang lain yang sesuai

### Border

Ditulis dengan CSS border:1px dotted #000000; ➔ urutan penggunaanya adalah ukran border, style border dan warna border, atau bisa menggunakan

- border-width:1px; ➔ ini adalah ketebalan border
- border-style:dotted; ➔ ini adalah jenis bordernya bisa kamu ganti dengan dashed, solid, double, groove, ridge, inset, outset dan lainya
- border-color:#FFFFFF; ➔ ini adalah warna dari border.. kamu bisa mengganti code warnanya (www.colorschemer.com/online)

### Margin

Ditulis dengan CSS margin:5px 5px 5px 5px; ➔ urutanya atas, kanan, bawah dan kiri, atau bisa menngunakan seperti padding diatas

- margin-left:5px;
- margin-right:5px;
- margin-top:5px;
- margin-bottom:5px;
