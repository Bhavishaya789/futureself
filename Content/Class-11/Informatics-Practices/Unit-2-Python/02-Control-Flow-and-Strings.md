# Control Flow and Strings
minutes: 40
yt: class 11 informatics practices python if else loops strings functions
@study
Control flow decides the order of execution. Selection uses if, if-else and if-elif-else with a colon and indented block. Iteration uses for and while loops. The for loop works with range(start, stop, step), where stop is excluded; range(5) gives 0 to 4. The while loop repeats while a condition is true. break exits the loop, continue skips to the next iteration, and pass does nothing. A loop can have an else block that runs when the loop ends without break. Nested loops are used for patterns. A string is an immutable sequence of characters with indexing from 0 and negative indexing from -1. Slicing s[start:stop:step] gives a part of the string. Operations include concatenation (+), repetition (*), membership (in) and comparison. Functions: len(), upper(), lower(), title(), capitalize(), strip(), find(), index(), count(), replace(), split(), join(), isalpha(), isdigit(), isalnum(), startswith() and endswith(). A user-defined function is made with def, may take parameters and may return a value. Arguments can be positional, keyword or default. Variables inside a function have local scope; global variables are declared outside. Modules like math (sqrt, ceil, floor, pow, pi), random (random, randint, randrange) and statistics (mean, median, mode) are imported with import. Common programs: factorial, prime check, Fibonacci series, palindrome and sum of digits.
## Deep dive: Selection and loops
The if-elif chain checks conditions in order. range(1, 10, 2) gives 1, 3, 5, 7, 9. A while loop needs a change in the variable to stop. break leaves the loop at once; continue goes to the next cycle.
## Deep dive: Strings
Index 0 is the first character and -1 the last. A slice with step -1 reverses a string. Strings cannot be changed in place, so a new string is created. Methods return new strings. split() returns a list; join() builds a string from a list.
## Deep dive: Functions and modules
A function without return gives None. Default parameters must come after non-default ones. Local variables hide global ones inside functions. The math and random modules are used often in programs.
## Hindi saransh
Niyantran pravah aur strings: if-else, for-while loop, string methods aur function Python programming ki jaan hain.
> Remember: range stop value is not included.
@formulas
## Key facts
range(5) | 0 to 4 | Stop excluded
break | Exit loop | Control
continue | Skip | Next cycle
len() | Length | String
def | Function | Keyword

