# Network types and the OSI and TCP/IP models
minutes: 25
yt: OSI model vs TCP/IP model explained
yt: types of computer networks LAN MAN WAN
@study
A **computer network** connects devices so they can share data and resources. Networks are described by their **size** (LAN, MAN, WAN), their **layout** (topology) and the **layered model** that organises the rules (protocols) they follow.

## Types by size
- **PAN:** a few metres (Bluetooth earbuds to a phone).
- **LAN:** a room, building or campus (Ethernet and Wi-Fi in a college lab).
- **MAN:** a city (a cable TV or metro fibre network).
- **WAN:** countries and continents (the Internet is a network of networks).

## Topologies
- **Bus:** one shared cable. Cheap, but one break stops everything.
- **Star:** every device connects to a central switch. Most common; a failed cable affects only one device, a failed switch affects all.
- **Ring:** each device connects to two neighbours (token ring).
- **Mesh:** devices connect to many others. With n devices a full mesh needs **n(n-1)/2** links (10 devices need 45).
- **Tree/hybrid:** stars joined by a backbone.

## Why layers?
Each layer does one job and talks only to the layer above and below it. A change in one layer (say Wi-Fi to Ethernet) does not break the others, and each layer can be tested on its own.

## The OSI model (7 layers)
| Layer | Job | Data unit | Example |
| --- | --- | --- | --- |
| 7 Application | Services for the user program | Data | HTTP, SMTP, DNS |
| 6 Presentation | Format, encryption, compression | Data | TLS, JPEG |
| 5 Session | Start, manage, end sessions | Data | NetBIOS, RPC |
| 4 Transport | End-to-end delivery, ports | Segment | TCP, UDP |
| 3 Network | Logical addressing and routing | Packet | IP, routers |
| 2 Data link | Node-to-node frames, MAC address | Frame | Ethernet, switches |
| 1 Physical | Bits on the medium | Bit | Cables, hubs |

## The TCP/IP model (4 layers)
**Application** (OSI 5-7), **Transport** (4), **Internet** (3), **Network access / link** (1-2). TCP/IP is the model the real Internet uses; OSI is the teaching reference.

## Encapsulation
Going down the sender's stack each layer adds its own **header** (the link layer also adds a trailer). The receiver removes headers going up (**decapsulation**).

## Hindi saransh
Network ke size ke hisaab se PAN, LAN, MAN, WAN hote hain. OSI model mein 7 layers hain (Physical se Application tak), TCP/IP mein 4. Har layer ek kaam karti hai aur data par header jodti hai (encapsulation).

> Memory trick for OSI from the top: All People Seem To Need Data Processing. From the bottom: Please Do Not Throw Sausage Pizza Away.
@qa
Q: Why is a layered architecture used in networks?
A: It splits a hard problem into small independent parts. Each layer offers a service to the one above, so a layer can be changed or replaced without changing the others, and each can be tested separately.
Q: How many links does a full mesh of n devices need?
A: n(n-1)/2. For 10 devices that is 45 links, which is why full mesh is costly and used only for small, critical networks.
Q: Which OSI layer is responsible for routing, and what is its data unit called?
A: The Network layer (layer 3) routes packets using logical (IP) addresses. Its data unit is the packet.
Q: What is the difference between the OSI and TCP/IP models?
A: OSI has 7 layers and is a theoretical reference. TCP/IP has 4 layers (Application, Transport, Internet, Network access) and is the model the Internet actually uses; its Application layer covers OSI layers 5, 6 and 7.
Q: What is encapsulation?
A: As data moves down the layers each layer adds its own header (and the link layer a trailer). The receiver strips them in reverse order.
@quiz
? Which OSI layer adds the MAC address to the frame?
- Network
+ Data link
- Transport
- Session
! Physical (MAC) addressing and framing are the job of the Data link layer.
? How many links does a full mesh of 8 devices need?
- 16
- 24
+ 28
- 56
! n(n-1)/2 = 8 x 7 / 2 = 28.
? The data unit of the Transport layer is called a
- packet
- frame
+ segment
- bit
! TCP data units are segments (UDP: datagrams). Packets belong to the Network layer.
? Which layer of the TCP/IP model combines the OSI Session, Presentation and Application layers?
- Internet
- Transport
+ Application
- Network access
! TCP/IP has a single Application layer covering OSI layers 5 to 7.
? In a star topology, a failure of the central switch
- affects only one device
+ stops communication for all devices
- affects nothing
- affects only the farthest device
! Every device talks through the switch, so the switch is a single point of failure.
@visual
layers | The OSI model from top to bottom | 7 Application: HTTP, SMTP, DNS; 6 Presentation: encryption and format; 5 Session: dialogue control; 4 Transport: TCP and UDP, ports; 3 Network: IP and routing; 2 Data link: frames and MAC; 1 Physical: bits on the wire
compare | OSI versus TCP/IP | OSI model=7 layers~Reference model~Strict separation; TCP/IP model=4 layers~Used by the real Internet~Application layer covers OSI 5 to 7
@problems
## Moderate
P: List the seven layers of the OSI model with one protocol or device for each layer.
A: Application: HTTP/SMTP/DNS. Presentation: TLS/JPEG/ASCII. Session: RPC/NetBIOS. Transport: TCP/UDP. Network: IP, router. Data link: Ethernet, switch, MAC address. Physical: cable, hub, Wi-Fi radio.
R: 3 | All seven layers in the correct order
R: 2 | A suitable protocol or device for each layer
## High
P: A lab has 12 computers. Compare the number of cables needed for a full mesh and for a star topology. Which would you choose and why?
A: Full mesh needs 12 x 11 / 2 = 66 links (and 11 ports on every machine). A star needs 12 links to a central switch. The star is cheaper, easier to extend and easier to troubleshoot; its weakness is the switch as a single point of failure, which can be reduced by a spare switch.
R: 2 | Mesh = 66 links using n(n-1)/2
R: 1 | Star = 12 links
R: 2 | Chooses star with a reason and mentions the switch as the weak point
## Advanced
P: Explain what happens to a web page request as it passes down the TCP/IP stack on the sender and up the stack on the receiver. Name the unit of data and the header added at each layer.
A: Application creates the HTTP request (data). Transport adds a TCP header with source and destination port, making a segment. Internet adds an IP header with source and destination IP, making a packet. Network access adds an Ethernet header and trailer, making a frame, and sends bits. The receiver does the reverse: the link layer checks the frame and removes its header, IP checks the destination address and removes the IP header, TCP uses the port to pick the right process and removes its header, and the application receives the request.
R: 2 | Names the four layers and the data unit at each (data, segment, packet, frame)
R: 2 | States which header each layer adds
R: 2 | Describes decapsulation on the receiver in reverse order
