# Propositional logic, truth tables and equivalences
minutes: 35
yt: propositional logic truth table discrete mathematics
yt: logical equivalence De Morgan laws tautology contradiction
@study
**Logic** is the foundation of programming, circuits, databases and proofs.

## Propositions
A **proposition** is a declarative statement that is either true (T) or false (F). "2 + 3 = 5" is a proposition; "x + 1 = 4" and "Close the door" are not.

## Connectives
| Name | Symbol | Meaning |
| --- | --- | --- |
| Negation | ¬p | not p |
| Conjunction | p ∧ q | p and q |
| Disjunction | p ∨ q | p or q (inclusive) |
| Exclusive or | p ⊕ q | exactly one is true |
| Implication | p → q | if p then q |
| Biconditional | p ↔ q | p if and only if q |
**p → q is false only when p is true and q is false.** It is equivalent to ¬p ∨ q.
Related forms of p → q: **converse** q → p, **inverse** ¬p → ¬q, **contrapositive** ¬q → ¬p. The contrapositive is equivalent to the original; the converse and inverse are not.

## Truth table of implication and biconditional
| p | q | p → q | p ↔ q |
| --- | --- | --- | --- |
| T | T | T | T |
| T | F | F | F |
| F | T | T | F |
| F | F | T | T |

## Tautology, contradiction, contingency
- **Tautology:** always true, such as p ∨ ¬p.
- **Contradiction:** always false, such as p ∧ ¬p.
- **Contingency:** sometimes true, sometimes false.
A table with n variables has 2^n rows.

## Important equivalences
- **De Morgan:** ¬(p ∧ q) ≡ ¬p ∨ ¬q; ¬(p ∨ q) ≡ ¬p ∧ ¬q.
- **Distributive:** p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r).
- **Double negation:** ¬¬p ≡ p.
- **Absorption:** p ∨ (p ∧ q) ≡ p.
- **Implication:** p → q ≡ ¬p ∨ q ≡ ¬q → ¬p.
- **Idempotent, commutative, associative, identity, domination** laws.

## Normal forms
Every formula can be written in **DNF** (OR of ANDs) or **CNF** (AND of ORs). These are used in digital logic design and SAT solvers.

## Satisfiability
A formula is **satisfiable** if some assignment makes it true. SAT is NP-complete (see Theory of Computation).

## In code
```python
from itertools import product
def implies(p, q): return (not p) or q
print("p q  p->q  contrapositive")
for p, q in product([True, False], repeat=2):
    print(int(p), int(q), "  ", int(implies(p, q)), "    ", int(implies(not q, not p)))
```
Output:
```
p q  p->q  contrapositive
1 1    1      1
1 0    0      0
0 1    1      1
0 0    1      1
```
The two columns are identical, so the contrapositive is equivalent.

> p → q fails only when p is true and q is false.
@qa
Q: When is p → q false?
A: Only when p is true and q is false.
Q: What is the contrapositive of "if it rains, the match is cancelled"?
A: "If the match is not cancelled, then it did not rain". It is logically equivalent to the original.
Q: State De Morgan's laws.
A: ¬(p ∧ q) ≡ ¬p ∨ ¬q and ¬(p ∨ q) ≡ ¬p ∧ ¬q.
Q: What is the difference between a tautology and a contradiction?
A: A tautology is true for every assignment of truth values; a contradiction is false for every assignment.
Q: How many rows does the truth table of a formula with 4 variables have?
A: 2^4 = 16.
@quiz
? p → q is logically equivalent to
- p ∨ ¬q
+ ¬p ∨ q
- p ∧ q
- ¬p ∧ q
! An implication is true unless p is true and q false.
? ¬(p ∧ q) is equivalent to
- ¬p ∧ ¬q
+ ¬p ∨ ¬q
- p ∨ q
- p → q
! De Morgan's law.
? p ∨ ¬p is a
+ tautology
- contradiction
- contingency
- converse
! It is always true.
? The converse of p → q is
- ¬q → ¬p
- ¬p → ¬q
+ q → p
- p ↔ q
! Swap hypothesis and conclusion.
? A truth table for 3 variables has
- 3 rows
- 6 rows
+ 8 rows
- 9 rows
! 2^3 = 8.

@visual
formula | Implication p implies q | p -> q is false only when p is true and q is false ; p -> q is equivalent to (not p) or q ; The contrapositive (not q) -> (not p) always has the same truth value

@problems
## Moderate
P: Write the truth tables of p -> q and p <-> q.
A: p -> q: (T,T)=T, (T,F)=F, (F,T)=T, (F,F)=T. p <-> q: (T,T)=T, (T,F)=F, (F,T)=F, (F,F)=T. The implication is false only when the premise is true and the conclusion false; the biconditional is true when both have the same value.
R: 2 | Truth table of the implication
R: 2 | Truth table of the biconditional
## High
P: For the statement "If it rains, I stay home" write the converse, inverse and contrapositive. Which one is logically equivalent to the original?
A: Converse: If I stay home, it rains. Inverse: If it does not rain, I do not stay home. Contrapositive: If I do not stay home, it does not rain. The contrapositive is equivalent to the original; the converse and inverse are equivalent to each other but not to the original.
R: 3 | Three forms written correctly
R: 2 | Contrapositive is the equivalent one
## Advanced
P: Show with a truth table that (p AND (p -> q)) -> q is a tautology. Name the rule. Also write the negation of "I like tea and I like coffee" using De Morgan's law.
A: Rows: p=T,q=T: p->q = T, conjunction T, implication T. p=T,q=F: p->q = F, conjunction F, implication T. p=F,q=T: conjunction F, implication T. p=F,q=F: conjunction F, implication T. Every row is true, so it is a tautology: the rule is modus ponens.
De Morgan: not (A and B) = (not A) or (not B): "I do not like tea or I do not like coffee".
R: 3 | Four rows evaluated, all true
R: 1 | Modus ponens named
R: 1 | Correct De Morgan negation
