# Relations, equivalence relations and partial orders
minutes: 40
yt: relations reflexive symmetric transitive equivalence relation
yt: partial order Hasse diagram lattice
@study
A **binary relation** R from A to B is a subset of A × B. On a single set A, R ⊆ A × A. If |A| = 3 there are 2^9 = 512 relations on A.

## Representations
Set of pairs, matrix (rows × columns of 0/1), and directed graph.

## Properties (relation on A)
- **Reflexive:** (a, a) ∈ R for all a.
- **Irreflexive:** no (a, a).
- **Symmetric:** (a,b) ∈ R ⇒ (b,a) ∈ R.
- **Antisymmetric:** (a,b) and (b,a) in R ⇒ a = b.
- **Transitive:** (a,b),(b,c) ∈ R ⇒ (a,c) ∈ R.
Examples: "≤" on ℤ is reflexive, antisymmetric, transitive. "Divides" on positive integers is reflexive, antisymmetric, transitive. "Sibling" is symmetric.

## Operations
Inverse R⁻¹, composition S∘R, powers Rⁿ, and **closures**: reflexive, symmetric, transitive closure. The transitive closure is computed by **Warshall's algorithm** in O(n³).

## Equivalence relations
Reflexive + symmetric + transitive. They **partition** the set into **equivalence classes**. Example: congruence modulo 3 on ℤ gives classes [0], [1], [2]. The number of equivalence relations on a 3-element set is the Bell number **5**.

## Partial orders
Reflexive + antisymmetric + transitive; (A, ≤) is a **poset**. Elements a, b are **comparable** if a ≤ b or b ≤ a; a **total order** has all pairs comparable.
- **Hasse diagram:** draw the order without loops and without edges implied by transitivity, with larger elements higher.
- **Maximal/minimal, greatest/least element, upper/lower bound, lub (supremum), glb (infimum).**
Example: ({1,2,3,4,6,12}, divides): minimal 1, maximal 12; 2 and 3 are incomparable; lub(2,3) = 6, glb(4,6) = 2.

## Lattices
A poset in which every pair has a lub (join) and glb (meet) is a **lattice**. The divisibility poset above and the power set under ⊆ are lattices. Boolean algebra is a complemented distributive lattice.

## Applications
Equivalence: database normalisation by functional dependencies, union-find, type equality. Partial order: task scheduling, topological sort, version history.

## Code check
```python
A = [1, 2, 3, 4, 6, 12]
div = {(a, b) for a in A for b in A if b % a == 0}
refl = all((a, a) in div for a in A)
anti = all(not ((a, b) in div and (b, a) in div) or a == b for a in A for b in A)
trans = all((a, c) in div for (a, b) in div for (b2, c) in div if b == b2)
print(refl, anti, trans, len(div))
```
Output:
```
True True True 18
```

> Equivalence relations split a set into classes; partial orders arrange it into a hierarchy.
@qa
Q: Define reflexive, symmetric and transitive relations.
A: Reflexive: every element relates to itself. Symmetric: if a relates to b then b relates to a. Transitive: if a relates to b and b to c then a relates to c.
Q: What is an equivalence relation?
A: A relation that is reflexive, symmetric and transitive; it partitions the set into equivalence classes.
Q: What is a partial order?
A: A relation that is reflexive, antisymmetric and transitive.
Q: What is a Hasse diagram?
A: A simplified drawing of a poset that omits loops and edges implied by transitivity, with direction shown by upward placement.
Q: What is the transitive closure and how is it found?
A: The smallest transitive relation containing R, computed with Warshall's algorithm.
@quiz
? "Divides" on positive integers is
- symmetric
+ a partial order
- an equivalence relation
- irreflexive
! It is reflexive, antisymmetric and transitive.
? Congruence modulo n is a(n)
- partial order
+ equivalence relation
- function
- lattice
! It splits integers into residue classes.
? Number of relations on a set with 3 elements
- 9
- 81
+ 512
- 8
! 2^(3x3) = 512.
? In the divisibility poset of {1,2,3,4,6,12}, lub(2,3) is
- 1
+ 6
- 12
- 4
! 6 is the least common multiple.
? A total order is a partial order where
- all elements are equal
+ every pair is comparable
- no pair is comparable
- the set is finite
! No incomparable pairs.

@visual
graph | Hasse diagram of divisibility on {1, 2, 3, 6} | 1-2; 1-3; 2-6; 3-6

@problems
## Moderate
P: On A = {1, 2, 3}, R = {(1,1), (2,2), (3,3), (1,2), (2,1)}. Check whether R is reflexive, symmetric and transitive. Is it an equivalence relation? List the classes.
A: Reflexive: (1,1), (2,2), (3,3) are present. Symmetric: (1,2) has (2,1). Transitive: (1,2),(2,1) gives (1,1) which is present; (2,1),(1,2) gives (2,2) which is present. So R is an equivalence relation with classes {1, 2} and {3}.
R: 3 | All three properties checked
R: 2 | Classes {1,2} and {3}
## High
P: Show that divisibility on {1, 2, 3, 4, 6, 12} is a partial order. Name the minimal and maximal elements and one pair that is incomparable.
A: Reflexive (x divides x), antisymmetric (x divides y and y divides x gives x = y) and transitive (x divides y, y divides z gives x divides z). Minimal element: 1; maximal element: 12. Incomparable pair: 2 and 3 (neither divides the other); 4 and 6 also.
R: 3 | Three properties
R: 2 | Min, max and an incomparable pair
## Advanced
P: For a set with n = 3 elements find the number of relations, reflexive relations and symmetric relations. Give the formulas.
A: Relations: 2^(n^2) = 2^9 = 512. Reflexive: the diagonal is fixed, so 2^(n^2 - n) = 2^6 = 64. Symmetric: choose the diagonal and the pairs above it freely: 2^(n(n+1)/2) = 2^6 = 64.
R: 2 | 512
R: 2 | 64 reflexive with formula
R: 1 | 64 symmetric with formula
