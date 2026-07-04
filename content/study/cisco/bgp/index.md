---
title: "BGP"
summary: "Border Gateway Protocol (BGP) is the protocol that forms the internet network. BGP belongs to the Exterior Gateway Protocol (EGP) or can be said to be the only EGP protocol."
description: "Border Gateway Protocol (BGP) is the protocol that forms the internet network. BGP belongs to the Exterior Gateway Protocol (EGP) or can be said to be the only EGP protocol."
categories: ["Cisco Packet Tracer"]
tags: ["Cisco", "Networking", "BGP"]
series: ["Chapters on Cisco"]
series_order: 7
date: 2026-05-21T05:02:50+07:00
draft: false
---

## BGP

### (Border Gateaway Protocol)

Border Gateway Protocol (BGP) is the protocol that forms the internet network. BGP belongs to the Exterior Gateway Protocol (EGP) or can be said to be the only EGP protocol. EGP connects one Autonomous System (AS) with another. An Autonomous System itself is a collection of routers located under one administrative domain.

BGP uses TCP port 179 for the transport protocol. In order for 2 BGP routers to peer with each other or become neighbors, a TCP connection must be established first, after which the exchange of BGP routing information between the 2 routers can take place.

BGP determines routes based on the policies of the AS being passed through (Policy Based). This is different from IGP protocols which determine routes based on the shortest path.

Each BGP router has a Router ID, the highest loopback IP will become the router ID, if there is no loopback then the highest interface IP will be chosen.

### eBGP and iBGP

When BGP runs within routers in 1 AS, it is called iBGP. BGP that runs between AS is called eBGP. eBGP must be directly connected between 2 routers, but iBGP does not have to be directly connected as long as there is an IGP, be it EIGRP, OSPF, or static routing running and making the 2 BGP routers reachable to each other.

![ebgp](ebgp.png)

iBGP is also used when an AS becomes a transit AS to another AS. The question is, why not just use IGP? RIP, EIGRP or OSPF then redistribute? This is because iBGP is more efficient and flexible for exchanging routing information within an AS.

iBGP provides the freedom to determine the exit point of a route with the availability of many attributes. Another reason, many prefixes will fill the routing table if IGP and BGP are redistributed. Just imagine, how many thousands of prefixes are on the internet?

iBGP must be full mesh or route reflector.

### Source Update via Loopback

When the interface used as the source update goes down, the BGP adjacency will also go down. Because physical interfaces can go down at any time, a source update via loopback is used because loopback interfaces will not go down. This is commonly used in iBGP.

### Route MAP

In BGP, a route map is used to control and modify routing information for incoming routes and outgoing routes.

### BGP Attributes

Attributes in BGP are also often called path attributes. There are several types of attributes in BGP:

WELL KNOWN = present in every BGP

- Mandatory = included in every BGP route, if this attribute is not present an error message will appear. Must be included in every update.
  - AS Path
  - Origin
  - Next Hop

- Discretionary = present in every BGP ... but does not appear in every route entry.
  - local preference
  - Atomic Aggregate

OPTIONAL

- Transitive
  - Community
  - Aggregator

- Non-Transitive
  - Multi Exit Discriminator (MED)

### AS Path

When a route update packet is sent across an AS, that AS Number will be added to the update packet. So AS Path is the sequence of AS Numbers that a route passes through to get to the destination. Because of this, BGP is also called a path-vector protocol.

AS Path is used for loop detection.

### Origin

Origin defines the source of a path information. There are 3 values of the origin attribute.

- IGP (i) = comes from BGP, either iBGP or eBGP, with the `network x.x.x.x mask x.x.x.x` command
- EGP (e) = comes from the EGP protocol, currently no longer exists.
- INCOMPLETE (?) = comes from other protocols (RIP, EIGRP, OSPF, Static) that are redistributed into BGP.

### BGP Route Selection Process

- Step 1: Prefer highest weight (local to router)
- Step 2: Prefer highest local preference (global within AS)
- Step 3: Prefer route originated by the local router
- Step 4: Prefer shortest AS path
- Step 5: Prefer lowest origin code (IGP < EGP < incomplete)
- Step 6: Prefer lowest MED (from other AS)
- Step 7: Prefer EBGP path over IBGP path
- Step 8: Prefer the path through the closest IGP neighbor
- Step 9: Prefer oldest route for EBGP paths
- Step 10: Prefer the path with the lowest neighbor BGP router ID

## BGP - iBGP Configuration

![internal](internal.png)

Type the following interface configurations.

```
R1(config)#int fa0/0
R1(config-if)#ip add 12.12.12.1 255.255.255.0
R1(config-if)#no sh
R1(config-if)#router ospf 1
R1(config-router)#net 0.0.0.0 255.255.255.255 area 0

R2(config)#int fa0/0
R2(config-if)#ip add 12.12.12.2 255.255.255.0
R2(config-if)#no sh
R2(config-if)#int f0/1
R2(config-if)#ip add 23.23.23.2 255.255.255.0
R2(config-if)#no sh
R2(config-if)#router ospf 1
R2(config-router)#net 0.0.0.0 255.255.255.255 area 0

R3(config)#int fa0/1
R3(config-if)#ip add 23.23.23.3 255.255.255.0
R3(config-if)#no sh
R3(config-if)#int fa0/0
R3(config-if)#ip add 34.34.34.3 255.255.255.0
R3(config-if)#no sh
R3(config-if)#router ospf 1
R3(config-router)#net 0.0.0.0 255.255.255.255 area 0
R3(config-router)#passive-interface fa0/0

R4(config)#int fa0/0
R4(config-if)#ip add 34.34.34.4 255.255.255.0
R4(config-if)#no sh
```

Okay, make sure R1 can ping R3.

```
R1(config-router)#do ping 23.23.23.3

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 23.23.23.3, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 20/63/120 ms
R1(config-router)#
```

Configure iBGP between R1 and R3 first.

```
R1(config)#router bgp 10
R1(config-router)#neighbor 23.23.23.3 remote-as 10

R3(config)#router bgp 10
R3(config-router)#neighbor 12.12.12.1 remote-as 10

Cek show ip bgp summary pastikan sudah neighbornya sudah ada.

R1(config-router)#do sh ip bgp sum
BGP router identifier 12.12.12.1, local AS number 10
BGP table version is 1, main routing table version 1

Neighbor        V       AS  MsgRcvd MsgSent      TblVer  InQ OutQ Up/Down
State/PfxRcd
23.23.23.3      4       10        6       6           1    0    0 00:03:24          0
R1(config-router)#

R3(config-router)#do sh ip bgp sum
BGP router identifier 34.34.34.3, local AS number 10
BGP table version is 1, main routing table version 1

Neighbor        V       AS  MsgRcvd MsgSent      TblVer  InQ OutQ Up/Down
State/PfxRcd
12.12.12.1      4       10        6       6           1    0    0 00:03:43          0
R3(config-router)#
```

Okay, now create a loopback interface that will be advertised to iBGP.

```
R1(config-router)#int lo11
R1(config-if)#ip add 11.11.11.11 255.255.255.255

R1(config-if)#router bgp 10
R1(config-router)#network 11.11.11.11 mask 255.255.255.255
```

Now check on R3, make sure State/PfxRcd is no longer 0.

```
R3(config-router)#do sh ip bgp sum
BGP router identifier 34.34.34.3, local AS number 10
BGP table version is 3, main routing table version 3
1 network entries using 120 bytes of memory
1 path entries using 52 bytes of memory
2/1 BGP path/bestpath attribute entries using 248 bytes of memory
0 BGP route-map cache entries using 0 bytes of memory
0 BGP filter-list cache entries using 0 bytes of memory
BGP using 420 total bytes of memory
BGP activity 1/0 prefixes, 1/0 paths, scan interval 60 secs

Neighbor        V   AS MsgRcvd MsgSent  TblVer  InQ OutQ Up/Down State/PfxRcd
12.12.12.1      4   10      10       9       3    0    0 00:06:07       1
```

Check the advertised network.

```
R3(config-router)#do sh ip bgp
BGP table version is 3, local router ID is 34.34.34.3
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
                r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete
    Network         Next Hop            Metric LocPrf Weight Path
r>i11.11.11.11/32   12.12.12.1               0    100      0 i
```

Check ping and success.

```
R3(config-router)#do ping 11.11.11.11

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 11.11.11.11, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 56/72/96 ms
R3(config-router)#
```

## BGP - iBGP Update via Loopback

![internal](internal.png)

Physical interfaces can go down at any time so BGP adjacency can also drop. Because of that, BGP adjacency is done through loopback.

Create the loopback interface first.

```
R1(config)#int lo0
R1(config-if)#ip add 1.1.1.1 255.255.255.255

R3(config)#int lo0
R3(config-if)#ip add 3.3.3.3 255.255.255.255
```

Now configure the loopback as a neighbor.

```
R1(config-if)#router bgp 10
R1(config-router)#neighbor 3.3.3.3 remote-as 10

R3(config-if)#router bgp 10
R3(config-router)#neighbor 1.1.1.1 remote-as 10
```

Okay, now check its BGP neighbors.

```
R3(config-router)#do sh ip bgp sum
BGP router identifier 34.34.34.3, local AS number 10
BGP table version is 3, main routing table version 3
1 network entries using 120 bytes of memory
1 path entries using 52 bytes of memory
2/1 BGP path/bestpath attribute entries using 248 bytes of memory
0 BGP route-map cache entries using 0 bytes of memory
0 BGP filter-list cache entries using 0 bytes of memory
BGP using 420 total bytes of memory
BGP activity 1/0 prefixes, 1/0 paths, scan interval 60 secs

Neighbor        V   AS MsgRcvd MsgSent  TblVer  InQ OutQ Up/Down    State/PfxRcd
1.1.1.1         4   10       0       0       0    0    0 never      Active
12.12.12.1      4   10       8       7       3    0    0 00:04:20       1
```

Oops... it turns out the adjacency through loopback has not been successful, although the state is already active but PfxRcd is still not there. Add the following command.

```
R3(config-router)#neighbor 1.1.1.1 update-source loopback0
*Mar 1 00:06:33.639: %BGP-5-ADJCHANGE: neighbor 1.1.1.1 Up

R1(config-router)#neighbor 3.3.3.3 update-source loopback0
*Mar 1 00:06:20.067: %BGP-5-ADJCHANGE: neighbor 3.3.3.3 Up
```

