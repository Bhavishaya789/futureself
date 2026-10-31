# Laplace transforms and differential equations
minutes: 25
yt: laplace transform differential equations
@study
**Laplace transform:** F(s) = integral from 0 to infinity of f(t) e^(-st) dt. Standard pairs: L{1} = 1/s; L{t} = **1/s^2**; L{e^(at)} = **1/(s - a)**; L{sin at} = a/(s^2 + a^2); L{cos at} = s/(s^2 + a^2). Derivative: L{f'} = s F(s) - f(0). Used to turn ODEs into algebra.
**First-order ODE** y' + P y = Q solved with the integrating factor e^(integral P dx). **Second-order linear with constant coefficients** y'' + y = 0: characteristic equation m^2 + 1 = 0 gives m = +/- i and y = C1 cos x + C2 sin x.
Example: y' = y with y(0) = 1: L gives s Y - 1 = Y so Y = 1/(s - 1) and y = e^t.
## Hindi saransh
L{t} = 1/s^2, L{e^(at)} = 1/(s - a). y'' + y = 0 ka solution C1 cos x + C2 sin x.
> Laplace transforms change differentiation into multiplication by s.
@qa
Q: L{e^(2t)}?
A: 1/(s - 2).
Q: Solution of y'' + y = 0?
A: y = C1 cos x + C2 sin x.
Q: L{f'(t)}?
A: s F(s) - f(0).
Q: What is the integrating factor of y' + P y = Q?
A: e^(integral of P dx).
@quiz
? L{t} is
- 1/s
+ 1/s^2
- s
- 1/(s-1)
! Standard.
? L{e^(2t)} is
- 1/(s+2)
+ 1/(s-2)
- 2/s
- s/(s-2)
! Shift.
? General solution of y'' + y = 0 is
- C1 e^x + C2 e^-x
+ C1 cos x + C2 sin x
- C1 x + C2
- x^2
! Complex roots.
? L{f'} equals
- F(s)
+ s F(s) - f(0)
- F(s)/s
- f(0)
! Derivative rule.
@visual
formula | Laplace pairs | L{t} = 1/s^2 ; L{e^(at)} = 1/(s - a) ; L{sin at} = a/(s^2 + a^2)
@problems
## Moderate
P: Find L{e^(2t)}.
A: 1/(s - 2).
R: 1 | Rule
R: 1 | Result
## High
P: Solve y' = y with y(0) = 1 by Laplace transform.
A: sY - 1 = Y so Y = 1/(s - 1), y = e^t.
R: 2 | Transform
R: 1 | Inverse
## Advanced
P: Solve y'' + y = 0 with y(0) = 1 and y'(0) = 0.
A: y = C1 cos x + C2 sin x; y(0) = 1 gives C1 = 1; y'(0) = C2 = 0, so y = cos x.
R: 2 | General solution
R: 2 | Constants
