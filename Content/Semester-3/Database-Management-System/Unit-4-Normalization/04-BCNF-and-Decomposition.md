# BCNF, lossless join and dependency preservation
minutes: 35
yt: BCNF Boyce Codd normal form decomposition
yt: lossless join decomposition dependency preserving
@study
## Boyce-Codd Normal Form (BCNF)
A relation is in BCNF if for **every** non-trivial FD `X → Y`, X is a **super key**. It is stricter than 3NF because 3NF also allows the case "Y is prime".

### Example where 3NF is not BCNF
R(Student, Course, Instructor) with
- {Student, Course} → Instructor (a student gets one instructor per course)
- Instructor → Course (each instructor teaches only one course)

Keys: {Student, Course} and {Student, Instructor}. All attributes are prime, so R is in 3NF. But in `Instructor → Course`, Instructor is not a super key, so it is **not in BCNF** and the course for an instructor is stored repeatedly.

### BCNF decomposition algorithm
While some relation R has an FD `X → Y` violating BCNF: replace R by `R1 = X ∪ Y` and `R2 = R − (Y − X)`.
For the example: R1(Instructor, Course) and R2(Student, Instructor). Both are in BCNF.

## Properties of a good decomposition
Decomposing R into R1 and R2 should be:
1. **Lossless join:** joining R1 and R2 gives back exactly R (no spurious tuples).
2. **Dependency preserving:** every FD of R can be checked within the smaller tables without joining them.

### Test for lossless binary decomposition
R1 and R2 give a lossless join if the common attributes form a key of at least one of them: `(R1 ∩ R2) → R1` or `(R1 ∩ R2) → R2` follows from F.

Example: R(A,B,C), F = {A → B}.
- Decompose into R1(A,B), R2(A,C): R1 ∩ R2 = A, and A → B so A is a key of R1. **Lossless.**
- Decompose into R1(A,B), R2(B,C): R1 ∩ R2 = B, and B is a key of neither. **Lossy**: joining can create false rows.

### Dependency preservation
Example: R(A,B,C), F = {A → B, B → C}, decomposition R1(A,B), R2(A,C). The projection gives A → B in R1 and A → C in R2. B → C cannot be derived from these, so the decomposition is **lossless but not dependency preserving**.

## Where BCNF and 3NF differ
- A lossless, dependency-preserving decomposition into **3NF** always exists.
- A lossless decomposition into **BCNF** always exists, but it may **not preserve all dependencies** (as in the Student/Course/Instructor example, where {Student, Course} → Instructor is lost).
Practical design usually aims for 3NF or BCNF, and sometimes **denormalises** on purpose to make reads faster.

> BCNF: every determinant is a candidate key.
@qa
Q: When is a relation in BCNF?
A: When, for every non-trivial functional dependency X → Y, X is a super key.
Q: How is BCNF stricter than 3NF?
A: 3NF allows an FD X → A where A is prime even if X is not a super key. BCNF does not allow that exception.
Q: What does lossless join decomposition mean?
A: The natural join of the decomposed relations reproduces exactly the original relation with no extra or missing tuples.
Q: What is the lossless test for decomposing R into R1 and R2?
A: The common attributes R1 ∩ R2 must be a key of R1 or of R2.
Q: Why might we stop at 3NF instead of BCNF?
A: BCNF decomposition can lose dependency preservation, and 3NF can always keep it.
@quiz
? A relation is in BCNF if every non-trivial FD has a left side that is
- a prime attribute
+ a super key
- a foreign key
- a single attribute
! BCNF requires every determinant to be a super key.
? Every relation in BCNF is also in
- 1NF only
+ 3NF
- 4NF
- 5NF
! BCNF is stronger than 3NF.
? R(A,B,C) with A → B decomposed into (A,B) and (B,C) is
- lossless
+ lossy
- in BCNF
- dependency preserving and lossless
! The common attribute B is a key of neither relation.
? A decomposition that lets us check all original FDs without joins is
- lossless
+ dependency preserving
- redundant
- denormalised
! That is the definition of dependency preservation.
? Which decomposition is always possible while preserving dependencies?
- BCNF
+ 3NF
- 4NF
- 5NF
! The 3NF synthesis algorithm guarantees both properties.

@visual
compare | 3NF and BCNF | 3NF=A dependency X to Y is allowed if X is a superkey or Y is a prime attribute~Can keep all dependencies~May keep some redundancy; BCNF=Every dependency needs X to be a superkey~Removes more redundancy~May lose a dependency in decomposition

@problems
## Moderate
P: State the condition for a relation to be in BCNF. Why is every BCNF relation also in 3NF?
A: A relation is in BCNF if for every non-trivial functional dependency X to Y, X is a superkey. 3NF allows an extra case (Y is a prime attribute); BCNF removes it, so any BCNF relation satisfies the 3NF condition.
R: 2 | BCNF condition
R: 2 | BCNF is stricter than 3NF
## High
P: R(Student, Course, Teacher) with FDs (Student, Course) to Teacher and Teacher to Course. Find the candidate keys. Is R in 3NF? In BCNF?
A: Candidate keys: (Student, Course) and (Student, Teacher). In 3NF: in Teacher to Course, Course is a prime attribute (part of a key). Not in BCNF: Teacher is not a superkey.
R: 2 | Both candidate keys
R: 2 | 3NF with the prime attribute reason
R: 1 | Not BCNF because Teacher is not a superkey
## Advanced
P: Decompose the same relation into BCNF. Is it lossless? Is it dependency preserving? State the lossless-join test.
A: R1(Teacher, Course) and R2(Student, Teacher). The common attribute Teacher is a key of R1, so the decomposition is lossless (R1 intersect R2 determines R1).
It is not dependency preserving: (Student, Course) to Teacher cannot be checked within one table.
Lossless test: for decomposition R1, R2 of R, the common attributes must determine all of R1 or all of R2.
R: 2 | Correct BCNF tables
R: 2 | Lossless with the key argument
R: 1 | Dependency lost
