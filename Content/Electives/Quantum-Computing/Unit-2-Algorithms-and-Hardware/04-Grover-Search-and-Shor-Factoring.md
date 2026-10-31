# Grover search and Shor factoring
minutes: 30
yt: grover algorithm shor algorithm explained
@study
## Grover's algorithm
Searches an unsorted list of N items in about **(pi/4) sqrt(N)** steps instead of N/2 on average: a *quadratic* speed-up. For N = 1,000,000 that is about **785** iterations. Each iteration flips the sign of the target (oracle) then **amplifies** it by reflecting about the mean.
## Shor's algorithm
Factors large integers in polynomial time using **period finding** (quantum Fourier transform). Example N = 15, a = 7: powers of 7 mod 15 are 7, 4, 13, 1, so the **period r = 4**. Then gcd(7^2 - 1, 15) = gcd(48, 15) = **3** and gcd(7^2 + 1, 15) = gcd(50, 15) = **5**, so 15 = 3 x 5. A big enough error-corrected quantum computer would break **RSA** and elliptic-curve cryptography, which is why **post-quantum cryptography** is being standardised.
- Other algorithms: **Deutsch-Jozsa** (shows a clear quantum advantage on a toy problem), **quantum phase estimation**, **HHL** (linear systems), **VQE/QAOA** (variational, for chemistry and optimisation).
```python
import math
print(math.floor(math.pi / 4 * math.sqrt(1e6)))                   # 785
print([pow(7, k, 15) for k in (1, 2, 3, 4)], math.gcd(48, 15), math.gcd(50, 15))   # [7, 4, 13, 1] 3 5
```
## Hindi saransh
Grover: N vastuon mein khoj ke liye lagbhag (pi/4) sqrt(N) charan (N = 10 lakh par 785). Shor: avadhi (period) dhoondhkar badi sankhya ke gunankhand nikalta hai (15 = 3 x 5); isse RSA ko khatra hai.
> Grover gives a quadratic speed-up; Shor gives an exponential one for factoring.
@qa
Q: How many steps does Grover's algorithm need for N items?
A: About (pi/4) sqrt(N).
Q: What does Shor's algorithm do?
A: Finds the period of a modular function with a quantum Fourier transform, which yields the factors of an integer.
Q: Why does Shor threaten RSA?
A: RSA's security rests on factoring being hard; Shor factors efficiently on a large quantum computer.
Q: What is the period of 7^k mod 15?
A: 4 (the sequence 7, 4, 13, 1 repeats).
@quiz
? Grover iterations for N = 1,000,000 are about
- 1000
+ 785
- 500,000
- 10
! (pi/4) x 1000.
? Shor's algorithm is used for
- sorting
+ factoring integers
- compression
- searching lists
! Period finding.
? The period of 7 mod 15 is
- 2
- 3
+ 4
- 5
! 7, 4, 13, 1.
? Grover's speed-up is
- exponential
+ quadratic
- none
- linear
! Square root.
@visual
compare | Grover vs Shor | Grover=Unstructured search~About (pi/4) sqrt(N) steps~Quadratic speed-up; Shor=Factoring~Period finding with QFT~Exponential speed-up
@problems
## Moderate
P: Estimate Grover iterations for N = 1,000,000.
A: (pi/4) x 1000 = about 785.
R: 1 | Formula
R: 1 | 785
## High
P: Use Shor's idea on N = 15 with a = 7 to find the factors.
A: Period r = 4; gcd(48, 15) = 3 and gcd(50, 15) = 5.
R: 2 | Period 4
R: 1 | Factors 3 and 5
## Advanced
P: Compare the impact of Grover and Shor on cryptography.
A: Grover halves the effective key length of symmetric keys (use AES-256). Shor breaks RSA and elliptic-curve keys entirely, so migration to post-quantum schemes is needed.
R: 2 | Grover effect
R: 2 | Shor effect
