# Relational calculus (tuple and domain)
minutes: 25
yt: tuple relational calculus DBMS
yt: relational calculus vs relational algebra safe expressions
@study
**Relational calculus** is a **declarative** (non-procedural) query language. Instead of saying *how* to compute a result (as algebra does), you describe *what* the result should look like using predicate logic.

## Tuple relational calculus (TRC)
A query has the form `{ t | P(t) }`: the set of all tuples `t` for which predicate `P` is true.
- `t ∈ Student` binds the tuple variable to a relation.
- `t[name]` or `t.name` selects an attribute.
- Connectives: ∧ (and), ∨ (or), ¬ (not), ⇒ (implies).
- Quantifiers: **∃** (there exists) and **∀** (for all).

Examples:
- Students of CSE: `{ t | t ∈ Student ∧ t.dept = 'CSE' }`
- Names of students with cgpa above 8: `{ t.name | t ∈ Student ∧ t.cgpa > 8 }`
- Students who took course 'DB1': `{ s | s ∈ Student ∧ ∃e (e ∈ Enroll ∧ e.roll = s.roll ∧ e.cid = 'DB1') }`
- Students who took **all** courses: `{ s | s ∈ Student ∧ ∀c (c ∈ Course ⇒ ∃e (e ∈ Enroll ∧ e.roll = s.roll ∧ e.cid = c.cid)) }`

## Safe expressions
An expression is **safe** if it produces a finite result using only values that appear in the database. `{ t | ¬(t ∈ Student) }` is unsafe because infinitely many tuples are not in Student. Safe TRC has the same expressive power as relational algebra, which is why SQL (based on TRC) can be translated to algebra.

## Domain relational calculus (DRC)
Variables range over **attribute values (domains)** rather than whole tuples. Form: `{ <x1, x2, ..., xn> | P(x1, ..., xn) }`.
Example: `{ <n> | ∃r, d, g (<r, n, d, g> ∈ Student ∧ g > 8) }`. QBE (Query By Example) is based on DRC.

## Algebra vs calculus
| Aspect | Relational algebra | Relational calculus |
| --- | --- | --- |
| Style | Procedural | Declarative |
| Describes | How to get the result | What the result is |
| Base | Operators on relations | Predicate logic |
| Equivalent power | Yes, for safe expressions | Yes |

> SQL is mostly declarative like TRC, but the optimiser turns it into relational algebra to execute it.
@qa
Q: What does the tuple relational calculus expression { t | t ∈ Student ∧ t.cgpa > 8 } return?
A: All tuples of Student whose cgpa is greater than 8.
Q: What is a safe expression?
A: One that always yields a finite result containing only values from the database. Unsafe example: { t | ¬(t ∈ R) }.
Q: What is the difference between TRC and DRC?
A: In TRC variables stand for whole tuples; in DRC variables stand for individual attribute values (domain elements).
Q: Is relational algebra or calculus procedural?
A: Algebra is procedural (you give a sequence of operations). Calculus is declarative (you describe the result).
Q: Which quantifier is used for "for all"?
A: The universal quantifier ∀. The existential quantifier ∃ means "there exists".
@quiz
? The relational calculus is
- procedural
+ declarative
- imperative
- object oriented
! Calculus specifies what is wanted, not the steps.
? Which language is based on domain relational calculus?
- SQL
+ QBE
- C
- XML
! Query By Example uses domain variables. SQL is closer to tuple calculus.
? The quantifier ∀ means
- there exists
+ for all
- not
- implies
! ∀ is the universal quantifier.
? An expression that can give an infinite result is called
- safe
+ unsafe
- optimised
- normalised
! Unsafe expressions such as { t | ¬(t ∈ R) } are not allowed.
? Safe tuple calculus and relational algebra are
- unrelated
+ equal in expressive power
- both procedural
- both domain based
! Codd's theorem shows they can express exactly the same queries.

@visual
compare | Relational algebra and relational calculus | Relational algebra=Procedural: says how to compute~Uses operators such as select, project, join~Closer to query execution plans; Relational calculus=Declarative: says what to get~Uses predicates and quantifiers~Closer to SQL thinking~Safe expressions have equal power to algebra

@problems
## Moderate
P: Write a tuple relational calculus expression for the names of employees whose salary is above 50000, using Employee(EmpID, Name, Salary).
A: { t.Name | Employee(t) AND t.Salary > 50000 }. The variable t ranges over Employee tuples and the condition filters them.
R: 2 | Result attribute and range of t
R: 2 | Condition on salary
## High
P: Using Student(SID, Name) and Enrolled(SID, CID), write a TRC expression for names of students enrolled in at least one course. Which quantifier do you use and why?
A: { s.Name | Student(s) AND EXISTS e (Enrolled(e) AND e.SID = s.SID) }. The existential quantifier is used because only one matching enrolment is needed.
R: 3 | Correct expression
R: 1 | Existential quantifier justified
## Advanced
P: Write TRC for students enrolled in all courses using Course(CID). Also explain why { t | NOT Student(t) } is an unsafe expression.
A: { s.Name | Student(s) AND FORALL c (Course(c) IMPLIES EXISTS e (Enrolled(e) AND e.SID = s.SID AND e.CID = c.CID)) }.
{ t | NOT Student(t) } is unsafe because it describes every possible tuple that is not in Student, which is an infinite set. Safe expressions only return values that come from the database.
R: 3 | Division expressed with FORALL and EXISTS
R: 2 | Unsafe because the result is infinite
