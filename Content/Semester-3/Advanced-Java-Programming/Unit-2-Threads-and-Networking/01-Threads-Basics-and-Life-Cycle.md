# Threads: basics and life cycle
minutes: 25
yt: java thread life cycle runnable thread class
yt: java create thread extends thread implements runnable
@study
A **thread** is a lightweight unit of execution inside a process. Java lets one program run several tasks at the same time (for example downloading a file while the screen stays responsive). This lesson covers only creating threads and their life cycle.

## Creating a thread
1. **Extend `Thread`** and override `run()`.
2. **Implement `Runnable`** and pass it to a `Thread` (preferred: the class can extend something else).
3. A lambda: `new Thread(() -> ...)`.
Call **`start()`** (not `run()`) to create a new thread of execution. Calling `run()` directly just runs the method in the current thread.
```java
public class ThreadDemo {
    static class Hello extends Thread {
        public void run() { System.out.println("Hello from " + getName()); }
    }
    public static void main(String[] args) throws InterruptedException {
        Hello t1 = new Hello(); t1.setName("worker-1");
        Thread t2 = new Thread(() -> System.out.println("Hello from lambda thread"), "worker-2");
        t1.start(); t1.join();
        t2.start(); t2.join();
        System.out.println("main finished after joins");
    }
}
```
Output:
```
Hello from worker-1
Hello from lambda thread
main finished after joins
```
`join()` makes the caller wait until that thread dies; here it also keeps the output order fixed.

## Life cycle states (`Thread.State`)
1. **NEW:** created, `start()` not yet called.
2. **RUNNABLE:** ready or running (the scheduler decides).
3. **BLOCKED / WAITING / TIMED_WAITING:** temporarily not running (for example `sleep(ms)` gives TIMED_WAITING).
4. **TERMINATED:** `run()` finished.
A terminated thread cannot be restarted.

## Useful methods
`sleep(ms)`, `join()`, `isAlive()`, `getName()`, `setPriority(1–10)`, `Thread.currentThread()`, `interrupt()`. Daemon threads (`setDaemon(true)`) do not keep the JVM alive.

## Thread priority
Hints to the scheduler (`MIN_PRIORITY` 1, `NORM_PRIORITY` 5, `MAX_PRIORITY` 10). The actual order is not guaranteed.

## Hindi saransh
Thread एक हल्की execution unit है। `start()` नया thread बनाता है, `run()` सिर्फ़ method call है। Life cycle: New → Runnable → (Waiting) → Terminated।

> start() creates a new thread; run() alone does not.
@qa
Q: Why use Runnable instead of extending Thread?
A: A class can extend only one class, so implementing Runnable keeps inheritance free, and it separates the task from the thread that runs it.
Q: What happens if you call run() instead of start()?
A: The code runs in the calling thread like an ordinary method, so no new thread is created.
Q: Name the states in the life cycle of a thread.
A: New, Runnable, Blocked, Waiting, Timed Waiting and Terminated.
Q: What does join() do?
A: It makes the calling thread wait until the target thread has finished.
Q: Can a terminated thread be started again?
A: No. Calling start() again throws IllegalThreadStateException.
@quiz
? To begin a new thread's execution you call
- run()
+ start()
- join()
- wait()
! start() schedules the thread to run its run() method.
? State of a thread before start() is called
+ NEW
- RUNNABLE
- WAITING
- TERMINATED
! It has been created only.
? Thread.sleep(500) puts the thread in
- NEW
- TERMINATED
+ TIMED_WAITING
- BLOCKED
! It pauses for a fixed time.
? join() is used to
- kill a thread
+ wait for a thread to finish
- raise priority
- create a daemon
! The caller waits for the target to die.
? Runnable is
- a class
+ an interface
- an exception
- a package
! It has the single method run().

@visual
graph | Thread life cycle (simplified) | New^>Runnable: start; Runnable>Timed Waiting: sleep; Timed Waiting>Runnable: time is over; Runnable>Terminated*: run finishes

@problems
## Moderate
P: Show two ways to create a thread in Java. What is the difference between start() and run()?
A: 1) class Worker extends Thread { public void run() { ... } } then new Worker().start(); 2) class Task implements Runnable { public void run() { ... } } then new Thread(new Task()).start(). Implementing Runnable is preferred because the class can still extend another class.
start() creates a new thread of execution and calls run() in it; calling run() directly just executes the method in the current thread like an ordinary method.
R: 2 | Both creation methods
R: 2 | start versus run
## High
P: A thread t prints "T". The main thread starts t, calls t.join() and then prints "M". What is the output and why? What changes without join()?
A: Output: T then M. join() makes the main thread wait until t finishes, so M is always printed after T. Without join() the order is not guaranteed because both threads run independently, so M may appear before T.
R: 2 | Output T then M
R: 2 | join waits for termination
R: 1 | No guaranteed order without join
## Advanced
P: Give the state of a thread t after: new Thread(r); t.start(); during Thread.sleep(1000) inside run; after run ends. What happens if you call t.start() twice?
A: After new Thread(r): NEW. After start(): RUNNABLE. While sleeping inside run: TIMED_WAITING. After run ends: TERMINATED. Calling start() a second time throws IllegalThreadStateException, because a thread can be started only once.
R: 2 | NEW and RUNNABLE
R: 2 | TIMED_WAITING and TERMINATED
R: 1 | IllegalThreadStateException
