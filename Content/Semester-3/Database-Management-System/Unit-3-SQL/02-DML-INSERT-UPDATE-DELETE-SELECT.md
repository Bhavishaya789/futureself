# SQL DML: INSERT, UPDATE, DELETE and SELECT basics
minutes: 35
yt: SQL select where order by distinct like in between
yt: SQL insert update delete tutorial
@study
We use a small sample database in this and the next lessons. Departments, students, courses and enrolments:
```sql
CREATE TABLE Dept(dept_id INT PRIMARY KEY, dname TEXT);
CREATE TABLE Student(roll INT PRIMARY KEY, name TEXT, dept_id INT, cgpa REAL, city TEXT);
CREATE TABLE Course(cid TEXT PRIMARY KEY, title TEXT, credits INT);
CREATE TABLE Enroll(roll INT, cid TEXT, marks INT, PRIMARY KEY(roll,cid));
INSERT INTO Dept VALUES (1,'CSE'),(2,'ECE'),(3,'ME');
INSERT INTO Student VALUES (1,'Asha',1,8.9,'Delhi'),(2,'Bilal',1,7.4,'Lucknow'),
  (3,'Chitra',2,9.1,'Delhi'),(4,'Dev',2,6.8,'Patna'),(5,'Esha',1,8.2,'Dehradun'),
  (6,'Farhan',NULL,7.9,'Lucknow');
INSERT INTO Course VALUES ('DB1','Databases',4),('OS1','Operating Systems',4),('MA1','Discrete Maths',3);
INSERT INTO Enroll VALUES (1,'DB1',88),(1,'OS1',79),(2,'DB1',65),(3,'DB1',92),
  (3,'MA1',85),(5,'OS1',74),(5,'DB1',81);
```

## INSERT, UPDATE, DELETE
```sql
INSERT INTO Student (roll, name, cgpa) VALUES (7, 'Gita', 8.0);
UPDATE Student SET cgpa = cgpa + 0.1 WHERE city = 'Lucknow';
DELETE FROM Student WHERE roll = 7;
```
`UPDATE` and `DELETE` without a `WHERE` clause affect **every** row. Always check the condition first with a `SELECT`.

## SELECT anatomy
```
SELECT [DISTINCT] columns
FROM tables
WHERE row condition
GROUP BY columns
HAVING group condition
ORDER BY columns [ASC|DESC]
LIMIT n
```
The **logical order of execution** is FROM, WHERE, GROUP BY, HAVING, SELECT, DISTINCT, ORDER BY, LIMIT. That is why an alias defined in SELECT cannot be used in WHERE.

## Filtering and sorting
```sql
SELECT name, cgpa FROM Student WHERE cgpa >= 8 ORDER BY cgpa DESC;
```
Output:
| name | cgpa |
| --- | --- |
| Chitra | 9.1 |
| Asha | 8.9 |
| Esha | 8.2 |

```sql
SELECT DISTINCT city FROM Student ORDER BY city;
```
Output: Dehradun, Delhi, Lucknow, Patna.

## Operators
- Comparison: `=`, `<>` (or `!=`), `<`, `>`, `<=`, `>=`.
- Logical: `AND`, `OR`, `NOT`.
- `BETWEEN a AND b` is inclusive. `IN (list)`.
- `LIKE` pattern matching: `%` is any string, `_` is one character. `name LIKE '%a'` finds names ending in a (case rules depend on the system).
- **NULL** needs `IS NULL` / `IS NOT NULL`. `dept_id = NULL` is never true, because any comparison with NULL gives UNKNOWN.

```sql
SELECT name FROM Student WHERE name LIKE '%a' AND dept_id IS NOT NULL;
```
Output: Asha, Chitra, Esha (Farhan has no department, and Dev and Bilal do not end in a).

```sql
SELECT name, cgpa FROM Student ORDER BY cgpa DESC LIMIT 3;
```
This returns the top three by cgpa (called `TOP 3` in SQL Server, `FETCH FIRST 3 ROWS ONLY` in Oracle and standard SQL).