Okay, check again.

```
R3(config-router)#do sh ip bgp sum
BGP router identifier 34.34.34.3, local AS number 10
BGP table version is 3, main routing table version 3
1 network entries using 120 bytes of memory
2 path entries using 104 bytes of memory
2/1 BGP path/bestpath attribute entries using 248 bytes of memory
0 BGP route-map cache entries using 0 bytes of memory
0 BGP filter-list cache entries using 0 bytes of memory
BGP using 472 total bytes of memory
BGP activity 1/0 prefixes, 2/0 paths, scan interval 60 secs

Neighbor        V   AS MsgRcvd MsgSent  TblVer  InQ OutQ Up/Down
State/PfxRcd
1.1.1.1         4   10      11      10       3    0    0 00:06:02       1
12.12.12.1      4   10      15      14       3    0    0 00:11:08       1
R3(config-router)#
```

Sip... it has changed. Remove the adjacency of 12.12.12.1 and 23.23.23.3 first.

```
R3(config-router)#no neighbor 12.12.12.1
*Mar 1 00:14:47.347: %BGP-5-ADJCHANGE: neighbor 12.12.12.1 Down Neighbor
deleted

R1(config-router)#
*Mar 1 00:14:33.951: %BGP-5-ADJCHANGE: neighbor 23.23.23.3 Down Peer closed
the session
R1(config-router)#no neighbor 23.23.23.3
```

Okay, check again and there is only 1 neighbor.

```
R3(config-router)#do sh ip bgp sum
BGP router identifier 34.34.34.3, local AS number 10
BGP table version is 4, main routing table version 4
1 network entries using 120 bytes of memory
1 path entries using 52 bytes of memory
2/1 BGP path/bestpath attribute entries using 248 bytes of memory
0 BGP route-map cache entries using 0 bytes of memory
0 BGP filter-list cache entries using 0 bytes of memory
BGP using 420 total bytes of memory
BGP activity 1/0 prefixes, 2/1 paths, scan interval 60 secs

Neighbor        V   AS MsgRcvd MsgSent  TblVer  InQ OutQ Up/Down
State/PfxRcd
1.1.1.1         4   10      14      13       4    0    0 00:09:13       1
R3(config-router)#
```

And finally, ping test.

```
R3(config-router)#do ping 11.11.11.11

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 11.11.11.11, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 44/87/140 ms
R3(config-router)#
```

Siipp... success.

## BGP – eBGP Configuration

![internal.png](internal.png)

Configure eBGP on R3 and R4.

```
R3(config)#router bgp 10
R3(config-router)#neighbor 34.34.34.4 remote-as 20
*Mar 1 00:03:03.087: %BGP-5-ADJCHANGE: neighbor 34.34.34.4 Up

R4(config)#router bgp 20
R4(config-router)#neighbor 34.34.34.3 remote-as 10
*Mar 1 00:02:03.487: %BGP-5-ADJCHANGE: neighbor 34.34.34.3 Up
```

Check neighbors.

```
R4(config-router)#do sh ip bgp sum
Neighbor        V   AS MsgRcvd MsgSent  TblVer  InQ OutQ Up/Down
State/PfxRcd
34.34.34.3      4   10       5       4       2    0    0 00:00:02       1
R4(config-router)#

R3(config-router)#do sh ip bgp sum
Neighbor        V   AS MsgRcvd MsgSent  TblVer  InQ OutQ Up/Down
State/PfxRcd
1.1.1.1         4   10       7       6       3    0    0 00:03:49       1
34.34.34.4      4   20       6       7       3    0    0 00:02:06       0
```

Okay, now check the bgp table and ping test.

```
R4#sh ip bgp
BGP table version is 2, local router ID is 34.34.34.4
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale

Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*>  11.11.11.11/32  34.34.34.3                         0 10 i
R4(config-router)#do ping 11.11.11.11

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 11.11.11.11, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 68/94/148 ms
R4(config-router)#
```

Success. The path indicates that the 11.11.11.11 network is advertised into iBGP (marked with i) from AS 10.

Okay, fixed.

## BGP – eBGP Configuration 2

![internal.png](internal.png)

Okay, continuation of the previous lab. Create a loopback interface on R4 and advertise to BGP 20.

```
R4(config)#int lo44
*Mar 1 00:18:42.419: %LINEPROTO-5-UPDOWN: Line protocol on Interface
Loopback44, changed state to up
R4(config-if)#ip add 44.44.44.44 255.255.255.255
R4(config-if)#router bgp 20
R4(config-router)#network 44.44.44.44 mask 255.255.255.255
R4(config-router)#do sh ip bgp
BGP table version is 3, local router ID is 34.34.34.4
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*> 11.11.11.11/32   34.34.34.3                         0 10 i
*> 44.44.44.44/32   0.0.0.0              0         32768 i
R4(config-router)#
```

Now try pinging from R3.

```
R3#ping 44.44.44.44

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 44.44.44.44, timeout is 2 seconds:
!!!!!
Succes
```

What about from R1?

```
Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 44.44.44.44, timeout is 2 seconds:
UUUUU
Success rate is 0 percent (0/5)

R1#sh ip route
Gateway of last resort is not set

    34.0.0.0/24 is subnetted, 1 subnets
O       34.34.34.0 [110/30] via 12.12.12.2, 00:23:17, FastEthernet0/0
    1.0.0.0/32 is subnetted, 1 subnets
C       1.1.1.1 is directly connected, Loopback0
    3.0.0.0/32 is subnetted, 1 subnets
O       3.3.3.3 [110/21] via 12.12.12.2, 00:23:17, FastEthernet0/0
    23.0.0.0/24 is subnetted, 1 subnets
O       23.23.23.0 [110/20] via 12.12.12.2, 00:23:17, FastEthernet0/0
    11.0.0.0/32 is subnetted, 1 subnets
C       11.11.11.11 is directly connected, Loopback11
    12.0.0.0/24 is subnetted, 1 subnets
C       12.12.12.0 is directly connected, FastEthernet0/0
    44.0.0.0/32 is subnetted, 1 subnets
B       44.44.44.44 [200/0] via 34.34.34.4, 00:04:24
R1#
```

Oops... unreachable. Even though the 44.44.44.44 network is already in the routing table. Let's try traceroute first.

```
R1#traceroute 44.44.44.44

Type escape sequence to abort.
Tracing the route to 44.44.44.44

    1 12.12.12.2 76 msec 80 msec 44 msec
    2 12.12.12.2 !H !H !H
R1#
```

It turns out it stops at R2. Then what is the solution? Check the routing table on R4.

```
R4#sh ip ro
Codes:  C - connected, S - static, R - RIP, M - mobile, B - BGP
        D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area
        N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2
        E1 - OSPF external type 1, E2 - OSPF external type 2
        i - IS-IS, su - IS-IS summary, L1 - IS-IS level-1, L2 - IS-IS level-2
        ia - IS-IS inter area, * - candidate default, U - per-user static
route
        o - ODR, P - periodic downloaded static route

Gateway of last resort is not set

    34.0.0.0/24 is subnetted, 1 subnets
C       34.34.34.0 is directly connected, FastEthernet0/0
    23.0.0.0/24 is subnetted, 1 subnets
B       23.23.23.0 [20/0] via 34.34.34.3, 00:01:22
    11.0.0.0/32 is subnetted, 1 subnets
B       11.11.11.11 [20/0] via 34.34.34.3, 00:02:38
    44.0.0.0/32 is subnetted, 1 subnets
C       44.44.44.44 is directly connected, Loopback44
R4#
```

It turns out only IP 11.11.11.11 is recognized. Use that IP as the source.

```
R1#ping
Protocol [ip]:
Target IP address: 44.44.44.44
Repeat count [5]:
Datagram size [100]:
Timeout in seconds [2]:
Extended commands [n]: y
Source address or interface: 11.11.11.11
Type of service [0]:
Set DF bit in IP header? [no]:
Validate reply data? [no]:
Data pattern [0xABCD]:
Loose, Strict, Record, Timestamp, Verbose[none]:
Sweep range of sizes [n]:
Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 44.44.44.44, timeout is 2 seconds:
Packet sent with a source address of 11.11.11.11
UUUUU
Success rate is 0 percent (0/5)
R1#
```

Oops... it turns out it still can't. That's when I sometimes feel sad...

The way... elevate R2 to be iBGP as well. The requirement for iBGP is full mesh or it can also be route reflector. If full mesh, it means each router must have a link to every other router.

```
R2(config)#int lo0
R2(config-if)#ip add 2.2.2.2 255.255.255.255
R2(config-if)#router bgp 10
R2(config-router)#neighbor 1.1.1.1 remote-as 10
R2(config-router)#neighbor 1.1.1.1 up lo0
R2(config-router)#neighbor 3.3.3.3 remote-as 10
R2(config-router)#neighbor 3.3.3.3 up lo0

R1(config)#router bgp 10
R1(config-router)#neighbor 2.2.2.2 remote-as 10
R1(config-router)#neighbor 2.2.2.2 up lo0

R3(config)#router bgp 10
R3(config-router)#neighbor 2.2.2.2 remot 10
R3(config-router)#neighbor 2.2.2.2 up lo0
```

Okay, check again.

```
R1#ping
Protocol [ip]:
Target IP address: 44.44.44.44
Repeat count [5]:
Datagram size [100]:
Timeout in seconds [2]:
Extended commands [n]: y
Source address or interface: 11.11.11.11
Type of service [0]:
Set DF bit in IP header? [no]:
Validate reply data? [no]:
Data pattern [0xABCD]:
Loose, Strict, Record, Timestamp, Verbose[none]:
Sweep range of sizes [n]:
Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 44.44.44.44, timeout is 2 seconds:
Packet sent with a source address of 11.11.11.11
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 144/196/264 ms
R1#
```

This is because by default the source used for ping is the physical interface. So just advertise the interface network into BGP.

```
R1(config)#router bgp 10
R1(config-router)#network 12.12.12.0 mask 255.255.255.0
R1(config-router)#do ping 44.44.44.44

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 44.44.44.44, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 64/150/204 ms
R1(config-router)#
```

Okay, now try pinging 44.44.44.44 from R2.

