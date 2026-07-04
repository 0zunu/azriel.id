---
title: "Logika dan Algoritma #11: Metode Greedy"
summary: "Greedy diambil dari bahasa inggris berarti rakus, tamak, loba, serakah."
description: "Greedy diambil dari bahasa inggris berarti rakus, tamak, loba, serakah."
categories: ["Algorithm Logic"]
tags: ["greedy", "logic", "algorithm", "greedy-algorithm", "greedy-method"]
series: ["Logic and Algorithms Chapters"]
series_order: 11
date: 2026-04-27T05:02:50+07:00
math: true
draft: false
---

- Greedy diambil dari bahasa inggris berarti rakus, tamak, loba, serakah.
- Prinsip greedy: “_Take What You Can Get Now!_”.
- Algoritma greedy membentuk solusi langkah perlangkah (step by step).
- Greedy adalah strategi pencarian untuk masalah optimasi berbasis prinsip: pada setiap tahap, pilih solusi paling baik. Dengan harapan, semua tahapan ini akan menemukan solusi terbaik untuk masalah tersebut. Algoritma greedy termasuk sederhana dan tidak rumit (Santosa and Ai, 2017).

Untuk mendapatkan solusi optimal dari permasalahan yang mempunyai dua kriteria yaitu:

1. Fungsi Tujuan/Utama
2. Nilai pembatas (constrain)

**Proses Kerja Metode Greedy:**

Untuk menyelesaikan suatu permasalahan dengan n input data yang terdiri dari beberapa fungsi pembatas & 1 fungsi tujuan yang diselesaikan dengan memilih beberapa solusi yang mungkin (feasible solution/feasible sets), yaitu bila telah memenuhi fungsi tujuan/obyektif.

**Contoh Persoalan Optimasi:**

**(Masalah Penukaran Uang):**<br>
Diberikan uang senilai A. Tukar A dengan koin-koin uang yang ada. Berapa jumlah minimum koin yang diperlukan untuk penukaran tersebut?

**Contoh 1**: tersedia banyak koin 1, 5, 10, 25

- Uang senilai A = 32 dapat ditukar dengan banyak cara berikut:<br>
  32 = 1 + 1 + … + 1 (32 koin)<br>
  32 = 5 + 5 + 5 + 5 + 10 + 1 + 1 (7 koin)<br>
  32 = 10 + 10 + 10 + 1 + 1 (5 koin)<br>
  … dst<br>
- Minimum: 32 = 25 + 5 + 1 + 1 (4 koin)

Metode GREEDY digunakan dalam penyelesaian masalah-masalah :

1. Optimal On Tape Storage Problem
2. Knapsack Problem

## 1. Optimal On Tape Storage Problem

- Permasalahan bagaimana mengoptimalisasi storage/memory dalam komputer agar data yg disimpan dapat termuat dengan optimal.

- Misalkan terdapat n program yang akan disimpan didalam pita (tape). Pita tersebut mempunyai panjang maksimal sebesar L, masing-masing program yang akan disimpan mempunyai panjang L1,L2,L3...,Ln . Cara penyimpanan adalah **terurut (sequential)**.

### Penerapan dari Optimal On Tape Storage Problem adalah:

- Terdapat pada Pita Kaset
- Media penyimpanan pada abad 19
- Sebelum era digitalisasi pada abad 20

### Kriteria Greedy pada Optimal On Tape Storage Problem:

{{< katex >}}

_Fungsi tujuan: Optimal Storage_ = \\( \displaystyle D(I) = \sum*{j=1}^{n} \sum*{k=1}^{j} l\_{ik} \\)

_Fungsi Pembatas : Mean Retrieval Time (MRT)_ = \\( \displaystyle \sum\_{j=1}^{n} t_j / n \\)

**Contoh soal:**<br>
Penyimpanan pada pita kaset terdapat 3 file lagu dengan durasi waktu 5 menit,10 menit, 3 menit. Tentukan urutannya agar dapat menghemat media penyimpanannya?

Penyelesaiannya:

1. Menemukan 2 kriteria greedy<br>
   Fungsi tujuan: optimalisasi media penyimpanan Fungsi pembatas : waktu akses file (Mean Retrieval Time)
