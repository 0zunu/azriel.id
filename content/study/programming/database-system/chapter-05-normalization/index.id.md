---
title: "Normalisasi"
summary: "Normalisasi merupakan proses pengelompokan elemen data menjadi tabel–tabel yang menunjuk-kan entity dan relasinya."
description: "Normalisasi merupakan proses pengelompokan elemen data menjadi tabel–tabel yang menunjuk-kan entity dan relasinya."
categories: ["Database Systems"]
tags:
  [
    "1NF",
    "2NF",
    "3NF",
    "BCNF",
    "4NF",
    "5NF",
    "Functional Dependencies",
    "Determinant",
    "Partial Dependency",
    "Transitive Dependency",
    "Key Attributes",
    "Super Key",
    "Candidate Key",
    "Primary Key",
    "Alternate Key",
    "Foreign Key",
  ]
series: ["Database System Chapters"]
series_order: 5
date: 2026-07-11T05:02:50+07:00
draft: false
---

## Normalisasi

Dalam merancang basis data dapat dilakukan dengan:

1. Menerapkan Normalisasi terhadap struktur tabel yang telah diketahui, atau
2. Langsung membuat model Entity-Relationship.

Normalisasi merupakan cara pendekatan lain dalam membangun desain logik basis data dengan menerapkan sejumlah aturan dan kriteria standar untuk menghasilkan struktur tabel yang normal.

## Pengertian Normalisasi

Normalisasi merupakan proses pengelompokan elemen data menjadi tabel–tabel yang menunjuk-kan entity dan relasinya.

Normalisasi adalah proses pengelompokan atributeatribute dari suatu relasi sehingga membentuk WELL STRUCTURE RELATION.

## Well Structure Relation

Adalah sebuah relasi yang jumlah kerangkapan datanya sedikit (minimum Amount Of Redundancy), serta memberikan kemungkinan bagi user untuk melakukan INSERT, DELETE, dan MODIFY terhadap baris-baris data pada relation tersebut, yang tidak berakibat terjadinya ERROR atau INKONSESTENSI DATA, yang disebabkan oleh operasi-operasi tersebut

## Keuntungan Normalisasi

Keuntungan dari normalisasi, yaitu :

1. Meminimalkan ukuran penyimpanan yang diperlukan untuk menyimpan data.
2. Meminimalkan resiko inkonsistensi data pada basis data
3. Meminimalkan kemungkinan anomali pembaruan
4. Memaksimalkan stabilitas struktur data

### Contoh :

Terdapat sebuah relation Course, dengan ketentuan sbb:

1. Setiap mahasiswa hanya boleh mengambil satu matakuliah saja.
2. Setiap matakuliah mempunyai uang kuliah yang standar (tidak tergantung pada mahasiswa yang mengambil matakuliah tsb).

RELASI KURSUS

| STUDENT-ID | KODE-MTK | BIAYA |
| ---------- | -------- | ----- |
| 92130      | CS-200   | 75    |
| 92200      | CS-300   | 100   |
| 92250      | CS-200   | 75    |
| 92425      | CS-400   | 150   |
| 92500      | CS-300   | 100   |
| 92575      | CD-500   | 50    |

Relasi di atas merupakan sebuah relation yang sederhana dan terdiri dari 3 kolom/atribute

Bila diteliti secara seksama, maka akan ditemukan redundancy pada datanya, dimana biaya kuliah selalu berulang pada setiap mhs. Akibatnya besar kemungkinan terjadi Error atau inkonsistensi data, bila dilakukan update terhadap relation tsb yang disebut dengan Anomali

**ANOMALY** merupakan penyimpangan-penyimpangan atau Error atau inkonsistensi data yang terjadi pada saat dilakukan proses insert, delete maupun update.

Terdapat 3 jenis Anomali :

1. **Insertion Anomali**<br>
   Error yang terjadi sebagai akibat operasi insert record/tuple pada sebuah relation

contoh : Ada matakuliah baru (CS-600) yang akan diajarkan, maka matakuliah tsb tidak bisa di insert ke dalam relation tsb sampai ada mhs yang mengambil matakuliah tsb.

2. **Deletion Anomali**<br>
   Error yang terjadi sebagai akibat operasi delete record/tuple pada sebuah relation

