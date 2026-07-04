---
title: "Mikrotik Router-OS Fundamental"
summary: "Mikrotik OS merupakan sistem operasi khusus yang digunakan untuk memanajemen network. Kata Mikrotik merujuk pada bahasa Latvia tempat OS ini berasal, yang berarti network kecil. Dengan visi memudahkan manajemen networking, Mikrotik Router OS menawarkan kemudahan implementasi, kemudahan konfigurasi dan kemudahan dalam integrasi dengan perangkat lain."
description: "Mikrotik OS merupakan sistem operasi khusus yang digunakan untuk memanajemen network. Kata Mikrotik merujuk pada bahasa Latvia tempat OS ini berasal, yang berarti network kecil. Dengan visi memudahkan manajemen networking, Mikrotik Router OS menawarkan kemudahan implementasi, kemudahan konfigurasi dan kemudahan dalam integrasi dengan perangkat lain."
categories: ["Mikrotik"]
tags: ["Router OS", "Computer Network"]
series: ["Chapters on Mikrotik"]
series_order: 2
date: 2026-05-31T05:02:50+07:00
draft: false
---

## Mikrotik

Mikrotik OS merupakan sistem operasi khusus yang digunakan untuk memanajemen network. Kata Mikrotik merujuk pada bahasa Latvia tempat OS ini berasal, yang berarti network kecil. Dengan visi memudahkan manajemen networking, Mikrotik Router OS menawarkan kemudahan implementasi, kemudahan konfigurasi dan kemudahan dalam integrasi dengan perangkat lain.

Mikrotik hadir dalam dua jenis, yaitu Mikrotik Router OS (ROS) dan Mikrotik RouterBoard. Mikrotik Routerboard merupakan hardware spesifik yang telah ditanamkan sistem operasi mikrotik untuk dijadikan router. Sedangkan Mikrotik RouterOS merupakan sistem operasi mikrotik yang dapat diinstall pada PC sehingga dapat berfungsi sebagai router. RouterOS adalah Sistem Operasi Independen dan perangkat lunak yang mampu membuat PC berbasis Intel/AMD mampu melakukan fungsi router, bridge, firewall, pengaturan bandwidth, wireless AP ataupun client, dan masih banyak fungsi lainnya.

Mikrotik menyediakan tools untuk mempermudah memanajemen perangkat atau os nya. Tools yang umum digunakan adalah Winbox. Tool ini berbasis GUI yang dikembangkan untuk system operasi windows. Winbox menyediakan shortcut untuk membantu memanajemen perangkat mikrotik.

## Konfigurasi IP Address Static

Untuk mengkonfigurasi IP Address dengan metode static pada mikrotik dilakukan dengan cara :

1. Buka winbox.exe

![winbox](winbox.png "Gambar 4 Winbox Tool")

2. Setelah muncul tampilan awal winbox, silahkan masukan IP MikroTik (IP yang terhubung dengan internet) pada kolom Connect To. Masukkan username pada kolom login dan masukkan password pada kolom password sesuai dengan username dan password dari MikroTik. Kemudian, klik Connect.

![winboxlogin](winboxlogin.png "Gambar 5 Winbox Login")

3. Setelah itu muncul tampilan utama winbox. Pada Side Bar di sebelah kiri terdapat menu – menu untuk memanage perangkat mikrotik. Untuk mengkonfigurasi IP address klik menu IP. Di dalam menu IP, terdapat banyak pilihan untuk melakukan konfigurasi IPv4. Pilih bagian Addresses untuk membuat IP Address Static.

![menuip](menuip.png "Gambar 6 Menu IP Addresses")

4. Setelah itu akan muncul box Address List. Pada box ini akan ditampilkan list dari IP yang ada di MikroTik. Untuk menambahkan, klik tombol dengan tanda ‘+’ dan akan muncul box New Address. Pada New Address terdapat 3 kolom yaitu, Address, Network, dan Interface. Pada kolom Address, masukkan IP Static dan Netmask sesuai dengan jaringan yang akan dibuat. Untuk kolom Network, dikosongkan jika pada kolom Address sudah berisi netmask. Pada kolom Interface, pilih interface yang akan diberi IP Address. Setelah semua diisi, klik tombol Apply dan OK. Setelah itu akan muncul IP yang sudah dibuat pada box Address List.

