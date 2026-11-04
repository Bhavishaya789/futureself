# Conditional and Iterative Statements
minutes: 45
yt: class 11 computer science python if else for while loops break continue
@study
Selection: if, if-else, if-elif-else with indentation. Nested conditions. Iteration: for loop with range(start, stop, step), while loop. Jump statements: break (exits the loop), continue (skips current iteration), pass (does nothing). Loop else clause. Nested loops for patterns. range generates integers up to stop minus 1. Common programs: even/odd, largest of three, leap year, factorial, sum of digits, Fibonacci, prime, palindrome, reverse a number, table, patterns. Sentinel loops. Infinite loops. Operators used in conditions. Truthiness of values.
## Deep dive: Selection
if x > 0: ... elif x == 0: ... else: .... Leap year: year % 4 == 0 and (year % 100 != 0 or year % 400 == 0). Grade calculation using elif. Nested if inside if. Boolean expressions with and, or, not. Conditional values: 0, empty string, None are False; others True.
## Deep dive: Iteration
for i in range(1, 6) prints 1 to 5; range(10, 0, -2) gives 10, 8, 6, 4, 2. while loop repeats while a condition is true; must update the control variable to avoid an infinite loop. Sum 1 to n; factorial; digits: while n > 0: d = n % 10; n //= 10. Break exits; continue skips. for-else runs when the loop finishes without break. Nested loops: triangle pattern with for i in range(1, 6): print("*" * i).
## Deep dive: Programs
Prime test: for i in range(2, n): if n % i == 0: break; else prime. Fibonacci: a, b = 0, 1; for loop updates a, b = b, a + b. Palindrome number: reverse and compare. Armstrong numbers: sum of cubes of digits. GCD by loop. Multiplication table with range(1, 11). Counting vowels. Menu-driven programs with while True and break.
## Hindi saransh
Sharti aur punaravartan kathan: if-elif-else, for, while, break, continue. range(start, stop, step).
> range(1, 6) generates 1 to 5 because the stop value is excluded.
@formulas
## Loops
for | Known count | range()
while | Condition | Update variable
break | Exit loop | Stop
continue | Skip iteration | Next
## range
range(5) | 0 to 4 | Stop 5
range(1, 6) | 1 to 5 | Start 1
range(10, 0, -2) | 10 8 6 4 2 | Step -2

