---
title: "Model Data"
summary: "Sekumpulan konsep-konsep untuk menerangkan data, hubungan-hubungan antara data, makna data (semantik) dan batasan data."
description: "Sekumpulan konsep-konsep untuk menerangkan data, hubungan-hubungan antara data, makna data (semantik) dan batasan data."
categories: ["Database Systems"]
tags:
  [
    "Database",
    "Data Model",
    "Entity-Relationship Model",
    "Object-Oriented Model",
    "Relational Model",
    "Hierarchical Model",
    "Network Model",
    "UML",
    "ER Diagram",
  ]
series: ["Database Systems Chapters"]
series_order: 3
date: 2026-06-22T05:02:50+07:00
draft: false
---

## Pengertian Model Data

Sekumpulan konsep-konsep untuk menerangkan data, hubungan-hubungan antara data, makna data (semantik) dan batasan data.

## Jenis-Jenis Model Data

A. Model Data Berdasarkan Object<br>
B. Model Data Berdasarkan Record

### A. Model Data Berbasis Objek

Model data berbasis objek menggunakan konsep entitas, atribut dan hubungan antar entitas.

Terdiri dari:

1. Model Keterhubungan Entitas (Entity-Relationship Model)
2. Model Berorientasi Object (Object-Oriented Model)
3. Model Data Semantik (Semantic Data Model)
4. Model Data Fungsional (Functional Data Model)

Model Keterhubungan Entitas (Entity-Relationship Model) merupakan model yang paling populer digunakan dalam perancangan basis data.

#### 1. Entity Relationship Model

Model untuk menjelaskan hubungan antar data dalam basis data berdasarkan suatu persepsi bahwa real world terdiri dari objek-object dasar yang mempunyai hubungan atau relasi antara objek-objek tersebut.

Komponen utama pembentuk Model Entity-Relationship, yaitu: **Entitas** (Entity), **Relasi** (Relation). Kedua komponen ini dideskripsikan lebih lanjut melalui sejumlah **Atribut/Properti**.

![diagram](diagram.png)

|         |                                                                                                                |
| ------- | -------------------------------------------------------------------------------------------------------------- |
| Atribut | kode buku, judul, stok buku                                                                                    |
| Entitas | B01, B02, B03, Pemograman C++, dst.                                                                            |
| Relasi  | hubungan antara kode buku di tabel buku dengan kode buku di tabel peminjaman. Begitu pula dengan kode anggota. |

##### Diagram Entity-Relationship (Diagram E-R)

Model Entity Relationship yang berisi komponen himpunan entitas, relasi, yang dilengkapi atribut-atribut, dapat digambarkan menggunakan Diagram EntityRelationship (Diagram E-R).

Simbol dasar yang digunakan :

{{< mermaid >}}
flowchart LR
%% Pengaturan gaya untuk node teks agar tidak terlihat seperti kotak

    %% Baris 1: Persegi Panjang (id="3" & id="6")
    Bentuk1[ ] ~~~ Teks1[": Menyatakan Himpunan Entitas"]:::teks

    %% Baris 2: Belah Ketupat (id="2" & id="7")
    Bentuk2{ } ~~~ Teks2[": Menunjukan Himpunan Relasi"]:::teks

    %% Baris 3: Elips (id="4" & id="8")
    Bentuk3([ ]) ~~~ Teks3[": Menyatakan Atribut (Atribut key digaris bawahi)"]:::teks

    %% Baris 4: Garis Lurus (id="5" & id="9")
    %% Garis dibuat dengan menghubungkan dua node kosong
    TitikA(( )) ~~~ TitikB(( ))
    TitikA --- TitikB
    TitikB ~~~ Teks4[": Penghubung / Link"]:::teks

    %% Styling tambahan untuk merapikan garis lurus dan menyembunyikan titik bantu
    style TitikA fill:none,stroke:none
    style TitikB fill:none,stroke:none

{{< /mermaid >}}

Dalam Diagram E-R aturan terpenting adalah Kardinalitas relasi/ **Mapping Cardinalities** yang menentukan jumlah entity yang dapat dikaitkan dengan entity lainnya melalui relationship-set.

Jenis Mapping Cardinalities:

- Relasi satu ke satu (one-to-one)
- Relasi satu ke banyak (one-to-Many)
- Relasi banyak ke banyak (many-to-many)

Contoh Relasi one-to-one

