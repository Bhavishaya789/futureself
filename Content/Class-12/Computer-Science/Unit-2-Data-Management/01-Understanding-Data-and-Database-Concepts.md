# Understanding Data and Database Concepts
minutes: 45
yt: class 12 computer science database dbms relational keys primary foreign candidate schema
@study
Data are raw facts; information is processed data; a database is an organised collection of related data stored for easy access, update and management. File system problems: data redundancy, inconsistency, difficulty in access, lack of data sharing, no security and integrity control. A DBMS (Database Management System) is software to define, create, query, update and manage databases, e.g. MySQL, Oracle, PostgreSQL, SQL Server, MS Access, SQLite. Advantages: reduced redundancy, consistency, sharing, security, integrity, backup and recovery, and concurrent access. Relational model: data stored in relations (tables) made of rows and columns. Terms: relation (table), tuple (row or record), attribute (column or field), domain (set of allowed values), degree (number of attributes), cardinality (number of tuples), schema (structure of the table) and instance (the data at a moment). Keys: a candidate key is an attribute or set that can uniquely identify rows; the primary key is the candidate chosen to identify rows, which cannot be NULL or duplicate; the remaining candidates are alternate keys; a composite key uses more than one attribute; a foreign key is an attribute that refers to the primary key of another table and links tables, enforcing referential integrity; a super key is any set containing a candidate key. NULL means unknown or missing, not zero. Properties of relations: no duplicate tuples, order of rows and columns does not matter, each cell holds an atomic value. Database users: end users, application programmers, database administrator (DBA). Data models: hierarchical, network, relational, object oriented; the relational model is dominant. Data types: INT, FLOAT, CHAR, VARCHAR, DATE.
## Deep dive: Why DBMS
A DBMS removes the redundancy and inconsistency of flat files and adds security, sharing and integrity.
## Deep dive: Relational terms
Table is relation, row is tuple, column is attribute; degree counts columns and cardinality counts rows.
## Deep dive: Keys
Primary key uniquely identifies rows and cannot be NULL; foreign key links to another table.
## Hindi saransh
Database: DBMS, sambandhit model, shabdavali aur kunjiyan (primary, candidate, foreign key).
> Remember: degree = columns, cardinality = rows.
@formulas
## Key facts
Degree | Columns
Cardinality | Rows
Primary key | Unique not NULL
Foreign key | Links tables
Tuple | Row

