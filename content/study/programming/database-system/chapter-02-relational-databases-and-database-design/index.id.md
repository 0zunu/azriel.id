---
title: "Basis Data Relational & Perancangan Basis Data"
summary: "Adalah basis data yang mempresentasikan data dalam bentuk tabel-tabel, dimana tabeltabel tersebut dihubungkan oleh nilai-nilai yang sama/umum pada kolom-kolom terkait."
description: "Adalah basis data yang mempresentasikan data dalam bentuk tabel-tabel, dimana tabeltabel tersebut dihubungkan oleh nilai-nilai yang sama/umum pada kolom-kolom terkait."
categories: ["Database Systems"]
tags:
  [
    "Relational Databases",
    "Database Design",
    "Relational Keys",
    "Integrity Constraints",
    "Database Schema",
  ]
series: ["Database System Chapters"]
series_order: 2
date: 2026-06-21T05:02:50+07:00
draft: false
---

## Basis Data Relational

Adalah basis data yang mempresentasikan data dalam bentuk tabel-tabel, dimana tabeltabel tersebut dihubungkan oleh nilai-nilai yang sama/umum pada kolom-kolom terkait.

Komponen penyusun basis data :

1. Tabel
2. Kolom/atribut
3. Baris/tuple
4. Domain

{{< mermaid >}}
flowchart LR
%% Wadah DBMS yang memuat tabel-tabel
subgraph DBMS [DBMS]
direction TB
T1[Tabel Buku]
T2[Tabel Anggota]
T3[Tabel Pinjaman]
T4[Tabel Pengembalian]
end

    %% Entitas PC/Client
    PC1(Client PC 1)
    PC2(Client PC 2)
    PC3(Client PC 3)

    %% Garis penghubung antara DBMS dan PC
    DBMS --- PC1
    DBMS --- PC2
    DBMS --- PC3

    %% Penyesuaian gaya agar rapi
    style DBMS fill:none,stroke-width:2px

{{< /mermaid>}}

Skema :

1. Tabel Buku : kode buku (3) , judul buku (20)
2. Tabel Anggota : kode anggota (3), nama anggota (25)
3. Tabel Peminjaman : Kode pinjam (5), tgl pinjam (date), kode anggota (3)
4. Tabel Pengembalian : Kode kembali (5), tgl kembali (date), kode anggota (3)

Tabel Anggota :

| Kode Anggota | Nama    |
| ------------ | ------- |
| A01          | Surya   |
| A02          | Fitri   |
| A03          | Syahrur |

Tabel Buku :

| Kode Buku | Judul                     | Stok Buku |
| --------- | ------------------------- | --------- |
| B01       | Pemograman C++            | 10        |
| B02       | Membuat Aplikasi 30 Menit | 15        |
| B03       | Cooking is Easy           | 15        |

Skema :

1. Tabel Buku : kode buku (3) , judul buku (20)
2. Tabel Anggota : kode anggota (3), nama anggota (25)
3. Tabel Peminjaman : Kode pinjam (5), tgl pinjam (date), kode anggota (3)
4. Tabel Pengembalian : Kode kembali (5), tgl kembali (date), kode anggota (3)

### 1. Tabel

Tabel memiliki nama dan terdiri atas baris dan kolom. Tabel pada suatu basis data tidak boleh memilki nama yang sama (unik). Tabel disebut juga dengan Relation atau File.

