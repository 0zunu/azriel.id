---
title: "Web Programming I #01: Konsep Dasar Web"
summary: "Membahas mengenai konsep dasar pemrograman web, istilah-istilah dalam pemrograman web, menggunakan text editor, mengenal dan mengimplementasikan struktur navigasi"
description: "Membahas mengenai konsep dasar pemrograman web, istilah-istilah dalam pemrograman web, menggunakan text editor, mengenal dan mengimplementasikan struktur navigasi"
categories: ["Web Programming I"]
tags: ["learn", "coding", "web", "programming"]
series: ["Web Programming I Module"]
series_order: 1
date: 2026-05-01T05:02:50+07:00
draft: false
---

Membahas mengenai konsep dasar pemrograman web, istilah-istilah dalam pemrograman web, menggunakan text editor, mengenal dan mengimplementasikan struktur navigasi

## Dasar-Dasar Website

### Internet

Internet merupakan “kependekan dari kata “internetwork”, yang berarti rangkaian komputer yang terhubung menjadi beberapa rangkaian jaringan”. Sistem komputer terhubung secara global dan menggunakan TCP/IP sebagai protocol.
Secara umum internet dapat diartikan sebagai pertukaran informasi dan komunikasi. Semua informasi bisa didapatkan dengan mudah dan bebas di internet tanpa ada batasan.

Ada beberapa istilah yang sering digunakan apabila anda bekerja dengan internet diantaranya yaitu:

1. World Wide Web (WWW)<br>
   WWW merupakan kumpulan web server diseluruh dunia yang dapat menyediakan data dan informasi untuk dapat digunakan secara massal.
2. Website<br>
   Website atau situs web merupakan sebuah alamat tertentu di WWW yang menyediakan informasi tertentu. Untuk membuka sebuah situs web, anda dapat menggunakan browser.
3. Web Pages (Halaman Web)<br>
   Web pages atau halaman web merupakan bagian dari situs web, apabila situs web diumpamakan merupakan sebuah buku, maka halaman web merupakan lembaran-lembaran kertas penyusun buku tersebut.
4. Home Page (Halaman Muka)<br>
   Homepage merupakan halaman muka dari sebuah situs web, atau ibarat cover muka sebuah buku. Homepage biasanya berupa outline dari isi situs web yang bersangkutan.
5. Browser<br>
   Browser adalah aplikasi yang digunakan untuk berselancar didunia internet. Browser dapat memandu pengguna internet untuk berpindah antar situs web dengan mudah.
6. URL (Universal Resource Locator)<br>
   URL merupakan suatu alamat yang menunjukkan sebuah halaman tertentu internet. Contoh URL adalah: http://www.google.com
7. HTTP (Hypertext Transfer Protocol)<br>
   HTTP adalah bagian dari sebuah URL yang mengidentifikasikan lokasi web, dan digunakan dalam protokol HTML.
8. DNS (Domain Name System)<br>
   DNS merupakan sistem database terdistribusi yang tidak banyak dipengaruhi oleh bertambanhnya database. DNS menjamin informasi host terbaru akan disebarkan ke jaringan bila diperlukan.
9. TCP/IP (Transmission Control Protocol / Internet Protocol)<br>
   TCP/IP (Transmission Control Protocol/Internet Protocol) merupakan metodemetode yang digunakan untuk menghubungi server. TCP/IP merupakan bahasa standarisasi untuk internet.
10. IP (Internet Protocol)<br>
    IP (Internet Protocol) merupakan protokol yang digunakan dalam internet, secara teknis bermakna suatu bentuk pengisian dan pengalamatan data-data dan informasi yang akan dikirim melalui internet.
11. Hyperlink<br>
    Hyperlink atau disebut link saja merupakan sebuah fasilitas yang sangat berperan mempopulerkan pengguna internet, karena mampu mereferensikan sebuah teks atau gambar ke alamat lain di internet.