Contoh : Mhs dengan student-id 92-425, memutuskan untuk batal ikut kuliah CS-400, karena dia merupakan satu-satunya peserta matakuliah tsb, maka bila record/tuple tsb didelete akan berakibat hilangnya informasi bahwa mata-kuliah CS400, biayanya 150

3. **Update Anomaly**<br>
   Error yang terjadi sebagai akibat inkonsistensi data yang terjadi sebagai akibat dari operasi update record/tuple dari sebuah relation

Contoh : Bila biaya kuliah untuk matakuliah CS-200 dinaikan dari 75 menjadi 100, maka harus dilakukan beberapa kali modifikasi terhadap record-record, tuple-tuple mhs yang mengambil matakuliah CS-200, agar data tetap konsisten

Berdasarkan teori normalisasi, relation course dipecah menjadi 2 relation terpisah , sebagai berikut :

| STUDENT-ID | KODE-MTK |
| ---------- | -------- |
| 92130      | CS-200   |
| 92200      | CS-300   |
| 92250      | CS-200   |
| 92425      | CS-400   |
| 92500      | CS-300   |
| 92575      | CD-500   |

| KODE-MTK | BIAYA |
| -------- | ----- |
| CS-200   | 75    |
| CS-300   | 100   |
| CS-400   | 150   |
| CS-500   | 50    |

**Problem-Problem Pada Relation Yang Sudah Dinormalisasi**

- Performance problem : Masalah terhadap performa database.

Contoh: Sebelum normalisasi, untuk menghasilkan listing data seperti pada relation course, dapat digunakan instruksi SQL sebagai berikut:

**SELECT \* FROM COURSE;**<br>
Setelah dinormalisasi, untuk menghilangkan listing data-data yang sama harus terlebih dahulu menggabungkan tuple-tuple dan relatin STUDENT-MTK dengan tuple-tuple MTK- BIAYA, dengan menggunakan SQL sebagai berikut:

**SELECT Student.Student-id, Mtk.kode-mtk,biaya**<br>
**From student,mtk**<br>
**Where student.kode-mtk=mtk.kode-mtk;**

Hasil yang diperoleh sama, tetapi waktu dieksekusi akan lebih lama

- Referential Integrity Problem : Masalah yang timbul terhadap referensi antar data-data diantara dua tabel atau lebih.

Contoh: Mengacu pada relation student dan mtk

1. Jangan menambah record baru di relation student kecuali kodemtk untuk record baru tersebut sudah terdapat di relation mtk
2. Jangan menghapus(delete) record di relation mtk bila masih terdapat record-record yang berada di relation studen, memiliki kode-mtk yang valuenya sama dengan value kode-mtk yang akan dihapus.

BEBERAPA KONSEP YANG HARUS DIKETAHUI:

a. Field/ Atribut Kunci<br>
b. Kebergantungan Fungsi

## Atribut Kunci (Field)

a. Key Field / atribut kunci dalam database:

1. Super key<br>
   Yaitu himpunan dari satu atau lebih entitas yang digunakan untuk mengidentifikasikan secara unik sebuah entitas dalam entitas set.
2. Candidate key<br>
   Yaitu satu attribute atau satu set minimal atribute yang mengidentifikasikan secara unik suatu kejadian yang spesifik dari entity.
3. Primary key<br>
   Yaitu satu atribute atau satu set minimal atribute yang tidak hanya mengidentifikasikan secara unik suatu kejadian yang spesifik tapi juga dapat mewakili setiap kejadian dari suatu entity
4. Alternate key<br>
   Yaitu kunci kandidat yang tidak dipakai sebagai primary key
5. Foreign key<br>
   yaitu satu atribute (atau satu set atribute) yang melengkapi satu relationship (hubungan yang menunjukkan ke induknya).

SALES

| S#  | SNAME | KODE |
| --- | ----- | ---- |
| S1  | ADI   | 1002 |
| S2  | RAFI  | 1001 |
| S3  | HANY  | 1003 |

PESANAN

| KODE | P#   |
| ---- | ---- |
| 1002 | 2648 |
| 1001 | 2649 |
| 1003 | 2641 |

- Super key = S#, SNAME, KODE
- Candidat key = S#, SNAME
- Primary key = S#
- Altenative key = SNAME
- Foreign key = KODE

## Kebergantungan Kunci

1. Ketergantungan Fungsional (Fungsional Dependent) Keterkaitan antar hubungan antara 2 atribute pada sebuah relasi.

