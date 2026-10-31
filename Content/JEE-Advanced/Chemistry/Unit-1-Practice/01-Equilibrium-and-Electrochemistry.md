# Equilibrium and electrochemistry (exam-style practice)
minutes: 25
yt: jee advanced nernst equation ionic equilibrium
@study
Exam-style practice, **not official past papers**. Constants used: 298 K, 0.0592 V for 2.303 RT/F.
**Weak acid:** for HA with Ka and concentration C (small dissociation), [H+] = sqrt(Ka C). For 0.01 M acetic acid, Ka = 1.8 x 10⁻⁵: [H+] = sqrt(1.8 x 10⁻⁷) = 4.24 x 10⁻⁴ M, so **pH = 3.37**.
**Nernst equation (298 K):** E = E° - (0.0592/n) log Q. Daniell cell Zn + Cu²⁺ -> Zn²⁺ + Cu has E° = 1.10 V and n = 2. If [Zn²⁺] = 0.01 M and [Cu²⁺] = 1 M, Q = 0.01, so E = 1.10 - 0.0296 x (-2) = **1.159 V (about 1.16 V)**.
**Free energy:** delta G = -n F E; at equilibrium E = 0 and log K = nE°/0.0592.
```python
import math
print(round(-math.log10(math.sqrt(1.8e-5 * 0.01)), 2), round(1.10 - 0.0296 * math.log10(0.01), 4))   # 3.37 1.1592
```
## Hindi saransh
Kamzor amla ke liye [H+] = sqrt(Ka C). Nernst: E = E° - (0.0592/n) log Q.
> At equilibrium the cell potential is zero and delta G is zero.
@qa
Q: pH of 0.01 M acetic acid (Ka = 1.8 x 10⁻⁵)?
A: About 3.37.
Q: Nernst equation at 298 K?
A: E = E° - (0.0592/n) log Q.
Q: EMF of the Daniell cell when [Zn²⁺] = 0.01 M and [Cu²⁺] = 1 M?
A: About 1.16 V.
Q: Relation between delta G and E?
A: delta G = -n F E.
@quiz
? pH of 0.01 M acetic acid with Ka = 1.8 x 10⁻⁵ is about
- 2.0
+ 3.37
- 4.74
- 5.0
! sqrt(Ka C) = 4.24 x 10⁻⁴.
? EMF of Daniell cell with [Zn²⁺] = 0.01 M and [Cu²⁺] = 1 M
- 1.04 V
- 1.10 V
+ 1.16 V
- 2.20 V
! Q = 0.01 lowers the log term, raising E.
? At equilibrium the cell potential is
+ zero
- E°
- infinite
- negative
! Reaction has no net driving force.
? The Nernst factor 0.0592 is at
- 273 K
+ 298 K
- 373 K
- 0 K
! 2.303 RT/F at 25 C.
@visual
formula | Nernst | E = E0 - (0.0592 / n) log Q ; delta G = - n F E
@problems
## Moderate
P: Find [H+] of 0.01 M acetic acid with Ka = 1.8 x 10⁻⁵.
A: sqrt(1.8 x 10⁻⁵ x 0.01) = 4.24 x 10⁻⁴ M.
R: 1 | Formula
R: 1 | 4.24 x 10⁻⁴
## High
P: Calculate the EMF of a Daniell cell with [Zn²⁺] = 0.01 M and [Cu²⁺] = 1 M.
A: E = 1.10 - 0.0296 log 0.01 = 1.159 V.
R: 2 | Q and Nernst
R: 1 | 1.16 V
## Advanced
P: What does a cell potential of zero tell you about the reaction?
A: The reaction is at equilibrium: Q = K, delta G = 0 and there is no net current.
R: 2 | Equilibrium
R: 2 | delta G = 0
