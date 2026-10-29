# Recoverable schedules and isolation levels
minutes: 30
yt: recoverable cascadeless strict schedule DBMS
yt: SQL isolation levels read committed repeatable read serializable
@study
Serializability is about correct results. **Recoverability** is about what happens when a transaction aborts.

## Recoverable schedule
A schedule is **recoverable** if whenever Tj reads data written by Ti, Ti **commits before** Tj commits.
Bad example: T1 writes A, T2 reads A, T2 commits, then T1 aborts. T2 has committed a value based on data that never existed, and a committed transaction cannot be undone. This schedule is **not recoverable**.

## Cascading rollback and cascadeless schedules
Even in a recoverable schedule, if T1 aborts after T2 read its uncommitted data, T2 must also abort, and so on for others: a **cascading rollback**, which wastes work.
A **cascadeless (ACA, avoids cascading aborts)** schedule allows reads only of **committed** data: Tj reads an item written by Ti only after Ti commits.

## Strict schedules
In a **strict** schedule, a transaction can neither read nor **overwrite** an item written by another transaction until that transaction commits or aborts. Strict schedules make recovery with simple before-image undo possible.

Hierarchy: **strict ⊂ cascadeless ⊂ recoverable ⊂ all schedules.**

## Isolation levels in SQL
Full serializability costs concurrency, so SQL defines weaker levels. Each allows some anomalies:

| Isolation level | Dirty read | Non-repeatable read | Phantom |
| --- | --- | --- | --- |
| READ UNCOMMITTED | Possible | Possible | Possible |
| READ COMMITTED | Prevented | Possible | Possible |
| REPEATABLE READ | Prevented | Prevented | Possible |
| SERIALIZABLE | Prevented | Prevented | Prevented |

(The table is the standard SQL definition. Real systems differ: for example PostgreSQL treats READ UNCOMMITTED as READ COMMITTED, and MySQL InnoDB's REPEATABLE READ also blocks most phantoms.)

Setting the level:
```mysql
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
```
Defaults: PostgreSQL, Oracle and SQL Server use READ COMMITTED; MySQL InnoDB uses REPEATABLE READ.

## Choosing a level
Use READ COMMITTED for most web applications, REPEATABLE READ for consistent reports within a transaction, and SERIALIZABLE for critical operations like financial rules that cannot tolerate any anomaly, accepting lower throughput.

> Recoverable: commit order follows read-from order. Cascadeless: read only committed data. Strict: also write only over committed data.
@qa
Q: What is a recoverable schedule?
A: One in which a transaction that reads data written by another transaction commits only after that other transaction has committed.
Q: What is a cascading rollback?
A: When one transaction aborts, every transaction that read its uncommitted data must also abort, and so on, causing a chain of rollbacks.
Q: Which isolation level allows dirty reads?
A: READ UNCOMMITTED.
Q: What is a phantom read?
A: A transaction re-runs a range query and sees new rows inserted and committed by another transaction in the meantime.
Q: State the relationship between strict, cascadeless and recoverable schedules.
A: Every strict schedule is cascadeless and every cascadeless schedule is recoverable, but not the reverse.
@quiz
? A schedule where reads happen only on committed data is
- recoverable only
+ cascadeless
- serial only
- non-serializable
! Cascadeless (ACA) schedules avoid reading uncommitted data.
? Which isolation level prevents dirty reads but allows non-repeatable reads?
- READ UNCOMMITTED
+ READ COMMITTED
- REPEATABLE READ
- SERIALIZABLE
! READ COMMITTED reads only committed values but they may change between reads.
? Which anomaly is prevented only by SERIALIZABLE in the standard?
- Dirty read
- Lost update
- Non-repeatable read
+ Phantom read
! Phantoms are prevented at the SERIALIZABLE level in the standard definition.
? Which schedule is NOT recoverable? T1 writes A, T2 reads A, T2 commits, T1 aborts.
+ This schedule
- T1 writes A, T1 commits, T2 reads A
- A serial schedule
- T2 reads A after T1 aborts
! T2 committed after reading uncommitted data that disappeared.
? The correct containment is
- recoverable inside strict
+ strict inside cascadeless inside recoverable
- cascadeless inside strict
- strict equals recoverable
! Strict is the most restrictive class.

@visual
layers | Isolation levels from weakest to strongest | Read Uncommitted: dirty reads possible; Read Committed: no dirty reads; Repeatable Read: also no non-repeatable reads; Serializable: no phantom rows either

@problems
## Moderate
P: Differentiate between recoverable, cascadeless and strict schedules.
A: Recoverable: a transaction commits only after every transaction whose data it read has committed. Cascadeless (avoids cascading aborts): a transaction reads only data written by committed transactions. Strict: it neither reads nor overwrites data written by an uncommitted transaction. Strict implies cascadeless implies recoverable.
R: 2 | Recoverable and cascadeless
R: 2 | Strict and the hierarchy
## High
P: Is this schedule recoverable? W1(A) R2(A) C2 C1. Explain.
A: Not recoverable. T2 read A written by T1 and committed before T1 committed. If T1 then aborts, T2 has already committed using a value that never existed, and it cannot be undone. A recoverable order would be C1 before C2.
R: 2 | Not recoverable
R: 3 | Reason with the commit order
## Advanced
P: State which anomalies (dirty read, non-repeatable read, phantom read) each SQL isolation level allows.
A: Read Uncommitted: dirty reads, non-repeatable reads and phantoms possible. Read Committed: prevents dirty reads; non-repeatable reads and phantoms possible. Repeatable Read: prevents dirty and non-repeatable reads; phantoms possible in the standard (some databases such as MySQL InnoDB also prevent most phantoms). Serializable: prevents all three.
R: 2 | Read Uncommitted and Read Committed
R: 2 | Repeatable Read
R: 1 | Serializable
