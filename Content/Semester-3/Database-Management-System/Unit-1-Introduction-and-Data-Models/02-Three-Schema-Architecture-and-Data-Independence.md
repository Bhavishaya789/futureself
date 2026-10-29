# Three-schema architecture and data independence
minutes: 25
yt: three schema architecture DBMS data independence
yt: physical and logical data independence explained
@study
A database has an overall design (the **schema**) and the actual data stored at a moment in time (the **instance**, also called the database state). Schemas change rarely; instances change constantly. The **three-schema architecture** separates the database into three levels so that changes at one level do not disturb the others.

## The three levels
- **External (view) level:** many schemas, one per user group. Each shows only the part of the data that group needs. A student sees marks and fees; a librarian sees borrowed books.
- **Conceptual (logical) level:** one schema describing the whole database for the community of users: entities, attributes, relationships, constraints. It hides physical details.
- **Internal (physical) level:** how data is actually stored: file structures, indexes, record layout, compression, access paths.

Between the levels sit **mappings**: external/conceptual mapping and conceptual/internal mapping. The DBMS uses them to translate a request on a view into operations on stored data.

## Data independence
Data independence is the ability to change a schema at one level without rewriting the schema at the next higher level.
- **Logical data independence:** change the conceptual schema (add a column, split a table) without changing external schemas or application programs. This is harder to achieve because applications depend on logical structure.
- **Physical data independence:** change the internal schema (add an index, change the file organisation, move to a faster disk) without changing the conceptual schema. This is easier and widely achieved.

## Example
Suppose the `Student` table gets a new column `email`. With logical independence, a view that exposes only `roll_no` and `name` keeps working untouched. If the DBA adds an index on `name`, queries run faster but no SQL needs changing: that is physical independence.

## Database languages in this picture
The DBA uses DDL to define conceptual and internal schemas, and **VDL** (view definition language) for external ones. Users use DML to read and update data.

> Remember: the higher the level, the more abstract. External is closest to the user, internal is closest to the disk.
@qa
Q: What are the three levels of the three-schema architecture?
A: External (view) level, conceptual (logical) level and internal (physical) level.
Q: What is the difference between a schema and an instance?
A: The schema is the design or structure and changes rarely. The instance is the data actually stored at a particular moment and changes with every insert, update or delete.
Q: Which kind of data independence is harder to achieve, and why?
A: Logical data independence, because application programs and views depend on the logical structure, so changing tables can force changes above them.
Q: Give an example of physical data independence.
A: Adding an index or moving the table to another disk makes queries faster, but no SQL statement and no conceptual schema has to change.
Q: What do mappings do between the levels?
A: They let the DBMS translate a request written against one level into operations at the next level down, for example from a view to stored tables.
@quiz
? Which level describes how data is physically stored on disk?
- External
- Conceptual
+ Internal
- Logical
! The internal (physical) level covers file structures, indexes and storage details.
? Changing the internal schema without changing the conceptual schema is called
+ physical data independence
- logical data independence
- normalisation
- denormalisation
! Physical data independence protects the conceptual level from storage changes.
? A view for the library staff showing only issued books belongs to which level?
+ External
- Conceptual
- Internal
- Physical
! Views are external schemas tailored to a group of users.
? Which statement is true?
- The schema changes every second
- The instance never changes
+ The instance changes often while the schema changes rarely
- Schema and instance mean the same thing
! The schema is the design; the instance is the current content.
? Adding a new column to a table without breaking existing user views demonstrates
- physical independence
+ logical independence
- data redundancy
- concurrency
! Logical data independence lets the conceptual schema grow while external schemas stay valid.

@visual
layers | Three-schema architecture | View level (external): what each user group sees; Conceptual level: logical design of the whole database; Physical level (internal): how data is stored on disk

@problems
## Moderate
P: Name the three levels of the three-schema architecture and say what each describes.
A: External (view) level: the part of the database each user or application sees. Conceptual (logical) level: the structure of the whole database for the community, with entities, attributes and constraints. Internal (physical) level: how data is actually stored, with files, indexes and record layout.
R: 1 | External level
R: 1 | Conceptual level
R: 1 | Internal level
## High
P: Explain physical and logical data independence with one example of each.
A: Physical data independence: changing the internal schema (for example adding an index or moving a file to a new disk) without changing the conceptual schema or application programs. Logical data independence: changing the conceptual schema (for example adding a new column) without changing external views or applications. Logical independence is harder to achieve.
R: 2 | Physical independence with an example
R: 2 | Logical independence with an example
R: 1 | Notes logical independence is harder
## Advanced
P: For each change, state which independence is involved: (a) creating an index on the Name column, (b) adding an Email column to the Student table so existing reports still work, (c) changing from heap file storage to a sorted file. What role do the mappings between levels play?
A: (a) physical data independence. (b) logical data independence. (c) physical data independence.
Mappings translate a request on an external view to the conceptual schema, and then to the internal schema. When a lower level changes, only the mapping is updated, so higher levels and programs stay unchanged.
R: 2 | All three classified correctly
R: 2 | Mappings explained as translation between levels
R: 1 | States that only the mapping needs updating
