# Schedules and serializability
minutes: 35
yt: serializability conflict serializable precedence graph
yt: view serializability schedules DBMS
@study
A **schedule** is the time order in which operations of several transactions are executed. Operations of each transaction keep their own order. A **serial** schedule runs one transaction completely before the next. Serial schedules are always correct but slow. We want schedules that are not serial but have the **same effect** as some serial one: they are **serializable**.

## Conflicting operations
Two operations conflict if they:
1. belong to **different** transactions,
2. access the **same** data item, and
3. at least one is a **write**.

So the conflicting pairs are Read-Write, Write-Read and Write-Write. Two reads never conflict.

## Conflict serializability
A schedule is **conflict serializable** if it can be converted to a serial schedule by swapping adjacent **non-conflicting** operations.

### Precedence graph (serialization graph) test
1. Make a node for each transaction.
2. Add an edge `Ti → Tj` if an operation of Ti conflicts with a **later** operation of Tj.
3. The schedule is conflict serializable **if and only if the graph has no cycle**. A topological order of the graph gives an equivalent serial order.

### Example 1 (serializable)
S1: R1(A) W1(A) R2(A) W2(A) R1(B) W1(B) R2(B) W2(B).
All conflicts on A and B go from T1 to T2, so the graph has the single edge T1 → T2. No cycle: equivalent to T1 then T2.

### Example 2 (not serializable)
S2: R1(A) W2(A) W1(A).
- R1(A) before W2(A): edge T1 → T2.
- W2(A) before W1(A): edge T2 → T1.
The graph has a cycle T1 ⇄ T2, so S2 is not conflict serializable. (This is a lost-update pattern: T1's write ignores T2's.)

## View serializability
Two schedules are **view equivalent** if: (1) each transaction reads the same initial values, (2) each read reads from the same writing transaction, and (3) the final write on each item is by the same transaction. A schedule is view serializable if it is view equivalent to a serial schedule.
- Every conflict-serializable schedule is view serializable.
- Some view-serializable schedules are not conflict serializable; they contain **blind writes** (writes without a preceding read).
- Testing view serializability is NP-complete, so systems enforce conflict serializability.

## Number of schedules
For n transactions the number of serial schedules is n!. For two transactions with m and k operations the total number of interleavings is (m+k)! / (m! k!).

> Cycle in the precedence graph means not conflict serializable.
@qa
Q: When do two operations conflict?
A: When they are from different transactions, access the same data item, and at least one of them is a write.
Q: How do we test conflict serializability?
A: Build a precedence graph with an edge Ti → Tj for each conflict where Ti's operation comes first. The schedule is conflict serializable exactly when the graph has no cycle.
Q: Is a view-serializable schedule always conflict serializable?
A: No. Every conflict serializable schedule is view serializable, but not the other way round; blind writes can make a schedule view serializable only.
Q: What is a serial schedule?
A: One in which all operations of a transaction run together without interleaving with other transactions.
Q: How many serial schedules exist for 3 transactions?
A: 3! = 6.
@quiz
? Two operations conflict if they are on the same item, from different transactions and
- both are reads
+ at least one is a write
- both are commits
- both are in the same transaction
! Read-read pairs do not conflict.
? The precedence graph of a conflict serializable schedule
- has a cycle
+ has no cycle
- has exactly one node
- has no edges
! Acyclic means a serial order exists.
? For R1(A) W2(A) W1(A), the precedence graph has
- no edge
- edge T1 to T2 only
- edge T2 to T1 only
+ a cycle between T1 and T2
! R1(A) before W2(A) gives T1 to T2, and W2(A) before W1(A) gives T2 to T1.
? Which is true?
- Every view serializable schedule is conflict serializable
+ Every conflict serializable schedule is view serializable
- They are always unrelated
- Serial schedules are not serializable
! Conflict serializability is the stricter, more practical test.
? Three transactions can be arranged in how many serial schedules?
- 3
+ 6
- 9
- 27
! n! = 3! = 6.

@visual
graph | A precedence graph without a cycle means conflict serializable | T1>T2: x; T2>T3: y; T1>T3: z

@problems
## Moderate
P: Which pairs of operations from different transactions on the same data item conflict? Which do not?
A: Conflicting pairs: read-write, write-read and write-write on the same item by different transactions. Read-read does not conflict.
R: 2 | Three conflicting pairs
R: 1 | Read-read does not conflict
## High
P: Schedule S: R1(A) W1(A) R2(A) W2(A) R1(B) W1(B). Draw the precedence graph and say whether S is conflict serializable.
A: Conflicts on A: W1(A) before R2(A) gives T1 to T2; W1(A) before W2(A) gives T1 to T2. T2 does not touch B, so B adds nothing. Graph: T1 to T2 only, no cycle. So S is conflict serializable, equivalent to the serial order T1 then T2.
R: 2 | Edges T1 to T2
R: 2 | No cycle so serializable
R: 1 | Equivalent serial order
## Advanced
P: Schedule R1(A) R2(A) W2(A) W1(A). Is it conflict serializable? How many serial schedules exist for 3 transactions?
A: Conflicts: R1(A) before W2(A) gives T1 to T2; R2(A) before W1(A) gives T2 to T1. The graph has a cycle T1 to T2 to T1, so the schedule is not conflict serializable (it also loses T2's update).
For 3 transactions there are 3! = 6 serial schedules.
R: 2 | Both edges found
R: 2 | Cycle so not serializable
R: 1 | 6 serial schedules
