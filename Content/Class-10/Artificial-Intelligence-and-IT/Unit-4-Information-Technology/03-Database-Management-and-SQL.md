# Database Management and SQL
minutes: 35
yt: class 10 ai and it database management and sql
@study
A database is an organised collection of data managed by a Database Management System (DBMS) such as MySQL, Access or Oracle. In the relational model, data is stored in tables (relations) of rows (records/tuples) and columns (fields/attributes). A primary key uniquely identifies each record; a foreign key links tables. SQL commands: CREATE, INSERT, SELECT, UPDATE, DELETE, with WHERE, ORDER BY and aggregate functions COUNT, SUM, AVG, MAX, MIN. Data types include INT, VARCHAR, DATE.
## Deep dive: relational model
Tables (relations) have rows (records/tuples) and columns (fields/attributes). A primary key uniquely identifies rows; a foreign key refers to another table's primary key to link them.
## Deep dive: SQL commands
CREATE TABLE, INSERT INTO ... VALUES, SELECT ... FROM ... WHERE ... ORDER BY, UPDATE ... SET ... WHERE, DELETE FROM ... WHERE. Aggregates: COUNT, SUM, AVG, MAX, MIN with GROUP BY.
## Deep dive: example
SELECT Name, Marks FROM Student WHERE Marks > 80 ORDER BY Marks DESC;
## Deep dive: advantages
A DBMS reduces redundancy, improves integrity, allows sharing, security and fast searching.
## Hindi saransh
डेटाबेस में तालिकाओं के रूप में डेटा रखा जाता है। प्राइमरी की रिकॉर्ड को अद्वितीय बनाती है। SQL में SELECT, INSERT, UPDATE, DELETE मुख्य कमांड हैं।
> SELECT columns FROM table WHERE condition ORDER BY column;
@formulas
## Key points
Query | SELECT cols FROM table WHERE cond | 
Primary key | unique, not null | 
Aggregates | COUNT SUM AVG MAX MIN | 