2. Mencari Feasible Solution<br>
   Alternatif solusi yang dapat digunakan untuk memperoleh optimal solution<br>
   Jumlah Feasible Solution untuk 3 buah file input adalah: N Faktorial dimana N: Jumlah File 3!=3x2x1=6

3. Menghitung Fungsi Tujuan & Fungsi Pembatas

| Ordering | Panjang | D (I)                                                                       |    MRT     |
| :------: | :-----: | :-------------------------------------------------------------------------- | :--------: |
|  1,2,3   | 5,10,3  | 5 + (5+10) + (5+10+3) = 38                                                  | 38/3=12,66 |
|  1,3,2   | 5,3,10  | 5 + (5+3) + (5+3+10) = 31                                                   | 31/3=10,33 |
|  2,1,3   | 10,5,3  | 10 + (10+5) + (10+5+3) = 43                                                 | 43/3=14,33 |
|  2,3,1   | 10,3,5  | 10 + (10+3) + (10+3+5) = 41                                                 | 41/3=13,66 |
|  3,1,2   | 3,5,10  | 3 + (3+5) + (3+5+10) = <span style="color:red; font-weight:bold;">29</span> | 29/3=9,66  |
|  3,2,1   | 3,10,5  | 3 + (3+10) + (3+10+5) = 34                                                  | 34/3=11,33 |

**(L1,L2,L3) = (5,10,3)**

Dari tabel tersebut, didapat susunan/order yang optimal,sbb :

- susunan pertama untuk program ke tiga
- susunan kedua untuk program kesatu
- susunan ketiga untuk program kedua

**Kunci dari permasalahan Optimal On Tape Storage Problem adalah Susunan File dari ukuran Kecil Kebesar (Increasing)**

## 2. KNAPSACK Problem

- Knapsack adalah tas atau karung
- Karung digunakan memuat objek, tentunya tidak semua objek dapat ditampung di dalam karung.
- Karung hanya dapat menyimpan beberapa objek dengan total ukurannya (weight) lebih kecil atau sama dengan ukuran kapasitas karung.

Gambar ilustrasi terdapat tas berkapasitas 15kg, ada 5 barang dengan berat dan keuntungannya masing-masing. Persoalannya adalah barang mana saja yang harus dimasukan ke dalam tas (Aristi, 2015)..

**Kasus:**

- Terdapat n obyek (Xi;i=1,2,3,....n)
- Masing-masing mempunyai berat (weight)/Wi
- Masing-masing memiliki nilai (profit)/Pi yang berbeda-beda.

### Masalah KNAPSACK Problem

Bagaimana obyek-obyek tersebut dimuat/dimasukan kedalam ransel (knapsack) yang mempunyai kapasitas max=M.

Sehingga timbul permasalahan sbb:

- Bagaimana memilih obyek yang akan dimuat dari n obyek yang ada sehingga nilai obyek termuat jumlahnya sesuai dengan kapasitas( M)
- Jika semua obyek harus dimuat ke dalam ransel maka **berapa bagian** dari setiap obyek yang ada dapat dimuat ke dalam ransel sedemikian sehingga nilai kumulatif max & sesuai dengan kapasitas ransel ?

### Penyelesaian Knapsack Problem dapat dilakukan dengan:

1. Secara Matematika
2. Kriteria Greedy
3. Algoritma Pemrograman Greedy

#### 1. Penyelesaian Knapsack Secara Matematika

**Fungsi tujuan = fungsi utama/obyektif**<br>
Fungsi yang menjadi penyelesaian permasalahan dengan mendapatkan solusi yang optimal.

**Solusi dimaksud** = menemukan nilai/profit yanggmaksimal untuk jumlah obyek yang dimuat dalam ransel sehingga sesuai kapasitas.

**Fungsi Tujuan** Maksimum : \\( \displaystyle \sum\_{i=1}^{n} P_i X_i \\)

**Fungsi pembatas = fungsi subyektif**<br>
Fungsi yang bertujuan untuk memberikan batas maksimal dari setiap obyek untuk dapat dimuat dalam ransel sehingga kapasitasnya tidak melebihi dari jumlah maksimal daya tampung ransel.

