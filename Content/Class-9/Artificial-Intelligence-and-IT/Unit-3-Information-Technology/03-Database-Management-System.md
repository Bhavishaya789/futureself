# Database management system
minutes: 35
yt: class 9 database management system
@study
A database is an organised collection of related data. A DBMS (Database Management System) such as LibreOffice Base, MySQL or MS Access creates, stores, retrieves and protects the data. A table has fields (columns) and records (rows). A primary key uniquely identifies each record. Objects in a database: tables, forms (enter data), queries (ask questions), and reports (print results). Data types include text, integer, decimal, date and Yes/No.
## Deep dive: data, database and DBMS
Data is raw facts; information is processed data. A database stores data in an organised way so it can be found easily (a school database holds student, class and marks data). A DBMS is the software that manages it: it creates tables, stores and updates data, searches it quickly, controls access, avoids duplication and protects it from loss. Examples: MySQL, Oracle, MS Access, LibreOffice Base, PostgreSQL. A file system keeps separate files with repeated data; a DBMS reduces redundancy and keeps data consistent.
## Deep dive: tables, fields, records and keys
A table is a grid. Each column is a field (attribute) such as RollNo, Name or Marks; each row is a record (tuple). A relational database links tables through common fields. A primary key is a field whose value is unique and never empty for every record (RollNo, Aadhaar number). A foreign key is a field that refers to the primary key of another table. Data types: Text (VARCHAR), Integer, Decimal, Date and Boolean (Yes/No). Field size and format limit what can be entered.
## Deep dive: forms, queries and reports
A form is a friendly screen for entering and viewing one record at a time. A query asks a question of the data, for example students with marks above 80, and shows the matching records; it can sort and filter. A report presents selected data in a neat printable format with titles, groups and totals. These objects work on the same stored tables, so changes in a table show everywhere.
## Deep dive: advantages and care of a database
Advantages: less duplication, accurate and consistent data, fast searching, data sharing, security and easy backup. Examples of use: bank accounts, railway reservation, library records, hospital patient records, online shopping and school results. Good practice: choose meaningful field names, pick correct data types, always set a primary key, enter data carefully, keep backups and protect with passwords. A database administrator (DBA) looks after the system.
## Hindi saransh
Database = jude hue data ka sangrah. Table me field (column) aur record (row) hote hain.
> Field = column, record = row, primary key = unique identity.
@formulas
## Terms
Table | rows and columns of data | 
Field | one column | 
Record | one row | 
Primary key | unique field of a table | 
Data values | fields x records | 
## Objects
Table | stores data | 
Form | enters data | 
Query | asks a question | 
Report | prints results | 

