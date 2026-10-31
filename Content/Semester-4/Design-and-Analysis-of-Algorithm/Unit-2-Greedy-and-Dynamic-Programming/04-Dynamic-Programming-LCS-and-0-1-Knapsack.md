# Dynamic programming: LCS and 0/1 knapsack
minutes: 30
yt: dynamic programming longest common subsequence
yt: 0/1 knapsack dynamic programming table
@study
**Dynamic programming (DP)** solves problems with **overlapping subproblems** and **optimal substructure** by solving each subproblem once and storing the answer (**memoisation** top-down, or **tabulation** bottom-up).

Example: naive Fibonacci takes O(2^n) because fib(n-2) is recomputed many times; with a table it takes O(n).

## Longest Common Subsequence (LCS)
X = ABCBDAB, Y = BDCABA. Let L[i][j] be the LCS length of the first i letters of X and first j of Y.
- If X[i] = Y[j]: L[i][j] = L[i-1][j-1] + 1
- Otherwise: L[i][j] = max(L[i-1][j], L[i][j-1])
The answer is L[7][6] = **4** (for example BCBA). Time O(mn), space O(mn).

```python
def lcs(a, b):
    L = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]
    for i in range(1, len(a) + 1):
        for j in range(1, len(b) + 1):
            L[i][j] = L[i-1][j-1] + 1 if a[i-1] == b[j-1] else max(L[i-1][j], L[i][j-1])
    return L[-1][-1]
print(lcs("ABCBDAB", "BDCABA"))   # 4
```

## 0/1 Knapsack
V[i][w] = best value using the first i items with capacity w.
V[i][w] = max( V[i-1][w], v_i + V[i-1][w - w_i] ) if w_i <= w, else V[i-1][w].
Example: weights 1, 3, 4, 5; values 1, 4, 5, 7; capacity 7. Best is items of weight 3 and 4: 4 + 5 = **9**. Time O(nW).

## Other classic DP problems
Matrix chain multiplication, edit distance, Floyd-Warshall (all-pairs shortest paths), longest increasing subsequence, coin change.

## DP versus greedy versus divide and conquer
| Technique | Subproblems | Choice |
| --- | --- | --- |
| Divide and conquer | independent | combine |
| Greedy | one, after a local choice | never reconsiders |
| DP | overlapping | tries all, stores results |

## Hindi saransh
DP mein overlapping subproblems ko ek baar hal karke table mein rakhte hain. LCS ka answer 4 (BCBA). 0/1 knapsack mein V[i][w] = max(skip, take); answer 9.

> Write the recurrence first. The table is just the recurrence filled in order.
@qa
Q: What two properties must a problem have for DP?
A: Overlapping subproblems and optimal substructure.
Q: What is the difference between memoisation and tabulation?
A: Memoisation is top-down recursion that caches results; tabulation fills a table bottom-up in an order that makes every needed value available.
Q: Give the LCS recurrence.
A: If X[i] = Y[j], L[i][j] = L[i-1][j-1] + 1; otherwise L[i][j] = max(L[i-1][j], L[i][j-1]).
Q: What is the time complexity of 0/1 knapsack by DP? Is it polynomial?
A: O(nW). It is pseudo-polynomial because W is a number whose size is exponential in the number of bits used to write it.
Q: Why is naive recursive Fibonacci slow?
A: It recomputes the same subproblems repeatedly, giving exponential time. DP computes each value once.
@quiz
? LCS of ABCBDAB and BDCABA has length
- 3
+ 4
- 5
- 6
! One longest subsequence is BCBA.
? The 0/1 knapsack with weights 1, 3, 4, 5, values 1, 4, 5, 7 and W = 7 has optimum
- 7
- 8
+ 9
- 10
! Weights 3 and 4 fit exactly (7) for value 9. Weights 1 and 5 give only 8.
? The time complexity of the LCS table for strings of length m and n is
- O(m + n)
+ O(mn)
- O(2^n)
- O(log n)
! There are m x n cells filled in O(1) each.
? Which problem is solved by DP rather than greedy?
- Fractional knapsack
- Activity selection
+ 0/1 knapsack
- Huffman coding
! Greedy fails on 0/1 knapsack.
? DP is useful when subproblems
- never repeat
+ overlap
- are unrelated
- are infinite
! Overlapping subproblems let stored results be reused.
@visual
flow | Steps to design a DP solution | Define the subproblem > Write the recurrence > Fill the table in order > Read off the answer > Trace back the solution
compare | Greedy versus dynamic programming | Greedy=Makes one local choice~Fast and simple~Not always optimal; Dynamic programming=Tries all choices~Stores results~Always optimal if substructure holds
@problems
## Moderate
P: Compute the number of recursive calls saved by DP for fib(5) in principle, and state the DP time complexity.
A: Naive recursion for fib(5) makes 15 calls (fib(3) is computed twice and fib(2) three times). DP computes fib(0) to fib(5) once each, so it takes O(n).
R: 2 | Explains repeated subproblems
R: 1 | States O(n)
## High
P: Find the LCS length of ABCBDAB and BDCABA and give one LCS.
A: The DP table gives L[7][6] = 4. One longest common subsequence is BCBA.
R: 2 | Correct length 4
R: 2 | A valid subsequence of length 4 present in both strings
## Advanced
P: Solve 0/1 knapsack with weights 1, 3, 4, 5, values 1, 4, 5, 7 and capacity 7. State the recurrence, the answer and the items chosen.
A: V[i][w] = max(V[i-1][w], v_i + V[i-1][w - w_i]). The optimal value is 9 using items with weights 3 and 4 (values 4 and 5). Weights 1 and 5 (total 6) give only value 8, so weights 3 and 4 (total 7, value 9) are better.
R: 2 | Correct recurrence
R: 2 | Answer 9
R: 2 | Items weight 3 and 4
