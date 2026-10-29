# Lock-based concurrency control, 2PL and deadlocks
minutes: 35
yt: two phase locking 2PL strict rigorous DBMS
yt: deadlock wait for graph wait die wound wait
@study
## Locks
A **lock** controls concurrent access to a data item.
- **Shared lock (S):** for reading; many transactions may hold S on the same item.
- **Exclusive lock (X):** for writing; only one holder, no S locks at the same time.

Compatibility: S with S is allowed; S with X, X with S and X with X are not. A transaction asks the lock manager for a lock and waits if it is not granted.

## Two-phase locking (2PL)
Each transaction has two phases:
1. **Growing phase:** it may acquire locks but not release any.
2. **Shrinking phase:** it may release locks but not acquire any.
The point where it holds all its locks is the **lock point**. **2PL guarantees conflict serializability**, and the order of lock points gives an equivalent serial order.

Problems of basic 2PL: it can still cause **cascading rollbacks** and does **not prevent deadlock**.

### Variants
- **Strict 2PL:** hold all **exclusive** locks until commit or abort. Gives strict (cascadeless) schedules. Widely used.
- **Rigorous 2PL:** hold **all** locks until commit or abort. Transactions serialise in commit order.
- **Conservative 2PL:** acquire all locks before starting. Prevents deadlock but is hard to know in advance and reduces concurrency.
- **Lock conversion:** upgrade S to X in the growing phase, downgrade X to S in the shrinking phase.

## Deadlock
A **deadlock** is when each transaction in a set waits for a lock held by another in the set, so none can proceed. Example: T1 holds X(A) and wants X(B); T2 holds X(B) and wants X(A).

Four conditions: mutual exclusion, hold and wait, no pre-emption, circular wait.

### Detection: wait-for graph
Nodes are transactions; an edge `Ti → Tj` means Ti waits for a lock held by Tj. A **cycle** means deadlock. The DBMS checks periodically and picks a **victim** to abort (usually the one with least work done, with care to avoid **starvation** of the same victim).

### Prevention with timestamps
Each transaction has a timestamp (older = smaller). When Ti requests an item held by Tj:
- **Wait-Die** (non-pre-emptive): if Ti is **older** it waits; if younger it **dies** (aborts and restarts with the same timestamp).
- **Wound-Wait** (pre-emptive): if Ti is **older** it **wounds** Tj (forces it to abort); if younger it waits.
Both prevent cycles, and an aborted transaction keeps its original timestamp so it will eventually become the oldest.

### Timeout
A simple approach: abort a transaction that has waited longer than a limit.

## Multiple granularity locking
Locks can be at database, table, page or row level. **Intention locks** (IS, IX, SIX) on higher levels signal that lower-level locks are held, so conflicts are detected without examining every row.

> 2PL gives serializability; strict 2PL also gives cascadeless schedules; neither prevents deadlocks.
@qa
Q: State the two phases of two-phase locking.
A: A growing phase in which locks are only acquired, followed by a shrinking phase in which locks are only released.
Q: What does 2PL guarantee, and what does it not?
A: It guarantees conflict serializability. It does not guarantee freedom from deadlock or from cascading rollbacks.
Q: How does strict 2PL differ from basic 2PL?
A: In strict 2PL, exclusive locks are kept until the transaction commits or aborts, which avoids cascading rollbacks.
Q: How is a deadlock detected?
A: By building a wait-for graph and checking for a cycle.
Q: What is the difference between wait-die and wound-wait?
A: In wait-die an older transaction waits for a younger one and a younger requester dies. In wound-wait an older requester aborts (wounds) the younger holder and a younger requester waits.
@quiz
? Two shared locks on the same item
+ can be held by different transactions at once
- are never allowed
- always cause deadlock
- need an exclusive lock first
! S locks are compatible with each other.
? In the growing phase of 2PL a transaction
+ may acquire but not release locks
- may release but not acquire locks
- may do neither
- may only hold shared locks
! Growing means acquiring only.
? A cycle in the wait-for graph indicates
- serializability
+ a deadlock
- a lost update
- a phantom
! Each transaction in the cycle waits on the next.
? In wait-die, a younger transaction requesting a lock held by an older one
- waits
+ dies (is aborted)
- wounds the older one
- commits
! Wait-die aborts the younger requester.
? Which protocol keeps exclusive locks until commit?
- Conservative 2PL
+ Strict 2PL
- Basic 2PL
- Timestamp ordering
! Strict 2PL holds X locks until the end, giving cascadeless schedules.

@visual
formula | Lock compatibility | Shared with Shared: allowed ; Shared with Exclusive: not allowed ; Exclusive with Exclusive: not allowed

@problems
## Moderate
P: Differentiate between a shared lock and an exclusive lock.
A: A shared (S) lock is for reading; many transactions can hold S locks on the same item together. An exclusive (X) lock is for writing; only one transaction can hold it and no one else can hold any other lock on that item.
R: 2 | Shared lock
R: 2 | Exclusive lock
## High
P: Explain two-phase locking and strict 2PL. Which problem does strict 2PL avoid?
A: In 2PL a transaction has a growing phase where it only acquires locks and a shrinking phase where it only releases them, and it cannot acquire after releasing. This guarantees conflict serializability. Strict 2PL holds all exclusive locks until commit or abort, which avoids cascading rollbacks. 2PL does not prevent deadlocks.
R: 2 | Growing and shrinking phases
R: 2 | Strict 2PL holds exclusive locks until commit
R: 1 | Avoids cascading aborts
## Advanced
P: T1 waits for T2, T2 waits for T3 and T3 waits for T1. Is there a deadlock? Timestamps: T1 = 5 and T2 = 10. T1 requests an item held by T2, then T2 requests an item held by T1. What happens under wait-die and under wound-wait?
A: Yes, the wait-for graph has a cycle T1, T2, T3, T1, so a deadlock exists. One victim is chosen and rolled back.
Wait-die (older may wait, younger dies): T1 (older) requests from T2: T1 waits. T2 (younger) requests from T1: T2 dies (aborts).
Wound-wait (older wounds younger): T1 (older) requests from T2: T2 is wounded (aborted). T2 (younger) requests from T1: T2 waits.
R: 2 | Cycle means deadlock
R: 2 | Wait-die results
R: 2 | Wound-wait results