```
R2#ping 44.44.44.44

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 44.44.44.44, timeout is 2 seconds:
.....
Success rate is 0 percent (0/5)
R2#tra
R2#traceroute 44.44.44.44

Type escape sequence to abort.
Tracing the route to 44.44.44.44

  1 23.23.23.3 72 msec 72 msec 68 msec
  2 * * *
  3
R2#
```

Failed, right? The trace ends at R3. In that case, advertise the 23.23.23.0 network on
R3 to BGP.

```
R3(config)#router bgp 10
R3(config-router)#net 23.23.23.0 mask 255.255.255.0

R2#ping 44.44.44.44

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 44.44.44.44, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 68/102/144 ms
R2#
```

Good Job...

## BGP – eBGP Configuration 3

![config3](config3.png)

Still using the previous topology, just add R5 on the left.

```
R1(config)#int fa0/1
R1(config-if)#ip add 15.15.15.1 255.255.255.0
R1(config-if)#no sh
R1(config-if)#router bgp 10
R1(config-router)#nei 15.15.15.5 remot 5

R5(config)#int fa0/1
R5(config-if)#ip add 15.15.15.5 255.255.255.0
R5(config-if)#no sh
R5(config-if)#router bgp 5
R5(config-router)#neighbor 15.15.15.1 remot 10

R5(config-router)#do sh ip bgp
BGP table version is 4, local router ID is 15.15.15.5
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete
    Network         Next Hop        Metric LocPrf Weight Path
*> 11.11.11.11/32   15.15.15.1           0             0 10 i
*> 12.12.12.0/24    15.15.15.1           0             0 10 i
*> 44.44.44.44/32   15.15.15.1                         0 10 20 i
R5(config-router)#
```

Now ping and trace to R4 in AS 20.

```
R5#ping 44.44.44.44

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 44.44.44.44, timeout is 2 seconds:
.....
Success rate is 0 percent (0/5)
R5#trac 44.44.44.44

Type escape sequence to abort.
Tracing the route to 44.44.44.44

  1 15.15.15.1 92 msec 76 msec 92 msec
  2 12.12.12.2 [AS 10] 96 msec 60 msec 60 msec
  3 23.23.23.3 152 msec 156 msec 88 msec
  4
R5#
```

Oops failed... the solution is R5 must advertise its source network.

```
R5(config)#router bgp 5
R5(config-router)#network 15.15.15.0 mask 255.255.255.0
R5#ping 44.44.44.44

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 44.44.44.44, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 188/251/304 ms
R5#
```

Now let's do a little experiment. Delete bgp 10 on R2. Previously, copy the BGP configuration to notepad first.

```
R2#sh run | s r b
router bgp 10
    no synchronization
    bgp log-neighbor-changes
    neighbor 1.1.1.1 remote-as 10
    neighbor 1.1.1.1 update-source Loopback0
    neighbor 3.3.3.3 remote-as 10
    neighbor 3.3.3.3 update-source Loopback0
    no auto-summary

R2(config)#no router bgp 10
*Mar 1 00:10:49.335: %BGP-5-ADJCHANGE: neighbor 1.1.1.1 Down BGP protocol
initialization
*Mar 1 00:10:49.335: %BGP-5-ADJCHANGE: neighbor 3.3.3.3 Down BGP protocol
initialization
```

Check ping from R5 to R4.

```
R5#ping 44.44.44.44

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 44.44.44.44, timeout is 2 seconds:
UUUUU
Success rate is 0 percent (0/5)
R5#
```

Now put the BGP 10 configuration back on R2 and check again.

```
R5#ping 44.44.44.44

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 44.44.44.44, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 156/218/276 ms
R5#
```

Okay, sip. The conclusion? ... Write it yourself.

## BGP – Next Hop Self

![internal](internal.png)

Continuing lab 4 which is simpler and lighter.

```
R2#sh ip route
Gateway of last resort is not set

    34.0.0.0/24 is subnetted, 1 subnets
O       34.34.34.0 [110/20] via 23.23.23.3, 00:01:53, FastEthernet0/1
    1.0.0.0/32 is subnetted, 1 subnets
O       1.1.1.1 [110/11] via 12.12.12.1, 00:01:53, FastEthernet0/0
    2.0.0.0/32 is subnetted, 1 subnets
C       2.2.2.2 is directly connected, Loopback0
    3.0.0.0/32 is subnetted, 1 subnets
O       3.3.3.3 [110/11] via 23.23.23.3, 00:01:53, FastEthernet0/1
    23.0.0.0/24 is subnetted, 1 subnets
C       23.23.23.0 is directly connected, FastEthernet0/1
    11.0.0.0/32 is subnetted, 1 subnets
O       11.11.11.11 [110/11] via 12.12.12.1, 00:01:54, FastEthernet0/0
    12.0.0.0/24 is subnetted, 1 subnets
C       12.12.12.0 is directly connected, FastEthernet0/0
    44.0.0.0/32 is subnetted, 1 subnets
B       44.44.44.44 [200/0] via 34.34.34.4, 00:01:06
R2#sh ip bgp
BGP table version is 8, local router ID is 2.2.2.2
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete
    Network         Next Hop        Metric LocPrf Weight Path
r>i11.11.11.11/32   1.1.1.1              0    100      0 i
r>i12.12.12.0/24    1.1.1.1              0    100      0 i
r>i23.23.23.0/24    3.3.3.3              0    100      0 i
*>i44.44.44.44/32   34.34.34.4           0    100      0 20 i
R2#
```

When the default ospf network of R3 is deleted, the route disappears.

```
R3(config)#router ospf 1
R3(config-router)#no network 0.0.0.0 255.255.255.255 area 0
Gateway of last resort is not set

    1.0.0.0/32 is subnetted, 1 subnets
O       1.1.1.1 [110/11] via 12.12.12.1, 00:05:18, FastEthernet0/0
    2.0.0.0/32 is subnetted, 1 subnets
C       2.2.2.2 is directly connected, Loopback0
    23.0.0.0/24 is subnetted, 1 subnets
C       23.23.23.0 is directly connected, FastEthernet0/1
    11.0.0.0/32 is subnetted, 1 subnets
O       11.11.11.11 [110/11] via 12.12.12.1, 00:05:18, FastEthernet0/0
    12.0.0.0/24 is subnetted, 1 subnets
C       12.12.12.0 is directly connected, FastEthernet0/0
R2#sh ip bgp
BGP table version is 10, local router ID is 2.2.2.2
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete
    Network         Next Hop        Metric LocPrf Weight Path
r>i11.11.11.11/32   1.1.1.1              0    100      0 i
r>i12.12.12.0/24    1.1.1.1              0    100      0 i
* i23.23.23.0/24    3.3.3.3              0    100      0 i
* i44.44.44.44/32   34.34.34.4           0    100      0 20 i
R2#
```

iBGP does not choose its own next-hop, in this case it hitchhikes with OSPF. Because OSPF is removed, the BGP route does not appear in the routing table. However, we can configure the next-hop manually in iBGP.

```
R2(config-router)#router bgp 10
R2(config-router)#neighbor 23.23.23.3 remot 10

R3(config-router)#router bgp 10
R3(config-router)#neighbor 23.23.23.2 remot 10
R3(config-router)#neighbor 23.23.23.2 next-hop-self
```

Now check again.

```
R2#sh ip bgp sum
BGP router identifier 2.2.2.2, local AS number 10
BGP table version is 13, main routing table version 13
4 network entries using 480 bytes of memory
4 path entries using 208 bytes of memory
3/2 BGP path/bestpath attribute entries using 372 bytes of memory
1 BGP AS-PATH entries using 24 bytes of memory
0 BGP route-map cache entries using 0 bytes of memory
0 BGP filter-list cache entries using 0 bytes of memory
BGP using 1084 total bytes of memory
BGP activity 6/2 prefixes, 6/2 paths, scan interval 60 secs

Neighbor        V       AS MsgRcvd MsgSent  TblVer  InQ OutQ Up/Down
State/PfxRcd
1.1.1.1         4       10      18      16      13    0    0 00:13:04        2
3.3.3.3         4       10      10      12       0    0    0 00:06:10 Active
23.23.23.3      4       10      8        6      13    0    0 00:02:33        2
R2#sh ip bgp
BGP table version is 13, local router ID is 2.2.2.2
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
r>i11.11.11.11/32   1.1.1.1              0    100      0 i
r>i12.12.12.0/24    1.1.1.1              0    100      0 i
r>i23.23.23.0/24    23.23.23.3           0    100      0 i
*>i44.44.44.44/32   23.23.23.3           0    100      0 20 i
R2#sh ip route
Codes:  C - connected, S - static, R - RIP, M - mobile, B - BGP
        D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area
        N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2
        E1 - OSPF external type 1, E2 - OSPF external type 2
        i - IS-IS, su - IS-IS summary, L1 - IS-IS level-1, L2 - IS-IS level-2
        ia - IS-IS inter area, * - candidate default, U - per-user static
route
        o - ODR, P - periodic downloaded static route

Gateway of last resort is not set

    1.0.0.0/32 is subnetted, 1 subnets
O       1.1.1.1 [110/11] via 12.12.12.1, 00:13:39, FastEthernet0/0
    2.0.0.0/32 is subnetted, 1 subnets
C       2.2.2.2 is directly connected, Loopback0
    23.0.0.0/24 is subnetted, 1 subnets
C       23.23.23.0 is directly connected, FastEthernet0/1
    11.0.0.0/32 is subnetted, 1 subnets
O       11.11.11.11 [110/11] via 12.12.12.1, 00:13:39, FastEthernet0/0
    12.0.0.0/24 is subnetted, 1 subnets
C       12.12.12.0 is directly connected, FastEthernet0/0
    44.0.0.0/32 is subnetted, 1 subnets
B       44.44.44.44 [200/0] via 23.23.23.3, 00:02:49
R2#ping 44.44.44.44

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 44.44.44.44, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 48/78/112 ms
R2#
```

Sip then.

## BGP – Authentication

![internal.png](internal.png)

```
R2(config)#router bgp 10
R2(config-router)#neighbor 1.1.1.1 password ?
    <0-7> Encryption type (0 to disable encryption, 7 for proprietary)

R2(config-router)#neighbor 1.1.1.1 password 0 HAHAHA

R1(config)#router bgp 10
R1(config-router)#neighbor 2.2.2.2 password 0 HAHAHA
*Mar 1 00:05:09.383: %BGP-3-NOTIFICATION: received from neighbor 2.2.2.2
4/0 (hold time expired) 0 bytes
R1(config)#
*Mar 1 00:05:09.383: %BGP-5-ADJCHANGE: neighbor 2.2.2.2 Down BGP
Notification received
*Mar 1 00:05:36.667: %BGP-5-ADJCHANGE: neighbor 2.2.2.2 Up
```

