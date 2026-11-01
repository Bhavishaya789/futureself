# Binomial theorem (JEE Main)
minutes: 45
yt: jee main binomial theorem
@study
(a + b)^n = sum nCr a^(n-r) b^r. General term T(r+1) = nCr a^(n-r) b^r. The middle term is the (n/2 + 1)th term for even n, and there are two middle terms for odd n. The sum of coefficients is found by x = 1, and the sum of the binomial coefficients is 2^n. The greatest coefficient is nC(n/2).
## Deep dive: expansion and general term
(a + b)^n = nC0 a^n + nC1 a^(n-1) b + ... + nCn b^n, with n + 1 terms for a positive integer n. The general term T(r+1) = nCr a^(n - r) b^r. The r-th term from the end of (a + b)^n is the (n - r + 2)-th term from the beginning. Special cases: (1 + x)^n = sum nCr x^r, (1 - x)^n = sum (-1)^r nCr x^r. Pascal triangle gives the coefficients: the row for n = 5 is 1 5 10 10 5 1.
## Deep dive: middle term, greatest term and sums
If n is even there is one middle term, T(n/2 + 1); if n is odd there are two, T((n + 1)/2) and T((n + 3)/2). The greatest binomial coefficient is nC(n/2) for even n and nC((n - 1)/2) = nC((n + 1)/2) for odd n. Putting x = 1 gives the sum of coefficients 2^n; x = -1 gives C0 - C1 + C2 - ... = 0; so the sum of even-indexed coefficients equals the sum of odd-indexed ones = 2^(n - 1). Identities: C0^2 + C1^2 + ... + Cn^2 = 2nCn; C1 + 2 C2 + ... + n Cn = n 2^(n - 1). Greatest term in (1 + x)^n: find the largest r with (n - r + 1)/r x > 1.
## Deep dive: independent term, remainders and approximations
The term independent of x in (x^a + 1/x^b)^n: set the power a (n - r) - b r = 0 and solve for r. The coefficient of x^k: solve a(n - r) - b r = k. Remainder problems: express the number as (1 + multiple)^n and use binomial expansion: e.g. 7^100 mod 5 using (5 + 2)... To approximate: (1 + x)^n is approximately 1 + n x when x is small. For negative or fractional index (JEE Main uses |x| < 1): (1 + x)^n = 1 + n x + n(n - 1)/2! x^2 + ...
## Hindi saransh
General term T(r+1) = nCr a^(n-r) b^r. Sum of coefficients = 2^n.
> Coefficient of x^k: solve the power of x in T(r+1).
@formulas
## Expansion
Binomial theorem | (a + b)^n = sum nCr a^(n - r) b^r | r = 0 to n
General term | T(r+1) = nCr a^(n - r) b^r | 
Number of terms | n + 1 | 
r-th term from the end | (n - r + 2)th from the start | 
## Special terms
Middle term (n even) | T(n/2 + 1) | 
Middle terms (n odd) | T((n + 1)/2), T((n + 3)/2) | 
Greatest coefficient | nC(n/2) | even n
## Sums
Sum of coefficients | 2^n | put x = 1
Alternating sum | 0 | put x = -1
Even or odd sum | 2^(n - 1) | 
Sum of squares | 2nCn | 
C1 + 2 C2 + ... + n Cn | n 2^(n - 1) | 
## Series
Negative or fractional index | (1 + x)^n = 1 + nx + n(n - 1)/2! x^2 + ... | |x| < 1
Independent term | a(n - r) - b r = 0 | (x^a + 1/x^b)^n

