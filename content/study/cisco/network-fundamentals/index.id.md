---
title: "Dasar-dasar Jaringan"
summary: "Jaringan atau network adalah kumpulan perangkat jaringan (network devices) dan perangkat endhost (end devices) yang terhubung satu sama lain dan dapat melakukan sharing informasi serta resources."
description: "Jaringan atau network adalah kumpulan perangkat jaringan (network devices) dan perangkat endhost (end devices) yang terhubung satu sama lain dan dapat melakukan sharing informasi serta resources."
categories: ["Cisco Packet Tracer"]
tags: ["Cisco", "Networking", "Network Fundamentals"]
series: ["Chapters on Cisco"]
series_order: 1
date: 2026-05-15T05:02:50+07:00
draft: false
---

## Pengertian Jaringan

Jaringan atau network adalah kumpulan perangkat jaringan (network devices) dan perangkat endhost (end devices) yang terhubung satu sama lain dan dapat melakukan sharing informasi serta resources.

Komponen pembentuk jaringan:

- Network devices: hub, bridge, switch dan router.
- End devices: PC, laptop, mobile, dll.
- Interconnection: NIC, konektor, media (cooper, fiber optic, wireless, dll).

## Jaringan Berdasarkan Area

![area](area.png "Gambar Jaringan berdasarkan area")

- Local Area Network (LAN) merupakan jaringan sederhana dalam satu gedung, kantor, rumah atau sekolah. Biasanya menggunakan kabel UTP.
- Metropolitan Area Network (MAN) adalah gabungan dari banyak LAN dalam suatu wilayah.
- Wide Area Network (WAN) adalah jaringan yang menghubungkan banyak MAN antar pulau, negara atau benua. Medianya dapat berupa fiber optic dan satelit.

## OSI layer

Adalah standar dalam perangkat jaringan yang membuat berbagai perangkat kompatibel satu sama lain. Ada 7 layer dalam OSI layer, dari bawah layer 1 physical sampai atas layer 7 application.

{{< mermaid >}}
graph TD
A[Application] ~~~ B[Presentation]
B ~~~ C[Session]
C ~~~ D[Transport]
D ~~~ E[Network]
E ~~~ F[Data Link]
F ~~~ G[Physical]

    style A fill:#3b9cb8,stroke:#fff,stroke-width:2px,color:#fff
    style B fill:#3b9cb8,stroke:#fff,stroke-width:2px,color:#fff
    style C fill:#3b9cb8,stroke:#fff,stroke-width:2px,color:#fff
    style D fill:#3b9cb8,stroke:#fff,stroke-width:2px,color:#fff
    style E fill:#3b9cb8,stroke:#fff,stroke-width:2px,color:#fff
    style F fill:#3b9cb8,stroke:#fff,stroke-width:2px,color:#fff
    style G fill:#3b9cb8,stroke:#fff,stroke-width:2px,color:#fff

{{< /mermaid >}}

Seorang engineer wajib memahami layer 1 sampai 4 untuk memahami fungsi dan cara kerja perangkat jaringan.

| No  | Layer     | Perangkat         | Data Unit | Pengalamatan    |
| :-: | :-------- | :---------------- | :-------- | :-------------- |
|  1  | Physical  | Hub               | Bit       | Binary (1 or 0) |
|  2  | Data Link | Bridge dan Switch | Frame     | MAC Address     |
|  3  | Network   | Router            | Packet    | IP Address      |

| No  | Layer     | Perangkat         | Konektivitas                      | Memory            |
| :-: | :-------- | :---------------- | :-------------------------------- | :---------------- |
|  1  | Physical  | Hub               | Broadcast ke semua port           | -                 |
|  2  | Data Link | Bridge dan Switch | Broadcast berdasarkan MAC Address | MAC Address Tabel |
|  3  | Network   | Router            | Berdasarkan IP Address tujuan     | Routing Tabel     |

## Perangkat Jaringan dan Simbol

Seorang network engineer harus mengetahui berbagai jenis perangkat jaringan dan simbolnya agar dapat membaca topologi jaringan.

|                           |          |                                   |                  |
| :-----------------------: | :------: | :-------------------------------: | :--------------: |
|      ![Hub](hub.png)      |   Hub    |     ![Straight](straight.png)     |  Straight Cable  |
|   ![Switch](switch.png)   |  Switch  |      ![Cross-Over](cros.png)      | Cross-Over Cable |
|   ![Router](router.png)   |  Router  |       ![Serial](serial.png)       |      Serial      |
| ![Internet](internet.png) | Internet | ![EtherChannel](etherchannel.png) |   EtherChannel   |

