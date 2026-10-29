# File organisation and types of indexes
minutes: 30
yt: file organization heap sequential hash indexing DBMS
yt: primary clustering secondary index dense sparse
@study
## How data sits on disk
A table is stored as **records** in **files** made of fixed-size **blocks (pages)**, typically 4 to 16 KB. The cost of a query is mostly the number of **block accesses**, since disk and SSD reads are far slower than memory.

## File organisation
- **Heap (unordered) file:** records are appended wherever there is space. Insertion is fast. Searching is a full scan: O(b) blocks for b blocks.
- **Sequential (ordered) file:** records are sorted on a key. Binary search takes about log2(b) block accesses and range queries are efficient; insertion is costly as order must be kept (overflow area used).
- **Hash file:** the key is hashed to a bucket (block). Equality search needs about one access. Range queries are poor.
- **Clustered file:** records of related tables are stored together to speed up joins.

## Why an index
An **index** is an auxiliary file with entries `(search key, pointer to record)`. It is smaller than the data file, so searching it is faster.

## Types of ordered indexes
- **Primary index:** on the **ordering key** (unique) of a sorted file. It is usually **sparse**: one entry per block holding the first key.
- **Clustering index:** on a **non-key** ordering field. One entry per distinct value.
- **Secondary index:** on a non-ordering field (key or non-key). Must be **dense** (one entry per record, or per value with a pointer bucket).
- **Dense index:** an entry for every search-key value. **Sparse index:** entries for only some values; find the largest entry not above the target, then scan.
- **Multilevel index:** an index on the index until the top fits in one block. A **B+ tree** is the dynamic, balanced form of this idea.

A file can have at most one primary/clustering index (it follows the physical order) but many secondary indexes.

## Cost calculation (example)
A sorted file has 100,000 records of 100 bytes in 4,096-byte blocks, so 40 records per block gives 2,500 blocks.
- Without index, binary search: ceil(log2 2500) = 12 block accesses.
- A sparse primary index has 2,500 entries. If an entry is 10 bytes, 409 entries fit a block, so the index has ceil(2500/409) = 7 blocks. Binary search on it takes ceil(log2 7) = 3 accesses, plus 1 data block: **4 accesses**.

## Choosing indexes
Index columns used in WHERE, JOIN and ORDER BY. Too many indexes slow inserts, updates and deletes and use space.

> Sparse indexes need the file to be sorted on the key; dense indexes do not.
@qa
Q: What is the difference between a dense and a sparse index?
A: A dense index has an entry for every search-key value. A sparse index has entries for only some values (usually one per block), and the rest are found by a short scan.
Q: Why can a table have only one primary (clustering) index?
A: Because it is based on the physical sort order of the data file, and a file can be sorted in only one way.
Q: What is a secondary index?
A: An index on a field that does not determine the physical order of the file. It must have an entry for every record or value.
Q: Which file organisation gives the fastest equality search?
A: A hash file, with about one block access, but it does not support range queries well.
Q: Why does the cost of a query depend on block accesses?
A: Because reading a disk block is thousands of times slower than processing data in memory, so the number of I/Os dominates.
@quiz
? A sparse index has
- an entry for every record
+ an entry for only some search keys, usually one per block
- no entries
- only NULL entries
! It stores one entry per block and relies on sorted data.
? A secondary index must be
- sparse
+ dense
- clustered
- unique only
! The file is not ordered on that field, so each value needs an entry.
? Which file organisation makes range queries on the key efficient?
- Heap
+ Sequential (sorted)
- Hash
- Random
! Sorted records place a range of keys in adjacent blocks.
? A file has 2,500 blocks. Binary search on its sorted key needs about
- 2,500 accesses
- 250 accesses
+ 12 accesses
- 1 access
! ceil(log2 2500) = 12.
? A multilevel index is built by
- hashing
+ creating an index on the index
- sorting the index twice
- copying the table
! Each level indexes the previous one, until the top level fits a block.

@visual
compare | Dense and sparse index | Dense index=One entry for every record~Faster exact lookup~Needs more space; Sparse index=One entry for every block~Needs a sorted file~Smaller and cheaper to keep

@problems
## Moderate
P: Differentiate between a dense index and a sparse index. Which needs a sorted data file?
A: A dense index has an index entry for every search-key value (every record). A sparse index has entries only for some values, usually one per data block. A sparse index needs the data file to be sorted on the search key so it can scan forward from the entry found.
R: 2 | Dense and sparse defined
R: 2 | Sparse needs a sorted file
## High
P: A file has 30,000 records, 10 records per block and an index block holds 100 entries. Find the number of data blocks and index blocks for a dense and a sparse index.
A: Data blocks = 30,000 / 10 = 3,000. Dense index: 30,000 entries / 100 = 300 index blocks. Sparse index: one entry per data block = 3,000 entries / 100 = 30 index blocks.
R: 2 | 3,000 data blocks
R: 2 | 300 and 30 index blocks
## Advanced
P: For the same file use binary search on the dense index and on the sparse index to find a record. How many block accesses are needed? What if a second-level index is built on the sparse index?
A: Dense: ceil(log2 300) = 9 index accesses, plus 1 data block = 10. Sparse: ceil(log2 30) = 5, plus 1 data block = 6.
Second level: the 30 index blocks need 30 entries, which fits in 1 block. A lookup needs 1 (top-level) + 1 (first-level) + 1 (data) = 3 block accesses.
R: 2 | Dense 10 accesses
R: 2 | Sparse 6 accesses
R: 1 | Multilevel needs 3 accesses