Okay, done. Easy, right.

## BGP Route Reflector

![config3.png](config3.png)

Back to the lab 5 topology. In iBGP, the peers must be full mesh. Problems occur when there are new routers connected. It means the new peers must be configured one by one.

The solution is to make one of the routers a Route Reflector (RR) so that only the RR is full mesh to all routers while the other routers only need to peer to the RR.

What we want to configure is iBGP AS 10. We will make R1 an RR.

```
R1#sh run | s r b
router bgp 10
 no synchronization
 bgp log-neighbor-changes
 network 11.11.11.11 mask 255.255.255.255
 network 12.12.12.0 mask 255.255.255.0
 neighbor 2.2.2.2 remote-as 10
 neighbor 2.2.2.2 update-source Loopback0
 neighbor 3.3.3.3 remote-as 10
 neighbor 3.3.3.3 update-source Loopback0
 neighbor 15.15.15.5 remote-as 5
 no auto-summary
R1#
```

Because it has been configured previously, just set the route-reflector-client.

```
R1(config)#router bgp 10
R1(config-router)#neighbor 2.2.2.2 route-reflector-client
R1(config-router)#neighbor 3.3.3.3 route-reflector-client
*Mar 1 00:11:20.291: %BGP-5-ADJCHANGE: neighbor 2.2.2.2 Down RR client
config change
R1(config-router)#neighbor 2.2.2.2 route-reflector-client
*Mar 1 00:11:22.543: %BGP-5-ADJCHANGE: neighbor 2.2.2.2 Up
*Mar 1 00:11:30.891: %BGP-5-ADJCHANGE: neighbor 3.3.3.3 Down RR client
config change
*Mar 1 00:11:33.275: %BGP-5-ADJCHANGE: neighbor 3.3.3.3 Up
```

Now remove peers on R2 and R3 that are not pointing to R1.

```
R2(config-router)#no neighbor 3.3.3.3 remot 10
R3(config-router)#no neighbor 2.2.2.2 remot 10
```

For checking, create a loopback interface and advertise to iBGP.

```
R2(config)#int lo22
R2(config-if)#ip add 22.22.22.22 255.255.255.255
R2(config-if)#router bgp 10
R2(config-router)#net 22.22.22.22 mask 255.255.255.255
```

Make sure R1 and R3 can ping.

```
R1#ping 22.22.22.22

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 22.22.22.22, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 16/52/80 ms
R1#
R3#ping 22.22.22.22

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 22.22.22.22, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 20/53/88 ms
R3#
```

And when checked, there is only one peer or network.

```
R2#sh ip bgp sum
BGP router identifier 2.2.2.2, local AS number 10
BGP table version is 19, main routing table version 19
5 network entries using 600 bytes of memory
5 path entries using 260 bytes of memory
5/4 BGP path/bestpath attribute entries using 620 bytes of memory
1 BGP rrinfo entries using 24 bytes of memory
2 BGP AS-PATH entries using 48 bytes of memory
0 BGP route-map cache entries using 0 bytes of memory
0 BGP filter-list cache entries using 0 bytes of memory
Bitfield cache entries: current 1 (at peak 1) using 32 bytes of memory
BGP using 1584 total bytes of memory
BGP activity 5/0 prefixes, 10/5 paths, scan interval 60 secs

Neighbor        V       AS MsgRcvd MsgSent  TblVer  InQ OutQ Up/Down
State/PfxRcd
1.1.1.1         4       10      35      28      19    0    0 00:10:28   4
R2#
```

Okay, fixed.

## BGP Attribute - Origin

![config3.png](config3.png)

Create a loopback interface to redistribute to BGP.

```
R2(config)#int lo222
R2(config-if)#ip add 222.222.222.222 255.255.255.255
R2(config-if)#router rip
R2(config-router)#net 222.222.222.0
R2(config-router)#router bgp 10
R2(config-router)#redistribute rip

R5#sh ip bgp
BGP table version is 8, local router ID is 15.15.15.5
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network             Next Hop        Metric LocPrf Weight Path
*>  11.11.11.11/32 1    5.15.15.1       0                  0 10 i
*>  12.12.12.0/24       15.15.15.1      0                  0 10 i
*>  15.15.15.0/24       0.0.0.0         0              32768 i
*>  22.22.22.22/32      15.15.15.1                         0 10 i
*>  23.23.23.0/24       15.15.15.1                         0 10 i
*>  44.44.44.44/32      15.15.15.1                         0 10 20 i
*>  222.222.222.222/32  15.15.15.1                         0 10 ?
R5#ping 222.222.222.222

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 222.222.222.222, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 32/80/108 ms
R5#
```

In the path there are several origin code descriptions:

i = comes from BGP, either iBGP or eBGP, with the `network x.x.x.x mask x.x.x.x` command

e = comes from the EGP protocol, currently no longer exists.

? = comes from other protocols (RIP, EIGRP, OSPF, Static) that are redistributed into BGP.

R5 goes to 222.222.222.222/32 through 15.15.15.1 with path 10 ?. It means the Next AS Path is 200 with the origin code being ? meaning it occurs through redistributing another protocol to BGP.

## BGP Attribute - Community

![community](community.png)

```
R1(config)#int lo0
R1(config-if)#ip add 1.1.1.1 255.255.255.255
R1(config-if)#int lo11
R1(config-if)#ip add 11.11.11.11 255.255.255.255
R1(config-if)#int fa0/0
R1(config-if)#ip add 12.12.12.1 255.255.255.0
R1(config-if)#router ospf 1
R1(config-router)#net 1.1.1.1 0.0.0.0 area 0
R1(config-router)#net 12.12.12.0 0.0.0.255 area 0

R2(config)#int lo0
R2(config-if)#ip add 2.2.2.2 255.255.255.255
R2(config-if)#int lo22
R2(config-if)#ip add 22.22.22.22 255.255.255.255
R2(config-if)#int fa0/0
R2(config-if)#no sh
R2(config-if)#ip add 12.12.12.2 255.255.255.0
R2(config-if)#int fa0/1
R2(config-if)#ip add 23.23.23.2 255.255.255.0
R2(config-if)#no sh
R2(config-if)#int s1/1
R2(config-if)#ip add 24.24.24.2 255.255.255.0
R2(config-if)#no sh
R2(config)#router ospf 1
R2(config-router)#net 2.2.2.2 0.0.0.0 area 0

R2(config-router)#net 12.12.12.0 0.0.0.255 area 0
R2(config-router)#net 24.24.24.0 0.0.0.255 area 0
R2(config-router)#net 23.23.23.0 0.0.0.255 area 0
R3(config)#int lo0
R3(config-if)#ip add 3.3.3.3 255.255.255.255
R3(config-if)#int lo33
R3(config-if)#ip add 33.33.33.33 255.255.255.255
R3(config-if)#int fa0/1
R3(config-if)#no sh
R3(config-if)#ip add 23.23.23.
R3(config-if)#ip add 23.23.23.3 255.255.255.0
R3(config-if)#router ospf 1
R3(config-router)#net 3.3.3.3 0.0.0.0 area 0
R3(config-router)#net 23.23.23.0 0.0.0.255 area 0

R4(config-if)#int lo0
R4(config-if)#ip add 4.4.4.4 255.255.255.255
R4(config-if)#int s1/1
R4(config-if)#ip add 24.24.24.24 255.255.255.0
R4(config-if)#no sh
```

BGP Configuration. R1 as RR.

```
R1(config-router)#router bgp 123
R1(config-router)#neighbor 2.2.2.2 remote-as 123
R1(config-router)#neighbor 2.2.2.2 update-source loopback0
R1(config-router)#network 11.11.11.11 mask 255.255.255.255

R2(config-router)#router bgp 123
R2(config-router)#neighbor 1.1.1.1 remote-as 123
R2(config-router)#neighbor 3.3.3.3 remote-as 123
R2(config-router)#neighbor 24.24.24.4 remote-as 4
R2(config-router)#neighbor 1.1.1.1 update-source loopback 0
R2(config-router)#neighbor 3.3.3.3 update-source loopback 0
R2(config-router)#neighbor 1.1.1.1 route-reflector-client
R2(config-router)#neighbor 3.3.3.3 route-reflector-client
R2(config-router)#network 22.22.22.22 mask 255.255.255.255

R3(config)#router bgp 123
R3(config-router)#neighbor 2.2.2.2 remote-as 123
R3(config-router)#neighbor 2.2.2.2 up lo0
R3(config-router)#network 33.33.33.33 mask 255.255.255.255

R4(config-if)#router bgp 4
R4(config-router)#neighbor 24.24.24.2 remot 123
R4(config-router)#network 4.4.4.4 mask 255.255.255.255
```

Now check the bgp routes on R1 and R4.

```
R1#sh ip bgp
BGP table version is 4, local router ID is 11.11.11.11
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network             Next Hop        Metric LocPrf Weight Path
* i4.4.4.4/32           24.24.24.4           0    100      0 4 i
*>  11.11.11.11/32       0.0.0.0              0         32768 i
*>i22.22.22.22/32       2.2.2.2              0    100      0 i
*>i33.33.33.33/32       3.3.3.3              0    100      0 i
R1#

R4#sh ip bgp
BGP table version is 5, local router ID is 4.4.4.4
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network             Next Hop        Metric LocPrf Weight Path
*>  4.4.4.4/32          0.0.0.0              0         32768 i
*>  11.11.11.11/32      24.24.24.2                         0 123 i
*>  22.22.22.22/32      24.24.24.2           0             0 123 i
*>  33.33.33.33/32      24.24.24.2                         0 123 i
R4#
```

There are several set-communities in BGP:<br>
no-export = network is not advertised to eBGP.<br>
no-advertise = network is not advertised to iBGP/eBGP.<br>
local-as = network is only advertised to iBGP Confederation (there is an AS inside the AS).

Set community no-export on R1.

