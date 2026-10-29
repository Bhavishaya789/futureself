# Functions, counting sets and the pigeonhole principle
minutes: 30
yt: functions injective surjective bijective discrete math
yt: pigeonhole principle examples
@study
A **function** f: A → B assigns each element of A (domain) exactly one element of B (codomain). The set of actual outputs is the **range (image)**.

## Types
- **One-to-one (injective):** different inputs give different outputs.
- **Onto (surjective):** every element of B is an output.
- **Bijective:** both; it has an inverse function f⁻¹.
Examples: f(x) = 2x on ℝ is bijective; f(x) = x² on ℝ is neither (f(2) = f(−2); negatives are not reached).
For finite sets: injective needs |A| ≤ |B|; surjective needs |A| ≥ |B|; bijective needs |A| = |B|.
The number of functions A → B is |B|^|A|. The number of injective ones is P(|B|, |A|); bijections between sets of size n: n!.

## Composition
(g∘f)(x) = g(f(x)). Composition is associative but not commutative. The composition of two bijections is a bijection.

## Special functions
Floor ⌊x⌋, ceiling ⌈x⌉, characteristic function, hash functions (which cannot be injective on larger domains), identity function.

## Growth of functions
f(n) = O(g(n)) if f(n) ≤ c·g(n) for large n. Order: 1 < log n < n < n log n < n² < 2ⁿ < n!. Used to analyse algorithms.

## Pigeonhole principle
If n + 1 or more objects go into n boxes, some box contains at least 2 objects.
**Generalised:** if N objects go into k boxes, some box holds at least ⌈N/k⌉.
Examples:
- Among 13 people, at least two share a birth month.
- Among 25 integers, at least ⌈25/12⌉ = 3 have the same remainder... more directly, any 5 integers contain two with the same remainder mod 4.
- In any group of 367 people two share a birthday.
- Hash tables must have **collisions** when keys outnumber slots.

## Cardinality of infinite sets
Sets have the same cardinality if there is a bijection. ℕ and ℤ have the same cardinality (countable).

> Injective: no collisions. Surjective: nothing missed. Bijective: perfect pairing.
@qa
Q: What is a bijective function?
A: A function that is both one-to-one and onto. It pairs each element of the domain with exactly one element of the codomain and has an inverse.
Q: How many functions are there from a set of 3 elements to a set of 4 elements?
A: 4^3 = 64.
Q: State the pigeonhole principle.
A: If more than n objects are placed into n boxes, at least one box contains two or more objects.
Q: Is f(x) = x² from ℝ to ℝ injective or surjective?
A: Neither: f(2) = f(−2), so it is not injective, and negative numbers are never produced, so it is not onto.
Q: Why must hash tables have collisions in general?
A: When the number of possible keys exceeds the number of table slots, the pigeonhole principle forces two keys into the same slot.
@quiz
? Number of functions from a 2-element set to a 5-element set
- 10
+ 25
- 32
- 7
! 5^2 = 25.
? A function that is onto and one-to-one is
- constant
+ bijective
- partial
- periodic
! Bijections are invertible.
? Among 367 people, at least two share a birthday because of
- induction
+ the pigeonhole principle
- De Morgan
- Warshall
! 367 people, 366 possible dates.
? If 20 objects go into 6 boxes some box has at least
- 3
+ 4
- 5
- 2
! ceil(20/6) = 4.
? Number of bijections on a 5-element set
- 25
+ 120
- 5
- 3125
! 5! = 120.

@visual
compare | Kinds of functions | One-to-one (injective)=Different inputs give different outputs~No output is used twice; Onto (surjective)=Every element of the codomain is hit~Range equals codomain; Bijective=Both one-to-one and onto~Has an inverse function

@problems
## Moderate
P: Is f: Z to Z, f(x) = 2x + 1 one-to-one? Is it onto?
A: One-to-one: if 2a + 1 = 2b + 1 then a = b, so yes. Onto: no, because the output is always odd, so an even integer like 4 has no pre-image.
R: 2 | One-to-one with proof
R: 2 | Not onto with a counter-example
## High
P: Let |A| = 3 and |B| = 4. How many functions A to B exist? How many are one-to-one? Why are there no onto functions?
A: Functions: 4^3 = 64. One-to-one: 4 x 3 x 2 = 24. No onto function exists because A has fewer elements than B, so it cannot cover all 4 elements of B.
R: 2 | 64
R: 2 | 24
R: 1 | Reason no onto
## Advanced
P: State the pigeonhole principle. Show that among any 13 people at least two share a birth month, and that among 100 people at least 9 share a birth month.
A: If n items are put in k boxes and n > k, some box holds at least two items; in general at least ceil(n / k) items. 13 people in 12 months: at least two share a month. 100 people: ceil(100 / 12) = ceil(8.33) = 9 share a month.
R: 2 | Principle stated
R: 1 | 13 people argument
R: 2 | Generalised answer 9
