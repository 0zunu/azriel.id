---
title: "Bahasa Query Formal"
summary: "Bahasa Query Formal adalah bahasa pemrograman berbasis aljabar relasional dan kalkulus relasional yang digunakan untuk meminta dan mengekstrak informasi dari basis data."
description: "Bahasa Query Formal adalah bahasa pemrograman berbasis aljabar relasional dan kalkulus relasional yang digunakan untuk meminta dan mengekstrak informasi dari basis data."
categories: ["Database Systems"]
tags: ["Relational Algebra", "Relational Calculus", "Query Language"]
series: ["Database System Chapters"]
series_order: 6
date: 2026-07-06T05:02:50+07:00
draft: false
---

Dalam bahasa Query Formal, ada dua dasar pembentukan bahasa Query, yaitu:

1. Aljabar Relasional
2. Kalkulus Relasional

Dalam pembahasan ini hanya akan membahas tentang Aljabar Relasional karna lebih banyak dijadikan dasar Bahasa Query yang umum digunakan.

## Aljabar Relasional

Adalah kumpulan operasi terhadap relasi, dimana setiap operasi menggunakan satu atau lebih relasi untuk menghasilkan satu relasi yang baru.

Bahasa Query yang didasarkan pada operasi-operasi dalam Aljabar Relasional merupakan bahasa query yang Prosedural.

### Operator Yang Digunakan

#### A. Operator Himpunan

{{< katex >}}

1. Union atau gabungan \((\cup)\)
   <br>Union dari relasi A dan B dinyatakan sebagai
   \(A \cup B\)

   ![himpunan](himpunan.svg)

2. Intersection atau irisan \(( \cap )\)
   <br>Intersection dari relasi A dan B dinyatakan sebagai \(A \cap B\)

   ![alt text](irisan.svg)

3. Difference
   <br>Difference dari relasi A dan B dinyatakan dengan A - B

   ![alt text](difference.svg)

4. Cartesian product
   <br>Product cartesian dari relasi A dan B dinyatakan dengan A X B

   contoh :
   <br>A = { 1,2,3}
   <br>B = { 5,7 }
   <br>A X B = { ( 1,5), (1,7), ( 2,5), (2,7), (3,5),(3,7) }

#### B. Operator Relational

1. Restrict \( \sigma \) adalah Pemilihan tupel atau record
2. Project \( \pi \) adalah pemilihan attribute atau field
3. Divide \( \div \) adalah membagi
4. Join \( \theta \) adalah menggabungkan

##### Aljabar Relational

Operator pada aljabar relationaldibagi menjadi 2 kelompok :

1. Operator dasar untuk fundamental operational
2. Operator tambahan untuk additional operasional

Tabel dibawah ini adalah contoh untuk mengerjakan perintah – perintah Relation Algebra:

RELASI : MATA KULIAH

| KD_MK | NAMA_MK           | SKS | NIP       |
| :---- | :---------------- | :-- | :-------- |
| 207   | LOGIKA & ALGO     | 4   | 199910486 |
| 310   | STRUKTUR DATA     | 3   | 200109655 |
| 360   | SISTEM BASIS DATA | 3   | 200209817 |
| 545   | IMK               | 2   | 200209818 |
| 547   | APSI              | 4   | 200109601 |
| 305   | PEMR. PASCAL      | 4   | 200703073 |
| 544   | DISAIN GRAFIS     | 2   | 200010490 |

RELASI : MAHASISWA

| NIM        | NAMA_MHS | ALAMAT      | J_KEL     |
| :--------- | :------- | :---------- | :-------- |
| 1105090222 | HAFIDZ   | DEPOK       | LAKI-LAKI |
| 1105091002 | RAFFA    | DEPOK       | LAKI-LAKI |
| 1105095000 | NAIA     | DEPOK       | PEREMPUAN |
| 1104030885 | ARIF     | P.LABU      | LAKI-LAKI |
| 1206090501 | LENI     | KMP. MELAYU | PEREMPUAN |
| 1206090582 | WAHYUNI  | TANGERANG   | PEREMPUAN |
| 1205097589 | ARIS     | DEPOK       | LAKI-LAKI |
| 1106094586 | YANI     | CILEDUG     | PEREMPUAN |
| 110709     | BAMBANG  | SALEMBA     | LAKI-LAKI |

RELASI : REGISTRASI

| KD_MK |    NIM     |
| :---: | :--------: |
|  360  | 1105090222 |
|  545  | 1206090501 |
|  547  | 1105095000 |

RELASI : DOSEN

