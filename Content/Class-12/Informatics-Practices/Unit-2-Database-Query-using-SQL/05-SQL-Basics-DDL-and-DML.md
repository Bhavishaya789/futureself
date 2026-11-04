# SQL: Database Concepts, DDL and DML
minutes: 45
yt: class 12 informatics practices sql create table insert select update delete where constraints
@study
A database is an organised collection of data, and a relational database stores data in tables or relations made of rows (tuples) and columns (attributes). A Database Management System, such as MySQL, manages it. SQL, Structured Query Language, is used to define and manipulate data. Data Definition Language (DDL) commands create and alter structure: CREATE DATABASE, USE, CREATE TABLE, ALTER TABLE and DROP TABLE. Data Manipulation Language (DML) commands include INSERT, UPDATE, DELETE and SELECT. Common data types are INT, DECIMAL, CHAR, VARCHAR, DATE and FLOAT. Constraints include PRIMARY KEY, which uniquely identifies a row and cannot be null, NOT NULL, UNIQUE, DEFAULT and FOREIGN KEY. A candidate key can be a primary key, and an alternate key is a candidate key not chosen. A foreign key refers to the primary key of another table and maintains referential integrity. The degree of a table is the number of columns and the cardinality is the number of rows. The SELECT statement retrieves rows: SELECT * FROM student; SELECT name, marks FROM student WHERE marks > 80;. The WHERE clause uses relational operators, logical operators AND, OR, NOT, and BETWEEN, IN and LIKE. LIKE uses % for any number of characters and _ for exactly one. IS NULL checks for missing values. ORDER BY sorts results in ASC or DESC order, and DISTINCT removes duplicates. INSERT INTO table VALUES (...) adds a row, UPDATE table SET col = value WHERE condition changes data, and DELETE FROM table WHERE condition removes rows. ALTER TABLE can add a column or change a data type.
## Deep dive: DDL and DML
DDL defines structure with CREATE, ALTER and DROP; DML handles data with INSERT, UPDATE, DELETE and SELECT.
## Deep dive: Keys and constraints
Primary key, foreign key, unique and not null constraints keep data correct and linked.
## Deep dive: Querying
SELECT with WHERE, LIKE, BETWEEN, IN, ORDER BY and DISTINCT retrieves exactly the needed rows.
## Hindi saransh
SQL: DDL, DML, keys, constraints aur SELECT-WHERE-ORDER BY ke prayog.
> Remember: % matches any number of characters; _ matches exactly one.
@formulas
## Syntax
Select | SELECT col FROM t WHERE cond;
Insert | INSERT INTO t VALUES (...);
Update | UPDATE t SET c=v WHERE cond;
Delete | DELETE FROM t WHERE cond;
Sort | ORDER BY col DESC;

