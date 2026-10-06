---
title: "Logika dan Algoritma #09: Metode Sorting"
summary: "Proses pengaturan sederetan data ke dalam suatu urutan atau susunan urutan tertentu. Data yang diurutkan dapat berupa data bilangan, data karakter maupun data string (Sitorus, 2015)."
description: "Proses pengaturan sederetan data ke dalam suatu urutan atau susunan urutan tertentu. Data yang diurutkan dapat berupa data bilangan, data karakter maupun data string (Sitorus, 2015)."
categories: ["Algorithm Logic"]
tags: ["learn", "coding", "algorithms", "logic", "sorting methods"]
series: ["Algorithm and Logic Chapters"]
series_order: 9
date: 2026-04-25T05:02:50+07:00
draft: false
---

## Metode Sorting

### 1. Pengertian Sorting

Proses pengaturan sederetan data ke dalam suatu urutan atau susunan urutan tertentu. Data yang diurutkan dapat berupa data bilangan, data karakter maupun data string (Sitorus, 2015).

### 2. Macam-Macam Metode Sorting:

1. Selection Sort
2. Bubble Sort
3. Insertion Sort

Hal yang mempengaruhi Kecepatan Algoritma Sorting: Jumlah Operasi Perbandingan & Jumlah Operasi pemindahan Data Teknik pengurutan dengan cara pemilihan elemen atau proses kerja dengan memilih elemen **data terkecil** untuk kemudian dibandingkan & ditukarkan dengan elemen pada data awal, dst s/d seluruh elemen sehingga menghasilkan pola data yang telah disorting.

### Prinsip Kerja dari Teknik Selection Sort ini adalah :

1. Pengecekan dimulai data ke-1 sampai dengan data ke-n
2. Tentukan index bilangan dengan nilai terkecil dari data bilangan tersebut
3. Tukar bilangan pada index tersebut dengan bilangan pada posisi awal iterasi (I = 0 untuk bilangan pertama) dari data bilangan tersebut
4. Ulangi langkah diatas untuk bilangan berikutnya (I= I+1) sampai n-1 kali

