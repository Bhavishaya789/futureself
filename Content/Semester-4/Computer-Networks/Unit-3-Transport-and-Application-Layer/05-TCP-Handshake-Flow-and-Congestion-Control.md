# TCP: handshake, flow control and congestion control
minutes: 30
yt: TCP three way handshake and congestion control explained
yt: TCP slow start congestion avoidance fast recovery
@study
The **Transport layer** gives process-to-process delivery using **port numbers**. **TCP** is connection-oriented and reliable. **UDP** is connectionless, fast and unreliable (DNS queries, video calls, games).

## TCP versus UDP
| Feature | TCP | UDP |
| --- | --- | --- |
| Connection | Yes (handshake) | No |
| Reliability | Acknowledgements, retransmission, ordering | None |
| Speed | Slower | Faster, small header (8 bytes) |
| Used by | HTTP/HTTPS, SMTP, FTP, SSH | DNS, DHCP, streaming, VoIP |

## Three-way handshake (connection set-up)
1. Client sends **SYN** with its initial sequence number x.
2. Server replies **SYN + ACK** with its own sequence number y and acknowledgement x + 1.
3. Client sends **ACK** with y + 1. The connection is established.
Closing uses **FIN** and **ACK** in each direction (four steps).

## Reliability
Every byte has a **sequence number**. The receiver acknowledges the next byte it expects. If an ACK does not arrive before the **timeout**, the sender retransmits. Three duplicate ACKs trigger **fast retransmit**.

## Flow control
The receiver advertises a **window size (rwnd)**, how much free buffer it has. The sender never keeps more unacknowledged data in flight than rwnd. This protects the receiver.

## Congestion control
Protects the **network**. The sender keeps a **congestion window (cwnd)**; it may send min(cwnd, rwnd).
- **Slow start:** cwnd starts at 1 MSS and doubles every RTT (1, 2, 4, 8, ...) until it reaches **ssthresh**.
- **Congestion avoidance (AIMD):** above ssthresh cwnd grows by 1 MSS per RTT (additive increase).
- **On packet loss (multiplicative decrease):**
  - Timeout: ssthresh = cwnd / 2 and cwnd = 1 MSS, back to slow start.
  - Three duplicate ACKs (TCP Reno): ssthresh = cwnd / 2 and cwnd = ssthresh, then continue with congestion avoidance (fast recovery).

### Example
ssthresh = 8 MSS. cwnd per RTT: 1, 2, 4, 8 (reaches ssthresh), then 9, 10, 11, 12. A timeout happens at cwnd = 12: ssthresh = 6 and cwnd = 1. New cwnd sequence: 1, 2, 4, 6, 7, 8, ...

## Hindi saransh
TCP reliable hai: handshake (SYN, SYN-ACK, ACK), sequence number aur ACK se. Flow control receiver ko bachata hai (rwnd), congestion control network ko (slow start, phir har RTT mein +1, loss par aadha). UDP tez par unreliable hai.

> Flow control protects the receiver. Congestion control protects the network.
@qa
Q: Why is a three-way handshake needed?
A: Both sides must agree on starting sequence numbers and confirm that the other can send and receive. Two steps would not let the server know the client received its sequence number.
Q: What is the difference between flow control and congestion control?
A: Flow control stops a fast sender overwhelming a slow receiver, using the receiver window. Congestion control stops senders overloading the network, using the congestion window.
Q: What happens to cwnd and ssthresh on a timeout?
A: ssthresh becomes half of the current cwnd and cwnd drops to 1 MSS, so TCP restarts in slow start.
Q: Why does DNS normally use UDP?
A: A query and its answer fit in one small packet. UDP avoids connection set-up delay and header cost, and the application retries if the reply is lost.
Q: What does a TCP ACK number mean?
A: It is the sequence number of the next byte the receiver expects, so it acknowledges everything before it.
@quiz
? In the three-way handshake, the second segment carries
- SYN only
+ SYN and ACK
- ACK only
- FIN
! The server answers a SYN with SYN + ACK.
? cwnd is 12 MSS and a timeout occurs. The new ssthresh is
- 12
+ 6
- 3
- 1
! ssthresh = cwnd / 2 = 6 and cwnd restarts at 1.
? Slow start increases cwnd
- by 1 MSS per RTT
- by 1 MSS per ACK only after loss
+ exponentially (doubling each RTT)
- not at all
! Each ACK adds 1 MSS, so cwnd doubles every round trip.
? Which protocol is connectionless?
- TCP
+ UDP
- HTTP over TCP
- SSH
! UDP has no connection set-up.
? The receiver window (rwnd) is used for
+ flow control
- congestion control
- routing
- error correction
! rwnd tells the sender how much buffer space the receiver has left.
@visual
sequence | TCP three-way handshake | Client > Server : SYN, seq = x; Server > Client : SYN + ACK, seq = y, ack = x + 1; Client > Server : ACK, ack = y + 1
bars | Congestion window growth in the example (MSS per RTT) | RTT1=1;RTT2=2;RTT3=4;RTT4=8;RTT5=9;RTT6=10;RTT7=11;RTT8=12
@problems
## Moderate
P: List the three segments of the TCP handshake with their flags.
A: 1) Client to server: SYN. 2) Server to client: SYN + ACK. 3) Client to server: ACK. After this the connection is established.
R: 2 | Correct order and flags
R: 1 | States that the connection is established after step 3
## High
P: TCP slow start begins with cwnd = 1 MSS and ssthresh = 8 MSS. Write cwnd for the first 8 RTTs without any loss.
A: Slow start doubles until ssthresh: 1, 2, 4, 8. After that congestion avoidance adds 1 per RTT: 9, 10, 11, 12. So the first 8 values are 1, 2, 4, 8, 9, 10, 11, 12.
R: 2 | Doubling up to ssthresh
R: 2 | Linear growth afterwards
R: 1 | Complete eight values
## Advanced
P: In the same connection a timeout occurs when cwnd = 12. Give the new ssthresh and the next six cwnd values. Then compare with the case of three duplicate ACKs in TCP Reno.
A: Timeout: ssthresh = 12 / 2 = 6 and cwnd = 1. Next values: 1, 2, 4, 6, 7, 8 (slow start until 6, then +1). With three duplicate ACKs in Reno: ssthresh = 6 and cwnd = 6 (fast recovery), so growth continues linearly 7, 8, 9... without going back to 1, because duplicate ACKs show the network is still delivering some packets.
R: 2 | ssthresh = 6 and cwnd restarts at 1
R: 2 | Correct six values 1, 2, 4, 6, 7, 8
R: 2 | Explains Reno behaviour and why it is gentler
