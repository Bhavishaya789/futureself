# Matrices and determinants
minutes: 20
yt: matrices determinants inverse class 12
@study
A matrix is a rectangular array. Product AB is defined when columns of A equal rows of B; in general AB is not equal to BA. **Determinant** of [[a, b], [c, d]] is ad - bc. The **inverse** exists only if det is non-zero: A^-1 = adj(A)/det(A).
Example: A = [[2, 1], [3, 4]]: det = 8 - 3 = **5**; A^-1 = (1/5) [[4, -1], [-3, 2]] = [[0.8, -0.2], [-0.6, 0.4]].
**Solving linear equations** AX = B gives X = A^-1 B (if det is non-zero). Properties: det(AB) = det A det B; det(kA) = k^n det A for n x n.
## Hindi saransh
det = ad - bc. Inverse tabhi jab det zero na ho.
> Matrix multiplication is not commutative.
@qa
Q: Determinant of [[2,1],[3,4]]?
A: 5.
Q: When does an inverse exist?
A: When the determinant is non-zero.
Q: Is AB = BA?
A: Not in general.
Q: det(AB)?
A: det(A) times det(B).
@quiz
? Determinant of [[2,1],[3,4]] is
- 11
+ 5
- -5
- 8
! 2x4 - 1x3.
? Inverse of A exists if
- det A = 0
+ det A is not 0
- A is symmetric
- A is diagonal
! Non-singular matrix.
? Which is always true?
- AB = BA
+ det(AB) = det A det B
- (AB)^-1 = A^-1 B^-1
- A + B = AB
! The product rule for determinants.
? For a 3x3 matrix det(2A) =
- 2 det A
- 6 det A
+ 8 det A
- 4 det A
! 2^3.
@visual
formula | 2x2 inverse | A^-1 = (1/(ad - bc)) [[d, -b], [-c, a]]
@problems
## Moderate
P: Find the determinant of [[2, 1], [3, 4]].
A: 5.
R: 1 | Formula
R: 1 | 5
## High
P: Find the inverse of [[2, 1], [3, 4]].
A: (1/5)[[4, -1], [-3, 2]].
R: 2 | Adjoint
R: 1 | Divide by det
## Advanced
P: Solve 2x + y = 5 and 3x + 4y = 10 using the inverse.
A: X = A^-1 B = (1/5)[[4,-1],[-3,2]][5,10] = (1/5)[10, 5] = [2, 1], so x = 2, y = 1.
R: 2 | Matrix form
R: 2 | Solution
