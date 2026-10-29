# Semaphores and the classic synchronisation problems
minutes: 40
yt: semaphore in operating system wait signal binary counting
yt: producer consumer readers writers dining philosophers semaphore solution
@study
A **semaphore** S is an integer variable accessed only through two **atomic** operations:
- `wait(S)` (also `P`, `down`): `while (S <= 0) block; S--;`
- `signal(S)` (also `V`, `up`): `S++;` and wake one waiting process.
To avoid busy waiting the OS implements a semaphore with a **queue**: `wait` blocks the process in the queue, `signal` moves one back to ready.

## Types
- **Counting semaphore:** any non-negative value, counts available resource units (like 5 identical printers).
- **Binary semaphore (mutex lock):** value 0 or 1, used for mutual exclusion.

## Mutual exclusion
Initialise `mutex = 1`. Then `wait(mutex); critical section; signal(mutex);`.
## Ordering (signalling)
To make S2 run only after S1: initialise `sync = 0`; the first process does `S1; signal(sync);`, the second does `wait(sync); S2;`.

## Producer-consumer (bounded buffer)
A producer puts items into a buffer of size N, a consumer takes them out. Semaphores: `mutex = 1` (protect the buffer), `empty = N` (free slots), `full = 0` (filled slots).
```
Producer:                    Consumer:
  wait(empty);                 wait(full);
  wait(mutex);                 wait(mutex);
  add item to buffer;          remove item from buffer;
  signal(mutex);               signal(mutex);
  signal(full);                signal(empty);
```
Swapping `wait(empty)` and `wait(mutex)` in the producer can cause **deadlock**: if the buffer is full the producer holds the mutex and waits for `empty`, while the consumer can never get the mutex.

A runnable C version:
```c
#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>
#define N 4
#define ITEMS 10
int buf[N], in = 0, out = 0;
sem_t empty, full, mutex;
void *producer(void *a) {
    for (int i = 1; i <= ITEMS; i++) {
        sem_wait(&empty); sem_wait(&mutex);
        buf[in] = i; in = (in + 1) % N;
        sem_post(&mutex); sem_post(&full);
    }
    return NULL;
}
void *consumer(void *a) {
    int sum = 0;
    for (int i = 1; i <= ITEMS; i++) {
        sem_wait(&full); sem_wait(&mutex);
        sum += buf[out]; out = (out + 1) % N;
        sem_post(&mutex); sem_post(&empty);
    }
    printf("sum of consumed items = %d\n", sum);
    return NULL;
}
int main(void) {
    pthread_t p, c;
    sem_init(&empty, 0, N); sem_init(&full, 0, 0); sem_init(&mutex, 0, 1);
    pthread_create(&p, NULL, producer, NULL);
    pthread_create(&c, NULL, consumer, NULL);
    pthread_join(p, NULL); pthread_join(c, NULL);
    return 0;
}
```
Output: `sum of consumed items = 55` (1+2+...+10), whatever the interleaving.

## Readers-writers problem
Many readers may read together, but a writer needs exclusive access. In the **first** version readers get priority (writers may starve). Shared: `readcount = 0`, `mutex = 1` (protects readcount), `wrt = 1`. The first reader locks `wrt`, the last reader releases it.

## Dining philosophers
Five philosophers share five chopsticks; each needs two to eat. If all pick up the left chopstick at once, there is a **deadlock**. Solutions: allow at most four to sit; pick up both chopsticks only if both are free (inside a critical section); use an asymmetric rule (odd philosophers pick left first, even pick right first).

## Problems with semaphores
Incorrect use (wait/signal swapped or forgotten) causes deadlock or violates mutual exclusion. **Priority inversion** can occur when a low-priority process holds a lock needed by a high-priority one; it is solved by **priority inheritance**.

## Monitors
A **monitor** is a high-level construct that allows only one process to be active inside at a time, with **condition variables** (`wait`, `signal`). Java's `synchronized` and `wait/notify` are monitor-style tools.

