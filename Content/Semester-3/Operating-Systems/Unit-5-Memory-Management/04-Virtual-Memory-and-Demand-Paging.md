# Virtual memory and demand paging
minutes: 35
yt: virtual memory demand paging page fault handling steps
yt: copy on write virtual memory
@study
**Virtual memory** lets a program run even if it is larger than physical memory. Only the parts needed are kept in memory; the rest stay on disk. It separates the programmer's large logical address space from the limited physical memory.

## Benefits
Programs can be larger than RAM, more programs fit at once (higher multiprogramming), less I/O is needed to load a program, and processes can share pages easily.

## Demand paging
A page is loaded **only when it is needed** (lazy swapper). The page table has a **valid/invalid bit**: valid means the page is in memory; invalid means it is not (or the address is illegal).

### Page-fault handling steps
1. The CPU references a page marked invalid, causing a **trap**.
2. The OS checks an internal table: if the reference is illegal, terminate the process; if just not in memory, continue.
3. Find a **free frame** (or choose a victim using page replacement).
4. Schedule a **disk read** of the page into the frame.
5. When the read completes, update the page table (frame number, valid bit = 1).
6. **Restart the instruction** that caused the fault.
**Pure demand paging** starts a process with no pages in memory.

## Performance of demand paging
Let p be the **page-fault rate** (0 ≤ p ≤ 1).
EAT = (1 − p) × memory access time + p × page-fault service time.
With memory access 200 ns and page-fault service time 8 ms (8,000,000 ns), and p = 1/1000:
EAT = 0.999 × 200 + 0.001 × 8,000,000 = 199.8 + 8000 = **8199.8 ns ≈ 8.2 µs**, about **41 times slower** than a memory access. To keep slowdown below 10%, p must be below about 1 in 399,990. So page-fault rates must be extremely low.

## Copy-on-write (COW)
After `fork()`, parent and child **share** the same pages marked read-only. Only when one writes is the page **copied**. This makes process creation fast and saves memory.

## Memory-mapped files
A file is mapped to virtual addresses (`mmap`), so file I/O becomes ordinary memory access handled by paging.

## Frame allocation
- **Equal** and **proportional** allocation (proportional to process size).
- **Global replacement:** a process can take frames from others (better throughput, less predictable).
- **Local replacement:** a process replaces only its own frames.

## Locality of reference
Programs tend to use the same pages and nearby pages repeatedly (**temporal and spatial locality**). Demand paging works well only because of locality.

> A page fault is not an error: it is a request for the OS to bring a page in.
@qa
Q: What is demand paging?
A: A scheme in which pages are loaded into memory only when they are referenced, instead of loading the whole program in advance.
Q: List the steps in handling a page fault.
A: Trap to the OS, verify the reference is legal, find a free frame, read the page from disk into the frame, update the page table, and restart the instruction.
Q: What does the valid/invalid bit show?
A: Valid means the page is legal and currently in memory; invalid means it is either outside the address space or not currently in memory.
Q: How does copy-on-write speed up fork()?
A: The child shares the parent's pages read-only, and a page is copied only if either process writes to it, avoiding copying unused pages.
Q: Why must the page-fault rate be very low?
A: Servicing a fault takes milliseconds while a memory access takes nanoseconds, so even a small fault rate greatly increases the effective access time.
@quiz
? Pure demand paging begins with
- all pages in memory
+ no pages in memory
- half the pages
- only the stack
! Pages are brought in only on demand.
? After a page fault is serviced, the instruction is
+ restarted
- skipped
- deleted
- swapped
! The faulting instruction must be re-executed.
? With memory time 200 ns, fault service 8 ms and p = 1/1000, the EAT is approximately
- 200 ns
- 800 ns
+ 8.2 microseconds
- 8 ms
! 0.999 x 200 + 0.001 x 8,000,000 = 8199.8 ns.
? Copy-on-write copies a page when
- fork is called
+ a process writes to the shared page
- the page is read
- the page is swapped
! Sharing continues until a write happens.
? Virtual memory works well because of
- paging hardware only
- fragmentation
+ locality of reference
- spooling
! Programs reuse a small set of pages at any time.

@visual
flow | Handling a page fault | Process refers to a page that is not in memory > Page table entry is marked invalid and the CPU traps to the OS > OS finds a free frame and reads the page from disk > Page table updated and the instruction restarts

@problems
## Moderate
P: What is demand paging? What is a page fault and when does it occur?
A: Demand paging loads a page into memory only when it is first needed, instead of loading the whole program at start. A page fault is the trap that occurs when a process accesses a page that is marked invalid in the page table because it is not currently in memory. The OS then loads it from disk.
R: 2 | Demand paging explained as loading on demand
R: 2 | Page fault defined with the invalid page table entry
## High
P: Memory access time is 200 ns and a page fault takes 8 ms to service. If the page fault rate p is 1 in 1000 accesses, find the effective access time.
A: EAT = (1 - p) x 200 + p x 8,000,000 ns = 0.999 x 200 + 0.001 x 8,000,000 = 199.8 + 8000 = 8199.8 ns, about 8.2 microseconds. The page fault time dominates, so the computer runs about 41 times slower than the 200 ns memory.
R: 3 | EAT about 8199.8 ns with correct units
R: 1 | Notes that page fault service dominates
## Advanced
P: For the same system, what page fault rate keeps the slowdown below 10% (EAT below 220 ns)? List the steps the OS takes to handle a page fault.
A: 200 + p x (8,000,000 - 200) < 220 gives p < 20 / 7,999,800 = about 2.5 x 10^-6, i.e. less than one fault in about 400,000 accesses.
Steps: trap to the OS; check that the reference is valid; find a free frame (or run page replacement); schedule a disk read for the page; update the page table; restart the interrupted instruction.
R: 2 | p below about 2.5 x 10^-6
R: 2 | Correct page fault steps in order
R: 1 | Mentions page replacement if no frame is free