**Fungsi Pembatas** : \\( \displaystyle \sum\_{i=1}^{n} W_i X_i \le M \\)

dimana : 0 \\(\le\\) Xi \\(\le\\) 1; Pi >0;Wi>0

> Catatan : karena dengan menggunakan Matematika sangat sulit dan rumit maka tidak dibahas lebih mendalam.

#### 2. Penyelesaian Dengan Kriteria Greedy

Konsep dari kriteria yang ditawarkan oleh metode Greedy yaitu :

- Pilih obyek (barang) dengan nilai Pi maximal atau terbesar
- Pilih obyek (barang) dengan berat Wi minimal dahulu.
- Pilih obyek (barang) dgn perbandingan nilai & berat yaitu Pi/Wi yang terbesar.

**Contoh:**<br>
**Diketahui bahwa kapasitas M = 20kg**<br>
**Dengan jumlah barang n=3**

- Berat Wi masing-masing barang<br>
  (W1, W2, W3) = (18, 15, 10)
- Nilai Pi masing-masing barang<br>
  (P1, P2, P3) = (25, 24, 15)

**Pilih barang dengan Nilai Profit Maksimal**

- P1 = 25 -> X1 = 1, dimisalkan sebagai atas atas nilai
- P2 = 24 -> X2 = 2/15, dihitung dengan Fungsi Pembatas
- P3 = 15 -> X3 = 0, dimisalkan sebagai batas bawah nilai

**Penyelesaian Soal Kriteria Greedy**

**Penyelesaiannya:**

- Barang nilai profit terbesar adalah barang ke-1, maka yang pertama kali dipilih adalah barang ke-1 sebanyak \\( X_1 = 1 \\)
- Setelah barang ke-1 terpilih, maka sisa kapasitas ransel adalah 20 kg - 18 kg = 2 kg.
- Kemudian pilih barang ke-2 sebanyak \\( X_2 \\) = sisa kapasitas ransel / \\( W_2 \\) = 2/15
- Setelah barang ke-2 terpilih, sisa kapasitas ransel = 0 Kg, sehingga barang ke-3 tidak terpilih &rarr; \\( X_3 = 0 \\)
- <b>\\( (X_1, X_2, X_3) = (1, 2/15, 0) \\) adalah <i>feasible solution</i></b>

**Pilih barang dengan Berat Minimal**

- W1 = 18 -> X1 = 0, sebagai batas bawah
- W2 = 15 -> X2 = 2/3,dihitung dgn Fungsi Pembatas
- W3 = 10 -> X3 = 1, sebagai batas atas

**Penyelesaiannya:**

- Barang dengan berat terkecil adalah barang ke-3, maka yang terpilih adalah barang ke-3 sebanyak \\( X_3 = 1 \\)
- Setelah barang ke-3 terpilih, maka sisa kapasitas ransel adalah 20kg - 10kg = 10kg
- Pilih barang ke-2 sebanyak \\( X_2 \\) = Sisa Kapasitas ransel / \\( W_2 \\) = 10/15 = 2/3
- Setelah barang ke-2 terpilih, sisa kapasitas ransel adalah 0Kg, artinya barang ke-1 tidak terpilih &rarr; \\( X_1 = 0 \\)
- <b>\\( (X_1, X_2, X_3) = (0, 2/3, 1) \\) adalah <i>feasible solution</i></b>

**Pilih barang dengan menghitung perbandingan yang terbesar dari**<br>
**Profit dibagi Berat (Pi/Wi) yang diurut secara tidak naik, yaitu :**

- P1/W1 = 25/18 =1.38-> karena terkecil maka X1 = 0
- P2/W2 = 24/15 =1.6-> karena terbesar maka X2 = 1
- P3/W3 = 15/10 =1.5-> dengan Fungsi pembatas X3 = 1/2

**Penyelesaiannya:**

- Barang dengan \\( (P_i/W_i) \\) terbesar adalah barang ke-2, maka yang pertama kali dipilih adalah barang ke-2 sebanyak \\( X_2 = 1 \\)
- Setelah barang ke-2 terpilih, maka sisa kapasitas ransel adalah 20kg - 15kg = 5kg
- Kemudian pilih barang ke-3 sebanyak \\( X_3 \\) = sisa kapasitas ransel / \\( W_3 \\) = 5/10 = 1/2
- Setelah barang ke-3 terpilih, sisa kapasitas ransel adalah 0kg, maka barang ke-1 tidak terpilih &rarr; \\( X_1 = 0 \\)
- <b>\\( (X_1, X_2, X_3) = (0, 1, 1/2) \\) adalah <i>feasible solution</i></b>

