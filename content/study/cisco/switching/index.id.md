---
title: "Switching"
summary: "Switch pada cisco biasa disebut catalyst. Perbedaan switch dan router yang paling menonjol adalah switch mempunyai banyak port."
description: "Switch pada cisco biasa disebut catalyst. Perbedaan switch dan router yang paling menonjol adalah switch mempunyai banyak port."
categories: ["Cisco Packet Tracer"]
tags: ["Cisco", "Networking", "Switching"]
series: ["Chapters on Cisco"]
series_order: 2
date: 2026-05-16T05:02:50+07:00
draft: false
---

**Cisco Devices Overview**

Switch pada cisco biasa disebut catalyst. Perbedaan switch dan router yang paling menonjol adalah switch mempunyai banyak port.

![1900](1900.png "Catalyst 1900 Series")

![2690](2690.png "Cisco Catalyst 2690 Series")

![2900](2900.png "Cisco Router 2900 series")

## Perintah Dasar Switch & Router Cisco

Ada beberapa perintah dasar cisco yang wajib diketahui.

```
Router>
Router>enable
Router#
Router#configure terminal
Router(config)#
```

Ada beberapa hak akses ketika masuk dalam Cisco IOS:

- _User mode_ ditandai dengan tanda “>”
- _Previlige mode_ ditandai dengan tanda “#”. Untuk masuk dari user mode ke previlige mode ketikkan perintah _enable_.
- _Global configuration mode_ digunakan untuk mengkonfigurasi perangkat.

Mengganti Hostname

```
Router(config)#hostname Semarang
Semarang (config)#
```

Meyimpan Konfigurasi<br>
Konfigurasi agar ketika device direboot konfigurasi tidak hilang.

```
Router(config)#write
```

atau

```
Router(config)#copy run start
```

Mereset Perangkat Cisco<br>
Untuk mengembalikan konfigurasi ke default.

```
Router(config)#write erase
```

Perintah show ip interface brief digunakan untuk melihat informasi interface.

```
R1#show ip interface brief
Interface           IP-Address      OK? Method Status           Protocol
FastEthernet0/0     10.10.10.1      YES manual up                  up
FastEthernet0/1     12.12.12.1      YES manual up                  up
Loopback0           1.1.1.1         YES manual up                  up
Vlan1               unassigned      YES unset administratively down down
R1#
```

Perintah show running-config digunakan untuk melihat konfigurasi yang sedang berjalan.

```
R1#show running-config
Building configuration...
Current configuration : 687 bytes
!
version 12.4
no service timestamps log datetime msec
no service timestamps debug datetime msec
no service password-encryption
!
hostname R1
!
spanning-tree mode pvst
!
interface Loopback0
ip address 1.1.1.1 255.255.255.255
!
interface FastEthernet0/0
ip address 10.10.10.1 255.255.255.0
ip nat inside
duplex auto
speed auto
!
interface FastEthernet0/1
ip address 12.12.12.1 255.255.255.0
ip nat outside
duplex auto
speed auto
!
interface Vlan1
no ip address
shutdown
!
ip nat inside source static 10.10.10.2 12.12.12.12
ip classless
ip route 0.0.0.0 0.0.0.0 12.12.12.2
!
line con 0
!
line aux 0
!
line vty 0 4
login
!
+
end
```

## Konfigurasi Password pada Cisco

Keamanan adalah hal yang penting dalam suatu jaringan. Pemberian authentikasi berupa username dan password dalam device dilakukan agar tidak sembarang orang dapat masuk ke device.

Mengeset Password Line Console maka ketika melakukan config melalui port console akan diminta login.

```
Router>enable
Router#configure terminal
Router(config)#line console 0
Router(config-line)#password 123
Router(config-line)#login
```

Ketika masuk ke device akan muncul tampilan berikut.<br>

```
User Access Verification
Password:
```

Konfigurasi VTY (Virtual Terminal) agar device dapat ditelnet dengan menggunakan username dan password yang spesifik.

```
Router(config)#username admin
Router(config)#enable password coba1
Router(config)#enable secret coba2
```

Ketika di show run.

```
Router#sh run
Building configuration...
Current configuration : 598 bytes
!
version 12.4
no service timestamps log datetime msec
no service timestamps debug datetime msec
no service password-encryption
!
hostname Router
!
enable secret 5 $1$mERr$9SLtlDbYs.aoemVq5cCcc.
enable password coba1
!
username admin
```

enable secret = password diencripsi.<br>
enable password = password tidak dienciprsi dan dapat dilihat dengan show run.<br>
Jika kita mengeset enable secret dan enable password, maka yang dipakai adalah enable secret.