Dituliskan dengan cara : A -> B, yang berarti :

Atribute B fungsionality Dependent terhadap atribute A atau Isi (value) atribute A menentukan isi atribute B

Definisi dari functional dependent :

Diketahui sebuah relasi R, atribute Y dari R adalah FD pada atribute X dari R ditulis R.X -> R.Y jika dan hanya jika tiap harga X dalam R bersesuaian dengan tepat satu harga Y dalam R

Dependensi fungsional didefinisikan sebagai berikut:

Suatu Atribut Y mempunyai dependensi fungsional terhadap atribut X jika dan hanya jika setiap nilai X berhubungan dengan sebuah nilai Y

**Contoh**

Pesanan_jual(pembeli,kota,barang,jumlah)<br>
Yang artinya bahwa relasi pesanan_jual mengandung atribut pembeli,kota,barang dan jumlah

Pada contoh ini,PEMBELI secara fungsional menentukan KOTA, sebab terlihat bahwa untuk PEMBELI yang sama, KOTA-nya juga sama, dengan demikian:

| Pembeli | Kota   | Barang | Jumlah |
| ------- | ------ | ------ | ------ |
| P1      | Yogya  | B1     | 10     |
| P1      | Yogya  | B2     | 5      |
| P2      | Solo   | B1     | 7      |
| P2      | Solo   | B2     | 6      |
| P2      | Solo   | B3     | 6      |
| P3      | Klaten | B3     | 7      |
| P3      | Klaten | B4     | 6      |

PEMBELI → KOTA<br>
**Catatan** : bagian yang terletak disebelah kiri panah biasa disebut penentu(determinan) dan bagian yang terletak disebelah kanan panah disebut yang tergantung(dependen)

Determinant

| Kode_Barang |
| ----------- |
| B001        |
| B002        |
| B003        |

Dependent

| Nama_Barang | Stok      |
| ----------- | --------- |
| Buku Tulis  | SIDU 30   |
| Buku Tulis  | Kiky 80   |
| Buku Tulis  | Global 50 |

Artinya **Kode_Barang** secara fungsional menentukan **Nama_Barang, Stok** sehingga dapat di tuliskan menjadi **kode_barang → nama_barang, stok**

2. **Fully Functionaly Dependent (FFD)**<br>
   Suatu rinci data dikatakan fully functional dependent pada suatu kombinasi rinci data jika functional dependent pada kombinasi rinci data dan tidak functional dependent pada bagian lain dari kombinasi rinci data

Definisi dari FDD:

Atribute Y pada relasi R adalah FFD pada atribute X pada relasi R jika Y FD pada X tida FD pada himpunan bagian dari X

Contoh:

PersonID,Project,Project_budget -> time_spent_byperson_onProject (bukan FFD)<br>
PersonID, Project -> time_spent_byperson_onProject (FDD)

Definisi dependensi fungsional sepenuhnya (FFD)

**Suatu atribut Y mempunyai dependensi fungsional sepenuhnya terhadap atribut X Jika:**

- **Y mempunyai dependensi fungsional terhadap X**
- **Y tidak memiliki dependensi terhadap bagian dari X**

Contoh terdapat pada relasi pelanggan:

PELANGGAN(KODE_PELANGGAN,NAMA,KOTA,NOMOR_FAX) Pada relasi ini:

1. {KODE_PELANGGAN,KOTA}→NOMOR_FAX
2. KODE_PELANGGAN →NOMOR_FAX

Kondisi 1<br>
NOMOR_FAX bergantung pada {KODE_PELANGGAN,KOTA}

Kondisi 2<br>
NOMOR_FAX bergantung pada KODE_PELANGGAN Yang tidak lain adalah bagian dari {KODE_PELANGGAN,KOTA},<br> maka NOMOR_FAX tidaklah mempunyai dependensi fungsional sepenuhnya terhadap {KODE_PELANGGAN,KOTA}.

Dengan kata lain NOMOR_FAX hanya mempunyai dependensi fungsional sepenuhnya terhadap KODE_PELANGGAN

| Kode_Barang | Nama_Barang       | Kode_Pembeli | Nama_Pembeli |
| ----------- | ----------------- | ------------ | ------------ |
| B001        | Buku Tulis SIDU   | P001         | Sinta        |
| B002        | Buku Tulis Kiky   | P002         | Tina         |
| B003        | Buku Tulis Global | P003         | Rina         |
| B001        | Buku Tulis SIDU   | P001         | Sinta        |
| B001        | Buku Tulis SIDU   | P003         | Rina         |
| B002        | Buku Tulis Kiky   | P003         | Rina         |

