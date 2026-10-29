# B-trees and B+ trees
minutes: 35
yt: B+ tree insertion deletion DBMS indexing
yt: difference between B tree and B+ tree
@study
Disk-based search structures must be **shallow**, so that each search needs very few block reads. A **B-tree** or **B+ tree** has nodes as large as one disk block with many keys per node (a high **fan-out**), so even billions of rows need only 3 to 4 levels.

## Properties of a B+ tree of order p (max p pointers per node)
- It is **balanced**: all leaves are at the same depth.
- Internal nodes hold up to p−1 keys and p child pointers, and at least ceil(p/2) children (except the root).
- **Only leaves store the actual data pointers.** Internal nodes hold **separator keys** that guide search.
- Leaves are **linked in sorted order**, so range queries scan the leaf chain.
- All keys appear in the leaves; some are repeated in internal nodes.

## B-tree differences
In a **B-tree**, keys and record pointers appear in internal nodes too, and each key occurs once. A **B+ tree** has higher fan-out (internal nodes store no data pointers), a uniform search cost to a leaf, and efficient range scans, which is why databases use B+ trees for indexes.

| Feature | B-tree | B+ tree |
| --- | --- | --- |
| Data pointers | In all nodes | Only in leaves |
| Key repetition | Each key once | Keys may repeat in internal nodes |
| Range scan | Needs tree traversal | Linked leaves, fast |
| Fan-out | Lower | Higher |
| Search time | Can end early in internal node | Always reaches a leaf |

## Search
Start at the root; at each node follow the pointer for the range containing the key; stop at a leaf. Cost = height of the tree.

## Insertion and splitting (order 3: at most 2 keys per node)
Insert keys 10, 20, 30, 40, 50 in order.
1. Insert 10, 20: leaf `[10 20]`.
2. Insert 30: leaf overflows `[10 20 30]`. Split into `[10]` and `[20 30]`, **copy up** 20. Root `[20]`.
3. Insert 40: goes to leaf `[20 30]` giving `[20 30 40]`, split into `[20]` and `[30 40]`, copy up 30. Root `[20 30]`.
4. Insert 50: leaf `[30 40]` becomes `[30 40 50]`, split into `[30]` and `[40 50]`, copy up 40. Root would be `[20 30 40]` and overflows, so the **internal node splits**, and the middle key 30 **moves up**: new root `[30]`, children `[20]` and `[40]`, whose leaves are `[10] [20]` and `[30] [40 50]`.
Height grew by one: the tree grows at the **root**, so it always stays balanced. (Exact split points vary slightly between textbooks.)

## Deletion
Remove the key from its leaf. If the leaf has too few keys, **borrow** from a sibling or **merge** with a sibling, and fix the parent separator; merges may propagate upward and shrink the tree.

## Height estimate
With fan-out f and n keys, height is about log_f(n). For f = 100 and n = 1,000,000 that is 3 levels.

> B+ tree: all data in leaves, leaves linked, always balanced.
@qa
Q: Why do databases prefer B+ trees to binary trees?
A: A B+ tree node fills a disk block with many keys, so the tree is very shallow (few I/Os per search), while a binary tree is deep and would need many block reads.
Q: Where are record pointers stored in a B+ tree?
A: Only in the leaf nodes. Internal nodes hold separator keys.
Q: How does a B+ tree support range queries efficiently?
A: Its leaves are linked in key order, so after finding the first key you simply follow the leaf chain.
Q: What happens when a leaf overflows during insertion?
A: The leaf splits into two, and a separator key is copied up to the parent. If the parent overflows it splits too, possibly growing a new root.
Q: Give one difference between a B-tree and a B+ tree.
A: A B-tree stores data pointers in internal nodes as well and each key appears once; a B+ tree stores them only in leaves and links the leaves.
@quiz
? All leaves of a B+ tree are
- at different depths
+ at the same depth
- unlinked
- empty
! B+ trees are balanced.
? In a B+ tree, actual data pointers are stored in
- internal nodes only
- the root only
+ leaf nodes
- every node
! Internal nodes act as an index to the leaves.
? A B+ tree grows in height by
- adding a new leaf level at the bottom
+ splitting the root and creating a new root
- merging leaves
- rotating nodes
! Height increases only when the root splits.
? With fan-out 100, one million keys need about how many levels?
- 1
- 2
+ 3
- 20
! log base 100 of 1,000,000 is 3.
? Range queries are fast in a B+ tree because
- keys are hashed
+ the leaf nodes are linked in order
- there is only one node
- data is unsorted
! The linked leaf list lets you scan consecutive keys.

@visual
tree | A small B+ tree (leaves hold the keys and are linked in order) | 10 20(1 5 8, 10 12 15, 20 25 30)

@problems
## Moderate
P: List three differences between a B tree and a B+ tree.
A: 1) In a B+ tree all data pointers are in the leaf nodes; in a B tree internal nodes also hold data. 2) B+ tree leaves are linked, so range scans are fast. 3) B+ tree internal nodes hold only keys, so they have a higher fan-out and the tree is shorter. All searches in a B+ tree reach a leaf at the same depth.
R: 2 | Data only in B+ leaves
R: 2 | Linked leaves and higher fan-out
## High
P: In a B+ tree where a node holds at most 3 keys, insert 1, 2, 3, 4, 5, 6 in order. Show the tree after the 4th and the 6th insertion.
A: After 1, 2, 3: one leaf [1,2,3]. Insert 4: the leaf overflows, split into [1,2] and [3,4] and 3 is copied up: root [3] with leaves [1,2] and [3,4]. Insert 5: leaf [3,4,5]. Insert 6: [3,4,5,6] overflows, split into [3,4] and [5,6] and 5 is copied up: root [3,5] with leaves [1,2], [3,4], [5,6].
R: 2 | Tree after the 4th insertion
R: 3 | Tree after the 6th insertion
## Advanced
P: A disk block is 4096 bytes, a key is 8 bytes and a pointer is 8 bytes. Find the order (maximum pointers) of an internal node, and the maximum number of keys a B+ tree with 3 levels (root, one internal level, leaves) can index. Assume a leaf holds up to n - 1 keys.
A: For n pointers and n - 1 keys: 8n + 8(n - 1) <= 4096, so 16n <= 4104 and n = 256.
Root has up to 256 children, each of those has up to 256 leaves, so 256 x 256 = 65,536 leaves. Each leaf holds up to 255 keys: 65,536 x 255 = 16,711,680 keys.
R: 2 | n = 256
R: 2 | 65,536 leaves
R: 1 | 16,711,680 keys
