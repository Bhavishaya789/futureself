# Views and indexes
minutes: 25
yt: SQL views and indexes explained
yt: database index clustered non clustered
@study
## Views
A **view** is a stored query that behaves like a virtual table. It stores no data of its own (except **materialised views**, which cache the result).
```sql
CREATE TABLE Student(roll INT PRIMARY KEY, name TEXT, dept_id INT, cgpa REAL, city TEXT);
INSERT INTO Student VALUES (1,'Asha',1,8.9,'Delhi'),(2,'Bilal',1,7.4,'Lucknow'),
  (3,'Chitra',2,9.1,'Delhi'),(4,'Dev',2,6.8,'Patna'),(5,'Esha',1,8.2,'Dehradun');
CREATE VIEW Toppers AS
  SELECT roll, name, cgpa FROM Student WHERE cgpa >= 8;
SELECT * FROM Toppers ORDER BY cgpa DESC;
```
Result: Chitra 9.1, Asha 8.9, Esha 8.2.

Why use views?
- **Security:** show only some columns or rows to a user group.
- **Simplicity:** hide complex joins behind a name.
- **Logical data independence:** applications keep working if the base tables change.

A view is **updatable** only when it maps clearly to rows of one base table (no DISTINCT, GROUP BY, aggregates or joins in most systems). `WITH CHECK OPTION` stops an update that would make a row vanish from the view. Drop with `DROP VIEW Toppers;`.

## Indexes
An **index** is an extra data structure (usually a **B+ tree**, sometimes a hash) that lets the DBMS find rows without scanning the whole table, like the index at the back of a book.
```sql
CREATE INDEX idx_student_city ON Student(city);
CREATE UNIQUE INDEX idx_student_name ON Student(name);
```
Primary keys and unique constraints automatically get an index.

### Types
- **Clustered index:** decides the physical order of rows; only one per table. In many systems the primary key is clustered.
- **Non-clustered (secondary) index:** separate structure holding key values and pointers to rows; many allowed.
- **Dense** index has an entry for every record; **sparse** index has one entry per block.
- **Composite index** on several columns: `(dept_id, cgpa)` helps queries that filter on `dept_id` or on `dept_id` and `cgpa`, but not on `cgpa` alone (left-most prefix rule).

### Trade-offs
Indexes make `SELECT` with `WHERE`, `JOIN` and `ORDER BY` much faster, but they take space and slow `INSERT`, `UPDATE` and `DELETE` because every index must be updated. Index columns that are searched often and have many different values (high selectivity). Avoid indexing tiny tables or columns with few distinct values.

## Seeing the effect
Most systems have `EXPLAIN` to show the query plan: a full table scan without the index and an index search with it.

> A view saves a query; an index speeds up a query. They solve different problems.
@qa
Q: What is a view?
A: A virtual table defined by a stored SELECT query. It does not hold its own data; it is computed from base tables when used.
Q: Give two reasons to use views.
A: To restrict access to certain rows or columns (security) and to hide complex queries behind a simple name (simplicity, logical data independence).
Q: What is the difference between clustered and non-clustered index?
A: A clustered index determines the physical order of the rows, so a table can have only one. A non-clustered index is a separate structure with pointers to the rows; a table can have many.
Q: Why not index every column?
A: Indexes use storage and slow down INSERT, UPDATE and DELETE because they must be maintained, so only columns used for searching, joining or sorting are worth indexing.
Q: What data structure do most database indexes use?
A: The B+ tree, which stays balanced and supports both exact and range searches.
@quiz
? A view stores
- a copy of the data always
+ a query definition
- only indexes
- only constraints
! A normal view saves the SELECT, not the data.
? How many clustered indexes can a table have?
+ One
- Two
- As many as columns
- None
! Rows can be physically ordered in only one way.
? Which structure is most commonly used for database indexes?
- Stack
- Linked list
+ B+ tree
- Binary heap
! B+ trees are balanced and efficient for disk access.
? An index mainly improves the speed of
- INSERT
+ SELECT with search conditions
- CREATE TABLE
- DROP TABLE
! It speeds up lookups; writes become slightly slower.
? WITH CHECK OPTION on a view
- encrypts the view
+ prevents updates that would make rows disappear from the view
- creates an index
- allows joins
! It enforces that modified rows still satisfy the view condition.

@visual
compare | View and index | View=A saved query that acts like a table~Hides columns and simplifies queries~Usually stores no data of its own; Index=An extra structure for fast search~Speeds up SELECT with WHERE~Slows INSERT, UPDATE and DELETE

@problems
## Moderate
P: What is a view? Give two reasons for using views.
A: A view is a virtual table defined by a stored SELECT query. Reasons: security (show only some columns or rows to a user), simplicity (hide a complex join behind a name) and logical data independence.
R: 2 | Definition
R: 2 | Two valid reasons
## High
P: Write a view that shows name and department of IT employees from Emp(id, name, dept, salary) without the salary. When can a view not be updated?
A: CREATE VIEW it_staff AS SELECT name, dept FROM Emp WHERE dept = 'IT';
A view is usually not updatable when it uses DISTINCT, GROUP BY or aggregate functions, joins several tables, or omits NOT NULL columns required for inserts.
R: 2 | Correct view
R: 2 | Valid reasons for non-updatable views
## Advanced
P: Explain the trade-off of indexing. Give two queries where an index on name is not used, and say when a composite index on (a, b) helps.
A: An index speeds searches, sorts and joins but uses extra storage and slows writes because the index must be updated too.
Not used: WHERE UPPER(name) = 'RAVI' (function on the column) and WHERE name LIKE '%van' (leading wildcard).
A composite index (a, b) helps queries on a, or on a and b together, because it is sorted by a first; it does not help a query on b alone (leftmost prefix rule).
R: 2 | Benefit and cost of indexes
R: 2 | Two cases where an index is not used
R: 1 | Leftmost prefix rule
