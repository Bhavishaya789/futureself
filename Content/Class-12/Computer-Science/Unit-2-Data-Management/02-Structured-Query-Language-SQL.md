# Structured Query Language (SQL)
minutes: 45
yt: class 12 computer science SQL create select where group by join aggregate functions
@study
SQL is the standard language for relational databases. DDL (Data Definition Language): CREATE, ALTER, DROP. DML (Data Manipulation Language): INSERT, UPDATE, DELETE, SELECT. Creating: CREATE DATABASE school; USE school; CREATE TABLE student (rollno INT PRIMARY KEY, name VARCHAR(30) NOT NULL, marks FLOAT, dob DATE). Constraints: NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, DEFAULT, CHECK. ALTER TABLE adds a column (ADD), changes a type (MODIFY) or removes a column (DROP COLUMN). DROP TABLE removes the table entirely. INSERT INTO student VALUES (1,"Asha",85.5,"2008-05-01"). UPDATE student SET marks=90 WHERE rollno=1. DELETE FROM student WHERE rollno=1; without WHERE all rows are deleted. SELECT: SELECT column list FROM table WHERE condition ORDER BY column ASC|DESC; SELECT * selects all columns; DISTINCT removes duplicates; AS gives an alias. WHERE conditions use relational operators, AND, OR, NOT, BETWEEN low AND high (inclusive), IN (list), LIKE with wildcards % (any string) and _ (a single character), IS NULL and IS NOT NULL (never = NULL). ORDER BY sorts, ascending by default. Aggregate functions: COUNT(*), COUNT(column) which ignores NULLs, SUM, AVG, MIN, MAX. GROUP BY groups rows sharing a value so aggregates apply per group; HAVING filters groups after grouping, while WHERE filters rows before grouping; order of clauses: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY. Single row (scalar) functions: UCASE, LCASE, LENGTH, LEFT, RIGHT, MID, TRIM, INSTR, ROUND, MOD, POWER, NOW, DATE, MONTH, YEAR, DAYNAME. Joins combine rows from two tables: Cartesian product has degree d1+d2 and cardinality c1*c2; equi join uses equality on common columns; natural join removes the duplicate column; typically WHERE a.id = b.id. Aggregate with join and group by gives summaries.
## Deep dive: DDL and DML
CREATE, ALTER and DROP define structure; INSERT, UPDATE, DELETE and SELECT work with data.
## Deep dive: SELECT clauses
WHERE filters rows, GROUP BY groups, HAVING filters groups and ORDER BY sorts.
## Deep dive: Joins
Cartesian product multiplies cardinalities; an equi join filters it on equal key columns.
## Hindi saransh
SQL: DDL, DML, SELECT, WHERE, GROUP BY, HAVING aur join.
> Remember: WHERE filters rows; HAVING filters groups.
@formulas
## Key facts
DDL | CREATE ALTER DROP
DML | INSERT UPDATE DELETE SELECT
% | Any string
_ | One character
Cartesian | c1 x c2 rows

