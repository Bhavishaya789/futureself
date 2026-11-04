# Database Concepts
minutes: 40
yt: class 11 informatics practices database concepts dbms relational keys
@study
A database is an organised collection of related data, and a Database Management System (DBMS) is software to create, store, retrieve and manage it. Examples: MySQL, Oracle, PostgreSQL, SQL Server, MS Access and SQLite. A file system stores data in separate files, which causes data redundancy, inconsistency, difficulty in access and poor security; a DBMS reduces these problems, controls access, supports backup and allows sharing. The relational model by E. F. Codd (1970) stores data in relations (tables) made of rows (tuples or records) and columns (attributes or fields). Terms: the degree is the number of attributes, the cardinality is the number of tuples, the domain is the set of possible values of an attribute, and a schema is the structure of the table. Keys: a candidate key is an attribute (or set) that can uniquely identify rows; the primary key is the candidate key chosen to identify rows and cannot be null or duplicate; alternate keys are the remaining candidate keys; a foreign key refers to the primary key of another table and links tables; a composite key uses more than one attribute. Relations have rows with no fixed order, unique rows and atomic values. Integrity constraints include NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY and CHECK. A DBMS has users such as database administrators, developers and end users. SQL, the Structured Query Language, is used to work with relational databases; it has DDL (CREATE, ALTER, DROP), DML (INSERT, UPDATE, DELETE), DQL (SELECT) and DCL (GRANT, REVOKE). The data types are INT, FLOAT, CHAR(n), VARCHAR(n), DATE and DECIMAL.
## Deep dive: Why DBMS
A DBMS reduces redundancy and inconsistency, enforces integrity, allows concurrent access and offers security. It separates data from programs. Examples are banks, railways and schools.
## Deep dive: Relational model
A table has rows and columns with a unique name. The primary key identifies each row. Foreign keys maintain referential integrity between tables. Degree counts columns; cardinality counts rows.
## Deep dive: SQL categories
DDL defines structure; DML changes data; DQL queries data; DCL controls permissions. MySQL is a popular open-source RDBMS.
## Hindi saransh
Database mein data tables ki rows aur columns mein rakha jata hai; primary key har row ko alag pehchan deti hai.
> Remember: degree = columns; cardinality = rows.
@formulas
## Key facts
Degree | Columns | Attributes
Cardinality | Rows | Tuples
Primary key | Unique, not null | Identify
Foreign key | Refers | Another table
SQL | Query language | RDBMS

