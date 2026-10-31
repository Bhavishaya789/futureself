# IP addressing and subnetting
minutes: 30
yt: IPv4 subnetting explained with examples
yt: CIDR notation and subnet mask
@study
An **IPv4 address** is 32 bits written as four decimal numbers (octets), for example 192.168.10.5. It has a **network part** and a **host part**. The **subnet mask** (or the CIDR prefix /n) tells how many leading bits are the network part.

## Classful ranges (for exams)
| Class | First octet | Default mask | Hosts per network |
| --- | --- | --- | --- |
| A | 1 to 126 | 255.0.0.0 (/8) | 16,777,214 |
| B | 128 to 191 | 255.255.0.0 (/16) | 65,534 |
| C | 192 to 223 | 255.255.255.0 (/24) | 254 |
| D | 224 to 239 | multicast | none |
| E | 240 to 255 | reserved | none |
127.x.x.x is loopback. Today the Internet uses **CIDR** (classless), but the class idea is still asked in exams.

## Special addresses
- **Network address:** host bits all 0 (identifies the subnet).
- **Broadcast address:** host bits all 1.
- Usable hosts = 2^h - 2, where h is the number of host bits.
- Private ranges: 10.0.0.0/8, 172.16.0.0 to 172.31.255.255 (/12), 192.168.0.0/16.

## Finding the network of an address
Network address = IP **AND** subnet mask.
Example: 172.16.37.200/20. The mask has 20 network bits = 255.255.240.0. Third octet 37 AND 240 = 32. Network = **172.16.32.0**; host bits = 12, so broadcast = **172.16.47.255** and usable hosts = 2^12 - 2 = **4094**.

## Subnetting a /24 into 4 equal subnets
Borrow 2 host bits, so the prefix becomes /26 (mask 255.255.255.192). Each subnet has 2^6 = 64 addresses, 62 usable.
| Subnet | Network | Usable range | Broadcast |
| --- | --- | --- | --- |
| 1 | 192.168.10.0/26 | .1 to .62 | .63 |
| 2 | 192.168.10.64/26 | .65 to .126 | .127 |
| 3 | 192.168.10.128/26 | .129 to .190 | .191 |
| 4 | 192.168.10.192/26 | .193 to .254 | .255 |

```python
import ipaddress
n = ipaddress.ip_interface("172.16.37.200/20").network
print(n, n.broadcast_address, n.num_addresses - 2)   # 172.16.32.0/20 172.16.47.255 4094
for s in ipaddress.ip_network("192.168.10.0/24").subnets(prefixlen_diff=2):
    print(s, s.broadcast_address)
```

## IPv6 in one minute
128-bit addresses written in hexadecimal (2001:db8::1). Same job as IPv4 with a vastly larger address space, no broadcast, and built-in support for autoconfiguration.

## Hindi saransh
IPv4 address 32 bit ka hota hai. Subnet mask batata hai network aur host bits. Network address = IP AND mask. Hosts = 2^h - 2. /24 ko 4 subnets mein todne ke liye /26 lete hain (har subnet mein 62 hosts).

> Always subtract 2 for usable hosts (network and broadcast addresses cannot be given to hosts).
@qa
Q: How many usable hosts does a /26 network have?
A: A /26 has 6 host bits, so 2^6 = 64 addresses, and 64 - 2 = 62 usable hosts.
Q: How do you find the network address of an IP?
A: Do a bitwise AND of the IP address with the subnet mask.
Q: What are the private IPv4 ranges?
A: 10.0.0.0/8, 172.16.0.0/12 (172.16.0.0 to 172.31.255.255) and 192.168.0.0/16.
Q: What is CIDR?
A: Classless Inter-Domain Routing. Addresses are written with a prefix length (like /20) so networks can be any size, not just the fixed A, B and C classes.
Q: Why is the broadcast address not assigned to a host?
A: It has all host bits set to 1 and is used to send a packet to every device in that subnet.
@quiz
? What is the network address of 172.16.37.200/20?
- 172.16.0.0
+ 172.16.32.0
- 172.16.37.0
- 172.16.40.0
! The mask is 255.255.240.0 and 37 AND 240 = 32, so the network is 172.16.32.0.
? A /26 prefix corresponds to the mask
- 255.255.255.0
- 255.255.255.128
+ 255.255.255.192
- 255.255.255.224
! 26 ones = 255.255.255.192.
? Usable hosts in a /20 network
- 2046
+ 4094
- 4096
- 8190
! 12 host bits give 4096 addresses; subtract 2 = 4094.
? Which address is private?
- 172.32.1.1
- 11.0.0.1
+ 172.20.5.9
- 192.169.1.1
! Only 172.16.0.0 to 172.31.255.255 is private within the 172 block.
? Class C networks have a default mask of
- 255.0.0.0
- 255.255.0.0
+ 255.255.255.0
- 255.255.255.192
! Class C uses /24.
@visual
blocks | A /24 split into four /26 subnets (each 64 addresses) | 192.168.10.0/26:64;192.168.10.64/26:64;192.168.10.128/26:64;192.168.10.192/26:64
steps | Find the network address and broadcast | Write the mask from the prefix; AND the IP with the mask to get the network; Set all host bits to 1 for the broadcast; Usable hosts are 2^h - 2
@problems
## Moderate
P: An organisation has 192.168.10.0/24 and needs 4 equal subnets. Give the new mask, the number of usable hosts per subnet and the network address of each subnet.
A: Borrow 2 bits, so /26 and mask 255.255.255.192. Each subnet has 64 addresses, 62 usable. The networks are 192.168.10.0, 192.168.10.64, 192.168.10.128 and 192.168.10.192.
R: 2 | Mask /26 = 255.255.255.192
R: 1 | 62 usable hosts
R: 2 | The four network addresses
## High
P: Find the network address, broadcast address and number of usable hosts for the host 172.16.37.200/20.
A: A /20 mask is 255.255.240.0. Third octet: 37 AND 240 = 32, so the network is 172.16.32.0. The block size in the third octet is 16, so the broadcast is 172.16.47.255. Host bits = 12, so usable hosts = 4096 - 2 = 4094.
R: 2 | Mask 255.255.240.0 and network 172.16.32.0
R: 2 | Broadcast 172.16.47.255
R: 1 | 4094 usable hosts
## Advanced
P: A company needs three subnets with 100, 50 and 25 hosts from 192.168.1.0/24, using the most efficient (variable length) division. Give the prefix and network of each.
A: Assign the largest first. 100 hosts need 7 host bits (126 usable) so /25: 192.168.1.0/25 (0 to 127). 50 hosts need 6 host bits (62 usable) so /26: 192.168.1.128/26 (128 to 191). 25 hosts need 5 host bits (30 usable) so /27: 192.168.1.192/27 (192 to 223). The range 224 to 255 stays free for later use.
R: 2 | Allocates largest subnet first and explains host-bit requirement
R: 3 | Correct prefixes /25, /26, /27
R: 1 | Non-overlapping network addresses
