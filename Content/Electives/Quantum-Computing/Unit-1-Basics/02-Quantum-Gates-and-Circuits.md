# Quantum gates and circuits
minutes: 25
yt: quantum gates hadamard cnot explained
@study
Quantum gates are **unitary** matrices (reversible; they preserve total probability).
- **X (NOT):** swaps |0> and |1>. **Z:** flips the sign of |1>. **H (Hadamard):** makes superposition, H|0> = (|0> + |1>)/sqrt(2); applying H twice returns the original state (H x H = identity). **CNOT:** flips the target qubit if the control is 1. **Phase gates (S, T)** and rotations.
- A circuit reads left to right: gates, then **measurement**. Quantum operations are **reversible**, so there is **no cloning** of unknown states (no-cloning theorem).
- **Universal gate set:** for example H, T and CNOT can approximate any operation.
```python
import numpy as np
H = np.array([[1, 1], [1, -1]]) / np.sqrt(2)
zero = np.array([1, 0])
print((H @ zero).round(3), (H @ H @ zero).round(3))   # [0.707 0.707] [1. 0.]
```
Two Hadamards in a row bring |0> back to |0>, which is interference in action.
## Hindi saransh
H gate superposition banata hai: H|0> = (|0> + |1>)/sqrt(2). Do baar H lagane par wapas |0>. CNOT do qubit ko jodta hai. Gate unitary hote hain, isliye ulte ho sakte hain; no-cloning theorem ke karan copy nahi ho sakta.
> Every quantum gate is reversible; measurement is the irreversible step.
@qa
Q: What does the Hadamard gate do to |0>?
A: It creates the equal superposition (|0> + |1>)/sqrt(2).
Q: What happens after applying H twice?
A: The original state returns, because H x H = identity.
Q: What does CNOT do?
A: Flips the target qubit when the control qubit is 1.
Q: What does the no-cloning theorem state?
A: An unknown quantum state cannot be copied exactly.
@quiz
? H|0> gives probabilities
- 100% / 0%
+ 50% / 50%
- 25% / 75%
- 0% / 100%
! Equal superposition.
? H applied twice to |0> gives
+ |0>
- |1>
- an entangled pair
- noise
! H is its own inverse.
? Quantum gates are
- irreversible
+ unitary and reversible
- random
- classical only
! They preserve probability.
? CNOT acts on
- one qubit
+ two qubits
- three qubits
- none
! Control and target.
@visual
sequence | A tiny circuit | Qubit starts in |0>; Hadamard gate; Hadamard gate again; Measure: always 0
@problems
## Moderate
P: What is H|0>?
A: (|0> + |1>)/sqrt(2).
R: 1 | Superposition
R: 1 | Amplitudes
## High
P: Show that H applied twice returns |0>.
A: H x H = I, so H(H|0>) = |0>; amplitudes of |1> cancel by interference.
R: 2 | H x H = I
R: 1 | Result
## Advanced
P: Why must quantum gates be unitary?
A: Total probability must stay 1 and the operation must be reversible; unitary matrices satisfy U†U = I.
R: 2 | Probability preserved
R: 1 | Reversible
