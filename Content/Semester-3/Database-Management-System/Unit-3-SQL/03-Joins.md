# SQL joins: inner, outer, cross and self
minutes: 35
yt: SQL joins inner left right full outer cross self join explained
yt: SQL join examples with output
@study
A **join** combines rows from two or more tables based on a relationship between columns, usually primary key to foreign key. We use the sample database from the previous lesson.
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
Remember: Farhan has no department (NULL) and department ME has no students.

## INNER JOIN
Keeps only matching pairs.
```sql
SELECT s.name, d.dname
FROM Student s INNER JOIN Dept d ON s.dept_id = d.dept_id;
```
Output: Asha CSE, Bilal CSE, Chitra ECE, Dev ECE, Esha CSE. Farhan disappears because his dept_id is NULL and never equals anything.

## LEFT (OUTER) JOIN
Keeps **all rows of the left table**, filling NULL where there is no match.
```sql
SELECT s.name, d.dname
FROM Student s LEFT JOIN Dept d ON s.dept_id = d.dept_id;
```
The same five rows plus `Farhan | NULL`.

Reverse the tables to keep every department, including ME with no students:
```sql
SELECT d.dname, s.name
FROM Dept d LEFT JOIN Student s ON s.dept_id = d.dept_id;
```
Output ends with `ME | NULL`.

## RIGHT and FULL OUTER JOIN
`RIGHT JOIN` keeps all rows of the right table. `FULL OUTER JOIN` keeps all rows of both. (MySQL has no FULL JOIN; it is simulated with `LEFT JOIN UNION RIGHT JOIN`.)
```sql
SELECT s.name, d.dname
FROM Student s FULL OUTER JOIN Dept d ON s.dept_id = d.dept_id;
```
This returns the five matches, `Farhan | NULL` and `NULL | ME`.

## CROSS JOIN
Every row with every row (Cartesian product). 6 students x 3 courses = 18 rows.
```sql
SELECT COUNT(*) FROM Student CROSS JOIN Course;
```
Output: 18.

## Joining three tables
```sql
SELECT s.name, e.cid, e.marks
FROM Student s JOIN Enroll e ON s.roll = e.roll
               JOIN Course c ON c.cid = e.cid
WHERE c.credits = 4;
```
Six rows: Asha DB1 88, Asha OS1 79, Bilal DB1 65, Chitra DB1 92, Esha OS1 74, Esha DB1 81.

## SELF JOIN
A table joined to itself using aliases. Pairs of students who live in the same city:
```sql
SELECT a.name AS s1, b.name AS s2
FROM Student a JOIN Student b ON a.city = b.city AND a.roll < b.roll;
```
Output: `Asha | Chitra` (Delhi) and `Bilal | Farhan` (Lucknow). The condition `a.roll < b.roll` avoids pairing a student with themself and listing each pair twice.

## NATURAL JOIN and USING
`NATURAL JOIN` joins on all columns with the same name. `JOIN ... USING (col)` joins on a named common column. They are shorter but risky when a new same-named column appears, so most teams prefer explicit `ON`.

> ON versus WHERE: for outer joins a filter placed in WHERE on the optional side can silently turn the outer join into an inner join.
@qa
Q: What is the difference between INNER JOIN and LEFT JOIN?
A: INNER JOIN returns only rows with a match in both tables. LEFT JOIN also returns every row of the left table, with NULLs for the right columns when there is no match.
Q: How many rows does a CROSS JOIN of tables with 6 and 3 rows give?
A: 18, the product of the two row counts.
Q: What is a self join and when do you use it?
A: Joining a table with itself using two aliases. It is used for hierarchical or pair-wise data, such as employees and their managers or students from the same city.
Q: Why does Farhan not appear in the INNER JOIN of Student and Dept?
A: His dept_id is NULL and NULL never equals any value, so there is no matching department row.
Q: How is FULL OUTER JOIN done in MySQL?
A: MySQL has no FULL OUTER JOIN, so you combine a LEFT JOIN and a RIGHT JOIN with UNION.
@quiz
? Which join returns all rows from the left table even without a match?
- INNER JOIN
+ LEFT JOIN
- CROSS JOIN
- SELF JOIN
! LEFT (OUTER) JOIN preserves all left rows.
? A CROSS JOIN of 5 rows and 4 rows produces
- 9 rows
+ 20 rows
- 4 rows
- 1 row
! The Cartesian product has 5 x 4 = 20 rows.
? A table joined with itself is called a
- natural join
- outer join
+ self join
- equi join
! A self join needs table aliases.
? In an inner join, rows with NULL in the join column
- always match
+ are dropped
- are copied twice
- raise an error
! NULL never equals NULL in a join condition, so such rows do not match.
? Which is the safest way to write join conditions?
- NATURAL JOIN always
- No condition
+ Explicit ON conditions
- Using only WHERE with a product
! Explicit ON conditions are clear and do not change if columns are added.

@visual
venn | INNER JOIN keeps only the matching rows | Left table; Right table; Matching rows

@problems
## Moderate
P: Differentiate INNER, LEFT, RIGHT and FULL OUTER joins in one line each.
A: INNER JOIN returns only rows with a match in both tables. LEFT JOIN returns all rows of the left table and matching rows of the right, with NULL where there is no match. RIGHT JOIN is the mirror image. FULL OUTER JOIN returns all rows from both tables, with NULL where there is no match.
R: 2 | Inner and left joins
R: 2 | Right and full outer joins
## High
P: Student = {(1,Ravi), (2,Asha), (3,Kiran)} and Marks = {(sid 1, 80), (sid 2, 70), (sid 4, 60)}. Show the result of Student INNER JOIN Marks and Student LEFT JOIN Marks on id = sid.
A: INNER JOIN: (1, Ravi, 80) and (2, Asha, 70).
LEFT JOIN: (1, Ravi, 80), (2, Asha, 70), (3, Kiran, NULL). The mark with sid 4 has no student so it never appears in a left join.
R: 2 | Inner join result
R: 2 | Left join result with NULL for Kiran
R: 1 | Mark sid 4 excluded
## Advanced
P: Write SQL for (a) students who have no marks, (b) for Emp(id, name, salary, mgr) the names of employees who earn more than their manager.
A: (a) SELECT s.name FROM Student s LEFT JOIN Marks m ON s.id = m.sid WHERE m.sid IS NULL; (Result: Kiran.)
(b) SELECT e.name FROM Emp e JOIN Emp m ON e.mgr = m.id WHERE e.salary > m.salary; This is a self join: the same table is used twice with aliases.
R: 2 | Left join with IS NULL to find missing rows
R: 2 | Self join with two aliases
R: 1 | Correct comparison of salaries