```
R1(config)#access-list 10 permit host 11.11.11.11
R1(config)#route-map NO-EXPORT
R1(config-route-map)#match ip address ?
    <1-199>         IP access-list number
    <1300-2699>     IP access-list number (expanded range)
    WORD            IP access-list name
    prefix-list     Match entries of prefix-lists
    <cr>

R1(config-route-map)#match ip address 10
R1(config-route-map)#set community ?
    <1-4294967295>  community number
    aa:nn           community number in aa:nn format
    additive        Add to the existing community
    internet        Internet (well-known community)
    local-AS        Do not send outside local AS (well-known community)
    no-advertise    Do not advertise to any peer (well-known community)
    no-export       Do not export to next AS (well-known community)
    none            No community attribute
    <cr>

R1(config-route-map)#set community no-export
R1(config-route-map)#router bgp 123
R1(config-router)#neighbor 2.2.2.2 route-map NO-EXPORT out
R1(config-router)#neighbor 2.2.2.2 send-community
```

Check bgp on R4 to make sure the 11.11.11.11 network is not there.

```
R4#sh ip bgp
BGP table version is 6, local router ID is 4.4.4.4
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*>  4.4.4.4/32      0.0.0.0              0         32768 i
*>  22.22.22.22/32  24.24.24.2           0             0 123 i
*>  33.33.33.33/32  24.24.24.2                         0 123 i
R4#

R2#sh ip bgp 11.11.11.11
BGP routing table entry for 11.11.11.11/32, version 3
Paths: (1 available, best #1, table Default-IP-Routing-Table, not advertised
to EBGP peer)
Flag: 0x820
    Advertised to update-groups:
        2
    Local, (Received from a RR-client)
        1.1.1.1 (metric 11) from 1.1.1.1 (11.11.11.11)
            Origin IGP, metric 0, localpref 100, valid, internal, best
            Community: no-export
R2#
```

Set community no-advertise on R3.

```
R3(config)#access-list 10 permit host 33.33.33.33
R3(config)#route-map NO-ADVERTISE
R3(config-route-map)#match ip address 10
R3(config-route-map)#set community no-advertise
R3(config-route-map)#router bgp 123
R3(config-router)#neighbor 2.2.2.2 route-map NO-ADVERTISE out
R3(config-router)#neighbor 2.2.2.2 send-community
```

Check on R1 and R4, make sure the 33.33.33.33 network is no longer there.

```
R1#sh ip bgp
BGP table version is 5, local router ID is 11.11.11.11
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
* i4.4.4.4/32       24.24.24.4           0    100      0 4 i
*>  11.11.11.11/32   0.0.0.0              0         32768 i
*>i22.22.22.22/32   2.2.2.2              0    100      0 i
R1#

R4#sh ip bgp
BGP table version is 7, local router ID is 4.4.4.4
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*>  4.4.4.4/32      0.0.0.0         0              32768 i
*>  22.22.22.22/32  4.24.24.2       0                  0 123 i
R4#

R2#sh ip bgp 33.33.33.33
BGP routing table entry for 33.33.33.33/32, version 5
Paths: (1 available, best #1, table Default-IP-Routing-Table, not advertised
to any peer)
Flag: 0x820
    Not advertised to any peer
    Local, (Received from a RR-client)
        3.3.3.3 (metric 11) from 3.3.3.3 (33.33.33.33)
            Origin IGP, metric 0, localpref 100, valid, internal, best
            Community: no-advertise
R2#
```

Okay, sip.

## BGP Attribute - Community Local-AS and Configuring Confederation

![confederation](confederation.png)

Okay, BGP Confederation configuration, beforehand, delete BGP 123 first.

```
R1(config)#no router bgp 123
R1(config)#router bgp 1
R1(config-router)# bgp confederation identifier 123
R1(config-router)# bgp confederation peers 23
R1(config-router)# network 11.11.11.11 mask 255.255.255.255
R1(config-router)# neighbor 12.12.12.2 remote-as 23

R2(config)#no router bgp 123
R2(config)#router bgp 23
R2(config-router)# bgp confederation identifier 123
R2(config-router)# bgp confederation peers 1
R2(config-router)# network 22.22.22.22 mask 255.255.255.255
R2(config-router)# neighbor 12.12.12.1 remote-as 1
R2(config-router)# neighbor 12.12.12.1 next-hop-self
R2(config-router)# neighbor 23.23.23.3 remote-as 23
R2(config-router)# neighbor 23.23.23.3 next-hop-self
R2(config-router)# neighbor 24.24.24.4 remote-as 4

R3(config)#no router bgp 123
R3(config)#router bgp 23
R3(config-router)# bgp confederation identifier 123
R3(config-router)# network 33.33.33.33 mask 255.255.255.255
R3(config-router)# neighbor 23.23.23.2 remote-as 23
```

Okay, check first.

```
R2(config-router)#do sh ip bgp sum
BGP router identifier 22.22.22.22, local AS number 23
BGP table version is 5, main routing table version 5
4 network entries using 480 bytes of memory
4 path entries using 208 bytes of memory
5/4 BGP path/bestpath attribute entries using 620 bytes of memory
2 BGP AS-PATH entries using 48 bytes of memory
0 BGP route-map cache entries using 0 bytes of memory
0 BGP filter-list cache entries using 0 bytes of memory
Bitfield cache entries: current 4 (at peak 4) using 128 bytes of memory
BGP using 1484 total bytes of memory
BGP activity 4/0 prefixes, 4/0 paths, scan interval 60 secs

Neighbor        V       AS MsgRcvd MsgSent  TblVer  InQ OutQ Up/Down
State/PfxRcd
12.12.12.1      4        1       6       8       5    0    0 00:02:13       1
23.23.23.3      4       23       6       8       5    0    0 00:02:03       1
24.24.24.4      4        4       7       9       5    0    0 00:02:08       1
R2(config-router)#do sh ip bgp
BGP table version is 5, local router ID is 22.22.22.22
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*>  4.4.4.4/32      24.24.24.4           0             0 4 i
*>  11.11.11.11/32  12.12.12.1           0    100      0 (1) i
*>  22.22.22.22/32  0.0.0.0              0         32768 i
*>i33.33.33.33/32   23.23.23.3           0    100      0 i
R2(config-router)#

R1(config-router)#do sh ip bgp
BGP table version is 5, local router ID is 11.11.11.11
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*>  4.4.4.4/32      12.12.12.2           0    100      0 (23) 4 i
*>  11.11.11.11/32  0.0.0.0              0         32768 i
*>  22.22.22.22/32  12.12.12.2           0    100      0 (23) i
*>  33.33.33.33/32  12.12.12.2           0    100      0 (23) i
R1(config-router)#
```

Now set community local-as on R3.

```
R3(config)#access-list 20 permit host 33.33.33.33
R3(config)#route-map LOCAL-AS
R3(config-route-map)#match ip address 20
R3(config-route-map)#set community local-AS
R3(config-route-map)#router bgp 23
R3(config-router)#neighbor 23.23.23.2 route-map LOCAL-AS out
R3(config-router)#neighbor 23.23.23.2 send-community
```

Check on R1 and R2. The 33.33.33.33 network should only be advertised to Confederation iBGP (R2).

```
R1#sh ip bgp
BGP table version is 4, local router ID is 11.11.11.11
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*>  4.4.4.4/32      12.12.12.2           0    100      0 (23) 4 i
*>  11.11.11.11/32  0.0.0.0              0         32768 i
*>  22.22.22.22/32  12.12.12.2           0    100      0 (23) i
R1#

R2#sh ip bgp
BGP table version is 5, local router ID is 22.22.22.22
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*>  4.4.4.4/32      24.24.24.4           0             0 4 i
*>  11.11.11.11/32  12.12.12.1           0    100      0 (1) i
*>  22.22.22.22/32  0.0.0.0              0         32768 i
*>i33.33.33.33/32 23.23.23.3             0    100      0 i
R2#sh ip bgp 33.33.33.33
BGP routing table entry for 33.33.33.33/32, version 4
Paths: (1 available, best #1, table Default-IP-Routing-Table, not advertised
outside local AS)
    Not advertised to any peer
    Local
        23.23.23.3 from 23.23.23.3 (33.33.33.33)
            Origin IGP, metric 0, localpref 100, valid, confed-internal, best
            Community: local-AS
R2#
```

## BGP Aggregator

![confederation.png](confederation.png)

This aggregator is the same as a summary.

```
R4(config)#int lo1
R4(config-if)#ip add 44.1.1.1 255.255.255.255
R4(config-if)#int lo2
R4(config-if)#ip add 44.2.1.1 255.255.255.255
R4(config-if)#int lo3
R4(config-if)#ip add 44.3.1.1 255.255.255.255
R4(config-if)#int lo4
R4(config-if)#ip add 44.4.1.1 255.255.255.255
R4(config-if)#int lo5
R4(config-if)#ip add 44.5.1.1 255.255.255.255
R4(config-if)#int lo6
R4(config-if)#ip add 44.6.1.1 255.255.255.255
```

Advertise to BGP.

```
R4(config-if)#router bgp 4
R4(config-router)#network 44.1.1.1 mask 255.255.255.255
R4(config-router)#network 44.2.1.1 mask 255.255.255.255
R4(config-router)#network 44.3.1.1 mask 255.255.255.255
R4(config-router)#network 44.4.1.1 mask 255.255.255.255
R4(config-router)#network 44.5.1.1 mask 255.255.255.255
R4(config-router)#network 44.6.1.1 mask 255.255.255.255
```

Check on R1.

```
R1#sh ip bgp
BGP table version is 10, local router ID is 11.11.11.11
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*>  4.4.4.4/32      12.12.12.2           0    100      0 (23) 4 i
*>  11.11.11.11/32  0.0.0.0              0         32768 i
*>  22.22.22.22/32  12.12.12.2           0    100      0 (23) i
*>  44.1.1.1/32     12.12.12.2           0    100      0 (23) 4 i
*>  44.2.1.1/32     12.12.12.2           0    100      0 (23) 4 i
*>  44.3.1.1/32     12.12.12.2           0    100      0 (23) 4 i
*>  44.4.1.1/32     12.12.12.2           0    100      0 (23) 4 i
*>  44.5.1.1/32     12.12.12.2           0    100      0 (23) 4 i
*>  44.6.1.1/32     12.12.12.2           0    100      0 (23) 4 i
R1#
```

Perform aggregate on R4 then check again on R1.