3. **Ketergantungan Partial**<br>
   Sebagian dari kunci dapat digunakan sebagai kunci utama

4. **Ketergantungan Transitif** : Menjadi atribute biasa pada suatu relasi tetapi menjadi kunci pada relasi lain. **Suatu atribut Z mempunyai dependensi transitif terhadap atribut X bila:**

- **Y memiliki dependensi fungsional terhadap X**
- **Z memiliki dependensi terhadap Y**

| Kuliah            | Ruang  | Tempat         | Waktu              |
| ----------------- | ------ | -------------- | ------------------ |
| Jaringan Komputer | Merapi | Gedung Utara   | Senin,08:00-09:50  |
| Matematika I      | Rama   | Gedung Selatan | Selasa,07:00-08:45 |
| Sistem Pakar      | Sinta  | Gedung Selatan | Rabu,10:00-11:45   |
| Fisika 1          | Merapi | Gedung Utara   | Selasa,08:00-08:50 |

Pada relasi ini:

KULIAH → {RUANG,WAKTU}<br>
RUANG →TEMPAT

Terlihat bahwa:

KULIAH → RUANG → TEMPAT<br>
Dengan demikian TEMPAT mempunyai dependensi transitif terhadap kuliah.

5. **Determinan**<br>
   Suatu atribute (field) atau gabungan atribute dimana beberapa atribute lain bergantung sepenuhnya pada atribute tersebut

## Bentuk Normal

Aturan-aturan normalisasi dinyatakan dengan istilah bentuk normal. **Bentuk normal** adalah suatu aturan yang dikenakan pada relasi-relasi dalam basis data dan harus dipenuhi oleh relasi-relasi tersebut pada level-level normalisasi.

Beberapa level yang biasa digunakan pada normalisasi adalah:

- Bentuk normal pertama (1NF)
- Bentuk normal kedua (2NF)
- Bentuk normal ketiga (3NF)
- Bentuk normal Boyce-Codd (BCNF)
- Bentuk normal keepat (4NF)
- Bentuk Normal kelima (5NF)

## Langkah-Langkah Pembuatan Normalisasi

{{< mermaid >}}
flowchart TD
%% Definisi Entitas Tahap Normalisasi (Bentuk Kotak)
UN["BENTUK TIDAK NORMAL<br>UNNORMALIZED"]
1NF["FIRST NORMAL FORM<br>(1NF)"]
2NF["SECOND NORMAL FORM<br>(2NF)"]
3NF["THIRD NORMAL FORM<br>(3NF)"]
BCNF["BOYCE-CODD NORMAL FORM (BCNF)"]
4NF["FOURTH NORMAL FORM<br>(4NF)"]
5NF["FIFTH NORMAL FORM<br>(5NF)"]

    %% Definisi Entitas Aksi/Syarat (Bentuk Oval)
    Act1(["MENGHILANGKAN ELEMEN<br>DATA BERULANG"])
    Act2(["MENGHILANGKAN<br>KETERGANTUNGAN PARTIAL"])
    Act3(["MENGHILANGKAN<br>KETERGANTUNGAN TRANSITIF"])
    Act4(["Menghilangkan kunci kandidat yg bkn<br>merupakan determinan"])
    Act5(["Menghilangkan ketergantungan multi<br>value yg bkn merup. Ketergantungan<br>fungsional"])
    Act6(["Menghilangkan ketergantungan join<br>yg bkn merupakan kunci kandidat"])

    %% Relasi Tahapan (Garis Lurus dengan Panah)
    UN --> 1NF
    1NF --> 2NF
    2NF --> 3NF
    3NF --> BCNF
    BCNF --> 4NF
    4NF --> 5NF

    %% Relasi Syarat (Garis Putus-putus Tanpa Panah)
    UN -.- Act1
    1NF -.- Act2
    2NF -.- Act3
    3NF -.- Act4
    BCNF -.- Act5
    4NF -.- Act6

    %% Pengaturan Gaya (Opsional: Membuat garis panah lebih tebal agar mirip asli)
    linkStyle 0,1,2,3,4,5 stroke-width:2px;