@qa
Q: Which executes a block when a condition is true?
A: if statement executes a block when a condition is true.
Q: What do you know about if statement?
A: If statement executes a block when a condition is true.
Q: Which checks another condition if the first fails?
A: elif checks another condition if the first fails.
Q: What do you know about elif?
A: Elif checks another condition if the first fails.
Q: Which the block executed when all conditions fail?
A: else the block executed when all conditions fail.
Q: What do you know about else?
A: Else the block executed when all conditions fail.
Q: Which an if inside another if?
A: Nested if an if inside another if.
Q: What do you know about Nested if?
A: Nested if an if inside another if.
Q: Which an expression evaluating to True or False?
A: Condition an expression evaluating to True or False.
Q: What do you know about Condition?
A: Condition an expression evaluating to True or False.
Q: Which the spacing defining a block?
A: Indentation the spacing defining a block.
Q: What do you know about Indentation?
A: Indentation the spacing defining a block.
Q: Which an expression with a True or False result?
A: Boolean expression an expression with a True or False result.
Q: What do you know about Boolean expression?
A: Boolean expression an expression with a True or False result.
Q: Which a loop iterating over a sequence?
A: for loop a loop iterating over a sequence.
Q: What do you know about for loop?
A: For loop a loop iterating over a sequence.
Q: Which a loop repeating while a condition holds?
A: while loop a loop repeating while a condition holds.
Q: What do you know about while loop?
A: While loop a loop repeating while a condition holds.
Q: Which the function generating a sequence of integers?
A: range() the function generating a sequence of integers.
Q: What do you know about range()?
A: Range() the function generating a sequence of integers.
Q: Which the first value of range?
A: Start the first value of range.
Q: What do you know about Start?
A: Start the first value of range.
Q: Which the end value of range, excluded?
A: Stop the end value of range, excluded.
Q: What do you know about Stop?
A: Stop the end value of range, excluded.
Q: Which the increment of range?
A: Step the increment of range.
Q: What do you know about Step?
A: Step the increment of range.
Q: Which the statement exiting a loop?
A: break the statement exiting a loop.
Q: What do you know about break?
A: Break the statement exiting a loop.
Q: Which the statement skipping to the next iteration?
A: continue the statement skipping to the next iteration.
Q: What do you know about continue?
A: Continue the statement skipping to the next iteration.
Q: Which a null statement doing nothing?
A: pass a null statement doing nothing.
Q: What do you know about pass?
A: Pass a null statement doing nothing.
Q: Which the else block of a loop running without break?
A: Loop else the else block of a loop running without break.
Q: What do you know about Loop else?
A: Loop else the else block of a loop running without break.
Q: Which a loop that never ends?
A: Infinite loop a loop that never ends.
Q: What do you know about Infinite loop?
A: Infinite loop a loop that never ends.
Q: Which the variable controlling a loop?
A: Control variable the variable controlling a loop.
Q: What do you know about Control variable?
A: Control variable the variable controlling a loop.
Q: Which a variable counting iterations?
A: Counter a variable counting iterations.
Q: What do you know about Counter?
A: Counter a variable counting iterations.
Q: Which a variable collecting a running total?
A: Accumulator a variable collecting a running total.
Q: What do you know about Accumulator?
A: Accumulator a variable collecting a running total.
Q: Which a special value ending input?
A: Sentinel a special value ending input.
Q: What do you know about Sentinel?
A: Sentinel a special value ending input.
Q: Which a loop inside another loop?
A: Nested loop a loop inside another loop.
Q: What do you know about Nested loop?
A: Nested loop a loop inside another loop.
Q: Which printing shapes using loops?
A: Pattern printing printing shapes using loops.
Q: What do you know about Pattern printing?
A: Pattern printing printing shapes using loops.
Q: Which a year divisible by 4 and not by 100 unless by 400?
A: Leap year a year divisible by 4 and not by 100 unless by 400.
Q: What do you know about Leap year?
A: Leap year a year divisible by 4 and not by 100 unless by 400.
Q: Which the product of integers up to n?
A: Factorial the product of integers up to n.
Q: What do you know about Factorial?
A: Factorial the product of integers up to n.
Q: Which a series where each term is the sum of the previous two?
A: Fibonacci a series where each term is the sum of the previous two.
Q: What do you know about Fibonacci?
A: Fibonacci a series where each term is the sum of the previous two.
Q: Which a number with exactly two factors?
A: Prime number a number with exactly two factors.
Q: What do you know about Prime number?
A: Prime number a number with exactly two factors.
Q: Which a number or word reading the same both ways?
A: Palindrome a number or word reading the same both ways.
Q: What do you know about Palindrome?
A: Palindrome a number or word reading the same both ways.
Q: Which a number equal to the sum of cubes of its digits?
A: Armstrong number a number equal to the sum of cubes of its digits.
Q: What do you know about Armstrong number?
A: Armstrong number a number equal to the sum of cubes of its digits.
Q: Which the sum of the digits of a number?
A: Digit sum the sum of the digits of a number.
Q: What do you know about Digit sum?
A: Digit sum the sum of the digits of a number.
Q: Which a number with digits in reverse order?
A: Reverse number a number with digits in reverse order.
Q: What do you know about Reverse number?
A: Reverse number a number with digits in reverse order.
Q: Which a list of multiples of a number?
A: Multiplication table a list of multiples of a number.
Q: What do you know about Multiplication table?
A: Multiplication table a list of multiples of a number.
Q: Which a program offering options to the user?
A: Menu-driven program a program offering options to the user.
Q: What do you know about Menu-driven program?
A: Menu-driven program a program offering options to the user.
Q: Which a value treated as True?
A: Truthy value a value treated as True.
Q: What do you know about Truthy value?
A: Truthy value a value treated as True.
Q: Which a value treated as False, such as 0?
A: Falsy value a value treated as False, such as 0.
Q: What do you know about Falsy value?
A: Falsy value a value treated as False, such as 0.
Q: Which and, or, not?
A: Logical operator and, or, not.
Q: What do you know about Logical operator?
A: Logical operator and, or, not.
Q: Which an expression such as a < b < c?
A: Comparison chain an expression such as a < b < c.
Q: What do you know about Comparison chain?
A: Comparison chain an expression such as a < b < c.
Q: Which // used to drop the last digit?
A: Floor division // used to drop the last digit.
Q: What do you know about Floor division?
A: Floor division // used to drop the last digit.
Q: Which % used to get the last digit?
A: Modulus % used to get the last digit.
Q: What do you know about Modulus?
A: Modulus % used to get the last digit.
Q: Which following the values through a loop?
A: Tracing following the values through a loop.
Q: What do you know about Tracing?
A: Tracing following the values through a loop.
Q: Which an error in loop boundaries?
A: Off by one error an error in loop boundaries.
Q: What do you know about Off by one error?
A: Off by one error an error in loop boundaries.
Q: Which an object that can be looped over?
A: Iterable an object that can be looped over.
Q: What do you know about Iterable?
A: Iterable an object that can be looped over.
Q: Which an ordered collection such as a string?
A: Sequence an ordered collection such as a string.
Q: What do you know about Sequence?
A: Sequence an ordered collection such as a string.
Q: Which one pass through a loop body?
A: Iteration one pass through a loop body.
Q: What do you know about Iteration?
A: Iteration one pass through a loop body.
Q: Which manual execution of a program?
A: Dry run manual execution of a program.
Q: What do you know about Dry run?
A: Dry run manual execution of a program.
Q: Which the grammar of a language?
A: Syntax the grammar of a language.
Q: What do you know about Syntax?
A: Syntax the grammar of a language.
Q: Which the symbol ending an if, for or while line?
A: Colon the symbol ending an if, for or while line.
Q: What do you know about Colon?
A: Colon the symbol ending an if, for or while line.
Q: Which a group of statements at the same indentation?
A: Block a group of statements at the same indentation.
Q: What do you know about Block?
A: Block a group of statements at the same indentation.
Q: What does range(1, 6) generate?
A: 1, 2, 3, 4, 5.
Q: What does range(10, 0, -2) generate?
A: 10, 8, 6, 4, 2.
Q: When is a while loop used?
A: When the number of iterations is not known.
Q: What is an infinite loop?
A: A loop with a condition that never becomes false.
Q: What does break do?
A: Exits the nearest enclosing loop.
Q: What does continue do?
A: Skips the rest of the current iteration.
Q: What does pass do?
A: Nothing; it is a placeholder.
Q: When does the loop else run?
A: When the loop ends without a break.
Q: What does elif do?
A: Tests another condition after an if.
Q: How is the last digit found?
A: n % 10.
Q: How is the last digit removed?
A: n // 10.
Q: How do you print a table of 5?
A: for i in range(1, 11): print(5 * i).
Q: How do you check a leap year?
A: Divisible by 4 and not by 100, or divisible by 400.
Q: What is a nested loop?
A: A loop inside another loop.
Q: How can the factorial be found?
A: Multiply the numbers from 1 to n in a loop.
Q: How is a palindrome number tested?
A: Reverse it and compare with the original.
Q: Why is indentation important?
A: It defines blocks in Python.
@quiz
? Which executes a block when a condition is true?
- Multiplication table
+ if statement
- Pattern printing
- Accumulator
! If statement executes a block when a condition is true.
? Which statement is true of if statement?
- The grammar of a language
- A variable collecting a running total
- A variable counting iterations
+ Executes a block when a condition is true
! If statement executes a block when a condition is true.
? Which checks another condition if the first fails?
- Leap year
- Logical operator
- Dry run
+ elif
! Elif checks another condition if the first fails.
? Which statement is true of elif?
- A group of statements at the same indentation
- A number equal to the sum of cubes of its digits
- One pass through a loop body
+ Checks another condition if the first fails
! Elif checks another condition if the first fails.
? Which the block executed when all conditions fail?
- Nested if
- Accumulator
- Boolean expression
+ else
! Else the block executed when all conditions fail.
? Which statement is true of else?
- A value treated as False, such as 0
+ The block executed when all conditions fail
- The grammar of a language
- A variable collecting a running total
! Else the block executed when all conditions fail.
? Which an if inside another if?
- elif
- for loop
+ Nested if
- if statement
! Nested if an if inside another if.
? Which statement is true of Nested if?
- A null statement doing nothing
+ An if inside another if
- The else block of a loop running without break
- A value treated as True
! Nested if an if inside another if.
? Which an expression evaluating to True or False?
+ Condition
- Boolean expression
- Truthy value
- Colon
! Condition an expression evaluating to True or False.
? Which statement is true of Condition?
- A variable counting iterations
- // used to drop the last digit
- A value treated as True
+ An expression evaluating to True or False
! Condition an expression evaluating to True or False.
? Which the spacing defining a block?
- Sentinel
- Reverse number
- Condition
+ Indentation
! Indentation the spacing defining a block.
? Which statement is true of Indentation?
- A special value ending input
- The end value of range, excluded
- A value treated as True
+ The spacing defining a block
! Indentation the spacing defining a block.
? Which an expression with a True or False result?
- Dry run
+ Boolean expression
- break
- Truthy value
! Boolean expression an expression with a True or False result.
? Which statement is true of Boolean expression?
+ An expression with a True or False result
- An expression such as a < b < c
- An expression evaluating to True or False
- A number equal to the sum of cubes of its digits
! Boolean expression an expression with a True or False result.
? Which a loop iterating over a sequence?
- Nested loop
- Colon
- Nested if
+ for loop
! For loop a loop iterating over a sequence.
? Which statement is true of for loop?
- The end value of range, excluded
- An expression such as a < b < c
- Following the values through a loop
+ A loop iterating over a sequence
! For loop a loop iterating over a sequence.
? Which a loop repeating while a condition holds?
+ while loop
- Condition
- Factorial
- Leap year
! While loop a loop repeating while a condition holds.
? Which statement is true of while loop?
- A loop inside another loop
- The symbol ending an if, for or while line
- A value treated as True
+ A loop repeating while a condition holds
! While loop a loop repeating while a condition holds.
? Which the function generating a sequence of integers?
- Stop
- continue
- Condition
+ range()
! Range() the function generating a sequence of integers.
? Which statement is true of range()?
- An expression with a True or False result
- A group of statements at the same indentation
+ The function generating a sequence of integers
- A loop repeating while a condition holds
! Range() the function generating a sequence of integers.
? Which the first value of range?
+ Start
- Boolean expression
- break
- Prime number
! Start the first value of range.
? Which statement is true of Start?
- An object that can be looped over
- A variable collecting a running total
- A program offering options to the user
+ The first value of range
! Start the first value of range.
? Which the end value of range, excluded?
- pass
- Syntax
+ Stop
- Multiplication table
! Stop the end value of range, excluded.
? Which statement is true of Stop?
- A value treated as False, such as 0
+ The end value of range, excluded
- The statement skipping to the next iteration
- The increment of range
! Stop the end value of range, excluded.
? Which the increment of range?
+ Step
- Falsy value
- Reverse number
- Infinite loop
! Step the increment of range.
? Which statement is true of Step?
- A value treated as False, such as 0
+ The increment of range
- A group of statements at the same indentation
- The grammar of a language
! Step the increment of range.
? Which the statement exiting a loop?
- elif
+ break
- Factorial
- Colon
! Break the statement exiting a loop.
? Which statement is true of break?
- The function generating a sequence of integers
- A value treated as True
+ The statement exiting a loop
- An expression evaluating to True or False
! Break the statement exiting a loop.
? Which the statement skipping to the next iteration?
+ continue
- Indentation
- Condition
- Counter
! Continue the statement skipping to the next iteration.
? Which statement is true of continue?
- The function generating a sequence of integers
+ The statement skipping to the next iteration
- The end value of range, excluded
- A value treated as False, such as 0
! Continue the statement skipping to the next iteration.
? Which a null statement doing nothing?
- Syntax
- Condition
+ pass
- Palindrome
! Pass a null statement doing nothing.
? Which statement is true of pass?
+ A null statement doing nothing
- A value treated as False, such as 0
- A list of multiples of a number
- Executes a block when a condition is true
! Pass a null statement doing nothing.
? Which the else block of a loop running without break?
+ Loop else
- Control variable
- Off by one error
- if statement
! Loop else the else block of a loop running without break.
? Which statement is true of Loop else?
- % used to get the last digit
- Manual execution of a program
- A number with exactly two factors
+ The else block of a loop running without break
! Loop else the else block of a loop running without break.
? Which a loop that never ends?
- Menu-driven program
+ Infinite loop
- Multiplication table
- Boolean expression
! Infinite loop a loop that never ends.
? Which statement is true of Infinite loop?
- A year divisible by 4 and not by 100 unless by 400
- // used to drop the last digit
- The product of integers up to n
+ A loop that never ends
! Infinite loop a loop that never ends.
? Which the variable controlling a loop?
+ Control variable
- Boolean expression
- Menu-driven program
- Block
! Control variable the variable controlling a loop.
? Which statement is true of Control variable?
+ The variable controlling a loop
- The sum of the digits of a number
- The function generating a sequence of integers
- A number with exactly two factors
! Control variable the variable controlling a loop.
? Which a variable counting iterations?
- Falsy value
+ Counter
- Multiplication table
- Block
! Counter a variable counting iterations.
? Which statement is true of Counter?
+ A variable counting iterations
- A group of statements at the same indentation
- A value treated as True
- A program offering options to the user
! Counter a variable counting iterations.
? Which a variable collecting a running total?
- Stop
- Counter
+ Accumulator
- for loop
! Accumulator a variable collecting a running total.
? Which statement is true of Accumulator?
+ A variable collecting a running total
- The sum of the digits of a number
- The product of integers up to n
- A list of multiples of a number
! Accumulator a variable collecting a running total.
? Which a special value ending input?
- Comparison chain
+ Sentinel
- Prime number
- Start
! Sentinel a special value ending input.
? Which statement is true of Sentinel?
- A null statement doing nothing
- A list of multiples of a number
+ A special value ending input
- A number with digits in reverse order
! Sentinel a special value ending input.
? Which a loop inside another loop?
- Syntax
- Step
+ Nested loop
- Prime number
! Nested loop a loop inside another loop.
? Which statement is true of Nested loop?
- Executes a block when a condition is true
- The product of integers up to n
+ A loop inside another loop
- A number with exactly two factors
! Nested loop a loop inside another loop.
? Which printing shapes using loops?
- Multiplication table
+ Pattern printing
- Truthy value
- for loop
! Pattern printing printing shapes using loops.
? Which statement is true of Pattern printing?
+ Printing shapes using loops
- A group of statements at the same indentation
- A program offering options to the user
- The function generating a sequence of integers
! Pattern printing printing shapes using loops.
? Which a year divisible by 4 and not by 100 unless by 400?
- if statement
+ Leap year
- Dry run
- Truthy value
! Leap year a year divisible by 4 and not by 100 unless by 400.
? Which statement is true of Leap year?
- A number with exactly two factors
- Printing shapes using loops
+ A year divisible by 4 and not by 100 unless by 400
- And, or, not
! Leap year a year divisible by 4 and not by 100 unless by 400.
? Which the product of integers up to n?
+ Factorial
- Tracing
- Nested if
- Truthy value
! Factorial the product of integers up to n.
? Which statement is true of Factorial?
- A value treated as True
- A variable collecting a running total
- The sum of the digits of a number
+ The product of integers up to n
! Factorial the product of integers up to n.
? Which a series where each term is the sum of the previous two?
+ Fibonacci
- Nested loop
- Sequence
- Condition
! Fibonacci a series where each term is the sum of the previous two.
? Which statement is true of Fibonacci?
- The spacing defining a block
- A value treated as True
+ A series where each term is the sum of the previous two
- An object that can be looped over
! Fibonacci a series where each term is the sum of the previous two.
? Which a number with exactly two factors?
+ Prime number
- Accumulator
- Nested if
- break
! Prime number a number with exactly two factors.
? Which statement is true of Prime number?
- A number equal to the sum of cubes of its digits
- The function generating a sequence of integers
- Checks another condition if the first fails
+ A number with exactly two factors
! Prime number a number with exactly two factors.
? Which a number or word reading the same both ways?
+ Palindrome
- Iteration
- Condition
- Reverse number
! Palindrome a number or word reading the same both ways.
? Which statement is true of Palindrome?
- An error in loop boundaries
- The end value of range, excluded
+ A number or word reading the same both ways
- A number with digits in reverse order
! Palindrome a number or word reading the same both ways.
? Which a number equal to the sum of cubes of its digits?
- Pattern printing
+ Armstrong number
- Digit sum
- Boolean expression
! Armstrong number a number equal to the sum of cubes of its digits.
? Which statement is true of Armstrong number?
+ A number equal to the sum of cubes of its digits
- The first value of range
- The variable controlling a loop
- Executes a block when a condition is true
! Armstrong number a number equal to the sum of cubes of its digits.
? Which the sum of the digits of a number?
- Block
- Menu-driven program
- Iterable
+ Digit sum
! Digit sum the sum of the digits of a number.
? Which statement is true of Digit sum?
- The symbol ending an if, for or while line
- A loop that never ends
- An expression such as a < b < c
+ The sum of the digits of a number
! Digit sum the sum of the digits of a number.
? Which a number with digits in reverse order?
- Boolean expression
- Comparison chain
- pass
+ Reverse number
! Reverse number a number with digits in reverse order.
? Which statement is true of Reverse number?
- A list of multiples of a number
+ A number with digits in reverse order
- An error in loop boundaries
- The product of integers up to n
! Reverse number a number with digits in reverse order.
? Which a list of multiples of a number?
- Off by one error
- Nested if
+ Multiplication table
- Block
! Multiplication table a list of multiples of a number.
? Which statement is true of Multiplication table?
- The statement skipping to the next iteration
- The variable controlling a loop
- The product of integers up to n
+ A list of multiples of a number
! Multiplication table a list of multiples of a number.
? Which a program offering options to the user?
- Multiplication table
+ Menu-driven program
- Syntax
- Off by one error
! Menu-driven program a program offering options to the user.
? Which statement is true of Menu-driven program?
- A list of multiples of a number
- Manual execution of a program
+ A program offering options to the user
- A loop iterating over a sequence
! Menu-driven program a program offering options to the user.
? Which a value treated as True?
- Fibonacci
+ Truthy value
- Syntax
- for loop
! Truthy value a value treated as True.
? Which statement is true of Truthy value?
+ A value treated as True
- The block executed when all conditions fail
- A number or word reading the same both ways
- An if inside another if
! Truthy value a value treated as True.
? Which a value treated as False, such as 0?
- Leap year
- Comparison chain
- Off by one error
+ Falsy value
! Falsy value a value treated as False, such as 0.
? Which statement is true of Falsy value?
- An ordered collection such as a string
- The symbol ending an if, for or while line
- A loop inside another loop
+ A value treated as False, such as 0
! Falsy value a value treated as False, such as 0.
? Which and, or, not?
+ Logical operator
- Palindrome
- Block
- Sentinel
! Logical operator and, or, not.
? Which statement is true of Logical operator?
- The first value of range
+ And, or, not
- A loop repeating while a condition holds
- The increment of range
! Logical operator and, or, not.
? Which an expression such as a < b < c?
- Sequence
- for loop
+ Comparison chain
- Logical operator
! Comparison chain an expression such as a < b < c.
? Which statement is true of Comparison chain?
- A variable counting iterations
+ An expression such as a < b < c
- The variable controlling a loop
- The increment of range
! Comparison chain an expression such as a < b < c.
? Which // used to drop the last digit?
- Menu-driven program
- Boolean expression
+ Floor division
- pass
! Floor division // used to drop the last digit.
? Which statement is true of Floor division?
- An error in loop boundaries
- Checks another condition if the first fails
+ // used to drop the last digit
- A null statement doing nothing
! Floor division // used to drop the last digit.
? Which % used to get the last digit?
+ Modulus
- Counter
- Floor division
- Multiplication table
! Modulus % used to get the last digit.
? Which statement is true of Modulus?
- A variable counting iterations
+ % used to get the last digit
- A loop inside another loop
- The sum of the digits of a number
! Modulus % used to get the last digit.
? Which following the values through a loop?
- Counter
- Boolean expression
- Comparison chain
+ Tracing
! Tracing following the values through a loop.
? Which statement is true of Tracing?
- The symbol ending an if, for or while line
+ Following the values through a loop
- % used to get the last digit
- A variable counting iterations
! Tracing following the values through a loop.
? Which an error in loop boundaries?
- Control variable
- Reverse number
- while loop
+ Off by one error
! Off by one error an error in loop boundaries.
? Which statement is true of Off by one error?
- An object that can be looped over
- A special value ending input
- The increment of range
+ An error in loop boundaries
! Off by one error an error in loop boundaries.
? Which an object that can be looped over?
- Modulus
+ Iterable
- pass
- Armstrong number
! Iterable an object that can be looped over.
? Which statement is true of Iterable?
- A null statement doing nothing
- Executes a block when a condition is true
- An if inside another if
+ An object that can be looped over
! Iterable an object that can be looped over.
? Which an ordered collection such as a string?
- Colon
+ Sequence
- Loop else
- Step
! Sequence an ordered collection such as a string.
? Which statement is true of Sequence?
- A value treated as True
- The first value of range
- A program offering options to the user
+ An ordered collection such as a string
! Sequence an ordered collection such as a string.
? Which one pass through a loop body?
- while loop
- Logical operator
- Comparison chain
+ Iteration
! Iteration one pass through a loop body.
? Which statement is true of Iteration?
+ One pass through a loop body
- Printing shapes using loops
- A loop inside another loop
- Manual execution of a program
! Iteration one pass through a loop body.
? Which manual execution of a program?
- Loop else
- Palindrome
+ Dry run
- Floor division
! Dry run manual execution of a program.
? Which statement is true of Dry run?
- A number with exactly two factors
- A number equal to the sum of cubes of its digits
- An expression with a True or False result
+ Manual execution of a program
! Dry run manual execution of a program.
? Which the grammar of a language?
- Counter
- Nested loop
+ Syntax
- Logical operator
! Syntax the grammar of a language.
? Which statement is true of Syntax?
- The product of integers up to n
+ The grammar of a language
- A special value ending input
- An error in loop boundaries
! Syntax the grammar of a language.
? Which the symbol ending an if, for or while line?
- Counter
+ Colon
- Floor division
- Step
! Colon the symbol ending an if, for or while line.
? Which statement is true of Colon?
+ The symbol ending an if, for or while line
- The spacing defining a block
- A list of multiples of a number
- A special value ending input
! Colon the symbol ending an if, for or while line.
? Which a group of statements at the same indentation?
- break
- while loop
+ Block
- Pattern printing
! Block a group of statements at the same indentation.
? Which statement is true of Block?
- A number or word reading the same both ways
+ A group of statements at the same indentation
- An expression such as a < b < c
- A value treated as True
! Block a group of statements at the same indentation.
? range(5) gives
- 1 to 5
- 0 to 5
- 1 to 4
+ 0 to 4
! Stop excluded.
? break
- Skips
- Pauses
+ Exits the loop
- Restarts
! Jump.
? elif is used for
- Loop
+ Another condition
- Function
- Import
! Chain.
? Leap year 2000
+ Yes
- No
- Maybe
- Error
! 400.
? Loop else runs
- Always
+ If no break
- If break
- Never
! Special.
? Last digit of n
- n // 10
- n / 10
+ n % 10
- n * 10
! Modulus.
@visual
flow | If elif else | Condition; True branch; Elif; Else
compare | for and while | for=Known count~range; while=Condition~Unknown count
blocks | Jump statements | break; continue; pass
table | range | Call=range(5)/range(1, 6)/range(10, 0, -2); Output=0-4/1-5/10 8 6 4 2
mind | Control flow | Selection; Iteration; Jumps; Programs
steps | While loop | Initialise; Test; Body; Update
cycle | Loop | Test condition; Run body; Update
@problems
## Moderate
P: Write a program to check whether a number is even or odd.
A: n = int(input()); if n % 2 == 0: print("Even") else: print("Odd").
R: 3 | Input
R: 3 | Condition
## High
P: Write a program to print the sum of the first N natural numbers using a loop.
A: s = 0; for i in range(1, n+1): s += i; print(s).
R: 2 | Initialise
R: 2 | Loop
R: 2 | Accumulate
R: 2 | Output
## Advanced
P: Write a program to test a prime number and explain break and else with a loop.
A: for i in range(2, n): if n % i == 0: print("Not prime"); break else: print("Prime"); the else runs only if no break.
R: 2 | Loop
R: 2 | Break
R: 2 | Else
R: 2 | Output
