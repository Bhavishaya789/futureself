# SQL Queries
minutes: 40
yt: class 11 informatics practices sql select where group by aggregate functions
@study
SQL commands are used in MySQL. CREATE DATABASE school; creates a database and USE school; selects it. CREATE TABLE student (rollno INT PRIMARY KEY, name VARCHAR(30) NOT NULL, marks FLOAT, dob DATE); creates a table. DESC student (or DESCRIBE) shows its structure. ALTER TABLE adds, modifies or drops a column or constraint (ALTER TABLE student ADD city VARCHAR(20);). DROP TABLE removes the table. INSERT INTO student VALUES (1, "Ravi", 85.5, "2008-05-01"); adds a row. UPDATE student SET marks = 90 WHERE rollno = 1; changes data. DELETE FROM student WHERE rollno = 1; removes rows. SELECT * FROM student; shows all columns; SELECT name, marks FROM student; shows chosen columns. DISTINCT removes duplicates and AS gives an alias. WHERE filters rows with relational operators (=, <>, !=, <, >, <=, >=), logical operators (AND, OR, NOT), BETWEEN (inclusive), IN, LIKE with wildcards (% for any number of characters and _ for exactly one) and IS NULL. ORDER BY sorts ascending (ASC, default) or descending (DESC). Aggregate functions are COUNT(), SUM(), AVG(), MAX() and MIN(); COUNT(*) counts all rows while COUNT(column) ignores NULLs. GROUP BY groups rows with the same value and HAVING filters groups, whereas WHERE filters rows before grouping. Single-row functions include UPPER(), LOWER(), LENGTH(), ROUND(), MOD(), POWER(), NOW(), CURDATE(), SUBSTR() and LEFT(). LIMIT restricts the number of rows. A join combines tables; a Cartesian product pairs every row of one table with every row of the other, and a join with a condition on matching keys gives an equi-join.
## Deep dive: DDL and DML
CREATE, ALTER and DROP change structure; INSERT, UPDATE and DELETE change data. Without WHERE, UPDATE and DELETE affect all rows. Text and dates are written in quotes. A primary key must be unique and not null.
## Deep dive: SELECT queries
The order of clauses is SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY. LIKE "A%" matches names starting with A; LIKE "_a%" matches names with a as the second letter. BETWEEN 60 AND 80 includes 60 and 80.
## Deep dive: Aggregates and joins
Aggregates summarise many rows into one value. GROUP BY with an aggregate gives one result per group. HAVING works on aggregate conditions. A Cartesian product has rows equal to the product of row counts; its degree is the sum of degrees.
## Hindi saransh
SQL mein CREATE, INSERT, SELECT, UPDATE, DELETE aur GROUP BY se database ka data sambhala jata hai.
> Remember: WHERE filters rows; HAVING filters groups.
@formulas
## Key facts
SELECT | Show data | DQL
WHERE | Filter rows | Condition
GROUP BY | Group rows | Aggregate
HAVING | Filter groups | After group
LIKE | % and _ | Pattern

