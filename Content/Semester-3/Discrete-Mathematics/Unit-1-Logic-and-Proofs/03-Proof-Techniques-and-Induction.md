# Proof techniques and mathematical induction
minutes: 40
yt: proof techniques direct contradiction contrapositive induction
yt: mathematical induction sum of first n numbers proof
@study
A **proof** is a valid argument establishing the truth of a statement.

## Direct proof
Assume p, show q through logical steps. Example: if n is even then n² is even. Let n = 2k; then n² = 4k² = 2(2k²), which is even.

## Proof by contrapositive
To prove p → q, prove ¬q → ¬p. Example: if n² is even then n is even. Contrapositive: if n is odd (n = 2k+1) then n² = 4k² + 4k + 1 is odd. ✓.

## Proof by contradiction
Assume the negation and derive a contradiction. Classic: **√2 is irrational.** Suppose √2 = a/b in lowest terms. Then a² = 2b², so a is even, a = 2c, giving 4c² = 2b², so b² = 2c² and b is even. Both even contradicts "lowest terms".

## Proof by cases, existence and counterexample
Split into exhaustive cases; give a constructive or non-constructive existence proof; disprove a universal claim with one counterexample (e.g. "n² + n + 41 is prime for all n" fails at n = 40, where it equals 1681 = 41²).

## Mathematical induction
To prove P(n) for all n ≥ n0:
1. **Basis:** show P(n0).
2. **Inductive step:** assume P(k) (the inductive hypothesis) and prove P(k+1).

### Example 1: 1 + 2 + … + n = n(n+1)/2
Basis n = 1: 1 = 1·2/2 ✓. Step: 1 + … + k + (k+1) = k(k+1)/2 + (k+1) = (k+1)(k+2)/2 ✓.

### Example 2: 2^n > n for n ≥ 1... more usefully, 2^n ≥ n + 1
Basis n = 0: 1 ≥ 1. Step: 2^(k+1) = 2·2^k ≥ 2(k+1) ≥ k + 2 for k ≥ 0 ✓.

### Example 3: n³ − n is divisible by 3
Basis n = 1: 0 ✓. (k+1)³ − (k+1) = (k³ − k) + 3(k² + k), both terms divisible by 3 ✓.

## Strong induction
Assume P(j) for **all** j ≤ k, then prove P(k+1). Used for statements like "every integer ≥ 2 is a product of primes".

## Structural induction and recursion
To prove properties of recursively defined sets (lists, trees, formulas), prove the base case and that constructors preserve the property.

## Common mistakes
Forgetting the basis, assuming what is to be proved, and "proving" by examples (examples never prove a universal claim).

## Quick numerical sanity checks
```python
print(all(sum(range(1, n + 1)) == n * (n + 1) // 2 for n in range(1, 200)))
print(all((n**3 - n) % 3 == 0 for n in range(1, 500)))
print(40**2 + 40 + 41, 41 * 41)
```
Output:
```
True
True
1681 1681
```
Checks are not proofs, but they catch wrong formulas.

> Induction is a row of dominoes: the first falls (basis) and each knocks the next (step).
@qa
Q: What are the two steps of mathematical induction?
A: The basis step proves the statement for the first value, and the inductive step proves that if it is true for k then it is true for k+1.
Q: How does proof by contradiction work?
A: Assume the statement is false, reason logically to reach an impossibility, and conclude the statement must be true.
Q: Prove that the sum of the first n odd numbers is n².
A: Basis: 1 = 1². Step: if 1+3+…+(2k−1) = k², adding 2k+1 gives k² + 2k + 1 = (k+1)².
Q: What is the difference between ordinary and strong induction?
A: Ordinary induction assumes only P(k); strong induction assumes P(j) for all j up to k.
Q: Can examples prove a universal statement?
A: No. Any number of examples cannot prove ∀; one counterexample can disprove it.
@quiz
? The first step of induction is the
+ basis step
- hypothesis step
- final step
- conclusion
! P(n0) must be shown first.
? The √2 irrationality proof uses
- induction
+ contradiction
- direct proof
- counterexample
! Assume √2 = a/b in lowest terms and derive a contradiction.
? The contrapositive of p → q is
- q → p
- ¬p → ¬q
+ ¬q → ¬p
- p ∧ ¬q
! It is logically equivalent.
? Sum of first n natural numbers equals
- n²
+ n(n+1)/2
- n(n−1)
- 2n
! Proved by induction above.
? n² + n + 41 at n = 40 is
- prime
+ composite (41²)
- 40
- 0
! It equals 1681 = 41 x 41, a counterexample to "always prime".

@visual
steps | Proof by mathematical induction | Base case: show P(1) is true; Inductive hypothesis: assume P(k) is true for some k; Inductive step: use it to prove P(k+1); Conclusion: P(n) is true for every n

@problems
## Moderate
P: Prove by induction that 1 + 2 + ... + n = n(n + 1) / 2 for all n >= 1.
A: Base: n = 1: left side 1, right side 1 x 2 / 2 = 1. True. Hypothesis: 1 + ... + k = k(k + 1) / 2. Step: 1 + ... + k + (k + 1) = k(k + 1) / 2 + (k + 1) = (k + 1)(k + 2) / 2, which is the formula for n = k + 1. Hence it holds for all n >= 1.
R: 1 | Base case
R: 1 | Hypothesis stated
R: 2 | Correct inductive step algebra
R: 1 | Conclusion
## High
P: Prove by induction that 1 + 3 + 5 + ... + (2n - 1) = n^2.
A: Base: n = 1: 1 = 1^2. Hypothesis: the sum of the first k odd numbers is k^2. Step: sum for k + 1 = k^2 + (2(k + 1) - 1) = k^2 + 2k + 1 = (k + 1)^2. So it holds for all n.
R: 1 | Base case
R: 3 | Inductive step using the hypothesis
R: 1 | Conclusion
## Advanced
P: (a) Prove by induction that 3^n - 1 is divisible by 2 for all n >= 1. (b) Prove by contradiction that the square root of 2 is irrational.
A: (a) Base: 3 - 1 = 2, divisible by 2. Step: 3^(k+1) - 1 = 3 x 3^k - 1 = 3(3^k - 1) + 2. By the hypothesis 3^k - 1 is a multiple of 2, so the whole expression is a multiple of 2.
(b) Assume sqrt 2 = a/b in lowest terms. Then a^2 = 2b^2, so a^2 is even, hence a is even, a = 2c. Then 4c^2 = 2b^2, so b^2 = 2c^2 and b is even too. Both a and b are even, contradicting lowest terms. So sqrt 2 is irrational.
R: 2 | Part (a) with the step 3(3^k - 1) + 2
R: 3 | Part (b) contradiction argument
