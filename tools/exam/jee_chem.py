from ex import *
X='JEE Main'
def c(p,t,intro,formulas,nums,facts,**k): put('JEE-Main/'+p+'.md',t,X,intro,formulas,nums,facts,**k)
C='Chemistry/'
c(C+'Unit-3-Physical/01-Mole-Concept','Mole Concept and Stoichiometry','The mole links mass, particles and gas volume. Stoichiometry uses balanced equations to relate amounts.',
'n = m/M | moles from mass\nN = n × 6.022×10^23 | particles\nV = n × 22.4 L | gas at STP\nM = n1V1 + n2V2/V | molarity mixing\nMolarity = n/V(L)',
[N('n = m/M','n','mol','m:g:10:200:i,M:g/mol:12:100:i',lambda m,M:m/M,3),N('Molarity = moles/V(L)','M','mol/L','n:mol:0.1:5,V:L:0.5:5',lambda n,V:n/V,3),N('V = n × 22.4','V','L','n:mol:0.1:5',lambda n:n*22.4,2),N('M1V1 = M2V2 (find V2)','V2','mL','M1:M:1:10:i,V1:mL:10:100:i,M2:M:0.1:0.9',lambda a,b,c_:a*b/c_,1)],
'''#mole
Avogadro number ~ is 6.022×10^23 per mole
Limiting reagent ~ decides how much product forms
Molality ~ does not change with temperature
Molarity ~ changes with temperature
Equivalent mass ~ equals molar mass divided by n-factor
Empirical formula ~ shows the simplest whole number ratio of atoms
Percentage yield ~ equals actual yield divided by theoretical yield times 100''')
c(C+'Unit-3-Physical/02-Atomic-Structure','Atomic Structure','Bohr model, quantum numbers, orbitals and electronic configuration.',
'En = -13.6 Z^2/n^2 eV | Bohr energy\nrn = 0.529 n^2/Z Å | radius\nλ = h/mv | de Broglie\n1/λ = R Z^2 (1/n1^2 - 1/n2^2) | spectral lines',
[N('En = -13.6 Z^2/n^2','En','eV','Z:atomic no:1:3:i,n:level:1:5:i',lambda Z,n:-13.6*Z*Z/(n*n),3),N('rn = 0.529 n^2/Z','rn','Å','n:level:1:5:i,Z:atomic no:1:3:i',lambda n,Z:0.529*n*n/Z,3),N('Number of orbitals in shell = n^2','orbitals','','n:shell:1:6:i',lambda n:n*n,0),N('Radial nodes = n - l - 1','nodes','','n:shell:2:6:i,l:azimuthal:0:1:i',lambda n,l:n-l-1,0)],
'''#atom
Aufbau principle ~ fills orbitals in order of increasing energy
Pauli exclusion principle ~ allows at most two electrons per orbital with opposite spins
Hund's rule ~ fills degenerate orbitals singly first
Heisenberg uncertainty principle ~ limits simultaneous knowledge of position and momentum
Chromium ~ has configuration 3d5 4s1
Copper ~ has configuration 3d10 4s1
Number of angular nodes ~ equals l''')
c(C+'Unit-3-Physical/03-Thermodynamics-Chem','Chemical Thermodynamics','Enthalpy, entropy and Gibbs energy decide heat changes and spontaneity.',
'ΔG = ΔH - TΔS | spontaneity\nΔU = q + w | first law\nΔH = ΔU + Δng RT | enthalpy\nΔG° = -RT ln K',
[N('ΔG = ΔH - TΔS (ΔH in kJ, ΔS in J/K)','ΔG','kJ','H:kJ:-100:100:i,T:K:250:500:i,S:J/K:-100:200:i',lambda H,T,S:H-T*S/1000,2),N('ΔH = ΔU + ΔngRT (R = 8.314 J)','ΔH','kJ','U:kJ:-100:100:i,ng:mol:-2:3:i,T:K:290:400:i',lambda U,n,T:U+n*8.314*T/1000,2),N('ΔS = q/T','ΔS','J/K','q:J:500:5000:i,T:K:250:500:i',lambda q,T:q/T,2)],
'''#thermo
Enthalpy of formation of an element in its standard state ~ is zero
Hess's law ~ says enthalpy change is path independent
Spontaneous process ~ has negative ΔG
Entropy of a perfect crystal at 0 K ~ is zero
Exothermic reaction ~ has negative ΔH
Bond enthalpy ~ is always positive
Free expansion of an ideal gas ~ has w = 0''')
c(C+'Unit-3-Physical/04-Equilibrium','Chemical and Ionic Equilibrium','Equilibrium constants, Le Chatelier principle, pH, buffers and solubility product.',
'Kp = Kc (RT)^Δng | relation\npH = -log[H+] | acidity\npH = pKa + log([A-]/[HA]) | buffer\nKsp = s^2 (AB type)\nKw = 10^-14 at 25°C',
[N('pH = -log[H+] (given exponent x in 10^-x)','pH','','x:exp:1:13:i',lambda x:x,0,ask='A solution has [H+] = 1e-%s M. Find its pH.'),N('pH of buffer = pKa + log(ratio)','pH','','pKa:pKa:3:8,ratio:A-/HA:1:10:i',lambda p,r:p+math.log10(r),2),N('pOH = 14 - pH','pOH','','pH:pH:1:13:i',lambda p:14-p,0),N('Ksp = s^2 (s in mmol/L)','Ksp','×1e-6','s:mM:1:9:i',lambda s:s*s,0)],
'''#eq
Equilibrium constant ~ changes only with temperature
A catalyst ~ does not change the position of equilibrium
Common ion effect ~ lowers the solubility of a sparingly soluble salt
Buffer ~ resists change in pH on adding small amounts of acid or base
Strong acid ~ ionises completely in water
Increasing pressure ~ shifts equilibrium toward fewer moles of gas
Degree of dissociation ~ increases on dilution''')
c(C+'Unit-3-Physical/05-Electrochemistry-Kinetics','Electrochemistry and Chemical Kinetics','Cell potential, Nernst equation, Faraday laws, rate laws and half-lives.',
'E°cell = E°cathode - E°anode | cell\nΔG = -nFE | work\nm = ZIt | Faraday\nk = 0.693/t1/2 | first order\nk = A e^(-Ea/RT) | Arrhenius',
[N('E°cell = E°cathode - E°anode','E°cell','V','Ec:V:0.3:1.5,Ea:V:-1.0:0.2',lambda c_,a:c_-a,2),N('ΔG = -nFE (F = 96500, result in kJ)','ΔG','kJ','n:e:1:4:i,E:V:0.3:2',lambda n,E:-n*96500*E/1000,2),N('t1/2 = 0.693/k','t1/2','min','k:1/min:0.01:0.2',lambda k:0.693/k,2),N('Charge Q = It','Q','C','I:A:0.5:5,t:s:60:600:i',lambda I,t:I*t,1)],
'''#kin
Salt bridge ~ maintains electrical neutrality in a galvanic cell
Oxidation ~ occurs at the anode
Reduction ~ occurs at the cathode
Half life of a first order reaction ~ is independent of initial concentration
Order of reaction ~ is found experimentally
Molecularity ~ is always a whole number
Rate constant ~ increases with temperature''')
c(C+'Unit-3-Physical/06-Solutions-States','Solutions and States of Matter','Colligative properties, Raoult law and gas laws.',
'ΔTb = Kb m | elevation\nΔTf = Kf m | depression\nπ = CRT | osmotic pressure\nPV = nRT | ideal gas\nP = xA P°A + xB P°B',
[N('ΔTb = i Kb m (i = 1)','ΔTb','K','Kb:K kg/mol:0.5:2.5,m:molal:0.1:3',lambda k,m:k*m,3),N('π = CRT (R = 0.0821)','π','atm','C:mol/L:0.01:0.5,T:K:280:320:i',lambda c_,T:c_*0.0821*T,3),N('Raoult: P = x P°','P','mmHg','x:mole fraction:0.1:0.9,P0:mmHg:100:700:i',lambda x,p:x*p,1),N('Boyle: P2 = P1V1/V2','P2','atm','P1:atm:1:5:i,V1:L:2:10:i,V2:L:1:9:i',lambda a,b,c_:a*b/c_,2)],
'''#sol
Colligative properties ~ depend only on the number of solute particles
Van't Hoff factor ~ is greater than 1 for dissociation
Ideal solutions ~ obey Raoult's law at all concentrations
Reverse osmosis ~ is used for desalination of water
Real gases ~ deviate from ideal behaviour at high pressure and low temperature
Critical temperature ~ is the maximum temperature at which a gas can be liquefied
Boyle temperature ~ is where a real gas behaves ideally over a range of pressure''')
c(C+'Unit-4-Inorganic/01-Periodic-and-Bonding','Periodic Table and Chemical Bonding','Periodic trends, ionic and covalent bonding, VSEPR, hybridisation and molecular orbitals.',
'Bond order = (Nb - Na)/2 | MO theory\nHybridisation = (V + M - C + A)/2\nFormal charge = V - N - B/2',
[N('Bond order = (Nb - Na)/2','BO','','Nb:bonding e:6:10:i,Na:antibonding e:0:5:i',lambda b,a:(b-a)/2,1),N('Steric number hybridisation = (V + M - C + A)/2','H','','V:valence e:4:7:i,M:monovalent atoms:2:6:i',lambda V,M:(V+M)/2,1),N('Formal charge = V - N - B/2','FC','','V:valence:4:7:i,N:nonbonding:0:6:i,B:bonding e:2:8:i',lambda V,N_,B:V-N_-B/2,1)],
'''#bond
Electronegativity ~ increases across a period and decreases down a group
Ionisation energy ~ shows exceptions between group 2 and 13 and between group 15 and 16
Atomic radius ~ decreases across a period
Fajans' rule ~ explains covalent character in ionic compounds
Hydrogen bonding ~ raises the boiling point of water
Sp3 hybridisation ~ gives a tetrahedral geometry
O2 ~ is paramagnetic according to molecular orbital theory
XeF4 ~ is square planar''')
c(C+'Unit-4-Inorganic/02-Coordination-and-Metals','Coordination Compounds and d-block','Werner theory, crystal field, isomerism and properties of transition elements.',
'CFSE octahedral = (-0.4 t2g + 0.6 eg)Δo | splitting\nSpin only μ = √(n(n+2)) BM\nEAN = Z - O.S. + 2×CN',
[N('μ = √(n(n+2)) BM for n unpaired electrons','μ','BM','n:unpaired e:1:5:i',lambda n:math.sqrt(n*(n+2)),2),N('CFSE (octahedral, in Δo units) = -0.4 t - ... + 0.6 e','CFSE','Δo','t:t2g electrons:0:6:i,e:eg electrons:0:2:i',lambda t,e:-0.4*t+0.6*e,2),N('EAN = Z - ox + 2CN','EAN','','Z:atomic no:24:30:i,ox:oxidation state:0:3:i,CN:coordination no:4:6:i',lambda Z,ox,cn:Z-ox+2*cn,0)],
'''#coord
Ligand ~ donates a lone pair to the central metal
Strong field ligands ~ give low spin complexes
Chelate effect ~ makes complexes with polydentate ligands more stable
Transition metals ~ show variable oxidation states and coloured ions
Lanthanoid contraction ~ makes 4d and 5d radii nearly equal
Potassium permanganate ~ is a strong oxidising agent
Cis-platin ~ is used in cancer therapy''')
c(C+'Unit-4-Inorganic/03-s-p-block-and-Metallurgy','s-block, p-block and Metallurgy','Group trends, important compounds and extraction of metals.',
'',
[N('Number of atoms of oxygen in Na2CO3·xH2O (3 + x)','O atoms','','x:water:1:10:i',lambda x:3+x,0),N('Molar mass of CuSO4·xH2O (159.5 + 18x)','M','g/mol','x:water:1:5:i',lambda x:159.5+18*x,1)],
'''#pblock
Group 1 metals ~ are the strongest reducing agents and are stored in kerosene
Lithium ~ shows diagonal relationship with magnesium
Plaster of Paris ~ is CaSO4 half hydrate
Boron ~ is a metalloid and forms electron deficient compounds
Diborane ~ contains two three-centre two-electron bonds
Inert pair effect ~ stabilises lower oxidation states in heavy p-block elements
Noble gases ~ were first compounded with xenon
Froth flotation ~ concentrates sulphide ores
Zone refining ~ gives very pure semiconductors
Hall-Heroult process ~ extracts aluminium by electrolysis
Ozone ~ is a powerful oxidising agent
Interhalogen compounds ~ are more reactive than halogens except fluorine''')
c(C+'Unit-5-Organic/01-GOC-and-Hydrocarbons','General Organic Chemistry and Hydrocarbons','Inductive, resonance and hyperconjugation effects, carbocation stability, alkanes, alkenes and alkynes.',
'',
[N('Degree of unsaturation = (2C + 2 - H)/2','DoU','','C:carbons:4:12:i,H:hydrogens:4:14:i',lambda c_,h:(2*c_+2-h)/2,1),N('Number of structural isomers of alkane (n = 4..6)','','','n:C:4:6:i',lambda n:{4:2,5:3,6:5}[n],0)],
'''#goc
Carbocation stability ~ follows tertiary greater than secondary greater than primary
Markovnikov's rule ~ puts hydrogen on the carbon with more hydrogens
Anti-Markovnikov addition ~ occurs with HBr in the presence of peroxide
Hyperconjugation ~ stabilises alkenes and carbocations
Benzene ~ undergoes electrophilic substitution
Aromaticity ~ needs 4n + 2 pi electrons in a planar cyclic conjugated system
Ozonolysis ~ cleaves a double bond to carbonyl compounds
Wurtz reaction ~ couples two alkyl halides using sodium
Kolbe electrolysis ~ gives alkanes at the anode
Sp hybrid carbon ~ is most electronegative among sp3, sp2 and sp''')
c(C+'Unit-5-Organic/02-Halides-Alcohols-Carbonyls','Haloalkanes, Alcohols, Aldehydes and Ketones','SN1, SN2, E1, E2, oxidation and reduction of alcohols, and carbonyl reactions.',
'',
[N('Number of moles of Ag formed from n moles of aldehyde in Tollens test (2n)','Ag','mol','n:aldehyde mol:1:6:i',lambda n:2*n,0)],
'''#carbonyl
SN2 reaction ~ proceeds with inversion of configuration
SN1 reaction ~ gives racemisation through a carbocation
Lucas reagent ~ distinguishes primary, secondary and tertiary alcohols
Primary alcohol on oxidation ~ gives an aldehyde and then a carboxylic acid
Aldol condensation ~ needs an alpha hydrogen
Cannizzaro reaction ~ occurs in aldehydes with no alpha hydrogen
Iodoform test ~ is given by methyl ketones and ethanol
Grignard reagent ~ adds to carbonyls to form alcohols
Tollens' reagent ~ is reduced by aldehydes to silver
Fehling's solution ~ is not reduced by aromatic aldehydes''')
c(C+'Unit-5-Organic/03-Amines-Biomolecules-Polymers','Amines, Biomolecules and Polymers','Basicity of amines, diazonium salts, carbohydrates, amino acids, proteins and polymers.',
'',
[N('Number of peptide bonds in a peptide of n amino acids = n - 1','bonds','','n:amino acids:2:30:i',lambda n:n-1,0),N('Degree of polymerisation = M(polymer)/M(monomer)','n','','Mp:g/mol:5600:56000:i,Mm:g/mol:28:104:i',lambda a,b:a/b,0)],
'''#bio
Hinsberg reagent ~ separates primary, secondary and tertiary amines
Carbylamine test ~ is given by primary amines
Diazonium salts ~ are prepared at 0 to 5 degrees Celsius
Glucose ~ is an aldohexose
Sucrose ~ is a non-reducing sugar
Denaturation of protein ~ destroys secondary and tertiary structure
Nylon-6,6 ~ is a condensation polymer
Natural rubber ~ is polymer of isoprene
Vulcanisation ~ uses sulphur to cross-link rubber
Vitamin C ~ deficiency causes scurvy''')