@qa
Q: Which is the language of relational databases?
A: SQL is the language of relational databases.
Q: What do you know about SQL?
A: SQL is the language of relational databases.
Q: Which defines table structure?
A: DDL defines table structure.
Q: What do you know about DDL?
A: DDL defines table structure.
Q: Which manipulates table data?
A: DML manipulates table data.
Q: What do you know about DML?
A: DML manipulates table data.
Q: Which is a DDL command?
A: Create is a DDL command.
Q: What do you know about Create?
A: Create is a DDL command.
Q: What do you know about Alter?
A: Alter is a DDL command.
Q: What do you know about Drop?
A: Drop is a DDL command.
Q: Which is a DML command?
A: Insert is a DML command.
Q: What do you know about Insert?
A: Insert is a DML command.
Q: What do you know about Update?
A: Update is a DML command.
Q: What do you know about Delete?
A: Delete is a DML command.
Q: Which retrieves data?
A: Select retrieves data.
Q: What do you know about Select?
A: Select retrieves data.
Q: Which makes a new database?
A: Create database makes a new database.
Q: What do you know about Create database?
A: Create database makes a new database.
Q: Which selects the database?
A: Use selects the database.
Q: What do you know about Use?
A: Use selects the database.
Q: Which defines columns and types?
A: Create table defines columns and types.
Q: What do you know about Create table?
A: Create table defines columns and types.
Q: Which adds a column?
A: Alter add adds a column.
Q: What do you know about Alter add?
A: Alter add adds a column.
Q: Which changes a column type?
A: Alter modify changes a column type.
Q: What do you know about Alter modify?
A: Alter modify changes a column type.
Q: Which removes a column?
A: Alter drop column removes a column.
Q: What do you know about Alter drop column?
A: Alter drop column removes a column.
Q: Which removes the table completely?
A: Drop table removes the table completely.
Q: What do you know about Drop table?
A: Drop table removes the table completely.
Q: Which forbids NULL and duplicates?
A: Primary key constraint forbids NULL and duplicates.
Q: What do you know about Primary key constraint?
A: Primary key constraint forbids NULL and duplicates.
Q: Which forbids missing values?
A: Not null constraint forbids missing values.
Q: What do you know about Not null constraint?
A: Not null constraint forbids missing values.
Q: Which forbids duplicates?
A: Unique constraint forbids duplicates.
Q: What do you know about Unique constraint?
A: Unique constraint forbids duplicates.
Q: Which supplies a default value?
A: Default constraint supplies a default value.
Q: What do you know about Default constraint?
A: Default constraint supplies a default value.
Q: Which validates a condition?
A: Check constraint validates a condition.
Q: What do you know about Check constraint?
A: Check constraint validates a condition.
Q: Which links to another table?
A: Foreign key constraint links to another table.
Q: What do you know about Foreign key constraint?
A: Foreign key constraint links to another table.
Q: Which adds a row?
A: Insert into adds a row.
Q: What do you know about Insert into?
A: Insert into adds a row.
Q: Which changes values?
A: Update set changes values.
Q: What do you know about Update set?
A: Update set changes values.
Q: Which changes all rows?
A: Update without where changes all rows.
Q: What do you know about Update without where?
A: Update without where changes all rows.
Q: Which removes all rows?
A: Delete without where removes all rows.
Q: What do you know about Delete without where?
A: Delete without where removes all rows.
Q: Which removes rows but keeps the table?
A: Delete removes rows but keeps the table.
Q: Which selects all columns?
A: Select star selects all columns.
Q: What do you know about Select star?
A: Select star selects all columns.
Q: Which removes duplicate rows?
A: Distinct removes duplicate rows.
Q: What do you know about Distinct?
A: Distinct removes duplicate rows.
Q: Which creates an alias?
A: As creates an alias.
Q: What do you know about As?
A: As creates an alias.
Q: Which filters rows?
A: Where filters rows.
Q: What do you know about Where?
A: Where filters rows.
Q: Which is inclusive of both limits?
A: Between is inclusive of both limits.
Q: What do you know about Between?
A: Between is inclusive of both limits.
Q: Which matches any value in a list?
A: In matches any value in a list.
Q: What do you know about In?
A: In matches any value in a list.
Q: Which matches patterns?
A: Like matches patterns.
Q: What do you know about Like?
A: Like matches patterns.
Q: Which matches any string?
A: Percent wildcard matches any string.
Q: What do you know about Percent wildcard?
A: Percent wildcard matches any string.
Q: Which matches one character?
A: Underscore wildcard matches one character.
Q: What do you know about Underscore wildcard?
A: Underscore wildcard matches one character.
Q: Which tests for missing values?
A: Is null tests for missing values.
Q: What do you know about Is null?
A: Is null tests for missing values.
Q: Which never works as a test?
A: Equals null never works as a test.
Q: What do you know about Equals null?
A: Equals null never works as a test.
Q: Which sorts the result?
A: Order by sorts the result.
Q: What do you know about Order by?
A: Order by sorts the result.
Q: Which is ascending?
A: Order by default is ascending.
Q: What do you know about Order by default?
A: Order by default is ascending.
Q: Which sorts descending?
A: Desc sorts descending.
Q: What do you know about Desc?
A: Desc sorts descending.
Q: Which counts all rows?
A: Count star counts all rows.
Q: What do you know about Count star?
A: Count star counts all rows.
Q: Which ignores NULL values?
A: Count column ignores NULL values.
Q: What do you know about Count column?
A: Count column ignores NULL values.
Q: Which adds values?
A: Sum adds values.
Q: What do you know about Sum?
A: Sum adds values.
Q: Which computes the average?
A: Avg computes the average.
Q: What do you know about Avg?
A: Avg computes the average.
Q: Which returns the smallest value?
A: Min returns the smallest value.
Q: What do you know about Min?
A: Min returns the smallest value.
Q: Which returns the largest value?
A: Max returns the largest value.
Q: What do you know about Max?
A: Max returns the largest value.
Q: Which groups rows with the same value?
A: Group by groups rows with the same value.
Q: What do you know about Group by?
A: Group by groups rows with the same value.
Q: Which filters groups?
A: Having filters groups.
Q: What do you know about Having?
A: Having filters groups.
Q: Which differ in timing?
A: Where versus having differ in timing.
Q: What do you know about Where versus having?
A: Where versus having differ in timing.
Q: Which converts to upper case?
A: Ucase converts to upper case.
Q: What do you know about Ucase?
A: Ucase converts to upper case.
Q: Which converts to lower case?
A: Lcase converts to lower case.
Q: What do you know about Lcase?
A: Lcase converts to lower case.
Q: Which counts characters?
A: Length counts characters.
Q: What do you know about Length?
A: Length counts characters.
Q: Which extracts a substring?
A: Mid extracts a substring.
Q: What do you know about Mid?
A: Mid extracts a substring.
Q: Which removes spaces at the ends?
A: Trim removes spaces at the ends.
Q: What do you know about Trim?
A: Trim removes spaces at the ends.
Q: Which finds the position of a substring?
A: Instr finds the position of a substring.
Q: What do you know about Instr?
A: Instr finds the position of a substring.
Q: Which rounds to given decimals?
A: Round rounds to given decimals.
Q: What do you know about Round?
A: Round rounds to given decimals.
Q: Which gives the remainder?
A: Mod gives the remainder.
Q: What do you know about Mod?
A: Mod gives the remainder.
Q: Which raises to a power?
A: Power raises to a power.
Q: What do you know about Power?
A: Power raises to a power.
Q: Which returns current date and time?
A: Now returns current date and time.
Q: What do you know about Now?
A: Now returns current date and time.
Q: Which extracts the year from a date?
A: Year extracts the year from a date.
Q: What do you know about Year?
A: Year extracts the year from a date.
Q: Which gives the weekday name?
A: Dayname gives the weekday name.
Q: What do you know about Dayname?
A: Dayname gives the weekday name.
Q: Which combines rows of two tables?
A: Join combines rows of two tables.
Q: What do you know about Join?
A: Join combines rows of two tables.
Q: Which pairs every row with every row?
A: Cartesian product pairs every row with every row.
Q: What do you know about Cartesian product?
A: Cartesian product pairs every row with every row.
Q: Which is the sum of degrees?
A: Cartesian degree is the sum of degrees.
Q: What do you know about Cartesian degree?
A: Cartesian degree is the sum of degrees.
Q: Which is the product of cardinalities?
A: Cartesian cardinality is the product of cardinalities.
Q: What do you know about Cartesian cardinality?
A: Cartesian cardinality is the product of cardinalities.
Q: Which matches equal values of common columns?
A: Equi join matches equal values of common columns.
Q: What do you know about Equi join?
A: Equi join matches equal values of common columns.
Q: Which removes the duplicate common column?
A: Natural join removes the duplicate common column.
Q: What do you know about Natural join?
A: Natural join removes the duplicate common column.
Q: Which is placed in where?
A: Join condition is placed in where.
Q: What do you know about Join condition?
A: Join condition is placed in where.
Q: What is SQL?
A: The standard language for relational databases.
Q: What is DDL?
A: Commands that define structure like CREATE and ALTER.
Q: What is DML?
A: Commands that manipulate data like INSERT and SELECT.
Q: What does DISTINCT do?
A: Removes duplicate rows.
Q: What does LIKE do?
A: Matches patterns with % and _.
Q: What does GROUP BY do?
A: Groups rows with the same value for aggregation.
Q: What is a Cartesian product?
A: Pairing of each row of one table with each row of another.
Q: How do you test for missing values?
A: With IS NULL.
@quiz
? Which is the language of relational databases?
- Update
- DML
- Insert
+ SQL
! SQL is the language of relational databases.
? Which statement is true of SQL?
- Retrieves data
- Is a DDL command
+ Is the language of relational databases
- Is a DML command
! SQL is the language of relational databases.
? Which defines table structure?
- SQL
- Select
+ DDL
- Drop
! DDL defines table structure.
? Which statement is true of DDL?
- Retrieves data
- Is the language of relational databases
- Is a DDL command
+ Defines table structure
! DDL defines table structure.
? Which manipulates table data?
- Delete
- DDL
- Update
+ DML
! DML manipulates table data.
? Which statement is true of DML?
+ Manipulates table data
- Is a DDL command
- Retrieves data
- Is a DML command
! DML manipulates table data.
? Which is a DDL command?
- Alter
- DDL
+ Create
- Insert
! Create is a DDL command.
? Which statement is true of Create?
- Retrieves data
- Defines table structure
+ Is a DDL command
- Is a DML command
! Create is a DDL command.
? Which statement is true of Alter?
- Is a DML command
- Defines table structure
- Retrieves data
+ Is a DDL command
! Alter is a DDL command.
? Which statement is true of Drop?
- Retrieves data
- Is the language of relational databases
+ Is a DDL command
- Is a DML command
! Drop is a DDL command.
? Which is a DML command?
- Drop
- Update
- DDL
+ Insert
! Insert is a DML command.
? Which statement is true of Insert?
+ Is a DML command
- Manipulates table data
- Retrieves data
- Is a DDL command
! Insert is a DML command.
? Which statement is true of Update?
- Is a DDL command
+ Is a DML command
- Defines table structure
- Manipulates table data
! Update is a DML command.
? Which statement is true of Delete?
+ Is a DML command
- Retrieves data
- Manipulates table data
- Is the language of relational databases
! Delete is a DML command.
? Which retrieves data?
+ Select
- Delete
- Update
- DDL
! Select retrieves data.
? Which statement is true of Select?
- Manipulates table data
- Defines table structure
- Is the language of relational databases
+ Retrieves data
! Select retrieves data.
? Which makes a new database?
- Default constraint
+ Create database
- Alter modify
- Create table
! Create database makes a new database.
? Which statement is true of Create database?
- Defines columns and types
+ Makes a new database
- Supplies a default value
- Validates a condition
! Create database makes a new database.
? Which selects the database?
+ Use
- Default constraint
- Unique constraint
- Create database
! Use selects the database.
? Which statement is true of Use?
- Validates a condition
- Defines columns and types
- Forbids missing values
+ Selects the database
! Use selects the database.
? Which defines columns and types?
+ Create table
- Foreign key constraint
- Primary key constraint
- Alter drop column
! Create table defines columns and types.
? Which statement is true of Create table?
+ Defines columns and types
- Forbids NULL and duplicates
- Changes a column type
- Forbids missing values
! Create table defines columns and types.
? Which adds a column?
+ Alter add
- Alter modify
- Unique constraint
- Drop table
! Alter add adds a column.
? Which statement is true of Alter add?
- Removes the table completely
+ Adds a column
- Validates a condition
- Supplies a default value
! Alter add adds a column.
? Which changes a column type?
- Check constraint
- Drop table
+ Alter modify
- Primary key constraint
! Alter modify changes a column type.
? Which statement is true of Alter modify?
+ Changes a column type
- Supplies a default value
- Removes a column
- Defines columns and types
! Alter modify changes a column type.
? Which removes a column?
- Default constraint
- Not null constraint
+ Alter drop column
- Create table
! Alter drop column removes a column.
? Which statement is true of Alter drop column?
- Makes a new database
- Adds a column
+ Removes a column
- Validates a condition
! Alter drop column removes a column.
? Which removes the table completely?
- Use
+ Drop table
- Default constraint
- Not null constraint
! Drop table removes the table completely.
? Which statement is true of Drop table?
- Validates a condition
+ Removes the table completely
- Changes a column type
- Supplies a default value
! Drop table removes the table completely.
? Which forbids NULL and duplicates?
- Not null constraint
- Create table
+ Primary key constraint
- Alter drop column
! Primary key constraint forbids NULL and duplicates.
? Which statement is true of Primary key constraint?
- Forbids duplicates
- Changes a column type
- Defines columns and types
+ Forbids NULL and duplicates
! Primary key constraint forbids NULL and duplicates.
? Which forbids missing values?
- Check constraint
- Create database
+ Not null constraint
- Foreign key constraint
! Not null constraint forbids missing values.
? Which statement is true of Not null constraint?
- Removes a column
- Removes the table completely
- Selects the database
+ Forbids missing values
! Not null constraint forbids missing values.
? Which forbids duplicates?
- Create table
+ Unique constraint
- Check constraint
- Create database
! Unique constraint forbids duplicates.
? Which statement is true of Unique constraint?
- Forbids missing values
- Defines columns and types
- Validates a condition
+ Forbids duplicates
! Unique constraint forbids duplicates.
? Which supplies a default value?
- Alter add
+ Default constraint
- Not null constraint
- Check constraint
! Default constraint supplies a default value.
? Which statement is true of Default constraint?
- Removes the table completely
- Adds a column
- Forbids duplicates
+ Supplies a default value
! Default constraint supplies a default value.
? Which validates a condition?
+ Check constraint
- Unique constraint
- Not null constraint
- Alter add
! Check constraint validates a condition.
? Which statement is true of Check constraint?
- Defines columns and types
- Changes a column type
+ Validates a condition
- Selects the database
! Check constraint validates a condition.
? Which links to another table?
+ Foreign key constraint
- Use
- Not null constraint
- Alter drop column
! Foreign key constraint links to another table.
? Which statement is true of Foreign key constraint?
- Validates a condition
- Defines columns and types
- Removes a column
+ Links to another table
! Foreign key constraint links to another table.
? Which adds a row?
+ Insert into
- Update without where
- Update set
- Delete
! Insert into adds a row.
? Which statement is true of Insert into?
- Removes all rows
- Changes all rows
+ Adds a row
- Changes values
! Insert into adds a row.
? Which changes values?
- Delete
- Update without where
- Insert into
+ Update set
! Update set changes values.
? Which statement is true of Update set?
+ Changes values
- Changes all rows
- Adds a row
- Removes rows but keeps the table
! Update set changes values.
? Which changes all rows?
- Delete
- Delete without where
+ Update without where
- Insert into
! Update without where changes all rows.
? Which statement is true of Update without where?
+ Changes all rows
- Removes rows but keeps the table
- Removes all rows
- Changes values
! Update without where changes all rows.
? Which removes all rows?
- Update without where
- Update set
- Delete
+ Delete without where
! Delete without where removes all rows.
? Which statement is true of Delete without where?
- Adds a row
- Changes values
+ Removes all rows
- Changes all rows
! Delete without where removes all rows.
? Which removes rows but keeps the table?
- Update set
- Insert into
+ Delete
- Update without where
! Delete removes rows but keeps the table.
? Which selects all columns?
- Desc
- Equals null
+ Select star
- Order by
! Select star selects all columns.
? Which statement is true of Select star?
- Is ascending
+ Selects all columns
- Matches any string
- Sorts the result
! Select star selects all columns.
? Which removes duplicate rows?
- Desc
- Between
- Order by default
+ Distinct
! Distinct removes duplicate rows.
? Which statement is true of Distinct?
- Matches any string
+ Removes duplicate rows
- Sorts the result
- Sorts descending
! Distinct removes duplicate rows.
? Which creates an alias?
- Percent wildcard
+ As
- Equals null
- Like
! As creates an alias.
? Which statement is true of As?
- Matches one character
+ Creates an alias
- Removes duplicate rows
- Selects all columns
! As creates an alias.
? Which filters rows?
- Is null
- Equals null
+ Where
- Order by default
! Where filters rows.
? Which statement is true of Where?
- Sorts descending
+ Filters rows
- Sorts the result
- Is inclusive of both limits
! Where filters rows.
? Which is inclusive of both limits?
- As
+ Between
- Select star
- Underscore wildcard
! Between is inclusive of both limits.
? Which statement is true of Between?
- Matches any string
+ Is inclusive of both limits
- Never works as a test
- Tests for missing values
! Between is inclusive of both limits.
? Which matches any value in a list?
+ In
- Distinct
- Between
- Order by
! In matches any value in a list.
? Which statement is true of In?
+ Matches any value in a list
- Matches one character
- Is ascending
- Removes duplicate rows
! In matches any value in a list.
? Which matches patterns?
- Equals null
+ Like
- In
- Percent wildcard
! Like matches patterns.
? Which statement is true of Like?
- Tests for missing values
- Matches any string
+ Matches patterns
- Matches any value in a list
! Like matches patterns.
? Which matches any string?
- Between
- Like
+ Percent wildcard
- Desc
! Percent wildcard matches any string.
? Which statement is true of Percent wildcard?
- Tests for missing values
- Matches any value in a list
- Creates an alias
+ Matches any string
! Percent wildcard matches any string.
? Which matches one character?
- Desc
+ Underscore wildcard
- Order by
- Equals null
! Underscore wildcard matches one character.
? Which statement is true of Underscore wildcard?
- Never works as a test
+ Matches one character
- Matches patterns
- Matches any value in a list
! Underscore wildcard matches one character.
? Which tests for missing values?
- Between
- Distinct
- Like
+ Is null
! Is null tests for missing values.
? Which statement is true of Is null?
- Is inclusive of both limits
+ Tests for missing values
- Is ascending
- Matches any value in a list
! Is null tests for missing values.
? Which never works as a test?
+ Equals null
- Between
- Is null
- Select star
! Equals null never works as a test.
? Which statement is true of Equals null?
+ Never works as a test
- Sorts descending
- Is ascending
- Filters rows
! Equals null never works as a test.
? Which sorts the result?
- Select star
- Order by default
- Where
+ Order by
! Order by sorts the result.
? Which statement is true of Order by?
+ Sorts the result
- Never works as a test
- Removes duplicate rows
- Selects all columns
! Order by sorts the result.
? Which is ascending?
+ Order by default
- As
- Percent wildcard
- Underscore wildcard
! Order by default is ascending.
? Which statement is true of Order by default?
+ Is ascending
- Matches one character
- Never works as a test
- Sorts descending
! Order by default is ascending.
? Which sorts descending?
- Distinct
+ Desc
- Is null
- Underscore wildcard
! Desc sorts descending.
? Which statement is true of Desc?
- Tests for missing values
- Matches patterns
+ Sorts descending
- Is inclusive of both limits
! Desc sorts descending.
? Which counts all rows?
- Min
+ Count star
- Group by
- Avg
! Count star counts all rows.
? Which statement is true of Count star?
- Returns the largest value
- Differ in timing
- Groups rows with the same value
+ Counts all rows
! Count star counts all rows.
? Which ignores NULL values?
- Avg
- Max
- Sum
+ Count column
! Count column ignores NULL values.
? Which statement is true of Count column?
- Returns the largest value
+ Ignores NULL values
- Returns the smallest value
- Differ in timing
! Count column ignores NULL values.
? Which adds values?
- Having
- Where versus having
+ Sum
- Min
! Sum adds values.
? Which statement is true of Sum?
+ Adds values
- Computes the average
- Filters groups
- Differ in timing
! Sum adds values.
? Which computes the average?
- Group by
+ Avg
- Where versus having
- Sum
! Avg computes the average.
? Which statement is true of Avg?
- Ignores NULL values
+ Computes the average
- Groups rows with the same value
- Differ in timing
! Avg computes the average.
? Which returns the smallest value?
+ Min
- Having
- Count star
- Group by
! Min returns the smallest value.
? Which statement is true of Min?
- Adds values
- Filters groups
+ Returns the smallest value
- Returns the largest value
! Min returns the smallest value.
? Which returns the largest value?
+ Max
- Count star
- Min
- Having
! Max returns the largest value.
? Which statement is true of Max?
- Returns the smallest value
- Filters groups
+ Returns the largest value
- Counts all rows
! Max returns the largest value.
? Which groups rows with the same value?
- Having
+ Group by
- Sum
- Max
! Group by groups rows with the same value.
? Which statement is true of Group by?
- Counts all rows
- Returns the largest value
- Adds values
+ Groups rows with the same value
! Group by groups rows with the same value.
? Which filters groups?
- Min
+ Having
- Avg
- Group by
! Having filters groups.
? Which statement is true of Having?
- Adds values
+ Filters groups
- Counts all rows
- Groups rows with the same value
! Having filters groups.
? Which differ in timing?
+ Where versus having
- Group by
- Min
- Sum
! Where versus having differ in timing.
? Which statement is true of Where versus having?
+ Differ in timing
- Filters groups
- Counts all rows
- Adds values
! Where versus having differ in timing.
? Which converts to upper case?
- Instr
- Mod
+ Ucase
- Power
! Ucase converts to upper case.
? Which statement is true of Ucase?
+ Converts to upper case
- Returns current date and time
- Converts to lower case
- Removes spaces at the ends
! Ucase converts to upper case.
? Which converts to lower case?
- Length
+ Lcase
- Mod
- Year
! Lcase converts to lower case.
? Which statement is true of Lcase?
- Counts characters
- Rounds to given decimals
- Finds the position of a substring
+ Converts to lower case
! Lcase converts to lower case.
? Which counts characters?
- Instr
+ Length
- Ucase
- Trim
! Length counts characters.
? Which statement is true of Length?
- Removes spaces at the ends
- Converts to upper case
+ Counts characters
- Converts to lower case
! Length counts characters.
? Which extracts a substring?
- Dayname
- Power
- Mod
+ Mid
! Mid extracts a substring.
? Which statement is true of Mid?
- Raises to a power
- Rounds to given decimals
+ Extracts a substring
- Counts characters
! Mid extracts a substring.
? Which removes spaces at the ends?
- Instr
- Round
+ Trim
- Year
! Trim removes spaces at the ends.
? Which statement is true of Trim?
- Converts to upper case
- Gives the remainder
+ Removes spaces at the ends
- Extracts a substring
! Trim removes spaces at the ends.
? Which finds the position of a substring?
- Dayname
- Mid
- Lcase
+ Instr
! Instr finds the position of a substring.
? Which statement is true of Instr?
- Removes spaces at the ends
- Converts to upper case
- Raises to a power
+ Finds the position of a substring
! Instr finds the position of a substring.
? Which rounds to given decimals?
- Instr
- Lcase
+ Round
- Length
! Round rounds to given decimals.
? Which statement is true of Round?
- Converts to lower case
- Extracts the year from a date
- Converts to upper case
+ Rounds to given decimals
! Round rounds to given decimals.
? Which gives the remainder?
- Mid
- Trim
+ Mod
- Round
! Mod gives the remainder.
? Which statement is true of Mod?
+ Gives the remainder
- Counts characters
- Gives the weekday name
- Finds the position of a substring
! Mod gives the remainder.
? Which raises to a power?
- Ucase
- Instr
- Year
+ Power
! Power raises to a power.
? Which statement is true of Power?
+ Raises to a power
- Removes spaces at the ends
- Converts to lower case
- Gives the remainder
! Power raises to a power.
? Which returns current date and time?
- Year
- Length
+ Now
- Power
! Now returns current date and time.
? Which statement is true of Now?
- Converts to lower case
+ Returns current date and time
- Gives the weekday name
- Converts to upper case
! Now returns current date and time.
? Which extracts the year from a date?
+ Year
- Round
- Ucase
- Mod
! Year extracts the year from a date.
? Which statement is true of Year?
+ Extracts the year from a date
- Gives the weekday name
- Gives the remainder
- Converts to upper case
! Year extracts the year from a date.
? Which gives the weekday name?
+ Dayname
- Lcase
- Round
- Instr
! Dayname gives the weekday name.
? Which statement is true of Dayname?
- Raises to a power
+ Gives the weekday name
- Counts characters
- Rounds to given decimals
! Dayname gives the weekday name.
? Which combines rows of two tables?
- Equi join
- Cartesian cardinality
+ Join
- Natural join
! Join combines rows of two tables.
? Which statement is true of Join?
- Is the product of cardinalities
- Is placed in where
+ Combines rows of two tables
- Pairs every row with every row
! Join combines rows of two tables.
? Which pairs every row with every row?
- Join condition
- Join
- Equi join
+ Cartesian product
! Cartesian product pairs every row with every row.
? Which statement is true of Cartesian product?
- Matches equal values of common columns
- Removes the duplicate common column
+ Pairs every row with every row
- Is placed in where
! Cartesian product pairs every row with every row.
? Which is the sum of degrees?
- Join condition
- Cartesian product
+ Cartesian degree
- Join
! Cartesian degree is the sum of degrees.
? Which statement is true of Cartesian degree?
- Pairs every row with every row
+ Is the sum of degrees
- Removes the duplicate common column
- Combines rows of two tables
! Cartesian degree is the sum of degrees.
? Which is the product of cardinalities?
- Join condition
+ Cartesian cardinality
- Cartesian product
- Equi join
! Cartesian cardinality is the product of cardinalities.
? Which statement is true of Cartesian cardinality?
- Combines rows of two tables
+ Is the product of cardinalities
- Matches equal values of common columns
- Is placed in where
! Cartesian cardinality is the product of cardinalities.
? Which matches equal values of common columns?
- Natural join
- Cartesian degree
+ Equi join
- Join
! Equi join matches equal values of common columns.
? Which statement is true of Equi join?
- Is the product of cardinalities
- Is the sum of degrees
+ Matches equal values of common columns
- Is placed in where
! Equi join matches equal values of common columns.
? Which removes the duplicate common column?
- Join
- Cartesian cardinality
+ Natural join
- Cartesian product
! Natural join removes the duplicate common column.
? Which statement is true of Natural join?
- Is placed in where
- Combines rows of two tables
- Pairs every row with every row
+ Removes the duplicate common column
! Natural join removes the duplicate common column.
? Which is placed in where?
- Equi join
+ Join condition
- Natural join
- Cartesian product
! Join condition is placed in where.
? Which statement is true of Join condition?
- Combines rows of two tables
- Pairs every row with every row
+ Is placed in where
- Is the product of cardinalities
! Join condition is placed in where.
? Remove table
- DELETE
- ALTER
- UPDATE
+ DROP
! Command.
? Any string
- _
- *
+ %
- ?
! Wildcard.
? Filter groups
- WHERE
- ORDER BY
- LIKE
+ HAVING
! Clause.
? Count ignores NULL
- COUNT(*)
- SUM
- None
+ COUNT(column)
! Function.
? Add column
+ ALTER TABLE
- UPDATE
- INSERT
- DROP
! Command.
? Sort descending
+ DESC
- ASC
- TOP
- MAX
! Keyword.
@visual
blocks | SQL groups | DDL; DML; DCL; TCL
flow | Query clauses | SELECT; FROM; WHERE; GROUP BY; HAVING; ORDER BY
compare | WHERE and HAVING | WHERE=Rows before group~No aggregates; HAVING=Groups after~Aggregates
mind | SQL | DDL; DML; Functions; Joins
steps | Join | Two tables; Cartesian product; Match keys; Result
@problems
## Moderate
P: Write a query to list names of students scoring above 80.
A: SELECT name FROM student WHERE marks > 80;
R: 3 | SELECT
R: 3 | WHERE
## High
P: Difference between WHERE and HAVING.
A: WHERE filters individual rows before grouping; HAVING filters groups after GROUP BY and can use aggregate functions.
R: 2 | Rows
R: 2 | Groups
R: 2 | Aggregates
R: 2 | Order
## Advanced
P: Cartesian product of tables with 4 and 5 columns and 3 and 6 rows.
A: Degree 9 and cardinality 18.
R: 2 | Degree sum
R: 2 | Cardinality product
R: 2 | 9
R: 2 | 18
