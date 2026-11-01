# Permutations and combinations (JEE Main)
minutes: 50
yt: jee main permutations and combinations
@study
Fundamental principle: m ways then n ways gives m x n ways (and), m + n (or). nPr = n!/(n - r)!, nCr = n!/(r!(n - r)!). Circular arrangements of n objects: (n - 1)!. Arrangements with repeats: n!/(p! q! r!). Distribution and derangements use inclusion-exclusion; the number of ways to distribute n identical objects among r people is C(n + r - 1, r - 1).
## Deep dive: counting principles
The multiplication principle: if one task can be done in m ways and a second in n ways, both in sequence can be done in m n ways. The addition principle: if either of two exclusive tasks can be done, the count is m + n. Factorial: n! = n (n - 1) ... 1 with 0! = 1. Permutations are ordered arrangements: nPr = n!/(n - r)! and with repetition allowed n^r. Combinations are unordered selections: nCr = n!/(r! (n - r)!) with nCr = nC(n - r), nCr + nC(r - 1) = (n + 1)Cr and r nCr = n (n - 1)C(r - 1). The maximum value of nCr occurs at r = n/2.
## Deep dive: arrangements with conditions
Objects with repetition: n!/(p! q! r!). Circular arrangements: (n - 1)! (clockwise and anticlockwise distinct); if direction does not matter (necklace): (n - 1)!/2. Together condition: tie objects as one block and multiply by the internal arrangements: n people with 2 specific people together: 2 (n - 1)!. Never together = total - together. Ranking of letters of a word: count words below each letter. The number of words formed by the letters of MISSISSIPPI is 11!/(4! 4! 2!).
## Deep dive: selection and distribution
Selecting at least one from n distinct items: 2^n - 1. Selections from identical objects: choose any number from p alike, q alike, r alike: (p + 1)(q + 1)(r + 1) - 1. Number of ways to divide 2n objects into two equal groups: (2n)!/(2 (n!)^2) when unlabelled. The number of non-negative integer solutions of x1 + ... + xr = n is C(n + r - 1, r - 1); the number of positive solutions is C(n - 1, r - 1). Derangements of n objects: D_n = n! (1 - 1/1! + 1/2! - ... + (-1)^n/n!). The number of diagonals of an n-gon is n (n - 3)/2; of triangles formed from n points with p collinear is nC3 - pC3.
## Hindi saransh
nPr = n!/(n-r)!, nCr = n!/(r!(n-r)!). Circular: (n-1)!. Repeats: n!/(p!q!).
> nCr = nC(n-r), and nCr + nC(r-1) = (n+1)Cr.
@formulas
## Basics
Factorial | n! = n (n - 1) ... 1, 0! = 1 | 
Permutation | nPr = n!/(n - r)! | 
Combination | nCr = n!/(r! (n - r)!) | 
Symmetry | nCr = nC(n - r) | 
Pascal | nCr + nC(r - 1) = (n + 1)Cr | 
Permutations with repetition | n^r | 
## Arrangements
With repeats | n!/(p! q! r!) | 
Circular | (n - 1)! | 
Necklace | (n - 1)!/2 | 
Two together | 2 (n - 1)! | 
## Selections
At least one of n | 2^n - 1 | 
From identical groups | (p + 1)(q + 1)(r + 1) - 1 | 
Non-negative solutions | C(n + r - 1, r - 1) | x1 + ... + xr = n
Positive solutions | C(n - 1, r - 1) | 
Derangements | D_n = n! sum (-1)^k/k! | 
Diagonals of n-gon | n (n - 3)/2 | 