@qa
Q: Which is an organised collection of related data?
A: Database is an organised collection of related data.
Q: What do you know about Database?
A: Database is an organised collection of related data.
Q: Which is software to create and manage databases?
A: DBMS is software to create and manage databases.
Q: What do you know about DBMS?
A: DBMS is software to create and manage databases.
Q: Which is a DBMS based on the relational model?
A: RDBMS is a DBMS based on the relational model.
Q: What do you know about RDBMS?
A: RDBMS is a DBMS based on the relational model.
Q: Which is an open source RDBMS?
A: MySQL is an open source RDBMS.
Q: What do you know about MySQL?
A: MySQL is an open source RDBMS.
Q: Which is a commercial RDBMS?
A: Oracle is a commercial RDBMS.
Q: What do you know about Oracle?
A: Oracle is a commercial RDBMS.
Q: Which is a lightweight embedded database?
A: SQLite is a lightweight embedded database.
Q: What do you know about SQLite?
A: SQLite is a lightweight embedded database.
Q: Which is a table in the relational model?
A: Relation is a table in the relational model.
Q: What do you know about Relation?
A: Relation is a table in the relational model.
Q: Which is a row of a relation?
A: Tuple is a row of a relation.
Q: What do you know about Tuple?
A: Tuple is a row of a relation.
Q: Which is a column of a relation?
A: Attribute is a column of a relation.
Q: What do you know about Attribute?
A: Attribute is a column of a relation.
Q: Which is the number of attributes?
A: Degree is the number of attributes.
Q: What do you know about Degree?
A: Degree is the number of attributes.
Q: Which is the number of tuples?
A: Cardinality is the number of tuples.
Q: What do you know about Cardinality?
A: Cardinality is the number of tuples.
Q: Which is the set of values allowed for an attribute?
A: Domain is the set of values allowed for an attribute.
Q: What do you know about Domain?
A: Domain is the set of values allowed for an attribute.
Q: Which is the structure of a table?
A: Schema is the structure of a table.
Q: What do you know about Schema?
A: Schema is the structure of a table.
Q: Which is the data in a table at a time?
A: Instance is the data in a table at a time.
Q: What do you know about Instance?
A: Instance is the data in a table at a time.
Q: Which proposed the relational model in 1970?
A: E F Codd proposed the relational model in 1970.
Q: What do you know about E F Codd?
A: E F Codd proposed the relational model in 1970.
Q: Which is duplication of data?
A: Data redundancy is duplication of data.
Q: What do you know about Data redundancy?
A: Data redundancy is duplication of data.
Q: Which is different values for the same data?
A: Data inconsistency is different values for the same data.
Q: What do you know about Data inconsistency?
A: Data inconsistency is different values for the same data.
Q: Which is accuracy and consistency of data?
A: Data integrity is accuracy and consistency of data.
Q: What do you know about Data integrity?
A: Data integrity is accuracy and consistency of data.
Q: Which protects data from unauthorised access?
A: Data security protects data from unauthorised access.
Q: What do you know about Data security?
A: Data security protects data from unauthorised access.
Q: Which can uniquely identify rows?
A: Candidate key can uniquely identify rows.
Q: What do you know about Candidate key?
A: Candidate key can uniquely identify rows.
Q: Which is the chosen unique, non-null key?
A: Primary key is the chosen unique, non-null key.
Q: What do you know about Primary key?
A: Primary key is the chosen unique, non-null key.
Q: Which is a candidate key not chosen as primary?
A: Alternate key is a candidate key not chosen as primary.
Q: What do you know about Alternate key?
A: Alternate key is a candidate key not chosen as primary.
Q: Which links to the primary key of another table?
A: Foreign key links to the primary key of another table.
Q: What do you know about Foreign key?
A: Foreign key links to the primary key of another table.
Q: Which is made of more than one attribute?
A: Composite key is made of more than one attribute.
Q: What do you know about Composite key?
A: Composite key is made of more than one attribute.
Q: Which means unknown or missing value?
A: Null means unknown or missing value.
Q: What do you know about Null?
A: Null means unknown or missing value.
Q: Which means value that cannot be divided?
A: Atomic value means value that cannot be divided.
Q: What do you know about Atomic value?
A: Atomic value means value that cannot be divided.
Q: Which manages the database?
A: Database administrator manages the database.
Q: What do you know about Database administrator?
A: Database administrator manages the database.
Q: Which prevents empty values?
A: NOT NULL prevents empty values.
Q: What do you know about NOT NULL?
A: NOT NULL prevents empty values.
Q: Which prevents duplicate values?
A: UNIQUE prevents duplicate values.
Q: What do you know about UNIQUE?
A: UNIQUE prevents duplicate values.
Q: Which is unique and not null?
A: PRIMARY KEY is unique and not null.
Q: Which enforces links between tables?
A: FOREIGN KEY enforces links between tables.
Q: Which restricts values by a condition?
A: CHECK restricts values by a condition.
Q: What do you know about CHECK?
A: CHECK restricts values by a condition.
Q: Which keeps foreign keys valid?
A: Referential integrity keeps foreign keys valid.
Q: What do you know about Referential integrity?
A: Referential integrity keeps foreign keys valid.
Q: Which defines the kind of value in a column?
A: Data type defines the kind of value in a column.
Q: What do you know about Data type?
A: Data type defines the kind of value in a column.
Q: Which stores whole numbers?
A: INT stores whole numbers.
Q: What do you know about INT?
A: INT stores whole numbers.
Q: Which stores decimal numbers?
A: FLOAT stores decimal numbers.
Q: What do you know about FLOAT?
A: FLOAT stores decimal numbers.
Q: Which stores fixed length text?
A: CHAR stores fixed length text.
Q: What do you know about CHAR?
A: CHAR stores fixed length text.
Q: Which stores variable length text?
A: VARCHAR stores variable length text.
Q: What do you know about VARCHAR?
A: VARCHAR stores variable length text.
Q: Which stores a date?
A: DATE stores a date.
Q: What do you know about DATE?
A: DATE stores a date.
Q: Which is the Structured Query Language?
A: SQL is the Structured Query Language.
Q: What do you know about SQL?
A: SQL is the Structured Query Language.
Q: Which defines database structure?
A: DDL defines database structure.
Q: What do you know about DDL?
A: DDL defines database structure.
Q: Which manipulates data in tables?
A: DML manipulates data in tables.
Q: What do you know about DML?
A: DML manipulates data in tables.
Q: Which queries data using SELECT?
A: DQL queries data using SELECT.
Q: What do you know about DQL?
A: DQL queries data using SELECT.
Q: Which controls access using GRANT and REVOKE?
A: DCL controls access using GRANT and REVOKE.
Q: What do you know about DCL?
A: DCL controls access using GRANT and REVOKE.
Q: Which is a DDL command to make objects?
A: CREATE is a DDL command to make objects.
Q: What do you know about CREATE?
A: CREATE is a DDL command to make objects.
Q: Which is a DDL command to change a table?
A: ALTER is a DDL command to change a table.
Q: What do you know about ALTER?
A: ALTER is a DDL command to change a table.
Q: Which is a DDL command to delete a table?
A: DROP is a DDL command to delete a table.
Q: What do you know about DROP?
A: DROP is a DDL command to delete a table.
Q: Which is a DML command to add rows?
A: INSERT is a DML command to add rows.
Q: What do you know about INSERT?
A: INSERT is a DML command to add rows.
Q: Which is a DML command to change data?
A: UPDATE is a DML command to change data.
Q: What do you know about UPDATE?
A: UPDATE is a DML command to change data.
Q: Which is a DML command to remove rows?
A: DELETE is a DML command to remove rows.
Q: What do you know about DELETE?
A: DELETE is a DML command to remove rows.
Q: Which describes the structure of data?
A: Data model describes the structure of data.
Q: What do you know about Data model?
A: Data model describes the structure of data.
Q: Which is an object about which data is stored?
A: Entity is an object about which data is stored.
Q: What do you know about Entity?
A: Entity is an object about which data is stored.
Q: Which is a request for data?
A: Query is a request for data.
Q: What do you know about Query?
A: Query is a request for data.
Q: Which is a copy of data for recovery?
A: Backup is a copy of data for recovery.
Q: What do you know about Backup?
A: Backup is a copy of data for recovery.
Q: What is a DBMS?
A: Software to create and manage databases.
Q: What is a tuple?
A: A row of a table.
Q: What is the degree of a relation?
A: The number of attributes.
Q: What is a primary key?
A: A unique, non-null key identifying rows.
Q: What is a foreign key?
A: A key referring to the primary key of another table.
Q: What does SQL stand for?
A: Structured Query Language.
Q: Which command removes a table?
A: DROP.
Q: Who proposed the relational model?
A: E. F. Codd.
@quiz
? Which is an organised collection of related data?
- MySQL
+ Database
- Primary key
- CHECK
! Database is an organised collection of related data.
? Which statement is true of Database?
- Can uniquely identify rows
+ Is an organised collection of related data
- Is an object about which data is stored
- Stores decimal numbers
! Database is an organised collection of related data.
? Which is software to create and manage databases?
- Attribute
- Data type
+ DBMS
- Degree
! DBMS is software to create and manage databases.
? Which statement is true of DBMS?
- Queries data using SELECT
- Is a DML command to change data
- Is accuracy and consistency of data
+ Is software to create and manage databases
! DBMS is software to create and manage databases.
? Which is a DBMS based on the relational model?
- CREATE
+ RDBMS
- Database
- INT
! RDBMS is a DBMS based on the relational model.
? Which statement is true of RDBMS?
- Is accuracy and consistency of data
- Keeps foreign keys valid
+ Is a DBMS based on the relational model
- Is a row of a relation
! RDBMS is a DBMS based on the relational model.
? Which is an open source RDBMS?
+ MySQL
- Alternate key
- Relation
- DBMS
! MySQL is an open source RDBMS.
? Which statement is true of MySQL?
+ Is an open source RDBMS
- Is a DML command to change data
- Stores decimal numbers
- Defines the kind of value in a column
! MySQL is an open source RDBMS.
? Which is a commercial RDBMS?
+ Oracle
- Attribute
- Entity
- MySQL
! Oracle is a commercial RDBMS.
? Which statement is true of Oracle?
- Is a DML command to add rows
+ Is a commercial RDBMS
- Stores whole numbers
- Is a column of a relation
! Oracle is a commercial RDBMS.
? Which is a lightweight embedded database?
- FOREIGN KEY
+ SQLite
- Candidate key
- Alternate key
! SQLite is a lightweight embedded database.
? Which statement is true of SQLite?
- Is the number of tuples
- Stores whole numbers
+ Is a lightweight embedded database
- Stores fixed length text
! SQLite is a lightweight embedded database.
? Which is a table in the relational model?
+ Relation
- FOREIGN KEY
- Query
- DQL
! Relation is a table in the relational model.
? Which statement is true of Relation?
- Is a candidate key not chosen as primary
- Stores fixed length text
- Defines database structure
+ Is a table in the relational model
! Relation is a table in the relational model.
? Which is a row of a relation?
- Atomic value
- Candidate key
- DATE
+ Tuple
! Tuple is a row of a relation.
? Which statement is true of Tuple?
- Is the Structured Query Language
- Defines database structure
- Is the set of values allowed for an attribute
+ Is a row of a relation
! Tuple is a row of a relation.
? Which is a column of a relation?
- UNIQUE
- Data model
- DDL
+ Attribute
! Attribute is a column of a relation.
? Which statement is true of Attribute?
- Is the structure of a table
+ Is a column of a relation
- Stores variable length text
- Manipulates data in tables
! Attribute is a column of a relation.
? Which is the number of attributes?
+ Degree
- Data inconsistency
- Entity
- DML
! Degree is the number of attributes.
? Which statement is true of Degree?
+ Is the number of attributes
- Is duplication of data
- Stores decimal numbers
- Prevents empty values
! Degree is the number of attributes.
? Which is the number of tuples?
- Foreign key
- PRIMARY KEY
- Entity
+ Cardinality
! Cardinality is the number of tuples.
? Which statement is true of Cardinality?
- Is the number of attributes
+ Is the number of tuples
- Can uniquely identify rows
- Is a DDL command to delete a table
! Cardinality is the number of tuples.
? Which is the set of values allowed for an attribute?
- PRIMARY KEY
- FLOAT
+ Domain
- Cardinality
! Domain is the set of values allowed for an attribute.
? Which statement is true of Domain?
- Stores whole numbers
- Is an open source RDBMS
- Is a DML command to add rows
+ Is the set of values allowed for an attribute
! Domain is the set of values allowed for an attribute.
? Which is the structure of a table?
- UNIQUE
- Cardinality
+ Schema
- Data redundancy
! Schema is the structure of a table.
? Which statement is true of Schema?
+ Is the structure of a table
- Is a DBMS based on the relational model
- Is software to create and manage databases
- Is an organised collection of related data
! Schema is the structure of a table.
? Which is the data in a table at a time?
+ Instance
- CHECK
- NOT NULL
- MySQL
! Instance is the data in a table at a time.
? Which statement is true of Instance?
- Is the number of attributes
- Is a candidate key not chosen as primary
+ Is the data in a table at a time
- Is an object about which data is stored
! Instance is the data in a table at a time.
? Which proposed the relational model in 1970?
+ E F Codd
- Data integrity
- Composite key
- Database
! E F Codd proposed the relational model in 1970.
? Which statement is true of E F Codd?
- Stores a date
+ Proposed the relational model in 1970
- Is a row of a relation
- Is a candidate key not chosen as primary
! E F Codd proposed the relational model in 1970.
? Which is duplication of data?
+ Data redundancy
- Entity
- Foreign key
- CHECK
! Data redundancy is duplication of data.
? Which statement is true of Data redundancy?
- Stores fixed length text
- Is unique and not null
- Protects data from unauthorised access
+ Is duplication of data
! Data redundancy is duplication of data.
? Which is different values for the same data?
- DATE
- Data redundancy
+ Data inconsistency
- Tuple
! Data inconsistency is different values for the same data.
? Which statement is true of Data inconsistency?
- Is the set of values allowed for an attribute
- Stores fixed length text
+ Is different values for the same data
- Defines the kind of value in a column
! Data inconsistency is different values for the same data.
? Which is accuracy and consistency of data?
- SQLite
- Alternate key
+ Data integrity
- Data redundancy
! Data integrity is accuracy and consistency of data.
? Which statement is true of Data integrity?
- Defines the kind of value in a column
- Prevents empty values
- Stores decimal numbers
+ Is accuracy and consistency of data
! Data integrity is accuracy and consistency of data.
? Which protects data from unauthorised access?
- Data type
- Foreign key
+ Data security
- Degree
! Data security protects data from unauthorised access.
? Which statement is true of Data security?
- Is a DML command to remove rows
- Stores whole numbers
- Is an organised collection of related data
+ Protects data from unauthorised access
! Data security protects data from unauthorised access.
? Which can uniquely identify rows?
- UNIQUE
- Atomic value
- DELETE
+ Candidate key
! Candidate key can uniquely identify rows.
? Which statement is true of Candidate key?
+ Can uniquely identify rows
- Queries data using SELECT
- Is the chosen unique, non-null key
- Is made of more than one attribute
! Candidate key can uniquely identify rows.
? Which is the chosen unique, non-null key?
- DELETE
- Query
- Entity
+ Primary key
! Primary key is the chosen unique, non-null key.
? Which statement is true of Primary key?
+ Is the chosen unique, non-null key
- Is the Structured Query Language
- Prevents duplicate values
- Can uniquely identify rows
! Primary key is the chosen unique, non-null key.
? Which is a candidate key not chosen as primary?
- Query
- MySQL
+ Alternate key
- DCL
! Alternate key is a candidate key not chosen as primary.
? Which statement is true of Alternate key?
- Means unknown or missing value
- Is a table in the relational model
+ Is a candidate key not chosen as primary
- Protects data from unauthorised access
! Alternate key is a candidate key not chosen as primary.
? Which links to the primary key of another table?
+ Foreign key
- DQL
- E F Codd
- CHAR
! Foreign key links to the primary key of another table.
? Which statement is true of Foreign key?
- Stores whole numbers
+ Links to the primary key of another table
- Is the number of attributes
- Manipulates data in tables
! Foreign key links to the primary key of another table.
? Which is made of more than one attribute?
- Primary key
- NOT NULL
+ Composite key
- UNIQUE
! Composite key is made of more than one attribute.
? Which statement is true of Composite key?
- Is a candidate key not chosen as primary
- Is a column of a relation
+ Is made of more than one attribute
- Restricts values by a condition
! Composite key is made of more than one attribute.
? Which means unknown or missing value?
- Foreign key
+ Null
- Composite key
- Candidate key
! Null means unknown or missing value.
? Which statement is true of Null?
+ Means unknown or missing value
- Is the chosen unique, non-null key
- Stores variable length text
- Can uniquely identify rows
! Null means unknown or missing value.
? Which means value that cannot be divided?
- Schema
- Domain
+ Atomic value
- DQL
! Atomic value means value that cannot be divided.
? Which statement is true of Atomic value?
- Is the Structured Query Language
+ Means value that cannot be divided
- Defines the kind of value in a column
- Is the structure of a table
! Atomic value means value that cannot be divided.
? Which manages the database?
+ Database administrator
- DELETE
- DQL
- Foreign key
! Database administrator manages the database.
? Which statement is true of Database administrator?
- Is the chosen unique, non-null key
- Is a DDL command to change a table
- Restricts values by a condition
+ Manages the database
! Database administrator manages the database.
? Which prevents empty values?
- Alternate key
- UNIQUE
+ NOT NULL
- Foreign key
! NOT NULL prevents empty values.
? Which statement is true of NOT NULL?
- Is software to create and manage databases
- Means unknown or missing value
+ Prevents empty values
- Is the structure of a table
! NOT NULL prevents empty values.
? Which prevents duplicate values?
+ UNIQUE
- Degree
- Tuple
- VARCHAR
! UNIQUE prevents duplicate values.
? Which statement is true of UNIQUE?
- Is unique and not null
- Is a copy of data for recovery
- Is a DDL command to change a table
+ Prevents duplicate values
! UNIQUE prevents duplicate values.
? Which is unique and not null?
+ PRIMARY KEY
- DELETE
- Candidate key
- RDBMS
! PRIMARY KEY is unique and not null.
? Which enforces links between tables?
+ FOREIGN KEY
- Data integrity
- DBMS
- Entity
! FOREIGN KEY enforces links between tables.
? Which restricts values by a condition?
- Primary key
- FLOAT
- RDBMS
+ CHECK
! CHECK restricts values by a condition.
? Which statement is true of CHECK?
- Is a DML command to remove rows
+ Restricts values by a condition
- Enforces links between tables
- Keeps foreign keys valid
! CHECK restricts values by a condition.
? Which keeps foreign keys valid?
- Alternate key
- INT
+ Referential integrity
- UNIQUE
! Referential integrity keeps foreign keys valid.
? Which statement is true of Referential integrity?
- Is the number of attributes
- Can uniquely identify rows
- Enforces links between tables
+ Keeps foreign keys valid
! Referential integrity keeps foreign keys valid.
? Which defines the kind of value in a column?
+ Data type
- Candidate key
- NOT NULL
- Tuple
! Data type defines the kind of value in a column.
? Which statement is true of Data type?
+ Defines the kind of value in a column
- Is accuracy and consistency of data
- Defines database structure
- Is an object about which data is stored
! Data type defines the kind of value in a column.
? Which stores whole numbers?
- Entity
- FLOAT
- Data type
+ INT
! INT stores whole numbers.
? Which statement is true of INT?
+ Stores whole numbers
- Is unique and not null
- Protects data from unauthorised access
- Is an open source RDBMS
! INT stores whole numbers.
? Which stores decimal numbers?
+ FLOAT
- Composite key
- SQL
- Oracle
! FLOAT stores decimal numbers.
? Which statement is true of FLOAT?
- Keeps foreign keys valid
- Is an open source RDBMS
- Stores variable length text
+ Stores decimal numbers
! FLOAT stores decimal numbers.
? Which stores fixed length text?
- Data redundancy
+ CHAR
- MySQL
- Entity
! CHAR stores fixed length text.
? Which statement is true of CHAR?
- Manipulates data in tables
- Enforces links between tables
+ Stores fixed length text
- Is the number of tuples
! CHAR stores fixed length text.
? Which stores variable length text?
+ VARCHAR
- CHECK
- Data model
- Data security
! VARCHAR stores variable length text.
? Which statement is true of VARCHAR?
- Is an open source RDBMS
+ Stores variable length text
- Is the data in a table at a time
- Describes the structure of data
! VARCHAR stores variable length text.
? Which stores a date?
- Tuple
+ DATE
- Atomic value
- CHAR
! DATE stores a date.
? Which statement is true of DATE?
- Is the number of attributes
- Is the number of tuples
- Is a commercial RDBMS
+ Stores a date
! DATE stores a date.
? Which is the Structured Query Language?
+ SQL
- Referential integrity
- Query
- DQL
! SQL is the Structured Query Language.
? Which statement is true of SQL?
+ Is the Structured Query Language
- Defines database structure
- Is accuracy and consistency of data
- Is a lightweight embedded database
! SQL is the Structured Query Language.
? Which defines database structure?
- Entity
- Database
- DATE
+ DDL
! DDL defines database structure.
? Which statement is true of DDL?
- Is a request for data
+ Defines database structure
- Is an organised collection of related data
- Links to the primary key of another table
! DDL defines database structure.
? Which manipulates data in tables?
- SQL
- DATE
+ DML
- Data redundancy
! DML manipulates data in tables.
? Which statement is true of DML?
+ Manipulates data in tables
- Is a copy of data for recovery
- Is duplication of data
- Is a commercial RDBMS
! DML manipulates data in tables.
? Which queries data using SELECT?
+ DQL
- Attribute
- UNIQUE
- ALTER
! DQL queries data using SELECT.
? Which statement is true of DQL?
+ Queries data using SELECT
- Can uniquely identify rows
- Stores a date
- Is the chosen unique, non-null key
! DQL queries data using SELECT.
? Which controls access using GRANT and REVOKE?
- INSERT
- NOT NULL
+ DCL
- DELETE
! DCL controls access using GRANT and REVOKE.
? Which statement is true of DCL?
- Is a DDL command to delete a table
+ Controls access using GRANT and REVOKE
- Stores whole numbers
- Protects data from unauthorised access
! DCL controls access using GRANT and REVOKE.
? Which is a DDL command to make objects?
+ CREATE
- Cardinality
- Oracle
- Composite key
! CREATE is a DDL command to make objects.
? Which statement is true of CREATE?
- Is an object about which data is stored
+ Is a DDL command to make objects
- Is a DDL command to change a table
- Stores decimal numbers
! CREATE is a DDL command to make objects.
? Which is a DDL command to change a table?
- Oracle
- Data type
+ ALTER
- DBMS
! ALTER is a DDL command to change a table.
? Which statement is true of ALTER?
+ Is a DDL command to change a table
- Enforces links between tables
- Is the chosen unique, non-null key
- Is duplication of data
! ALTER is a DDL command to change a table.
? Which is a DDL command to delete a table?
+ DROP
- Candidate key
- FOREIGN KEY
- Instance
! DROP is a DDL command to delete a table.
? Which statement is true of DROP?
- Is a commercial RDBMS
- Defines the kind of value in a column
- Restricts values by a condition
+ Is a DDL command to delete a table
! DROP is a DDL command to delete a table.
? Which is a DML command to add rows?
- Composite key
- Degree
+ INSERT
- NOT NULL
! INSERT is a DML command to add rows.
? Which statement is true of INSERT?
- Links to the primary key of another table
- Prevents empty values
- Is the chosen unique, non-null key
+ Is a DML command to add rows
! INSERT is a DML command to add rows.
? Which is a DML command to change data?
- Data integrity
- CREATE
- INT
+ UPDATE
! UPDATE is a DML command to change data.
? Which statement is true of UPDATE?
- Queries data using SELECT
- Stores a date
+ Is a DML command to change data
- Is a DDL command to delete a table
! UPDATE is a DML command to change data.
? Which is a DML command to remove rows?
- Primary key
+ DELETE
- Database
- RDBMS
! DELETE is a DML command to remove rows.
? Which statement is true of DELETE?
- Is an open source RDBMS
- Prevents duplicate values
+ Is a DML command to remove rows
- Is a DML command to change data
! DELETE is a DML command to remove rows.
? Which describes the structure of data?
- Tuple
- VARCHAR
- SQLite
+ Data model
! Data model describes the structure of data.
? Which statement is true of Data model?
- Protects data from unauthorised access
- Stores variable length text
+ Describes the structure of data
- Is a DBMS based on the relational model
! Data model describes the structure of data.
? Which is an object about which data is stored?
- Domain
- Database
+ Entity
- NOT NULL
! Entity is an object about which data is stored.
? Which statement is true of Entity?
- Is a DBMS based on the relational model
+ Is an object about which data is stored
- Manipulates data in tables
- Defines the kind of value in a column
! Entity is an object about which data is stored.
? Which is a request for data?
- Data model
- DML
+ Query
- E F Codd
! Query is a request for data.
? Which statement is true of Query?
- Is a commercial RDBMS
+ Is a request for data
- Means value that cannot be divided
- Is accuracy and consistency of data
! Query is a request for data.
? Which is a copy of data for recovery?
- Cardinality
- Data integrity
+ Backup
- Foreign key
! Backup is a copy of data for recovery.
? Which statement is true of Backup?
+ Is a copy of data for recovery
- Protects data from unauthorised access
- Is a DDL command to make objects
- Is an object about which data is stored
! Backup is a copy of data for recovery.
? Cardinality is
- Columns
- Tables
+ Rows
- Keys
! Tuples.
? Primary key can be
- Null
- Duplicate
- Empty
+ Not null
! Unique.
? SELECT belongs to
- DDL
- DCL
+ DQL
- TCL
! Query.
? Foreign key links
+ Tables
- Columns
- Rows
- Users
! Reference.
? MySQL is
+ RDBMS
- OS
- Browser
- Compiler
! Open source.
? CREATE is
- DML
- DCL
- DQL
+ DDL
! Structure.
@visual
compare | Degree and cardinality | Degree=Columns~Attributes; Cardinality=Rows~Tuples
flow | DBMS use | User; Query; DBMS; Data
blocks | SQL types | DDL; DML; DQL; DCL
mind | Database | DBMS; Relations; Keys; SQL
steps | Key choice | List candidate keys; Choose primary; Others alternate; Add foreign
@problems
## Moderate
P: Define primary key and foreign key.
A: Primary key uniquely identifies rows; a foreign key refers to another table’s primary key.
R: 3 | Primary
R: 3 | Foreign
## High
P: A table has 5 columns and 20 rows. Find its degree and cardinality.
A: Degree is 5 and cardinality is 20.
R: 2 | Degree
R: 2 | Cardinality
R: 2 | Rows
R: 2 | Columns
## Advanced
P: Explain the advantages of a DBMS over a file system.
A: Less redundancy, consistency, integrity, security, sharing and backup.
R: 2 | Redundancy
R: 2 | Integrity
R: 2 | Security
R: 2 | Sharing
