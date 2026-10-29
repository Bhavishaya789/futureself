# Threads and multithreading models
minutes: 30
yt: threads in operating system user level kernel level multithreading models
yt: process vs thread difference
@study
A **thread** is the smallest unit of CPU execution within a process: a **program counter, register set and stack**. Threads of the same process **share** the code, data, heap, open files and signals. A process with several threads can do many things at once.

## Why threads?
- **Responsiveness:** a GUI can keep responding while another thread loads data.
- **Resource sharing:** memory is shared by default, so communication is cheap.
- **Economy:** creating a thread and switching between threads costs much less than for processes.
- **Scalability:** threads can run in parallel on multiple cores.

## Process versus thread
| Process | Thread |
| --- | --- |
| Heavyweight, own address space | Lightweight, shares address space |
| Context switch is expensive | Context switch is cheaper |
| Isolated: one crash does not kill others | A faulty thread can crash the whole process |
| Communication through IPC | Communication through shared variables |

## User-level and kernel-level threads
- **User-level threads (ULT):** managed by a library in user space; the kernel is unaware of them. Fast to create and switch, but if one thread blocks on a system call the **whole process blocks**, and they cannot use several CPUs.
- **Kernel-level threads (KLT):** managed by the OS; the kernel schedules each thread. A blocked thread does not block others and threads can run on different cores, but operations are slower.

## Multithreading models
1. **Many-to-one:** many user threads map to one kernel thread. Simple, but no parallelism and one blocking call blocks all.
2. **One-to-one:** each user thread maps to its own kernel thread (Linux, Windows). Good concurrency, but creating a thread creates a kernel thread so the number is limited.
3. **Many-to-many:** many user threads multiplex onto a smaller or equal number of kernel threads. Flexible but harder to implement.

## Thread lifecycle (basics)
A thread is **created** (new), becomes **runnable** (ready), **runs**, may be **blocked/waiting**, and finally **terminates**. These states mirror those of a process.

## Creating a thread in C (POSIX)
```c
#include <stdio.h>
#include <pthread.h>
void *work(void *arg) {
    int id = *(int *)arg;
    printf("thread %d running\n", id);
    return NULL;
}
int main(void) {
    pthread_t t;
    int id = 1;
    pthread_create(&t, NULL, work, &id);
    pthread_join(t, NULL);
    printf("main: thread joined\n");
    return 0;
}
```
`pthread_create` starts the thread, and `pthread_join` makes `main` wait for it to finish. Compile with `gcc file.c -pthread`.

## Thread issues
`fork()` in a multithreaded program, signal handling (to which thread?), thread cancellation (immediate or deferred) and thread-local storage.

> Threads share the process's memory but have their own stack and registers.
@qa
Q: What do threads of the same process share, and what is private?
A: They share code, data, heap and open files. Each thread has its own program counter, registers and stack.
Q: Why is creating a thread cheaper than creating a process?
A: A thread does not need a new address space or copies of resources; it shares those of its process.
Q: What is the main drawback of user-level threads?
A: The kernel does not know about them, so one thread making a blocking system call blocks the entire process, and they cannot run in parallel on multiple CPUs.
Q: Which multithreading model gives the best concurrency with a fixed one-to-one mapping?
A: The one-to-one model, where every user thread has a kernel thread, as in Linux and Windows.
Q: What does pthread_join do?
A: It makes the calling thread wait until the specified thread terminates.
@quiz
? Which of the following is NOT shared between threads of a process?
- Code
- Global data
+ Stack
- Open files
! Each thread has its own stack and registers.
? In the many-to-one model a blocking system call by one thread
- blocks only that thread
+ blocks the entire process
- is not possible
- kills the process
! The kernel sees only one thread.
? Thread context switching is faster than process context switching because
+ no change of address space is needed
- threads have no registers
- threads use no memory
- the kernel is not involved at all
! Threads of one process share the same address space.
? Linux and Windows mainly use which model?
- Many-to-one
+ One-to-one
- Many-to-many
- Batch
! Each user thread has a corresponding kernel thread.
? Which function waits for a POSIX thread to end?
- pthread_create
- pthread_exit
+ pthread_join
- pthread_wait_all
! join blocks the caller until the thread finishes.

@visual
compare | Process and thread | Process=Own address space~Heavy to create and switch~Isolated, so safer~Communicates through IPC; Thread=Shares code, data and heap~Light to create and switch~One bug can affect the whole process~Communicates through shared memory

@problems
## Moderate
P: Give four differences between a process and a thread.
A: 1) A process has its own address space; threads of a process share it.
2) Creating and context switching processes is slower than for threads.
3) Processes are isolated; a thread crash can bring down its whole process.
4) Processes communicate through IPC (pipes, messages); threads communicate through shared memory.
Each thread has its own stack, registers and program counter.
R: 2 | Two correct differences
R: 2 | Two more correct differences
## High
P: Which resources do threads of one process share, and which are private to each thread? Why is a multithreaded web browser more responsive than a single-threaded one?
A: Shared: code section, data section (global variables), heap, open files. Private: thread ID, program counter, registers, and stack.
A multithreaded browser can keep the user interface responsive in one thread while other threads download pages and render images, so a slow network request does not freeze the window.
R: 2 | Correct shared resources
R: 2 | Correct private resources
R: 1 | Responsiveness explained with background threads
## Advanced
P: Explain the many-to-one, one-to-one and many-to-many thread models. What goes wrong in many-to-one when one thread makes a blocking system call? An application is 75% parallelisable; use Amdahl's law to find the speedup on 4 cores.
A: Many-to-one: many user threads map to one kernel thread; cheap but no real parallelism and one blocking call blocks all threads. One-to-one: each user thread has its own kernel thread; true parallelism but more overhead (Linux, Windows). Many-to-many: many user threads multiplexed on a smaller or equal number of kernel threads; flexible but complex.
Amdahl: speedup = 1 / ((1 - P) + P/N) = 1 / (0.25 + 0.75/4) = 1 / 0.4375 = 2.29.
R: 2 | Describes all three models correctly
R: 1 | Blocking call in many-to-one blocks the entire process
R: 2 | Amdahl calculation gives about 2.29