Pada [gambar](#basis-data-relational) terdiri dari 4 tabel yaitu, tabel anggota, tabel buku, tabel peminjaman, tabel pengembalian.

### 2. Kolom/Atribut

Kolom memiliki nama. Kolom yang terdapat dalam suatu tabel tidak boleh memiliki nama yang sama. Urutan nama boleh sembarang dan tidak mempengaruhi makna dari tabel.

Nama lain kolom adalah Field atau Atribut.

Pada [tabel](#basis-data-relational), kolom yaitu nama anggota, judul buku, kode anggota, kode buku, dst.

### 3. Domain

Adalah sekumpulan nilai-nilai yang dapat disimpan pada satu atau lebih kolom. Sebuah domain bisa dimiliki oleh satu kolom atau lebih, tetapi sebuah kolom hanya memiliki satu domain. Karena domain membatasi dan mengatur nilai yang dapat disimpan maka disebut domain constraint.

Pada [gambar](#basis-data-relational), kolom yaitu kode anggota hanya berisi 3 nilai saja, yaitu “A01”

### 4. Baris

Berisikan data dari sebuah objek. Baris pada sebuah tabel harus unik, dapat diletakkan dalam urutan bebas dan tidak mempengaruhi makna dari tabel. Baris disebut juga dengan Record atau tuple.

Pada [tabel anggota](#basis-data-relational) dapat menyimpan tiga obyek (yaitu tiga data anggota) pada tiga tuple.

## Relational Keys

Adalah identifikasi satu atau sekelompok kolom yang nilainya dapat membedakan secara unik tuple-tuple tersebut.

Lima Relational Keys :

1. Superkey
2. Candidate key
3. Primary key
4. Alternate key
5. Foreign key

**Tabel Anggota**

| Kode Anggota | Nama    |
| ------------ | ------- |
| A01          | Surya   |
| A02          | Fitri   |
| A03          | Syahrur |

**Tabel Pengembalian**

| Kode kembali | Kode pinjam |
| ------------ | ----------- |
| KM01         | PJ01        |
| KM02         | PJ02        |

**Tabel Buku**

| Kode Buku | Judul                     | Stok Buku |
| --------- | ------------------------- | --------- |
| B01       | Pemograman C++            | 10        |
| B02       | Membuat Aplikasi 30 Menit | 15        |
| B03       | Cooking is Easy           | 15        |

**Tabel Peminjaman**

| Kode pinjam | Tgl pinjam | Kode buku | Kode anggota | jumlah | Tgl kembali |
| ----------- | ---------- | --------- | ------------ | ------ | ----------- |
| PJ01        | 10-01-2019 | B01       | A01          | 1      | 13-01-2019  |
| PJ01        | 10-01-2019 | B02       | A01          | 1      | 13-01-2019  |
| PJ01        | 10-01-2019 | B03       | A01          | 1      | 13-01-2019  |
| PJ02        | 12-01-2019 | B02       | A02          | 1      | 14-01-2019  |
| PJ02        | 12-01-2019 | B03       | A02          | 1      | 14-01-2019  |

### 1. Superkey

Adalah satu atau kelompok kolom nilainya yang secara unik membedakan tuple-tuple pada suatu tabel.

Di masing-masing tabel terdapat lebih dari satu superkey, yaitu :

- Tabel anggota : kode anggota, nama anggota
- Tabel buku : kode buku, judul, stok buku
- Tabel peminjaman : kode pinjam, tgl pinjam, kode buku, kode anggota, juml, tgl kembali
- Tabel pengembalian : kode kembali, kode pinjam

Tabel anggota :

- Kolom kode anggota,
- Kolom no faktur dan kolom nama anggota

Tabel buku :

- Kolom kode buku
- Kolom kombinasi kode buku, judul, stok buku.

### 2. Candidate Key

Adalah superkey di mana tidak ada satupun menjadi superkey lagi. Tidak himpunan bagian dari superkey tersebut semua superkey menjadi candidate key. Candidate key yang terdiri dari dua kolom atau lebih disebut sebagai composite key.

Di masing-masing tabel terdapat lebih candidate key atau bukan candidate key, yaitu :

Tabel anggota :

- Kolom kode anggota, : candidate key
- Kolom no faktur dan kolom nama anggota = bukan candidate key

Tabel buku :

- Kolom kode buku = candidate key
- Kolom kombinasi kode buku, judul, stok buku : bukan candidate key

Tabel Peminjaman :

- Kolom kode pinjam, kode buku, kode anggota : candidate key
- Kolom kombinasi kode pinjam, kode buku, kode anggota, jumlah, dst : bukan candidate key

### 3. Primary Key

Adalah (satu) candidate key yang dipilih (di antara candidate key lain) untuk membedakan tuple-tuple scara unik dalam tabel. Jika dalam satu tabel hanya terdapat satu candidate key (misal tabel anggota dan tabel buku), maka key tersebut menjadi primary key. Tetapi jika terdapat lebih dari satu candidate key (misal tabel penjualan dan tabel pengembalian), maka salah satu candidate key tersebut dpat dijadikan primary key.

### 4. Alternate Key

Adalah candidate key yang tidak dijadikan sebagai primary key. Misal pada tabel pengembalian jika kita memilih kode kembali sebagai primary key, maka kode pinjam dapat dijasikan alternate key.

### 5. Foreign Key

Adalah satu atau kelompok kolom yang nilainya sama atau terkait dengan candidate key pada tabel lain atau pada tabel yang sama.

Misal pada tabel peminjaman ada kolom kode anggota yang terhubung dengan tabel anggota, maka kode anggota adalah foreign key. Kolomkolom yang saling terkait ini sangat penting dalam operasi join.

## Skema Tabel (Relation Skema)

Adalah informasi dasar mendeskripsikan tabel yang terdiri yang atas nama tabel dan sekumpulan pasangan kolom domain.

Contoh : Skema Tabel Anggota<br>
Tabel Anggota (kode anggota, nama)

## Skema Basis Data (Relational Database Schema)

Adalah sekumpulan skema tabel dengan masingmasing tabel memiliki nama yang berbeda.

Contoh : Skema Basis Data Perpustakaan

- Tabel anggota (kode anggota, nama)
- Tabel buku (kode buku, judul, stok buku)
- Tabel peminjaman (kode pinjam, tgl pinjam, kode buku, dst)

## Integrity Constraints

Kita telah bahas mengenai [domain](#3-domain) constraints. Terdapat empat contraints/batasan lain yang menjaga integritas data yang disimpan pada basis data :

1. Null
2. Entity integrity
3. Referential integrity
4. General constraints

### 1. Null

Adalah nilai pada suatu kolom (tuple) masih belum diketahui (unknown). Ini bisa berarti nilai tersebut tidak dapat diterapkan pada kolom tersebut.

Namun, null tidak sama dengan nilai numerik nol atau string “-”; nol dan spasi adalah nilai, tetapi null menunjukkan tidak adanya nilai.

Misal dalam sebuah tabel ada sebuah data yang belum diketahui boleh dituliskan null, akan tetapi hal tersebut tidak berlaku untuk primary key. Karena kolom primary key bersifat unik, jika primary key menyimpan null maka sifat unik dari kolom tersebut akan hilang karena bisa saja beberapa tuple memiliki nilai null.

### 2. Entity Integrity

Adalah batasan atau aturan yang menyatakan bahwa kolom-kolom primary key tidak boleh menyimpan null.

Seperti di jelaskan sebelumnya primary key digunakan untuk mendefinisikan secara unik sebuah tuple.

### 3. Referential Integrity

Adalah batasan yang menyatakan jika suatu tabel memiliki kolom foreign key maka nilai pada foreign key tersebut harus sesuai dengan nilai kolom candidate key dan jika tidak demikian maka foreign key dapat dituliskan null.

Dua keadaan penulisan null tidak perlu dilakukan :

1. Pada saat kolom tersebut diberikan batasan tidak boleh diberikan null.
2. Pada saat kolom tersebut juga merupakan bagian dari primary key.

### 4. General Constraints

Adalah batasan / aturan tambahan yang ditetapkan oleh pemakai atau administrator basis data sesuai aturan/batasan yang ada pada suatu organisasi.

Contoh :

- peminjaman buku tidak diijinkan jika stok buku hanya satu
- Jika anggota masih memiliki buku yang belum dikembalikan maka tidak di perbolehkan untuk meminjam kembali

## Perancangan Basis Data

Proses pembangunan basis data terdiri dari dua tahapan utama :

1. Tahapan analisis dan perancangan
2. Tahapan implementasi.

### 1. Tahapan Analisis

Adalah tahapan pemetaan atau pembuatan model dari dunia nyata menggunakan notasi perancangan basis data tertentu serta pembuatan deskripsi implementasi basis data.

{{< mermaid >}}
flowchart TD
%% Definisi gaya (style) untuk kotak langkah
classDef langkah stroke-width:1px;

    %% Tahap 1: Konseptual (Kiri ke Kanan)
    subgraph Konsep [Perancangan Basis Data Secara Konsep]
        direction LR
        L1["<div style='text-align:left;'><b>Langkah 1 : Penemuan dan<br/>Analisis Fakta</b><hr/>• Identifikasi bagian organisasi<br/>• Penemuan Fakta<br/>• Rangkum hasil penemuan fakta</div>"]:::langkah
        L2["<div style='text-align:left;'><b>Langkah 2 : Membuat ERD</b><hr/>• Tentukan jenis entitas<br/>• Tentukan jenis hubungan entitas<br/>• Tentukan Multiplicity<br/>• Tentukan atribut<br/>• Gambarkan ERD<br/>• Perbaiki Struktur ERD</div>"]:::langkah

        L1 ==> L2
    end

    %% Tahap 2: Logikal (Atas ke Bawah)
    subgraph Logik [Perancangan Basis Data Secara Logik]
        direction TB
        L3["<div style='text-align:left;'><b>Langkah 3 : Memetakan ERD</b><hr/>• Petakan Jenis entitas<br/>• Petakan jenis hubungan entitas<br/>• Petakan atribut bernilai jamak</div>"]:::langkah
        L4["<div style='text-align:left;'><b>Langkah 4 : Menormalkan<br/>Struktur Tabel</b><hr/>• Pemeriksaan normalitas tabel<br/>• Normalisasi Tabel<br/>• Pemeriksaan Validitas tabel</div>"]:::langkah

        L3 ==> L4
    end

    %% Tahap 3: Fisikal (Kanan ke Kiri)
    subgraph Fisik [Perancangan Basis Data Secara Fisik]
        direction RL
        L5["<div style='text-align:left;'><b>Langkah 5 : Membuat<br/>Definisi Skema Basis Data</b><hr/>• Pengkodean dan kompresi tabel<br/>• Memilih DBMS<br/>• Mendefinisikan tabel dasar<br/>• Menangani data turunan</div>"]:::langkah
        L6["<div style='text-align:left;'><b>Langkah 6 : Merancang Organisasi<br/>File dan Indeks</b><hr/>• Menganalisa transaksi pemakai<br/>• Menentukan indeks<br/>• Membuat dokumentasi dan DDL indeks</div>"]:::langkah

        L5 ==> L6
    end

    %% Tahap 4: Implementasi
    subgraph Implementasi [Tahap Implementasi]
        L7["<div style='text-align:left;'><b>Langkah 7 :<br/>Mengimplementasikan DDL</b><hr/>• Menggunakan baris perintah<br/>• Menggunakan antar muka grafis</div>"]:::langkah
    end

    %% Menghubungkan antar tahapan (Alur Ular)
    L2 ==> L3
    L4 ==> L5
    L6 ==> L7

    %% Penyesuaian garis tepi kelompok (subgraph) agar rapi
    style Konsep stroke-width:1px
    style Logik stroke-width:1px
    style Fisik stroke-width:1px
    style Implementasi stroke-width:1px

{{< /mermaid >}}

Tahapan analisis dan perancangan dibagi menjadi tiga, yaitu :

1. Perancangan basis data secara konsep<br>Merupakan proses pembuatan data model dan tidak bergantung pada seluruh aspek fisik basis data.
2. Perancangan Basis Data Secara Logis<br>Merupakan proses pembuatan data model berdasarkan data model tertentu, tetapi tidak bergantug pada DBMS tertentu dan implementasi fisik basis data.
3. Perancangan Basis Data Secara Fisik<br>Merupakan proses pembuatan deskripsi implementasi basis data pada media penyimpanan sekunder (disk). Deskripsi ini menjelaskan tabel-tabel dasar, organisasi file, indeks untuk mendapatkan ases data secara efisien, dan semua integrity contraints, dan langkah-lagkah keamanan.

### 2. Tahapan Implementasi

Tahapan ini mengimplementasikan rancangan basis data yang telah dibuat. Implementasi menggunakan aplikasi klien yang disediakan oleh DBMS terpilih.
