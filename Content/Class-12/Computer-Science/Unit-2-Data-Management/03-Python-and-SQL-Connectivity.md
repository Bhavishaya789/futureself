# Python and SQL Connectivity
minutes: 45
yt: class 12 computer science python mysql connector cursor execute fetchall commit parameterised query
@study
Python programs can store and retrieve data in a MySQL database using a connector library such as mysql.connector (install with pip install mysql-connector-python). Steps: (1) import mysql.connector; (2) create a connection with mysql.connector.connect(host="localhost", user="root", passwd="...", database="school"); check is_connected(); (3) create a cursor object with con.cursor(), which executes queries and holds results; (4) run SQL with cur.execute(query); (5) for SELECT, fetch results using fetchone() (next row as a tuple, None if no more), fetchmany(n) (n rows) or fetchall() (all remaining rows as a list of tuples); rowcount gives the number of rows affected or fetched; (6) for INSERT, UPDATE or DELETE call con.commit() to save the changes, or con.rollback() to undo them; (7) close the cursor and connection with cur.close() and con.close(). Parameterised queries use placeholders: cur.execute("INSERT INTO student VALUES (%s,%s,%s)", (1,"Asha",85)); formatting a string with % or format() directly is risky because of SQL injection, where malicious input alters the query; placeholders let the driver escape values safely. Error handling uses try-except with mysql.connector.Error. The cursor position moves forward after each fetch. Common tasks: creating tables, inserting multiple rows with executemany, displaying records, searching by key, updating marks and deleting records. Data types map: INT to int, FLOAT to float, VARCHAR to str and DATE to datetime.date. A connection must be closed to free resources. Other connectors include sqlite3 which is built into Python.
## Deep dive: Workflow
Connect, create cursor, execute, fetch or commit, then close.
## Deep dive: Fetching
fetchone returns a single row, fetchmany a set number and fetchall every remaining row.
## Deep dive: Safety
Use placeholders to prevent SQL injection and always commit changes made by INSERT, UPDATE and DELETE.
## Hindi saransh
Python-SQL sanyojan: connector, cursor, execute, fetch, commit aur surakshit query.
> Remember: without commit, INSERT, UPDATE and DELETE are not saved.
@formulas
## Key facts
connect | Open connection
cursor | Run queries
fetchall | All rows
commit | Save changes
%s | Placeholder

