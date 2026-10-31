# Sets, relations and functions
minutes: 20
yt: sets relations and functions class 11
@study
## Sets
A **set** is a well-defined collection. Operations: union, intersection, difference, complement. Laws: commutative, associative, distributive, **De Morgan: (A U B)' = A' n B'** and (A n B)' = A' U B'.
**Inclusion-exclusion:** n(A U B) = n(A) + n(B) - n(A n B). Example: n(A) = 30, n(B) = 25, n(A n B) = 10 gives n(A U B) = **45**.
A set with n elements has 2^n subsets.

## Relations
A relation from A to B is a subset of A x B. If |A| = m and |B| = n there are 2^(mn) relations. A relation on a set is **reflexive**, **symmetric**, **transitive**; if all three, it is an **equivalence relation**.

## Functions
A function assigns each element of the domain exactly one element of the codomain. **One-one** (injective), **onto** (surjective), **bijective** (both). The number of functions from a set of m elements to one of n elements is n^m; the number of one-one functions is nPm.

## Hindi saransh
n(A U B) = n(A) + n(B) - n(A n B). n elements ke set ke 2^n subsets hote hain. Equivalence relation = reflexive + symmetric + transitive.

> Function: every input has exactly one output.
@qa
Q: How many subsets does a set of 4 elements have?
A: 2^4 = 16.
Q: Define an equivalence relation.
A: A relation that is reflexive, symmetric and transitive.
Q: If n(A) = 30, n(B) = 25 and n(A n B) = 10, find n(A U B).
A: 30 + 25 - 10 = 45.
Q: How many functions are there from a 3-element set to a 2-element set?
A: 2^3 = 8.
@quiz
? A set with 5 elements has how many subsets?
- 10
- 25
+ 32
- 120
! 2^5 = 32.
? n(A U B) when n(A) = 30, n(B) = 25, n(A n B) = 10 is
- 55
+ 45
- 65
- 35
! 30 + 25 - 10 = 45.
? The relation "is a factor of" on positive integers is
- symmetric
+ reflexive and transitive
- an equivalence relation
- none of these
! It is reflexive and transitive but not symmetric.
? Number of functions from {1,2,3} to {a,b} is
- 6
+ 8
- 9
- 5
! 2^3 = 8.
@visual
venn | Union and intersection | A only; A and B; B only
formula | Counting | n(A U B) = n(A) + n(B) - n(A n B) ; subsets = 2^n
@problems
## Moderate
P: In a class of 60, 30 like tea and 25 like coffee and 10 like both. How many like neither?
A: Union = 30 + 25 - 10 = 45, so neither = 60 - 45 = 15.
R: 1 | Union = 45
R: 1 | 15
## High
P: Prove or disprove that the relation R = {(a, b): a - b is divisible by 3} on the integers is an equivalence relation.
A: Reflexive: a - a = 0 is divisible by 3. Symmetric: if 3 | (a - b) then 3 | (b - a). Transitive: if 3 | (a - b) and 3 | (b - c) then 3 | (a - c). So it is an equivalence relation (congruence mod 3).
R: 1 | Reflexive
R: 1 | Symmetric
R: 1 | Transitive
## Advanced
P: How many one-one functions are there from a set of 3 elements to a set of 5 elements? How many onto functions are there from a set of 3 elements to a set of 2 elements?
A: One-one: 5P3 = 60. Onto from 3 to 2: total 2^3 = 8 minus the 2 constant functions = 6.
R: 2 | 60
R: 2 | 6
