# SQL: Functions, GROUP BY, HAVING and Joins
minutes: 45
yt: class 12 informatics practices sql functions aggregate group by having join cartesian product
@study
SQL has single-row functions and multi-row (aggregate) functions. Single-row functions include numeric ones like POWER, ROUND and MOD, text ones like UPPER, LOWER, LENGTH, LEFT, RIGHT, MID, INSTR, LTRIM, RTRIM and TRIM, and date functions like NOW, DATE, MONTH, YEAR, DAYNAME and DAYOFMONTH. Aggregate functions work on a set of rows and return one value: MAX, MIN, AVG, SUM and COUNT; COUNT(*) counts all rows while COUNT(column) ignores NULL. The GROUP BY clause groups rows with the same value in a column, and aggregate functions are applied to each group. The HAVING clause filters groups after aggregation, whereas WHERE filters rows before grouping. For example, SELECT dept, AVG(salary) FROM emp GROUP BY dept HAVING AVG(salary) > 50000; The ORDER BY clause comes after GROUP BY and HAVING. A join combines rows from two or more tables. A Cartesian product pairs every row of one table with every row of another, giving cardinality m x n and degree a + b. An equi-join combines tables on equality of a column, using WHERE t1.col = t2.col or JOIN ... ON. A natural join joins tables on common columns and removes duplicate columns. Table aliases shorten queries. The usual order of clauses is SELECT, FROM, WHERE, GROUP BY, HAVING and ORDER BY. NULL values are ignored by aggregates except COUNT(*).
## Deep dive: Functions
Single-row functions work on each value; aggregate functions return one value per group.
## Deep dive: Grouping
GROUP BY forms groups; HAVING filters groups, WHERE filters rows.
## Deep dive: Joins
Cartesian product pairs all rows; equi-join and natural join combine tables on matching columns.
## Hindi saransh
SQL function, GROUP BY, HAVING aur join: Cartesian product, equi-join aur natural join.
> Remember: WHERE filters rows; HAVING filters groups.
@formulas
## Syntax
Aggregate | SELECT AVG(sal) FROM emp;
Group | GROUP BY dept
Group filter | HAVING COUNT(*) > 2
Join | FROM a JOIN b ON a.k=b.k
Order | SELECT FROM WHERE GROUP HAVING ORDER