## Virtual LAN (VLAN)

Virtual LAN (VLAN) membagi satu broadcast domain menjadi beberapa broadcast domain, sehingga dalam satu switch bisa saja terdiri dari beberapa network. Host yang berbeda VLAN tidak akan tersambung sehingga meningkatkan security jaringan.

VLAN adalah fasilitas yang dimiliki oleh switch manageable, contohnya cisco. Pada switch unmanageable, port-port nya hanya dapat digunakan untuk koneksi ke network yang sama (satu network) sehingga tidak mendukung fasilitas VLAN.

![vlan](vlan.png)

Buatlah topologi seperti pada gambar diatas pada packet tracer. Konfigurasi VLAN pada switch dengan VLAN10 berikan nama Marketing dan VLAN20 dengan nama Sales.

```
Switch>enable
Switch#conf t
Switch(config)#vlan 10
Switch(config-vlan)#name Marketing
Switch(config-vlan)#vlan 20
Switch(config-vlan)#name Sales
Switch(config-vlan)#int f0/1
Switch(config-if)#switchport access vlan 10
Switch(config-if)#int f0/2
Switch(config-if)#switchport access vlan 10
Switch(config-if)#int f0/3
Switch(config-if)#switchport access vlan 20
Switch(config-if)#int f0/4
Switch(config-if)#switchport access vlan 20
```

Untuk pengecekan,ping dari satu PC ke PC lain dan ketikkan perintah show vlan pada switch. PC tidak bisa ping ke beda VLAN.

```
PC>ping 10.10.10.11
Pinging 10.10.10.11 with 32 bytes of data:
Reply from 10.10.10.11: bytes=32 time=0ms TTL=128
Reply from 10.10.10.11: bytes=32 time=0ms TTL=128
Reply from 10.10.10.11: bytes=32 time=0ms TTL=128
Reply from 10.10.10.11: bytes=32 time=0ms TTL=128
Ping statistics for 10.10.10.11:
Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
Minimum = 0ms, Maximum = 0ms, Average = 0ms
PC>ping 20.20.20.21
Pinging 20.20.20.21 with 32 bytes of data:
Request timed out.
Request timed out.
Request timed out.
Request timed out.
Ping statistics for 20.20.20.21:
Packets: Sent = 4, Received = 0, Lost = 4 (100% loss),
PC>
```

```
Switch#show vlan
VLAN Name                             Status    Ports
---- -------------------------------- --------- ----------------------------
---
1    default                          active    Fa0/5, Fa0/6, Fa0/7, Fa0/8
                                                Fa0/9, Fa0/10, Fa0/11,
Fa0/12
                                                Fa0/13, Fa0/14, Fa0/15,
Fa0/16
                                                Fa0/17, Fa0/18, Fa0/19,
Fa0/20
                                                Fa0/21, Fa0/22, Fa0/23,
Fa0/24
10   VLAN0010                         active    Fa0/1, Fa0/2
20   VLAN0020                         active    Fa0/3, Fa0/4
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
VLAN Type  SAID       MTU   Parent RingNo BridgeNo Stp  BrdgMode Trans1 Trans2
---- ----- ---------- ----- ------ ------ -------- ---- -------- ------ ----
--
1    enet  100001     1500  -      -      -        -    -        0      0
10   enet  100010     1500  -      -      -        -    -        0      0
20   enet  100020     1500  -      -      -        -    -        0      0
1002 fddi  101002     1500  -      -      -        -    -        0      0
1003 tr    101003     1500  -      -      -        -    -        0      0
1004 fdnet 101004     1500  -      -      -        ieee -        0      0
1005 trnet 101005     1500  -      -      -        ibm  -        0      0
Remote SPAN VLANs
----------------------------------------------------------------------------
--
Primary Secondary Type              Ports
------- --------- ----------------- ----------------------------------------
--
```

## Trunking LAN

Trunking berfungsi melewatkan traffic VLAN dari switch yang berbeda. Antara switch lantai 1 dan lantai 2 terhubung. PC1, PC2, PC5 dan PC6 masuk dalam VLAN 10 sedang PC3, PC4, PC5 dan PC6 masuk dalam VLAN 20.

![trunking](trunking.png)

Konfigurasi VLAN pada seperti dibawah. Membuat vlan 10 dan vlan 20.

