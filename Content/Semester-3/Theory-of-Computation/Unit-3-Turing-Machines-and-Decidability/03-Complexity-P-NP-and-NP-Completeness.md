# Complexity: P, NP and NP-completeness
minutes: 30
yt: P NP NP-complete NP-hard explained
yt: cook levin theorem SAT reduction
@study
Decidable does not mean practical. Complexity theory classifies decidable problems by the **time** (or space) needed as input size n grows.

## Class P
Problems solvable by a **deterministic** TM in polynomial time O(n^k). Examples: sorting, shortest path, matching, primality (AKS), linear programming.

## Class NP
Problems whose "yes" answers can be **verified** in polynomial time given a certificate; equivalently solvable by a **non-deterministic** TM in polynomial time. Examples:
- **SAT:** is there an assignment satisfying a Boolean formula?
- **Hamiltonian path / TSP (decision)**
- **Subset sum, Clique, Vertex cover, Graph colouring (k ≥ 3)**
P ⊆ NP. Whether **P = NP** is the biggest open question (Clay Millennium Prize, 1,000,000 USD).

## Reductions and completeness
A **polynomial-time reduction** A ≤p B converts instances of A into instances of B in polynomial time.
- **NP-hard:** every problem in NP reduces to it (may be outside NP).
- **NP-complete:** NP-hard **and** in NP.
**Cook-Levin theorem (1971):** SAT is NP-complete. Then other problems are shown NP-complete by reducing from SAT: SAT ≤p 3-SAT ≤p Clique ≤p Vertex Cover, etc.
If any NP-complete problem is solved in polynomial time, then P = NP.

## Quick comparison of growth
For n = 50: n² = 2,500 but 2^n ≈ 1.1 × 10^15 steps. Exponential algorithms become impossible quickly.
| Class | Meaning |
| --- | --- |
| P | Quickly solvable |
| NP | Quickly verifiable |
| NP-complete | Hardest in NP |
| NP-hard | At least as hard as NP-complete |
| PSPACE | Polynomial memory |

## Coping with NP-hard problems
Approximation algorithms, heuristics (genetic algorithms, simulated annealing), special cases, randomised algorithms, and exponential-time algorithms with pruning (branch and bound).

## Space classes
L ⊆ NL ⊆ P ⊆ NP ⊆ PSPACE = NPSPACE ⊆ EXPTIME (Savitch's theorem gives PSPACE = NPSPACE).

> Verifying is easy for NP; finding may be hard. NP-complete problems are all equally hard to each other.
@qa
Q: Define the classes P and NP.
A: P is the set of decision problems solvable in polynomial time by a deterministic machine. NP is the set solvable in polynomial time by a non-deterministic machine, i.e. whose solutions are verifiable in polynomial time.
Q: What is an NP-complete problem?
A: A problem that is in NP and to which every problem in NP can be reduced in polynomial time.
Q: What does the Cook-Levin theorem state?
A: The Boolean satisfiability problem SAT is NP-complete.
Q: Is every NP-hard problem in NP?
A: No. NP-hard problems need not be decision problems or have verifiable certificates; the halting problem is NP-hard but not in NP.
Q: What happens if an NP-complete problem is shown to be in P?
A: Then P = NP.
@quiz
? Problems whose solutions can be verified in polynomial time form
- P
+ NP
- PSPACE only
- EXPTIME only
! NP = efficient verification.
? The first problem shown NP-complete was
- Clique
- TSP
+ SAT
- Halting
! Cook-Levin theorem.
? P ⊆ NP is
+ true
- false
- unknown
- only for graphs
! A deterministic poly-time solver is also a verifier.
? NP-complete means
- in P
+ in NP and NP-hard
- undecidable
- regular
! Both conditions are required.
? Which is a method for NP-hard problems?
- Ignore them
+ Approximation algorithms
- Pumping lemma
- Minimisation
! They give near-optimal answers quickly.

@visual
layers | Complexity classes (assuming P is not equal to NP) | NP-complete: the hardest problems in NP, such as SAT and 3-SAT; NP: solutions can be checked in polynomial time; P: solutions can be found in polynomial time

@problems
## Moderate
P: Define the classes P and NP. Is P a subset of NP?
A: P is the set of decision problems solvable by a deterministic machine in polynomial time. NP is the set of decision problems whose solutions can be verified in polynomial time (equivalently solved by a nondeterministic machine in polynomial time). Yes, P is a subset of NP, because anything solvable quickly can be verified quickly. Whether P = NP is open.
R: 2 | P and NP defined
R: 2 | P is a subset of NP
## High
P: What does NP-complete mean? What follows if one NP-complete problem is solved in polynomial time? Name the first problem proved NP-complete and two others.
A: A problem is NP-complete if it is in NP and every problem in NP reduces to it in polynomial time. If one NP-complete problem is in P then all of NP is in P, so P = NP. SAT was the first (Cook-Levin theorem). Others: 3-SAT, Clique, Vertex Cover, Hamiltonian Cycle, Subset Sum.
R: 2 | Definition
R: 2 | P = NP consequence
R: 1 | Cook-Levin and two more problems
## Advanced
P: State the relation between Vertex Cover and Independent Set. For the path a-b-c-d-e (edges ab, bc, cd, de) show a vertex cover of size 2 and the matching independent set.
A: A set S is an independent set if and only if its complement V minus S is a vertex cover, so one problem reduces to the other in polynomial time.
Vertex cover {b, d} covers ab, bc, cd and de. Its complement {a, c, e} is an independent set because no two of them are adjacent.
R: 2 | Complement relation
R: 2 | Vertex cover {b, d} verified
R: 1 | Independent set {a, c, e}
