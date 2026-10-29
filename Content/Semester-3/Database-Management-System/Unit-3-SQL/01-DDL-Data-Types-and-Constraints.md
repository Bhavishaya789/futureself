# SQL DDL: creating tables, data types and constraints
minutes: 30
yt: SQL DDL create alter drop table constraints
yt: SQL data types and constraints primary key foreign key check default
@study
**SQL (Structured Query Language)** is the standard language of relational databases. Its commands fall into groups:
- **DDL** (Data Definition): `CREATE`, `ALTER`, `DROP`, `TRUNCATE`, `RENAME`.
- **DML** (Data Manipulation): `INSERT`, `UPDATE`, `DELETE`, `SELECT` (often counted as DQL, the query part).
- **DCL** (Data Control): `GRANT`, `REVOKE`.
- **TCL** (Transaction Control): `COMMIT`, `ROLLBACK`, `SAVEPOINT`.

## Common data types
| Type | Meaning |
| --- | --- |
| `INT`, `SMALLINT`, `BIGINT` | Whole numbers |
| `DECIMAL(p,s)` / `NUMERIC` | Exact numbers with p digits, s after the point (use for money) |
| `FLOAT`, `REAL`, `DOUBLE` | Approximate numbers |
| `CHAR(n)` | Fixed length text, padded |
| `VARCHAR(n)` | Variable length text up to n |
| `DATE`, `TIME`, `TIMESTAMP` | Date and time values |
| `BOOLEAN` | True or false (in some systems stored as a small integer) |

## CREATE TABLE with constraints
```sql
CREATE TABLE Dept (
  dept_id INT PRIMARY KEY,
  dname   VARCHAR(30) NOT NULL UNIQUE
);
CREATE TABLE Student (
  roll    INT PRIMARY KEY,
  name    VARCHAR(40) NOT NULL,
  dept_id INT REFERENCES Dept(dept_id) ON DELETE SET NULL,
  cgpa    DECIMAL(3,1) DEFAULT 0.0 CHECK (cgpa BETWEEN 0 AND 10),
  city    VARCHAR(30)
);
INSERT INTO Dept VALUES (1, 'CSE');
INSERT INTO Student (roll, name, dept_id) VALUES (1, 'Asha', 1);
SELECT * FROM Student;
```
Result of the last query: `1 | Asha | 1 | 0.0 | NULL`. The `cgpa` took its DEFAULT and `city` is NULL because no value was given.

## Constraint recap
- `PRIMARY KEY`: unique and not null, one per table.
- `UNIQUE`: no repeated values.
- `NOT NULL`: a value is required.
- `CHECK`: a condition each row must satisfy.
- `DEFAULT`: value used when none supplied.
- `FOREIGN KEY ... REFERENCES`: referential integrity with `ON DELETE` / `ON UPDATE` actions.

You can also name constraints and write them at table level, which is needed for composite keys:
```sql
CREATE TABLE Enroll (
  roll  INT,
  cid   VARCHAR(5),
  marks INT,
  CONSTRAINT pk_enroll PRIMARY KEY (roll, cid),
  CONSTRAINT fk_stu FOREIGN KEY (roll) REFERENCES Student(roll)
);
```

## ALTER, DROP, TRUNCATE
```mysql
ALTER TABLE Student ADD email VARCHAR(60);      -- add a column
ALTER TABLE Student MODIFY name VARCHAR(80);    -- change type (MySQL; Oracle also uses MODIFY)
ALTER TABLE Student DROP COLUMN city;           -- remove a column
TRUNCATE TABLE Enroll;                          -- delete all rows quickly, keep the table
DROP TABLE Enroll;                              -- delete table and its data
```
Differences: `DELETE` removes selected rows and can be rolled back in most systems; `TRUNCATE` removes all rows quickly (DDL, usually not rollbackable); `DROP` removes the whole table definition.