@qa
Q: Which is an organised collection of data?
A: Database is an organised collection of data.
Q: What do you know about Database?
A: Database is an organised collection of data.
Q: Which is software that manages a database?
A: DBMS is software that manages a database.
Q: What do you know about DBMS?
A: DBMS is software that manages a database.
Q: Which is a relational DBMS?
A: MySQL is a relational DBMS.
Q: What do you know about MySQL?
A: MySQL is a relational DBMS.
Q: Which is a table?
A: Relation is a table.
Q: What do you know about Relation?
A: Relation is a table.
Q: Which is a row of a table?
A: Tuple is a row of a table.
Q: What do you know about Tuple?
A: Tuple is a row of a table.
Q: Which is a column of a table?
A: Attribute is a column of a table.
Q: What do you know about Attribute?
A: Attribute is a column of a table.
Q: Which is the number of columns?
A: Degree is the number of columns.
Q: What do you know about Degree?
A: Degree is the number of columns.
Q: Which is the number of rows?
A: Cardinality is the number of rows.
Q: What do you know about Cardinality?
A: Cardinality is the number of rows.
Q: Which is the set of allowed values?
A: Domain is the set of allowed values.
Q: What do you know about Domain?
A: Domain is the set of allowed values.
Q: Which stands for Structured Query Language?
A: SQL stands for Structured Query Language.
Q: What do you know about SQL?
A: SQL stands for Structured Query Language.
Q: Which uniquely identifies a row?
A: Primary key uniquely identifies a row.
Q: What do you know about Primary key?
A: Primary key uniquely identifies a row.
Q: Which is a column that could be a primary key?
A: Candidate key is a column that could be a primary key.
Q: What do you know about Candidate key?
A: Candidate key is a column that could be a primary key.
Q: Which is a candidate key not chosen as primary?
A: Alternate key is a candidate key not chosen as primary.
Q: What do you know about Alternate key?
A: Alternate key is a candidate key not chosen as primary.
Q: Which refers to a primary key of another table?
A: Foreign key refers to a primary key of another table.
Q: What do you know about Foreign key?
A: Foreign key refers to a primary key of another table.
Q: Which is maintained by a foreign key?
A: Referential integrity is maintained by a foreign key.
Q: What do you know about Referential integrity?
A: Referential integrity is maintained by a foreign key.
Q: Which uses more than one column?
A: Composite key uses more than one column.
Q: What do you know about Composite key?
A: Composite key uses more than one column.
Q: Which prevents duplicate values?
A: Unique key prevents duplicate values.
Q: What do you know about Unique key?
A: Unique key prevents duplicate values.
Q: Which means a missing value?
A: Null means a missing value.
Q: What do you know about Null?
A: Null means a missing value.
Q: Which forbids missing values?
A: Not null forbids missing values.
Q: What do you know about Not null?
A: Not null forbids missing values.
Q: Which sets a value when none is given?
A: Default sets a value when none is given.
Q: What do you know about Default?
A: Default sets a value when none is given.
Q: Which makes a new database?
A: CREATE DATABASE makes a new database.
Q: What do you know about CREATE DATABASE?
A: CREATE DATABASE makes a new database.
Q: Which selects the database to work on?
A: USE selects the database to work on.
Q: What do you know about USE?
A: USE selects the database to work on.
Q: Which makes a new table?
A: CREATE TABLE makes a new table.
Q: What do you know about CREATE TABLE?
A: CREATE TABLE makes a new table.
Q: Which changes table structure?
A: ALTER TABLE changes table structure.
Q: What do you know about ALTER TABLE?
A: ALTER TABLE changes table structure.
Q: Which removes a table?
A: DROP TABLE removes a table.
Q: What do you know about DROP TABLE?
A: DROP TABLE removes a table.
Q: Which shows the structure of a table?
A: DESC shows the structure of a table.
Q: What do you know about DESC?
A: DESC shows the structure of a table.
Q: Which lists tables in a database?
A: SHOW TABLES lists tables in a database.
Q: What do you know about SHOW TABLES?
A: SHOW TABLES lists tables in a database.
Q: Which adds an attribute with ALTER?
A: ADD COLUMN adds an attribute with ALTER.
Q: What do you know about ADD COLUMN?
A: ADD COLUMN adds an attribute with ALTER.
Q: Which changes the data type of a column?
A: MODIFY changes the data type of a column.
Q: What do you know about MODIFY?
A: MODIFY changes the data type of a column.
Q: Which defines the kind of values?
A: Data type defines the kind of values.
Q: What do you know about Data type?
A: Data type defines the kind of values.
Q: Which adds a row?
A: INSERT adds a row.
Q: What do you know about INSERT?
A: INSERT adds a row.
Q: Which changes existing values?
A: UPDATE changes existing values.
Q: What do you know about UPDATE?
A: UPDATE changes existing values.
Q: Which removes rows?
A: DELETE removes rows.
Q: What do you know about DELETE?
A: DELETE removes rows.
Q: Which retrieves data?
A: SELECT retrieves data.
Q: What do you know about SELECT?
A: SELECT retrieves data.
Q: Which gives new values in UPDATE?
A: SET gives new values in UPDATE.
Q: What do you know about SET?
A: SET gives new values in UPDATE.
Q: Which filters rows?
A: WHERE filters rows.
Q: What do you know about WHERE?
A: WHERE filters rows.
Q: Which names the table in SELECT?
A: FROM names the table in SELECT.
Q: What do you know about FROM?
A: FROM names the table in SELECT.
Q: Which selects all columns?
A: Asterisk selects all columns.
Q: What do you know about Asterisk?
A: Asterisk selects all columns.
Q: Which renames a column with AS?
A: Alias renames a column with AS.
Q: What do you know about Alias?
A: Alias renames a column with AS.
Q: Which removes duplicate rows?
A: Distinct removes duplicate rows.
Q: What do you know about Distinct?
A: Distinct removes duplicate rows.
Q: Which tests a range inclusive of limits?
A: BETWEEN tests a range inclusive of limits.
Q: What do you know about BETWEEN?
A: BETWEEN tests a range inclusive of limits.
Q: Which tests a list of values?
A: IN tests a list of values.
Q: What do you know about IN?
A: IN tests a list of values.
Q: Which matches a pattern?
A: LIKE matches a pattern.
Q: What do you know about LIKE?
A: LIKE matches a pattern.
Q: Which matches any number of characters?
A: Percent sign matches any number of characters.
Q: What do you know about Percent sign?
A: Percent sign matches any number of characters.
Q: Which matches exactly one character?
A: Underscore matches exactly one character.
Q: What do you know about Underscore?
A: Underscore matches exactly one character.
Q: Which tests for missing values?
A: IS NULL tests for missing values.
Q: What do you know about IS NULL?
A: IS NULL tests for missing values.
Q: Which needs both conditions true?
A: AND needs both conditions true.
Q: What do you know about AND?
A: AND needs both conditions true.
Q: Which needs either condition true?
A: OR needs either condition true.
Q: What do you know about OR?
A: OR needs either condition true.
Q: Which reverses a condition?
A: NOT reverses a condition.
Q: What do you know about NOT?
A: NOT reverses a condition.
Q: Which sorts the result?
A: ORDER BY sorts the result.
Q: What do you know about ORDER BY?
A: ORDER BY sorts the result.
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
Q: Which stores exact decimals?
A: DECIMAL stores exact decimals.
Q: What do you know about DECIMAL?
A: DECIMAL stores exact decimals.
Q: Which is ascending order?
A: ASC is ascending order.
Q: What do you know about ASC?
A: ASC is ascending order.
Q: Which is descending order?
A: DESC order is descending order.
Q: What do you know about DESC order?
A: DESC order is descending order.
Q: Which restricts the number of rows?
A: LIMIT restricts the number of rows.
Q: What do you know about LIMIT?
A: LIMIT restricts the number of rows.
Q: Which is text ignored by SQL?
A: Comment is text ignored by SQL.
Q: What do you know about Comment?
A: Comment is text ignored by SQL.
Q: What is a relation?
A: A table in a relational database.
Q: What is cardinality?
A: The number of rows in a table.
Q: What is degree?
A: The number of columns in a table.
Q: What does DISTINCT do?
A: Removes duplicate rows from the result.
Q: What does LIKE 'A%' match?
A: Values that start with A.
Q: How do you test for missing values?
A: With IS NULL.
Q: Which command changes the structure of a table?
A: ALTER TABLE.
Q: Which command removes rows?
A: DELETE FROM with a condition.
@quiz
? Which is an organised collection of data?
- Degree
- Relation
+ Database
- DBMS
! Database is an organised collection of data.
? Which statement is true of Database?
- Is a column of a table
- Stands for Structured Query Language
- Is the set of allowed values
+ Is an organised collection of data
! Database is an organised collection of data.
? Which is software that manages a database?
- Database
- Relation
+ DBMS
- Attribute
! DBMS is software that manages a database.
? Which statement is true of DBMS?
+ Is software that manages a database
- Is a table
- Is a row of a table
- Is a column of a table
! DBMS is software that manages a database.
? Which is a relational DBMS?
+ MySQL
- Attribute
- Domain
- Cardinality
! MySQL is a relational DBMS.
? Which statement is true of MySQL?
- Is a row of a table
+ Is a relational DBMS
- Is the set of allowed values
- Is the number of columns
! MySQL is a relational DBMS.
? Which is a table?
- Cardinality
- Degree
- Domain
+ Relation
! Relation is a table.
? Which statement is true of Relation?
- Is software that manages a database
- Is the number of columns
- Is a column of a table
+ Is a table
! Relation is a table.
? Which is a row of a table?
- DBMS
- Domain
+ Tuple
- Database
! Tuple is a row of a table.
? Which statement is true of Tuple?
- Is a relational DBMS
- Is an organised collection of data
- Is a table
+ Is a row of a table
! Tuple is a row of a table.
? Which is a column of a table?
- Tuple
- Database
- SQL
+ Attribute
! Attribute is a column of a table.
? Which statement is true of Attribute?
+ Is a column of a table
- Is a relational DBMS
- Is a row of a table
- Is the number of rows
! Attribute is a column of a table.
? Which is the number of columns?
- DBMS
+ Degree
- Cardinality
- Database
! Degree is the number of columns.
? Which statement is true of Degree?
- Is software that manages a database
- Is a row of a table
- Is a table
+ Is the number of columns
! Degree is the number of columns.
? Which is the number of rows?
- Domain
- MySQL
- Relation
+ Cardinality
! Cardinality is the number of rows.
? Which statement is true of Cardinality?
- Is a relational DBMS
- Is the set of allowed values
- Is a table
+ Is the number of rows
! Cardinality is the number of rows.
? Which is the set of allowed values?
- SQL
+ Domain
- Database
- Cardinality
! Domain is the set of allowed values.
? Which statement is true of Domain?
- Stands for Structured Query Language
- Is software that manages a database
+ Is the set of allowed values
- Is the number of columns
! Domain is the set of allowed values.
? Which stands for Structured Query Language?
- Cardinality
- Domain
- Tuple
+ SQL
! SQL stands for Structured Query Language.
? Which statement is true of SQL?
+ Stands for Structured Query Language
- Is an organised collection of data
- Is a table
- Is software that manages a database
! SQL stands for Structured Query Language.
? Which uniquely identifies a row?
+ Primary key
- Unique key
- Composite key
- Foreign key
! Primary key uniquely identifies a row.
? Which statement is true of Primary key?
- Is maintained by a foreign key
- Refers to a primary key of another table
+ Uniquely identifies a row
- Is a column that could be a primary key
! Primary key uniquely identifies a row.
? Which is a column that could be a primary key?
- Composite key
- Foreign key
- Referential integrity
+ Candidate key
! Candidate key is a column that could be a primary key.
? Which statement is true of Candidate key?
- Uniquely identifies a row
- Is maintained by a foreign key
+ Is a column that could be a primary key
- Prevents duplicate values
! Candidate key is a column that could be a primary key.
? Which is a candidate key not chosen as primary?
- Composite key
- Candidate key
- Not null
+ Alternate key
! Alternate key is a candidate key not chosen as primary.
? Which statement is true of Alternate key?
- Is a column that could be a primary key
- Sets a value when none is given
- Uniquely identifies a row
+ Is a candidate key not chosen as primary
! Alternate key is a candidate key not chosen as primary.
? Which refers to a primary key of another table?
- Referential integrity
- Primary key
- Alternate key
+ Foreign key
! Foreign key refers to a primary key of another table.
? Which statement is true of Foreign key?
- Uniquely identifies a row
- Forbids missing values
- Means a missing value
+ Refers to a primary key of another table
! Foreign key refers to a primary key of another table.
? Which is maintained by a foreign key?
- Default
+ Referential integrity
- Alternate key
- Not null
! Referential integrity is maintained by a foreign key.
? Which statement is true of Referential integrity?
- Refers to a primary key of another table
+ Is maintained by a foreign key
- Is a column that could be a primary key
- Uniquely identifies a row
! Referential integrity is maintained by a foreign key.
? Which uses more than one column?
- Primary key
+ Composite key
- Referential integrity
- Default
! Composite key uses more than one column.
? Which statement is true of Composite key?
- Prevents duplicate values
+ Uses more than one column
- Is maintained by a foreign key
- Is a column that could be a primary key
! Composite key uses more than one column.
? Which prevents duplicate values?
- Alternate key
- Candidate key
- Null
+ Unique key
! Unique key prevents duplicate values.
? Which statement is true of Unique key?
- Is a candidate key not chosen as primary
+ Prevents duplicate values
- Is a column that could be a primary key
- Refers to a primary key of another table
! Unique key prevents duplicate values.
? Which means a missing value?
- Alternate key
- Foreign key
+ Null
- Referential integrity
! Null means a missing value.
? Which statement is true of Null?
- Uniquely identifies a row
- Is a candidate key not chosen as primary
+ Means a missing value
- Forbids missing values
! Null means a missing value.
? Which forbids missing values?
- Candidate key
- Default
- Referential integrity
+ Not null
! Not null forbids missing values.
? Which statement is true of Not null?
- Sets a value when none is given
+ Forbids missing values
- Refers to a primary key of another table
- Uses more than one column
! Not null forbids missing values.
? Which sets a value when none is given?
+ Default
- Unique key
- Composite key
- Primary key
! Default sets a value when none is given.
? Which statement is true of Default?
- Is a column that could be a primary key
- Uniquely identifies a row
- Means a missing value
+ Sets a value when none is given
! Default sets a value when none is given.
? Which makes a new database?
- ADD COLUMN
- ALTER TABLE
- Data type
+ CREATE DATABASE
! CREATE DATABASE makes a new database.
? Which statement is true of CREATE DATABASE?
- Shows the structure of a table
- Makes a new table
- Adds an attribute with ALTER
+ Makes a new database
! CREATE DATABASE makes a new database.
? Which selects the database to work on?
+ USE
- ALTER TABLE
- DROP TABLE
- CREATE DATABASE
! USE selects the database to work on.
? Which statement is true of USE?
- Defines the kind of values
- Makes a new database
+ Selects the database to work on
- Lists tables in a database
! USE selects the database to work on.
? Which makes a new table?
- MODIFY
- DESC
+ CREATE TABLE
- SHOW TABLES
! CREATE TABLE makes a new table.
? Which statement is true of CREATE TABLE?
- Defines the kind of values
+ Makes a new table
- Changes the data type of a column
- Adds an attribute with ALTER
! CREATE TABLE makes a new table.
? Which changes table structure?
- CREATE TABLE
+ ALTER TABLE
- MODIFY
- DROP TABLE
! ALTER TABLE changes table structure.
? Which statement is true of ALTER TABLE?
- Shows the structure of a table
- Defines the kind of values
- Removes a table
+ Changes table structure
! ALTER TABLE changes table structure.
? Which removes a table?
- MODIFY
- SHOW TABLES
- USE
+ DROP TABLE
! DROP TABLE removes a table.
? Which statement is true of DROP TABLE?
- Changes the data type of a column
+ Removes a table
- Adds an attribute with ALTER
- Changes table structure
! DROP TABLE removes a table.
? Which shows the structure of a table?
- CREATE DATABASE
- DROP TABLE
+ DESC
- USE
! DESC shows the structure of a table.
? Which statement is true of DESC?
- Makes a new database
- Removes a table
+ Shows the structure of a table
- Defines the kind of values
! DESC shows the structure of a table.
? Which lists tables in a database?
- CREATE TABLE
- ADD COLUMN
+ SHOW TABLES
- Data type
! SHOW TABLES lists tables in a database.
? Which statement is true of SHOW TABLES?
- Selects the database to work on
- Shows the structure of a table
+ Lists tables in a database
- Changes the data type of a column
! SHOW TABLES lists tables in a database.
? Which adds an attribute with ALTER?
+ ADD COLUMN
- DESC
- DROP TABLE
- MODIFY
! ADD COLUMN adds an attribute with ALTER.
? Which statement is true of ADD COLUMN?
- Changes table structure
- Changes the data type of a column
+ Adds an attribute with ALTER
- Defines the kind of values
! ADD COLUMN adds an attribute with ALTER.
? Which changes the data type of a column?
+ MODIFY
- CREATE DATABASE
- SHOW TABLES
- DROP TABLE
! MODIFY changes the data type of a column.
? Which statement is true of MODIFY?
- Shows the structure of a table
- Makes a new table
+ Changes the data type of a column
- Defines the kind of values
! MODIFY changes the data type of a column.
? Which defines the kind of values?
- MODIFY
+ Data type
- CREATE DATABASE
- CREATE TABLE
! Data type defines the kind of values.
? Which statement is true of Data type?
- Makes a new database
+ Defines the kind of values
- Changes table structure
- Makes a new table
! Data type defines the kind of values.
? Which adds a row?
+ INSERT
- Alias
- UPDATE
- Distinct
! INSERT adds a row.
? Which statement is true of INSERT?
+ Adds a row
- Names the table in SELECT
- Retrieves data
- Gives new values in UPDATE
! INSERT adds a row.
? Which changes existing values?
- SET
+ UPDATE
- SELECT
- WHERE
! UPDATE changes existing values.
? Which statement is true of UPDATE?
- Adds a row
- Retrieves data
+ Changes existing values
- Filters rows
! UPDATE changes existing values.
? Which removes rows?
- WHERE
- Alias
+ DELETE
- INSERT
! DELETE removes rows.
? Which statement is true of DELETE?
+ Removes rows
- Retrieves data
- Selects all columns
- Removes duplicate rows
! DELETE removes rows.
? Which retrieves data?
- SET
+ SELECT
- UPDATE
- FROM
! SELECT retrieves data.
? Which statement is true of SELECT?
- Filters rows
+ Retrieves data
- Adds a row
- Removes rows
! SELECT retrieves data.
? Which gives new values in UPDATE?
- INSERT
- WHERE
+ SET
- FROM
! SET gives new values in UPDATE.
? Which statement is true of SET?
+ Gives new values in UPDATE
- Removes duplicate rows
- Selects all columns
- Renames a column with AS
! SET gives new values in UPDATE.
? Which filters rows?
- UPDATE
- INSERT
+ WHERE
- SET
! WHERE filters rows.
? Which statement is true of WHERE?
- Retrieves data
- Selects all columns
+ Filters rows
- Names the table in SELECT
! WHERE filters rows.
? Which names the table in SELECT?
- Distinct
- DELETE
+ FROM
- Asterisk
! FROM names the table in SELECT.
? Which statement is true of FROM?
- Renames a column with AS
+ Names the table in SELECT
- Removes rows
- Removes duplicate rows
! FROM names the table in SELECT.
? Which selects all columns?
- DELETE
- SET
+ Asterisk
- Distinct
! Asterisk selects all columns.
? Which statement is true of Asterisk?
- Renames a column with AS
- Names the table in SELECT
- Retrieves data
+ Selects all columns
! Asterisk selects all columns.
? Which renames a column with AS?
- INSERT
+ Alias
- DELETE
- UPDATE
! Alias renames a column with AS.
? Which statement is true of Alias?
+ Renames a column with AS
- Changes existing values
- Selects all columns
- Adds a row
! Alias renames a column with AS.
? Which removes duplicate rows?
- FROM
- Alias
- UPDATE
+ Distinct
! Distinct removes duplicate rows.
? Which statement is true of Distinct?
- Adds a row
- Filters rows
- Selects all columns
+ Removes duplicate rows
! Distinct removes duplicate rows.
? Which tests a range inclusive of limits?
- OR
- ORDER BY
- IN
+ BETWEEN
! BETWEEN tests a range inclusive of limits.
? Which statement is true of BETWEEN?
+ Tests a range inclusive of limits
- Reverses a condition
- Matches exactly one character
- Needs both conditions true
! BETWEEN tests a range inclusive of limits.
? Which tests a list of values?
+ IN
- BETWEEN
- Underscore
- ORDER BY
! IN tests a list of values.
? Which statement is true of IN?
- Tests a range inclusive of limits
- Matches exactly one character
+ Tests a list of values
- Matches any number of characters
! IN tests a list of values.
? Which matches a pattern?
+ LIKE
- BETWEEN
- IS NULL
- ORDER BY
! LIKE matches a pattern.
? Which statement is true of LIKE?
- Reverses a condition
- Sorts the result
+ Matches a pattern
- Tests a range inclusive of limits
! LIKE matches a pattern.
? Which matches any number of characters?
- ORDER BY
- IN
- Underscore
+ Percent sign
! Percent sign matches any number of characters.
? Which statement is true of Percent sign?
- Tests for missing values
- Needs either condition true
+ Matches any number of characters
- Sorts the result
! Percent sign matches any number of characters.
? Which matches exactly one character?
- BETWEEN
+ Underscore
- ORDER BY
- NOT
! Underscore matches exactly one character.
? Which statement is true of Underscore?
- Needs either condition true
+ Matches exactly one character
- Matches a pattern
- Sorts the result
! Underscore matches exactly one character.
? Which tests for missing values?
- Underscore
+ IS NULL
- NOT
- ORDER BY
! IS NULL tests for missing values.
? Which statement is true of IS NULL?
+ Tests for missing values
- Tests a list of values
- Needs both conditions true
- Reverses a condition
! IS NULL tests for missing values.
? Which needs both conditions true?
- IN
- IS NULL
- Underscore
+ AND
! AND needs both conditions true.
? Which statement is true of AND?
+ Needs both conditions true
- Sorts the result
- Matches exactly one character
- Tests for missing values
! AND needs both conditions true.
? Which needs either condition true?
- BETWEEN
+ OR
- Underscore
- AND
! OR needs either condition true.
? Which statement is true of OR?
- Matches a pattern
- Tests for missing values
+ Needs either condition true
- Matches exactly one character
! OR needs either condition true.
? Which reverses a condition?
+ NOT
- AND
- BETWEEN
- ORDER BY
! NOT reverses a condition.
? Which statement is true of NOT?
- Needs either condition true
- Tests for missing values
+ Reverses a condition
- Matches exactly one character
! NOT reverses a condition.
? Which sorts the result?
- NOT
- IS NULL
- BETWEEN
+ ORDER BY
! ORDER BY sorts the result.
? Which statement is true of ORDER BY?
- Matches any number of characters
+ Sorts the result
- Matches a pattern
- Needs either condition true
! ORDER BY sorts the result.
? Which stores whole numbers?
- DESC order
- VARCHAR
+ INT
- DECIMAL
! INT stores whole numbers.
? Which statement is true of INT?
- Stores variable length text
- Stores fixed length text
- Stores a date
+ Stores whole numbers
! INT stores whole numbers.
? Which stores decimal numbers?
- LIMIT
- DESC order
+ FLOAT
- DATE
! FLOAT stores decimal numbers.
? Which statement is true of FLOAT?
- Is ascending order
- Stores fixed length text
- Is text ignored by SQL
+ Stores decimal numbers
! FLOAT stores decimal numbers.
? Which stores fixed length text?
+ CHAR
- DESC order
- FLOAT
- DECIMAL
! CHAR stores fixed length text.
? Which statement is true of CHAR?
- Restricts the number of rows
- Is text ignored by SQL
+ Stores fixed length text
- Stores decimal numbers
! CHAR stores fixed length text.
? Which stores variable length text?
+ VARCHAR
- DECIMAL
- LIMIT
- DATE
! VARCHAR stores variable length text.
? Which statement is true of VARCHAR?
- Stores decimal numbers
+ Stores variable length text
- Restricts the number of rows
- Is text ignored by SQL
! VARCHAR stores variable length text.
? Which stores a date?
- ASC
- DECIMAL
- Comment
+ DATE
! DATE stores a date.
? Which statement is true of DATE?
- Stores decimal numbers
- Is descending order
- Restricts the number of rows
+ Stores a date
! DATE stores a date.
? Which stores exact decimals?
+ DECIMAL
- INT
- LIMIT
- VARCHAR
! DECIMAL stores exact decimals.
? Which statement is true of DECIMAL?
- Is ascending order
- Stores whole numbers
- Stores variable length text
+ Stores exact decimals
! DECIMAL stores exact decimals.
? Which is ascending order?
- DESC order
+ ASC
- DECIMAL
- INT
! ASC is ascending order.
? Which statement is true of ASC?
- Stores decimal numbers
- Stores whole numbers
- Stores exact decimals
+ Is ascending order
! ASC is ascending order.
? Which is descending order?
- Comment
- FLOAT
- DECIMAL
+ DESC order
! DESC order is descending order.
? Which statement is true of DESC order?
- Stores variable length text
- Stores whole numbers
- Is text ignored by SQL
+ Is descending order
! DESC order is descending order.
? Which restricts the number of rows?
+ LIMIT
- CHAR
- ASC
- DECIMAL
! LIMIT restricts the number of rows.
? Which statement is true of LIMIT?
- Is ascending order
+ Restricts the number of rows
- Stores variable length text
- Stores exact decimals
! LIMIT restricts the number of rows.
? Which is text ignored by SQL?
- ASC
- DECIMAL
- CHAR
+ Comment
! Comment is text ignored by SQL.
? Which statement is true of Comment?
+ Is text ignored by SQL
- Is ascending order
- Stores exact decimals
- Stores variable length text
! Comment is text ignored by SQL.
? Rows are called
- Attributes
- Domains
- Keys
+ Tuples
! Tuples.
? Number of columns
- Cardinality
- Domain
- Key
+ Degree
! Degree.
? Pattern matching operator
- IN
+ LIKE
- BETWEEN
- IS
! LIKE.
? Unique row identifier
- Foreign key
+ Primary key
- Alias
- Domain
! Primary key.
? Sorting clause
+ ORDER BY
- GROUP BY
- SORT
- ARRANGE
! ORDER BY.
? Adding a row
+ INSERT
- ADD
- PUT
- APPEND
! INSERT.
@visual
compare | DDL and DML | DDL=Structure~CREATE ALTER DROP; DML=Data~INSERT UPDATE DELETE SELECT
blocks | Constraints | PRIMARY KEY; NOT NULL; UNIQUE; DEFAULT; FOREIGN KEY
flow | SELECT query | FROM table; WHERE filter; ORDER BY; Result
steps | Create table | CREATE DATABASE; USE; CREATE TABLE; INSERT
mind | SQL basics | Keys; DDL; DML; Operators
@problems
## Moderate
P: What is a primary key?
A: A column or set of columns that uniquely identifies each row and cannot be NULL.
R: 3 | Unique
R: 3 | NULL
## High
P: Differentiate DDL and DML with examples.
A: DDL defines structure like CREATE TABLE; DML manipulates data like INSERT and SELECT.
R: 2 | DDL
R: 2 | DML
R: 2 | CREATE
R: 2 | INSERT
## Advanced
P: Write a query to show names of students with marks between 60 and 80 in descending order of marks.
A: SELECT name FROM student WHERE marks BETWEEN 60 AND 80 ORDER BY marks DESC;
R: 2 | SELECT
R: 2 | BETWEEN
R: 2 | ORDER BY
R: 2 | DESC