```
R4(config-router)#aggregate-address 44.0.0.0 255.248.0.0

R1#sh ip bgp
BGP table version is 11, local router ID is 11.11.11.11
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*>  4.4.4.4/32      12.12.12.2           0    100      0 (23) 4 i
*>  11.11.11.11/32  0.0.0.0              0         32768 i
*>  22.22.22.22/32  12.12.12.2           0    100      0 (23) i
*>  44.0.0.0/13     12.12.12.2           0    100      0 (23) 4 i
*>  44.1.1.1/32     12.12.12.2           0    100      0 (23) 4 i
*>  44.2.1.1/32     12.12.12.2           0    100      0 (23) 4 i
*>  44.3.1.1/32     12.12.12.2           0    100      0 (23) 4 i
*>  44.4.1.1/32     12.12.12.2           0    100      0 (23) 4 i
*>  44.5.1.1/32     12.12.12.2           0    100      0 (23) 4 i
*>  44.6.1.1/32     12.12.12.2           0    100      0 (23) 4 i
R1#sh ip bgp 44.0.0.0
BGP routing table entry for 44.0.0.0/13, version 11
Paths: (1 available, best #1, table Default-IP-Routing-Table)
Flag: 0x820
    Not advertised to any peer
    (23) 4, (aggregated by 4 4.4.4.4)
        12.12.12.2 from 12.12.12.2 (22.22.22.22)
            Origin IGP, metric 0, localpref 100, valid, confed-external, atomicaggregate, best
R1#
```

Aggregate single route.

```
R4(config-router)#aggregate-address 44.0.0.0 255.248.0.0 summary-only

R1#sh ip bgp
BGP table version is 17, local router ID is 11.11.11.11
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*>  4.4.4.4/32      12.12.12.2           0    100      0 (23) 4 i
*>  11.11.11.11/32  0.0.0.0              0         32768 i
*>  22.22.22.22/32  12.12.12.2           0    100      0 (23) i
*>  44.0.0.0/13     12.12.12.2           0    100      0 (23) 4 i
R1#
```

Aggregate suppress map.

```
R4(config)#access-list 1 permit host 44.1.1.1
R4(config)#access-list 1 permit host 44.2.1.1
R4(config)#access-list 1 permit host 44.3.1.1
R4(config)#access-list 1 deny any
R4(config)#route-map BLOK
R4(config-route-map)#match ip address 1
R4(config-route-map)#router bgp 4
R4(config-router)#aggregate-address 44.0.0.0 255.248.0.0 suppress-map BLOK
R4(config-router)#do sh bgp
BGP table version is 26, local router ID is 4.4.4.4
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*>  4.4.4.4/32      0.0.0.0              0         32768 i
*>  11.11.11.11/32  24.24.24.2                         0 123 i
*>  22.22.22.22/32  24.24.24.2           0             0 123 i
*>  44.0.0.0/13     0.0.0.0                        32768 i
s>  44.1.1.1/32     0.0.0.0              0         32768 i
s>  44.2.1.1/32     0.0.0.0              0         32768 i
s>  44.3.1.1/32     0.0.0.0              0         32768 i
*>  44.4.1.1/32     0.0.0.0              0         32768 i
*>  44.5.1.1/32     0.0.0.0              0         32768 i
*>  44.6.1.1/32     0.0.0.0              0         32768 i
R4(config-router)#
```

Check on R1.

```
R1#sh ip bgp
BGP table version is 26, local router ID is 11.11.11.11
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*>  4.4.4.4/32      12.12.12.2           0    100      0 (23) 4 i
*>  11.11.11.11/32  0.0.0.0              0         32768 i
*>  22.22.22.22/32  12.12.12.2           0    100      0 (23) i
*>  44.0.0.0/13     12.12.12.2           0    100      0 (23) 4 i
*>  44.4.1.1/32     12.12.12.2           0    100      0 (23) 4 i
*>  44.5.1.1/32     12.12.12.2           0    100      0 (23) 4 i
*>  44.6.1.1/32     12.12.12.2           0    100      0 (23) 4 i
R1#
```

Okay, sip.

## BGP Attribute - Weight

![weight](weight.png)

```
R1(config)#int fa0/0
R1(config-if)#ip add 12.12.12.1 255.255.255.0
R1(config-if)#no sh
R1(config-if)#int fa0/1
R1(config-if)#ip add 15.15.15.1 255.255.255.0
R1(config-if)#no sh
R1(config-if)#int s1/1
R1(config-if)#ip add 13.13.13.1 255.255.255.0
R1(config-if)#no sh

R2(config)#int fa0/0
R2(config-if)#ip add 12.12.12.2 255.255.255.0
R2(config-if)#no sh
R2(config-if)#int s1/1
R2(config-if)#ip add 24.24.24.2 255.255.255.0
R2(config-if)#no sh
R2(config-if)#int fa0/1
R2(config-if)#ip add 26.26.26.2 255.255.255.0
R2(config-if)#no sh

R3(config)#int fa0/0
R3(config-if)#ip add 34.34.34.3 255.255.255.0
R3(config-if)#no sh
R3(config-if)#int s1/1
R3(config-if)#ip add 13.13.13.3 255.255.255.0
R3(config-if)#no sh

R4(config)#int fa0/0
R4(config-if)#ip add 34.34.34.4 255.255.255.0
R4(config-if)#no sh
R4(config-if)#int s1/1
R4(config-if)#ip add 24.24.24.4 255.255.255.0
R4(config-if)#no sh

R5(config)#int fa0/1
R5(config-if)#ip add 15.15.15.5 255.255.255.0
R5(config-if)#no sh

R6(config)#int fa0/1
R6(config-if)#ip add 26.26.26.6 255.255.255.0
R6(config-if)#no sh
```

BGP configuration.

```
R1(config)#router bgp 13
R1(config-router)# neighbor 12.12.12.2 remote-as 24
R1(config-router)# neighbor 12.12.12.2 next-hop-self
R1(config-router)# neighbor 13.13.13.3 remote-as 13
R1(config-router)# neighbor 13.13.13.3 next-hop-self

R3(config-router)#router bgp 13
R3(config-router)# neighbor 13.13.13.1 remote-as 13
R3(config-router)# neighbor 13.13.13.1 next-hop-self
R3(config-router)# neighbor 34.34.34.4 remote-as 24
R3(config-router)# neighbor 34.34.34.4 next-hop-self

R2(config)#router bgp 24
R2(config-router)# neighbor 12.12.12.1 remote-as 13
R2(config-router)# neighbor 12.12.12.1 next-hop-self
R2(config-router)# neighbor 24.24.24.4 remote-as 24
R2(config-router)# neighbor 24.24.24.4 next-hop-self

R4(config-if)#router bgp 24
R4(config-router)# network 45.45.45.0 mask 255.255.255.0
R4(config-router)# neighbor 24.24.24.2 remote-as 24
R4(config-router)# neighbor 34.34.34.3 remote-as 13
R4(config-router)# neighbor 24.24.24.2 next-hop-self
R4(config-router)# neighbor 34.34.34.3 next-hop-self
```

Default route on R5 and R6. First advertise R2's network to BGP.

```
R1(config-router)#network 15.15.15.0 mask 255.255.255.0
R2(config-router)# network 26.26.26.0 mask 255.255.255.0

R1(config-router)#do sh ip bgp
BGP table version is 8, local router ID is 15.15.15.1
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*>  15.15.15.0/24   0.0.0.0              0         32768 i
* i26.26.26.0/24    13.13.13.3           0    100      0 24 i
*>                  12.12.12.2           0           100 24 i
R1(config-router)#do sh ip bgp 26.26.26.0
BGP routing table entry for 26.26.26.0/24, version 2
Paths: (2 available, best #2, table Default-IP-Routing-Table)
    Advertised to update-groups:
        2
    24
        12.12.12.2 from 12.12.12.2 (26.26.26.2)
            Origin IGP, metric 0, localpref 100, valid, external
    24
        13.13.13.3 from 13.13.13.3 (34.34.34.3)
            Origin IGP, metric 0, localpref 100, valid, internal, best
R1(config-router)#
```

It turns out there are 2 paths to the 26.26.26.0 network, but the one currently used is through 12.12.12.2. Now enter the default routing to R5 and R6.

```
R5(config-if)#ip route 0.0.0.0 0.0.0.0 15.15.15.1
R6(config-if)#ip route 0.0.0.0 0.0.0.0 26.26.26.2
```

Trace from R5 to R6.

```
R5#trace 26.26.26.6
Type escape sequence to abort.
Tracing the route to 26.26.26.6

  1 15.15.15.1 68 msec 96 msec 68 msec
  2 12.12.12.2 88 msec 76 msec 80 msec
  3 26.26.26.6 200 msec 148 msec 56 msec
R5#
```

Now we divert the path so it goes through 13.13.13.3 by configuring the weight attribute.

```
R1(config)#route-map WEIGHT permit 10
R1(config-route-map)#set weight 100
R1(config-route-map)#router bgp 13
R1(config-router)#neighbor 13.13.13.3 route-map WEIGHT in
R1(config-router)#do clear ip bgp *
```

Now let's check again.

```
R1(config-router)#do sh ip bgp 26.26.26.0
BGP routing table entry for 26.26.26.0/24, version 2
Paths: (2 available, best #2, table Default-IP-Routing-Table)
    Advertised to update-groups:
        2
    24
        12.12.12.2 from 12.12.12.2 (26.26.26.2)
            Origin IGP, metric 0, localpref 100, valid, external
    24
        13.13.13.3 from 13.13.13.3 (34.34.34.3)
            Origin IGP, metric 0, localpref 100, weight 100, valid, internal, best
R1(config-router)#

R5#trace 26.26.26.6

Type escape sequence to abort.
Tracing the route to 26.26.26.6

  1 15.15.15.1 112 msec 72 msec 60 msec
  2 13.13.13.3 140 msec 112 msec 88 msec
  3 34.34.34.4 232 msec 172 msec 88 msec
  4 24.24.24.2 112 msec 140 msec 156 msec
  5 26.26.26.6 220 msec 240 msec 152 msec
R5#
```

## BGP Dualhoming – Load Balance

![balance](balance.png)

Interface configuration.

