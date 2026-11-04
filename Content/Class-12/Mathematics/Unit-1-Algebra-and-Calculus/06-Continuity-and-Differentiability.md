# Continuity and differentiability
minutes: 45
yt: class 12 continuity and differentiability
@study
A function f is continuous at x = a if the limit as x tends to a equals f(a). It is differentiable at a if the derivative exists there; differentiable implies continuous but not conversely. Standard derivatives: d/dx x^n = n x^(n-1), sin x -> cos x, cos x -> -sin x, e^x -> e^x, log x -> 1/x. Rules: sum, product, quotient and chain rules.
## Deep dive: continuity
f is continuous at x = a if lim (x -> a-) f(x) = lim (x -> a+) f(x) = f(a). A function is continuous on an interval if it is continuous at every point of it. Polynomials, sin x, cos x and e^x are continuous everywhere; rational functions are continuous except where the denominator is zero; |x| is continuous everywhere. Sums, differences, products and compositions of continuous functions are continuous, and so are quotients where the denominator is non-zero. To make a piecewise function continuous, equate the left and right limits at the join and solve for the unknown constant.
## Deep dive: differentiability and rules
f is differentiable at a if the left and right derivatives exist and are equal. Differentiability implies continuity, but |x| is continuous and not differentiable at 0. Rules: (u + v)' = u' + v'; (uv)' = u'v + uv'; (u/v)' = (u'v - uv')/v^2; chain rule (f(g(x)))' = f'(g(x)) g'(x). Standard results: (x^n)' = n x^(n-1), (sin x)' = cos x, (cos x)' = -sin x, (tan x)' = sec^2 x, (e^x)' = e^x, (a^x)' = a^x log a, (log x)' = 1/x, (sin^-1 x)' = 1/sqrt (1 - x^2), (tan^-1 x)' = 1/(1 + x^2).
## Deep dive: special techniques
Implicit differentiation: differentiate both sides with respect to x and treat y as a function of x (use dy/dx). Logarithmic differentiation is used for y = f(x)^g(x) and long products: take log first. Parametric form: dy/dx = (dy/dt)/(dx/dt). Second derivative d^2y/dx^2 is the derivative of dy/dx. Rolle's theorem and the mean value theorem: if f is continuous on [a, b] and differentiable on (a, b) then some c satisfies f'(c) = (f(b) - f(a))/(b - a).
## Hindi saransh
Continuous: LHL = RHL = f(a). Differentiable => continuous.
> Chain rule: d/dx f(g(x)) = f'(g(x)) g'(x).
@formulas
## Continuity
Condition | LHL = RHL = f(a) | at x = a
Differentiable | derivative exists | implies continuous
## Standard derivatives
Power | d/dx x^n = n x^(n-1) | 
Sine | d/dx sin x = cos x | 
Cosine | d/dx cos x = -sin x | 
Tangent | d/dx tan x = sec^2 x | 
Exponential | d/dx e^x = e^x | 
Logarithm | d/dx log x = 1/x | 
Inverse sine | 1/sqrt (1 - x^2) | 
Inverse tangent | 1/(1 + x^2) | 
## Rules
Product | (uv)' = u'v + uv' | 
Quotient | (u/v)' = (u'v - uv')/v^2 | 
Chain | dy/dx = (dy/du)(du/dx) | 
Parametric | dy/dx = (dy/dt)/(dx/dt) | 
Mean value theorem | f'(c) = (f(b) - f(a))/(b - a) | 