## Konfigurasi IP DHCP

Mikrotik memiliki fitur DHCP Server. DHCP Server adalah sebuah server yang menyediakan services atau memberikan layanan IP Address Otomatis bagi Client yang Address-nya di setting Automatic. DHCP Server menyediakan konfigurasi IP Otomatis yang meliputi : IP Address, IP Gateway dan IP DNS Server.

Untuk mengkonfigurasi mikrotik sebagai DHCP Server terdapat dua langkah utama, yaitu membuat IP Pool untuk membuat range IP yang akan digunakan, kemudian membuat DHCP Server. Dalam konfigurasi DHCP Server ini dilakukan dengan bantuan WinBox yang terhubung kesebuah Mikrotik. Adapun langkahlangkah untuk membuat Pool adalah sebagai berikut:

1. Hubungkan **Winbox** dengan **mikrotik**, kemudian pada Winbox **klik IP** kemudian klik **Pool** sehingga muncul form IP Pool.

![ippool](ippool.png "Gambar 7 IP Pool")

2. Langkah selanjutnya yaitu menambahkan range IP yang akan digunakan pada DHCP Server maka perlu dlakukan penambahan IP Pool baru. Untuk menambahkan IP Pool, klik timbol “+” sehingga muncul menu New IP Pool. Yang dikonfigurasikan didalam Form New IP Pool adalah sebagai berikut:

   **Name** : Berisi nama pool, misalnya pool diberi nama local.

   **Addresses** : Berisi range IP Address yang akan digunakan untuk client, misalnya 172.16.162.30-172.16.162.40

   Kemudian klik **Apply** dilanjutkan dengan klik **OK**.

![newippool](newippool.png "Gambar 8 New IP Pool")

3. Jika berhasil, maka pada halaman **IP Pool** akan bertambah pool baru dengan nama **local** dan berisi range Address untuk IP Local.

![inputippool](inputippool.png "Gambar 9 IP Pool yang dimasukkan")

4. Jika IP Pool telah terkonfigurasi, maka langkah selanjutnya adalah mengkonfigurasi DHCP Server. Untuk mengkonfigurasi DHCP Server pada mikrotik hal pertama yang harus dilakukan pertama yaitu, Pada **winbox** klik **IP** kemudian klik **DHCP Server**. Selanjutnya akan muncul halaman DHCP Server.

![ipdhcpserver](ipdhcpserver.png "Gambar 10 IP DHCP Server")

5. Untuk menambahkan DHCP Server, klik tombol “+”. Sehingga muncul halaman New DHCP Server. Yang perlu dikonfigurasikan adalah sebagai berikut :

   **Name** : Diisi dengan nama server DHCP.

   **Interface** : Pilih network interface yang akan dijadikan DHCP Server (yang terhubung ke local).

   **Address Pool** : Diisi dengan mana pool yang telah dibuat sebelumnya.

   Kemudian klik **apply**, dilanjutkan dengan klik **OK**.

![newdhcpserver](newdhcpserver.png "Gambar 11 New DHCP Server")

6. Jika DHCP Server sudah dibuat, selanjutnya adalah mengkonfigurasi **network** yang dikirim oleh DHCP Server dan digunakan oleh client. Untuk mengkonfigurasi network, klik tab **network** pada halaman DHCP Server.

![dhcpservernetwork](dhcpservernetwork.png "Gambar 12 IP DHCP Server > Networks")

