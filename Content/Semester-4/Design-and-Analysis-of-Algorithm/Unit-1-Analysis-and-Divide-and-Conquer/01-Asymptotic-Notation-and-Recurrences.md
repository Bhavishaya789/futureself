# Asymptotic notation and recurrences
minutes: 25
yt: asymptotic notations big O omega theta
yt: master theorem recurrence relations examples
@study
An **algorithm** is a finite sequence of steps that solves a problem. We compare algorithms by how their running time (**time complexity**) and memory (**space complexity**) grow with the input size n, ignoring machine speed and constants.

## Asymptotic notations
- **Big-O, O(g(n)):** upper bound. f(n) = O(g(n)) if f(n) <= c g(n) for all n >= n0.
- **Big-Omega, Omega(g(n)):** lower bound.
- **Theta, Theta(g(n)):** tight bound (both O and Omega).
Example: 3n^2 + 5n + 7 = Theta(n^2).

## Growth order (slow to fast)
1 < log n < n < n log n < n^2 < n^3 < 2^n < n!

## Best, worst and average case
Linear search: best O(1), worst O(n). We usually quote the **worst case**.

## Analysing loops
- A single loop to n: O(n). Two nested loops to n: O(n^2).
- A loop where i doubles (i = 1, 2, 4, ...) runs about log2 n times.

## Recurrences
Divide and conquer algorithms give recurrences like T(n) = a T(n/b) + f(n).

### Master theorem
Let c = log_b a and compare f(n) with n^c:
1. If f(n) = O(n^(c - e)) for some e > 0, then T(n) = Theta(n^c).
2. If f(n) = Theta(n^c), then T(n) = Theta(n^c log n).
3. If f(n) = Omega(n^(c + e)) and a f(n/b) <= k f(n) for some k < 1, then T(n) = Theta(f(n)).

### Examples
| Recurrence | a, b, f(n) | Result |
| --- | --- | --- |
| T(n) = 2T(n/2) + n (merge sort) | c = 1, f = n^1 | Theta(n log n) |
| T(n) = T(n/2) + 1 (binary search) | c = 0, f = n^0 | Theta(log n) |
| T(n) = 8T(n/2) + n^2 | c = 3, f smaller | Theta(n^3) |
| T(n) = 2T(n/2) + n^2 | c = 1, f larger | Theta(n^2) |

The Master theorem does not apply to T(n) = T(n-1) + n. Expand it instead: n + (n-1) + ... + 1 = n(n+1)/2 = Theta(n^2).

## Hindi saransh
Big-O upper bound, Omega lower bound, Theta tight bound hai. Recurrence T(n) = aT(n/b) + f(n) ko Master theorem se hal karte hain: n^(log_b a) aur f(n) ki tulna karo.

> Drop constants and lower-order terms. 5n^2 + 100n is just Theta(n^2).
@qa
Q: What is the difference between O, Omega and Theta?
A: O is an upper bound, Omega a lower bound and Theta a tight bound that is both. Theta says the function grows at exactly that rate.
Q: Solve T(n) = 2T(n/2) + n.
A: Here a = 2, b = 2, so n^(log_2 2) = n, which matches f(n) = n. Case 2 gives T(n) = Theta(n log n).
Q: Why do we use the worst case for analysis?
A: It guarantees the algorithm will never be slower than that bound for any input of size n.
Q: How many times does for (i = 1; i < n; i = i * 2) run?
A: About log2 n times, because i doubles each time.
Q: Can the Master theorem solve T(n) = T(n-1) + n?
A: No, it needs the form aT(n/b) + f(n). Expand by substitution: the sum is n(n+1)/2, so T(n) = Theta(n^2).
@quiz
? 3n^2 + 5n + 7 is
- Theta(n)
+ Theta(n^2)
- Theta(n^3)
- Theta(log n)
! The highest-order term n^2 dominates.
? Using the Master theorem, T(n) = 2T(n/2) + n^2 is
- Theta(n log n)
+ Theta(n^2)
- Theta(n^3)
- Theta(n)
! n^(log_2 2) = n and f(n) = n^2 is larger, so case 3 gives Theta(n^2).
? T(n) = T(n/2) + 1 is the recurrence of
- linear search
- merge sort
+ binary search
- bubble sort
! One comparison, then half the array: Theta(log n).
? Which grows fastest?
- n^3
- n log n
+ 2^n
- n^2
! Exponentials overtake any polynomial.
? T(n) = 8T(n/2) + n^2 is
- Theta(n^2)
- Theta(n^2 log n)
+ Theta(n^3)
- Theta(n^4)
! n^(log_2 8) = n^3 dominates n^2, case 1.
@visual
curve | Growth: n log n against n^2 | y = x*ln(x)/ln(2) ; 1 ; 20
curve | Growth of n^2 | y = x*x ; 1 ; 20
tree | Recursion tree of merge sort for n = 8 | n=8(n=4(n=2(1)(1))(n=2(1)(1)))(n=4(n=2(1)(1))(n=2(1)(1)))
@problems
## Moderate
P: Arrange in increasing order of growth: n^2, 2^n, n log n, log n, n.
A: log n < n < n log n < n^2 < 2^n.
R: 2 | Puts the slowest-growing terms (log n, n) first
R: 2 | Complete correct order ending with 2^n
## High
P: Solve T(n) = 4T(n/2) + n using the Master theorem and say which case applies.
A: a = 4, b = 2, so n^(log_2 4) = n^2. f(n) = n = O(n^(2 - 1)), which is smaller, so case 1 applies: T(n) = Theta(n^2).
R: 2 | Computes n^(log_b a) = n^2
R: 2 | Identifies case 1 and answers Theta(n^2)
## Advanced
P: Find the time complexity of: for (i = 1; i <= n; i++) for (j = 1; j <= n; j = j * 2) work();
A: The outer loop runs n times. The inner loop doubles j so it runs about log2 n times. Total work = n log n, i.e. Theta(n log n).
R: 2 | Inner loop is logarithmic
R: 2 | Multiplies to get n log n
