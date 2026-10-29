# Mapping an ER diagram to relational tables
minutes: 30
yt: ER to relational mapping DBMS
yt: convert ER diagram to tables weak entity many to many
@study
After designing with ER, we convert the diagram to **relations** (tables). The rules below are standard and give a correct, loss-free schema.

## Step 1: strong entities
Create a table for each strong entity with its simple attributes. For a composite attribute keep only its simple parts. The key attribute becomes the **primary key**.

`Student(roll_no PK, first_name, last_name, dob)`

## Step 2: weak entities
Create a table with the weak entity's attributes plus the **owner's primary key as a foreign key**. The primary key is (owner key + partial key).

`Dependent(emp_id FK, dep_name, relation)` with primary key `(emp_id, dep_name)`.

## Step 3: binary 1:1 relationships
Add the primary key of one side as a foreign key on the other, preferably on the side with total participation. Alternatives are merging the two tables or a separate relationship table.

## Step 4: binary 1:N relationships
Put the primary key of the **"one" side** into the **"many" side** table as a foreign key, together with any relationship attributes.

`Employee(emp_id PK, name, dept_id FK)` for `Department 1:N Employee`.

## Step 5: binary M:N relationships
Create a **new table** whose primary key is the combination of both participating keys. Relationship attributes go here.

`Enrolls(roll_no FK, course_id FK, grade)` with primary key `(roll_no, course_id)`.

## Step 6: multivalued attributes
Create a new table holding the attribute value and the owner's key. Primary key is the pair.

`StudentPhone(roll_no FK, phone)` with primary key `(roll_no, phone)`.

## Step 7: n-ary relationships
Create a table with the keys of all participating entities as foreign keys; the primary key is usually the combination of them (adjusted by cardinality).

## Step 8: specialization (four options)
1. One table per class, subclasses carry the superclass key.
2. One table per subclass only (works for total, disjoint).
3. One single table with a type attribute (many NULLs possible).
4. One table with several boolean type flags (for overlapping).

## Derived attributes
Not stored; compute them in queries or views.

> Quick rule: 1:N puts a foreign key on the N side. M:N always needs its own table.
@qa
Q: How is a many-to-many relationship converted to tables?
A: Create a separate table whose primary key is the combination of the primary keys of the two entities, which are also foreign keys. Relationship attributes become columns of this table.
Q: Where does the foreign key go for a 1:N relationship?
A: On the "N" (many) side, referencing the primary key of the "1" side.
Q: How is a multivalued attribute stored in the relational model?
A: In a separate table with the owner's key and the attribute value, with both columns together as the primary key.
Q: What is the primary key of a weak entity's table?
A: The primary key of the owner entity combined with the weak entity's partial key.
Q: Are derived attributes stored?
A: Normally not. They are calculated when needed, for instance with an expression in a query or a view.
@quiz
? For a 1:N relationship between Department and Employee, the foreign key is placed in
- Department
+ Employee
- a new table only
- neither table
! The "many" side table (Employee) stores the department key.
? The primary key of the table made from an M:N relationship is
- the key of one entity only
- a new auto-number only
+ the combination of both entity keys
- any non-key attribute
! Each pair of entities may occur once, so the pair of keys identifies a row.
? A multivalued attribute such as phone numbers becomes
- a column with a comma separated list
+ a separate table
- a derived column
- a view
! A separate table keeps each value atomic and the design normalised.
? The primary key of a weak entity table is
- its partial key alone
+ owner key plus partial key
- any foreign key
- nothing, weak entities have no table
! The owner's key plus the discriminator uniquely identifies it.
? Which attribute is normally not stored in a table?
- Key attribute
- Composite attribute (its parts)
+ Derived attribute
- Simple attribute
! Derived values can be computed from other columns.

@visual
steps | Rules for mapping an ER diagram to tables | Each strong entity becomes a table with its key; A weak entity becomes a table with the owner's key plus its partial key; A 1:N relationship adds a foreign key on the N side; An M:N relationship becomes a new table holding both keys; A multivalued attribute becomes its own table

@problems
## Moderate
P: Map the entity Student(RollNo, Name(First, Last), Phones) to tables where Name is composite and Phones is multivalued.
A: Student(RollNo, FirstName, LastName) with primary key RollNo. The composite attribute is flattened into its parts. The multivalued attribute needs a separate table: StudentPhone(RollNo, Phone) with primary key (RollNo, Phone) and RollNo as a foreign key to Student.
R: 2 | Composite attribute flattened
R: 2 | Separate table for the multivalued attribute with correct key
## High
P: Department (DeptID, Name) and Employee (EmpID, Name) have a 1:N relationship WorksIn. Students and Courses have an M:N relationship Enrolls with attribute Grade. Write the relational schema for both.
A: 1:N: Employee(EmpID, Name, DeptID) where DeptID is a foreign key to Department(DeptID); the foreign key goes on the N side.
M:N: Enrolls(RollNo, CourseID, Grade) with primary key (RollNo, CourseID); RollNo references Student and CourseID references Course. The relationship attribute Grade goes into this new table.
R: 2 | Foreign key on the N side
R: 2 | New table for M:N with composite key
R: 1 | Relationship attribute in the new table
## Advanced
P: Map the weak entity Dependent(Name, Age) of Employee(EmpID), and the ternary relationship Supplies among Supplier, Part and Project with attribute Quantity.
A: Dependent(EmpID, DepName, Age) with primary key (EmpID, DepName) and EmpID a foreign key to Employee, usually with ON DELETE CASCADE because a dependent cannot exist without its owner.
Supplies(SupplierID, PartID, ProjectID, Quantity) with primary key (SupplierID, PartID, ProjectID) when the relationship is M:N:N, and three foreign keys.
R: 2 | Weak entity table with owner key in the primary key
R: 2 | Ternary relationship table with three foreign keys
R: 1 | Cascade delete reasoning for the weak entity
