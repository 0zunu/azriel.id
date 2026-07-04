---
title: "Logika dan Algoritma #10: Teknik Searching dan Pengantar Analisis Algoritma"
summary: "Teknik dalam memilih dan menyeleksi sebuah elemen dari beberapa elemen yang ada."
description: "Teknik dalam memilih dan menyeleksi sebuah elemen dari beberapa elemen yang ada."
categories: ["Algorithm Logic"]
tags: ["learn", "coding", "algorithms", "logic", "searching", "analysis"]
series: ["Logic and Algorithms Chapters"]
series_order: 10
date: 2026-04-26T05:02:50+07:00
math: true
draft: false
---

## 1. Pengertian Teknik Searching (Pencarian)

Teknik dalam memilih dan menyeleksi sebuah elemen dari beberapa elemen yang ada.

## 2. Teknik Searching (Pencarian)

1. Teknik Linear/Sequential Search
2. Teknik StraitMAXMIN

## Teknik Linear/Sequential Search

### a. Linear/Sequential Search (Untuk data yang belum terurut/yang sudah terurut )

Pencarian yang dimulai dari record-1 diteruskan ke record selanjutnya yaitu record-2, ke-3,..., sampai diperoleh isi record sama dengan informasi yang dicari (Nilai X).

Kecepatan Waktu Pencarian tergantung pada: **Jumlah elemen data dan posisi data yang dicari**

#### Algoritma :

1. Tentukan I = 1
2. Ketika Nilai (I) <> X Maka Tambahkan I = I +1
3. Ulangi langkah No. 2 sampai Nilai(I) = X atau I > N
4. Jika I = N+1 Maka Cetak “Pencarian Gagal” selain itu Cetak “ Pencarian Sukses “

**Contoh 1:**

Data A = `{ 10, 4, 9, 1, 15, 7 }`<br>
Dicari 15

**Langkah pencariannnya:**

- Langkah 1: A[1] = 10
- Langkah 2: 10 <> 15, maka A[2] = 4
- Langkah 3: ulangi langkah 2
  - Langkah 2: 4 <> 15, maka A[3] = 9
  - Langkah 2: 9 <> 15, maka A[4] = 1
  - Langkah 2: 1 <> 15, maka A[5] = 15
  - Langkah 2: 15 = 15
- Langkah 4: “Pencarian Sukses”

**Contoh 2:**
Apabila ditemukan kondisi: Nilai (I) = N + 1, maka pencarian tidak ditemukan atau gagal. Dikarenakan jumlah elemen adalah N, N + 1 artinya data yang dicari bukan merupakan elemen data dari N.

**Kodingan Program Teknik Sequential/Linier Search**

```py
def seqSearch(data, key):
    i = 0
    pos = i + 1

    # Looping untuk memeriksa data satu per satu dari indeks awal
    while i < len(data):
        if data[i] == key:
            break # Berhenti mencari jika data sudah ditemukan
        i += 1
        pos = i + 1

    # Mengecek apakah posisi akhir berada di dalam batas jumlah elemen array
    if pos <= len(data):
        print('data', key, 'ditemukan di posisi', pos)
    else:
        print('data tidak ditemukan')

    return pos

# --- Blok pemanggilan fungsi ---
data = [10, 4, 9, 1, 15, 7]
print("Array data:", data)
print("Mencari angka 15...")

seqSearch(data, 15)
```

Hasil Program

```
data 15 ditemukan di posisi 5
```

## Teknik Pencarian MAXMIN

### b. Teknik STRAITMAXMIN

- Menentukan/mencari elemen max&min. Pada Himpunan yang berbentuk array linear.
- Analisis waktu tempuh/time complexity yang digunakan untuk menyelesaikan pencarian hingga mendapatkan tingkat kompleksitas yang terbagi atas **best case, worst case** dan **average case**

**Algoritma untuk mencari elemen MaxMin dalam pemrograman Python :**

```py
def STRAITMAXMIN(A, n):
    # Inisialisasi nilai max dan min dengan elemen pertama array
    max = A[0]
    min = A[0]

    # Looping dimulai dari elemen kedua (indeks 1) hingga elemen ke-n
    for i in range(1, n):
        # Jika elemen saat ini lebih besar dari 'max', perbarui 'max'
        if A[i] > max:
            max = A[i]
        # Jika tidak lebih besar, cek apakah ia lebih kecil dari 'min'
        elif A[i] < min:
            min = A[i]

    # Cetak hasil akhirnya (berada di luar blok for)
    print("Max =", max, ", Min =", min)
```

\*Keterangan:

B = Benar<br>
S = Salah