@qa
Q: Which runs a block when a condition is true?
A: if statement runs a block when a condition is true.
Q: What do you know about if statement?
A: If statement runs a block when a condition is true.
Q: Which runs when the if condition is false?
A: else runs when the if condition is false.
Q: What do you know about else?
A: Else runs when the if condition is false.
Q: Which checks another condition?
A: elif checks another condition.
Q: What do you know about elif?
A: Elif checks another condition.
Q: Which repeats over a sequence?
A: for loop repeats over a sequence.
Q: What do you know about for loop?
A: For loop repeats over a sequence.
Q: Which repeats while a condition is true?
A: while loop repeats while a condition is true.
Q: What do you know about while loop?
A: While loop repeats while a condition is true.
Q: Which generates a sequence of numbers?
A: range function generates a sequence of numbers.
Q: What do you know about range function?
A: Range function generates a sequence of numbers.
Q: Which is not included in the sequence?
A: range stop is not included in the sequence.
Q: What do you know about range stop?
A: Range stop is not included in the sequence.
Q: Which exits a loop immediately?
A: break exits a loop immediately.
Q: What do you know about break?
A: Break exits a loop immediately.
Q: Which skips to the next iteration?
A: continue skips to the next iteration.
Q: What do you know about continue?
A: Continue skips to the next iteration.
Q: Which is a statement that does nothing?
A: pass is a statement that does nothing.
Q: What do you know about pass?
A: Pass is a statement that does nothing.
Q: Which is a loop inside another loop?
A: Nested loop is a loop inside another loop.
Q: What do you know about Nested loop?
A: Nested loop is a loop inside another loop.
Q: Which runs if the loop ends without break?
A: Loop else runs if the loop ends without break.
Q: What do you know about Loop else?
A: Loop else runs if the loop ends without break.
Q: Which never ends because the condition stays true?
A: Infinite loop never ends because the condition stays true.
Q: What do you know about Infinite loop?
A: Infinite loop never ends because the condition stays true.
Q: Which ends the header of an if or loop?
A: Colon ends the header of an if or loop.
Q: What do you know about Colon?
A: Colon ends the header of an if or loop.
Q: Which is an expression that is true or false?
A: Condition is an expression that is true or false.
Q: What do you know about Condition?
A: Condition is an expression that is true or false.
Q: Which is an immutable sequence of characters?
A: String is an immutable sequence of characters.
Q: What do you know about String?
A: String is an immutable sequence of characters.
Q: Which is the position of a character starting from 0?
A: Index is the position of a character starting from 0.
Q: What do you know about Index?
A: Index is the position of a character starting from 0.
Q: Which counts from the end starting at minus 1?
A: Negative index counts from the end starting at minus 1.
Q: What do you know about Negative index?
A: Negative index counts from the end starting at minus 1.
Q: Which extracts a part of a string?
A: Slicing extracts a part of a string.
Q: What do you know about Slicing?
A: Slicing extracts a part of a string.
Q: Which joins strings with plus?
A: Concatenation joins strings with plus.
Q: What do you know about Concatenation?
A: Concatenation joins strings with plus.
Q: Which repeats a string with the star operator?
A: Repetition repeats a string with the star operator.
Q: What do you know about Repetition?
A: Repetition repeats a string with the star operator.
Q: Which gives the length of a string?
A: len function gives the length of a string.
Q: What do you know about len function?
A: Len function gives the length of a string.
Q: Which converts a string to capitals?
A: upper method converts a string to capitals.
Q: What do you know about upper method?
A: Upper method converts a string to capitals.
Q: Which converts a string to small letters?
A: lower method converts a string to small letters.
Q: What do you know about lower method?
A: Lower method converts a string to small letters.
Q: Which capitalises each word?
A: title method capitalises each word.
Q: What do you know about title method?
A: Title method capitalises each word.
Q: Which removes spaces at the ends?
A: strip method removes spaces at the ends.
Q: What do you know about strip method?
A: Strip method removes spaces at the ends.
Q: Which gives the index of a substring or minus 1?
A: find method gives the index of a substring or minus 1.
Q: What do you know about find method?
A: Find method gives the index of a substring or minus 1.
Q: Which gives the index or raises an error?
A: index method gives the index or raises an error.
Q: What do you know about index method?
A: Index method gives the index or raises an error.
Q: Which counts occurrences of a substring?
A: count method counts occurrences of a substring.
Q: What do you know about count method?
A: Count method counts occurrences of a substring.
Q: Which replaces a substring with another?
A: replace method replaces a substring with another.
Q: What do you know about replace method?
A: Replace method replaces a substring with another.
Q: Which breaks a string into a list?
A: split method breaks a string into a list.
Q: What do you know about split method?
A: Split method breaks a string into a list.
Q: Which joins list items into a string?
A: join method joins list items into a string.
Q: What do you know about join method?
A: Join method joins list items into a string.
Q: Which checks if all characters are letters?
A: isalpha method checks if all characters are letters.
Q: What do you know about isalpha method?
A: Isalpha method checks if all characters are letters.
Q: Which checks if all characters are digits?
A: isdigit method checks if all characters are digits.
Q: What do you know about isdigit method?
A: Isdigit method checks if all characters are digits.
Q: Which checks the beginning of a string?
A: startswith method checks the beginning of a string.
Q: What do you know about startswith method?
A: Startswith method checks the beginning of a string.
Q: Which reads the same forwards and backwards?
A: Palindrome reads the same forwards and backwards.
Q: What do you know about Palindrome?
A: Palindrome reads the same forwards and backwards.
Q: Which is a named block of reusable code?
A: Function is a named block of reusable code.
Q: What do you know about Function?
A: Function is a named block of reusable code.
Q: Which is the keyword to define a function?
A: def is the keyword to define a function.
Q: What do you know about def?
A: Def is the keyword to define a function.
Q: Which is a variable in a function definition?
A: Parameter is a variable in a function definition.
Q: What do you know about Parameter?
A: Parameter is a variable in a function definition.
Q: Which is a value passed to a function?
A: Argument is a value passed to a function.
Q: What do you know about Argument?
A: Argument is a value passed to a function.
Q: Which sends a value back from a function?
A: return sends a value back from a function.
Q: What do you know about return?
A: Return sends a value back from a function.
Q: Which has a preset value?
A: Default argument has a preset value.
Q: What do you know about Default argument?
A: Default argument has a preset value.
Q: Which is passed by name?
A: Keyword argument is passed by name.
Q: What do you know about Keyword argument?
A: Keyword argument is passed by name.
Q: Which is defined inside a function?
A: Local variable is defined inside a function.
Q: What do you know about Local variable?
A: Local variable is defined inside a function.
Q: Which is defined outside functions?
A: Global variable is defined outside functions.
Q: What do you know about Global variable?
A: Global variable is defined outside functions.
Q: Which is a file of Python code?
A: Module is a file of Python code.
Q: What do you know about Module?
A: Module is a file of Python code.
Q: Which brings a module into a program?
A: import brings a module into a program.
Q: What do you know about import?
A: Import brings a module into a program.
Q: Which provides sqrt, ceil and floor?
A: math module provides sqrt, ceil and floor.
Q: What do you know about math module?
A: Math module provides sqrt, ceil and floor.
Q: Which provides randint and random?
A: random module provides randint and random.
Q: What do you know about random module?
A: Random module provides randint and random.
Q: Which provides mean and median?
A: statistics module provides mean and median.
Q: What do you know about statistics module?
A: Statistics module provides mean and median.
Q: Which is a function calling itself?
A: Recursion is a function calling itself.
Q: What do you know about Recursion?
A: Recursion is a function calling itself.
Q: What does range(5) give?
A: 0, 1, 2, 3, 4.
Q: What does break do?
A: It exits the loop.
Q: What is the index of the first character?
A: 0.
Q: What does len(s) return?
A: The length of the string.
Q: What keyword defines a function?
A: def.
Q: What does continue do?
A: It skips to the next iteration.
Q: Which module has sqrt?
A: math.
Q: Are strings mutable?
A: No.
@quiz
? Which runs a block when a condition is true?
- elif
- Condition
+ if statement
- for loop
! If statement runs a block when a condition is true.
? Which statement is true of if statement?
- Checks another condition
- Runs when the if condition is false
+ Runs a block when a condition is true
- Is an expression that is true or false
! If statement runs a block when a condition is true.
? Which runs when the if condition is false?
- Condition
- break
- pass
+ else
! Else runs when the if condition is false.
? Which statement is true of else?
+ Runs when the if condition is false
- Generates a sequence of numbers
- Ends the header of an if or loop
- Is not included in the sequence
! Else runs when the if condition is false.
? Which checks another condition?
+ elif
- continue
- else
- break
! Elif checks another condition.
? Which statement is true of elif?
- Generates a sequence of numbers
+ Checks another condition
- Repeats while a condition is true
- Is not included in the sequence
! Elif checks another condition.
? Which repeats over a sequence?
- range function
+ for loop
- Infinite loop
- range stop
! For loop repeats over a sequence.
? Which statement is true of for loop?
- Generates a sequence of numbers
- Exits a loop immediately
+ Repeats over a sequence
- Checks another condition
! For loop repeats over a sequence.
? Which repeats while a condition is true?
- Loop else
- range stop
+ while loop
- elif
! While loop repeats while a condition is true.
? Which statement is true of while loop?
+ Repeats while a condition is true
- Ends the header of an if or loop
- Skips to the next iteration
- Is an expression that is true or false
! While loop repeats while a condition is true.
? Which generates a sequence of numbers?
- Colon
+ range function
- elif
- else
! Range function generates a sequence of numbers.
? Which statement is true of range function?
- Is a statement that does nothing
- Repeats over a sequence
+ Generates a sequence of numbers
- Exits a loop immediately
! Range function generates a sequence of numbers.
? Which is not included in the sequence?
+ range stop
- for loop
- Infinite loop
- pass
! Range stop is not included in the sequence.
? Which statement is true of range stop?
+ Is not included in the sequence
- Checks another condition
- Repeats while a condition is true
- Exits a loop immediately
! Range stop is not included in the sequence.
? Which exits a loop immediately?
- for loop
- Loop else
+ break
- Infinite loop
! Break exits a loop immediately.
? Which statement is true of break?
+ Exits a loop immediately
- Checks another condition
- Is a statement that does nothing
- Skips to the next iteration
! Break exits a loop immediately.
? Which skips to the next iteration?
- elif
+ continue
- if statement
- Nested loop
! Continue skips to the next iteration.
? Which statement is true of continue?
- Ends the header of an if or loop
- Checks another condition
+ Skips to the next iteration
- Repeats over a sequence
! Continue skips to the next iteration.
? Which is a statement that does nothing?
- range function
- Nested loop
+ pass
- while loop
! Pass is a statement that does nothing.
? Which statement is true of pass?
- Ends the header of an if or loop
+ Is a statement that does nothing
- Is a loop inside another loop
- Runs if the loop ends without break
! Pass is a statement that does nothing.
? Which is a loop inside another loop?
+ Nested loop
- Loop else
- while loop
- break
! Nested loop is a loop inside another loop.
? Which statement is true of Nested loop?
- Ends the header of an if or loop
+ Is a loop inside another loop
- Runs a block when a condition is true
- Is a statement that does nothing
! Nested loop is a loop inside another loop.
? Which runs if the loop ends without break?
+ Loop else
- range function
- Nested loop
- elif
! Loop else runs if the loop ends without break.
? Which statement is true of Loop else?
- Is a statement that does nothing
+ Runs if the loop ends without break
- Is an expression that is true or false
- Is not included in the sequence
! Loop else runs if the loop ends without break.
? Which never ends because the condition stays true?
- while loop
- range function
+ Infinite loop
- Condition
! Infinite loop never ends because the condition stays true.
? Which statement is true of Infinite loop?
- Repeats while a condition is true
- Is a loop inside another loop
+ Never ends because the condition stays true
- Is an expression that is true or false
! Infinite loop never ends because the condition stays true.
? Which ends the header of an if or loop?
+ Colon
- break
- Infinite loop
- Loop else
! Colon ends the header of an if or loop.
? Which statement is true of Colon?
- Generates a sequence of numbers
- Runs if the loop ends without break
- Is a statement that does nothing
+ Ends the header of an if or loop
! Colon ends the header of an if or loop.
? Which is an expression that is true or false?
+ Condition
- else
- if statement
- range function
! Condition is an expression that is true or false.
? Which statement is true of Condition?
+ Is an expression that is true or false
- Ends the header of an if or loop
- Generates a sequence of numbers
- Runs when the if condition is false
! Condition is an expression that is true or false.
? Which is an immutable sequence of characters?
- Index
- replace method
- startswith method
+ String
! String is an immutable sequence of characters.
? Which statement is true of String?
+ Is an immutable sequence of characters
- Is the position of a character starting from 0
- Joins list items into a string
- Repeats a string with the star operator
! String is an immutable sequence of characters.
? Which is the position of a character starting from 0?
+ Index
- len function
- isdigit method
- join method
! Index is the position of a character starting from 0.
? Which statement is true of Index?
- Gives the length of a string
- Counts occurrences of a substring
+ Is the position of a character starting from 0
- Checks the beginning of a string
! Index is the position of a character starting from 0.
? Which counts from the end starting at minus 1?
+ Negative index
- isalpha method
- Repetition
- find method
! Negative index counts from the end starting at minus 1.
? Which statement is true of Negative index?
+ Counts from the end starting at minus 1
- Replaces a substring with another
- Converts a string to small letters
- Repeats a string with the star operator
! Negative index counts from the end starting at minus 1.
? Which extracts a part of a string?
- index method
- len function
- Negative index
+ Slicing
! Slicing extracts a part of a string.
? Which statement is true of Slicing?
+ Extracts a part of a string
- Joins strings with plus
- Converts a string to small letters
- Is an immutable sequence of characters
! Slicing extracts a part of a string.
? Which joins strings with plus?
- join method
- title method
- isalpha method
+ Concatenation
! Concatenation joins strings with plus.
? Which statement is true of Concatenation?
- Repeats a string with the star operator
- Removes spaces at the ends
+ Joins strings with plus
- Extracts a part of a string
! Concatenation joins strings with plus.
? Which repeats a string with the star operator?
+ Repetition
- Slicing
- Negative index
- split method
! Repetition repeats a string with the star operator.
? Which statement is true of Repetition?
- Is the position of a character starting from 0
- Counts from the end starting at minus 1
+ Repeats a string with the star operator
- Converts a string to capitals
! Repetition repeats a string with the star operator.
? Which gives the length of a string?
- upper method
+ len function
- Index
- index method
! Len function gives the length of a string.
? Which statement is true of len function?
- Gives the index or raises an error
- Extracts a part of a string
- Counts from the end starting at minus 1
+ Gives the length of a string
! Len function gives the length of a string.
? Which converts a string to capitals?
- startswith method
- isdigit method
+ upper method
- join method
! Upper method converts a string to capitals.
? Which statement is true of upper method?
- Extracts a part of a string
- Capitalises each word
- Breaks a string into a list
+ Converts a string to capitals
! Upper method converts a string to capitals.
? Which converts a string to small letters?
- index method
- Repetition
+ lower method
- title method
! Lower method converts a string to small letters.
? Which statement is true of lower method?
- Replaces a substring with another
+ Converts a string to small letters
- Counts from the end starting at minus 1
- Gives the index or raises an error
! Lower method converts a string to small letters.
? Which capitalises each word?
+ title method
- isdigit method
- index method
- Index
! Title method capitalises each word.
? Which statement is true of title method?
- Removes spaces at the ends
+ Capitalises each word
- Joins list items into a string
- Extracts a part of a string
! Title method capitalises each word.
? Which removes spaces at the ends?
- Concatenation
- isalpha method
+ strip method
- count method
! Strip method removes spaces at the ends.
? Which statement is true of strip method?
- Is an immutable sequence of characters
- Joins list items into a string
- Converts a string to small letters
+ Removes spaces at the ends
! Strip method removes spaces at the ends.
? Which gives the index of a substring or minus 1?
+ find method
- title method
- startswith method
- index method
! Find method gives the index of a substring or minus 1.
? Which statement is true of find method?
+ Gives the index of a substring or minus 1
- Is an immutable sequence of characters
- Counts from the end starting at minus 1
- Converts a string to capitals
! Find method gives the index of a substring or minus 1.
? Which gives the index or raises an error?
- startswith method
+ index method
- title method
- Palindrome
! Index method gives the index or raises an error.
? Which statement is true of index method?
+ Gives the index or raises an error
- Joins strings with plus
- Converts a string to capitals
- Is the position of a character starting from 0
! Index method gives the index or raises an error.
? Which counts occurrences of a substring?
- len function
- Concatenation
- Slicing
+ count method
! Count method counts occurrences of a substring.
? Which statement is true of count method?
- Checks if all characters are letters
+ Counts occurrences of a substring
- Checks if all characters are digits
- Gives the index of a substring or minus 1
! Count method counts occurrences of a substring.
? Which replaces a substring with another?
- count method
- lower method
+ replace method
- split method
! Replace method replaces a substring with another.
? Which statement is true of replace method?
- Is the position of a character starting from 0
- Capitalises each word
+ Replaces a substring with another
- Converts a string to small letters
! Replace method replaces a substring with another.
? Which breaks a string into a list?
+ split method
- upper method
- startswith method
- Slicing
! Split method breaks a string into a list.
? Which statement is true of split method?
- Gives the length of a string
- Checks the beginning of a string
+ Breaks a string into a list
- Counts from the end starting at minus 1
! Split method breaks a string into a list.
? Which joins list items into a string?
+ join method
- replace method
- String
- index method
! Join method joins list items into a string.
? Which statement is true of join method?
- Capitalises each word
+ Joins list items into a string
- Joins strings with plus
- Removes spaces at the ends
! Join method joins list items into a string.
? Which checks if all characters are letters?
- join method
+ isalpha method
- Index
- Concatenation
! Isalpha method checks if all characters are letters.
? Which statement is true of isalpha method?
+ Checks if all characters are letters
- Extracts a part of a string
- Gives the length of a string
- Breaks a string into a list
! Isalpha method checks if all characters are letters.
? Which checks if all characters are digits?
- Palindrome
- Concatenation
+ isdigit method
- join method
! Isdigit method checks if all characters are digits.
? Which statement is true of isdigit method?
- Gives the length of a string
- Counts from the end starting at minus 1
+ Checks if all characters are digits
- Removes spaces at the ends
! Isdigit method checks if all characters are digits.
? Which checks the beginning of a string?
- upper method
- index method
+ startswith method
- replace method
! Startswith method checks the beginning of a string.
? Which statement is true of startswith method?
+ Checks the beginning of a string
- Gives the index of a substring or minus 1
- Joins list items into a string
- Is the position of a character starting from 0
! Startswith method checks the beginning of a string.
? Which reads the same forwards and backwards?
- find method
- upper method
- Repetition
+ Palindrome
! Palindrome reads the same forwards and backwards.
? Which statement is true of Palindrome?
- Joins list items into a string
+ Reads the same forwards and backwards
- Converts a string to small letters
- Breaks a string into a list
! Palindrome reads the same forwards and backwards.
? Which is a named block of reusable code?
+ Function
- math module
- Recursion
- Module
! Function is a named block of reusable code.
? Which statement is true of Function?
- Is the keyword to define a function
+ Is a named block of reusable code
- Is passed by name
- Provides sqrt, ceil and floor
! Function is a named block of reusable code.
? Which is the keyword to define a function?
- Local variable
- Recursion
+ def
- math module
! Def is the keyword to define a function.
? Which statement is true of def?
- Is a variable in a function definition
- Is a named block of reusable code
- Provides mean and median
+ Is the keyword to define a function
! Def is the keyword to define a function.
? Which is a variable in a function definition?
+ Parameter
- Recursion
- random module
- Global variable
! Parameter is a variable in a function definition.
? Which statement is true of Parameter?
- Provides sqrt, ceil and floor
- Has a preset value
+ Is a variable in a function definition
- Is defined inside a function
! Parameter is a variable in a function definition.
? Which is a value passed to a function?
+ Argument
- import
- Global variable
- random module
! Argument is a value passed to a function.
? Which statement is true of Argument?
- Is a function calling itself
- Is passed by name
+ Is a value passed to a function
- Brings a module into a program
! Argument is a value passed to a function.
? Which sends a value back from a function?
- Parameter
- Keyword argument
- Argument
+ return
! Return sends a value back from a function.
? Which statement is true of return?
- Brings a module into a program
- Provides sqrt, ceil and floor
+ Sends a value back from a function
- Provides randint and random
! Return sends a value back from a function.
? Which has a preset value?
- Argument
+ Default argument
- Local variable
- Module
! Default argument has a preset value.
? Which statement is true of Default argument?
- Is passed by name
- Provides mean and median
+ Has a preset value
- Is defined inside a function
! Default argument has a preset value.
? Which is passed by name?
- Global variable
- random module
- Argument
+ Keyword argument
! Keyword argument is passed by name.
? Which statement is true of Keyword argument?
- Has a preset value
- Provides randint and random
+ Is passed by name
- Is a named block of reusable code
! Keyword argument is passed by name.
? Which is defined inside a function?
- random module
+ Local variable
- Parameter
- import
! Local variable is defined inside a function.
? Which statement is true of Local variable?
- Is a function calling itself
- Is the keyword to define a function
- Provides sqrt, ceil and floor
+ Is defined inside a function
! Local variable is defined inside a function.
? Which is defined outside functions?
- math module
- Module
+ Global variable
- Recursion
! Global variable is defined outside functions.
? Which statement is true of Global variable?
- Sends a value back from a function
- Is a variable in a function definition
+ Is defined outside functions
- Is a named block of reusable code
! Global variable is defined outside functions.
? Which is a file of Python code?
- Keyword argument
- Parameter
- Default argument
+ Module
! Module is a file of Python code.
? Which statement is true of Module?
- Is defined inside a function
+ Is a file of Python code
- Brings a module into a program
- Is a named block of reusable code
! Module is a file of Python code.
? Which brings a module into a program?
- Default argument
- statistics module
+ import
- random module
! Import brings a module into a program.
? Which statement is true of import?
- Is the keyword to define a function
- Provides sqrt, ceil and floor
- Has a preset value
+ Brings a module into a program
! Import brings a module into a program.
? Which provides sqrt, ceil and floor?
- Parameter
- Recursion
+ math module
- Local variable
! Math module provides sqrt, ceil and floor.
? Which statement is true of math module?
- Is a variable in a function definition
- Is defined inside a function
- Sends a value back from a function
+ Provides sqrt, ceil and floor
! Math module provides sqrt, ceil and floor.
? Which provides randint and random?
- return
- math module
- statistics module
+ random module
! Random module provides randint and random.
? Which statement is true of random module?
- Has a preset value
- Is a value passed to a function
- Sends a value back from a function
+ Provides randint and random
! Random module provides randint and random.
? Which provides mean and median?
- Default argument
- Module
+ statistics module
- random module
! Statistics module provides mean and median.
? Which statement is true of statistics module?
- Provides sqrt, ceil and floor
- Is a function calling itself
- Is a variable in a function definition
+ Provides mean and median
! Statistics module provides mean and median.
? Which is a function calling itself?
+ Recursion
- statistics module
- Parameter
- Function
! Recursion is a function calling itself.
? Which statement is true of Recursion?
- Is a named block of reusable code
+ Is a function calling itself
- Provides sqrt, ceil and floor
- Brings a module into a program
! Recursion is a function calling itself.
? range(1, 4) gives
- 1 2 3 4
- 0 1 2 3
- 4
+ 1 2 3
! Stop.
? Last index of string
+ -1
- 0
- 1
- -0
! Negative.
? Keyword to define function
- func
- fun
+ def
- define
! Python.
? Module for randint
- math
- os
+ random
- sys
! Import.
? upper converts to
- Small
- Title
- Digits
+ Capitals
! Method.
? pass does
- Exit
- Skip
+ Nothing
- Repeat
! Placeholder.
@visual
flow | If-elif-else | Check condition; Match; Run block; Exit
compare | break and continue | break=Exit loop~Stops; continue=Skip~Next
blocks | String methods | upper; lower; find; replace
mind | Control flow | Selection; Loops; Strings; Functions
steps | Factorial | Start 1; Loop 1 to n; Multiply; Print
@problems
## Moderate
P: What is the output of range(2, 10, 3)?
A: 2, 5, 8.
R: 3 | Start
R: 3 | Step
## High
P: Write a program to check whether a number is prime.
A: Test divisors from 2 to n-1; if none divide n and n is greater than 1, it is prime.
R: 2 | Loop
R: 2 | Divisibility
R: 2 | Flag
R: 2 | Output
## Advanced
P: Write a function to find the factorial of n using recursion.
A: def fact(n): return 1 if n <= 1 else n * fact(n-1).
R: 2 | Base case
R: 2 | Recursive call
R: 2 | Return
R: 2 | Test
