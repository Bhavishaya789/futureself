# Greedy algorithms: Huffman, fractional knapsack, activity selection
minutes: 30
yt: greedy algorithms huffman coding fractional knapsack
yt: activity selection problem greedy
@study
A **greedy algorithm** builds a solution step by step, always taking the choice that looks best right now. It works when the problem has the **greedy-choice property** and **optimal substructure**. It is usually simple and fast but can fail where it does not hold (0/1 knapsack).

## Fractional knapsack
Items can be split. Sort by **value / weight** ratio and take the best first.
Example: values 60, 100, 120; weights 10, 20, 30; capacity W = 50. Ratios 6, 5, 4. Take item 1 (10), item 2 (20), then 20/30 of item 3: 60 + 100 + 80 = **240**.
The 0/1 version (no splitting) has optimum 100 + 120 = **220**, so greedy fails there and DP is needed.

## Activity selection
Choose the maximum number of non-overlapping activities. Sort by **finish time** and pick each activity that starts after the last chosen one finishes.
Activities (start, finish): (1,4), (3,5), (0,6), (5,7), (3,9), (5,9), (6,10), (8,11), (8,12), (2,14), (12,16).
Picked: (1,4), (5,7), (8,11), (12,16), which is **4** activities.

## Huffman coding
Gives the shortest prefix-free binary code. Repeatedly merge the two lowest-frequency nodes.
Frequencies per 100 characters: a 45, b 13, c 12, d 16, e 9, f 5.
Codes: a = 0, c = 100, b = 101, f = 1100, e = 1101, d = 111.
Total bits = 45x1 + 12x3 + 13x3 + 5x4 + 9x4 + 16x3 = **224** bits per 100 characters versus 300 with a fixed 3-bit code. (Exact codes may differ when frequencies tie, but the total length is always 224.)

```python
import heapq
f = {"a": 45, "b": 13, "c": 12, "d": 16, "e": 9, "f": 5}
h = [[w, [s, ""]] for s, w in f.items()]; heapq.heapify(h)
while len(h) > 1:
    lo, hi = heapq.heappop(h), heapq.heappop(h)
    for p in lo[1:]: p[1] = "0" + p[1]
    for p in hi[1:]: p[1] = "1" + p[1]
    heapq.heappush(h, [lo[0] + hi[0]] + lo[1:] + hi[1:])
codes = dict(h[0][1:]); print(sum(f[s] * len(c) for s, c in codes.items()))   # 224
```

## Other greedy algorithms
Prim and Kruskal (minimum spanning tree), Dijkstra (shortest paths), job sequencing with deadlines.

## Hindi saransh
Greedy har step par sabse achha lagne wala choice leta hai. Fractional knapsack mein value/weight ratio se sort karte hain (answer 240). Activity selection mein finish time se sort karte hain. Huffman mein do sabse chhoti frequency merge karte hain.

> Greedy does not always give the optimum. It does for fractional knapsack, but not for 0/1 knapsack.
@qa
Q: When does a greedy algorithm give the optimal answer?
A: When the problem has the greedy-choice property (a locally best choice can be part of some optimal solution) and optimal substructure.
Q: Why does greedy work for fractional knapsack but not for 0/1 knapsack?
A: With splitting allowed, filling by best ratio never wastes capacity. In 0/1 the best-ratio item may leave unusable space; with values 60, 100, 120, weights 10, 20, 30 and W = 50 greedy takes items 1 and 2 for 160, while the best is 220.
Q: In activity selection, which sorting key is correct?
A: Earliest finish time, because it leaves the most room for the remaining activities.
Q: What is a prefix-free code?
A: No codeword is a prefix of another, so a bit stream can be decoded without separators. Huffman codes are prefix-free.
Q: What is the time complexity of Huffman coding for n symbols?
A: O(n log n) using a min-heap.
@quiz
? The fractional knapsack answer for values 60, 100, 120, weights 10, 20, 30, W = 50 is
- 220
+ 240
- 260
- 180
! 60 + 100 + (20/30) x 120 = 240.
? The 0/1 knapsack optimum for the same data is
- 160
- 180
+ 220
- 240
! Items 2 and 3: weight 50, value 220.
? Activity selection is solved greedily by sorting on
- start time
- duration
+ finish time
- number of conflicts
! Earliest finish time leaves the most room for later activities.
? Huffman coding builds a
- fixed-length code
+ prefix-free variable-length code
- parity code
- hash table
! Frequent symbols get short codes and no code is a prefix of another.
? In the Huffman example the total bits per 100 characters are
- 300
- 250
+ 224
- 180
! 45 + 36 + 39 + 20 + 36 + 48 = 224.
@visual
steps | Activity selection | Sort the activities by finish time; Pick the first activity; Pick the next one that starts at or after the last finish; Repeat until the list ends
tree | Huffman tree for a, b, c, d, e, f (frequencies 45, 13, 12, 16, 9, 5) | 100(a45)(55(25(c12)(b13))(30(14(f5)(e9))(d16)))
bars | Frequency of each symbol | a=45;b=13;c=12;d=16;e=9;f=5
@problems
## Moderate
P: Solve the fractional knapsack: values 60, 100, 120; weights 10, 20, 30; capacity 50.
A: Ratios 6, 5, 4. Take items 1 and 2 fully (weight 30, value 160), then 20/30 of item 3 gives 80. Total 240.
R: 2 | Sorts by ratio
R: 2 | Total 240
## High
P: Use activity selection on (1,4), (3,5), (0,6), (5,7), (3,9), (5,9), (6,10), (8,11), (8,12), (2,14), (12,16). How many activities and which?
A: Sorted by finish time they are already in order. Pick (1,4); next starting at or after 4 is (5,7); next at or after 7 is (8,11); next at or after 11 is (12,16). Four activities.
R: 2 | Sorts by finish time
R: 2 | The four activities
R: 1 | Count 4
## Advanced
P: Show with the 0/1 knapsack example (values 60, 100, 120; weights 10, 20, 30; W = 50) that greedy by value/weight fails, and state what technique solves it.
A: Greedy by ratio picks items 1 and 2 (value 160, weight 30) and cannot fit item 3 (weight 30 > 20 left). The optimal choice is items 2 and 3 with weight 50 and value 220. Greedy fails because items cannot be split. Dynamic programming gives the optimum.
R: 2 | Greedy result 160
R: 2 | Optimal 220
R: 2 | Names dynamic programming
