# Sequences and series (JEE Main)
minutes: 50
yt: jee main sequences and series
@study
AP: a_n = a + (n - 1) d, S_n = (n/2)(2a + (n - 1) d). GP: a_n = a r^(n - 1), S_n = a (r^n - 1)/(r - 1), S_infinity = a/(1 - r) for |r| < 1. HP: reciprocals form an AP. AM >= GM >= HM, with AM = (a + b)/2, GM = sqrt(ab), HM = 2ab/(a + b).
## Deep dive: arithmetic progression
An AP has a constant common difference d: a, a + d, a + 2d, ... The n-th term a_n = a + (n - 1) d and the sum of n terms S_n = (n/2)(2a + (n - 1) d) = (n/2)(a + l) where l is the last term. If three numbers are in AP, take them as a - d, a, a + d; four as a - 3d, a - d, a + d, a + 3d. The n-th term in terms of the sum: a_n = S_n - S_(n - 1). Arithmetic mean of a and b: (a + b)/2; n arithmetic means between a and b have common difference (b - a)/(n + 1). Useful sums: sum of the first n natural numbers n(n + 1)/2, squares n(n + 1)(2n + 1)/6, cubes [n(n + 1)/2]^2.
## Deep dive: geometric and harmonic progressions
GP: a, ar, ar^2, ...; a_n = a r^(n - 1); S_n = a (r^n - 1)/(r - 1) (r != 1); S_infinity = a/(1 - r) when |r| < 1. Three numbers in GP: a/r, a, ar. n geometric means between a and b have common ratio (b/a)^(1/(n + 1)); their product is (ab)^(n/2). HP: a sequence whose reciprocals are in AP; its n-th term is 1/(a + (n - 1) d). For two numbers a and b: AM = (a + b)/2, GM = sqrt (ab), HM = 2ab/(a + b), with AM >= GM >= HM and GM^2 = AM x HM; equality holds only when a = b.
## Deep dive: special series and AM-GM applications
Arithmetico-geometric series: a, (a + d) r, (a + 2d) r^2, ... summed by multiplying by r and subtracting. Method of differences for series like 1 + 3 + 7 + 13 + ...: take the successive differences. Telescoping: 1/(k (k + 1)) = 1/k - 1/(k + 1). AM-GM inequality: for positive x1, ..., xn the arithmetic mean is at least the geometric mean; used to maximise or minimise expressions with a fixed sum or product. Example: the minimum of x + 1/x for x > 0 is 2 (at x = 1).
## Hindi saransh
AP: S_n = n/2 (2a + (n-1)d). GP: S_inf = a/(1 - r). AM >= GM >= HM.
> For two numbers, AM x HM = GM^2.
@formulas
## AP
General term | a_n = a + (n - 1) d | 
Sum | S_n = (n/2)(2a + (n - 1) d) | 
Sum with last term | S_n = (n/2)(a + l) | 
Term from sum | a_n = S_n - S_(n - 1) | 
n AMs between a and b | d = (b - a)/(n + 1) | 
## GP
General term | a_n = a r^(n - 1) | 
Sum | S_n = a (r^n - 1)/(r - 1) | r not 1
Infinite sum | S_inf = a/(1 - r) | |r| < 1
n GMs between a and b | r = (b/a)^(1/(n + 1)) | 
## Means
AM | (a + b)/2 | 
GM | sqrt (ab) | 
HM | 2ab/(a + b) | 
Relation | AM >= GM >= HM, GM^2 = AM x HM | 
## Special sums
Sum of natural numbers | n(n + 1)/2 | 
Sum of squares | n(n + 1)(2n + 1)/6 | 
Sum of cubes | [n(n + 1)/2]^2 | 
Telescoping | 1/(k (k + 1)) = 1/k - 1/(k + 1) | 

