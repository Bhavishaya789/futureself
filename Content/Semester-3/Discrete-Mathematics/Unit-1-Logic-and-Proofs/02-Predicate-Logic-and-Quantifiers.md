# Predicate logic and quantifiers
minutes: 30
yt: predicate logic quantifiers universal existential discrete mathematics
yt: negation of quantified statements
@study
Propositional logic cannot say "every student has a laptop". **Predicate logic** adds variables, predicates and quantifiers.

## Predicates
A predicate P(x) is a statement involving a variable x that becomes a proposition when x is given a value. Example: P(x): "x > 3". P(5) is true, P(2) is false. The set of allowed values of x is the **domain (universe of discourse)**.

## Quantifiers
- **Universal:** ∀x P(x) means "for all x in the domain, P(x) is true". It is false if there is a counterexample.
- **Existential:** ∃x P(x) means "there exists an x with P(x)". It is true if one witness exists.
- **Uniqueness:** ∃!x P(x) means exactly one x.
Over a finite domain {x1,…,xn}: ∀x P(x) ≡ P(x1) ∧ … ∧ P(xn), ∃x P(x) ≡ P(x1) ∨ … ∨ P(xn).

## Negation rules
- ¬∀x P(x) ≡ ∃x ¬P(x)
- ¬∃x P(x) ≡ ∀x ¬P(x)
Example: "Not all birds fly" ≡ "some bird does not fly".

## Translating English
- "All students are smart": ∀x (S(x) → M(x)). Note: use → with ∀.
- "Some student is smart": ∃x (S(x) ∧ M(x)). Note: use ∧ with ∃.
Using ∀x (S(x) ∧ M(x)) would wrongly say everything is a smart student.

## Nested quantifiers
Order matters when quantifiers differ. Domain real numbers, P(x,y): x + y = 0.
- ∀x ∃y P(x,y) is **true** (choose y = −x).
- ∃y ∀x P(x,y) is **false** (no single y works for every x).
Same quantifiers can be swapped: ∀x ∀y ≡ ∀y ∀x.

## Rules of inference with quantifiers
- **Universal instantiation:** from ∀x P(x) conclude P(c).
- **Universal generalisation:** if P(c) holds for an arbitrary c then ∀x P(x).
- **Existential instantiation:** from ∃x P(x) conclude P(c) for some new constant c.
- **Existential generalisation:** from P(c) conclude ∃x P(x).

## Use in computing
SQL queries (EXISTS, NOT EXISTS, relational calculus), program specifications ("for all inputs, the output is sorted") and AI knowledge bases.

> ∀ goes with →, ∃ goes with ∧. Negation flips the quantifier.
@qa
Q: What is a predicate?
A: A statement with one or more variables that becomes a proposition when the variables are given values from the domain.
Q: Negate "every student passed".
A: There exists a student who did not pass: ¬∀x P(x) ≡ ∃x ¬P(x).
Q: How do you symbolise "Some students are toppers"?
A: ∃x (Student(x) ∧ Topper(x)).
Q: Why does the order of ∀ and ∃ matter?
A: ∀x∃y means y may depend on x, whereas ∃y∀x needs one y that works for all x. For x + y = 0 over the reals, the first is true and the second is false.
Q: What is existential generalisation?
A: From P(c) for a specific element c, infer that ∃x P(x).
@quiz
? ¬∃x P(x) is equivalent to
- ∃x ¬P(x)
+ ∀x ¬P(x)
- ∀x P(x)
- P(c)
! No x satisfies P means all fail P.
? "All cats are mammals" is written
- ∀x (Cat(x) ∧ Mammal(x))
+ ∀x (Cat(x) → Mammal(x))
- ∃x (Cat(x) → Mammal(x))
- ∃x (Cat(x) ∧ Mammal(x))
! Universal statements use implication.
? Over the reals ∃y ∀x (x + y = 0) is
- true
+ false
- undefined
- a predicate
! No single y cancels all x.
? ∃x P(x) over a finite domain equals
- AND of all P(xi)
+ OR of all P(xi)
- NOT of one
- XOR
! Only one witness is needed.
? A counterexample disproves
+ ∀x P(x)
- ∃x P(x)
- p ∨ q
- ∃!x P(x) only
! One failing element breaks a universal claim.

@visual
compare | Reading quantifiers | For all x (universal)=True when every x in the domain satisfies it~One counterexample makes it false~Usually paired with an implication; There exists x (existential)=True when at least one x satisfies it~One example makes it true~Usually paired with an AND

@problems
## Moderate
P: Let S(x) mean x is a student and P(x) mean x passes. Write in logic: (a) every student passes, (b) some student fails.
A: (a) for all x (S(x) -> P(x)). (b) there exists x (S(x) AND NOT P(x)). A universal statement uses an implication and an existential statement uses a conjunction.
R: 2 | Universal with implication
R: 2 | Existential with AND
## High
P: Negate: for all x there exists y such that x + y = 0 (domain: integers). Write the negation and say whether the original is true.
A: Negation: there exists x such that for all y, x + y is not 0. The original is true, because for any x take y = -x. So the negation is false.
R: 2 | Quantifiers flipped correctly
R: 2 | Original statement is true with y = -x
R: 1 | Negation is false
## Advanced
P: Domain {1, 2, 3} and P(x, y) means x < y. Evaluate: (a) for all x there exists y P(x, y), (b) there exists y for all x P(x, y), (c) there exists x there exists y P(x, y). Why does the order of quantifiers matter?
A: (a) False: x = 3 has no larger y. (b) False: no y is greater than every x (including itself). (c) True: x = 1, y = 2. Order matters because "for all x there exists y" lets y depend on x, while "there exists y for all x" needs a single y that works for every x.
R: 2 | (a) and (b) false with reasons
R: 1 | (c) true with example
R: 2 | Explains dependence of y on x
