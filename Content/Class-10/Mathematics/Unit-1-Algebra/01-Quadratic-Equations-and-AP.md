# Quadratic equations and arithmetic progressions
minutes: 25
yt: class 10 quadratic equations ap
@study
**Quadratic equation** a x^2 + b x + c = 0 has roots x = (-b +/- sqrt(D)) / 2a with discriminant D = b^2 - 4ac. D > 0 two distinct real roots; D = 0 equal roots; D < 0 no real roots. Example: 2x^2 - 7x + 3 = 0: D = 49 - 24 = 25, roots **3** and **0.5**. Sum of roots = -b/a; product = c/a.
**AP:** a_n = a + (n - 1) d; S_n = n/2 [2a + (n - 1) d]. For 2, 5, 8, ...: S_20 = 10 (4 + 57) = **610**.
## Deep dive: quadratic equations
**What it is.** An equation that can be written as a x^2 + b x + c = 0 with a not equal to 0. The highest power of x is 2, so there are at most two roots. If a = 0 the x^2 term vanishes and it is only linear.
**Method 1: factorisation (splitting the middle term).** To solve a x^2 + b x + c = 0, find two numbers whose product is a x c and whose sum is b. Split b x into those two terms, group, and use the zero product rule: if P x Q = 0 then P = 0 or Q = 0. Example: 6x^2 - x - 2 = 0. a x c = -12; the numbers 3 and -4 give sum -1. So 6x^2 + 3x - 4x - 2 = 3x(2x + 1) - 2(2x + 1) = (3x - 2)(2x + 1) = 0, so x = 2/3 or x = -1/2.
**Method 2: completing the square.** Divide by a, move the constant, add (b/2a)^2 to both sides: (x + b/2a)^2 = (b^2 - 4ac)/4a^2. Taking the square root gives the quadratic formula, so the formula is simply this method done once for all equations.
**Method 3: the quadratic formula.** x = (-b +/- sqrt(b^2 - 4ac)) / 2a. It always works, even when factorising is hard. Put brackets round negative values of b when substituting.
**Discriminant D = b^2 - 4ac** tells the nature of the roots before you solve: D > 0 two distinct real roots; D = 0 two equal real roots x = -b/2a; D < 0 no real roots (the parabola does not touch the x-axis). If a, b, c are integers and D is a perfect square the roots are rational.
**Sum and product of roots.** If the roots are p and q then p + q = -b/a and p q = c/a. A quadratic with given roots is x^2 - (p + q) x + p q = 0. Useful identities: p^2 + q^2 = (p + q)^2 - 2 p q and |p - q| = sqrt(D)/|a|.
**Word problems.** Define the unknown, write one equation, reduce it to standard form, solve, and reject answers that cannot be real quantities (a negative length, age or number of people). Typical types: two numbers with a given sum of squares; a rectangle with given area and perimeter relation; speed, distance and time (time = distance / speed); two taps filling a tank; consecutive integers.
**Common mistakes.** Forgetting that a x^2 + b x + c must equal 0 before factorising; dividing both sides by x and losing the root x = 0; dropping the minus sign of b; reading D = b^2 - 4ac as b^2 - 4 a c with the wrong sign when c is negative (then D is a sum: b^2 + 4|a c|).
## Deep dive: arithmetic progressions
**Definition.** A list in which every term after the first is got by adding the same number d (the common difference). d can be positive, negative or zero. Check with d = a_(k+1) - a_k for any two neighbouring terms.
**nth term.** a_n = a + (n - 1) d. The 10th term of 7, 11, 15, ... is 7 + 9 x 4 = 43. To check whether a number belongs to the AP solve a + (n - 1) d = that number: n must be a positive whole number.
**Sum of n terms.** S_n = n/2 [2a + (n - 1) d] = n/2 (a + l) where l is the last term. Also a_n = S_n - S_(n-1). The sum of the first n natural numbers is n(n + 1)/2, of the first n odd numbers is n^2, of the first n even numbers is n(n + 1).
**Useful facts.** Three numbers a - d, a, a + d are in AP; four numbers a - 3d, a - d, a + d, a + 3d are in AP. If a, b, c are in AP then 2b = a + c (b is the arithmetic mean). The kth term from the end of an AP with last term l is l - (k - 1) d. Equal gaps mean the sum of terms equidistant from the ends is constant.
**Word problems.** Savings that grow by a fixed amount, seats in rows of a hall, instalments of a loan, and the number of logs in a stack are all APs. Write a, d and what is asked (a_n or S_n or n), then substitute. If the equation for n has two solutions, check which are whole and positive.
## Hindi saransh
D = b^2 - 4ac. Roots (-b +/- sqrt D)/2a.
> Check the discriminant first.
@formulas
## Quadratic equations
Standard form | a x^2 + b x + c = 0, a not 0 | start here before using any method
Quadratic formula | x = (-b +/- sqrt(b^2 - 4ac)) / 2a | always works
Discriminant | D = b^2 - 4ac | decides the nature of the roots
Two distinct real roots | D > 0 | parabola cuts the x-axis twice
Equal real roots | D = 0, x = -b / 2a | parabola touches the x-axis
No real roots | D < 0 | parabola does not reach the x-axis
Sum of roots | p + q = -b / a | check your answers
Product of roots | p q = c / a | check your answers
Quadratic from roots | x^2 - (p + q) x + p q = 0 | when the roots are given
Sum of squares of roots | p^2 + q^2 = (p + q)^2 - 2 p q | without finding the roots
Difference of roots | |p - q| = sqrt(D) / |a| | gap between the roots
Completing the square | (x + b/2a)^2 = (b^2 - 4ac) / 4a^2 | how the formula is derived
Zero product rule | P Q = 0 means P = 0 or Q = 0 | after factorising
Splitting the middle term | find m, n with m n = a c and m + n = b | factorisation
## Arithmetic progression
nth term | a_n = a + (n - 1) d | find any term
Common difference | d = a_(k+1) - a_k | test for an AP
Sum of n terms | S_n = n/2 [2a + (n - 1) d] | first term and d known
Sum with last term | S_n = n/2 (a + l) | first and last terms known
Term from the sum | a_n = S_n - S_(n-1) | when S_n is given
kth term from the end | l - (k - 1) d | counting backwards
Arithmetic mean | b = (a + c) / 2 | a, b, c in AP
First n natural numbers | n (n + 1) / 2 | 1 + 2 + ... + n
First n odd numbers | n^2 | 1 + 3 + 5 + ...
First n even numbers | n (n + 1) | 2 + 4 + 6 + ...
Three terms in AP | a - d, a, a + d | word problems
Four terms in AP | a - 3d, a - d, a + d, a + 3d | word problems