7. Untuk menambahkan network klik tombol “+”. Maka akan muncul halaman DHCP Network. Yang perlu dikonfigurasi pada DHCP Netwotk adalah sebagai berikut :

   **Address** : Diisi dengan alamat network yang akan digunakan oleh client.

   **Gateway** : Diisi dengan gateway yang akan digunakan oleh client.

   **Netmask** : Diisi dengan prefix netmask yang digunakan oleh client.

   **DNS Server** : Diisi dengan DNS Server yang akan digunakan oleh client.

   Klik **apply**, kemudian dilanjutkan dengan klik **OK**.

![newdhcpnetwork](newdhcpnetwork.png "Gambar 13 New DHCP Network")

8. Sampai pada tahap ini, konfigurasi dari **DHCP Server** pada **mikrotik** telah selesai. Untuk testing, gunakan komputer **client** untuk melihat konfigurasi **DHCP Server**. Jika **IP Address** berhasil didapatkan sesuai dengan konfigurasi, maka DHCP Server tersebut telah dikonfigurasi dengan benar. Langkah selanjutnya yaitu cek koneksi dari client ke mikrotik dengan melakukan ping dari client mneuju IP Mikrotik. Jika konfigurasi IP secara dinamis sudah benar, maka mikrotik akan **mereply ping** dari client

![testingdhcp](testingdhcp.png "Gambar 14 Testing DHCP")

## Konfigurasi Routing Static

Static routing (Routing Statis) adalah sebuah router yang memiliki tabel routing statik yang di setting secara manual oleh para administrator jaringan. Routing static pengaturan routing paling sederhana yang dapat dilakukan pada jaringan computer. Adapun tahapan-tahapan konfigurasinya yaitu :

1. Login Mikrotik

![winboxlogin1](winboxlogin1.png "Gambar 15 Winbox login")

2. Selanjutnya cari menu IP kemudian submenu Routes

![iproutes](iproutes.png "Gambar 16 IP Routes")

3. Akan muncul menu route list, selanjutnya klik tanda ‘+’ untuk menambahkan konfigurasi router baru yang akan memunculkan menu new route

![routelist](routelist.png "Gambar 17 Route List")

4. Pada menu new route terdapat beberapa field yang perlu diisi yaitu :

   a. Dst. Address diisi dengan alamat network tujuan. Untuk default routing, masukkan 0.0.0.0/0 yang bertujuan untuk menentukan rute untuk semua jaringan akan diarahkan ke gateway tertentu

   b. Gateway diisi dengan alamat router tujuan atau router tetangga yang akan mengarah ke network tujuan. Umumnya untuk terkoneksi ke Internet IP gateway telah disediakan oleh ISP.

![newroute](newroute.png "Gambar 18 New Route")

Setelah selesai menkonfigurasinya maka tekan tombol ‘OK’

5. Test konfigurasi routing dengan ping ke internet atau dengan ping ke gateway router

![testping](testping.png "Gambar 19 Ping test")

## Konfigurasi Firewall NAT

Mikrotik memiliki menu firewall, salah satunya NAT. NAT merupakan singkatan dari Network Address Translation, yang dapat berfungsi mentranslasikan alamat IP. Seperti yang diketahui,untuk terkoneksi internet diperlukan IP Public. Namun karena keterbatasan IP Public yang tersedia, pada masing – masing host umumnya berkomunikasi menggunakan IP Private. NAT digunakan untuk mentranslasikan IP Private menjadi IP Public sehingga host dapat berkomunikasi melalui internet. Berikut langkah-langkah menggunakan firewall NAT pada mikrotik :

1. Masuk ke dalam mikrotik melalui aplikasi winbox
2. Cari menu firewall, yaitu ip→firewall

![ipfirewall](ipfirewall.png "Gambar 20 IP > Firewall")

3. Winbox akan menampilkan tampilan dari firewall. Kemudian pilih NAT dan tekan ikon tambah pada NAT yang memiliki fungsi untuk menambah rule baru atau aturan baru.

![firewallnat](firewallnat.png "Gambar 21 Firewall > NAT")

4. Ketika ikon tambah ditekan, akan muncul form untuk membuat rule baru.

![newrulenat](newrulenat.png "Gambar 22 New NAT Rule")