> Mutex = 1 for exclusion; empty = N and full = 0 for the bounded buffer; always `wait(empty)` before `wait(mutex)`.
@qa
Q: What is the difference between a binary and a counting semaphore?
A: A binary semaphore takes only 0 or 1 and is used for mutual exclusion. A counting semaphore can take any non-negative integer and counts available units of a resource.
Q: In the producer-consumer solution, what do empty, full and mutex represent?
A: empty counts free buffer slots (initial N), full counts filled slots (initial 0) and mutex gives mutual exclusion on the buffer (initial 1).
Q: Why can swapping wait(empty) and wait(mutex) in the producer cause deadlock?
A: If the buffer is full, the producer would hold the mutex while waiting on empty, and the consumer then cannot enter to free a slot.
Q: How can the dining philosophers deadlock be avoided?
A: By allowing at most four philosophers at the table, picking up both chopsticks atomically, or making the pick-up order asymmetric for odd and even philosophers.
Q: What is priority inversion?
A: A high-priority process is stuck waiting for a lock held by a low-priority process that is itself pre-empted by medium-priority work. Priority inheritance fixes it.
@quiz
? A semaphore is modified only through
- read and write
+ wait and signal
- fork and join
- push and pop
! wait (P) and signal (V) are the atomic operations.
? In the bounded buffer solution the initial value of full is
+ 0
- 1
- N
- -1
! No slots are filled at the start.
? A semaphore initialised to 1 is used as
- a counter of free slots
+ a mutex for mutual exclusion
- a deadlock detector
- a page table
! Binary semaphores guard critical sections.
? Dining philosophers can deadlock when
- one philosopher is hungry
+ all pick up their left chopstick at the same time
- there are six chopsticks
- one eats alone
! Each holds one and waits for the next: a circular wait.
? A monitor allows
- many processes active at once inside
+ only one process active inside at a time
- no condition variables
- only readers
! Mutual exclusion is built into the monitor.

@visual
formula | Semaphore operations | wait(S): while (S <= 0) keep waiting; then S = S - 1 ; signal(S): S = S + 1 ; Producer-consumer uses empty = N, full = 0 and mutex = 1

@problems
## Moderate
P: Differentiate between a binary semaphore and a counting semaphore. Give a use for each.
A: A binary semaphore takes only the values 0 and 1 and works like a lock (mutex) for mutual exclusion. A counting semaphore can take any non-negative integer value and tracks a number of identical resources, for example the free slots in a buffer or 5 available printers.
R: 2 | Binary semaphore described with 0/1 and mutual exclusion
R: 2 | Counting semaphore described with a resource count and example
## High
P: Write the producer and consumer for a bounded buffer of size N using semaphores empty, full and mutex. Explain why swapping wait(empty) and wait(mutex) in the producer can cause deadlock.
A: Initial: empty = N, full = 0, mutex = 1.
Producer: wait(empty); wait(mutex); add item; signal(mutex); signal(full).
Consumer: wait(full); wait(mutex); remove item; signal(mutex); signal(empty).
If the producer does wait(mutex) first and then wait(empty) when the buffer is full, it sleeps while holding mutex. The consumer cannot get mutex to remove an item and free a slot, so both wait forever: deadlock.
R: 2 | Correct producer and consumer using three semaphores
R: 2 | Correct initial values
R: 1 | Explains the deadlock from holding mutex while waiting
## Advanced
P: (a) A counting semaphore starts at 10. After 6 wait operations and 4 signal operations complete, what is its value? (b) In the dining philosophers problem with 5 philosophers and 5 chopsticks, show how deadlock can happen and give two ways to avoid it.
A: (a) 10 - 6 + 4 = 8.
(b) If every philosopher picks up the left chopstick at the same moment, each waits for the right one held by a neighbour: circular wait, deadlock.
Fixes: allow at most 4 philosophers to sit at the table; pick up both chopsticks only if both are free (inside a critical section); or make odd philosophers pick left first and even philosophers pick right first.
R: 1 | (a) value is 8
R: 2 | Deadlock scenario with everyone holding the left chopstick
R: 2 | Two valid prevention methods