{{< mermaid >}}
flowchart TD
%% Node Awal
Start([Mulai]) --> Init{{"max=A[0]<br>min=A[0]"}}
Init --> SetI["i=1"]

    %% Titik Pengecekan Looping (i < n)
    SetI --> CekLoop{"i < n"}

    %% Alur jika Benar (B) masuk ke pengecekan max/min
    CekLoop -- B --> CekMax{"A[i] > max"}

    %% Alur jika Salah (S) dari pengecekan i < n langsung ke Cetak
    CekLoop -- S --> Cetak[/"Cetak max & min"/]

    %% Pengecekan Nilai Maximum
    CekMax -- B --> SetMax["max=A[i]"]
    CekMax -- S --> CekMin{"A[i] < min"}

    %% Pengecekan Nilai Minimum
    CekMin -- B --> SetMin["min=A[i]"]

    %% Semua alur proses bermuara ke increment i+=1
    SetMax --> Inc["i+=1"]
    CekMin -- S --> Inc
    SetMin --> Inc

    %% Kembali ke pengecekan awal (Looping)
    Inc --> CekLoop

    %% Node Akhir
    Cetak --> Selesai([Selesai])

{{< /mermaid >}}

### Base Case

- Pada kasus ini keadaan tercapai jika elemen pada himpunan A disusun secara increasing (menaik).
- Dengan perbandingan waktu n - 1 kali satuan operasi.
- Kondisi pencarian yang tercepat/terbaik

**Contoh :**

Terdapat himpunan A yang berisi 4 buah bilangan telah disusun secara increasing dengan A[0]=2, A[1]=4, A[2]=5, A[3]=10.

Tentukan/cari Bilangan Max&Min serta jumlah operasi perbandingan yang dilakukan.

\*Keterangan

B = Benar<br>
S = Salah<br>
P = Perbandingan

| 2   | 4   | 5   | 10  |
| --- | --- | --- | --- |
| Max | 4   | 5   | 10  |
| Min | 2   | 2   | 2   |
| P   | 1   | 1   | 1   |

Total Perbandingan = 3

{{< mermaid >}}
flowchart TD
%% Node Awal
Start([Mulai]) --> Init{{"max=A[0]<br>min=A[0]"}}
Init --> SetI["i=1"]

    %% Titik Pengecekan Looping (i < n)
    SetI --> CekLoop{"i < n"}

    %% Alur jika Benar (B) masuk ke pengecekan max/min
    CekLoop -- B --> CekMax{"A[i] > max"}

    %% Alur jika Salah (S) dari pengecekan i < n langsung ke Cetak
    CekLoop -- S --> Cetak[/"Cetak max & min"/]

    %% Pengecekan Nilai Maximum
    CekMax -- B --> SetMax["max=A[i]"]
    CekMax -- S --> CekMin{"A[i] < min"}

    %% Pengecekan Nilai Minimum
    CekMin -- B --> SetMin["min=A[i]"]

    %% Semua alur proses bermuara ke increment i+=1
    SetMax --> Inc["i+=1"]
    CekMin -- S --> Inc
    SetMin --> Inc

    %% Kembali ke pengecekan awal (Looping)
    Inc --> CekLoop

    %% Node Akhir
    Cetak --> Selesai([Selesai])

{{< /mermaid >}}

**Penyelesaian Best Case:**

- Untuk masalah tersebut dapat digunakan procedure STRAITMAXMIN yang menghasilkan bilangan Min=2 & bilangan Max=10,
- Operasi perbandingan data mencari bilangan MaxMin dari himpunan tersebut (n-1)=3 kali operasi perbandingan.

### Worst Case

- Pada kasus ini terjadi jika elemen dalam himpunan nilai yang terbesar berada di paling depan atau disusun secara decreasing (menurun).
- Dengan Oprasi perbandingan sebanyak **2(n-1)** kali satuan operasi.
- Kondisi Pencarian Terlama/Terburuk.

**Contoh :**

Mencari elemen MaxMin & jumlah oprasi perbandingan yang dilakukan terhadap himpunan A yang disusun decreasing.

A[0]=80, A[1]=21, A[2]=6, A[3]=-10

\*Keterangan

B = Benar<br>
S = Salah<br>
P = Perbandingan

| 80  | 21  | 6   | -10 |
| --- | --- | --- | --- |
| Max | 80  | 80  | 80  |
| Min | 21  | 6   | -10 |
| P   | 2   | 2   | 2   |

Total Perbandingan = 6

{{< mermaid >}}
flowchart TD
%% Node Awal
Start([Mulai]) --> Init{{"max=A[0]<br>min=A[0]"}}
Init --> SetI["i=1"]

    %% Titik Pengecekan Looping (i < n)
    SetI --> CekLoop{"i < n"}

    %% Alur jika Benar (B) masuk ke pengecekan max/min
    CekLoop -- B --> CekMax{"A[i] > max"}

    %% Alur jika Salah (S) dari pengecekan i < n langsung ke Cetak
    CekLoop -- S --> Cetak[/"Cetak max & min"/]

    %% Pengecekan Nilai Maximum
    CekMax -- B --> SetMax["max=A[i]"]
    CekMax -- S --> CekMin{"A[i] < min"}

    %% Pengecekan Nilai Minimum
    CekMin -- B --> SetMin["min=A[i]"]

    %% Semua alur proses bermuara ke increment i+=1
    SetMax --> Inc["i+=1"]
    CekMin -- S --> Inc
    SetMin --> Inc

    %% Kembali ke pengecekan awal (Looping)
    Inc --> CekLoop

    %% Node Akhir
    Cetak --> Selesai([Selesai])

