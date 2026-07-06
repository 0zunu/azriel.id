---
title: "Konsep Dasar Basis Data"
summary: "Sistem basis data berkaitan penting dalam pengembangan bidang rekayasa perangkat lunak, dan database menjadi kerangka kerja yang mendasari sistem informasi dan secara mendasar merubah cara banyak organisasi beroperasi."
description: "Sistem basis data berkaitan penting dalam pengembangan bidang rekayasa perangkat lunak, dan database menjadi kerangka kerja yang mendasari sistem informasi dan secara mendasar merubah cara banyak organisasi beroperasi."
categories: ["Database Systems"]
tags: ["DBMS", "DDL", "DML"]
series: ["Database System Chapters"]
series_order: 1
date: 2026-06-20T05:02:50+07:00
draft: false
---

## Pengenalan Basis Data

Basis Data (Database), pada saat ini sangat berdampak besar pada perkembangan ekonomi dan masyarakat. Sistem basis data berkaitan penting dalam pengembangan bidang rekayasa perangkat lunak, dan database menjadi kerangka kerja yang mendasari sistem informasi dan secara mendasar merubah cara banyak organisasi beroperasi.

Contoh Penggunaan Basis Data pada aplikasi: aplikasi pengelolaan nomor telepon, aplikasi pembayaran gaji perusahaan, dll.

### Contoh Penggunaan Basis Data

- Peminjaman pada Perpustakaan

Ketika kita melakukan peminjaman di perpustakaan, kemungkinan besar basis data diakses. Petugas akan memasukkan kode buku atau menggunakan mesin pembaca, mesin ini dihubungkan dengan aplikasi database barang untuk mengetahui data buku tersebut. Aplikasi itu kemudian akan mengurangi jumlah stok buku tersebut dan menampilkan jumlah stok yang ada kepada petugas. Jika jumlah stok buku yang ada sudah di bawah ambang batas bawah stok, maka sistem database akan secara otomatis menginformasikan kepada petugas bahwa peminjaman sudah tidak bisa dilakukan. Atau, jika pembaca menanyakan ketersediaan sebuah buku , maka petugas bisa melakukan pemeriksaan stok buku dan lokasi penyimpanan buku, dengan menjalankan aplikasi yang menentukan ketersediaan buku dari basis data.

{{< mermaid >}}
flowchart LR
%% Entitas Database
DB[(Basis Data Perpustakaan)]

    %% Grup yang membungkus tabel-tabel (merepresentasikan elips putus-putus)
    subgraph IsiDatabase ["Isi dari Basis Data Perpustakaan"]
        direction TB
        B[Tabel Buku]
        M[Tabel Anggota]
        R[Tabel Pengembalian]
        BW[Tabel Peminjaman]
    end

    %% Garis penghubung putus-putus dari Database ke Grup
    DB -.- IsiDatabase

    %% Styling agar grup (subgraph) memiliki garis putus-putus seperti elips pada draw.io
    style IsiDatabase fill:none,stroke-width:2px,stroke-dasharray: 8 8

{{< /mermaid >}}

## Konsep Dasar Basis Data

**BASIS** dapat diartikan sebagai markas atau gudang, tempat bersarang (berkumpul).

**DATA** adalah representasi fakta dunia nyata yang mewakili suatu objek seperti manusia (pegawai, siswa, pembeli, pelanggan), barang, hewan, peristiwa, konsep, keadaan, dan sebagainya, yang diwujudkan dalam bentuk angga, huruf, simbol, teks, gambar, bunyi, atau kombinasinya.

**BASIS DATA (DATABASE)** adalah himpunan kelompok data/ kumpulan data yang saling berhubungan secara logis dan deskripsinya, yang disimpan secara sedemikian rupa dan dirancang untuk bersama memenuhi kebutuhan informasi organisasi.

## Prinsip Dan Tujuan Basis Data

