# Paging, page tables and the TLB
minutes: 40
yt: paging in operating system page table TLB effective access time
yt: multilevel paging inverted page table
@study
**Paging** removes external fragmentation by allowing a process's physical memory to be **non-contiguous**.

## Basic method
- Physical memory is divided into fixed-size blocks called **frames**.
- Logical memory is divided into blocks of the same size called **pages**.
- A **page table** per process maps each page number to a frame number.
A logical address has two parts: **page number p** (index into the page table) and **page offset d** (position within the page). If the page size is 2^n, the low n bits are the offset.

### Example
Page size 1 KB (1024 bytes). Logical address 5000.
- Page number = 5000 / 1024 = 4 (integer division), offset = 5000 mod 1024 = 904.
- Suppose the page table maps page 4 to frame 9.
- Physical address = 9 × 1024 + 904 = **10120**.

## Internal fragmentation
The last page of a process is usually partly empty. On average half a page per process is wasted, so smaller pages waste less but need larger page tables.

## Page table size
A 32-bit logical address with 4 KB pages (12-bit offset) has 20 bits for the page number: 2^20 = 1,048,576 entries. At 4 bytes per entry the page table is **4 MB per process**, which is too large to keep contiguous. Solutions:
- **Hierarchical (multilevel) paging:** page the page table; only the needed parts exist. A two-level scheme splits the page number into outer and inner indexes.
- **Hashed page tables** for large address spaces.
- **Inverted page table:** one entry per physical frame (not per page), searched by (process id, page number). Saves memory, but lookup is slower and needs hashing.

## Page table entry contents
Frame number, **valid/invalid bit**, **protection bits** (read, write, execute), **reference bit**, **dirty (modified) bit**.

## Translation Look-aside Buffer (TLB)
A page table in memory means **two memory accesses** per reference (one for the table, one for the data). The **TLB** is a small, fast associative cache of recent page-to-frame translations.
- **TLB hit:** frame number found in the TLB, one memory access.
- **TLB miss:** consult the page table, then update the TLB.

### Effective Access Time (EAT)
With TLB access time 20 ns, memory access 100 ns, and hit ratio 80%:
EAT = 0.8 × (20 + 100) + 0.2 × (20 + 100 + 100) = 96 + 44 = **140 ns**.
With hit ratio 98%: EAT = 0.98 × 120 + 0.02 × 220 = 117.6 + 4.4 = **122 ns**.
The higher the hit ratio, the closer EAT gets to the cost of a single access.

## Shared pages
Read-only code (such as a text editor) can be shared: several page tables point to the same frames, saving memory.

> Page = logical block, frame = physical block. Address = page number + offset.
@qa
Q: What is the difference between a page and a frame?
A: A page is a fixed-size block of logical memory; a frame is a fixed-size block of physical memory of the same size. The page table maps pages to frames.
Q: Why does paging not suffer from external fragmentation?
A: Any free frame can hold any page, so no contiguous space is needed. Only internal fragmentation in the last page remains.
Q: What is the TLB?
A: A small, fast hardware cache holding recent page-to-frame translations, avoiding an extra memory access to the page table.
Q: How many page table entries are needed for a 32-bit address space with 4 KB pages?
A: 2^32 / 2^12 = 2^20 = 1,048,576 entries.
Q: What is an inverted page table?
A: A single table with one entry per physical frame, storing which process and page occupies it. It saves memory but needs hashing to search quickly.
@quiz
? With page size 1 KB, logical address 5000 has page number
- 3
+ 4
- 5
- 9
! 5000 divided by 1024 is 4 (remainder 904).
? The offset part of a logical address
- selects the page table
+ gives the position inside the page
- is added to the TLB
- equals the frame number
! The offset is copied unchanged into the physical address.
? If TLB hit ratio is 98%, TLB time 20 ns, memory 100 ns, the effective access time is
- 100 ns
- 140 ns
+ 122 ns
- 220 ns
! 0.98 x 120 + 0.02 x 220 = 122 ns.
? A major advantage of paging is
- no page tables
+ no external fragmentation
- no internal fragmentation
- no TLB needed
! Frames are interchangeable.
? Multilevel paging mainly reduces
- the TLB size
+ the memory needed for page tables
- disk seek time
- context switches
! Only the parts of the page table in use need to exist.

@visual
formula | Effective access time with a TLB | EAT = h x (t + m) + (1 - h) x (t + 2m) ; h = TLB hit ratio, t = TLB time, m = memory access time

@problems
## Moderate
P: A system has 16-bit logical addresses and a 1 KB page size. (a) How many bits are used for the page number and offset? (b) For logical address 6716 (decimal), find the page number and offset.
A: (a) 1 KB = 2^10, so offset = 10 bits and page number = 16 - 10 = 6 bits (64 pages).
(b) Page number = 6716 / 1024 = 6 (integer division); offset = 6716 - 6 x 1024 = 6716 - 6144 = 572.
R: 2 | 10 offset bits and 6 page bits
R: 2 | Page 6 and offset 572
## High
P: In the same system page 6 is stored in frame 9. Find the physical address for logical address 6716. Explain what a page table entry stores besides the frame number.
A: Physical address = frame x page size + offset = 9 x 1024 + 572 = 9216 + 572 = 9788.
A page table entry also stores a valid/invalid bit, protection bits (read/write/execute), a reference bit and a dirty (modified) bit.
R: 2 | Physical address 9788
R: 2 | Lists at least valid and protection bits plus reference or dirty
## Advanced
P: TLB lookup takes 20 ns, a memory access takes 100 ns, and the TLB hit ratio is 90%. Find the effective access time. What hit ratio is needed to bring it down to 125 ns?
A: EAT = 0.9 x (20 + 100) + 0.1 x (20 + 100 + 100) = 108 + 22 = 130 ns.
For 125 ns: h x 120 + (1 - h) x 220 = 125, so 220 - 100h = 125, giving h = 0.95 (95%).
R: 2 | EAT = 130 ns with correct miss path of two memory accesses
R: 2 | Required hit ratio 95%