<div style="font-family: sans-serif; color: currentColor; font-size: 16px;">

  <table style="border: none; text-align: center; font-size: 1.2em; border-collapse: collapse; width: 100%; max-width: 600px;">
    <tr style="font-weight: bold;">
      <td style="text-align: left; padding-bottom: 20px;" colspan="2">Contoh :</td>
      <td style="padding-bottom: 20px;">22</td>
      <td style="padding-bottom: 20px;">10</td>
      <td style="padding-bottom: 20px;">15</td>
      <td style="padding-bottom: 20px;">3</td>
      <td style="padding-bottom: 20px;">8</td>
      <td style="padding-bottom: 20px;">2</td>
    </tr>
    <tr>
      <td style="text-align: left; text-decoration: underline; font-weight: bold; padding-bottom: 10px;" colspan="8">Iterasi 1</td>
    </tr>
    <tr style="color: #cc0000;">
      <td colspan="2"></td>
      <td style="padding-bottom: 10px;">1</td>
      <td style="padding-bottom: 10px;">2</td>
      <td style="padding-bottom: 10px;">3</td>
      <td style="padding-bottom: 10px;">4</td>
      <td style="padding-bottom: 10px;">5</td>
      <td style="padding-bottom: 10px;">6</td>
    </tr>
    <tr>
      <td style="text-align: left; width: 120px;">Langkah 1</td><td style="width: 20px;">:</td>
      <td>22</td><td>10</td><td>15</td><td>3</td><td>8</td><td>2</td>
    </tr>
    <tr>
      <td style="text-align: left;">Langkah 2</td><td>:</td>
      <td>22</td><td>10</td><td>15</td><td>3</td><td>8</td><td style="color: #00b0f0; font-weight: bold;">2</td>
    </tr>
    <tr>
      <td style="text-align: left;">Langkah 3</td><td>:</td>
      <td style="color: #7030a0; font-weight: bold;">2</td><td>10</td><td>15</td><td>3</td><td>8</td><td style="color: #7030a0; font-weight: bold;">22</td>
    </tr>
    <tr>
      <td style="text-align: left; padding-bottom: 15px;">Langkah 4</td><td style="padding-bottom: 15px;">:</td>
      <td colspan="6" style="text-align: left; padding-bottom: 15px;">Ulangi langkah 2 dan 3</td>
    </tr>
    <tr>
      <td style="text-align: left; text-decoration: underline; font-weight: bold; padding-bottom: 10px;" colspan="8">Iterasi 2</td>
    </tr>
    <tr>
      <td style="text-align: left;">Langkah 1</td><td>:</td>
      <td>2</td><td>10</td><td>15</td><td>3</td><td>8</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Langkah 2</td><td>:</td>
      <td>2</td><td>10</td><td>15</td><td style="color: #00b0f0; font-weight: bold;">3</td><td>8</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Langkah 3</td><td>:</td>
      <td>2</td><td style="color: #999999; font-weight: bold;">3</td><td>15</td><td style="color: #999999; font-weight: bold;">10</td><td>8</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left; padding-bottom: 15px;">Langkah 4</td><td style="padding-bottom: 15px;">:</td>
      <td colspan="6" style="text-align: left; padding-bottom: 15px;">Ulangi langkah 2 dan 3</td>
    </tr>
    <tr>
      <td style="text-align: left; text-decoration: underline; font-weight: bold; padding-bottom: 10px;" colspan="8">Iterasi 3</td>
    </tr>
    <tr>
      <td style="text-align: left;">Langkah 1</td><td>:</td>
      <td>2</td><td>3</td><td>15</td><td>10</td><td>8</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Langkah 2</td><td>:</td>
      <td>2</td><td>3</td><td>15</td><td>10</td><td style="color: #00b0f0; font-weight: bold;">8</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Langkah 3</td><td>:</td>
      <td>2</td><td>3</td><td style="color: #00b0f0; font-weight: bold;">8</td><td>10</td><td style="color: #999999; font-weight: bold;">15</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left; padding-bottom: 15px;">Langkah 4</td><td style="padding-bottom: 15px;">:</td>
      <td colspan="6" style="text-align: left; padding-bottom: 15px;">Ulangi langkah 2 dan 3</td>
    </tr>
    <tr>
      <td style="text-align: left; text-decoration: underline; font-weight: bold; padding-bottom: 10px;" colspan="8">Iterasi 4</td>
    </tr>
    <tr>
      <td style="text-align: left;">Langkah 1</td><td>:</td>
      <td>2</td><td>3</td><td>8</td><td>10</td><td>15</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Langkah 2</td><td>:</td>
      <td>2</td><td>3</td><td>8</td><td style="color: #00b0f0; font-weight: bold;">10</td><td>15</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Langkah 3</td><td>:</td>
      <td>2</td><td>3</td><td>8</td><td style="color: #00b0f0; font-weight: bold;">10</td><td style="color: #999999; font-weight: bold;">15</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left; padding-bottom: 15px;">Langkah 4</td><td style="padding-bottom: 15px;">:</td>
      <td colspan="6" style="text-align: left; padding-bottom: 15px;">Ulangi langkah 2 dan 3</td>
    </tr>
    <tr>
      <td style="text-align: left; text-decoration: underline; font-weight: bold; padding-bottom: 10px;" colspan="8">Iterasi 5</td>
    </tr>
    <tr>
      <td style="text-align: left;">Langkah 1</td><td>:</td>
      <td>2</td><td>3</td><td>8</td><td>10</td><td>15</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Langkah 2</td><td>:</td>
      <td>2</td><td>3</td><td>8</td><td>10</td><td style="color: #00b0f0; font-weight: bold;">15</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Langkah 3</td><td>:</td>
      <td>2</td><td style="color: #999999; font-weight: bold;">3</td><td style="color: #999999; font-weight: bold;">8</td><td>10</td><td style="color: #00b0f0; font-weight: bold;">15</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left; padding-bottom: 15px;">Langkah 4</td><td style="padding-bottom: 15px;">:</td>
      <td colspan="6" style="text-align: left; padding-bottom: 15px;">Ulangi langkah 2 dan 3</td>
    </tr>
    <tr>
      <td style="text-align: left; text-decoration: underline; font-weight: bold; padding-bottom: 10px;" colspan="8">Iterasi 6</td>
    </tr>
    <tr>
      <td style="text-align: left;">Langkah 1</td><td>:</td>
      <td>2</td><td>3</td><td>8</td><td>10</td><td>15</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Langkah 2</td><td>:</td>
      <td>2</td><td>3</td><td>8</td><td>10</td><td>15</td><td style="color: #00b0f0; font-weight: bold;">22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Langkah 3</td><td>:</td>
      <td>2</td><td style="color: #999999; font-weight: bold;">3</td><td style="color: #999999; font-weight: bold;">8</td><td>10</td><td>15</td><td style="color: #00b0f0; font-weight: bold;">22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Langkah 4</td><td>:</td>
      <td colspan="6" style="text-align: left;">Ulangi langkah 2 dan 3</td>
    </tr>

  </table>

  <div style="margin-top: 50px;">
    <h2 style="text-decoration: underline; margin-bottom: 30px;">ilustrasi</h2>
    <table style="border: none; text-align: center; font-size: 1.5em; font-weight: bold; width: 100%; max-width: 500px; border-spacing: 0 25px; border-collapse: separate;">
      <tr>
        <td style="border: none;">22</td><td style="border: none;">10</td><td style="border: none;">15</td><td style="border: none;">3</td><td style="border: none;">8</td><td style="border: none;">2</td>
      </tr>
      <tr>
        <td style="border: none;">22</td><td style="border: none;">10</td><td style="border: none;">15</td><td style="border: none;">3</td><td style="border: none;">8</td><td style="border: none;">2</td>
      </tr>
      <tr>
        <td style="border: none;">2</td><td style="border: none;">10</td><td style="border: none;">15</td><td style="border: none;">3</td><td style="border: none;">8</td><td style="border: none;">22</td>
      </tr>
      <tr>
        <td style="border: none;">2</td><td style="border: none;">3</td><td style="border: none;">15</td><td style="border: none;">10</td><td style="border: none;">8</td><td style="border: none;">22</td>
      </tr>
      <tr>
        <td style="border: none;">2</td><td style="border: none;">3</td><td style="border: none;">8</td><td style="border: none;">10</td><td style="border: none;">15</td><td style="border: none;">22</td>
      </tr>
      <tr>
        <td style="border: none;">2</td><td style="border: none;">3</td><td style="border: none;">8</td><td style="border: none;">10</td><td style="border: none;">15</td><td style="border: none;">22</td>
      </tr>
    </table>
  </div>