- Prinsip utamanya adalah pengaturan data/arsip.
- Tujuan utamanya adalah kemudahan dan kecepatan dalam pengambilan data/arsip. Yang sangat ditonjolkan dalam basis data adalah pengaturan, pemilahan, pengelompokkan, pengorganisasian data yang akan kita simpan sesuai fungsi/jenisnya. Pengorganisasian data tersebut dapat dalam bentuk tabel terpisah atau dalam bentuk pendefinisian kolom (field) data dalam setiap tabel.

## Operasi Dasar Basis Data

Operasi dasar yang dapat kita lakukan pada basis data , adalah :

1. Create database
2. Drop database
3. Create table
4. Drop table
5. Insert
6. Query
7. Update
8. Delete

## Sistem Basis Data

**Sistem** adalah sebuah tatanan yang terdiri atas
sejumlah komponen fungsional yang saling
berhubungan dan secara bersama-sama bertujuan
untuk memenuhi suatu proses tertentu.

Contoh :<br>
Sistem = kendaraan<br>
Komponen fungsional = pemantik/starter (untuk memulai pengapian), komponen pengapian (untuk pembakaran BBm yang membuat torak bekerja), dst.

- Basis data hanyalah sebuah objek yang pasif.
- Software/aplikasi/program adalah penggerak atau pengelolanya.
- Sistem adalah gabungan dari keduanya.

**Sistem Basis Data** merupakan sistem yang terdiri atas kumpulan tabel data yang saling berhubungan dan sekumpulan program (DBMS) yang memungkinkan beberapa pemakai dan/atau program lain untuk mengakses dan memanipulasi tabel-tabel data tersebut.

## Database Management System (DBMS)

**DBMS adalah** perangkat lunak yang memungkinkan pemakai untuk mendefinisikan, mengelola, dan mengontrol akses ke basis data. DBMS yang mengelola basis data relational disebut dengan Relational DBMS **(RDBMS)**

Contoh perangkat lunak yang termasuk DBMS: dBase, FoxBase, Rbase, Microsoft-Access, Borland Paradox / Borland Interbase, MS-SQL Server, Oracle, Informix, Sybase, MySQL, dll.

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

{{< mermaid >}}
flowchart LR
%% Definisi Gaya (Warna biru muda seperti pada gambar)

    %% Kotak besar terluar yang membungkus sistem backend
    subgraph SistemUtama [ ]
        direction LR

        %% Database
        DB[("<b>Database</b><hr/>Tabel Anggota, Tabel Buku, Tabel<br/>Peminjaman, Tabel<br/>Pengembalian + deskripsi Tabel")]:::kotakPutih

        %% DBMS
        DBMS["DBMS"]:::kotakBiru

        %% Kelompok Aplikasi
        subgraph GrupAplikasi [ ]
            direction TB
            A1["Masukkan Data<br/>Laporan<hr/><i>Aplikasi Peminjaman</i>"]:::kotakBiru
            A2["Masukkan Data<br/>Laporan<hr/><i>Aplikasi Pengembalian</i>"]:::kotakBiru
        end

        %% Hubungan internal sistem
        DB <--> DBMS
        DBMS <--> A1
        DBMS <--> A2
    end

    %% Entitas Pengguna (Client)
    User1["🖥️ Anggota"]:::kotakPutih
    User2["🖥️ Petugas"]:::kotakPutih

    %% Hubungan eksternal (Aplikasi ke Pengguna)
    A1 <--> User1
    A2 <--> User2

    %% Styling garis tepi untuk subgraph
    style SistemUtama fill:none,stroke-width:1px
    style GrupAplikasi fill:none,stroke-width:1px

{{< /mermaid >}}

Penjelasan Gambar diatas menunjukkan bagaimana sebuah komputer mengakses sebuah database :

Database menampung semua data, dimulai dari anggota, data buku sampai Sehingga dengan data transaksi peminjaman dan pengembalian, anggota dapat melihat data buku yang tersedia dalam perpustakaan begitu pula anggota dapat melihat buku apa saja yang sudah dipinjam dan waktu pengembaliannya. Begitu pula dengan petugas dapat melihat fungsi yang sama pula.

## Komponen Sistem Basis Data

