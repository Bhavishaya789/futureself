# JEE Main practice set: coordinate geometry, counting and probability
minutes: 30
@study
**Exam-style practice (original questions in the JEE Main pattern; not an official past paper).**
## Formula sheet
- Circle x^2 + y^2 + 2 g x + 2 f y + c = 0: centre (-g, -f), radius sqrt(g^2 + f^2 - c).
- Permutations with repeats n! / (p! q! ...). Binomial P(X = r) = nCr p^r q^(n-r).
- Probability of at least k heads in n tosses: sum of nCr / 2^n.
## Strategy
Complete the square for circles; use complementary counting for "at least one" questions.
@qa
Q: Centre of x^2 + y^2 - 4x + 6y - 12 = 0?
A: (2, -3) with radius 5.
Q: Probability of at least 2 heads in 3 tosses?
A: 4/8 = 1/2.
Q: Number of arrangements of MISSISSIPPI?
A: 34650.
@quiz
? The radius of x^2 + y^2 - 4x + 6y - 12 = 0 is
- 3
- 4
+ 5
- 12
! sqrt(4 + 9 + 12) = 5.
? Its centre is
- (-2, 3)
+ (2, -3)
- (4, -6)
- (2, 3)
! (-g, -f) with g = -2, f = 3.
? Probability of at least two heads in three fair tosses is
- 1/4
+ 1/2
- 3/8
- 5/8
! 4 of the 8 outcomes.
? Arrangements of the letters of MISSISSIPPI
- 39916800
+ 34650
- 11
- 5040
! 11!/(4!4!2!).
? Coefficient of x^3 in (1 + x)^10
- 45
- 100
+ 120
- 210
! 10C3.
@visual
formula | Coordinate and counting | centre = (-g, -f) ; r = sqrt(g^2 + f^2 - c) ; nCr = n!/(r!(n-r)!)
@problems
## Moderate
P: Find the centre and radius of x^2 + y^2 - 4x + 6y - 12 = 0.
A: Centre (2, -3), radius 5.
R: 1 | Centre
R: 1 | Radius
## High
P: Find the probability of at least two heads in three tosses of a fair coin.
A: 1/2.
R: 2 | Count favourable
R: 1 | 1/2
## Advanced
P: How many distinct arrangements of MISSISSIPPI are there, and in how many of them do the four S's come together?
A: Total 34650. Treat SSSS as one block: 8 objects with I repeated 4 and P repeated 2 gives 8!/(4! 2!) = 840.
R: 2 | 34650
R: 2 | 840
