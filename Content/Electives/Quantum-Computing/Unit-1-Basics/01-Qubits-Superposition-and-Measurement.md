# Qubits, superposition and measurement
minutes: 25
yt: quantum computing for beginners qubit superposition
@study
A classical **bit** is 0 or 1. A **qubit** is a quantum state **|psi> = a|0> + b|1>** with complex amplitudes a and b where |a|^2 + |b|^2 = 1. This is **superposition**. When measured, you get 0 with probability |a|^2 and 1 with probability |b|^2, and the state collapses to the result.
- Example: a = b = 1/sqrt(2) gives 50% 0 and 50% 1. If a = 0.6 and b = 0.8, then 0.36 + 0.64 = 1, so P(0) = **36%** and P(1) = **64%**.
- **n qubits** need 2^n amplitudes to describe: 10 qubits -> **1024**; 50 qubits -> **1,125,899,906,842,624** (about 1.1 x 10^15), which is why classical simulation becomes impossible.
- **Bloch sphere:** a pure qubit state is a point on a sphere; |0> is the north pole, |1> the south pole.
- Superposition is *not* "trying all answers at once and reading them all": measurement gives one answer, so algorithms must make wrong answers cancel and right ones reinforce (**interference**).
```python
import numpy as np
psi = np.array([0.6, 0.8])
print(np.abs(psi) ** 2, 2 ** 10, 2 ** 50)   # [0.36 0.64] 1024 1125899906842624
```
## Hindi saransh
Qubit = a|0> + b|1>, |a|^2 + |b|^2 = 1. Naap (measurement) par 0 ki sambhavna |a|^2 hoti hai. n qubit ke liye 2^n amplitude chahiye. Quantum algorithm interference se sahi uttar ko badhata hai.
> Superposition does not mean you can read all answers; you get one measured result.
@qa
Q: What is superposition?
A: A qubit being in a combination a|0> + b|1> of basis states until it is measured.
Q: What happens when you measure a qubit?
A: You get 0 or 1 with probabilities |a|^2 and |b|^2, and the state collapses.
Q: How many amplitudes does a 10-qubit state have?
A: 2^10 = 1024.
Q: What is interference used for in quantum algorithms?
A: Wrong answers' amplitudes cancel and the right answer's amplitude is boosted.
@quiz
? For a = 0.6 and b = 0.8, P(1) is
- 36%
+ 64%
- 80%
- 100%
! 0.8 squared.
? Amplitudes needed for 10 qubits
- 10
- 100
+ 1024
- 2048
! 2^10.
? After measurement the qubit
- stays in superposition
+ collapses to 0 or 1
- becomes entangled
- disappears
! Collapse.
? Quantum speed-up mainly comes from
- trying all answers and reading them all
+ interference of amplitudes
- faster clocks
- more memory
! Superposition alone is not enough.
@visual
formula | A qubit | |psi> = a|0> + b|1> ; |a|^2 + |b|^2 = 1
bars | Measurement probabilities (a = 0.6, b = 0.8) | P(0)=36;P(1)=64
@problems
## Moderate
P: A qubit has a = 0.6 and b = 0.8. Find P(0) and P(1).
A: 0.36 and 0.64.
R: 1 | P(0)
R: 1 | P(1)
## High
P: How many complex amplitudes describe a 20-qubit state?
A: 2^20 = 1,048,576.
R: 1 | 2^n
R: 1 | Value
## Advanced
P: Explain why superposition alone does not give a quantum speed-up.
A: Measurement returns only one outcome. Algorithms use interference to cancel wrong amplitudes and enlarge the correct one before measuring.
R: 2 | One outcome
R: 2 | Interference