@qa
Q: Which are raw facts?
A: Data are raw facts.
Q: What do you know about Data?
A: Data are raw facts.
Q: Which is processed data?
A: Information is processed data.
Q: What do you know about Information?
A: Information is processed data.
Q: Which is an organised collection of related data?
A: Database is an organised collection of related data.
Q: What do you know about Database?
A: Database is an organised collection of related data.
Q: Which is software to manage databases?
A: DBMS is software to manage databases.
Q: What do you know about DBMS?
A: DBMS is software to manage databases.
Q: Which is a relational DBMS?
A: MySQL is a relational DBMS.
Q: What do you know about MySQL?
A: MySQL is a relational DBMS.
Q: What do you know about Oracle?
A: Oracle is a relational DBMS.
Q: Which is an open source DBMS?
A: PostgreSQL is an open source DBMS.
Q: What do you know about PostgreSQL?
A: PostgreSQL is an open source DBMS.
Q: Which is a lightweight embedded database?
A: SQLite is a lightweight embedded database.
Q: What do you know about SQLite?
A: SQLite is a lightweight embedded database.
Q: Which is unnecessary duplication?
A: Data redundancy is unnecessary duplication.
Q: What do you know about Data redundancy?
A: Data redundancy is unnecessary duplication.
Q: Which arises from unsynchronised copies?
A: Data inconsistency arises from unsynchronised copies.
Q: What do you know about Data inconsistency?
A: Data inconsistency arises from unsynchronised copies.
Q: Which gives poor data sharing?
A: File system gives poor data sharing.
Q: What do you know about File system?
A: File system gives poor data sharing.
Q: Which lacks security control?
A: File system lacks security control.
Q: Which makes access difficult?
A: File system makes access difficult.
Q: Which reduces redundancy?
A: DBMS reduces redundancy.
Q: Which enforces integrity?
A: DBMS enforces integrity.
Q: Which supports concurrent access?
A: DBMS supports concurrent access.
Q: Which provides backup and recovery?
A: DBMS provides backup and recovery.
Q: Which is a table?
A: Relation is a table.
Q: What do you know about Relation?
A: Relation is a table.
Q: Which is a row?
A: Tuple is a row.
Q: What do you know about Tuple?
A: Tuple is a row.
Q: Which is a column?
A: Attribute is a column.
Q: What do you know about Attribute?
A: Attribute is a column.
Q: Which is the set of allowed values?
A: Domain is the set of allowed values.
Q: What do you know about Domain?
A: Domain is the set of allowed values.
Q: Which is the number of attributes?
A: Degree is the number of attributes.
Q: What do you know about Degree?
A: Degree is the number of attributes.
Q: Which is the number of tuples?
A: Cardinality is the number of tuples.
Q: What do you know about Cardinality?
A: Cardinality is the number of tuples.
Q: Which is the structure of a table?
A: Schema is the structure of a table.
Q: What do you know about Schema?
A: Schema is the structure of a table.
Q: Which is the data at a moment?
A: Instance is the data at a moment.
Q: What do you know about Instance?
A: Instance is the data at a moment.
Q: Which is a single indivisible value in a cell?
A: Atomic value is a single indivisible value in a cell.
Q: What do you know about Atomic value?
A: Atomic value is a single indivisible value in a cell.
Q: Which does not matter in a relation?
A: Row order does not matter in a relation.
Q: What do you know about Row order?
A: Row order does not matter in a relation.
Q: Which are not allowed in a relation?
A: Duplicate tuples are not allowed in a relation.
Q: What do you know about Duplicate tuples?
A: Duplicate tuples are not allowed in a relation.
Q: Which uniquely identifies each row?
A: Primary key uniquely identifies each row.
Q: What do you know about Primary key?
A: Primary key uniquely identifies each row.
Q: Which cannot be NULL?
A: Primary key cannot be NULL.
Q: Which cannot have duplicates?
A: Primary key cannot have duplicates.
Q: Which can uniquely identify rows?
A: Candidate key can uniquely identify rows.
Q: What do you know about Candidate key?
A: Candidate key can uniquely identify rows.
Q: Which is a candidate not chosen as primary?
A: Alternate key is a candidate not chosen as primary.
Q: What do you know about Alternate key?
A: Alternate key is a candidate not chosen as primary.
Q: Which uses more than one attribute?
A: Composite key uses more than one attribute.
Q: What do you know about Composite key?
A: Composite key uses more than one attribute.
Q: Which refers to the primary key of another table?
A: Foreign key refers to the primary key of another table.
Q: What do you know about Foreign key?
A: Foreign key refers to the primary key of another table.
Q: Which enforces referential integrity?
A: Foreign key enforces referential integrity.
Q: Which may contain duplicates?
A: Foreign key may contain duplicates.
Q: Which is any set that contains a candidate key?
A: Super key is any set that contains a candidate key.
Q: What do you know about Super key?
A: Super key is any set that contains a candidate key.
Q: Which means unknown or missing?
A: NULL means unknown or missing.
Q: What do you know about NULL?
A: NULL means unknown or missing.
Q: Which is not the same as zero?
A: NULL is not the same as zero.
Q: Which manages the database?
A: Database administrator manages the database.
Q: What do you know about Database administrator?
A: Database administrator manages the database.
Q: Which uses the database through applications?
A: End user uses the database through applications.
Q: What do you know about End user?
A: End user uses the database through applications.
Q: Which writes database programs?
A: Application programmer writes database programs.
Q: What do you know about Application programmer?
A: Application programmer writes database programs.
Q: Which stores data in tables?
A: Relational model stores data in tables.
Q: What do you know about Relational model?
A: Relational model stores data in tables.
Q: Which organises data as a tree?
A: Hierarchical model organises data as a tree.
Q: What do you know about Hierarchical model?
A: Hierarchical model organises data as a tree.
Q: Which uses graph like links?
A: Network model uses graph like links.
Q: What do you know about Network model?
A: Network model uses graph like links.
Q: Which is a variable length string type?
A: Varchar is a variable length string type.
Q: What do you know about Varchar?
A: Varchar is a variable length string type.
Q: Which is a fixed length string type?
A: Char is a fixed length string type.
Q: What do you know about Char?
A: Char is a fixed length string type.
Q: Which stores calendar dates?
A: Date stores calendar dates.
Q: What do you know about Date?
A: Date stores calendar dates.
Q: Which equals the number of rows?
A: Tuple count equals the number of rows.
Q: What do you know about Tuple count?
A: Tuple count equals the number of rows.
Q: Which equals the number of columns?
A: Attribute count equals the number of columns.
Q: What do you know about Attribute count?
A: Attribute count equals the number of columns.
Q: Which may contain duplicate rows?
A: Table without primary key may contain duplicate rows.
Q: What do you know about Table without primary key?
A: Table without primary key may contain duplicate rows.
Q: Which is an artificial identifier?
A: Surrogate key is an artificial identifier.
Q: What do you know about Surrogate key?
A: Surrogate key is an artificial identifier.
Q: Which prevents dangling references?
A: Referential integrity prevents dangling references.
Q: What do you know about Referential integrity?
A: Referential integrity prevents dangling references.
Q: Which means accuracy and consistency?
A: Data integrity means accuracy and consistency.
Q: What do you know about Data integrity?
A: Data integrity means accuracy and consistency.
Q: Which separates programs from storage?
A: Data independence separates programs from storage.
Q: What do you know about Data independence?
A: Data independence separates programs from storage.
Q: Which is data about data?
A: Metadata is data about data.
Q: What do you know about Metadata?
A: Metadata is data about data.
Q: What is a database?
A: An organised collection of related data.
Q: What is a DBMS?
A: Software for creating and managing databases.
Q: What is a tuple?
A: A row of a table.
Q: What is degree?
A: Number of attributes.
Q: What is cardinality?
A: Number of tuples.
Q: What is a primary key?
A: An attribute that uniquely identifies each row and is not NULL.
Q: What is a foreign key?
A: An attribute referring to the primary key of another table.
Q: What does NULL mean?
A: Unknown or missing value.
@quiz
? Which are raw facts?
+ Data
- Database
- DBMS
- Information
! Data are raw facts.
? Which statement is true of Data?
- Is a relational DBMS
+ Are raw facts
- Is software to manage databases
- Is processed data
! Data are raw facts.
? Which is processed data?
+ Information
- MySQL
- SQLite
- Oracle
! Information is processed data.
? Which statement is true of Information?
+ Is processed data
- Is an organised collection of related data
- Are raw facts
- Is a relational DBMS
! Information is processed data.
? Which is an organised collection of related data?
- Data
- PostgreSQL
- Information
+ Database
! Database is an organised collection of related data.
? Which statement is true of Database?
- Are raw facts
- Is software to manage databases
+ Is an organised collection of related data
- Is an open source DBMS
! Database is an organised collection of related data.
? Which is software to manage databases?
- MySQL
- Data
- PostgreSQL
+ DBMS
! DBMS is software to manage databases.
? Which statement is true of DBMS?
+ Is software to manage databases
- Is an organised collection of related data
- Are raw facts
- Is an open source DBMS
! DBMS is software to manage databases.
? Which is a relational DBMS?
- Oracle
- Database
- SQLite
+ MySQL
! MySQL is a relational DBMS.
? Which statement is true of MySQL?
- Is an open source DBMS
+ Is a relational DBMS
- Is a lightweight embedded database
- Is processed data
! MySQL is a relational DBMS.
? Which statement is true of Oracle?
+ Is a relational DBMS
- Are raw facts
- Is an open source DBMS
- Is software to manage databases
! Oracle is a relational DBMS.
? Which is an open source DBMS?
- SQLite
+ PostgreSQL
- DBMS
- MySQL
! PostgreSQL is an open source DBMS.
? Which statement is true of PostgreSQL?
- Is software to manage databases
- Is processed data
- Is an organised collection of related data
+ Is an open source DBMS
! PostgreSQL is an open source DBMS.
? Which is a lightweight embedded database?
- Data
- Oracle
- MySQL
+ SQLite
! SQLite is a lightweight embedded database.
? Which statement is true of SQLite?
- Is an organised collection of related data
+ Is a lightweight embedded database
- Are raw facts
- Is an open source DBMS
! SQLite is a lightweight embedded database.
? Which is unnecessary duplication?
- Data inconsistency
- DBMS
- File system
+ Data redundancy
! Data redundancy is unnecessary duplication.
? Which statement is true of Data redundancy?
- Enforces integrity
+ Is unnecessary duplication
- Reduces redundancy
- Lacks security control
! Data redundancy is unnecessary duplication.
? Which arises from unsynchronised copies?
+ Data inconsistency
- File system
- Data redundancy
- DBMS
! Data inconsistency arises from unsynchronised copies.
? Which statement is true of Data inconsistency?
- Is unnecessary duplication
- Reduces redundancy
- Lacks security control
+ Arises from unsynchronised copies
! Data inconsistency arises from unsynchronised copies.
? Which gives poor data sharing?
- Data inconsistency
- DBMS
- Data redundancy
+ File system
! File system gives poor data sharing.
? Which statement is true of File system?
- Is unnecessary duplication
- Supports concurrent access
- Reduces redundancy
+ Gives poor data sharing
! File system gives poor data sharing.
? Which lacks security control?
+ File system
- Data redundancy
- Data inconsistency
- DBMS
! File system lacks security control.
? Which makes access difficult?
- Data inconsistency
+ File system
- DBMS
- Data redundancy
! File system makes access difficult.
? Which reduces redundancy?
+ DBMS
- Data redundancy
- File system
- Data inconsistency
! DBMS reduces redundancy.
? Which enforces integrity?
- Data redundancy
+ DBMS
- Data inconsistency
- File system
! DBMS enforces integrity.
? Which supports concurrent access?
- File system
- Data inconsistency
+ DBMS
- Data redundancy
! DBMS supports concurrent access.
? Which provides backup and recovery?
- File system
+ DBMS
- Data inconsistency
- Data redundancy
! DBMS provides backup and recovery.
? Which is a table?
- Atomic value
- Attribute
- Schema
+ Relation
! Relation is a table.
? Which statement is true of Relation?
- Is the set of allowed values
- Is a single indivisible value in a cell
- Is the number of attributes
+ Is a table
! Relation is a table.
? Which is a row?
+ Tuple
- Atomic value
- Instance
- Cardinality
! Tuple is a row.
? Which statement is true of Tuple?
+ Is a row
- Is the number of attributes
- Is a table
- Does not matter in a relation
! Tuple is a row.
? Which is a column?
- Domain
- Relation
- Atomic value
+ Attribute
! Attribute is a column.
? Which statement is true of Attribute?
+ Is a column
- Is a table
- Does not matter in a relation
- Is the number of tuples
! Attribute is a column.
? Which is the set of allowed values?
- Instance
- Atomic value
+ Domain
- Tuple
! Domain is the set of allowed values.
? Which statement is true of Domain?
- Is the number of tuples
+ Is the set of allowed values
- Is a column
- Does not matter in a relation
! Domain is the set of allowed values.
? Which is the number of attributes?
+ Degree
- Instance
- Schema
- Tuple
! Degree is the number of attributes.
? Which statement is true of Degree?
- Is the data at a moment
- Is the set of allowed values
- Is the structure of a table
+ Is the number of attributes
! Degree is the number of attributes.
? Which is the number of tuples?
+ Cardinality
- Row order
- Degree
- Tuple
! Cardinality is the number of tuples.
? Which statement is true of Cardinality?
- Is a single indivisible value in a cell
- Is the data at a moment
- Is the number of attributes
+ Is the number of tuples
! Cardinality is the number of tuples.
? Which is the structure of a table?
- Row order
- Cardinality
+ Schema
- Domain
! Schema is the structure of a table.
? Which statement is true of Schema?
+ Is the structure of a table
- Does not matter in a relation
- Is a table
- Is a single indivisible value in a cell
! Schema is the structure of a table.
? Which is the data at a moment?
+ Instance
- Degree
- Cardinality
- Duplicate tuples
! Instance is the data at a moment.
? Which statement is true of Instance?
- Is the set of allowed values
- Is the number of attributes
- Is a column
+ Is the data at a moment
! Instance is the data at a moment.
? Which is a single indivisible value in a cell?
- Relation
- Schema
+ Atomic value
- Domain
! Atomic value is a single indivisible value in a cell.
? Which statement is true of Atomic value?
+ Is a single indivisible value in a cell
- Is the structure of a table
- Does not matter in a relation
- Is the number of attributes
! Atomic value is a single indivisible value in a cell.
? Which does not matter in a relation?
- Tuple
+ Row order
- Attribute
- Instance
! Row order does not matter in a relation.
? Which statement is true of Row order?
- Is the structure of a table
- Is a column
+ Does not matter in a relation
- Is a single indivisible value in a cell
! Row order does not matter in a relation.
? Which are not allowed in a relation?
+ Duplicate tuples
- Attribute
- Schema
- Instance
! Duplicate tuples are not allowed in a relation.
? Which statement is true of Duplicate tuples?
- Is the number of attributes
- Is the structure of a table
+ Are not allowed in a relation
- Is the number of tuples
! Duplicate tuples are not allowed in a relation.
? Which uniquely identifies each row?
- Composite key
+ Primary key
- Foreign key
- Alternate key
! Primary key uniquely identifies each row.
? Which statement is true of Primary key?
- May contain duplicates
- Refers to the primary key of another table
- Is not the same as zero
+ Uniquely identifies each row
! Primary key uniquely identifies each row.
? Which cannot be NULL?
- Candidate key
- Foreign key
- NULL
+ Primary key
! Primary key cannot be NULL.
? Which cannot have duplicates?
- Super key
- Alternate key
+ Primary key
- Foreign key
! Primary key cannot have duplicates.
? Which can uniquely identify rows?
- Foreign key
- NULL
+ Candidate key
- Alternate key
! Candidate key can uniquely identify rows.
? Which statement is true of Candidate key?
- Uniquely identifies each row
- Is not the same as zero
- Means unknown or missing
+ Can uniquely identify rows
! Candidate key can uniquely identify rows.
? Which is a candidate not chosen as primary?
- Super key
- Primary key
+ Alternate key
- Candidate key
! Alternate key is a candidate not chosen as primary.
? Which statement is true of Alternate key?
+ Is a candidate not chosen as primary
- Cannot have duplicates
- Cannot be NULL
- Enforces referential integrity
! Alternate key is a candidate not chosen as primary.
? Which uses more than one attribute?
+ Composite key
- Super key
- Foreign key
- Alternate key
! Composite key uses more than one attribute.
? Which statement is true of Composite key?
- Can uniquely identify rows
- Enforces referential integrity
- Is a candidate not chosen as primary
+ Uses more than one attribute
! Composite key uses more than one attribute.
? Which refers to the primary key of another table?
- Primary key
+ Foreign key
- Super key
- Candidate key
! Foreign key refers to the primary key of another table.
? Which statement is true of Foreign key?
+ Refers to the primary key of another table
- Is a candidate not chosen as primary
- Cannot have duplicates
- Uniquely identifies each row
! Foreign key refers to the primary key of another table.
? Which enforces referential integrity?
- Composite key
- NULL
+ Foreign key
- Alternate key
! Foreign key enforces referential integrity.
? Which may contain duplicates?
- Candidate key
+ Foreign key
- Alternate key
- Super key
! Foreign key may contain duplicates.
? Which is any set that contains a candidate key?
- Primary key
+ Super key
- Composite key
- Foreign key
! Super key is any set that contains a candidate key.
? Which statement is true of Super key?
- Refers to the primary key of another table
+ Is any set that contains a candidate key
- May contain duplicates
- Enforces referential integrity
! Super key is any set that contains a candidate key.
? Which means unknown or missing?
- Foreign key
+ NULL
- Super key
- Primary key
! NULL means unknown or missing.
? Which statement is true of NULL?
- May contain duplicates
+ Means unknown or missing
- Cannot have duplicates
- Refers to the primary key of another table
! NULL means unknown or missing.
? Which is not the same as zero?
+ NULL
- Primary key
- Foreign key
- Alternate key
! NULL is not the same as zero.
? Which manages the database?
+ Database administrator
- Date
- Referential integrity
- Attribute count
! Database administrator manages the database.
? Which statement is true of Database administrator?
+ Manages the database
- Equals the number of rows
- Is an artificial identifier
- Writes database programs
! Database administrator manages the database.
? Which uses the database through applications?
- Metadata
+ End user
- Tuple count
- Data independence
! End user uses the database through applications.
? Which statement is true of End user?
- Writes database programs
+ Uses the database through applications
- Stores calendar dates
- Prevents dangling references
! End user uses the database through applications.
? Which writes database programs?
- Char
- Database administrator
- Attribute count
+ Application programmer
! Application programmer writes database programs.
? Which statement is true of Application programmer?
+ Writes database programs
- May contain duplicate rows
- Is a fixed length string type
- Means accuracy and consistency
! Application programmer writes database programs.
? Which stores data in tables?
+ Relational model
- Table without primary key
- Varchar
- Referential integrity
! Relational model stores data in tables.
? Which statement is true of Relational model?
- Is data about data
- Means accuracy and consistency
- Stores calendar dates
+ Stores data in tables
! Relational model stores data in tables.
? Which organises data as a tree?
- Table without primary key
- Data independence
- End user
+ Hierarchical model
! Hierarchical model organises data as a tree.
? Which statement is true of Hierarchical model?
- Manages the database
- Is an artificial identifier
- Stores calendar dates
+ Organises data as a tree
! Hierarchical model organises data as a tree.
? Which uses graph like links?
+ Network model
- Application programmer
- Surrogate key
- Database administrator
! Network model uses graph like links.
? Which statement is true of Network model?
- Prevents dangling references
- Means accuracy and consistency
- Writes database programs
+ Uses graph like links
! Network model uses graph like links.
? Which is a variable length string type?
- Char
- Hierarchical model
- Metadata
+ Varchar
! Varchar is a variable length string type.
? Which statement is true of Varchar?
- May contain duplicate rows
- Organises data as a tree
+ Is a variable length string type
- Is data about data
! Varchar is a variable length string type.
? Which is a fixed length string type?
- Relational model
- Database administrator
+ Char
- Metadata
! Char is a fixed length string type.
? Which statement is true of Char?
- Stores calendar dates
+ Is a fixed length string type
- Organises data as a tree
- Is data about data
! Char is a fixed length string type.
? Which stores calendar dates?
- Data integrity
+ Date
- Metadata
- Tuple count
! Date stores calendar dates.
? Which statement is true of Date?
- Is data about data
- Separates programs from storage
+ Stores calendar dates
- Is an artificial identifier
! Date stores calendar dates.
? Which equals the number of rows?
- Relational model
- Application programmer
- Char
+ Tuple count
! Tuple count equals the number of rows.
? Which statement is true of Tuple count?
- Is an artificial identifier
- Stores data in tables
+ Equals the number of rows
- Uses the database through applications
! Tuple count equals the number of rows.
? Which equals the number of columns?
- Table without primary key
- Database administrator
- Referential integrity
+ Attribute count
! Attribute count equals the number of columns.
? Which statement is true of Attribute count?
- Manages the database
- Stores calendar dates
+ Equals the number of columns
- Means accuracy and consistency
! Attribute count equals the number of columns.
? Which may contain duplicate rows?
+ Table without primary key
- Referential integrity
- Data independence
- Metadata
! Table without primary key may contain duplicate rows.
? Which statement is true of Table without primary key?
- Is an artificial identifier
- Writes database programs
- Is a variable length string type
+ May contain duplicate rows
! Table without primary key may contain duplicate rows.
? Which is an artificial identifier?
+ Surrogate key
- Table without primary key
- Network model
- Metadata
! Surrogate key is an artificial identifier.
? Which statement is true of Surrogate key?
- Prevents dangling references
+ Is an artificial identifier
- Uses the database through applications
- Writes database programs
! Surrogate key is an artificial identifier.
? Which prevents dangling references?
+ Referential integrity
- Application programmer
- Attribute count
- Data integrity
! Referential integrity prevents dangling references.
? Which statement is true of Referential integrity?
+ Prevents dangling references
- Is a fixed length string type
- Uses the database through applications
- Manages the database
! Referential integrity prevents dangling references.
? Which means accuracy and consistency?
- Hierarchical model
+ Data integrity
- Attribute count
- End user
! Data integrity means accuracy and consistency.
? Which statement is true of Data integrity?
- Is a variable length string type
- Equals the number of rows
+ Means accuracy and consistency
- Stores data in tables
! Data integrity means accuracy and consistency.
? Which separates programs from storage?
- Attribute count
+ Data independence
- Table without primary key
- Hierarchical model
! Data independence separates programs from storage.
? Which statement is true of Data independence?
- Equals the number of rows
- Manages the database
- Equals the number of columns
+ Separates programs from storage
! Data independence separates programs from storage.
? Which is data about data?
- Relational model
+ Metadata
- Data independence
- Referential integrity
! Metadata is data about data.
? Which statement is true of Metadata?
- Separates programs from storage
- Prevents dangling references
+ Is data about data
- Is an artificial identifier
! Metadata is data about data.
? Row
- Attribute
- Domain
- Schema
+ Tuple
! Term.
? Columns count
- Cardinality
- Domain
- Tuple
+ Degree
! Term.
? Unique not null
+ Primary key
- Foreign key
- Alternate
- Super
! Key.
? Links tables
- Primary key
+ Foreign key
- Candidate
- Alternate
! Key.
? Redundancy
- Security
+ Duplicate data
- Speed
- Backup
! Problem.
? Not chosen candidate
- Primary
+ Alternate
- Foreign
- Composite
! Key.
@visual
compare | File system and DBMS | File=Redundancy~Weak security; DBMS=Controlled~Shared secure
blocks | Keys | Primary; Candidate; Alternate; Foreign
flow | Key relation | Candidate keys; Primary chosen; Alternate remain; Foreign links
mind | Database | DBMS; Relation; Keys; Users
table | Terms | Relation=Table; Tuple=Row; Attribute=Column; Domain=Values
@problems
## Moderate
P: A table has 5 columns and 20 rows. Find degree and cardinality.
A: Degree is 5 and cardinality is 20.
R: 3 | Degree
R: 3 | Cardinality
## High
P: Distinguish primary key and foreign key.
A: A primary key uniquely identifies rows in its table and cannot be NULL; a foreign key refers to a primary key of another table to link them.
R: 2 | Unique
R: 2 | NULL
R: 2 | Reference
R: 2 | Link
## Advanced
P: Identify candidate, primary and alternate keys of Student(RollNo, AadhaarNo, Name).
A: RollNo and AadhaarNo are candidates; choose RollNo as primary; AadhaarNo is alternate.
R: 2 | Candidates
R: 2 | Primary
R: 2 | Alternate
R: 2 | Reason