{{< mermaid >}}
flowchart LR
%% Definisi warna (mengikuti nuansa biru pada gambar)

    %% Sisi Kiri: Machine (Mesin)
    subgraph Machine [Machine]
        direction LR
        H[Hardware]:::kotakBiasa --- S[Software]:::kotakBiasa
    end

    %% Bagian Tengah: Data sebagai Bridge (Jembatan)
    D(["<b>Data</b><hr/><i>Bridge</i>"]):::kotakTengah

    %% Sisi Kanan: Human (Manusia)
    subgraph Human [Human]
        direction LR
        Pr[Procedures]:::kotakBiasa --- Pe[People]:::kotakBiasa
    end

    %% Garis penghubung antar kelompok
    Machine -.- D
    D -.- Human

    %% Menghilangkan latar belakang grup agar fokus pada komponen
    style Machine fill:none,stroke-width:1px
    style Human fill:none,stroke-width:1px

{{< /mermaid >}}

Connolly, Thomas M & E Begg, Carolyn, Database System, Apractical Approach to Design, Implementation and Management, 2015, Pearson Education, United Kingdom

### 1. Hardware

DBMS dan aplikasi membutuhkan perangkat keras untuk dapat berjalan. Perangkat keras dapat berkisar dari satu komputer pribadi ke mainframe tunggal atau jaringan komputer.

Perangkat keras tertentu tergantung pada persyaratan organisasi dan DBMS yang digunakan.

Beberapa DBMS hanya berjalan pada perangkat keras atau sistem operasi tertentu, sementara yang lain berjalan di berbagai perangkat keras dan sistem operasi

### 2. Software

Komponen perangkat lunak perangkat lunak DBMS itu terdiri dari sendiri dan aplikasi program, bersama dengan sistem operasi, termasuk perangkat lunak jaringan jika DBMS sedang digunakan melalui jaringan.

Contoh bahasa pemograman yang dipergunakan : C, C ++, C #, Java, Visual Basic, COBOLPascal, SQL.

### 3. Data

Data adalah komponen terpenting lingkungan DBMS dari (tentunya dari sudut pandang pengguna akhir ). Pada gambar diatas, data dapat bertindak sebagai jembatan antara komponen mesin dan komponen manusia. Basis data berisi data operasional dan metadata, "data tentang data”. Struktur basis data disebut skema.

{{< mermaid >}}
flowchart LR
%% Definisi Gaya (Warna biru muda seperti pada gambar)

    %% Kotak besar terluar yang membungkus sistem backend
    subgraph SistemUtama [ ]
        direction LR

        %% Database
        DB[("<b>Database</b><hr/>Tabel Anggota, Tabel Buku, Tabel<br/>Peminjaman, Tabel<br/>Pengembalian + deskripsi Tabel")]:::kotakPutih

        %% DBMS
        DBMS["DBMS"]:::kotakBiru

        %% Kelompok Aplikasi
        subgraph GrupAplikasi [ ]
            direction TB
            A1["Masukkan Data<br/>Laporan<hr/><i>Aplikasi Peminjaman</i>"]:::kotakBiru
            A2["Masukkan Data<br/>Laporan<hr/><i>Aplikasi Pengembalian</i>"]:::kotakBiru
        end

        %% Hubungan internal sistem
        DB <--> DBMS
        DBMS <--> A1
        DBMS <--> A2
    end

    %% Entitas Pengguna (Client)
    User1["🖥️ Anggota"]:::kotakPutih
    User2["🖥️ Petugas"]:::kotakPutih

    %% Hubungan eksternal (Aplikasi ke Pengguna)
    A1 <--> User1
    A2 <--> User2

    %% Styling garis tepi untuk subgraph
    style SistemUtama fill:none,stroke-width:1px
    style GrupAplikasi fill:none,stroke-width:1px

{{< /mermaid >}}

Skema :

1. Tabel Buku (kode buku, judul buku, dst)
2. TabelAnggota (kode anggota, nama anggota, dst)
3. Tabel Peminjaman (Kode pinjam, tgl pinjam, dst)
4. Tabel Pengembalian (kode kembali, tgl kembali, dst)