## IP Address

IP address dipakai untuk pengalamatan dalam jaringan.

- IP Network sebagai identitas network/jaringan. Jika ada IP 192.168.1.0/24 berarti mewakili suatu kelompok IP (network) dari 192.168.1.1 – 192.168.1.254
- IP broadcast merupakan IP terakhir dalam network yang dipakai untuk membroadcast packet broadcast. Misal 192.168.1.255/24.
- Host adalah ip yang disediakan untuk host. Misal: 192.168.1.111/24.

Ada beberapa jenis IP:

- IP public digunakan untuk mengakses internet.
- IP private digunakan untuk jaringan local.

## Ethernet Cable

![Ethernet Cable](ethernet.png)

## Subnetting so Easy

Subneting adalah membagi menjadi suatu netwok menjadi subnetwork yang lebih kecil. Inilah yang disebut subnet. Salah satu aspek dalam suatu design jaringan yang baik adalah pengoptimalan alamat ip. Subneting meminimalisir alamat ip yang tidak terpakai atau terbuang.

Subneting juga mempermudah dalam pengelolaan dan kinerja jaringan. Jika subneting dianalogikan dalam kehidupan nyata, maka akan seperti gambar dibawah. Dengan pengaturan subneting, maka akan terbentuk seperti gang-gang kecil ke komplek masing-masing sehingga mudah dalam membedakan jaringan dan pengiriman data ke tujuan.

![tanpa-subnet](tanpa-subnet.png "Tanpa Subnet")

![dengan-subnet](dengan-subnet.png "Dengan Subnet")

Subneting ini adalah hal yang wajib dikuasai oleh seorang network engineer. Klo dulu waktu ulangan subnet masih iseng-iseng pake subnet calculator online.

Hehehe… Sekarang harus bener-bener paham. Untuk memahami subneting ini, terlebih dahulu mengerti tentang bilangan decimal dan biner (nol atau satu).

Dalam subneting, ada beberapa hal yang paling sering dicari.

### Subnetting

Misal ada ip 192.168.2.172/26 maka subnetmask atau netmask nya adalah /26 = 11111111.11111111.11111111.11000000. Prefix /26 mengindikasikan biner 1 (Net ID) berjumlah 26 dan sisanya yaitu Host ID berjumlah 6.

Dari 11111111.11111111.11111111.11000000 ini ketika didesimalkan maka didapat subnet mask dari adalah 255.255.255.192.

### Total IP

Total IP ini dihitung dari Host ID. Dari contoh soal, didapat Host ID ada 6bit. Karena IPv4 32bit jadi 32-26 sisa 6. Sehingga maksimal IP didapat 2^6=64.

Rumus menghitung maksimal IP: 2^Host ID

### Jumlah Subnet

Jumlah subnet dihitung dari Net ID. Karena Net ID subnet /26 adalah 26 maka Subnet ID nya 2. Loh kok bisa? Karena Net ID 26 dikurangi 24 karena kelas C jadi 2. Intinya klo kelas C dikurangi 24, kelas B dikurangi 16, kelas A dikurangi 8. InshaAlloh akan lebih paham dalam pembahasan soal selanjutnya sob. Didapat banyak subnetnya adalah 2^2=4 subnet.

Rumus menghitung banyak subnet dengan rumus: 2^subnet ID

### Menentukan IP Network dan Broadcast

Karena soalnya IP 192.168.2.172, maka gak mungkin termasuk subnet/network pertama karena 72>64. Jadi IP tersebut masuk ke subnet ke berapa ya? Kita hitung aja kelipatan 64. IP Network pasti paling awal dan broadcast paling akhir. Gampangnya ip network setelahnya dikurang 1 itulah broadcast.

| No  | IP Network        | Broadcast         |
| :-: | :---------------- | :---------------- |
|  1  | 192.168.2.**0**   | 192.168.2.**63**  |
|  2  | 192.168.2.**64**  | 192.168.2.**127** |
|  3  | 192.168.2.**128** | 192.168.2.**191** |
|  4  | 192.168.2.**192** | 192.168.2.**255** |

Jadi IP 192.168.2.172 masuk dalam subnet ke 3 dengan ip network 192.168.2.128 dan broadcastnya 192.168.2.191.

