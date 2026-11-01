# JEE Main: limits, derivatives and integrals
minutes: 65
yt: jee main limits derivatives integrals
@study
Standard limits: sin x/x -> 1, (e^x - 1)/x -> 1, (1 + 1/n)^n -> e, (a^x - 1)/x -> ln a. L Hopital: if f/g is 0/0 or infinity/infinity then lim f/g = lim f'/g'. Integration: integral x^n = x^(n+1)/(n+1), by parts, substitution, partial fractions. Definite integrals use the fundamental theorem and properties such as integral_0^a f(x) dx = integral_0^a f(a - x) dx.
## Deep dive: limits and continuity
A limit exists at a if the left and right limits are equal. Standard limits: lim sin x/x = 1; lim tan x/x = 1; lim (1 - cos x)/x^2 = 1/2; lim (e^x - 1)/x = 1; lim (a^x - 1)/x = ln a; lim ln (1 + x)/x = 1; lim (1 + x)^(1/x) = e; lim ((1 + x)^n - 1)/x = n; lim (x^n - a^n)/(x - a) = n a^(n - 1). For indeterminate forms 0/0 or infinity/infinity use L Hopital rule, factorisation, rationalisation or series. For infinity - infinity combine the terms; for 1^infinity use lim (1 + f)^(g) = e^(lim f g). Squeeze theorem: if f <= g <= h and the outer limits are equal, g has the same limit. A function is continuous at a if the limit equals f(a); differentiable implies continuous.
## Deep dive: differentiation and applications
Derivatives: (x^n)' = n x^(n-1), (sin x)' = cos x, (cos x)' = -sin x, (tan x)' = sec^2 x, (e^x)' = e^x, (a^x)' = a^x ln a, (ln x)' = 1/x, (sin^-1 x)' = 1/sqrt (1 - x^2), (tan^-1 x)' = 1/(1 + x^2). Rules: product, quotient, chain; logarithmic differentiation for x^x type; parametric dy/dx = (dy/dt)/(dx/dt). Tangent slope = f'(a); normal slope = -1/f'(a). Maxima and minima: f'(c) = 0 and f''(c) < 0 gives a local maximum. Mean value theorem: f'(c) = (f(b) - f(a))/(b - a). Rolle theorem needs f(a) = f(b).
## Deep dive: integration techniques
Standard: integral x^n = x^(n+1)/(n + 1), integral 1/x = ln |x|, integral e^x = e^x, integral sin x = -cos x, integral cos x = sin x, integral sec^2 x = tan x, integral 1/(1 + x^2) = tan^-1 x, integral 1/sqrt (1 - x^2) = sin^-1 x. Substitution u = g(x); by parts integral u v = u integral v - integral (u' integral v) with ILATE order; partial fractions for rational functions; integral e^x (f + f') = e^x f. Definite integral properties: integral_a^b f = integral_a^b f(a + b - x); integral_0^a f(x) = integral_0^a f(a - x); integral_(-a)^a f = 2 integral_0^a f if even and 0 if odd; for periodic f with period T, integral_0^(nT) f = n integral_0^T f. Area between curves = integral (upper - lower) dx; area under y = f(x) from a to b = integral_a^b f.
## Hindi saransh
sin x/x -> 1. d/dx x^n = n x^(n-1). integral x^n = x^(n+1)/(n+1).
> Definite integral of an odd function over (-a, a) is zero.
@formulas
## Limits
sin x / x | 1 | x -> 0
(1 - cos x) / x^2 | 1/2 | x -> 0
(e^x - 1)/x | 1 | x -> 0
(a^x - 1)/x | ln a | x -> 0
ln (1 + x)/x | 1 | x -> 0
(1 + x)^(1/x) | e | x -> 0
(x^n - a^n)/(x - a) | n a^(n - 1) | x -> a
L Hopital | lim f/g = lim f'/g' | 0/0 or inf/inf
## Derivatives
Power | (x^n)' = n x^(n-1) | 
Exponential | (a^x)' = a^x ln a | 
Logarithm | (ln x)' = 1/x | 
Inverse sine | 1/sqrt (1 - x^2) | 
Inverse tangent | 1/(1 + x^2) | 
Product | (uv)' = u'v + uv' | 
Quotient | (u/v)' = (u'v - uv')/v^2 | 
## Integrals
Power | integral x^n dx = x^(n+1)/(n+1) | n != -1
Reciprocal | integral dx/x = ln |x| | 
By parts | integral u v dx = u integral v - integral (u' integral v) | ILATE
Exponential special | integral e^x (f + f') = e^x f | 
Odd function | integral from -a to a = 0 | 
Even function | integral from -a to a = 2 x integral from 0 to a | 
King property | integral_a^b f(x) = integral_a^b f(a + b - x) | 
Area under curve | integral_a^b f(x) dx | 

@qa
Q: What is lim sin x / x as x tends to 0?
A: 1.
Q: What is lim (e^x - 1)/x as x tends to 0?
A: 1.
Q: What is lim (1 + 1/n)^n as n tends to infinity?
A: e.
Q: What is lim (1 - cos x)/x^2 as x tends to 0?
A: 1/2.
Q: State L'Hopital's rule.
A: If f/g is 0/0 or infinity/infinity then lim f/g = lim f'/g'.
Q: What is the derivative of ln x?
A: 1/x.
Q: What is the derivative of a^x?
A: a^x ln a.
Q: What is the derivative of tan^-1 x?
A: 1/(1 + x^2).
Q: State the product rule.
A: (uv)' = u'v + uv'.
Q: State the quotient rule.
A: (u/v)' = (u'v - uv')/v^2.
Q: What is the slope of the normal at a point?
A: -1/f'(a).
Q: What is the condition for a local maximum?
A: f'(c) = 0 and f''(c) < 0.
Q: State Rolle's theorem.
A: If f is continuous on [a, b], differentiable on (a, b) and f(a) = f(b), then f'(c) = 0 for some c.
Q: What does ILATE stand for?
A: Inverse, Logarithmic, Algebraic, Trigonometric, Exponential, the order of choosing u in integration by parts.
Q: What is the integral of 1/x?
A: ln |x| + C.
Q: What is the value of integral of an odd function from -a to a?
A: 0.
Q: What is the integral of e^x (f + f')?
A: e^x f.
Q: What is the King property?
A: Integral from a to b of f(x) = integral from a to b of f(a + b - x).
Q: What is the area under y = f(x) from a to b?
A: The definite integral of f from a to b.
Q: What is the fundamental theorem of calculus?
A: Integral from a to b of f = F(b) - F(a) where F' = f.
Q: Evaluate the integral of x^2 from 0 to 1.
A: 1/3.
Q: Evaluate the integral of x^2 from 1 to 2.
A: 7/3.
Q: Evaluate the integral of x^2 from 0 to 3.
A: 9.
Q: Evaluate the integral of x^3 from 0 to 1.
A: 1/4.
Q: Evaluate the integral of x^3 from 1 to 2.
A: 15/4.
Q: Evaluate the integral of x^3 from 0 to 3.
A: 81/4.
Q: Evaluate the integral of x^4 from 0 to 1.
A: 1/5.
Q: Evaluate the integral of x^4 from 1 to 2.
A: 31/5.
Q: Evaluate the integral of x^4 from 0 to 3.
A: 243/5.
Q: Evaluate the integral of 2x^2 + x from 0 to 1.
A: 7/6.
Q: Evaluate the integral of 2x^2 + x from 1 to 2.
A: 37/6.
Q: Evaluate the integral of 2x^2 + x from 0 to 3.
A: 45/2.
Q: Evaluate the integral of 3x^2 - 2x + 1 from 0 to 1.
A: 1.
Q: Evaluate the integral of 3x^2 - 2x + 1 from 1 to 2.
A: 5.
Q: Evaluate the integral of 3x^2 - 2x + 1 from 0 to 3.
A: 21.
Q: Evaluate the integral of x^3 + x from 0 to 1.
A: 3/4.
Q: Evaluate the integral of x^3 + x from 1 to 2.
A: 21/4.
Q: Evaluate the integral of x^3 + x from 0 to 3.
A: 99/4.
Q: Evaluate the integral of x^2 + 4x from 0 to 1.
A: 7/3.
Q: Evaluate the integral of x^2 + 4x from 1 to 2.
A: 25/3.
Q: Evaluate the integral of x^2 + 4x from 0 to 3.
A: 27.
Q: Evaluate the integral of 5x^4 from 0 to 1.
A: 1.
Q: Evaluate the integral of 5x^4 from 1 to 2.
A: 31.
Q: Evaluate the integral of 5x^4 from 0 to 3.
A: 243.
Q: Evaluate the integral of x^5 - x from 0 to 1.
A: -1/3.
Q: Evaluate the integral of x^5 - x from 1 to 2.
A: 9.
Q: Evaluate the integral of x^5 - x from 0 to 3.
A: 117.
Q: Evaluate the integral of 4x^3 + 2x from 0 to 1.
A: 2.
Q: Evaluate the integral of 4x^3 + 2x from 1 to 2.
A: 18.
Q: Evaluate the integral of 4x^3 + 2x from 0 to 3.
A: 90.
Q: Integrate sin(x) with respect to x.
A: -cos(x) + C.
Q: Integrate cos(x) with respect to x.
A: sin(x) + C.
Q: Integrate exp(x) with respect to x.
A: exp(x) + C.
Q: Integrate 1/x with respect to x.
A: log(x) + C.
Q: Integrate sec(x)^2 with respect to x.
A: sin(x)/cos(x) + C.
Q: Integrate 1/(x^2 + 1) with respect to x.
A: tan^-1(x) + C.
Q: Integrate x exp(x) with respect to x.
A: (x - 1) exp(x) + C.
Q: Integrate x log(x) with respect to x.
A: x^2log(x)/2 - x^2/4 + C.
Q: Integrate sin(x)^2 with respect to x.
A: x/2 - sin(x) cos(x)/2 + C.
Q: Integrate exp(2x) with respect to x.
A: exp(2x)/2 + C.
Q: Integrate tan(x) with respect to x.
A: -log(cos(x)) + C.
Q: Integrate x sin(x) with respect to x.
A: -x cos(x) + sin(x) + C.
Q: Find the limit of sin(x)/x as x tends to 0.
A: 1.
Q: Find the limit of (exp(x) - 1)/x as x tends to 0.
A: 1.
Q: Find the limit of (1 - cos(x))/x^2 as x tends to 0.
A: 1/2.
Q: Find the limit of tan(x)/x as x tends to 0.
A: 1.
Q: Find the limit of log(x + 1)/x as x tends to 0.
A: 1.
Q: Find the limit of (x^2 - 1)/(x - 1) as x tends to 1.
A: 2.
Q: Find the limit of (x^3 - 8)/(x - 2) as x tends to 2.
A: 12.
Q: Find the limit of (sqrt(x + 1) - 1)/x as x tends to 0.
A: 1/2.
Q: Find the limit of sin(3x)/x as x tends to 0.
A: 3.
Q: Find the limit of sin(5x)/(2x) as x tends to 0.
A: 5/2.
Q: Find the limit of (exp(3x) - 1)/x as x tends to 0.
A: 3.
Q: Find the limit of (x^2 - 9)/(x - 3) as x tends to 3.
A: 6.
Q: Differentiate x^2.
A: 2x.
Q: Differentiate x^3.
A: 3x^2.
Q: Differentiate x^4.
A: 4x^3.
Q: Differentiate x^2 + 3x.
A: 2x + 3.
Q: Differentiate 2x^3 - x.
A: 6x^2 - 1.
Q: Differentiate sin(x).
A: cos(x).
Q: Differentiate exp(x).
A: exp(x).
Q: Differentiate log(x).
A: 1/x.
Q: Differentiate x exp(x).
A: x exp(x) + exp(x).
Q: Differentiate cos(x).
A: -sin(x).
Q: Find the area under y = x^2 from x = 0 to x = 2.
A: 8/3 square units.
Q: Find the area under y = x^3 from x = 0 to x = 1.
A: 1/4 square units.
Q: Find the area under y = 2x from x = 1 to x = 4.
A: 15 square units.
Q: Find the area under y = x^2 + 1 from x = 0 to x = 3.
A: 12 square units.
Q: Find the area under y = sin(x) from x = 0 to x = pi.
A: 2 square units.
Q: Find the area under y = exp(x) from x = 0 to x = 1.
A: -1 + E square units.
Q: Find the area under y = 1/x from x = 1 to x = E.
A: 1 square units.
Q: Find the area under y = x^3 - x from x = 0 to x = 1.
A: 1/4 square units.
Q: Find the slope of the tangent to y = x^2 at x = 1.
A: 2.
Q: Find the slope of the tangent to y = x^2 at x = 2.
A: 4.
Q: Find the slope of the tangent to y = x^3 at x = 1.
A: 3.
Q: Find the slope of the tangent to y = x^3 at x = 2.
A: 12.
Q: Find the slope of the tangent to y = x^4 at x = 1.
A: 4.
Q: Find the slope of the tangent to y = x^4 at x = 2.
A: 32.
Q: Find the slope of the tangent to y = 2x^3 at x = 1.
A: 6.
Q: Find the slope of the tangent to y = 2x^3 at x = 2.
A: 24.
Q: Find the slope of the tangent to y = 3x^2 at x = 1.
A: 6.
Q: Find the slope of the tangent to y = 3x^2 at x = 2.
A: 12.
Q: Find the slope of the tangent to y = x^5 at x = 1.
A: 5.
Q: Find the slope of the tangent to y = x^5 at x = 2.
A: 80.
@quiz
? The integral of x^2 from 0 to 1 is
- 4/3
+ 1/3
- -1/6
- 2/3
! Fundamental theorem.
? The integral of x^2 from 1 to 2 is
- 11/6
- 14/3
+ 7/3
- 10/3
! Fundamental theorem.
? The integral of x^2 from 0 to 3 is
- 10
+ 9
- 18
- 17/2
! Fundamental theorem.
? The integral of x^3 from 0 to 1 is
- 1/2
+ 1/4
- 5/4
- -1/4
! Fundamental theorem.
? The integral of x^3 from 1 to 2 is
- 19/4
- 13/4
+ 15/4
- 15/2
! Fundamental theorem.
? The integral of x^3 from 0 to 3 is
- 79/4
+ 81/4
- 81/2
- 85/4
! Fundamental theorem.
? The integral of x^4 from 0 to 1 is
- 2/5
- 6/5
+ 1/5
- -3/10
! Fundamental theorem.
? The integral of x^4 from 1 to 2 is
+ 31/5
- 36/5
- 62/5
- 57/10
! Fundamental theorem.
? The integral of x^4 from 0 to 3 is
+ 243/5
- 248/5
- 486/5
- 481/10
! Fundamental theorem.
? The integral of 2x^2 + x from 0 to 1 is
- 13/6
- 7/3
- 2/3
+ 7/6
! Fundamental theorem.
? The integral of 2x^2 + x from 1 to 2 is
- 17/3
- 37/3
+ 37/6
- 43/6
! Fundamental theorem.
? The integral of 2x^2 + x from 0 to 3 is
- 47/2
+ 45/2
- 22
- 45
! Fundamental theorem.
? The integral of 3x^2 - 2x + 1 from 1 to 2 is
- 6
- 10
- 9/2
+ 5
! Fundamental theorem.
? The integral of 3x^2 - 2x + 1 from 0 to 3 is
- 41/2
- 42
+ 21
- 22
! Fundamental theorem.
? The integral of x^3 + x from 0 to 1 is
- 7/4
+ 3/4
- 3/2
- 1/4
! Fundamental theorem.
? The integral of x^3 + x from 1 to 2 is
- 19/4
- 25/4
+ 21/4
- 21/2
! Fundamental theorem.
? The integral of x^3 + x from 0 to 3 is
- 99/2
+ 99/4
- 103/4
- 97/4
! Fundamental theorem.
? The integral of x^2 + 4x from 0 to 1 is
- 10/3
+ 7/3
- 14/3
- 11/6
! Fundamental theorem.
? The integral of x^2 + 4x from 1 to 2 is
- 47/6
- 50/3
+ 25/3
- 28/3
! Fundamental theorem.
? The integral of x^2 + 4x from 0 to 3 is
+ 27
- 53/2
- 54
- 28
! Fundamental theorem.
? The integral of 5x^4 from 1 to 2 is
+ 31
- 61/2
- 62
- 32
! Fundamental theorem.
? The integral of 5x^4 from 0 to 3 is
- 244
- 485/2
+ 243
- 486
! Fundamental theorem.
? The integral of x^5 - x from 0 to 1 is
+ -1/3
- 2/3
- -2/3
- -5/6
! Fundamental theorem.
? The integral of x^5 - x from 1 to 2 is
+ 9
- 17/2
- 18
- 10
! Fundamental theorem.
? The integral of x^5 - x from 0 to 3 is
+ 117
- 233/2
- 234
- 118
! Fundamental theorem.
? The integral of 4x^3 + 2x from 0 to 1 is
+ 2
- 3
- 3/2
- 4
! Fundamental theorem.
? The integral of 4x^3 + 2x from 1 to 2 is
+ 18
- 19
- 35/2
- 36
! Fundamental theorem.
? The integral of 4x^3 + 2x from 0 to 3 is
- 91
- 180
+ 90
- 179/2
! Fundamental theorem.
? The integral of 1/x is
+ log(x) + C
- -log(x) + C
- -1/x^2 + C
- 2log(x) + C
! Standard result.
? The integral of sec(x)^2 is
- 2sin(x)/cos(x) + C
- -sin(x)/cos(x) + C
+ sin(x)/cos(x) + C
- 2tan(x) sec(x)^2 + C
! Standard result.
? The integral of 1/(x^2 + 1) is
- 2tan^-1(x) + C
+ tan^-1(x) + C
- -tan^-1(x) + C
- -2x/(x^2 + 1)^2 + C
! Standard result.
? The integral of x exp(x) is
- -(x - 1) exp(x) + C
- 2(x - 1) exp(x) + C
+ (x - 1) exp(x) + C
- x exp(x) + exp(x) + C
! Standard result.
? The integral of x log(x) is
+ x^2log(x)/2 - x^2/4 + C
- x^2log(x) - x^2/2 + C
- -x^2log(x)/2 + x^2/4 + C
- log(x) + 1 + C
! Standard result.
? The integral of sin(x)^2 is
+ x/2 - sin(x) cos(x)/2 + C
- 2sin(x) cos(x) + C
- x - sin(x) cos(x) + C
- -x/2 + sin(x) cos(x)/2 + C
! Standard result.
? The integral of exp(2x) is
- exp(2x) + C
- -exp(2x)/2 + C
+ exp(2x)/2 + C
- 2exp(2x) + C
! Standard result.
? The integral of tan(x) is
+ -log(cos(x)) + C
- tan(x)^2 + 1 + C
- log(cos(x)) + C
- -2log(cos(x)) + C
! Standard result.
? The integral of x sin(x) is
+ -x cos(x) + sin(x) + C
- -2x cos(x) + 2sin(x) + C
- x cos(x) + sin(x) + C
- x cos(x) - sin(x) + C
! Standard result.
? The limit of (1 - cos(x))/x^2 as x tends to 0 is
- -1/2
- 3/2
+ 1/2
- 1
! Standard limit.
? The limit of (x^2 - 1)/(x - 1) as x tends to 1 is
- 1
+ 2
- 4
- 3
! Standard limit.
? The limit of (x^3 - 8)/(x - 2) as x tends to 2 is
- 11
- 24
+ 12
- 13
! Standard limit.
? The limit of (sqrt(x + 1) - 1)/x as x tends to 0 is
- 1
- -1/2
- 3/2
+ 1/2
! Standard limit.
? The limit of sin(3x)/x as x tends to 0 is
- 2
- 6
- 4
+ 3
! Standard limit.
? The limit of sin(5x)/(2x) as x tends to 0 is
- 5
- 7/2
+ 5/2
- 3/2
! Standard limit.
? The limit of (exp(3x) - 1)/x as x tends to 0 is
+ 3
- 2
- 6
- 4
! Standard limit.
? The limit of (x^2 - 9)/(x - 3) as x tends to 3 is
- 7
+ 6
- 12
- 5
! Standard limit.
? Slope of the tangent to y = x^2 at x = 1
- 3
- 4
- 1
+ 2
! f'(a).
? Slope of the tangent to y = x^2 at x = 2
+ 4
- 8
- 3
- 5
! f'(a).
? Slope of the tangent to y = x^3 at x = 1
- 4
- 2
- 6
+ 3
! f'(a).
? Slope of the tangent to y = x^3 at x = 2
+ 12
- 13
- 11
- 24
! f'(a).
? Slope of the tangent to y = x^4 at x = 1
- 3
- 8
- 5
+ 4
! f'(a).
? Slope of the tangent to y = x^4 at x = 2
- 33
- 64
+ 32
- 31
! f'(a).
? Slope of the tangent to y = 2x^3 at x = 1
- 7
+ 6
- 12
- 5
! f'(a).
? Slope of the tangent to y = 2x^3 at x = 2
- 23
- 25
- 48
+ 24
! f'(a).
? Slope of the tangent to y = 3x^2 at x = 1
- 7
- 12
+ 6
- 5
! f'(a).
? Slope of the tangent to y = 3x^2 at x = 2
- 13
- 11
- 24
+ 12
! f'(a).
? Slope of the tangent to y = x^5 at x = 1
- 4
+ 5
- 10
- 6
! f'(a).
? Slope of the tangent to y = x^5 at x = 2
- 79
- 81
- 160
+ 80
! f'(a).
? lim (sin x)/x as x -> 0 is
- does not exist
- 0
+ 1
- infinity
! Standard.
? The integral of an odd function over (-a, a) is
+ 0
- a
- infinite
- 2a
! Symmetry.
? d/dx (a^x) is
- x a^(x-1)
+ a^x ln a
- a^x / ln a
- a^x
! Standard.
? Integration by parts uses the order
- LIATE reversed
- ABCD
- random
+ ILATE
! Rule of thumb.
? Local maximum needs f'' to be
+ negative
- zero always
- positive
- infinite
! Second derivative test.
? What is lim sin x / x as x tends to 0?
- 1/(1 + x^2)
- 1/2
- ln |x| + C
+ 1
! Answer: 1.
? What is lim (e^x - 1)/x as x tends to 0?
+ 1
- 0
- e
- 1/2
! Answer: 1.
? What is lim (1 + 1/n)^n as n tends to infinity?
+ e
- a^x ln a
- e^x f
- 1/(1 + x^2)
! Answer: e.
? What is lim (1 - cos x)/x^2 as x tends to 0?
- 1
+ 1/2
- f'(c) = 0 and f''(c) < 0
- e^x f
! Answer: 1/2.
? What is the derivative of ln x?
- e
- ln |x| + C
+ 1/x
- The definite integral of f from a to b
! Answer: 1/x.
? What is the derivative of a^x?
- -1/f'(a)
- 0
- 1/(1 + x^2)
+ a^x ln a
! Answer: a^x ln a.
? What is the derivative of tan^-1 x?
- f'(c) = 0 and f''(c) < 0
+ 1/(1 + x^2)
- e^x f
- 1
! Answer: 1/(1 + x^2).
? What is the slope of the normal at a point?
- e^x f
- 1/2
- f'(c) = 0 and f''(c) < 0
+ -1/f'(a)
! Answer: -1/f'(a).
? What is the condition for a local maximum?
+ f'(c) = 0 and f''(c) < 0
- ln |x| + C
- 1
- e
! Answer: f'(c) = 0 and f''(c) < 0.
? What is the integral of 1/x?
- e^x f
+ ln |x| + C
- 1/(1 + x^2)
- e
! Answer: ln |x| + C.
? What is the value of integral of an odd function from -a to a?
+ 0
- f'(c) = 0 and f''(c) < 0
- 1/x
- 1/(1 + x^2)
! Answer: 0.
? What is the integral of e^x (f + f')?
- 0
+ e^x f
- 1/(1 + x^2)
- f'(c) = 0 and f''(c) < 0
! Answer: e^x f.
? What is the area under y = f(x) from a to b?
- a^x ln a
- 0
+ The definite integral of f from a to b
- 1/2
! Answer: The definite integral of f from a to b.
? What is the fundamental theorem of calculus?
- f'(c) = 0 and f''(c) < 0
- The definite integral of f from a to b
- Integral from a to b of f(x) = integral from a to b of f(a + b - x)
+ Integral from a to b of f = F(b) - F(a) where F' = f
! Answer: Integral from a to b of f = F(b) - F(a) where F' = f.
? Evaluate the integral of x^2 from 0 to 1.
- 5
+ 1/3
- 2
- 117
! Answer: 1/3.
? Evaluate the integral of x^2 from 1 to 2.
- 1
+ 7/3
- 9
- 18
! Answer: 7/3.
? Evaluate the integral of x^2 from 0 to 3.
- 117
- 21
+ 9
- 1/3
! Answer: 9.
? Evaluate the integral of x^3 from 0 to 1.
- 9
+ 1/4
- 7/3
- 37/6
! Answer: 1/4.
? Evaluate the integral of x^3 from 1 to 2.
- 81/4
+ 15/4
- 45/2
- 1/4
! Answer: 15/4.
? Evaluate the integral of x^3 from 0 to 3.
- 25/3
- 90
- 27
+ 81/4
! Answer: 81/4.
? Evaluate the integral of x^4 from 0 to 1.
- 117
- 243/5
- 45/2
+ 1/5
! Answer: 1/5.
? Evaluate the integral of x^4 from 1 to 2.
+ 31/5
- 1/3
- 243
- 25/3
! Answer: 31/5.
? Evaluate the integral of x^4 from 0 to 3.
- -1/3
+ 243/5
- 243
- 37/6
! Answer: 243/5.
? Evaluate the integral of 2x^2 + x from 0 to 1.
- 243/5
- 3/4
+ 7/6
- 81/4
! Answer: 7/6.
? Evaluate the integral of 2x^2 + x from 1 to 2.
- 25/3
+ 37/6
- -1/3
- 27
! Answer: 37/6.
? Evaluate the integral of 2x^2 + x from 0 to 3.
- 2
- 21/4
- 18
+ 45/2
! Answer: 45/2.
? Evaluate the integral of 3x^2 - 2x + 1 from 0 to 1.
+ 1
- 3/4
- 15/4
- 7/3
! Answer: 1.
? Evaluate the integral of 3x^2 - 2x + 1 from 1 to 2.
+ 5
- 81/4
- 37/6
- 1
! Answer: 5.
? Evaluate the integral of 3x^2 - 2x + 1 from 0 to 3.
- 31
+ 21
- 2
- 9
! Answer: 21.
? Evaluate the integral of x^3 + x from 0 to 1.
- 31/5
- 5
- 45/2
+ 3/4
! Answer: 3/4.
? Evaluate the integral of x^3 + x from 1 to 2.
- 15/4
- 1/4
- 18
+ 21/4
! Answer: 21/4.
? Evaluate the integral of x^3 + x from 0 to 3.
- 5
- 2
- 1/5
+ 99/4
! Answer: 99/4.
? Evaluate the integral of x^2 + 4x from 0 to 1.
- 90
- 37/6
+ 7/3
- -1/3
! Answer: 7/3.
? Evaluate the integral of x^2 + 4x from 1 to 2.
+ 25/3
- 5
- 117
- 81/4
! Answer: 25/3.
? Evaluate the integral of x^2 + 4x from 0 to 3.
- 81/4
- -1/3
- 31/5
+ 27
! Answer: 27.
? Evaluate the integral of 5x^4 from 0 to 1.
- 15/4
+ 1
- 7/6
- 1/3
! Answer: 1.
? Evaluate the integral of 5x^4 from 1 to 2.
+ 31
- 21
- 2
- 21/4
! Answer: 31.
? Evaluate the integral of 5x^4 from 0 to 3.
- 81/4
- 9
- 15/4
+ 243
! Answer: 243.
? Evaluate the integral of x^5 - x from 0 to 1.
- 243
- 3/4
- 21/4
+ -1/3
! Answer: -1/3.
? Evaluate the integral of x^5 - x from 1 to 2.
- 45/2
- 7/3
+ 9
- 1
! Answer: 9.
? Evaluate the integral of x^5 - x from 0 to 3.
- 3/4
- 45/2
- -1/3
+ 117
! Answer: 117.
? Evaluate the integral of 4x^3 + 2x from 0 to 1.
+ 2
- 9
- 243/5
- 117
! Answer: 2.
? Evaluate the integral of 4x^3 + 2x from 1 to 2.
- 3/4
+ 18
- 1/5
- 37/6
! Answer: 18.
? Evaluate the integral of 4x^3 + 2x from 0 to 3.
- 31/5
- 2
+ 90
- 15/4
! Answer: 90.
? Find the limit of sin(x)/x as x tends to 0.
- 3
+ 1
- 2 square units
- 15 square units
! Answer: 1.
? Find the limit of (exp(x) - 1)/x as x tends to 0.
- 2
- 5/2
- 6
+ 1
! Answer: 1.
? Find the limit of (1 - cos(x))/x^2 as x tends to 0.
+ 1/2
- -1 + E square units
- 5/2
- 1/4 square units
! Answer: 1/2.
? Find the limit of tan(x)/x as x tends to 0.
- 2 square units
- 5
+ 1
- 32
! Answer: 1.
? Find the limit of log(x + 1)/x as x tends to 0.
- 12 square units
+ 1
- 4
- 5
! Answer: 1.
? Find the limit of (x^2 - 1)/(x - 1) as x tends to 1.
- 2 square units
- 12
- 3
+ 2
! Answer: 2.
? Find the limit of (x^3 - 8)/(x - 2) as x tends to 2.
- 2 square units
+ 12
- -1 + E square units
- 4
! Answer: 12.
? Find the limit of (sqrt(x + 1) - 1)/x as x tends to 0.
- 80
- 12 square units
- 4
+ 1/2
! Answer: 1/2.
? Find the limit of sin(3x)/x as x tends to 0.
- 1/2
+ 3
- 12 square units
- 8/3 square units
! Answer: 3.
? Find the limit of sin(5x)/(2x) as x tends to 0.
+ 5/2
- 5
- 6
- 1/2
! Answer: 5/2.
? Find the limit of (exp(3x) - 1)/x as x tends to 0.
- 5/2
- 15 square units
+ 3
- 8/3 square units
! Answer: 3.
? Find the limit of (x^2 - 9)/(x - 3) as x tends to 3.
- 32
- 15 square units
- -1 + E square units
+ 6
! Answer: 6.
? Find the area under y = x^2 from x = 0 to x = 2.
- 5/2
- 2 square units
- 2
+ 8/3 square units
! Answer: 8/3 square units.
? Find the area under y = x^3 from x = 0 to x = 1.
- 3
- 15 square units
- 1
+ 1/4 square units
! Answer: 1/4 square units.
? Find the area under y = 2x from x = 1 to x = 4.
+ 15 square units
- 2 square units
- 80
- 1/2
! Answer: 15 square units.
? Find the area under y = x^2 + 1 from x = 0 to x = 3.
- 1/4 square units
- 1 square units
+ 12 square units
- 5
! Answer: 12 square units.
@visual
formula | JEE Main: limits, derivatives and integrals | key formula
@problems
P: Evaluate the integral of 2x from 0 to 3.
A: 9.
R: 1 | [x^2] from 0 to 3
R: 1 | 9