### 4. Procedures

Prosedur merujuk pada instruksi dan aturan yang mengatur desain dan penggunaan basis data.

Pengguna sistem dan staf yang mengelola database membutuhkan prosedur terdokumentasi tentang cara menggunakan atau menjalankan sistem.

Prosedur dapat terdiri dari petunjuk tentang cara:

- Masuk ke DBMS.
- Menggunakan fasilitas DBMS atau program aplikasi tertentu.
- Mulai dan hentikan DBMS.
- Buat salinan cadangan dari database.
- Menangani kegagalan perangkat keras atau perangkat lunak.
- Ubah struktur tabel, atur ulang database di beberapa disk, meningkatkan kinerja, atau mengarsipkan data ke penyimpanan sekunder.

### 5. People

Komponen terakhir adalah orang-orang yang terlibat dengan sistem

## Peran Dalam Lingkungan Database

Terdiri dari :

1. Data dan Database Administrator
2. Database Designer
3. Application Developers
4. End-User

### 1. Data dan Database Aministrator

Data Administrator (DA) bertanggung jawab atas sumber daya data, termasuk basis data; pengembangan dan pengelolaan perencanaan pemeliharaan standar, kebijakan dan prosedur; dan desain basis data konseptual / logis.

DA berkonsultasi dengan dan menasihati manajer senior, memastikan bahwa arah pengembangan basis data akan pada akhirnya mendukung tujuan perusahaan.

Database Administrator (DBA) bertanggung jawab atas realisasi fisik database, termasuk desain dan implementasi basis data fisik, keamanan dan kontrol integritas, pemeliharaan operasional, dan memastikan kinerja sistem aplikasi memuaskan untuk pengguna. Peran DBA lebih berorientasi teknis daripada peran DA, yang membutuhkan pengetahuan rinci tentang target DBMS dan lingkungan sistem

### 2. Database Designer

Dalam proyek desain basis data besar, terdapat dua jenis perancang basis data :

1. Perancang basis data fisik, berkenaan dengan mengidentifikasi data (yaitu, entitas dan atribut), hubungan antara data, dan kendala pada data itu harus disimpan dalam database.
2. Perancang basis data logis harus memiliki menyeluruh dan pemahaman lengkap tentang data organisasi dan kendala apa pun pada data ini (kadang disebut aturan bisnis).

### 3. Application Developers

Setelah database diimplementasikan, program aplikasi untuk pengguna akhir juga harus diimplementasikan. Ini adalah tanggung jawab pengembang aplikasi.

Biasanya, pengembang aplikasi bekerja dari spesifikasi yang dihasilkan oleh analis sistem.

### 4. End-User

Pengguna akhir dapat diklasifikasikan sesuai dengan cara mereka menggunakan sistem:

1. **User Umum** : Mereka memanggil database dengan memasukkan operasi perintah sederhana atau memilih opsi dari menu.
2. **User Mahir** : mereka dapat menggunakan bahasa permintaan tingkat tinggi seperti SQL untuk melakukan bahkan mungkin operasi yang diperlukan, menulis program aplikasi untuk mereka gunakan sendiri.

## Bahasa Basis Data

Cara berinteraksi antara pemakai dengan basis data diatur dalam suatu bahasa yang ditetapkan oleh pembuat DBMS.

Dua bentuk Bahasa yaitu :

1. **DDL** (Data Definition Language)
2. **DML** (Data Manipulation Language)

- Detail akan dibahas di pertemuan 10

## Keuntungan DBMS

1. Pengontrolan kerangkapan data
2. Konsistensi data
3. Lebih banyak informasi dari jumlah data yang sama
4. Sharing data
5. Peningkatan integrasi data
6. Peningatan keamanan
7. Penegakan standar layanan

## Kekurangan DBMS

1. Kompleksitas
2. Ukuran
3. Biaya DBMS
4. Biaya Peangkat keras tambahan
5. Biaya konversi teknologi
6. Performa
7. Dampak kegagalan yang lebih besar