```
10.10.10.10/24
10.10.10.11/24
10.10.10.12/24
10.10.10.13/24
20.20.20.20/24
20.20.20.21/24
20.20.20.22/24
20.20.20.23/24
switch1(config)#vlan 10
switch1(config-vlan)#vlan 20
switch1(config-vlan)#int f0/1
switch1(config-if)#sw access vlan 10
switch1(config-if)#int f0/2
switch1(config-if)#sw access vlan 10
switch1(config-vlan)#int f0/3
switch1(config-if)#sw access vlan 10
switch1(config-vlan)#int f0/4
switch1(config-if)#sw access vlan 10
Switch0(config)#vlan 10
Switch0(config-vlan)#vlan 20
Switch0(config-vlan)#int f0/1
Switch0(config-if)#sw access vlan 10
Switch0(config-if)#int f0/2
Switch0(config-if)#sw access vlan 10
Switch0(config-vlan)#int f0/3
Switch0(config-if)#sw access vlan 10
Switch0(config-vlan)#int f0/4
Switch0(config-if)#sw access vlan 10
```

Konfigurasi interface yang saling terhubung antar switch dengan mode trunk.<br>
Lakukan pada kedua switch.

```
Switch0(config)#int f0/10
Switch0(config-if)#switchport mode trunk
Switch1(config)#int f0/10
Switch1(config-if)#switchport mode trunk
```

Ping dari satu PC ke PC lain dan ketikkan perintah show vlan.

```
PC>ping 10.10.10.11

Pinging 10.10.10.11 with 32 bytes of data:

Reply from 10.10.10.11: bytes=32 time=17ms TTL=128
Reply from 10.10.10.11: bytes=32 time=0ms TTL=128
Reply from 10.10.10.11: bytes=32 time=0ms TTL=128
Reply from 10.10.10.11: bytes=32 time=0ms TTL=128

Ping statistics for 10.10.10.11:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 0ms, Maximum = 17ms, Average = 4ms

PC>ping 10.10.10.13

Pinging 10.10.10.13 with 32 bytes of data:

Reply from 10.10.10.13: bytes=32 time=11ms TTL=128
Reply from 10.10.10.13: bytes=32 time=0ms TTL=128
Reply from 10.10.10.13: bytes=32 time=0ms TTL=128
Reply from 10.10.10.13: bytes=32 time=1ms TTL=128

Ping statistics for 10.10.10.13:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 0ms, Maximum = 11ms, Average = 3ms

PC>ping 20.20.20.20

Pinging 20.20.20.20 with 32 bytes of data:

Request timed out.
Request timed out.
Request timed out.
Request timed out.

Ping statistics for 20.20.20.20:
    Packets: Sent = 4, Received = 0, Lost = 4 (100% loss),

PC>
```

PC dapat melakukan ping ke sesame VLAN beda switch namun tidak bisa ke beda VLAN.

```
Switch1#sh int trunk
Port            Mode            Encapsulation   Status          Native vlan
Fa0/10          on              802.1q          trunking        1
Port            Vlans allowed on trunk
Fa0/10          1-1005
Port            Vlans allowed and active in management domain
Fa0/10          1,10,20
Port            Vlans in spanning tree forwarding state and not pruned
Fa0/10          1,10,20
```

## Inter-VLAN - Router on a Stick

Untuk menghubungkan VLAN yang berbeda, dibutuhkan perangkat layer 3 baik itu router atau switch layer 3. Cara pertama adalah dengan menggunakan satu router melalui satu interface. Teknik ini disebut router on a stick. Kekurangan dari teknik ini adalah akan terjadi collision domain karena hanya menggunakan satu interface.

Ada 2 trunking protocol yang biasa digunakan:

- ISL = cisco proprietary, bekerja pada ethernet, token ring dan FDDI, menambahi tag sebesar 30byte pada frame dan semua traffic VLAN ditag.
- IEEE 802.11Q (dot1q) = open standard, hanya bekerja pada ethernet, menambahi tag sebesar 4byte pada frame.

![intervlan](intervlan.png)

Buat topologi seperti diatas dan konfigurasi VLAN10 dan VLAN20 seperti lab sebelumnya. Tambahkan 1 router. Karena hanya menggunakan 1 interface, maka harus dibuat sub-interface untuk dijadikan gateway VLAN. Port SW1 yang terhubung ke router harus diset mode trunk.

```
Router(config)#interface FastEthernet0/0.10
Router(config-subif)#encapsulation dot1Q 10
Router(config-subif)#ip address 10.10.10.1 255.255.255.0
Router(config-subif)#interface FastEthernet0/0.20
Router(config-subif)#encapsulation dot1Q 20
Router(config-subif)#ip address 20.20.20.1 255.255.255.0
```

