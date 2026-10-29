# Transactions and the ACID properties
minutes: 30
yt: transaction ACID properties DBMS
yt: transaction states DBMS commit rollback
@study
A **transaction** is a logical unit of work made of one or more database operations that must be treated as a whole. Example: transferring 500 from account A to account B.
```
read(A); A = A - 500; write(A);
read(B); B = B + 500; write(B);
```
If the system fails after `write(A)` but before `write(B)`, money disappears. Transactions prevent that.

## ACID properties
- **Atomicity:** all operations happen or none do. Ensured by the **recovery manager** using a log to undo partial work.
- **Consistency:** a transaction takes the database from one consistent state to another (all integrity constraints hold). This is mainly the programmer's responsibility, helped by constraints.
- **Isolation:** concurrent transactions behave as if they ran one after another. Ensured by the **concurrency-control manager** (locks, timestamps, MVCC).
- **Durability:** once committed, changes survive crashes. Ensured by logging and forcing log records to stable storage.

For the transfer, the sum A + B must be the same before and after (consistency).

## Transaction states
1. **Active:** executing operations.
2. **Partially committed:** the last statement has run, but the changes may still only be in memory.
3. **Committed:** changes safely recorded; they can no longer be undone by the system.
4. **Failed:** normal execution cannot continue.
5. **Aborted:** the transaction was rolled back and the database restored to its state before it began. The system may then **restart** it (if the failure was a hardware or software error) or **kill** it (logical error).

SQL control: `COMMIT` makes work permanent, `ROLLBACK` cancels it, `SAVEPOINT` marks a point to roll back to.
```sql
CREATE TABLE Account(id INT PRIMARY KEY, bal INT CHECK (bal >= 0));
INSERT INTO Account VALUES (1, 1000), (2, 200);
BEGIN;
UPDATE Account SET bal = bal - 500 WHERE id = 1;
UPDATE Account SET bal = bal + 500 WHERE id = 2;
COMMIT;
SELECT id, bal FROM Account ORDER BY id;
```
Result: account 1 holds 500, account 2 holds 700. Total unchanged at 1200.

## Why concurrency?
Running transactions together improves throughput and reduces waiting. The cost is possible anomalies if isolation is not enforced:
- **Lost update:** two transactions read the same value and both write, so one update vanishes.
- **Dirty read:** reading data written by an uncommitted transaction that later rolls back.
- **Non-repeatable read:** reading the same row twice and getting different values because another transaction committed in between.
- **Phantom read:** a repeated range query returns new rows inserted by another committed transaction.

> A in ACID needs undo, D needs redo, I needs concurrency control, and C needs correct programs and constraints.
@qa
Q: What does atomicity mean?
A: A transaction is all-or-nothing. If any step fails, the effects of the already executed steps are undone.
Q: Which component ensures durability?
A: The recovery manager, by writing log records to stable storage before commit so that committed changes can be redone after a crash.
Q: What is a dirty read?
A: Reading a value written by a transaction that has not committed yet and may later roll back.
Q: What is the difference between ROLLBACK and COMMIT?
A: COMMIT makes the transaction's changes permanent. ROLLBACK discards them and returns the database to the state before the transaction began.
Q: What is a lost update?
A: Two transactions read the same data and update it based on the old value, so the later write overwrites the first update.
@quiz
? Which ACID property guarantees that committed data survives a crash?
- Atomicity
- Consistency
- Isolation
+ Durability
! Durability is implemented with logging and recovery.
? A transaction fails halfway and all its changes are undone. This shows
+ atomicity
- isolation
- durability
- concurrency
! Atomicity means all or nothing.
? Reading uncommitted data of another transaction is called
- phantom read
- lost update
+ dirty read
- repeatable read
! Dirty data may be rolled back later.
? The state in which a transaction has executed its last statement but is not yet permanent is
- active
+ partially committed
- committed
- aborted
! After the last statement the transaction is partially committed until the commit is safely recorded.
? Concurrency control mainly ensures
- atomicity
- durability
+ isolation
- normalisation
! The concurrency-control manager provides isolation.

@visual
mind | ACID properties | ACID; Atomicity: all or nothing; Consistency: rules stay true; Isolation: transactions do not disturb each other; Durability: committed data survives a crash

@problems
## Moderate
P: Expand ACID and explain each property in one line.
A: Atomicity: all operations of a transaction happen or none do. Consistency: a transaction takes the database from one valid state to another. Isolation: concurrent transactions behave as if they ran one after another. Durability: once committed, changes survive failures.
R: 2 | Atomicity and consistency
R: 2 | Isolation and durability
## High
P: A transfer of 500 from account A to B fails after the debit but before the credit. Which property is at risk and how does the DBMS protect it?
A: Atomicity. The DBMS records every change in a log. After the failure the recovery manager sees that the transaction did not commit and uses the log to undo the debit (rollback), so either both steps occur or none do.
R: 2 | Atomicity identified
R: 3 | Log and rollback explained
## Advanced
P: Match each situation with an ACID property: (1) a bank restarts after a power cut and the committed deposit is still there; (2) two users try to book the last seat at the same time; (3) total money in two accounts is unchanged by a transfer; (4) half a transaction is undone. Then list the five states of a transaction.
A: (1) Durability. (2) Isolation. (3) Consistency. (4) Atomicity.
States: Active, Partially committed, Committed, Failed, Aborted (terminated).
R: 2 | All four matched
R: 3 | Five states listed
