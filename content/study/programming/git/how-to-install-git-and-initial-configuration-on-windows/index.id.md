---
title: "Cara Install Git dan Konfigurasi Awal di Windows"
summary: "Git adalah perangkat lunak yang digunakan untuk mengelola versi source code program. Git merupakan kepanjangan dari Group Inclusive Tour."
description: "Git adalah perangkat lunak yang digunakan untuk mengelola versi source code program. Git merupakan kepanjangan dari Group Inclusive Tour."
categories: ["Git"]
tags: ["Installation", "Configuration", "Git", "Windows"]
series: ["Git Chapters"]
series_order: 1
date: 2026-10-17T02:02:50+07:00
draft: false
---

## Pengertian Git

Git adalah sebuah version control system yang digunakan oleh para developer untuk mengembangkan software secara bersamaan. Fungsi utama dari Git adalah mengatur versi source code program dengan memberikan tanda baris serta code mana yang perlu ditambah ataupun diganti.

## Download Git

Silahkan buka website resminya Git [git-scm.com](https://git-scm.com/). Kemudian unduh Git sesuai dengan arsitektur komputer kita. Kalau menggunakan 64bit, unduh yang 64bit. Begitu juga kalau menggunakan 32bit.

## Langkah-langkah Install Git di Windows

Baiklah, mari kita mulai ritual instalnya. Silahkan klik 2x file instaler Git yang sudah diunduh.

![langkah1](langkah1.png)

Maka akan muncul infomasi lisensi Git, klik `Next >` untuk melanjutkan.

![langkah2](langkah2.png)

Selanjutnya menentukan lokasi instalasi. Biarkan saja apa adanya, kemudian klik `Next >`.

![langkah3](langkah3.png)

Selanjutnya pemilihan komoponen, biarkan saja seperti ini kemudian klik `Next >`.

![langkah4](langkah4.png)

Selanjutnya pemlilihan direktori start menu, klik `Next >`.

![langkah5](langkah5.png)

Selanjutnya pengaturan PATH Environment. Pilih yang tengah agar perintah `git` dapat di kenali di Command Prompt (CMD). Setelah itu klik `Next >`.

![langkah6](langkah6.png)

Selanjutnya konversi line ending. Biarkan saja seperti ini, kemudian klik `Next >`.

![langkah7](langkah7.png)

Selanjutnya pemilihan emulator terminal. Pilih saja yang bawah, kemudian klik `Next >`.

![langkah8](langkah8.png)

Selanjutnya pemilihan opsi ekstra. Klik saja `Next >`.

![langkah9](langkah9.png)

Selanjutnya pemilihan opsi ekspreimental, langsung saja klik `Install` untuk memaulai instalasi.

![langkah10](langkah10.png)

Tunggu beberapa saat, instalasi sedang dilakukan.

![langkah11](langkah11.png)

Setelah selesai, kita bisa langsung klik `Finish`.

![complete](complete.png)

Selamat, Git sudah terinstal di Windows. Untuk mencobanya, silahkan buka CMD atau PowerShell, kemudian ketik perintah `git --version`.

![git-version](git-version.png)

## Konfigurasi Awal yang Harus Dilakukan

Ada beberapa konfigurasi yang harus dilakukan sebelum mulai menggunakan Git, seperti menentukan name dan email.

Silahkan lakukan konfigurasi dengan perintah berikut ini.

```bash
git config --global user.name "Nama Anda"
git config --global user.email "Email Anda"
```

contoh:

```bash
git config --global user.name "0zunu"
git config --global user.email "fidzlieazriel@gmail.com"
```

Kemudian periksa konfigurasinya dengan perintah:

```bash
git config --list
```

Apabila berhasil tampil seperti gambar berikut ini, berarti konfigurasi berhasil.

![list](list.png)

Konfigurasi `core.editor` bersifat opsional. Sedangkan name dan email wajib.

Jika kamu memiliki akun Github, Gitlab, Bitbucket atau yang lainnya…

maka username dan email harus mengikuti akun tersebut agar mudah diintegrasikan.