@qa
Q: Which makes a new database?
A: CREATE DATABASE makes a new database.
Q: What do you know about CREATE DATABASE?
A: CREATE DATABASE makes a new database.
Q: Which selects a database to work in?
A: USE selects a database to work in.
Q: What do you know about USE?
A: USE selects a database to work in.
Q: Which makes a new table?
A: CREATE TABLE makes a new table.
Q: What do you know about CREATE TABLE?
A: CREATE TABLE makes a new table.
Q: Which shows the structure of a table?
A: DESC shows the structure of a table.
Q: What do you know about DESC?
A: DESC shows the structure of a table.
Q: Which changes the structure of a table?
A: ALTER TABLE changes the structure of a table.
Q: What do you know about ALTER TABLE?
A: ALTER TABLE changes the structure of a table.
Q: Which is done with ALTER TABLE?
A: ADD column is done with ALTER TABLE.
Q: What do you know about ADD column?
A: ADD column is done with ALTER TABLE.
Q: Which deletes a table?
A: DROP TABLE deletes a table.
Q: What do you know about DROP TABLE?
A: DROP TABLE deletes a table.
Q: Which adds a row to a table?
A: INSERT INTO adds a row to a table.
Q: What do you know about INSERT INTO?
A: INSERT INTO adds a row to a table.
Q: Which changes existing data?
A: UPDATE changes existing data.
Q: What do you know about UPDATE?
A: UPDATE changes existing data.
Q: Which gives the new value in UPDATE?
A: SET gives the new value in UPDATE.
Q: What do you know about SET?
A: SET gives the new value in UPDATE.
Q: Which removes rows from a table?
A: DELETE FROM removes rows from a table.
Q: What do you know about DELETE FROM?
A: DELETE FROM removes rows from a table.
Q: Which retrieves data from a table?
A: SELECT retrieves data from a table.
Q: What do you know about SELECT?
A: SELECT retrieves data from a table.
Q: Which in SELECT means all columns?
A: Star in SELECT means all columns.
Q: What do you know about Star?
A: Star in SELECT means all columns.
Q: Which names the table in a query?
A: FROM names the table in a query.
Q: What do you know about FROM?
A: FROM names the table in a query.
Q: Which filters rows by a condition?
A: WHERE filters rows by a condition.
Q: What do you know about WHERE?
A: WHERE filters rows by a condition.
Q: Which removes duplicate rows from the result?
A: DISTINCT removes duplicate rows from the result.
Q: What do you know about DISTINCT?
A: DISTINCT removes duplicate rows from the result.
Q: Which gives an alias to a column?
A: AS gives an alias to a column.
Q: What do you know about AS?
A: AS gives an alias to a column.
Q: Which sorts the result?
A: ORDER BY sorts the result.
Q: What do you know about ORDER BY?
A: ORDER BY sorts the result.
Q: Which is the default ascending order?
A: ASC is the default ascending order.
Q: What do you know about ASC?
A: ASC is the default ascending order.
Q: Which sorts from largest to smallest?
A: DESC order sorts from largest to smallest.
Q: What do you know about DESC order?
A: DESC order sorts from largest to smallest.
Q: Which is true if both conditions are true?
A: AND is true if both conditions are true.
Q: What do you know about AND?
A: AND is true if both conditions are true.
Q: Which is true if either condition is true?
A: OR is true if either condition is true.
Q: What do you know about OR?
A: OR is true if either condition is true.
Q: Which reverses a condition?
A: NOT reverses a condition.
Q: What do you know about NOT?
A: NOT reverses a condition.
Q: Which checks a range including both ends?
A: BETWEEN checks a range including both ends.
Q: What do you know about BETWEEN?
A: BETWEEN checks a range including both ends.
Q: Which checks membership in a list?
A: IN checks membership in a list.
Q: What do you know about IN?
A: IN checks membership in a list.
Q: Which matches text patterns?
A: LIKE matches text patterns.
Q: What do you know about LIKE?
A: LIKE matches text patterns.
Q: Which matches any number of characters?
A: Percent wildcard matches any number of characters.
Q: What do you know about Percent wildcard?
A: Percent wildcard matches any number of characters.
Q: Which matches exactly one character?
A: Underscore wildcard matches exactly one character.
Q: What do you know about Underscore wildcard?
A: Underscore wildcard matches exactly one character.
Q: Which checks for missing values?
A: IS NULL checks for missing values.
Q: What do you know about IS NULL?
A: IS NULL checks for missing values.
Q: Which counts rows?
A: COUNT counts rows.
Q: What do you know about COUNT?
A: COUNT counts rows.
Q: Which counts all rows including NULL?
A: COUNT star counts all rows including NULL.
Q: What do you know about COUNT star?
A: COUNT star counts all rows including NULL.
Q: Which adds the values of a column?
A: SUM adds the values of a column.
Q: What do you know about SUM?
A: SUM adds the values of a column.
Q: Which gives the average of a column?
A: AVG gives the average of a column.
Q: What do you know about AVG?
A: AVG gives the average of a column.
Q: Which gives the largest value?
A: MAX gives the largest value.
Q: What do you know about MAX?
A: MAX gives the largest value.
Q: Which gives the smallest value?
A: MIN gives the smallest value.
Q: What do you know about MIN?
A: MIN gives the smallest value.
Q: Which groups rows with equal values?
A: GROUP BY groups rows with equal values.
Q: What do you know about GROUP BY?
A: GROUP BY groups rows with equal values.
Q: Which filters groups after GROUP BY?
A: HAVING filters groups after GROUP BY.
Q: What do you know about HAVING?
A: HAVING filters groups after GROUP BY.
Q: Which restricts the number of rows returned?
A: LIMIT restricts the number of rows returned.
Q: What do you know about LIMIT?
A: LIMIT restricts the number of rows returned.
Q: Which converts text to capitals?
A: UPPER converts text to capitals.
Q: What do you know about UPPER?
A: UPPER converts text to capitals.
Q: Which converts text to small letters?
A: LOWER converts text to small letters.
Q: What do you know about LOWER?
A: LOWER converts text to small letters.
Q: Which gives the number of characters?
A: LENGTH gives the number of characters.
Q: What do you know about LENGTH?
A: LENGTH gives the number of characters.
Q: Which rounds a number to given decimals?
A: ROUND rounds a number to given decimals.
Q: What do you know about ROUND?
A: ROUND rounds a number to given decimals.
Q: Which gives the remainder?
A: MOD gives the remainder.
Q: What do you know about MOD?
A: MOD gives the remainder.
Q: Which raises a number to a power?
A: POWER raises a number to a power.
Q: What do you know about POWER?
A: POWER raises a number to a power.
Q: Which gives the current date and time?
A: NOW gives the current date and time.
Q: What do you know about NOW?
A: NOW gives the current date and time.
Q: Which gives the current date?
A: CURDATE gives the current date.
Q: What do you know about CURDATE?
A: CURDATE gives the current date.
Q: Which extracts part of a string?
A: SUBSTR extracts part of a string.
Q: What do you know about SUBSTR?
A: SUBSTR extracts part of a string.
Q: Which pairs every row with every row?
A: Cartesian product pairs every row with every row.
Q: What do you know about Cartesian product?
A: Cartesian product pairs every row with every row.
Q: Which combines rows from two tables?
A: Join combines rows from two tables.
Q: What do you know about Join?
A: Join combines rows from two tables.
Q: Which joins using equality on a common column?
A: Equi-join joins using equality on a common column.
Q: What do you know about Equi-join?
A: Equi-join joins using equality on a common column.
Q: Which is added in CREATE TABLE?
A: Primary key constraint is added in CREATE TABLE.
Q: What do you know about Primary key constraint?
A: Primary key constraint is added in CREATE TABLE.
Q: Which ends an SQL statement?
A: Semicolon ends an SQL statement.
Q: What do you know about Semicolon?
A: Semicolon ends an SQL statement.
Q: Which gives one result per row?
A: Single-row function gives one result per row.
Q: What do you know about Single-row function?
A: Single-row function gives one result per row.
Q: Which gives one result per group?
A: Aggregate function gives one result per group.
Q: What do you know about Aggregate function?
A: Aggregate function gives one result per group.
Q: Which is a temporary name for a column or table?
A: Alias is a temporary name for a column or table.
Q: What do you know about Alias?
A: Alias is a temporary name for a column or table.
Q: Which is SELECT FROM WHERE GROUP BY HAVING ORDER BY?
A: Order of clauses is SELECT FROM WHERE GROUP BY HAVING ORDER BY.
Q: What do you know about Order of clauses?
A: Order of clauses is SELECT FROM WHERE GROUP BY HAVING ORDER BY.
Q: Which command shows all columns?
A: SELECT * FROM table.
Q: What does WHERE do?
A: Filters rows by a condition.
Q: What does HAVING do?
A: Filters groups after GROUP BY.
Q: What does LIKE use?
A: The wildcards % and _.
Q: Is BETWEEN inclusive?
A: Yes, it includes both ends.
Q: Which function counts rows?
A: COUNT.
Q: What does DISTINCT do?
A: Removes duplicate values from the result.
Q: Which clause sorts results?
A: ORDER BY.
@quiz
? Which makes a new database?
- DESC
+ CREATE DATABASE
- Join
- Percent wildcard
! CREATE DATABASE makes a new database.
? Which statement is true of CREATE DATABASE?
- Is true if either condition is true
+ Makes a new database
- Matches any number of characters
- Gives the current date and time
! CREATE DATABASE makes a new database.
? Which selects a database to work in?
- Percent wildcard
+ USE
- LIMIT
- HAVING
! USE selects a database to work in.
? Which statement is true of USE?
+ Selects a database to work in
- Names the table in a query
- Filters rows by a condition
- Is true if both conditions are true
! USE selects a database to work in.
? Which makes a new table?
- UPDATE
- COUNT star
+ CREATE TABLE
- SELECT
! CREATE TABLE makes a new table.
? Which statement is true of CREATE TABLE?
- Gives the number of characters
- Pairs every row with every row
+ Makes a new table
- Filters rows by a condition
! CREATE TABLE makes a new table.
? Which shows the structure of a table?
+ DESC
- AVG
- UPPER
- ASC
! DESC shows the structure of a table.
? Which statement is true of DESC?
- Rounds a number to given decimals
- Combines rows from two tables
- Extracts part of a string
+ Shows the structure of a table
! DESC shows the structure of a table.
? Which changes the structure of a table?
- ADD column
- MOD
- LOWER
+ ALTER TABLE
! ALTER TABLE changes the structure of a table.
? Which statement is true of ALTER TABLE?
- Names the table in a query
+ Changes the structure of a table
- Converts text to small letters
- Removes rows from a table
! ALTER TABLE changes the structure of a table.
? Which is done with ALTER TABLE?
- USE
- DESC
+ ADD column
- COUNT
! ADD column is done with ALTER TABLE.
? Which statement is true of ADD column?
- Gives the average of a column
- Selects a database to work in
- Converts text to capitals
+ Is done with ALTER TABLE
! ADD column is done with ALTER TABLE.
? Which deletes a table?
- DISTINCT
+ DROP TABLE
- Underscore wildcard
- ALTER TABLE
! DROP TABLE deletes a table.
? Which statement is true of DROP TABLE?
+ Deletes a table
- Sorts the result
- Filters groups after GROUP BY
- Gives the average of a column
! DROP TABLE deletes a table.
? Which adds a row to a table?
- SUBSTR
- CURDATE
+ INSERT INTO
- MIN
! INSERT INTO adds a row to a table.
? Which statement is true of INSERT INTO?
- Gives the new value in UPDATE
- Ends an SQL statement
- Is true if either condition is true
+ Adds a row to a table
! INSERT INTO adds a row to a table.
? Which changes existing data?
- SET
+ UPDATE
- Single-row function
- Equi-join
! UPDATE changes existing data.
? Which statement is true of UPDATE?
- Reverses a condition
+ Changes existing data
- Pairs every row with every row
- Gives one result per row
! UPDATE changes existing data.
? Which gives the new value in UPDATE?
+ SET
- ADD column
- UPPER
- Equi-join
! SET gives the new value in UPDATE.
? Which statement is true of SET?
- Joins using equality on a common column
- Filters rows by a condition
- Makes a new table
+ Gives the new value in UPDATE
! SET gives the new value in UPDATE.
? Which removes rows from a table?
- GROUP BY
- Cartesian product
- LIKE
+ DELETE FROM
! DELETE FROM removes rows from a table.
? Which statement is true of DELETE FROM?
- Selects a database to work in
- Is true if both conditions are true
+ Removes rows from a table
- Retrieves data from a table
! DELETE FROM removes rows from a table.
? Which retrieves data from a table?
- Primary key constraint
+ SELECT
- MAX
- ADD column
! SELECT retrieves data from a table.
? Which statement is true of SELECT?
- In SELECT means all columns
- Counts all rows including NULL
+ Retrieves data from a table
- Selects a database to work in
! SELECT retrieves data from a table.
? Which in SELECT means all columns?
- LOWER
- LIKE
+ Star
- Equi-join
! Star in SELECT means all columns.
? Which statement is true of Star?
- Gives one result per group
- Gives the new value in UPDATE
+ In SELECT means all columns
- Groups rows with equal values
! Star in SELECT means all columns.
? Which names the table in a query?
+ FROM
- CREATE DATABASE
- DISTINCT
- IS NULL
! FROM names the table in a query.
? Which statement is true of FROM?
- Matches text patterns
- Converts text to small letters
+ Names the table in a query
- Gives an alias to a column
! FROM names the table in a query.
? Which filters rows by a condition?
+ WHERE
- MIN
- Star
- POWER
! WHERE filters rows by a condition.
? Which statement is true of WHERE?
+ Filters rows by a condition
- Checks for missing values
- Gives one result per group
- Is a temporary name for a column or table
! WHERE filters rows by a condition.
? Which removes duplicate rows from the result?
- USE
- IS NULL
+ DISTINCT
- DESC
! DISTINCT removes duplicate rows from the result.
? Which statement is true of DISTINCT?
- Matches any number of characters
- Is SELECT FROM WHERE GROUP BY HAVING ORDER BY
+ Removes duplicate rows from the result
- Converts text to small letters
! DISTINCT removes duplicate rows from the result.
? Which gives an alias to a column?
+ AS
- Single-row function
- Percent wildcard
- DESC order
! AS gives an alias to a column.
? Which statement is true of AS?
- Matches any number of characters
- Is true if either condition is true
- Matches text patterns
+ Gives an alias to a column
! AS gives an alias to a column.
? Which sorts the result?
- DESC
+ ORDER BY
- USE
- ROUND
! ORDER BY sorts the result.
? Which statement is true of ORDER BY?
- Is the default ascending order
- Rounds a number to given decimals
- Checks a range including both ends
+ Sorts the result
! ORDER BY sorts the result.
? Which is the default ascending order?
+ ASC
- DESC
- IN
- Cartesian product
! ASC is the default ascending order.
? Which statement is true of ASC?
- Gives the largest value
- Gives the new value in UPDATE
- Checks for missing values
+ Is the default ascending order
! ASC is the default ascending order.
? Which sorts from largest to smallest?
+ DESC order
- AND
- NOT
- ADD column
! DESC order sorts from largest to smallest.
? Which statement is true of DESC order?
- Joins using equality on a common column
- Restricts the number of rows returned
+ Sorts from largest to smallest
- Rounds a number to given decimals
! DESC order sorts from largest to smallest.
? Which is true if both conditions are true?
- Cartesian product
+ AND
- Underscore wildcard
- DISTINCT
! AND is true if both conditions are true.
? Which statement is true of AND?
+ Is true if both conditions are true
- Is done with ALTER TABLE
- Gives the number of characters
- Sorts the result
! AND is true if both conditions are true.
? Which is true if either condition is true?
- POWER
- ORDER BY
- Aggregate function
+ OR
! OR is true if either condition is true.
? Which statement is true of OR?
- Gives the current date and time
- Converts text to capitals
- Is true if both conditions are true
+ Is true if either condition is true
! OR is true if either condition is true.
? Which reverses a condition?
+ NOT
- AND
- Order of clauses
- CREATE TABLE
! NOT reverses a condition.
? Which statement is true of NOT?
- Groups rows with equal values
- Shows the structure of a table
+ Reverses a condition
- Filters rows by a condition
! NOT reverses a condition.
? Which checks a range including both ends?
- NOT
- POWER
- CREATE TABLE
+ BETWEEN
! BETWEEN checks a range including both ends.
? Which statement is true of BETWEEN?
+ Checks a range including both ends
- Gives the new value in UPDATE
- In SELECT means all columns
- Extracts part of a string
! BETWEEN checks a range including both ends.
? Which checks membership in a list?
+ IN
- SELECT
- Equi-join
- COUNT
! IN checks membership in a list.
? Which statement is true of IN?
+ Checks membership in a list
- Filters groups after GROUP BY
- Is true if either condition is true
- Raises a number to a power
! IN checks membership in a list.
? Which matches text patterns?
- POWER
+ LIKE
- GROUP BY
- SUM
! LIKE matches text patterns.
? Which statement is true of LIKE?
- Gives the new value in UPDATE
- Filters groups after GROUP BY
- Pairs every row with every row
+ Matches text patterns
! LIKE matches text patterns.
? Which matches any number of characters?
- UPDATE
+ Percent wildcard
- DISTINCT
- MAX
! Percent wildcard matches any number of characters.
? Which statement is true of Percent wildcard?
- Extracts part of a string
- Matches exactly one character
- Filters groups after GROUP BY
+ Matches any number of characters
! Percent wildcard matches any number of characters.
? Which matches exactly one character?
- IN
- GROUP BY
+ Underscore wildcard
- Primary key constraint
! Underscore wildcard matches exactly one character.
? Which statement is true of Underscore wildcard?
- Groups rows with equal values
+ Matches exactly one character
- Names the table in a query
- Is added in CREATE TABLE
! Underscore wildcard matches exactly one character.
? Which checks for missing values?
+ IS NULL
- ROUND
- IN
- POWER
! IS NULL checks for missing values.
? Which statement is true of IS NULL?
- In SELECT means all columns
- Groups rows with equal values
+ Checks for missing values
- Pairs every row with every row
! IS NULL checks for missing values.
? Which counts rows?
- HAVING
- ALTER TABLE
- IN
+ COUNT
! COUNT counts rows.
? Which statement is true of COUNT?
- Is the default ascending order
+ Counts rows
- Counts all rows including NULL
- Combines rows from two tables
! COUNT counts rows.
? Which counts all rows including NULL?
- Cartesian product
- DROP TABLE
+ COUNT star
- Join
! COUNT star counts all rows including NULL.
? Which statement is true of COUNT star?
- Gives the smallest value
+ Counts all rows including NULL
- Rounds a number to given decimals
- Raises a number to a power
! COUNT star counts all rows including NULL.
? Which adds the values of a column?
- AS
- COUNT star
+ SUM
- Order of clauses
! SUM adds the values of a column.
? Which statement is true of SUM?
- Joins using equality on a common column
- Makes a new table
+ Adds the values of a column
- Deletes a table
! SUM adds the values of a column.
? Which gives the average of a column?
- SELECT
- POWER
- HAVING
+ AVG
! AVG gives the average of a column.
? Which statement is true of AVG?
+ Gives the average of a column
- Checks membership in a list
- Changes existing data
- Removes duplicate rows from the result
! AVG gives the average of a column.
? Which gives the largest value?
- MOD
+ MAX
- POWER
- CURDATE
! MAX gives the largest value.
? Which statement is true of MAX?
- Deletes a table
- Combines rows from two tables
- Extracts part of a string
+ Gives the largest value
! MAX gives the largest value.
? Which gives the smallest value?
- OR
- LENGTH
- USE
+ MIN
! MIN gives the smallest value.
? Which statement is true of MIN?
+ Gives the smallest value
- Is true if either condition is true
- Raises a number to a power
- Joins using equality on a common column
! MIN gives the smallest value.
? Which groups rows with equal values?
- MOD
- Alias
- Star
+ GROUP BY
! GROUP BY groups rows with equal values.
? Which statement is true of GROUP BY?
+ Groups rows with equal values
- Selects a database to work in
- Adds a row to a table
- Matches any number of characters
! GROUP BY groups rows with equal values.
? Which filters groups after GROUP BY?
+ HAVING
- CURDATE
- WHERE
- Order of clauses
! HAVING filters groups after GROUP BY.
? Which statement is true of HAVING?
+ Filters groups after GROUP BY
- Reverses a condition
- Combines rows from two tables
- Gives the current date
! HAVING filters groups after GROUP BY.
? Which restricts the number of rows returned?
- CURDATE
+ LIMIT
- AS
- LIKE
! LIMIT restricts the number of rows returned.
? Which statement is true of LIMIT?
- Reverses a condition
+ Restricts the number of rows returned
- Sorts the result
- Combines rows from two tables
! LIMIT restricts the number of rows returned.
? Which converts text to capitals?
- NOT
- Alias
+ UPPER
- SUBSTR
! UPPER converts text to capitals.
? Which statement is true of UPPER?
+ Converts text to capitals
- Raises a number to a power
- Gives an alias to a column
- Gives the remainder
! UPPER converts text to capitals.
? Which converts text to small letters?
- COUNT star
- WHERE
+ LOWER
- SUM
! LOWER converts text to small letters.
? Which statement is true of LOWER?
- Shows the structure of a table
+ Converts text to small letters
- Gives an alias to a column
- Checks membership in a list
! LOWER converts text to small letters.
? Which gives the number of characters?
- HAVING
- SET
- Percent wildcard
+ LENGTH
! LENGTH gives the number of characters.
? Which statement is true of LENGTH?
- Adds the values of a column
- Matches exactly one character
- Makes a new table
+ Gives the number of characters
! LENGTH gives the number of characters.
? Which rounds a number to given decimals?
- WHERE
- Join
+ ROUND
- ORDER BY
! ROUND rounds a number to given decimals.
? Which statement is true of ROUND?
- Gives the remainder
- Is true if both conditions are true
- Gives an alias to a column
+ Rounds a number to given decimals
! ROUND rounds a number to given decimals.
? Which gives the remainder?
+ MOD
- LENGTH
- SUM
- SET
! MOD gives the remainder.
? Which statement is true of MOD?
- Gives the current date and time
- Counts all rows including NULL
+ Gives the remainder
- Gives the current date
! MOD gives the remainder.
? Which raises a number to a power?
+ POWER
- AND
- DESC order
- INSERT INTO
! POWER raises a number to a power.
? Which statement is true of POWER?
- Combines rows from two tables
- Extracts part of a string
+ Raises a number to a power
- Gives the current date and time
! POWER raises a number to a power.
? Which gives the current date and time?
- SUBSTR
- ADD column
- Order of clauses
+ NOW
! NOW gives the current date and time.
? Which statement is true of NOW?
- Reverses a condition
+ Gives the current date and time
- Is the default ascending order
- Names the table in a query
! NOW gives the current date and time.
? Which gives the current date?
- COUNT star
+ CURDATE
- Order of clauses
- GROUP BY
! CURDATE gives the current date.
? Which statement is true of CURDATE?
- Makes a new table
- Removes rows from a table
+ Gives the current date
- Gives the average of a column
! CURDATE gives the current date.
? Which extracts part of a string?
- ASC
+ SUBSTR
- IN
- DROP TABLE
! SUBSTR extracts part of a string.
? Which statement is true of SUBSTR?
- Selects a database to work in
- Names the table in a query
+ Extracts part of a string
- Counts rows
! SUBSTR extracts part of a string.
? Which pairs every row with every row?
- ROUND
+ Cartesian product
- WHERE
- Underscore wildcard
! Cartesian product pairs every row with every row.
? Which statement is true of Cartesian product?
- Sorts the result
- Ends an SQL statement
+ Pairs every row with every row
- Retrieves data from a table
! Cartesian product pairs every row with every row.
? Which combines rows from two tables?
+ Join
- LENGTH
- DISTINCT
- GROUP BY
! Join combines rows from two tables.
? Which statement is true of Join?
- Is done with ALTER TABLE
+ Combines rows from two tables
- Ends an SQL statement
- Adds a row to a table
! Join combines rows from two tables.
? Which joins using equality on a common column?
+ Equi-join
- LOWER
- Alias
- ROUND
! Equi-join joins using equality on a common column.
? Which statement is true of Equi-join?
- Counts all rows including NULL
- Gives the current date and time
+ Joins using equality on a common column
- Sorts the result
! Equi-join joins using equality on a common column.
? Which is added in CREATE TABLE?
- POWER
- Join
+ Primary key constraint
- GROUP BY
! Primary key constraint is added in CREATE TABLE.
? Which statement is true of Primary key constraint?
- Retrieves data from a table
- Is done with ALTER TABLE
+ Is added in CREATE TABLE
- Matches any number of characters
! Primary key constraint is added in CREATE TABLE.
? Which ends an SQL statement?
- DELETE FROM
- Underscore wildcard
+ Semicolon
- UPPER
! Semicolon ends an SQL statement.
? Which statement is true of Semicolon?
- Is the default ascending order
+ Ends an SQL statement
- Gives the current date
- Gives the current date and time
! Semicolon ends an SQL statement.
? Which gives one result per row?
- INSERT INTO
- LOWER
- MIN
+ Single-row function
! Single-row function gives one result per row.
? Which statement is true of Single-row function?
- Changes the structure of a table
+ Gives one result per row
- Gives the largest value
- Counts all rows including NULL
! Single-row function gives one result per row.
? Which gives one result per group?
- ROUND
+ Aggregate function
- IS NULL
- INSERT INTO
! Aggregate function gives one result per group.
? Which statement is true of Aggregate function?
- Counts all rows including NULL
- Pairs every row with every row
+ Gives one result per group
- Is SELECT FROM WHERE GROUP BY HAVING ORDER BY
! Aggregate function gives one result per group.
? Which is a temporary name for a column or table?
- Aggregate function
+ Alias
- ORDER BY
- CREATE DATABASE
! Alias is a temporary name for a column or table.
? Which statement is true of Alias?
- Is added in CREATE TABLE
- Groups rows with equal values
+ Is a temporary name for a column or table
- Rounds a number to given decimals
! Alias is a temporary name for a column or table.
? Which is SELECT FROM WHERE GROUP BY HAVING ORDER BY?
- WHERE
- SET
+ Order of clauses
- LOWER
! Order of clauses is SELECT FROM WHERE GROUP BY HAVING ORDER BY.
? Which statement is true of Order of clauses?
- Restricts the number of rows returned
+ Is SELECT FROM WHERE GROUP BY HAVING ORDER BY
- Makes a new table
- Retrieves data from a table
! Order of clauses is SELECT FROM WHERE GROUP BY HAVING ORDER BY.
? Add a row
- CREATE
+ INSERT
- ALTER
- DROP
! DML.
? Remove table
- DELETE
- REMOVE
+ DROP TABLE
- CLEAR
! DDL.
? Wildcard for any characters
- _
- *
- #
+ %
! LIKE.
? Average function
- MEAN
+ AVG
- SUMMARY
- TOTAL
! Aggregate.
? Groups filtered by
- WHERE
+ HAVING
- ORDER
- LIMIT
! After.
? Default order
+ ASC
- DESC
- RANDOM
- NONE
! Ascending.
@visual
flow | Clause order | SELECT; FROM; WHERE; GROUP BY; ORDER BY
compare | WHERE and HAVING | WHERE=Rows~Before group; HAVING=Groups~After group
blocks | Aggregates | COUNT; SUM; AVG; MAX
mind | SQL | DDL; DML; SELECT; Aggregates
steps | Query | Choose columns; Table; Condition; Sort
@problems
## Moderate
P: Write a query to display names of students with marks above 80.
A: SELECT name FROM student WHERE marks > 80;
R: 3 | SELECT
R: 3 | WHERE
## High
P: Write a query to find the average marks of each class.
A: SELECT class, AVG(marks) FROM student GROUP BY class;
R: 2 | AVG
R: 2 | GROUP BY
R: 2 | Column
R: 2 | Table
## Advanced
P: Differentiate between WHERE and HAVING with an example.
A: WHERE filters rows before grouping; HAVING filters groups, as in HAVING AVG(marks) > 60.
R: 2 | WHERE
R: 2 | HAVING
R: 2 | Example
R: 2 | Timing