### IP Client

Dan ini adalah yang paling gampang, yaitu menghitung maksimal ip yang dapat dipakai host. Rumusnya adalah total ip dikurangi 2 karena dipakai untuk network id dan broadcast. Jadi IP Client tiap subnet adalah 64-2=62.

Untuk menghafal subnet lebih cepat, kita dapat memanfaatkan tabel subnet dibawah ini.

![tabel-subneting](tabel-subneting.png "Tabel Subneting")

## Contoh Soal Subnetiing

Dalam pembahasan ini, kita akan belajar untuk mengerjakan berbagai variasi soal subneting. Soal subnetingnya sebagai berikut guys.

Carilah total ip, netmask, ip network, broadcast dan host untuk masing-masing ip dibawah:

- 192.168.10.10/25
- 10.10.10.10/13
- 20.20.20.20/23
- 11.12.13.14/20
- 50.50.50.50./15

Ok langsung aja kita bahas bareng dari soal pertama ya…

### IP 192.168.10.10/25 merupakan kelas C

a. Total IP : 128<br>
Didapat dari 2^7 = 128, 7 merupakan Host ID dari subnet /25

b. Netmask : 255.255.255.128<br>
Didapat dari 256 – Total IP = 256 – 128 = 128 menjadi 255.255.255.128

c. IP Network : 192.168.10.0<br>
Jumlah subnet adalah 2^1, 1 adalah Subnet ID. IP 192.168.2.10 masuk dalam subnet ke-1 karena berada dalam range 0-127 sehingga IP Networknya 192.168.10.0

d. Broadcast : 192.168.10.127<br>
IP Network setelahnya dikurangi 1 => 192.168.10.128 – 1 = 192.168.10.127

e Host : 192.168.10.1 – 192.168.10.126<br>
Jumlah ip yg dapat dipakai adalah 126 didapat dari 128 – 2 karena dipakai untuk IP Network dan broadcast.

### IP 10.10.10.10/13 merupakan kelas A

a. Total IP : 524288<br>
Subnet 13 merupakan subnet kelas A sehiggga ntuk memudahkan diubah dulu menjadi subnet kelas C dengan ditambah 8 dua kali menjadi 29. Total host subnet 29 adalah 8. Lalu 8 x 256 x 256 menjadi 524288. Dikali 256 dua kali karena sebelumnya ditambah 8 dua kali untuk menjadi subnet kelas C.

b. Netmask : 255.248.0.0<br>
Seperti biasa 248 didapat dari 256 – total ip. Karena kelas A ditambah 8 dua kali jadi kelas C maka subnet dimajukan 2 kali dari 255.255.255.248 menjadi 255.248.0.0.

c. IP Network : 10.8.0.0<br>
Setelah disamakan menjadi kelas C(13+8+8=29), maka didapat jumlah subnet /29 adalah 2^5, 5 adalah Subnet ID. Total IP dari subnet /29 adalah 8, maka IP 10.10.10.10 masuk dalam IP Networknya 10.8.0.0.

d. Broadcast : 10.15.255.255<br>
IP Network setelahnya dikurangi 1 => 10.16.0.0 – 1 = 10.15.255.255

e Host : 10.8.0.1 – 10.15.255.254<br>
Jumlah ip yg dapat dipakai adalah 524286 didapat dari 524288 – 2 karena dipakai untuk IP Network dan broadcast.

### IP 11.12.13.14/20 merupakan kelas B

a. Total IP : 4096<br>
Subnet 20 merupakan subnet kelas B sehiggga agar lebih mudah diubah dulu menjadi subnet kelas C dengan ditambah 8 menjadi 28. Total host subnet 28 adalah 16. Lalu 16 x 256 = 4096. Dikali 256 karena sebelumnya ditambah 8 kali untuk menjadi subnet kelas C.

b. Netmask : 255.255.252.0<br>
252 didapat dari 256 – total ip. Karena kelas B ditambah 8 jadi kelas C maka subnet dimajukan 1 kali dari 255.255.255.252 menjadi 255.255.252.0.

c. IP Network : 11.12.0.0<br>
Setelah disamakan menjadi kelas C(20+8=28), maka didapat jumlah subnet /28 adalah 2^4, 4 adalah Subnet ID. Total IP dari subnet /28 adalah 16, maka IP 11.12.13.14 masuk dalam IP Networknya 11.12.0.0 karena masih dalam rentang 11.12.0.0 – 11.15.255.255.

