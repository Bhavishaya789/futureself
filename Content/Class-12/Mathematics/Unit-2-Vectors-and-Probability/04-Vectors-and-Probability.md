# Vectors and probability
minutes: 25
yt: vectors dot cross probability bayes class 12
@study
## Vectors
Dot product a.b = |a||b| cos t (scalar); cross product a x b has magnitude |a||b| sin t, perpendicular to both. For a = (1, 2, 3) and b = (2, -1, 1): a.b = 2 - 2 + 3 = **3**; a x b = (2x1 - 3x(-1), 3x2 - 1x1, 1x(-1) - 2x2) = **(5, 5, -5)**. Two vectors are perpendicular if a.b = 0.
## Probability
P(A) = favourable / total. Conditional P(A|B) = P(A n B)/P(B). **Bayes' theorem:** P(A|B) = P(B|A) P(A) / P(B).
Example: machine A makes 60% of items with 2% defects, machine B makes 40% with 5% defects. P(defect) = 0.6 x 0.02 + 0.4 x 0.05 = **0.032**. Given a defective item, P(it came from A) = 0.012 / 0.032 = **0.375**.
**Binomial distribution:** P(X = r) = nCr p^r q^(n-r); mean np, variance npq.
## Hindi saransh
Dot product scalar, cross product vector. Bayes: P(A|B) = P(B|A)P(A)/P(B).
> Independent events: P(A n B) = P(A) P(B).
@qa
Q: Dot product of (1,2,3) and (2,-1,1)?
A: 3.
Q: State Bayes' theorem.
A: P(A|B) = P(B|A) P(A) / P(B).
Q: Mean of a binomial distribution?
A: np.
Q: When are two vectors perpendicular?
A: When their dot product is zero.
@quiz
? Cross product of (1,2,3) and (2,-1,1) is
- (3, 3, 3)
+ (5, 5, -5)
- (1, 5, 5)
- (-5, 5, 5)
! Component formula.
? P(defect) in the machine example is
- 0.07
+ 0.032
- 0.05
- 0.02
! 0.012 + 0.020.
? P(from A | defective) is
- 0.6
+ 0.375
- 0.5
- 0.02
! 0.012/0.032.
? Variance of Binomial(n, p) is
- np
- n p^2
+ npq
- pq
! npq.
@visual
formula | Vectors and probability | a.b = |a||b| cos t ; P(A|B) = P(B|A) P(A) / P(B)
@problems
## Moderate
P: Find a.b for a = (1, 2, 3) and b = (2, -1, 1).
A: 3.
R: 1 | Formula
R: 1 | 3
## High
P: Find P(defect) in the machine problem.
A: 0.032.
R: 1 | Total probability
R: 1 | Value
## Advanced
P: Given a defective item, find the probability it came from machine A.
A: 0.012/0.032 = 0.375.
R: 2 | Bayes
R: 1 | 0.375
