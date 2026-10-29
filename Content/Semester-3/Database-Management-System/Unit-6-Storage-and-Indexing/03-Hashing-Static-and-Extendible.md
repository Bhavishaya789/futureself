# Hashing: static, extendible and linear
minutes: 25
yt: hashing in DBMS static dynamic extendible hashing
yt: linear hashing explained
@study
**Hashing** maps a search key to a **bucket** (a disk block or chain of blocks) using a **hash function** `h(K)`. For equality search it needs about one block access, regardless of table size.

## Static hashing
The number of buckets B is fixed. A common function is `h(K) = K mod B`. With B = 5 and keys 12, 25, 37, 18, 40:
- 12 mod 5 = 2, 25 mod 5 = 0, 37 mod 5 = 2, 18 mod 5 = 3, 40 mod 5 = 0.
Bucket 0: 25, 40; bucket 2: 12, 37; bucket 3: 18.

**Collisions** (different keys to the same bucket) are handled by **overflow chaining** (a linked list of overflow blocks) or **open addressing** (probing the next free slot).

Drawbacks: if the file grows a lot, long overflow chains slow everything; if it shrinks, space is wasted. Changing B means rehashing everything. Static hashing also does **not** support range queries or sorted access.

## Dynamic hashing
Dynamic schemes grow and shrink gracefully.

### Extendible hashing
- A **directory** of 2^d pointers, where **d** is the **global depth**: the number of leading (or trailing) bits of the hash value used.
- Each bucket has a **local depth d'** ≤ d, showing how many bits it actually distinguishes. Several directory entries may point to the same bucket.
- **Insert into a full bucket:**
  - If local depth < global depth: **split the bucket**, increase its local depth, and redistribute using one more bit.
  - If local depth = global depth: **double the directory** (d increases by 1), then split.
- Lookups cost at most two accesses (directory is usually in memory, then one bucket). No overflow chains and no rehashing of the whole file.

### Linear hashing
Grows **one bucket at a time** in a fixed order without a directory. A pointer shows the next bucket to split; the hash function changes from `h_i` to `h_{i+1}` for already split buckets. Overflow chains are used briefly, but there is no directory to double.

## Hashing versus B+ tree
| Need | Better choice |
| --- | --- |
| Equality lookups | Hash (about one access) |
| Range queries, ordering | B+ tree |
| Prefix searches | B+ tree |
| Unknown growth | B+ tree or dynamic hashing |

Most relational systems use B+ trees as the default index and offer hash indexes for special cases.

> Static hashing: fixed buckets. Extendible hashing: directory plus local and global depth.
@qa
Q: What is a hash collision and how is it handled?
A: Two different keys hash to the same bucket. It is handled by overflow chaining or by open addressing such as linear probing.
Q: What is the weakness of static hashing?
A: The number of buckets is fixed, so growth causes long overflow chains and shrinkage wastes space. Changing the number of buckets requires rehashing everything.
Q: In extendible hashing, what happens when a full bucket has local depth equal to the global depth?
A: The directory is doubled (global depth increases by one) and the bucket is split using the extra bit.
Q: Why are hash indexes poor for range queries?
A: The hash function scatters neighbouring keys across unrelated buckets, so there is no order to scan.
Q: Where does linear hashing differ from extendible hashing?
A: Linear hashing splits buckets in a fixed round-robin order and has no directory, while extendible hashing splits the overflowing bucket and uses a directory that may double.
@quiz
? With h(K) = K mod 5, key 37 goes to bucket
- 0
- 1
+ 2
- 3
! 37 = 7 x 5 + 2.
? Handling collisions by a linked list of extra blocks is called
+ overflow chaining
- open addressing
- extendible hashing
- clustering
! Chaining attaches overflow blocks to the bucket.
? Extendible hashing uses a
- B+ tree
+ directory of bucket pointers
- stack
- sorted file
! The directory is indexed by the first d bits of the hash.
? Hashing is best for
- range queries
- sorting
+ equality searches
- prefix matching
! Equality search needs about one access.
? In extendible hashing the directory size is
- d
+ 2 to the power d
- d squared
- fixed
! A global depth d gives 2^d directory entries.

@visual
formula | A hash function sends a key straight to a bucket | bucket = key mod 7 ; 50 goes to 1, 700 to 0, 76 to 6, 85 to 1, 92 to 1 ; keys 50, 85 and 92 collide in bucket 1

@problems
## Moderate
P: Use h(k) = k mod 7 with chaining. Insert 50, 700, 76, 85, 92, 73, 101 and show each bucket.
A: 50 mod 7 = 1; 700 mod 7 = 0; 76 mod 7 = 6; 85 mod 7 = 1; 92 mod 7 = 1; 73 mod 7 = 3; 101 mod 7 = 3.
Bucket 0: 700. Bucket 1: 50, 85, 92. Bucket 3: 73, 101. Bucket 6: 76. Buckets 2, 4 and 5 are empty.
R: 2 | Correct hash values
R: 2 | Correct bucket contents
## High
P: Table size 5, h(k) = k mod 5 and linear probing. Insert 12, 22, 7, 17 and show the slots. Compare chaining with open addressing.
A: 12 goes to slot 2. 22 hashes to 2 (taken), so slot 3. 7 hashes to 2, then 3 (taken), so slot 4. 17 hashes to 2, 3, 4 (taken), so slot 0. Slots: 0: 17, 2: 12, 3: 22, 4: 7.
Chaining keeps colliding keys in a linked list outside the table and never fills up. Open addressing stores everything in the table, which gets crowded and can cluster.
R: 2 | Correct slots
R: 2 | Chaining explained
R: 1 | Open addressing explained
## Advanced
P: Explain extendible hashing: global depth, local depth and what happens when a full bucket overflows in the two cases.
A: A directory of 2^d pointers (d is the global depth) is indexed by the first (or last) d bits of the hash value. Each bucket has a local depth equal to the number of bits it really uses.
If the overflowing bucket has local depth less than global depth, only that bucket splits and its directory entries are redistributed. If local depth equals global depth, the directory doubles (global depth + 1) and then the bucket splits. Only the full bucket is split, so no full-table rehash is needed.
R: 2 | Directory, global and local depth
R: 2 | Split without doubling
R: 1 | Doubling when local equals global