{{< /mermaid >}}

**Penyelesaian Worst Case**

- Untuk masalah tersebut dengan proses STRAITMAXMIN adalah elemen max=80 & elemen min=-10,
- Operasi perbandingan untuk elemen Maxmin tersebut adalah 2(4-1) = 6 kali satuan operasi.

### Average Case

- Digunakan untuk memprediksi jumlah langkah/operasi jika pencarian elemen MaxMin dilakukan pada elemen dalam himpunan yang tersusun secara acak (tidak decreasing/tidak increasing).
- Jumlah prediksi operasi Perbandingan yang dilakukan adalah ratarata waktu tempuh best case & worst case, yaitu:

{{< katex >}}

$$
\begin{aligned}
&\frac{1}{2} [(n - 1) + 2(n - 1)] \\[8pt]
&= \frac{1}{2} (n - 1 + 2n - 2) \\[8pt]
&= \frac{1}{2} (3n - 3) = \frac{3}{2}n - \frac{3}{2} \quad \text{Kali}
\end{aligned}
$$

- Kondisi Pencarian acak

**Contoh:**

Pada himpuan A yg berisi { 5,-4, 9, 7 } dilakukan pencarian elemen max & min dengan menggunakan proses STRAITMAXMIN. Berapa elemen maxmin yang didapatkan & jumlah oprasi perbandingan yang dilakukan.

\*Keterangan

B = Benar<br>
S = Salah<br>
P = Perbandingan

| 5   | -4  | 9   | 7   |
| --- | --- | --- | --- |
| Max | 5   | 9   | 9   |
| Min | -4  | -4  | -4  |
| P   | 1   | 2   | 1   |

Total Perbandingan = 5

{{< mermaid >}}
flowchart TD
%% Node Awal
Start([Mulai]) --> Init{{"max=A[0]<br>min=A[0]"}}
Init --> SetI["i=1"]

    %% Titik Pengecekan Looping (i < n)
    SetI --> CekLoop{"i < n"}

    %% Alur jika Benar (B) masuk ke pengecekan max/min
    CekLoop -- B --> CekMax{"A[i] > max"}

    %% Alur jika Salah (S) dari pengecekan i < n langsung ke Cetak
    CekLoop -- S --> Cetak[/"Cetak max & min"/]

    %% Pengecekan Nilai Maximum
    CekMax -- B --> SetMax["max=A[i]"]
    CekMax -- S --> CekMin{"A[i] < min"}

    %% Pengecekan Nilai Minimum
    CekMin -- B --> SetMin["min=A[i]"]

    %% Semua alur proses bermuara ke increment i+=1
    SetMax --> Inc["i+=1"]
    CekMin -- S --> Inc
    SetMin --> Inc

    %% Kembali ke pengecekan awal (Looping)
    Inc --> CekLoop

    %% Node Akhir
    Cetak --> Selesai([Selesai])

{{< /mermaid >}}

**Penyelesaian kasus acak**

Contoh: A = { 5, -4, 9, 7 }<br>
**Operasi Perbandingan : 5 \*Penyelesaian kasus acak tidak bisa menggunakan rumus dikarenakan hasil perbandingan akan berada diantara Best Case dan Worst Case Best Case < Average Case < Worst Case**

Dimana menggunakan rumus: **3/2 n - 3/2 = 3/2\*4 - 3/2 = 4,5**

> Note: Penggunaan average case digunakan untuk membandingkan algoritma dimana jika terjadi perbedaan nilai yang lebih baik antara Best Case dan Worst Case seperti merge sort dan quick sort. Dimana best case lebih baik quick sort namun worst case lebih baik merge sort sehingga untuk menentukan algoritma terbaik dilakukan perbandingan average case (Tidak dibahas karena merupakan analisis algoritma yang lebih mendalam)

## Kesimpulan Analisis Algoritma

- Setiap Algoritma bisa dianalis langkah operasi yang dilakukan untuk menentukan kompleksitasnya
- Untuk menyatakan suatu algoritma lebih baik bisa dilakukan dengan membandingkan kompleksitas algoritma tersebut secara menyeluruh
- Jika terjadi perbedaan nilai yang lebih baik antara Best Case dan Worst Case, maka untuk menentukanalgoritma terbaik bisa dilakukan perbandingan Average Case
