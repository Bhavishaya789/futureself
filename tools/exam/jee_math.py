from ex import *
X='JEE Main'
def c(p,t,intro,formulas,nums,facts,**k): put('JEE-Main/Mathematics/'+p+'.md',t,X,intro,formulas,nums,facts,**k)
fa=math.factorial
def nCr(n,r): return fa(n)//(fa(r)*fa(n-r))
c('Unit-3-Algebra/01-Sets-Relations-Functions','Sets, Relations and Functions','Set operations, relations and the types of functions.',
'n(A∪B) = n(A) + n(B) - n(A∩B) | union\nn(P(A)) = 2^n | power set\nNumber of functions A→B = n(B)^n(A)\nNumber of relations = 2^(n(A)n(B))',
[N('n(A∪B) = n(A) + n(B) - n(A∩B)','n(A∪B)','','a:n(A):10:40:i,b:n(B):10:40:i,x:n(A∩B):1:9:i',lambda a,b,x:a+b-x,0),N('Number of subsets = 2^n','subsets','','n:n(A):2:10:i',lambda n:2**n,0),N('Number of functions = n(B)^n(A)','functions','','a:n(A):2:5:i,b:n(B):2:5:i',lambda a,b:b**a,0),N('Number of bijections = n!','bijections','','n:n(A):3:7:i',lambda n:fa(n),0)],
'''#sets
Empty set ~ is a subset of every set
A relation that is reflexive, symmetric and transitive ~ is an equivalence relation
A function ~ is invertible if and only if it is one-one and onto
Domain ~ is the set of all permitted inputs
De Morgan's laws ~ say the complement of a union is the intersection of complements
Composition of functions ~ is associative but not commutative''')
c('Unit-3-Algebra/02-Complex-Numbers','Complex Numbers','Modulus, argument, Euler form and roots of unity.',
'|z| = √(a² + b²) | modulus\nz·z̄ = |z|² \ni² = -1; i⁴ = 1\nnth roots of unity sum to 0\n|z1z2| = |z1||z2|',
[N('|z| = √(a² + b²)','|z|','','a:real:1:12:i,b:imag:1:12:i',lambda a,b:math.sqrt(a*a+b*b),3),N('Argument θ = atan(b/a) in degrees','θ','deg','a:real:1:9:i,b:imag:1:9:i',lambda a,b:math.degrees(math.atan2(b,a)),2),N('i^n: value of imaginary part pattern; n mod 4','n mod 4','','n:power:5:99:i',lambda n:n%4,0),N('Number of distinct nth roots of unity = n','roots','','n:n:3:12:i',lambda n:n,0)],
'''#cx
Cube roots of unity ~ are 1, ω and ω² with 1 + ω + ω² = 0
Conjugate of a product ~ equals the product of conjugates
Triangle inequality ~ gives |z1 + z2| ≤ |z1| + |z2|
De Moivre's theorem ~ gives (cosθ + i sinθ)^n = cos nθ + i sin nθ
Roots of a real quadratic with negative discriminant ~ are conjugate pairs
Rotation by θ ~ is multiplication by e^(iθ)''')
c('Unit-3-Algebra/03-Quadratics-Sequences','Quadratic Equations and Sequences','Roots, discriminant, AP, GP and special sums.',
'D = b² - 4ac | discriminant\nSum of roots = -b/a; product = c/a\nAP: Sn = n/2 [2a + (n-1)d]\nGP: Sn = a(r^n - 1)/(r - 1)\nS∞ = a/(1-r), |r|<1',
[N('D = b² - 4ac','D','','a:a:1:5:i,b:b:-12:12:i,c:c:-6:6:i',lambda a,b,c_:b*b-4*a*c_,0),N('AP: Sn = n/2 (2a + (n-1)d)','Sn','','a:a:1:10:i,d:d:1:6:i,n:n:5:30:i',lambda a,d,n:n*(2*a+(n-1)*d)/2,0),N('GP: Sn = a(r^n - 1)/(r - 1)','Sn','','a:a:1:5:i,r:r:2:3:i,n:n:3:8:i',lambda a,r,n:a*(r**n-1)/(r-1),0),N('S∞ = a/(1 - r)','S∞','','a:a:1:20:i,r:r:0.1:0.8',lambda a,r:a/(1-r),3),N('Sum of first n natural numbers','S','','n:n:10:100:i',lambda n:n*(n+1)/2,0)],
'''#quad
Roots are real and distinct ~ when D is positive
Roots are equal ~ when D equals zero
AM ≥ GM ≥ HM ~ holds for positive numbers
The nth term of an AP ~ is a + (n - 1)d
Arithmetic mean of two numbers ~ is half their sum
For a quadratic with a positive ~ the minimum value occurs at x = -b/2a''')
c('Unit-3-Algebra/04-Permutation-Combination-Binomial','Permutations, Combinations and Binomial Theorem','Counting principles, arrangements, selections and binomial expansion.',
'nPr = n!/(n-r)! | arrangements\nnCr = n!/(r!(n-r)!) | selections\nGeneral term T(r+1) = nCr x^(n-r) a^r\nSum of coefficients = 2^n',
[N('nPr = n!/(n-r)!','nPr','','n:n:5:10:i,r:r:2:4:i',lambda n,r:fa(n)//fa(n-r),0),N('nCr','nCr','','n:n:6:14:i,r:r:2:5:i',lambda n,r:nCr(n,r),0),N('Arrangements of n distinct objects in a circle = (n-1)!','ways','','n:n:4:9:i',lambda n:fa(n-1),0),N('Sum of binomial coefficients = 2^n','sum','','n:n:3:12:i',lambda n:2**n,0),N('Number of terms in (a+b)^n = n + 1','terms','','n:n:5:40:i',lambda n:n+1,0)],
'''#pc
Fundamental principle of counting ~ multiplies independent choices
nCr ~ equals nC(n-r)
Pascal's rule ~ says nCr + nC(r-1) = (n+1)Cr
Number of diagonals of an n-gon ~ equals n(n-3)/2
Middle term ~ of (a + b)^n with even n is the (n/2 + 1)th term
Derangements ~ have no element in its original position''')
c('Unit-3-Algebra/05-Matrices-Determinants','Matrices and Determinants','Matrix operations, determinant properties, inverse and linear systems.',
'|AB| = |A||B| \n|kA| = k^n |A| \nA⁻¹ = adj A/|A| \n|adj A| = |A|^(n-1)',
[N('det of 2×2: ad - bc','det','','a:a:-6:9:i,b:b:-6:9:i,c:c:-6:9:i,d:d:-6:9:i',lambda a,b,c_,d:a*d-b*c_,0),N('|kA| = k^n|A| for 3×3','|kA|','','k:k:2:4:i,d:|A|:2:9:i',lambda k,d:k**3*d,0),N('|adj A| = |A|^(n-1) for 3×3','|adj A|','','d:|A|:2:6:i',lambda d:d**2,0),N('Trace of A = a11 + a22 + a33','tr','','a:a11:1:9:i,b:a22:1:9:i,c:a33:1:9:i',lambda a,b,c_:a+b+c_,0)],
'''#mat
Matrix multiplication ~ is generally not commutative
A matrix is invertible ~ if its determinant is non-zero
Determinant ~ changes sign when two rows are exchanged
Determinant of a triangular matrix ~ is the product of diagonal entries
A skew-symmetric matrix of odd order ~ has determinant zero
System AX = B ~ has a unique solution when |A| is non-zero''')
c('Unit-4-Calculus/01-Limits-Continuity-Derivatives','Limits, Continuity and Differentiation','Standard limits, differentiability, chain rule and derivatives of standard functions.',
'd/dx x^n = n x^(n-1)\nd/dx sin x = cos x\nd/dx e^x = e^x; d/dx ln x = 1/x\nlim sin x/x = 1\nChain rule',
[N('d/dx of a·x^n at x = t: a n t^(n-1)','f\'(t)','','a:a:1:6:i,n:n:2:5:i,t:t:1:4:i',lambda a,n,t:a*n*t**(n-1),0),N('Slope of y = ax² + bx at x = t: 2at + b','slope','','a:a:1:5:i,b:b:-6:6:i,t:t:1:5:i',lambda a,b,t:2*a*t+b,0),N('d/dx (sin ax) at x = 0 equals a; evaluate a cos(at) at t (deg)','f\'','','a:a:1:5:i,t:deg:0:60:i',lambda a,t:a*math.cos(math.radians(t)),3)],
'''#lim
A function differentiable at a point ~ is continuous there
lim (1 + 1/x)^x as x tends to infinity ~ equals e
L'Hospital's rule ~ applies to 0/0 and ∞/∞ forms
Product rule ~ says (uv)' = u'v + uv'
Derivative of tan x ~ is sec² x
|x| ~ is continuous but not differentiable at 0''')
c('Unit-4-Calculus/02-Applications-of-Derivatives','Applications of Derivatives','Tangents, maxima and minima, monotonicity and Rolle and Lagrange theorems.',
'Tangent slope = f\'(x)\nMax/min: f\' = 0, check f\'\'\nLagrange: f\'(c) = [f(b) - f(a)]/(b - a)',
[N('Minimum of ax² + bx + c at x = -b/2a, value c - b²/4a','min','','a:a:1:5:i,b:b:-10:10:i,c:c:0:20:i',lambda a,b,c_:c_-b*b/(4*a),3),N('Rate of change of area A = πr² w.r.t. r at r: 2πr','dA/dr','','r:r:1:10:i',lambda r:2*math.pi*r,3),N('Maximum rectangle area with perimeter P = P²/16','A','','P:perimeter:8:80:i',lambda P:P*P/16,2)],
'''#appl
A critical point ~ is where the derivative is zero or does not exist
f'' positive at a critical point ~ gives a local minimum
Increasing function ~ has non-negative derivative
Rolle's theorem ~ needs f(a) = f(b)
Normal ~ is perpendicular to the tangent
Absolute extrema on a closed interval ~ occur at critical points or end points''')
c('Unit-4-Calculus/03-Integration-and-Differential-Equations','Integration, Areas and Differential Equations','Standard integrals, definite integrals, area under curves and first order differential equations.',
'∫ x^n dx = x^(n+1)/(n+1)\n∫ dx/x = ln|x|\n∫ e^x dx = e^x\nArea = ∫ y dx\nDefinite integral limits',
[N('∫ from 0 to b of a x^n dx = a b^(n+1)/(n+1)','I','','a:a:1:6:i,n:n:1:4:i,b:b:1:4:i',lambda a,n,b:a*b**(n+1)/(n+1),3),N('Area under y = k from 0 to b = kb','A','','k:k:2:9:i,b:b:2:9:i',lambda k,b:k*b,0),N('Area between y = x and y = x² from 0 to 1 equals 1/6; scaled by k','A','','k:k:1:12:i',lambda k:k/6,3),N('∫ from 0 to π/2 of sin x dx = 1; scaled by k','I','','k:k:1:12:i',lambda k:k,0)],
'''#integ
Integration ~ is the reverse of differentiation
Definite integral ~ gives a number, indefinite integral a family of functions
Integral of an odd function over a symmetric interval ~ is zero
Order of a differential equation ~ is the highest order derivative present
Degree of a differential equation ~ is the power of the highest order derivative
Integrating factor of dy/dx + Py = Q ~ is e^(∫P dx)''')
c('Unit-5-Coordinate/01-Straight-Lines-and-Circles','Straight Lines and Circles','Distance, section formula, slope, line forms, circle equations and tangents.',
'd = √((x2-x1)² + (y2-y1)²)\nm = (y2-y1)/(x2-x1)\nDistance from point to line = |ax1+by1+c|/√(a²+b²)\nCircle: (x-h)² + (y-k)² = r²',
[N('Distance between two points','d','','x1:x1:0:6:i,y1:y1:0:6:i,x2:x2:7:12:i,y2:y2:7:12:i',lambda a,b,c_,d:math.hypot(c_-a,d-b),3),N('Slope between two points','m','','x1:x1:0:5:i,y1:y1:0:5:i,x2:x2:6:12:i,y2:y2:6:12:i',lambda a,b,c_,d:(d-b)/(c_-a),3),N('Distance of (x1,y1) from ax + by + c = 0','d','','a:a:1:5:i,b:b:1:5:i,c:c:-9:9:i,x:x1:1:6:i,y:y1:1:6:i',lambda a,b,c_,x,y:abs(a*x+b*y+c_)/math.hypot(a,b),3),N('Area of circle of radius r','A','','r:r:2:12:i',lambda r:math.pi*r*r,2)],
'''#line
Slopes of perpendicular lines ~ have product -1
Parallel lines ~ have equal slopes
Radical axis of two circles ~ is a straight line
A tangent to a circle ~ is perpendicular to the radius at the point of contact
Condition for y = mx + c to touch x² + y² = a² ~ is c² = a²(1 + m²)
Centroid ~ divides each median in the ratio 2:1''')
c('Unit-5-Coordinate/02-Conic-Sections','Parabola, Ellipse and Hyperbola','Standard equations, eccentricity, foci and directrices.',
'Parabola y² = 4ax: focus (a,0)\nEllipse x²/a² + y²/b² = 1: e = √(1 - b²/a²)\nHyperbola e = √(1 + b²/a²)\nLatus rectum',
[N('Ellipse eccentricity e = √(1 - b²/a²)','e','','a:a:5:13:i,b:b:2:4:i',lambda a,b:math.sqrt(1-b*b/(a*a)),3),N('Hyperbola eccentricity e = √(1 + b²/a²)','e','','a:a:2:6:i,b:b:2:6:i',lambda a,b:math.sqrt(1+b*b/(a*a)),3),N('Length of latus rectum of y² = 4ax is 4a','LR','','a:a:1:9:i',lambda a:4*a,0),N('Area of ellipse πab','A','','a:a:2:9:i,b:b:2:9:i',lambda a,b:math.pi*a*b,2)],
'''#conic
Eccentricity of a parabola ~ is 1
Eccentricity of an ellipse ~ is less than 1
Eccentricity of a hyperbola ~ is greater than 1
Sum of focal distances in an ellipse ~ equals 2a
Rectangular hyperbola ~ has eccentricity √2
Focal chord through the focus of a parabola ~ has length greater than or equal to 4a''')
c('Unit-6-Vectors-3D-Trig/01-Vectors-and-3D','Vectors and Three Dimensional Geometry','Dot and cross product, direction cosines, lines and planes.',
'a·b = |a||b| cosθ\n|a×b| = |a||b| sinθ\nDistance from point to plane = |ax1+by1+cz1+d|/√(a²+b²+c²)\nl² + m² + n² = 1',
[N('Dot product a·b','a·b','','a1:a1:-5:5:i,a2:a2:-5:5:i,a3:a3:-5:5:i,b1:b1:-5:5:i,b2:b2:-5:5:i,b3:b3:-5:5:i',lambda a,b,c_,d,e,f:a*d+b*e+c_*f,0),N('Magnitude of vector (a,b,c)','|v|','','a:a:1:9:i,b:b:1:9:i,c:c:1:9:i',lambda a,b,c_:math.sqrt(a*a+b*b+c_*c_),3),N('Distance from origin to plane ax + by + cz = d','dist','','a:a:1:5:i,b:b:1:5:i,c:c:1:5:i,d:d:3:15:i',lambda a,b,c_,d:d/math.sqrt(a*a+b*b+c_*c_),3),N('Angle between vectors (deg): cosθ = a·b/|a||b| with a=(1,0), b=(1,k)','θ','deg','k:k:1:9:i',lambda k:math.degrees(math.acos(1/math.sqrt(1+k*k))),2)],
'''#vec
Dot product ~ is a scalar and commutative
Cross product ~ is a vector and anti-commutative
Scalar triple product ~ gives volume of a parallelepiped
Two vectors are perpendicular ~ when their dot product is zero
Two vectors are parallel ~ when their cross product is zero
Direction ratios ~ are proportional to direction cosines''')
c('Unit-6-Vectors-3D-Trig/02-Trigonometry','Trigonometry and Inverse Functions','Identities, equations, heights and distances, and inverse trigonometric functions.',
'sin²θ + cos²θ = 1\nsin 2θ = 2 sinθ cosθ\ncos 2θ = 1 - 2sin²θ\nsin⁻¹x + cos⁻¹x = π/2',
[N('sin θ (θ in degrees)','sinθ','','t:deg:10:80:i',lambda t:math.sin(math.radians(t)),4),N('cos 2θ = 1 - 2 sin²θ for θ','cos2θ','','t:deg:10:40:i',lambda t:1-2*math.sin(math.radians(t))**2,4),N('Height = d tanθ','h','m','d:m:10:80:i,t:deg:20:60:i',lambda d,t:d*math.tan(math.radians(t)),2),N('tan(A+B)','tan','','a:deg:10:40:i,b:deg:10:40:i',lambda a,b:math.tan(math.radians(a+b)),3)],
'''#trig
Range of sin x ~ is minus one to one
Period of tan x ~ is π
Principal value range of sin⁻¹ ~ is -π/2 to π/2
Sine rule ~ states a/sinA = b/sinB = c/sinC = 2R
Cosine rule ~ states c² = a² + b² - 2ab cosC
Angle of elevation ~ is measured above the horizontal''')
c('Unit-7-Probability-Stats/01-Probability','Probability','Conditional probability, Bayes theorem, binomial and random variables.',
'P(A∪B) = P(A) + P(B) - P(A∩B)\nP(A|B) = P(A∩B)/P(B)\nBinomial: nCr p^r q^(n-r)\nMean = np; variance = npq',
[N('P(A∪B) = P(A) + P(B) - P(A∩B)','P','','a:P(A):0.3:0.7,b:P(B):0.3:0.6,x:P(A∩B):0.1:0.25',lambda a,b,x:a+b-x,3),N('Binomial P(X = r)','P','','n:n:4:10:i,r:r:1:3:i,p:p:0.2:0.6',lambda n,r,p:nCr(n,r)*p**r*(1-p)**(n-r),4),N('Mean of binomial np','mean','','n:n:5:50:i,p:p:0.1:0.9',lambda n,p:n*p,2),N('Variance npq','var','','n:n:5:50:i,p:p:0.1:0.9',lambda n,p:n*p*(1-p),3),N('P(A|B) = P(A∩B)/P(B)','P','','x:P(A∩B):0.1:0.25,b:P(B):0.3:0.7',lambda x,b:x/b,3)],
'''#prob
Mutually exclusive events ~ cannot occur together
Independent events ~ satisfy P(A∩B) = P(A)P(B)
Bayes' theorem ~ reverses conditional probability
Probability of an event ~ lies between 0 and 1
Total probability theorem ~ sums over a partition of the sample space
Sum of probabilities in a distribution ~ equals one''')
c('Unit-7-Probability-Stats/02-Statistics','Statistics','Mean, median, mode, variance and standard deviation.',
'Mean = Σx/n\nVariance = Σ(x - mean)²/n\nSD = √variance\nCoefficient of variation = SD/mean × 100',
[N('Mean of n values','mean','','s:sum:50:500:i,n:n:5:20:i',lambda s,n:s/n,2),N('SD = √variance','SD','','v:variance:4:100:i',lambda v:math.sqrt(v),3),N('Coefficient of variation','CV','%','sd:SD:2:10,m:mean:20:60:i',lambda sd,m:sd/m*100,2),N('Mean of first n natural numbers = (n+1)/2','mean','','n:n:5:99:i',lambda n:(n+1)/2,1)],
'''#stat
Adding a constant to all observations ~ changes the mean but not the standard deviation
Multiplying all observations by k ~ multiplies the standard deviation by |k|
Median ~ is not affected by extreme values
Mode ~ is the most frequent value
Mean deviation ~ can be taken about the mean or median
Variance ~ is the square of standard deviation''')
