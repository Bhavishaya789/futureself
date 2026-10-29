# Race conditions and the critical section problem
minutes: 35
yt: critical section problem race condition Peterson solution
yt: mutual exclusion progress bounded waiting
@study
When several processes or threads access **shared data** at the same time, the final result can depend on the exact order of execution. This is a **race condition**.

## A race in practice
Two threads each add 1,000,000 to a shared counter. `counter++` is really three steps: load, add, store. If both threads load the same value before either stores, one update is lost.
```c
#include <stdio.h>
#include <pthread.h>
#define N 1000000
long counter = 0;
pthread_mutex_t lock = PTHREAD_MUTEX_INITIALIZER;
void *add(void *a) {
    for (int i = 0; i < N; i++) {
        pthread_mutex_lock(&lock);
        counter++;
        pthread_mutex_unlock(&lock);
    }
    return NULL;
}
int main(void) {
    pthread_t t1, t2;
    pthread_create(&t1, NULL, add, NULL);
    pthread_create(&t2, NULL, add, NULL);
    pthread_join(t1, NULL);
    pthread_join(t2, NULL);
    printf("counter = %ld\n", counter);
    return 0;
}
```
With the mutex the output is always `counter = 2000000`. Remove the lock/unlock lines and you will usually see a smaller number that changes on every run: that is the race.

## The critical section problem
Each process has a **critical section** (CS), a segment of code that accesses shared data. The structure is:
```
do {
   entry section      // request permission
      critical section
   exit section       // release
      remainder section
} while (true);
```
A solution must satisfy three requirements:
1. **Mutual exclusion:** if one process is in its CS, no other may be.
2. **Progress:** if no process is in its CS and some want to enter, only those not in the remainder section decide who enters next, and the decision cannot be postponed forever.
3. **Bounded waiting:** there is a limit on how many times others can enter before a waiting process gets its turn (no starvation).

## Peterson's solution (two processes)
Shared: `int turn; boolean flag[2];`. For process i (j is the other):
```
flag[i] = true;
turn = j;
while (flag[j] && turn == j) ;   // busy wait
   /* critical section */
flag[i] = false;
```
It meets all three requirements, but on modern CPUs with instruction reordering it needs memory barriers, so it is mostly of teaching value.

## Hardware support
- **Test-and-Set:** atomically reads a boolean and sets it to true. `while (TestAndSet(&lock)) ;` forms a **spinlock**.
- **Compare-and-Swap (CAS):** atomically sets a variable only if it holds an expected value.
- Disabling interrupts works on single-CPU systems only and is dangerous for user code.
A **spinlock** wastes CPU while waiting (busy waiting) but avoids a context switch, so it suits very short critical sections on multiprocessors.

> Three requirements: mutual exclusion, progress, bounded waiting.
@qa
Q: What is a race condition?
A: A situation in which the result of concurrent execution depends on the order in which the shared data is accessed, often giving wrong or unpredictable results.
Q: List the three requirements for a solution to the critical section problem.
A: Mutual exclusion, progress and bounded waiting.
Q: How does Peterson's solution achieve mutual exclusion?
A: Each process sets its flag to show interest and gives the turn to the other. A process enters only if the other is not interested or it is its turn, so both cannot be inside at once.
Q: What is a spinlock?
A: A lock where a waiting process repeatedly checks the lock in a loop (busy waiting) instead of sleeping. It is efficient only for very short critical sections.
Q: Why is counter++ not safe in two threads?
A: It is a non-atomic read-modify-write sequence, so two threads can read the same old value and one increment is lost.
@quiz
? Which is NOT a requirement of the critical section solution?
- Mutual exclusion
- Progress
- Bounded waiting
+ Faster CPU
! The three requirements concern correctness, not hardware speed.
? Bounded waiting prevents
- deadlock only
+ starvation
- mutual exclusion
- race conditions in one thread
! There is a limit on how long a process can be bypassed.
? Test-and-Set is
- a software-only algorithm
+ an atomic hardware instruction
- a page replacement policy
- a scheduling algorithm
! It reads and sets a flag in one indivisible step.
? Busy waiting is also called
+ spinning
- swapping
- paging
- thrashing
! The process loops while waiting.
? In Peterson's algorithm a process waits while
- flag[i] and turn == i
+ flag[j] and turn == j
- turn == 0
- flag[j] is false
! It waits while the other is interested and it is the other's turn.

@visual
sequence | Lost update: two processes run counter++ on counter = 5 | P1 > Memory : read counter (5); P2 > Memory : read counter (5); P1 > Memory : write 6; P2 > Memory : write 6 (an update is lost)

@problems
## Moderate
P: What is the critical section problem? State the three requirements a correct solution must satisfy.
A: When several processes share data, the part of code that accesses the shared data is the critical section. The problem is to design a protocol so processes do not corrupt the data.
Requirements: 1) Mutual exclusion: only one process in its critical section at a time. 2) Progress: if no process is in the critical section, one of those wanting to enter must be chosen without indefinite postponement. 3) Bounded waiting: a limit on how many times others may enter before a waiting process gets its turn.
R: 2 | Correct definition of critical section problem
R: 3 | Three requirements named and explained
## High
P: Explain Peterson's solution for two processes. Show why it ensures mutual exclusion.
A: Shared variables: flag[2] (flag[i] = true means process i wants to enter) and turn (whose turn it is). Process i: flag[i] = true; turn = j; while (flag[j] && turn == j) wait; critical section; flag[i] = false.
If both want to enter, both set their flags, but turn can hold only one value; the process that wrote turn last is the one that waits, so only the other enters. Therefore both cannot be in the critical section together. Progress and bounded waiting also hold.
R: 2 | Correct algorithm with flag and turn
R: 2 | Explains that turn decides who waits when both want to enter
R: 1 | Mentions progress and bounded waiting are satisfied
## Advanced
P: This lock is proposed: while (lock == 1) ; lock = 1; /* critical section */ lock = 0; Show an interleaving where two processes enter the critical section together, and explain how an atomic test-and-set fixes it.
A: P1 reads lock == 0 and leaves the while loop, but a context switch occurs before it executes lock = 1. P2 now also reads lock == 0, leaves the loop and sets lock = 1. When P1 resumes it sets lock = 1 and enters too. Both are inside the critical section.
The problem is that checking and setting the lock are two separate steps. Test-and-set reads the old value and writes 1 in one indivisible hardware instruction, so only one process can see 0 and acquire the lock.
R: 2 | Valid interleaving between the check and the assignment
R: 2 | Identifies the non-atomic check-then-set as the cause
R: 1 | Atomic test-and-set removes the gap
