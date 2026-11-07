---
title: "Pembaruan Keamanan Next.js Oktober 2026: Ringkasan Eksekutif"
summary: "Next.js merilis pembaruan keamanan pada 14 Oktober 2026 untuk memperbaiki tiga kerentanan serius, termasuk Remote Code Execution dan Denial of Service. Simak dampak, versi terdampak, serta langkah penanganannya."
description: "Next.js merilis pembaruan keamanan pada 14 Oktober 2026 untuk memperbaiki tiga kerentanan serius, termasuk Remote Code Execution dan Denial of Service. Simak dampak, versi terdampak, serta langkah penanganannya."
categories: ["security", "next.js"]
tags: ["vulnerability", "RCE", "DoS", "CVE-2026-96889"]
date: 2026-11-05T05:02:50+07:00
draft: false
---

Pada 14 Oktober 2026, tim Next.js (Vercel) merilis patch keamanan _out-of-band_ yang menangani dua kerentanan _Remote Code Execution_ (RCE) kritikal dan satu kerentanan _Denial-of-Service_ (DoS) tingkat tinggi. Pembaruan ini tersedia dalam Next.js v16.4.1 (_Active LTS_) dan 15.5.28 (_Maintenance LTS_). Dua RCE berskala CVSS 9.5 memungkinkan eksekusi kode asing tanpa otentikasi satu pada _App Router_ dengan fungsi `use cache` mengembalikan typed arrays, dan satu pada API optimisasi gambar ketika memproses file SVG (CVE-2026-96889). Kerentanan DoS (CVSS 8.2) terjadi pada _App Router_ yang menggunakan Server _Actions_. Semua kerentanan ini tidak memiliki _workaround_ selain segera memperbarui dependensi Next.js. Artikel ini merinci teknis kerentanan, versi terdampak, dampak praktis, langkah mitigasi (upgrade, konfigurasi), panduan developer, _best practice_ keamanan Next.js, dan analisis risiko jangka pendek/panjang. Kami mengutip sumber resmi Next.js, advisori GHSA, dan analisis komunitas keamanan untuk mendukung tiap poin.

## Detil Kerentanan dan Versi Terdampak

- RCE pada `use cache` (_Critical_). Terjadi pada aplikasi Next.js dengan _App Router_ yang menggunakan _Cache Components_. Fungsi `use cache` yang mengembalikan multiple typed arrays dapat dieksploitasi untuk eksekusi kode asing tidak terautentikasi. Terpengaruh: Next.js 16.0.0 hingga 16.4.0. Diperbaiki di 16.4.1. Tidak ada solusi alternatif selain upgrade. Vercel menekankan pembaruan segera meski aplikasi Anda tidak memiliki fungsi serupa.

- RCE pada _Image Optimization_ (SVG) (_Critical_, `CVE-2026-96889`). Bug memori di pustaka `sharp` (librsvg) yang digunakan API _Image Optimization_. Ketika Next.js berjalan di Linux berbasis _glibc_, pemrosesan file SVG dapat memicu eksekusi kode asing. Terpengaruh: Next.js 10.0.0 hingga 15.5.27 dan 16.0.0 hingga 16.4.0. Diperbaiki di 15.5.28 dan 16.4.1. Mitigasi sementara: pastikan paket `sharp` versi ≥ 0.35.5 (yang sudah mencakup perbaikan librsvg) atau blokir pemrosesan SVG yang tidak perlu.

- DoS pada Server Actions (High). Terdapat pada _App Router_ dengan Server Actions. Permintaan crafted khusus dapat menyebabkan penggunaan CPU berlebihan (loop tak terhingga) yang memblokir permintaan lain, sehingga menyebabkan DoS pada proses Node.js yang sama. Terpengaruh: Next.js 13.0.0 hingga 15.5.27 dan 16.0.0 hingga 16.4.0. Diperbaiki di 15.5.28 dan 16.4.1. Aplikasi yang hanya menggunakan Pages Router atau tanpa Server Actions tidak terpengaruh. Tidak ada workaround selain segera upgrade.

| Kerentanan / CVE                                 | Versi Terdampak                                   | Versi Patch     | Keparahan    | Mitigasi / Workaround                 |
| ------------------------------------------------ | ------------------------------------------------- | --------------- | ------------ | ------------------------------------- |
| RCE use cache return typed arrays                | Next.js<br> ≥16.0.0 ≤16.4.0                       | 16.4.1          | Kritis (9.5) | Upgrade segera (tidak ada workaround) |
| RCE Image Optimization (SVG) <br> CVE-2026-96889 | Next.js<br> ≥10.0.0 ≤15.5.27;<br> ≥16.0.0 ≤16.4.0 | 15.5.28, 16.4.1 | Kritis (9.5) | Pastikan sharp ≥0.35.5 atau upgrade   |
| DoS Server Actions                               | Next.js<br> ≥13.0.0 ≤15.5.27;<br> ≥16.0.0 ≤16.4.0 | 15.5.28, 16.4.1 | Tinggi (8.2) | Upgrade segera (tidak ada workaround) |

