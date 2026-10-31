# Divide and conquer: merge sort and quick sort
minutes: 25
yt: merge sort and quick sort explained
yt: divide and conquer algorithm design technique
@study
**Divide and conquer** solves a problem in three steps: **divide** it into smaller subproblems, **conquer** them recursively, then **combine** the answers.

## Merge sort
Split the array in half, sort each half, merge the two sorted halves in linear time.
- T(n) = 2T(n/2) + Theta(n) = **Theta(n log n)** in every case.
- Needs O(n) extra space and is **stable**.

```python
def merge_sort(a):
    if len(a) <= 1: return a
    m = len(a) // 2
    l, r = merge_sort(a[:m]), merge_sort(a[m:])
    out = []; i = j = 0
    while i < len(l) and j < len(r):
        if l[i] <= r[j]: out.append(l[i]); i += 1
        else: out.append(r[j]); j += 1
    return out + l[i:] + r[j:]
print(merge_sort([38, 27, 43, 3, 9, 82, 10]))   # [3, 9, 10, 27, 38, 43, 82]
```

## Quick sort
Choose a **pivot**, **partition** so smaller elements are on its left and larger on its right, then sort both sides recursively.
- Best/average case: **Theta(n log n)**. Worst case (already sorted array with a bad pivot): **Theta(n^2)**, since T(n) = T(n-1) + n.
- In place (O(log n) stack), not stable. A random pivot makes the worst case very unlikely.

## Binary search
On a sorted array compare with the middle and discard half: T(n) = T(n/2) + 1 = **Theta(log n)**.

## Other examples
- **Strassen's matrix multiplication:** 7 multiplications instead of 8, T(n) = 7T(n/2) + n^2 = Theta(n^2.81).
- **Finding max and min** with about 3n/2 - 2 comparisons.

## Merge sort versus quick sort
| Feature | Merge sort | Quick sort |
| --- | --- | --- |
| Worst case | n log n | n^2 |
| Extra space | O(n) | O(log n) |
| Stable | Yes | No |
| Practice | Linked lists, external sorting | Arrays, fastest on average |

## Hindi saransh
Divide and conquer: todo, hal karo, jodo. Merge sort hamesha n log n deta hai par extra space leta hai. Quick sort average n log n hai par worst case n^2 hai. Binary search log n hai.

> Merge sort splits easily and merges hard; quick sort splits hard (partition) and combines for free.
@qa
Q: What are the three steps of divide and conquer?
A: Divide the problem into subproblems, conquer them recursively, and combine their solutions.
Q: Why is the worst case of quick sort O(n^2)?
A: If the pivot is always the smallest or largest element, one side is empty and the other has n-1 items, giving T(n) = T(n-1) + n = Theta(n^2).
Q: Is merge sort stable? Why does it need extra space?
A: Yes, equal items keep their order when merging takes from the left half first on ties. It needs a temporary array of size n to hold merged output.
Q: What is the complexity of binary search and what must be true of the input?
A: Theta(log n); the array must be sorted.
Q: How does Strassen improve matrix multiplication?
A: It multiplies two 2x2 blocks with 7 recursive multiplications instead of 8, giving Theta(n^log2(7)) which is about Theta(n^2.81) instead of Theta(n^3).
@quiz
? The worst case time of merge sort is
- Theta(n)
+ Theta(n log n)
- Theta(n^2)
- Theta(log n)
! Merge sort always splits evenly.
? Quick sort has worst-case behaviour when
- the array is random
+ the pivot is always the smallest or largest element
- the array has one element
- the array is reversed in a stable way only
! An unbalanced partition causes T(n-1) + n.
? Which of these is stable?
- Quick sort
+ Merge sort
- Heap sort
- Selection sort (array version)
! Merge sort keeps equal elements in their original order.
? Binary search on 1024 sorted elements needs at most about
- 10 comparisons plus 1
+ 11 comparisons
- 512 comparisons
- 1024 comparisons
! floor(log2 1024) + 1 = 11 in the worst case.
? Strassen's algorithm uses how many recursive multiplications for 2x2 blocks?
- 4
- 6
+ 7
- 8
! 7 instead of 8.
@visual
steps | Merge sort | Divide the array into two halves; Sort each half recursively; Merge the two sorted halves; Result is sorted
tree | Merge sort on 8 numbers | 8(4(2(1)(1))(2(1)(1)))(4(2(1)(1))(2(1)(1)))
compare | Merge sort vs quick sort | Merge sort=n log n worst case~Needs O(n) space~Stable; Quick sort=n^2 worst case~In place~Fastest on average
@problems
## Moderate
P: Write the recurrence and complexity of binary search.
A: T(n) = T(n/2) + 1, so T(n) = Theta(log n).
R: 1 | Recurrence
R: 1 | Theta(log n)
## High
P: Sort 38, 27, 43, 3, 9, 82, 10 using merge sort and show the merge steps.
A: Split into [38,27,43,3] and [9,82,10]. These split to [38,27],[43,3],[9],[82,10] and then single items. Merging: [27,38], [3,43], [10,82]; then [3,27,38,43] and [9,10,82]; final merge [3,9,10,27,38,43,82].
R: 2 | Correct splitting
R: 2 | Correct intermediate merges
R: 1 | Final sorted list
## Advanced
P: Compare the best, average and worst case of quick sort and explain how choosing a random pivot helps.
A: Best and average case Theta(n log n) when partitions are balanced, worst case Theta(n^2) when partitions are extremely unbalanced, for example on a sorted array with first-element pivot. A random pivot makes the chance of consistently bad splits tiny for every input, so the expected time is Theta(n log n) regardless of the order of the input.
R: 2 | States all three cases correctly
R: 2 | Explains cause of the worst case
R: 2 | Explains random pivot gives expected n log n
