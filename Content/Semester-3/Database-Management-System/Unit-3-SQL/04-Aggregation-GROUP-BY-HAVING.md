# Aggregate functions, GROUP BY and HAVING
minutes: 30
yt: SQL aggregate functions group by having
yt: SQL group by vs having difference with examples
@study
An **aggregate function** reduces many rows to one value: `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`. Same sample database as before:
```sql
CREATE TABLE Student(roll INT PRIMARY KEY, name TEXT, dept_id INT, cgpa REAL, city TEXT);
CREATE TABLE Enroll(roll INT, cid TEXT, marks INT, PRIMARY KEY(roll,cid));
INSERT INTO Student VALUES (1,'Asha',1,8.9,'Delhi'),(2,'Bilal',1,7.4,'Lucknow'),
  (3,'Chitra',2,9.1,'Delhi'),(4,'Dev',2,6.8,'Patna'),(5,'Esha',1,8.2,'Dehradun'),
  (6,'Farhan',NULL,7.9,'Lucknow');
INSERT INTO Enroll VALUES (1,'DB1',88),(1,'OS1',79),(2,'DB1',65),(3,'DB1',92),
  (3,'MA1',85),(5,'OS1',74),(5,'DB1',81);
```

## How aggregates treat NULL
- `COUNT(*)` counts rows. `COUNT(col)` counts non-NULL values. `COUNT(DISTINCT col)` counts distinct non-NULL values.
- `SUM`, `AVG`, `MIN`, `MAX` ignore NULLs.
```sql
SELECT COUNT(*), COUNT(dept_id), AVG(cgpa) FROM Student;
```
Output: `6 | 5 | 8.05`. Farhan's NULL dept_id is not counted by `COUNT(dept_id)`.

## GROUP BY
Splits rows into groups with equal values of the grouping columns, then applies aggregates per group.
```sql
SELECT dept_id, COUNT(*) AS n, ROUND(AVG(cgpa), 2) AS avg_cgpa, MAX(cgpa) AS best
FROM Student GROUP BY dept_id;
```
| dept_id | n | avg_cgpa | best |
| --- | --- | --- | --- |
| NULL | 1 | 7.9 | 7.9 |
| 1 | 3 | 8.17 | 8.9 |
| 2 | 2 | 7.95 | 9.1 |

Note that NULLs form their own group. **Rule:** every column in SELECT that is not inside an aggregate must appear in GROUP BY.

## HAVING versus WHERE
- `WHERE` filters **rows before** grouping and cannot use aggregates.
- `HAVING` filters **groups after** aggregation and can use aggregates.
```sql
SELECT dept_id, COUNT(*) AS n
FROM Student GROUP BY dept_id HAVING COUNT(*) >= 2;
```
Output: department 1 with 3 students and department 2 with 2. The NULL group has only 1, so it is removed.

You can combine both: `WHERE cgpa > 7 GROUP BY dept_id HAVING COUNT(*) >= 2` first discards students with low cgpa, then groups, then drops small groups.

## Average marks per course
```sql
SELECT cid, AVG(marks) AS avgm, COUNT(*) AS takers
FROM Enroll GROUP BY cid ORDER BY avgm DESC;
```
Output: MA1 85.0 (1), DB1 81.5 (4), OS1 76.5 (2).

## Typical mistakes
1. Selecting a non-grouped column: `SELECT name, COUNT(*) ... GROUP BY dept_id` is invalid (or returns arbitrary values in lenient systems).
2. Using an aggregate in WHERE: write `HAVING` instead.
3. Expecting `AVG` over an empty set to be 0: it is NULL.

> Order of clauses: SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY.
@qa
Q: What is the difference between WHERE and HAVING?
A: WHERE filters rows before grouping and cannot use aggregate functions. HAVING filters groups after aggregation and normally uses aggregates.
Q: What is the difference between COUNT(*) and COUNT(column)?
A: COUNT(*) counts all rows. COUNT(column) counts only rows where that column is not NULL.
Q: Do aggregate functions count NULL values in AVG?
A: No. AVG, SUM, MIN and MAX ignore NULLs, so a row with NULL does not affect the average.
Q: Can we use a column in SELECT that is not in GROUP BY?
A: Only if it is inside an aggregate function. Otherwise the query is invalid in standard SQL.
Q: How do NULL values behave in GROUP BY?
A: All NULLs in the grouping column are placed in one group.
@quiz
? Which clause can use aggregate functions to filter?
- WHERE
+ HAVING
- FROM
- DISTINCT
! HAVING is applied after grouping so it can test aggregates.
? COUNT(column) counts
- all rows
+ rows where the column is not NULL
- only NULL rows
- distinct rows only
! COUNT(column) skips NULLs.
? SELECT dept_id, COUNT(*) FROM Student GROUP BY dept_id returns one row for each
- student
+ distinct dept_id value (including NULL)
- course
- city
! GROUP BY produces one row per group.
? AVG(marks) ignores
- zero values
+ NULL values
- the smallest value
- duplicate values
! NULLs are skipped by AVG.
? Which query is invalid in standard SQL?
- SELECT dept_id, COUNT(*) FROM Student GROUP BY dept_id
- SELECT COUNT(*) FROM Student
+ SELECT name, COUNT(*) FROM Student GROUP BY dept_id
- SELECT MAX(cgpa) FROM Student
! name is neither grouped nor aggregated.

@visual
flow | Logical order in which SQL is evaluated | FROM and JOIN > WHERE filters rows > GROUP BY forms groups > HAVING filters groups > SELECT > ORDER BY and LIMIT

@problems
## Moderate
P: For Emp(dept, salary) write a query to show the number of employees and average salary of each department.
A: SELECT dept, COUNT(*) AS emp_count, AVG(salary) AS avg_salary FROM Emp GROUP BY dept;
Every non-aggregated column in SELECT must appear in GROUP BY.
R: 2 | COUNT and AVG used
R: 2 | GROUP BY dept
## High
P: Differentiate WHERE and HAVING. Write a query for departments with more than 2 employees.
A: WHERE filters individual rows before grouping and cannot use aggregate functions. HAVING filters groups after grouping and can use aggregates.
SELECT dept, COUNT(*) FROM Emp GROUP BY dept HAVING COUNT(*) > 2;
R: 3 | Correct difference with timing
R: 2 | Correct query
## Advanced
P: Emp rows (dept, salary): (IT,40), (IT,60), (HR,30), (HR,50), (HR,70), (OPS,20). What does this return? SELECT dept, COUNT(*), AVG(salary) FROM Emp GROUP BY dept HAVING AVG(salary) > 35 ORDER BY dept;
A: IT group: count 2, average 50. HR group: count 3, average 50. OPS group: count 1, average 20, which fails HAVING. Output: HR, 3, 50 then IT, 2, 50 (ordered by dept).
R: 2 | Computes group averages
R: 2 | Removes OPS with HAVING
R: 1 | Orders HR before IT
