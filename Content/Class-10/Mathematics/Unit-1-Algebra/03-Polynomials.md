# Polynomials
minutes: 30
yt: class 10 polynomials
@study
Zeroes of a polynomial p(x) are the values of x for which p(x) = 0; they are the x-coordinates where its graph cuts the x-axis. A quadratic ax^2 + bx + c with zeroes alpha and beta has alpha + beta = -b/a and alpha beta = c/a.
## Deep dive: zeroes and graphs
A linear polynomial ax + b has one zero, -b/a, and its graph is a straight line cutting the x-axis once. A quadratic polynomial has a parabola as its graph: opening upward if a > 0 and downward if a < 0. It has two, one (touching) or no real zeroes according as the parabola cuts, touches or misses the x-axis. A cubic polynomial has at most three zeroes; its graph cuts the x-axis at most three times. In general a polynomial of degree n has at most n zeroes.
## Deep dive: relation between zeroes and coefficients
Quadratic ax^2 + bx + c: sum of zeroes = -b/a, product = c/a. Cubic ax^3 + bx^2 + cx + d: alpha + beta + gamma = -b/a, alpha beta + beta gamma + gamma alpha = c/a, alpha beta gamma = -d/a. Given the sum S and product P, the quadratic is k [x^2 - S x + P] for any non-zero k.
## Deep dive: division algorithm
For polynomials p(x) and g(x) with g(x) != 0 there exist q(x) and r(x) with p(x) = g(x) q(x) + r(x), where r(x) = 0 or deg r < deg g. If r(x) = 0, g(x) is a factor of p(x). Use this to find the other zeroes of a polynomial when one or two zeroes are known.
**Common mistakes:** forgetting the minus sign in -b/a, writing the quadratic as x^2 + Sx + P, and dividing without arranging terms in descending powers.
## Hindi saransh
Zero = jahan graph x-axis ko kaatta hai. Sum = -b/a, product = c/a.
> Quadratic from zeroes: x^2 - (sum)x + (product).
@formulas
## Quadratic
Sum of zeroes | alpha + beta = -b/a | ax^2 + bx + c
Product of zeroes | alpha beta = c/a | 
Polynomial from zeroes | x^2 - (alpha + beta)x + alpha beta | scale by any k
Discriminant | D = b^2 - 4ac | D > 0 two zeroes, D = 0 one, D < 0 none
## Cubic
Sum of zeroes | -b/a | ax^3 + bx^2 + cx + d
Sum of products in pairs | c/a | 
Product of zeroes | -d/a | 
## Division
Division algorithm | p(x) = g(x) q(x) + r(x) | deg r < deg g
Maximum zeroes | degree of polynomial | 

