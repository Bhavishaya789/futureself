# Eigenvalues, eigenvectors and Taylor series
minutes: 25
yt: eigenvalues eigenvectors engineering mathematics
@study
For a square matrix A, a non-zero vector v with A v = lambda v is an **eigenvector** and lambda the **eigenvalue**. Solve the characteristic equation det(A - lambda I) = 0. Sum of eigenvalues = trace; product = determinant.
Example: A = [[2, 1], [1, 2]]. det = (2 - l)^2 - 1 = 0 gives l = **3** and l = **1**. For l = 3: (A - 3I)v = 0 gives v = (1, 1). For l = 1: v = (1, -1) (they are orthogonal because A is symmetric). Check: trace 4 = 3 + 1; det 3 = 3 x 1.
**Cayley-Hamilton theorem:** every matrix satisfies its own characteristic equation.
## Taylor and Maclaurin series
f(x) = f(a) + f'(a)(x - a) + f''(a)(x - a)^2/2! + ... Maclaurin (a = 0): e^x = 1 + x + x^2/2! + x^3/3! + ...; sin x = x - x^3/3! + ...; cos x = 1 - x^2/2! + ...
## Partial derivatives
For f(x, y) = x^2 y + y^3: f_x = 2xy, f_y = x^2 + 3y^2. Gradient is (f_x, f_y); maxima need f_x = f_y = 0.
## Hindi saransh
A v = lambda v. [[2,1],[1,2]] ke eigenvalues 3 aur 1. e^x ki series 1 + x + x^2/2 + ...
> Sum of eigenvalues equals the trace.
@qa
Q: Eigenvalues of [[2,1],[1,2]]?
A: 3 and 1.
Q: What does the Cayley-Hamilton theorem state?
A: A matrix satisfies its own characteristic equation.
Q: Maclaurin series of e^x?
A: 1 + x + x^2/2! + x^3/3! + ...
Q: Partial derivative f_x of x^2 y + y^3?
A: 2xy.
@quiz
? Eigenvalues of [[2,1],[1,2]] are
- 2, 2
+ 3, 1
- 4, 0
- 1, -1
! lambda^2 - 4 lambda + 3 = 0.
? Sum of eigenvalues equals
- determinant
+ trace
- rank
- order
! Property.
? Eigenvector for lambda = 3 is
+ (1, 1)
- (1, -1)
- (0, 1)
- (2, 1)
! A (1,1) = (3, 3).
? Coefficient of x^3 in e^x is
- 1/2
+ 1/6
- 1/3
- 1/24
! 1/3!.
@visual
formula | Key results | det(A - lambda I) = 0 ; e^x = 1 + x + x^2/2! + ...
curve | e^x and its Taylor polynomial 1 + x + x^2/2 | y = 1 + x + x*x/2 ; -2 ; 2
@problems
## Moderate
P: Find the eigenvalues of [[2, 1], [1, 2]].
A: 3 and 1.
R: 1 | Characteristic equation
R: 1 | Roots
## High
P: Find the eigenvectors of [[2, 1], [1, 2]].
A: For 3: (1, 1). For 1: (1, -1).
R: 2 | First
R: 1 | Second
## Advanced
P: Write the Maclaurin series of e^x up to x^3 and estimate e^0.1.
A: 1 + 0.1 + 0.005 + 0.000167 = 1.105167 (true 1.105171).
R: 2 | Series
R: 2 | Estimate