@qa
Q: What is meant by Data?
A: Raw facts and figures.
Q: What is meant by Information?
A: Data that has been processed to give meaning.
Q: What is meant by Database?
A: An organised collection of related data.
Q: What is meant by DBMS?
A: Software that creates, stores, retrieves and protects a database.
Q: What is meant by Table?
A: A grid of rows and columns that stores data.
Q: What is meant by Field?
A: A column in a table that stores one kind of data.
Q: What is meant by Record?
A: A row in a table that holds all data about one item.
Q: What is meant by Primary key?
A: A field that uniquely identifies each record.
Q: What is meant by Foreign key?
A: A field that refers to the primary key of another table.
Q: What is meant by Relational database?
A: A database in which tables are linked through common fields.
Q: What is meant by Data type?
A: The kind of value a field can hold.
Q: What is meant by Text field?
A: A field that stores letters, digits and symbols as text.
Q: What is meant by Integer field?
A: A field that stores whole numbers.
Q: What is meant by Decimal field?
A: A field that stores numbers with a fractional part.
Q: What is meant by Date field?
A: A field that stores dates.
Q: What is meant by Boolean field?
A: A field that stores Yes or No.
Q: What is meant by Form?
A: A screen used to enter and view records one at a time.
Q: What is meant by Query?
A: A request to find records that match a condition.
Q: What is meant by Report?
A: A formatted printout of selected data.
Q: What is meant by Redundancy?
A: Unnecessary repetition of the same data.
Q: What is meant by Data integrity?
A: The accuracy and consistency of data.
Q: What is meant by Data security?
A: Protecting data from unauthorised access.
Q: What is meant by Backup?
A: A copy of the database kept for safety.
Q: What is meant by Database administrator?
A: The person who manages and protects the database.
Q: What is meant by Entity?
A: A thing about which data is stored, such as a student.
Q: What is meant by Attribute?
A: A property of an entity, shown as a field.
Q: What is meant by Tuple?
A: Another name for a record.
Q: What is meant by Relation?
A: Another name for a table.
Q: What is meant by Sorting?
A: Arranging records in ascending or descending order.
Q: What is meant by Filtering?
A: Showing only the records that meet a condition.
Q: What is meant by Searching?
A: Looking for a particular record in a table.
Q: What is meant by Field name?
A: The heading that names a column in a table.
Q: What is meant by Field size?
A: The maximum number of characters a field can hold.
Q: What is meant by Null value?
A: An empty value in a field.
Q: What is meant by Unique?
A: A value that appears only once in a field.
Q: What is meant by Auto number?
A: A field that automatically gives increasing numbers.
Q: What is meant by Primary table?
A: The table that holds the primary key.
Q: What is meant by Relationship?
A: A link between two tables.
Q: What is meant by One-to-many relationship?
A: One record of a table is linked to many records of another.
Q: What is meant by SQL?
A: A language used to work with relational databases.
Q: What is meant by SELECT?
A: The SQL command used to retrieve data.
Q: What is meant by MySQL?
A: A popular open-source DBMS.
Q: What is meant by LibreOffice Base?
A: The database program of the LibreOffice suite.
Q: What is meant by MS Access?
A: The database program from Microsoft.
Q: What is meant by Data entry?
A: Typing data into a database.
Q: What is meant by Query result?
A: The records that a query returns.
Q: What is meant by Index?
A: A structure that helps find records faster.
Q: What is meant by Validation rule?
A: A rule that checks the data entered in a field.
Q: What is meant by Report wizard?
A: A tool that guides you in making a report.
Q: What is meant by Input mask?
A: A pattern that controls how data is typed in a field.
Q: Which term is described as: raw facts and figures?
A: Data.
Q: Which term is described as: data that has been processed to give meaning?
A: Information.
Q: Which term is described as: an organised collection of related data?
A: Database.
Q: Which term is described as: software that creates, stores, retrieves and protects a database?
A: DBMS.
Q: Which term is described as: a grid of rows and columns that stores data?
A: Table.
Q: Which term is described as: a column in a table that stores one kind of data?
A: Field.
Q: Which term is described as: a row in a table that holds all data about one item?
A: Record.
Q: Which term is described as: a field that uniquely identifies each record?
A: Primary key.
Q: Which term is described as: a field that refers to the primary key of another table?
A: Foreign key.
Q: Which term is described as: a database in which tables are linked through common fields?
A: Relational database.
Q: Which term is described as: the kind of value a field can hold?
A: Data type.
Q: Which term is described as: a field that stores letters, digits and symbols as text?
A: Text field.
Q: Which term is described as: a field that stores whole numbers?
A: Integer field.
Q: Which term is described as: a field that stores numbers with a fractional part?
A: Decimal field.
Q: Which term is described as: a field that stores dates?
A: Date field.
Q: Which term is described as: a field that stores Yes or No?
A: Boolean field.
Q: Which term is described as: a screen used to enter and view records one at a time?
A: Form.
Q: Which term is described as: a request to find records that match a condition?
A: Query.
Q: Which term is described as: a formatted printout of selected data?
A: Report.
Q: Which term is described as: unnecessary repetition of the same data?
A: Redundancy.
Q: Which term is described as: the accuracy and consistency of data?
A: Data integrity.
Q: Which term is described as: protecting data from unauthorised access?
A: Data security.
Q: Which term is described as: a copy of the database kept for safety?
A: Backup.
Q: Which term is described as: the person who manages and protects the database?
A: Database administrator.
Q: Which term is described as: a thing about which data is stored, such as a student?
A: Entity.
Q: Which term is described as: a property of an entity, shown as a field?
A: Attribute.
Q: Which term is described as: another name for a record?
A: Tuple.
Q: Which term is described as: another name for a table?
A: Relation.
Q: Which term is described as: arranging records in ascending or descending order?
A: Sorting.
Q: Which term is described as: showing only the records that meet a condition?
A: Filtering.
Q: Which term is described as: looking for a particular record in a table?
A: Searching.
Q: Which term is described as: the heading that names a column in a table?
A: Field name.
Q: Which term is described as: the maximum number of characters a field can hold?
A: Field size.
Q: Which term is described as: an empty value in a field?
A: Null value.
Q: Which term is described as: a value that appears only once in a field?
A: Unique.
Q: Which term is described as: a field that automatically gives increasing numbers?
A: Auto number.
Q: Which term is described as: the table that holds the primary key?
A: Primary table.
Q: Which term is described as: a link between two tables?
A: Relationship.
Q: Which term is described as: one record of a table is linked to many records of another?
A: One-to-many relationship.
Q: Which term is described as: a language used to work with relational databases?
A: SQL.
Q: Which term is described as: the SQL command used to retrieve data?
A: SELECT.
Q: Which term is described as: a popular open-source DBMS?
A: MySQL.
Q: Which term is described as: the database program of the LibreOffice suite?
A: LibreOffice Base.
Q: Which term is described as: the database program from Microsoft?
A: MS Access.
Q: Which term is described as: typing data into a database?
A: Data entry.
Q: Which term is described as: the records that a query returns?
A: Query result.
Q: Which term is described as: a structure that helps find records faster?
A: Index.
Q: Which term is described as: a rule that checks the data entered in a field?
A: Validation rule.
Q: Which term is described as: a tool that guides you in making a report?
A: Report wizard.
Q: Which term is described as: a pattern that controls how data is typed in a field?
A: Input mask.
Q: What is a row in a table called?
A: A record.
Q: What is a column in a table called?
A: A field.
Q: What does DBMS stand for?
A: Database Management System.
Q: Name two DBMS software.
A: MySQL and MS Access.
Q: Which key identifies each record uniquely?
A: The primary key.
Q: Can a primary key have duplicate values?
A: No.
Q: Which object is used to enter data easily?
A: A form.
Q: Which object is used to ask questions about data?
A: A query.
Q: Which object is used to print data neatly?
A: A report.
Q: Which data type would you use for a name?
A: Text.
Q: Which data type would you use for a date of birth?
A: Date.
Q: Which data type stores Yes or No?
A: Boolean.
Q: What does SQL stand for?
A: Structured Query Language.
Q: Which SQL command retrieves data?
A: SELECT.
Q: Give two uses of databases.
A: Bank accounts and library records.
Q: Why is a DBMS better than separate files?
A: It reduces repeated data and keeps data consistent.
Q: What is the benefit of a primary key?
A: It identifies a record without confusion.
Q: Who looks after a database?
A: The database administrator.
Q: Why should we back up a database?
A: To avoid losing data.
Q: What is the file extension of a LibreOffice Base file?
A: .odb
Q: A table has 5 fields and 30 records. How many data values does it hold?
A: 15.
Q: A table has 4 fields and 25 records. How many data values does it hold?
A: 1.
Q: A table has 6 fields and 20 records. How many data values does it hold?
A: 12.
Q: A table has 3 fields and 50 records. How many data values does it hold?
A: 15.
Q: A table has 8 fields and 15 records. How many data values does it hold?
A: 12.
Q: A table has 7 fields and 12 records. How many data values does it hold?
A: 84.
Q: A table has 10 fields and 10 records. How many data values does it hold?
A: 1.
Q: A table has 4 fields and 100 records. How many data values does it hold?
A: 4.
Q: A table has 6 fields and 45 records. How many data values does it hold?
A: 27.
Q: A table has 9 fields and 20 records. How many data values does it hold?
A: 18.
Q: A school database has 40 records in the Students table. How many primary key values are needed?
A: 4.
Q: A school database has 25 records in the Students table. How many primary key values are needed?
A: 25.
Q: A school database has 60 records in the Students table. How many primary key values are needed?
A: 6.
Q: A school database has 18 records in the Students table. How many primary key values are needed?
A: 18.
Q: A school database has 32 records in the Students table. How many primary key values are needed?
A: 32.
@quiz
? What is meant by Data?
- The table that holds the primary key
+ Raw facts and figures
- An organised collection of related data
- Typing data into a database
! From the CBSE Class 9 syllabus.
? What is meant by Information?
- The database program from Microsoft
+ Data that has been processed to give meaning
- The kind of value a field can hold
- The SQL command used to retrieve data
! From the CBSE Class 9 syllabus.
? What is meant by Database?
- A field that stores whole numbers
+ An organised collection of related data
- A popular open-source DBMS
- The person who manages and protects the database
! From the CBSE Class 9 syllabus.
? What is meant by DBMS?
- A field that stores letters, digits and symbols as text
- A property of an entity, shown as a field
- A field that stores dates
+ Software that creates, stores, retrieves and protects a database
! From the CBSE Class 9 syllabus.
? What is meant by Table?
- A structure that helps find records faster
+ A grid of rows and columns that stores data
- A value that appears only once in a field
- A thing about which data is stored, such as a student
! From the CBSE Class 9 syllabus.
? What is meant by Field?
+ A column in a table that stores one kind of data
- A language used to work with relational databases
- A thing about which data is stored, such as a student
- The database program of the LibreOffice suite
! From the CBSE Class 9 syllabus.
? What is meant by Record?
- Looking for a particular record in a table
- A field that stores dates
+ A row in a table that holds all data about one item
- A request to find records that match a condition
! From the CBSE Class 9 syllabus.
? What is meant by Primary key?
- The database program from Microsoft
+ A field that uniquely identifies each record
- A field that stores letters, digits and symbols as text
- Software that creates, stores, retrieves and protects a database
! From the CBSE Class 9 syllabus.
? What is meant by Foreign key?
+ A field that refers to the primary key of another table
- A column in a table that stores one kind of data
- A field that automatically gives increasing numbers
- Showing only the records that meet a condition
! From the CBSE Class 9 syllabus.
? What is meant by Relational database?
+ A database in which tables are linked through common fields
- A tool that guides you in making a report
- Another name for a table
- A grid of rows and columns that stores data
! From the CBSE Class 9 syllabus.
? What is meant by Data type?
+ The kind of value a field can hold
- A value that appears only once in a field
- A popular open-source DBMS
- Typing data into a database
! From the CBSE Class 9 syllabus.
? What is meant by Text field?
+ A field that stores letters, digits and symbols as text
- An empty value in a field
- A field that stores whole numbers
- A grid of rows and columns that stores data
! From the CBSE Class 9 syllabus.
? What is meant by Integer field?
- A screen used to enter and view records one at a time
- A pattern that controls how data is typed in a field
+ A field that stores whole numbers
- A field that stores dates
! From the CBSE Class 9 syllabus.
? What is meant by Decimal field?
- Another name for a record
- A rule that checks the data entered in a field
- A screen used to enter and view records one at a time
+ A field that stores numbers with a fractional part
! From the CBSE Class 9 syllabus.
? What is meant by Date field?
- Arranging records in ascending or descending order
- Protecting data from unauthorised access
+ A field that stores dates
- Data that has been processed to give meaning
! From the CBSE Class 9 syllabus.
? What is meant by Boolean field?
- Software that creates, stores, retrieves and protects a database
- A popular open-source DBMS
+ A field that stores Yes or No
- Showing only the records that meet a condition
! From the CBSE Class 9 syllabus.
? What is meant by Form?
- Arranging records in ascending or descending order
- A tool that guides you in making a report
- The database program of the LibreOffice suite
+ A screen used to enter and view records one at a time
! From the CBSE Class 9 syllabus.
? What is meant by Query?
- The database program of the LibreOffice suite
+ A request to find records that match a condition
- Another name for a record
- Typing data into a database
! From the CBSE Class 9 syllabus.
? What is meant by Report?
+ A formatted printout of selected data
- The heading that names a column in a table
- A copy of the database kept for safety
- A request to find records that match a condition
! From the CBSE Class 9 syllabus.
? What is meant by Redundancy?
+ Unnecessary repetition of the same data
- A structure that helps find records faster
- A link between two tables
- Looking for a particular record in a table
! From the CBSE Class 9 syllabus.
? What is meant by Data integrity?
- A structure that helps find records faster
- Typing data into a database
+ The accuracy and consistency of data
- The person who manages and protects the database
! From the CBSE Class 9 syllabus.
? What is meant by Data security?
- Another name for a table
- A language used to work with relational databases
+ Protecting data from unauthorised access
- Software that creates, stores, retrieves and protects a database
! From the CBSE Class 9 syllabus.
? What is meant by Backup?
- The database program of the LibreOffice suite
- Another name for a record
- A field that stores Yes or No
+ A copy of the database kept for safety
! From the CBSE Class 9 syllabus.
? What is meant by Database administrator?
+ The person who manages and protects the database
- A grid of rows and columns that stores data
- The database program of the LibreOffice suite
- A tool that guides you in making a report
! From the CBSE Class 9 syllabus.
? What is meant by Entity?
- A field that automatically gives increasing numbers
- The table that holds the primary key
- A field that stores Yes or No
+ A thing about which data is stored, such as a student
! From the CBSE Class 9 syllabus.
? What is meant by Attribute?
- A field that stores dates
- Data that has been processed to give meaning
+ A property of an entity, shown as a field
- Another name for a table
! From the CBSE Class 9 syllabus.
? What is meant by Tuple?
- A field that stores Yes or No
- Raw facts and figures
- A link between two tables
+ Another name for a record
! From the CBSE Class 9 syllabus.
? What is meant by Relation?
- A pattern that controls how data is typed in a field
- A field that automatically gives increasing numbers
- A property of an entity, shown as a field
+ Another name for a table
! From the CBSE Class 9 syllabus.
? What is meant by Sorting?
- Another name for a table
- The person who manages and protects the database
- A rule that checks the data entered in a field
+ Arranging records in ascending or descending order
! From the CBSE Class 9 syllabus.
? What is meant by Filtering?
- The heading that names a column in a table
- A field that uniquely identifies each record
+ Showing only the records that meet a condition
- A field that stores whole numbers
! From the CBSE Class 9 syllabus.
? What is meant by Searching?
- A database in which tables are linked through common fields
+ Looking for a particular record in a table
- The person who manages and protects the database
- A row in a table that holds all data about one item
! From the CBSE Class 9 syllabus.
? What is meant by Field name?
- A grid of rows and columns that stores data
- A formatted printout of selected data
+ The heading that names a column in a table
- A field that stores letters, digits and symbols as text
! From the CBSE Class 9 syllabus.
? What is meant by Field size?
- A formatted printout of selected data
- A thing about which data is stored, such as a student
+ The maximum number of characters a field can hold
- Data that has been processed to give meaning
! From the CBSE Class 9 syllabus.
? What is meant by Null value?
- A value that appears only once in a field
- A thing about which data is stored, such as a student
- Software that creates, stores, retrieves and protects a database
+ An empty value in a field
! From the CBSE Class 9 syllabus.
? What is meant by Unique?
- A field that automatically gives increasing numbers
- A request to find records that match a condition
+ A value that appears only once in a field
- A copy of the database kept for safety
! From the CBSE Class 9 syllabus.
? What is meant by Auto number?
- Arranging records in ascending or descending order
- A field that stores dates
- Another name for a record
+ A field that automatically gives increasing numbers
! From the CBSE Class 9 syllabus.
? What is meant by Primary table?
+ The table that holds the primary key
- A copy of the database kept for safety
- One record of a table is linked to many records of another
- The database program of the LibreOffice suite
! From the CBSE Class 9 syllabus.
? What is meant by Relationship?
- The database program from Microsoft
+ A link between two tables
- The kind of value a field can hold
- A request to find records that match a condition
! From the CBSE Class 9 syllabus.
? What is meant by One-to-many relationship?
+ One record of a table is linked to many records of another
- A property of an entity, shown as a field
- The database program from Microsoft
- A request to find records that match a condition
! From the CBSE Class 9 syllabus.
? What is meant by SQL?
+ A language used to work with relational databases
- A link between two tables
- Another name for a table
- Typing data into a database
! From the CBSE Class 9 syllabus.
? What is meant by SELECT?
- An organised collection of related data
+ The SQL command used to retrieve data
- One record of a table is linked to many records of another
- A field that stores letters, digits and symbols as text
! From the CBSE Class 9 syllabus.
? What is meant by MySQL?
+ A popular open-source DBMS
- A rule that checks the data entered in a field
- Software that creates, stores, retrieves and protects a database
- Protecting data from unauthorised access
! From the CBSE Class 9 syllabus.
? What is meant by LibreOffice Base?
- An empty value in a field
- A value that appears only once in a field
+ The database program of the LibreOffice suite
- A link between two tables
! From the CBSE Class 9 syllabus.
? What is meant by MS Access?
- The database program of the LibreOffice suite
- Typing data into a database
+ The database program from Microsoft
- An organised collection of related data
! From the CBSE Class 9 syllabus.
? What is meant by Data entry?
- The person who manages and protects the database
- A field that automatically gives increasing numbers
+ Typing data into a database
- An organised collection of related data
! From the CBSE Class 9 syllabus.
? What is meant by Query result?
- Unnecessary repetition of the same data
- A database in which tables are linked through common fields
+ The records that a query returns
- A pattern that controls how data is typed in a field
! From the CBSE Class 9 syllabus.
? What is meant by Index?
- One record of a table is linked to many records of another
- A rule that checks the data entered in a field
+ A structure that helps find records faster
- Raw facts and figures
! From the CBSE Class 9 syllabus.
? What is meant by Validation rule?
- A popular open-source DBMS
- The kind of value a field can hold
- The table that holds the primary key
+ A rule that checks the data entered in a field
! From the CBSE Class 9 syllabus.
? What is meant by Report wizard?
- The database program from Microsoft
- The accuracy and consistency of data
+ A tool that guides you in making a report
- A value that appears only once in a field
! From the CBSE Class 9 syllabus.
? What is meant by Input mask?
+ A pattern that controls how data is typed in a field
- A field that stores letters, digits and symbols as text
- A formatted printout of selected data
- Arranging records in ascending or descending order
! From the CBSE Class 9 syllabus.
? Which term is described as: raw facts and figures?
- Decimal field
+ Data
- Relational database
- Unique
! From the CBSE Class 9 syllabus.
? Which term is described as: data that has been processed to give meaning?
- Field name
+ Information
- Decimal field
- Relationship
! From the CBSE Class 9 syllabus.
? Which term is described as: an organised collection of related data?
+ Database
- Field size
- Record
- One-to-many relationship
! From the CBSE Class 9 syllabus.
? Which term is described as: software that creates, stores, retrieves and protects a database?
+ DBMS
- Sorting
- LibreOffice Base
- Auto number
! From the CBSE Class 9 syllabus.
? Which term is described as: a grid of rows and columns that stores data?
+ Table
- Date field
- Input mask
- MS Access
! From the CBSE Class 9 syllabus.
? Which term is described as: a column in a table that stores one kind of data?
- Filtering
- Information
- Backup
+ Field
! From the CBSE Class 9 syllabus.
? Which term is described as: a row in a table that holds all data about one item?
- Null value
- Report wizard
- Primary key
+ Record
! From the CBSE Class 9 syllabus.
? Which term is described as: a field that uniquely identifies each record?
+ Primary key
- MS Access
- Sorting
- Data type
! From the CBSE Class 9 syllabus.
? Which term is described as: a field that refers to the primary key of another table?
- Database
+ Foreign key
- One-to-many relationship
- Entity
! From the CBSE Class 9 syllabus.
? Which term is described as: a database in which tables are linked through common fields?
- Validation rule
+ Relational database
- SQL
- Database
! From the CBSE Class 9 syllabus.
? Which term is described as: the kind of value a field can hold?
- Primary key
- Database administrator
+ Data type
- Relational database
! From the CBSE Class 9 syllabus.
? Which term is described as: a field that stores letters, digits and symbols as text?
+ Text field
- Field size
- Field
- Data
! From the CBSE Class 9 syllabus.
? Which term is described as: a field that stores whole numbers?
- Index
+ Integer field
- MS Access
- Relational database
! From the CBSE Class 9 syllabus.
? Which term is described as: a field that stores numbers with a fractional part?
+ Decimal field
- Tuple
- Unique
- Data security
! From the CBSE Class 9 syllabus.
? Which term is described as: a field that stores dates?
- DBMS
- MS Access
+ Date field
- Redundancy
! From the CBSE Class 9 syllabus.
? Which term is described as: a field that stores Yes or No?
+ Boolean field
- Validation rule
- Field name
- Table
! From the CBSE Class 9 syllabus.
? Which term is described as: a screen used to enter and view records one at a time?
+ Form
- Input mask
- Filtering
- Query
! From the CBSE Class 9 syllabus.
? Which term is described as: a request to find records that match a condition?
- Report wizard
- Database
+ Query
- Index
! From the CBSE Class 9 syllabus.
? Which term is described as: a formatted printout of selected data?
- Form
- MS Access
- Tuple
+ Report
! From the CBSE Class 9 syllabus.
? Which term is described as: unnecessary repetition of the same data?
- Database
+ Redundancy
- Date field
- LibreOffice Base
! From the CBSE Class 9 syllabus.
? Which term is described as: the accuracy and consistency of data?
- Auto number
- Decimal field
+ Data integrity
- Primary table
! From the CBSE Class 9 syllabus.
? Which term is described as: protecting data from unauthorised access?
+ Data security
- Relation
- Entity
- Text field
! From the CBSE Class 9 syllabus.
? Which term is described as: a copy of the database kept for safety?
- Index
+ Backup
- Redundancy
- Primary key
! From the CBSE Class 9 syllabus.
? Which term is described as: the person who manages and protects the database?
- Query
+ Database administrator
- LibreOffice Base
- Tuple
! From the CBSE Class 9 syllabus.
? Which term is described as: a thing about which data is stored, such as a student?
+ Entity
- Relation
- Searching
- Sorting
! From the CBSE Class 9 syllabus.
? Which term is described as: a property of an entity, shown as a field?
+ Attribute
- Database administrator
- Record
- Field size
! From the CBSE Class 9 syllabus.
? Which term is described as: another name for a record?
+ Tuple
- Table
- Foreign key
- Query
! From the CBSE Class 9 syllabus.
? Which term is described as: another name for a table?
- Redundancy
- MS Access
- Primary key
+ Relation
! From the CBSE Class 9 syllabus.
? Which term is described as: arranging records in ascending or descending order?
- Searching
- Table
+ Sorting
- Information
! From the CBSE Class 9 syllabus.
? Which term is described as: showing only the records that meet a condition?
+ Filtering
- SELECT
- Data integrity
- Report
! From the CBSE Class 9 syllabus.
? Which term is described as: looking for a particular record in a table?
- SQL
- Boolean field
+ Searching
- SELECT
! From the CBSE Class 9 syllabus.
? Which term is described as: the heading that names a column in a table?
- Tuple
+ Field name
- Integer field
- Data
! From the CBSE Class 9 syllabus.
? Which term is described as: the maximum number of characters a field can hold?
+ Field size
- Record
- Data integrity
- Data
! From the CBSE Class 9 syllabus.
? Which term is described as: an empty value in a field?
- Record
+ Null value
- Query
- Database
! From the CBSE Class 9 syllabus.
? Which term is described as: a value that appears only once in a field?
- Redundancy
+ Unique
- Primary table
- Form
! From the CBSE Class 9 syllabus.
? Which term is described as: a field that automatically gives increasing numbers?
- Data type
+ Auto number
- Data integrity
- MS Access
! From the CBSE Class 9 syllabus.
? Which term is described as: the table that holds the primary key?
- Decimal field
- Relationship
+ Primary table
- Text field
! From the CBSE Class 9 syllabus.
? Which term is described as: a link between two tables?
- Input mask
- DBMS
- Record
+ Relationship
! From the CBSE Class 9 syllabus.
? Which term is described as: one record of a table is linked to many records of another?
+ One-to-many relationship
- Null value
- Report wizard
- Data integrity
! From the CBSE Class 9 syllabus.
? Which term is described as: a language used to work with relational databases?
- Query
- Integer field
- Validation rule
+ SQL
! From the CBSE Class 9 syllabus.
? Which term is described as: the SQL command used to retrieve data?
- Data entry
- LibreOffice Base
+ SELECT
- Input mask
! From the CBSE Class 9 syllabus.
? Which term is described as: a popular open-source DBMS?
+ MySQL
- Sorting
- Data integrity
- Data type
! From the CBSE Class 9 syllabus.
? Which term is described as: the database program of the LibreOffice suite?
- Information
+ LibreOffice Base
- Report wizard
- Index
! From the CBSE Class 9 syllabus.
? Which term is described as: the database program from Microsoft?
- Text field
- Boolean field
+ MS Access
- Relational database
! From the CBSE Class 9 syllabus.
? Which term is described as: typing data into a database?
- Index
- Primary table
+ Data entry
- Data security
! From the CBSE Class 9 syllabus.
? Which term is described as: the records that a query returns?
- Field size
- MS Access
- Field name
+ Query result
! From the CBSE Class 9 syllabus.
? Which term is described as: a structure that helps find records faster?
- Report wizard
- Database
- Foreign key
+ Index
! From the CBSE Class 9 syllabus.
? Which term is described as: a rule that checks the data entered in a field?
- Field size
+ Validation rule
- MS Access
- Searching
! From the CBSE Class 9 syllabus.
? Which term is described as: a tool that guides you in making a report?
- Primary key
- Record
+ Report wizard
- Unique
! From the CBSE Class 9 syllabus.
? Which term is described as: a pattern that controls how data is typed in a field?
- Query result
- Tuple
- Data integrity
+ Input mask
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Data".
- A grid of rows and columns that stores data
- Unnecessary repetition of the same data
- A field that stores Yes or No
+ Raw facts and figures
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Information".
- A screen used to enter and view records one at a time
- A property of an entity, shown as a field
- Showing only the records that meet a condition
+ Data that has been processed to give meaning
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Database".
- Data that has been processed to give meaning
- Raw facts and figures
+ An organised collection of related data
- The table that holds the primary key
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "DBMS".
+ Software that creates, stores, retrieves and protects a database
- The SQL command used to retrieve data
- Another name for a table
- The database program from Microsoft
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Table".
+ A grid of rows and columns that stores data
- A rule that checks the data entered in a field
- A language used to work with relational databases
- A field that stores letters, digits and symbols as text
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Field".
- A popular open-source DBMS
+ A column in a table that stores one kind of data
- A formatted printout of selected data
- The database program of the LibreOffice suite
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Record".
- A field that automatically gives increasing numbers
+ A row in a table that holds all data about one item
- A field that stores numbers with a fractional part
- The maximum number of characters a field can hold
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Primary key".
- An organised collection of related data
- Typing data into a database
+ A field that uniquely identifies each record
- A copy of the database kept for safety
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Foreign key".
- Data that has been processed to give meaning
- A thing about which data is stored, such as a student
- Arranging records in ascending or descending order
+ A field that refers to the primary key of another table
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Relational database".
- A tool that guides you in making a report
- Unnecessary repetition of the same data
+ A database in which tables are linked through common fields
- Software that creates, stores, retrieves and protects a database
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Data type".
- A value that appears only once in a field
+ The kind of value a field can hold
- A screen used to enter and view records one at a time
- A field that automatically gives increasing numbers
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Text field".
- A column in a table that stores one kind of data
+ A field that stores letters, digits and symbols as text
- A field that uniquely identifies each record
- Another name for a record
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Integer field".
- A field that stores letters, digits and symbols as text
- A property of an entity, shown as a field
- A column in a table that stores one kind of data
+ A field that stores whole numbers
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Decimal field".
- Data that has been processed to give meaning
- A pattern that controls how data is typed in a field
+ A field that stores numbers with a fractional part
- A column in a table that stores one kind of data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Date field".
- A field that uniquely identifies each record
- A field that stores whole numbers
+ A field that stores dates
- A field that refers to the primary key of another table
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Boolean field".
- A screen used to enter and view records one at a time
+ A field that stores Yes or No
- Data that has been processed to give meaning
- Looking for a particular record in a table
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Form".
- A language used to work with relational databases
+ A screen used to enter and view records one at a time
- The maximum number of characters a field can hold
- A structure that helps find records faster
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Query".
- The accuracy and consistency of data
- A formatted printout of selected data
+ A request to find records that match a condition
- An organised collection of related data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Report".
- Typing data into a database
+ A formatted printout of selected data
- An organised collection of related data
- A field that refers to the primary key of another table
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Redundancy".
- The database program of the LibreOffice suite
- Raw facts and figures
+ Unnecessary repetition of the same data
- One record of a table is linked to many records of another
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Data integrity".
- A column in a table that stores one kind of data
+ The accuracy and consistency of data
- A database in which tables are linked through common fields
- Another name for a table
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Data security".
- A popular open-source DBMS
- A field that stores letters, digits and symbols as text
- A field that automatically gives increasing numbers
+ Protecting data from unauthorised access
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Backup".
+ A copy of the database kept for safety
- A formatted printout of selected data
- A row in a table that holds all data about one item
- Arranging records in ascending or descending order
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Database administrator".
- A database in which tables are linked through common fields
- The table that holds the primary key
+ The person who manages and protects the database
- A field that refers to the primary key of another table
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Entity".
+ A thing about which data is stored, such as a student
- A tool that guides you in making a report
- A copy of the database kept for safety
- A link between two tables
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Attribute".
- The database program of the LibreOffice suite
+ A property of an entity, shown as a field
- A row in a table that holds all data about one item
- A request to find records that match a condition
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Tuple".
- Data that has been processed to give meaning
- A property of an entity, shown as a field
- A field that stores letters, digits and symbols as text
+ Another name for a record
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Relation".
- A language used to work with relational databases
- A copy of the database kept for safety
+ Another name for a table
- The maximum number of characters a field can hold
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Sorting".
- One record of a table is linked to many records of another
- A field that stores Yes or No
- A field that stores letters, digits and symbols as text
+ Arranging records in ascending or descending order
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Filtering".
- One record of a table is linked to many records of another
+ Showing only the records that meet a condition
- Unnecessary repetition of the same data
- An organised collection of related data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Searching".
- A field that stores dates
+ Looking for a particular record in a table
- A formatted printout of selected data
- Raw facts and figures
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Field name".
- A value that appears only once in a field
- A field that refers to the primary key of another table
+ The heading that names a column in a table
- A language used to work with relational databases
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Field size".
- Looking for a particular record in a table
+ The maximum number of characters a field can hold
- A language used to work with relational databases
- Software that creates, stores, retrieves and protects a database
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Null value".
+ An empty value in a field
- Data that has been processed to give meaning
- A copy of the database kept for safety
- The records that a query returns
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Unique".
- The table that holds the primary key
- Arranging records in ascending or descending order
+ A value that appears only once in a field
- A field that stores dates
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Auto number".
+ A field that automatically gives increasing numbers
- A field that stores letters, digits and symbols as text
- Looking for a particular record in a table
- A field that stores numbers with a fractional part
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Primary table".
- A grid of rows and columns that stores data
- Another name for a record
+ The table that holds the primary key
- Data that has been processed to give meaning
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Relationship".
- Protecting data from unauthorised access
- Unnecessary repetition of the same data
- Data that has been processed to give meaning
+ A link between two tables
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "One-to-many relationship".
- A field that stores letters, digits and symbols as text
- The table that holds the primary key
+ One record of a table is linked to many records of another
- The SQL command used to retrieve data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "SQL".
- Unnecessary repetition of the same data
- A link between two tables
- A screen used to enter and view records one at a time
+ A language used to work with relational databases
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "SELECT".
+ The SQL command used to retrieve data
- A language used to work with relational databases
- A database in which tables are linked through common fields
- A thing about which data is stored, such as a student
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "MySQL".
+ A popular open-source DBMS
- A column in a table that stores one kind of data
- A value that appears only once in a field
- A field that stores letters, digits and symbols as text
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "LibreOffice Base".
+ The database program of the LibreOffice suite
- A grid of rows and columns that stores data
- Data that has been processed to give meaning
- The kind of value a field can hold
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "MS Access".
- Looking for a particular record in a table
+ The database program from Microsoft
- A structure that helps find records faster
- The kind of value a field can hold
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Data entry".
- A field that stores Yes or No
- An empty value in a field
- Another name for a table
+ Typing data into a database
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Query result".
- A field that stores dates
- An empty value in a field
- The kind of value a field can hold
+ The records that a query returns
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Index".
- Unnecessary repetition of the same data
+ A structure that helps find records faster
- A field that stores dates
- One record of a table is linked to many records of another
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Validation rule".
- The SQL command used to retrieve data
+ A rule that checks the data entered in a field
- A property of an entity, shown as a field
- The database program from Microsoft
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Report wizard".
- A copy of the database kept for safety
- A field that automatically gives increasing numbers
- A field that stores numbers with a fractional part
+ A tool that guides you in making a report
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Input mask".
+ A pattern that controls how data is typed in a field
- A screen used to enter and view records one at a time
- An organised collection of related data
- A value that appears only once in a field
! From the CBSE Class 9 syllabus.
? A table has 5 fields and 30 records. How many data values does it hold?
- 135
- 12
- 75
+ 15
! Fields x records.
? A table has 4 fields and 25 records. How many data values does it hold?
- 9
- 11
- 2
+ 1
! Fields x records.
? A table has 6 fields and 20 records. How many data values does it hold?
- 132
- 24
+ 12
- 108
! Fields x records.
? A table has 3 fields and 50 records. How many data values does it hold?
- 165
- 12
+ 15
- 135
! Fields x records.
? A table has 8 fields and 15 records. How many data values does it hold?
+ 12
- 96
- 108
- 132
! Fields x records.
? A table has 7 fields and 12 records. How many data values does it hold?
- 105
- 168
+ 84
- 42
! Fields x records.
? A table has 10 fields and 10 records. How many data values does it hold?
+ 1
- 3
- 9
- 11
! Fields x records.
? A table has 4 fields and 100 records. How many data values does it hold?
- 5
- 44
- 2
+ 4
! Fields x records.
? A table has 6 fields and 45 records. How many data values does it hold?
- 135
- 54
- 81
+ 27
! Fields x records.
? A table has 9 fields and 20 records. How many data values does it hold?
+ 18
- 9
- 144
- 198
! Fields x records.
? A school database has 40 records in the Students table. How many primary key values are needed?
- 12
- 32
- 44
+ 4
! One unique key per record.
? A school database has 25 records in the Students table. How many primary key values are needed?
- 75
+ 25
- 2
- 5
! One unique key per record.
? A school database has 60 records in the Students table. How many primary key values are needed?
- 66
- 48
+ 6
- 75
! One unique key per record.
? A school database has 18 records in the Students table. How many primary key values are needed?
- 9
- 22
+ 18
- 54
! One unique key per record.
? A school database has 32 records in the Students table. How many primary key values are needed?
- 29
- 26
+ 32
- 16
! One unique key per record.
@visual
layers | Database objects | Reports; Queries; Forms; Tables
steps | Creating a database | Plan the tables and fields; Create the table; Set the primary key; Enter records using a form; Run queries; Print a report
compare | Field and record | Field=A column~Stores one kind of data~Example: Name; Record=A row~Stores all data of one item~Example: One student
@problems
P: A table has 5 fields and 30 records. How many data values does it store?
A: 5 x 30 = 150 values.
R: 1 | Multiply fields by records
R: 1 | 150
