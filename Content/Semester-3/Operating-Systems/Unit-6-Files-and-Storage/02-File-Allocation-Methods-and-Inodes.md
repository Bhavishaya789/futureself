# File allocation methods, inodes and free-space management
minutes: 35
yt: file allocation methods contiguous linked indexed FAT inode
yt: free space management bit vector linked list
@study
Disks are divided into **blocks** (typically 4 KB). The OS decides which blocks hold each file.

## Contiguous allocation
A file occupies consecutive blocks; the directory stores the **start block and length**.
- Pros: fast sequential and direct access (very few seeks); simple.
- Cons: **external fragmentation**, files cannot easily grow, must know size in advance.

## Linked allocation
Each block contains a **pointer to the next block**; the directory stores the first (and last) block.
- Pros: no external fragmentation; files grow easily.
- Cons: no efficient direct access (to reach block n you follow n pointers); pointers use space; one corrupt pointer loses the rest.
**FAT (File Allocation Table)** keeps all the pointers in a table at the start of the disk, which can be cached in memory, making direct access practical (used in FAT16/FAT32).

## Indexed allocation
Each file has an **index block** listing the addresses of its data blocks.
- Pros: direct access without external fragmentation.
- Cons: the index block is overhead, even for tiny files. For large files use **linked index blocks**, **multilevel index** or **combined** schemes.

## The Unix inode
An **inode** stores a file's metadata (owner, permissions, size, timestamps, link count) and block pointers. A classic inode has **12 direct pointers**, one **single indirect**, one **double indirect** and one **triple indirect** pointer. The file name is not in the inode; it is in the directory entry.

### Maximum file size example
Block size 4 KB, pointer size 4 bytes, so a block holds 1024 pointers.
- Direct: 12 × 4 KB = 48 KB.
- Single indirect: 1024 × 4 KB = 4 MB.
- Double indirect: 1024² × 4 KB = 4 GB.
- Triple indirect: 1024³ × 4 KB = 4 TB.
Total about **4 TB**, mostly from the triple indirect block. Small files use only direct pointers, so access is fast.

## Free-space management
- **Bit vector (bitmap):** one bit per block (1 = free). Simple and quick to find contiguous free blocks; large for big disks.
- **Linked list** of free blocks: no waste, but traversal is slow.
- **Grouping** (first free block stores the addresses of many free blocks) and **counting** (store address plus count of contiguous free blocks).

## Comparison
| Method | Sequential | Direct | External fragmentation |
| --- | --- | --- | --- |
| Contiguous | Excellent | Excellent | Yes |
| Linked | Good | Poor | No |
| Indexed | Good | Good | No |

## Journaling
Modern file systems (ext4, NTFS) write metadata changes to a **journal (log)** first, so after a crash they can replay or discard them and avoid inconsistency (compare WAL in databases).

> Contiguous = fast but rigid; linked = flexible but slow random access; indexed = best of both with an index overhead.
@qa
Q: What are the disadvantages of contiguous allocation?
A: External fragmentation, difficulty growing a file, and the need to know its size when it is created.
Q: Why is linked allocation poor for direct access?
A: To reach the nth block you must follow n pointers through earlier blocks, one disk read each.
Q: What does FAT improve over simple linked allocation?
A: It stores all next-block pointers in a table that can be cached in memory, so following the chain is fast and direct access becomes practical.
Q: What does a Unix inode contain and not contain?
A: It contains metadata (owner, permissions, size, timestamps, link count) and block pointers. It does not contain the file name, which is kept in the directory entry.
Q: How big can a file be with 12 direct pointers and one single indirect pointer at 4 KB blocks and 4-byte pointers?
A: 12 × 4 KB + 1024 × 4 KB = 48 KB + 4096 KB = 4144 KB, about 4.05 MB.
@quiz
? Which allocation method suffers from external fragmentation?
+ Contiguous
- Linked
- Indexed
- FAT
! Files need consecutive free blocks.
? Which scheme stores next-block pointers in a table at the start of the disk?
- Inode
- Contiguous
+ FAT
- Bit vector
! FAT collects all chain pointers in one table.
? In a Unix inode with 4 KB blocks and 4-byte pointers, a single indirect block covers
- 4 KB
- 1 MB
+ 4 MB
- 4 GB
! 1024 pointers x 4 KB = 4 MB.
? The file name is stored in
- the inode
+ the directory entry
- the free-space bitmap
- the superblock only
! The inode holds metadata and pointers, not the name.
? A bit vector with a 1 for each free block is used for
- file allocation
+ free-space management
- scheduling
- paging
! It records which blocks are free.

@visual
compare | File allocation methods | Contiguous=Fast direct access~External fragmentation~File growth is hard; Linked=No external fragmentation~Slow direct access~Pointer overhead and fragile; Indexed=Fast direct access~No external fragmentation~Index block overhead

@problems
## Moderate
P: Give one advantage and one disadvantage of contiguous, linked and indexed allocation.
A: Contiguous: advantage is fast sequential and direct access; disadvantage is external fragmentation and difficulty growing files. Linked: advantage is no external fragmentation and easy growth; disadvantage is slow direct access and a lost pointer breaks the file. Indexed: advantage is direct access without external fragmentation; disadvantage is the extra space and access for the index block.
R: 1 | Contiguous: advantage and disadvantage
R: 1 | Linked: advantage and disadvantage
R: 1 | Indexed: advantage and disadvantage
## High
P: A Unix inode has 12 direct pointers, one single, one double and one triple indirect pointer. Block size is 4 KB and a pointer is 4 bytes. Find the maximum file size.
A: Pointers per block = 4096 / 4 = 1024. Direct: 12 x 4 KB = 48 KB. Single: 1024 x 4 KB = 4 MB. Double: 1024^2 x 4 KB = 4 GB. Triple: 1024^3 x 4 KB = 4 TB. Total is about 4 TB + 4 GB + 4 MB + 48 KB, i.e. just over 4 TB.
R: 2 | 1024 pointers per block
R: 2 | Direct, single, double and triple sizes
R: 1 | Total about 4 TB
## Advanced
P: With the same inode, in which part of the inode does data block number 5000 (counting from 0) lie, and how many block reads are needed to get it if the inode is already in memory?
A: Blocks 0 to 11 are direct. The single indirect covers blocks 12 to 1035 (1024 blocks). The double indirect starts at block 1036. Since 5000 is greater than 1035, it lies in the double indirect region.
Offset = 5000 - 1036 = 3964. First-level index = 3964 / 1024 = 3, second-level index = 3964 mod 1024 = 892.
Block reads: double-indirect block, then the second-level index block, then the data block = 3 reads.
R: 2 | Identifies the double indirect region with ranges
R: 2 | Indexes 3 and 892
R: 1 | 3 block reads