Dibuatkan tabel berdasarkan elemen dr ke-3 kriteria metode Greedy

| Solusi ke | \\( (X_1, X_2, X_3) \\) | \\( \sum W_i X_i \\) | \\( \sum P_i X_i \\)                    |
| :-------- | :---------------------: | :------------------: | :-------------------------------------- |
| Pi Max    |     ( 1, 2/15, 0 )      |          20          | (25.1) + (24.(2/15)) + (15.0) = 28.2    |
| Wi Min    |      ( 0, 2/3, 1 )      |          20          | (25.0) + (24.(2/3)) + (15.1) = 31       |
| Pi/Wi max |      ( 0, 1, 1/2 )      |          20          | (25.0) + (24.1) + (15.(1/2)) = **31.5** |

Nilai profit maksimal = 31.5 dengan komposisi yang sama

#### 3. Penyelesaian Algoritma Pemrograman Greedy

Algoritma GREEDY KNAPSACK

```paintext
PROCEDURE GREEDY_KNAPSACK (P, W, X, n)
    REAL P(1:n), W(1:n), X(1:n), M, isi
    INTEGER i, n

    X(1:n) = 0
    isi = M

    FOR i = 1 TO n DO
        IF W(i) > isi THEN
            EXIT
        ENDIF

        X(i) = 1
        isi = isi - W(i)
    REPEAT

    IF i ≤ n THEN
        X(i) = isi / W(i)
    ENDIF

END GREEDY_KNAPSACK
```

Keterangan:<br>
n = Jumlah objek<br>
Wi = Bobot setiap objek<br>
Pi = Profit setiap objek<br>
Xi = Probabilitas setiap objek<br>
M = Kapasitas media<br>
penyimpanan

Efektif jika data (Pi/Wi) disusun secara tidak naik lebih dahulu.

**Penyelesaiannya :**<br>
_Dengan Algoritma Pemrograman Greedy._

Diket. bhw kapasitas **M = 20kg**, degan jumlah barang n=3<br>
Berat Wi masing2 barang = (W1, W2, W3) = (18, 15, 10)<br>
Nilai Pi masing2 barang = (P1, P2, P3) = (25, 24, 15)<br>
Lakukan pengurutan secara tdk naik terhadap hasil Pi/Wi, misalnya :

- P1/Wi -> 25/18 = 1,39 menjadi urutan ke 3
- P2/W2 -> 24/15 = 1,60 menjadi urutan ke 1
- P3/W3 -> 15/10 = 1.50 menjadi urutan ke 2

Sehingga menghasilkan pola urutan data yg baru,yaitu

W1,W2,W3 -> 15, 10, 18 dan<br>
P1,P2,P3 -> 24, 15, 25

Lalu data\\(\_2\\) tsb diinput’ kpd Alg. Greedy, terjadi proses :

**Inisialisasi Awal:**

- \\( X(1:n) \leftarrow 0 \\) ; `isi` \\( \leftarrow 20 \\) ; \\( i = 1 \\)

**Proses Perulangan:**

- **Untuk \\( i = 1 \\):**
  - Cek kondisi: \\( W(1) > \text{isi} \\) ? &rarr; \\( 15 > 20 \\) ? &rarr; **Kondisi SALAH**
  - Karena salah, maka \\( X(1) = 1 \\) &rarr; Berarti bahwa barang tersebut dapat dimuat seluruhnya.
  - `isi` = 20 - 15 = 5 &rarr; Kapasitas ransel berkurang, tersisa 5 kg.

- **Untuk \\( i = 2 \\):**
  - Cek kondisi: \\( W(2) > \text{isi} \\) ? &rarr; \\( 10 > 5 \\) ? &rarr; **Kondisi BENAR**
  - Karena benar, maka \\( X(2) = 5 / 10 = 1/2 \\) &rarr; Benda 10 kg hanya dapat dimuat setengah (1/2) bagian, yaitu 5 kg.