</div>

### Contoh Program

```py
def SelectionSort(val):
    # Looping dari indeks paling belakang mundur ke depan
    for i in range(len(val)-1, 0, -1):
        Max = 0

        # Looping untuk mencari nilai terbesar di sisa array yang belum terurut
        for l in range(1, i+1):
            if val[l] > val[Max]:
                Max = l

        # Proses pertukaran (swap) nilai terbesar ke posisi paling belakang
        temp = val[i]
        val[i] = val[Max]
        val[Max] = temp

# --- Blok pemanggilan fungsi ---
Angka = [22, 10, 15, 3, 8, 2]
print("Array sebelum diurutkan:", Angka)

SelectionSort(Angka)

print("Array setelah diurutkan: ", Angka)
```

Hasil Program:

```
[2, 3, 8, 10, 15, 22]
```

## Bubble Sorting

- Metode pengurutan dengan membandingkan data nilai elemen yang sekarang dengan data nilai elemen-elemen berikutnya.
- Pembandingan elemen dapat dimulai dari awal atau mulai dari paling akhir. Apabila elemen yang sekarang lebih besar (untuk urut menaik) atau lebih kecil (untuk urut menurun) dari elemen berikutnya, maka posisinya ditukar, tapi jika tidak maka posisinya tetap (Harumy et al., 2016).

### Bubble Sorting (Dari Depan)

- Prinsip Kerja dari Bubble Sort adalah :

1. Pengecekan mulai dari data ke-1 sampai data ke-n
2. Bandingkan data ke-1 dengan data sebelahnya (ke-2)
3. Jika lebih besar maka pindahkan bilangan tersebut dengan bilangan yang ada didepannya
4. Jika lebih kecil maka tidak terjadi pemindahan
5. Ulangi langkah 1 s/d 4 sebanyak n-1 kali dengan jumlah data dikurang 1 setiap iterasi

Awal: `[5, 7, 3, 2, 4]`

#### Iterasi 1:

- Bandingkan 5 dan 7. (5 < 7) → Posisi sudah benar, tidak ditukar. `[5, 7, 3, 2, 4]`
- Bandingkan 7 dan 3. (7 > 3) → Tukar! `[5, 3, 7, 2, 4]`
- Bandingkan 7 dan 2. (7 > 2) → Tukar! `[5, 3, 2, 7, 4]`
- Bandingkan 7 dan 4. (7 > 4) → Tukar! `[5, 3, 2, 4, 7]`
- Hasil: Angka terbesar (7) sudah berada di posisi paling kanan.

#### Iterasi 2:

- Bandingkan 5 dan 3. (5 > 3) → Tukar! `[3, 5, 2, 4, 7]`
- Bandingkan 5 dan 2. (5 > 2) → Tukar! `[3, 2, 5, 4, 7]`
- Bandingkan 5 dan 4. (5 > 4) → Tukar! `[3, 2, 4, 5, 7]`
- Hasil: Angka terbesar kedua (5) menempati posisi benarnya. (Angka 7 tidak perlu dicek lagi).

