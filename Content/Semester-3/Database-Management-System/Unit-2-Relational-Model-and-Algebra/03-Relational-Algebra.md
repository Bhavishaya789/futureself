# Relational algebra
minutes: 35
yt: relational algebra DBMS select project join division
yt: relational algebra operators with examples
@study
**Relational algebra** is a procedural query language: operators take one or two relations and return a relation. It is the theoretical base of SQL and of query optimisation.

## Fundamental operators
- **Selection σ**: picks rows that satisfy a condition. `σ_{cgpa>8}(Student)`.
- **Projection π**: picks columns and removes duplicates. `π_{name, cgpa}(Student)`.
- **Union ∪**, **Set difference −**, **Intersection ∩**: need **union-compatible** relations (same number of attributes with compatible domains). Intersection can be written as `R − (R − S)`.
- **Cartesian product ×**: every tuple of R paired with every tuple of S; degree adds, cardinality multiplies.
- **Rename ρ**: renames a relation or its attributes.

## Derived operators
- **Natural join ⋈**: product followed by selection on equal common attributes and removal of the duplicate columns.
- **Theta join ⋈_θ** (**equijoin** when θ is equality): `R ⋈_{R.a = S.b} S`.
- **Outer joins** (left, right, full): keep unmatched tuples from one or both sides, filling NULLs.
- **Division ÷**: finds tuples in R related to **all** tuples in S.

## Example data
`Student(roll, name, dept)`, `Enroll(roll, cid)`, `Course(cid, title)`.
- Names of students in CSE: `π_{name}(σ_{dept='CSE'}(Student))`.
- Titles of courses taken by student 5: `π_{title}(σ_{roll=5}(Enroll) ⋈ Course)`.
- Students who took **every** course: `π_{roll,cid}(Enroll) ÷ π_{cid}(Course)`.

## Useful identities
- Selections can be cascaded: `σ_{A∧B}(R) = σ_A(σ_B(R))` and are commutative.
- Push selection below join to shrink data early.
- Projection reduces columns; do it before joins when possible.

## Size rules
- If |R| = m and |S| = n: |R × S| = m·n; |R ∪ S| ≤ m+n; |R ∩ S| ≤ min(m,n); |R − S| ≤ m.
- Natural join of relations with no common attribute equals the Cartesian product.

## Extended operators
Aggregation `G` with functions SUM, AVG, COUNT, MIN, MAX and grouping, e.g. `dept G_{avg(cgpa)}(Student)`.

> Relational algebra on sets removes duplicates; SQL works on bags (multisets) unless DISTINCT is used.
@qa
Q: What is the difference between selection and projection?
A: Selection (σ) chooses rows that satisfy a condition. Projection (π) chooses columns and removes duplicate rows.
Q: What are union-compatible relations?
A: Two relations with the same number of attributes where corresponding attributes have compatible domains. Union, intersection and difference require this.
Q: What does the division operator find?
A: The values in R that are paired with all values in S, for example students who enrolled in every course.
Q: If R has 4 tuples and S has 5 tuples, how many tuples does R × S have?
A: 20, because every tuple of R is paired with every tuple of S.
Q: How is a natural join different from a Cartesian product?
A: A natural join keeps only pairs that agree on all common attributes and shows each common attribute once; the Cartesian product keeps all pairs.
@quiz
? Which operator removes duplicate rows after choosing columns?
- σ
+ π
- ×
- ρ
! Projection in relational algebra returns a set, so duplicates vanish.
? R has 6 tuples and S has 7. The cardinality of R × S is
- 13
+ 42
- 7
- 6
! Cartesian product multiplies cardinalities: 6 x 7 = 42.
? Which operator finds "students who took all courses"?
- Union
- Selection
- Natural join
+ Division
! Division answers "for all" queries.
? Intersection can be expressed using
+ R − (R − S)
- R × S
- R ∪ S
- σ(R)
! Removing from R everything not in S leaves R ∩ S.
? For union, relations must be
- of different degree
+ union-compatible
- joined first
- indexed
! Union needs the same number of attributes with compatible domains.

@visual
mind | Relational algebra operators | Relational algebra; Select (sigma): choose rows; Project (pi): choose columns; Union: rows in either; Difference: rows in one but not the other; Cartesian product: all pairs; Join: matching pairs; Rename (rho)

@problems
## Moderate
P: For Student(ID, Name, Dept, CGPA) write relational algebra for: (a) all details of students of CSE; (b) only the names of all students.
A: (a) sigma Dept = 'CSE' (Student). (b) pi Name (Student). Select picks rows that satisfy a condition; project picks columns and removes duplicates.
R: 2 | Selection expression
R: 2 | Projection expression
## High
P: Write an expression for the names of CSE students with CGPA above 8. Then state how many tuples R x S has when R has 4 tuples and S has 3, and the minimum and maximum size of their natural join.
A: pi Name (sigma Dept = 'CSE' AND CGPA > 8 (Student)).
R x S has 4 x 3 = 12 tuples. A natural join keeps only matching pairs, so it has at least 0 and at most 12 tuples (at most 12 when all pairs match; with a key join it is at most 4).
R: 2 | Correct expression with select inside project
R: 1 | 12 tuples in the product
R: 2 | Join between 0 and 12
## Advanced
P: Enrolled(SID, CID) = {(1,A), (1,B), (2,A), (3,A), (3,B)} and Course(CID) = {A, B}. Which students are enrolled in all courses? Write the division expression and the result.
A: Enrolled divided by pi CID (Course). A student qualifies only if they are paired with every course. Student 1 has A and B, student 2 has only A, student 3 has A and B. Result = {1, 3}.
R: 2 | Uses division of Enrolled by Course
R: 2 | Result {1, 3}
R: 1 | Explains why student 2 is excluded