Cek interface dengan perintah show ip int brief.

```
Router#sh ip int br
Interface           IP-Address      OK? Method Status
Protocol

FastEthernet0/0     unassigned      YES unset  up                    up

FastEthernet0/0.10  10.10.10.1      YES manual up                    up

FastEthernet0/0.20  20.20.20.1      YES manual up                    up

FastEthernet0/0.30  30.30.30.30     YES manual up                    up

FastEthernet0/1     unassigned      YES unset  administratively down down

Vlan1               unassigned      YES unset  administratively down down
Router#
```

Sekarang ping antar VLAN yang berbeda.

```
PC>ping 20.20.20.21

Pinging 20.20.20.21 with 32 bytes of data:

Request timed out.
Reply from 20.20.20.21: bytes=32 time=1ms TTL=127
Reply from 20.20.20.21: bytes=32 time=0ms TTL=127
Reply from 20.20.20.21: bytes=32 time=0ms TTL=127

Ping statistics for 20.20.20.21:
    Packets: Sent = 4, Received = 3, Lost = 1 (25% loss),
Approximate round trip times in milli-seconds:
    Minimum = 0ms, Maximum = 1ms, Average = 0ms

PC>tracert 20.20.20.21

Tracing route to 20.20.20.21 over a maximum of 30 hops:
 1      30 ms       0 ms        0 ms    10.10.10.1
 2      0 ms        0 ms        0 ms    20.20.20.1

Trace complete.
```

```
Router#sh ip arp
Protocol Address        Age (min) Hardware Addr     Type Interface
Internet 10.10.10.10            4 0000.0C1B.0D20    ARPA
FastEthernet0/0.10
Internet 20.20.20.21            3 0060.7092.05A9    ARPA
FastEthernet0/0.20
Internet 30.30.30.1             1 0001.C7AE.3D52    ARPA
FastEthernet0/0.30
Router#
```

## inter-VLAN - Switch Layer 3

Untuk menghubungkan antar VLAN dibutuhkan suatu perangkat layer 3 baik itu router atau switch layer 3. Kalau sebelum menggunakan router on a stick, kali ini kita akan menggunakan switch L3 (layer 3). Inilah kerennya cisco, kalo switch yang lain bekerja pada layer 2, switch cisco dapat bekerja pada layer 3 dan menjalankan routing. Namun, meski untuk routing yang lebih luas lebih dianjurkan menggunakan router sesuai fungsinya.

![switchlayer3](switchlayer3.png)

Konfigurasi port ke VLANnya masing-masing.

```
Switch(config)#interface FastEthernet0/1
Switch(config-if)#switchport access vlan 10
Switch(config-if)#switchport mode access
Switch(config-if)#
Switch(config-if)#interface FastEthernet0/2
Switch(config-if)#switchport access vlan 10
Switch(config-if)#switchport mode access
Switch(config-if)#
Switch(config-if)#interface FastEthernet0/3
Switch(config-if)#switchport access vlan 20
Switch(config-if)#switchport mode access
Switch(config-if)#interface FastEthernet0/4
Switch(config-if)#switchport access vlan 20
Switch(config-if)#switchport mode access
```

Buat interface VLAN dan beri ip address.

```
Switch(config)#int vlan 10
Switch(config-if)#ip add 10.10.10.1 255.255.255.0
Switch(config-if)#int vlan 20
Switch(config-if)#ip add 20.20.20.1 255.255.255.0
```

Ketiikkan perintah ip routing untuk merouting VLAN.

```
Switch(config)#ip routing
```

Sekarang tes ping.

```
PC>ping 20.20.20.21

Pinging 20.20.20.21 with 32 bytes of data:

Request timed out.
Reply from 20.20.20.21: bytes=32 time=0ms TTL=127
Reply from 20.20.20.21: bytes=32 time=0ms TTL=127
Reply from 20.20.20.21: bytes=32 time=0ms TTL=127

Ping statistics for 20.20.20.21:
    Packets: Sent = 4, Received = 3, Lost = 1 (25% loss),
Approximate round trip times in milli-seconds:
    Minimum = 0ms, Maximum = 0ms, Average = 0ms

PC>
```

## DHCP menggunakan Switch

Fungsi DHCP adalah memberikan alamat IP secara otomatis kepada host.

![dhcp](dhcp.png)

Konfigurasi DHCP.