@qa
Q: Which raises a number to a power?
A: POWER raises a number to a power.
Q: What do you know about POWER?
A: POWER raises a number to a power.
Q: Which rounds a number?
A: ROUND rounds a number.
Q: What do you know about ROUND?
A: ROUND rounds a number.
Q: Which gives the remainder?
A: MOD gives the remainder.
Q: What do you know about MOD?
A: MOD gives the remainder.
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
Q: Which returns characters from the start?
A: LEFT returns characters from the start.
Q: What do you know about LEFT?
A: LEFT returns characters from the start.
Q: Which returns characters from the end?
A: RIGHT returns characters from the end.
Q: What do you know about RIGHT?
A: RIGHT returns characters from the end.
Q: Which returns characters from the middle?
A: MID returns characters from the middle.
Q: What do you know about MID?
A: MID returns characters from the middle.
Q: Which returns the position of a substring?
A: INSTR returns the position of a substring.
Q: What do you know about INSTR?
A: INSTR returns the position of a substring.
Q: Which removes leading spaces?
A: LTRIM removes leading spaces.
Q: What do you know about LTRIM?
A: LTRIM removes leading spaces.
Q: Which removes trailing spaces?
A: RTRIM removes trailing spaces.
Q: What do you know about RTRIM?
A: RTRIM removes trailing spaces.
Q: Which removes leading and trailing spaces?
A: TRIM removes leading and trailing spaces.
Q: What do you know about TRIM?
A: TRIM removes leading and trailing spaces.
Q: Which returns current date and time?
A: NOW returns current date and time.
Q: What do you know about NOW?
A: NOW returns current date and time.
Q: Which returns the date part?
A: DATE function returns the date part.
Q: What do you know about DATE function?
A: DATE function returns the date part.
Q: Which returns the month number?
A: MONTH returns the month number.
Q: What do you know about MONTH?
A: MONTH returns the month number.
Q: Which returns the year?
A: YEAR returns the year.
Q: What do you know about YEAR?
A: YEAR returns the year.
Q: Which returns the weekday name?
A: DAYNAME returns the weekday name.
Q: What do you know about DAYNAME?
A: DAYNAME returns the weekday name.
Q: Which returns the day of the month?
A: DAYOFMONTH returns the day of the month.
Q: What do you know about DAYOFMONTH?
A: DAYOFMONTH returns the day of the month.
Q: Which returns the current date?
A: CURDATE returns the current date.
Q: What do you know about CURDATE?
A: CURDATE returns the current date.
Q: Which returns the largest value?
A: MAX returns the largest value.
Q: What do you know about MAX?
A: MAX returns the largest value.
Q: Which returns the smallest value?
A: MIN returns the smallest value.
Q: What do you know about MIN?
A: MIN returns the smallest value.
Q: Which returns the average?
A: AVG returns the average.
Q: What do you know about AVG?
A: AVG returns the average.
Q: Which returns the total?
A: SUM returns the total.
Q: What do you know about SUM?
A: SUM returns the total.
Q: Which returns the number of values?
A: COUNT returns the number of values.
Q: What do you know about COUNT?
A: COUNT returns the number of values.
Q: Which counts all rows?
A: COUNT star counts all rows.
Q: What do you know about COUNT star?
A: COUNT star counts all rows.
Q: Which ignores null values?
A: COUNT column ignores null values.
Q: What do you know about COUNT column?
A: COUNT column ignores null values.
Q: Which returns one value from many rows?
A: Aggregate function returns one value from many rows.
Q: What do you know about Aggregate function?
A: Aggregate function returns one value from many rows.
Q: Which are ignored by aggregates?
A: Null values are ignored by aggregates.
Q: What do you know about Null values?
A: Null values are ignored by aggregates.
Q: Which counts different values?
A: Distinct count counts different values.
Q: What do you know about Distinct count?
A: Distinct count counts different values.
Q: Which groups rows with the same value?
A: GROUP BY groups rows with the same value.
Q: What do you know about GROUP BY?
A: GROUP BY groups rows with the same value.
Q: Which filters groups after aggregation?
A: HAVING filters groups after aggregation.
Q: What do you know about HAVING?
A: HAVING filters groups after aggregation.
Q: Which filters rows before grouping?
A: WHERE clause filters rows before grouping.
Q: What do you know about WHERE clause?
A: WHERE clause filters rows before grouping.
Q: Which gives one result per group?
A: Group aggregate gives one result per group.
Q: What do you know about Group aggregate?
A: Group aggregate gives one result per group.
Q: Which must appear in SELECT with aggregates?
A: Group column must appear in SELECT with aggregates.
Q: What do you know about Group column?
A: Group column must appear in SELECT with aggregates.
Q: Which ends with ORDER BY?
A: Order of clauses ends with ORDER BY.
Q: What do you know about Order of clauses?
A: Order of clauses ends with ORDER BY.
Q: Which comes after GROUP BY and HAVING?
A: ORDER BY comes after GROUP BY and HAVING.
Q: What do you know about ORDER BY?
A: ORDER BY comes after GROUP BY and HAVING.
Q: Which counts rows per group?
A: Group count counts rows per group.
Q: What do you know about Group count?
A: Group count counts rows per group.
Q: Which gives the average per group?
A: Group average gives the average per group.
Q: What do you know about Group average?
A: Group average gives the average per group.
Q: Which needs HAVING?
A: Filtering groups needs HAVING.
Q: What do you know about Filtering groups?
A: Filtering groups needs HAVING.
Q: Which combines rows from tables?
A: Join combines rows from tables.
Q: What do you know about Join?
A: Join combines rows from tables.
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
Q: Which matches equal column values?
A: Equi join matches equal column values.
Q: What do you know about Equi join?
A: Equi join matches equal column values.
Q: Which joins on common columns?
A: Natural join joins on common columns.
Q: What do you know about Natural join?
A: Natural join joins on common columns.
Q: Which gives the join condition?
A: ON clause gives the join condition.
Q: What do you know about ON clause?
A: ON clause gives the join condition.
Q: Which shortens table names?
A: Table alias shortens table names.
Q: What do you know about Table alias?
A: Table alias shortens table names.
Q: Which links two tables?
A: Common column links two tables.
Q: What do you know about Common column?
A: Common column links two tables.
Q: Which links child to parent table?
A: Foreign key join links child to parent table.
Q: What do you know about Foreign key join?
A: Foreign key join links child to parent table.
Q: Which begins every query?
A: SELECT begins every query.
Q: What do you know about SELECT?
A: SELECT begins every query.
Q: Which names the tables?
A: FROM clause names the tables.
Q: What do you know about FROM clause?
A: FROM clause names the tables.
Q: Which is found using GROUP BY and SUM?
A: Subtotal is found using GROUP BY and SUM.
Q: What do you know about Subtotal?
A: Subtotal is found using GROUP BY and SUM.
Q: Which uses MAX with GROUP BY?
A: Maximum per group uses MAX with GROUP BY.
Q: What do you know about Maximum per group?
A: Maximum per group uses MAX with GROUP BY.
Q: Which uses MIN?
A: Minimum salary uses MIN.
Q: What do you know about Minimum salary?
A: Minimum salary uses MIN.
Q: Which uses AVG?
A: Average marks uses AVG.
Q: What do you know about Average marks?
A: Average marks uses AVG.
Q: Which uses LIKE?
A: Name pattern uses LIKE.
Q: What do you know about Name pattern?
A: Name pattern uses LIKE.
Q: Which uses ORDER BY?
A: Sorted output uses ORDER BY.
Q: What do you know about Sorted output?
A: Sorted output uses ORDER BY.
Q: Which is the output of a query?
A: Result set is the output of a query.
Q: What do you know about Result set?
A: Result set is the output of a query.
Q: Which asks the database a question?
A: Query asks the database a question.
Q: What do you know about Query?
A: Query asks the database a question.
Q: What do aggregate functions do?
A: They work on many rows and return a single value.
Q: When is HAVING used?
A: To filter groups after GROUP BY.
Q: What is a Cartesian product?
A: Pairing of each row of one table with each row of another.
Q: How is the degree of a Cartesian product found?
A: By adding the degrees of the tables.
Q: How is the cardinality found?
A: By multiplying the cardinalities.
Q: What does a natural join do?
A: Joins on common columns and removes the duplicate column.
Q: What does AVG ignore?
A: NULL values.
Q: What is the usual clause order?
A: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY.
@quiz
? Which raises a number to a power?
- MOD
- RIGHT
- UPPER
+ POWER
! POWER raises a number to a power.
? Which statement is true of POWER?
+ Raises a number to a power
- Gives the number of characters
- Returns characters from the middle
- Gives the remainder
! POWER raises a number to a power.
? Which rounds a number?
+ ROUND
- LEFT
- LENGTH
- MID
! ROUND rounds a number.
? Which statement is true of ROUND?
+ Rounds a number
- Gives the remainder
- Raises a number to a power
- Gives the number of characters
! ROUND rounds a number.
? Which gives the remainder?
- UPPER
+ MOD
- LEFT
- LENGTH
! MOD gives the remainder.
? Which statement is true of MOD?
- Returns characters from the end
- Gives the number of characters
- Rounds a number
+ Gives the remainder
! MOD gives the remainder.
? Which converts text to capitals?
- RIGHT
+ UPPER
- MOD
- ROUND
! UPPER converts text to capitals.
? Which statement is true of UPPER?
- Raises a number to a power
- Returns characters from the end
+ Converts text to capitals
- Gives the number of characters
! UPPER converts text to capitals.
? Which converts text to small letters?
- ROUND
+ LOWER
- UPPER
- POWER
! LOWER converts text to small letters.
? Which statement is true of LOWER?
- Rounds a number
- Returns characters from the end
+ Converts text to small letters
- Gives the number of characters
! LOWER converts text to small letters.
? Which gives the number of characters?
- INSTR
+ LENGTH
- MID
- LEFT
! LENGTH gives the number of characters.
? Which statement is true of LENGTH?
- Converts text to capitals
- Converts text to small letters
+ Gives the number of characters
- Raises a number to a power
! LENGTH gives the number of characters.
? Which returns characters from the start?
- LOWER
- MID
+ LEFT
- RIGHT
! LEFT returns characters from the start.
? Which statement is true of LEFT?
- Gives the remainder
- Raises a number to a power
- Returns characters from the end
+ Returns characters from the start
! LEFT returns characters from the start.
? Which returns characters from the end?
- UPPER
- INSTR
+ RIGHT
- LEFT
! RIGHT returns characters from the end.
? Which statement is true of RIGHT?
- Gives the number of characters
- Gives the remainder
+ Returns characters from the end
- Returns the position of a substring
! RIGHT returns characters from the end.
? Which returns characters from the middle?
- UPPER
- LEFT
- ROUND
+ MID
! MID returns characters from the middle.
? Which statement is true of MID?
- Converts text to capitals
- Gives the remainder
- Raises a number to a power
+ Returns characters from the middle
! MID returns characters from the middle.
? Which returns the position of a substring?
- RIGHT
- MOD
- LEFT
+ INSTR
! INSTR returns the position of a substring.
? Which statement is true of INSTR?
- Gives the number of characters
- Returns characters from the middle
- Raises a number to a power
+ Returns the position of a substring
! INSTR returns the position of a substring.
? Which removes leading spaces?
- RTRIM
- DAYNAME
+ LTRIM
- NOW
! LTRIM removes leading spaces.
? Which statement is true of LTRIM?
- Removes trailing spaces
- Returns the current date
+ Removes leading spaces
- Returns the day of the month
! LTRIM removes leading spaces.
? Which removes trailing spaces?
- DAYOFMONTH
+ RTRIM
- DAYNAME
- DATE function
! RTRIM removes trailing spaces.
? Which statement is true of RTRIM?
- Returns the day of the month
- Returns the current date
+ Removes trailing spaces
- Returns the year
! RTRIM removes trailing spaces.
? Which removes leading and trailing spaces?
- NOW
- LTRIM
- RTRIM
+ TRIM
! TRIM removes leading and trailing spaces.
? Which statement is true of TRIM?
- Removes trailing spaces
- Returns the current date
- Removes leading spaces
+ Removes leading and trailing spaces
! TRIM removes leading and trailing spaces.
? Which returns current date and time?
+ NOW
- YEAR
- RTRIM
- MONTH
! NOW returns current date and time.
? Which statement is true of NOW?
- Returns the current date
+ Returns current date and time
- Returns the month number
- Removes leading spaces
! NOW returns current date and time.
? Which returns the date part?
- CURDATE
- TRIM
+ DATE function
- NOW
! DATE function returns the date part.
? Which statement is true of DATE function?
- Removes trailing spaces
- Removes leading and trailing spaces
- Returns the weekday name
+ Returns the date part
! DATE function returns the date part.
? Which returns the month number?
- DAYNAME
- YEAR
- TRIM
+ MONTH
! MONTH returns the month number.
? Which statement is true of MONTH?
+ Returns the month number
- Returns the year
- Returns the current date
- Returns the weekday name
! MONTH returns the month number.
? Which returns the year?
+ YEAR
- DATE function
- CURDATE
- DAYOFMONTH
! YEAR returns the year.
? Which statement is true of YEAR?
- Returns the date part
- Removes leading and trailing spaces
- Returns the current date
+ Returns the year
! YEAR returns the year.
? Which returns the weekday name?
- DATE function
- CURDATE
+ DAYNAME
- NOW
! DAYNAME returns the weekday name.
? Which statement is true of DAYNAME?
+ Returns the weekday name
- Returns the month number
- Removes trailing spaces
- Returns the date part
! DAYNAME returns the weekday name.
? Which returns the day of the month?
+ DAYOFMONTH
- DATE function
- RTRIM
- YEAR
! DAYOFMONTH returns the day of the month.
? Which statement is true of DAYOFMONTH?
- Returns current date and time
- Removes leading spaces
+ Returns the day of the month
- Removes trailing spaces
! DAYOFMONTH returns the day of the month.
? Which returns the current date?
- DAYNAME
- MONTH
- TRIM
+ CURDATE
! CURDATE returns the current date.
? Which statement is true of CURDATE?
- Returns the weekday name
- Returns the month number
+ Returns the current date
- Removes leading spaces
! CURDATE returns the current date.
? Which returns the largest value?
- Null values
+ MAX
- COUNT column
- MIN
! MAX returns the largest value.
? Which statement is true of MAX?
- Ignores null values
- Are ignored by aggregates
+ Returns the largest value
- Returns the average
! MAX returns the largest value.
? Which returns the smallest value?
- Null values
- AVG
- COUNT column
+ MIN
! MIN returns the smallest value.
? Which statement is true of MIN?
- Returns the total
- Returns the average
+ Returns the smallest value
- Returns the number of values
! MIN returns the smallest value.
? Which returns the average?
- SUM
- MIN
- Distinct count
+ AVG
! AVG returns the average.
? Which statement is true of AVG?
+ Returns the average
- Returns the total
- Returns the number of values
- Counts different values
! AVG returns the average.
? Which returns the total?
- COUNT column
- AVG
+ SUM
- Distinct count
! SUM returns the total.
? Which statement is true of SUM?
- Returns one value from many rows
- Returns the smallest value
- Returns the average
+ Returns the total
! SUM returns the total.
? Which returns the number of values?
- Null values
- Distinct count
- AVG
+ COUNT
! COUNT returns the number of values.
? Which statement is true of COUNT?
+ Returns the number of values
- Returns the total
- Are ignored by aggregates
- Counts all rows
! COUNT returns the number of values.
? Which counts all rows?
+ COUNT star
- Null values
- Aggregate function
- MAX
! COUNT star counts all rows.
? Which statement is true of COUNT star?
+ Counts all rows
- Returns the number of values
- Returns the largest value
- Returns the total
! COUNT star counts all rows.
? Which ignores null values?
- MIN
- Null values
+ COUNT column
- SUM
! COUNT column ignores null values.
? Which statement is true of COUNT column?
- Counts all rows
- Returns the smallest value
- Returns the average
+ Ignores null values
! COUNT column ignores null values.
? Which returns one value from many rows?
- COUNT star
+ Aggregate function
- MAX
- COUNT
! Aggregate function returns one value from many rows.
? Which statement is true of Aggregate function?
+ Returns one value from many rows
- Returns the smallest value
- Are ignored by aggregates
- Returns the average
! Aggregate function returns one value from many rows.
? Which are ignored by aggregates?
+ Null values
- Distinct count
- Aggregate function
- COUNT column
! Null values are ignored by aggregates.
? Which statement is true of Null values?
+ Are ignored by aggregates
- Returns one value from many rows
- Ignores null values
- Returns the average
! Null values are ignored by aggregates.
? Which counts different values?
- COUNT star
- Null values
- MAX
+ Distinct count
! Distinct count counts different values.
? Which statement is true of Distinct count?
- Returns the average
- Are ignored by aggregates
- Counts all rows
+ Counts different values
! Distinct count counts different values.
? Which groups rows with the same value?
- HAVING
- Group aggregate
- ORDER BY
+ GROUP BY
! GROUP BY groups rows with the same value.
? Which statement is true of GROUP BY?
+ Groups rows with the same value
- Filters groups after aggregation
- Needs HAVING
- Must appear in SELECT with aggregates
! GROUP BY groups rows with the same value.
? Which filters groups after aggregation?
- ORDER BY
- Group aggregate
- Filtering groups
+ HAVING
! HAVING filters groups after aggregation.
? Which statement is true of HAVING?
- Ends with ORDER BY
+ Filters groups after aggregation
- Groups rows with the same value
- Comes after GROUP BY and HAVING
! HAVING filters groups after aggregation.
? Which filters rows before grouping?
+ WHERE clause
- Order of clauses
- Filtering groups
- Group column
! WHERE clause filters rows before grouping.
? Which statement is true of WHERE clause?
+ Filters rows before grouping
- Gives one result per group
- Must appear in SELECT with aggregates
- Counts rows per group
! WHERE clause filters rows before grouping.
? Which gives one result per group?
+ Group aggregate
- WHERE clause
- Filtering groups
- Group column
! Group aggregate gives one result per group.
? Which statement is true of Group aggregate?
+ Gives one result per group
- Comes after GROUP BY and HAVING
- Filters groups after aggregation
- Counts rows per group
! Group aggregate gives one result per group.
? Which must appear in SELECT with aggregates?
+ Group column
- WHERE clause
- GROUP BY
- Group count
! Group column must appear in SELECT with aggregates.
? Which statement is true of Group column?
- Groups rows with the same value
+ Must appear in SELECT with aggregates
- Filters groups after aggregation
- Gives one result per group
! Group column must appear in SELECT with aggregates.
? Which ends with ORDER BY?
- Group aggregate
- Group count
- Group column
+ Order of clauses
! Order of clauses ends with ORDER BY.
? Which statement is true of Order of clauses?
- Must appear in SELECT with aggregates
+ Ends with ORDER BY
- Comes after GROUP BY and HAVING
- Groups rows with the same value
! Order of clauses ends with ORDER BY.
? Which comes after GROUP BY and HAVING?
- Group aggregate
+ ORDER BY
- Filtering groups
- Group column
! ORDER BY comes after GROUP BY and HAVING.
? Which statement is true of ORDER BY?
- Gives the average per group
- Groups rows with the same value
- Needs HAVING
+ Comes after GROUP BY and HAVING
! ORDER BY comes after GROUP BY and HAVING.
? Which counts rows per group?
- GROUP BY
- Group average
- Filtering groups
+ Group count
! Group count counts rows per group.
? Which statement is true of Group count?
- Needs HAVING
- Must appear in SELECT with aggregates
+ Counts rows per group
- Filters rows before grouping
! Group count counts rows per group.
? Which gives the average per group?
- Group aggregate
- Group column
- HAVING
+ Group average
! Group average gives the average per group.
? Which statement is true of Group average?
- Ends with ORDER BY
+ Gives the average per group
- Needs HAVING
- Filters rows before grouping
! Group average gives the average per group.
? Which needs HAVING?
- GROUP BY
- Group average
+ Filtering groups
- Group column
! Filtering groups needs HAVING.
? Which statement is true of Filtering groups?
- Groups rows with the same value
- Filters rows before grouping
- Ends with ORDER BY
+ Needs HAVING
! Filtering groups needs HAVING.
? Which combines rows from tables?
- Cartesian cardinality
+ Join
- Cartesian product
- Equi join
! Join combines rows from tables.
? Which statement is true of Join?
- Shortens table names
- Is the sum of degrees
- Is the product of cardinalities
+ Combines rows from tables
! Join combines rows from tables.
? Which pairs every row with every row?
+ Cartesian product
- Cartesian degree
- Table alias
- Common column
! Cartesian product pairs every row with every row.
? Which statement is true of Cartesian product?
- Gives the join condition
- Is the product of cardinalities
+ Pairs every row with every row
- Links two tables
! Cartesian product pairs every row with every row.
? Which is the sum of degrees?
+ Cartesian degree
- Cartesian product
- ON clause
- Natural join
! Cartesian degree is the sum of degrees.
? Which statement is true of Cartesian degree?
- Links child to parent table
- Pairs every row with every row
- Links two tables
+ Is the sum of degrees
! Cartesian degree is the sum of degrees.
? Which is the product of cardinalities?
- Common column
- ON clause
+ Cartesian cardinality
- Equi join
! Cartesian cardinality is the product of cardinalities.
? Which statement is true of Cartesian cardinality?
- Links two tables
- Matches equal column values
+ Is the product of cardinalities
- Joins on common columns
! Cartesian cardinality is the product of cardinalities.
? Which matches equal column values?
- Table alias
+ Equi join
- Foreign key join
- Cartesian product
! Equi join matches equal column values.
? Which statement is true of Equi join?
- Joins on common columns
+ Matches equal column values
- Links two tables
- Is the sum of degrees
! Equi join matches equal column values.
? Which joins on common columns?
- Table alias
- Cartesian product
- Foreign key join
+ Natural join
! Natural join joins on common columns.
? Which statement is true of Natural join?
+ Joins on common columns
- Shortens table names
- Pairs every row with every row
- Combines rows from tables
! Natural join joins on common columns.
? Which gives the join condition?
- Cartesian cardinality
- Common column
- Cartesian product
+ ON clause
! ON clause gives the join condition.
? Which statement is true of ON clause?
- Links two tables
+ Gives the join condition
- Matches equal column values
- Joins on common columns
! ON clause gives the join condition.
? Which shortens table names?
- Common column
- Cartesian degree
- Cartesian product
+ Table alias
! Table alias shortens table names.
? Which statement is true of Table alias?
- Joins on common columns
+ Shortens table names
- Matches equal column values
- Links child to parent table
! Table alias shortens table names.
? Which links two tables?
- Cartesian cardinality
- Foreign key join
- ON clause
+ Common column
! Common column links two tables.
? Which statement is true of Common column?
+ Links two tables
- Combines rows from tables
- Is the sum of degrees
- Is the product of cardinalities
! Common column links two tables.
? Which links child to parent table?
- Join
+ Foreign key join
- Equi join
- Natural join
! Foreign key join links child to parent table.
? Which statement is true of Foreign key join?
- Matches equal column values
- Shortens table names
+ Links child to parent table
- Gives the join condition
! Foreign key join links child to parent table.
? Which begins every query?
- Sorted output
+ SELECT
- Subtotal
- Average marks
! SELECT begins every query.
? Which statement is true of SELECT?
+ Begins every query
- Uses MAX with GROUP BY
- Is the output of a query
- Uses LIKE
! SELECT begins every query.
? Which names the tables?
- Sorted output
+ FROM clause
- Name pattern
- SELECT
! FROM clause names the tables.
? Which statement is true of FROM clause?
- Begins every query
- Uses AVG
+ Names the tables
- Uses ORDER BY
! FROM clause names the tables.
? Which is found using GROUP BY and SUM?
- Query
+ Subtotal
- Average marks
- Sorted output
! Subtotal is found using GROUP BY and SUM.
? Which statement is true of Subtotal?
+ Is found using GROUP BY and SUM
- Names the tables
- Uses LIKE
- Asks the database a question
! Subtotal is found using GROUP BY and SUM.
? Which uses MAX with GROUP BY?
- Result set
- Query
- FROM clause
+ Maximum per group
! Maximum per group uses MAX with GROUP BY.
? Which statement is true of Maximum per group?
- Asks the database a question
- Uses AVG
- Uses LIKE
+ Uses MAX with GROUP BY
! Maximum per group uses MAX with GROUP BY.
? Which uses MIN?
- SELECT
+ Minimum salary
- Subtotal
- Sorted output
! Minimum salary uses MIN.
? Which statement is true of Minimum salary?
- Uses MAX with GROUP BY
- Uses LIKE
+ Uses MIN
- Is the output of a query
! Minimum salary uses MIN.
? Which uses AVG?
- SELECT
- FROM clause
- Query
+ Average marks
! Average marks uses AVG.
? Which statement is true of Average marks?
+ Uses AVG
- Uses MAX with GROUP BY
- Uses MIN
- Names the tables
! Average marks uses AVG.
? Which uses LIKE?
- Result set
- Subtotal
- Minimum salary
+ Name pattern
! Name pattern uses LIKE.
? Which statement is true of Name pattern?
- Uses MIN
+ Uses LIKE
- Is found using GROUP BY and SUM
- Begins every query
! Name pattern uses LIKE.
? Which uses ORDER BY?
- Name pattern
+ Sorted output
- Subtotal
- Result set
! Sorted output uses ORDER BY.
? Which statement is true of Sorted output?
- Uses MIN
- Begins every query
+ Uses ORDER BY
- Uses LIKE
! Sorted output uses ORDER BY.
? Which is the output of a query?
- Minimum salary
- Sorted output
- FROM clause
+ Result set
! Result set is the output of a query.
? Which statement is true of Result set?
- Uses MAX with GROUP BY
- Uses ORDER BY
- Is found using GROUP BY and SUM
+ Is the output of a query
! Result set is the output of a query.
? Which asks the database a question?
+ Query
- Sorted output
- SELECT
- Minimum salary
! Query asks the database a question.
? Which statement is true of Query?
- Is the output of a query
- Uses ORDER BY
+ Asks the database a question
- Uses AVG
! Query asks the database a question.
? Group filter clause
+ HAVING
- WHERE
- LIMIT
- DISTINCT
! HAVING.
? Cartesian cardinality is
- Sum
- Difference
+ Product
- Average
! Product.
? Largest value function
- MIN
- AVG
- SUM
+ MAX
! MAX.
? Joining on common columns
+ Natural join
- Cross
- Outer
- Self
! Natural join.
? Leading spaces removed by
- RTRIM
- TRIM
- MID
+ LTRIM
! LTRIM.
? Counts all rows
- COUNT(col)
- SUM(*)
- MAX(*)
+ COUNT(*)
! COUNT(*).
@visual
blocks | Aggregates | MAX; MIN; AVG; SUM; COUNT
compare | WHERE and HAVING | WHERE=Filters rows~Before grouping; HAVING=Filters groups~After grouping
flow | Clause order | SELECT; FROM; WHERE; GROUP BY; HAVING; ORDER BY
steps | Join tables | Pick tables; Choose key; Write ON condition; Run
mind | SQL functions | Single row; Aggregate; Grouping; Joins
@problems
## Moderate
P: What is the difference between COUNT(*) and COUNT(column)?
A: COUNT(*) counts all rows, while COUNT(column) ignores NULL values.
R: 3 | All rows
R: 3 | Ignores NULL
## High
P: Differentiate WHERE and HAVING.
A: WHERE filters rows before grouping, HAVING filters groups after aggregation.
R: 2 | Rows
R: 2 | Groups
R: 2 | Before
R: 2 | After
## Advanced
P: A table has 5 rows and 3 columns, another 4 rows and 2 columns. Find degree and cardinality of their Cartesian product.
A: Degree is 5 and cardinality is 20.
R: 2 | Degree
R: 2 | Cardinality
R: 2 | 5
R: 2 | 20
