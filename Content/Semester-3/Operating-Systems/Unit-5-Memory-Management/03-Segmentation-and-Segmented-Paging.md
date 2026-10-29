# Segmentation and segmented paging
minutes: 25
yt: segmentation in operating system segment table address translation
yt: paging vs segmentation difference
@study
Programmers think of a program as a set of **segments**: main code, functions, stack, heap, global data. **Segmentation** gives the OS the same view: memory is divided into variable-size logical units.

## Logical address
A logical address is `<segment number s, offset d>`. The **segment table** has one entry per segment with a **base** (starting physical address) and a **limit** (segment length). The hardware checks `d < limit`; if not, it traps. Otherwise physical address = base + d.

### Example
| Segment | Base | Limit |
| --- | --- | --- |
| 0 | 1400 | 1000 |
| 1 | 6300 | 400 |
| 2 | 4300 | 400 |
| 3 | 3200 | 1100 |
| 4 | 4700 | 1000 |
- Address (2, 53): 53 < 400, so physical = 4300 + 53 = **4353**.
- Address (3, 852): 852 < 1100, physical = 3200 + 852 = **4052**.
- Address (0, 1222): 1222 ≥ 1000, so an **addressing error (trap)**.

## Advantages
- Matches the programmer's view; easy to share and protect segments (for example make code read-only).
- No internal fragmentation.
## Disadvantages
- **External fragmentation**, since segments are of different sizes and must be placed contiguously.
- Allocation is harder than with fixed-size pages.

## Paging versus segmentation
| Paging | Segmentation |
| --- | --- |
| Fixed-size pages | Variable-size segments |
| Invisible to the programmer | Visible to the programmer |
| One address space (page + offset) | Two-part address (segment + offset) |
| Internal fragmentation | External fragmentation |
| Hardware/OS decides the size | Programmer or compiler decides |
| Sharing at page level | Sharing at logical unit level |

## Segmented paging
Combine both: the address space is divided into segments, and each segment is **paged**. The segment table entry points to a **page table** for that segment. This keeps logical protection and sharing while removing external fragmentation. Intel x86 used segmentation with paging in 32-bit mode; modern 64-bit systems use mostly flat paging.

> Segmentation = logical units of different sizes; paging = physical units of the same size.
@qa
Q: What does a segment table entry contain?
A: A base address (where the segment starts in physical memory) and a limit (its length).
Q: How is a logical address translated in segmentation?
A: The segment number indexes the segment table; if the offset is less than the limit, the physical address is base plus offset, otherwise a trap occurs.
Q: Which fragmentation occurs in segmentation?
A: External fragmentation, because segments have variable sizes and need contiguous memory.
Q: How does segmented paging help?
A: It pages each segment, so the logical benefits of segments (sharing, protection) are kept while external fragmentation is removed.
Q: Name one difference between paging and segmentation.
A: Pages are fixed in size and invisible to the programmer, while segments vary in size and match logical units of the program.
@quiz
? Segment 2 has base 4300 and limit 400. The address (2, 53) maps to
- 53
- 453
+ 4353
- 4700
! 4300 + 53 = 4353.
? An offset larger than the segment limit causes
- a page fault
- swapping
+ a trap (addressing error)
- compaction
! The hardware rejects out-of-range offsets.
? Segmentation suffers from
- internal fragmentation
+ external fragmentation
- no sharing
- fixed sizes
! Variable-size segments leave holes between them.
? In segmented paging the segment table entry points to
- a physical frame
+ a page table for that segment
- the TLB
- a file
! Each segment has its own page table.
? Which is visible to the programmer?
- Paging
+ Segmentation
- Frames
- TLB
! Segments correspond to logical parts of the program.

@visual
steps | Address translation with segmentation | Logical address is a pair (segment number s, offset d); Use s to find the entry in the segment table: base and limit; If d is not less than limit, trap with an addressing error; Otherwise physical address = base + d

@problems
## Moderate
P: Segment table: segment 0 base 1400 limit 1000; segment 1 base 6300 limit 400; segment 2 base 4300 limit 400; segment 3 base 3200 limit 1100; segment 4 base 4700 limit 1000. Find the physical address for (2, 53) and (3, 852).
A: (2, 53): 53 < 400, so physical = 4300 + 53 = 4353.
(3, 852): 852 < 1100, so physical = 3200 + 852 = 4052.
R: 2 | 4353
R: 2 | 4052
## High
P: For the same table, what happens for the logical address (0, 1222)? Compare paging and segmentation in three points.
A: (0, 1222): the offset 1222 is not less than the limit 1000, so the hardware traps with an addressing error.
Paging: fixed-size pages, invisible to the programmer, causes internal fragmentation, no external fragmentation. Segmentation: variable-size segments that match logical units (code, stack, heap), visible to the programmer, causes external fragmentation, supports sharing and protection per segment.
R: 2 | Trap because offset 1222 is not less than limit 1000
R: 3 | Three valid comparison points
## Advanced
P: What is segmented paging and why is it used? Show how a logical address is divided.
A: Segmented paging divides each segment into fixed-size pages. The logical address is split into segment number, page number within the segment and offset within the page. The segment table points to a page table for that segment, and the page table gives the frame.
It combines the logical view and protection of segmentation with paging, avoiding external fragmentation because segments need not be contiguous in memory.
R: 2 | Correct three-part address (segment, page, offset)
R: 2 | Segment table points to a per-segment page table
R: 1 | Reason: removes external fragmentation while keeping segments