> Always create parent tables before child tables, and drop in the opposite order, or the foreign keys will complain.
@qa
Q: What is the difference between DELETE, TRUNCATE and DROP?
A: DELETE removes chosen rows (with WHERE) and can be rolled back. TRUNCATE removes all rows quickly and keeps the structure. DROP removes the table itself, structure and data.
Q: Which type should be used for money, FLOAT or DECIMAL?
A: DECIMAL (NUMERIC), because it is exact. FLOAT is approximate and can give rounding errors.
Q: What is the difference between CHAR and VARCHAR?
A: CHAR(n) always stores n characters, padding with spaces. VARCHAR(n) stores only the characters given, up to n.
Q: Why must a composite primary key be declared at table level?
A: A column-level PRIMARY KEY applies to one column. A key made of several columns must be written as PRIMARY KEY (col1, col2) after the column list.
Q: Which commands belong to DCL?
A: GRANT and REVOKE, which give and take away privileges.
@quiz
? Which statement removes the table structure as well as its data?
- DELETE
- TRUNCATE
+ DROP
- UPDATE
! DROP removes the table definition completely.
? A column that must always have a value uses the constraint
- UNIQUE
+ NOT NULL
- CHECK
- DEFAULT
! NOT NULL rejects missing values.
? Which data type is best for storing prices exactly?
- FLOAT
- DOUBLE
+ DECIMAL
- CHAR
! DECIMAL stores exact numbers.
? GRANT and REVOKE are
- DDL commands
- DML commands
+ DCL commands
- TCL commands
! They control privileges, so they are data control language.
? Which constraint supplies a value when the INSERT does not give one?
- CHECK
- UNIQUE
+ DEFAULT
- FOREIGN KEY
! DEFAULT fills in the specified value.

@visual
formula | A table with constraints | CREATE TABLE Student ( RollNo INT PRIMARY KEY, Name VARCHAR(50) NOT NULL, Email VARCHAR(80) UNIQUE, Age INT CHECK (Age >= 17) )

@problems
## Moderate
P: Write a CREATE TABLE statement for Employee(EmpID, Name, Salary, Email) where EmpID is the primary key, Name cannot be empty, Salary must be positive and Email must be unique.
A: CREATE TABLE Employee (
  EmpID INT PRIMARY KEY,
  Name VARCHAR(50) NOT NULL,
  Salary DECIMAL(10,2) CHECK (Salary > 0),
  Email VARCHAR(80) UNIQUE
);
R: 2 | Correct columns with a primary key
R: 2 | NOT NULL, CHECK and UNIQUE used correctly
## High
P: Write statements to (a) add a Phone column to Employee, (b) remove the Email column. Differentiate DELETE, TRUNCATE and DROP.
A: (a) ALTER TABLE Employee ADD Phone VARCHAR(15); (b) ALTER TABLE Employee DROP COLUMN Email;
DELETE removes selected rows (WHERE allowed), can be rolled back and fires triggers. TRUNCATE removes all rows quickly and keeps the table structure. DROP removes the table itself, with its data and structure.
R: 2 | Correct ALTER statements
R: 3 | Three commands differentiated
## Advanced
P: Create Department(DeptID, Name) and Employee(EmpID, Name, DeptID) so that deleting a department deletes its employees, and DeptID in Employee must exist in Department. Explain what happens when a department is deleted.
A: CREATE TABLE Department (DeptID INT PRIMARY KEY, Name VARCHAR(40) NOT NULL);
CREATE TABLE Employee (EmpID INT PRIMARY KEY, Name VARCHAR(50) NOT NULL, DeptID INT, FOREIGN KEY (DeptID) REFERENCES Department(DeptID) ON DELETE CASCADE);
Deleting a department row also deletes all Employee rows with that DeptID, because of ON DELETE CASCADE. Inserting an employee with a non-existent DeptID is rejected.
R: 2 | Department table with primary key
R: 2 | Foreign key with ON DELETE CASCADE
R: 1 | Explains the cascade effect
