# Recurrence relations
minutes: 35
yt: recurrence relations solving characteristic equation
yt: tower of hanoi recurrence fibonacci closed form
@study
A **recurrence relation** defines a sequence using earlier terms: a_n = f(a_{n−1}, a_{n−2}, …) with **initial conditions**.

## Modelling with recurrences
- **Tower of Hanoi:** moving n disks needs H_n = 2H_{n−1} + 1, H_1 = 1, so H_n = 2^n − 1 (10 disks need 1023 moves).
- **Fibonacci:** F_n = F_{n−1} + F_{n−2}, F_0 = 0, F_1 = 1.
- **Binary strings of length n with no two consecutive 0s:** a_n = a_{n−1} + a_{n−2}.
- **Merge sort time:** T(n) = 2T(n/2) + n gives O(n log n).

## Linear homogeneous recurrences with constant coefficients
a_n = c1·a_{n−1} + c2·a_{n−2}. Try a_n = r^n to get the **characteristic equation** r² − c1 r − c2 = 0.
- Distinct roots r1, r2: a_n = α r1^n + β r2^n.
- Repeated root r: a_n = (α + β n) r^n.
Constants come from the initial conditions.

### Worked example
a_n = a_{n−1} + 2a_{n−2}, a_0 = 0, a_1 = 1.
Characteristic equation r² − r − 2 = 0, so r = 2 or r = −1. a_n = α 2^n + β(−1)^n. From a_0 = 0: α + β = 0. From a_1 = 1: 2α − β = 1. So α = 1/3, β = −1/3 and
**a_n = (2^n − (−1)^n)/3**. The sequence is 0, 1, 1, 3, 5, 11, 21, 43, 85, 171 (checked by program against the formula).

### Fibonacci closed form (Binet)
Roots (1 ± √5)/2 give F_n = (φ^n − ψ^n)/√5 with φ ≈ 1.618 the golden ratio.

## Non-homogeneous recurrences
a_n = c1 a_{n−1} + … + f(n). Solution = homogeneous solution + a **particular solution** guessed from f(n) (constant, polynomial, exponential).

## Master theorem (divide and conquer)
T(n) = aT(n/b) + n^d:
- if d < log_b a then T = Θ(n^(log_b a));
- if d = log_b a then Θ(n^d log n);
- if d > log_b a then Θ(n^d).
Binary search T = T(n/2) + 1 gives Θ(log n); merge sort Θ(n log n).

## Generating functions
The generating function of a_0, a_1, … is G(x) = Σ a_n x^n. Example: 1/(1 − x) = 1 + x + x² + … . They convert recurrences and counting problems into algebra.

## Iteration method
Expand repeatedly: H_n = 2H_{n−1} + 1 = 2(2H_{n−2} + 1) + 1 = … = 2^(n−1)·H_1 + (2^(n−1) − 1) = 2^n − 1.

> Characteristic roots turn a recurrence into a closed formula.
@qa
Q: Write the recurrence for the Tower of Hanoi and its solution.
A: H_n = 2H_{n−1} + 1 with H_1 = 1, giving H_n = 2^n − 1.
Q: What is the characteristic equation of a_n = 5a_{n−1} − 6a_{n−2}?
A: r² − 5r + 6 = 0, with roots 2 and 3, so a_n = α·2^n + β·3^n.
Q: How is the form of the solution decided when the characteristic root is repeated?
A: For a repeated root r, the solution is (α + βn) r^n.
Q: What does the master theorem say for T(n) = 2T(n/2) + n?
A: Here a = 2, b = 2, d = 1 = log_2 2, so T(n) = Θ(n log n).
Q: What is a generating function?
A: A formal power series Σ a_n x^n whose coefficients are the terms of a sequence, used to solve recurrences and counting problems.
@quiz
? Moves needed for the Tower of Hanoi with 5 disks
- 15
+ 31
- 32
- 25
! 2^5 − 1 = 31.
? Roots of r² − r − 2 = 0 are
- 1 and 2
+ 2 and −1
- −2 and 1
- 3 and −1
! (r − 2)(r + 1) = 0.
? For a repeated root r the general solution is
- α r^n
+ (α + βn) r^n
- α r^n + β
- r^(2n)
! Multiplying by n gives the second independent solution.
? Merge sort's recurrence T(n) = 2T(n/2) + n solves to
- Θ(n)
- Θ(n²)
+ Θ(n log n)
- Θ(log n)
! Master theorem case d = log_b a.
? a_n = a_{n−1} + a_{n−2} with a_0=0, a_1=1 is the
- factorial sequence
+ Fibonacci sequence
- powers of two
- Catalan numbers
! Fibonacci numbers.

@visual
steps | Solving a linear recurrence | Write the characteristic equation; Find its roots; Write the general solution with unknown constants; Use the starting values to find the constants

@problems
## Moderate
P: With F(1) = F(2) = 1 and F(n) = F(n-1) + F(n-2) find F(10).
A: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55. So F(10) = 55.
R: 2 | Sequence computed
R: 2 | F(10) = 55
## High
P: Solve a(n) = 2 a(n-1) + 1 with a(0) = 0 and verify for n = 3. Relate it to the Tower of Hanoi.
A: Add 1 to both sides: a(n) + 1 = 2 (a(n-1) + 1), so a(n) + 1 = 2^n (a(0) + 1) = 2^n, giving a(n) = 2^n - 1. Check: a(1)=1, a(2)=3, a(3)=7 = 2^3 - 1. The Tower of Hanoi moves T(n) = 2T(n-1) + 1 follow the same recurrence, so n disks need 2^n - 1 moves.
R: 2 | Closed form 2^n - 1
R: 1 | Verification for n = 3
R: 2 | Hanoi connection
## Advanced
P: Solve a(n) = 5 a(n-1) - 6 a(n-2) with a(0) = 1 and a(1) = 4. Verify a(2).
A: Characteristic equation r^2 - 5r + 6 = 0 gives r = 2 and 3. a(n) = A 2^n + B 3^n. a(0): A + B = 1. a(1): 2A + 3B = 4. Solving: B = 2, A = -1. So a(n) = 2 x 3^n - 2^n. Check a(2) = 5 x 4 - 6 x 1 = 14 and 2 x 9 - 4 = 14.
R: 2 | Roots 2 and 3
R: 2 | Constants A = -1, B = 2
R: 1 | Verification
