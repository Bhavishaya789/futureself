# JEE Advanced: thermodynamics and chemical kinetics
minutes: 70
yt: jee advanced thermodynamics chemical kinetics
@study
First law DU = q + w; enthalpy H = U + PV, DH = DU + Dn RT. Hess law, bond enthalpy and Born-Haber cycles; DG = DH - T DS, DG0 = -RT ln K. Kinetics: rate = k [A]^n; first order t_1/2 = 0.693/k, ln (A0/A) = kt; Arrhenius k = A e^(-Ea/RT) and ln (k2/k1) = (Ea/R)(1/T1 - 1/T2).
## Deep dive: thermodynamic quantities
First law: DU = q + w with w = -P_ext DV for expansion (IUPAC sign convention). Enthalpy H = U + PV; DH = DU + Dn_g R T; at constant pressure q_p = DH and at constant volume q_v = DU. Heat capacities: C_p - C_v = R for an ideal gas; q = n C DT. Reversible isothermal expansion: w = -n R T ln (V2/V1); free expansion w = 0; adiabatic reversible: T V^(gamma - 1) = constant, w = n C_v DT. Hess law: DH of a reaction is the same whether in one step or several. Enthalpy of reaction = sum of DHf (products) - sum of DHf (reactants) = sum of bond enthalpies of bonds broken - formed. Kirchhoff: DH2 - DH1 = DCp (T2 - T1). Lattice energy by Born-Haber cycle: DHf = DH_sub + (1/2) DH_diss + IE + EA(negative) + U_lattice.
## Deep dive: entropy, Gibbs energy and equilibrium
Entropy S measures disorder; DS = q_rev/T, so for a phase change DS = DH/T (fusion DS = DHfus/Tm, vaporisation DS = DHvap/Tb). For an ideal gas DS = n R ln (V2/V1) + n C_v ln (T2/T1) = n C_p ln (T2/T1) - n R ln (P2/P1). Second law: DS_universe > 0 for a spontaneous process; third law: S of a perfect crystal is zero at 0 K. Gibbs energy G = H - T S; DG = DH - T DS < 0 for a spontaneous process at constant T and P; DG = 0 at equilibrium (so T = DH/DS for the transition temperature). DG0 = -RT ln K = -2.303 RT log K and DG = DG0 + RT ln Q. Relationship with electrochemistry: DG0 = -n F E0.
## Deep dive: chemical kinetics
Rate of reaction = -(1/a) d[A]/dt = (1/c) d[C]/dt; rate law rate = k [A]^m [B]^n with order m + n found experimentally (molecularity is for elementary steps only, and is a whole number). Integrated laws: zero order [A] = [A]0 - kt, t_1/2 = [A]0/(2k); first order ln [A] = ln [A]0 - kt, k = (2.303/t) log ([A]0/[A]), t_1/2 = 0.693/k (independent of concentration); second order 1/[A] = 1/[A]0 + kt, t_1/2 = 1/(k [A]0). Units of k: (mol/L)^(1 - n) s^-1. Arrhenius: k = A e^(-Ea/RT), log (k2/k1) = Ea/(2.303 R) (1/T1 - 1/T2); a catalyst lowers Ea without changing DH or K. Parallel reactions: k = k1 + k2; consecutive: the slowest step is rate determining; pseudo-first-order reactions (ester hydrolysis, inversion of sucrose) have excess reagent. Radioactive decay is first order. The temperature coefficient usually doubles or triples the rate per 10 degree rise.
## Hindi saransh
DG = DH - T DS. First order: ln(A0/A) = kt. Arrhenius: k = A e^(-Ea/RT).
> Spontaneous if DG < 0.
@formulas
## First law
First law | DU = q + w | w = -P DV
Enthalpy | DH = DU + Dn_g R T | 
Heat at constant volume | q_v = DU | 
Heat at constant pressure | q_p = DH | 
Isothermal work | w = -n R T ln (V2/V1) | reversible
Heat capacities | C_p - C_v = R | ideal gas
Kirchhoff | DH2 - DH1 = DCp (T2 - T1) | 
Reaction enthalpy | sum DHf(products) - sum DHf(reactants) | 
## Entropy and Gibbs energy
Entropy change | DS = q_rev/T | 
Phase change | DS = DH/T | 
Gibbs energy | DG = DH - T DS | 
Equilibrium | DG0 = -R T ln K | 
Reaction Gibbs energy | DG = DG0 + R T ln Q | 
Electrochemical link | DG0 = -n F E0 | 
Transition temperature | T = DH/DS | DG = 0
## Kinetics
Zero order | [A] = [A]0 - k t | t_1/2 = [A]0/(2k)
First order | k = (2.303/t) log ([A]0/[A]) | t_1/2 = 0.693/k
Second order | 1/[A] = 1/[A]0 + k t | t_1/2 = 1/(k [A]0)
Arrhenius | k = A e^(-Ea/RT) | 
Arrhenius (two temperatures) | log (k2/k1) = (Ea/(2.303 R)) (1/T1 - 1/T2) | 
Fraction left (first order) | (1/2)^(t/t_1/2) | 

