# Finding candidate keys, and the canonical (minimal) cover
minutes: 35
yt: how to find candidate keys DBMS shortcut method
yt: canonical cover minimal cover functional dependencies
@study
## Finding candidate keys
1. List all attributes of R and the set of FDs F.
2. Attributes that **never appear on the right side** of any FD must be in **every** key.
3. Attributes that appear **only on the right** side are in **no** key.
4. Compute the closure of the must-have set. If it covers all attributes, that set is the only key. If not, add other attributes one at a time (or in combinations) until the closure is complete, keeping the sets **minimal**.

### Worked example
R(A, B, C, D, E), F = { AB → C, C → D, D → E, E → A }.
- B never appears on the right, so B is in every key.
- Try {A, B}: AB → C, C → D, D → E, so {A,B}+ = {A, B, C, D, E}. AB is a key.
- Because E → A, D → E, C → D: replacing A by E, D or C also works. {B,C}+, {B,D}+, {B,E}+ each give everything.
- **Candidate keys: AB, BC, BD, BE.** Prime attributes (in some key): A, B, C, D, E (all).

## Prime and non-prime attributes
A **prime** attribute belongs to at least one candidate key. A **non-prime** attribute belongs to none. These terms define 2NF and 3NF in the next lesson.

## Canonical cover (minimal cover)
A canonical cover Fc is an equivalent FD set that is as small as possible:
1. Every right side is a **single attribute**.
2. No left side contains an **extraneous attribute**.
3. No FD is **redundant** (implied by the others).

### Procedure
1. **Split** right sides: `A → BC` becomes `A → B` and `A → C`.
2. **Remove extraneous left attributes:** in `XA → B`, A is extraneous if B is in the closure of `X` under F.
3. **Remove redundant FDs:** remove `X → A` if A is still in `X+` computed without that FD.

### Worked example
F = { A → BC, B → C, A → B, AB → C }.
1. Split: A → B, A → C, B → C, A → B (duplicate), AB → C.
2. In `AB → C`: is B extraneous? Check A+ : A → B, A → C, so C is in A+. Yes, so replace by `A → C` (a duplicate).
3. Remove redundant: `A → C` follows from `A → B` and `B → C`, so delete it.

**Canonical cover: { A → B, B → C }.** A+ = {A, B, C}, so the key is A.

## Why we care
The canonical cover is the starting point for the **3NF synthesis algorithm**, and it makes checking dependency preservation simpler.

> Shortcut for keys: the attributes that appear nowhere on the right side must be in the key.
@qa
Q: Which attributes must belong to every candidate key?
A: Those that never appear on the right-hand side of any functional dependency.
Q: What is a prime attribute?
A: An attribute that is a member of at least one candidate key.
Q: When is a left-side attribute extraneous in an FD?
A: In XA → B, attribute A is extraneous if B is already in the closure of X computed with all the FDs. Then A can be dropped without changing the meaning.
Q: List the three properties of a canonical cover.
A: Single-attribute right sides, no extraneous attributes on the left, and no redundant FDs.
Q: In R(A,B,C) with A → B, B → C, what is the candidate key?
A: A. It never appears on the right side, and A+ = {A, B, C}.
@quiz
? Attributes that never appear on the right side of any FD
+ are part of every candidate key
- are part of no candidate key
- are always non-prime
- can be dropped from the relation
! They cannot be derived from others, so they must be in each key.
? The canonical cover of {A → BC, B → C, A → B, AB → C} is
- {A → B, A → C}
+ {A → B, B → C}
- {A → BC}
- {AB → C}
! A → C is redundant given A → B and B → C.
? In R(A,B,C,D,E) with AB → C, C → D, D → E, E → A, the number of candidate keys is
- 1
- 2
- 3
+ 4
! The keys are AB, BC, BD and BE.
? An attribute that belongs to some candidate key is
- non-prime
+ prime
- derived
- redundant
! Prime attributes are members of candidate keys.
? The first step in computing a canonical cover is to
+ split right sides into single attributes
- find candidate keys
- compute joins
- add transitive FDs
! Single-attribute right sides make the other steps easier.

@visual
steps | Finding a canonical cover | Split every right side into single attributes; Remove extraneous attributes from left sides; Remove redundant dependencies; What is left is the canonical cover

@problems
## Moderate
P: R(A,B,C,D) with F = {A to B, B to C, C to D}. Find all candidate keys.
A: A appears only on left sides and never on a right side, so A must be in every key. A+ = {A, B, C, D}, which is everything, so A is a candidate key. No other key exists because every key must contain A and A alone is minimal. Answer: A.
R: 2 | Notes that A must be in every key
R: 2 | A+ is the full set so A is the only candidate key
## High
P: R(A,B,C,D) with F = {AB to C, C to D, D to A}. Find all candidate keys.
A: B never appears on a right side, so B is in every key. B alone: B+ = {B}. AB: AB to C, C to D, so {A,B,C,D}: key. BC: C to D, D to A, then AB to C: all attributes: key. BD: D to A, AB to C, C to D: all attributes: key. Candidate keys: AB, BC and BD.
R: 2 | B must be in every key
R: 3 | Three keys AB, BC and BD with closures
## Advanced
P: Find a canonical cover of F = {A to BC, B to C, A to B, AB to C}.
A: Split right sides: A to B, A to C, B to C, A to B (duplicate), AB to C.
AB to C: B is extraneous because A+ already contains C (A to B, B to C), so it reduces to A to C.
A to C is redundant because A to B and B to C imply it.
Canonical cover: {A to B, B to C}.
R: 2 | Right sides split and duplicates removed
R: 2 | Extraneous attribute B removed
R: 1 | A to C removed as redundant, final cover correct
