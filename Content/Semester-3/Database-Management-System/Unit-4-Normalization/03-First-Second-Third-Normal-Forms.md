# 1NF, 2NF and 3NF
minutes: 35
yt: normalization 1NF 2NF 3NF with examples
yt: partial dependency transitive dependency normal forms
@study
A **normal form** is a rule about table design. Higher normal forms remove more redundancy.

## First normal form (1NF)
Every attribute holds a single **atomic** value, and there are no repeating groups. A table with a cell `phones = "98xx, 97xx"` violates 1NF. Fix: one row per phone number, or a separate `Phone` table.

## Second normal form (2NF)
The relation is in 1NF and **no non-prime attribute is partially dependent on a candidate key**. This matters only when a key is composite.

Example: `Enroll(roll, cid, name, grade)` with key `(roll, cid)` and FDs `(roll, cid) → grade`, `roll → name`.
`name` depends only on `roll`, part of the key: a **partial dependency**, so it is not in 2NF.
Decompose:
- `Student(roll, name)` key roll
- `Enroll(roll, cid, grade)` key (roll, cid)

## Third normal form (3NF)
The relation is in 2NF and has **no transitive dependency** of a non-prime attribute on a key. Formally, for every non-trivial FD `X → A`, at least one of these holds:
1. X is a super key, or
2. A is a prime attribute.

Example: `Student(roll, name, dept, hod)` with `roll → dept` and `dept → hod`. Then `roll → hod` is transitive through `dept`, a non-key. Decompose:
- `Student(roll, name, dept)`
- `Dept(dept, hod)`

## Putting them together
| Normal form | Removes | Test |
| --- | --- | --- |
| 1NF | Repeating groups, non-atomic values | All values atomic |
| 2NF | Partial dependencies | No non-prime attribute depends on part of a key |
| 3NF | Transitive dependencies | Every FD X → A: X super key or A prime |

Each normal form includes the one before it: 3NF implies 2NF implies 1NF.

## How to find the highest normal form of a relation
1. Find all candidate keys, and the prime and non-prime attributes.
2. Check every FD for partial dependency of non-prime attributes on part of a key (2NF violation).
3. Check every FD: if the left side is not a super key and the right side is not prime, 3NF is violated.
4. If 3NF holds, check BCNF (next lesson).

## Quick example
R(A, B, C, D) with keys AB and F = {AB → CD, B → C}. `B → C`: C is non-prime and B is only part of the key AB. That is a partial dependency, so the relation is in **1NF only**.

## 3NF synthesis
A dependency-preserving, lossless decomposition into 3NF always exists: take a canonical cover, make a table for each FD `X → Y` with attributes `XY`, merge tables with the same key, and add a table containing a candidate key if none of the tables contains one.

> Memorise: "The key, the whole key, and nothing but the key."
@qa
Q: When is a relation in 2NF?
A: When it is in 1NF and no non-prime attribute depends on a proper part of a candidate key (no partial dependency).
Q: What condition makes an FD X → A acceptable in 3NF?
A: Either X is a super key or A is a prime attribute.
Q: Can a relation with a single-attribute primary key violate 2NF?
A: No, partial dependency needs a composite key. A relation in 1NF with all keys simple is automatically in 2NF.
Q: What is a transitive dependency?
A: A non-key attribute that depends on the key only through another non-key attribute, like roll → dept and dept → hod giving roll → hod.
Q: Does 3NF always preserve dependencies?
A: Yes. A lossless and dependency-preserving 3NF decomposition always exists (the synthesis algorithm).
@quiz
? A column holding "9876, 9123" in one cell violates
+ 1NF
- 2NF
- 3NF
- BCNF
! 1NF requires atomic values.
? 2NF removes
- repeating groups
+ partial dependencies
- transitive dependencies
- multivalued dependencies
! 2NF is about non-prime attributes depending on part of a key.
? roll → dept and dept → hod leads to a violation of
- 1NF
- 2NF
+ 3NF
- none
! hod depends on roll through the non-key dept: a transitive dependency.
? R(A,B,C,D) with key AB and FD B → C is
+ in 1NF only
- in 2NF
- in 3NF
- in BCNF
! C is non-prime and depends on part of the key B.
? Which statement is correct?
- 2NF implies 3NF
+ 3NF implies 2NF
- 3NF and 2NF are unrelated
- 1NF implies 3NF
! Each higher normal form includes the lower ones.

@visual
steps | What each normal form demands | 1NF: every cell holds one atomic value; 2NF: 1NF and no partial dependency on part of a composite key; 3NF: 2NF and no transitive dependency between non-key attributes

@problems
## Moderate
P: Why is Student(ID, Name, Phones) with Phones = '9876, 9123' not in 1NF? Show a fix.
A: A cell contains more than one value, so it is not atomic. Fix: keep one value per row, either StudentPhone(ID, Phone) as a separate table or one row per phone number.
R: 2 | Non-atomic value identified
R: 2 | Correct fix
## High
P: R(StudentID, CourseID, StudentName, Grade) with FDs (StudentID, CourseID) to Grade and StudentID to StudentName. Which normal form is violated? Decompose to 2NF.
A: StudentName depends only on part of the key (StudentID), a partial dependency, so R violates 2NF. Decompose: Student(StudentID, StudentName) and Enrollment(StudentID, CourseID, Grade).
R: 2 | Identifies partial dependency
R: 3 | Correct decomposition with keys
## Advanced
P: R(EmpID, DeptID, DeptName) with EmpID to DeptID and DeptID to DeptName. Is it in 2NF? In 3NF? Decompose it and explain how a transitive dependency creates an update anomaly.
A: The key is EmpID (single attribute), so there is no partial dependency: it is in 2NF. EmpID to DeptID to DeptName is a transitive dependency, so it is not in 3NF.
Decompose: Employee(EmpID, DeptID) and Department(DeptID, DeptName).
Anomaly: the department name is repeated for each employee; renaming a department needs many row updates, and missing one leaves inconsistent data.
R: 2 | In 2NF but not in 3NF with reason
R: 2 | Correct decomposition
R: 1 | Update anomaly explained
