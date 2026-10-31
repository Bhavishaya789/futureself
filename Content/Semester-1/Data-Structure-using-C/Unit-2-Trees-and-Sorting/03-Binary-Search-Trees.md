# Binary search trees and traversals
minutes: 25
yt: binary search tree traversal
@study
A **binary tree** has at most two children per node. A **binary search tree (BST)** keeps the left subtree smaller and the right subtree larger than the node, so search, insert and delete take O(h) where h is the height: O(log n) for balanced trees, O(n) in the worst case (sorted input). Self-balancing trees (AVL, red-black) keep h = O(log n).
## Traversals
- **Inorder** (left, root, right): visits a BST in sorted order.
- **Preorder** (root, left, right): used to copy a tree.
- **Postorder** (left, right, root): used to delete a tree.
- **Level order:** by levels using a queue.
Insert 50, 30, 70, 20, 40, 60, 80 into an empty BST:
- inorder: **20 30 40 50 60 70 80**
- preorder: **50 30 20 40 70 60 80**
- postorder: **20 40 30 60 80 70 50**
- height: 3 levels.
```c
#include <stdio.h>
#include <stdlib.h>
typedef struct N { int k; struct N *l, *r; } N;
N *ins(N *t, int k) {
    if (!t) { t = calloc(1, sizeof *t); t->k = k; return t; }
    if (k < t->k) t->l = ins(t->l, k); else t->r = ins(t->r, k);
    return t;
}
void in(N *t)  { if (t) { in(t->l);  printf("%d ", t->k); in(t->r); } }
void pre(N *t) { if (t) { printf("%d ", t->k); pre(t->l); pre(t->r); } }
void post(N *t){ if (t) { post(t->l); post(t->r); printf("%d ", t->k); } }
int main(void) {
    int a[] = {50, 30, 70, 20, 40, 60, 80}; N *r = NULL;
    for (int i = 0; i < 7; i++) r = ins(r, a[i]);
    in(r); printf("\n"); pre(r); printf("\n"); post(r); printf("\n"); return 0;
}
```
## Hindi saransh
BST mein left chhota, right bada. Inorder traversal sorted output deta hai.
> Inserting sorted data into a plain BST makes a linked list (O(n) operations).
@qa
Q: Which traversal gives sorted order in a BST?
A: Inorder.
Q: Worst-case height of a BST with n nodes?
A: n (a skewed tree).
Q: Preorder of the example tree?
A: 50 30 20 40 70 60 80.
Q: Why use AVL trees?
A: They stay balanced, guaranteeing O(log n) operations.
@quiz
? Inorder traversal of a BST gives
- random order
+ sorted order
- reverse order
- level order
! Left, root, right.
? Postorder of the example is
- 50 30 20 40 70 60 80
+ 20 40 30 60 80 70 50
- 20 30 40 50 60 70 80
- 50 70 80 60 30 40 20
! Left, right, root.
? Searching in a skewed BST takes
- O(1)
- O(log n)
+ O(n)
- O(n log n)
! Height n.
? Level order traversal uses
- a stack
+ a queue
- recursion only
- a heap
! BFS.
@visual
tree | BST built from 50 30 70 20 40 60 80 | 50(30(20)(40))(70(60)(80))
@problems
## Moderate
P: List the inorder traversal of the BST built from 50, 30, 70, 20, 40, 60, 80.
A: 20 30 40 50 60 70 80.
R: 1 | Order
R: 1 | Sequence
## High
P: Write the preorder and postorder traversals of the same tree.
A: Preorder 50 30 20 40 70 60 80; postorder 20 40 30 60 80 70 50.
R: 2 | Preorder
R: 2 | Postorder
## Advanced
P: Insert 10, 20, 30, 40 into an empty BST. State the height and the problem it shows.
A: Each node becomes the right child of the previous, giving height 4 (a skewed tree) and O(n) operations; balancing (AVL) fixes this.
R: 2 | Height 4
R: 2 | Skewed problem and fix
