from ex import *
X='JEE Advanced'
def c(p,t,intro,formulas,nums,facts,**k): put('JEE-Advanced/'+p+'.md',t,X,intro,formulas,nums,facts,**k)
g=9.8
c('Physics/Unit-3-Advanced-Extras/01-Thermal-Radiation','Thermal Radiation and Newton Cooling','Stefan law, Wien displacement and Newton law of cooling are tested at Advanced level beyond Main.',
'P = σAeT^4 | Stefan, σ = 5.67×10^-8\nλmax T = 2.9×10^-3 m K | Wien\ndT/dt = -k(T - T0) | Newton cooling\nT = T0 + (Ti - T0)e^(-kt)',
[N('P = σ A T^4 (A in m2, black body)','P','W','A:m2:0.1:1,T:K:300:1000:i',lambda A,T:5.67e-8*A*T**4,1),N('λmax = 2.9e-3/T, answer in μm','λmax','μm','T:K:1000:6000:i',lambda T:2.9e-3/T*1e6,3),N('T = T0 + (Ti - T0)e^(-kt)','T','°C','T0:°C:20:30:i,Ti:°C:70:100:i,k:1/min:0.05:0.3,t:min:2:15:i',lambda T0,Ti,k,t:T0+(Ti-T0)*math.exp(-k*t),2),N('Power ratio when T doubles','ratio','','n:factor:2:4:i',lambda n:n**4,0)],
'''#rad
Perfect black body ~ absorbs all incident radiation and has emissivity one
Kirchhoff's law ~ says good absorbers are good emitters
Wien's law ~ shows peak wavelength shifts to shorter values at higher temperature
Newton's law of cooling ~ holds for small temperature differences
Stefan-Boltzmann law ~ makes radiated power proportional to the fourth power of temperature
Net radiation loss ~ is σAe(T^4 - T0^4)''')
c('Physics/Unit-3-Advanced-Extras/02-Rolling-and-Rigid-Body','Rolling Motion and Rigid Body Dynamics','Rolling with and without slipping, angular impulse and energy on inclines.',
'a = g sinθ/(1 + I/mR²) | rolling on incline\nv = √(2gh/(1 + I/mR²))\nFriction f = (I/mR²) m a /(1 + I/mR²) ... ',
[N('a for solid cylinder (k = 1/2): a = g sinθ/(1.5)','a','m/s2','t:deg:20:50:i',lambda t:g*math.sin(math.radians(t))/1.5,3),N('v at bottom for solid sphere (k = 2/5): v = √(2gh/1.4)','v','m/s','h:m:0.5:5',lambda h:math.sqrt(2*g*h/1.4),3),N('KE fraction rotational for ring = 1/2 of total; total KE = mv²','KErot','J','m:kg:1:10,v:m/s:2:10',lambda m,v:m*v*v/2,2),N('Angular momentum about a point on ground L = mvR + Iω for solid disc: 1.5 mvR','L','kg m2/s','m:kg:1:5,v:m/s:2:10,R:m:0.2:1',lambda m,v,R:1.5*m*v*R,3)],
'''#roll
Pure rolling ~ means the contact point is instantaneously at rest
Static friction in pure rolling ~ does no work
Ring ~ reaches the bottom of an incline later than a disc
A solid sphere ~ beats a hollow sphere down a rough incline
Instantaneous axis of rotation ~ passes through the contact point
Kinetic energy in rolling ~ equals translational plus rotational parts''')
c('Physics/Unit-3-Advanced-Extras/03-Charged-Particles-and-RC','Charged Particles in Fields and RC Circuits','Motion in combined fields, cyclotron radius and transient charging of capacitors.',
'q(t) = Q(1 - e^(-t/RC)) | charging\nτ = RC | time constant\nr = mv/qB | circular\nT = 2πm/qB | period, independent of v',
[N('q(t)/Q = 1 - e^(-t/τ)','fraction','','n:t/tau:1:5:i',lambda n:1-math.exp(-n),4),N('τ = RC (R in kΩ, C in μF) in ms','τ','ms','R:kΩ:1:100:i,C:uF:1:100:i',lambda R,C:R*C,0),N('T = 2πm/qB for proton, B in T, answer in ns','T','ns','B:T:0.5:3',lambda B:2*math.pi*1.67e-27/(1.6e-19*B)*1e9,2),N('Energy gained by proton in cyclotron KE = q²B²r²/2m, r in m, B in T, in MeV','KE','MeV','B:T:0.5:2,r:m:0.2:1',lambda B,r:(1.6e-19*B*r)**2/(2*1.67e-27)/1.6e-13,3)],
'''#particle
Magnetic force ~ never changes the speed of a charged particle
Helical path ~ results when velocity has a component along B
Time period in a cyclotron ~ does not depend on the speed
RC time constant ~ is the time to reach 63 percent of final charge
Capacitor in a DC steady state ~ behaves as an open circuit
Inductor in a DC steady state ~ behaves as a short circuit''')
c('Physics/Unit-3-Advanced-Extras/04-Interference-and-Photon','Thin Films, Photon Momentum and X-rays','Thin film interference, photon momentum and the Moseley law.',
'2nt cosr = (m + 1/2)λ | reflection maxima\np = h/λ | photon momentum\nλmin = 12400/V Å | X-ray cut-off\n√ν = a(Z - b) | Moseley',
[N('λmin = 12400/V (V in volts, Å)','λmin','Å','V:kV:10:60:i',lambda V:12400/(V*1000),4),N('p = h/λ in 1e-27 kg m/s for λ in nm','p','1e-27 kg m/s','lam:nm:200:700:i',lambda l:6.63e-34/(l*1e-9)*1e27,3),N('Film thickness for first minimum in reflection: t = λ/(2n)','t','nm','lam:nm:450:650:i,n:index:1.2:1.6',lambda l,n:l/(2*n),1),N('Radiation pressure for perfectly absorbing surface I/c, I in W/m2, result in nPa','P','nPa','I:W/m2:100:1000:i',lambda I:I/3e8*1e9,2)],
'''#xray
Characteristic X-rays ~ depend on the target element
Continuous X-ray spectrum ~ has a sharp short wavelength cut-off
Moseley's law ~ relates X-ray frequency to atomic number
Photon ~ has momentum but no rest mass
Reflection from a denser medium ~ introduces a phase change of π
Radiation pressure ~ is doubled for a perfect reflector''')
c('Chemistry/Unit-3-Advanced-Extras/01-Physical-Advanced','Advanced Physical Chemistry','Integrated rate law applications, Nernst equation, Kohlrausch law and solid state calculations.',
'E = E° - 0.059/n log Q | Nernst\nΛm = Λ°m - a√C | Kohlrausch\nd = ZM/(a³ NA) | density of unit cell\nk = (2.303/t) log(a/(a-x))',
[N('Nernst: E = E° - (0.059/n) log Q','E','V','E0:V:0.3:1.2,n:e:1:4:i,logQ:logQ:-2:3:i',lambda e,n,l:e-0.059/n*l,4),N('Density d = ZM/(a³NA), a in pm, M in g/mol, Z=4','d','g/cm3','M:g/mol:30:200:i,a:pm:350:600:i',lambda M,a:4*M/((a*1e-10)**3*6.022e23),3),N('First order k = (2.303/t) log(a/(a - x)), percent complete x','k','1/min','t:min:5:60:i,x:%:20:90:i',lambda t,x:2.303/t*math.log10(100/(100-x)),4),N('Effective atoms per FCC cell = 4','atoms','','n:cells:1:20:i',lambda n:4*n,0)],
'''#phadv
Packing efficiency of FCC ~ is 74 percent
Packing efficiency of BCC ~ is 68 percent
Kohlrausch law ~ gives limiting molar conductivity as sum of ion contributions
Coordination number of FCC ~ is 12
Schottky defect ~ lowers the density
Frenkel defect ~ does not change the density''')
c('Chemistry/Unit-3-Advanced-Extras/02-Qualitative-Analysis','Qualitative Inorganic Analysis','Group reagents, flame tests and characteristic precipitates.','',
(),
'''#qual
Group I cations ~ are precipitated as chlorides with dilute HCl
Group II cations ~ are precipitated as sulphides in acidic medium
Group III cations ~ are precipitated as hydroxides with NH4OH
Group IV cations ~ are precipitated as sulphides in basic medium
Group V cations ~ are precipitated as carbonates
Lead chloride ~ dissolves in hot water
Copper ~ gives a blue-green flame
Sodium ~ gives a golden yellow flame
Potassium ~ gives a lilac flame through cobalt glass
Barium ~ gives an apple green flame
Brown ring test ~ detects nitrate
Chromyl chloride test ~ detects chloride
Lime water turning milky ~ indicates carbon dioxide
Nessler's reagent ~ detects ammonium ions
Prussian blue ~ forms with Fe(III) and ferrocyanide
Sulphide ion ~ gives violet colour with sodium nitroprusside
Sulphate ~ gives a white precipitate with barium chloride insoluble in acids
Acetate ~ gives a fruity smell with ethanol and sulphuric acid''')
c('Chemistry/Unit-4-Advanced-Organic/01-Named-Reactions-and-Mechanisms','Named Reactions and Reaction Mechanisms','Rearrangements, pericyclic basics and stereochemistry used in Advanced.','',
[N('Number of stereoisomers with n chiral centres = 2^n','isomers','','n:chiral centres:1:6:i',lambda n:2**n,0),N('Optical rotation [α] = α/(l·c), l in dm','[α]','','a:deg:2:40:i,l:dm:1:2:i,c:g/mL:0.1:1',lambda a,l,c_:a/(l*c_),2)],
'''#namedrxn
Beckmann rearrangement ~ converts oximes to amides
Hofmann bromamide reaction ~ converts amides to amines with one carbon less
Claisen condensation ~ joins two esters to a beta-keto ester
Perkin reaction ~ gives cinnamic acid
Reimer-Tiemann reaction ~ introduces a CHO group ortho to phenol
Kolbe-Schmitt reaction ~ gives salicylic acid
Pinacol-pinacolone rearrangement ~ involves a carbocation shift
Wolff-Kishner reduction ~ reduces carbonyls in basic medium
Clemmensen reduction ~ reduces carbonyls in acidic medium
Rosenmund reduction ~ converts acid chlorides to aldehydes
Stephen reaction ~ converts nitriles to aldehydes
Sandmeyer reaction ~ replaces diazonium by Cl, Br or CN using copper salts
Gattermann-Koch reaction ~ formylates benzene
Hell-Volhard-Zelinsky reaction ~ brominates the alpha carbon of acids
Meso compound ~ has chiral centres but is optically inactive
Enantiomers ~ rotate plane polarised light in opposite directions
Diastereomers ~ have different physical properties
Walden inversion ~ occurs in SN2''')
c('Mathematics/Unit-3-Advanced-Extras/01-Algebra-Advanced','Advanced Algebra, Inequalities and Series','Inequalities, summations, binomial identities and polynomial equations.',
'AM ≥ GM | for positives\nVieta: sum of roots = -b/a\nΣ r² = n(n+1)(2n+1)/6\nΣ r³ = [n(n+1)/2]²',
[N('Σ r² = n(n+1)(2n+1)/6','S','','n:n:5:30:i',lambda n:n*(n+1)*(2*n+1)/6,0),N('Σ r³ = [n(n+1)/2]²','S','','n:n:4:20:i',lambda n:(n*(n+1)/2)**2,0),N('Sum of squares of roots = (b² - 2ac)/a² for ax²+bx+c','Σα²','','a:a:1:4:i,b:b:-9:9:i,c:c:-9:9:i',lambda a,b,c_:(b*b-2*a*c_)/(a*a),3),N('Minimum of ax + b/x for x>0 is 2√(ab)','min','','a:a:1:9:i,b:b:1:9:i',lambda a,b:2*math.sqrt(a*b),3)],
'''#algadv
Arithmetic mean ~ is at least geometric mean for positive numbers
Cauchy-Schwarz inequality ~ bounds a dot product
Cube roots of unity ~ satisfy 1 + ω + ω² = 0
Vieta's formulas ~ relate roots to coefficients
A polynomial of degree n ~ has exactly n complex roots
Complex roots of real polynomials ~ come in conjugate pairs''')
c('Mathematics/Unit-3-Advanced-Extras/02-Calculus-Advanced','Advanced Calculus: Definite Integrals and Differential Equations','Properties of definite integrals, Leibniz rule, area and variable separable equations.',
'∫0^a f(x)dx = ∫0^a f(a-x)dx\n∫ from -a to a of odd f = 0\n∫0^(π/2) sin^n x dx (Wallis)\nd/dx ∫ g(x) f(t)dt = f(g)g\'',
[N('Wallis ∫0^(π/2) sin^n x dx for even n = (n-1)!!/n!! π/2','I','','n:n:2:8:i',lambda n:(math.prod(range(n-1,0,-2))/math.prod(range(n,0,-2)))*math.pi/2,4),N('Area between y = x² and y = kx is k³/6','A','','k:k:1:9:i',lambda k:k**3/6,3),N('∫0^b x e^x dx = (b-1)e^b + 1','I','','b:b:1:3:i',lambda b:(b-1)*math.exp(b)+1,3),N('Solution of dy/dx = ky is y = y0 e^(kt)','y','','y0:y0:1:9:i,k:k:0.1:0.9,t:t:1:5:i',lambda y,k,t:y*math.exp(k*t),3)],
'''#caladv
King's property ~ replaces x by a - x in a definite integral over 0 to a
Even function ~ doubles the integral over a symmetric interval
Leibniz rule ~ differentiates an integral with variable limits
Homogeneous differential equation ~ is solved by the substitution y = vx
Linear differential equation ~ is solved by an integrating factor
Orthogonal trajectories ~ replace dy/dx by minus dx/dy''')
c('Mathematics/Unit-3-Advanced-Extras/03-Geometry-Advanced','Advanced Coordinate and Vector Geometry','Parametric conics, vector triple product, shortest distance between skew lines.',
'a×(b×c) = b(a·c) - c(a·b)\nShortest distance = |(a2-a1)·(b1×b2)|/|b1×b2|\nParametric ellipse (a cosθ, b sinθ)\nTangent to parabola y = mx + a/m',
[N('Scalar triple product |a·(b×c)| of (1,0,0),(a,b,0),(0,0,c) = b c','V','','b:b:1:9:i,c:c:1:9:i',lambda b,c_:b*c_,0),N('Area of triangle = ½|a×b| for a=(p,0), b=(q,r) : ½ p r','A','','p:p:2:12:i,r:r:2:12:i',lambda p,r:p*r/2,1),N('Tangent to y²=4ax with slope m touches at (a/m², 2a/m); find y','y','','a:a:1:5:i,m:m:1:4:i',lambda a,m:2*a/m,3),N('Length of focal chord of y²=4ax with parameter t is a(t + 1/t)²','L','','a:a:1:5:i,t:t:1:4:i',lambda a,t:a*(t+1/t)**2,3)],
'''#geoadv
Scalar triple product ~ gives the volume of a parallelepiped
Coplanar vectors ~ have zero scalar triple product
Skew lines ~ are neither parallel nor intersecting
Auxiliary circle of an ellipse ~ has the major axis as diameter
Director circle of an ellipse ~ is x² + y² = a² + b²
Pole and polar ~ generalise the tangent to a conic''')
