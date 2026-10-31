# Quantum error correction and hardware
minutes: 25
yt: quantum error correction explained noisy qubits
@study
Qubits are fragile: **decoherence** (loss of quantum behaviour) and gate errors limit circuit depth. **Quantum error correction (QEC)** spreads one **logical qubit** over many **physical qubits**. The simplest idea, the **3-qubit repetition code**, encodes 0 as 000 and 1 as 111; a majority vote fixes a single bit-flip. If each physical flip has probability p = 0.1, the logical error probability is 3p^2(1 - p) + p^3 = **0.028**, lower than 0.1, so encoding helps when p is small. Real codes (**surface code**, Steane code) correct both bit-flip and phase errors; practical logical qubits may need hundreds to thousands of physical qubits.
**Hardware platforms:** superconducting circuits (IBM, Google), trapped ions (IonQ, Quantinuum), photonics, neutral atoms and spin qubits. We are in the **NISQ** era (Noisy Intermediate-Scale Quantum): tens to a few hundred noisy qubits, useful for experiments but not yet for breaking RSA. **Cloud access:** IBM Quantum, Amazon Braket and Azure Quantum let students run circuits (Qiskit is a popular free library).
**Post-quantum cryptography:** NIST standardised ML-KEM (FIPS 203), ML-DSA (FIPS 204) and SLH-DSA (FIPS 205) in 2024. Quantum key distribution (BB84) is a separate physical approach.
```python
p = 0.1
print(round(3 * p**2 * (1 - p) + p**3, 3))   # 0.028
```
## Hindi saransh
Qubit nazuk hote hain (decoherence). Error correction mein ek logical qubit kai physical qubit se banta hai; 3-qubit code se 0.1 ki truti 0.028 ho jaati hai. Abhi NISQ yug hai. Post-quantum cryptography ke naye NIST standard aa chuke hain.
> Today's quantum computers are noisy; error correction needs many physical qubits per logical qubit.
@qa
Q: What is decoherence?
A: Loss of a qubit's quantum state through interaction with the environment.
Q: What is a logical qubit?
A: An error-protected qubit encoded across many physical qubits.
Q: What does NISQ stand for?
A: Noisy Intermediate-Scale Quantum.
Q: Name two quantum hardware platforms.
A: Superconducting qubits and trapped ions (also photonics, neutral atoms).
@quiz
? Logical error with p = 0.1 in the 3-qubit repetition code is
- 0.1
+ 0.028
- 0.3
- 0.001
! 3 x 0.01 x 0.9 + 0.001.
? NISQ means
- Normal Integrated Silicon Qubits
+ Noisy Intermediate-Scale Quantum
- Non-Interactive State Query
- New ISO Standard
! Today's noisy devices.
? Which is a post-quantum standard family from NIST?
- RSA-2048
+ ML-KEM (FIPS 203)
- MD5
- DES
! Designed to resist quantum attacks.
? A common qubit platform is
- vacuum tubes
+ superconducting circuits
- punch cards
- relays
! Used by IBM and Google.
@visual
layers | From physical to logical qubits | Application; Logical qubits; Error-correcting code; Physical qubits; Control electronics; Cryostat or trap
@problems
## Moderate
P: Compute the logical error of the 3-qubit repetition code when p = 0.1.
A: 3 x 0.01 x 0.9 + 0.001 = 0.028.
R: 1 | Formula
R: 1 | 0.028
## High
P: Explain why error correction does not help if p is too large.
A: If p is above the code's threshold, extra qubits add more errors than the code removes (for example p = 0.5 gives a logical error of 0.5).
R: 2 | Threshold idea
R: 1 | Example
## Advanced
P: Suggest how a company should prepare for post-quantum security.
A: Inventory cryptography, prioritise long-lived secrets, adopt NIST standards (ML-KEM, ML-DSA), use hybrid schemes and plan migration.
R: 3 | Steps
R: 1 | Priorities
