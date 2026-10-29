# Integrity constraints
minutes: 25
yt: integrity constraints DBMS domain entity referential
yt: referential integrity cascade on delete SQL
@study
**Integrity constraints** are rules that the DBMS enforces so that stored data stays correct and consistent.

## Domain constraints
Each attribute value must come from its declared domain: correct data type, length, range or allowed list.
```sql
CREATE TABLE Student (
  roll_no INT PRIMARY KEY,
  age     INT CHECK (age BETWEEN 15 AND 60),
  gender  CHAR(1) CHECK (gender IN ('M','F','O'))
);
```

## Key constraints
Every relation has at least one candidate key; values of a key must be **unique** across tuples.

## Entity integrity
No primary-key attribute may be NULL, because NULL means unknown and a row with an unknown identity cannot be told apart from others.

## Referential integrity
If a tuple in table R1 has a foreign key referring to R2, the referenced primary key value **must exist** in R2 (or the foreign key must be NULL). So an enrolment cannot refer to a student who does not exist.

### Actions on delete/update of the referenced row
- **RESTRICT / NO ACTION:** reject the operation.
- **CASCADE:** delete or update the referencing rows too.
- **SET NULL:** set the foreign key to NULL.
- **SET DEFAULT:** set the foreign key to its default value.

```sql
CREATE TABLE Enroll (
  roll_no INT,
  course_id INT,
  FOREIGN KEY (roll_no) REFERENCES Student(roll_no)
     ON DELETE CASCADE ON UPDATE CASCADE
);
```

## Other constraints
- **NOT NULL:** column must have a value.
- **UNIQUE:** no two rows may repeat the value.
- **CHECK:** a condition on a row.
- **DEFAULT:** value used when none is supplied.
- **Assertions and triggers:** general business rules across tables (for example, "a department cannot have more than 100 employees").

## When are constraints checked?
After each INSERT, DELETE or UPDATE statement, or at COMMIT if declared as deferrable. A violating operation is rejected and the database stays valid.

> Entity integrity is about primary keys (no NULL). Referential integrity is about foreign keys (must match something).
@qa
Q: What is referential integrity?
A: A foreign key value must either be NULL or match an existing primary key value in the referenced table, so no row points to something that does not exist.
Q: What does ON DELETE CASCADE do?
A: When the referenced parent row is deleted, all child rows that refer to it are deleted automatically.
Q: What is entity integrity?
A: It says that no attribute of a primary key can be NULL, so every row can be identified.
Q: Which constraint would you use to ensure age is between 15 and 60?
A: A CHECK constraint, for example CHECK (age BETWEEN 15 AND 60).
Q: Difference between UNIQUE and PRIMARY KEY?
A: Both enforce uniqueness, but a table can have only one primary key and it cannot be NULL, while it can have many UNIQUE constraints and they usually allow NULL.
@quiz
? Which constraint ensures that a foreign key value exists in the parent table?
- Entity integrity
- Domain constraint
+ Referential integrity
- Check constraint
! Referential integrity links child rows to existing parent rows.
? A primary key containing NULL violates
+ entity integrity
- referential integrity
- domain constraint
- a trigger
! Entity integrity forbids NULL in primary key attributes.
? ON DELETE CASCADE means
- deleting is rejected
+ child rows are deleted with the parent
- the foreign key is set to NULL
- the parent is kept
! CASCADE propagates the delete to referencing rows.
? CHECK (age >= 18) is a
- key constraint
+ domain/row constraint
- referential constraint
- entity constraint
! It restricts the allowed values of a column, which is a domain-type constraint.
? Which action is performed by ON DELETE SET NULL?
- Removes the child rows
+ Sets the foreign key in child rows to NULL
- Blocks the delete
- Copies the row
! The child rows stay but lose the reference.

@visual
mind | Integrity constraints | Integrity constraints; Domain constraint; Key constraint; Entity integrity; Referential integrity

@problems
## Moderate
P: Define entity integrity and referential integrity.
A: Entity integrity: no attribute of the primary key may be NULL, so every row can be identified. Referential integrity: a foreign key value must either be NULL or match a primary key value that exists in the referenced table.
R: 2 | Entity integrity
R: 2 | Referential integrity
## High
P: Department row (10) has employees. What happens when you delete department 10 under ON DELETE RESTRICT, CASCADE and SET NULL?
A: RESTRICT: the delete is rejected because employees refer to it. CASCADE: the department and all its employees are deleted. SET NULL: the department is deleted and the DeptID of those employees becomes NULL (allowed only if the column accepts NULL).
R: 2 | RESTRICT and CASCADE
R: 2 | SET NULL with the NULL condition
## Advanced
P: Dept has rows 10 and 20. Emp(EmpID primary key, DeptID foreign key to Dept) already has (1, 10). Which inserts are rejected and which constraint is violated? (a) (1, 20) (b) (NULL, 10) (c) (2, 30) (d) (3, NULL)
A: (a) Rejected: duplicate primary key (key constraint). (b) Rejected: NULL primary key (entity integrity). (c) Rejected: DeptID 30 does not exist (referential integrity). (d) Accepted: a foreign key may be NULL.
R: 2 | (a) and (b) correct with reasons
R: 2 | (c) correct with reason
R: 1 | (d) accepted