## Expressions and CASE
```sql
SELECT name, CASE WHEN cgpa >= 9 THEN 'A' WHEN cgpa >= 8 THEN 'B' ELSE 'C' END AS grade
FROM Student ORDER BY roll;
```
Output grades: Asha B, Bilal C, Chitra A, Dev C, Esha B, Farhan C.

> Three-valued logic: comparisons with NULL return UNKNOWN, and WHERE keeps only rows where the condition is TRUE.
@qa
Q: Why does WHERE dept_id = NULL return no rows?
A: Any comparison with NULL evaluates to UNKNOWN, not TRUE. Use IS NULL instead.
Q: In what order does the DBMS logically evaluate the clauses of SELECT?
A: FROM, WHERE, GROUP BY, HAVING, SELECT, DISTINCT, ORDER BY, LIMIT. That is why SELECT aliases cannot be used in WHERE.
Q: What does the % wildcard mean in LIKE?
A: It matches any sequence of zero or more characters. The underscore matches exactly one character.
Q: What happens if you run UPDATE without WHERE?
A: Every row of the table is updated. Always test the WHERE condition with SELECT first.
Q: Is BETWEEN 5 AND 10 inclusive?
A: Yes, it includes both 5 and 10.
@quiz
? Which clause filters individual rows before grouping?
+ WHERE
- HAVING
- ORDER BY
- LIMIT
! WHERE works on rows. HAVING works on groups after GROUP BY.
? To test for a missing value we write
- = NULL
- == NULL
+ IS NULL
- LIKE NULL
! Only IS NULL / IS NOT NULL correctly test for NULL.
? The pattern 'A%' matches
- exactly one letter A
+ any value starting with A
- any value ending in A
- any value containing A anywhere
! % stands for any sequence, so 'A%' means "starts with A".
? ORDER BY cgpa DESC arranges the rows
- from lowest to highest
+ from highest to lowest
- randomly
- alphabetically by name
! DESC means descending order.
? SELECT DISTINCT city FROM Student returns
- all cities with repeats
+ each city once
- only the first city
- the number of cities
! DISTINCT removes duplicate result rows.

@visual
steps | Order in which you write a SELECT | SELECT the columns you want; FROM the table; WHERE filter the rows; ORDER BY sort the result; LIMIT keep only the first rows

@problems
## Moderate
P: For Emp(id, name, dept, salary) write: (a) insert a new employee, (b) raise salary of id 5 to 60000, (c) delete employee 9.
A: (a) INSERT INTO Emp (id, name, dept, salary) VALUES (11, 'Neha', 'IT', 55000);
(b) UPDATE Emp SET salary = 60000 WHERE id = 5;
(c) DELETE FROM Emp WHERE id = 9;
Without a WHERE clause UPDATE and DELETE affect every row.
R: 2 | Correct INSERT
R: 2 | Correct UPDATE and DELETE with WHERE
R: 1 | Warns about missing WHERE
## High
P: Write queries: (a) names of employees in IT or HR earning between 40000 and 80000, highest salary first; (b) names starting with A; (c) the top 3 earners.
A: (a) SELECT name FROM Emp WHERE dept IN ('IT','HR') AND salary BETWEEN 40000 AND 80000 ORDER BY salary DESC;
(b) SELECT name FROM Emp WHERE name LIKE 'A%';
(c) SELECT name, salary FROM Emp ORDER BY salary DESC LIMIT 3;
R: 2 | Query (a) with IN, BETWEEN and ORDER BY DESC
R: 1 | LIKE pattern
R: 1 | ORDER BY with LIMIT
## Advanced
P: Give 10% raise to IT employees earning below 50000. Why does WHERE dept = NULL return nothing and what should you write? How do you remove duplicate departments from a listing?
A: UPDATE Emp SET salary = salary * 1.10 WHERE dept = 'IT' AND salary < 50000;
NULL means unknown, and any comparison with NULL using = gives unknown, not true, so no row matches. Use WHERE dept IS NULL (or IS NOT NULL).
Duplicates: SELECT DISTINCT dept FROM Emp;
R: 2 | Correct UPDATE with arithmetic
R: 2 | IS NULL and the reason
R: 1 | DISTINCT