{{< /mermaid >}}

## Bentuk Tidak Normal (Unnormalized)

Bentuk tidak normal adalah bentuk tabel yang belum ternormalisasi. Tabel yang belum ternormalisasi adalah tabel yang memiliki atribut yang berulang.

Contoh data :

| no_siswa | Nama   | PA      | kelas1 | kelas2 | kelas3 |
| -------- | ------ | ------- | ------ | ------ | ------ |
| 22890100 | Rafi   | Rachmat | 1234   | 1543   | 1543   |
| 22890101 | Thoriq | Adi     | 1234   | 1775   |        |

Ket : PA = Penasehat Akademik

Siswa yg punya nomor siswa, nama, dan PA mengikuti 3 mata pelajaran/kelas. Disini ada perulangan kelas 3 kali ini bukan bentuk 1 NF

### Bentuk Normal Pertama (1NF)

Definisi bentuk normal pertama adalah:

Suatu Relasi dikatakan dalam bentuk normal pertama jika dan hanya jika setiap atribut bernilai tunggal untuk setiap baris.

| no_siswa | Nama   | Pa      | kode_kelas |
| -------- | ------ | ------- | ---------- |
| 22890100 | Rafi   | Rachmat | 1234       |
| 22890100 | Rafi   | Rachmat | 1543       |
| 22890101 | Thoriq | Adi     | 1234       |
| 22890101 | Thoriq | Adi     | 1775       |
| 22890101 | Thoriq | Adi     | 1543       |

### Bentuk Normal Kedua (2NF)

Bentuk normal kedua didefinisikan berdasarkan dependensi fungsional.

Suatu relasi berada dalam bentuk normal kedua jika dan hanya jika:

- Berada pada bentuk normal pertama
- Semua atribut bukan kunci memiliki depedensi sepenuhnya terhadap kunci primer.

Atribut bukan kunci adalah atribut yang tidak merupakan kunci primer

Relasi Siswa

| No-siswa | Nama   | Pa      |
| -------- | ------ | ------- |
| 22890100 | Rafi   | Rachmat |
| 22890101 | Thoriq | Adi     |

Relasi ambil_kelas

| No-siswa | Kode_kelas |
| -------- | ---------- |
| 22890100 | 1234       |
| 22890100 | 1543       |
| 22890101 | 1234       |
| 22890101 | 1775       |
| 22890101 | 1543       |

### Bentuk Normal Ketiga (3NF)

Definisi bentuk normal ketiga:

Suatu relasi dikatakan dalam bentuk normal ketiga (3NF) jika:

- Berada dalam bentuk normal kedua
- Setiap atribut bukan kunci tidak memiliki dependensi transitif terhadap kunci primer.

> Contoh pada bentuk normal kedua di atas termasuk juga bentuk normal ke tiga karena seluruh atribute yang ada disitu bergantung penuh pada kunci primernya

Relasi Siswa

| No-siswa | Nama   | Pa      |
| -------- | ------ | ------- |
| 22890100 | Rafi   | Rachmat |
| 22890101 | Thoriq | Adi     |

Relasi ambil_kelas

| No-siswa | Kode_kelas |
| -------- | ---------- |
| 22890100 | 1234       |
| 22890100 | 1543       |
| 22890101 | 1234       |
| 22890101 | 1775       |
| 22890101 | 1543       |

### Bentuk Normal Boyce-Codd (BCNF)

Definisi bentuk normal Boyce-Codd:

Suatu relasi disebut memenuhi bentuk normal Boyce-Codd jika dan hanya jika semua penentu (determinan) adalah kunci kandidat (atribut yang bersifat unik)

BCNF merupakan bentuk normal sebagai perbaikan terhadap 3NF. Suatu relasi yang memenuhi BCNF selalu memenuhi 3NF, tetapi tidak untuk sebaliknya.

Pada contoh di bawah ini terdapat relasi seminar dengan ketentuan sbb :

1. Kunci primer adalah no_siswa+seminar.
2. Siswa boleh mengambil satu atau dua seminar.
3. Setiap siswa dibimbing oleh salah satu diantara 2 instruktur seminar tsb.
4. Setiap instruktur boleh hanya mengambil satu seminar saja.

Pada contoh ini no_siswa dan seminar menunjuk seorang instruktur :

Relasi seminar