#### Iterasi 3:

- Bandingkan 3 dan 2. (3 > 2) → Tukar! `[2, 3, 4, 5, 7]`
- Bandingkan 3 dan 4. (3 < 4) → Posisi sudah benar, tidak ditukar. `[2, 3, 4, 5, 7]`
- Hasil: Seluruh array secara tidak sadar sudah terurut dengan benar.

#### Iterasi 4:

- Sistem tetap melakukan satu kali pengecekan terakhir dari depan (membandingkan 2 & 3, lalu 3 & 4) untuk memastikan tidak ada lagi elemen yang tertukar. Karena tidak ada pertukaran ( no swap ), proses sorting resmi dihentikan.

<div style="display: flex; flex-direction: column; gap: 20px; font-family: sans-serif; font-size: 16px;">
  
  <h2 style="text-align: center; margin-bottom: 10px; font-weight: normal;">HASIL BUBBLE SORT (Dari Depan)</h2>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Awal</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iterasi 1</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iterasi 2</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iterasi 3</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iterasi 4</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
      </tr>
    </table>
  </div>

</div>

### Bubble Sorting (Dari Belakang)

- **Prinsip Kerja dari Bubble Sort adalah :**

1. Pengecekan mulai dari data ke-n sampai data ke-1
2. Bandingkan data ke-n dengan data sebelahnya (ke-(n-1))
3. Jika lebih kecil maka pindahkan bilangan tersebut dengan bilangan yang ada didepannya
4. Jika lebih besar maka tidak terjadi pemindahan
5. Ulangi langkah 1 s/d 4 sebanyak n-1 kali dengan jumlah data dikurang 1 setiap iterasi

Awal: `[5, 7, 3, 2, 4]`

#### Iterasi 1: (Bermula dari indeks paling kanan)

- Bandingkan 2 dan 4. (2 < 4) → Posisi sudah betul, tidak ditukar. `[5, 7, 3, 2, 4]`
- Bandingkan 3 dan 2. (3 > 2) → Tukar! `[5, 7, 2, 3, 4]`
- Bandingkan 7 dan 2. (7 > 2) → Tukar! `[5, 2, 7, 3, 4]`
- Bandingkan 5 dan 2. (5 > 2) → Tukar! `[2, 5, 7, 3, 4]`
- Hasil: Angka terkecil (2) sudah berada di posisi paling kiri (depan).

#### Iterasi 2: (Abaikan posisi pertama yang sudah terurut)

- Bandingkan 3 dan 4. (3 < 4) → Posisi sudah betul, tidak ditukar. `[2, 5, 7, 3, 4]`
- Bandingkan 7 dan 3. (7 > 3) → Tukar! `[2, 5, 3, 7, 4]`
- Bandingkan 5 dan 3. (5 > 3) → Tukar! `[2, 3, 5, 7, 4]`
- Hasil: Angka terkecil kedua (3) sudah berada di posisi yang betul.

#### Iterasi 3: (Abaikan posisi pertama dan kedua)

- Bandingkan 7 dan 4. (7 > 4) → Tukar! `[2, 3, 5, 4, 7]`
- Bandingkan 5 dan 4. (5 > 4) → Tukar! `[2, 3, 4, 5, 7]`
- Hasil: Angka terkecil ketiga (4) sudah berada di posisi yang betul. Secara keseluruhan susunan sudah terurut.

#### Iterasi 4:

- Sistem melakukan satu pusingan terakhir untuk memastikan tiada lagi pertukaran yang berlaku (membandingkan 5 dan 7). Kerana tiada pertukaran, proses dihentikan.

<div style="display: flex; flex-direction: column; gap: 20px; font-family: sans-serif; font-size: 16px;">
  
  <h2 style="text-align: center; margin-bottom: 10px; font-weight: normal;">BUBBLE SORT (Dari Belakang)</h2>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Awal</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iterasi 1</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iterasi 2</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iterasi 3</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iterasi 4</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
      </tr>
    </table>
  </div>

</div>

#### Contoh Program

```py
def BubbleSort(X):
    # Logika ini sebenarnya adalah Selection Sort
    for i in range(len(X)-1, 0, -1):
        Max = 0
        for l in range(1, i+1):
            if X[l] > X[Max]:
                Max = l

        # Proses pertukaran (swap)
        temp = X[i]
        X[i] = X[Max]
        X[Max] = temp

# --- Blok pemanggilan fungsi ---
Hasil = [22, 10, 15, 3, 8, 2]
print("Sebelum:", Hasil)

BubbleSort(Hasil)

print("Sesudah: ", Hasil)
```

```
[2, 3, 8, 10, 15, 22]
```

