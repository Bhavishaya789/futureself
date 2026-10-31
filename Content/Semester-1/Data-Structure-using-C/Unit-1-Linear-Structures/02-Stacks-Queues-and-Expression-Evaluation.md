# Stacks, queues and expression evaluation
minutes: 25
yt: infix to postfix conversion stack
@study
A **stack** is LIFO (last in, first out): push, pop, peek. A **queue** is FIFO (first in, first out): enqueue at the rear, dequeue at the front. Variants: circular queue, deque, priority queue.
**Applications of a stack:** function calls (recursion), undo, bracket matching, converting and evaluating expressions.
## Infix to postfix
Scan the expression; operands go to the output; operators are held on a stack and popped when a lower- or equal-precedence operator arrives. Precedence: * and / above + and -.
- A + B * C -> **ABC*+**
- A * B + C * D -> **AB*CD*+**
## Evaluating postfix
Push operands; on an operator pop two, apply, push the result.
- `2 3 * 4 +` -> 2 x 3 = 6, then 6 + 4 = **10**.
- `5 1 2 + 4 * + 3 -` -> 5 + (1 + 2) x 4 - 3 = **14**.
```c
#include <stdio.h>
int st[50], top = -1;
void push(int x) { st[++top] = x; }
int pop(void) { return st[top--]; }
int main(void) {
    char *e[] = {"5","1","2","+","4","*","+","3","-"};
    for (int i = 0; i < 9; i++) {
        char c = e[i][0];
        if (c >= '0' && c <= '9') push(c - '0');
        else { int b = pop(), a = pop();
               push(c=='+'?a+b : c=='-'?a-b : c=='*'?a*b : a/b); }
    }
    printf("%d\n", pop()); return 0;
}
```
Output: `14`.
## Hindi saransh
Stack LIFO hai, queue FIFO. A+B*C ka postfix ABC*+ hota hai.
> Stack overflow happens when pushing to a full stack; underflow when popping an empty one.
@qa
Q: Postfix of A + B * C?
A: ABC*+.
Q: Which data structure is used for function calls?
A: A stack (the call stack).
Q: Value of postfix 2 3 * 4 +?
A: 10.
Q: Difference between stack and queue?
A: A stack removes the newest element first (LIFO); a queue removes the oldest first (FIFO).
@quiz
? Postfix of A * B + C * D
- ABCD*+*
+ AB*CD*+
- A*BC*D+
- ABCD+**
! Multiplications first.
? Evaluating 2 3 * 4 + gives
- 14
+ 10
- 24
- 9
! (2 x 3) + 4.
? A queue follows
- LIFO
+ FIFO
- random order
- priority only
! First in first out.
? Evaluating 5 1 2 + 4 * + 3 - gives
- 12
+ 14
- 16
- 10
! 5 + 12 - 3.
@visual
steps | Postfix evaluation | Read a token; Push if operand; Pop two if operator; Apply the operator; Push the result; Last value is the answer
compare | Stack versus queue | Stack=LIFO~push and pop at the top; Queue=FIFO~enqueue at rear and dequeue at front
@problems
## Moderate
P: Convert A + B * C to postfix.
A: ABC*+.
R: 1 | Precedence
R: 1 | ABC*+
## High
P: Evaluate the postfix expression 5 1 2 + 4 * + 3 -.
A: 14.
R: 2 | Stack steps
R: 1 | 14
## Advanced
P: Convert (A + B) * C to postfix with a stack.
A: AB+C*.
R: 2 | Handle brackets
R: 2 | AB+C*
