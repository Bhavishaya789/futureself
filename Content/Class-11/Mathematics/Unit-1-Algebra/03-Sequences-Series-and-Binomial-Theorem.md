# Sequences, series and binomial theorem
minutes: 25
yt: AP GP binomial theorem class 11
@study
## Arithmetic progression (AP)
nth term a_n = a + (n - 1) d; sum S_n = n/2 [2a + (n - 1) d]. Example: a = 3, d = 4, n = 10 gives S_10 = 5 x (6 + 36) = **210**.

## Geometric progression (GP)
a_n = a r^(n-1); S_n = a (r^n - 1)/(r - 1). Example: a = 2, r = 3, n = 6: S_6 = 2 (729 - 1) / 2 = **728**. Infinite GP with |r| < 1: S = a / (1 - r).

## Means
AM = (a + b)/2; GM = sqrt(ab); AM >= GM >= HM.

## Binomial theorem
(a + b)^n = sum over r of nCr a^(n-r) b^r. General term T(r+1) = nCr a^(n-r) b^r. Sum of coefficients of (1 + x)^n is 2^n; for n = 10 it is **1024**. nCr = n! / (r! (n - r)!) ; 10C3 = **120**.

## Hindi saransh
AP: S = n/2[2a + (n-1)d]. GP: S = a(r^n - 1)/(r - 1). Binomial: general term nCr a^(n-r) b^r. AM >= GM.

> In (a + b)^n there are n + 1 terms.
@qa
Q: Sum of the first 10 terms of 3, 7, 11, ... ?
A: 210.
Q: Number of terms in (a + b)^n.
A: n + 1.
Q: State the AM-GM inequality.
A: For positive numbers the arithmetic mean is at least the geometric mean, with equality only if all numbers are equal.
Q: Sum to infinity of 1, 1/2, 1/4, ...?
A: 1 / (1 - 1/2) = 2.
@quiz
? Sum of the first 10 terms of the AP 3, 7, 11, ... is
- 190
- 200
+ 210
- 220
! 10/2 x (6 + 36) = 210.
? Sum of the first 6 terms of 2, 6, 18, ... is
- 364
+ 728
- 486
- 1458
! 2 (3^6 - 1)/2 = 728.
? 10C3 equals
- 30
- 90
+ 120
- 720
! 10 x 9 x 8 / 6 = 120.
? Sum of coefficients of (1 + x)^10 is
- 100
- 512
+ 1024
- 2048
! Put x = 1: 2^10.
@visual
formula | Series sums | AP: S = n/2 (2a + (n-1) d) ; GP: S = a (r^n - 1)/(r - 1)
steps | Using the binomial theorem | Identify a, b and n; Write the general term T(r+1); Find r from the required power; Compute nCr and simplify
@problems
## Moderate
P: Find S_10 for the AP with a = 3 and d = 4.
A: S_10 = (10/2)(6 + 9 x 4) = 210.
R: 1 | Formula
R: 1 | 210
## High
P: Find the coefficient of x^3 in (1 + x)^10.
A: 10C3 = 120.
R: 1 | General term
R: 1 | 120
## Advanced
P: Find the middle term in (x + 1/x)^8.
A: There are 9 terms, so the middle one is the 5th: T5 = 8C4 x^4 (1/x)^4 = 70.
R: 2 | Finds the 5th term
R: 2 | 70
