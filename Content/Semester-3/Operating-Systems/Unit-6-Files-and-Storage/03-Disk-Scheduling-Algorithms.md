# Disk structure and disk scheduling
minutes: 35
yt: disk scheduling algorithms FCFS SSTF SCAN C-SCAN LOOK numerical
yt: seek time rotational latency disk access time
@study
A hard disk has **platters** with **tracks** (circles), divided into **sectors**, with read/write heads on an arm. **Cylinder** = the tracks at the same arm position on all platters.

## Disk access time
- **Seek time:** moving the head to the correct cylinder (largest part).
- **Rotational latency:** waiting for the sector to rotate under the head; average = half a rotation. At 7200 rpm one rotation takes 60/7200 s = 8.33 ms, so average latency = 4.17 ms.
- **Transfer time:** reading the data.
Disk access time = seek + rotational latency + transfer time. The OS reduces seek time by scheduling requests. (SSDs have no seek, so scheduling matters less.)

## Algorithms
Request queue (cylinders 0 to 199): **98, 183, 37, 122, 14, 124, 65, 67**, with the head at **53**.

### FCFS
Serve in arrival order: 53 → 98 → 183 → 37 → 122 → 14 → 124 → 65 → 67.
Total head movement = **640 cylinders**. Fair but wild swings.

### SSTF (Shortest Seek Time First)
Always the nearest request: 53 → 65 → 67 → 37 → 14 → 98 → 122 → 124 → 183.
Total = **236**. Good throughput but may **starve** distant requests.

### SCAN (elevator)
The head moves in one direction (here towards 199), serving requests, goes to the **end**, then reverses.
Order: 65, 67, 98, 122, 124, 183, (199), 37, 14. Total = (199 − 53) + (199 − 14) = **331**.

### C-SCAN (circular SCAN)
Moves in one direction only; at the end it **jumps back** to cylinder 0 and continues in the same direction, giving more uniform waiting times.
Order: 65, 67, 98, 122, 124, 183, (199), (0), 14, 37. Total (counting the return jump) = **382**.

### LOOK and C-LOOK
Like SCAN and C-SCAN, but the head goes only as far as the **last request** in each direction instead of the disk edge.
LOOK order: 65, 67, 98, 122, 124, 183, 37, 14. Total = (183 − 53) + (183 − 14) = **299**.

## Summary
| Algorithm | Total movement (example) | Notes |
| --- | --- | --- |
| FCFS | 640 | Fair, slow |
| SSTF | 236 | Can starve |
| SCAN | 331 | Elevator |
| C-SCAN | 382 | Uniform wait |
| LOOK | 299 | Practical SCAN |

## Choosing
For heavily loaded disks SCAN/LOOK-type algorithms perform well and avoid starvation. Linux uses variants of **deadline**, **CFQ**/**BFQ** or simple **noop** (for SSDs).

## Disk management
Low-level formatting, partitioning, boot blocks, bad-block management, and **RAID** (redundant arrays: RAID 0 striping, 1 mirroring, 5 striped with parity) for speed and reliability.

> Seek time dominates, so schedule requests to reduce head movement.
@qa
Q: What are the components of disk access time?
A: Seek time (moving the head), rotational latency (waiting for the sector to arrive) and transfer time (reading or writing the data).
Q: Why can SSTF cause starvation?
A: Requests far from the head can be postponed indefinitely if new requests keep arriving near the head.
Q: How is SCAN different from LOOK?
A: SCAN goes all the way to the disk edge before reversing. LOOK reverses at the last pending request in that direction.
Q: What is the average rotational latency of a 7200 rpm disk?
A: Half of one rotation: one rotation is 8.33 ms, so the average is about 4.17 ms.
Q: What is the advantage of C-SCAN over SCAN?
A: It treats the cylinders as a circular list, giving more uniform waiting times for requests at both ends of the disk.
@quiz
? For queue 98,183,37,122,14,124,65,67 with the head at 53, FCFS total head movement is
- 236
- 299
- 331
+ 640
! 45+85+146+85+108+110+59+2 = 640.
? Which algorithm always picks the nearest request?
- FCFS
+ SSTF
- SCAN
- C-SCAN
! SSTF = Shortest Seek Time First.
? SSTF suffers from
- deadlock
- fragmentation
+ starvation
- thrashing
! Far requests may never be chosen.
? The elevator algorithm is
- FCFS
- SSTF
+ SCAN
- LOOK only
! SCAN moves like an elevator in one direction, then back.
? Which component of disk access time is usually the largest?
- Transfer time
+ Seek time
- CPU time
- Cache time
! Mechanical arm movement dominates.

@visual
bars | Total head movement for requests 98,183,37,122,14,124,65,67 with head at 53 (disk 0-199) | FCFS=640;SSTF=236;SCAN=236;LOOK=208;C-SCAN=382

@problems
## Moderate
P: Request queue 98, 183, 37, 122, 14, 124, 65, 67 with the head at cylinder 53. Find the total head movement for FCFS and SSTF.
A: FCFS: 53 to 98 = 45, to 183 = 85, to 37 = 146, to 122 = 85, to 14 = 108, to 124 = 110, to 65 = 59, to 67 = 2. Total = 640 cylinders.
SSTF order: 53, 65, 67, 37, 14, 98, 122, 124, 183. Total = 12 + 2 + 30 + 23 + 84 + 24 + 2 + 59 = 236 cylinders.
R: 2 | FCFS total 640
R: 2 | SSTF total 236 with correct order
## High
P: Same queue and the head moving towards 0 first on a disk of cylinders 0 to 199. Find the total head movement for SCAN and LOOK.
A: SCAN: 53 down to 0 is 53, then up to 183 is 183. Total = 236 cylinders.
LOOK: 53 down to 14 is 39, then up to 183 is 169. Total = 208 cylinders. LOOK turns around at the last request instead of the disk edge.
R: 2 | SCAN = 236
R: 2 | LOOK = 208
R: 1 | LOOK reverses at the last request
## Advanced
P: Same queue, head moving upward. Find the head movement for C-SCAN (counting the return jump) and explain why C-SCAN gives more uniform waiting time than SCAN.
A: C-SCAN: 53 up to 199 is 146, jump back to 0 is 199, then 0 up to 37 (last request below 53 is 37) is 37. Total = 146 + 199 + 37 = 382 cylinders. (If the return jump is not counted: 183.)
In SCAN, cylinders in the middle get serviced twice as often as the edges, so edge requests wait longer. C-SCAN always sweeps in one direction and treats the disk like a circular list, giving more uniform waiting.
R: 2 | Total 382 with the jump counted
R: 2 | Explains uniform waiting time
R: 1 | Mentions the return sweep without servicing
