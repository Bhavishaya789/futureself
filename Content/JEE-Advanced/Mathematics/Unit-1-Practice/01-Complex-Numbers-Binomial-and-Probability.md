# Complex numbers, binomial theorem and probability (exam-style practice)
minutes: 25
yt: jee advanced complex numbers binomial probability
@study
Exam-style practice, **not official past papers**.
**Complex numbers:** (1 + i)² = 2i, so (1 + i)⁴ = -4 and (1 + i)⁸ = **16**. Cube roots of unity 1, w, w² satisfy 1 + w + w² = 0 and w³ = 1. |z| = sqrt(a² + b²).
**Binomial theorem:** (1 + x)ⁿ has coefficient C(n, r) for x^r; the coefficient of x³ in (1 + x)¹⁰ is C(10, 3) = **120**.
**Counting:** derangements of 4 objects D₄ = 4!(1 - 1 + 1/2 - 1/6 + 1/24) = **9**.
**Conditional probability:** two dice, sum 7: 6 of 36 outcomes. Given the sum is 7, the probability that at least one die shows a 6 is 2/6 = **1/3**, (1, 6) and (6, 1).
```python
import math, itertools
print((1+1j)**8, math.comb(10, 3))
print(sum(1 for p in itertools.permutations(range(4)) if all(p[i] != i for i in range(4))))   # 9
s7 = [(a, b) for a in range(1, 7) for b in range(1, 7) if a + b == 7]; print(len(s7), sum(1 for a, b in s7 if 6 in (a, b)))   # 6 2
```
## Hindi saransh
(1+i)^8 = 16. (1+x)^10 mein x^3 ka gunank 120. 4 vastuon ke derangements 9.
> For conditional probability, shrink the sample space to the given condition first.
@qa
Q: (1 + i)⁸ equals?
A: 16.
Q: Coefficient of x³ in (1 + x)¹⁰?
A: 120.
Q: Number of derangements of 4 objects?
A: 9.
Q: Given a dice sum of 7, probability that one die is 6?
A: 1/3.
@quiz
? (1 + i)⁸ =
- 8
+ 16
- -16
- 256
! (2i)⁴ = 16.
? Coefficient of x³ in (1 + x)¹⁰
- 10
- 45
+ 120
- 210
! C(10, 3).
? Number of derangements of 4 objects
- 6
+ 9
- 12
- 24
! D4 = 9.
? Given dice sum 7, P(at least one 6) =
- 1/6
+ 1/3
- 1/2
- 11/36
! 2 of 6 outcomes.
@visual
formula | Key results | (1+i)^8 = 16 ; C(10,3) = 120 ; D4 = 9
@problems
## Moderate
P: Evaluate (1 + i)⁴.
A: (2i)² = -4.
R: 1 | (1 + i)²
R: 1 | -4
## High
P: Find the coefficient of x² in (1 + x)⁸.
A: C(8, 2) = 28.
R: 1 | C(8, 2)
R: 1 | 28
## Advanced
P: Two dice are thrown. Given that the sum is 7, find the probability that the two numbers differ by 4 or more.
A: Outcomes with sum 7: (1,6) (2,5) (3,4) (4,3) (5,2) (6,1). Differences are 5, 3, 1, 1, 3, 5. Two outcomes, (1,6) and (6,1), differ by 4 or more, so the probability is 2/6 = 1/3.
R: 2 | List outcomes
R: 1 | 1/3