| NIP       | NAMA_DOS  | GAJI    |
| :-------- | :-------- | :------ |
| 199910486 | BILLY     | 3500000 |
| 200109655 | MARDIANA  | 4000000 |
| 200209817 | INDRIYANI | 4500000 |
| 200209818 | SURYANI   | 4250000 |
| 200109601 | DWINITA   | 3500000 |
| 200703073 | MALAU     | 2750000 |
| 200010490 | IRFIANI   | 3500000 |

#### Operator Dasar

Terdiri dari 2 yaitu :

1. Operasi Union ->Operasi yang memakai 1 relasi

**a. Selection \((\sigma)\)** : untuk memilih baris (row) dari suatu relasi

- \(\sigma\) predicate (R) operasi seleksi bekerja pada 1 relasi R dan mendefinisikan relasi yang berisi hanya tuple R yang memenuhi kondisi (predicate).
- Untuk predicate yang lebih rumit dapat dibuat menggunakan operator logikal ^(and), v(or) dan ~(not)

Contoh :

- Mencari tuple-tuple dari MAHASISWA yang memiliki jenis kelamin laki-laki, Ekspresi aljabar relational : \(\sigma\) J_KEL=“LAKI-LAKI” (MAHASISWA)
- Tampilkan data mata kuliah yang memiliki kode 360 atau yang memilki sks 4 \(\sigma\) KD_MK=“360” V SKS=4 (MATAKULIAH)

\(\sigma\)J_KEL=“LAKI-LAKI” (MAHASISWA)

| NIM        | NAMA_MHS | ALAMAT  | J_KEL     |
| :--------- | :------- | :------ | :-------- |
| 1105090222 | HAFIDZ   | DEPOK   | LAKI-LAKI |
| 1105091002 | RAFFA    | DEPOK   | LAKI-LAKI |
| 1104030885 | ARIF     | P.LABU  | LAKI-LAKI |
| 1205097589 | ARIS     | DEPOK   | LAKI-LAKI |
| 110709     | BAMBANG  | SALEMBA | LAKI-LAKI |

\(\sigma\)KD_MK=“360” V SKS=4 (MATAKULIAH)

| KD_MK | NAMA_MK           | SKS | NIP       |
| :---- | :---------------- | :-- | :-------- |
| 207   | LOGIKA & ALGO     | 4   | 199910486 |
| 360   | SISTEM BASIS DATA | 3   | 200209817 |
| 547   | APSI              | 4   | 200109601 |
| 305   | PEMR. PASCAL      | 4   | 200703073 |

**b. Projection \((\pi)\)** digunakan untuk merincikan **kolom**

- \(\pi\) a1…an (R) operasi projeksi bekerja pada 1 relasi R dan mendefinisikan relasi yang berisi subset R secara vertikal menampilkan nilai untuk atribut tertentu dan menghilangkan nilai atribut ganda.

Contoh :
Tampilkan nama beserta gaji dari dosen
<br>\(\pi\) nama_dos,gaji (DOSEN)

| NAMA_DOS  | GAJI    |
| :-------- | :------ |
| BILLY     | 3500000 |
| MARDIANA  | 4000000 |
| INDRIYANI | 4500000 |
| SURYANI   | 4250000 |
| DWINITA   | 3500000 |
| MALAU     | 2750000 |
| IRFIANI   | 3500000 |

2. Operasi Binary -> Operasi yang memakai 2 atau sepasang relasi
   1. Cartesian product ( X ): Operator dengan dua relasi untuk menghasilkan tabel hasil perkalian kartesian. Dalam cartesia product terdapat kerangkapan nilai pada beberapa tuple/record sehingga diperbaiki dengan **join condition** : yaitu dengan memberi syarat/ kondisi khusus.

Contoh : Tampilkan nip,nama_dos (dari relasi Dosen), nama_mk (dari relasi Matakuliah), thn_akademik,smt,hari,jam_ke,waktu,kelas (dari relasi Mengajar) dimana semester mengajar adalah pada semester ‘1’.

**\(\pi\) nip, nama_dos, nama_mk( \(\sigma\) dosen.nip = matakuliah.nip \(\wedge\) matakuliah.sks=3 \((\text{Dosen} \times \text{Matakuliah}\)) )**

Dosen x Matakuliah