| no_siswa | Seminar | Instruktur |
| -------- | ------- | ---------- |
| 22890100 | 2281    | Si doel    |
| 22890101 | 2281    | Pak tile   |
| 22890102 | 2291    | Mandra     |
| 22890101 | 2291    | Basuki     |
| 22890109 | 2291    | Basuki     |

Bentuk relasi seminar adalah bentuk normal ketiga, tetapi tidak BCNF karena nomor seminar masih bergantung fungsi pada instruktur, jika setiap instruktur dapat mengajar hanya pada satu seminar. Seminar bergantung fungsi pada satu atribute bukan superkey seperti yg disyaratkan oleh BCNF. Maka relasi seminar haruslah dipecah menjadi dua yaitu :

Relasi pengajar

| Instruktur | Seminar |
| ---------- | ------- |
| Si doel    | 2281    |
| Pak tile   | 2281    |
| Mandra     | 2291    |
| Basuki     | 2291    |

| no_siswa | Instruktur |
| -------- | ---------- |
| 22890100 | Si doel    |
| 22890101 | Pak tile   |
| 22890102 | Mandra     |
| 22890101 | Basuki     |
| 22890109 | Basuki     |

### Bentuk Normal Keempat (4NF) dan Bentuk Normal Kelima (5NF)

Bentuk normal keempat berkaitan dengan sifat Ketergantungan Banyak-Nilai (Multivalued Depedency) pada suatu tabel yang merupakan pengembangan dari ketergantungan fungsional.

Bentuk normal kelima merupakan nama lain dari ProjectJoin Normal Form (PNJF) yaitu berhubungan dengan ketergantungan relasi antar tabel (Join Dependency)

#### Studi Kasus Perpustakaan

Daftar Anggota Perpustakaan

| Kode Anggota | Nama    |
| ------------ | ------- |
| A01          | Surya   |
| A02          | Fitri   |
| A03          | Syahrur |

Daftar Buku Perpustakaan

| Kode Buku | Judul                     | Stok Buku |
| --------- | ------------------------- | --------- |
| B01       | Pemograman C++            | 10        |
| B02       | Membuat Aplikasi 30 Menit | 15        |
| B03       | Cooking is Easy           | 15        |

Bukti Peminjaman Buku

Tanggal Pinjam: 10 Januari 2019<br>
No. Anggota: A01<br>
No. Pinjam : PJ01

| Kode Buku | Judul Buku                | Jumlah Buku |
| --------- | ------------------------- | ----------- |
| B01       | Pemograman C++            | 1           |
| B02       | Membuat Aplikasi 30 Menit | 1           |
| B03       | Cooking is Easy           | 1           |

Tanggal Kembali : 13 Januari 2019

Dari ketiga dokumen tersebut buatlah normalisasinya.

**Contoh**

| Bentuk Tidak Normal | Bentuk 1NF     |
| ------------------- | :------------- |
| Kode_anggota        | Kode_anggota\* |
| Nama                | Nama           |
| Kode_buku           | Kode_buku\*    |
| Judul               | Judul          |
| Stok buku           | Stok buku      |
| Tanggal pinjam      | Tanggal pinjam |
| No_pinjam           | No_pinjam\*    |
| kode_anggota        | kode_anggota   |
| Kode_buku           | Kode_buku      |
| Judul               | Judul          |
| Juml                | Juml           |
| tglkembali          | tglkembali     |

##### 2NF

{{< mermaid >}}
classDiagram
direction LR

    class `Tabel Anggota` {
        Kode_anggota*
        Nama
    }

    class `Tabel Pinjam` {
        Tanggal pinjam
        No_pinjam*
        Juml
        tglkembali
        Kode_buku**
        Kode_anggota**
    }

    class `Tabel Buku` {
        Kode_buku*
        Judul
        Stok buku
    }

    %% Relasi (Panah dari Foreign Key ke Primary Key)
    `Tabel Pinjam` <--> `Tabel Anggota`
    `Tabel Pinjam` <--> `Tabel Buku`

{{< /mermaid >}}

##### 3NF