```
Switch(config)#ip dhcp pool vlan10
Switch(dhcp-config)#network 10.10.10.0 255.255.255.0
Switch(dhcp-config)#default-router 10.10.10.1
Switch(dhcp-config)#dns-server 8.8.8.8
Switch(dhcp-config)#ip dhcp pool vlan20
Switch(dhcp-config)#network 20.20.20.0 255.255.255.0
Switch(dhcp-config)#default-router 20.20.20.1
Switch(dhcp-config)#dns-server 8.8.8.8
```

jika ada ip yg tidak ingin digunakan dalam DHCP masukkan perintah ip dhcp excluded-address.

```
ip dhcp excluded-address 10.10.10.2 10.10.10.10
```

Perintah show ip dhcp binding menampilkan client yang mendapat ip dhcp.

```
Switch#sh ip dhcp binding
IP address      Client-ID/          Lease expiration        Type
Hardware address
10.10.10.12     0003.E4A2.9D08      --                      Automatic
10.10.10.11     0001.64C9.674C      --                      Automatic
20.20.20.11     0001.4266.50B0      --                      Automatic
20.20.20.12     0002.1638.8C69      --                      Automatic
Switch#
```

DHCP juga dapat diset manual untuk client dengan MAC Address tertentu

```
ip dhcp pool PC_MANAGER
host 20.20.20.100
default router 20.20.20.1
client-id 0102.c7f8.0004.22
client-name Komputer_IDN
```

## Port Security

Port Security ini digunakan agar port interface perangkat cisco tidak dapat digunakan kecuali untuk PC dengan MAC Address tertentu.

![port-security](port-security.png)

```
int fa0/1
switchport mode access
switchport port-security
switchport port-security mac-address sticky
switchport port-security violation shutdown

int fa0/2
switchport mode access
switchport port-security
switchport port-security mac-address sticky
switchport port-security violation restrict
```

Ada 3 violation:

- protect = data yg dikirim melalui port tsb dibiarkan tdk terkirim
- restrict = seperti protect namun mengirimkan notifikasi dgn snmp
- shutdown = port akan dishutdown secara otomatis, utk mengembalikannya maka harus di no shut dengan console switch atau telnet.

Sticky artinya bahwa MAC address yang pertama kali lewat switch maka itulah yang digunakan. Jika bukan MAC address tsb yang tersambung ke port yang diset port-security maka akan diproses tergantung violation yang diset.

```
show port-security
Switch#show port-security
Secure Port MaxSecureAddr CurrentAddr SecurityViolation Security Action
                (Count)     (Count)         (Count)
--------------------------------------------------------------------
        Fa0/1         1           1               1         Shutdown
        Fa0/2         1           1               1         Restrict
----------------------------------------------------------------------
Switch#
```

## Spanning Tree Protocol (STP)

Spanning Tree Protocol (STP) merupakan protocol yang berfungsi mencegah loop pada switch ketika switch menggunakan lebih dari 1 link dengan maksud redundancy. STP secara defaultnya diset aktif pada Cisco Catalyst. STP merupakan open standard (IEEE 802.1D). STP dapat mencegah:

- Broadcast Storm
- Multiple Frame Copies
- Database Instability

Ada beberapa jenis STP:

- Open Standard : STP (802.1D), Rapid STP (802.1W), Multiple Spanning Tree MST (802.1S)
- Cisco Proprietary : PVST (Per Vlan Spanning Tree), PVST+, Rapid PVST.

![stp](stp.png)

Ketika Switch0 mengirim packet data dengan destination yang tidak terdapat pada MAC address tabelnya, maka Switch0 akan membroadcast ke semua port sampai ke Switch1. Jika pada tabel MAC address Switch1 juga tidak terdapat destination tadi maka Switch1 akan kembali membroadcast ke Switch0 dan akan seperti itu sehingga network down.

Ada beberapa cara mengatasi hal tersebut:

- Hanya menggunakan 1 link (no redundancy)
- Shutdown salah satu interface, melakukan shutdown manual pada salah satu interface atau secara otomatis menggunakan STP.

STP akan membuat blocking atau shutdown pada salahsatu port untuk mencegah terjadinya loop. Ketika link utama down maka port yang sebelumnya blocking akan menjadi forward. Port blocking ditunjukkan dengan warna merah.

![bridge](bridge.png)

Cara kerja STP :

1. Ketika STP aktif, masing-masing switch akan mengirimkan frame khusus satu sama lain yang disebut **Bridge Protocol Data Unit (BPDU)**.

2. Menentukan Root Bridge<br>
   Switch dengan bridge id terendah akan menjadi root bridge. Bridge id = priority + MAC address. Dalam satu LAN hanya ada satu switch sebagai root bridge, switch lain menjadi non-root bridge. Default priority adalah 32768 dan bisa diubah.