@qa
Q: When is a function continuous at x = a?
A: When the left limit, right limit and f(a) are all equal.
Q: Does differentiability imply continuity?
A: Yes.
Q: Is every continuous function differentiable?
A: No, for example |x| at 0.
Q: What is the derivative of sin x?
A: cos x.
Q: What is the derivative of cos x?
A: -sin x.
Q: What is the derivative of tan x?
A: sec^2 x.
Q: What is the derivative of e^x?
A: e^x.
Q: What is the derivative of log x?
A: 1/x.
Q: State the product rule.
A: (uv)' = u'v + uv'.
Q: State the quotient rule.
A: (u/v)' = (u'v - uv')/v^2.
Q: State the chain rule.
A: dy/dx = (dy/du)(du/dx).
Q: What is the derivative of sin^-1 x?
A: 1/sqrt (1 - x^2).
Q: What is the derivative of tan^-1 x?
A: 1/(1 + x^2).
Q: What is logarithmic differentiation used for?
A: Functions of the form f(x)^g(x) and long products or quotients.
Q: What is dy/dx in parametric form?
A: (dy/dt)/(dx/dt).
Q: State Rolle's theorem.
A: If f is continuous on [a, b], differentiable on (a, b) and f(a) = f(b), then f'(c) = 0 for some c in (a, b).
Q: State the mean value theorem.
A: f'(c) = (f(b) - f(a))/(b - a) for some c in (a, b).
Q: Where is |x| not differentiable?
A: At x = 0.
Q: Differentiate x^2 with respect to x.
A: 2x.
Q: Differentiate x^3 with respect to x.
A: 3x^2.
Q: Differentiate x^4 with respect to x.
A: 4x^3.
Q: Differentiate x^5 with respect to x.
A: 5x^4.
Q: Differentiate 3x^2 + 2x with respect to x.
A: 6x + 2.
Q: Differentiate x^3 - 4x + 1 with respect to x.
A: 3x^2 - 4.
Q: Differentiate 2x^4 - x^2 with respect to x.
A: 8x^3 - 2x.
Q: Differentiate 5x^3 + x with respect to x.
A: 15x^2 + 1.
Q: Differentiate x^2 + 7 with respect to x.
A: 2x.
Q: Differentiate sin(x) with respect to x.
A: cos(x).
Q: Differentiate cos(x) with respect to x.
A: -sin(x).
Q: Differentiate exp(x) with respect to x.
A: exp(x).
Q: Differentiate log(x) with respect to x.
A: 1/x.
Q: Differentiate x sin(x) with respect to x.
A: x cos(x) + sin(x).
Q: Differentiate x exp(x) with respect to x.
A: x exp(x) + exp(x).
Q: Differentiate x^2cos(x) with respect to x.
A: -x^2sin(x) + 2x cos(x).
Q: Differentiate sin(x) cos(x) with respect to x.
A: -sin(x)^2 + cos(x)^2.
Q: Differentiate x log(x) with respect to x.
A: log(x) + 1.
Q: Differentiate exp(x) sin(x) with respect to x.
A: exp(x) sin(x) + exp(x) cos(x).
Q: Differentiate sin(2x) with respect to x.
A: 2cos(2x).
Q: Differentiate cos(3x) with respect to x.
A: -3sin(3x).
Q: Differentiate exp(2x) with respect to x.
A: 2exp(2x).
Q: Differentiate log(3x) with respect to x.
A: 1/x.
Q: Differentiate sin(x^2) with respect to x.
A: 2x cos(x^2).
Q: Differentiate exp(x^2) with respect to x.
A: 2x exp(x^2).
Q: Differentiate (x^2 + 1)^3 with respect to x.
A: 6x (x^2 + 1)^2.
Q: Differentiate (2x + 1)^4 with respect to x.
A: 8(2x + 1)^3.
Q: Differentiate sqrt(x) with respect to x.
A: 1/(2sqrt(x)).
Q: Differentiate tan(x) with respect to x.
A: tan(x)^2 + 1.
Q: Differentiate tan^-1(x) with respect to x.
A: 1/(x^2 + 1).
Q: Differentiate sin^-1(x) with respect to x.
A: 1/sqrt(1 - x^2).
Q: Differentiate x^2/(x + 1) with respect to x.
A: -x^2/(x + 1)^2 + 2x/(x + 1).
Q: Differentiate (x + 1)/(x - 1) with respect to x.
A: 1/(x - 1) - (x + 1)/(x - 1)^2.
Q: Differentiate sin(x)/x with respect to x.
A: cos(x)/x - sin(x)/x^2.
Q: Differentiate exp(x)/x with respect to x.
A: exp(x)/x - exp(x)/x^2.
Q: Differentiate log(x)/x with respect to x.
A: -log(x)/x^2 + x^(-2).
Q: Differentiate x^3exp(x) with respect to x.
A: x^3exp(x) + 3x^2exp(x).
Q: Differentiate cos(x)^2 with respect to x.
A: -2sin(x) cos(x).
Q: Differentiate sin(x)^3 with respect to x.
A: 3sin(x)^2cos(x).
Q: Differentiate log(x^2 + 1) with respect to x.
A: 2x/(x^2 + 1).
Q: Find d/dx of x^2.
A: 2x.
Q: Find d/dx of x^3.
A: 3x^2.
Q: Find d/dx of x^4.
A: 4x^3.
Q: Find d/dx of x^5.
A: 5x^4.
Q: Find d/dx of x^6.
A: 6x^5.
Q: Find d/dx of x^7.
A: 7x^6.
Q: Find d/dx of x^8.
A: 8x^7.
Q: Find d/dx of x^9.
A: 9x^8.
Q: Find d/dx of x^10.
A: 10x^9.
Q: Find d/dx of x^11.
A: 11x^10.
Q: The slope of the tangent to y = x^2 at x = 3 is
A: 6.
Q: The slope of the tangent to y = x^3 at x = 2 is
A: 12.
Q: The slope of the tangent to y = x^2 + 3x at x = 1 is
A: 5.
Q: The slope of the tangent to y = 2x^3 - x at x = 2 is
A: 23.
Q: The slope of the tangent to y = x^4 at x = 1 is
A: 4.
Q: The slope of the tangent to y = sin(x) at x = 0 is
A: 1.
Q: The slope of the tangent to y = cos(x) at x = 0 is
A: 0.
Q: The slope of the tangent to y = exp(x) at x = 0 is
A: 1.
Q: The slope of the tangent to y = x^3 + x^2 at x = 1 is
A: 5.
Q: The slope of the tangent to y = 5x^2 at x = 4 is
A: 40.
Q: The slope of the tangent to y = x^2 - 4x at x = 2 is
A: 0.
Q: The slope of the tangent to y = x^3 - 3x at x = 1 is
A: 0.
Q: The slope of the tangent to y = x^2 + 1 at x = 5 is
A: 10.
Q: Find the equation of the tangent to y = x^2 at x = 3.
A: y - 9 = 6 (x - 3).
Q: Find the equation of the tangent to y = x^3 at x = 2.
A: y - 8 = 12 (x - 2).
Q: Find the equation of the tangent to y = x^2 + 3x at x = 1.
A: y - 4 = 5 (x - 1).
Q: Find the equation of the tangent to y = x^2 + x at x = 2.
A: y - 6 = 5 (x - 2).
Q: Find the equation of the tangent to y = 2x^2 at x = 1.
A: y - 2 = 4 (x - 1).
Q: Find the equation of the tangent to y = x^3 at x = 1.
A: y - 1 = 3 (x - 1).
Q: For f(x) = kx + 2 (x < 3) and f(x) = 11 (x >= 3), find k for continuity at x = 3.
A: k = 3.
Q: For f(x) = kx + 1 (x < 4) and f(x) = 11 (x >= 4), find k for continuity at x = 4.
A: k = 2.5.
Q: For f(x) = kx + 3 (x < 1) and f(x) = 13 (x >= 1), find k for continuity at x = 1.
A: k = 10.
Q: For f(x) = kx + 2 (x < 5) and f(x) = 19 (x >= 5), find k for continuity at x = 5.
A: k = 3.4.
Q: For f(x) = kx + 4 (x < 2) and f(x) = 14 (x >= 2), find k for continuity at x = 2.
A: k = 5.
Q: For f(x) = kx + 5 (x < 3) and f(x) = 23 (x >= 3), find k for continuity at x = 3.
A: k = 6.
Q: Differentiate 3x^2.
A: 6x.
Q: Differentiate 5x^3.
A: 15x^2.
Q: Differentiate 2x^4.
A: 8x^3.
Q: Differentiate 7x^2.
A: 14x.
Q: Differentiate 4x^5.
A: 20x^4.
Q: Differentiate 6x^3.
A: 18x^2.
Q: Differentiate 9x^2.
A: 18x.
Q: Differentiate 8x^4.
A: 32x^3.
Q: Find d/dx of 2sin x.
A: 2cos x.
Q: Find d/dx of 2e^x.
A: 2e^x.
Q: Find d/dx of 3sin x.
A: 3cos x.
Q: Find d/dx of 3e^x.
A: 3e^x.
Q: Find d/dx of 4sin x.
A: 4cos x.
Q: Find d/dx of 4e^x.
A: 4e^x.
Q: Find d/dx of 5sin x.
A: 5cos x.
Q: Find d/dx of 5e^x.
A: 5e^x.
Q: Find d/dx of 6sin x.
A: 6cos x.
Q: Find d/dx of 6e^x.
A: 6e^x.
Q: Find d/dx of 7sin x.
A: 7cos x.
Q: Find d/dx of 7e^x.
A: 7e^x.
@quiz
? The derivative of x^2 is
- x^3/3
+ 2x
- 2x + 1
- x^2
! Apply the rules.
? The derivative of x^3 is
+ 3x^2
- 3x^2 + 1
- x^4/4
- x^3
! Apply the rules.
? The derivative of x^4 is
- 4x^3 + 1
- x^4
+ 4x^3
- x^5/5
! Apply the rules.
? The derivative of x^5 is
- 5x^4 + 1
+ 5x^4
- x^6/6
- x^5
! Apply the rules.
? The derivative of 3x^2 + 2x is
- 6x + 3
- 3x^2 + 2x
- x^3 + x^2
+ 6x + 2
! Apply the rules.
? The derivative of x^3 - 4x + 1 is
- x^4/4 - 2x^2 + x
- x^3 - 4x + 1
- 3x^2 - 3
+ 3x^2 - 4
! Apply the rules.
? The derivative of 2x^4 - x^2 is
- 2x^5/5 - x^3/3
- 8x^3 - 2x + 1
- 2x^4 - x^2
+ 8x^3 - 2x
! Apply the rules.
? The derivative of 5x^3 + x is
- 15x^2 + 2
- 5x^4/4 + x^2/2
- 5x^3 + x
+ 15x^2 + 1
! Apply the rules.
? The derivative of x^2 + 7 is
+ 2x
- x^2 + 7
- x^3/3 + 7x
- 2x + 1
! Apply the rules.
? The derivative of sin(x) is
- sin(x)
- -cos(x)
- cos(x) + 1
+ cos(x)
! Apply the rules.
? The derivative of cos(x) is
- cos(x)
- 1 - sin(x)
+ -sin(x)
- sin(x)
! Apply the rules.
? The derivative of exp(x) is
- exp(x) + 1
- -exp(x)
- 2exp(x)
+ exp(x)
! Apply the rules.
? The derivative of log(x) is
+ 1/x
- log(x)
- -1/x
- 1 + 1/x
! Apply the rules.
? The derivative of x sin(x) is
+ x cos(x) + sin(x)
- x sin(x)
- -x cos(x) - sin(x)
- x cos(x) + sin(x) + 1
! Apply the rules.
? The derivative of x exp(x) is
- x exp(x)
+ x exp(x) + exp(x)
- -x exp(x) - exp(x)
- x exp(x) + exp(x) + 1
! Apply the rules.
? The derivative of x^2cos(x) is
- x^2cos(x)
- x^2sin(x) - 2x cos(x)
+ -x^2sin(x) + 2x cos(x)
- -x^2sin(x) + 2x cos(x) + 1
! Apply the rules.
? The derivative of sin(x) cos(x) is
+ -sin(x)^2 + cos(x)^2
- sin(x) cos(x)
- -sin(x)^2 + cos(x)^2 + 1
- sin(x)^2 - cos(x)^2
! Apply the rules.
? The derivative of x log(x) is
- x log(x)
- -log(x) - 1
+ log(x) + 1
- log(x) + 2
! Apply the rules.
? The derivative of exp(x) sin(x) is
- -exp(x) sin(x) - exp(x) cos(x)
- exp(x) sin(x) + exp(x) cos(x) + 1
- exp(x) sin(x)
+ exp(x) sin(x) + exp(x) cos(x)
! Apply the rules.
? The derivative of sin(2x) is
+ 2cos(2x)
- -2cos(2x)
- 2cos(2x) + 1
- sin(2x)
! Apply the rules.
? The derivative of cos(3x) is
+ -3sin(3x)
- cos(3x)
- 3sin(3x)
- 1 - 3sin(3x)
! Apply the rules.
? The derivative of exp(2x) is
- -2exp(2x)
- 2exp(2x) + 1
- exp(2x)
+ 2exp(2x)
! Apply the rules.
? The derivative of log(3x) is
- 1 + 1/x
- log(3x)
+ 1/x
- -1/x
! Apply the rules.
? The derivative of sin(x^2) is
- sin(x^2)
+ 2x cos(x^2)
- 2x cos(x^2) + 1
- -2x cos(x^2)
! Apply the rules.
? The derivative of exp(x^2) is
- exp(x^2)
+ 2x exp(x^2)
- -2x exp(x^2)
- 2x exp(x^2) + 1
! Apply the rules.
? The derivative of (x^2 + 1)^3 is
+ 6x (x^2 + 1)^2
- (x^2 + 1)^3
- 6x (x^2 + 1)^2 + 1
- x^7/7 + 3x^5/5 + x^3 + x
! Apply the rules.
? The derivative of (2x + 1)^4 is
- 16x^5/5 + 8x^4 + 8x^3 + 4x^2 + x
+ 8(2x + 1)^3
- 8(2x + 1)^3 + 1
- (2x + 1)^4
! Apply the rules.
? The derivative of sqrt(x) is
- -1/(2sqrt(x))
- 1 + 1/(2sqrt(x))
- sqrt(x)
+ 1/(2sqrt(x))
! Apply the rules.
? The derivative of tan(x) is
+ tan(x)^2 + 1
- tan(x)
- tan(x)^2 + 2
- -tan(x)^2 - 1
! Apply the rules.
? The derivative of tan^-1(x) is
- 1 + 1/(x^2 + 1)
- -1/(x^2 + 1)
- tan^-1(x)
+ 1/(x^2 + 1)
! Apply the rules.
? The derivative of sin^-1(x) is
+ 1/sqrt(1 - x^2)
- sin^-1(x)
- -1/sqrt(1 - x^2)
- 1 + 1/sqrt(1 - x^2)
! Apply the rules.
? The derivative of x^2/(x + 1) is
+ -x^2/(x + 1)^2 + 2x/(x + 1)
- -x^2/(x + 1)^2 + 2x/(x + 1) + 1
- x^2/(x + 1)^2 - 2x/(x + 1)
- x^2/(x + 1)
! Apply the rules.
? The derivative of (x + 1)/(x - 1) is
+ 1/(x - 1) - (x + 1)/(x - 1)^2
- (x + 1)/(x - 1)
- -1/(x - 1) + (x + 1)/(x - 1)^2
- 1 + 1/(x - 1) - (x + 1)/(x - 1)^2
! Apply the rules.
? The derivative of sin(x)/x is
- -cos(x)/x + sin(x)/x^2
- sin(x)/x
- 1 + cos(x)/x - sin(x)/x^2
+ cos(x)/x - sin(x)/x^2
! Apply the rules.
? The derivative of exp(x)/x is
- exp(x)/x
+ exp(x)/x - exp(x)/x^2
- 1 + exp(x)/x - exp(x)/x^2
- -exp(x)/x + exp(x)/x^2
! Apply the rules.
? The derivative of log(x)/x is
+ -log(x)/x^2 + x^(-2)
- 1 - log(x)/x^2 + x^(-2)
- log(x)/x
- log(x)/x^2 - 1/x^2
! Apply the rules.
? The derivative of x^3exp(x) is
- -x^3exp(x) - 3x^2exp(x)
+ x^3exp(x) + 3x^2exp(x)
- x^3exp(x)
- x^3exp(x) + 3x^2exp(x) + 1
! Apply the rules.
? The derivative of cos(x)^2 is
- 2sin(x) cos(x)
- -2sin(x) cos(x) + 1
- cos(x)^2
+ -2sin(x) cos(x)
! Apply the rules.
? The derivative of sin(x)^3 is
- -3sin(x)^2cos(x)
- 3sin(x)^2cos(x) + 1
- sin(x)^3
+ 3sin(x)^2cos(x)
! Apply the rules.
? The derivative of log(x^2 + 1) is
- -2x/(x^2 + 1)
- log(x^2 + 1)
+ 2x/(x^2 + 1)
- 2x/(x^2 + 1) + 1
! Apply the rules.
? d/dx of x^2 is
- x^1
- 2x^2
- x
+ 2x
! Power rule.
? d/dx of x^3 is
+ 3x^2
- 3x^3
- x^2
- 2x^3
! Power rule.
? d/dx of x^4 is
- 3x^4
- x^3
- 4x^4
+ 4x^3
! Power rule.
? d/dx of x^5 is
- 4x^5
- 5x^5
- x^4
+ 5x^4
! Power rule.
? d/dx of x^6 is
+ 6x^5
- 6x^6
- x^5
- 5x^6
! Power rule.
? d/dx of x^7 is
- 6x^7
- 7x^7
- x^6
+ 7x^6
! Power rule.
? d/dx of x^8 is
- x^7
- 8x^8
- 7x^8
+ 8x^7
! Power rule.
? d/dx of x^9 is
- x^8
+ 9x^8
- 9x^9
- 8x^9
! Power rule.
? d/dx of x^10 is
- 10x^10
+ 10x^9
- x^9
- 9x^10
! Power rule.
? d/dx of x^11 is
+ 11x^10
- 11x^11
- 10x^11
- x^10
! Power rule.
? The slope of the tangent to y = x^2 at x = 3 is
- 3
- 5.4
+ 6
- 6.6
! f'(a).
? The slope of the tangent to y = x^3 at x = 2 is
+ 12
- 6
- 24
- 14.4
! f'(a).
? The slope of the tangent to y = x^2 + 3x at x = 1 is
- 10
- 6
+ 5
- 4
! f'(a).
? The slope of the tangent to y = 2x^3 - x at x = 2 is
- 46
- 20.7
+ 23
- 18.4
! f'(a).
? The slope of the tangent to y = x^4 at x = 1 is
- 4.4
+ 4
- 4.8
- 6
! f'(a).
? The slope of the tangent to y = sin(x) at x = 0 is
- 0.9
- 0.5
+ 1
- 1.1
! f'(a).
? The slope of the tangent to y = exp(x) at x = 0 is
- 0.9
- 1.5
+ 1
- 1.2
! f'(a).
? The slope of the tangent to y = x^3 + x^2 at x = 1 is
- 7.5
- 2.5
- 6
+ 5
! f'(a).
? The slope of the tangent to y = 5x^2 at x = 4 is
- 20
+ 40
- 44
- 32
! f'(a).
? The slope of the tangent to y = x^2 + 1 at x = 5 is
+ 10
- 5
- 11
- 20
! f'(a).
? A function continuous at a point has LHL
- != RHL
- = 0
+ = RHL = f(a)
- = infinity
! Definition.
? d/dx (e^(2x)) equals
- e^(2x)
- 2x e^(2x)
- e^2
+ 2 e^(2x)
! Chain rule.
? d/dx (log x) equals
- log x
+ 1/x
- e^x
- x
! Standard.
? |x| is at x = 0
- neither
- differentiable
- not continuous
+ continuous but not differentiable
! Corner.
? d/dx (sin x cos x) equals
- sin 2x
- cos x
+ cos 2x
- -cos 2x
! Product rule.
? (uv)' equals
+ u'v + uv'
- uv
- u'v'
- u'v - uv'
! Product rule.
? What is the derivative of sin x?
- (dy/dt)/(dx/dt)
- e^x
+ cos x
- 1/(1 + x^2)
! Answer: cos x.
? What is the derivative of cos x?
- e^x
- 1/sqrt (1 - x^2)
+ -sin x
- sec^2 x
! Answer: -sin x.
? What is the derivative of tan x?
+ sec^2 x
- cos x
- -sin x
- e^x
! Answer: sec^2 x.
? What is the derivative of e^x?
- (dy/dt)/(dx/dt)
- sec^2 x
+ e^x
- 1/(1 + x^2)
! Answer: e^x.
? What is the derivative of log x?
- e^x
- 1/sqrt (1 - x^2)
+ 1/x
- 1/(1 + x^2)
! Answer: 1/x.
? State the product rule.
- f'(c) = (f(b) - f(a))/(b - a) for some c in (a, b)
+ (uv)' = u'v + uv'
- dy/dx = (dy/du)(du/dx)
- (u/v)' = (u'v - uv')/v^2
! Answer: (uv)' = u'v + uv'.
? State the quotient rule.
+ (u/v)' = (u'v - uv')/v^2
- (uv)' = u'v + uv'
- f'(c) = (f(b) - f(a))/(b - a) for some c in (a, b)
- dy/dx = (dy/du)(du/dx)
! Answer: (u/v)' = (u'v - uv')/v^2.
? State the chain rule.
+ dy/dx = (dy/du)(du/dx)
- (uv)' = u'v + uv'
- f'(c) = (f(b) - f(a))/(b - a) for some c in (a, b)
- (u/v)' = (u'v - uv')/v^2
! Answer: dy/dx = (dy/du)(du/dx).
? What is the derivative of sin^-1 x?
- sec^2 x
- 1/(1 + x^2)
+ 1/sqrt (1 - x^2)
- e^x
! Answer: 1/sqrt (1 - x^2).
? What is the derivative of tan^-1 x?
- -sin x
+ 1/(1 + x^2)
- 1/x
- 1/sqrt (1 - x^2)
! Answer: 1/(1 + x^2).
? What is dy/dx in parametric form?
- 1/(1 + x^2)
+ (dy/dt)/(dx/dt)
- cos x
- e^x
! Answer: (dy/dt)/(dx/dt).
? State the mean value theorem.
- dy/dx = (dy/du)(du/dx)
- (u/v)' = (u'v - uv')/v^2
+ f'(c) = (f(b) - f(a))/(b - a) for some c in (a, b)
- (uv)' = u'v + uv'
! Answer: f'(c) = (f(b) - f(a))/(b - a) for some c in (a, b).
? Find d/dx of x^2.
- 2cos x
- 3cos x
- 8x^7
+ 2x
! Answer: 2x.
? Find d/dx of x^3.
- 6e^x
- 5cos x
+ 3x^2
- 4x^3
! Answer: 3x^2.
? Find d/dx of x^4.
- 5e^x
+ 4x^3
- 7e^x
- 2e^x
! Answer: 4x^3.
? Find d/dx of x^5.
- 11x^10
+ 5x^4
- 7cos x
- 5cos x
! Answer: 5x^4.
? Find d/dx of x^6.
+ 6x^5
- 5e^x
- 4x^3
- 9x^8
! Answer: 6x^5.
? Find d/dx of x^7.
- 5x^4
+ 7x^6
- 3cos x
- 6e^x
! Answer: 7x^6.
? Find d/dx of x^8.
+ 8x^7
- 7x^6
- 2e^x
- 4e^x
! Answer: 8x^7.
? Find d/dx of x^9.
+ 9x^8
- 3x^2
- 4x^3
- 4cos x
! Answer: 9x^8.
? Find d/dx of x^10.
+ 10x^9
- 6e^x
- 5x^4
- 6cos x
! Answer: 10x^9.
? Find d/dx of x^11.
- 9x^8
- 8x^7
+ 11x^10
- 5cos x
! Answer: 11x^10.
? The slope of the tangent to y = cos(x) at x = 0 is
- 5
+ 0
- 23
- 12
! Answer: 0.
? The slope of the tangent to y = x^2 - 4x at x = 2 is
- 6
- 4
- 1
+ 0
! Answer: 0.
? The slope of the tangent to y = x^3 - 3x at x = 1 is
+ 0
- 6
- 5
- 4
! Answer: 0.
? Find the equation of the tangent to y = x^2 at x = 3.
+ y - 9 = 6 (x - 3)
- y - 6 = 5 (x - 2)
- y - 8 = 12 (x - 2)
- y - 1 = 3 (x - 1)
! Answer: y - 9 = 6 (x - 3).
? Find the equation of the tangent to y = x^3 at x = 2.
- y - 2 = 4 (x - 1)
- y - 9 = 6 (x - 3)
+ y - 8 = 12 (x - 2)
- y - 1 = 3 (x - 1)
! Answer: y - 8 = 12 (x - 2).
? Find the equation of the tangent to y = x^2 + 3x at x = 1.
- y - 8 = 12 (x - 2)
- y - 1 = 3 (x - 1)
- y - 2 = 4 (x - 1)
+ y - 4 = 5 (x - 1)
! Answer: y - 4 = 5 (x - 1).
? Find the equation of the tangent to y = x^2 + x at x = 2.
- y - 9 = 6 (x - 3)
+ y - 6 = 5 (x - 2)
- y - 8 = 12 (x - 2)
- y - 1 = 3 (x - 1)
! Answer: y - 6 = 5 (x - 2).
? Find the equation of the tangent to y = 2x^2 at x = 1.
+ y - 2 = 4 (x - 1)
- y - 9 = 6 (x - 3)
- y - 1 = 3 (x - 1)
- y - 4 = 5 (x - 1)
! Answer: y - 2 = 4 (x - 1).
? Find the equation of the tangent to y = x^3 at x = 1.
+ y - 1 = 3 (x - 1)
- y - 8 = 12 (x - 2)
- y - 2 = 4 (x - 1)
- y - 9 = 6 (x - 3)
! Answer: y - 1 = 3 (x - 1).
? For f(x) = kx + 2 (x < 3) and f(x) = 11 (x >= 3), find k for continuity at x = 3.
- k = 5
- k = 6
+ k = 3
- k = 2.5
! Answer: k = 3.
? For f(x) = kx + 1 (x < 4) and f(x) = 11 (x >= 4), find k for continuity at x = 4.
- k = 10
- k = 6
+ k = 2.5
- k = 3.4
! Answer: k = 2.5.
? For f(x) = kx + 3 (x < 1) and f(x) = 13 (x >= 1), find k for continuity at x = 1.
- k = 6
- k = 3
+ k = 10
- k = 5
! Answer: k = 10.
? For f(x) = kx + 2 (x < 5) and f(x) = 19 (x >= 5), find k for continuity at x = 5.
+ k = 3.4
- k = 2.5
- k = 3
- k = 10
! Answer: k = 3.4.
? For f(x) = kx + 4 (x < 2) and f(x) = 14 (x >= 2), find k for continuity at x = 2.
- k = 2.5
+ k = 5
- k = 6
- k = 3
! Answer: k = 5.
? For f(x) = kx + 5 (x < 3) and f(x) = 23 (x >= 3), find k for continuity at x = 3.
- k = 3.4
- k = 10
+ k = 6
- k = 5
! Answer: k = 6.
? Find d/dx of 2sin x.
- 4e^x
- 2x
+ 2cos x
- 5e^x
! Answer: 2cos x.
? Find d/dx of 2e^x.
- 7e^x
+ 2e^x
- 3x^2
- 4e^x
! Answer: 2e^x.
? Find d/dx of 3sin x.
+ 3cos x
- 5cos x
- 6x^5
- 5e^x
! Answer: 3cos x.
? Find d/dx of 3e^x.
- 2x
+ 3e^x
- 6cos x
- 6e^x
! Answer: 3e^x.
? Find d/dx of 4sin x.
- 8x^7
- 5cos x
- 6e^x
+ 4cos x
! Answer: 4cos x.
? Find d/dx of 4e^x.
+ 4e^x
- 2x
- 2cos x
- 4x^3
! Answer: 4e^x.
? Find d/dx of 5sin x.
- 11x^10
- 9x^8
- 6x^5
+ 5cos x
! Answer: 5cos x.
? Find d/dx of 5e^x.
- 7e^x
- 9x^8
- 8x^7
+ 5e^x
! Answer: 5e^x.
? Find d/dx of 6sin x.
- 6e^x
- 4x^3
+ 6cos x
- 11x^10
! Answer: 6cos x.
? Find d/dx of 6e^x.
- 4x^3
- 3x^2
+ 6e^x
- 3e^x
! Answer: 6e^x.
? Find d/dx of 7sin x.
- 10x^9
- 4x^3
- 2cos x
+ 7cos x
! Answer: 7cos x.
? Find d/dx of 7e^x.
- 9x^8
- 6cos x
- 4e^x
+ 7e^x
! Answer: 7e^x.
@visual
formula | Continuity and differentiability | key formula
@problems
P: Differentiate x^3 + 2x.
A: 3x^2 + 2.
R: 1 | Power rule on each term
R: 1 | 3x^2 + 2