{{< mermaid >}}
classDiagram
direction LR

    class `Tabel Anggota` {
        Kode_anggota *
        Nama
    }

    class `Tabel Pinjam` {
        Tanggal pinjam
        No_pinjam *
        Total_buku
        tglkembali
        Kode_anggota **
    }

    class `Tabel Detail Pinjam` {
        No_pinjam
        Kode_buku **
    }

    class `Tabel Buku` {
        Kode_buku *
        Judul
        Stok buku
    }

    %% Relasi antar tabel
    `Tabel Pinjam` <--> `Tabel Anggota`
    `Tabel Detail Pinjam` <--> `Tabel Pinjam`
    `Tabel Detail Pinjam` <--> `Tabel Buku`

{{< /mermaid >}}

#### Studi Kasus Normalisasi

FAKTUR PEMBELIAN BARANG<br>
PT. SANTA PURI<br>
Jalan senopati 11<br>
yogyakarta

Kode Suplier: G01<br>
Nama Suplier: Gobel Nustra<br>
Tanggal: 05/09/2000<br>
Nomor: 998

| Kode | Nama Barang   | Qty  | Harga        | Jumlah    |
| ---- | ------------- | ---- | ------------ | --------- |
| A01  | AC SPLIT ½ PK | 10.0 | 135,000      | 1,350,000 |
| A02  | AC SPLIT 1 PK | 10.0 | 200,000      | 2,000,000 |
|      |               |      | Total Faktur | 3,350,000 |

Jatuh tempo faktur: 09/09/2000

1. Step 1 bentuk unnormalized

| no fac | kode supp | nama supp | kode brg | nama barang   | tanggal  | jatuh tempo | qty | harga  | jumlah  | Total   |
| ------ | --------- | --------- | -------- | ------------- | -------- | ----------- | --- | ------ | ------- | ------- |
| 779    | S02       | Hitachi   | R02      | RICE COOKER   | 02/09/00 | 08/09/00    | 10  | 15000  | 150000  | 150000  |
| 998    | G01       | Gobel N   | A01      | AC SPLIT ½ PK | 05/09/00 | 09/09/00    | 10  | 135000 | 1350000 | 3350000 |
|        |           |           | A02      | AC SPLIT 1 PK |          |             | 10  | 200000 | 2000000 |         |

2. Step 2 bentuk 1 NF

| nofac | kode supp | nama supp | Kode brg | nama barang   | tanggal  | jatuh tempo | qty | harga  | jumlah  | Total   |
| ----- | --------- | --------- | -------- | ------------- | -------- | ----------- | --- | ------ | ------- | ------- |
| 779   | S02       | Hitachi   | R02      | RICE COOKER   | 02/09/00 | 08/09/00    | 10  | 15000  | 150000  | 150000  |
| 998   | G01       | Gobel N   | A01      | AC SPLIT ½ PK | 05/09/00 | 09/09/00    | 10  | 135000 | 1350000 | 3350000 |
| 998   | G01       | Gobel N   | A02      | AC SPLIT 1 PK | 05/09/00 | 09/09/00    | 10  | 200000 | 2000000 | 3350000 |

3. Step 3 bentuk 2 NF

{{< mermaid >}}
classDiagram
direction LR

    class `Tabel Supplier` {
        Kode Supplier *
        Nama Supplier
    }

    class `Tabel Nota` {
        No Nota *
        Tanggal
        Tempo
        Qty
        harga
        Total
        KodeSupplier **
        KodeBarang **
    }

    class `Tabel Barang` {
        Kode barang *
        Nama barang
    }

    %% Relasi antar tabel (dari Foreign Key ke Primary Key)
    `Tabel Nota` <--> `Tabel Supplier`
    `Tabel Nota` <--> `Tabel Barang`

{{< /mermaid >}}

4. Step IV Bentuk 3 NF

{{< mermaid >}}
classDiagram
direction LR

    class `Tabel Supplier` {
        Kode Supplier *
        Nama Supplier
    }

    class `Tabel Nota` {
        No Nota *
        Tanggal
        Tempo
        Total
        kode Supplier **
    }

    class `Tabel Transaksi Brg` {
        No Nota **
        Kode Barang **
        Qty
        Harga
    }

    class `Tabel Barang` {
        Kode barang *
        Nama barang
    }

    note "Keterangan: * Kunci primer dari tabel. ** Kunci tame/penghubung dari tabel thp induknya"

    %% Relasi antar tabel
    `Tabel Nota` <--> `Tabel Supplier`
    `Tabel Transaksi Brg` <--> `Tabel Nota`
    `Tabel Transaksi Brg` <--> `Tabel Barang`

{{< /mermaid >}}