@qa
Q: Which lets Python talk to MySQL?
A: Connector lets Python talk to MySQL.
Q: What do you know about Connector?
A: Connector lets Python talk to MySQL.
Q: Which is imported with import mysql.connector?
A: Mysql connector is imported with import mysql.connector.
Q: What do you know about Mysql connector?
A: Mysql connector is imported with import mysql.connector.
Q: Which opens a connection to the database?
A: Connect function opens a connection to the database.
Q: What do you know about Connect function?
A: Connect function opens a connection to the database.
Q: Which is the server address?
A: Host is the server address.
Q: What do you know about Host?
A: Host is the server address.
Q: Which is the database account name?
A: User is the database account name.
Q: What do you know about User?
A: User is the database account name.
Q: Which selects the database?
A: Database parameter selects the database.
Q: What do you know about Database parameter?
A: Database parameter selects the database.
Q: Which checks the connection state?
A: Is connected checks the connection state.
Q: What do you know about Is connected?
A: Is connected checks the connection state.
Q: Which executes queries?
A: Cursor executes queries.
Q: What do you know about Cursor?
A: Cursor executes queries.
Q: Which holds the query results?
A: Cursor holds the query results.
Q: Which runs an SQL statement?
A: Execute runs an SQL statement.
Q: What do you know about Execute?
A: Execute runs an SQL statement.
Q: Which uses the cursor method of the connection?
A: Cursor creation uses the cursor method of the connection.
Q: What do you know about Cursor creation?
A: Cursor creation uses the cursor method of the connection.
Q: Which moves forward after each fetch?
A: Cursor position moves forward after each fetch.
Q: What do you know about Cursor position?
A: Cursor position moves forward after each fetch.
Q: Which gives the number of rows affected?
A: Rowcount gives the number of rows affected.
Q: What do you know about Rowcount?
A: Rowcount gives the number of rows affected.
Q: Which returns the next row?
A: Fetchone returns the next row.
Q: What do you know about Fetchone?
A: Fetchone returns the next row.
Q: Which returns None?
A: Fetchone at end returns None.
Q: What do you know about Fetchone at end?
A: Fetchone at end returns None.
Q: Which returns a given number of rows?
A: Fetchmany returns a given number of rows.
Q: What do you know about Fetchmany?
A: Fetchmany returns a given number of rows.
Q: Which returns all remaining rows?
A: Fetchall returns all remaining rows.
Q: What do you know about Fetchall?
A: Fetchall returns all remaining rows.
Q: Which returns a list of tuples?
A: Fetchall returns a list of tuples.
Q: Which is returned as a tuple?
A: Row is returned as a tuple.
Q: What do you know about Row?
A: Row is returned as a tuple.
Q: Which needs a fetch to read results?
A: Select needs a fetch to read results.
Q: What do you know about Select?
A: Select needs a fetch to read results.
Q: Which saves changes permanently?
A: Commit saves changes permanently.
Q: What do you know about Commit?
A: Commit saves changes permanently.
Q: Which undoes uncommitted changes?
A: Rollback undoes uncommitted changes.
Q: What do you know about Rollback?
A: Rollback undoes uncommitted changes.
Q: Which needs commit?
A: Insert via python needs commit.
Q: What do you know about Insert via python?
A: Insert via python needs commit.
Q: What do you know about Update via python?
A: Update via python needs commit.
Q: What do you know about Delete via python?
A: Delete via python needs commit.
Q: Which inserts multiple rows?
A: Executemany inserts multiple rows.
Q: What do you know about Executemany?
A: Executemany inserts multiple rows.
Q: Which uses placeholders?
A: Parameterised query uses placeholders.
Q: What do you know about Parameterised query?
A: Parameterised query uses placeholders.
Q: Which is the placeholder in mysql connector?
A: Percent s is the placeholder in mysql connector.
Q: What do you know about Percent s?
A: Percent s is the placeholder in mysql connector.
Q: Which risks SQL injection?
A: String formatting in queries risks SQL injection.
Q: What do you know about String formatting in queries?
A: String formatting in queries risks SQL injection.
Q: Which alters a query through input?
A: SQL injection alters a query through input.
Q: What do you know about SQL injection?
A: SQL injection alters a query through input.
Q: Which makes values safe?
A: Driver escaping makes values safe.
Q: What do you know about Driver escaping?
A: Driver escaping makes values safe.
Q: Which handles database errors?
A: Try except handles database errors.
Q: What do you know about Try except?
A: Try except handles database errors.
Q: Which is the base error class?
A: Mysql connector Error is the base error class.
Q: What do you know about Mysql connector Error?
A: Mysql connector Error is the base error class.
Q: Which releases the cursor?
A: Cursor close releases the cursor.
Q: What do you know about Cursor close?
A: Cursor close releases the cursor.
Q: Which frees database resources?
A: Connection close frees database resources.
Q: What do you know about Connection close?
A: Connection close frees database resources.
Q: Which is built into Python?
A: Sqlite3 is built into Python.
Q: What do you know about Sqlite3?
A: Sqlite3 is built into Python.
Q: Which opens a database file?
A: Sqlite3 connect opens a database file.
Q: What do you know about Sqlite3 connect?
A: Sqlite3 connect opens a database file.
Q: Which maps to the SQL DATE type?
A: Python datetime date maps to the SQL DATE type.
Q: What do you know about Python datetime date?
A: Python datetime date maps to the SQL DATE type.
Q: Which maps to a Python string?
A: Varchar maps to a Python string.
Q: What do you know about Varchar?
A: Varchar maps to a Python string.
Q: Which maps to a Python int?
A: Int column maps to a Python int.
Q: What do you know about Int column?
A: Int column maps to a Python int.
Q: Which should not be hard coded?
A: Password in code should not be hard coded.
Q: What do you know about Password in code?
A: Password in code should not be hard coded.
Q: Which can store credentials safely?
A: Environment variable can store credentials safely.
Q: What do you know about Environment variable?
A: Environment variable can store credentials safely.
Q: Which means the same machine?
A: Localhost means the same machine.
Q: What do you know about Localhost?
A: Localhost means the same machine.
Q: Which is 3306?
A: Default MySQL port is 3306.
Q: What do you know about Default MySQL port?
A: Default MySQL port is 3306.
Q: Which installs the connector package?
A: Pip installs the connector package.
Q: What do you know about Pip?
A: Pip installs the connector package.
Q: Which represents the database session?
A: Connection object represents the database session.
Q: What do you know about Connection object?
A: Connection object represents the database session.
Q: Which saves each statement automatically when enabled?
A: Autocommit saves each statement automatically when enabled.
Q: What do you know about Autocommit?
A: Autocommit saves each statement automatically when enabled.
Q: Which is a group of statements treated as one unit?
A: Transaction is a group of statements treated as one unit.
Q: What do you know about Transaction?
A: Transaction is a group of statements treated as one unit.
Q: Which restores the previous state?
A: Rollback after error restores the previous state.
Q: What do you know about Rollback after error?
A: Rollback after error restores the previous state.
Q: Which uses a where clause with a placeholder?
A: Search by key uses a where clause with a placeholder.
Q: What do you know about Search by key?
A: Search by key uses a where clause with a placeholder.
Q: Which loops over fetched rows?
A: Display records loops over fetched rows.
Q: What do you know about Display records?
A: Display records loops over fetched rows.
Q: Which can be run through execute?
A: Table creation can be run through execute.
Q: What do you know about Table creation?
A: Table creation can be run through execute.
Q: Which returns rows as dictionaries?
A: Dictionary cursor returns rows as dictionaries.
Q: What do you know about Dictionary cursor?
A: Dictionary cursor returns rows as dictionaries.
Q: Which is the set of rows returned by a query?
A: Result set is the set of rows returned by a query.
Q: What do you know about Result set?
A: Result set is the set of rows returned by a query.
Q: Which returns nothing?
A: Fetch after insert returns nothing.
Q: What do you know about Fetch after insert?
A: Fetch after insert returns nothing.
Q: Which allows many queries on one cursor?
A: Cursor reuse allows many queries on one cursor.
Q: What do you know about Cursor reuse?
A: Cursor reuse allows many queries on one cursor.
Q: Which closes the cursor before the connection?
A: Closing order closes the cursor before the connection.
Q: What do you know about Closing order?
A: Closing order closes the cursor before the connection.
Q: Which uses UPDATE with a where clause?
A: Update marks uses UPDATE with a where clause.
Q: What do you know about Update marks?
A: Update marks uses UPDATE with a where clause.
Q: Which uses DELETE with a where clause?
A: Delete record uses DELETE with a where clause.
Q: What do you know about Delete record?
A: Delete record uses DELETE with a where clause.
Q: Which raises an error?
A: Connection failure raises an error.
Q: What do you know about Connection failure?
A: Connection failure raises an error.
Q: Which raises a database error?
A: Wrong password raises a database error.
Q: What do you know about Wrong password?
A: Wrong password raises a database error.
Q: Which raises a programming error?
A: Missing table raises a programming error.
Q: What do you know about Missing table?
A: Missing table raises a programming error.
Q: What is mysql.connector?
A: A library for connecting Python to MySQL.
Q: What is a cursor?
A: An object used to execute queries and fetch results.
Q: What does fetchall return?
A: All remaining rows as a list of tuples.
Q: What does fetchone return?
A: The next row or None.
Q: Why use commit?
A: To save changes made by INSERT, UPDATE or DELETE.
Q: What is a parameterised query?
A: A query with placeholders for values.
Q: What is SQL injection?
A: Altering a query by malicious input.
Q: What does rowcount show?
A: The number of rows affected or fetched.
@quiz
? Which lets Python talk to MySQL?
- Database parameter
- Host
- Is connected
+ Connector
! Connector lets Python talk to MySQL.
? Which statement is true of Connector?
- Is the server address
- Selects the database
- Is imported with import mysql.connector
+ Lets Python talk to MySQL
! Connector lets Python talk to MySQL.
? Which is imported with import mysql.connector?
- Connect function
+ Mysql connector
- User
- Is connected
! Mysql connector is imported with import mysql.connector.
? Which statement is true of Mysql connector?
- Is the database account name
- Checks the connection state
+ Is imported with import mysql.connector
- Lets Python talk to MySQL
! Mysql connector is imported with import mysql.connector.
? Which opens a connection to the database?
+ Connect function
- Mysql connector
- Database parameter
- Connector
! Connect function opens a connection to the database.
? Which statement is true of Connect function?
+ Opens a connection to the database
- Is the database account name
- Checks the connection state
- Is the server address
! Connect function opens a connection to the database.
? Which is the server address?
- Connector
+ Host
- Is connected
- Connect function
! Host is the server address.
? Which statement is true of Host?
+ Is the server address
- Checks the connection state
- Opens a connection to the database
- Lets Python talk to MySQL
! Host is the server address.
? Which is the database account name?
+ User
- Connect function
- Mysql connector
- Is connected
! User is the database account name.
? Which statement is true of User?
+ Is the database account name
- Selects the database
- Checks the connection state
- Is imported with import mysql.connector
! User is the database account name.
? Which selects the database?
+ Database parameter
- Connector
- User
- Host
! Database parameter selects the database.
? Which statement is true of Database parameter?
- Is the database account name
- Checks the connection state
- Is imported with import mysql.connector
+ Selects the database
! Database parameter selects the database.
? Which checks the connection state?
+ Is connected
- Connector
- Connect function
- User
! Is connected checks the connection state.
? Which statement is true of Is connected?
+ Checks the connection state
- Is the server address
- Lets Python talk to MySQL
- Opens a connection to the database
! Is connected checks the connection state.
? Which executes queries?
+ Cursor
- Cursor position
- Cursor creation
- Rowcount
! Cursor executes queries.
? Which statement is true of Cursor?
- Gives the number of rows affected
+ Executes queries
- Runs an SQL statement
- Moves forward after each fetch
! Cursor executes queries.
? Which holds the query results?
+ Cursor
- Cursor creation
- Execute
- Rowcount
! Cursor holds the query results.
? Which runs an SQL statement?
- Cursor position
- Rowcount
- Cursor creation
+ Execute
! Execute runs an SQL statement.
? Which statement is true of Execute?
- Gives the number of rows affected
+ Runs an SQL statement
- Uses the cursor method of the connection
- Moves forward after each fetch
! Execute runs an SQL statement.
? Which uses the cursor method of the connection?
+ Cursor creation
- Rowcount
- Cursor
- Cursor position
! Cursor creation uses the cursor method of the connection.
? Which statement is true of Cursor creation?
- Gives the number of rows affected
- Runs an SQL statement
+ Uses the cursor method of the connection
- Moves forward after each fetch
! Cursor creation uses the cursor method of the connection.
? Which moves forward after each fetch?
- Rowcount
- Cursor creation
- Cursor
+ Cursor position
! Cursor position moves forward after each fetch.
? Which statement is true of Cursor position?
+ Moves forward after each fetch
- Holds the query results
- Gives the number of rows affected
- Executes queries
! Cursor position moves forward after each fetch.
? Which gives the number of rows affected?
- Cursor position
- Execute
+ Rowcount
- Cursor
! Rowcount gives the number of rows affected.
? Which statement is true of Rowcount?
- Moves forward after each fetch
- Executes queries
- Runs an SQL statement
+ Gives the number of rows affected
! Rowcount gives the number of rows affected.
? Which returns the next row?
+ Fetchone
- Fetchall
- Fetchone at end
- Select
! Fetchone returns the next row.
? Which statement is true of Fetchone?
- Returns None
- Returns a list of tuples
- Returns all remaining rows
+ Returns the next row
! Fetchone returns the next row.
? Which returns None?
+ Fetchone at end
- Select
- Fetchall
- Fetchmany
! Fetchone at end returns None.
? Which statement is true of Fetchone at end?
- Returns a given number of rows
+ Returns None
- Returns all remaining rows
- Returns the next row
! Fetchone at end returns None.
? Which returns a given number of rows?
- Select
+ Fetchmany
- Fetchone
- Row
! Fetchmany returns a given number of rows.
? Which statement is true of Fetchmany?
- Returns the next row
- Returns a list of tuples
- Needs a fetch to read results
+ Returns a given number of rows
! Fetchmany returns a given number of rows.
? Which returns all remaining rows?
+ Fetchall
- Fetchmany
- Select
- Fetchone at end
! Fetchall returns all remaining rows.
? Which statement is true of Fetchall?
+ Returns all remaining rows
- Returns a given number of rows
- Is returned as a tuple
- Needs a fetch to read results
! Fetchall returns all remaining rows.
? Which returns a list of tuples?
- Fetchone at end
- Select
- Row
+ Fetchall
! Fetchall returns a list of tuples.
? Which is returned as a tuple?
- Fetchone at end
- Fetchall
- Fetchone
+ Row
! Row is returned as a tuple.
? Which statement is true of Row?
- Returns a given number of rows
- Returns None
+ Is returned as a tuple
- Needs a fetch to read results
! Row is returned as a tuple.
? Which needs a fetch to read results?
+ Select
- Fetchone at end
- Fetchone
- Row
! Select needs a fetch to read results.
? Which statement is true of Select?
- Returns a given number of rows
+ Needs a fetch to read results
- Returns the next row
- Returns all remaining rows
! Select needs a fetch to read results.
? Which saves changes permanently?
+ Commit
- Insert via python
- Rollback
- Executemany
! Commit saves changes permanently.
? Which statement is true of Commit?
+ Saves changes permanently
- Undoes uncommitted changes
- Inserts multiple rows
- Needs commit
! Commit saves changes permanently.
? Which undoes uncommitted changes?
- Commit
- Delete via python
- Executemany
+ Rollback
! Rollback undoes uncommitted changes.
? Which statement is true of Rollback?
- Saves changes permanently
- Needs commit
- Inserts multiple rows
+ Undoes uncommitted changes
! Rollback undoes uncommitted changes.
? Which needs commit?
- Commit
- Update via python
+ Insert via python
- Delete via python
! Insert via python needs commit.
? Which statement is true of Insert via python?
- Inserts multiple rows
- Saves changes permanently
- Undoes uncommitted changes
+ Needs commit
! Insert via python needs commit.
? Which statement is true of Update via python?
- Saves changes permanently
- Undoes uncommitted changes
+ Needs commit
- Inserts multiple rows
! Update via python needs commit.
? Which statement is true of Delete via python?
- Saves changes permanently
- Inserts multiple rows
+ Needs commit
- Undoes uncommitted changes
! Delete via python needs commit.
? Which inserts multiple rows?
+ Executemany
- Delete via python
- Update via python
- Commit
! Executemany inserts multiple rows.
? Which statement is true of Executemany?
- Needs commit
- Undoes uncommitted changes
+ Inserts multiple rows
- Saves changes permanently
! Executemany inserts multiple rows.
? Which uses placeholders?
+ Parameterised query
- Driver escaping
- Percent s
- SQL injection
! Parameterised query uses placeholders.
? Which statement is true of Parameterised query?
- Is the base error class
- Handles database errors
- Is the placeholder in mysql connector
+ Uses placeholders
! Parameterised query uses placeholders.
? Which is the placeholder in mysql connector?
- SQL injection
- Try except
- Parameterised query
+ Percent s
! Percent s is the placeholder in mysql connector.
? Which statement is true of Percent s?
- Alters a query through input
+ Is the placeholder in mysql connector
- Uses placeholders
- Risks SQL injection
! Percent s is the placeholder in mysql connector.
? Which risks SQL injection?
- Mysql connector Error
- Driver escaping
+ String formatting in queries
- Try except
! String formatting in queries risks SQL injection.
? Which statement is true of String formatting in queries?
+ Risks SQL injection
- Alters a query through input
- Is the placeholder in mysql connector
- Uses placeholders
! String formatting in queries risks SQL injection.
? Which alters a query through input?
- Percent s
- Mysql connector Error
+ SQL injection
- Driver escaping
! SQL injection alters a query through input.
? Which statement is true of SQL injection?
+ Alters a query through input
- Risks SQL injection
- Is the placeholder in mysql connector
- Uses placeholders
! SQL injection alters a query through input.
? Which makes values safe?
- Percent s
- Try except
+ Driver escaping
- SQL injection
! Driver escaping makes values safe.
? Which statement is true of Driver escaping?
- Handles database errors
- Is the placeholder in mysql connector
- Is the base error class
+ Makes values safe
! Driver escaping makes values safe.
? Which handles database errors?
- Percent s
+ Try except
- SQL injection
- Mysql connector Error
! Try except handles database errors.
? Which statement is true of Try except?
+ Handles database errors
- Uses placeholders
- Risks SQL injection
- Makes values safe
! Try except handles database errors.
? Which is the base error class?
- Parameterised query
- SQL injection
- Driver escaping
+ Mysql connector Error
! Mysql connector Error is the base error class.
? Which statement is true of Mysql connector Error?
- Alters a query through input
+ Is the base error class
- Uses placeholders
- Risks SQL injection
! Mysql connector Error is the base error class.
? Which releases the cursor?
- Closing order
- Cursor reuse
+ Cursor close
- Missing table
! Cursor close releases the cursor.
? Which statement is true of Cursor close?
- Is built into Python
+ Releases the cursor
- Is a group of statements treated as one unit
- Frees database resources
! Cursor close releases the cursor.
? Which frees database resources?
- Update marks
- Closing order
+ Connection close
- Missing table
! Connection close frees database resources.
? Which statement is true of Connection close?
- Loops over fetched rows
- Releases the cursor
- Closes the cursor before the connection
+ Frees database resources
! Connection close frees database resources.
? Which is built into Python?
- Cursor close
- Wrong password
+ Sqlite3
- Delete record
! Sqlite3 is built into Python.
? Which statement is true of Sqlite3?
- Loops over fetched rows
+ Is built into Python
- Uses a where clause with a placeholder
- Is a group of statements treated as one unit
! Sqlite3 is built into Python.
? Which opens a database file?
- Transaction
- Search by key
- Cursor reuse
+ Sqlite3 connect
! Sqlite3 connect opens a database file.
? Which statement is true of Sqlite3 connect?
- Allows many queries on one cursor
+ Opens a database file
- Raises an error
- Raises a programming error
! Sqlite3 connect opens a database file.
? Which maps to the SQL DATE type?
- Closing order
- Int column
+ Python datetime date
- Fetch after insert
! Python datetime date maps to the SQL DATE type.
? Which statement is true of Python datetime date?
- Returns rows as dictionaries
+ Maps to the SQL DATE type
- Represents the database session
- Means the same machine
! Python datetime date maps to the SQL DATE type.
? Which maps to a Python string?
+ Varchar
- Cursor close
- Dictionary cursor
- Pip
! Varchar maps to a Python string.
? Which statement is true of Varchar?
+ Maps to a Python string
- Installs the connector package
- Uses a where clause with a placeholder
- Raises a programming error
! Varchar maps to a Python string.
? Which maps to a Python int?
- Localhost
- Varchar
+ Int column
- Python datetime date
! Int column maps to a Python int.
? Which statement is true of Int column?
- Saves each statement automatically when enabled
- Can store credentials safely
+ Maps to a Python int
- Returns nothing
! Int column maps to a Python int.
? Which should not be hard coded?
- Autocommit
+ Password in code
- Cursor close
- Result set
! Password in code should not be hard coded.
? Which statement is true of Password in code?
+ Should not be hard coded
- Maps to a Python string
- Can store credentials safely
- Loops over fetched rows
! Password in code should not be hard coded.
? Which can store credentials safely?
+ Environment variable
- Wrong password
- Rollback after error
- Search by key
! Environment variable can store credentials safely.
? Which statement is true of Environment variable?
- Raises a database error
- Closes the cursor before the connection
- Can be run through execute
+ Can store credentials safely
! Environment variable can store credentials safely.
? Which means the same machine?
- Autocommit
+ Localhost
- Wrong password
- Environment variable
! Localhost means the same machine.
? Which statement is true of Localhost?
- Is built into Python
- Uses DELETE with a where clause
+ Means the same machine
- Opens a database file
! Localhost means the same machine.
? Which is 3306?
- Sqlite3 connect
- Cursor reuse
+ Default MySQL port
- Int column
! Default MySQL port is 3306.
? Which statement is true of Default MySQL port?
+ Is 3306
- Returns nothing
- Allows many queries on one cursor
- Raises an error
! Default MySQL port is 3306.
? Which installs the connector package?
- Sqlite3
- Int column
- Default MySQL port
+ Pip
! Pip installs the connector package.
? Which statement is true of Pip?
+ Installs the connector package
- Should not be hard coded
- Is built into Python
- Releases the cursor
! Pip installs the connector package.
? Which represents the database session?
- Wrong password
+ Connection object
- Pip
- Autocommit
! Connection object represents the database session.
? Which statement is true of Connection object?
- Loops over fetched rows
- Is 3306
+ Represents the database session
- Raises an error
! Connection object represents the database session.
? Which saves each statement automatically when enabled?
- Update marks
- Table creation
+ Autocommit
- Display records
! Autocommit saves each statement automatically when enabled.
? Which statement is true of Autocommit?
- Raises a database error
- Maps to the SQL DATE type
- Is built into Python
+ Saves each statement automatically when enabled
! Autocommit saves each statement automatically when enabled.
? Which is a group of statements treated as one unit?
- Sqlite3 connect
- Sqlite3
+ Transaction
- Update marks
! Transaction is a group of statements treated as one unit.
? Which statement is true of Transaction?
- Uses a where clause with a placeholder
- Means the same machine
- Raises a database error
+ Is a group of statements treated as one unit
! Transaction is a group of statements treated as one unit.
? Which restores the previous state?
- Missing table
- Table creation
+ Rollback after error
- Transaction
! Rollback after error restores the previous state.
? Which statement is true of Rollback after error?
- Uses DELETE with a where clause
- Represents the database session
+ Restores the previous state
- Is 3306
! Rollback after error restores the previous state.
? Which uses a where clause with a placeholder?
- Environment variable
- Connection object
+ Search by key
- Cursor reuse
! Search by key uses a where clause with a placeholder.
? Which statement is true of Search by key?
- Is the set of rows returned by a query
+ Uses a where clause with a placeholder
- Loops over fetched rows
- Maps to a Python string
! Search by key uses a where clause with a placeholder.
? Which loops over fetched rows?
+ Display records
- Missing table
- Sqlite3 connect
- Python datetime date
! Display records loops over fetched rows.
? Which statement is true of Display records?
- Maps to a Python int
- Raises an error
+ Loops over fetched rows
- Allows many queries on one cursor
! Display records loops over fetched rows.
? Which can be run through execute?
+ Table creation
- Wrong password
- Localhost
- Varchar
! Table creation can be run through execute.
? Which statement is true of Table creation?
- Saves each statement automatically when enabled
+ Can be run through execute
- Closes the cursor before the connection
- Can store credentials safely
! Table creation can be run through execute.
? Which returns rows as dictionaries?
- Int column
+ Dictionary cursor
- Delete record
- Display records
! Dictionary cursor returns rows as dictionaries.
? Which statement is true of Dictionary cursor?
- Means the same machine
+ Returns rows as dictionaries
- Maps to a Python string
- Is 3306
! Dictionary cursor returns rows as dictionaries.
? Which is the set of rows returned by a query?
+ Result set
- Sqlite3 connect
- Update marks
- Rollback after error
! Result set is the set of rows returned by a query.
? Which statement is true of Result set?
+ Is the set of rows returned by a query
- Maps to a Python string
- Returns nothing
- Is a group of statements treated as one unit
! Result set is the set of rows returned by a query.
? Which returns nothing?
- Environment variable
- Wrong password
- Pip
+ Fetch after insert
! Fetch after insert returns nothing.
? Which statement is true of Fetch after insert?
- Uses DELETE with a where clause
- Installs the connector package
- Raises a programming error
+ Returns nothing
! Fetch after insert returns nothing.
? Which allows many queries on one cursor?
- Connection failure
- Cursor close
+ Cursor reuse
- Varchar
! Cursor reuse allows many queries on one cursor.
? Which statement is true of Cursor reuse?
- Maps to the SQL DATE type
+ Allows many queries on one cursor
- Is built into Python
- Is 3306
! Cursor reuse allows many queries on one cursor.
? Which closes the cursor before the connection?
- Wrong password
+ Closing order
- Pip
- Int column
! Closing order closes the cursor before the connection.
? Which statement is true of Closing order?
- Is 3306
- Returns nothing
+ Closes the cursor before the connection
- Can be run through execute
! Closing order closes the cursor before the connection.
? Which uses UPDATE with a where clause?
- Python datetime date
- Wrong password
- Password in code
+ Update marks
! Update marks uses UPDATE with a where clause.
? Which statement is true of Update marks?
- Allows many queries on one cursor
- Frees database resources
+ Uses UPDATE with a where clause
- Should not be hard coded
! Update marks uses UPDATE with a where clause.
? Which uses DELETE with a where clause?
- Cursor close
- Rollback after error
+ Delete record
- Missing table
! Delete record uses DELETE with a where clause.
? Which statement is true of Delete record?
- Uses a where clause with a placeholder
+ Uses DELETE with a where clause
- Is 3306
- Is a group of statements treated as one unit
! Delete record uses DELETE with a where clause.
? Which raises an error?
+ Connection failure
- Cursor close
- Default MySQL port
- Transaction
! Connection failure raises an error.
? Which statement is true of Connection failure?
- Can be run through execute
+ Raises an error
- Can store credentials safely
- Allows many queries on one cursor
! Connection failure raises an error.
? Which raises a database error?
+ Wrong password
- Update marks
- Rollback after error
- Int column
! Wrong password raises a database error.
? Which statement is true of Wrong password?
- Can store credentials safely
- Raises a programming error
- Opens a database file
+ Raises a database error
! Wrong password raises a database error.
? Which raises a programming error?
- Cursor reuse
+ Missing table
- Default MySQL port
- Wrong password
! Missing table raises a programming error.
? Which statement is true of Missing table?
- Raises a database error
+ Raises a programming error
- Represents the database session
- Loops over fetched rows
! Missing table raises a programming error.
? Save changes
- fetch
- close
+ commit
- execute
! Method.
? All rows
- fetchone
- rowcount
+ fetchall
- close
! Method.
? Placeholder
- ?
+ %s
- #
- &
! Symbol.
? Run SQL
- commit
+ execute
- connect
- cursor
! Method.
? Undo
- commit
- close
- fetch
+ rollback
! Method.
? Built in
- mysql
- oracle
- pymongo
+ sqlite3
! Module.
@visual
flow | Connectivity | Import; Connect; Cursor; Execute; Fetch or commit; Close
blocks | Fetch methods | fetchone; fetchmany; fetchall; rowcount
compare | fetchone and fetchall | fetchone=Single row~Tuple; fetchall=All rows~List
mind | Connectivity | Connect; Execute; Fetch; Close
steps | Insert | Connect; Execute insert; Commit; Close
@problems
## Moderate
P: Why is commit() needed?
A: It saves INSERT, UPDATE and DELETE changes permanently in the database.
R: 3 | Save
R: 3 | Permanent
## High
P: How does a parameterised query prevent SQL injection?
A: Placeholders keep the data separate from the SQL text and the driver escapes values so input cannot change the query.
R: 2 | Placeholders
R: 2 | Separate
R: 2 | Escaping
R: 2 | Injection
## Advanced
P: Write code to display all rows of student.
A: Connect, create cursor, execute SELECT * FROM student, loop over fetchall() printing each row, then close.
R: 2 | Connect
R: 2 | Execute
R: 2 | Fetch loop
R: 2 | Close