3. Menentukan Root Port<br>
   Yang menjadi root port adalah path yang paling dekat dengan root bridge. Untuk setiap non-root bridge hanya punya 1 root port.

4. Menentukan designated port dan non-designated port<br>
   Designated port adalah port yang forward dan non designated port adalah port yang blocking. Untuk root bridge semua portnya adalah designated port.<br>
   Switch dengan priority terendah, salah satu portnya akan menjadi nondesignated port atau port blocking. Jika priority sama maka akan dilihat MAC address terendah.

STP akan membuat blocking atau shutdown pada salahsatu port untuk mencegah terjadinya loop. Ketika link utama down maka port yang sebelumnya blocking akan menjadi forward. Port blocking ditunjukkan dengan warna merah.

STP menggunakan link cost calculation untuk menentukan root port pada non-root switch.

- 10 Gbps = Cost 2
- 1 Gbps = Cost 4
- 100 Mbps = Cost 19
- 10 Mbps = Cost 100

### Spanning Tree Protocol (STP)

Buatlah topologi seperti dibawah.

![spanningtree](spanningtree.png)

```
Switch0#show spanning-tree
VLAN0001
    Spanning tree enabled protocol ieee
    Root ID     Priority    32769
                Address     000B.BE80.D273
                Cost        19
                Port        1(FastEthernet0/1)
                Hello Time  2 sec Max Age 20 sec Forward Delay 15 sec

    Bridge ID   Priority    32769 (priority 32768 sys-id-ext 1)
                Address     00D0.FFDA.ECBC
                Hello Time  2 sec Max Age 20 sec Forward Delay 15 sec
                Aging Time  20

Interface        Role Sts Cost      Prio.Nbr Type
---------------- ---- --- --------- -------- -------------------------------
-
Fa0/2            Altn BLK 19        128.2    P2p
Fa0/1            Root FWD 19        128.1    P2p

Switch0#
```

```
Switch1#sh spanning-tree
VLAN0001
    Spanning tree enabled protocol ieee
    Root ID     Priority    32769
                Address     000B.BE80.D273
                This bridge is the root
                Hello Time  2 sec Max Age 20 sec Forward Delay 15 sec

    Bridge ID   Priority    32769 (priority 32768 sys-id-ext 1)
                Address     000B.BE80.D273
                Hello Time  2 sec Max Age 20 sec Forward Delay 15 sec
                Aging Time  20

Interface        Role Sts Cost      Prio.Nbr Type
---------------- ---- --- --------- -------- -------------------------------
-
Fa0/1            Desg FWD 19        128.1    P2p
Fa0/2            Desg FWD 19        128.2    P2p

Switch1#
```

Secara otomatis, Switch0 menjadi root bridge dilihat dari semua portnya yang fordward (berwarna hijau), agar Switch1 yang menjadi root bridge, ubah priority pada Switch1.

```
Switch1(config)#spanning-tree vlan 1 priority 0
```

![spanningvlan](spanningvlan.png)

Sekarang Switch1 yang menjadi root bridge. Untuk memindahkan blocking port dari fa0/2 menjadi fa0/1 pada Switch1 jalankan perintah berikut.

```
Switch1(config)#int f0/1
Switch1(config-if)#speed 10
```

Cek Hasilnya. Port blocking pindah ke fa0/1.

![spanningvlan](spanningvlan.png)

```
Switch1(config-if)#do show spanning-tree
VLAN0001
    Spanning tree enabled protocol ieee
    Root ID     Priority    1
                Address     00D0.FFDA.ECBC
                Cost        19
                Port        2(FastEthernet0/2)
                Hello Time  2 sec Max Age 20 sec Forward Delay 15 sec

    Bridge ID   Priority    32769 (priority 32768 sys-id-ext 1)
                Address     000B.BE80.D273
                Hello Time  2 sec Max Age 20 sec Forward Delay 15 sec
                Aging Time  20

Interface        Role Sts Cost      Prio.Nbr Type
---------------- ---- --- --------- -------- -------------------------------
-
Fa0/1            Altn BLK 100       128.1    P2p
Fa0/2            Root FWD 19        128.2    P2p
```

## STP Portfast

Portfast adalah salahsatu fitur STP. Ketika pertama kali mencolokkan kabel ke switch, perlu waktu agak lama dari proses blocking yang ditandai warna oranye pada lampu indicator untuk menjadi forwarding yang ditandai dengan warna kuning.