| NIP       | NAMA_DOS  | NAMA_MK           |
| :-------- | :-------- | :---------------- |
| 199910486 | BILLY     | LOGIKA & ALGO     |
| 199910487 | BILLY     | STRUKTUR DATA     |
| 199910488 | BILLY     | SISTEM BASIS DATA |
| 199910489 | BILLY     | IMK               |
| 199910490 | BILLY     | APSI              |
| 199910491 | BILLY     | PEMR. PASCAL      |
| 199910492 | BILLY     | DISAIN GRAFIS     |
| 200109655 | MARDIANA  | LOGIKA & ALGO     |
| 200109656 | MARDIANA  | STRUKTUR DATA     |
| 200109657 | MARDIANA  | SISTEM BASIS DATA |
| 200109658 | MARDIANA  | IMK               |
| 200109659 | MARDIANA  | APSI              |
| 200109660 | MARDIANA  | PEMR. PASCAL      |
| 200109661 | MARDIANA  | DISAIN GRAFIS     |
| 200209817 | INDRIYANI | LOGIKA & ALGO     |
| 200209818 | INDRIYANI | STRUKTUR DATA     |
| 200209819 | INDRIYANI | SISTEM BASIS DATA |
| 200209820 | INDRIYANI | IMK               |
| 200209821 | INDRIYANI | APSI              |
| 200209822 | INDRIYANI | PEMR. PASCAL      |
| 200209823 | INDRIYANI | DISAIN GRAFIS     |
| 200209818 | SURYANI   | LOGIKA & ALGO     |
| 200209819 | SURYANI   | STRUKTUR DATA     |
| 200209820 | SURYANI   | SISTEM BASIS DATA |
| 200209821 | SURYANI   | IMK               |
| 200209822 | SURYANI   | APSI              |
| 200209823 | SURYANI   | PEMR. PASCAL      |
| 200209824 | SURYANI   | DISAIN GRAFIS     |
| 200109601 | DWINITA   | LOGIKA & ALGO     |
| 200109602 | DWINITA   | STRUKTUR DATA     |
| 200109603 | DWINITA   | SISTEM BASIS DATA |
| 200109604 | DWINITA   | IMK               |
| 200109605 | DWINITA   | APSI              |
| 200109606 | DWINITA   | PEMR. PASCAL      |
| 200109607 | DWINITA   | DISAIN GRAFIS     |
| 200703073 | MALAU     | LOGIKA & ALGO     |
| 200703074 | MALAU     | STRUKTUR DATA     |
| 200703075 | MALAU     | SISTEM BASIS DATA |
| 200703076 | MALAU     | IMK               |
| 200703077 | MALAU     | APSI              |
| 200703078 | MALAU     | PEMR. PASCAL      |
| 200703079 | MALAU     | DISAIN GRAFIS     |
| 200010490 | IRFIANI   | LOGIKA & ALGO     |
| 200010491 | IRFIANI   | STRUKTUR DATA     |
| 200010492 | IRFIANI   | SISTEM BASIS DATA |
| 200010493 | IRFIANI   | IMK               |
| 200010494 | IRFIANI   | APSI              |
| 200010495 | IRFIANI   | PEMR. PASCAL      |
| 200010496 | IRFIANI   | DISAIN GRAFIS     |

**Dosen x Matakuliah (dosen.nip = matakuliah.nip \(\wedge\) sks=3)**

| NIP       | NAMA_DOS  | NAMA_MK           |
| :-------- | :-------- | :---------------- |
| 200109656 | MARDIANA  | STRUKTUR DATA     |
| 200209819 | INDRIYANI | SISTEM BASIS DATA |

2.  Union \( (\cup) \)
    <br>Operasi untuk menghasilkan gabungan tabel dengan syarat kedua tabel memiliki atribut yang sama yaitu domain atribut ke-i masing-masing tabel harus sama. Hilangkan nilai atribut yang sama.

    RUS={ X I X E R atau X E S}

Contoh : \(\pi \text{ nim(mhs1)} \cup \pi \text{ nim(mhs2)}\)

MHS1

| NIM        | NAMA_MHS | ALAMAT  | J_KEL     |
| :--------- | :------- | :------ | :-------- |
| 1105090222 | HAFIDZ   | DEPOK   | LAKI-LAKI |
| 1105091002 | RAFFA    | DEPOK   | LAKI-LAKI |
| 1104030885 | ARIF     | P.LABU  | LAKI-LAKI |
| 1205097589 | ARIS     | DEPOK   | LAKI-LAKI |
| 110709     | BAMBANG  | SALEMBA | LAKI-LAKI |

MHS2

| NIM        | NAMA_MHS | ALAMAT      | J_KEL     |
| :--------- | :------- | :---------- | :-------- |
| 1105095000 | NAIA     | DEPOK       | PEREMPUAN |
| 1206090501 | LENI     | KMP. MELAYU | PEREMPUAN |
| 1206090582 | WAHYUNI  | TANGERANG   | PEREMPUAN |
| 1106094586 | YANI     | CILEDUG     | PEREMPUAN |

|    NIM     |
| :--------: |
| 1105090222 |
| 1105091002 |
| 1104030885 |
| 1205097589 |
|   110709   |
| 1105095000 |
| 1206090501 |
| 1206090582 |
| 1106094586 |