12. Web Browser<br>
    Menggunakan web browser mudah, yang diperlukan hanyalah Anda harus memiliki alamat web yang akan dibuka. Alamat ini biasa disebut dengan Uniform Resource Locator (URL). Di dalam sistem operasi Windows Anda juga terdapat program web browser sertaan, yaitu Internet Explorer. Namun demikian diluar terdapat banyak program alternative web browser yang sebagian besar bersifat gratis, seperti Netscape, Firefox, Opera, Avant Browser, dan seterusnya.

### Perangkat Lunak Web Server

Web Server adalah sebuah perangkat lunak server yang berfungsi menerima permintaan HTTP atau HTTPS dari Client yang dikenal dengan web browser dan mengirimkan kembali hasilnya dalam bentuk halaman-halaman web yang umumnya berbentuk dokumen HTML. Server web yang terkenal diantaranya adalah:

a. Apache, web server antar platform

1.  XAMPP
2.  PHPTriad; discontinued
3.  Apache2Triad

b. Internet Information Service (IIS), hanya dapat berjalan di sistem operasi MS Windows

## Struktur Navigasi

Struktur Navigasi adalah “Susunan menu atau hirarki dari suatu situs yang menggambarkan isi dari setiap halaman dan link atau navigasi tiap halaman pada suatu situs web”. Struktur Navigasi dapat dikatakan sebagai penggambar dari hubungan atau rantai kerja dari seluruh elemen yang akan digunakan dalam aplikasi.

Struktur Navigasi dapat digolongkan menurut kebutuhan akan objek, kemudahan pemakaian, keinteraktifitasannya, dan kemudahan membuatnya yang berpengaruh terhadap waktu pembuatan suatu situs web. Dalam penggambarannya Struktur Navigasi terbagi kedalam 4 Struktur yang berbeda yaitu: Linier, Non Linier, Hierarchical (Hirarki) dan Composit (Campuran).

Ada 4 macam bentuk dasar dari peta navigasi yang biasa digunakan dalam proses pembuatan aplikasi web, yaitu:

### Struktur Navigasi Linier

Struktur navigasi linier hanya mempunyai satu rangkaian cerita yang berurut, yang menampilkan satu demi satu tampilan layar secara berurut menurut urutannya. Tampilan yang dapat ditampilkan pada sruktur jenis ini adalah satu halaman sebelumnya atau satu halaman sesudahnya, tidak dapat dua halaman sebelumnya atau dua halaman sesudahnya.

{{< mermaid >}}
flowchart LR
%% Mendefinisikan kotak kosong dengan spasi agar lebarnya pas
A["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"]
B["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"]
C["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"]
D["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"]

    %% Alur panah dua arah
    A <--> B
    B <--> C
    C <--> D

{{< /mermaid >}}

Contoh :

{{< mermaid >}}
flowchart TD
%% Node Atas
Login["Login User"]

    %% Membuat blok khusus agar barisan bawah menyamping
    subgraph BarisHorizontal [" "]
        direction LR

        N1["Input Info"]
        N2["Upload File"]
        N3["Input Data siswa"]
        N4["Logout"]
        N5["Input Data guru"]
        N6["Upload foto galeri"]
        N7["Upload banner"]

        %% Alur panah dua arah menyamping
        N1 <--> N2
        N2 <--> N3
        N3 <--> N4
        N4 <--> N5
        N5 <--> N6
        N6 <--> N7

        %% Panah panjang yang kembali dari ujung kanan ke ujung kiri
        N7 --> N1
    end

    %% Hubungan bolak-balik vertikal dari Login ke Logout
    Login <--> N4

    %% Menghilangkan kotak border dan background dari subgraph
    style BarisHorizontal fill:none,stroke:none

{{< /mermaid >}}

## Struktur Navigasi Hirarki