- **Untuk \\( i = 3 \\):**
  - `ENDIF` &rarr; Proses diakhiri karena ransel sudah penuh (kapasitas maksimal 20 kg). Sehingga, \\( X(3) = 0 \\).

**Total Profit:**
Profit nilai yang didapat adalah penjumlahan dari \\( P_1 X_1 + P_2 X_2 + P_3 X_3 \\), yaitu:
<br>
\\( (24 \times 1) + (15 \times 1/2) + (18 \times 0) \\)
\\( = 24 + 7.5 + 0 = \mathbf{31.5} \\)

**Penyelesaiannya:**

x(1:n) <- 0 ; isi <- 20 ; i = 1<br>
FOR i <- 1 TO 3

- **Saat \\( i=1 \\)** Apakah \\( W[1] > \text{isi} \\)? &rarr; \\( 15 > 20 \\)?
  - <b>\\( x[1] \leftarrow 1 \\)</b> &rarr; barang dapat dimuat seluruhnya
  - <b>\\( \text{isi} = 20 - 15 = 5 \\)</b> &rarr; sisa kapasitas 5kg

- **Saat \\( i=2 \\)** Apakah \\( W[2] > \text{isi} \\)? &rarr; \\( 10 > 5 \\)? &rarr; exit
  - Apakah \\( i \le n \\)? &rarr; \\( 2 \le 3 \\)?
  - <b>\\( x[2] = \text{isi}/W[2] = 5/10 = 1/2 \\)</b> &rarr; benda 10kg dimuat 1/2 bagian = 5

- `ENDIF` &rarr; diakhiri karena ransel sudah penuh (max = 20kg)

<b>Profit nilai : \\( P_1 + P_2 + P_3 \\) yaitu:</b>
<br>
<b>\\( 24(1) + 15(1/2) + 18(0) = 24 + 7,5 = 31,5 \\)</b>

Kodingan Program

```py
# Program Penyelesaian algoritma greedy pada knapsack
def fractional_knapsack(value, weight, capacity):
    # Menyimpan daftar indeks barang (0, 1, 2, dst.)
    index = list(range(len(value)))

    # Menghitung rasio value/weight untuk masing-masing barang
    ratio = [v/w for v, w in zip(value, weight)]

    # Mengurutkan indeks barang berdasarkan rasio terbesar ke terkecil (Descending)
    index.sort(key=lambda i: ratio[i], reverse=True)

    max_value = 0
    fractions = [0] * len(value)

    for i in index:
        if weight[i] <= capacity:
            # Jika kapasitas sisa masih cukup untuk menampung seluruh berat barang ini
            fractions[i] = 1
            max_value += value[i]
            capacity -= weight[i]
        else:
            # Jika kapasitas sisa tidak cukup, ambil sebagian saja (fraksi)
            fractions[i] = capacity / weight[i]
            max_value += value[i] * (capacity / weight[i])
            break # Hentikan perulangan karena ransel pasti sudah penuh

    return max_value, fractions

# --- Blok Eksekusi Program Utama ---
n = int(input('Enter number of items: '))

# Mengambil input value (profit) dan diubah menjadi list integer
value = input('Enter the values of the {} item(s) in order: '.format(n)).split()
value = [int(v) for v in value]

# Mengambil input weight (berat) dan diubah menjadi list integer
weight = input('Enter the positive weights of the {} item(s) in order: '.format(n)).split()
weight = [int(w) for w in weight]

capacity = int(input('Enter maximum weight: '))

# Memanggil fungsi dan menyimpan hasil return-nya
max_value, fractions = fractional_knapsack(value, weight, capacity)

# Menampilkan hasil akhir
print('\nThe maximum value of items that can be carried:', max_value)
print('The fractions in which the items should be taken:', fractions)
```

Output:

```
Enter number of items: 3
Enter the values of the 3 item(s) in order: 25 24 15
Enter the positive weights of the 3 item(s) in order: 18 15 10
Enter maximum weight: 20

The maximum value of items that can be carried: 31.5
The fractions in which the items should be taken: [0, 1, 0.5]
```
