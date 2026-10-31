# Searching and sorting
minutes: 25
yt: sorting algorithms compared
@study
**Linear search** O(n); **binary search** O(log n) on a sorted array.
| Sort | Best | Average | Worst | Stable | Notes |
| --- | --- | --- | --- | --- | --- |
| Bubble | O(n) with a flag | O(n^2) | O(n^2) | Yes | simple |
| Selection | O(n^2) | O(n^2) | O(n^2) | No | few swaps |
| Insertion | O(n) | O(n^2) | O(n^2) | Yes | good for small or nearly sorted |
| Merge | O(n log n) | O(n log n) | O(n log n) | Yes | O(n) extra space |
| Quick | O(n log n) | O(n log n) | O(n^2) | No | in place |
| Heap | O(n log n) | O(n log n) | O(n log n) | No | in place |
Bubble sort on [5, 1, 4, 2, 8]: after pass 1 -> [1, 4, 2, 5, 8]; after pass 2 -> [1, 2, 4, 5, 8].
```c
#include <stdio.h>
int bsearch_(int a[], int n, int x) {
    int lo = 0, hi = n - 1;
    while (lo <= hi) { int m = (lo + hi) / 2;
        if (a[m] == x) return m; if (a[m] < x) lo = m + 1; else hi = m - 1; }
    return -1;
}
int main(void) {
    int a[] = {1, 3, 5, 7, 9, 11};
    printf("%d %d\n", bsearch_(a, 6, 7), bsearch_(a, 6, 4));   /* 3 -1 */
    return 0;
}
```
## Hindi saransh
Binary search sirf sorted array par chalta hai (O(log n)). Bubble sort O(n^2).
> Choose merge sort when stability and guaranteed O(n log n) matter.
@qa
Q: Pre-condition for binary search?
A: The array must be sorted.
Q: Worst case of quick sort?
A: O(n^2).
Q: Which of bubble, insertion and selection is stable?
A: Bubble and insertion (the usual selection sort is not).
Q: Number of comparisons for binary search in 1024 elements?
A: At most 11.
@quiz
? Binary search needs a
+ sorted array
- linked list only
- hash table
- tree
! Sorted data.
? Worst case of insertion sort
- O(n)
+ O(n^2)
- O(n log n)
- O(1)
! Reverse-sorted input.
? Bubble sort on [5,1,4,2,8] after pass 1 gives
- [1,2,4,5,8]
+ [1,4,2,5,8]
- [5,1,4,2,8]
- [1,5,4,2,8]
! Largest bubbles to the end.
? Merge sort extra space
- O(1)
- O(log n)
+ O(n)
- O(n^2)
! Temporary array.
@visual
bars | Worst-case comparisons for n = 16 | n=16;n log n=64;n^2=256
@problems
## Moderate
P: Perform two passes of bubble sort on 5 1 4 2 8.
A: Pass 1: 1 4 2 5 8. Pass 2: 1 2 4 5 8.
R: 1 | Pass 1
R: 1 | Pass 2
## High
P: Trace binary search for 7 in 1 3 5 7 9 11.
A: lo = 0, hi = 5, mid = 2 (5 < 7) so lo = 3; mid = 4 (9 > 7) so hi = 3; mid = 3 found at index 3.
R: 2 | Steps
R: 1 | Index 3
## Advanced
P: Compare merge sort and quick sort for large arrays.
A: Merge: guaranteed n log n, stable, O(n) space. Quick: n log n average and in place but n^2 worst case and not stable.
R: 2 | Merge
R: 2 | Quick
