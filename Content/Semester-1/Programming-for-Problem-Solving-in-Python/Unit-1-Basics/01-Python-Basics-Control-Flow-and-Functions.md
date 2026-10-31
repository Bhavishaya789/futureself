# Python basics: types, control flow and functions
minutes: 25
yt: python basics for beginners
@study
Python is dynamically typed and interpreted. Basic types: int, float, str, bool; collections: list, tuple, set, dict. Indentation defines blocks.
```python
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

print([n for n in range(1, 30) if is_prime(n)])
# [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

def fact(n):               # recursion
    return 1 if n <= 1 else n * fact(n - 1)
print(fact(5))             # 120
```
**Control flow:** if / elif / else, for and while loops, break, continue. **Functions:** parameters, default arguments, return values, `*args`, `**kwargs`. **Scope:** local variables exist inside the function; use `global` sparingly.
Other facts: `//` is floor division, `%` remainder, `**` power; strings are immutable; slicing `s[1:4]`; `range(5)` gives 0 to 4.
## Hindi saransh
Python mein indentation se block banta hai. `//` floor division hai. Function def se banta hai.
> Lists are mutable; tuples and strings are immutable.
@qa
Q: What does 7 // 2 give?
A: 3.
Q: Are lists mutable?
A: Yes.
Q: Output of fact(5)?
A: 120.
Q: What is a default argument?
A: A parameter with a pre-set value used when the caller does not supply one.
@quiz
? 7 // 2 in Python is
- 3.5
+ 3
- 4
- 1
! Floor division.
? Which is immutable?
- list
- dict
+ tuple
- set
! Tuples cannot change.
? range(5) produces
- 1 to 5
+ 0 to 4
- 0 to 5
- 1 to 4
! Stop is exclusive.
? Primes below 30 include
- 1
+ 29
- 25
- 27
! 29 is prime.
@visual
flow | Control flow of a loop | Start > Check condition > Run the body > Update > Check again > Exit
@problems
## Moderate
P: Write a Python function to compute the factorial of n.
A: def fact(n): return 1 if n <= 1 else n * fact(n - 1)
R: 1 | Base case
R: 1 | Recursive step
## High
P: Write code to print primes below 30.
A: Use a loop and the is_prime function; output 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.
R: 2 | Prime test
R: 1 | Output
## Advanced
P: Explain what happens in a function with a mutable default argument such as def f(x, a=[]).
A: The default list is created once and shared between calls, so appends accumulate. Use None as the default and create the list inside.
R: 2 | Shared default
R: 2 | Fix with None