@qa
Q: What is meant by Database?
A: Organised data store.
Q: What is meant by DBMS?
A: Database software.
Q: What is meant by Table?
A: Rows and columns.
Q: What is meant by Record?
A: row.
Q: What is meant by Field?
A: column.
Q: What is meant by Tuple?
A: record.
Q: What is meant by Attribute?
A: field.
Q: What is meant by Primary key?
A: Unique identifier.
Q: What is meant by Foreign key?
A: Link to another table.
Q: What is meant by Relational database?
A: Linked tables.
Q: What is meant by SQL?
A: Query language.
Q: What is meant by DDL?
A: Definition language.
Q: What is meant by DML?
A: Manipulation language.
Q: What is meant by CREATE?
A: Makes a table.
Q: What is meant by INSERT?
A: Adds a record.
Q: What is meant by SELECT?
A: Retrieves data.
Q: What is meant by UPDATE?
A: Modifies data.
Q: What is meant by DELETE?
A: Removes data.
Q: What is meant by WHERE?
A: Condition filter.
Q: What is meant by ORDER BY?
A: Sorting clause.
Q: What is meant by GROUP BY?
A: Grouping clause.
Q: What is meant by DISTINCT?
A: Unique values only.
Q: What is meant by COUNT?
A: Counts rows.
Q: What is meant by SUM?
A: Totals values.
Q: What is meant by AVG?
A: Average value.
Q: What is meant by MAX?
A: Maximum value.
Q: What is meant by MIN?
A: Minimum value.
Q: What is meant by LIKE?
A: Pattern match.
Q: What is meant by NULL?
A: Missing value.
Q: What is meant by NOT NULL?
A: Value required.
Q: What is meant by UNIQUE?
A: No repeats.
Q: What is meant by VARCHAR?
A: Text data type.
Q: What is meant by INT?
A: Integer data type.
Q: What is meant by DATE?
A: Date data type.
Q: What is meant by Query?
A: Data request.
Q: What is meant by Form?
A: Entry interface.
Q: What is meant by Report?
A: Printed output.
Q: What is meant by Redundancy?
A: Duplicate data.
Q: What is meant by Integrity?
A: Data accuracy.
Q: What is meant by Index?
A: Speeds up search.
Q: What is meant by Normalisation?
A: Reducing redundancy.
Q: Which term matches this description: Organised data store?
A: Database.
Q: Which term matches this description: Database software?
A: DBMS.
Q: Which term matches this description: Rows and columns?
A: Table.
Q: Which term matches this description: row?
A: Record.
Q: Which term matches this description: column?
A: Field.
Q: Which term matches this description: record?
A: Tuple.
Q: Which term matches this description: field?
A: Attribute.
Q: Which term matches this description: Unique identifier?
A: Primary key.
Q: Which term matches this description: Link to another table?
A: Foreign key.
Q: Which term matches this description: Linked tables?
A: Relational database.
Q: Which term matches this description: Query language?
A: SQL.
Q: Which term matches this description: Definition language?
A: DDL.
Q: Which term matches this description: Manipulation language?
A: DML.
Q: Which term matches this description: Makes a table?
A: CREATE.
Q: Which term matches this description: Adds a record?
A: INSERT.
Q: Which term matches this description: Retrieves data?
A: SELECT.
Q: Which term matches this description: Modifies data?
A: UPDATE.
Q: Which term matches this description: Removes data?
A: DELETE.
Q: Which term matches this description: Condition filter?
A: WHERE.
Q: Which term matches this description: Sorting clause?
A: ORDER BY.
Q: Which term matches this description: Grouping clause?
A: GROUP BY.
Q: Which term matches this description: Unique values only?
A: DISTINCT.
Q: Which term matches this description: Counts rows?
A: COUNT.
Q: Which term matches this description: Totals values?
A: SUM.
Q: Which term matches this description: Average value?
A: AVG.
Q: Which term matches this description: Maximum value?
A: MAX.
Q: Which term matches this description: Minimum value?
A: MIN.
Q: Which term matches this description: Pattern match?
A: LIKE.
Q: Which term matches this description: Missing value?
A: NULL.
Q: Which term matches this description: Value required?
A: NOT NULL.
Q: Which term matches this description: No repeats?
A: UNIQUE.
Q: Which term matches this description: Text data type?
A: VARCHAR.
Q: Which term matches this description: Integer data type?
A: INT.
Q: Which term matches this description: Date data type?
A: DATE.
Q: Which term matches this description: Data request?
A: Query.
Q: Which term matches this description: Entry interface?
A: Form.
Q: Which term matches this description: Printed output?
A: Report.
Q: Which term matches this description: Duplicate data?
A: Redundancy.
Q: Which term matches this description: Data accuracy?
A: Integrity.
Q: Which term matches this description: Speeds up search?
A: Index.
Q: Which term matches this description: Reducing redundancy?
A: Normalisation.
Q: What is a database?
A: An organised collection of related data.
Q: What is a DBMS?
A: Software to create, manage and use databases.
Q: Give examples of a DBMS.
A: MySQL, Oracle, MS Access and SQLite.
Q: What is a table?
A: Data arranged in rows and columns.
Q: What is a record?
A: A row in a table.
Q: What is a field?
A: A column in a table.
Q: What is another name for a record?
A: Tuple.
Q: What is another name for a field?
A: Attribute.
Q: What is a primary key?
A: A field with unique, non-null values identifying each record.
Q: What is a foreign key?
A: A field linking to the primary key of another table.
Q: What is a relational database?
A: A database that stores data in related tables.
Q: What is SQL?
A: Structured Query Language.
Q: What is DDL?
A: Data Definition Language, such as CREATE.
Q: What is DML?
A: Data Manipulation Language, such as INSERT and SELECT.
Q: Which command creates a table?
A: CREATE TABLE.
Q: Which command adds a record?
A: INSERT INTO.
Q: Which command displays data?
A: SELECT.
Q: Which command changes data?
A: UPDATE.
Q: Which command removes records?
A: DELETE.
Q: What does SELECT * mean?
A: Select all columns.
Q: What does WHERE do?
A: Filters records by a condition.
Q: What does ORDER BY do?
A: Sorts the result.
Q: What does ORDER BY DESC do?
A: Sorts in descending order.
Q: What does DISTINCT do?
A: Removes duplicate values.
Q: What does COUNT() do?
A: Counts rows.
Q: What does SUM() do?
A: Adds numeric values.
Q: What does AVG() do?
A: Finds the average.
Q: What does MAX() do?
A: Finds the highest value.
Q: What does MIN() do?
A: Finds the lowest value.
Q: What does LIKE do?
A: Matches a text pattern.
Q: What does % mean in LIKE?
A: Any number of characters.
Q: What does GROUP BY do?
A: Groups rows to apply aggregate functions.
Q: What is the data type VARCHAR?
A: Variable-length text.
Q: What is the data type INT?
A: Whole numbers.
Q: What is the data type DATE?
A: Calendar dates.
Q: What does NOT NULL mean?
A: The field must have a value.
Q: What does UNIQUE mean?
A: No two records may have the same value.
Q: What is data redundancy?
A: Unnecessary repetition of data.
Q: What is data integrity?
A: Accuracy and consistency of data.
Q: What is a query?
A: A request for data from a database.
Q: What is a form in a database?
A: An interface for entering data.
Q: What is a report?
A: A formatted output of data.
@quiz
? What is meant by Database?
- Link to another table
+ Organised data store
- Speeds up search
- Query language
! From the CBSE Class 9 syllabus.
? What is meant by DBMS?
- Definition language
- Maximum value
- Adds a record
+ Database software
! From the CBSE Class 9 syllabus.
? What is meant by Table?
- Entry interface
+ Rows and columns
- Adds a record
- No repeats
! From the CBSE Class 9 syllabus.
? What is meant by Record?
- Removes data
- Definition language
+ row
- Minimum value
! From the CBSE Class 9 syllabus.
? What is meant by Field?
+ column
- Missing value
- Entry interface
- field
! From the CBSE Class 9 syllabus.
? What is meant by Tuple?
- Makes a table
- Condition filter
- Duplicate data
+ record
! From the CBSE Class 9 syllabus.
? What is meant by Attribute?
- Rows and columns
- column
+ field
- Link to another table
! From the CBSE Class 9 syllabus.
? What is meant by Primary key?
- field
+ Unique identifier
- row
- Speeds up search
! From the CBSE Class 9 syllabus.
? What is meant by Foreign key?
+ Link to another table
- Rows and columns
- Totals values
- Speeds up search
! From the CBSE Class 9 syllabus.
? What is meant by Relational database?
+ Linked tables
- Retrieves data
- Totals values
- Data request
! From the CBSE Class 9 syllabus.
? What is meant by SQL?
+ Query language
- Linked tables
- column
- Printed output
! From the CBSE Class 9 syllabus.
? What is meant by DDL?
+ Definition language
- Unique identifier
- Makes a table
- Link to another table
! From the CBSE Class 9 syllabus.
? What is meant by DML?
- Pattern match
- field
- Date data type
+ Manipulation language
! From the CBSE Class 9 syllabus.
? What is meant by CREATE?
- Duplicate data
- column
+ Makes a table
- Unique identifier
! From the CBSE Class 9 syllabus.
? What is meant by INSERT?
- Query language
- Totals values
- Removes data
+ Adds a record
! From the CBSE Class 9 syllabus.
? What is meant by SELECT?
- Grouping clause
+ Retrieves data
- Totals values
- Modifies data
! From the CBSE Class 9 syllabus.
? What is meant by UPDATE?
+ Modifies data
- Pattern match
- Link to another table
- Printed output
! From the CBSE Class 9 syllabus.
? What is meant by DELETE?
- Adds a record
- Query language
+ Removes data
- Grouping clause
! From the CBSE Class 9 syllabus.
? What is meant by WHERE?
- Minimum value
- Query language
- Data request
+ Condition filter
! From the CBSE Class 9 syllabus.
? What is meant by ORDER BY?
+ Sorting clause
- Pattern match
- No repeats
- Entry interface
! From the CBSE Class 9 syllabus.
? What is meant by GROUP BY?
- Integer data type
- Speeds up search
- row
+ Grouping clause
! From the CBSE Class 9 syllabus.
? What is meant by DISTINCT?
- Missing value
- Average value
+ Unique values only
- Data accuracy
! From the CBSE Class 9 syllabus.
? What is meant by COUNT?
- Unique identifier
- Unique values only
- Integer data type
+ Counts rows
! From the CBSE Class 9 syllabus.
? What is meant by SUM?
- Grouping clause
- Unique identifier
- Condition filter
+ Totals values
! From the CBSE Class 9 syllabus.
? What is meant by AVG?
+ Average value
- row
- Text data type
- Duplicate data
! From the CBSE Class 9 syllabus.
? What is meant by MAX?
- No repeats
+ Maximum value
- Retrieves data
- row
! From the CBSE Class 9 syllabus.
? What is meant by MIN?
- Date data type
+ Minimum value
- Duplicate data
- Text data type
! From the CBSE Class 9 syllabus.
? What is meant by LIKE?
- Text data type
- Adds a record
- Makes a table
+ Pattern match
! From the CBSE Class 9 syllabus.
? What is meant by NULL?
- Unique identifier
- Reducing redundancy
- Value required
+ Missing value
! From the CBSE Class 9 syllabus.
? What is meant by NOT NULL?
- Query language
- Linked tables
+ Value required
- Missing value
! From the CBSE Class 9 syllabus.
? What is meant by UNIQUE?
- Date data type
+ No repeats
- Duplicate data
- Database software
! From the CBSE Class 9 syllabus.
? What is meant by VARCHAR?
- Retrieves data
+ Text data type
- Totals values
- Unique values only
! From the CBSE Class 9 syllabus.
? What is meant by INT?
- Data accuracy
- Makes a table
- Definition language
+ Integer data type
! From the CBSE Class 9 syllabus.
? What is meant by DATE?
+ Date data type
- Definition language
- Text data type
- Unique identifier
! From the CBSE Class 9 syllabus.
? What is meant by Query?
- Counts rows
+ Data request
- Database software
- Unique identifier
! From the CBSE Class 9 syllabus.
? What is meant by Form?
- Condition filter
- Speeds up search
- field
+ Entry interface
! From the CBSE Class 9 syllabus.
? What is meant by Report?
+ Printed output
- Totals values
- Text data type
- Link to another table
! From the CBSE Class 9 syllabus.
? What is meant by Redundancy?
+ Duplicate data
- Retrieves data
- Removes data
- Adds a record
! From the CBSE Class 9 syllabus.
? What is meant by Integrity?
- Linked tables
- Query language
- Link to another table
+ Data accuracy
! From the CBSE Class 9 syllabus.
? What is meant by Index?
- Link to another table
- No repeats
+ Speeds up search
- Unique values only
! From the CBSE Class 9 syllabus.
? What is meant by Normalisation?
- Query language
+ Reducing redundancy
- Rows and columns
- Retrieves data
! From the CBSE Class 9 syllabus.
? Which term matches this description: Organised data store?
- Primary key
- SELECT
+ Database
- NOT NULL
! From the CBSE Class 9 syllabus.
? Which term matches this description: Database software?
+ DBMS
- UPDATE
- SELECT
- Foreign key
! From the CBSE Class 9 syllabus.
? Which term matches this description: Rows and columns?
+ Table
- Redundancy
- INT
- NOT NULL
! From the CBSE Class 9 syllabus.
? Which term matches this description: row?
+ Record
- INT
- Redundancy
- Table
! From the CBSE Class 9 syllabus.
? Which term matches this description: column?
- INSERT
+ Field
- NOT NULL
- Report
! From the CBSE Class 9 syllabus.
? Which term matches this description: record?
- DATE
+ Tuple
- Report
- UNIQUE
! From the CBSE Class 9 syllabus.
? Which term matches this description: field?
- VARCHAR
+ Attribute
- Normalisation
- SQL
! From the CBSE Class 9 syllabus.
? Which term matches this description: Unique identifier?
+ Primary key
- Index
- Record
- Database
! From the CBSE Class 9 syllabus.
? Which term matches this description: Link to another table?
- Primary key
- Form
+ Foreign key
- SELECT
! From the CBSE Class 9 syllabus.
? Which term matches this description: Linked tables?
- LIKE
- Query
- UNIQUE
+ Relational database
! From the CBSE Class 9 syllabus.
? Which term matches this description: Query language?
- SUM
- NOT NULL
- Integrity
+ SQL
! From the CBSE Class 9 syllabus.
? Which term matches this description: Definition language?
- AVG
- Index
+ DDL
- UNIQUE
! From the CBSE Class 9 syllabus.
? Which term matches this description: Manipulation language?
- CREATE
- Table
- INT
+ DML
! From the CBSE Class 9 syllabus.
? Which term matches this description: Makes a table?
- Integrity
- UNIQUE
- ORDER BY
+ CREATE
! From the CBSE Class 9 syllabus.
? Which term matches this description: Adds a record?
- Form
+ INSERT
- Tuple
- Query
! From the CBSE Class 9 syllabus.
? Which term matches this description: Retrieves data?
+ SELECT
- DBMS
- SUM
- INT
! From the CBSE Class 9 syllabus.
? Which term matches this description: Modifies data?
- Redundancy
+ UPDATE
- Attribute
- DELETE
! From the CBSE Class 9 syllabus.
? Which term matches this description: Removes data?
+ DELETE
- COUNT
- Query
- Report
! From the CBSE Class 9 syllabus.
? Which term matches this description: Condition filter?
- COUNT
- Database
+ WHERE
- NOT NULL
! From the CBSE Class 9 syllabus.
? Which term matches this description: Sorting clause?
- NOT NULL
- SELECT
- Form
+ ORDER BY
! From the CBSE Class 9 syllabus.
? Which term matches this description: Grouping clause?
- Normalisation
+ GROUP BY
- Primary key
- SQL
! From the CBSE Class 9 syllabus.
? Which term matches this description: Unique values only?
- COUNT
- GROUP BY
- INT
+ DISTINCT
! From the CBSE Class 9 syllabus.
? Which term matches this description: Counts rows?
+ COUNT
- GROUP BY
- Index
- Field
! From the CBSE Class 9 syllabus.
? Which term matches this description: Totals values?
+ SUM
- DATE
- NULL
- Field
! From the CBSE Class 9 syllabus.
? Which term matches this description: Average value?
- SELECT
+ AVG
- Primary key
- Report
! From the CBSE Class 9 syllabus.
? Which term matches this description: Maximum value?
- DISTINCT
- Field
+ MAX
- DELETE
! From the CBSE Class 9 syllabus.
? Which term matches this description: Minimum value?
+ MIN
- Primary key
- DELETE
- ORDER BY
! From the CBSE Class 9 syllabus.
? Which term matches this description: Pattern match?
- Attribute
- Relational database
+ LIKE
- ORDER BY
! From the CBSE Class 9 syllabus.
? Which term matches this description: Missing value?
- MAX
- SELECT
- Form
+ NULL
! From the CBSE Class 9 syllabus.
? Which term matches this description: Value required?
- Foreign key
- DDL
- MIN
+ NOT NULL
! From the CBSE Class 9 syllabus.
? Which term matches this description: No repeats?
- SELECT
- Form
+ UNIQUE
- Report
! From the CBSE Class 9 syllabus.
? Which term matches this description: Text data type?
+ VARCHAR
- MIN
- DISTINCT
- AVG
! From the CBSE Class 9 syllabus.
? Which term matches this description: Integer data type?
- DELETE
- SUM
+ INT
- AVG
! From the CBSE Class 9 syllabus.
? Which term matches this description: Date data type?
- Database
+ DATE
- SELECT
- INT
! From the CBSE Class 9 syllabus.
? Which term matches this description: Data request?
- MAX
- Primary key
- DBMS
+ Query
! From the CBSE Class 9 syllabus.
? Which term matches this description: Entry interface?
- SUM
- SQL
+ Form
- MIN
! From the CBSE Class 9 syllabus.
? Which term matches this description: Printed output?
- MAX
+ Report
- UNIQUE
- Form
! From the CBSE Class 9 syllabus.
? Which term matches this description: Duplicate data?
- Foreign key
- INSERT
+ Redundancy
- Index
! From the CBSE Class 9 syllabus.
? Which term matches this description: Data accuracy?
- MIN
+ Integrity
- NOT NULL
- UPDATE
! From the CBSE Class 9 syllabus.
? Which term matches this description: Speeds up search?
- AVG
+ Index
- NULL
- MAX
! From the CBSE Class 9 syllabus.
? Which term matches this description: Reducing redundancy?
- DISTINCT
- COUNT
+ Normalisation
- Relational database
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Database".
- row
- record
+ Organised data store
- Retrieves data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "DBMS".
+ Database software
- Link to another table
- column
- Value required
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Table".
+ Rows and columns
- field
- Adds a record
- Modifies data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Record".
- record
+ row
- Data request
- Removes data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Field".
- record
+ column
- Manipulation language
- Data request
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Tuple".
- Condition filter
- Totals values
- Data accuracy
+ record
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Attribute".
- Missing value
+ field
- column
- Definition language
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Primary key".
- Minimum value
- Maximum value
+ Unique identifier
- Makes a table
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Foreign key".
- Removes data
- Rows and columns
- Modifies data
+ Link to another table
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Relational database".
- Printed output
- column
+ Linked tables
- Makes a table
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "SQL".
- column
- Integer data type
- Adds a record
+ Query language
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "DDL".
- Makes a table
+ Definition language
- Minimum value
- Date data type
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "DML".
+ Manipulation language
- Grouping clause
- Duplicate data
- Text data type
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "CREATE".
+ Makes a table
- Value required
- Manipulation language
- Sorting clause
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "INSERT".
- Makes a table
- Link to another table
- Average value
+ Adds a record
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "SELECT".
+ Retrieves data
- Value required
- Pattern match
- Maximum value
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "UPDATE".
- Condition filter
+ Modifies data
- Value required
- Database software
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "DELETE".
- Query language
+ Removes data
- field
- Linked tables
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "WHERE".
- Printed output
- Linked tables
+ Condition filter
- Organised data store
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "ORDER BY".
- Organised data store
+ Sorting clause
- Makes a table
- Manipulation language
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "GROUP BY".
- Link to another table
- Rows and columns
+ Grouping clause
- Sorting clause
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "DISTINCT".
+ Unique values only
- Link to another table
- Unique identifier
- Reducing redundancy
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "COUNT".
- Modifies data
+ Counts rows
- Linked tables
- Definition language
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "SUM".
+ Totals values
- Retrieves data
- Maximum value
- Pattern match
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "AVG".
- Sorting clause
+ Average value
- column
- Printed output
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "MAX".
- Text data type
+ Maximum value
- Duplicate data
- Pattern match
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "MIN".
- Value required
+ Minimum value
- Text data type
- Adds a record
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "LIKE".
+ Pattern match
- Condition filter
- Removes data
- Adds a record
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "NULL".
- Grouping clause
- column
- Reducing redundancy
+ Missing value
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "NOT NULL".
- Removes data
+ Value required
- Average value
- Manipulation language
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "UNIQUE".
- Average value
- Date data type
+ No repeats
- Printed output
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "VARCHAR".
- Entry interface
+ Text data type
- column
- Adds a record
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "INT".
+ Integer data type
- Rows and columns
- field
- Entry interface
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "DATE".
+ Date data type
- Average value
- Text data type
- Pattern match
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Query".
- Condition filter
- Modifies data
+ Data request
- Unique values only
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Form".
- Query language
+ Entry interface
- column
- Unique identifier
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Report".
- Entry interface
+ Printed output
- Text data type
- Data accuracy
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Redundancy".
- Pattern match
- Grouping clause
+ Duplicate data
- Totals values
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Integrity".
- Printed output
- Reducing redundancy
+ Data accuracy
- No repeats
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Index".
- field
+ Speeds up search
- Integer data type
- Rows and columns
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Normalisation".
+ Reducing redundancy
- record
- Duplicate data
- Retrieves data
! From the CBSE Class 9 syllabus.
@visual
flow | SQL query | SELECT columns; FROM table; WHERE condition; ORDER BY
compare | Keys | Primary key: unique; Foreign key: links tables
@problems
P: What is a primary key?
A: A field that uniquely identifies each record.
R: 1 | Key idea
R: 1 | Example