Struktur navigasi hirarki biasa disebut struktur bercabang, merupakan suatu struktur yang mengandalkan percabangan untuk menampilkan data berdasarkan kriteria tertentu. Tampilan pada menu pertama akan disebut sebagai Master Page (halaman utama pertama), halaman utama ini mempunyai halaman percabangan yang disebut Slave Page (halaman pendukung). Jika salah satu halaman pendukung dipilih atau diaktifkan, maka tampilan tersebut akan bernama Master Page (halaman utama kedua), dan seterusnya. Pada struktur navigasi ini tidak diperkenankan adanya tampilan secara linier.

{{< mermaid >}}
flowchart TD
%% Level 1 (Akar/Root)
N1["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"]

    %% Level 2 (Cabang)
    N2_1["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"]
    N2_2["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"]

    %% Level 3 (Daun/Leaf)
    N3_1["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"]
    N3_2["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"]
    N3_3["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"]
    N3_4["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"]

    %% --- Alur panah dua arah (bolak-balik) ---
    N1 <--> N2_1
    N1 <--> N2_2

    N2_1 <--> N3_1
    N2_1 <--> N3_2

    N2_2 <--> N3_3
    N2_2 <--> N3_4

{{< /mermaid >}}

Contoh :

{{< mermaid >}}
flowchart TD
%% Node Utama (Root)
Menu["MENU"]

    %% Node Cabang Utama
    Tentang["Tentang"]
    Mulai["MULAI"]
    Keluar["Keluar"]

    %% Node Sub-Menu
    Pilih["Pilih Hewan"]
    Suara["Suara Hewan"]

    %% --- Alur Garis ---
    Menu --> Tentang
    Menu --> Mulai
    Menu --> Keluar

    Mulai --> Pilih
    Pilih --> Suara

    %% Alur perulangan (kembali ke pilihan hewan)
    Suara --> Pilih

{{< /mermaid >}}

## Struktur Navigasi Non-Linier

Struktur navigasi non-linier atau struktur tidak berurut merupakan pengembangan dari struktur navigasi linier. Pada struktur ini diperkenankan membuat navigasi bercabang. Percabangan yang dibuat pada struktur nonlinier ini berbeda dengan percabangan pada struktur hirarki, karena pada percabangan nonlinier ini walaupun terdapat percabangan, tetapi tiap-tiap tampilan mempunyai kedudukan yang sama yaitu tidak ada Master Page dan Slave Page.

![non-linier](nav-non-linier.png)

Contoh :

![contoh](contoh-non-linier.png)

## Struktur Navigasi Campuran

Struktur navigasi campuran merupakan gabungan dari ketiga struktur sebelumnya yaitu linier, non-linier dan hirarki. Struktur navigasi ini juga biasa disebut dengan struktur navigasi bebas. Struktur navigasi ini banyak digunakan dalam pembuatan website karena struktur ini dapat digunakan dalam pembuatan website sehingga dapat memberikan ke-interaksian yang lebih tinggi.

{{< mermaid >}}
flowchart TD
%% Level 1 (Root)
N1["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"]

    %% Level 2
    N2_1["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"]
    N2_2["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"]

    %% Level 3
    N3_1["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"]
    N3_2["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"]
    N3_3["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"]
    N3_4["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"]

    %% Node tambahan di ujung kanan Level 3
    N3_5["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"]

    %% --- Alur Pohon (Panah Bolak-balik) ---
    N1 <--> N2_1
    N1 <--> N2_2

    N2_1 <--> N3_1
    N2_1 <--> N3_2

    N2_2 <--> N3_3
    N2_2 <--> N3_4

    %% --- Alur Unik di Bagian Kanan Bawah ---
    %% Panah horizontal bolak-balik
    N3_4 <--> N3_5

    %% Panah dari bawah yang melompati satu node
    N3_3 --> N3_5

{{< /mermaid >}}

Contoh :
![contoh-campuran](contoh-nav-campuran.png)
