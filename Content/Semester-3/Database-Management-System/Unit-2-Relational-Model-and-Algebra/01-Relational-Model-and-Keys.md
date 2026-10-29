# Relational model and keys
minutes: 30
yt: relational model DBMS keys super key candidate key primary key foreign key
yt: types of keys in DBMS with examples
@study
Proposed by E. F. Codd (1970), the **relational model** represents all data as **relations**: tables of rows and columns.

## Terminology
- **Relation** = table. **Tuple** = row. **Attribute** = column. **Domain** = set of allowed values of an attribute.
- **Degree** = number of attributes. **Cardinality** = number of tuples.
- A **relation schema** `R(A1, A2, ..., An)` is the structure; a **relation instance** is the current set of tuples.
- A relation is a **set** of tuples, so there is no order and no duplicate rows. Each value is **atomic**.

## Keys
- **Super key:** any set of attributes that uniquely identifies a tuple. `{roll_no}`, `{roll_no, name}` are super keys.
- **Candidate key:** a **minimal** super key (no attribute can be removed). A table can have several.
- **Primary key:** the candidate key chosen to identify tuples. It cannot be NULL and is unique.
- **Alternate key:** candidate keys not chosen as primary.
- **Composite key:** a key made of more than one attribute.
- **Foreign key:** attribute(s) in one relation that refer to the primary key of another (or the same) relation. It creates the link between tables.
- **Unique key:** enforces uniqueness; allows NULL in most systems.

## Example
```sql
CREATE TABLE Student (
  roll_no INT PRIMARY KEY,
  email   VARCHAR(60) UNIQUE NOT NULL,
  name    VARCHAR(50)
);
CREATE TABLE Enroll (
  roll_no   INT REFERENCES Student(roll_no),
  course_id INT,
  PRIMARY KEY (roll_no, course_id)
);
```
Here `roll_no` and `email` are candidate keys of `Student`; `roll_no` is chosen as primary, `email` is an alternate key. In `Enroll`, `roll_no` is a foreign key.

## Counting super keys
If a relation has n attributes and a single candidate key of one attribute, the number of super keys is 2^(n-1), because the key attribute must be present and each of the other n-1 attributes may be present or absent.

## Properties of the relational model
Each table has a unique name, each column a unique name within the table, values come from a single domain, and the order of rows and columns is not significant.

> Primary key = unique + not null. Candidate key = minimal super key.
@qa
Q: What is the difference between a super key and a candidate key?
A: A super key is any attribute set that uniquely identifies rows. A candidate key is a super key with no redundant attribute, that is, a minimal one.
Q: Can a primary key contain NULL?
A: No. A primary key must be unique and not null (entity integrity).
Q: What is a foreign key and why is it used?
A: It is an attribute (or set) in one table that refers to the primary key of another table. It links tables and enforces referential integrity.
Q: Can a table have more than one candidate key? More than one primary key?
A: A table can have many candidate keys but only one primary key.
Q: A relation has 4 attributes and only one single-attribute candidate key. How many super keys does it have?
A: 2^(4-1) = 8, because the key attribute is always present and each of the other three attributes can be included or not.
@quiz
? A minimal set of attributes that uniquely identifies a tuple is a
- super key
+ candidate key
- foreign key
- composite attribute
! A candidate key is a minimal super key.
? Which key may refer to the primary key of another table?
- Primary key
- Alternate key
+ Foreign key
- Super key
! A foreign key stores values from the referenced primary key.
? The number of tuples in a relation is its
- degree
+ cardinality
- domain
- schema
! Cardinality counts rows; degree counts columns.
? Which of these is NOT a property of a relation?
- No duplicate tuples
- Values are atomic
+ Tuples have a fixed order
- Attribute names are distinct
! The order of tuples in a relation is not significant.
? Relation R(A,B,C,D) has the single candidate key A. How many super keys does it have?
- 4
+ 8
- 15
- 16
! Any subset that contains A is a super key: 2^3 = 8.

@visual
layers | Keys from widest to narrowest | Super key: any attribute set that identifies a row; Candidate key: a minimal super key; Primary key: the candidate key chosen by the designer; Alternate key: the candidate keys not chosen

@problems
## Moderate
P: Student(RollNo, Email, Name, Phone) where RollNo and Email are each unique. List the candidate keys, a primary key, the alternate key, and one super key that is not a candidate key.
A: Candidate keys: RollNo and Email. Primary key: RollNo (chosen). Alternate key: Email. A super key that is not minimal: (RollNo, Name), because RollNo alone already identifies the row.
R: 2 | Candidate keys RollNo and Email
R: 1 | Primary and alternate key
R: 2 | Valid non-minimal super key
## High
P: Define a foreign key. For Department(DeptID, Name) and Employee(EmpID, Name, DeptID), identify the foreign key and what it guarantees.
A: A foreign key is an attribute (or set) in one table that refers to the primary key of another table. Employee.DeptID references Department.DeptID. It guarantees that every employee's DeptID is either NULL or equals an existing department, so no employee points to a department that does not exist.
R: 2 | Definition of a foreign key
R: 2 | Employee.DeptID references Department.DeptID
R: 1 | Guarantee: no dangling references
## Advanced
P: R(A, B, C, D) has candidate keys A and B only. How many super keys does R have? Show the counting method.
A: Every subset of the 4 attributes is 2^4 = 16 subsets. A subset is a super key if it contains A or contains B. Subsets that contain neither A nor B are the subsets of {C, D}: 2^2 = 4. So super keys = 16 - 4 = 12.
R: 2 | Total 16 subsets
R: 2 | Subtracts the 4 subsets without A or B
R: 1 | Answer 12