@qa
Q: State the binomial theorem.
A: (a + b)^n = sum nCr a^(n - r) b^r for r from 0 to n.
Q: What is the general term of (a + b)^n?
A: T(r+1) = nCr a^(n - r) b^r.
Q: How many terms does (a + b)^n have?
A: n + 1.
Q: What is the sum of the binomial coefficients?
A: 2^n.
Q: What is the sum of even-indexed coefficients?
A: 2^(n - 1).
Q: What is the middle term when n is even?
A: The (n/2 + 1)th term.
Q: How many middle terms are there when n is odd?
A: Two.
Q: What is the greatest binomial coefficient when n is even?
A: nC(n/2).
Q: What is C0 - C1 + C2 - ... for n >= 1?
A: 0.
Q: What is the value of C0^2 + C1^2 + ... + Cn^2?
A: 2nCn.
Q: What is C1 + 2 C2 + ... + n Cn?
A: n 2^(n - 1).
Q: What is the expansion of (1 + x)^n for small x?
A: Approximately 1 + n x.
Q: What is Pascal's triangle?
A: A triangle in which each number is the sum of the two above it, giving binomial coefficients.
Q: What is the term independent of x?
A: The term in which the power of x is zero.
Q: What is the r-th term from the end?
A: The (n - r + 2)th term from the beginning.
Q: What is the expansion of (1 - x)^n?
A: sum (-1)^r nCr x^r.
Q: What is the coefficient of the last term of (a + b)^n?
A: 1 (term b^n).
Q: What is the ratio of consecutive coefficients T(r+1)/T(r) in (1 + x)^n?
A: (n - r + 1) x / r.
Q: Write the binomial coefficients of (1 + x)^3.
A: 1, 3, 3, 1.
Q: The sum of all the binomial coefficients of (1 + x)^3 is
A: 8.
Q: The sum of the coefficients of even-indexed terms in (1 + x)^3 is
A: 4.
Q: Write the binomial coefficients of (1 + x)^4.
A: 1, 4, 6, 4, 1.
Q: The sum of all the binomial coefficients of (1 + x)^4 is
A: 16.
Q: The sum of the coefficients of even-indexed terms in (1 + x)^4 is
A: 8.
Q: Write the binomial coefficients of (1 + x)^5.
A: 1, 5, 10, 10, 5, 1.
Q: The sum of all the binomial coefficients of (1 + x)^5 is
A: 32.
Q: The sum of the coefficients of even-indexed terms in (1 + x)^5 is
A: 16.
Q: Write the binomial coefficients of (1 + x)^6.
A: 1, 6, 15, 20, 15, 6, 1.
Q: The sum of all the binomial coefficients of (1 + x)^6 is
A: 64.
Q: The sum of the coefficients of even-indexed terms in (1 + x)^6 is
A: 32.
Q: Write the binomial coefficients of (1 + x)^7.
A: 1, 7, 21, 35, 35, 21, 7, 1.
Q: The sum of all the binomial coefficients of (1 + x)^7 is
A: 128.
Q: The sum of the coefficients of even-indexed terms in (1 + x)^7 is
A: 64.
Q: Write the binomial coefficients of (1 + x)^8.
A: 1, 8, 28, 56, 70, 56, 28, 8, 1.
Q: The sum of all the binomial coefficients of (1 + x)^8 is
A: 256.
Q: The sum of the coefficients of even-indexed terms in (1 + x)^8 is
A: 128.
Q: Write the binomial coefficients of (1 + x)^9.
A: 1, 9, 36, 84, 126, 126, 84, 36, 9, 1.
Q: The sum of all the binomial coefficients of (1 + x)^9 is
A: 512.
Q: The sum of the coefficients of even-indexed terms in (1 + x)^9 is
A: 256.
Q: Write the binomial coefficients of (1 + x)^10.
A: 1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1.
Q: The sum of all the binomial coefficients of (1 + x)^10 is
A: 1024.
Q: The sum of the coefficients of even-indexed terms in (1 + x)^10 is
A: 512.
Q: The coefficient of x^2 in (1 + x)^5 is
A: 10.
Q: The coefficient of x^3 in (1 + x)^6 is
A: 20.
Q: The coefficient of x^2 in (1 + x)^7 is
A: 21.
Q: The coefficient of x^4 in (1 + x)^8 is
A: 70.
Q: The coefficient of x^3 in (1 + x)^9 is
A: 84.
Q: The coefficient of x^5 in (1 + x)^10 is
A: 252.
Q: The coefficient of x^1 in (1 + x)^6 is
A: 6.
Q: The coefficient of x^2 in (1 + x)^8 is
A: 28.
Q: The coefficient of x^3 in (1 + x)^10 is
A: 120.
Q: The coefficient of x^6 in (1 + x)^12 is
A: 924.
Q: The coefficient of x^5 in (1 + x)^7 is
A: 21.
Q: The coefficient of x^4 in (1 + x)^9 is
A: 126.
Q: The coefficient of x^2 in (1 + 2x)^5 is
A: 40.
Q: The coefficient of x^3 in (1 + 2x)^5 is
A: 80.
Q: The coefficient of x^2 in (1 + 2x)^6 is
A: 60.
Q: The coefficient of x^3 in (1 + 2x)^6 is
A: 160.
Q: The coefficient of x^2 in (1 + 3x)^4 is
A: 54.
Q: The coefficient of x^3 in (1 + 3x)^4 is
A: 108.
Q: The coefficient of x^2 in (1 + 3x)^5 is
A: 90.
Q: The coefficient of x^3 in (1 + 3x)^5 is
A: 270.
Q: The coefficient of x^2 in (1 + 3x)^6 is
A: 135.
Q: The coefficient of x^3 in (1 + 3x)^6 is
A: 540.
Q: The coefficient of x^2 in (1 + 2x)^7 is
A: 84.
Q: The coefficient of x^3 in (1 + 2x)^7 is
A: 280.
Q: The coefficient of x^2 in (1 + 2x)^4 is
A: 24.
Q: The coefficient of x^3 in (1 + 2x)^4 is
A: 32.
Q: The coefficient of x^2 in (1 + 2x)^8 is
A: 112.
Q: The coefficient of x^3 in (1 + 2x)^8 is
A: 448.
Q: The middle term of (x + y)^4 has binomial coefficient
A: 6.
Q: The middle term of (x + y)^6 has binomial coefficient
A: 20.
Q: The middle term of (x + y)^8 has binomial coefficient
A: 70.
Q: The middle term of (x + y)^10 has binomial coefficient
A: 252.
Q: The middle term of (x + y)^12 has binomial coefficient
A: 924.
Q: The value of (2 + 1)^4 by binomial expansion is
A: 81.
Q: The value of (2 + 1)^5 by binomial expansion is
A: 243.
Q: The value of (1 + 1)^6 by binomial expansion is
A: 64.
Q: The value of (3 + 2)^5 by binomial expansion is
A: 3125.
Q: The value of (3 + 1)^4 by binomial expansion is
A: 256.
Q: The value of (2 + 1)^6 by binomial expansion is
A: 729.
Q: The value of (1 + 2)^7 by binomial expansion is
A: 2187.
Q: The value of (1 + 1)^5 by binomial expansion is
A: 32.
Q: The term independent of x in (x + 1/x)^6
A: 20.
Q: The term independent of x in (x + 1/x)^8
A: 70.
Q: The term independent of x in (x + 1/x)^10
A: 252.
Q: The term independent of x in (x + 1/x)^7
A: 0.
Q: The term independent of x in (x + 1/x)^9
A: 0.
Q: The term independent of x in (x + 1/x)^5
A: 0.
Q: Approximate value of 1.01^10 using 1 + n x (x = 0.01)
A: 1.1.
Q: Approximate value of 1.01^20 using 1 + n x (x = 0.01)
A: 1.2.
Q: Approximate value of 1.01^50 using 1 + n x (x = 0.01)
A: 1.5.
Q: Approximate value of 1.01^100 using 1 + n x (x = 0.01)
A: 2.
Q: The value of 5C1 + 5C2 + ... + 5C5 is
A: 31.
Q: The value of 6C1 + 6C2 + ... + 6C6 is
A: 63.
Q: The value of 7C1 + 7C2 + ... + 7C7 is
A: 127.
Q: The value of 8C1 + 8C2 + ... + 8C8 is
A: 255.
Q: The value of 9C1 + 9C2 + ... + 9C9 is
A: 511.
Q: The value of 10C1 + 10C2 + ... + 10C10 is
A: 1023.
Q: The value of 11C1 + 11C2 + ... + 11C11 is
A: 2047.
Q: The value of 12C1 + 12C2 + ... + 12C12 is
A: 4095.
@quiz
? The sum of all the binomial coefficients of (1 + x)^3 is
- 9.6
- 16
+ 8
- 12
! 2^n.
? The sum of the coefficients of even-indexed terms in (1 + x)^3 is
- 4.4
- 6
+ 4
- 3.2
! 2^(n - 1).
? The sum of all the binomial coefficients of (1 + x)^4 is
- 19.2
+ 16
- 14.4
- 12.8
! 2^n.
? The sum of the coefficients of even-indexed terms in (1 + x)^4 is
+ 8
- 16
- 4
- 9.6
! 2^(n - 1).
? The sum of all the binomial coefficients of (1 + x)^5 is
- 64
- 35.2
+ 32
- 16
! 2^n.
? The sum of the coefficients of even-indexed terms in (1 + x)^5 is
+ 16
- 8
- 12.8
- 24
! 2^(n - 1).
? The sum of all the binomial coefficients of (1 + x)^6 is
- 96
- 70.4
+ 64
- 51.2
! 2^n.
? The sum of the coefficients of even-indexed terms in (1 + x)^6 is
+ 32
- 28.8
- 48
- 25.6
! 2^(n - 1).
? The sum of all the binomial coefficients of (1 + x)^7 is
- 192
+ 128
- 153.6
- 64
! 2^n.
? The sum of the coefficients of even-indexed terms in (1 + x)^7 is
- 128
+ 64
- 70.4
- 32
! 2^(n - 1).
? The sum of all the binomial coefficients of (1 + x)^8 is
- 384
- 230.4
- 204.8
+ 256
! 2^n.
? The sum of the coefficients of even-indexed terms in (1 + x)^8 is
- 153.6
- 140.8
- 256
+ 128
! 2^(n - 1).
? The sum of all the binomial coefficients of (1 + x)^9 is
- 768
+ 512
- 460.8
- 256
! 2^n.
? The sum of the coefficients of even-indexed terms in (1 + x)^9 is
- 307.2
- 230.4
- 512
+ 256
! 2^(n - 1).
? The sum of all the binomial coefficients of (1 + x)^10 is
- 2048
+ 1024
- 1126.4
- 1536
! 2^n.
? The sum of the coefficients of even-indexed terms in (1 + x)^10 is
- 1024
- 256
+ 512
- 614.4
! 2^(n - 1).
? The coefficient of x^2 in (1 + x)^5 is
- 9
+ 10
- 11
- 15
! nCr.
? The coefficient of x^3 in (1 + x)^6 is
- 24
- 22
+ 20
- 18
! nCr.
? The coefficient of x^2 in (1 + x)^7 is
+ 21
- 10.5
- 42
- 25.2
! nCr.
? The coefficient of x^4 in (1 + x)^8 is
- 140
- 35
+ 70
- 84
! nCr.
? The coefficient of x^3 in (1 + x)^9 is
- 42
- 126
+ 84
- 75.6
! nCr.
? The coefficient of x^5 in (1 + x)^10 is
+ 252
- 226.8
- 201.6
- 277.2
! nCr.
? The coefficient of x^1 in (1 + x)^6 is
+ 6
- 7.2
- 5.4
- 6.6
! nCr.
? The coefficient of x^2 in (1 + x)^8 is
- 14
- 42
- 25.2
+ 28
! nCr.
? The coefficient of x^3 in (1 + x)^10 is
- 144
- 60
- 108
+ 120
! nCr.
? The coefficient of x^6 in (1 + x)^12 is
- 1108.8
- 462
- 1016.4
+ 924
! nCr.
? The coefficient of x^5 in (1 + x)^7 is
- 18.9
+ 21
- 25.2
- 23.1
! nCr.
? The coefficient of x^4 in (1 + x)^9 is
- 138.6
- 63
+ 126
- 113.4
! nCr.
? The coefficient of x^2 in (1 + 2x)^5 is
- 48
- 80
+ 40
- 36
! nC2 a^2.
? The coefficient of x^3 in (1 + 2x)^5 is
- 88
+ 80
- 96
- 64
! nC3 a^3.
? The coefficient of x^2 in (1 + 2x)^6 is
- 72
+ 60
- 120
- 66
! nC2 a^2.
? The coefficient of x^3 in (1 + 2x)^6 is
+ 160
- 240
- 144
- 176
! nC3 a^3.
? The coefficient of x^2 in (1 + 3x)^4 is
- 43.2
- 81
+ 54
- 48.6
! nC2 a^2.
? The coefficient of x^3 in (1 + 3x)^4 is
- 118.8
+ 108
- 97.2
- 54
! nC3 a^3.
? The coefficient of x^2 in (1 + 3x)^5 is
+ 90
- 45
- 72
- 180
! nC2 a^2.
? The coefficient of x^3 in (1 + 3x)^5 is
- 297
+ 270
- 135
- 405
! nC3 a^3.
? The coefficient of x^2 in (1 + 3x)^6 is
+ 135
- 162
- 202.5
- 148.5
! nC2 a^2.
? The coefficient of x^3 in (1 + 3x)^6 is
+ 540
- 486
- 594
- 270
! nC3 a^3.
? The coefficient of x^2 in (1 + 2x)^7 is
- 168
+ 84
- 67.2
- 75.6
! nC2 a^2.
? The coefficient of x^3 in (1 + 2x)^7 is
- 224
+ 280
- 420
- 560
! nC3 a^3.
? The coefficient of x^2 in (1 + 2x)^4 is
- 19.2
- 21.6
+ 24
- 26.4
! nC2 a^2.
? The coefficient of x^3 in (1 + 2x)^4 is
- 64
- 35.2
- 16
+ 32
! nC3 a^3.
? The coefficient of x^2 in (1 + 2x)^8 is
- 123.2
- 56
- 100.8
+ 112
! nC2 a^2.
? The coefficient of x^3 in (1 + 2x)^8 is
- 492.8
+ 448
- 896
- 537.6
! nC3 a^3.
? The middle term of (x + y)^4 has binomial coefficient
- 3
- 12
+ 6
- 5.4
! nC(n/2).
? The middle term of (x + y)^6 has binomial coefficient
+ 20
- 30
- 40
- 10
! nC(n/2).
? The middle term of (x + y)^8 has binomial coefficient
- 140
- 35
+ 70
- 84
! nC(n/2).
? The middle term of (x + y)^10 has binomial coefficient
+ 252
- 126
- 504
- 226.8
! nC(n/2).
? The middle term of (x + y)^12 has binomial coefficient
- 831.6
- 1848
+ 924
- 1386
! nC(n/2).
? The value of (2 + 1)^4 by binomial expansion is
- 121.5
+ 81
- 72.9
- 97.2
! Sum of terms.
? The value of (2 + 1)^5 by binomial expansion is
+ 243
- 121.5
- 486
- 364.5
! Sum of terms.
? The value of (1 + 1)^6 by binomial expansion is
- 51.2
- 57.6
+ 64
- 32
! Sum of terms.
? The value of (3 + 2)^5 by binomial expansion is
- 2500
+ 3125
- 3437.5
- 2812.5
! Sum of terms.
? The value of (3 + 1)^4 by binomial expansion is
+ 256
- 384
- 307.2
- 128
! Sum of terms.
? The value of (2 + 1)^6 by binomial expansion is
- 1458
+ 729
- 801.9
- 583.2
! Sum of terms.
? The value of (1 + 2)^7 by binomial expansion is
- 3280.5
- 1749.6
+ 2187
- 4374
! Sum of terms.
? The value of (1 + 1)^5 by binomial expansion is
- 38.4
- 35.2
- 16
+ 32
! Sum of terms.
? The term independent of x in (x + 1/x)^6
- 16
+ 20
- 18
- 22
! Power zero when r = n/2.
? The term independent of x in (x + 1/x)^8
- 105
- 84
- 77
+ 70
! Power zero when r = n/2.
? The term independent of x in (x + 1/x)^10
- 302.4
+ 252
- 277.2
- 201.6
! Power zero when r = n/2.
? Approximate value of 1.01^10 using 1 + n x (x = 0.01)
+ 1.1
- 0.99
- 1.32
- 1.65
! 1 + n x.
? Approximate value of 1.01^20 using 1 + n x (x = 0.01)
+ 1.2
- 1.08
- 1.8
- 0.6
! 1 + n x.
? Approximate value of 1.01^50 using 1 + n x (x = 0.01)
- 1.65
- 2.25
+ 1.5
- 1.8
! 1 + n x.
? Approximate value of 1.01^100 using 1 + n x (x = 0.01)
- 3
+ 2
- 1.6
- 2.4
! 1 + n x.
? The value of 5C1 + 5C2 + ... + 5C5 is
- 15.5
- 62
- 24.8
+ 31
! 2^n - 1.
? The value of 6C1 + 6C2 + ... + 6C6 is
- 126
- 50.4
- 94.5
+ 63
! 2^n - 1.
? The value of 7C1 + 7C2 + ... + 7C7 is
- 152.4
- 190.5
- 101.6
+ 127
! 2^n - 1.
? The value of 8C1 + 8C2 + ... + 8C8 is
- 280.5
- 306
- 382.5
+ 255
! 2^n - 1.
? The value of 9C1 + 9C2 + ... + 9C9 is
+ 511
- 613.2
- 1022
- 766.5
! 2^n - 1.
? The value of 10C1 + 10C2 + ... + 10C10 is
- 1227.6
+ 1023
- 1534.5
- 511.5
! 2^n - 1.
? The value of 11C1 + 11C2 + ... + 11C11 is
- 2251.7
- 4094
+ 2047
- 1842.3
! 2^n - 1.
? The value of 12C1 + 12C2 + ... + 12C12 is
- 8190
- 3276
- 3685.5
+ 4095
! 2^n - 1.
? The number of terms in (a + b)^10 is
+ 11
- 9
- 12
- 10
! n + 1.
? The coefficient of x^2 in (1 + x)^6 is
- 12
- 6
- 20
+ 15
! 6C2.
? Sum of coefficients of (2x + 3)^4 is
- 81
- 125
+ 625
- 256
! Put x = 1: 5^4.
? The general term of (a + b)^n is
- nCr a^n b^r
- nCr a^r b^r
+ nCr a^(n - r) b^r
- nPr a^(n - r) b^r
! Standard.
? C0 + C1 + ... + Cn =
+ 2^n
- n!
- n^2
- 2n
! Put x = 1.
? The middle term of (1 + x)^8 is
+ T5
- T6
- T9
- T4
! n/2 + 1.
? What is the general term of (a + b)^n?
- (n - r + 1) x / r
- The (n/2 + 1)th term
+ T(r+1) = nCr a^(n - r) b^r
- 2^(n - 1)
! Answer: T(r+1) = nCr a^(n - r) b^r.
? What is the sum of the binomial coefficients?
- 0
- (n - r + 1) x / r
- sum (-1)^r nCr x^r
+ 2^n
! Answer: 2^n.
? What is the sum of even-indexed coefficients?
+ 2^(n - 1)
- nC(n/2)
- 0
- T(r+1) = nCr a^(n - r) b^r
! Answer: 2^(n - 1).
? What is the middle term when n is even?
- Approximately 1 + n x
- 1 (term b^n)
- n 2^(n - 1)
+ The (n/2 + 1)th term
! Answer: The (n/2 + 1)th term.
? What is the greatest binomial coefficient when n is even?
- The (n/2 + 1)th term
- 2nCn
- Approximately 1 + n x
+ nC(n/2)
! Answer: nC(n/2).
? What is C0 - C1 + C2 - ... for n >= 1?
- (n - r + 1) x / r
- sum (-1)^r nCr x^r
+ 0
- 1 (term b^n)
! Answer: 0.
? What is the value of C0^2 + C1^2 + ... + Cn^2?
- nC(n/2)
- 1 (term b^n)
+ 2nCn
- The term in which the power of x is zero
! Answer: 2nCn.
? What is C1 + 2 C2 + ... + n Cn?
- nC(n/2)
+ n 2^(n - 1)
- Approximately 1 + n x
- The term in which the power of x is zero
! Answer: n 2^(n - 1).
? What is the expansion of (1 + x)^n for small x?
- The term in which the power of x is zero
+ Approximately 1 + n x
- The (n - r + 2)th term from the beginning
- T(r+1) = nCr a^(n - r) b^r
! Answer: Approximately 1 + n x.
? What is the term independent of x?
- 2^(n - 1)
+ The term in which the power of x is zero
- T(r+1) = nCr a^(n - r) b^r
- 0
! Answer: The term in which the power of x is zero.
? What is the r-th term from the end?
- T(r+1) = nCr a^(n - r) b^r
- n 2^(n - 1)
+ The (n - r + 2)th term from the beginning
- (n - r + 1) x / r
! Answer: The (n - r + 2)th term from the beginning.
? What is the expansion of (1 - x)^n?
+ sum (-1)^r nCr x^r
- nC(n/2)
- 1 (term b^n)
- n 2^(n - 1)
! Answer: sum (-1)^r nCr x^r.
? What is the coefficient of the last term of (a + b)^n?
- Approximately 1 + n x
- (n - r + 1) x / r
+ 1 (term b^n)
- sum (-1)^r nCr x^r
! Answer: 1 (term b^n).
? What is the ratio of consecutive coefficients T(r+1)/T(r) in (1 + x)^n?
- n 2^(n - 1)
- The (n - r + 2)th term from the beginning
+ (n - r + 1) x / r
- 2^(n - 1)
! Answer: (n - r + 1) x / r.
? Write the binomial coefficients of (1 + x)^3.
- 1, 9, 36, 84, 126, 126, 84, 36, 9, 1
+ 1, 3, 3, 1
- 1, 7, 21, 35, 35, 21, 7, 1
- 1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1
! Answer: 1, 3, 3, 1.
? Write the binomial coefficients of (1 + x)^4.
- 1, 7, 21, 35, 35, 21, 7, 1
+ 1, 4, 6, 4, 1
- 1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1
- 1, 8, 28, 56, 70, 56, 28, 8, 1
! Answer: 1, 4, 6, 4, 1.
? Write the binomial coefficients of (1 + x)^5.
- 1, 8, 28, 56, 70, 56, 28, 8, 1
+ 1, 5, 10, 10, 5, 1
- 1, 3, 3, 1
- 1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1
! Answer: 1, 5, 10, 10, 5, 1.
? Write the binomial coefficients of (1 + x)^6.
+ 1, 6, 15, 20, 15, 6, 1
- 1, 3, 3, 1
- 1, 5, 10, 10, 5, 1
- 1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1
! Answer: 1, 6, 15, 20, 15, 6, 1.
? Write the binomial coefficients of (1 + x)^7.
- 1, 6, 15, 20, 15, 6, 1
+ 1, 7, 21, 35, 35, 21, 7, 1
- 1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1
- 1, 5, 10, 10, 5, 1
! Answer: 1, 7, 21, 35, 35, 21, 7, 1.
? Write the binomial coefficients of (1 + x)^8.
- 1, 5, 10, 10, 5, 1
- 1, 9, 36, 84, 126, 126, 84, 36, 9, 1
- 1, 4, 6, 4, 1
+ 1, 8, 28, 56, 70, 56, 28, 8, 1
! Answer: 1, 8, 28, 56, 70, 56, 28, 8, 1.
? Write the binomial coefficients of (1 + x)^9.
+ 1, 9, 36, 84, 126, 126, 84, 36, 9, 1
- 1, 5, 10, 10, 5, 1
- 1, 4, 6, 4, 1
- 1, 3, 3, 1
! Answer: 1, 9, 36, 84, 126, 126, 84, 36, 9, 1.
? Write the binomial coefficients of (1 + x)^10.
- 1, 9, 36, 84, 126, 126, 84, 36, 9, 1
- 1, 7, 21, 35, 35, 21, 7, 1
+ 1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1
- 1, 8, 28, 56, 70, 56, 28, 8, 1
! Answer: 1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1.
@visual
formula | Binomial theorem (JEE Main) | key formula
@problems
P: Find the 3rd term of (1 + x)^5.
A: 10x^2.
R: 1 | T3 = 5C2 x^2
R: 1 | 10x^2