@qa
Q: State the first law of thermodynamics.
A: DU = q + w.
Q: What is enthalpy?
A: H = U + PV.
Q: What is the relation between DH and DU?
A: DH = DU + Dn_g R T.
Q: State Hess's law.
A: The enthalpy change of a reaction is the same whether it occurs in one step or several.
Q: What is a state function?
A: A property that depends only on the initial and final states, such as U, H, S and G.
Q: Are heat and work state functions?
A: No, they are path functions.
Q: What is entropy?
A: A measure of the disorder of a system.
Q: State the second law of thermodynamics.
A: The entropy of the universe increases in a spontaneous process.
Q: State the third law of thermodynamics.
A: The entropy of a perfect crystal is zero at absolute zero.
Q: What is Gibbs energy?
A: G = H - T S.
Q: When is a process spontaneous?
A: When DG is negative at constant T and P.
Q: What is DG at equilibrium?
A: Zero.
Q: What is the relation between DG0 and K?
A: DG0 = -R T ln K.
Q: What is the order of a reaction?
A: The sum of the powers of the concentration terms in the rate law.
Q: What is molecularity?
A: The number of species colliding in an elementary step.
Q: Can the order of a reaction be fractional?
A: Yes, but molecularity cannot.
Q: What is the unit of k for a first order reaction?
A: s^-1.
Q: What is the half-life of a first order reaction?
A: 0.693/k, independent of concentration.
Q: What is the half-life of a zero order reaction?
A: [A]0/(2k).
Q: What is the Arrhenius equation?
A: k = A e^(-Ea/RT).
Q: What is activation energy?
A: The minimum extra energy that reactants must have to form products.
Q: How does a catalyst work?
A: It provides an alternate path with lower activation energy.
Q: Does a catalyst change DH?
A: No.
Q: What is a pseudo first order reaction?
A: A reaction that is second order but behaves as first order because one reactant is in large excess.
Q: What is the rate determining step?
A: The slowest step of a reaction mechanism.
Q: DU = -100 kJ and Dn_g = 1 at 300 K. DH in kJ (R = 8.314)
A: -97.506 kJ.
Q: DU = -50 kJ and Dn_g = -1 at 300 K. DH in kJ (R = 8.314)
A: -52.494 kJ.
Q: DU = 200 kJ and Dn_g = 2 at 300 K. DH in kJ (R = 8.314)
A: 204.988 kJ.
Q: DU = 0 kJ and Dn_g = 0 at 300 K. DH in kJ (R = 8.314)
A: 0 kJ.
Q: DU = -300 kJ and Dn_g = -2 at 300 K. DH in kJ (R = 8.314)
A: -304.988 kJ.
Q: DU = 150 kJ and Dn_g = 1 at 300 K. DH in kJ (R = 8.314)
A: 152.494 kJ.
Q: Work done in a reversible isothermal expansion of 1 mol at 300 K with V2/V1 = 2, in kJ
A: -1.729 kJ.
Q: Work done in a reversible isothermal expansion of 2 mol at 300 K with V2/V1 = 10, in kJ
A: -11.486 kJ.
Q: Work done in a reversible isothermal expansion of 1 mol at 273 K with V2/V1 = 5, in kJ
A: -3.653 kJ.
Q: Work done in a reversible isothermal expansion of 0.5 mol at 400 K with V2/V1 = 3, in kJ
A: -1.827 kJ.
Q: Work done in a reversible isothermal expansion of 1 mol at 298 K with V2/V1 = 10, in kJ
A: -5.705 kJ.
Q: DH = -100 kJ, DS = -0.2 kJ/K at 300 K. DG in kJ
A: -40 kJ.
Q: DH = 50 kJ, DS = 0.2 kJ/K at 300 K. DG in kJ
A: -10 kJ.
Q: DH = -40 kJ, DS = 0.1 kJ/K at 300 K. DG in kJ
A: -70 kJ.
Q: DH = 80 kJ, DS = 0.15 kJ/K at 300 K. DG in kJ
A: 35 kJ.
Q: DH = -20 kJ, DS = -0.05 kJ/K at 300 K. DG in kJ
A: -5 kJ.
Q: DH = 30 kJ, DS = 0.1 kJ/K at 300 K. DG in kJ
A: 0 kJ.
Q: DH = 40 kJ and DS = 0.1 kJ/K. Temperature above which the reaction is spontaneous
A: 400 K.
Q: DH = 60 kJ and DS = 0.15 kJ/K. Temperature above which the reaction is spontaneous
A: 400 K.
Q: DH = 100 kJ and DS = 0.25 kJ/K. Temperature above which the reaction is spontaneous
A: 400 K.
Q: DH = 30 kJ and DS = 0.075 kJ/K. Temperature above which the reaction is spontaneous
A: 400 K.
Q: DH = 90 kJ and DS = 0.18 kJ/K. Temperature above which the reaction is spontaneous
A: 500 K.
Q: DS for a phase change with DH = 6000 J/mol at 273 K
A: 21.98 J/(mol K).
Q: DS for a phase change with DH = 40700 J/mol at 373 K
A: 109.12 J/(mol K).
Q: DS for a phase change with DH = 2900 J/mol at 100 K
A: 29 J/(mol K).
Q: DS for a phase change with DH = 9800 J/mol at 350 K
A: 28 J/(mol K).
Q: DS for a phase change with DH = 13000 J/mol at 260 K
A: 50 J/(mol K).
Q: DG0 = -10 kJ at 300 K. log K (R = 8.314)
A: 1.74.
Q: DG0 = -20 kJ at 300 K. log K (R = 8.314)
A: 3.48.
Q: DG0 = -5 kJ at 298 K. log K (R = 8.314)
A: 0.88.
Q: DG0 = -30 kJ at 310 K. log K (R = 8.314)
A: 5.05.
Q: DG0 = 10 kJ at 300 K. log K (R = 8.314)
A: -1.74.
Q: DG0 = 0 kJ at 300 K. log K (R = 8.314)
A: 0.
Q: Half-life of a first order reaction with k = 0.0693 per min
A: 10 min.
Q: Half-life of a first order reaction with k = 0.00693 per min
A: 100 min.
Q: Half-life of a first order reaction with k = 0.0231 per min
A: 30 min.
Q: Half-life of a first order reaction with k = 0.0462 per min
A: 15 min.
Q: Half-life of a first order reaction with k = 0.693 per min
A: 1 min.
Q: Half-life of a first order reaction with k = 0.00231 per min
A: 300 min.
Q: Rate constant of a first order reaction with half-life 5 min
A: 0.1386 per min.
Q: Rate constant of a first order reaction with half-life 10 min
A: 0.0693 per min.
Q: Rate constant of a first order reaction with half-life 20 min
A: 0.03465 per min.
Q: Rate constant of a first order reaction with half-life 30 min
A: 0.0231 per min.
Q: Rate constant of a first order reaction with half-life 60 min
A: 0.01155 per min.
Q: Rate constant of a first order reaction with half-life 100 min
A: 0.00693 per min.
Q: Fraction left after 20 min for a first order reaction of half-life 10 min
A: 0.25.
Q: Fraction left after 30 min for a first order reaction of half-life 10 min
A: 0.125.
Q: Fraction left after 15 min for a first order reaction of half-life 5 min
A: 0.125.
Q: Fraction left after 40 min for a first order reaction of half-life 20 min
A: 0.25.
Q: Fraction left after 60 min for a first order reaction of half-life 30 min
A: 0.25.
Q: Fraction left after 25 min for a first order reaction of half-life 5 min
A: 0.0312.
Q: First order k = 0.01 per min. Fraction left after 100 min
A: 0.3679.
Q: First order k = 0.05 per min. Fraction left after 20 min
A: 0.3679.
Q: First order k = 0.02 per min. Fraction left after 50 min
A: 0.3679.
Q: First order k = 0.1 per min. Fraction left after 10 min
A: 0.3679.
Q: First order k = 0.03 per min. Fraction left after 30 min
A: 0.4066.
Q: Zero order: [A]0 = 1 M, k = 0.1 M/min. Concentration after 5 min
A: 0.5 M.
Q: Zero order: [A]0 = 2 M, k = 0.05 M/min. Concentration after 10 min
A: 1.5 M.
Q: Zero order: [A]0 = 0.5 M, k = 0.02 M/min. Concentration after 20 min
A: 0.1 M.
Q: Zero order: [A]0 = 1 M, k = 0.2 M/min. Concentration after 3 min
A: 0.4 M.
Q: Ea = 50 kJ/mol. Ratio k2/k1 for 300 K to 310 K
A: 1.91.
Q: Ea = 80 kJ/mol. Ratio k2/k1 for 300 K to 310 K
A: 2.81.
Q: Ea = 100 kJ/mol. Ratio k2/k1 for 300 K to 350 K
A: 307.22.
Q: Ea = 60 kJ/mol. Ratio k2/k1 for 298 K to 308 K
A: 2.2.
Q: Ea = 40 kJ/mol. Ratio k2/k1 for 300 K to 320 K
A: 2.72.
Q: Rate = k [A]^1 [B]^1. If [A] and [B] are both doubled, by what factor does the rate change?
A: 4 times.
Q: Rate = k [A]^2 [B]^1. If [A] and [B] are both doubled, by what factor does the rate change?
A: 8 times.
Q: Rate = k [A]^1 [B]^2. If [A] and [B] are both doubled, by what factor does the rate change?
A: 8 times.
Q: Rate = k [A]^2 [B]^2. If [A] and [B] are both doubled, by what factor does the rate change?
A: 16 times.
Q: Rate = k [A]^3 [B]^1. If [A] and [B] are both doubled, by what factor does the rate change?
A: 16 times.
Q: For an ideal gas with C_v = 12.47 J/(mol K), C_p is
A: 20.784 J/(mol K).
Q: For an ideal gas with C_v = 20.8 J/(mol K), C_p is
A: 29.114 J/(mol K).
Q: For an ideal gas with C_v = 29.1 J/(mol K), C_p is
A: 37.414 J/(mol K).
Q: For an ideal gas with C_v = 12.5 J/(mol K), C_p is
A: 20.814 J/(mol K).
Q: For an ideal gas with C_v = 25 J/(mol K), C_p is
A: 33.314 J/(mol K).
Q: Heat at constant volume for 1 mol heated by 50 K with Cv = 12.47 J/(mol K)
A: 623.5 J.
Q: Heat at constant volume for 2 mol heated by 100 K with Cv = 20.8 J/(mol K)
A: 4160 J.
Q: Heat at constant volume for 0.5 mol heated by 200 K with Cv = 12.47 J/(mol K)
A: 1247 J.
Q: Heat at constant volume for 3 mol heated by 30 K with Cv = 20.8 J/(mol K)
A: 1872 J.
Q: Heat at constant volume for 1 mol heated by 10 K with Cv = 29.1 J/(mol K)
A: 291 J.
Q: Difference of two enthalpies -285.8 and -241.8 kJ
A: -44 kJ.
Q: Difference of two enthalpies -393.5 and -110.5 kJ
A: -283 kJ.
Q: Difference of two enthalpies -890 and -802 kJ
A: -88 kJ.
Q: Difference of two enthalpies -92 and -46 kJ
A: -46 kJ.
Q: First order k = 0.0693 per min. Time for 50% completion
A: 10 min.
Q: First order k = 0.0231 per min. Time for 50% completion
A: 30 min.
Q: First order k = 0.0462 per min. Time for 50% completion
A: 15 min.
@quiz
? DU = -100 kJ and Dn_g = 1 at 300 K. DH in kJ (R = 8.314)
+ -97.506 kJ
- -87.755 kJ
- -78.005 kJ
- -48.753 kJ
! DU + Dn RT.
? DU = -50 kJ and Dn_g = -1 at 300 K. DH in kJ (R = 8.314)
+ -52.494 kJ
- -104.988 kJ
- -47.245 kJ
- -41.995 kJ
! DU + Dn RT.
? DU = 200 kJ and Dn_g = 2 at 300 K. DH in kJ (R = 8.314)
+ 204.988 kJ
- 163.991 kJ
- 256.236 kJ
- 614.965 kJ
! DU + Dn RT.
? DU = -300 kJ and Dn_g = -2 at 300 K. DH in kJ (R = 8.314)
- -152.494 kJ
- -914.965 kJ
- -609.977 kJ
+ -304.988 kJ
! DU + Dn RT.
? DU = 150 kJ and Dn_g = 1 at 300 K. DH in kJ (R = 8.314)
+ 152.494 kJ
- 304.988 kJ
- 121.995 kJ
- 190.618 kJ
! DU + Dn RT.
? Work done in a reversible isothermal expansion of 1 mol at 300 K with V2/V1 = 2, in kJ
+ -1.729 kJ
- -3.458 kJ
- -1.902 kJ
- -1.383 kJ
! -nRT ln (V2/V1).
? Work done in a reversible isothermal expansion of 2 mol at 300 K with V2/V1 = 10, in kJ
- -9.189 kJ
- -22.972 kJ
+ -11.486 kJ
- -10.338 kJ
! -nRT ln (V2/V1).
? Work done in a reversible isothermal expansion of 1 mol at 273 K with V2/V1 = 5, in kJ
- -7.306 kJ
- -2.922 kJ
- -4.018 kJ
+ -3.653 kJ
! -nRT ln (V2/V1).
? Work done in a reversible isothermal expansion of 0.5 mol at 400 K with V2/V1 = 3, in kJ
- -2.283 kJ
+ -1.827 kJ
- -3.654 kJ
- -0.913 kJ
! -nRT ln (V2/V1).
? Work done in a reversible isothermal expansion of 1 mol at 298 K with V2/V1 = 10, in kJ
- -5.134 kJ
- -4.564 kJ
- -11.41 kJ
+ -5.705 kJ
! -nRT ln (V2/V1).
? DH = -100 kJ, DS = -0.2 kJ/K at 300 K. DG in kJ
- -36 kJ
+ -40 kJ
- -32 kJ
- -50 kJ
! DH - T DS.
? DH = 50 kJ, DS = 0.2 kJ/K at 300 K. DG in kJ
- -12.5 kJ
- -8 kJ
- -5 kJ
+ -10 kJ
! DH - T DS.
? DH = -40 kJ, DS = 0.1 kJ/K at 300 K. DG in kJ
- -140 kJ
- -35 kJ
- -87.5 kJ
+ -70 kJ
! DH - T DS.
? DH = 80 kJ, DS = 0.15 kJ/K at 300 K. DG in kJ
- 38.5 kJ
- 28 kJ
- 43.75 kJ
+ 35 kJ
! DH - T DS.
? DH = -20 kJ, DS = -0.05 kJ/K at 300 K. DG in kJ
- -5.5 kJ
- -15 kJ
+ -5 kJ
- -4 kJ
! DH - T DS.
? DH = 40 kJ and DS = 0.1 kJ/K. Temperature above which the reaction is spontaneous
- 440 K
- 1200 K
- 360 K
+ 400 K
! DH/DS.
? DH = 60 kJ and DS = 0.15 kJ/K. Temperature above which the reaction is spontaneous
- 500 K
- 440 K
+ 400 K
- 800 K
! DH/DS.
? DH = 100 kJ and DS = 0.25 kJ/K. Temperature above which the reaction is spontaneous
- 360 K
- 1200 K
- 500 K
+ 400 K
! DH/DS.
? DH = 30 kJ and DS = 0.075 kJ/K. Temperature above which the reaction is spontaneous
- 500 K
+ 400 K
- 320 K
- 360 K
! DH/DS.
? DH = 90 kJ and DS = 0.18 kJ/K. Temperature above which the reaction is spontaneous
+ 500 K
- 550 K
- 250 K
- 1000 K
! DH/DS.
? DS for a phase change with DH = 6000 J/mol at 273 K
- 65.93 J/(mol K)
- 27.47 J/(mol K)
- 10.99 J/(mol K)
+ 21.98 J/(mol K)
! DH/T.
? DS for a phase change with DH = 40700 J/mol at 373 K
- 120.03 J/(mol K)
- 98.2 J/(mol K)
+ 109.12 J/(mol K)
- 327.35 J/(mol K)
! DH/T.
? DS for a phase change with DH = 2900 J/mol at 100 K
- 36.25 J/(mol K)
+ 29 J/(mol K)
- 23.2 J/(mol K)
- 58 J/(mol K)
! DH/T.
? DS for a phase change with DH = 9800 J/mol at 350 K
- 14 J/(mol K)
- 30.8 J/(mol K)
- 35 J/(mol K)
+ 28 J/(mol K)
! DH/T.
? DS for a phase change with DH = 13000 J/mol at 260 K
- 100 J/(mol K)
+ 50 J/(mol K)
- 25 J/(mol K)
- 45 J/(mol K)
! DH/T.
? DG0 = -10 kJ at 300 K. log K (R = 8.314)
+ 1.74
- 5.22
- 1.57
- 3.48
! -DG0/(2.303 RT).
? DG0 = -20 kJ at 300 K. log K (R = 8.314)
- 2.79
- 3.83
+ 3.48
- 6.96
! -DG0/(2.303 RT).
? DG0 = -5 kJ at 298 K. log K (R = 8.314)
+ 0.88
- 0.96
- 0.79
- 1.1
! -DG0/(2.303 RT).
? DG0 = -30 kJ at 310 K. log K (R = 8.314)
- 5.56
- 4.55
- 10.11
+ 5.05
! -DG0/(2.303 RT).
? DG0 = 10 kJ at 300 K. log K (R = 8.314)
- -3.48
+ -1.74
- -5.22
- -2.18
! -DG0/(2.303 RT).
? Half-life of a first order reaction with k = 0.0693 per min
+ 10 min
- 9 min
- 30 min
- 8 min
! 0.693/k.
? Half-life of a first order reaction with k = 0.00693 per min
+ 100 min
- 300 min
- 50 min
- 80 min
! 0.693/k.
? Half-life of a first order reaction with k = 0.0231 per min
- 90 min
- 37.5 min
- 33 min
+ 30 min
! 0.693/k.
? Half-life of a first order reaction with k = 0.0462 per min
- 16.5 min
- 30 min
- 13.5 min
+ 15 min
! 0.693/k.
? Half-life of a first order reaction with k = 0.693 per min
+ 1 min
- 1.1 min
- 0.5 min
- 3 min
! 0.693/k.
? Half-life of a first order reaction with k = 0.00231 per min
+ 300 min
- 900 min
- 240 min
- 270 min
! 0.693/k.
? Rate constant of a first order reaction with half-life 5 min
+ 0.1386 per min
- 0.11088 per min
- 0.4158 per min
- 0.15246 per min
! 0.693/t.
? Rate constant of a first order reaction with half-life 10 min
- 0.03465 per min
+ 0.0693 per min
- 0.2079 per min
- 0.08663 per min
! 0.693/t.
? Rate constant of a first order reaction with half-life 20 min
- 0.02772 per min
- 0.04331 per min
+ 0.03465 per min
- 0.03812 per min
! 0.693/t.
? Rate constant of a first order reaction with half-life 30 min
+ 0.0231 per min
- 0.01155 per min
- 0.02887 per min
- 0.0693 per min
! 0.693/t.
? Rate constant of a first order reaction with half-life 60 min
- 0.01039 per min
+ 0.01155 per min
- 0.03465 per min
- 0.01444 per min
! 0.693/t.
? Rate constant of a first order reaction with half-life 100 min
+ 0.00693 per min
- 0.00554 per min
- 0.02079 per min
- 0.00762 per min
! 0.693/t.
? Fraction left after 20 min for a first order reaction of half-life 10 min
- 0.225
+ 0.25
- 0.275
- 0.75
! (1/2)^(t/t_half).
? Fraction left after 30 min for a first order reaction of half-life 10 min
- 0.1562
+ 0.125
- 0.375
- 0.1
! (1/2)^(t/t_half).
? Fraction left after 15 min for a first order reaction of half-life 5 min
- 0.0625
- 0.1125
+ 0.125
- 0.375
! (1/2)^(t/t_half).
? Fraction left after 40 min for a first order reaction of half-life 20 min
- 0.5
- 0.125
- 0.3125
+ 0.25
! (1/2)^(t/t_half).
? Fraction left after 60 min for a first order reaction of half-life 30 min
+ 0.25
- 0.5
- 0.3125
- 0.275
! (1/2)^(t/t_half).
? Fraction left after 25 min for a first order reaction of half-life 5 min
- 0.025
+ 0.0312
- 0.0344
- 0.0938
! (1/2)^(t/t_half).
? First order k = 0.01 per min. Fraction left after 100 min
+ 0.3679
- 0.7358
- 0.4047
- 0.4598
! e^(-kt).
? First order k = 0.05 per min. Fraction left after 20 min
- 0.7358
- 0.1839
+ 0.3679
- 0.3311
! e^(-kt).
? First order k = 0.02 per min. Fraction left after 50 min
- 0.1839
+ 0.3679
- 1.1036
- 0.2943
! e^(-kt).
? First order k = 0.1 per min. Fraction left after 10 min
- 0.4047
- 0.2943
- 1.1036
+ 0.3679
! e^(-kt).
? First order k = 0.03 per min. Fraction left after 30 min
- 0.5082
- 1.2197
- 0.4472
+ 0.4066
! e^(-kt).
? Zero order: [A]0 = 1 M, k = 0.1 M/min. Concentration after 5 min
- 1.5 M
- 1 M
- 0.25 M
+ 0.5 M
! [A]0 - kt.
? Zero order: [A]0 = 2 M, k = 0.05 M/min. Concentration after 10 min
+ 1.5 M
- 1.875 M
- 3 M
- 1.65 M
! [A]0 - kt.
? Zero order: [A]0 = 0.5 M, k = 0.02 M/min. Concentration after 20 min
+ 0.1 M
- 0.09 M
- 0.08 M
- 0.2 M
! [A]0 - kt.
? Zero order: [A]0 = 1 M, k = 0.2 M/min. Concentration after 3 min
+ 0.4 M
- 0.32 M
- 1.2 M
- 0.36 M
! [A]0 - kt.
? Ea = 50 kJ/mol. Ratio k2/k1 for 300 K to 310 K
+ 1.91
- 2.1
- 3.82
- 1.72
! e^(Ea/R (1/T1 - 1/T2)).
? Ea = 80 kJ/mol. Ratio k2/k1 for 300 K to 310 K
+ 2.81
- 8.44
- 1.41
- 5.63
! e^(Ea/R (1/T1 - 1/T2)).
? Ea = 100 kJ/mol. Ratio k2/k1 for 300 K to 350 K
+ 307.22
- 245.78
- 921.67
- 153.61
! e^(Ea/R (1/T1 - 1/T2)).
? Ea = 60 kJ/mol. Ratio k2/k1 for 298 K to 308 K
- 1.76
- 2.74
+ 2.2
- 4.39
! e^(Ea/R (1/T1 - 1/T2)).
? Ea = 40 kJ/mol. Ratio k2/k1 for 300 K to 320 K
- 5.45
+ 2.72
- 3
- 2.45
! e^(Ea/R (1/T1 - 1/T2)).
? Rate = k [A]^2 [B]^1. Doubling both concentrations multiplies the rate by
- 4
- 3
+ 8
- 16
! 2^(a + b).
? Rate = k [A]^1 [B]^2. Doubling both concentrations multiplies the rate by
- 3
+ 8
- 4
- 16
! 2^(a + b).
? Rate = k [A]^2 [B]^2. Doubling both concentrations multiplies the rate by
+ 16
- 4
- 8
- 32
! 2^(a + b).
? Rate = k [A]^3 [B]^1. Doubling both concentrations multiplies the rate by
- 4
+ 16
- 8
- 32
! 2^(a + b).
? For an ideal gas with C_v = 12.47 J/(mol K), C_p is
+ 20.784 J/(mol K)
- 16.627 J/(mol K)
- 22.862 J/(mol K)
- 62.352 J/(mol K)
! Cv + R.
? For an ideal gas with C_v = 20.8 J/(mol K), C_p is
+ 29.114 J/(mol K)
- 26.203 J/(mol K)
- 36.392 J/(mol K)
- 58.228 J/(mol K)
! Cv + R.
? For an ideal gas with C_v = 29.1 J/(mol K), C_p is
- 46.767 J/(mol K)
- 33.673 J/(mol K)
- 29.931 J/(mol K)
+ 37.414 J/(mol K)
! Cv + R.
? For an ideal gas with C_v = 12.5 J/(mol K), C_p is
+ 20.814 J/(mol K)
- 62.442 J/(mol K)
- 18.733 J/(mol K)
- 41.628 J/(mol K)
! Cv + R.
? For an ideal gas with C_v = 25 J/(mol K), C_p is
- 36.645 J/(mol K)
- 99.942 J/(mol K)
+ 33.314 J/(mol K)
- 41.642 J/(mol K)
! Cv + R.
? Heat at constant volume for 1 mol heated by 50 K with Cv = 12.47 J/(mol K)
+ 623.5 J
- 1870.5 J
- 561.1 J
- 311.8 J
! n Cv DT.
? Heat at constant volume for 2 mol heated by 100 K with Cv = 20.8 J/(mol K)
- 8320 J
+ 4160 J
- 4576 J
- 3744 J
! n Cv DT.
? Heat at constant volume for 0.5 mol heated by 200 K with Cv = 12.47 J/(mol K)
+ 1247 J
- 1122.3 J
- 3741 J
- 997.6 J
! n Cv DT.
? Heat at constant volume for 3 mol heated by 30 K with Cv = 20.8 J/(mol K)
- 5616 J
+ 1872 J
- 2340 J
- 3744 J
! n Cv DT.
? Heat at constant volume for 1 mol heated by 10 K with Cv = 29.1 J/(mol K)
- 363.8 J
+ 291 J
- 232.8 J
- 320.1 J
! n Cv DT.
? Difference of two enthalpies -285.8 and -241.8 kJ
- -22 kJ
+ -44 kJ
- -48.4 kJ
- -132 kJ
! Subtract.
? Difference of two enthalpies -393.5 and -110.5 kJ
- -226.4 kJ
- -566 kJ
+ -283 kJ
- -254.7 kJ
! Subtract.
? Difference of two enthalpies -890 and -802 kJ
- -176 kJ
- -264 kJ
- -79.2 kJ
+ -88 kJ
! Subtract.
? Difference of two enthalpies -92 and -46 kJ
- -92 kJ
- -41.4 kJ
+ -46 kJ
- -23 kJ
! Subtract.
? First order k = 0.0693 per min. Time for 50% completion
- 5 min
+ 10 min
- 9 min
- 11 min
! 0.693/k.
? First order k = 0.0231 per min. Time for 50% completion
- 90 min
- 27 min
+ 30 min
- 37.5 min
! 0.693/k.
? First order k = 0.0462 per min. Time for 50% completion
- 18.8 min
- 45 min
- 7.5 min
+ 15 min
! 0.693/k.
? DG for a spontaneous process is
- zero
- positive
- infinite
+ negative
! Criterion.
? Enthalpy change at constant pressure equals
- work done
+ heat absorbed
- entropy
- internal energy
! q_p = DH.
? Half-life of a first order reaction depends on
- volume
+ only k
- pressure
- initial concentration
! 0.693/k.
? A catalyst changes
- DG
+ activation energy
- K
- DH
! Alternate path.
? Order of reaction is determined
+ experimentally
- from molecularity
- from the equation
- from stoichiometry
! Rate law.
? Entropy of a perfect crystal at 0 K is
- infinite
+ zero
- one
- maximum
! Third law.
? What is enthalpy?
- k = A e^(-Ea/RT)
+ H = U + PV
- s^-1
- 0.693/k, independent of concentration
! Answer: H = U + PV.
? What is the relation between DH and DU?
- Zero
- 0.693/k, independent of concentration
- [A]0/(2k)
+ DH = DU + Dn_g R T
! Answer: DH = DU + Dn_g R T.
? What is entropy?
+ A measure of the disorder of a system
- [A]0/(2k)
- Zero
- s^-1
! Answer: A measure of the disorder of a system.
? What is Gibbs energy?
- [A]0/(2k)
- 0.693/k, independent of concentration
- k = A e^(-Ea/RT)
+ G = H - T S
! Answer: G = H - T S.
? What is DG at equilibrium?
+ Zero
- H = U + PV
- DH = DU + Dn_g R T
- A measure of the disorder of a system
! Answer: Zero.
? What is the relation between DG0 and K?
- 0.693/k, independent of concentration
- s^-1
- The number of species colliding in an elementary step
+ DG0 = -R T ln K
! Answer: DG0 = -R T ln K.
? What is the order of a reaction?
+ The sum of the powers of the concentration terms in the rate law
- The slowest step of a reaction mechanism
- 0.693/k, independent of concentration
- A measure of the disorder of a system
! Answer: The sum of the powers of the concentration terms in the rate law.
? What is molecularity?
- A measure of the disorder of a system
- DG0 = -R T ln K
- 0.693/k, independent of concentration
+ The number of species colliding in an elementary step
! Answer: The number of species colliding in an elementary step.
? What is the unit of k for a first order reaction?
- G = H - T S
+ s^-1
- H = U + PV
- Zero
! Answer: s^-1.
? What is the half-life of a first order reaction?
- k = A e^(-Ea/RT)
- The minimum extra energy that reactants must have to form products
+ 0.693/k, independent of concentration
- A measure of the disorder of a system
! Answer: 0.693/k, independent of concentration.
? What is the half-life of a zero order reaction?
- DH = DU + Dn_g R T
+ [A]0/(2k)
- k = A e^(-Ea/RT)
- DG0 = -R T ln K
! Answer: [A]0/(2k).
? What is the Arrhenius equation?
- DG0 = -R T ln K
- 0.693/k, independent of concentration
+ k = A e^(-Ea/RT)
- H = U + PV
! Answer: k = A e^(-Ea/RT).
? What is activation energy?
- The slowest step of a reaction mechanism
- The number of species colliding in an elementary step
+ The minimum extra energy that reactants must have to form products
- 0.693/k, independent of concentration
! Answer: The minimum extra energy that reactants must have to form products.
? What is the rate determining step?
+ The slowest step of a reaction mechanism
- The minimum extra energy that reactants must have to form products
- The sum of the powers of the concentration terms in the rate law
- [A]0/(2k)
! Answer: The slowest step of a reaction mechanism.
? DU = 0 kJ and Dn_g = 0 at 300 K. DH in kJ (R = 8.314)
- -304.988 kJ
- -52.494 kJ
- 204.988 kJ
+ 0 kJ
! Answer: 0 kJ.
? DH = 30 kJ, DS = 0.1 kJ/K at 300 K. DG in kJ
- -10 kJ
- 400 K
- -70 kJ
+ 0 kJ
! Answer: 0 kJ.
? DG0 = 0 kJ at 300 K. log K (R = 8.314)
- 3.48
- -1.74
+ 0
- 0.88
! Answer: 0.
@visual
formula | JEE Advanced: thermodynamics and chemical kinetics | key formula
@problems
P: A first order reaction has k = 0.0693 per minute. Find the half-life.
A: 10 min.
R: 1 | 0.693/k
R: 1 | 10 min
