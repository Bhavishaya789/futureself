# Entanglement and Bell states
minutes: 25
yt: quantum entanglement bell state explained
@study
Two qubits are **entangled** when their joint state cannot be written as separate states. The **Bell state** (|00> + |11>)/sqrt(2) is made by H on qubit 1, then CNOT (control qubit 1, target qubit 2). Measuring gives **00 or 11, each 50%, and never 01 or 10**: the results are perfectly correlated.
- Entanglement does **not** send messages faster than light; each side sees random bits and only comparing results shows the correlation.
- **Bell inequality tests** show that no local hidden-variable theory can reproduce quantum correlations.
- Uses: **quantum teleportation** (move a state using an entangled pair plus two classical bits), **superdense coding**, **quantum key distribution** and quantum computing itself.
```python
import numpy as np
H = np.array([[1, 1], [1, -1]]) / np.sqrt(2); I = np.eye(2)
CNOT = np.array([[1,0,0,0],[0,1,0,0],[0,0,0,1],[0,0,1,0]])
state = np.array([1, 0, 0, 0])               # |00>
bell = CNOT @ np.kron(H, I) @ state
print((bell ** 2).round(2))                 # [0.5 0.  0.  0.5]
```
## Hindi saransh
Bell state (|00> + |11>)/sqrt(2): H phir CNOT lagane se banta hai. Naap par sirf 00 ya 11 (50-50). Entanglement se prakash se tez sandesh nahi bheja ja sakta.
> Entanglement gives correlated outcomes, not faster-than-light communication.
@qa
Q: How is a Bell state created?
A: Apply H to the first qubit then CNOT with it as control and the second as target.
Q: What outcomes occur when measuring a Bell pair?
A: 00 or 11, each with probability 1/2.
Q: Can entanglement send information faster than light?
A: No; each side sees random results, and the correlation shows only when they compare.
Q: What is quantum teleportation?
A: Transferring an unknown qubit state using an entangled pair and two classical bits.
@quiz
? Measuring a Bell pair (|00> + |11>)/sqrt(2) can give
- 01 and 10
+ 00 or 11
- only 00
- any of four equally
! Perfect correlation.
? Gates that create a Bell state from |00>
- X then Z
+ H then CNOT
- CNOT then X
- T then S
! Superpose then entangle.
? Entanglement allows
- faster-than-light messages
+ stronger-than-classical correlations
- cloning
- unlimited memory
! No signalling.
? Teleportation needs besides entanglement
+ two classical bits
- nothing
- a large computer
- cloning
! Classical communication is required.
@visual
flow | Making a Bell pair | Start with |00> > Hadamard on qubit 1 > CNOT (1 controls 2) > Measure: 00 or 11
bars | Bell state outcome probabilities | 00=50;01=0;10=0;11=50
@problems
## Moderate
P: What probabilities does a Bell state (|00> + |11>)/sqrt(2) give for 00, 01, 10, 11?
A: 50%, 0%, 0%, 50%.
R: 1 | 00 and 11
R: 1 | 01 and 10
## High
P: List the circuit that prepares the Bell state.
A: H on qubit 1, then CNOT with qubit 1 as control and qubit 2 as target.
R: 1 | H
R: 1 | CNOT
## Advanced
P: Explain why entanglement cannot transmit information faster than light.
A: Each party's local results are random; the correlation is visible only after they compare results over a classical channel.
R: 2 | Random local results
R: 2 | Classical comparison