@qa
Q: What is the degree of a polynomial?
A: The highest power of the variable.
Q: What is a zero of a polynomial?
A: A value of x for which p(x) = 0.
Q: How many zeroes can a quadratic have at most?
A: Two.
Q: How many zeroes can a cubic have at most?
A: Three.
Q: What is the geometrical meaning of zeroes?
A: The x-coordinates of the points where the graph meets the x-axis.
Q: What is the graph of a quadratic?
A: A parabola.
Q: When does a parabola open upward?
A: When a is positive.
Q: What is the sum of zeroes of ax^2 + bx + c?
A: -b/a.
Q: What is the product of zeroes of ax^2 + bx + c?
A: c/a.
Q: What is the sum of zeroes of a cubic ax^3 + bx^2 + cx + d?
A: -b/a.
Q: What is the product of zeroes of a cubic?
A: -d/a.
Q: State the division algorithm for polynomials.
A: p(x) = g(x) q(x) + r(x), with r(x) = 0 or deg r < deg g.
Q: How many zeroes does a linear polynomial ax + b have?
A: One: -b/a.
Q: What is a constant polynomial's degree?
A: Zero (for a non-zero constant).
Q: What is a quadratic polynomial's standard form?
A: ax^2 + bx + c with a not zero.
Q: What shape is the graph of a linear polynomial?
A: A straight line.
Q: Can a quadratic have no real zero?
A: Yes, when its graph misses the x-axis.
Q: What does the discriminant b^2 - 4ac tell us?
A: D>0: two real zeroes; D=0: equal zeroes; D<0: none.
Q: Can a polynomial have a negative power of x?
A: No, powers must be whole numbers.
Q: Find the zeroes of x^2 - 5x + 6.
A: 2 and 3.
Q: Find the sum and product of the zeroes of x^2 - 5x + 6.
A: Sum = 5, product = 6.
Q: Form a quadratic polynomial with zeroes 2 and 3.
A: x^2 - (5)x + (6).
Q: Find the zeroes of x^2 - 5x + 4.
A: 1 and 4.
Q: Find the sum and product of the zeroes of x^2 - 5x + 4.
A: Sum = 5, product = 4.
Q: Form a quadratic polynomial with zeroes 1 and 4.
A: x^2 - (5)x + (4).
Q: Find the zeroes of x^2 - 4x - 5.
A: -1 and 5.
Q: Find the sum and product of the zeroes of x^2 - 4x - 5.
A: Sum = 4, product = -5.
Q: Form a quadratic polynomial with zeroes -1 and 5.
A: x^2 - (4)x + (-5).
Q: Find the zeroes of x^2 + 5x + 6.
A: -2 and -3.
Q: Find the sum and product of the zeroes of x^2 + 5x + 6.
A: Sum = -5, product = 6.
Q: Form a quadratic polynomial with zeroes -2 and -3.
A: x^2 - (-5)x + (6).
Q: Find the zeroes of x^2 - 6x + 9.
A: 3 and 3.
Q: Find the sum and product of the zeroes of x^2 - 6x + 9.
A: Sum = 6, product = 9.
Q: Form a quadratic polynomial with zeroes 3 and 3.
A: x^2 - (6)x + (9).
Q: Find the zeroes of x^2 - 6x.
A: 0 and 6.
Q: Find the sum and product of the zeroes of x^2 - 6x.
A: Sum = 6, product = 0.
Q: Form a quadratic polynomial with zeroes 0 and 6.
A: x^2 - (6)x + (0).
Q: Find the zeroes of x^2 + 2x - 8.
A: -4 and 2.
Q: Find the sum and product of the zeroes of x^2 + 2x - 8.
A: Sum = -2, product = -8.
Q: Form a quadratic polynomial with zeroes -4 and 2.
A: x^2 - (-2)x + (-8).
Q: Find the zeroes of x^2 - 12x + 35.
A: 5 and 7.
Q: Find the sum and product of the zeroes of x^2 - 12x + 35.
A: Sum = 12, product = 35.
Q: Form a quadratic polynomial with zeroes 5 and 7.
A: x^2 - (12)x + (35).
Q: Find the zeroes of x^2 + 7x + 6.
A: -1 and -6.
Q: Find the sum and product of the zeroes of x^2 + 7x + 6.
A: Sum = -7, product = 6.
Q: Form a quadratic polynomial with zeroes -1 and -6.
A: x^2 - (-7)x + (6).
Q: Find the zeroes of x^2 + 5x - 14.
A: 2 and -7.
Q: Find the sum and product of the zeroes of x^2 + 5x - 14.
A: Sum = -5, product = -14.
Q: Form a quadratic polynomial with zeroes 2 and -7.
A: x^2 - (-5)x + (-14).
Q: Find the zeroes of x^2 - 2x + 1.
A: 1 and 1.
Q: Find the sum and product of the zeroes of x^2 - 2x + 1.
A: Sum = 2, product = 1.
Q: Form a quadratic polynomial with zeroes 1 and 1.
A: x^2 - (2)x + (1).
Q: Find the zeroes of x^2 - 8x + 12.
A: 6 and 2.
Q: Find the sum and product of the zeroes of x^2 - 8x + 12.
A: Sum = 8, product = 12.
Q: Form a quadratic polynomial with zeroes 6 and 2.
A: x^2 - (8)x + (12).
Q: Find the zeroes of x^2 - 5x - 24.
A: -3 and 8.
Q: Find the sum and product of the zeroes of x^2 - 5x - 24.
A: Sum = 5, product = -24.
Q: Form a quadratic polynomial with zeroes -3 and 8.
A: x^2 - (5)x + (-24).
Q: Find the zeroes of x^2 - 13x + 36.
A: 4 and 9.
Q: Find the sum and product of the zeroes of x^2 - 13x + 36.
A: Sum = 13, product = 36.
Q: Form a quadratic polynomial with zeroes 4 and 9.
A: x^2 - (13)x + (36).
Q: Find the zeroes of x^2 - 25.
A: -5 and 5.
Q: Find the sum and product of the zeroes of x^2 - 25.
A: Sum = 0, product = -25.
Q: Form a quadratic polynomial with zeroes -5 and 5.
A: x^2 - (0)x + (-25).
Q: Find the zeroes of x^2 - 5x - 14.
A: 7 and -2.
Q: Find the sum and product of the zeroes of x^2 - 5x - 14.
A: Sum = 5, product = -14.
Q: Form a quadratic polynomial with zeroes 7 and -2.
A: x^2 - (5)x + (-14).
Q: Find a quadratic polynomial with sum of zeroes 3 and product 2.
A: x^2 - (3)x + (2).
Q: Find a quadratic polynomial with sum of zeroes 5 and product 6.
A: x^2 - (5)x + (6).
Q: Find a quadratic polynomial with sum of zeroes -4 and product 3.
A: x^2 - (-4)x + (3).
Q: Find a quadratic polynomial with sum of zeroes 0 and product -9.
A: x^2 - (0)x + (-9).
Q: Find a quadratic polynomial with sum of zeroes 7 and product 10.
A: x^2 - (7)x + (10).
Q: Find a quadratic polynomial with sum of zeroes -1 and product -12.
A: x^2 - (-1)x + (-12).
Q: Find a quadratic polynomial with sum of zeroes 1 and product -6.
A: x^2 - (1)x + (-6).
Q: Find a quadratic polynomial with sum of zeroes 4 and product 4.
A: x^2 - (4)x + (4).
Q: Find a quadratic polynomial with sum of zeroes 9 and product 20.
A: x^2 - (9)x + (20).
Q: Find a quadratic polynomial with sum of zeroes -5 and product 6.
A: x^2 - (-5)x + (6).
Q: A cubic x^3 + bx^2 + cx + d has zeroes 1, 2, 3. Find b, c, d.
A: b = -6, c = 11, d = -6.
Q: A cubic x^3 + bx^2 + cx + d has zeroes 2, 3, 4. Find b, c, d.
A: b = -9, c = 26, d = -24.
Q: A cubic x^3 + bx^2 + cx + d has zeroes 1, 3, -2. Find b, c, d.
A: b = -2, c = -5, d = 6.
Q: A cubic x^3 + bx^2 + cx + d has zeroes 1, -1, 4. Find b, c, d.
A: b = -4, c = -1, d = 4.
Q: A cubic x^3 + bx^2 + cx + d has zeroes 2, 2, 3. Find b, c, d.
A: b = -7, c = 16, d = -12.
Q: A cubic x^3 + bx^2 + cx + d has zeroes -1, 2, 5. Find b, c, d.
A: b = -6, c = 3, d = 10.
Q: A cubic x^3 + bx^2 + cx + d has zeroes 3, 4, 5. Find b, c, d.
A: b = -12, c = 47, d = -60.
Q: A cubic x^3 + bx^2 + cx + d has zeroes 1, 5, 2. Find b, c, d.
A: b = -8, c = 17, d = -10.
Q: Nature of zeroes of x^2 - 5x + 6?
A: D = 1, so two distinct real zeroes.
Q: Nature of zeroes of x^2 - 7x + 12?
A: D = 1, so two distinct real zeroes.
Q: Nature of zeroes of x^2 + 2x - 8?
A: D = 36, so two distinct real zeroes.
Q: Nature of zeroes of x^2 - 2x + 1?
A: D = 0, so two equal real zeroes.
Q: Nature of zeroes of x^2 + 1x + 1?
A: D = -3, so no real zeroes.
Q: Nature of zeroes of x^2 + 4x + 4?
A: D = 0, so two equal real zeroes.
Q: Nature of zeroes of x^2 + 0x - 4?
A: D = 16, so two distinct real zeroes.
Q: Nature of zeroes of x^2 - 6x + 9?
A: D = 0, so two equal real zeroes.
Q: Nature of zeroes of x^2 + 3x + 5?
A: D = -11, so no real zeroes.
Q: Nature of zeroes of x^2 + 1x - 12?
A: D = 49, so two distinct real zeroes.
Q: Find the zeroes of 2x - 8.
A: 4.
Q: Find the zeroes of 5x + 10.
A: -2.
Q: Find the zero of 7x - 21.
A: 3.
Q: If x = 2 is a zero of x^2 - kx + 6, find k.
A: k = 5.
Q: If x = 1 is a zero of x^2 + kx - 3, find k.
A: k = 2.
Q: Divide x^2 - 5x + 6 by x - 2.
A: Quotient x - 3, remainder 0.
Q: Divide x^2 + 3x + 2 by x + 1.
A: Quotient x + 2, remainder 0.
Q: What is the remainder when x^2 - 1 is divided by x - 1?
A: 0.
Q: What is the degree of the remainder when dividing by a quadratic?
A: Less than 2.
Q: Can a cubic have exactly one real zero?
A: Yes, the graph can cross the x-axis once.
Q: Is 3 a zero of x^2 - 9?
A: Yes, since 9 - 9 = 0.
Q: Is -3 a zero of x^2 - 9?
A: Yes, since 9 - 9 = 0.
@quiz
? The zeroes of x^2 - 5x + 6 are
+ 2 and 3
- 3 and 4
- -2 and -3
- -5 and 6
! Factorise.
? The sum of the zeroes of x^2 - 5x + 6 is
- 7
+ 5
- 6
- -5
! -b/a.
? A quadratic has zeroes 2 and 3 (a = 1). Its constant term is
- -5
- -6
+ 6
- 5
! c = product.
? The zeroes of x^2 - 5x + 4 are
- 2 and 5
+ 1 and 4
- -1 and -4
- -5 and 4
! Factorise.
? The sum of the zeroes of x^2 - 5x + 4 is
+ 5
- 6
- -5
- 4
! -b/a.
? A quadratic has zeroes 1 and 4 (a = 1). Its constant term is
- -5
- 5
+ 4
- -4
! c = product.
? The zeroes of x^2 - 4x - 5 are
- -4 and -5
- 0 and 6
- 1 and -5
+ -1 and 5
! Factorise.
? The sum of the zeroes of x^2 - 4x - 5 is
- 5
- -4
- -5
+ 4
! -b/a.
? A quadratic has zeroes -1 and 5 (a = 1). Its constant term is
- -4
- 5
+ -5
- 4
! c = product.
? The zeroes of x^2 + 5x + 6 are
- 5 and 6
- 2 and 3
+ -2 and -3
- -1 and -2
! Factorise.
? The sum of the zeroes of x^2 + 5x + 6 is
- 7
- 6
+ -5
- 5
! -b/a.
? A quadratic has zeroes -2 and -3 (a = 1). Its constant term is
- -5
- 5
- -6
+ 6
! c = product.
? The zeroes of x^2 - 6x + 9 are
+ 3 and 3
- -3 and -3
- 4 and 4
- -6 and 9
! Factorise.
? The sum of the zeroes of x^2 - 6x + 9 is
- 10
+ 6
- 9
- -6
! -b/a.
? A quadratic has zeroes 3 and 3 (a = 1). Its constant term is
+ 9
- 6
- -9
- -6
! c = product.
? The zeroes of x^2 - 6x are
- -6 and 0
- 0 and -6
+ 0 and 6
- 1 and 7
! Factorise.
? The sum of the zeroes of x^2 - 6x is
- 0
- 1
- -6
+ 6
! -b/a.
? A quadratic has zeroes 0 and 6 (a = 1). Its constant term is
- -6
- 1
+ 0
- 6
! c = product.
? The zeroes of x^2 + 2x - 8 are
- 2 and -8
- -3 and 3
+ -4 and 2
- 4 and -2
! Factorise.
? The sum of the zeroes of x^2 + 2x - 8 is
- -8
+ -2
- -7
- 2
! -b/a.
? A quadratic has zeroes -4 and 2 (a = 1). Its constant term is
- 2
+ -8
- -2
- 8
! c = product.
? The zeroes of x^2 - 12x + 35 are
- -12 and 35
- 6 and 8
- -5 and -7
+ 5 and 7
! Factorise.
? The sum of the zeroes of x^2 - 12x + 35 is
+ 12
- 36
- -12
- 35
! -b/a.
? A quadratic has zeroes 5 and 7 (a = 1). Its constant term is
- -12
- 12
+ 35
- -35
! c = product.
? The zeroes of x^2 + 7x + 6 are
- 7 and 6
+ -1 and -6
- 0 and -5
- 1 and 6
! Factorise.
? The sum of the zeroes of x^2 + 7x + 6 is
- 7
- -6
- 6
+ -7
! -b/a.
? A quadratic has zeroes -1 and -6 (a = 1). Its constant term is
- -7
- -6
+ 6
- 7
! c = product.
? The zeroes of x^2 + 5x - 14 are
- 5 and -14
- -2 and 7
+ 2 and -7
- 3 and -6
! Factorise.
? The sum of the zeroes of x^2 + 5x - 14 is
- -13
- -14
- 5
+ -5
! -b/a.
? A quadratic has zeroes 2 and -7 (a = 1). Its constant term is
+ -14
- 14
- 5
- -5
! c = product.
? The zeroes of x^2 - 2x + 1 are
- 2 and 2
+ 1 and 1
- -1 and -1
- -2 and 1
! Factorise.
? The sum of the zeroes of x^2 - 2x + 1 is
+ 2
- 3
- 1
- -2
! -b/a.
? A quadratic has zeroes 1 and 1 (a = 1). Its constant term is
- -1
+ 1
- -2
- 2
! c = product.
? The zeroes of x^2 - 8x + 12 are
- -6 and -2
- 7 and 3
+ 6 and 2
- -8 and 12
! Factorise.
? The sum of the zeroes of x^2 - 8x + 12 is
- 13
+ 8
- -8
- 12
! -b/a.
? A quadratic has zeroes 6 and 2 (a = 1). Its constant term is
- -8
- -12
- 8
+ 12
! c = product.
? The zeroes of x^2 - 5x - 24 are
+ -3 and 8
- -5 and -24
- -2 and 9
- 3 and -8
! Factorise.
? The sum of the zeroes of x^2 - 5x - 24 is
- -5
+ 5
- -23
- -24
! -b/a.
? A quadratic has zeroes -3 and 8 (a = 1). Its constant term is
- 24
- 5
- -5
+ -24
! c = product.
? The zeroes of x^2 - 13x + 36 are
- -13 and 36
- 5 and 10
- -4 and -9
+ 4 and 9
! Factorise.
? The sum of the zeroes of x^2 - 13x + 36 is
- 36
+ 13
- -13
- 37
! -b/a.
? A quadratic has zeroes 4 and 9 (a = 1). Its constant term is
+ 36
- 13
- -13
- -36
! c = product.
? The zeroes of x^2 - 25 are
- 0 and -25
- -4 and 6
- 5 and -5
+ -5 and 5
! Factorise.
? The sum of the zeroes of x^2 - 25 is
- -25
+ 0
- 1
- -24
! -b/a.
? A quadratic has zeroes -5 and 5 (a = 1). Its constant term is
+ -25
- 25
- 2
- 0
! c = product.
? The zeroes of x^2 - 5x - 14 are
- -7 and 2
- -5 and -14
- 8 and -1
+ 7 and -2
! Factorise.
? The sum of the zeroes of x^2 - 5x - 14 is
- -5
- -14
+ 5
- -13
! -b/a.
? A quadratic has zeroes 7 and -2 (a = 1). Its constant term is
+ -14
- 14
- -5
- 5
! c = product.
? A cubic with leading coefficient 1 has zeroes 1, 2, 3. The coefficient of x^2 is
+ -6
- 11
- -5
- 6
! b = -(sum).
? A cubic with leading coefficient 1 has zeroes 1, 2, 3. The constant term is
+ -6
- 6
- -5
- 11
! d = -(product).
? A cubic with leading coefficient 1 has zeroes 2, 3, 4. The coefficient of x^2 is
- 24
- 9
+ -9
- 26
! b = -(sum).
? A cubic with leading coefficient 1 has zeroes 2, 3, 4. The constant term is
- 26
- 9
- 24
+ -24
! d = -(product).
? A cubic with leading coefficient 1 has zeroes 1, 3, -2. The coefficient of x^2 is
- 2
- -6
+ -2
- -5
! b = -(sum).
? A cubic with leading coefficient 1 has zeroes 1, 3, -2. The constant term is
+ 6
- -6
- 2
- -5
! d = -(product).
? A cubic with leading coefficient 1 has zeroes 1, -1, 4. The coefficient of x^2 is
- 4
+ -4
- -3
- -1
! b = -(sum).
? A cubic with leading coefficient 1 has zeroes 1, -1, 4. The constant term is
- -1
+ 4
- 5
- -4
! d = -(product).
? A cubic with leading coefficient 1 has zeroes 2, 2, 3. The coefficient of x^2 is
- 16
- 12
+ -7
- 7
! b = -(sum).
? A cubic with leading coefficient 1 has zeroes 2, 2, 3. The constant term is
- 12
- 16
- 7
+ -12
! d = -(product).
? A cubic with leading coefficient 1 has zeroes -1, 2, 5. The coefficient of x^2 is
- -10
+ -6
- 3
- 6
! b = -(sum).
? A cubic with leading coefficient 1 has zeroes -1, 2, 5. The constant term is
- 3
- 6
+ 10
- -10
! d = -(product).
? A cubic with leading coefficient 1 has zeroes 3, 4, 5. The coefficient of x^2 is
+ -12
- 12
- 60
- 47
! b = -(sum).
? A cubic with leading coefficient 1 has zeroes 3, 4, 5. The constant term is
+ -60
- 60
- 47
- 12
! d = -(product).
? A cubic with leading coefficient 1 has zeroes 1, 5, 2. The coefficient of x^2 is
- 8
- 17
- 10
+ -8
! b = -(sum).
? A cubic with leading coefficient 1 has zeroes 1, 5, 2. The constant term is
- 17
- 8
+ -10
- 10
! d = -(product).
? Nature of zeroes of x^2 - 5x + 6
+ two distinct real zeroes
- two equal real zeroes
- one real zero and one imaginary
- no real zeroes
! b^2 - 4ac = 1.
? Nature of zeroes of x^2 - 7x + 12
- no real zeroes
- one real zero and one imaginary
+ two distinct real zeroes
- two equal real zeroes
! b^2 - 4ac = 1.
? Nature of zeroes of x^2 + 2x - 8
- one real zero and one imaginary
- two equal real zeroes
- no real zeroes
+ two distinct real zeroes
! b^2 - 4ac = 36.
? Nature of zeroes of x^2 - 2x + 1
+ two equal real zeroes
- no real zeroes
- two distinct real zeroes
- one real zero and one imaginary
! b^2 - 4ac = 0.
? Nature of zeroes of x^2 + 1x + 1
- two equal real zeroes
- two distinct real zeroes
- one real zero and one imaginary
+ no real zeroes
! b^2 - 4ac = -3.
? Nature of zeroes of x^2 + 4x + 4
+ two equal real zeroes
- one real zero and one imaginary
- no real zeroes
- two distinct real zeroes
! b^2 - 4ac = 0.
? Nature of zeroes of x^2 + 0x - 4
+ two distinct real zeroes
- no real zeroes
- two equal real zeroes
- one real zero and one imaginary
! b^2 - 4ac = 16.
? Nature of zeroes of x^2 - 6x + 9
- two distinct real zeroes
+ two equal real zeroes
- no real zeroes
- one real zero and one imaginary
! b^2 - 4ac = 0.
? Nature of zeroes of x^2 + 3x + 5
- two distinct real zeroes
- one real zero and one imaginary
- two equal real zeroes
+ no real zeroes
! b^2 - 4ac = -11.
? Nature of zeroes of x^2 + 1x - 12
- no real zeroes
+ two distinct real zeroes
- two equal real zeroes
- one real zero and one imaginary
! b^2 - 4ac = 49.
? Zero of 3x - 6 is
+ 2
- -2
- 6
- 3
! x = 2.
? Zero of 2x + 5 is
+ -5/2
- 5/2
- 2/5
- -2/5
! -b/a.
? The degree of 5x^3 - x + 1 is
- 0
- 5
- 1
+ 3
! Highest power.
? A quadratic graph that touches the x-axis has
+ equal zeroes
- two zeroes
- no zero
- three zeroes
! D = 0.
? The graph of y = x^2 + 1 meets the x-axis
- twice
- once
- thrice
+ never
! No real zero.
? If p(x) = (x - 2)(x + 3) then zeroes are
+ 2 and -3
- -2 and -3
- -2 and 3
- 2 and 3
! Factor theorem.
? What is the degree of a polynomial?
- The x-coordinates of the points where the graph meets the x-axis
- ax^2 + bx + c with a not zero
- Less than 2
+ The highest power of the variable
! Answer: The highest power of the variable.
? What is a zero of a polynomial?
+ A value of x for which p(x) = 0
- c/a
- The highest power of the variable
- A parabola
! Answer: A value of x for which p(x) = 0.
? What is the geometrical meaning of zeroes?
+ The x-coordinates of the points where the graph meets the x-axis
- Zero (for a non-zero constant)
- The highest power of the variable
- A value of x for which p(x) = 0
! Answer: The x-coordinates of the points where the graph meets the x-axis.
? What is the graph of a quadratic?
- 0
- ax^2 + bx + c with a not zero
+ A parabola
- Less than 2
! Answer: A parabola.
? What is the sum of zeroes of ax^2 + bx + c?
- A value of x for which p(x) = 0
- Less than 2
+ -b/a
- 0
! Answer: -b/a.
? What is the product of zeroes of ax^2 + bx + c?
- 0
- A parabola
+ c/a
- Zero (for a non-zero constant)
! Answer: c/a.
? What is the sum of zeroes of a cubic ax^3 + bx^2 + cx + d?
- Zero (for a non-zero constant)
- Less than 2
- 0
+ -b/a
! Answer: -b/a.
? What is the product of zeroes of a cubic?
- Less than 2
- ax^2 + bx + c with a not zero
+ -d/a
- A value of x for which p(x) = 0
! Answer: -d/a.
? What is a constant polynomial's degree?
- The highest power of the variable
+ Zero (for a non-zero constant)
- 0
- -d/a
! Answer: Zero (for a non-zero constant).
? What is a quadratic polynomial's standard form?
- 0
- The x-coordinates of the points where the graph meets the x-axis
+ ax^2 + bx + c with a not zero
- A value of x for which p(x) = 0
! Answer: ax^2 + bx + c with a not zero.
? Find the zeroes of x^2 - 5x + 6.
+ 2 and 3
- 4
- -2
- -1 and -6
! Answer: 2 and 3.
? Find the sum and product of the zeroes of x^2 - 5x + 6.
- -4 and 2
- 3 and 3
- -2
+ Sum = 5, product = 6
! Answer: Sum = 5, product = 6.
? Form a quadratic polynomial with zeroes 2 and 3.
- x^2 - (-5)x + (6)
- x^2 - (6)x + (0)
- x^2 - (-7)x + (6)
+ x^2 - (5)x + (6)
! Answer: x^2 - (5)x + (6).
? Find the zeroes of x^2 - 5x + 4.
- 3 and 3
+ 1 and 4
- 4
- Sum = 6, product = 0
! Answer: 1 and 4.
? Find the sum and product of the zeroes of x^2 - 5x + 4.
+ Sum = 5, product = 4
- Sum = 5, product = -24
- -1 and -6
- Sum = 6, product = 0
! Answer: Sum = 5, product = 4.
? Form a quadratic polynomial with zeroes 1 and 4.
- x^2 - (6)x + (9)
- x^2 - (2)x + (1)
+ x^2 - (5)x + (4)
- x^2 - (-5)x + (6)
! Answer: x^2 - (5)x + (4).
? Find the zeroes of x^2 - 4x - 5.
- Sum = -5, product = 6
- -2 and -3
- 6 and 2
+ -1 and 5
! Answer: -1 and 5.
? Find the sum and product of the zeroes of x^2 - 4x - 5.
+ Sum = 4, product = -5
- Sum = 12, product = 35
- 4
- Sum = 6, product = 9
! Answer: Sum = 4, product = -5.
? Form a quadratic polynomial with zeroes -1 and 5.
- x^2 - (5)x + (-24)
+ x^2 - (4)x + (-5)
- x^2 - (5)x + (4)
- x^2 - (8)x + (12)
! Answer: x^2 - (4)x + (-5).
? Find the zeroes of x^2 + 5x + 6.
- Sum = -7, product = 6
+ -2 and -3
- 1 and 4
- Sum = 6, product = 0
! Answer: -2 and -3.
? Find the sum and product of the zeroes of x^2 + 5x + 6.
- 3
- 2 and -7
+ Sum = -5, product = 6
- Sum = 13, product = 36
! Answer: Sum = -5, product = 6.
? Form a quadratic polynomial with zeroes -2 and -3.
- x^2 - (5)x + (-14)
- x^2 - (12)x + (35)
+ x^2 - (-5)x + (6)
- x^2 - (6)x + (0)
! Answer: x^2 - (-5)x + (6).
? Find the zeroes of x^2 - 6x + 9.
+ 3 and 3
- Sum = -2, product = -8
- Sum = 6, product = 9
- -4 and 2
! Answer: 3 and 3.
? Find the sum and product of the zeroes of x^2 - 6x + 9.
+ Sum = 6, product = 9
- Sum = -2, product = -8
- -4 and 2
- 0 and 6
! Answer: Sum = 6, product = 9.
? Form a quadratic polynomial with zeroes 3 and 3.
- x^2 - (-5)x + (6)
+ x^2 - (6)x + (9)
- x^2 - (-7)x + (6)
- x^2 - (6)x + (0)
! Answer: x^2 - (6)x + (9).
? Find the zeroes of x^2 - 6x.
- Sum = 12, product = 35
- -1 and 5
- Sum = -7, product = 6
+ 0 and 6
! Answer: 0 and 6.
? Find the sum and product of the zeroes of x^2 - 6x.
- Sum = 8, product = 12
- -3 and 8
+ Sum = 6, product = 0
- -1 and -6
! Answer: Sum = 6, product = 0.
? Form a quadratic polynomial with zeroes 0 and 6.
- x^2 - (-7)x + (6)
- x^2 - (0)x + (-25)
+ x^2 - (6)x + (0)
- x^2 - (12)x + (35)
! Answer: x^2 - (6)x + (0).
? Find the zeroes of x^2 + 2x - 8.
+ -4 and 2
- -5 and 5
- -2
- Sum = 12, product = 35
! Answer: -4 and 2.
? Find the sum and product of the zeroes of x^2 + 2x - 8.
- 1 and 4
+ Sum = -2, product = -8
- 2 and 3
- Sum = 5, product = 4
! Answer: Sum = -2, product = -8.
? Form a quadratic polynomial with zeroes -4 and 2.
+ x^2 - (-2)x + (-8)
- x^2 - (13)x + (36)
- x^2 - (-5)x + (-14)
- x^2 - (-5)x + (6)
! Answer: x^2 - (-2)x + (-8).
? Find the zeroes of x^2 - 12x + 35.
+ 5 and 7
- 4 and 9
- 1 and 1
- 7 and -2
! Answer: 5 and 7.
? Find the sum and product of the zeroes of x^2 - 12x + 35.
- Sum = 0, product = -25
- Sum = 5, product = -14
+ Sum = 12, product = 35
- Sum = 5, product = 4
! Answer: Sum = 12, product = 35.
? Form a quadratic polynomial with zeroes 5 and 7.
- x^2 - (8)x + (12)
- x^2 - (-7)x + (6)
- x^2 - (5)x + (-14)
+ x^2 - (12)x + (35)
! Answer: x^2 - (12)x + (35).
? Find the zeroes of x^2 + 7x + 6.
- 3 and 3
+ -1 and -6
- Sum = 6, product = 9
- Sum = -7, product = 6
! Answer: -1 and -6.
? Find the sum and product of the zeroes of x^2 + 7x + 6.
- 7 and -2
- Sum = 5, product = 6
- 1 and 1
+ Sum = -7, product = 6
! Answer: Sum = -7, product = 6.
? Form a quadratic polynomial with zeroes -1 and -6.
+ x^2 - (-7)x + (6)
- x^2 - (5)x + (6)
- x^2 - (0)x + (-25)
- x^2 - (4)x + (-5)
! Answer: x^2 - (-7)x + (6).
? Find the zeroes of x^2 + 5x - 14.
- 4
- -5 and 5
+ 2 and -7
- Sum = 12, product = 35
! Answer: 2 and -7.
? Find the sum and product of the zeroes of x^2 + 5x - 14.
- Sum = 0, product = -25
- Sum = 5, product = 6
+ Sum = -5, product = -14
- Sum = 6, product = 0
! Answer: Sum = -5, product = -14.
? Form a quadratic polynomial with zeroes 2 and -7.
- x^2 - (13)x + (36)
+ x^2 - (-5)x + (-14)
- x^2 - (0)x + (-25)
- x^2 - (8)x + (12)
! Answer: x^2 - (-5)x + (-14).
? Find the zeroes of x^2 - 2x + 1.
+ 1 and 1
- 2 and 3
- 6 and 2
- 1 and 4
! Answer: 1 and 1.
? Find the sum and product of the zeroes of x^2 - 2x + 1.
- 3
+ Sum = 2, product = 1
- 1 and 1
- Sum = 6, product = 9
! Answer: Sum = 2, product = 1.
? Form a quadratic polynomial with zeroes 1 and 1.
- x^2 - (6)x + (0)
- x^2 - (-2)x + (-8)
- x^2 - (0)x + (-25)
+ x^2 - (2)x + (1)
! Answer: x^2 - (2)x + (1).
? Find the zeroes of x^2 - 8x + 12.
- -1 and -6
+ 6 and 2
- 3 and 3
- Sum = 0, product = -25
! Answer: 6 and 2.
? Find the sum and product of the zeroes of x^2 - 8x + 12.
- 1 and 1
- Sum = 5, product = -24
- Sum = 5, product = 4
+ Sum = 8, product = 12
! Answer: Sum = 8, product = 12.
? Form a quadratic polynomial with zeroes 6 and 2.
- x^2 - (6)x + (9)
- x^2 - (-7)x + (6)
- x^2 - (5)x + (-24)
+ x^2 - (8)x + (12)
! Answer: x^2 - (8)x + (12).
? Find the zeroes of x^2 - 5x - 24.
- 4
+ -3 and 8
- 2 and -7
- Sum = -5, product = 6
! Answer: -3 and 8.
? Find the sum and product of the zeroes of x^2 - 5x - 24.
- 1 and 1
- 3
- Sum = -5, product = 6
+ Sum = 5, product = -24
! Answer: Sum = 5, product = -24.
? Form a quadratic polynomial with zeroes -3 and 8.
- x^2 - (-2)x + (-8)
- x^2 - (5)x + (-14)
- x^2 - (-7)x + (6)
+ x^2 - (5)x + (-24)
! Answer: x^2 - (5)x + (-24).
? Find the zeroes of x^2 - 13x + 36.
+ 4 and 9
- -2 and -3
- -1 and 5
- 0 and 6
! Answer: 4 and 9.
? Find the sum and product of the zeroes of x^2 - 13x + 36.
- Sum = 0, product = -25
+ Sum = 13, product = 36
- Sum = -7, product = 6
- 3 and 3
! Answer: Sum = 13, product = 36.
? Form a quadratic polynomial with zeroes 4 and 9.
- x^2 - (-2)x + (-8)
- x^2 - (8)x + (12)
- x^2 - (0)x + (-25)
+ x^2 - (13)x + (36)
! Answer: x^2 - (13)x + (36).
? Find the zeroes of x^2 - 25.
+ -5 and 5
- Sum = -5, product = -14
- Sum = -5, product = 6
- -1 and -6
! Answer: -5 and 5.
? Find the sum and product of the zeroes of x^2 - 25.
- Sum = 8, product = 12
- 3
- Sum = 13, product = 36
+ Sum = 0, product = -25
! Answer: Sum = 0, product = -25.
? Form a quadratic polynomial with zeroes -5 and 5.
- x^2 - (2)x + (1)
+ x^2 - (0)x + (-25)
- x^2 - (8)x + (12)
- x^2 - (4)x + (-5)
! Answer: x^2 - (0)x + (-25).
? Find the zeroes of x^2 - 5x - 14.
- Sum = 12, product = 35
+ 7 and -2
- Sum = -7, product = 6
- 1 and 4
! Answer: 7 and -2.
? Find the sum and product of the zeroes of x^2 - 5x - 14.
- 4 and 9
- -3 and 8
+ Sum = 5, product = -14
- Sum = 2, product = 1
! Answer: Sum = 5, product = -14.
? Form a quadratic polynomial with zeroes 7 and -2.
+ x^2 - (5)x + (-14)
- x^2 - (6)x + (0)
- x^2 - (2)x + (1)
- x^2 - (4)x + (-5)
! Answer: x^2 - (5)x + (-14).
? Find a quadratic polynomial with sum of zeroes 3 and product 2.
- x^2 - (-4)x + (3)
+ x^2 - (3)x + (2)
- x^2 - (4)x + (4)
- x^2 - (9)x + (20)
! Answer: x^2 - (3)x + (2).
? Find a quadratic polynomial with sum of zeroes 5 and product 6.
- x^2 - (-4)x + (3)
- x^2 - (7)x + (10)
- x^2 - (9)x + (20)
+ x^2 - (5)x + (6)
! Answer: x^2 - (5)x + (6).
@visual
formula | Polynomials | sum = -b/a ; product = c/a
@problems
P: Find the zeroes of x^2 - 5x + 6.
A: x^2 - 5x + 6 = (x - 2)(x - 3) so the zeroes are 2 and 3.
R: 1 | Factorises correctly
R: 1 | States both zeroes 2 and 3
