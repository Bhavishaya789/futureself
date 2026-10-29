# Page replacement: FIFO, Optimal, LRU and Belady's anomaly
minutes: 40
yt: page replacement algorithms FIFO LRU optimal numerical
yt: belady's anomaly explained
@study
When a page fault occurs and **no free frame** exists, the OS must pick a **victim** page to replace. Goal: **minimise page faults**. We judge algorithms on a **reference string**.

If the victim page is **dirty** (modified) it must be written back; a **modify bit** avoids writing clean pages.

## Standard example
Reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1 with **3 frames**.

### FIFO
Replace the page that has been in memory **longest**. Easy, but may remove a heavily used page.
**Page faults = 15.**

### Optimal (OPT or MIN)
Replace the page that will **not be used for the longest time in the future**. Gives the lowest possible faults but needs future knowledge, so it is only a yardstick.
**Page faults = 9.**

### LRU (Least Recently Used)
Replace the page **not used for the longest time in the past**; uses the past as a guide to the future. Implementation by counters (time-of-use stamps) or a stack of page numbers.
**Page faults = 12.** LRU is a good approximation of OPT and never suffers from Belady's anomaly.

## Approximations of LRU
- **Reference bit:** the hardware sets a bit when a page is used; the OS periodically clears it.
- **Second-chance (clock):** pages are in a circular list. If the reference bit is 0, replace; if 1, clear it and give a second chance, moving on.
- **Enhanced second chance** uses (reference, modify) pairs.
- **LFU/MFU:** replace the least/most frequently used page.

## Belady's anomaly
For FIFO, **adding frames can increase faults**. Reference string 1,2,3,4,1,2,5,1,2,3,4,5:
- 3 frames: **9 faults**.
- 4 frames: **10 faults**.
Algorithms called **stack algorithms** (OPT, LRU) never show this anomaly.

## Simulation in code
```python
from collections import deque
def fifo(refs, n):
    frames, order, faults = set(), deque(), 0
    for r in refs:
        if r not in frames:
            faults += 1
            if len(frames) == n:
                frames.remove(order.popleft())
            frames.add(r); order.append(r)
    return faults
def lru(refs, n):
    frames, faults = [], 0
    for r in refs:
        if r in frames: frames.remove(r)
        else:
            faults += 1
            if len(frames) == n: frames.pop(0)
        frames.append(r)
    return faults
refs = [7,0,1,2,0,3,0,4,2,3,0,3,2,1,2,0,1,7,0,1]
print(fifo(refs, 3), lru(refs, 3))
belady = [1,2,3,4,1,2,5,1,2,3,4,5]
print(fifo(belady, 3), fifo(belady, 4))
```
Output:
```
15 12
9 10
```

## Hit ratio
Hit ratio = hits / references = (references − faults) / references. For OPT here: (20 − 9) / 20 = 55%.

> OPT is the best but impossible; LRU is the best practical idea; FIFO can show Belady's anomaly.
@qa
Q: What is a reference string?
A: The sequence of page numbers a process accesses, used to evaluate page replacement algorithms.
Q: Why is the optimal algorithm not used in practice?
A: It needs to know the future page references, which the OS cannot know. It serves as a benchmark.
Q: What is Belady's anomaly?
A: In some algorithms such as FIFO, increasing the number of frames can increase the number of page faults.
Q: How does the second-chance algorithm work?
A: Pages are checked in circular order. A page with reference bit 0 is replaced; one with bit 1 has its bit cleared and is skipped, getting a second chance.
Q: Which algorithms are free from Belady's anomaly?
A: Stack algorithms such as LRU and Optimal.
@quiz
? For the standard reference string with 3 frames, FIFO gives how many page faults?
- 9
- 12
+ 15
- 20
! FIFO incurs 15 faults, LRU 12 and OPT 9.
? Which algorithm replaces the page that will be used farthest in the future?
- FIFO
- LRU
+ Optimal
- Clock
! OPT looks forward in time.
? Belady's anomaly can occur in
+ FIFO
- LRU
- Optimal
- All of these
! Only non-stack algorithms like FIFO show it.
? For 1,2,3,4,1,2,5,1,2,3,4,5 FIFO with 4 frames gives
- 9 faults
+ 10 faults
- 8 faults
- 12 faults
! More frames did not help: 10 against 9 with three frames.
? The dirty bit tells the OS that a page
- is invalid
- is shared
+ was modified and must be written back before replacing
- is read-only
! Clean pages can simply be discarded.

@visual
bars | Page faults on the reference string 7,0,1,2,0,3,0,4,2,3,0,3,2,1,2,0,1,7,0,1 with 3 frames | FIFO=15;LRU=12;Optimal=9

@problems
## Moderate
P: Reference string: 7,0,1,2,0,3,0,4,2,3,0,3,2,1,2,0,1,7,0,1 with 3 frames. Count the page faults using FIFO.
A: FIFO gives 15 page faults. Frames after each fault are replaced in arrival order: the first three references 7,0,1 fault, then 2 replaces 7, 0 hits, 3 replaces 0, 0 faults again replacing 1, 4 replaces 2, and so on until the total of 15.
R: 1 | Frames start empty so the first three references fault
R: 2 | Total of 15 faults with the replacement order shown
## High
P: For the same reference string and 3 frames, count the page faults with LRU and with Optimal. Why can the Optimal algorithm not be used in practice?
A: LRU: 12 page faults. Optimal: 9 page faults.
Optimal replaces the page that will not be used for the longest time in the future. This needs knowledge of future references, which the OS does not have, so it is used only as a benchmark for other algorithms.
R: 2 | LRU = 12 faults
R: 2 | Optimal = 9 faults
R: 1 | Optimal needs future knowledge
## Advanced
P: Use the string 1,2,3,4,1,2,5,1,2,3,4,5 with FIFO. Count the faults with 3 frames and with 4 frames. What is this phenomenon called and why does it not happen with LRU?
A: With 3 frames FIFO gives 9 page faults; with 4 frames it gives 10 page faults. More frames caused more faults: this is Belady's anomaly.
LRU is a stack algorithm: the set of pages in memory with n frames is always a subset of the set with n+1 frames, so adding frames can never increase faults.
R: 2 | 9 faults and 10 faults
R: 1 | Names Belady's anomaly
R: 2 | Stack property of LRU explained