5. Konfigurasi pada menu general yaitu :

   a. Chain : scrnat

   b. Out. Interface : ether1, karena pada mikrotik kita setting interface ether1 merupakan ip public untuk mengakses internet

   c. Tekan menu Action untuk menentukan action yang akan digunakan pada rule ini

![masquerade](masquerade.png "Gambar 23 Action > Masquerade")

6. Pilih action masquerade dan tekan tombol Ok untuk menyelesaikan konfigurasi rule NAT.

7. Rule sudah berhasil dibuat. Sekarang ping ke 8.8.8.8 dari client, untuk memastikan rule NAT telah berhasil.

![natpingtest](natpingtest.png "Gambar 24 NAT Ping Test")

8. Jika ping berhasil dan client telah mendapatkan akses internet maka konfigurasi firewall NAT dengan masquerade telah berhasil dilakukan.

## Konfigurasi Hotspot

1. Pertama Ke menu **IP > Hotspot > Hotspot Menu**

![iphotspot](iphotspot.png "Gambar 25 IP Hotspot")

2. Sehingga akan tampil pop-up “Hotspot Menu” yang akan menuntun untuk memilih interface yang akan digunakan sebagai hotspot. Pada contoh di bawah yaitu ether1. Apabila interface yang kita pilih sudah benar, klik tombol **next**.

![hotspotinterface](hotspotinterface.png "Gambar 26 Hostspot Interface")

3. Selanjutnya masukkan alamat IP yang akan digunakan sebagai login hotspot. Pada contoh di bawah yaitu 192.168.100.1 dengan netmask 255.255.255.0 (/24) kemudian klik tombol **next**.

![hotspotgateaway](hotspotgateaway.png "Gambar 27 Hostspot gateway address")

4. Kemudian set pool address dimana pool address ini digunakan sebagai IP DHCP yang akan diberikan kepada user yang melakukan login ke hotspot. Pada contoh di bawah yaitu 192.168.100.2-192.168.100.254. lalu klik **next**.

![hotspotpool](hotspotpool.png "Gambar 28 Hostpot DHCP Pool")

5. Langkah selanjutnya menentukan SSL Sertifikat. Apabila akan menggunakan HTTPS untuk login ke hotspot maka pilih “import other certificate”. Apabila tidak, pilih “none” kemudian pilih **next**.

![hotspotssl](hotspotssl.png "Gambar 29 Hotspot SSL")

6. Langkah selanjutnya menentukan SMTP Server apabila diperlukan. Apabila tidak, biarkan default lalu klik **next**.

![smtp](smtp.png "Gambar 30 Hotspot SMTP")

7. Kemudian menentukan DNS Server. Pada contoh di bawah yaitu menggunakan DNS google yaitu 8.8.8.8. Apabila ingin menambahkan DNS lain, klik tombol atas/bawah dan masukkan DNS yang lain kemudian klik **next**.

![hotspotdns](hotspotdns.png "Gambar 31 Hotspot DNS Configuration")

8. Lalu masukkan DNS Name yang sudah diinputkan. Pada contoh di bawah yaitu hotspot.example.co.id lalu klik **next**.

![hotspotlogindomain](hotspotlogindomain.png "Gambar 32 Hotspot login domain")

9. Langkah selanjutnya menentukan username dan password yang akan digunakan untuk login ke hotspot. Pada contoh di bawah, username yang digunakan yaitu “hotspot” dan password “hotspot” lalu klik **next**.

![hotspotuserlogin](hotspotuserlogin.png "Gambar 33 Hotspot user login")

10. Hotspot sudah siap digunakan. Dan untuk melakukan login, gunakan username dan password yang sudah dibuat sebelumnya.

![loginscreen](loginscreen.png "Gambar 34 Mikrotik hotspot login screen")

## Simple QOS

