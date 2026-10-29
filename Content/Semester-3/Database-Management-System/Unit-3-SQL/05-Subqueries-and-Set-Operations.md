# Subqueries and set operations
minutes: 35
yt: SQL subquery correlated exists in not in
yt: SQL union intersect except explained
@study
A **subquery** (nested query) is a SELECT inside another SQL statement, written in parentheses.
```sql
CREATE TABLE Student(roll INT PRIMARY KEY, name TEXT, dept_id INT, cgpa REAL, city TEXT);
CREATE TABLE Enroll(roll INT, cid TEXT, marks INT, PRIMARY KEY(roll,cid));
INSERT INTO Student VALUES (1,'Asha',1,8.9,'Delhi'),(2,'Bilal',1,7.4,'Lucknow'),
  (3,'Chitra',2,9.1,'Delhi'),(4,'Dev',2,6.8,'Patna'),(5,'Esha',1,8.2,'Dehradun'),
  (6,'Farhan',NULL,7.9,'Lucknow');
INSERT INTO Enroll VALUES (1,'DB1',88),(1,'OS1',79),(2,'DB1',65),(3,'DB1',92),
  (3,'MA1',85),(5,'OS1',74),(5,'DB1',81);
```

## Scalar subquery (returns one value)
Students above the average cgpa (average is 8.05):
```sql
SELECT name FROM Student WHERE cgpa > (SELECT AVG(cgpa) FROM Student);
```
Output: Asha, Chitra, Esha.

## Multi-row subquery: IN, ANY, ALL
```sql
SELECT name FROM Student
WHERE roll IN (SELECT roll FROM Enroll WHERE cid = 'DB1');
```
Output: Asha, Bilal, Chitra, Esha. `> ALL (subquery)` means greater than every value returned; `> ANY` means greater than at least one.

## Correlated subquery
The inner query refers to a column of the outer query, so it is re-evaluated for each outer row.
```sql
SELECT name FROM Student s
WHERE EXISTS (SELECT 1 FROM Enroll e WHERE e.roll = s.roll AND e.cid = 'OS1');
```
Output: Asha, Esha. `EXISTS` is true if the subquery returns at least one row and stops at the first match.

## NOT IN and the NULL trap
```sql
SELECT name FROM Student WHERE roll NOT IN (SELECT roll FROM Enroll);
```
Output: Dev, Farhan (students with no enrolment). If the subquery returns even one NULL, `NOT IN` returns no rows at all, because the comparison becomes UNKNOWN. `NOT EXISTS` does not have this problem, so it is the safer form.

## Subquery in SELECT and FROM
```sql
SELECT name, cgpa, (SELECT COUNT(*) FROM Enroll e WHERE e.roll = s.roll) AS courses
FROM Student s ORDER BY courses DESC, name LIMIT 3;
```
Output: Asha 2, Chitra 2, Esha 2. A subquery in FROM is called a **derived table** and must have an alias.

## Set operations
Both queries must return the same number of compatible columns. They remove duplicates by default; `UNION ALL` keeps them.
```sql
SELECT roll FROM Enroll WHERE cid = 'DB1'
INTERSECT
SELECT roll FROM Enroll WHERE cid = 'OS1';
```
Output: 1 and 5 (took both DB1 and OS1).
- `UNION`: rows in either result.
- `INTERSECT`: rows in both.
- `EXCEPT` (`MINUS` in Oracle): rows in the first and not in the second. `DB1 EXCEPT OS1` gives 2 and 3.

Division-like query "students who took every course" is done with a double `NOT EXISTS`.

> Joins are often faster and easier to read than nested subqueries, but subqueries express "for all" and "does not exist" logic well.
@qa
Q: What is a correlated subquery?
A: A subquery that uses a column from the outer query, so it runs once for every row of the outer query.
Q: What is the difference between IN and EXISTS?
A: IN compares a value to the list a subquery returns. EXISTS only checks whether the subquery returns any row at all and stops at the first.
Q: Why can NOT IN return no rows unexpectedly?
A: If the subquery list contains a NULL, comparisons give UNKNOWN for every row, so none passes. NOT EXISTS avoids this.
Q: What is the difference between UNION and UNION ALL?
A: UNION removes duplicate rows from the combined result; UNION ALL keeps all rows and is faster.
Q: Which operator returns rows in the first query but not in the second?
A: EXCEPT (MINUS in Oracle).
@quiz
? A subquery that depends on the outer query's current row is
- scalar
+ correlated
- derived
- recursive
! Correlated subqueries refer to outer columns.
? Which keyword returns rows common to two SELECT results?
- UNION
- EXCEPT
+ INTERSECT
- JOIN
! INTERSECT keeps only rows present in both results.
? NOT IN with a subquery that returns a NULL gives
- all rows
+ no rows
- an error always
- only NULL rows
! Comparing with NULL gives UNKNOWN, so no row qualifies.
? A subquery used in the FROM clause must have
- an ORDER BY
+ an alias
- a GROUP BY
- a foreign key
! Derived tables need an alias.
? UNION ALL differs from UNION because it
- sorts the rows
+ keeps duplicates
- removes NULLs
- needs different column counts
! UNION ALL skips the duplicate-elimination step.

@visual
compare | Set operations in SQL | UNION=Rows from either query~Duplicates removed (UNION ALL keeps them); INTERSECT=Rows that appear in both queries; EXCEPT=Rows in the first query but not in the second

@problems
## Moderate
P: Write a query for the second highest salary in Emp(id, salary) using a subquery.
A: SELECT MAX(salary) FROM Emp WHERE salary < (SELECT MAX(salary) FROM Emp);
The inner query finds the highest salary; the outer query finds the largest salary below it. (Another valid answer: ORDER BY salary DESC LIMIT 1 OFFSET 1.)
R: 2 | Inner query for maximum
R: 2 | Outer query for the next lower value
## High
P: For Emp(id, dept, salary) write a correlated subquery to list employees earning more than the average of their own department. How does it differ from a non-correlated subquery?
A: SELECT id FROM Emp e WHERE salary > (SELECT AVG(salary) FROM Emp WHERE dept = e.dept);
A non-correlated subquery runs once and its result is reused; a correlated subquery refers to the outer row (e.dept) and is evaluated for each outer row.
R: 3 | Correct correlated query
R: 2 | Difference explained
## Advanced
P: What does SELECT 1 WHERE 5 NOT IN (1, 2, NULL) return and why? How does NOT EXISTS avoid this problem?
A: It returns no rows. 5 NOT IN (1, 2, NULL) means 5 <> 1 AND 5 <> 2 AND 5 <> NULL. The last comparison is unknown, so the whole condition is never true. NOT EXISTS tests whether a matching row exists and is not affected by NULL values in the same way, so it is the safer choice when the subquery column may contain NULL.
R: 2 | No rows returned
R: 2 | Explains the unknown comparison with NULL
R: 1 | NOT EXISTS recommended