```
R1(config)#int s1/1
R1(config-if)#ip add 12.12.12.1 255.255.255.0
R1(config-if)#no sh
R1(config-if)#int s1/0
R1(config-if)#ip add 13.13.13.1 255.255.255.0
R1(config-if)#no sh

R2(config)#int s1/1
R2(config-if)#ip add 12.12.12.2 255.255.255.0
R2(config-if)#no sh
R2(config-if)#int s1/0
R2(config-if)#ip add 24.24.24.2 255.255.255.0
R2(config-if)#no sh
R2(config-if)#int fa0/0
R2(config-if)#ip add 23.23.23.2 255.255.255.0
R2(config-if)#no sh

R3(config)#int s1/1
R3(config-if)#ip add 34.34.34.3 255.255.255.0
R3(config-if)#no sh
R3(config-if)#int s1/0
R3(config-if)#ip add 13.13.13.3 255.255.255.0
R3(config-if)#no sh
R3(config-if)#int fa0/0
R3(config-if)#ip add 23.23.23.3 255.255.255.0
R3(config-if)#no sh

R4(config)#int s1/1
R4(config-if)#ip add 34.34.34.4 255.255.255.0
R4(config-if)#no sh
R4(config-if)#int s1/0
R4(config-if)#ip add 24.24.24.4 255.255.255.0
R4(config-if)#no sh
```

BGP configuration.

```
R1(config)#router bgp 1
R1(config-router)#neighbor 12.12.12.2 remote-as 23
R1(config-router)#neighbor 13.13.13.3 remote-as 23

R2(config)#router bgp 23
R2(config-router)#neighbor 12.12.12.1 remote-as 1
R2(config-router)#neighbor 24.24.24.4 remote-as 4
R2(config-router)#neighbor 23.23.23.3 remote-as 23
R2(config-router)#neighbor 23.23.23.3 next-hop-self

R3(config)#router bgp 23
R3(config-router)#neighbor 34.34.34.4 remote-as 4
R3(config-router)#neighbor 13.13.13.1 remote-as 1
R3(config-router)#neighbor 23.23.23.2 remote-as 23
R2(config-router)#neighbor 23.23.23.2 next-hop-self

R4(config)#router bgp 4
R4(config-router)#neighbor 24.24.24.2 remote-as 23
R4(config-router)#neighbor 34.34.34.3 remote-as 23
```

Create loopbacks on R1 and R4 then advertise to BGP.

```
R1(config)#int lo0
R1(config-if)#ip add 1.1.1.1 255.255.255.255
R1(config-if)#router bgp 1
R1(config-router)#network 1.1.1.1 mask 255.255.255.255

R4(config)#int lo0
R4(config-if)#ip add 4.4.4.4 255.255.255.255
R4(config-if)#router bgp 4
R4(config-router)#net 4.4.4.4 mask 255.255.255.255

R1(config-router)#do sh ip bgp
BGP table version is 15, local router ID is 1.1.1.1
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*>  1.1.1.1/32      0.0.0.0              0         32768 i
*>  4.4.4.4/32      12.12.12.2                       100 23 4 i
*                   13.13.13.3                         0 23 4 i
```

Even though there are 2 links, only 1 is used, seen from the ">" sign there is only one. The information above shows that the one used as the next hop to 4.4.4.4 is 12.12.12.2.

Try pinging from R1 to R4.

```
R1(config-router)#do ping 4.4.4.4
Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 4.4.4.4, timeout is 2 seconds:
.....
Success rate is 0 percent (0/5)
R1(config-router)#do trace 4.4.4.4

Type escape sequence to abort.
Tracing the route to 4.4.4.4
  1 12.12.12.2 84 msec 60 msec 64 msec
  2 * * *
  3 *
R1(config)#
```

It turned out to be failed. This is because the network has not been advertised to BGP.

```
R1(config-router)#network 12.12.12.0 mask 255.255.255.0
R1(config-router)#network 13.13.13.0 mask 255.255.255.0

R4(config-router)#network 24.24.24.0 mask 255.255.255.0
R4(config-router)#network 34.34.34.0 mask 255.255.255.0
```

Okay, check again.

```
R1(config-router)#do ping 4.4.4.4

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 4.4.4.4, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 44/88/152 ms
R1(config-router)#do trace 4.4.4.4

Type escape sequence to abort.
Tracing the route to 4.4.4.4

  1 12.12.12.2 52 msec 44 msec 32 msec
  2 24.24.24.4 [AS 4] 96 msec 108 msec 64 msec
R1(config-router)#
```

Now configure to load-balance.

```
R1(config-router)#maximum-paths 2

R1(config-router)#do sh ip bgp
BGP table version is 21, local router ID is 1.1.1.1
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*>  1.1.1.1/32      0.0.0.0              0         32768 i
*>  4.4.4.4/32      12.12.12.2                       100 23 4 i
*                   13.13.13.3                         0 23 4 i
*>  12.12.12.0/24   0.0.0.0              0         32768 i
*>  13.13.13.0/24   0.0.0.0              0         32768 i
*>  24.24.24.0/24   12.12.12.2                       100 23 4 i
*                   13.13.13.3                         0 23 4 i
*>  34.34.34.0/24   12.12.12.2                       100 23 4 i
*                   13.13.13.3                         0 23 4 i
R1(config-router)#do trace 4.4.4.4

Type escape sequence to abort.
Tracing the route to 4.4.4.4

  1 13.13.13.3 80 msec
    12.12.12.2 64 msec
    13.13.13.3 60 msec
  2 24.24.24.4 [AS 4] 188 msec
    34.34.34.4 [AS 4] 152 msec
    24.24.24.4 [AS 4] 168 msec
R1(config-router)#
```

Even though in show ip bgp there is only 1 ">" sign, but when checked it is already load balancing. Okay, sip.

## BGP Dualhoming – Set Weight

![balance.png](balance.png)

Okay, first delete the load balance configuration.

```
R1(config)#router bgp 1
R1(config-router)#no maximum-paths 2
```

Now try pinging to 4.4.4.4.

```
R1#sh ip bgp
BGP table version is 8, local router ID is 1.1.1.1
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*>  1.1.1.1/32      0.0.0.0              0         32768 i
*>  4.4.4.4/32      12.12.12.2                         0 23 4 i
*                   13.13.13.3                         0 23 4 i
*>  12.12.12.0/24   0.0.0.0              0         32768 i
*>  13.13.13.0/24   0.0.0.0              0         32768 i
*   23.23.23.0/24   12.12.12.2           0             0 23 i
*>                  13.13.13.3           0             0 23 i
*   24.24.24.0/24   12.12.12.2                         0 23 4 i
*>                  13.13.13.3                         0 23 4 i
*   34.34.34.0/24   12.12.12.2                         0 23 4 i
*>                  13.13.13.3                         0 23 4 i
R1#trace 4.4.4.4

Type escape sequence to abort.
Tracing the route to 4.4.4.4

  1 12.12.12.2 40 msec 108 msec 60 msec
  2 24.24.24.4 [AS 4] 88 msec 100 msec 96 msec
R1#
```

To get to 4.4.4.4, it goes through 12.12.12.2. Now try turning off interface 12.12.12.1.

```
R1(config-if)#int s1/1
R1(config-if)#shutdown
*Mar 1 00:07:37.387: %BGP-5-ADJCHANGE: neighbor 12.12.12.2 Down Interface
flap

R1(config-if)#do sh ip bgp
BGP table version is 23, local router ID is 1.1.1.1
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*>  1.1.1.1/32      0.0.0.0              0 32768 i
*>  4.4.4.4/32      13.13.13.3                         0 23 4 i
*>  13.13.13.0/24   0.0.0.0              0 32768 i
*>  23.23.23.0/24   13.13.13.3           0 0 23 i
*>  24.24.24.0/24   13.13.13.3                         0 23 4 i
*>  34.34.34.0/24   13.13.13.3                         0 23 4 i
R1(config-if)#
```

So now to get to 4.4.4.4 it will go through 13.13.13.3. Try turning the interface back on. It turns out that even though it has been turned on, the main link does not return to 12.12.12.2 but still uses 13.13.13.3.

```
R1(config-if)#int s1/1
R1(config-if)#no sh
R1(config-if)#do sh ip bgp
BGP table version is 24, local router ID is 1.1.1.1
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*>  1.1.1.1/32      0.0.0.0              0         32768 i
*   4.4.4.4/32      12.12.12.2                         0 23 4 i
*>                  13.13.13.3                         0 23 4 i
*>  12.12.12.0/24   0.0.0.0              0         32768 i
*>  13.13.13.0/24   0.0.0.0              0         32768 i
*   23.23.23.0/24   12.12.12.2           0             0 23 i
*>                  13.13.13.3           0             0 23 i
*   24.24.24.0/24   12.12.12.2                         0 23 4 i
*>                  13.13.13.3                         0 23 4 i
*   34.34.34.0/24   12.12.12.2                         0 23 4 i
*>                  13.13.13.3                         0 23 4 i
R1(config-if)#
```

To overcome this, configure the weight attribute.

```
R1(config)#route-map WEIGHT
R1(config-route-map)#set ?
  as-path           Prepend string for a BGP AS-path attribute
  automatic-tag     Automatically compute TAG value
  clns              OSI summary address
  comm-list         set BGP community list (for deletion)
  community         BGP community attribute
  dampening         Set BGP route flap dampening parameters
  default           Set default information
  extcommunity      BGP extended community attribute
  interface         Output interface
  ip                IP specific information
  ipv6              IPv6 specific information
  level             Where to import route
  local-preference  BGP local preference path attribute
  metric            Metric value for destination routing protocol
  metric-type       Type of metric for destination routing protocol
  mpls-label        Set MPLS label for prefix
  origin            BGP origin code
  tag               Tag value for destination routing protocol
  traffic-index     BGP traffic classification number for accounting
  vrf               Define VRF name
  weight            BGP weight for routing table

R1(config-route-map)#set weight 100
R1(config-route-map)#router bgp 1
R1(config-router)#nei
R1(config-router)#neighbor 12.12.12.2 route-map WEIGHT in
R1(config-router)#do clear ip bgp *

R1(config-router)#do sh ip bgp
BGP table version is 5, local router ID is 1.1.1.1
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*   4.4.4.4/32      13.13.13.3                         0 23 4 i
*>                  12.12.12.2                       100 23 4 i
*   23.23.23.0/24   13.13.13.3           0             0 23 i
*>                  12.12.12.2           0           100 23 i
*   24.24.24.0/24   13.13.13.3                         0 23 4 i
*>                  12.12.12.2                       100 23 4 i
*   34.34.34.0/24   13.13.13.3                         0 23 4 i
*>                  12.12.12.2                       100 23 4 i
R1(config-router)#
```

