# Multivalued dependencies, 4NF and 5NF
minutes: 25
yt: multivalued dependency 4NF DBMS
yt: 5NF join dependency explained
@study
## Multivalued dependency (MVD)
Suppose an employee has several skills and several languages, and these two sets are **independent**. Storing them together in `EmpInfo(emp, skill, language)` forces every skill to be paired with every language:

| emp | skill | language |
| --- | --- | --- |
| E1 | Java | English |
| E1 | Java | Hindi |
| E1 | SQL | English |
| E1 | SQL | Hindi |

This is redundant, even though the relation has no non-trivial FD and is therefore already in BCNF. The cause is the **multivalued dependency** `emp ↠ skill` (and `emp ↠ language`).

`X ↠ Y` means: for a given X value, the set of Y values is independent of the other attributes. If two tuples have the same X, then swapping their Y parts gives two more tuples that must also be present.

Every FD is also an MVD, but not conversely. An MVD is **trivial** if Y ⊆ X or X ∪ Y is all attributes.

## Fourth normal form (4NF)
A relation is in **4NF** if it is in BCNF and for every non-trivial MVD `X ↠ Y`, X is a super key.

Decomposition for the example:
- `EmpSkill(emp, skill)`
- `EmpLanguage(emp, language)`
Each has only trivial dependencies and no repeated cross products. Joining them reproduces the original table, so the decomposition is lossless.

## Fifth normal form (5NF, project-join normal form)
A relation is in 5NF if every **join dependency** is implied by its candidate keys. Join dependencies appear when a relation can be rebuilt only from three or more projections, not from two. Such cases (for example the supplier-part-project example) are rare in practice.

## Summary of the ladder
| Form | Eliminates |
| --- | --- |
| 1NF | Non-atomic values |
| 2NF | Partial dependencies |
| 3NF | Transitive dependencies |
| BCNF | Dependencies on non-super-key determinants |
| 4NF | Non-trivial multivalued dependencies |
| 5NF | Join dependencies not implied by keys |

## Denormalisation
Sometimes designers combine tables again on purpose, accepting some redundancy to avoid expensive joins in reporting systems and data warehouses. This is a deliberate trade-off after normalising, not an excuse to skip it.

> Independent multi-valued facts about the same entity belong in separate tables.
@qa
Q: What is a multivalued dependency?
A: X ↠ Y means that for each X value the set of Y values is independent of the remaining attributes. It happens when one entity has several independent sets of values.
Q: When is a relation in 4NF?
A: When it is in BCNF and every non-trivial multivalued dependency has a super key as its left side.
Q: Why is EmpInfo(emp, skill, language) in BCNF but still bad?
A: It has no non-trivial FDs, so BCNF holds, but it stores every skill-language combination, which is redundancy caused by the MVDs emp ↠ skill and emp ↠ language.
Q: How is the EmpInfo table fixed?
A: Split it into EmpSkill(emp, skill) and EmpLanguage(emp, language).
Q: What is 5NF about?
A: Join dependencies: a relation is in 5NF if every join dependency in it is implied by its candidate keys.
@quiz
? An employee has independent skills and languages. The problem is a
- partial dependency
- transitive dependency
+ multivalued dependency
- referential violation
! The two sets are independent, which is an MVD.
? 4NF is based on removing
- partial dependencies
+ non-trivial multivalued dependencies
- repeating groups
- foreign keys
! 4NF deals with MVDs whose left side is not a super key.
? Every relation in 4NF is also in
- only 1NF
+ BCNF
- 5NF always
- none
! 4NF is stronger than BCNF.
? Which normal form deals with join dependencies?
- 3NF
- BCNF
- 4NF
+ 5NF
! 5NF is project-join normal form.
? Denormalisation is done mainly to
- remove NULLs
+ speed up reads by reducing joins
- enforce keys
- save disk space
! It trades redundancy for read performance.

@visual
compare | One table with a multivalued dependency and its 4NF split | Course ->> Teacher: each course has its own set of teachers~Course ->> Book: each course has its own set of books~Teachers and books are independent; Result in 4NF=CourseTeacher(Course, Teacher)~CourseBook(Course, Book)~No more repeated combinations

@problems
## Moderate
P: Define a multivalued dependency with the example Course ->> Teacher and Course ->> Book.
A: A multivalued dependency X ->> Y means that for each value of X there is a set of values of Y, independent of the other attributes. A course can have several teachers and several books, and the choice of teacher is independent of the choice of book.
R: 2 | Definition
R: 2 | Course ->> Teacher and Book independence
## High
P: R(Course, Teacher, Book) has Course ->> Teacher and Course ->> Book. DB has 2 teachers and 3 books for the Database course. How many rows does the Database course need in R and how many after the 4NF decomposition?
A: In R every combination must appear: 2 x 3 = 6 rows. After the 4NF decomposition into CourseTeacher and CourseBook: 2 + 3 = 5 rows, and adding a book needs one row instead of one per teacher.
R: 2 | 6 rows
R: 2 | 5 rows after decomposition
R: 1 | Advantage in adding a book
## Advanced
P: Why is the relation in the previous problem already in BCNF yet still has redundancy? State when a relation is in 4NF and decompose it.
A: There is no non-trivial functional dependency, and the only key is all attributes (Course, Teacher, Book), so BCNF holds, yet the combinations repeat data.
A relation is in 4NF if for every non-trivial multivalued dependency X ->> Y, X is a superkey. Course is not a superkey, so decompose into CourseTeacher(Course, Teacher) and CourseBook(Course, Book).
R: 2 | BCNF holds because the key is all attributes
R: 2 | 4NF definition
R: 1 | Correct decomposition
