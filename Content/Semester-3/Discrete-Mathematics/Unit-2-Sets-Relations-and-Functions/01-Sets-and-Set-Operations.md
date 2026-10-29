# Sets and set operations
minutes: 30
yt: sets discrete mathematics operations power set cardinality
yt: inclusion exclusion principle
@study
A **set** is an unordered collection of distinct objects (elements). Notation: A = {1, 2, 3}; x ∈ A means x belongs to A.

## Describing sets
Roster form {2, 4, 6}, set-builder {x | x is even and 0 < x < 7}. Special sets: ℕ, ℤ, ℚ, ℝ; the **empty set** ∅; the **universal set** U.

## Relations between sets
- **Subset** A ⊆ B: every element of A is in B. **Proper subset** A ⊂ B if also A ≠ B.
- **Equal:** A ⊆ B and B ⊆ A.
- **Cardinality** |A|: number of elements.
- **Power set** P(A): set of all subsets of A. |P(A)| = 2^|A|. For A = {a, b}: P(A) = {∅, {a}, {b}, {a,b}}.

## Operations
- Union A ∪ B, intersection A ∩ B, difference A − B, complement A', symmetric difference A ⊕ B = (A − B) ∪ (B − A).
- Cartesian product A × B = {(a, b) | a ∈ A, b ∈ B}; |A × B| = |A|·|B|.
Disjoint sets have A ∩ B = ∅.

## Set identities
Commutative, associative, distributive (A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)), identity (A ∪ ∅ = A), complement (A ∪ A' = U), **De Morgan** ((A ∪ B)' = A' ∩ B'), absorption (A ∪ (A ∩ B) = A). These mirror the laws of logic with ∪ ↔ ∨, ∩ ↔ ∧.

## Inclusion-exclusion
|A ∪ B| = |A| + |B| − |A ∩ B|
|A ∪ B ∪ C| = |A| + |B| + |C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|.
Example: among integers 1 to 100, how many are divisible by 2, 3 or 5? 50 + 33 + 20 − 16 − 10 − 6 + 3 = **74** (checked by program).

## Multisets and fuzzy sets (brief)
A multiset allows repeats ({a, a, b}). A fuzzy set gives partial membership values between 0 and 1, used in AI.

## Countability
A set is **countable** if it is finite or can be listed like ℕ. ℤ and ℚ are countable; ℝ is **uncountable** (Cantor's diagonal argument).

> |P(A)| = 2^|A|, and inclusion-exclusion corrects for double counting.
@qa
Q: What is the power set of {1,2,3} and how many elements does it have?
A: It is the set of all subsets of {1,2,3}, with 2^3 = 8 elements, including ∅ and the set itself.
Q: What is A × B?
A: The set of all ordered pairs (a, b) with a in A and b in B. Its size is |A|·|B|.
Q: State the inclusion-exclusion principle for two sets.
A: |A ∪ B| = |A| + |B| − |A ∩ B|.
Q: Difference between ⊂ and ⊆?
A: ⊆ allows equality; ⊂ means a proper subset where A ≠ B.
Q: Is the set of real numbers countable?
A: No. Cantor's diagonal argument shows ℝ is uncountable, whereas ℤ and ℚ are countable.
@quiz
? If |A| = 4, |P(A)| equals
- 8
+ 16
- 4
- 24
! 2^4 = 16.
? |A ∪ B| equals
- |A| + |B|
+ |A| + |B| − |A ∩ B|
- |A| − |B|
- |A||B|
! Subtract the double counted part.
? (A ∪ B)' equals
+ A' ∩ B'
- A' ∪ B'
- A ∩ B
- A − B
! De Morgan for sets.
? If |A| = 3 and |B| = 5 then |A × B| is
- 8
+ 15
- 2
- 125
! Product of cardinalities.
? Which set is uncountable?
- ℤ
- ℚ
+ ℝ
- ℕ
! Cantor showed ℝ cannot be listed.

@visual
venn | Two overlapping sets | Set A; Set B; A and B together

@problems
## Moderate
P: A = {1, 2, 3, 4} and B = {3, 4, 5}. Find A union B, A intersection B, A minus B, the symmetric difference and the number of subsets of A.
A: A union B = {1, 2, 3, 4, 5}. A intersection B = {3, 4}. A minus B = {1, 2}. Symmetric difference = {1, 2, 5}. A has 4 elements, so it has 2^4 = 16 subsets.
R: 3 | Four set results
R: 1 | 16 subsets
## High
P: In a class of 60 students, 35 like Python, 28 like Java and 10 like both. How many like at least one and how many like neither?
A: |P union J| = 35 + 28 - 10 = 53 students like at least one. Neither = 60 - 53 = 7.
R: 3 | Inclusion-exclusion 53
R: 1 | Neither is 7
## Advanced
P: In a group of 100 people, 50 like A, 40 like B, 30 like C, 20 like A and B, 15 like A and C, 10 like B and C, and 5 like all three. How many like at least one? Write the power set of {a, b, c}.
A: |A u B u C| = 50 + 40 + 30 - 20 - 15 - 10 + 5 = 80.
Power set of {a, b, c}: {}, {a}, {b}, {c}, {a,b}, {a,c}, {b,c}, {a,b,c}. That is 2^3 = 8 subsets.
R: 3 | 80 with inclusion-exclusion
R: 2 | Power set with 8 elements