Hasil : \(\pi \text{ nim(mhs1)} \cup \pi \text{ nim(mhs2)}\)

3.  Set diference ( - )
    <br>Operasi untuk mendapatkan tabel disuatu relasi tapi tidak ada direlasi lainnya.

R – S = { X I X E R dan X E S }

Contoh : Tampilkan nama dari mahasiswa yang tinggal di depok tetapi bukan berjenis kelamin perempuan

Query I : tampilkan nama yang tinggal di depok
<br>\(\pi\) nama_mhs(\(\sigma\) alamat=“DEPOK” (MAHASISWA))

Query II : tampilkan nama yang berjenis kelamin perempuan
<br>\(\pi\) nama(\(\sigma\) j_kel =“PEREMPUAN”)

Tampilkan query I minus query II :
<br>\(\pi\) nama_mhs(\(\sigma\) alamat=“DEPOK”(MAHASISWA)) - \(\pi\) nama(\(\sigma\) j_kel=“PEREMPUAN”)

Query I ( R ) : \(\pi\) nama_mhs(\(\sigma\) alamat=“DEPOK” (MAHASISWA))

| NAMA_MHS |
| -------- |
| HAFIDZ   |
| RAFFA    |
| NAIA     |
| ARIS     |

Query II (S): \(\pi\) nama(\(\sigma\) j_kel =“PEREMPUAN”)

| NAMA_MHS |
| -------- |
| NAIA     |
| LENI     |
| WAHYUNI  |
| YANI     |

\(\pi\) nama_mhs(\(\sigma\) alamat=“DEPOK”(MAHASISWA)) - \(\pi\) nama(\(\sigma\) j_kel=“PEREMPUAN”)

| NAMA_MHS |
| -------- |
| HAFIDZ   |
| RAFFA    |
| ARIS     |

4.  SET INTERSECTION \( (\cap) \)
    <br>Operasi untuk menghasilkan irisan dua tabel dengan syarat kedua tabel memiliki atribut yang sama, domain atribut ke-i kedua tabel tersebut sama.

Contoh: \(\pi\) nama_mhs(\(\sigma\) alamat=“DEPOK”(MAHASISWA)) \( \cap \) \(\pi\) nama(\(\sigma\) j_kel=“PEREMPUAN”)

| NAMA_MHS |
| -------- |
| NAIA     |

Operator Tambahan
<br>Kondisi kerangkapan nilai pada cartesian product diperbaiki oleh join condition, terdiri dari :

1. THETA JOIN
   <br>Operasi yang menggabungkan operasi cartesian product dengan operasi selection dengan suatu kriteria. Notasi Theta Join R►◄FS. Predikat F dapat berupa operator pembanding <,≤,>,≥,≠,=

mahasiswa.►◄mahasiswa.nim=registrasi.nim registrasi

| NIM        | NAMA_MHS | ALAMAT      | J_KEL     | KD_MK | NIM        |
| :--------- | :------- | :---------- | :-------- | :---- | :--------- |
| 1105090222 | HAFIDZ   | DEPOK       | LAKI-LAKI | 360   | 1105090222 |
| 1105095000 | NAIA     | DEPOK       | PEREMPUAN | 547   | 1105095000 |
| 1206090501 | LENI     | KMP. MELAYU | PEREMPUAN | 545   | 1206090501 |

2. NATURAL JOIN
   <br>Operasi menggabungkan operasi selection dan cartesian product dengan suatu kriteria pada kolom yang sama, dimana setiap atribut muncul 1 x. Notasi Natural Join R►◄S.

| NIM        | NAMA_MHS | ALAMAT      | J_KEL     | KD_MK |
| :--------- | :------- | :---------- | :-------- | :---- |
| 1105090222 | HAFIDZ   | DEPOK       | LAKI-LAKI | 360   |
| 1105095000 | NAIA     | DEPOK       | PEREMPUAN | 547   |
| 1206090501 | LENI     | KMP. MELAYU | PEREMPUAN | 545   |

3. DIVISION
   <br>Merupakan operasi pembagian atas tuple-tuple dari 2 relation. Notasi R:S

A

| NIM        | KD_MK |
| :--------- | :---- |
| 1105090222 | 360   |
| 1105090222 | 545   |
| 1105090222 | 547   |
| 1105091002 | 360   |
| 1105091002 | 545   |
| 1105091002 | 547   |
| 1105095000 | 360   |
| 1105095000 | 545   |

B

| KD_MK |
| :---: |
|  360  |

A/B

|    NIM     |
| :--------: |
| 1105090222 |
| 1105091002 |
| 1105095000 |
| 1104030885 |
