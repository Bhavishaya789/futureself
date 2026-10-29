# What is a DBMS and why do we need one?
minutes: 25
yt: what is DBMS database management system introduction
yt: DBMS vs file system advantages
@study
A **database** is an organised collection of related data. A **Database Management System (DBMS)** is the software that lets many users and programs create, store, query and protect that data. Examples: MySQL, PostgreSQL, Oracle, SQL Server, SQLite, MongoDB. A **database system** is the whole package: the data, the DBMS software, and the applications that use them.

## File system versus DBMS
Before DBMSs, every application kept its own files. This caused well-known problems:
- **Data redundancy and inconsistency:** the same student address is copied into the library file, the hostel file and the exam file, and the copies drift apart.
- **Difficulty in accessing data:** a new question ("students with CGPA above 8 who live in hostel B") needs a new program to be written.
- **Data isolation:** data is scattered across files in different formats.
- **Integrity problems:** rules such as "balance must never be negative" are buried in application code and are easy to break.
- **Atomicity problems:** if the system crashes halfway through a bank transfer, one account is debited and the other is not credited.
- **Concurrent-access anomalies:** two users updating the same record at the same time can overwrite each other.
- **Security problems:** it is hard to say "this clerk may read but not change salaries".

## What a DBMS provides
- **Data independence** (the application is shielded from how data is physically stored).
- **Efficient access** through indexes and query optimisation.
- **Integrity constraints** enforced centrally.
- **Transactions** with ACID guarantees, giving atomicity and crash recovery.
- **Concurrency control** so many users can work safely together.
- **Security and authorisation** by user, role and object.
- **Backup and recovery.**

## Components of a DBMS
- **DDL (Data Definition Language)** defines schemas: `CREATE`, `ALTER`, `DROP`.
- **DML (Data Manipulation Language)** queries and modifies data: `SELECT`, `INSERT`, `UPDATE`, `DELETE`.
- **Query processor:** parser, optimiser and executor that turn SQL into an efficient plan.
- **Storage manager:** buffer manager, file manager, transaction manager.
- **Data dictionary (catalogue):** data about data, called **metadata**.

## People who work with a DBMS
Database administrator (DBA), database designers, application programmers, and end users (naive users, sophisticated users such as analysts).

## Disadvantages
A DBMS costs money, needs trained staff, adds overhead for very simple jobs, and a failure can affect many applications at once. For a tiny single-user task, plain files may still be the better choice.

> A DBMS is not the data itself. The DBMS is the software; the database is the data it manages.
@qa
Q: What is the difference between a database and a DBMS?
A: A database is the organised collection of data. A DBMS is the software that creates, stores, queries and protects that data. MySQL is a DBMS; the tables you create inside it are the database.
Q: Why is data redundancy a problem in file systems?
A: The same fact is stored in many places, so it wastes space and, worse, the copies can become inconsistent when only some of them are updated.
Q: What is metadata?
A: Data about data: table names, column types, constraints, indexes and users. It is kept in the data dictionary (system catalogue).
Q: Name two jobs a DBMS does that a file system does not.
A: Enforcing integrity constraints centrally and guaranteeing atomic, isolated transactions with crash recovery. Concurrency control and fine-grained security are other correct answers.
Q: Is a DBMS always better than files?
A: No. For a very small, single-user, short-lived task the cost and overhead of a DBMS is not justified.
@quiz
? Which problem is a direct result of storing the same data in many separate files?
- Slower CPU
+ Data redundancy and inconsistency
- Lack of keyboards
- Automatic encryption
! Copies of the same data in different files can disagree after updates, which is inconsistency.
? Data about data (table names, column types, constraints) is called
+ metadata
- a transaction
- a tuple
- a cursor
! Metadata is stored in the data dictionary or system catalogue.
? Which one is a DDL command?
- SELECT
- UPDATE
+ CREATE
- INSERT
! DDL defines structure: CREATE, ALTER, DROP. SELECT, UPDATE and INSERT are DML.
? A bank transfer crashes after debiting one account but before crediting the other. Which DBMS feature prevents a half-finished transfer?
+ Atomic transactions with recovery
- Indexing
- Data dictionary
- Views
! Atomicity means the transfer happens completely or not at all, and recovery undoes the partial work.
? The software that manages the database is called
- Schema
+ DBMS
- Relation
- Attribute
! The DBMS is the software. The schema is the structure and a relation is a table.

@visual
compare | File system and DBMS | File system=Same data repeated in many files~Hard to search and combine~Weak security and sharing~No safe handling of two users at once; DBMS=One controlled copy of data~Query language (SQL)~Access control by user~Transactions, backup and recovery

@problems
## Moderate
P: List four disadvantages of a file-processing system that a DBMS removes.
A: 1) Data redundancy and inconsistency (the same data stored in many files). 2) Difficulty in accessing data (a new query needs a new program). 3) Data isolation (data in different formats and files). 4) Integrity problems (rules are buried in program code). 5) Atomicity problems on failure. 6) Concurrent access anomalies. 7) Security problems. Any four are acceptable.
R: 2 | Four correct disadvantages
R: 2 | Each disadvantage is stated clearly, not just named
## High
P: Who are the main types of database users? Describe the role of the Database Administrator (DBA).
A: Users: naive (end) users who use ready-made applications, application programmers who write programs, sophisticated users who write queries directly, and database designers. The DBA has central control: defines the schema, decides the storage structure, grants access authorisation, monitors performance, takes backups and handles recovery.
R: 2 | Types of users
R: 3 | At least three DBA responsibilities
## Advanced
P: A college keeps student data in separate Excel files for the office, library and hostel. Describe five problems this creates and how a DBMS solves each.
A: 1) Redundancy: a student's address appears in three files; a DBMS stores it once. 2) Inconsistency: the address is updated in one file only; central storage updates it once. 3) Integrity: a roll number can be typed wrongly; constraints such as primary and foreign keys reject bad data. 4) Security: everyone can open every file; a DBMS gives role-based access. 5) Concurrent access: two staff editing the same file lose changes; transactions and locking keep updates safe. Backup and recovery is another valid benefit.
R: 3 | Five distinct problems
R: 2 | Matching DBMS solution for each
