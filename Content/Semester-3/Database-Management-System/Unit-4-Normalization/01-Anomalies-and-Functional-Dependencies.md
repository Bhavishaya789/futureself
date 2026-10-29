# Anomalies and functional dependencies
minutes: 35
yt: functional dependency DBMS Armstrong axioms attribute closure
yt: insertion deletion update anomaly normalization
@study
**Normalization** is the process of organising tables to reduce redundancy and avoid anomalies. It is guided by **functional dependencies**.

## Why redundancy hurts: anomalies
Consider one table `StudentCourse(roll, name, course, instructor, room)` where each row repeats student and instructor details.
- **Insertion anomaly:** you cannot record a new course until a student enrols in it.
- **Deletion anomaly:** deleting the only student of a course also deletes the fact that the course and its instructor exist.
- **Update anomaly:** changing an instructor's room needs many rows to be updated; missing one makes the data inconsistent.

## Functional dependency (FD)
`X → Y` (X determines Y) means: whenever two tuples have the same X value, they must have the same Y value. Example: `roll → name`, because one roll number belongs to one student. An FD is a property of the **meaning** of the data, not of one particular instance.
- **Trivial FD:** `Y ⊆ X`, such as `{roll, name} → name`.
- **Non-trivial:** `Y` is not a subset of `X`.
- **Full dependency:** Y depends on all of X, not on any proper subset.
- **Partial dependency:** Y depends on part of a composite key.
- **Transitive dependency:** `X → Y` and `Y → Z` give `X → Z` through a non-key Y.

## Armstrong's axioms
1. **Reflexivity:** if Y ⊆ X then X → Y.
2. **Augmentation:** if X → Y then XZ → YZ.
3. **Transitivity:** if X → Y and Y → Z then X → Z.

Derived rules: **Union** (X → Y, X → Z ⇒ X → YZ), **Decomposition** (X → YZ ⇒ X → Y and X → Z), **Pseudotransitivity** (X → Y, WY → Z ⇒ WX → Z). The axioms are **sound** (they derive only valid FDs) and **complete** (they derive every implied FD).

## Closure of an attribute set
`X+` is the set of all attributes determined by X. Algorithm: start with X+ = X; repeat: if some FD `A → B` has A ⊆ X+, add B; stop when nothing changes.

Example: R(A, B, C, D, E) with F = {A → B, B → C, CD → E}.
- {A}+ : A → B gives B; B → C gives C. So {A}+ = {A, B, C}. D is missing, so CD → E cannot fire.
- {A, D}+ : start {A, D}; add B, then C; now C and D are present so add E. {A, D}+ = {A, B, C, D, E}, so **AD is a super key**.

## Uses of closure
- Test whether `X → Y` follows from F: check Y ⊆ X+.
- Find keys: X is a super key if X+ is all attributes.
- Compare two FD sets: F and G are **equivalent** if each FD of one is implied by the other.

> Normalization removes anomalies by splitting tables, using FDs as the guide.
@qa
Q: What is a functional dependency?
A: X → Y means that any two rows that agree on X must also agree on Y, so X determines Y. It comes from the meaning of the data.
Q: Name the three anomalies caused by redundancy.
A: Insertion, deletion and update anomalies.
Q: State Armstrong's axioms.
A: Reflexivity (if Y ⊆ X then X → Y), augmentation (X → Y implies XZ → YZ) and transitivity (X → Y and Y → Z imply X → Z).
Q: How do you test whether X is a super key?
A: Compute the closure X+. If it contains every attribute of the relation, X is a super key.
Q: What is a trivial functional dependency?
A: One where the right side is a subset of the left side, such as {roll, name} → name.
@quiz
? If roll → name and roll → dept, then roll → {name, dept} follows by the
+ union rule
- reflexive rule
- augmentation rule only
- complement rule
! The union rule combines FDs with the same left side.
? Given R(A,B,C,D) with A → B and B → C, the closure of {A} is
- {A}
- {A, B}
+ {A, B, C}
- {A, B, C, D}
! A gives B, B gives C. D is not determined.
? Which FD is trivial?
- A → B
+ AB → A
- B → AC
- C → D
! The right side A is contained in the left side AB.
? An anomaly that appears when deleting a row loses unrelated facts is called
- insertion anomaly
- update anomaly
+ deletion anomaly
- join anomaly
! Deleting the last row that mentions a fact removes the fact.
? Armstrong's axioms are
- sound only
- complete only
+ sound and complete
- neither
! They derive exactly the FDs that are implied.

@visual
steps | Three anomalies caused by redundancy | Insertion anomaly: cannot record a fact without unrelated data; Deletion anomaly: deleting one fact also removes another; Update anomaly: one fact changed in some rows but not others

@problems
## Moderate
P: Table Enrol(StudentID, StudentName, CourseID, CourseName). Give an example of an insertion, a deletion and an update anomaly.
A: Insertion: a new course cannot be recorded until a student enrols in it (StudentID would be NULL, part of the key). Deletion: if the only student of a course withdraws, the course name is lost. Update: if a course is renamed, every row for that course must change; missing one leaves inconsistent names.
R: 2 | Insertion and deletion anomalies
R: 2 | Update anomaly
## High
P: State Armstrong's axioms. Given A to B and B to C, derive A to C and name the rule you used.
A: Reflexivity: if Y is a subset of X then X determines Y. Augmentation: if X determines Y then XZ determines YZ. Transitivity: if X determines Y and Y determines Z then X determines Z.
A to B and B to C give A to C by transitivity.
R: 3 | Three axioms stated
R: 2 | Derivation using transitivity
## Advanced
P: R(A,B,C,D,E) with F = {A to B, BC to D, D to E}. Compute the closure of A and the closure of AC. Is AC a candidate key?
A: A+ = {A, B} (A to B; nothing else follows because BC is needed for D).
(AC)+: start with A, C; A to B adds B; BC to D adds D; D to E adds E; so (AC)+ = {A, B, C, D, E}, all attributes.
AC is a super key. It is a candidate key because neither A+ nor C+ is the full set, so no proper subset works.
R: 2 | A+ = {A, B}
R: 2 | (AC)+ is all attributes with steps
R: 1 | Checks minimality for candidate key