STP Port States:

Blocking 20 second/no limits<br>
Listening 15 second<br>
Learning 15 second<br>
Forwarding no limits<br>
Disable no limits

![portfast](portfast.png)

Hal ini disebabkan switch melakukan step listening dan learning terlebih dahulu sebelum forward. Dari proses blocking, listening dan learning kira-kira dibutuhkan waktu 30 detik. Untuk langsung ke forward tanpa melalui listening dan learning maka digunakan portfast. Portfast cocok digunakan untuk port yang mengarah ke end host. Untuk port yang mengarah ke switch, maka tidak direkomendasikan karena akan mematikan fungsi STP dalam mencegah looping.

Misalkan port 1 sampai 4 yang mau dikonfigurasi stp portfast maka ketikkan perintah berikut.

```
int range fa0/1 - 4
spanning-tree portfast
```

Maka ketika mencolokkan kabel ke switch akan langsung kuning.

## Etherchannel

Karena adanya fitur STP, akan ada port yang blocking untuk mencegah loop. Etherchannel digunakan untuk membundle beberapa link seolah-olah menjadi satu link secara logical, sehingga STP harus dimatikan dan tidak ada port blocking.

![etherchannel](etherchannel.png)

Dengan etherchannel maka transfer data lebih cepat dan tidak tergantung hanya pada 1 link. Etherchannel dapat dikonfigurasi dengan beberapa mekanisme:

- Static Persistence, tanpa menggunakan negotiation protocol.
- Dengan menggunakan negotiation protocol:
  - LACP (Link Aggregation Control Protocol) – open standard IEEE 802.1AD.
  - PAgP (Port Aggregation Protocol) – cisco proprietary.

Buat topologi seperti dibawah.

![segitiga](segitiga.png)

Konfigurasi LaCP pada switch kiri dan tengah.

```
Switch(config)#int range fa0/1-3
Switch(config-if-range)#channel-group 1 mode ?
    active      Enable LACP unconditionally
    auto        Enable PAgP only if a PAgP device is detected
    desirable   Enable PAgP unconditionally
    on          Enable Etherchannel only
    passive     Enable LACP only if a LACP device is detected
Switch(config-if-range)#channel-group 1 mode active
Switch(config-if-range)#int port-channel 1
Switch(config-if)#switchport mode trunk
```

Mode yang digunakan dalam LaCP boleh active-active atau active-passive namun tidak boleh passive-passive.

```
Switch#sh etherchannel summary
Flags:  D - down            P - in port-channel
        I - stand-alone     s - suspended
        H - Hot-standby (LACP only)
        R - Layer3          S - Layer2
        U - in use          f - failed to allocate aggregator
        u - unsuitable for bundling
        w - waiting to be aggregated
        d - default port

Number of channel-groups in use:    1
Number of aggregators:              1

Group  Port-channel  Protocol    Ports
------+-------------+-----------+-------------------------------------------
---
1      Po1(SU)       LACP        Fa0/1(P) Fa0/2(P) Fa0/3(P)
Switch#
```

Konfigurasi PAgP pada switch tengah dan kanan.

```
Switch(config)#int range fa0/4-6
Switch(config-if-range)#channel-group 2 mode desirable
Switch(config-if-range)#int port-channel 2
Switch(config-if)#switchport mode trunk
```

Pada PAgP dapat menggunakan mode desirable-desirable atau desirable-auto. Sekarang cek di switch yang tengah.

```
Switch#sh etherchannel summary
Flags:  D - down        P - in port-channel
        I - stand-alone s - suspended
        H - Hot-standby (LACP only)
        R - Layer3      S - Layer2
        U - in use      f - failed to allocate aggregator
        u - unsuitable for bundling
        w - waiting to be aggregated
        d - default port

Number of channel-groups in use:    2
Number of aggregators:              2

Group  Port-channel  Protocol    Ports
------+-------------+-----------+-------------------------------------------
---
1      Po1(SU)       LACP        Fa0/1(P) Fa0/2(P) Fa0/3(P)
2      Po2(SU)       PAgP        Fa0/4(P) Fa0/5(P) Fa0/6(P)
Switch#
```

Konfigurasi etherchannel manual, tanpa LACP atau PAgP pada switch kiri dan kanan.

```
Switch(config)#int range fa0/7-9
Switch(config-if-range)#channel-group 3 mode on
Switch(config-if-range)#int port-channel 3
Switch(config-if)#switchport mode trunk
```