Tabel di atas mencerminkan versi Next.js yang rentan dan versi terbarunya yang menambal kerentanan tersebut. Tingkat keparahan (CVSS) diambil dari advisori GHSA. Untuk detail teknis lebih mendalam, advisori GitHub dan laporan komunitas mencatat mekanisme bug ini.

## Dampak Praktis pada Aplikasi

Kerentanan RCE ini sangat berbahaya karena memungkinkan penyerang menjalankan kode berbahaya di server Next.js tanpa otentikasi. Misalnya, RCE pada `use cache` dapat dipicu oleh permintaan HTTP khusus yang memicu fungsi cache mengembalikan typed _arrays_ sekaligus. Jika dieksploitasi, penyerang berpotensi mencuri data, mengubah konten, atau memasang backdoor di server produksi. Sementara RCE pada SVG membuka vektor serangan melalui file gambar yang dikirim pengguna (misal lewat API gambar). Untuk DoS Server Actions, konsekuensinya adalah serangan flood yang memakan CPU sehingga melumpuhkan layanan hingga proses restart. Menurut sumber resmi Next.js, aplikasi _Pages Router_ (tanpa server actions) tidak rentan, sehingga pengembang dapat menghindari kerentanan ini dengan tidak menggunakan _App Router_ atau menonaktifkan fitur Server Actions jika tidak diperlukan. Namun langkah paling aman adalah memperbarui Next.js ke versi patch, karena tak ada mitigasi selain itu.

## Panduan Mitigasi & Upgrade Langkah-demi-Langkah

Berikut langkah utama yang harus diikuti pengembang untuk menutup kerentanan ini:

1. Identifikasi versi Next.js saat ini. Jalankan `npm list` next atau cek `package.json`.
2. Jika versi berada dalam rentang terdampak, segera upgrade ke versi patch. Contoh perintah (menggunakan npm atau Yarn):

```bash
# Untuk branch Next.js 15.x (Maintenance LTS):
npm install next@15.5.28

# Untuk branch Next.js 16.x (Active LTS):
npm install next@16.4.1

# (Alternatif dengan Yarn)
yarn add next@16.4.1
```

3. Pastikan versi `sharp` aman (hanya untuk sistem Linux berbasis glibc yang menjalankan API gambar). Jika menggunakan Sharp secara eksplisit atau sebagai dependency transitif, upgrade ke versi terbaru ≥0.35.5:

```bash
npm install sharp@0.35.5
# atau tambahkan ke package.json / gunakan Yarn resolutions:
yarn add sharp@0.35.5
```

Langkah ini menjamin pustaka librsvg (SVG) di dalam `sharp` sudah diperbaiki.

4. Uji regresi dan fungsionalitas aplikasi. Jalankan kembali build Next.js dan uji skenario yang melibatkan cache, optimisasi gambar, atau Server Actions untuk memastikan tidak ada error. Pastikan pemanggilan API maupun import modul yang terpengaruh tidak rusak.

5. Deploy versi yang sudah diperbarui ke produksi. Pantau log dan gunakan alat keamanan (seperti dependency audit) untuk memastikan kerentanan telah tertutup.

Setelah upgrade, pastikan terus memantau pemberitahuan keamanan Next.js (blog, GitHub Security) untuk patch selanjutnya. Next.js menyarankan semua pengguna Next.js LTS mengikuti rilis patch segera demi keamanan.

## Daftar Referensi

- _Vercel/Next.js. Next.js Security Update for Upstream Vulnerabilities (14 Okt 2026)._
- _Vercel/Next.js. Upcoming Next.js Security Update for Upstream Vulnerabilities (8 Okt 2026)._
- _Vercel/Next.js GitHub. Security Advisory GHSA-673q-mjm6-r5xr: Unauthenticated RCE in use cache (14 Okt 2026)._
- _Vercel/Next.js GitHub. Security Advisory GHSA-2464-fhr4-w9xw: Unauthenticated RCE in Image Optimization API (SVG) (14 Okt 2026)._
- _Vercel/Next.js GitHub. Security Advisory GHSA-p3m5-59mp-jv5r: DoS in App Router using Server Actions (14 Okt 2026)._
- _Cloud Security Alliance. Research Note: Next.js Out-of-Band Patch: Critical RCE in use cache and librsvg (16 Okt 2026)._
- _Brandefense Research Team. Next.js and Node.js Security Updates, October 2026: What to Patch First (21 Okt 2026)._
