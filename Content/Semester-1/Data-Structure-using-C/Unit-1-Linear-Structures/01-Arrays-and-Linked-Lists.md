# Arrays and linked lists in C
minutes: 25
yt: linked list in C explained
@study
An **array** stores elements of the same type in contiguous memory. Access by index is O(1); insertion or deletion in the middle is O(n) because elements must shift. A **linked list** stores each element in a node holding data and a pointer to the next node. Insertion at the head is O(1); access by position is O(n).

| Operation | Array | Singly linked list |
| --- | --- | --- |
| Access i-th | O(1) | O(n) |
| Insert at head | O(n) | O(1) |
| Insert at end | O(1) amortised (if space) | O(n), or O(1) with a tail pointer |
| Memory | fixed, contiguous | extra pointer per node |

```c
#include <stdio.h>
#include <stdlib.h>
struct Node { int data; struct Node *next; };
struct Node *push(struct Node *head, int x) {
    struct Node *n = malloc(sizeof *n); n->data = x; n->next = head; return n;
}
struct Node *reverse(struct Node *h) {
    struct Node *prev = NULL;
    while (h) { struct Node *nx = h->next; h->next = prev; prev = h; h = nx; }
    return prev;
}
int main(void) {
    struct Node *h = NULL;
    for (int i = 1; i <= 4; i++) h = push(h, i);      /* 4 3 2 1 */
    h = reverse(h);                                    /* 1 2 3 4 */
    for (struct Node *p = h; p; p = p->next) printf("%d ", p->data);
    printf("\n"); return 0;
}
```
Output: `1 2 3 4`. Always check that malloc did not return NULL and free() every node when done to avoid memory leaks.
## Hindi saransh
Array contiguous memory mein hota hai (index access O(1)). Linked list mein har node agle node ka pointer rakhta hai (head par insert O(1)).
> Reversing a list needs three pointers: prev, current, next.
@qa
Q: Why is insertion in the middle of an array O(n)?
A: Elements after the position must be shifted by one place.
Q: What is a dangling pointer?
A: A pointer to memory that has been freed.
Q: Time to insert at the head of a singly linked list?
A: O(1).
Q: Disadvantage of linked lists compared with arrays?
A: No random access and extra memory for pointers.
@quiz
? Accessing the i-th element of an array takes
- O(n)
+ O(1)
- O(log n)
- O(n^2)
! Direct index arithmetic.
? Inserting at the head of a singly linked list takes
+ O(1)
- O(n)
- O(log n)
- O(n log n)
! Only pointers change.
? malloc returns
- the size
+ a pointer to allocated memory or NULL
- an int
- nothing
! Always check for NULL.
? Failing to free allocated memory causes
- a syntax error
+ a memory leak
- a stack overflow
- faster code
! Leak.
@visual
flow | Linked list | head > Node 1 > Node 2 > Node 3 > NULL
compare | Array versus linked list | Array=Contiguous~O(1) index~Costly insert; Linked list=Pointers~O(n) index~Cheap head insert
@problems
## Moderate
P: Write the steps to insert a node at the beginning of a singly linked list.
A: Allocate a node, set its data, set node->next = head, set head = node.
R: 2 | Allocate and set next
R: 1 | Update head
## High
P: Compare an array and a linked list for 4 operations.
A: Index access (array O(1), list O(n)); insert at head (array O(n), list O(1)); memory (array contiguous, list pointers); resize (array fixed, list dynamic).
R: 2 | Two comparisons
R: 2 | Four comparisons
## Advanced
P: Trace the reversal of the list 1 -> 2 -> 3 using prev, current and next.
A: Start prev = NULL, cur = 1. Step 1: 1 -> NULL. Step 2: 2 -> 1. Step 3: 3 -> 2. Finally head = 3, giving 3 -> 2 -> 1.
R: 2 | Steps
R: 2 | Result
