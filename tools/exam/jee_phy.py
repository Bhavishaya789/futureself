from ex import *
P='JEE-Main/Physics/'; X='JEE Main'
def c(u,f,t,intro,formulas,nums,facts,**k): put(P+u+'/'+f+'.md',t,X,intro,formulas,nums,facts,**k)
g=9.8
c('Unit-3-Mechanics','02-Laws-of-Motion','Laws of Motion','Newton\'s three laws connect force, mass and acceleration. Friction, pulleys, inclines and circular motion are built on F = ma.',
'F = ma | net force | Newton II\nf = μN | friction | limiting friction\na = g sinθ - μ g cosθ | block on incline | sliding down\nF = mv^2/r | centripetal force | circular motion\nJ = FΔt = Δp | impulse | momentum change',
[N('F = ma','F','N','m:kg:2:20,a:m/s2:1:9',lambda m,a:m*a,1),N('f = μN (N = mg)','f','N','mu:-:0.1:0.9,m:kg:2:20',lambda mu,m:mu*m*g,1),
 N('a = g sinθ for a smooth incline','a','m/s2','theta:deg:20:60:i',lambda t:g*math.sin(math.radians(t)),2),N('F = mv^2/r','F','N','m:kg:1:10,v:m/s:2:20,r:m:2:20',lambda m,v,r:m*v*v/r,1),N('J = Δp = m(v - u)','J','N s','m:kg:1:10,u:m/s:0:10,v:m/s:11:30',lambda m,u,v:m*(v-u),1)],
'''#laws
Inertia ~ is the tendency of a body to resist a change in its state of motion
Newton's first law ~ defines inertial frames
Newton's third law ~ gives action and reaction on different bodies
Static friction ~ adjusts up to its limiting value μsN
Kinetic friction ~ is usually less than limiting static friction
Banking of roads ~ reduces the need for friction at a turn
A body in free fall inside a lift ~ feels weightlessness
Pseudo force ~ acts in a non-inertial frame opposite to its acceleration''')
c('Unit-3-Mechanics','03-Work-Energy-and-Power','Work, Energy and Power','Work is force along displacement; energy is the capacity for work. Conservation of mechanical energy solves most problems quickly.',
'W = F s cosθ | work | constant force\nKE = mv^2/2 | kinetic energy\nPE = mgh | gravitational potential energy\nP = W/t = Fv | power\nPE = kx^2/2 | spring energy',
[N('W = F s cosθ','W','J','F:N:5:50,s:m:2:20,theta:deg:0:60:i',lambda F,s,t:F*s*math.cos(math.radians(t)),1),N('KE = mv^2/2','KE','J','m:kg:1:20,v:m/s:2:20',lambda m,v:m*v*v/2,1),
 N('PE = mgh (g = 9.8)','PE','J','m:kg:1:20,h:m:1:30',lambda m,h:m*g*h,1),N('P = W/t','P','W','W:J:100:2000,t:s:2:20',lambda W,t:W/t,1),N('E = kx^2/2','E','J','k:N/m:50:500,x:m:0.1:0.5',lambda k,x:k*x*x/2,2)],
'''#energy
Work done by a conservative force ~ is path independent
Work done by friction ~ is negative and dissipates energy
Work-energy theorem ~ says net work equals change in kinetic energy
Power ~ is the rate of doing work
In an elastic collision ~ kinetic energy is conserved
In a perfectly inelastic collision ~ the bodies move together after impact
Area under a force-displacement graph ~ gives work done''')
c('Unit-3-Mechanics','04-Rotational-Motion','Rotational Motion','Rotation mirrors linear motion: torque replaces force, moment of inertia replaces mass and angular momentum replaces momentum.',
'τ = Iα | torque\nL = Iω | angular momentum\nKE = Iω^2/2 | rotational KE\nI(ring) = MR^2; I(disc) = MR^2/2 | axis through centre\nI(sphere) = 2MR^2/5',
[N('τ = Iα','τ','N m','I:kg m2:1:10,alpha:rad/s2:1:8',lambda I,a:I*a,1),N('L = Iω','L','kg m2/s','I:kg m2:1:10,w:rad/s:2:20',lambda I,w:I*w,1),
 N('KE = Iω^2/2','KE','J','I:kg m2:1:10,w:rad/s:2:15',lambda I,w:I*w*w/2,1),N('I = MR^2/2 (disc)','I','kg m2','M:kg:2:20,R:m:0.2:1',lambda M,R:M*R*R/2,3)],
'''#rotation
Moment of inertia ~ depends on mass distribution and the axis
Parallel axis theorem ~ states I = Icm + Md^2
Perpendicular axis theorem ~ applies only to planar bodies
Angular momentum ~ is conserved when net external torque is zero
A skater pulling in her arms ~ spins faster because I decreases
Rolling without slipping ~ has v = Rω at the contact condition
Torque ~ equals r cross F''')
c('Unit-3-Mechanics','05-Gravitation','Gravitation','Newton\'s law of gravitation gives orbital motion, escape speed and satellite energy. g changes with height and depth.',
'F = Gm1m2/r^2 | gravitational force\ng = GM/R^2 | surface gravity\nve = √(2gR) | escape speed 11.2 km/s\nvo = √(gR) | orbital speed near surface\nT^2 ∝ r^3 | Kepler III',
[N('g at height h: g(1 - 2h/R) approx','g\'','m/s2','h:km:10:300:i',lambda h:9.8*(1-2*h/6400),3),N('ve = √(2gR) with g in m/s2, R in km','ve','km/s','g:m/s2:3:12,R:km:3000:7000:i',lambda g,R:math.sqrt(2*g*R*1000)/1000,2),
 N('vo = √(gR)','vo','km/s','g:m/s2:3:12,R:km:3000:7000:i',lambda g,R:math.sqrt(g*R*1000)/1000,2),N('T2/T1 = (r2/r1)^1.5','T2/T1','','r:ratio:2:9:i',lambda r:r**1.5,2)],
'''#gravity
Escape speed ~ does not depend on the mass of the projectile
Satellite orbital speed ~ decreases as orbit radius increases
Geostationary satellite ~ has a period of 24 hours and orbits above the equator
Kepler's second law ~ expresses conservation of angular momentum
Weight at the centre of the Earth ~ is zero
Gravitational potential energy ~ is negative for bound systems
g ~ is least at the equator and greatest at the poles''')
c('Unit-3-Mechanics','06-Properties-of-Matter','Properties of Matter','Elasticity, fluids, surface tension and viscosity: stress and strain, Bernoulli, capillary rise and terminal velocity.',
'Y = stress/strain | Young modulus\nP = P0 + ρgh | pressure in fluid\nA1v1 = A2v2 | continuity\nh = 2T cosθ/(ρ g r) | capillary rise\nF = 6πηrv | Stokes drag',
[N('P = ρgh (ρ = 1000 kg/m3)','P','Pa','h:m:1:30:i',lambda h:1000*g*h,0),N('stress = F/A','stress','Pa','F:N:100:2000:i,A:m2:0.001:0.01',lambda F,A:F/A,0),N('A1v1 = A2v2','v2','m/s','A1:cm2:10:40:i,v1:m/s:1:6:i,A2:cm2:2:9:i',lambda A1,v1,A2:A1*v1/A2,2),
 N('h = 2T/(ρ g r) (cosθ = 1), T = 0.07 N/m','h','mm','r:mm:0.1:1',lambda r:2*0.07/(1000*g*r/1000)*1000,2)],
'''#matter
Bernoulli's theorem ~ is a statement of energy conservation for flowing fluid
Pressure in a fluid at rest ~ depends only on depth and density
Surface tension ~ is force per unit length on a liquid surface
Terminal velocity ~ is reached when drag balances weight minus buoyancy
Young modulus ~ is stress divided by longitudinal strain
Capillary rise ~ varies inversely with the radius of the tube
Viscosity of a liquid ~ decreases with temperature''')
c('Unit-4-Waves-and-Thermal','01-Oscillations-and-Waves','Oscillations and Waves','Simple harmonic motion, wave speed, superposition, standing waves, Doppler effect and beats.',
'T = 2π√(m/k) | spring\nT = 2π√(l/g) | simple pendulum\nv = fλ | wave speed\nf\' = f(v ± vo)/(v ∓ vs) | Doppler\nfbeat = |f1 - f2| | beats',
[N('T = 2π√(m/k)','T','s','m:kg:0.5:4,k:N/m:20:200',lambda m,k:2*math.pi*math.sqrt(m/k),2),N('T = 2π√(l/g)','T','s','l:m:0.5:4',lambda l:2*math.pi*math.sqrt(l/g),2),N('v = fλ','v','m/s','f:Hz:100:1000:i,lam:m:0.2:3',lambda f,l:f*l,1),N('beat frequency = |f1 - f2|','fbeat','Hz','f1:Hz:250:300:i,f2:Hz:301:350:i',lambda a,b:b-a,0)],
'''#waves
In SHM acceleration ~ is proportional to displacement and directed to the mean
Total energy in SHM ~ is constant and equals kA^2/2
Sound waves in air ~ are longitudinal
Resonance ~ occurs when driving frequency equals natural frequency
Closed organ pipe ~ supports only odd harmonics
Open organ pipe ~ supports all harmonics
Speed of a transverse wave on a string ~ equals √(T/μ)''')
c('Unit-4-Waves-and-Thermal','02-Thermodynamics-and-KTG','Thermodynamics and Kinetic Theory','First law, heat engines, entropy and kinetic theory of gases connect heat, work and molecular motion.',
'ΔU = Q - W | first law\nPV = nRT | ideal gas\nW = nRT ln(V2/V1) | isothermal\nη = 1 - T2/T1 | Carnot\nvrms = √(3RT/M)',
[N('PV = nRT, V in litres, R = 0.0821','P','atm','n:mol:1:5,T:K:250:400:i,V:L:10:50:i',lambda n,T,V:n*0.0821*T/V,3),N('η = 1 - T2/T1 (percent)','η','%','T1:K:400:800:i,T2:K:250:399:i',lambda a,b:(1-b/a)*100,1),N('ΔU = Q - W','ΔU','J','Q:J:500:2000:i,W:J:100:499:i',lambda q,w:q-w,0),N('vrms ∝ √T: v2/v1 for T ratio','v2/v1','','r:ratio:2:16:i',lambda r:math.sqrt(r),3)],
'''#thermo
Isothermal process ~ has constant temperature and ΔU = 0
Adiabatic process ~ has Q = 0
Isochoric process ~ does no work
Carnot engine ~ has the maximum efficiency between two temperatures
Entropy of an isolated system ~ never decreases
Degrees of freedom of a diatomic gas at room temperature ~ equal 5
Mean kinetic energy per molecule ~ equals 3kT/2''')
c('Unit-5-Electricity-and-Magnetism','01-Electrostatics','Electrostatics','Coulomb\'s law, fields, Gauss\'s law, potential and capacitors with dielectrics.',
'F = kq1q2/r^2 | k = 9×10^9\nE = kq/r^2 | field\nV = kq/r | potential\nC = ε0A/d | parallel plate\nU = CV^2/2 | stored energy',
[N('F = kq1q2/r^2 (q in μC, r in m, k = 9e9)','F','N','q1:uC:1:10:i,q2:uC:1:10:i,r:m:0.5:3',lambda a,b,r:9e9*a*b*1e-12/(r*r),3),N('E = kq/r^2 (q in μC)','E','N/C','q:uC:1:10:i,r:m:0.5:3',lambda q,r:9e9*q*1e-6/(r*r),0),N('V = kq/r (q in μC)','V','V','q:uC:1:10:i,r:m:0.5:3',lambda q,r:9e9*q*1e-6/r,0),N('U = CV^2/2 (C in μF)','U','mJ','C:uF:2:20:i,V:V:10:100:i',lambda C,V:C*1e-6*V*V/2*1000,2)],
'''#electro
Electric field inside a conductor ~ is zero in electrostatic equilibrium
Electric field lines ~ never cross each other
Gauss's law ~ relates flux to enclosed charge
Dielectric between capacitor plates ~ increases the capacitance by K
Capacitors in series ~ have the same charge on each
Capacitors in parallel ~ have the same potential difference
Equipotential surfaces ~ are perpendicular to field lines''')
c('Unit-5-Electricity-and-Magnetism','02-Current-Electricity','Current Electricity','Ohm\'s law, resistivity, Kirchhoff\'s rules, meter bridge, potentiometer and heating effect of current.',
'V = IR | Ohm\nR = ρl/A | resistance\nP = VI = I^2R | power\nRs = R1 + R2; 1/Rp = 1/R1 + 1/R2\nE = V + Ir | cell',
[N('V = IR','V','V','I:A:0.5:5,R:ohm:2:20',lambda I,R:I*R,2),N('R = ρl/A (ρ in 1e-8 ohm m, A in mm2)','R','ohm','rho:e-8:1.7:100,l:m:1:50:i,A:mm2:0.5:3',lambda r,l,A:r*1e-8*l/(A*1e-6),3),N('1/Rp = 1/R1 + 1/R2','Rp','ohm','R1:ohm:2:20:i,R2:ohm:2:20:i',lambda a,b:a*b/(a+b),2),N('H = I^2 R t','H','J','I:A:1:5,R:ohm:2:20,t:s:10:60:i',lambda I,R,t:I*I*R*t,0)],
'''#current
Drift velocity ~ is of the order of 10^-4 m/s
Resistivity of a metal ~ increases with temperature
Resistivity of a semiconductor ~ decreases with temperature
Kirchhoff's junction rule ~ expresses conservation of charge
Kirchhoff's loop rule ~ expresses conservation of energy
Potentiometer ~ measures emf without drawing current at balance
A voltmeter ~ should have very high resistance''')
c('Unit-5-Electricity-and-Magnetism','03-Magnetism-and-EMI','Magnetism and Electromagnetic Induction','Moving charges feel magnetic force; changing flux induces emf. Biot-Savart, Ampere, Faraday and Lenz.',
'F = qvB sinθ | Lorentz\nr = mv/(qB) | circular path\nB = μ0I/(2πr) | long wire\nε = -dΦ/dt | Faraday\nε = Blv | motional emf',
[N('r = mv/(qB) for a proton (v in 1e5 m/s, B in mT), m = 1.67e-27, q = 1.6e-19','r','cm','v:e5 m/s:1:10:i,B:mT:10:100:i',lambda v,B:1.67e-27*v*1e5/(1.6e-19*B*1e-3)*100,2),N('B = μ0I/2πr (μ0 = 4π×10^-7)','B','μT','I:A:1:20:i,r:cm:2:20:i',lambda I,r:2e-7*I/(r/100)*1e6,2),N('ε = Blv','ε','V','B:T:0.1:1,l:m:0.2:2,v:m/s:1:10:i',lambda B,l,v:B*l*v,2),N('ε = L ΔI/Δt','ε','V','L:H:0.1:2,dI:A:1:10:i,dt:s:0.1:2',lambda L,i,t:L*i/t,2)],
'''#magnet
Lenz's law ~ is a consequence of conservation of energy
A charged particle moving along the field ~ feels no magnetic force
Magnetic force on a charge ~ does no work
Diamagnetic materials ~ are weakly repelled by a magnet
Ferromagnetic materials ~ show hysteresis
Self inductance ~ opposes change of current in a coil
Eddy currents ~ are induced in bulk conductors by changing flux''')
c('Unit-5-Electricity-and-Magnetism','04-AC-and-EM-Waves','Alternating Current and EM Waves','AC circuits, reactance, resonance, transformers and the electromagnetic spectrum.',
'Vrms = V0/√2 | rms\nXL = ωL; XC = 1/(ωC) | reactance\nZ = √(R^2 + (XL - XC)^2) | impedance\nf0 = 1/(2π√(LC)) | resonance\nVs/Vp = Ns/Np | transformer',
[N('Z = √(R^2 + X^2)','Z','ohm','R:ohm:3:30:i,X:ohm:4:40:i',lambda R,X:math.sqrt(R*R+X*X),2),N('XL = 2πfL','XL','ohm','f:Hz:50:500:i,L:H:0.01:0.5',lambda f,L:2*math.pi*f*L,2),N('Vs = Vp Ns/Np','Vs','V','Vp:V:100:240:i,Ns:turns:50:500:i,Np:turns:50:200:i',lambda a,b,c_:a*b/c_,1),N('f0 = 1/(2π√LC), L in mH, C in μF','f0','Hz','L:mH:10:100:i,C:uF:1:20:i',lambda L,C:1/(2*math.pi*math.sqrt(L*1e-3*C*1e-6)),1)],
'''#ac
In a pure inductor current ~ lags voltage by 90 degrees
In a pure capacitor current ~ leads voltage by 90 degrees
At series resonance ~ the impedance is minimum and equals R
Power factor ~ equals cosφ = R/Z
An ideal transformer ~ conserves power
Electromagnetic waves ~ are transverse and travel at c in vacuum
Order of the spectrum by wavelength ~ is radio, microwave, infrared, visible, ultraviolet, X-ray, gamma''')
c('Unit-6-Optics-and-Modern','01-Ray-and-Wave-Optics','Ray and Wave Optics','Mirrors, lenses, refraction, interference, diffraction and polarisation.',
'1/v - 1/u = 1/f | lens\n1/v + 1/u = 1/f | mirror\nn = sin i/sin r | Snell\nβ = λD/d | fringe width\nIθ ∝ cos^2θ | Malus',
[N('Lens: 1/v = 1/f + 1/u (sign: u negative), find v','v','cm','f:cm:10:30:i,u:cm:-60:-35:i',lambda f,u:1/(1/f+1/u),2),N('Snell: n = sin i / sin r','n','','i:deg:30:60:i,r:deg:20:29:i',lambda i,r:math.sin(math.radians(i))/math.sin(math.radians(r)),3),N('β = λD/d (λ in nm, D in m, d in mm)','β','mm','lam:nm:400:700:i,D:m:1:2,d:mm:0.5:2',lambda l,D,d:l*1e-9*D/(d*1e-3)*1000,3),N('Power P = 100/f (f in cm)','P','D','f:cm:10:50:i',lambda f:100/f,2)],
'''#optics
Total internal reflection ~ needs light going from denser to rarer medium beyond the critical angle
A convex lens in water ~ has increased focal length
Young's fringes ~ are equally spaced
Diffraction ~ is more pronounced when the slit width is comparable to the wavelength
Polarisation ~ proves light is a transverse wave
Brewster's angle ~ satisfies tan i = n
Dispersion ~ occurs because refractive index depends on wavelength''')
c('Unit-6-Optics-and-Modern','02-Modern-Physics','Dual Nature, Atoms and Nuclei','Photoelectric effect, de Broglie waves, Bohr model, radioactivity and binding energy.',
'E = hf = hc/λ | photon energy\nKmax = hf - φ | Einstein\nλ = h/p | de Broglie\nEn = -13.6/n^2 eV | hydrogen\nN = N0 e^(-λt) | decay',
[N('E = 1240/λ (eV, λ in nm)','E','eV','lam:nm:200:700:i',lambda l:1240/l,2),N('Kmax = hf - φ (energies in eV)','Kmax','eV','E:eV:3:8,phi:eV:1.5:2.9',lambda E,p:E-p,2),N('En = -13.6/n^2','En','eV','n:level:1:6:i',lambda n:-13.6/(n*n),3),N('N = N0 (1/2)^(t/T), N0 = 800','N','nuclei','n:half-lives:1:6:i',lambda n:800/(2**n),0)],
'''#modern
Stopping potential ~ depends on frequency and not on intensity
Threshold frequency ~ is the minimum frequency for photoemission
The Bohr model ~ quantises angular momentum as nh/2π
Binding energy per nucleon ~ is maximum near iron
Alpha particle ~ is a helium nucleus
Half life ~ is independent of the amount of the sample
Mass defect ~ is converted to binding energy by E = mc^2''')
c('Unit-6-Optics-and-Modern','03-Semiconductors-and-Communication','Semiconductors and Communication','Band theory, p-n junction, diodes, transistors, logic gates and basic modulation.',
'IE = IB + IC | transistor\nβ = IC/IB | current gain\nAND, OR, NOT, NAND, NOR | gates\nm = Am/Ac | modulation index',
[N('β = IC/IB','β','','IC:mA:1:10,IB:uA:10:50:i',lambda ic,ib:ic*1000/ib,1),N('IE = IB + IC (mA)','IE','mA','IB:mA:0.02:0.2,IC:mA:2:10',lambda b,c_:b+c_,2),N('m = Am/Ac','m','','Am:V:2:8:i,Ac:V:10:20:i',lambda a,c_:a/c_,2)],
'''#semi
In an n-type semiconductor ~ electrons are the majority carriers
In a p-type semiconductor ~ holes are the majority carriers
A p-n junction in forward bias ~ has a narrow depletion layer
A diode as a rectifier ~ converts AC to DC
NAND and NOR gates ~ are universal gates
Zener diode ~ is used for voltage regulation in reverse breakdown
Amplitude modulation ~ varies the carrier amplitude with the signal''')
c('Unit-7-Experimental-and-Units','01-Units-Dimensions-and-Errors','Units, Dimensions and Errors','Dimensional analysis checks formulas; error propagation and significant figures decide the precision of an answer.',
'[F] = MLT^-2 | force\n[E] = ML^2T^-2 | energy\nΔZ/Z = aΔA/A + bΔB/B | product errors\nLeast count of vernier = 1 MSD - 1 VSD',
[N('% error in Z = A^2 B: 2(%A) + (%B)','%Z','%','a:%:1:5:i,b:%:1:5:i',lambda a,b:2*a+b,0),N('Least count (screw gauge) = pitch/divisions, pitch in mm','LC','mm','pitch:mm:0.5:1,div:divisions:50:100:i',lambda p,d:p/d,4)],
'''#units
Dimensional analysis ~ cannot determine dimensionless constants
Principle of homogeneity ~ requires equal dimensions on both sides of an equation
Angle and strain ~ are dimensionless
Systematic error ~ always acts in the same direction
Random error ~ is reduced by taking many readings
Significant figures in a product ~ follow the least precise factor
Absolute error ~ has the same unit as the quantity''')