```
Switch#sh etherchannel summary
Flags:  D - down        P - in port-channel
        I - stand-alone s - suspended
        H - Hot-standby (LACP only)
        R - Layer3      S - Layer2
        U - in use      f - failed to allocate aggregator
        u - unsuitable for bundling
        w - waiting to be aggregated
        d - default port

Number of channel-groups in use:    2
Number of aggregators:              2

Group  Port-channel  Protocol    Ports
------+-------------+-----------+-------------------------------------------
---
1      Po1(SU)       LACP        Fa0/1(P) Fa0/2(P) Fa0/3(P)
3      Po3(SU)       -           Fa0/7(P) Fa0/8(P) Fa0/9(P)
Switch#
```

## Vlan Trunking Protocol (VTP)

VLAN Trunking Protocol (VTP) adalah protocol yang mengatur VLAN pada beberapa switch sekaligus dalam VTP domain yang sama. VTP dapat menambah, mendelete dan merename VLAN sekaligus dalam beberapa switch. VTP meringankan kerja administrator sehingga tidak perlu mengkonfigurasi VLAN pada switch satu per satu.

VTP merupakan protocol cisco proprietary. Konfigurasi VLAN disimpan dalam file database vlan.dat di flash memory.

Ada 3 VTP mode:

- Server (dafault)
- Client
- Transparent

|                               | VTP Server | VTP Client | VTP Transparent |
| :---------------------------- | :--------: | :--------: | :-------------- |
| **Create/Modify/Delete VLAN** |    Yes     |     No     | Only local      |
| **Synchronizes itself**       |    Yes     |    Yes     | No              |
| **Forwards advertisements**   |    Yes     |    Yes     | Yes             |

Dalam VTP ada namanya revision number. Revision number adalah banyaknya update VTP yang telah diterima suatu switch.

Hal yang penting mengenai revision number adalah ketika switch mode server atau client dengan VTP domain yang sama dan mempunyai revision number yang lebih tinggi, ketika diletakkan dalam sebuah jaringan, maka otomatis mengirim update VLAN databasenya dan mereplace database switch sebelumnya sehingga membuat network down. Switch mode server akan tetap tereplace datatbasenya karena mode server pada dasarnya merupakan mode client juga.

Solusinya dengan direset terlebih dahulu.

![vtp](vtp.png)

Konfigurasikan command dibawah pada semua switch.

```
Switch(config)#interface range fa0/1-2
Switch(config-if-range)#switchport mode trunk
```

Server

```
Switch(config)#int vlan 1
Switch(config-if)#ip add 10.10.10.1 255.255.255.0
Switch(config-if)#no shut
Switch(config-if)#vtp mode server
Switch(config)#vtp domain belajar
Switch(config)#vtp password rahasia
```

Transparent

```
Switch(config)#int vlan 1
Switch(config-if)#ip add 10.10.10.2 255.255.255.0
Switch(config-if)#no shut
Switch(config-if)#vtp mode transparent
Switch(config)#vtp domain belajar
Switch(config)#vtp password rahasia
```

Client

```
Switch(config)#int vlan 1
Switch(config-if)#ip add 10.10.10.3 255.255.255.0
Switch(config-if)#no shut
Switch(config-if)#vtp mode client
Switch(config)#vtp domain belajar
Switch(config)#vtp password rahasia
```

Server2

```
Switch(config)#int vlan 1
Switch(config-if)#ip add 10.10.10.4 255.255.255.0
Switch(config-if)#no shut
Switch(config-if)#vtp mode server
Switch(config)#vtp domain belajar
Switch(config)#vtp password rahasia
```

Buat VLAN pada masing-masing switch.

- Server : VLAN10, VLAN20
- Transparent : VLAN30, VLAN40
- Client : VLAN50, VLAN60
- Server2 : VLAN70, VLAN80

Hasilnya Server ada 4 VLAN.

```
Switch#show vlan
VLAN    Name                Status      Ports
10      VLAN0010            active
20      VLAN0020            active
70      VLAN0070            active
80      VLAN0080            active
```

Transparent ada 2 VLAN.

```
Switch#sh vlan
VLAN    Name                Status      Ports
30      VLAN0030            active
40      VLAN0040            active
```

Client ada 4 VLAN

```
Switch#SH VLAN
VLAN    Name                Status      Ports
10      VLAN0010            active
20      VLAN0020            active
70      VLAN0070            active
80      VLAN0080            active
```

Server2 ada 4 VLAN.

```
Switch#SH VLAN
VLAN    Name                Status      Ports
10      VLAN0010            active
20      VLAN0020            active
70      VLAN0070            active
80      VLAN0080            active
```