d. Broadcast : 11.12.15.255<br>
IP Network setelahnya dikurangi 1 => 11.16.0.0 – 1 = 11.15.255.255

e Host : 11.12.0.1 – 11.12.255.254<br>
Jumlah ip yg dapat dipakai adalah 4096 didapat dari 4096 – 2 karena dipakai untuk IP Network dan broadcast.

## Subnetting Challenge ^\_^

Carilah total ip, netmask, ip network, broadcast dan host untuk masing-masing ip dibawah:

- 172.16.10.111/27
- 99.99.99.99/28
- 100.100.100.100/20
- 111.222.33.44/14
- 8.8.8.8/32

## Broadcast Domain dan Collision Domain

Collision domain adalah area dalam suatu jaringan dimana packet data dapat mengalami tabrakan (collision) dikarenakan device mengirimnya pada waktu yang bersamaan. Pada Hub, collision domainnya menjadi 1 (besar) dan pada Switch dan Router, collision domain hanya terjadi pada masing-masing interface.

![domain1](domain1.png)

Broadcast domain adalah area dalam suatu jaringan dimana broadcast diforward pada pertama kali. Hub dan Switch mempunyai broadcast domain yang sama karena sama-sama melewatkan broadcast, sedang Router tidak melewatkan broadcast.

![domain2](domain2.png)

## Perbedaan Hub, Bridge, Switch dan Router

Hub gak lebih dari physical repeater yang bekerja pada layer 1 dan gak punya intelijensi. Cara kerja hub adalah dengan menerima sinyal electric dari satu interface dan mengirimkannya ke semua interface kecuali ke source interface, butuh atau gak butuh.

Karena bekerja pada layer physical dengan half-duplex (satu mengirim, yang lain menunggu), maka dapat terjadi tabrakan (collision) ketika ada packet yang dikirimkan dalam waktu yang bersamaan. Area dimana dapat terjadi collision disebut dengan collision domain.

![topologi1](topologi1.png)

![topologi2](topologi2.png)

Kedua topologi diatas merupakan single collision domain. Semakin besar jaringan seperti diatas, collision juga semakin besar, dan menurunkan kinerja jaringan (down).

### Terus apa solusinya?

Mengganti dengan perangkat yang bekerja pada layer 2 (data link) dan mempunyai intelijensi yaitu bridge. Karakteristik bridge:

- Memutuskan kemana Ethernet frame dikirim dengan melihat MAC Address.
- Forward Ethernet frame hanya ke port yang membutuhkan.
- Filter Ethernet frames (discard them).
- Flood Ethernet frames (send them everywhere).
- Hanya punya beberapa port.
- Slow.

![topologi3](topologi3.png)

Dengan begitu collision domain terbagi menjadi 2 pada topologi diatas. Tapi sekarang kita gak pake hub atau bridge karena udah ada switch.

Bridge kembar sama switch… tapi gak sama…

![topologi4](topologi4.png)

Switch adalah bridge dengan beberapa kelebihan.

- Mempunyai banyak port.
- Mempunyai macam-macam port seperti FastEthernet dan Gigabit.
- Fast internet switching.
- Large buffers.

### Cara kerja switch

![carakerjaswitch](carakerjaswitch.png)

Switch mempunyai tabel MAC Address yang menyimpan MAC Address dari PC yang tersambung ke port-port pada switch. Misal ketika pertama kali ketika PC disambungkan ke switch, PC A ingin mengirimkan data ke C.

- Maka PC A membuat Ethernet frame berisi IP address, MAC address dan tujuannya dan mengirimkannya ke switch.
- switch lalu membroadcastnya ke semua port kecuali source. Sampai sini, switch telah menyimpan MAC address A.
- Setelah dibroadcast, PC C akan mengirim reply berisi MAC addressnya dan ketika lewat switch, switch akan menyimpan MAC address C.

Broadcast dikirim ketika ada packet data yang destination MAC addressnya gak ada pada tabel MAC address switch.

Okey… to the point…

Hub kerja pada layer 1 – Physical<br>
Bridge sama switch kerja di layer 2 – Data Link<br>
Klo router? beda lagi,,, kerjanya dilayer 3 – Network<br>
Hub, Bridge sm Switch melewatkan broadcast… Klo router enggak…