@qa
Q: State the fundamental principle of counting.
A: If one task can be done in m ways and another in n ways, both together can be done in m x n ways.
Q: What is nPr?
A: n!/(n - r)!, the number of arrangements of r objects from n.
Q: What is nCr?
A: n!/(r! (n - r)!), the number of selections of r objects from n.
Q: What is the value of 0!?
A: 1.
Q: What is nC0?
A: 1.
Q: What is nCn?
A: 1.
Q: What is nCr equal to?
A: nC(n - r).
Q: State Pascal's rule.
A: nCr + nC(r - 1) = (n + 1)Cr.
Q: In how many ways can n distinct objects be arranged in a circle?
A: (n - 1)!.
Q: What is the number of arrangements of n objects with p alike of one kind and q alike of another?
A: n!/(p! q!).
Q: What is the number of subsets of a set of n elements?
A: 2^n.
Q: What is the number of non-empty subsets?
A: 2^n - 1.
Q: What is a derangement?
A: A permutation in which no element is in its original position.
Q: What is the number of diagonals of an n-sided polygon?
A: n (n - 3)/2.
Q: What is the number of positive integer solutions of x1 + ... + xr = n?
A: C(n - 1, r - 1).
Q: What is the number of non-negative integer solutions of x1 + ... + xr = n?
A: C(n + r - 1, r - 1).
Q: At which r is nCr maximum?
A: r = n/2 (or the nearest integers).
Q: What is the number of necklaces of n distinct beads?
A: (n - 1)!/2.
Q: 3! equals
A: 6.
Q: 4! equals
A: 24.
Q: 5! equals
A: 120.
Q: 6! equals
A: 720.
Q: 7! equals
A: 5040.
Q: 8! equals
A: 40320.
Q: 9! equals
A: 362880.
Q: 10! equals
A: 3628800.
Q: 11! equals
A: 39916800.
Q: 12! equals
A: 479001600.
Q: The value of 5P2 is
A: 20.
Q: The value of 5C2 is
A: 10.
Q: The value of 6P3 is
A: 120.
Q: The value of 6C3 is
A: 20.
Q: The value of 7P2 is
A: 42.
Q: The value of 7C2 is
A: 21.
Q: The value of 8P3 is
A: 336.
Q: The value of 8C3 is
A: 56.
Q: The value of 10P2 is
A: 90.
Q: The value of 10C2 is
A: 45.
Q: The value of 10P3 is
A: 720.
Q: The value of 10C3 is
A: 120.
Q: The value of 9P4 is
A: 3024.
Q: The value of 9C4 is
A: 126.
Q: The value of 12P2 is
A: 132.
Q: The value of 12C2 is
A: 66.
Q: The value of 8P5 is
A: 6720.
Q: The value of 8C5 is
A: 56.
Q: The value of 7P4 is
A: 840.
Q: The value of 7C4 is
A: 35.
Q: The value of 6P2 is
A: 30.
Q: The value of 6C2 is
A: 15.
Q: The value of 10P4 is
A: 5040.
Q: The value of 10C4 is
A: 210.
Q: The value of 11P3 is
A: 990.
Q: The value of 11C3 is
A: 165.
Q: The value of 9P2 is
A: 72.
Q: The value of 9C2 is
A: 36.
Q: The value of 12P3 is
A: 1320.
Q: The value of 12C3 is
A: 220.
Q: The value of 15P2 is
A: 210.
Q: The value of 15C2 is
A: 105.
Q: Number of arrangements of the letters of LEVEL
A: 30.
Q: Number of arrangements of the letters of APPLE
A: 60.
Q: Number of arrangements of the letters of BANANA
A: 60.
Q: Number of arrangements of the letters of MISSISSIPPI
A: 34650.
Q: Number of arrangements of the letters of COMMITTEE
A: 45360.
Q: Number of arrangements of the letters of ALLAHABAD
A: 7560.
Q: Number of arrangements of the letters of SUCCESS
A: 420.
Q: Number of arrangements of the letters of MATHEMATICS
A: 4989600.
Q: Number of arrangements of the letters of PROBABILITY
A: 9979200.
Q: Number of arrangements of the letters of DADDY
A: 20.
Q: Number of arrangements of the letters of BOOK
A: 12.
Q: Number of arrangements of the letters of ENGINEERING
A: 277200.
Q: Ways to seat 4 people around a round table
A: 6.
Q: Ways to seat 4 people in a row with two particular people together
A: 12.
Q: Ways to seat 4 people in a row with two particular people NOT together
A: 12.
Q: Ways to seat 5 people around a round table
A: 24.
Q: Ways to seat 5 people in a row with two particular people together
A: 48.
Q: Ways to seat 5 people in a row with two particular people NOT together
A: 72.
Q: Ways to seat 6 people around a round table
A: 120.
Q: Ways to seat 6 people in a row with two particular people together
A: 240.
Q: Ways to seat 6 people in a row with two particular people NOT together
A: 480.
Q: Ways to seat 7 people around a round table
A: 720.
Q: Ways to seat 7 people in a row with two particular people together
A: 1440.
Q: Ways to seat 7 people in a row with two particular people NOT together
A: 3600.
Q: Ways to seat 8 people around a round table
A: 5040.
Q: Ways to seat 8 people in a row with two particular people together
A: 10080.
Q: Ways to seat 8 people in a row with two particular people NOT together
A: 30240.
Q: Ways to seat 9 people around a round table
A: 40320.
Q: Ways to seat 9 people in a row with two particular people together
A: 80640.
Q: Ways to seat 9 people in a row with two particular people NOT together
A: 282240.
Q: Ways to seat 10 people around a round table
A: 362880.
Q: Ways to seat 10 people in a row with two particular people together
A: 725760.
Q: Ways to seat 10 people in a row with two particular people NOT together
A: 2903040.
Q: Number of 3-letter words (repetition allowed) from 4 letters
A: 64.
Q: Number of 3-letter words (repetition allowed) from 5 letters
A: 125.
Q: Number of 2-letter words (repetition allowed) from 6 letters
A: 36.
Q: Number of 3-letter words (repetition allowed) from 7 letters
A: 343.
Q: Number of 2-letter words (repetition allowed) from 8 letters
A: 64.
Q: Number of 2-letter words (repetition allowed) from 5 letters
A: 25.
Q: Number of 4-letter words (repetition allowed) from 6 letters
A: 1296.
Q: Number of 3-letter words (repetition allowed) from 10 letters
A: 1000.
Q: Number of diagonals of a polygon with 5 sides
A: 5.
Q: Number of diagonals of a polygon with 6 sides
A: 9.
Q: Number of diagonals of a polygon with 8 sides
A: 20.
Q: Number of diagonals of a polygon with 10 sides
A: 35.
Q: Number of diagonals of a polygon with 12 sides
A: 54.
Q: Number of diagonals of a polygon with 15 sides
A: 90.
Q: Number of diagonals of a polygon with 20 sides
A: 170.
Q: Non-negative integer solutions of x1 + ... + x3 = 5
A: 21.
Q: Positive integer solutions of x1 + ... + x3 = 5
A: 6.
Q: Non-negative integer solutions of x1 + ... + x2 = 6
A: 7.
Q: Positive integer solutions of x1 + ... + x2 = 6
A: 5.
Q: Non-negative integer solutions of x1 + ... + x3 = 7
A: 36.
Q: Positive integer solutions of x1 + ... + x3 = 7
A: 15.
Q: Non-negative integer solutions of x1 + ... + x4 = 8
A: 165.
Q: Positive integer solutions of x1 + ... + x4 = 8
A: 35.
Q: Non-negative integer solutions of x1 + ... + x3 = 9
A: 55.
Q: Positive integer solutions of x1 + ... + x3 = 9
A: 28.
Q: Non-negative integer solutions of x1 + ... + x5 = 10
A: 1001.
Q: Positive integer solutions of x1 + ... + x5 = 10
A: 126.
Q: A committee of 4 is chosen from 5 men and 4 women with exactly 2 women
A: 60.
Q: Committees of 3 from 5 men and 4 women with at least one woman
A: 74.
Q: A committee of 4 is chosen from 6 men and 3 women with exactly 2 women
A: 45.
Q: Committees of 3 from 6 men and 3 women with at least one woman
A: 64.
Q: A committee of 4 is chosen from 4 men and 4 women with exactly 2 women
A: 36.
Q: Committees of 3 from 4 men and 4 women with at least one woman
A: 52.
Q: A committee of 4 is chosen from 7 men and 5 women with exactly 2 women
A: 210.
Q: Committees of 3 from 7 men and 5 women with at least one woman
A: 185.
Q: A committee of 4 is chosen from 8 men and 3 women with exactly 2 women
A: 84.
Q: Committees of 3 from 8 men and 3 women with at least one woman
A: 109.
Q: A committee of 4 is chosen from 6 men and 5 women with exactly 2 women
A: 150.
Q: Committees of 3 from 6 men and 5 women with at least one woman
A: 145.
Q: Triangles from 10 points of which 4 are collinear
A: 116.
Q: Triangles from 12 points of which 5 are collinear
A: 210.
Q: Triangles from 8 points of which 3 are collinear
A: 55.
Q: Triangles from 9 points of which 4 are collinear
A: 80.
Q: Triangles from 15 points of which 6 are collinear
A: 435.
Q: Triangles from 11 points of which 5 are collinear
A: 155.
Q: Derangements of 3 objects
A: 2.
Q: Derangements of 4 objects
A: 9.
Q: Derangements of 5 objects
A: 44.
Q: Derangements of 6 objects
A: 265.
Q: Derangements of 7 objects
A: 1854.
@quiz
? 3! equals
+ 6
- 9
- 3
- 7.2
! Product.
? 4! equals
+ 24
- 26.4
- 21.6
- 19.2
! Product.
? 5! equals
+ 120
- 96
- 132
- 180
! Product.
? 6! equals
- 864
+ 720
- 576
- 1080
! Product.
? 7! equals
- 4032
- 2520
- 10080
+ 5040
! Product.
? 8! equals
+ 40320
- 36288
- 32256
- 60480
! Product.
? 9! equals
- 290304
+ 362880
- 399168
- 181440
! Product.
? 10! equals
- 7257600
- 5443200
- 1814400
+ 3628800
! Product.
? 11! equals
+ 39916800
- 19958400
- 47900160
- 31933440
! Product.
? 12! equals
- 574801920
- 718502400
+ 479001600
- 239500800
! Product.
? The value of 5P2 is
- 16
+ 20
- 40
- 22
! n!/(n - r)!.
? The value of 5C2 is
- 12
- 15
- 9
+ 10
! n!/(r!(n - r)!).
? The value of 6P3 is
+ 120
- 96
- 60
- 240
! n!/(n - r)!.
? The value of 6C3 is
- 16
- 40
+ 20
- 24
! n!/(r!(n - r)!).
? The value of 7P2 is
- 46.2
- 21
- 50.4
+ 42
! n!/(n - r)!.
? The value of 7C2 is
+ 21
- 10.5
- 16.8
- 18.9
! n!/(r!(n - r)!).
? The value of 8P3 is
- 268.8
+ 336
- 168
- 403.2
! n!/(n - r)!.
? The value of 8C3 is
+ 56
- 50.4
- 28
- 67.2
! n!/(r!(n - r)!).
? The value of 10P2 is
+ 90
- 45
- 135
- 72
! n!/(n - r)!.
? The value of 10C2 is
- 22.5
- 54
- 49.5
+ 45
! n!/(r!(n - r)!).
? The value of 10P3 is
- 1440
- 360
+ 720
- 864
! n!/(n - r)!.
? The value of 10C3 is
+ 120
- 96
- 132
- 108
! n!/(r!(n - r)!).
? The value of 9P4 is
- 2419.2
- 3326.4
- 1512
+ 3024
! n!/(n - r)!.
? The value of 9C4 is
- 138.6
- 151.2
- 63
+ 126
! n!/(r!(n - r)!).
? The value of 12P2 is
+ 132
- 264
- 66
- 145.2
! n!/(n - r)!.
? The value of 12C2 is
- 79.2
- 59.4
+ 66
- 132
! n!/(r!(n - r)!).
? The value of 8P5 is
+ 6720
- 10080
- 5376
- 8064
! n!/(n - r)!.
? The value of 8C5 is
+ 56
- 112
- 28
- 67.2
! n!/(r!(n - r)!).
? The value of 7P4 is
- 924
- 1008
- 672
+ 840
! n!/(n - r)!.
? The value of 7C4 is
- 28
- 38.5
- 52.5
+ 35
! n!/(r!(n - r)!).
? The value of 6P2 is
- 60
+ 30
- 24
- 45
! n!/(n - r)!.
? The value of 6C2 is
- 13.5
- 30
+ 15
- 16.5
! n!/(r!(n - r)!).
? The value of 10P4 is
- 4536
+ 5040
- 4032
- 10080
! n!/(n - r)!.
? The value of 10C4 is
- 420
- 168
+ 210
- 105
! n!/(r!(n - r)!).
? The value of 11P3 is
- 1485
- 891
- 1980
+ 990
! n!/(n - r)!.
? The value of 11C3 is
- 198
- 181.5
+ 165
- 148.5
! n!/(r!(n - r)!).
? The value of 9P2 is
- 57.6
+ 72
- 79.2
- 144
! n!/(n - r)!.
? The value of 9C2 is
- 72
+ 36
- 32.4
- 28.8
! n!/(r!(n - r)!).
? The value of 12P3 is
- 1188
+ 1320
- 1452
- 1980
! n!/(n - r)!.
? The value of 12C3 is
- 110
- 330
+ 220
- 242
! n!/(r!(n - r)!).
? The value of 15P2 is
+ 210
- 189
- 231
- 105
! n!/(n - r)!.
? The value of 15C2 is
- 126
- 94.5
+ 105
- 84
! n!/(r!(n - r)!).
? Number of arrangements of the letters of LEVEL
- 24
+ 30
- 45
- 15
! n!/(repeats).
? Number of arrangements of the letters of APPLE
- 66
- 90
- 48
+ 60
! n!/(repeats).
? Number of arrangements of the letters of BANANA
- 66
+ 60
- 54
- 90
! n!/(repeats).
? Number of arrangements of the letters of MISSISSIPPI
+ 34650
- 38115
- 51975
- 17325
! n!/(repeats).
? Number of arrangements of the letters of COMMITTEE
- 68040
- 90720
+ 45360
- 36288
! n!/(repeats).
? Number of arrangements of the letters of ALLAHABAD
+ 7560
- 3780
- 6804
- 15120
! n!/(repeats).
? Number of arrangements of the letters of SUCCESS
- 378
- 840
- 630
+ 420
! n!/(repeats).
? Number of arrangements of the letters of MATHEMATICS
- 5488560
- 9979200
- 4490640
+ 4989600
! n!/(repeats).
? Number of arrangements of the letters of PROBABILITY
- 19958400
+ 9979200
- 10977120
- 11975040
! n!/(repeats).
? Number of arrangements of the letters of DADDY
- 18
- 16
- 24
+ 20
! n!/(repeats).
? Number of arrangements of the letters of BOOK
- 6
+ 12
- 18
- 13.2
! n!/(repeats).
? Number of arrangements of the letters of ENGINEERING
- 415800
- 554400
- 138600
+ 277200
! n!/(repeats).
? Ways to seat 4 people around a round table
- 3
+ 6
- 6.6
- 5.4
! (n - 1)!.
? Ways to seat 4 people in a row with two particular people together
- 6
+ 12
- 24
- 13.2
! 2 (n - 1)!.
? Ways to seat 4 people in a row with two particular people NOT together
- 13.2
- 9.6
- 6
+ 12
! Total - together.
? Ways to seat 5 people around a round table
- 48
- 36
- 21.6
+ 24
! (n - 1)!.
? Ways to seat 5 people in a row with two particular people together
- 38.4
+ 48
- 43.2
- 52.8
! 2 (n - 1)!.
? Ways to seat 5 people in a row with two particular people NOT together
- 57.6
- 64.8
- 144
+ 72
! Total - together.
? Ways to seat 6 people around a round table
+ 120
- 144
- 108
- 60
! (n - 1)!.
? Ways to seat 6 people in a row with two particular people together
- 120
+ 240
- 192
- 480
! 2 (n - 1)!.
? Ways to seat 6 people in a row with two particular people NOT together
- 384
- 720
- 432
+ 480
! Total - together.
? Ways to seat 7 people around a round table
- 1080
- 576
+ 720
- 792
! (n - 1)!.
? Ways to seat 7 people in a row with two particular people together
- 720
- 2880
- 1152
+ 1440
! 2 (n - 1)!.
? Ways to seat 7 people in a row with two particular people NOT together
- 5400
+ 3600
- 7200
- 2880
! Total - together.
? Ways to seat 8 people around a round table
+ 5040
- 6048
- 7560
- 5544
! (n - 1)!.
? Ways to seat 8 people in a row with two particular people together
- 12096
- 20160
- 11088
+ 10080
! 2 (n - 1)!.
? Ways to seat 8 people in a row with two particular people NOT together
- 60480
- 36288
- 45360
+ 30240
! Total - together.
? Ways to seat 9 people around a round table
+ 40320
- 20160
- 36288
- 48384
! (n - 1)!.
? Ways to seat 9 people in a row with two particular people together
+ 80640
- 161280
- 88704
- 40320
! 2 (n - 1)!.
? Ways to seat 9 people in a row with two particular people NOT together
- 254016
- 564480
+ 282240
- 423360
! Total - together.
? Ways to seat 10 people around a round table
- 290304
- 399168
- 181440
+ 362880
! (n - 1)!.
? Ways to seat 10 people in a row with two particular people together
- 870912
- 653184
+ 725760
- 580608
! 2 (n - 1)!.
? Ways to seat 10 people in a row with two particular people NOT together
- 4354560
- 1451520
- 5806080
+ 2903040
! Total - together.
? Number of 3-letter words (repetition allowed) from 4 letters
- 128
- 70.4
+ 64
- 51.2
! n^r.
? Number of 3-letter words (repetition allowed) from 5 letters
- 100
+ 125
- 112.5
- 250
! n^r.
? Number of 2-letter words (repetition allowed) from 6 letters
+ 36
- 39.6
- 18
- 28.8
! n^r.
? Number of 3-letter words (repetition allowed) from 7 letters
- 411.6
+ 343
- 377.3
- 171.5
! n^r.
? Number of 2-letter words (repetition allowed) from 8 letters
+ 64
- 96
- 76.8
- 32
! n^r.
? Number of 2-letter words (repetition allowed) from 5 letters
- 50
- 20
- 37.5
+ 25
! n^r.
? Number of 4-letter words (repetition allowed) from 6 letters
- 648
- 1425.6
+ 1296
- 1166.4
! n^r.
? Number of 3-letter words (repetition allowed) from 10 letters
+ 1000
- 1100
- 1500
- 2000
! n^r.
? Number of diagonals of a polygon with 5 sides
- 10
+ 5
- 4
- 7.5
! n (n - 3)/2.
? Number of diagonals of a polygon with 6 sides
- 4.5
- 10.8
+ 9
- 8.1
! n (n - 3)/2.
? Number of diagonals of a polygon with 8 sides
- 16
- 22
- 40
+ 20
! n (n - 3)/2.
? Number of diagonals of a polygon with 10 sides
+ 35
- 52.5
- 70
- 42
! n (n - 3)/2.
? Number of diagonals of a polygon with 12 sides
- 108
- 81
+ 54
- 64.8
! n (n - 3)/2.
? Number of diagonals of a polygon with 15 sides
- 45
- 72
- 99
+ 90
! n (n - 3)/2.
? Number of diagonals of a polygon with 20 sides
- 340
- 153
- 204
+ 170
! n (n - 3)/2.
? Non-negative integer solutions of x1 + ... + x3 = 5
- 10.5
+ 21
- 25.2
- 31.5
! C(n + r - 1, r - 1).
? Positive integer solutions of x1 + ... + x3 = 5
- 5.4
- 9
- 4.8
+ 6
! C(n - 1, r - 1).
? Non-negative integer solutions of x1 + ... + x2 = 6
- 8.4
+ 7
- 5.6
- 3.5
! C(n + r - 1, r - 1).
? Positive integer solutions of x1 + ... + x2 = 6
+ 5
- 4
- 5.5
- 10
! C(n - 1, r - 1).
? Non-negative integer solutions of x1 + ... + x3 = 7
- 43.2
- 54
+ 36
- 39.6
! C(n + r - 1, r - 1).
? Positive integer solutions of x1 + ... + x3 = 7
- 13.5
+ 15
- 7.5
- 16.5
! C(n - 1, r - 1).
? Non-negative integer solutions of x1 + ... + x4 = 8
+ 165
- 198
- 148.5
- 181.5
! C(n + r - 1, r - 1).
? Positive integer solutions of x1 + ... + x4 = 8
- 70
- 42
- 31.5
+ 35
! C(n - 1, r - 1).
? Non-negative integer solutions of x1 + ... + x3 = 9
- 49.5
+ 55
- 66
- 44
! C(n + r - 1, r - 1).
? Positive integer solutions of x1 + ... + x3 = 9
- 56
+ 28
- 30.8
- 42
! C(n - 1, r - 1).
? Non-negative integer solutions of x1 + ... + x5 = 10
- 500.5
- 1501.5
+ 1001
- 1101.1
! C(n + r - 1, r - 1).
? Positive integer solutions of x1 + ... + x5 = 10
- 252
+ 126
- 113.4
- 100.8
! C(n - 1, r - 1).
? A committee of 4 is chosen from 5 men and 4 women with exactly 2 women
- 66
- 30
+ 60
- 72
! wC2 x mC2.
? Committees of 3 from 5 men and 4 women with at least one woman
- 148
- 59.2
- 81.4
+ 74
! Total - no woman.
? A committee of 4 is chosen from 6 men and 3 women with exactly 2 women
- 54
- 90
- 49.5
+ 45
! wC2 x mC2.
? Committees of 3 from 6 men and 3 women with at least one woman
- 32
- 128
- 96
+ 64
! Total - no woman.
? A committee of 4 is chosen from 4 men and 4 women with exactly 2 women
- 32.4
+ 36
- 43.2
- 72
! wC2 x mC2.
? Committees of 3 from 4 men and 4 women with at least one woman
- 78
+ 52
- 26
- 46.8
! Total - no woman.
? A committee of 4 is chosen from 7 men and 5 women with exactly 2 women
- 315
+ 210
- 231
- 189
! wC2 x mC2.
? Committees of 3 from 7 men and 5 women with at least one woman
- 203.5
+ 185
- 92.5
- 148
! Total - no woman.
? A committee of 4 is chosen from 8 men and 3 women with exactly 2 women
- 92.4
+ 84
- 42
- 75.6
! wC2 x mC2.
? Committees of 3 from 8 men and 3 women with at least one woman
+ 109
- 119.9
- 87.2
- 130.8
! Total - no woman.
? A committee of 4 is chosen from 6 men and 5 women with exactly 2 women
- 180
+ 150
- 75
- 120
! wC2 x mC2.
? Committees of 3 from 6 men and 5 women with at least one woman
- 116
- 174
+ 145
- 290
! Total - no woman.
? Triangles from 10 points of which 4 are collinear
- 104.4
- 174
- 139.2
+ 116
! nC3 - pC3.
? Triangles from 12 points of which 5 are collinear
- 420
+ 210
- 168
- 189
! nC3 - pC3.
? Triangles from 8 points of which 3 are collinear
- 82.5
- 44
+ 55
- 66
! nC3 - pC3.
? Triangles from 9 points of which 4 are collinear
- 72
+ 80
- 120
- 160
! nC3 - pC3.
? Triangles from 15 points of which 6 are collinear
- 652.5
- 348
- 478.5
+ 435
! nC3 - pC3.
? Triangles from 11 points of which 5 are collinear
- 170.5
- 232.5
+ 155
- 186
! nC3 - pC3.
? Derangements of 3 objects
- 4
+ 2
- 1.8
- 1.6
! n! sum (-1)^k/k!.
? Derangements of 4 objects
- 8.1
+ 9
- 10.8
- 13.5
! n! sum (-1)^k/k!.
? Derangements of 5 objects
- 52.8
- 48.4
+ 44
- 39.6
! n! sum (-1)^k/k!.
? Derangements of 6 objects
- 397.5
- 212
+ 265
- 238.5
! n! sum (-1)^k/k!.
? Derangements of 7 objects
- 2224.8
- 1483.2
+ 1854
- 2039.4
! n! sum (-1)^k/k!.
? nCr equals
- (n - 1)Cr
- nPr
- n!
+ nC(n - r)
! Symmetry.
? 0! equals
+ 1
- infinity
- undefined
- 0
! Convention.
? Number of subsets of a 5-element set
- 25
+ 32
- 31
- 10
! 2^5.
? Circular arrangements of n objects
- (n + 1)!
- n!
- n!/2
+ (n - 1)!
! Fix one.
? 5C2 equals
- 5
- 25
- 20
+ 10
! 5!/(2! 3!).
? 5P2 equals
+ 20
- 10
- 120
- 25
! 5 x 4.
? What is the value of 0!?
- n!/(p! q!)
- 2^n - 1
- C(n + r - 1, r - 1)
+ 1
! Answer: 1.
? What is nC0?
- n!/(p! q!)
- (n - 1)!/2
+ 1
- n (n - 3)/2
! Answer: 1.
? What is nCn?
+ 1
- 2^n
- n!/(p! q!)
- n (n - 3)/2
! Answer: 1.
? What is nCr equal to?
- n (n - 3)/2
- C(n + r - 1, r - 1)
+ nC(n - r)
- 1
! Answer: nC(n - r).
? What is the number of arrangements of n objects with p alike of one kind and q alike of another?
- 2^n - 1
- C(n + r - 1, r - 1)
- 2^n
+ n!/(p! q!)
! Answer: n!/(p! q!).
? What is the number of subsets of a set of n elements?
+ 2^n
- nC(n - r)
- C(n - 1, r - 1)
- n (n - 3)/2
! Answer: 2^n.
? What is the number of non-empty subsets?
+ 2^n - 1
- nC(n - r)
- n (n - 3)/2
- (n - 1)!/2
! Answer: 2^n - 1.
? What is the number of diagonals of an n-sided polygon?
- n!/(p! q!)
- 2^n
+ n (n - 3)/2
- nC(n - r)
! Answer: n (n - 3)/2.
? What is the number of positive integer solutions of x1 + ... + xr = n?
- 2^n - 1
- 1
- n (n - 3)/2
+ C(n - 1, r - 1)
! Answer: C(n - 1, r - 1).
? What is the number of non-negative integer solutions of x1 + ... + xr = n?
- n!/(p! q!)
- 2^n
- 2^n - 1
+ C(n + r - 1, r - 1)
! Answer: C(n + r - 1, r - 1).
? What is the number of necklaces of n distinct beads?
- 2^n - 1
- 2^n
- n (n - 3)/2
+ (n - 1)!/2
! Answer: (n - 1)!/2.
@visual
formula | Permutations and combinations (JEE Main) | key formula
@problems
P: In how many ways can 5 people sit in a row?
A: 120.
R: 1 | 5!
R: 1 | 120
