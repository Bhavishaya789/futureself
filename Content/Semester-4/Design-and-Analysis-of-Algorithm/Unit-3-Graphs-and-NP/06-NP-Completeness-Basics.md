# NP-completeness basics
minutes: 25
yt: P NP NP-complete NP-hard explained
yt: polynomial time reduction SAT
@study
## Easy and hard problems
A problem is in class **P** if it can be **solved** in polynomial time (sorting, shortest path, MST). It is in **NP** if a proposed solution can be **verified** in polynomial time (is this Sudoku solution right? does this tour have cost <= k?). Every problem in P is in NP. Whether P = NP is the biggest open question in computer science.

## Reductions
Problem A **reduces** to B (A <=p B) if any instance of A can be turned into an instance of B in polynomial time. If we can solve B quickly, we can solve A quickly. So B is at least as hard as A.

## NP-hard and NP-complete
- **NP-hard:** at least as hard as every problem in NP (need not be in NP).
- **NP-complete:** in NP **and** NP-hard. If any one NP-complete problem has a polynomial algorithm, then P = NP.
The first NP-complete problem is **SAT** (Cook-Levin theorem, 1971). A new problem is proved NP-complete by (1) showing it is in NP and (2) reducing a known NP-complete problem to it.

## Well-known NP-complete problems
3-SAT, Clique, Vertex cover, Hamiltonian cycle, Travelling salesman (decision version), Subset sum, 0/1 knapsack (decision), Graph colouring.

## Dealing with NP-complete problems
Approximation algorithms (for example a 2-approximation for vertex cover), heuristics, backtracking and branch and bound for small inputs, special cases that are easy.

## Hindi saransh
P wo problems jo polynomial time mein hal hote hain. NP wo jinka answer polynomial time mein verify ho sakta hai. NP-complete matlab NP mein ho aur NP-hard bhi ho. Agar ek NP-complete problem poly time mein hal ho jaye to P = NP.

> Easy to check does not mean easy to solve.
@qa
Q: What is the difference between P and NP?
A: P is the set of decision problems solvable in polynomial time. NP is the set whose solutions can be verified in polynomial time. P is a subset of NP.
Q: What does NP-complete mean?
A: A problem that is in NP and to which every problem in NP can be reduced in polynomial time (NP-hard).
Q: How do you prove a new problem is NP-complete?
A: Show it is in NP (give a polynomial verifier), then give a polynomial reduction from a known NP-complete problem to it.
Q: Name the first problem proved NP-complete.
A: Boolean satisfiability (SAT), by the Cook-Levin theorem.
Q: Why do we care if a problem is NP-complete?
A: It tells us not to expect an efficient exact algorithm for all inputs, so we turn to approximation, heuristics or special cases.
@quiz
? Every problem in P is also in
- NP-hard only
+ NP
- nothing
- EXPTIME only
! A polynomial solver can also act as a polynomial verifier.
? The first problem proved NP-complete was
- Travelling salesman
- Clique
+ SAT
- Knapsack
! Cook and Levin, 1971.
? A problem that is NP-hard but not in NP
- cannot exist
+ can exist (for example the halting problem)
- must be in P
- is NP-complete
! NP-hard only means at least as hard; it need not be a decision problem in NP.
? To prove problem X is NP-complete we reduce
- X to a known NP-complete problem
+ a known NP-complete problem to X
- X to a problem in P
- nothing, it is automatic
! The reduction goes from the known hard problem to the new one.
? If an NP-complete problem is solved in polynomial time then
- P = EXPTIME
+ P = NP
- NP = coNP only
- nothing follows
! Every NP problem reduces to it, so all of NP becomes polynomial.
@visual
venn | If P is not equal to NP | P; NP; NP-complete
layers | Complexity classes | P: solvable in polynomial time; NP: verifiable in polynomial time; NP-complete: hardest problems in NP; NP-hard: at least as hard as NP-complete
@problems
## Moderate
P: Define P, NP, NP-hard and NP-complete in one line each.
A: P: solvable in polynomial time. NP: solutions verifiable in polynomial time. NP-hard: at least as hard as every problem in NP. NP-complete: in NP and NP-hard.
R: 2 | P and NP correct
R: 2 | NP-hard and NP-complete correct
## High
P: Explain why the decision version of the Travelling Salesman Problem (is there a tour of cost <= k?) is in NP.
A: Given a proposed tour, we can check in linear time that it visits every city exactly once and add its edge costs to see whether the total is at most k. A polynomial-time verifier means the problem is in NP.
R: 2 | Identifies the certificate as the tour
R: 2 | Verification is polynomial
## Advanced
P: Outline how you would prove that Clique is NP-complete.
A: Step 1: Clique is in NP because a set of k vertices can be checked in polynomial time to see that every pair is adjacent. Step 2: reduce a known NP-complete problem, 3-SAT, to Clique in polynomial time: make a vertex for each literal occurrence in each clause, join two vertices from different clauses unless they are contradictory (x and not x). The formula is satisfiable if and only if the graph has a clique of size equal to the number of clauses. Since 3-SAT <=p Clique and Clique is in NP, Clique is NP-complete.
R: 2 | Shows Clique is in NP
R: 3 | Reduction from a known NP-complete problem with the construction
R: 1 | Concludes NP-complete
