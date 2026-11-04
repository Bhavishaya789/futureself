# Complex numbers and quadratic equations
minutes: 45
yt: class 11 complex numbers
@study
A complex number is z = a + ib with i^2 = -1. Its modulus is |z| = sqrt(a^2 + b^2), its conjugate is a - ib, and its argument is the angle theta with tan theta = b/a (in the correct quadrant). The quadratic ax^2 + bx + c = 0 has roots (-b +- sqrt(b^2 - 4ac))/2a, which are complex when the discriminant is negative.
## Deep dive: algebra of complex numbers
A complex number z = a + ib has real part a and imaginary part b. Two complex numbers are equal when their real and imaginary parts are equal. Addition and subtraction are done part by part; multiplication uses (a + ib)(c + id) = (ac - bd) + i(ad + bc). The powers of i repeat with period 4: i^1 = i, i^2 = -1, i^3 = -i, i^4 = 1, so i^n depends on n mod 4. The conjugate of z is z-bar = a - ib, and z x z-bar = a^2 + b^2 = |z|^2, which is how division is done: (a + ib)/(c + id) = (a + ib)(c - id)/(c^2 + d^2).
## Deep dive: modulus, argument and the Argand plane
Each complex number is a point (a, b) on the Argand plane. The modulus |z| = sqrt (a^2 + b^2) is the distance from the origin; the argument is the angle the line from the origin makes with the positive real axis; the principal argument lies in (-pi, pi]. Polar form: z = r (cos theta + i sin theta). Properties: |z1 z2| = |z1||z2|, |z1/z2| = |z1|/|z2|, |z-bar| = |z|, z + z-bar = 2 Re(z), z - z-bar = 2i Im(z), |z1 + z2| <= |z1| + |z2| (triangle inequality). The square root of a complex number a + ib is found by assuming x + iy and equating squares.
## Deep dive: quadratic equations with complex roots
For ax^2 + bx + c = 0 with real a, b, c the discriminant D = b^2 - 4ac decides the roots: D > 0 two distinct real roots, D = 0 two equal real roots, D < 0 two complex conjugate roots (-b +- i sqrt(-D))/2a. Sum of roots = -b/a and product = c/a hold for complex roots too. A quadratic with given roots p and q is x^2 - (p + q)x + pq = 0. The cube roots of unity are 1, w and w^2 where w = (-1 + i sqrt 3)/2, with 1 + w + w^2 = 0 and w^3 = 1.
**Common mistakes:** taking i^2 as 1, forgetting to change the sign of the imaginary part for the conjugate, and reading the argument from the wrong quadrant.
## Hindi saransh
z = a + ib, |z| = sqrt(a^2 + b^2). D < 0 par roots complex conjugate pair.
> Roots of a real quadratic with D < 0 are conjugates of each other.
@formulas
## Basics
Imaginary unit | i^2 = -1 | 
Powers of i | i^4n = 1, i^(4n+1) = i, i^(4n+2) = -1, i^(4n+3) = -i | 
Conjugate | a - ib | for z = a + ib
Modulus | sqrt (a^2 + b^2) | 
Product with conjugate | z z-bar = |z|^2 | 
Multiplication | (a + ib)(c + id) = (ac - bd) + i (ad + bc) | 
Division | (a + ib)/(c + id) = (a + ib)(c - id)/(c^2 + d^2) | 
## Polar form
Polar form | r (cos theta + i sin theta) | 
Argument | tan theta = b/a | principal value, check quadrant
Product rule | |z1 z2| = |z1||z2| | 
Triangle inequality | |z1 + z2| <= |z1| + |z2| | 
## Quadratics
Roots | x = (-b +- sqrt (b^2 - 4ac))/(2a) | 
Discriminant | D = b^2 - 4ac | D<0 gives conjugate complex roots
Sum of roots | -b/a | 
Product of roots | c/a | 
Cube roots of unity | 1, w, w^2 with w = (-1 + i sqrt 3)/2 | 1 + w + w^2 = 0