{{< mermaid >}}
erDiagram
%% Definisi Relasi
BUKU ||--o{ MEMINJAM : "1"
ANGGOTA ||--o{ MEMINJAM : "1"

    %% Entitas Buku
    BUKU {
        string Kode_buku PK
        string Judul
        int Stok
    }

    %% Entitas Anggota
    ANGGOTA {
        string Kode_anggota PK
        string nama
    }

    %% Entitas Relasi (Transaksi Meminjam)
    MEMINJAM {
        string Kode_buku FK
        string Kode_anggota FK
    }

{{< /mermaid >}}

Contoh Relasi one-to-many

{{< mermaid >}}
erDiagram
%% Definisi Relasi (Kardinalitas 1 ke N direpresentasikan melalui tabel transaksi)
BUKU ||--o{ MEMINJAM : "N"
ANGGOTA ||--o{ MEMINJAM : "1"

    %% Struktur Tabel BUKU
    BUKU {
        string Kode_buku PK
        string Judul
        int Stok
    }

    %% Struktur Tabel ANGGOTA
    ANGGOTA {
        string Kode_anggota PK
        string nama
    }

    %% Struktur Tabel MEMINJAM (Tabel Relasi/Transaksi)
    MEMINJAM {
        string Kode_buku FK
        string Kode_anggota FK
        date Tgl_pinjam
        int Jml
        string dst
    }

{{< /mermaid >}}

Contoh Relasi many-to-many

{{< mermaid >}}
erDiagram
%% Definisi Relasi (Penyelesaian Many-to-Many melalui tabel perantara)
BUKU ||--o{ MEMINJAM : "N"
ANGGOTA ||--o{ MEMINJAM : "N"

    %% Struktur Tabel BUKU
    BUKU {
        string Kode_buku PK
        string Judul
        int Stok
    }

    %% Struktur Tabel ANGGOTA
    ANGGOTA {
        string Kode_anggota PK
        string nama
    }

    %% Struktur Tabel MEMINJAM (Tabel Perantara / Transaksi)
    MEMINJAM {
        string Kode_buku FK
        string Kode_anggota FK
        date Tgl_pinjam
        int Jml
        string dst
    }

{{< /mermaid >}}

#### 2. Model Berorientasi Object (Object-Oriented Model)

{{< mermaid >}}
flowchart TD

    %% Alur Kiri (Database)
    L1["Database declarations<br/>using Java"]
    L2["Object declarations using<br/>Java"]
    DB[("Database")]

    L1 --> L2
    L2 --> DB

    %% Alur Kanan (Application)
    R1["Application code written<br/>using Java"]
    R2["Java program compiler"]
    R3["Application executables<br/>generated"]
    EU(["End user"])

    R1 --> R2
    R2 --> R3
    R3 --> EU

    %% Interaksi antara kedua alur
    DB <-->|interaction| R3

{{< /mermaid >}}

Penggambaran model berbasis objek menggunakan UML. UML Digambarkan dengan 2 Jenis :

1. Structural Diagram
2. Behaviour Diagram

\*Detail pembahasan UML ada di Mata Kuliah Pemodelan
Berbasis Objek

#### Structural Diagram

Structural diagram terdiri dari :

- Class Diagram
- Object Diagram
- Component Diagram
- Deployment Diagram

Structural diagram terdiri dari :

- Class Diagram

Suatu diagram yang memperlihatkan atau menampilkan struktur darisebuah sistem,sistem tersebut akan menampilkan system kelas, atribut dan hubungan antara kelas ketika suatu sistem telah selesai membuat diagram

- Nama Kelas

Digunakan untuk membedakan antara satu kelas dan kelas yang lain. Contohnya : Manusia, Mahasiswa

- Attribute

Digunakan untuk menyimpan state, pada bahasa pemrograman ini berupa field. Bisa juga diartikan apa yang dimiliki oleh sebuah objek. Contohnya : nama, alamat, usia, nim, warnaKuliah

Aturan penggunaan : modifier nama_attribute : tipedata

contoh penggunaan :

- nama : String . dibaca attribute nama memiliki modifier private dengan tipe data string

- Method

Digunakan untuk menyimpan behaviour, pada bahasa pemrograman berupa method yang mengembalikan nilai (non void method) dan method yang tidak mengembalikan nilai (void method). Contohnya : getNama, getAlamat, getUsia

Aturan Penggunaan :

Modifier nama_method([namaParameter : tipeParameter]) : nilai_kembalian

Contoh penggunaan : + getNama() : String

dibaca method getNama memiliki modifier public, tidak memiliki parameter dan memiliki nilai kembalian String

\+ setNama(nama : String) : void

dibaca method setNama memiliki modifier public, memiliki 1 buat parameter yaitu nama dengan tipe parameter String dan tidak memiliki nilai kembalian karena bertipe

{{< mermaid >}}
classDiagram
%% Definisi Superclass & Subclass
class Person {
-lastname
-firstname
-address
-phone
-birthdate
-/ age
}

    class Employee {
    }

    class Patient {
        -amount
        -insurance carrier
        +make appointment()
        +calculate last visit()
        +change status()
        +provide medical history()
    }

    class Nurse {
    }

    class AdministrativeStaff["Administrative Staff"] {
    }

    class Doctor {
    }

    %% Definisi Kelas Pendukung
    class MedicalHistory["Medical History"] {
        -heart disease
        -high blood pressure
        -diabetes
        -allergies
    }

    class HealthTeam["Health Team"] {
    }

    class Bill {
        -date
        -amount
        -purpose
        +generate cancellation fee()
    }

    class Appointment {
        -time
        -date
        -reason
        +cancel without notice()
    }

    class Symptom {
        -name
    }

    class Illness {
        -description
    }

    class Treatment {
        -medication
        -instructions
        -symptom severity
    }

    %% Pewarisan (Generalization)
    Person <|-- Employee
    Person <|-- Patient
    Employee <|-- Nurse
    Employee <|-- AdministrativeStaff
    Employee <|-- Doctor

    %% Komposisi
    Patient "1" *-- "0..1" MedicalHistory : provides >

    %% Asosiasi Biasa
    Patient "1" -- "0..*" Appointment : schedules >
    Appointment "1" -- "0..*" Bill : leads to >
    Patient "1" -- "1..*" Symptom : suffer >
    Doctor "1..*" -- "0..*" Appointment : has scheduled >

    %% Asosiasi Refleksif
    Patient "1" -- "0..*" Patient : +primary insurance carrier

    %% Relasi Many-to-Many & Association Class (Treatment)
    Symptom "0..*" -- "0..*" Illness
    Symptom .. Treatment : Association Class
    Illness .. Treatment : Association Class

    %% Agregasi (Health Team memiliki Nurse, Admin, Doctor)
    HealthTeam "*" o-- "0..*" Nurse
    HealthTeam "*" o-- "0..1" AdministrativeStaff
    HealthTeam "*" o-- "1..*" Doctor

{{< /mermaid >}}

- Class Diagram

- Object Diagram

Suatu diagram yang berfungsi untuk mengatur atribut,objek dan hubungan antara objek diagram juga dapat menampilkan struktur model system dalam waktu tertentu

{{< mermaid >}}
classDiagram
class Patient {
-amount
-insurance carrier
+make appointment()
+calculate last visit()
+change status()
+provide medical history()
}
class Appointment {
-time
-date
-reason
+cancel without notice()
}
class Doctor {
}
class Symptom {
-name
}

    Patient "1" -- "0..*" Appointment : schedules
    Appointment "0..*" -- "1..*" Doctor : has scheduled
    Patient "1" -- "1..*" Symptom : suffer
    Patient "0..*" -- "1" Patient : +primary insurance carrier

{{< /mermaid >}}

{{< mermaid >}}
classDiagram
%% Menampilkan instansiasi objek dengan nilai nyata
class JohnDoePatient["John Doe: Patient"] {
lastname = "Doe"
firstname = "John"
address = "1000 Main Street"
phone = "555-555-5555"
birthdate = "01/01/72"
age = 32
amount = "$0.00"
insurance carrier = "JD Health Insurance"
}

    class Appt1Appointment["Appt1: Appointment"] {
        time = "3:00"
        date = "7/7/2004"
        reason = "pain in neck"
    }

    class DrSmithDoctor["Dr. Smith: Doctor"] {
        lastname = "Smith"
        firstname = "Jane"
        address = "Doctor's Clinic"
        phone = "999-555-5555"
        birthdate = "12/12/64"
        age = 39
    }

    class Symptom1Symptom["Symptom1: Symptom"] {
        name = "muscle pain"
    }

    %% Relasi antar objek (instansiasi relasi)
    JohnDoePatient -- Appt1Appointment
    Appt1Appointment -- DrSmithDoctor
    JohnDoePatient -- Symptom1Symptom

{{< /mermaid >}}

- Component Diagram

Diagram yang menggambarkan struktur dan hubungan antar komponen piranti lunak, termasuk ketergantungan (dependency) di antaranya. Komponen piranti lunak adalah modul berisi code, baik berisi source code maupun binary code, baik library maupun executable, baik yang muncul pada compile time, link time, maupun run time

![component](component.png)

- Deployment Diagram

Diagram yang digunakan memetakan software ke processing node. Menunjukkan konfigurasi elemen pemroses pada saat run time dan software yang ada di dalamnya. Diagram Ini adalah salah satu diagram paling penting dalam tingkat implementasi perangkat lunak dan kadang-kadang ditulis sebelum coding. Dengan menggunakan deployment diagram, kita dapat menentukan ruang yang tersedia dan waktu eksekusi yang tersedia oleh perangkat keras

{{< mermaid >}}
graph TD
%% Definisi Node sebagai Deployment Nodes (menggunakan bentuk kotak 3D)
DB[("Database Server")]
Reg[Registration]
Dorm[Dorm]
Main[Main Building]
Lib[Library]

    %% Koneksi antar node
    Reg --- DB
    Dorm --- DB
    Main --- DB
    Lib --- DB

{{< /mermaid >}}

#### Behavioral Diagram

Behavioral Diagram terdiri dari :

- Use case Diagram
- Sequence Diagram
- Collaboration Diagram
- Statechart Diagram
- Activity Diagram

Behavioral Diagram terdiri dari :

- Use case Diagram : Diagram Menjelaskan bagaimana sistem digunakan dan merupakan titik awal dari pemodelan UML

Use Case Diagram terdiri dari:

{{< mermaid >}}
graph LR
%% Pengaturan gaya agar label teks berada di sebelah kanan simbol
classDef teks fill:none,stroke:none;

    %% Baris 1: Use Case
    UC((Use Case)) ~~~ K1[": Use Case"]:::teks

    %% Baris 2: Actor
    A([Actor]) ~~~ K2[": Actors"]:::teks

    %% Baris 3: Relationship
    --- K3[": Relationship"]:::teks

    %% Baris 4: System Boundary Box
    B[System Boundary Box] ~~~ K4[": System Boundary Boxes"]:::teks

{{< /mermaid >}}

- Sequence Diagram: menggambarkan interaksi antar objek di dalam dan di sekitar sistem (termasuk pengguna, display/form) berupa message yang digambarkan terhadap waktu.
- Sequence diagram terdiri atas dimensi vertikal (waktu) dan dimensi horizontal (objek-objek yang terkait).
- Sequence diagram biasa digunakan untuk menggambarkan skenario atau rangkaian langkah-langkah yang dilakukan sebagai respons dari sebuah event untuk menghasilkan output tertentu. Diawali dari apa yang mentrigger aktivitas tersebut, proses dan perubahan apa saja yang terjadi secara internal dan output apa yang dihasilkan

- Collaboration Diagram :
  - Cara alternatif untuk menggambarkan suatu skenario dari sistem
  - CD juga menggambarkan interaksi antar objek seperti sequence diagram, tetapi lebih menekankan pada peran masing-masing objek dan bukan pada waktu penyampaian message.
  - Setiap message memiliki sequence number.
  - Collaboration Diagram berisi :
    - Obyek, yang digambarkan dalam segi empat/rectangle
    - Hubungan/Link antar obyek, diperlihatkan sebagai garis yang menghubungkan dengan obyek lain.
    - Pesan/Message ditunjukkan sebagai teks dan panah yang mengirim pesan ke penerima pesan

Collaboration vs Sequence Diagram

- Collaboration Diagram
  - Fokus Utama: Menunjukkan hubungan antar objek di samping interaksinya.
  - Visualisasi: Lebih baik untuk memvisualisasikan pattern of collaboration (pola kolaborasi).
  - Efek Objek: Lebih baik untuk memvisualisasikan semua efek dari objek yang diberikan.
  - Kegunaan: Lebih mudah digunakan untuk sesi brainstorming atau fase desain.

- Sequence Diagram
  - Fokus Utama: Menunjukkan urutan message (pesan) secara eksplisit.
  - Visualisasi: Lebih baik dalam memvisualisasikan keseluruhan aliran (flow).
  - Kompleksitas: Lebih baik dalam memvisualisasikan spesifikasi real-time dan skenario yang kompleks.
  - Kegunaan: Cocok untuk fase analisa sistem.

- Statechart Diagram atau yang biasa juga disebut state diagram digunakan untuk mendokumentasikan beragam kondisi/ keadaan yang bisa terjadi terhadap sebuah class dan kegiatan apa saja yang dapat merubah kondisi/keadaan tersebut.

Contohnya sebuah televisi yang dapat berada dalam kondisi menyala atau mati, jika tombol “power” ditekan maka televisi akan menyala, begitu juga sebaliknya akan mati jika tombol “power” ditekan kembali.

- Statechart Diagram

{{< mermaid >}}
graph LR
%% Notasi State
S1[State1] --- Note1[Notasi State: menggambarkan kondisi entitas<br/>dengan segiempat pinggir tumpul]

    %% Notasi Transition
    T1 -- "trigger [guard] / activity" --> T2( )
    T1 --- Note2[Transition: perubahan kondisi objek<br/>akibat sebuah event]

    %% Notasi Initial State
    I1(( )) --- Note3[Initial State: kondisi awal objek<br/>sebelum ada perubahan]

    %% Notasi Final State
    F1((( ))) --- Note4[Final State: objek berhenti memberi<br/>respon terhadap event]

    %% Styling
    classDef note stroke-dasharray: 5 5,text-align:left;
    class Note1,Note2,Note3,Note4 note

{{< /mermaid >}}

- Activity Diagram
  - Menggambarkan proses bisnis dan urutan aktivitas dalam sebuah proses
  - Activity Diagram juga dipakai pada business modeling untuk memperlihatkan urutan aktifitas proses bisnis
  - Struktur diagram ini mirip flowchart atau Data Flow Diagram pada perancangan terstruktur
  - Activity Diagram sangat bermanfaat apabila kita membuat diagram ini terlebih dahulu dalam memodelkan sebuah proses untuk membantu memahami proses secara keseluruhan
  - Activity diagram dibuatberdasarkansebuahataubeberapause case padause case diagram

Simbol Activity Diagram

| Simbol                    | Keterangan                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| ![start](start.svg)       | Start Point                                                                                                         |
| ![end](end.svg)           | End Point                                                                                                           |
| ![activity](activity.svg) | Activities                                                                                                          |
| ![fork](fork.svg)         | Fork                                                                                                                |
| ![join](join.svg)         | Join                                                                                                                |
| ![desicion](desicion.svg) | Desicion                                                                                                            |
| Swimlane                  | Sebuah cara untuk mengelompokkan activity berdasarkan Actor (mengelompokkan activity dalam sebuah urutan yang sama) |

Contoh Activity Diagram

Penarikan Uang dari Account Bank Melalui ATM

![contoh](contoh.png)

#### 3. Semantic Model

Hampir sama dengan Entity Relationship model dimana relasi antara objek dasar tidak dinyatakan dengan simbol tetapi menggunakan kata-kata (Semantic). Sebagai contoh, dengan masih menggunakan relasi pada Bank X sebagaimana contoh sebelumnya, dalam semantic model adalah seperti terlihat pada gambar di atas.

Tanda-tanda yang menggunakan dalam semantic model adalah sebagai berikut :
: Menunjukkan adanya relasi
: menunjukkan atribut

Contoh Kasus Semantic Model

{{< mermaid >}}
graph TD
%% Definisi Node Utama
Peminjaman((Peminjaman))
Anggota((Anggota))
Surya((Surya))

    %% Atribut
    Jml((jml))
    KodeAnggota1(("<u>Kode_anggota</u>"))
    KodeAnggota2(("<u>Kode_anggota</u>"))
    Nama((nama))

    %% Relasi antar Entitas
    Anggota -- "memiliki" --> Peminjaman
    Surya -- "adalah" --> Anggota

    %% Menghubungkan Atribut
    Peminjaman --- Jml
    Peminjaman --- KodeAnggota1
    Surya --- KodeAnggota2
    Surya --- Nama

{{< /mermaid >}}

### B. Model Data Berbasis Record

Model ini berdasarkan pada record untuk menjelaskan kepada user tentang hubungan logic antar data dalam basis data

**PERBEDAAN DENGAN MODEL DATA BERBASIS OBJEK**

Pada record based data model disamping digunakan untuk menguraikan struktur logika keseluruhan dari suatu database, juga digunakan untuk menguraikan implementasi dari sistem database (higher level description of implementation)

#### Model Relational

Terdapat 3 data model pada model data berbasis record:

1. Model Relational,

Dimana data serta hubungan antar data direpresentasikan oleh sejumlah tabel dan masingmasing tabel terdiri dari beberapa kolom yang namanya unique. Model ini berdasarkan notasi teori himpunan (set theory), yaitu relation.

Contoh : data base penjual barang terdiri dari 3 tabel:

- Supllier
- Suku_cadang
- Pengiriman

{{< mermaid >}}
erDiagram
%% Definisi Relasi antar Tabel
SUPPLIER ||--o{ PENGIRIMAN : "melakukan"
SUKU_CADANG ||--o{ PENGIRIMAN : "terdapat pada"

    %% Struktur Tabel SUPPLIER
    SUPPLIER {
        string No_supl PK
        string Nama_pen
        string Status
        string KOTA
    }

    %% Struktur Tabel PENGIRIMAN
    PENGIRIMAN {
        string NO_SUPL FK
        string NO_PART FK
        int JUML
    }

    %% Struktur Tabel SUKU CADANG
    SUKU_CADANG {
        string NO_PART PK
        string NAMA_PART
        string BAHAN_BAKU
        int BERAT
        string KOTA
    }

{{< /mermaid >}}

{{< mermaid >}}
erDiagram
%% Definisi Relasi
POLIKLINIK ||--o{ JADWAL_DOKTER_TUGAS : "memiliki"
JADWAL ||--o{ JADWAL_DOKTER_TUGAS : "memiliki"
DOKTER ||--o{ JADWAL_DOKTER_TUGAS : "melakukan"

    %% Struktur Tabel
    POLIKLINIK {
        string Kd_Poli PK
        string Nm_poli
    }

    JADWAL {
        string Kd_jwl PK
        string Jam
        string Hari
    }

    DOKTER {
        string Kd_dokter PK
        string Nm_dokter
        string Alamat
        string Spesialis
    }

    JADWAL_DOKTER_TUGAS {
        string Kd_poli FK
        string Kd_dokter FK
        string Kd_jwl FK
        string Status_Tugas
    }

{{< /mermaid >}}

#### Model Hirarki

2. Model Hirarki

Dimana data serta hubungan antar data direpresentasikan dengan record dan link (pointer), dimana record-record tersebut disusun dalam bentuk tree (pohon), dan masing-masing node pada tree tersebut merupakan record/grup data elemen dan memiliki hubungan cardinalitas 1:1 dan 1:M

![hirarki](hirarki.png)

{{< mermaid >}}
graph TD
%% Node Utama
Dosen[DOSEN<br/>BAYA]

    %% Node Mata Kuliah
    MK1[SISTEM DATABASE]
    MK2[ANALISA DAN PERANCANGAN SISFO]

    %% Node Mahasiswa
    NINA[NINA]
    LENA[LENA]
    HAFIDZ1[HAFIDZ]
    NOVI[NOVI]
    HAFIDZ2[HAFIDZ]
    NAYA[NAYA]
    RAFA[RAFA]

    %% Hubungan Hierarki
    Dosen --> MK1
    Dosen --> MK2

    MK1 --> NINA
    MK1 --> LENA
    MK1 --> HAFIDZ1
    MK1 --> NOVI

    MK2 --> HAFIDZ2
    MK2 --> NAYA
    MK2 --> RAFA

    %% Penanda panah balik (untuk menunjukkan tanggung jawab/laporan)
    HAFIDZ1 -.-> MK1
    HAFIDZ2 -.-> MK2

{{< /mermaid >}}

#### Model Jaringan

3. Model Jaringan

Distandarisasi tahun 1971 oleh Database Task Group (DBTG) atau disebut juga model CODASYL (Conference on Data System Language), mirip dengan hirarkical model dimana data dan hubungan antar data direpresentasikan dengan record dan links. Perbedaannya terletak pada susunan record dan linknya yaitu network model menyusun record-record dalam bentuk graph dan menyatakan hubungan cardinalitas 1:1, 1:M dan N:M

![jaringan](jaringan.png)

{{< mermaid >}}
graph TD
%% Node Utama
Dosen[DOSEN<br/>BAYA]

    %% Node Mata Kuliah
    MK1[SISTEM DATABASE]
    MK2[ANALISA DAN PERANCANGAN SISFO]

    %% Hubungan Dosen ke Mata Kuliah
    Dosen --> MK1
    Dosen --> MK2

    %% Hubungan Mata Kuliah ke Mahasiswa
    MK1 --> NINA[NINA]
    MK1 --> LENA[LENA]
    MK1 --> NOVI[NOVI]
    MK1 --> HAFIDZ[HAFIDZ]

    MK2 --> HAFIDZ
    MK2 --> NAYA[NAYA]
    MK2 --> RAFA[RAFA]

{{< /mermaid >}}