QOS merupakan singkatan dari **Quality Of Services**. QOS bertujuan untuk memberikan service sesuai dengan level yang diharapkan. Tanpa ada Qos akan terjadi perebutan resource traffic. Umumnya QOS disandingkan dengan traffic limitation. Namun sebenarnya qos itu sendiri terdiri dari banyak bagian, meliputi prioritize, traffic classification, traffic limitation, dll. Pada mikrotik terdapat beberapa konfigurasi untuk menerapkan qos. Salah satunya adalah fitur simple Qos.

Dengan simple Qos pada mikrotik, manajemen QOS dibuat mudah bagi administrator. Sebagai contoh dibawah ini akan dibuat qos dalam bentuk traffic limitation untuk salah satu IP Client. Sebelum diberi limitasi client akan mendapat traffic maksimum sesuai dengan bandwidth yang tersedia.

![unmanage](unmanage.png "Gambar 35 Unmanage Client Download")

Seperti contoh di atas, sebelum di limit client mendapatkan bandwidth rata – rata 3MB/Sec. Hal ini tentunya akan membuat jaringan internet menjadi lambat bagi client yang lain jika bandwidth yang tersedia kecil. Untuk mengatasi hal tersebut perlu dibuatkan traffic limitation. Pada mikrotik untuk mengkonfigurasi Qos traffic limitation dapat diterapkan dengan cara :

1. Pada winbox klik menu **Queue**, sehingga akan muncul halaman **Queue List**. Untuk menambahkan traffic limitation menggunakan simple Qos mikrotik, klik tab **Simple Queues** pada halaman **Queue List**

![queue](queue.png "Gambar 36 Queue")

2. Untuk menambahkan traffic limitation baru klik tombol “+” pada tab simple queues. Maka akan tampil halaman **New Simple Queue**. Konfigurasi yang perlu dilakukan pada menu ini adalah :

   **Name** : Isikan dengan nama limitation yang akan dibuat, misalnya **client1** untuk limitasi host client1

   **Target** : Isi dengan IP host yang akan dilimit.

   **Max Limi**t : Isi dengan max bandwidth yang akan didapatkan oleh client tersebut

   Kemudian klik **Apply** dilanjutkan dengan klik **OK**

![simplequeue](simplequeue.png "Gambar 37 New Simple Queue")

3. Selanjutnya rule pada Simple Queues akan bertambah sesuai dengan yang dikonfigurasi sebelumnya.

![queuelist](queuelist.png "Gambar 38 Queue List")

4. Untuk testing konfigurasi simple Qos yang telah dibuat, lakukan download kesitus tertentu. Jika konfigurasi sudah benar maka traffic limitation berhasil dijalankan. Seperti contoh di bawah, client akan mendapat bandwidth rata – rata 128kbps ~ 16KBps.

![queuetesting](queuetesting.png "Gambar 39 Queue testing")

## Monitoring Tools Mikrotik

1. Buka winbox.exe. Pada Side Bar di sebelah kiri terdapat pilihan Tools. Di dalam Tools terdapat pilihan Graphing. Klik Graphing untuk melakukan Monitoring terhadap interface network yang telah ditentukan.

![toolgraphing](toolgraphing.png "Gambar 40 Tools Graphing")

2. Setelah itu akan muncul box Graphing. Klik Graphing Settings kemudian Pilih 5 min dan klik Apply dan OK. Hal ini bertujuan untuk menentukan waktu perekaman data untuk ditampilkan dalam graph. Selanjutnya untuk menambah network interface yang akan kita monitoring, `klik tombol ‘+’.. Akan muncul box New Interface Graphing Rule. Pada kolom Interface, pilih network interface yang akan monitoring. Setelah itu klik Apply dan OK.

![graphingrule](graphingrule.png "Gambar 41 New Interface Graphing Rule")

3. Untuk melakukan monitoring, dapat dilakukan dengan membuka browser. Ketikkan pada Address Bar: http://[IP_MikroTik]/graphs. Selanjutnya dapat dilihat link dari network interface yang ingin dimonitor. Klik link tersebut kemudian akan muncul graph dari interface yang dimonitor.

![webmonitoring](webmonitoring.png "Gambar 42 Mikrotik Web Monitoring")