@qa
Q: What is i?
A: The imaginary unit with i^2 = -1.
Q: What is the value of i^2?
A: -1.
Q: What is the value of i^3?
A: -i.
Q: What is the value of i^4?
A: 1.
Q: What is the conjugate of a + ib?
A: a - ib.
Q: What is the modulus of a + ib?
A: sqrt (a^2 + b^2).
Q: What is z times its conjugate?
A: |z|^2 = a^2 + b^2.
Q: When are two complex numbers equal?
A: When their real and imaginary parts are equal.
Q: What is the Argand plane?
A: The plane in which a + ib is shown as the point (a, b).
Q: What is the polar form of a complex number?
A: r (cos theta + i sin theta).
Q: What is the principal argument range?
A: From -pi (excluded) to pi (included).
Q: What are the roots of x^2 + 1 = 0?
A: i and -i.
Q: Do the roots of a real quadratic with D < 0 form a conjugate pair?
A: Yes.
Q: What is the sum of the cube roots of unity?
A: 0.
Q: What is w^3 where w is a complex cube root of unity?
A: 1.
Q: What is the triangle inequality for complex numbers?
A: |z1 + z2| <= |z1| + |z2|.
Q: What is the modulus of the product of two complex numbers?
A: The product of their moduli.
Q: What is the value of i^n for n divisible by 4?
A: 1.
Q: Find the value of i^1.
A: i.
Q: Find the value of i^2.
A: -1.
Q: Find the value of i^3.
A: -i.
Q: Find the value of i^4.
A: 1.
Q: Find the value of i^5.
A: i.
Q: Find the value of i^6.
A: -1.
Q: Find the value of i^7.
A: -i.
Q: Find the value of i^8.
A: 1.
Q: Find the value of i^9.
A: i.
Q: Find the value of i^10.
A: -1.
Q: Find the value of i^11.
A: -i.
Q: Find the value of i^12.
A: 1.
Q: Find the value of i^13.
A: i.
Q: Find the value of i^14.
A: -1.
Q: Find the value of i^15.
A: -i.
Q: Find the value of i^16.
A: 1.
Q: Find the value of i^17.
A: i.
Q: Find the value of i^18.
A: -1.
Q: Find the value of i^19.
A: -i.
Q: Find the value of i^20.
A: 1.
Q: Find the value of i^21.
A: i.
Q: Find the value of i^22.
A: -1.
Q: Find the value of i^23.
A: -i.
Q: Find the value of i^24.
A: 1.
Q: Find the value of i^25.
A: i.
Q: Find the value of i^26.
A: -1.
Q: Find the value of i^27.
A: -i.
Q: Find the value of i^28.
A: 1.
Q: Find the value of i^29.
A: i.
Q: Find the value of i^30.
A: -1.
Q: Find the value of i^31.
A: -i.
Q: Find the value of i^32.
A: 1.
Q: Find the value of i^33.
A: i.
Q: Find the value of i^34.
A: -1.
Q: Find the value of i^35.
A: -i.
Q: Find the value of i^36.
A: 1.
Q: Find the value of i^37.
A: i.
Q: Find the value of i^38.
A: -1.
Q: Find the value of i^39.
A: -i.
Q: Find the value of i^40.
A: 1.
Q: Find the modulus of 3 + 4i.
A: 5.
Q: Find the conjugate of 3 + 4i.
A: 3 - 4i.
Q: Find the modulus of 5 + 12i.
A: 13.
Q: Find the conjugate of 5 + 12i.
A: 5 - 12i.
Q: Find the modulus of 8 + 15i.
A: 17.
Q: Find the conjugate of 8 + 15i.
A: 8 - 15i.
Q: Find the modulus of 7 + 24i.
A: 25.
Q: Find the conjugate of 7 + 24i.
A: 7 - 24i.
Q: Find the modulus of 20 + 21i.
A: 29.
Q: Find the conjugate of 20 + 21i.
A: 20 - 21i.
Q: Find the modulus of 9 + 40i.
A: 41.
Q: Find the conjugate of 9 + 40i.
A: 9 - 40i.
Q: Find the modulus of 6 + 8i.
A: 10.
Q: Find the conjugate of 6 + 8i.
A: 6 - 8i.
Q: Find the modulus of 12 + 16i.
A: 20.
Q: Find the conjugate of 12 + 16i.
A: 12 - 16i.
Q: Find the modulus of 1 + i.
A: sqrt 2.
Q: Find the conjugate of 1 + i.
A: 1 - i.
Q: Find the modulus of 2 + 3i.
A: sqrt 13.
Q: Find the conjugate of 2 + 3i.
A: 2 - 3i.
Q: Find the modulus of 1 + 2i.
A: sqrt 5.
Q: Find the conjugate of 1 + 2i.
A: 1 - 2i.
Q: Find the modulus of 4 + 7i.
A: sqrt 65.
Q: Find the conjugate of 4 + 7i.
A: 4 - 7i.
Q: Find the modulus of 5i.
A: 5.
Q: Find the conjugate of 5i.
A: -5i.
Q: Find the modulus of -3 + 4i.
A: 5.
Q: Find the conjugate of -3 + 4i.
A: -3 - 4i.
Q: Find the modulus of -5 + 12i.
A: 13.
Q: Find the conjugate of -5 + 12i.
A: -5 - 12i.
Q: Find the modulus of 6 - 8i.
A: 10.
Q: Find the conjugate of 6 - 8i.
A: 6 + 8i.
Q: Find (1 + 2i) + (3 + 4i).
A: 4 + 6i.
Q: Find (1 + 2i) - (3 + 4i).
A: -2 - 2i.
Q: Find (1 + 2i)(3 + 4i).
A: -5 + 10i.
Q: Find (1 + 2i)/(3 + 4i).
A: 11/25 + (2/25)i.
Q: Find (2 + 3i) + (1 - i).
A: 3 + 2i.
Q: Find (2 + 3i) - (1 - i).
A: 1 + 4i.
Q: Find (2 + 3i)(1 - i).
A: 5 + i.
Q: Find (2 + 3i)/(1 - i).
A: -1/2 + (5/2)i.
Q: Find (3 - 2i) + (2 + 5i).
A: 5 + 3i.
Q: Find (3 - 2i) - (2 + 5i).
A: 1 - 7i.
Q: Find (3 - 2i)(2 + 5i).
A: 16 + 11i.
Q: Find (3 - 2i)/(2 + 5i).
A: -4/29 - (19/29)i.
Q: Find (4 + i) + (1 + 4i).
A: 5 + 5i.
Q: Find (4 + i) - (1 + 4i).
A: 3 - 3i.
Q: Find (4 + i)(1 + 4i).
A: 17i.
Q: Find (4 + i)/(1 + 4i).
A: 8/17 - (15/17)i.
Q: Find (5) + (2 + 3i).
A: 7 + 3i.
Q: Find (5) - (2 + 3i).
A: 3 - 3i.
Q: Find (5)(2 + 3i).
A: 10 + 15i.
Q: Find (5)/(2 + 3i).
A: 10/13 - (15/13)i.
Q: Find (2 + 2i) + (1 + i).
A: 3 + 3i.
Q: Find (2 + 2i) - (1 + i).
A: 1 + i.
Q: Find (2 + 2i)(1 + i).
A: 4i.
Q: Find (2 + 2i)/(1 + i).
A: 2 + (0)i.
Q: Find (1 - i) + (1 + i).
A: 2.
Q: Find (1 - i) - (1 + i).
A: -2i.
Q: Find (1 - i)(1 + i).
A: 2.
Q: Find (1 - i)/(1 + i).
A: 0 - (1)i.
Q: Find (3 + 3i) + (2 - 2i).
A: 5 + i.
Q: Find (3 + 3i) - (2 - 2i).
A: 1 + 5i.
Q: Find (3 + 3i)(2 - 2i).
A: 12.
Q: Find (3 + 3i)/(2 - 2i).
A: 0 + (3/2)i.
Q: Find (6 + 2i) + (1 + 3i).
A: 7 + 5i.
Q: Find (6 + 2i) - (1 + 3i).
A: 5 - i.
Q: Find (6 + 2i)(1 + 3i).
A: 20i.
Q: Find (6 + 2i)/(1 + 3i).
A: 6/5 - (8/5)i.
Q: Find (2 - 3i) + (4 + i).
A: 6 - 2i.
Q: Find (2 - 3i) - (4 + i).
A: -2 - 4i.
Q: Find (2 - 3i)(4 + i).
A: 11 - 10i.
Q: Find (2 - 3i)/(4 + i).
A: 5/17 - (14/17)i.
Q: Solve x^2 + 2x + 5 = 0.
A: x = -1 +- 2i.
Q: Find the discriminant of x^2 + 2x + 5.
A: -16.
Q: Solve x^2 + 2x + 10 = 0.
A: x = -1 +- 3i.
Q: Find the discriminant of x^2 + 2x + 10.
A: -36.
Q: Solve x^2 + 4x + 13 = 0.
A: x = -2 +- 3i.
Q: Find the discriminant of x^2 + 4x + 13.
A: -36.
Q: Solve x^2 - 2x + 2 = 0.
A: x = 1 +- 1i.
Q: Find the discriminant of x^2 - 2x + 2.
A: -4.
Q: Solve x^2 - 4x + 5 = 0.
A: x = 2 +- 1i.
Q: Find the discriminant of x^2 - 4x + 5.
A: -4.
Q: Solve x^2 + 6x + 13 = 0.
A: x = -3 +- 2i.
Q: Find the discriminant of x^2 + 6x + 13.
A: -16.
Q: Solve x^2 + 4 = 0.
A: x = +- 2i.
Q: Find the discriminant of x^2 + 0x + 4.
A: -16.
Q: Solve x^2 + 9 = 0.
A: x = +- 3i.
Q: Find the discriminant of x^2 + 0x + 9.
A: -36.
Q: Solve x^2 + 2x + 2 = 0.
A: x = -1 +- 1i.
Q: Find the discriminant of x^2 + 2x + 2.
A: -4.
Q: Solve x^2 - 6x + 10 = 0.
A: x = 3 +- 1i.
Q: Find the discriminant of x^2 - 6x + 10.
A: -4.
Q: Solve x^2 + 4x + 8 = 0.
A: x = -2 +- 2i.
Q: Find the discriminant of x^2 + 4x + 8.
A: -16.
Q: Solve x^2 - 2x + 17 = 0.
A: x = 1 +- 4i.
Q: Find the discriminant of x^2 - 2x + 17.
A: -64.
@quiz
? The value of i^1 is
- 1
- -1
+ i
- -i
! Powers of i repeat every 4.
? The value of i^2 is
+ -1
- i
- -i
- 1
! Powers of i repeat every 4.
? The value of i^3 is
+ -i
- 1
- -1
- i
! Powers of i repeat every 4.
? The value of i^4 is
- i
- -1
- -i
+ 1
! Powers of i repeat every 4.
? The value of i^5 is
+ i
- -1
- 1
- -i
! Powers of i repeat every 4.
? The value of i^6 is
+ -1
- i
- -i
- 1
! Powers of i repeat every 4.
? The value of i^7 is
- 1
+ -i
- -1
- i
! Powers of i repeat every 4.
? The value of i^8 is
+ 1
- -i
- -1
- i
! Powers of i repeat every 4.
? The value of i^9 is
- -1
- 1
- -i
+ i
! Powers of i repeat every 4.
? The value of i^10 is
+ -1
- i
- 1
- -i
! Powers of i repeat every 4.
? The value of i^11 is
+ -i
- 1
- i
- -1
! Powers of i repeat every 4.
? The value of i^12 is
- -i
- i
+ 1
- -1
! Powers of i repeat every 4.
? The value of i^13 is
- -i
- -1
+ i
- 1
! Powers of i repeat every 4.
? The value of i^14 is
- 1
- -i
+ -1
- i
! Powers of i repeat every 4.
? The value of i^15 is
- -1
+ -i
- 1
- i
! Powers of i repeat every 4.
? The value of i^16 is
- i
- -i
+ 1
- -1
! Powers of i repeat every 4.
? The value of i^17 is
- -i
- -1
- 1
+ i
! Powers of i repeat every 4.
? The value of i^18 is
- -i
+ -1
- 1
- i
! Powers of i repeat every 4.
? The value of i^19 is
+ -i
- 1
- -1
- i
! Powers of i repeat every 4.
? The value of i^20 is
- -1
- -i
- i
+ 1
! Powers of i repeat every 4.
? The value of i^21 is
- 1
- -i
- -1
+ i
! Powers of i repeat every 4.
? The value of i^22 is
- -i
- i
+ -1
- 1
! Powers of i repeat every 4.
? The value of i^23 is
- 1
- -1
- i
+ -i
! Powers of i repeat every 4.
? The value of i^24 is
- -1
+ 1
- i
- -i
! Powers of i repeat every 4.
? The value of i^25 is
+ i
- -i
- -1
- 1
! Powers of i repeat every 4.
? The value of i^26 is
- -i
- i
- 1
+ -1
! Powers of i repeat every 4.
? The value of i^27 is
- i
- -1
- 1
+ -i
! Powers of i repeat every 4.
? The value of i^28 is
- -i
- -1
+ 1
- i
! Powers of i repeat every 4.
? The value of i^29 is
- -1
+ i
- 1
- -i
! Powers of i repeat every 4.
? The value of i^30 is
- -i
- i
- 1
+ -1
! Powers of i repeat every 4.
? The value of i^31 is
- -1
+ -i
- i
- 1
! Powers of i repeat every 4.
? The value of i^32 is
- -i
- i
+ 1
- -1
! Powers of i repeat every 4.
? The value of i^33 is
- 1
- -i
- -1
+ i
! Powers of i repeat every 4.
? The value of i^34 is
- 1
- -i
- i
+ -1
! Powers of i repeat every 4.
? The value of i^35 is
- i
- 1
+ -i
- -1
! Powers of i repeat every 4.
? The value of i^36 is
- -1
+ 1
- i
- -i
! Powers of i repeat every 4.
? The value of i^37 is
+ i
- 1
- -1
- -i
! Powers of i repeat every 4.
? The value of i^38 is
- -i
- i
- 1
+ -1
! Powers of i repeat every 4.
? The value of i^39 is
- 1
- -1
- i
+ -i
! Powers of i repeat every 4.
? The value of i^40 is
- -i
+ 1
- -1
- i
! Powers of i repeat every 4.
? The modulus of 3 + 4i is
- sqrt 7
- 7
+ 5
- sqrt 26
! sqrt (a^2 + b^2).
? The conjugate of 3 + 4i is
- -3 - 4i
- -3 + 4i
- 4 + 3i
+ 3 - 4i
! Change the sign of the imaginary part.
? The modulus of 5 + 12i is
+ 13
- sqrt 170
- 17
- sqrt 17
! sqrt (a^2 + b^2).
? The conjugate of 5 + 12i is
- -5 - 12i
- 12 + 5i
+ 5 - 12i
- -5 + 12i
! Change the sign of the imaginary part.
? The modulus of 8 + 15i is
- sqrt 290
- sqrt 23
+ 17
- 23
! sqrt (a^2 + b^2).
? The conjugate of 8 + 15i is
- -8 + 15i
+ 8 - 15i
- 15 + 8i
- -8 - 15i
! Change the sign of the imaginary part.
? The modulus of 7 + 24i is
- sqrt 31
- sqrt 626
- 31
+ 25
! sqrt (a^2 + b^2).
? The conjugate of 7 + 24i is
- -7 - 24i
- -7 + 24i
- 24 + 7i
+ 7 - 24i
! Change the sign of the imaginary part.
? The modulus of 20 + 21i is
- 41
+ 29
- sqrt 41
- sqrt 842
! sqrt (a^2 + b^2).
? The conjugate of 20 + 21i is
+ 20 - 21i
- 21 + 20i
- -20 + 21i
- -20 - 21i
! Change the sign of the imaginary part.
? The modulus of 9 + 40i is
- 49
- sqrt 1682
- sqrt 49
+ 41
! sqrt (a^2 + b^2).
? The conjugate of 9 + 40i is
- -9 - 40i
- 40 + 9i
- -9 + 40i
+ 9 - 40i
! Change the sign of the imaginary part.
? The modulus of 6 + 8i is
- sqrt 101
- sqrt 14
+ 10
- 14
! sqrt (a^2 + b^2).
? The conjugate of 6 + 8i is
- -6 - 8i
- -6 + 8i
+ 6 - 8i
- 8 + 6i
! Change the sign of the imaginary part.
? The modulus of 12 + 16i is
+ 20
- 28
- sqrt 401
- sqrt 28
! sqrt (a^2 + b^2).
? The conjugate of 12 + 16i is
- -12 - 16i
- -12 + 16i
- 16 + 12i
+ 12 - 16i
! Change the sign of the imaginary part.
? The conjugate of 1 + i is
+ 1 - i
- -1 - i
- -1 + i
- 1 + i
! Change the sign of the imaginary part.
? The modulus of 2 + 3i is
- sqrt 14
- sqrt 5
- 5
+ sqrt 13
! sqrt (a^2 + b^2).
? The conjugate of 2 + 3i is
- -2 - 3i
- 3 + 2i
+ 2 - 3i
- -2 + 3i
! Change the sign of the imaginary part.
? The modulus of 1 + 2i is
- sqrt 6
- 3
+ sqrt 5
- sqrt 3
! sqrt (a^2 + b^2).
? The conjugate of 1 + 2i is
- -1 + 2i
+ 1 - 2i
- -1 - 2i
- 2 + i
! Change the sign of the imaginary part.
? The modulus of 4 + 7i is
- 11
- sqrt 11
+ sqrt 65
- sqrt 66
! sqrt (a^2 + b^2).
? The conjugate of 4 + 7i is
- 7 + 4i
- -4 - 7i
+ 4 - 7i
- -4 + 7i
! Change the sign of the imaginary part.
? The modulus of 5i is
- sqrt 26
- 6
- sqrt 5
+ 5
! sqrt (a^2 + b^2).
? The modulus of -3 + 4i is
- 1
+ 5
- sqrt 26
- sqrt 7
! sqrt (a^2 + b^2).
? The conjugate of -3 + 4i is
+ -3 - 4i
- 4 - 3i
- 3 - 4i
- 3 + 4i
! Change the sign of the imaginary part.
? The modulus of -5 + 12i is
+ 13
- sqrt 170
- sqrt 17
- 7
! sqrt (a^2 + b^2).
? The conjugate of -5 + 12i is
- 5 + 12i
- 12 - 5i
- 5 - 12i
+ -5 - 12i
! Change the sign of the imaginary part.
? The modulus of 6 - 8i is
- sqrt 14
- -2
+ 10
- sqrt 101
! sqrt (a^2 + b^2).
? The conjugate of 6 - 8i is
- -6 - 8i
+ 6 + 8i
- -8 + 6i
- -6 + 8i
! Change the sign of the imaginary part.
? (1 + 2i)(3 + 4i) equals
- 4 + 8i
+ -5 + 10i
- 11 - 2i
- -5 - 2i
! (ac - bd) + i (ad + bc).
? (2 + 3i)(1 - i) equals
- -1 - 5i
- 5 - 5i
+ 5 + i
- 3 - 3i
! (ac - bd) + i (ad + bc).
? (3 - 2i)(2 + 5i) equals
- 5 - 10i
- 16 + 19i
+ 16 + 11i
- -4 + 19i
! (ac - bd) + i (ad + bc).
? (4 + i)(1 + 4i) equals
- 8 + 15i
- 15i
- 5 + 4i
+ 17i
! (ac - bd) + i (ad + bc).
? (2 + 2i)(1 + i) equals
- 3 + 2i
- 4
+ 4i
- 0
! (ac - bd) + i (ad + bc).
? (1 - i)(1 + i) equals
- 2 + 2i
+ 2
- 2 - i
- 2i
! (ac - bd) + i (ad + bc).
? (3 + 3i)(2 - 2i) equals
- -12i
- 12 - 12i
- 5 - 6i
+ 12
! (ac - bd) + i (ad + bc).
? (6 + 2i)(1 + 3i) equals
+ 20i
- 16i
- 12 + 16i
- 7 + 6i
! (ac - bd) + i (ad + bc).
? (2 - 3i)(4 + i) equals
+ 11 - 10i
- 11 + 14i
- 5 + 14i
- 6 - 3i
! (ac - bd) + i (ad + bc).
? The discriminant of x^2 + 2x + 5 is
- 16
- -12
+ -16
- -20
! b^2 - 4ac.
? The roots of x^2 + 2x + 5 = 0 are
+ two complex conjugate roots
- two distinct real roots
- one real and one imaginary root
- two equal real roots
! Check D = -16.
? The discriminant of x^2 + 2x + 10 is
+ -36
- -32
- 36
- -40
! b^2 - 4ac.
? The roots of x^2 + 2x + 10 = 0 are
- two equal real roots
- two distinct real roots
- one real and one imaginary root
+ two complex conjugate roots
! Check D = -36.
? The discriminant of x^2 + 4x + 13 is
- -32
- -40
- 36
+ -36
! b^2 - 4ac.
? The roots of x^2 + 4x + 13 = 0 are
- two equal real roots
+ two complex conjugate roots
- two distinct real roots
- one real and one imaginary root
! Check D = -36.
? The discriminant of x^2 - 2x + 2 is
+ -4
- 4
- 0
- -8
! b^2 - 4ac.
? The roots of x^2 - 2x + 2 = 0 are
- two distinct real roots
+ two complex conjugate roots
- two equal real roots
- one real and one imaginary root
! Check D = -4.
? The discriminant of x^2 - 4x + 5 is
+ -4
- 0
- -8
- 4
! b^2 - 4ac.
? The roots of x^2 - 4x + 5 = 0 are
- two distinct real roots
+ two complex conjugate roots
- two equal real roots
- one real and one imaginary root
! Check D = -4.
? The discriminant of x^2 + 6x + 13 is
- -12
- 16
+ -16
- -20
! b^2 - 4ac.
? The roots of x^2 + 6x + 13 = 0 are
- two equal real roots
+ two complex conjugate roots
- two distinct real roots
- one real and one imaginary root
! Check D = -16.
? The discriminant of x^2 + 0x + 4 is
- -12
- -20
- 16
+ -16
! b^2 - 4ac.
? The roots of x^2 + 0x + 4 = 0 are
- one real and one imaginary root
- two distinct real roots
- two equal real roots
+ two complex conjugate roots
! Check D = -16.
? The discriminant of x^2 + 0x + 9 is
- 36
+ -36
- -40
- -32
! b^2 - 4ac.
? The roots of x^2 + 0x + 9 = 0 are
+ two complex conjugate roots
- one real and one imaginary root
- two equal real roots
- two distinct real roots
! Check D = -36.
? The discriminant of x^2 + 2x + 2 is
- 4
- 0
+ -4
- -8
! b^2 - 4ac.
? The roots of x^2 + 2x + 2 = 0 are
- one real and one imaginary root
+ two complex conjugate roots
- two equal real roots
- two distinct real roots
! Check D = -4.
? The discriminant of x^2 - 6x + 10 is
- -8
- 0
- 4
+ -4
! b^2 - 4ac.
? The roots of x^2 - 6x + 10 = 0 are
- one real and one imaginary root
- two distinct real roots
- two equal real roots
+ two complex conjugate roots
! Check D = -4.
? The discriminant of x^2 + 4x + 8 is
+ -16
- -20
- -12
- 16
! b^2 - 4ac.
? The roots of x^2 + 4x + 8 = 0 are
- two distinct real roots
- two equal real roots
+ two complex conjugate roots
- one real and one imaginary root
! Check D = -16.
? The discriminant of x^2 - 2x + 17 is
+ -64
- -68
- 64
- -60
! b^2 - 4ac.
? The roots of x^2 - 2x + 17 = 0 are
- two equal real roots
- two distinct real roots
- one real and one imaginary root
+ two complex conjugate roots
! Check D = -64.
? The cube roots of unity add up to
- 1
+ 0
- -1
- 3
! 1 + w + w^2 = 0.
? w^3 equals
- -1
- 0
- w
+ 1
! Cube root of unity.
? The polar form of 1 + i is
- sqrt 2 (cos 90 + i sin 90)
+ sqrt 2 (cos 45 + i sin 45)
- (cos 45 + i sin 45)
- 2 (cos 45 + i sin 45)
! r = sqrt 2.
? The argument of -1 is
- pi/2
- -pi/2
+ pi
- 0
! Negative real axis.
? The argument of i is
+ pi/2
- 3pi/2
- 0
- pi
! Positive imaginary axis.
? Square root of -4 is
- -2
- 4i
+ 2i
- 2
! sqrt 4 times i.
? 1/i equals
+ -i
- i
- 1
- -1
! Multiply by -i/-i.
? i^2 + i^4 equals
- 2
+ 0
- -2
- i
! -1 + 1.
? What is i?
+ The imaginary unit with i^2 = -1
- 0
- 1
- -1
! Answer: The imaginary unit with i^2 = -1.
? What is the value of i^2?
+ -1
- 1
- The product of their moduli
- -i
! Answer: -1.
? What is the value of i^3?
- sqrt (a^2 + b^2)
+ -i
- 1
- From -pi (excluded) to pi (included)
! Answer: -i.
? What is the value of i^4?
- -1
+ 1
- 0
- The imaginary unit with i^2 = -1
! Answer: 1.
? What is the conjugate of a + ib?
- |z|^2 = a^2 + b^2
- 0
- sqrt (a^2 + b^2)
+ a - ib
! Answer: a - ib.
? What is the modulus of a + ib?
- r (cos theta + i sin theta)
- |z1 + z2| <= |z1| + |z2|
- The product of their moduli
+ sqrt (a^2 + b^2)
! Answer: sqrt (a^2 + b^2).
? What is z times its conjugate?
- -1
+ |z|^2 = a^2 + b^2
- sqrt (a^2 + b^2)
- From -pi (excluded) to pi (included)
! Answer: |z|^2 = a^2 + b^2.
? What is the Argand plane?
- sqrt (a^2 + b^2)
- The product of their moduli
+ The plane in which a + ib is shown as the point (a, b)
- r (cos theta + i sin theta)
! Answer: The plane in which a + ib is shown as the point (a, b).
? What is the polar form of a complex number?
- The product of their moduli
- 0
+ r (cos theta + i sin theta)
- |z|^2 = a^2 + b^2
! Answer: r (cos theta + i sin theta).
? What is the principal argument range?
+ From -pi (excluded) to pi (included)
- a - ib
- -1
- |z|^2 = a^2 + b^2
! Answer: From -pi (excluded) to pi (included).
? What is the sum of the cube roots of unity?
- From -pi (excluded) to pi (included)
- 1
+ 0
- -i
! Answer: 0.
? What is w^3 where w is a complex cube root of unity?
- r (cos theta + i sin theta)
- |z|^2 = a^2 + b^2
- 0
+ 1
! Answer: 1.
? What is the triangle inequality for complex numbers?
- 1
- -1
+ |z1 + z2| <= |z1| + |z2|
- 0
! Answer: |z1 + z2| <= |z1| + |z2|.
? What is the modulus of the product of two complex numbers?
+ The product of their moduli
- -i
- -1
- From -pi (excluded) to pi (included)
! Answer: The product of their moduli.
? What is the value of i^n for n divisible by 4?
- r (cos theta + i sin theta)
- |z|^2 = a^2 + b^2
+ 1
- a - ib
! Answer: 1.
? Find the value of i^1.
+ i
- 4 - 7i
- sqrt 5
- 5 - 12i
! Answer: i.
? Find the value of i^2.
- 10
- -i
- sqrt 5
+ -1
! Answer: -1.
? Find the value of i^3.
- -4
- -36
- sqrt 65
+ -i
! Answer: -i.
? Find the value of i^4.
+ 1
- sqrt 13
- 9 - 40i
- -5i
! Answer: 1.
? Find the value of i^5.
- 4 - 7i
+ i
- -5 - 12i
- -36
! Answer: i.
? Find the value of i^6.
- -i
- 6 + 8i
- -64
+ -1
! Answer: -1.
? Find the value of i^7.
- -16
+ -i
- i
- -3 - 4i
! Answer: -i.
? Find the value of i^8.
- 9 - 40i
- 10
- 3 - 4i
+ 1
! Answer: 1.
? Find the value of i^9.
- -3 - 4i
+ i
- -36
- 8 - 15i
! Answer: i.
? Find the value of i^10.
+ -1
- 5 - 12i
- 29
- sqrt 2
! Answer: -1.
? Find the value of i^11.
+ -i
- -5i
- 4 - 7i
- -3 - 4i
! Answer: -i.
? Find the value of i^12.
+ 1
- 5
- -64
- 29
! Answer: 1.
? Find the value of i^13.
- 20 - 21i
- -16
- -64
+ i
! Answer: i.
? Find the value of i^14.
- -4
- 2 - 3i
+ -1
- -i
! Answer: -1.
? Find the value of i^15.
- -36
- 8 - 15i
- sqrt 5
+ -i
! Answer: -i.
? Find the value of i^16.
- sqrt 13
+ 1
- sqrt 65
- 4 - 7i
! Answer: 1.
? Find the value of i^17.
- 17
+ i
- -5i
- sqrt 5
! Answer: i.
? Find the value of i^18.
- 1 - 2i
- 2 - 3i
+ -1
- -4
! Answer: -1.
? Find the value of i^19.
+ -i
- 1 - i
- -5 - 12i
- -5i
! Answer: -i.
? Find the value of i^20.
- 3 - 4i
- -3 - 4i
- 12 - 16i
+ 1
! Answer: 1.
? Find the value of i^21.
- 6 - 8i
- -1
- 4 - 7i
+ i
! Answer: i.
? Find the value of i^22.
+ -1
- 41
- -16
- 2 - 3i
! Answer: -1.
? Find the value of i^23.
+ -i
- sqrt 13
- 1 - 2i
- 6 + 8i
! Answer: -i.
? Find the value of i^24.
- 6 + 8i
- i
- -36
+ 1
! Answer: 1.
? Find the value of i^25.
- 25
- -3 - 4i
- 29
+ i
! Answer: i.
? Find the value of i^26.
- -36
+ -1
- 1
- -4
! Answer: -1.
? Find the value of i^27.
- 6 - 8i
- -3 - 4i
- sqrt 65
+ -i
! Answer: -i.
? Find the value of i^28.
+ 1
- sqrt 13
- -5 - 12i
- -5i
! Answer: 1.
? Find the value of i^29.
- 10
- 6 - 8i
- sqrt 2
+ i
! Answer: i.
? Find the value of i^30.
- 13
- -64
+ -1
- 1
! Answer: -1.
? Find the value of i^31.
- -5 - 12i
- -3 - 4i
+ -i
- 41
! Answer: -i.
? Find the value of i^32.
- i
+ 1
- 3 - 4i
- 1 - 2i
! Answer: 1.
? Find the value of i^33.
- sqrt 13
- sqrt 65
- 29
+ i
! Answer: i.
? Find the value of i^34.
+ -1
- 20 - 21i
- 9 - 40i
- 6 + 8i
! Answer: -1.
? Find the value of i^35.
- -4
- 5
- 20
+ -i
! Answer: -i.
? Find the value of i^36.
- 1 - 2i
- -4
+ 1
- 10
! Answer: 1.
? Find the value of i^37.
- -3 - 4i
- 3 - 4i
+ i
- 2 - 3i
! Answer: i.
? Find the value of i^38.
- -3 - 4i
- -5i
- 1 - i
+ -1
! Answer: -1.
? Find the value of i^39.
+ -i
- -1
- 6 - 8i
- 1 - 2i
! Answer: -i.
? Find the value of i^40.
- 3 - 4i
- -3 - 4i
- 2 - 3i
+ 1
! Answer: 1.
? Find the modulus of 3 + 4i.
- 20
- 3 - 4i
+ 5
- sqrt 13
! Answer: 5.
? Find the conjugate of 3 + 4i.
- -5i
+ 3 - 4i
- i
- 17
! Answer: 3 - 4i.
? Find the modulus of 5 + 12i.
- 7 - 24i
+ 13
- sqrt 65
- -5 - 12i
! Answer: 13.
? Find the conjugate of 5 + 12i.
- -1
- -36
- sqrt 13
+ 5 - 12i
! Answer: 5 - 12i.
? Find the modulus of 8 + 15i.
+ 17
- sqrt 65
- -3 - 4i
- -4
! Answer: 17.
@visual
formula | Complex numbers and quadratic equations | key formula
@problems
P: Find the modulus of 3 + 4i.
A: 5.
R: 1 | sqrt(9 + 16)
R: 1 | 5
