# Lists, dictionaries, comprehensions and exceptions
minutes: 25
yt: python lists dictionaries comprehension exceptions
@study
```python
nums = [5, 3, 8, 1]
print(sorted(nums), max(nums), sum(nums))          # [1, 3, 5, 8] 8 17
squares = [x * x for x in nums if x % 2]            # [25, 9, 1]
marks = {"Asha": 82, "Ravi": 74}
marks["Meena"] = 91
for name, m in sorted(marks.items(), key=lambda kv: -kv[1]):
    print(name, m)                                   # Meena 91, Asha 82, Ravi 74

try:
    value = int("12a")
except ValueError as e:
    print("bad number:", e)
finally:
    print("done")
```
**List operations:** append, insert, pop, remove, slicing, sort. **Dict:** key-value pairs with O(1) average lookup; keys must be hashable. **Set:** unique elements, union and intersection. **File I/O:** `with open("f.txt") as f:` closes the file automatically. **Exceptions:** `try / except / else / finally`; raise your own with `raise`.
## Hindi saransh
List mutable hai, dict key-value store hai. try-except se error handle karte hain.
> Use `with open(...)` so the file is always closed.
@qa
Q: Average-case lookup in a dict?
A: O(1).
Q: Output of [x*x for x in [5,3,8,1] if x%2]?
A: [25, 9, 1].
Q: What does `finally` do?
A: Runs whether or not an exception occurred.
Q: Why use `with` for files?
A: It closes the file automatically, even on errors.
@quiz
? [x*x for x in [5,3,8,1] if x % 2] gives
- [25, 9, 64, 1]
+ [25, 9, 1]
- [5, 3, 1]
- [64]
! Odd numbers only.
? int("12a") raises
- TypeError
+ ValueError
- KeyError
- IndexError
! Invalid literal.
? Dictionary keys must be
- lists
+ hashable
- numbers only
- strings only
! Immutable types.
? sum([5, 3, 8, 1]) is
- 16
+ 17
- 18
- 15
! 5+3+8+1.
@visual
steps | Exception handling | Code in try runs; An error jumps to except; else runs if no error; finally always runs
@problems
## Moderate
P: Write a list comprehension for the squares of the even numbers up to 10.
A: [x*x for x in range(1, 11) if x % 2 == 0].
R: 1 | Range
R: 1 | Filter
## High
P: Count word frequencies in a sentence using a dictionary.
A: Split the sentence and use d[w] = d.get(w, 0) + 1.
R: 2 | Loop
R: 1 | get
## Advanced
P: Write a function that reads a number and handles invalid input.
A: Use try int(input()) except ValueError to print a message and ask again in a loop.
R: 2 | try/except
R: 2 | Loop
