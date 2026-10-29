# Database recovery: logs, WAL, checkpoints and ARIES
minutes: 35
yt: database recovery log based recovery undo redo checkpoint
yt: ARIES recovery algorithm analysis redo undo
@study
Failures are inevitable: transaction errors, system crashes (loss of memory), and disk failures (loss of storage). Recovery makes the database consistent again, guaranteeing **atomicity** and **durability**.

## Storage types
**Volatile** (RAM), **non-volatile** (disk), and **stable** storage (an idealised storage that never loses data, approximated by redundant copies). The **buffer pool** holds recently used pages in memory; a modified page is a **dirty page**.

## The log
A **log** is an append-only file of records kept on stable storage:
- `<T, start>`
- `<T, X, old_value, new_value>` for each update
- `<T, commit>` or `<T, abort>`

## Write-Ahead Logging (WAL)
Two rules:
1. The log record for an update must be written to disk **before** the modified data page is written (needed for **undo**).
2. All log records of a transaction must be on disk **before** it is declared **committed** (needed for **redo**).

## Buffer policies
- **Steal:** a dirty page of an uncommitted transaction may be written to disk (needs UNDO).
- **No-force:** pages need not be written to disk at commit (needs REDO).
Most systems use **steal + no-force** with WAL, for good performance.

## Recovery techniques
### Deferred update (NO-UNDO/REDO)
Changes are written to the database only after commit. After a crash: **redo** committed transactions found in the log; ignore uncommitted ones.
### Immediate update (UNDO/REDO)
Changes may reach the database before commit. After a crash: **undo** transactions with no commit record and **redo** those with a commit record.
### Shadow paging
Keeps two page tables (current and shadow). Commit atomically switches to the current table. No log needed, but it causes fragmentation and is hard with concurrency.

## Checkpoints
Scanning the entire log after a crash is slow. A **checkpoint** periodically writes all dirty pages and a `<checkpoint, active transactions>` record so recovery can start from the last checkpoint and consider only transactions active at that time.

### Worked example
Log: `<T1 start> <T1,A,10,20> <T1 commit> <T2 start> <T2,B,5,9> <checkpoint> <T3 start> <T3,C,1,2> <T2 commit>` then a crash.
- T1 committed before the checkpoint: its pages were flushed; nothing to do.
- T2 was active at the checkpoint and committed after: **redo** it.
- T3 has no commit record: **undo** it (restore C to 1).

## ARIES (overview)
The industry-standard algorithm using WAL, **log sequence numbers (LSN)** and **compensation log records (CLR)**. Three passes after a crash:
1. **Analysis:** find the dirty pages and active transactions at the time of the crash.
2. **Redo:** repeat history, re-applying all logged changes from the earliest needed point, including those of transactions that will be undone.
3. **Undo:** roll back transactions that did not commit, writing CLRs so undo is not repeated if another crash happens.

> Redo makes committed work durable; undo removes uncommitted work. WAL makes both possible.
@qa
Q: What is write-ahead logging?
A: A rule that log records describing a change must be on stable storage before the changed data page is written to disk and before the transaction commits.
Q: What is the difference between steal and no-force?
A: Steal lets dirty pages of uncommitted transactions be written to disk (needs undo). No-force lets commit complete without writing the data pages (needs redo).
Q: Why are checkpoints used?
A: To limit the amount of log that must be examined during recovery, since all earlier committed changes are already safely on disk.
Q: In the example log, which transactions need redo and undo?
A: T2 is redone (committed after the checkpoint) and T3 is undone (no commit record). T1 needs nothing.
Q: Name the three phases of ARIES.
A: Analysis, redo and undo.
@quiz
? WAL requires log records to reach disk
+ before the modified data pages
- after the data pages
- only at shutdown
- never
! Logging before data writing makes undo possible.
? Which operation is needed for a transaction that committed but whose pages were not yet written?
- Undo
+ Redo
- Rollback only
- Ignore
! Committed changes missing from disk must be redone.
? A transaction with no commit record in the log at crash time is
- redone
+ undone
- ignored always
- checkpointed
! Uncommitted work is rolled back.
? Shadow paging avoids the use of
- page tables
+ a log
- disks
- transactions
! It switches page tables atomically instead of logging.
? The first pass of ARIES is
+ analysis
- redo
- undo
- checkpoint
! Analysis, then redo, then undo.

@visual
steps | Write-ahead logging | The log record describing a change is written first; Only then may the changed data page go to disk; The commit record is flushed to the log before the commit is acknowledged; After a crash the log is used to redo or undo

@problems
## Moderate
P: What does an update log record contain and why is it written before the data page?
A: A typical record is the transaction ID, the data item, the old value and the new value. The old value is needed to undo and the new value to redo. It is written first (write-ahead rule) so that after a crash the system can always recover the old or the new value.
R: 2 | Record contents
R: 2 | Reason for write-ahead
## High
P: Log: start T1; T1, A, 100, 150; commit T1; start T2; T2, B, 200, 250; then a crash. What does recovery do to A and B?
A: T1 has a commit record, so it is redone: A is set to 150. T2 has no commit record, so it is undone: B is restored to 200. After recovery the database reflects only committed work.
R: 2 | Redo T1 and A = 150
R: 2 | Undo T2 and B = 200
R: 1 | Rule: commit record decides
## Advanced
P: What is a checkpoint and how does it shorten recovery? Differentiate deferred and immediate database modification.
A: A checkpoint writes all buffered log records and modified pages to disk and records a checkpoint entry with the list of active transactions. After a crash recovery needs only to examine transactions active at the checkpoint and those that started later, instead of the whole log.
Deferred modification: updates are written to the database only at commit (only redo is needed). Immediate modification: updates may reach the database before commit (both undo and redo may be needed).
R: 2 | Checkpoint reduces the part of the log to scan
R: 2 | Deferred modification
R: 1 | Immediate modification
