# Linux practice: shell commands, permissions and processes
minutes: 35
yt: linux commands for beginners chmod ps kill grep pipe
yt: fork exec wait C program Linux
@study
Linux is the most widely studied Unix-like OS. This lesson turns the theory into commands.

## Navigating and files
- `pwd` print working directory, `ls -l` long listing, `cd dir` change directory.
- `mkdir`, `rmdir`, `touch file`, `cp a b`, `mv a b`, `rm file`, `rm -r dir`.
- `cat`, `less`, `head -n 5 file`, `tail -f log` (follow a log).
- `find . -name "*.c"`, `grep -n "main" file.c`, `wc -l file`.

## Pipes and redirection
- `>` overwrite, `>>` append, `<` input.
- `ls | wc -l` sends the output of `ls` into `wc` and counts the files: a **pipe** is an IPC mechanism.
- `2>&1` merges errors with output.

## Permissions
`ls -l` shows `-rwxr-xr-- 1 anil dev 120 Oct 10 notes.sh`: type, owner, group, other.
Each permission is a number: **r = 4, w = 2, x = 1**. So `rwx` = 7, `r-x` = 5, `r--` = 4.
- `chmod 754 notes.sh` sets owner = rwx (7), group = r-x (5), others = r-- (4).
- `chmod u+x file` adds execute for the owner; `chmod go-w file` removes write for group and others.
- `chown user:group file` changes ownership.
Directories need **x** to enter them and **r** to list them.

## Processes
- `ps aux` list processes; `top` live view; `pstree` tree.
- `kill PID` sends SIGTERM (polite stop), `kill -9 PID` sends SIGKILL (forced).
- `command &` runs in the background; `jobs`, `fg`, `bg` manage jobs; `nice -n 10 cmd` lowers priority.
- A process has a **PID** and a **PPID** (parent). The first process is `init`/`systemd` with PID 1.

## fork and exec together
A shell starts a command by `fork()` (copy itself) then `exec()` (replace the child with the program), and `wait()` for it.
```c
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>
int main(void) {
    pid_t pid = fork();
    if (pid == 0) {
        execlp("echo", "echo", "hello from the child via exec", (char *)NULL);
        return 1;               /* only reached if exec fails */
    }
    int status;
    waitpid(pid, &status, 0);
    printf("child exit status: %d\n", WEXITSTATUS(status));
    return 0;
}
```
Output:
```
hello from the child via exec
child exit status: 0
```
After a successful `exec` the child's old code is gone; the new program runs in the same process (same PID).

## Signals and inter-process communication
Signals (`SIGINT` from Ctrl+C, `SIGTERM`, `SIGKILL`, `SIGSEGV`) notify a process asynchronously. Other IPC: pipes, named pipes (FIFOs), message queues, shared memory and sockets.

## Memory and disk tools
`free -h` memory use, `df -h` disk free, `du -sh dir` directory size, `mount` shows mounted file systems, `vmstat` for paging and swapping statistics.

> chmod digits: r=4, w=2, x=1; add them for each of owner, group, other.
@qa
Q: What does chmod 754 do?
A: It gives the owner read, write and execute (7), the group read and execute (5), and others read only (4).
Q: What is the difference between kill and kill -9?
A: kill sends SIGTERM, which lets the process clean up and exit. kill -9 sends SIGKILL, which the process cannot catch or ignore.
Q: How does a shell run a program?
A: It forks a child process, the child calls exec to replace itself with the program, and the shell waits for the child to finish.
Q: What does the pipe in ls | wc -l do?
A: It connects the standard output of ls to the standard input of wc, which counts lines, so you get the number of entries.
Q: What does a directory's x permission mean?
A: Permission to enter (traverse) the directory; r allows listing its names.
@quiz
? The numeric value of rwx is
- 5
- 6
+ 7
- 4
! r=4 + w=2 + x=1 = 7.
? chmod 644 file gives the owner
- read only
+ read and write
- all permissions
- no permissions
! 6 = 4 + 2 = read and write.
? Which signal cannot be caught or ignored?
- SIGTERM
- SIGINT
+ SIGKILL
- SIGHUP
! SIGKILL always terminates the process.
? After exec succeeds, the process
+ runs a new program with the same PID
- gets a new PID
- stays as before
- becomes a zombie
! exec replaces the memory image, not the process identity.
? The command to see running processes is
- ls
- pwd
+ ps
- cp
! ps (or top) lists processes.

@visual
formula | chmod 754 notes.txt | 7 = rwx for the owner (4+2+1) ; 5 = r-x for the group (4+0+1) ; 4 = r-- for others (4)

@problems
## Moderate
P: What permissions does chmod 644 give? Write the equivalent symbolic form of the result for ls -l.
A: 6 = rw- for the owner, 4 = r-- for the group, 4 = r-- for others. ls -l shows -rw-r--r--. The owner can read and write; everyone else can only read.
R: 2 | Owner rw, group r, others r
R: 2 | -rw-r--r-- form
## High
P: Write one command for each: (a) find all .log files larger than 1 MB under the current directory; (b) count the lines containing the word error in app.log; (c) count how many java processes are running.
A: (a) find . -name "*.log" -size +1M
(b) grep -c "error" app.log
(c) ps aux | grep java | grep -v grep | wc -l
R: 2 | find command with name and size
R: 2 | grep -c command
R: 1 | Pipeline with ps, grep and wc
## Advanced
P: Explain what the shell does when you type ls. Then explain the difference between >, >> and |, and what ls > out.txt 2>&1 does.
A: The shell reads the command, calls fork() to create a child process, the child calls exec() to replace itself with the ls program, and the parent calls wait() until the child ends.
> redirects output to a file, overwriting it; >> appends; | sends the output of one command as input to the next.
ls > out.txt 2>&1 sends standard output to out.txt and also sends standard error (stream 2) to the same place as stream 1.
R: 2 | fork, exec and wait sequence
R: 2 | Differences of >, >> and |
R: 1 | Explains 2>&1