@qa
Q: What is an arithmetic progression?
A: A sequence with a constant difference between consecutive terms.
Q: What is the n-th term of an AP?
A: a + (n - 1) d.
Q: What is the sum of n terms of an AP?
A: (n/2)(2a + (n - 1) d).
Q: What is a geometric progression?
A: A sequence with a constant ratio between consecutive terms.
Q: What is the n-th term of a GP?
A: a r^(n - 1).
Q: What is the sum of n terms of a GP?
A: a (r^n - 1)/(r - 1).
Q: When does a GP have an infinite sum?
A: When |r| < 1.
Q: What is the sum of an infinite GP?
A: a/(1 - r).
Q: What is a harmonic progression?
A: A sequence whose reciprocals form an AP.
Q: State the AM-GM-HM inequality.
A: AM >= GM >= HM for positive numbers.
Q: What is the relation between AM, GM and HM of two numbers?
A: GM^2 = AM x HM.
Q: How should three numbers in AP be taken?
A: a - d, a, a + d.
Q: How should three numbers in GP be taken?
A: a/r, a, ar.
Q: What is the sum of the first n natural numbers?
A: n(n + 1)/2.
Q: What is the sum of the squares of the first n natural numbers?
A: n(n + 1)(2n + 1)/6.
Q: What is the sum of the cubes of the first n natural numbers?
A: [n(n + 1)/2]^2.
Q: What is the arithmetic mean of a and b?
A: (a + b)/2.
Q: What is the geometric mean of a and b?
A: sqrt (ab).
Q: What is the harmonic mean of a and b?
A: 2ab/(a + b).
Q: When is AM equal to GM?
A: When all the numbers are equal.
Q: The 10th term of the AP with first term 2 and common difference 3 is
A: 29.
Q: The sum of the first 10 terms of the AP with first term 2 and common difference 3 is
A: 155.
Q: The 12th term of the AP with first term 5 and common difference 2 is
A: 27.
Q: The sum of the first 12 terms of the AP with first term 5 and common difference 2 is
A: 192.
Q: The 20th term of the AP with first term 1 and common difference 1 is
A: 20.
Q: The sum of the first 20 terms of the AP with first term 1 and common difference 1 is
A: 210.
Q: The 8th term of the AP with first term 10 and common difference -2 is
A: -4.
Q: The sum of the first 8 terms of the AP with first term 10 and common difference -2 is
A: 24.
Q: The 15th term of the AP with first term 3 and common difference 5 is
A: 73.
Q: The sum of the first 15 terms of the AP with first term 3 and common difference 5 is
A: 570.
Q: The 9th term of the AP with first term 7 and common difference 4 is
A: 39.
Q: The sum of the first 9 terms of the AP with first term 7 and common difference 4 is
A: 207.
Q: The 11th term of the AP with first term 4 and common difference 6 is
A: 64.
Q: The sum of the first 11 terms of the AP with first term 4 and common difference 6 is
A: 374.
Q: The 7th term of the AP with first term 20 and common difference -3 is
A: 2.
Q: The sum of the first 7 terms of the AP with first term 20 and common difference -3 is
A: 77.
Q: The 25th term of the AP with first term 1 and common difference 2 is
A: 49.
Q: The sum of the first 25 terms of the AP with first term 1 and common difference 2 is
A: 625.
Q: The 6th term of the AP with first term 0 and common difference 5 is
A: 25.
Q: The sum of the first 6 terms of the AP with first term 0 and common difference 5 is
A: 75.
Q: The 14th term of the AP with first term 8 and common difference 3 is
A: 47.
Q: The sum of the first 14 terms of the AP with first term 8 and common difference 3 is
A: 385.
Q: The 10th term of the AP with first term 6 and common difference 7 is
A: 69.
Q: The sum of the first 10 terms of the AP with first term 6 and common difference 7 is
A: 375.
Q: The 8th term of the GP with first term 2 and ratio 2 is
A: 256.
Q: The sum of the first 8 terms of the GP with first term 2 and ratio 2 is
A: 510.
Q: The 6th term of the GP with first term 3 and ratio 2 is
A: 96.
Q: The sum of the first 6 terms of the GP with first term 3 and ratio 2 is
A: 189.
Q: The 5th term of the GP with first term 1 and ratio 3 is
A: 81.
Q: The sum of the first 5 terms of the GP with first term 1 and ratio 3 is
A: 121.
Q: The 7th term of the GP with first term 5 and ratio 2 is
A: 320.
Q: The sum of the first 7 terms of the GP with first term 5 and ratio 2 is
A: 635.
Q: The 6th term of the GP with first term 2 and ratio 3 is
A: 486.
Q: The sum of the first 6 terms of the GP with first term 2 and ratio 3 is
A: 728.
Q: The 10th term of the GP with first term 1 and ratio 2 is
A: 512.
Q: The sum of the first 10 terms of the GP with first term 1 and ratio 2 is
A: 1023.
Q: The 5th term of the GP with first term 4 and ratio 2 is
A: 64.
Q: The sum of the first 5 terms of the GP with first term 4 and ratio 2 is
A: 124.
Q: The 6th term of the GP with first term 6 and ratio 2 is
A: 192.
Q: The sum of the first 6 terms of the GP with first term 6 and ratio 2 is
A: 378.
Q: The 5th term of the GP with first term 3 and ratio 3 is
A: 243.
Q: The sum of the first 5 terms of the GP with first term 3 and ratio 3 is
A: 363.
Q: The 4th term of the GP with first term 1 and ratio 5 is
A: 125.
Q: The sum of the first 4 terms of the GP with first term 1 and ratio 5 is
A: 156.
Q: The sum to infinity of the GP with first term 1 and ratio 1/2 is
A: 2.
Q: The sum to infinity of the GP with first term 2 and ratio 1/3 is
A: 3.
Q: The sum to infinity of the GP with first term 3 and ratio 1/2 is
A: 6.
Q: The sum to infinity of the GP with first term 6 and ratio 1/3 is
A: 9.
Q: The sum to infinity of the GP with first term 1 and ratio 1/4 is
A: 1.33.
Q: The sum to infinity of the GP with first term 4 and ratio 1/2 is
A: 8.
Q: The sum to infinity of the GP with first term 5 and ratio 2/3 is
A: 15.
Q: The sum to infinity of the GP with first term 9 and ratio 1/3 is
A: 13.5.
Q: The sum to infinity of the GP with first term 8 and ratio 3/4 is
A: 32.
Q: The sum to infinity of the GP with first term 10 and ratio 1/5 is
A: 12.5.
Q: The sum of the first 5 natural numbers is
A: 15.
Q: The sum of the squares of the first 5 natural numbers is
A: 55.
Q: The sum of the cubes of the first 5 natural numbers is
A: 225.
Q: The sum of the first 8 natural numbers is
A: 36.
Q: The sum of the squares of the first 8 natural numbers is
A: 204.
Q: The sum of the cubes of the first 8 natural numbers is
A: 1296.
Q: The sum of the first 10 natural numbers is
A: 55.
Q: The sum of the squares of the first 10 natural numbers is
A: 385.
Q: The sum of the cubes of the first 10 natural numbers is
A: 3025.
Q: The sum of the first 12 natural numbers is
A: 78.
Q: The sum of the squares of the first 12 natural numbers is
A: 650.
Q: The sum of the cubes of the first 12 natural numbers is
A: 6084.
Q: The sum of the first 15 natural numbers is
A: 120.
Q: The sum of the squares of the first 15 natural numbers is
A: 1240.
Q: The sum of the cubes of the first 15 natural numbers is
A: 14400.
Q: The sum of the first 20 natural numbers is
A: 210.
Q: The sum of the squares of the first 20 natural numbers is
A: 2870.
Q: The sum of the cubes of the first 20 natural numbers is
A: 44100.
Q: The sum of the first 25 natural numbers is
A: 325.
Q: The sum of the squares of the first 25 natural numbers is
A: 5525.
Q: The sum of the cubes of the first 25 natural numbers is
A: 105625.
Q: The sum of the first 50 natural numbers is
A: 1275.
Q: The sum of the squares of the first 50 natural numbers is
A: 42925.
Q: The sum of the cubes of the first 50 natural numbers is
A: 1625625.
Q: The sum of the first 100 natural numbers is
A: 5050.
Q: The sum of the squares of the first 100 natural numbers is
A: 338350.
Q: The sum of the cubes of the first 100 natural numbers is
A: 25502500.
Q: The GM of 4 and 9 is
A: 6.
Q: The AM of 4 and 9 is
A: 6.5.
Q: The HM of 4 and 9 is
A: 5.54.
Q: The GM of 2 and 8 is
A: 4.
Q: The AM of 2 and 8 is
A: 5.
Q: The HM of 2 and 8 is
A: 3.2.
Q: The GM of 3 and 12 is
A: 6.
Q: The AM of 3 and 12 is
A: 7.5.
Q: The HM of 3 and 12 is
A: 4.8.
Q: The GM of 1 and 16 is
A: 4.
Q: The AM of 1 and 16 is
A: 8.5.
Q: The HM of 1 and 16 is
A: 1.88.
Q: The GM of 5 and 20 is
A: 10.
Q: The AM of 5 and 20 is
A: 12.5.
Q: The HM of 5 and 20 is
A: 8.
Q: The GM of 6 and 24 is
A: 12.
Q: The AM of 6 and 24 is
A: 15.
Q: The HM of 6 and 24 is
A: 9.6.
Q: The GM of 2 and 32 is
A: 8.
Q: The AM of 2 and 32 is
A: 17.
Q: The HM of 2 and 32 is
A: 3.76.
Q: The GM of 8 and 18 is
A: 12.
Q: The AM of 8 and 18 is
A: 13.
Q: The HM of 8 and 18 is
A: 11.08.
Q: The common difference when 3 arithmetic means are inserted between 2 and 32 is
A: 7.5.
Q: The common difference when 5 arithmetic means are inserted between 1 and 13 is
A: 2.
Q: The common difference when 4 arithmetic means are inserted between 3 and 27 is
A: 4.8.
Q: The common difference when 4 arithmetic means are inserted between 4 and 24 is
A: 4.
Q: The common difference when 6 arithmetic means are inserted between 5 and 35 is
A: 4.29.
Q: The common difference when 2 arithmetic means are inserted between 10 and 40 is
A: 10.
Q: The common difference when 3 arithmetic means are inserted between 7 and 31 is
A: 6.
Q: The common difference when 7 arithmetic means are inserted between 2 and 50 is
A: 6.
Q: The sum 1/(1x2) + 1/(2x3) + ... + 1/(3x4) is (as a decimal)
A: 0.75.
Q: The sum 1/(1x2) + 1/(2x3) + ... + 1/(4x5) is (as a decimal)
A: 0.8.
Q: The sum 1/(1x2) + 1/(2x3) + ... + 1/(5x6) is (as a decimal)
A: 0.83.
Q: The sum 1/(1x2) + 1/(2x3) + ... + 1/(6x7) is (as a decimal)
A: 0.86.
Q: The sum 1/(1x2) + 1/(2x3) + ... + 1/(7x8) is (as a decimal)
A: 0.88.
Q: The sum 1/(1x2) + 1/(2x3) + ... + 1/(8x9) is (as a decimal)
A: 0.89.
Q: The sum 1/(1x2) + 1/(2x3) + ... + 1/(9x10) is (as a decimal)
A: 0.9.
Q: The sum 1/(1x2) + 1/(2x3) + ... + 1/(10x11) is (as a decimal)
A: 0.91.
@quiz
? The 10th term of the AP with first term 2 and common difference 3 is
- 14.5
- 23.2
- 34.8
+ 29
! a + (n - 1) d.
? The sum of the first 10 terms of the AP with first term 2 and common difference 3 is
+ 155
- 77.5
- 139.5
- 186
! (n/2)(2a + (n - 1) d).
? The 12th term of the AP with first term 5 and common difference 2 is
+ 27
- 54
- 13.5
- 32.4
! a + (n - 1) d.
? The sum of the first 12 terms of the AP with first term 5 and common difference 2 is
- 288
- 96
+ 192
- 384
! (n/2)(2a + (n - 1) d).
? The 20th term of the AP with first term 1 and common difference 1 is
- 40
- 16
- 30
+ 20
! a + (n - 1) d.
? The sum of the first 20 terms of the AP with first term 1 and common difference 1 is
- 231
- 420
+ 210
- 189
! (n/2)(2a + (n - 1) d).
? The 8th term of the AP with first term 10 and common difference -2 is
- -3.2
- -6
- -4.4
+ -4
! a + (n - 1) d.
? The sum of the first 8 terms of the AP with first term 10 and common difference -2 is
- 12
- 48
+ 24
- 26.4
! (n/2)(2a + (n - 1) d).
? The 15th term of the AP with first term 3 and common difference 5 is
- 87.6
+ 73
- 80.3
- 146
! a + (n - 1) d.
? The sum of the first 15 terms of the AP with first term 3 and common difference 5 is
- 627
- 456
+ 570
- 684
! (n/2)(2a + (n - 1) d).
? The 9th term of the AP with first term 7 and common difference 4 is
+ 39
- 58.5
- 46.8
- 31.2
! a + (n - 1) d.
? The sum of the first 9 terms of the AP with first term 7 and common difference 4 is
- 227.7
+ 207
- 310.5
- 103.5
! (n/2)(2a + (n - 1) d).
? The 11th term of the AP with first term 4 and common difference 6 is
- 70.4
- 76.8
- 128
+ 64
! a + (n - 1) d.
? The sum of the first 11 terms of the AP with first term 4 and common difference 6 is
+ 374
- 561
- 187
- 748
! (n/2)(2a + (n - 1) d).
? The 7th term of the AP with first term 20 and common difference -3 is
- 3
- 2.2
- 1.8
+ 2
! a + (n - 1) d.
? The sum of the first 7 terms of the AP with first term 20 and common difference -3 is
- 84.7
- 92.4
+ 77
- 115.5
! (n/2)(2a + (n - 1) d).
? The 25th term of the AP with first term 1 and common difference 2 is
+ 49
- 73.5
- 24.5
- 44.1
! a + (n - 1) d.
? The sum of the first 25 terms of the AP with first term 1 and common difference 2 is
- 687.5
- 750
- 1250
+ 625
! (n/2)(2a + (n - 1) d).
? The 6th term of the AP with first term 0 and common difference 5 is
- 37.5
- 50
- 12.5
+ 25
! a + (n - 1) d.
? The sum of the first 6 terms of the AP with first term 0 and common difference 5 is
- 37.5
- 90
+ 75
- 82.5
! (n/2)(2a + (n - 1) d).
? The 14th term of the AP with first term 8 and common difference 3 is
- 56.4
- 23.5
+ 47
- 94
! a + (n - 1) d.
? The sum of the first 14 terms of the AP with first term 8 and common difference 3 is
- 462
+ 385
- 346.5
- 423.5
! (n/2)(2a + (n - 1) d).
? The 10th term of the AP with first term 6 and common difference 7 is
+ 69
- 62.1
- 138
- 103.5
! a + (n - 1) d.
? The sum of the first 10 terms of the AP with first term 6 and common difference 7 is
- 412.5
+ 375
- 300
- 450
! (n/2)(2a + (n - 1) d).
? The 8th term of the GP with first term 2 and ratio 2 is
- 281.6
+ 256
- 230.4
- 204.8
! a r^(n - 1).
? The sum of the first 8 terms of the GP with first term 2 and ratio 2 is
- 561
- 408
- 612
+ 510
! a (r^n - 1)/(r - 1).
? The 6th term of the GP with first term 3 and ratio 2 is
- 115.2
- 48
+ 96
- 86.4
! a r^(n - 1).
? The sum of the first 6 terms of the GP with first term 3 and ratio 2 is
- 283.5
- 170.1
- 207.9
+ 189
! a (r^n - 1)/(r - 1).
? The 5th term of the GP with first term 1 and ratio 3 is
+ 81
- 89.1
- 72.9
- 40.5
! a r^(n - 1).
? The sum of the first 5 terms of the GP with first term 1 and ratio 3 is
+ 121
- 145.2
- 60.5
- 96.8
! a (r^n - 1)/(r - 1).
? The 7th term of the GP with first term 5 and ratio 2 is
- 640
- 352
- 384
+ 320
! a r^(n - 1).
? The sum of the first 7 terms of the GP with first term 5 and ratio 2 is
- 698.5
+ 635
- 508
- 762
! a (r^n - 1)/(r - 1).
? The 6th term of the GP with first term 2 and ratio 3 is
- 388.8
- 583.2
- 972
+ 486
! a r^(n - 1).
? The sum of the first 6 terms of the GP with first term 2 and ratio 3 is
- 1456
- 655.2
- 1092
+ 728
! a (r^n - 1)/(r - 1).
? The 10th term of the GP with first term 1 and ratio 2 is
+ 512
- 614.4
- 256
- 768
! a r^(n - 1).
? The sum of the first 10 terms of the GP with first term 1 and ratio 2 is
- 1534.5
+ 1023
- 1125.3
- 2046
! a (r^n - 1)/(r - 1).
? The 5th term of the GP with first term 4 and ratio 2 is
- 57.6
- 128
- 51.2
+ 64
! a r^(n - 1).
? The sum of the first 5 terms of the GP with first term 4 and ratio 2 is
- 148.8
- 186
- 99.2
+ 124
! a (r^n - 1)/(r - 1).
? The 6th term of the GP with first term 6 and ratio 2 is
+ 192
- 288
- 96
- 153.6
! a r^(n - 1).
? The sum of the first 6 terms of the GP with first term 6 and ratio 2 is
+ 378
- 189
- 756
- 453.6
! a (r^n - 1)/(r - 1).
? The 5th term of the GP with first term 3 and ratio 3 is
- 291.6
- 121.5
+ 243
- 364.5
! a r^(n - 1).
? The sum of the first 5 terms of the GP with first term 3 and ratio 3 is
- 326.7
+ 363
- 726
- 181.5
! a (r^n - 1)/(r - 1).
? The 4th term of the GP with first term 1 and ratio 5 is
- 187.5
+ 125
- 100
- 62.5
! a r^(n - 1).
? The sum of the first 4 terms of the GP with first term 1 and ratio 5 is
+ 156
- 140.4
- 234
- 187.2
! a (r^n - 1)/(r - 1).
? The sum to infinity of the GP with first term 1 and ratio 1/2 is
- 4
+ 2
- 1.8
- 2.2
! a/(1 - r).
? The sum to infinity of the GP with first term 2 and ratio 1/3 is
- 3.3
- 2.7
- 4.5
+ 3
! a/(1 - r).
? The sum to infinity of the GP with first term 3 and ratio 1/2 is
- 5.4
- 6.6
- 4.8
+ 6
! a/(1 - r).
? The sum to infinity of the GP with first term 6 and ratio 1/3 is
+ 9
- 7.2
- 4.5
- 9.9
! a/(1 - r).
? The sum to infinity of the GP with first term 1 and ratio 1/4 is
- 1.07
- 1.6
- 1.2
+ 1.33
! a/(1 - r).
? The sum to infinity of the GP with first term 4 and ratio 1/2 is
+ 8
- 9.6
- 4
- 8.8
! a/(1 - r).
? The sum to infinity of the GP with first term 5 and ratio 2/3 is
+ 15
- 12
- 22.5
- 7.5
! a/(1 - r).
? The sum to infinity of the GP with first term 9 and ratio 1/3 is
- 27
+ 13.5
- 12.15
- 16.2
! a/(1 - r).
? The sum to infinity of the GP with first term 8 and ratio 3/4 is
- 48
+ 32
- 25.6
- 64
! a/(1 - r).
? The sum to infinity of the GP with first term 10 and ratio 1/5 is
- 25
- 13.75
+ 12.5
- 6.25
! a/(1 - r).
? The sum of the first 5 natural numbers is
- 30
+ 15
- 18
- 16.5
! n(n + 1)/2.
? The sum of the squares of the first 5 natural numbers is
+ 55
- 110
- 49.5
- 27.5
! n(n + 1)(2n + 1)/6.
? The sum of the cubes of the first 5 natural numbers is
- 337.5
- 270
+ 225
- 180
! [n(n + 1)/2]^2.
? The sum of the first 8 natural numbers is
- 32.4
+ 36
- 43.2
- 28.8
! n(n + 1)/2.
? The sum of the squares of the first 8 natural numbers is
+ 204
- 408
- 306
- 102
! n(n + 1)(2n + 1)/6.
? The sum of the cubes of the first 8 natural numbers is
- 1036.8
- 1166.4
+ 1296
- 1944
! [n(n + 1)/2]^2.
? The sum of the first 10 natural numbers is
- 60.5
- 110
+ 55
- 27.5
! n(n + 1)/2.
? The sum of the squares of the first 10 natural numbers is
- 577.5
+ 385
- 462
- 346.5
! n(n + 1)(2n + 1)/6.
? The sum of the cubes of the first 10 natural numbers is
+ 3025
- 4537.5
- 2722.5
- 3327.5
! [n(n + 1)/2]^2.
? The sum of the first 12 natural numbers is
+ 78
- 70.2
- 39
- 62.4
! n(n + 1)/2.
? The sum of the squares of the first 12 natural numbers is
- 715
+ 650
- 780
- 585
! n(n + 1)(2n + 1)/6.
? The sum of the cubes of the first 12 natural numbers is
- 4867.2
+ 6084
- 9126
- 5475.6
! [n(n + 1)/2]^2.
? The sum of the first 15 natural numbers is
- 180
+ 120
- 60
- 144
! n(n + 1)/2.
? The sum of the squares of the first 15 natural numbers is
- 2480
- 1364
- 1488
+ 1240
! n(n + 1)(2n + 1)/6.
? The sum of the cubes of the first 15 natural numbers is
+ 14400
- 7200
- 21600
- 11520
! [n(n + 1)/2]^2.
? The sum of the first 20 natural numbers is
- 105
+ 210
- 168
- 231
! n(n + 1)/2.
? The sum of the squares of the first 20 natural numbers is
- 4305
- 5740
+ 2870
- 2583
! n(n + 1)(2n + 1)/6.
? The sum of the cubes of the first 20 natural numbers is
- 35280
- 52920
- 66150
+ 44100
! [n(n + 1)/2]^2.
? The sum of the first 25 natural numbers is
- 650
+ 325
- 390
- 260
! n(n + 1)/2.
? The sum of the squares of the first 25 natural numbers is
- 2762.5
+ 5525
- 8287.5
- 6630
! n(n + 1)(2n + 1)/6.
? The sum of the cubes of the first 25 natural numbers is
- 211250
+ 105625
- 95062.5
- 84500
! [n(n + 1)/2]^2.
? The sum of the first 50 natural numbers is
- 1147.5
- 1530
+ 1275
- 1912.5
! n(n + 1)/2.
? The sum of the squares of the first 50 natural numbers is
- 85850
- 34340
- 38632.5
+ 42925
! n(n + 1)(2n + 1)/6.
? The sum of the cubes of the first 50 natural numbers is
- 1300500
+ 1625625
- 1788187.5
- 1950750
! [n(n + 1)/2]^2.
? The sum of the first 100 natural numbers is
+ 5050
- 2525
- 7575
- 4040
! n(n + 1)/2.
? The sum of the squares of the first 100 natural numbers is
+ 338350
- 406020
- 372185
- 270680
! n(n + 1)(2n + 1)/6.
? The sum of the cubes of the first 100 natural numbers is
- 22952250
- 30603000
+ 25502500
- 20402000
! [n(n + 1)/2]^2.
? The GM of 4 and 9 is
+ 6
- 5.4
- 3
- 6.6
! sqrt (ab).
? The AM of 4 and 9 is
- 7.15
- 3.25
- 5.2
+ 6.5
! (a + b)/2.
? The HM of 4 and 9 is
- 4.98
- 8.31
+ 5.54
- 2.77
! 2ab/(a + b).
? The GM of 2 and 8 is
- 8
- 6
+ 4
- 3.2
! sqrt (ab).
? The AM of 2 and 8 is
- 4
+ 5
- 6
- 2.5
! (a + b)/2.
? The HM of 2 and 8 is
- 6.4
- 3.84
- 3.52
+ 3.2
! 2ab/(a + b).
? The GM of 3 and 12 is
- 4.8
- 9
- 6.6
+ 6
! sqrt (ab).
? The AM of 3 and 12 is
- 9
- 8.25
- 6
+ 7.5
! (a + b)/2.
? The HM of 3 and 12 is
+ 4.8
- 3.84
- 5.28
- 5.76
! 2ab/(a + b).
? The GM of 1 and 16 is
- 4.4
+ 4
- 6
- 3.6
! sqrt (ab).
? The AM of 1 and 16 is
- 10.2
- 9.35
+ 8.5
- 12.75
! (a + b)/2.
? The HM of 1 and 16 is
- 3.76
- 1.51
- 0.94
+ 1.88
! 2ab/(a + b).
? The GM of 5 and 20 is
- 5
+ 10
- 20
- 9
! sqrt (ab).
? The AM of 5 and 20 is
- 15
- 13.75
- 6.25
+ 12.5
! (a + b)/2.
? The HM of 5 and 20 is
- 9.6
+ 8
- 8.8
- 6.4
! 2ab/(a + b).
? The GM of 6 and 24 is
- 13.2
+ 12
- 24
- 14.4
! sqrt (ab).
? The AM of 6 and 24 is
- 22.5
- 12
- 18
+ 15
! (a + b)/2.
? The HM of 6 and 24 is
- 11.52
+ 9.6
- 14.4
- 4.8
! 2ab/(a + b).
? The GM of 2 and 32 is
- 12
- 7.2
- 8.8
+ 8
! sqrt (ab).
? The AM of 2 and 32 is
+ 17
- 18.7
- 13.6
- 34
! (a + b)/2.
? The HM of 2 and 32 is
+ 3.76
- 5.65
- 1.88
- 3.39
! 2ab/(a + b).
? The GM of 8 and 18 is
- 24
- 9.6
+ 12
- 13.2
! sqrt (ab).
? The AM of 8 and 18 is
- 6.5
- 10.4
+ 13
- 15.6
! (a + b)/2.
? The HM of 8 and 18 is
+ 11.08
- 8.86
- 16.62
- 5.54
! 2ab/(a + b).
? The common difference when 3 arithmetic means are inserted between 2 and 32 is
- 3.75
+ 7.5
- 9
- 6.75
! (b - a)/(n + 1).
? The common difference when 5 arithmetic means are inserted between 1 and 13 is
- 2.2
+ 2
- 1
- 1.6
! (b - a)/(n + 1).
? The common difference when 4 arithmetic means are inserted between 3 and 27 is
- 9.6
+ 4.8
- 5.76
- 7.2
! (b - a)/(n + 1).
? The common difference when 4 arithmetic means are inserted between 4 and 24 is
+ 4
- 4.8
- 6
- 2
! (b - a)/(n + 1).
? The common difference when 6 arithmetic means are inserted between 5 and 35 is
+ 4.29
- 3.86
- 2.14
- 5.14
! (b - a)/(n + 1).
? The common difference when 2 arithmetic means are inserted between 10 and 40 is
- 20
- 15
+ 10
- 11
! (b - a)/(n + 1).
? The common difference when 3 arithmetic means are inserted between 7 and 31 is
- 9
- 5.4
+ 6
- 6.6
! (b - a)/(n + 1).
? The common difference when 7 arithmetic means are inserted between 2 and 50 is
- 6.6
+ 6
- 12
- 4.8
! (b - a)/(n + 1).
? The sum 1/(1x2) + 1/(2x3) + ... + 1/(3x4) is (as a decimal)
- 0.82
+ 0.75
- 0.68
- 1.5
! Telescoping: n/(n + 1).
? The sum 1/(1x2) + 1/(2x3) + ... + 1/(4x5) is (as a decimal)
- 1.2
- 0.96
- 0.72
+ 0.8
! Telescoping: n/(n + 1).
? The sum 1/(1x2) + 1/(2x3) + ... + 1/(5x6) is (as a decimal)
- 1.67
+ 0.83
- 0.92
- 0.42
! Telescoping: n/(n + 1).
? The sum 1/(1x2) + 1/(2x3) + ... + 1/(6x7) is (as a decimal)
- 1.29
- 1.71
+ 0.86
- 0.43
! Telescoping: n/(n + 1).
? The sum 1/(1x2) + 1/(2x3) + ... + 1/(7x8) is (as a decimal)
+ 0.88
- 1.05
- 0.79
- 0.96
! Telescoping: n/(n + 1).
? The sum 1/(1x2) + 1/(2x3) + ... + 1/(8x9) is (as a decimal)
- 1.78
+ 0.89
- 0.44
- 0.8
! Telescoping: n/(n + 1).
? The sum 1/(1x2) + 1/(2x3) + ... + 1/(9x10) is (as a decimal)
- 0.81
- 0.99
- 1.8
+ 0.9
! Telescoping: n/(n + 1).
? The sum 1/(1x2) + 1/(2x3) + ... + 1/(10x11) is (as a decimal)
- 0.45
+ 0.91
- 1.36
- 1
! Telescoping: n/(n + 1).
? The sum of an infinite GP needs
+ |r| < 1
- r = 0 only
- r = 1
- r > 1
! Convergence.
? AM >= GM holds for
+ positive numbers
- negative numbers only
- all real numbers
- integers only
! Condition.
? The minimum of x + 1/x for x > 0 is
- 0
+ 2
- 1
- 4
! AM-GM.
? In an HP, reciprocals form
+ an AP
- an HP
- a GP
- a constant sequence
! Definition.
? Three terms in AP can be taken as
- a, a + d, a + 2d only
- a - 1, a, a + 1 only
- a/d, a, ad
+ a - d, a, a + d
! Symmetric choice.
? S_n for an AP is
- a r^n
+ (n/2)(2a + (n - 1) d)
- n (n + 1)
- n (a + d)
! Standard.
? What is the n-th term of an AP?
+ a + (n - 1) d
- GM^2 = AM x HM
- (n/2)(2a + (n - 1) d)
- a/(1 - r)
! Answer: a + (n - 1) d.
? What is the sum of n terms of an AP?
- a + (n - 1) d
+ (n/2)(2a + (n - 1) d)
- n(n + 1)(2n + 1)/6
- sqrt (ab)
! Answer: (n/2)(2a + (n - 1) d).
? What is a geometric progression?
- A sequence whose reciprocals form an AP
- A sequence with a constant difference between consecutive terms
+ A sequence with a constant ratio between consecutive terms
- a (r^n - 1)/(r - 1)
! Answer: A sequence with a constant ratio between consecutive terms.
? What is the n-th term of a GP?
+ a r^(n - 1)
- n(n + 1)(2n + 1)/6
- [n(n + 1)/2]^2
- 2ab/(a + b)
! Answer: a r^(n - 1).
? What is the sum of n terms of a GP?
- n(n + 1)/2
- (a + b)/2
+ a (r^n - 1)/(r - 1)
- a + (n - 1) d
! Answer: a (r^n - 1)/(r - 1).
? What is the sum of an infinite GP?
+ a/(1 - r)
- a + (n - 1) d
- sqrt (ab)
- GM^2 = AM x HM
! Answer: a/(1 - r).
? What is a harmonic progression?
- sqrt (ab)
- [n(n + 1)/2]^2
- a + (n - 1) d
+ A sequence whose reciprocals form an AP
! Answer: A sequence whose reciprocals form an AP.
? What is the relation between AM, GM and HM of two numbers?
- a/(1 - r)
- [n(n + 1)/2]^2
+ GM^2 = AM x HM
- n(n + 1)/2
! Answer: GM^2 = AM x HM.
? What is the sum of the first n natural numbers?
- [n(n + 1)/2]^2
- n(n + 1)(2n + 1)/6
- (a + b)/2
+ n(n + 1)/2
! Answer: n(n + 1)/2.
? What is the sum of the squares of the first n natural numbers?
- a r^(n - 1)
- sqrt (ab)
+ n(n + 1)(2n + 1)/6
- a/(1 - r)
! Answer: n(n + 1)(2n + 1)/6.
? What is the sum of the cubes of the first n natural numbers?
- a r^(n - 1)
- A sequence whose reciprocals form an AP
+ [n(n + 1)/2]^2
- a + (n - 1) d
! Answer: [n(n + 1)/2]^2.
? What is the arithmetic mean of a and b?
- a/(1 - r)
+ (a + b)/2
- a r^(n - 1)
- a (r^n - 1)/(r - 1)
! Answer: (a + b)/2.
? What is the geometric mean of a and b?
- (a + b)/2
+ sqrt (ab)
- a (r^n - 1)/(r - 1)
- (n/2)(2a + (n - 1) d)
! Answer: sqrt (ab).
? What is the harmonic mean of a and b?
- (a + b)/2
- a r^(n - 1)
- a/(1 - r)
+ 2ab/(a + b)
! Answer: 2ab/(a + b).
@visual
formula | Sequences and series (JEE Main) | key formula
@problems
P: Sum of the first 10 natural numbers.
A: 55.
R: 1 | n(n + 1)/2
R: 1 | 55
