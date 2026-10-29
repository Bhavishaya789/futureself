# ER model: entities, attributes and relationships
minutes: 30
yt: ER model DBMS entities attributes relationships
yt: ER diagram cardinality participation constraints
@study
The **Entity-Relationship (ER) model** is a high-level way to design a database before any tables exist. It is drawn as an **ER diagram (ERD)**.

## Entities
- An **entity** is a real-world thing that can be told apart from others: a student, a course, a book.
- An **entity set** is a collection of similar entities (all students). It is drawn as a rectangle.
- A **strong entity** has its own key. A **weak entity** has no complete key of its own and depends on an **owner (identifying) entity**; it is drawn as a double rectangle and identified by the owner's key plus a **partial key** (discriminator). Example: `Dependent` of an `Employee`.

## Attributes
- **Simple** (atomic) versus **composite** (Name made of First, Last).
- **Single-valued** versus **multivalued** (phone numbers); multivalued is drawn with a double ellipse.
- **Derived** attributes can be calculated from others (Age from DateOfBirth); drawn with a dashed ellipse.
- **Key attribute** uniquely identifies an entity; it is underlined.
- **NULL** means unknown, not applicable or missing.

## Relationships
A **relationship** associates entities; a diamond in the diagram. The **degree** is the number of entity sets involved: unary (recursive), binary, ternary.

### Cardinality ratio (for a binary relationship)
- **One-to-one (1:1):** a department has one head and a person heads at most one department.
- **One-to-many (1:N):** one department has many employees; each employee works in one department.
- **Many-to-many (M:N):** a student takes many courses; a course has many students.

### Participation constraint
- **Total participation** (double line): every entity must take part. Every employee must belong to a department.
- **Partial participation** (single line): some entities may not take part.

A relationship can have its own attributes. In `Student takes Course`, the attribute `grade` belongs to the relationship, not to either entity.

## Role names and recursion
When the same entity set plays more than one role, label the roles. In `Employee supervises Employee` the roles are supervisor and subordinate.

## Design tips
1. Find the nouns: they become entities or attributes.
2. Find the verbs: they become relationships.
3. Pick keys early.
4. Do not store derivable facts twice.

> A weak entity cannot exist without its owner. If the employee row is deleted, the dependent rows go with it.
@qa
Q: What is the difference between a strong and a weak entity?
A: A strong entity has a primary key of its own. A weak entity has no full key; it is identified by the key of its owner entity combined with its own partial key, and it depends on the owner for existence.
Q: What is a multivalued attribute? Give an example.
A: An attribute that can hold more than one value for a single entity, such as the phone numbers of a student. It is drawn with a double ellipse.
Q: What is total participation?
A: Every entity in the set must take part in the relationship at least once, for example every employee must belong to some department. It is drawn with a double line.
Q: Where does the attribute "grade" belong in Student-takes-Course?
A: On the relationship, because the grade depends on the pair (student, course), not on the student alone or the course alone.
Q: What does the degree of a relationship mean?
A: The number of entity sets that take part in it. Two is binary, three is ternary, one is unary or recursive.
@quiz
? Which symbol represents a relationship in an ER diagram?
- Rectangle
- Ellipse
+ Diamond
- Triangle
! Entities are rectangles, attributes are ellipses and relationships are diamonds.
? A student can enrol in many courses and a course can have many students. The cardinality is
- 1:1
- 1:N
+ M:N
- N:1
! Both sides are many, so it is many-to-many.
? A derived attribute is shown as
- double ellipse
- underlined ellipse
+ dashed ellipse
- rectangle
! A dashed ellipse marks an attribute that can be computed from others, such as Age.
? Which entity depends on another for its identification?
- Strong entity
+ Weak entity
- Associative key
- Super entity
! A weak entity borrows its identity from an owner entity.
? Every employee must belong to some department. This is
- partial participation
+ total participation
- optional relationship
- derived relationship
! Total participation means no entity is left out of the relationship.

@visual
graph | A many-to-many relationship in an ER diagram | Student-Enrolls: M; Enrolls-Course: N

@problems
## Moderate
P: A library has books, members and loans. Identify the entities, two attributes for each entity, the relationship, and a suitable primary key for each entity.
A: Entities: Book (ISBN, Title, Author), Member (MemberID, Name, Phone), relationship Borrows between Member and Book (with attributes IssueDate, ReturnDate). Primary keys: ISBN for Book, MemberID for Member. The relationship is many-to-many because a member can borrow many books over time and a book can be borrowed by many members.
R: 2 | Entities and attributes
R: 2 | Relationship named with correct cardinality
R: 1 | Correct primary keys
## High
P: Explain the cardinality ratios 1:1, 1:N and M:N with an example each. What is a weak entity? Give an example.
A: 1:1: one person has one passport. 1:N: one department has many employees. M:N: students enrol in many courses and each course has many students.
A weak entity has no primary key of its own and depends on an owner (strong) entity through an identifying relationship; it is identified by the owner's key plus a partial key. Example: Dependent of an Employee, identified by EmpID plus the dependent's name.
R: 3 | Three cardinalities with examples
R: 2 | Weak entity and example
## Advanced
P: Design an ER model for a hospital with doctors, patients and appointments. State entities, keys, relationships with cardinality and how you treat the many-to-many relationship. List one derived attribute and one multivalued attribute.
A: Entities: Doctor (DoctorID key, Name, Specialisation), Patient (PatientID key, Name, DOB, Phones), Appointment as a relationship Consults between Doctor and Patient with attributes Date, Time, Fee. A doctor sees many patients and a patient sees many doctors: M:N. In the relational design the M:N becomes a separate Appointment table with both keys.
Derived attribute: Age derived from DOB. Multivalued attribute: Phones for a patient.
R: 2 | Entities with keys
R: 2 | M:N relationship with its own attributes
R: 1 | Derived attribute
R: 1 | Multivalued attribute