Now turn it back on. Wait a bit longer then check show ip bgp.

```
R1(config-if)#no sh
R1(config-if)#
*Mar 1 00:15:52.047: %LINK-3-UPDOWN: Interface Serial1/1, changed state to
up
R1(config-if)#
*Mar 1 00:15:53.051: %LINEPROTO-5-UPDOWN: Line protocol on Interface
Serial1/1, changed state to up
*Mar 1 00:16:19.355: %BGP-5-ADJCHANGE: neighbor 12.12.12.2 Up
R1(config-if)#do sh ip bgp
BGP table version is 18, local router ID is 1.1.1.1
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*>  1.1.1.1/32      0.0.0.0              0         32768 i
*>  4.4.4.4/32      12.12.12.2                       100 23 4 i
*                   13.13.13.3                         0 23 4 i
*>  12.12.12.0/24   0.0.0.0              0         32768 i
*>  13.13.13.0/24   0.0.0.0              0         32768 i
*>  23.23.23.0/24   12.12.12.2           0           100 23 i
*                   13.13.13.3           0             0 23 i
*>  24.24.24.0/24   12.12.12.2                       100 23 4 i
*                   13.13.13.3                         0 23 4 i
*>  34.34.34.0/24   12.12.12.2                       100 23 4 i
*                   13.13.13.3                         0 23 4 i
R1(config-if)#
```

Okay, sip.

## BGP Dualhoming – Set MED

![balance.png](balance.png)

Besides regulating traffic coming out of R1, we can also regulate traffic heading to R1, one of them is with MED or metric.

```
R1(config)#ip access-list standard LAN
R1(config-std-nacl)#permit 1.1.1.1
R1(config-std-nacl)#route-map R2MED permit 10
R1(config-route-map)#match ip address LAN
R1(config-route-map)#set metric 110
R1(config-route-map)#route-map R3MED permit 10
R1(config-route-map)#match ip address LAN
R1(config-route-map)#set metric 100
R1(config-route-map)#
R1(config-route-map)#router bgp 1
R1(config-router)#neighbor 12.12.12.2 route-map R2MED out
R1(config-router)#neighbor 13.13.13.3 route-map R3MED out
R1(config-router)#do clear ip bgp *
```

Check on R2. Now to get to 1.1.1.1, it will be routed through 23.23.23.3 then to 13.13.13.1 first.

```
R2(config-router)#do sh ip bgp
BGP table version is 23, local router ID is 24.24.24.2
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete
    Network         Next Hop        Metric LocPrf Weight Path
*>i1.1.1.1/32       23.23.23.3         100    100      0 1 i
*                   12.12.12.1         110             0 1 i
* i4.4.4.4/32       23.23.23.3           0    100      0 4 i
*>                  24.24.24.4           0      0        4 i
*> 23.23.23.0/24    0.0.0.0              0           32768 i
* i                 23.23.23.3           0    100      0 i
r i24.24.24.0/24    23.23.23.3           0    100      0 4 i
r>                  24.24.24.4           0             0 4 i
* i34.34.34.0/24    23.23.23.3           0    100      0 4 i
*>                  24.24.24.4           0             0 4 i
R2(config-router)#do trace 1.1.1.1

Type escape sequence to abort.
Tracing the route to 1.1.1.1

  1 23.23.23.3 56 msec 100 msec 64 msec
  2 13.13.13.1 112 msec 84 msec 72 msec
R2(config-router)#
```

## BGP Dualhoming – Set AS Path

![balance.png](balance.png)

Regulating traffic heading to R1 besides using metric can also use AS Path. Delete the MED first.

```
R1(config-router)#no neighbor 12.12.12.2 route-map R2MED out
R1(config-router)#no neighbor 13.13.13.3 route-map R3MED out
```

Now set as-path on route-map.

```
R1(config)#route-map AS-PREPEND
R1(config-route-map)#set as-path prepend 1 1 1
R1(config-route-map)#router bgp 1
R1(config-router)#neighbor 12.12.12.2 route-map AS-PREPEND out
R1(config-router)#do clear ip bgp *
```

Check.

```
R2#traceroute 1.1.1.1

Type escape sequence to abort.
Tracing the route to 1.1.1.1

  1 23.23.23.3 60 msec 96 msec 44 msec
  2 13.13.13.1 [AS 1] 80 msec 92 msec 80 msec
R2#
```

## BGP Multihoming – Equal Load Balance

![balance.png](balance.png)

The goal is to be able to load balance through 2 AS or 2 ISPs. Delete AS 23 and change to AS 2 and AS 3 respectively. Also delete the previous routemap.

```
R1(config)#router bgp 1
R1(config-router)#no neighbor 12.12.12.2 remote-as 23
R1(config-router)#neighbor 12.12.12.2 remote-as 2
R1(config-router)#no neighbor 12.12.12.2 route-map AS-PREPEND out
R1(config-router)#no neighbor 13.13.13.3 remote-as 23
R1(config-router)#neighbor 13.13.13.3 remote-as 3

R2(config)#no router bgp 23
R2(config)#router bgp 2
R2(config-router)#neighbor 12.12.12.1 remote-as 1
R2(config-router)#neighbor 24.24.24.4 remote-as 4
R2(config-router)#neighbor 23.23.23.3 remote-as 3

R3(config)#no router bgp 23
R3(config)#router bgp 3
R3(config-router)#neighbor 34.34.34.4 remote-as 4
R3(config-router)#neighbor 13.13.13.1 remote-as 1
R3(config-router)#neighbor 23.23.23.2 remote-as 2

R4(config)#router bgp 4
R4(config-router)#no neighbor 24.24.24.2 remote-as 23
R4(config-router)#neighbor 24.24.24.2 remote-as 2
R4(config-router)#no neighbor 34.34.34.3 remote-as 23
R4(config-router)#neighbor 34.34.34.3 remote-as 3
```

Configure load balance on R1.

```
R1(config)#router bgp 1
R1(config-router)#maximum-paths 2
R1#trace 4.4.4.4

Type escape sequence to abort.
Tracing the route to 4.4.4.4

  1 12.12.12.2 104 msec 72 msec 48 msec
  2 24.24.24.4 [AS 4] 140 msec 92 msec 64 msec
R1#
```

It turns out that even though maximum-path has been configured, it is still not load balancing. Add the configuration below.

```
R1(config)#router bgp 1
R1(config-router)#bgp bestpath as-path multipath-relax
R1(config-router)#do clear ip bgp *
```

Okay, wait a moment and now check again.

```
R1(config-router)#do trace 4.4.4.4

Type escape sequence to abort.
Tracing the route to 4.4.4.4

  1 13.13.13.3 116 msec
    12.12.12.2 108 msec
    13.13.13.3 88 msec
  2 24.24.24.4 [AS 4] 204 msec
    34.34.34.4 [AS 4] 44 msec
    24.24.24.4 [AS 4] 92 msec
R1(config-router)#
```

Sip, already load-balanced.

```
R1(config)#router bgp 1
R1(config-router)#maximum-paths 2
R1#trace 4.4.4.4

Type escape sequence to abort.
Tracing the route to 4.4.4.4

  1 12.12.12.2 104 msec 72 msec 48 msec
  2 24.24.24.4 [AS 4] 140 msec 92 msec 64 msec
R1#
```

## BGP Multihoming – Unequal Load Balance

![balance.png](balance.png)

The problem occurs when the link to AS 4 through AS 2 and AS 3 have different bandwidths.

```
R1(config)#int s1/0
R1(config-if)#bandwidth 100
R1(config-if)#int s1/1
R1(config-if)#bandwidth 200
R1(config-if)#do clear ip bgp *

R1(config-if)#do sh ip bgp
BGP table version is 7, local router ID is 1.1.1.1
Status codes: s suppressed, d damped, h history, * valid, > best, i -
internal,
            r RIB-failure, S Stale
Origin codes: i - IGP, e - EGP, ? - incomplete

    Network         Next Hop        Metric LocPrf Weight Path
*>  1.1.1.1/32      0.0.0.0              0         32768 i
*   4.4.4.4/32      13.13.13.3                         0 3 4 i
*>                  12.12.12.2                         0 2 4 i
*>  12.12.12.0/24   0.0.0.0              0         32768 i
*>  13.13.13.0/24   0.0.0.0              0         32768 i
*   24.24.24.0/24   13.13.13.3                         0 3 4 i
*>                  12.12.12.2                         0 2 4 i
*   34.34.34.0/24   13.13.13.3                         0 3 4 i
*>                  12.12.12.2                         0 2 4 i

R1(config-if)#do sh ip route 4.4.4.4
Routing entry for 4.4.4.4/32
    Known via "bgp 1", distance 20, metric 0
    Tag 2, type external
    Last update from 12.12.12.2 00:00:16 ago
    Routing Descriptor Blocks:
    * 13.13.13.3, from 13.13.13.3, 00:00:16 ago
        Route metric is 0, traffic share count is 1
        AS Hops 2
        Route tag 2
      12.12.12.2, from 12.12.12.2, 00:00:16 ago
        Route metric is 0, traffic share count is 1
        AS Hops 2
        Route tag 2

R1(config-if)#
```

Then we will find the bandwidth ratio is still 1:1. What if the bandwidth difference is huge?

```
R1(config-if)#router bgp 1
R1(config-router)#bgp dmzlink-bw
R1(config-router)#neighbor 12.12.12.2 dmzlink-bw
R1(config-router)#neighbor 13.13.13.3 dmzlink-bw
R1(config-router)#do clear ip bgp *
```

Okay, check again.

```
R1(config-router)#do sh ip route 4.4.4.4
Routing entry for 4.4.4.4/32
    Known via "bgp 1", distance 20, metric 0
    Tag 2, type external
    Last update from 13.13.13.3 00:00:15 ago
    Routing Descriptor Blocks:
        13.13.13.3, from 13.13.13.3, 00:00:15 ago
            Route metric is 0, traffic share count is 23
            AS Hops 2
            Route tag 2
      * 12.12.12.2, from 12.12.12.2, 00:00:15 ago
            Route metric is 0, traffic share count is 48
            AS Hops 2
            Route tag 2

R1(config-router)#
```

Okay, it is successful.