@qa
Q: Discriminant of 2x^2 - 7x + 3?
A: 25.
Q: Roots of 2x^2 - 7x + 3 = 0?
A: 3 and 1/2.
Q: Nature of roots when D = 0?
A: Real and equal.
Q: Sum of first 20 terms of 2, 5, 8, ...?
A: 610.
Q: What is a quadratic equation?
A: An equation that can be written as a x^2 + b x + c = 0 with a not equal to 0.
Q: Why must a not be zero in a x^2 + b x + c = 0?
A: If a = 0 the x^2 term disappears and the equation becomes linear, not quadratic.
Q: How many roots can a quadratic equation have?
A: At most two real roots: two distinct, two equal, or none real.
Q: What is the zero product rule?
A: If P x Q = 0 then P = 0 or Q = 0 (or both).
Q: What is a root of an equation?
A: A value of the variable that makes both sides equal, that is, it satisfies the equation.
Q: State the quadratic formula.
A: x = (-b +/- sqrt(b^2 - 4ac)) / 2a.
Q: What is the discriminant?
A: D = b^2 - 4ac. It tells the nature of the roots without solving.
Q: What does D > 0 tell us?
A: The equation has two distinct real roots.
Q: What does D = 0 tell us?
A: The equation has two equal real roots, each equal to -b / 2a.
Q: What does D < 0 tell us?
A: The equation has no real roots.
Q: When are the roots of a quadratic with integer coefficients rational?
A: When D is a perfect square (and D is not negative).
Q: How does completing the square work?
A: Divide by a, move the constant, add (b/2a)^2 to both sides, then take square roots.
Q: How is the quadratic formula derived?
A: By completing the square on a x^2 + b x + c = 0 once for general a, b, c.
Q: What is the sum of the roots of a x^2 + b x + c = 0?
A: -b / a.
Q: What is the product of the roots of a x^2 + b x + c = 0?
A: c / a.
Q: How do you form a quadratic equation with roots p and q?
A: x^2 - (p + q) x + p q = 0.
Q: How can you find p^2 + q^2 without finding p and q?
A: Use (p + q)^2 - 2 p q with the sum and product from the coefficients.
Q: Why is dividing both sides by x dangerous when solving x^2 = 5x?
A: It loses the root x = 0. Write x^2 - 5x = 0 and factorise x (x - 5) = 0.
Q: Why do we reject a negative answer in a problem about length?
A: A length cannot be negative, so only the positive root is meaningful.
Q: What is meant by splitting the middle term?
A: Writing b x as the sum of two terms whose coefficients multiply to a x c, so the quadratic can be grouped and factorised.
Q: What is the shape of the graph of y = a x^2 + b x + c?
A: A parabola, opening upward if a > 0 and downward if a < 0.
Q: What does the discriminant tell about the graph?
A: D > 0: cuts the x-axis twice; D = 0: touches it once; D < 0: does not meet it.
Q: Where is the vertex of y = a x^2 + b x + c?
A: At x = -b / 2a, which is also the midpoint of the two roots.
Q: Is x = 0 a root of x^2 + 3x = 0?
A: Yes. The equation factorises as x (x + 3) = 0, so x = 0 or x = -3.
Q: Can a quadratic have exactly one real root that is repeated?
A: Yes, when D = 0 the two roots coincide.
Q: What is an arithmetic progression?
A: A list of numbers in which each term after the first is got by adding a fixed number d, the common difference.
Q: How do you find the common difference of an AP?
A: Subtract any term from the term that follows it: d = a_(k+1) - a_k.
Q: State the formula for the nth term of an AP.
A: a_n = a + (n - 1) d.
Q: State two forms of the sum of n terms of an AP.
A: S_n = n/2 [2a + (n - 1) d] and S_n = n/2 (a + l).
Q: How is a_n related to S_n?
A: a_n = S_n - S_(n-1) for n greater than 1.
Q: What is the sum of the first n natural numbers?
A: n (n + 1) / 2.
Q: What is the sum of the first n odd numbers?
A: n^2.
Q: What is the sum of the first n even numbers?
A: n (n + 1).
Q: If a, b, c are in AP, what is the relation between them?
A: 2b = a + c, so b is the average of a and c.
Q: How should three numbers in AP be taken in a problem?
A: As a - d, a, a + d, so the sum is simply 3a.
Q: Is 2, 4, 8, 16 an AP?
A: No. The differences are 2, 4, 8, so d is not constant. It is a geometric progression.
Q: Can the common difference of an AP be negative?
A: Yes. A negative d gives a decreasing AP such as 20, 17, 14, ...
Q: What AP has d = 0?
A: A constant list such as 5, 5, 5, ... Each term equals the first.
Q: How do you test if a number is a term of an AP?
A: Solve a + (n - 1) d = number; it is a term only if n is a positive whole number.
Q: How do you find the kth term from the end of an AP?
A: l - (k - 1) d where l is the last term.
Q: Why is the sum of terms equidistant from the ends of an AP constant?
A: Because moving one step in from each end adds d to one term and subtracts d from the other.
Q: What is the nth term of the list of even numbers 2, 4, 6, ...?
A: 2n.
Q: What is the nth term of the odd numbers 1, 3, 5, ...?
A: 2n - 1.
Q: Is a finite AP's sum always defined?
A: Yes. Any finite list can be added; the formula needs a, d and n (or a and l).
Q: Solve x^2 - 5x + 6 = 0 by factorisation.
A: x = 2 or x = 3. (x - 2)(x - 3) = 0.
Q: Solve x^2 - 5x + 4 = 0 by factorisation.
A: x = 1 or x = 4. (x - 1)(x - 4) = 0.
Q: Solve x^2 - 8x + 15 = 0 by factorisation.
A: x = 3 or x = 5. (x - 3)(x - 5) = 0.
Q: Solve x^2 - 3x - 10 = 0 by factorisation.
A: x = -2 or x = 5. (x + 2)(x - 5) = 0.
Q: Solve x^2 + 7x + 12 = 0 by factorisation.
A: x = -3 or x = -4. (x + 3)(x + 4) = 0.
Q: Solve x^2 - 5x - 6 = 0 by factorisation.
A: x = 6 or x = -1. (x - 6)(x + 1) = 0.
Q: Solve x^2 - 9x + 14 = 0 by factorisation.
A: x = 7 or x = 2. (x - 7)(x - 2) = 0.
Q: Solve x^2 + 2x - 15 = 0 by factorisation.
A: x = -5 or x = 3. (x + 5)(x - 3) = 0.
Q: Solve x^2 - 8x + 16 = 0 by factorisation.
A: x = 4. (x - 4)(x - 4) = 0.
Q: Solve x^2 + 8x + 12 = 0 by factorisation.
A: x = -6 or x = -2. (x + 6)(x + 2) = 0.
Q: Solve x^2 - 5x - 24 = 0 by factorisation.
A: x = 8 or x = -3. (x - 8)(x + 3) = 0.
Q: Solve x^2 - 10x + 9 = 0 by factorisation.
A: x = 9 or x = 1. (x - 9)(x - 1) = 0.
Q: Solve x^2 + 5x - 14 = 0 by factorisation.
A: x = -7 or x = 2. (x + 7)(x - 2) = 0.
Q: Solve x^2 - 11x + 30 = 0 by factorisation.
A: x = 5 or x = 6. (x - 5)(x - 6) = 0.
Q: Solve x^2 + 9x + 8 = 0 by factorisation.
A: x = -1 or x = -8. (x + 1)(x + 8) = 0.
Q: Find the roots of 2x^2 - 7x + 3 = 0.
A: x = 1/2 or x = 3.
Q: Find the roots of 3x^2 + x - 2 = 0.
A: x = -1 or x = 2/3.
Q: Find the roots of 2x^2 + x - 3 = 0.
A: x = -3/2 or x = 1.
Q: Find the roots of 5x^2 - 11x + 2 = 0.
A: x = 1/5 or x = 2.
Q: Find the roots of 4x^2 + 5x - 6 = 0.
A: x = -2 or x = 3/4.
Q: Find the roots of 6x^2 + x - 1 = 0.
A: x = -1/2 or x = 1/3.
Q: Find the roots of 3x^2 - 11x - 4 = 0.
A: x = -1/3 or x = 4.
Q: Find the roots of 2x^2 + x - 15 = 0.
A: x = -3 or x = 5/2.
Q: Find the discriminant of x^2 - 4x + 4 = 0 and state the nature of its roots.
A: D = 0, so two equal real roots.
Q: Find the discriminant of x^2 + 3x + 5 = 0 and state the nature of its roots.
A: D = -11, so no real roots.
Q: Find the discriminant of 2x^2 - 5x + 2 = 0 and state the nature of its roots.
A: D = 9, so two distinct real roots.
Q: Find the discriminant of 3x^2 + 2x + 1 = 0 and state the nature of its roots.
A: D = -8, so no real roots.
Q: Find the discriminant of x^2 - 6x + 9 = 0 and state the nature of its roots.
A: D = 0, so two equal real roots.
Q: Find the discriminant of 2x^2 + 4x - 6 = 0 and state the nature of its roots.
A: D = 64, so two distinct real roots.
Q: Find the discriminant of x^2 + x - 12 = 0 and state the nature of its roots.
A: D = 49, so two distinct real roots.
Q: Find the discriminant of 4x^2 - 12x + 9 = 0 and state the nature of its roots.
A: D = 0, so two equal real roots.
Q: Find the discriminant of 5x^2 + 2x + 3 = 0 and state the nature of its roots.
A: D = -56, so no real roots.
Q: Find the discriminant of x^2 - 16 = 0 and state the nature of its roots.
A: D = 64, so two distinct real roots.
Q: Find the discriminant of 2x^2 + 8 = 0 and state the nature of its roots.
A: D = -64, so no real roots.
Q: Find the discriminant of 3x^2 - 7x + 2 = 0 and state the nature of its roots.
A: D = 25, so two distinct real roots.
Q: Find the discriminant of x^2 - 8x + 15 = 0 and state the nature of its roots.
A: D = 4, so two distinct real roots.
Q: Find the discriminant of 2x^2 + 3x - 2 = 0 and state the nature of its roots.
A: D = 25, so two distinct real roots.
Q: Without solving, write the sum and product of the roots of x^2 - 7x + 12 = 0.
A: Sum = -b/a = 7; product = c/a = 12.
Q: Without solving, write the sum and product of the roots of 2x^2 - 8x + 6 = 0.
A: Sum = -b/a = 4; product = c/a = 3.
Q: Without solving, write the sum and product of the roots of 3x^2 + 5x - 2 = 0.
A: Sum = -b/a = -5/3; product = c/a = -2/3.
Q: Without solving, write the sum and product of the roots of x^2 + 9x + 20 = 0.
A: Sum = -b/a = -9; product = c/a = 20.
Q: Without solving, write the sum and product of the roots of 4x^2 - 4x - 3 = 0.
A: Sum = -b/a = 1; product = c/a = -3/4.
Q: Without solving, write the sum and product of the roots of 5x^2 - 10x + 2 = 0.
A: Sum = -b/a = 2; product = c/a = 2/5.
Q: Without solving, write the sum and product of the roots of 2x^2 + 7x + 3 = 0.
A: Sum = -b/a = -7/2; product = c/a = 3/2.
Q: Without solving, write the sum and product of the roots of x^2 - 25 = 0.
A: Sum = -b/a = 0; product = c/a = -25.
Q: Form a quadratic equation whose roots are 2 and 5.
A: x^2 - (7)x + (10) = 0, or multiplied through, x^2 - 7x + 10 = 0.
Q: Form a quadratic equation whose roots are -1 and 6.
A: x^2 - (5)x + (-6) = 0, or multiplied through, x^2 - 5x - 6 = 0.
Q: Form a quadratic equation whose roots are 3 and -3.
A: x^2 - (0)x + (-9) = 0, or multiplied through, x^2 - 9 = 0.
Q: Form a quadratic equation whose roots are 1/2 and 4.
A: x^2 - (9/2)x + (2) = 0, or multiplied through, 2x^2 - 9x + 4 = 0.
Q: Form a quadratic equation whose roots are -2 and -7.
A: x^2 - (-9)x + (14) = 0, or multiplied through, x^2 + 9x + 14 = 0.
Q: Form a quadratic equation whose roots are 2/3 and 3/2.
A: x^2 - (13/6)x + (1) = 0, or multiplied through, 6x^2 - 13x + 6 = 0.
Q: Form a quadratic equation whose roots are 0 and 9.
A: x^2 - (9)x + (0) = 0, or multiplied through, x^2 - 9x = 0.
Q: Form a quadratic equation whose roots are -1/2 and 1/3.
A: x^2 - (-1/6)x + (-1/6) = 0, or multiplied through, 6x^2 + x - 1 = 0.
Q: Find k so that x^2 + kx + 16 = 0 has equal roots.
A: D = k^2 - 64 = 0, so k = 8 or k = -8.
Q: Find k so that x^2 + 10x + k = 0 has equal roots.
A: D = 100 - 4k = 0, so k = 25.
Q: Find k so that kx^2 - 12x + 9 = 0 has equal roots.
A: D = 144 - 36k = 0, so k = 4.
Q: Find k so that 2x^2 + kx + 8 = 0 has equal roots.
A: D = k^2 - 64 = 0, so k = 8 or k = -8.
Q: Find k so that x^2 - 6x + k = 0 has real roots.
A: D = 36 - 4k >= 0, so k <= 9.
Q: For which k does x^2 + 4x + k = 0 have no real roots?
A: D = 16 - 4k < 0, so k > 4.
Q: Find k if x = 2 is a root of x^2 - 5x + k = 0.
A: 4 - 10 + k = 0, so k = 6.
Q: Find k if x = -1 is a root of 3x^2 + kx - 4 = 0.
A: 3 - k - 4 = 0, so k = -1.
Q: If one root of x^2 - 7x + k = 0 is 3, find the other root and k.
A: Sum is 7, so the other root is 4; k = 3 x 4 = 12.
Q: If the sum of the roots of x^2 + kx + 12 = 0 is -7, find k and the roots.
A: k = 7; x^2 + 7x + 12 = 0 gives x = -3 or x = -4.
Q: The sum of a number and its reciprocal is 10/3. Find the number.
A: x + 1/x = 10/3 gives 3x^2 - 10x + 3 = 0, so x = 3 or x = 1/3.
Q: The product of two consecutive positive integers is 306. Find them.
A: x (x + 1) = 306, x^2 + x - 306 = 0, x = 17. The numbers are 17 and 18.
Q: The sum of the squares of two consecutive odd numbers is 394. Find them.
A: x^2 + (x + 2)^2 = 394 gives x^2 + 2x - 195 = 0, x = 13. Numbers are 13 and 15 (or -15 and -13).
Q: A rectangle has area 120 sq m and its length is 2 m more than its breadth. Find the sides.
A: b (b + 2) = 120, b^2 + 2b - 120 = 0, b = 10. Breadth 10 m, length 12 m.
Q: The hypotenuse of a right triangle is 13 cm. One side is 7 cm more than the other. Find the sides.
A: x^2 + (x + 7)^2 = 169 gives x^2 + 7x - 60 = 0, x = 5. The sides are 5 cm and 12 cm.
Q: The altitude of a right triangle is 7 cm less than its base and the hypotenuse is 13 cm. Find the base.
A: b^2 + (b - 7)^2 = 169 gives b^2 - 7b - 60 = 0, b = 12 cm.
Q: A train travels 360 km at a uniform speed. If the speed had been 5 km/h more, the trip would take 1 hour less. Find the speed.
A: 360/x - 360/(x + 5) = 1 gives x^2 + 5x - 1800 = 0, x = 40 km/h.
Q: Two taps fill a tank in 6 h together. The smaller tap alone takes 5 h more than the larger. Find the time the larger takes.
A: 1/x + 1/(x + 5) = 1/6 gives x^2 - 7x - 30 = 0, x = 10 hours.
Q: A piece of cloth costs Rs 200. If it were 5 m longer, each metre would cost Rs 2 less. Find its length.
A: 200/x - 200/(x + 5) = 2 gives x^2 + 5x - 500 = 0, x = 20 m.
Q: The sum of the ages of a girl and her sister is 25 years and their product is 144. Find their ages.
A: x (25 - x) = 144, x^2 - 25x + 144 = 0, x = 9 or 16. The ages are 9 and 16.
Q: A natural number exceeds its square root by 12... what is it?
A: x - sqrt(x) = 12. Put sqrt x = y: y^2 - y - 12 = 0, y = 4. The number is 16.
Q: The perimeter of a rectangle is 28 m and its area is 48 sq m. Find the sides.
A: l + b = 14 and l b = 48, so t^2 - 14t + 48 = 0, giving 6 m and 8 m.
Q: Find two numbers whose sum is 27 and product is 182.
A: t^2 - 27t + 182 = 0, D = 729 - 728 = 1, so t = 14 or 13.
Q: A plane takes 1 hour less for a 1500 km trip if its speed rises by 250 km/h. Find the original speed.
A: 1500/x - 1500/(x + 250) = 1 gives x^2 + 250x - 375000 = 0, x = 500 km/h.
Q: Find the 10th term of the AP 3, 7, 11, ...
A: a_n = a + (n - 1) d = 3 + 9 x 4 = 39.
Q: Find the 15th term of the AP 5, 8, 11, ...
A: a_n = a + (n - 1) d = 5 + 14 x 3 = 47.
Q: Find the 8th term of the AP 10, 8, 6, ...
A: a_n = a + (n - 1) d = 10 + 7 x -2 = -4.
Q: Find the 20th term of the AP 7, 12, 17, ...
A: a_n = a + (n - 1) d = 7 + 19 x 5 = 102.
Q: Find the 12th term of the AP -4, -1, 2, ...
A: a_n = a + (n - 1) d = -4 + 11 x 3 = 29.
Q: Find the 25th term of the AP 2, 9, 16, ...
A: a_n = a + (n - 1) d = 2 + 24 x 7 = 170.
Q: Find the 9th term of the AP 100, 94, 88, ...
A: a_n = a + (n - 1) d = 100 + 8 x -6 = 52.
Q: Find the 11th term of the AP 1.5, 2, 2.5, ...
A: a_n = a + (n - 1) d = 1.5 + 10 x 0.5 = 6.5.
Q: Find the 30th term of the AP 12, 16, 20, ...
A: a_n = a + (n - 1) d = 12 + 29 x 4 = 128.
Q: Find the 14th term of the AP -10, -5, 0, ...
A: a_n = a + (n - 1) d = -10 + 13 x 5 = 55.
Q: Find the sum of the first 10 terms of the AP with a = 2 and d = 3.
A: S_n = n/2 [2a + (n - 1) d] = 10/2 x (4 + 27) = 155.
Q: Find the sum of the first 12 terms of the AP with a = 5 and d = 5.
A: S_n = n/2 [2a + (n - 1) d] = 12/2 x (10 + 55) = 390.
Q: Find the sum of the first 6 terms of the AP with a = 10 and d = -2.
A: S_n = n/2 [2a + (n - 1) d] = 6/2 x (20 + -10) = 30.
Q: Find the sum of the first 20 terms of the AP with a = 1 and d = 2.
A: S_n = n/2 [2a + (n - 1) d] = 20/2 x (2 + 38) = 400.
Q: Find the sum of the first 15 terms of the AP with a = 3 and d = 4.
A: S_n = n/2 [2a + (n - 1) d] = 15/2 x (6 + 56) = 465.
Q: Find the sum of the first 10 terms of the AP with a = -5 and d = 3.
A: S_n = n/2 [2a + (n - 1) d] = 10/2 x (-10 + 27) = 85.
Q: Find the sum of the first 9 terms of the AP with a = 8 and d = 6.
A: S_n = n/2 [2a + (n - 1) d] = 9/2 x (16 + 48) = 288.
Q: Find the sum of the first 11 terms of the AP with a = 20 and d = -3.
A: S_n = n/2 [2a + (n - 1) d] = 11/2 x (40 + -30) = 55.
Q: Find the sum of the first 14 terms of the AP with a = 7 and d = 7.
A: S_n = n/2 [2a + (n - 1) d] = 14/2 x (14 + 91) = 735.
Q: Find the sum of the first 30 terms of the AP with a = 4 and d = 2.
A: S_n = n/2 [2a + (n - 1) d] = 30/2 x (8 + 58) = 990.
Q: How many terms does the AP 5, 8, 11, ..., 50 have?
A: n = (l - a)/d + 1 = (50 - 5)/3 + 1 = 16.
Q: How many terms does the AP 2, 6, 10, ..., 98 have?
A: n = (l - a)/d + 1 = (98 - 2)/4 + 1 = 25.
Q: How many terms does the AP 10, 15, 20, ..., 100 have?
A: n = (l - a)/d + 1 = (100 - 10)/5 + 1 = 19.
Q: How many terms does the AP 7, 14, 21, ..., 70 have?
A: n = (l - a)/d + 1 = (70 - 7)/7 + 1 = 10.
Q: How many terms does the AP 100, 95, 90, ..., 25 have?
A: n = (l - a)/d + 1 = (25 - 100)/-5 + 1 = 16.
Q: How many terms does the AP 3, 5, 7, ..., 41 have?
A: n = (l - a)/d + 1 = (41 - 3)/2 + 1 = 20.
Q: Is 101 a term of the AP 5, 11, 17, ...? If so, which term?
A: Yes. a + (n - 1) d = 101 gives n = 17, a whole number.
Q: Is 83 a term of the AP 3, 7, 11, ...? If so, which term?
A: Yes. a + (n - 1) d = 83 gives n = 21, a whole number.
Q: Is 150 a term of the AP 10, 17, 24, ...? If so, which term?
A: Yes. a + (n - 1) d = 150 gives n = 21, a whole number.
Q: Is 97 a term of the AP 2, 7, 12, ...? If so, which term?
A: Yes. a + (n - 1) d = 97 gives n = 20, a whole number.
Q: In an AP the 5th term is 23 and the 12th term is 58. Find d and a.
A: d = (58 - 23)/7 = 5 and a = 23 - 4 x 5 = 3.
Q: In an AP the 5th term is 20 and the 12th term is 41. Find d and a.
A: d = (41 - 20)/7 = 3 and a = 20 - 4 x 3 = 8.
Q: In an AP the 5th term is 4 and the 12th term is -24. Find d and a.
A: d = (-24 - 4)/7 = -4 and a = 4 - 4 x -4 = 20.
Q: In an AP the 5th term is 37 and the 12th term is 100. Find d and a.
A: d = (100 - 37)/7 = 9 and a = 37 - 4 x 9 = 1.
Q: The 3rd term of an AP is 12 and the 7th term is 28. Find the 20th term.
A: d = (28 - 12)/4 = 4, a = 12 - 8 = 4, a_20 = 4 + 19 x 4 = 80.
Q: Find the sum of the first 40 positive integers divisible by 6.
A: a = 6, d = 6, S_40 = 20 (12 + 234) = 4920.
Q: Find the sum of all two-digit numbers divisible by 5 (10 to 95).
A: a = 10, d = 5, n = 18, S = 9 (20 + 85) = 945.
Q: Find the sum of all odd numbers from 1 to 100.
A: There are 50 odd numbers and their sum is 50^2 = 2500.
Q: Find the sum of the first 100 natural numbers.
A: 100 x 101 / 2 = 5050.
Q: Find the sum 1 + 3 + 5 + ... + 99.
A: 50 odd numbers give 50^2 = 2500.
Q: How many multiples of 4 lie between 10 and 250?
A: 12, 16, ..., 248: n = (248 - 12)/4 + 1 = 60.
Q: The sum of the first n terms of an AP is 3n^2 + 5n. Find the first term and d.
A: S_1 = 8 = a. S_2 = 22, so a_2 = 14, d = 6.
Q: Find the 10th term from the end of the AP 4, 9, 14, ..., 254.
A: l - 9d = 254 - 45 = 209.
Q: Three numbers in AP have sum 21 and product 231. Find them.
A: Take a - d, a, a + d: 3a = 21, a = 7; 7 (49 - d^2) = 231 gives d = 4. Numbers 3, 7, 11.
Q: Find the middle term of the AP 6, 13, 20, ..., 216.
A: n = 31, middle is the 16th term = 6 + 15 x 7 = 111.
Q: Savings: Rs 100 in month 1, rising by Rs 20 every month. How much is saved in 12 months?
A: S_12 = 6 (200 + 220) = Rs 2520.
Q: A hall has 20 rows; the first has 15 seats and each next row has 2 more. How many seats are there in all?
A: S_20 = 10 (30 + 38) = 680 seats.
Q: The 5th term of an AP is 20 and its sum of the first 5 terms is 60. Find a and d.
A: a + 4d = 20 and 5/2 (2a + 4d) = 60 so a + 2d = 12; d = 4, a = 4.
Q: Find the AP whose first term is -3 and common difference is 5; write 4 terms.
A: -3, 2, 7, 12.
Q: If the nth term of an AP is 3n + 7, find the first term and d.
A: a_1 = 10, a_2 = 13, so d = 3.
Q: Which term of the AP 21, 18, 15, ... is -81?
A: 21 + (n - 1)(-3) = -81 gives n = 35.
Q: Find k so that k, 2k - 1 and 2k + 1 are in AP.
A: 2 (2k - 1) = k + 2k + 1, so 4k - 2 = 3k + 1, k = 3.
@quiz
? Roots of 2x^2 - 7x + 3 = 0
+ 3 and 0.5
- 2 and 1.5
- 1 and 3
- 7 and 3
! D = 25.
? D < 0 means
- two real roots
- equal roots
+ no real roots
- one root
! Complex roots.
? Product of roots of x^2 - 5x + 6 = 0
- 5
+ 6
- -6
- 1
! c/a.
? S_20 for 2, 5, 8, ...
- 590
+ 610
- 630
- 650
! 10 x 61.
? Roots of x^2 - 5x + 6 = 0
- x = 3 or x = 2
- x = -2 or x = -3
- x = 6 or x = -5
+ x = 2 or x = 3
! Factorise: (x - 2)(x - 3) = 0; sum 5, product 6.
? Roots of x^2 - 5x + 4 = 0
- x = -1 or x = -4
+ x = 1 or x = 4
- x = 2 or x = 3
- x = 4 or x = -5
! Factorise: (x - 1)(x - 4) = 0; sum 5, product 4.
? Roots of x^2 - 8x + 15 = 0
+ x = 3 or x = 5
- x = -3 or x = -5
- x = 4
- x = 15 or x = -8
! Factorise: (x - 3)(x - 5) = 0; sum 8, product 15.
? Roots of x^2 - 3x - 10 = 0
- x = 2 or x = -5
- x = -10 or x = -3
+ x = -2 or x = 5
- x = -1 or x = 4
! Factorise: (x - -2)(x - 5) = 0; sum 3, product -10.
? Roots of x^2 + 7x + 12 = 0
- x = 12 or x = 7
- x = -2 or x = -5
+ x = -3 or x = -4
- x = 3 or x = 4
! Factorise: (x - -3)(x - -4) = 0; sum -7, product 12.
? Roots of x^2 - 5x - 6 = 0
- x = -6 or x = -5
- x = -6 or x = 1
+ x = 6 or x = -1
- x = 7 or x = -2
! Factorise: (x - 6)(x - -1) = 0; sum 5, product -6.
? Roots of x^2 - 9x + 14 = 0
- x = -7 or x = -2
- x = 8 or x = 1
+ x = 7 or x = 2
- x = 14 or x = -9
! Factorise: (x - 7)(x - 2) = 0; sum 9, product 14.
? Roots of x^2 + 2x - 15 = 0
+ x = -5 or x = 3
- x = -4 or x = 2
- x = 5 or x = -3
- x = -15 or x = 2
! Factorise: (x - -5)(x - 3) = 0; sum -2, product -15.
? Roots of x^2 - 8x + 16 = 0
- x = -4
+ x = 4
- x = 16 or x = -8
- x = 5 or x = 3
! Factorise: (x - 4)(x - 4) = 0; sum 8, product 16.
? Roots of x^2 + 8x + 12 = 0
+ x = -6 or x = -2
- x = 6 or x = 2
- x = 12 or x = 8
- x = -5 or x = -3
! Factorise: (x - -6)(x - -2) = 0; sum -8, product 12.
? Roots of x^2 - 5x - 24 = 0
- x = -24 or x = -5
- x = -8 or x = 3
+ x = 8 or x = -3
- x = 9 or x = -4
! Factorise: (x - 8)(x - -3) = 0; sum 5, product -24.
? Roots of x^2 - 10x + 9 = 0
- x = 9 or x = -10
- x = 10 or x = 0
+ x = 9 or x = 1
- x = -9 or x = -1
! Factorise: (x - 9)(x - 1) = 0; sum 10, product 9.
? Roots of x^2 + 5x - 14 = 0
- x = 7 or x = -2
- x = -6 or x = 1
+ x = -7 or x = 2
- x = -14 or x = 5
! Factorise: (x - -7)(x - 2) = 0; sum -5, product -14.
? Roots of x^2 - 11x + 30 = 0
- x = 30 or x = -11
- x = 6 or x = 5
+ x = 5 or x = 6
- x = -5 or x = -6
! Factorise: (x - 5)(x - 6) = 0; sum 11, product 30.
? Discriminant of x^2 - 4x + 4 = 0
+ 0
- 32
- 8
- 1
! D = b^2 - 4ac = 16 - 16 = 0.
? Discriminant of x^2 + 3x + 5 = 0
- 29
- -1
- 11
+ -11
! D = b^2 - 4ac = 9 - 20 = -11.
? Discriminant of 2x^2 - 5x + 2 = 0
- 17
+ 9
- -9
- 41
! D = b^2 - 4ac = 25 - 16 = 9.
? Discriminant of 3x^2 + 2x + 1 = 0
- 16
+ -8
- 8
- -2
! D = b^2 - 4ac = 4 - 12 = -8.
? Discriminant of x^2 - 6x + 9 = 0
- 1
- 18
- 72
+ 0
! D = b^2 - 4ac = 36 - 36 = 0.
? Discriminant of 2x^2 + 4x - 6 = 0
- -64
- 40
- -32
+ 64
! D = b^2 - 4ac = 16 - -48 = 64.
? Discriminant of x^2 + x - 12 = 0
- -49
+ 49
- -47
- 25
! D = b^2 - 4ac = 1 - -48 = 49.
? Discriminant of 4x^2 - 12x + 9 = 0
- 288
- 72
- 1
+ 0
! D = b^2 - 4ac = 144 - 144 = 0.
? Discriminant of 5x^2 + 2x + 3 = 0
- -26
+ -56
- 56
- 64
! D = b^2 - 4ac = 4 - 60 = -56.
? Discriminant of x^2 - 16 = 0
- 32
- -64
- 65
+ 64
! D = b^2 - 4ac = 0 - -64 = 64.
? Discriminant of 2x^2 + 8 = 0
- -63
+ -64
- 64
- -32
! D = b^2 - 4ac = 0 - 64 = -64.
? Discriminant of 3x^2 - 7x + 2 = 0
+ 25
- -25
- 73
- 37
! D = b^2 - 4ac = 49 - 24 = 25.
? The equation x^2 - 4x + 4 = 0 has
- no real roots
+ two equal real roots
- two distinct real roots
- one real root and one imaginary root
! D = 0.
? The equation x^2 + 3x + 5 = 0 has
- two equal real roots
- one real root and one imaginary root
- two distinct real roots
+ no real roots
! D = -11.
? The equation 2x^2 - 5x + 2 = 0 has
- one real root and one imaginary root
- no real roots
- two equal real roots
+ two distinct real roots
! D = 9.
? The equation 3x^2 + 2x + 1 = 0 has
- two equal real roots
- one real root and one imaginary root
+ no real roots
- two distinct real roots
! D = -8.
? The equation x^2 - 6x + 9 = 0 has
- one real root and one imaginary root
- two distinct real roots
+ two equal real roots
- no real roots
! D = 0.
? The equation 2x^2 + 4x - 6 = 0 has
- two equal real roots
+ two distinct real roots
- one real root and one imaginary root
- no real roots
! D = 64.
? The equation x^2 + x - 12 = 0 has
- no real roots
+ two distinct real roots
- two equal real roots
- one real root and one imaginary root
! D = 49.
? The equation 4x^2 - 12x + 9 = 0 has
- two distinct real roots
- no real roots
- one real root and one imaginary root
+ two equal real roots
! D = 0.
? The equation 5x^2 + 2x + 3 = 0 has
+ no real roots
- two distinct real roots
- one real root and one imaginary root
- two equal real roots
! D = -56.
? The equation 2x^2 + 3x - 2 = 0 has
- two equal real roots
- one real root and one imaginary root
- no real roots
+ two distinct real roots
! D = 25.
? Sum of the roots of x^2 - 7x + 12 = 0
- -7
- -12
- 12
+ 7
! Sum = -b/a.
? Product of the roots of x^2 - 7x + 12 = 0
+ 12
- -7
- 7
- -12
! Product = c/a.
? Sum of the roots of 2x^2 - 8x + 6 = 0
- -4
- 3
+ 4
- -3
! Sum = -b/a.
? Product of the roots of 2x^2 - 8x + 6 = 0
- -4
- 4
- -3
+ 3
! Product = c/a.
? Sum of the roots of 3x^2 + 5x - 2 = 0
+ -5/3
- 5/3
- 2/3
- -2/3
! Sum = -b/a.
? Product of the roots of 3x^2 + 5x - 2 = 0
- 2/3
- -5/3
+ -2/3
- 5/3
! Product = c/a.
? Sum of the roots of x^2 + 9x + 20 = 0
- 20
+ -9
- 9
- -20
! Sum = -b/a.
? Product of the roots of x^2 + 9x + 20 = 0
- 9
- -20
- -9
+ 20
! Product = c/a.
? Sum of the roots of 4x^2 - 4x - 3 = 0
+ 1
- 3/4
- -3/4
- -1
! Sum = -b/a.
? Product of the roots of 4x^2 - 4x - 3 = 0
+ -3/4
- -1
- 3/4
- 1
! Product = c/a.
? Sum of the roots of 5x^2 - 10x + 2 = 0
+ 2
- -2/5
- -2
- 2/5
! Sum = -b/a.
? Product of the roots of 5x^2 - 10x + 2 = 0
+ 2/5
- 2
- -2/5
- -2
! Product = c/a.
? Sum of the roots of 2x^2 + 7x + 3 = 0
- 3/2
- -3/2
+ -7/2
- 7/2
! Sum = -b/a.
? Product of the roots of 2x^2 + 7x + 3 = 0
- 7/2
- -7/2
- -3/2
+ 3/2
! Product = c/a.
? Sum of the roots of x^2 - 11x + 28 = 0
+ 11
- -28
- 28
- -11
! Sum = -b/a.
? Product of the roots of x^2 - 11x + 28 = 0
- 11
- -11
+ 28
- -28
! Product = c/a.
? x^2 + kx + 16 = 0 has equal roots; k (positive) is
- 9
+ 8
- 16
- -8
! Use D = 0 or substitute the root.
? x^2 + 10x + k = 0 has equal roots when k is
- 50
- -25
+ 25
- 26
! Use D = 0 or substitute the root.
? kx^2 - 12x + 9 = 0 has equal roots when k is
- -4
- 8
+ 4
- 5
! Use D = 0 or substitute the root.
? x = 2 is a root of x^2 - 5x + k = 0; k is
- 12
- 7
+ 6
- -6
! Use D = 0 or substitute the root.
? x^2 - 6x + k = 0 has real roots for k at most
+ 9
- 10
- 18
- -9
! Use D = 0 or substitute the root.
? One root of x^2 - 7x + k = 0 is 3; k is
+ 12
- -12
- 13
- 24
! Use D = 0 or substitute the root.
? The quadratic with roots 2 and 5 is
- x^2 + 7x + 10 = 0
- x^2 - 7x - 10 = 0
+ x^2 - 7x + 10 = 0
- x^2 - 3x + 10 = 0
! x^2 - (sum)x + product.
? The quadratic with roots -1 and 6 is
- x^2 - 7x - 6 = 0
- x^2 - 5x + 6 = 0
- x^2 + 5x - 6 = 0
+ x^2 - 5x - 6 = 0
! Sum 5, product -6.
? The quadratic with roots 3 and -3 is
- x^2 + 9 = 0
- x^2 - 6x - 9 = 0
- x^2 - 3x = 0
+ x^2 - 9 = 0
! Sum 0, product -9.
? The 10th term of the AP 3, 7, 11, ... is
- 47
+ 39
- 43
- 35
! a + (n - 1) d = 39.
? The 15th term of the AP 5, 8, 11, ... is
- 50
- 44
+ 47
- 53
! a + (n - 1) d = 47.
? The 8th term of the AP 10, 8, 6, ... is
+ -4
- -8
- -2
- -6
! a + (n - 1) d = -4.
? The 20th term of the AP 7, 12, 17, ... is
- 112
+ 102
- 97
- 107
! a + (n - 1) d = 102.
? The 12th term of the AP -4, -1, 2, ... is
+ 29
- 26
- 32
- 35
! a + (n - 1) d = 29.
? The 25th term of the AP 2, 9, 16, ... is
+ 170
- 177
- 163
- 184
! a + (n - 1) d = 170.
? The 9th term of the AP 100, 94, 88, ... is
- 46
- 58
+ 52
- 40
! a + (n - 1) d = 52.
? The 30th term of the AP 12, 16, 20, ... is
+ 128
- 136
- 124
- 132
! a + (n - 1) d = 128.
? The 14th term of the AP -10, -5, 0, ... is
- 60
+ 55
- 50
- 65
! a + (n - 1) d = 55.
? Sum of the first 10 terms of the AP with a = 2, d = 3
- 125
- 165
+ 155
- 290
! S_n = n/2 [2a + (n - 1) d] = 155.
? Sum of the first 12 terms of the AP with a = 5, d = 5
- 402
+ 390
- 330
- 720
! S_n = n/2 [2a + (n - 1) d] = 390.
? Sum of the first 6 terms of the AP with a = 10, d = -2
- 42
- 36
- 0
+ 30
! S_n = n/2 [2a + (n - 1) d] = 30.
? Sum of the first 20 terms of the AP with a = 1, d = 2
- 360
- 780
- 420
+ 400
! S_n = n/2 [2a + (n - 1) d] = 400.
? Sum of the first 15 terms of the AP with a = 3, d = 4
+ 465
- 885
- 405
- 480
! S_n = n/2 [2a + (n - 1) d] = 465.
? Sum of the first 10 terms of the AP with a = -5, d = 3
- 55
- 95
- 220
+ 85
! S_n = n/2 [2a + (n - 1) d] = 85.
? Sum of the first 9 terms of the AP with a = 8, d = 6
+ 288
- 234
- 297
- 504
! S_n = n/2 [2a + (n - 1) d] = 288.
? Sum of the first 11 terms of the AP with a = 20, d = -3
- 66
- -110
- 88
+ 55
! S_n = n/2 [2a + (n - 1) d] = 55.
? Sum of the first 14 terms of the AP with a = 7, d = 7
- 1372
+ 735
- 637
- 749
! S_n = n/2 [2a + (n - 1) d] = 735.
? Number of terms in 5, 8, 11, ..., 50
- 17
- 18
+ 16
- 15
! n = (l - a)/d + 1.
? Number of terms in 2, 6, 10, ..., 98
- 24
+ 25
- 27
- 26
! n = (l - a)/d + 1.
? Number of terms in 10, 15, 20, ..., 100
- 18
+ 19
- 20
- 21
! n = (l - a)/d + 1.
? Number of terms in 7, 14, 21, ..., 70
- 11
- 9
+ 10
- 12
! n = (l - a)/d + 1.
? Number of terms in 100, 95, 90, ..., 25
- 17
+ 16
- 18
- 15
! n = (l - a)/d + 1.
? Number of terms in 3, 5, 7, ..., 41
- 19
- 22
+ 20
- 21
! n = (l - a)/d + 1.
? Sum of the first 100 natural numbers
+ 5050
- 5000
- 10100
- 5100
! n(n + 1)/2.
? Sum of the first 20 odd numbers
- 420
+ 400
- 440
- 200
! n^2 = 400.
? Sum of the first 15 even numbers
- 256
- 225
- 120
+ 240
! n(n + 1) = 240.
? If 5, x, 17 are in AP, x equals
- 10
- 12
+ 11
- 22
! Average of 5 and 17.
? The common difference of 12, 9, 6, ... is
- 12
- 3
+ -3
- -9
! 9 - 12.
? In an AP a = 4 and d = 4; the 5th term is
- 25
- 16
- 24
+ 20
! 4 + 4 x 4.
? Which of these is an AP?
- 1, 2, 4, 8
+ 3, 7, 11, 15
- 2, 4, 8, 16
- 1, 4, 9, 16
! Constant difference 4.
? The nth term of 5, 8, 11, ... is
- 5n + 3
- 3n + 5
- n + 3
+ 3n + 2
! a + (n - 1) d = 5 + 3n - 3.
? If D = 0 for a x^2 + b x + c = 0, each root is
- b / 2a
- -b / a
+ -b / 2a
- c / a
! Sqrt(D) = 0.
? A quadratic equation has a highest power of
+ 2
- 1
- 3
- 0
! By definition.
? For a x^2 + b x + c to be quadratic we need
- b is not zero
+ a is not zero
- c is not zero
- a = b = c
! Otherwise it is linear.
? Which method always works to solve a quadratic equation?
- Cross multiplication
- Guessing integers
- Factorising
+ Quadratic formula
! It needs only a, b, c.
? Two consecutive positive integers have product 306; the larger is
- 16
+ 18
- 19
- 17
! 17 x 18 = 306.
? A rectangle has area 120 sq m and length 2 m more than breadth. Breadth is
+ 10 m
- 8 m
- 12 m
- 15 m
! 10 x 12 = 120.
? Right triangle with hypotenuse 13 and sides x and x + 7: x is
- 12
- 6
- 8
+ 5
! 5, 12, 13 triple.
? Number of terms: multiples of 4 between 10 and 250
- 59
- 62
+ 60
- 61
! 12 to 248 step 4.
? Sum of the AP 6, 12, 18, ..., 240 (40 terms)
- 5000
- 9840
+ 4920
- 4800
! n/2 (a + l) = 20 x 246.
? The roots of x^2 = 5x are
- -5 and 5
- 5 only
+ 0 and 5
- 0 only
! x (x - 5) = 0; dividing by x loses 0.
? D = b^2 - 4ac for x^2 - 6x + 9 = 0 is
+ 0
- 18
- -36
- 36
! 36 - 36.
? If D is a perfect square and a, b, c are integers, the roots are
- imaginary
+ rational
- irrational
- always equal
! sqrt(D) is rational.
? p + q for the roots of 3x^2 - 9x + 2 = 0 is
- 9
- -3
+ 3
- 2/3
! -b/a = 9/3.
? The parabola y = x^2 - 4x + 5 meets the x-axis at
+ no point
- two points
- three points
- one point
! D = 16 - 20 < 0.
? The vertex of y = x^2 - 6x + 5 has x-coordinate
- 6
- 5
- -3
+ 3
! -b/2a.
? Find the 10th term from the end of 4, 9, 14, ..., 254
- 214
+ 209
- 199
- 204
! 254 - 9 x 5.
? Savings Rs 100 rising by Rs 20 monthly. Total in 12 months
- Rs 1200
+ Rs 2520
- Rs 2400
- Rs 2640
! S_12 = 6 x 420.
? Seats: 20 rows, first 15, then 2 more per row. Total
+ 680
- 700
- 340
- 600
! 10 x (30 + 38).
? If S_n = 3n^2 + 5n, the first term is
- 11
+ 8
- 5
- 3
! S_1.
? For 3 numbers a - d, a, a + d, the sum is
- 3d
+ 3a
- a - d
- a + d
! d cancels.
? The nth term of even numbers is
- n^2
- n + 2
+ 2n
- 2n - 1
! 2, 4, 6.
? Equal roots occur when
- D > 0
+ D = 0
- D < 0
- a = 0
! Definition.
? a_n and S_n are linked by
+ a_n = S_n - S_(n-1)
- a_n = S_n / n
- a_n = S_n x n
- a_n = S_n + S_(n-1)
! Difference of sums.
? A quadratic with D < 0 has a parabola that
+ does not meet the x-axis
- touches the x-axis
- is a straight line
- cuts the x-axis twice
! No real roots.
? The sum of two numbers is 27 and product 182; they are
- 10 and 17
- 11 and 16
- 12 and 15
+ 13 and 14
! 13 x 14 = 182.
? Train problem: 360 km, +5 km/h saves 1 hour; speed is
- 45 km/h
- 35 km/h
- 50 km/h
+ 40 km/h
! x^2 + 5x - 1800 = 0.
? Cloth costs Rs 200; 5 m longer would cost Rs 2 less per metre. Length is
+ 20 m
- 15 m
- 25 m
- 10 m
! x^2 + 5x - 500 = 0.
? Sum of the ages 25 and product 144; the ages are
- 10 and 15
+ 9 and 16
- 12 and 13
- 8 and 17
! 9 x 16 = 144.
? x - sqrt(x) = 12 gives x =
- 144
- 9
+ 16
- 25
! sqrt x = 4.
@visual
formula | Quadratic | x = (-b +/- sqrt(b^2 - 4ac)) / 2a ; S_n = n/2 (2a + (n-1) d)
@problems
## Moderate
P: Solve x^2 - 5x + 6 = 0.
A: x = 2 or 3.
R: 1 | Factorise
R: 1 | Roots
## High
P: Solve 2x^2 - 7x + 3 = 0 using the formula.
A: D = 25; x = (7 +/- 5)/4 = 3 or 0.5.
R: 2 | D
R: 1 | Roots
## Advanced
P: Find k so that x^2 + kx + 9 = 0 has equal roots.
A: D = k^2 - 36 = 0, so k = +/-6.
R: 2 | D = 0
R: 1 | k = +/-6
