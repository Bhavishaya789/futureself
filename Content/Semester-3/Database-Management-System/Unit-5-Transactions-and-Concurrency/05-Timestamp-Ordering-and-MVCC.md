# Timestamp ordering, validation and MVCC
minutes: 30
yt: timestamp ordering protocol DBMS Thomas write rule
yt: MVCC multiversion concurrency control explained
@study
Locks are **pessimistic**: they assume conflicts are likely. Other methods avoid locks.

## Timestamp ordering (TO)
Each transaction T gets a unique **timestamp TS(T)** when it starts (older = smaller). Each data item X keeps:
- `R-TS(X)`: the largest timestamp of any transaction that read X.
- `W-TS(X)`: the largest timestamp of any transaction that wrote X.
The protocol ensures the schedule is equivalent to the serial order of timestamps.

**Read(X) by T:**
- If `TS(T) < W-TS(X)`: T would read a value already overwritten by a younger transaction. **Abort and restart** T with a new timestamp.
- Otherwise allow the read and set `R-TS(X) = max(R-TS(X), TS(T))`.

**Write(X) by T:**
- If `TS(T) < R-TS(X)`: a younger transaction already read the old value. **Abort** T.
- If `TS(T) < W-TS(X)`: a younger transaction already wrote X. **Abort** T (basic TO).
- Otherwise allow the write and set `W-TS(X) = TS(T)`.

TO guarantees **conflict serializability** and is **deadlock free** (nobody waits), but can cause **starvation** and cascading rollbacks.

### Thomas write rule
If `TS(T) < W-TS(X)` but `TS(T) >= R-TS(X)`, the write is obsolete because a younger transaction will overwrite it anyway. Instead of aborting, **ignore the write**. This allows some schedules that are view serializable but not conflict serializable.

## Optimistic concurrency control (validation)
Transactions run in three phases: **read** (work on private copies), **validation** (check for conflicts with others), **write** (apply changes if valid). Good when conflicts are rare; otherwise many restarts happen.

## Multiversion concurrency control (MVCC)
Instead of overwriting, the DBMS keeps **several versions** of each item, each tagged with the timestamp of the writer.
- A reader sees a **consistent snapshot** of the data as of its start time, so **readers do not block writers and writers do not block readers.**
- A writer creates a new version. Conflicts between two writers are still resolved (by locks or by "first committer wins").
- Old versions are cleaned up by a background process (vacuum, purge).

**Snapshot isolation** is the isolation level provided by MVCC. It prevents dirty and non-repeatable reads but allows an anomaly called **write skew**. PostgreSQL, Oracle and MySQL InnoDB use MVCC.

> Locking waits for conflicts; timestamp ordering aborts on conflicts; MVCC avoids read-write conflicts with versions.
@qa
Q: What is stored with each data item in timestamp ordering?
A: Its read timestamp R-TS and write timestamp W-TS: the largest timestamps of transactions that have read and written the item.
Q: When is a read rejected in basic timestamp ordering?
A: When the reading transaction's timestamp is smaller than the item's write timestamp, because the item has already been overwritten by a younger transaction.
Q: What does the Thomas write rule do?
A: It ignores an obsolete write (TS(T) < W-TS(X) but TS(T) ≥ R-TS(X)) instead of aborting the transaction.
Q: What is the main advantage of MVCC?
A: Readers do not block writers and writers do not block readers, because readers use an older consistent version.
Q: Can timestamp ordering cause deadlock?
A: No, transactions never wait; they are aborted and restarted instead. Starvation is possible.
@quiz
? In timestamp ordering, a transaction T with TS(T) < W-TS(X) tries to read X. The system
- allows the read
+ aborts T
- blocks T until commit
- ignores the read
! T would read a value from the future.
? Timestamp ordering is free from
- starvation
- aborts
+ deadlock
- restarts
! No waiting means no deadlock.
? MVCC keeps
+ multiple versions of each item
- only the latest version
- only locks
- only indexes
! Each write creates a new version.
? Which phases does optimistic concurrency control use?
- Growing, shrinking
+ Read, validation, write
- Begin, commit
- Lock, unlock
! Validation decides whether the writes may be applied.
? Snapshot isolation can still allow
- dirty reads
- non-repeatable reads
+ write skew
- lost commits
! Write skew is the known anomaly of snapshot isolation.

@visual
timeline | Versions of one row in MVCC | t1=Version v1 written by T1; t5=Version v2 written by T5; t9=Version v3 written by T9

@problems
## Moderate
P: State the timestamp ordering rules for a read by transaction T on item X.
A: If TS(T) is less than the write timestamp of X (W-TS), T would read a value written by a younger transaction, so the read is rejected and T is rolled back. Otherwise the read is allowed and R-TS(X) is set to the maximum of its current value and TS(T).
R: 2 | Rejects when TS(T) is below W-TS(X)
R: 2 | Otherwise allowed and R-TS updated
## High
P: TS(T1) = 5, TS(T2) = 10 and item X has W-TS(X) = 10. What happens when T1 does read(X)? Why?
A: TS(T1) = 5 is less than W-TS(X) = 10, so T1 would read a value written by a later transaction. This violates timestamp order, so T1 is rolled back and restarted with a new, larger timestamp.
R: 2 | T1 is rolled back
R: 3 | Reason based on the timestamp comparison
## Advanced
P: Explain how MVCC lets readers and writers work without blocking each other, using the versions above. Which version does a reader that started at time 6 see? State one cost of MVCC.
A: Every write creates a new version with its timestamp instead of overwriting. A reader uses the snapshot at its start time, so it sees the latest version written before that time and never waits for writers; writers add new versions and do not block readers.
A reader at time 6 sees v2 (written at t5); v3 (t9) is invisible.
Cost: old versions use storage and must be cleaned up (vacuum or garbage collection).
R: 2 | Snapshot idea
R: 2 | Version v2 for a reader at time 6
R: 1 | Storage or cleanup cost