## Insertion Sort

- Pengurutan data yang membandingkan data dengan dua elemen data pertama, kemudian membandingkan elemen-elemen data yang sudah diurutkan, kemudian perbandingan antara data tersebut akan terus diulang hingga tidak ada elemen data yang tersisa (Rahayuningsih, 2016).
- Mirip dengan cara mengurutkan kartu, perlembar yang diambil & disisipkan (insert) ke tempat yang seharusnya.

**Prinsip Kerja Insertion Sort adalah:**

1. Pengecekan mulai dari data ke-1 sampai data ke-n
2. Index awal adalah data ke-2
3. Pengecekan mulai dari data ke-1 sampai data ke-(index-1)
4. Bandingkan data pada posisi index dengan data pengecekan
5. Jika data pada posisi index lebih kecil maka data tersebut dapat disisipkan sesuai dengan posisisi saat pengecekan kemudian geser data sisanya
6. Ulangi langkah diatas untuk index berikutnya (I=I+1) sampai n-1 kali

Awal: `[5, 7, 3, 2, 4]`

Elemen pertama (angka 5) dianggap sebagai bagian yang sudah terurut. Kita akan mulai memeriksa dari elemen kedua.

### Iterasi 1:

- Ambil elemen kedua, yaitu 7.
- Bandingkan dengan elemen di sebelah kirinya (5). Karena 7 lebih besar dari 5 (7 > 5), posisinya sudah benar.
- Hasil: `[5, 7, 3, 2, 4]` (Bagian terurut sekarang: 5, 7)

### Iterasi 2:

- Ambil elemen ketiga, yaitu 3.
- Bandingkan 3 dengan elemen-elemen di kirinya dari kanan ke kiri:
  - 3 < 7 (Geser 7 ke kanan)
  - 3 < 5 (Geser 5 ke kanan)
- Sisipkan 3 di posisi paling depan.
- Hasil: `[3, 5, 7, 2, 4]` (Bagian terurut sekarang: 3, 5, 7)

### Iterasi 3:

- Ambil elemen keempat, yaitu 2.
- Bandingkan 2 dengan elemen-elemen di kirinya (7, 5, 3):
  - 2 < 7 (Geser 7 ke kanan)
  - 2 < 5 (Geser 5 ke kanan)
  - 2 < 3 (Geser 3 ke kanan)
- Sisipkan 2 di posisi paling depan.
- Hasil: `[2, 3, 5, 7, 4]` (Bagian terurut sekarang: 2, 3, 5, 7)

### Iterasi 4:

- Ambil elemen terakhir, yaitu 4.
- Bandingkan 4 dengan elemen-elemen di kirinya:
  - 4 < 7 (Geser 7 ke kanan)
  - 4 < 5 (Geser 5 ke kanan)
    -4 > 3 (Berhenti menggeser karena 4 lebih besar dari 3).
- Sisipkan 4 tepat setelah angka 3.
- Hasil Akhir: `[2, 3, 4, 5, 7]` (Seluruh array sudah terurut!).

<div style="display: flex; flex-direction: column; gap: 20px; font-family: sans-serif; font-size: 16px;">
  
  <h2 style="text-align: center; margin-bottom: 10px; font-weight: normal;">INSERTION SORT</h2>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Awal</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iterasi 1</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iterasi 2</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iterasi 3</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iterasi 4</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
      </tr>
    </table>
  </div>

</div>

Contoh Program:

```py
def InsertionSort(val):
    # Mulai dari elemen kedua (indeks 1) karena elemen pertama dianggap sudah di posisinya
    for index in range(1, len(val)):
        a = val[index] # 'a' adalah nilai yang sedang kita pegang/ingin disisipkan
        b = index

        # Selama masih ada elemen di kiri (b>0) DAN elemen di kiri lebih besar dari 'a'
        while b > 0 and val[b-1] > a:
            # Geser elemen yang lebih besar itu ke kanan
            val[b] = val[b-1]
            b = b - 1

        # Setelah menemukan posisi yang pas, sisipkan 'a' di posisi tersebut
        val[b] = a

# --- Blok pemanggilan fungsi ---
Angka = [22, 10, 15, 3, 8, 2]
print("Array sebelum diurutkan:", Angka)

InsertionSort(Angka)

print("Array setelah diurutkan: ", Angka)
```

```
[2, 3, 8, 10, 15, 22]
```

## Kesimpulan Metode Sorting

- Bubble sorting membutuhkan waktu komputasi paling lama.
- Insertion sort dan Selection sort memilki kompleksitas yang sama dengan Bubble sort, tetapi waktunya lebih cepat.
