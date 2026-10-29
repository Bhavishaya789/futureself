# Counting: permutations, combinations and the binomial theorem
minutes: 40
yt: permutations combinations discrete mathematics
yt: binomial theorem pascal triangle counting
@study
## Basic rules
- **Sum rule:** if task A can be done in m ways or task B in n ways (not both), there are m + n ways.
- **Product rule:** a sequence of tasks with m and n ways gives m × n ways.
Example: a password with 2 letters (26 choices each) then 3 digits: 26² × 10³ = 676,000.

## Permutations (order matters)
Arrangements of r objects from n: **P(n, r) = n!/(n − r)!**. All n objects: n!. Example: P(5,3) = 60; ways to seat 5 people in a row = 120.
- Circular arrangements of n objects: (n − 1)!.
- With repeated objects: n!/(n1! n2! … nk!). The word MISSISSIPPI has 11!/(4!·4!·2!) = 34,650 arrangements.

## Combinations (order does not matter)
**C(n, r) = n!/(r!(n − r)!)**. C(10,3) = 120. Properties: C(n, r) = C(n, n−r), Pascal's rule C(n,r) = C(n−1,r−1) + C(n−1,r).
- With repetition allowed (choose r items from n types): C(n + r − 1, r).

## Binomial theorem
(x + y)^n = Σ C(n, k) x^(n−k) y^k. Coefficients form **Pascal's triangle**: 1; 1 1; 1 2 1; 1 3 3 1; 1 4 6 4 1. Sum of row n = 2^n (also |P(A)|).
Example: coefficient of x²y³ in (x + y)^5 is C(5,2) = 10.

## Inclusion-exclusion and derangements
Number of **derangements** (no object in its original position) of n: D_n = n! Σ (−1)^k/k!. D_4 = 9 (checked by listing all permutations).

## Distributions
Placing n identical balls in k distinct boxes: C(n + k − 1, k − 1). Example: 10 identical sweets among 3 children: C(12,2) = 66.

## Computation
```python
from math import comb, perm, factorial
print(perm(5, 3), comb(10, 3), factorial(11)//(factorial(4)*factorial(4)*factorial(2)))
print(comb(12, 2), sum(comb(5, k) for k in range(6)))
```
Output:
```
60 120 34650
66 32
```

> Order matters → permutation. Order does not matter → combination.
@qa
Q: Difference between a permutation and a combination?
A: A permutation counts ordered arrangements; a combination counts selections where order is ignored. P(n,r) = r!·C(n,r).
Q: How many ways can 3 books be chosen from 10?
A: C(10,3) = 120.
Q: How many arrangements does MISSISSIPPI have?
A: 11!/(4!·4!·2!) = 34,650 because of repeated letters I (4), S (4) and P (2).
Q: State the binomial theorem.
A: (x + y)^n = Σ_{k=0}^{n} C(n,k) x^(n−k) y^k.
Q: What is a derangement?
A: A permutation in which no element stays in its original position; there are 9 derangements of 4 items.
@quiz
? P(5,3) equals
- 10
+ 60
- 120
- 20
! 5!/2! = 60.
? C(10,3) equals
- 30
- 720
+ 120
- 10
! 10!/(3!7!) = 120.
? Sum of the entries in row 5 of Pascal's triangle (counting from row 0) is
- 10
- 25
+ 32
- 16
! 2^5 = 32.
? Ways to seat 6 people around a circular table
- 720
+ 120
- 60
- 36
! (6 − 1)! = 120.
? Ways to distribute 10 identical sweets among 3 children (any may get none)
- 30
+ 66
- 120
- 1000
! C(12,2) = 66.

@visual
formula | Counting formulas | Permutation: P(n, r) = n! / (n - r)! ; Combination: C(n, r) = n! / (r! (n - r)!) ; Arrangements with repeats: n! / (p! q! ...)

@problems
## Moderate
P: How many different arrangements of the letters of MATH and of LEVEL are there?
A: MATH has 4 distinct letters: 4! = 24. LEVEL has 5 letters with L repeated twice and E repeated twice: 5! / (2! x 2!) = 120 / 4 = 30.
R: 2 | 24
R: 2 | 30 with division for repeats
## High
P: A committee of 3 is chosen from 5 men and 4 women. How many committees contain at least one woman?
A: Total committees = C(9, 3) = 84. Committees with no woman = C(5, 3) = 10. At least one woman = 84 - 10 = 74.
R: 2 | Total 84
R: 2 | All-men committees 10
R: 1 | Answer 74
## Advanced
P: In how many ways can 10 identical candies be given to 4 children (a) with no restriction, (b) with each child getting at least one?
A: (a) Stars and bars: C(10 + 4 - 1, 4 - 1) = C(13, 3) = 286. (b) Give one candy to each first, leaving 6 candies: C(6 + 3, 3) = C(9, 3) = 84.
R: 2 | 286 with stars and bars
R: 3 | 84 with the pre-allocation idea
