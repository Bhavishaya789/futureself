# Revision of Python
minutes: 45
yt: class 12 computer science python revision data types operators control flow strings lists tuples dictionaries
@study
Python is a high-level, interpreted, dynamically typed language created by Guido van Rossum. A program is made of tokens: keywords (if, else, while, for, def, return, True, False, None), identifiers, literals, operators and punctuators. Identifiers start with a letter or underscore and are case sensitive. Data types: int, float, complex, bool, str, list, tuple, dict, set and NoneType. Mutable types (list, dict, set) can be changed in place; immutable types (int, float, str, tuple) cannot. Operators: arithmetic (+ - * / // % **), relational (== != < > <= >=), logical (and or not), assignment, identity (is, is not) and membership (in, not in). Precedence: parentheses, **, unary, * / // %, + -, comparison, not, and, or. Type conversion is implicit or explicit using int(), float(), str(), list(). Input is read with input() as a string. Output uses print() with sep and end. Control flow: if-elif-else, for loops with range(start, stop, step) and while loops, with break and continue; the else clause of a loop runs if the loop was not broken. Strings are immutable sequences with indexing from 0 and negative indexing from -1, slicing s[a:b:c], and methods such as upper, lower, title, strip, split, join, find, count, replace, startswith, isalpha, isdigit. Lists are mutable ordered sequences with append, extend, insert, remove, pop, index, count, sort, reverse and the built-ins len, min, max, sum, sorted. Tuples are immutable and a single-element tuple needs a trailing comma. Dictionaries hold key-value pairs with unique immutable keys; methods get, keys, values, items, update, pop, del; dict lookup is by key. Nested lists form matrices. List comprehension builds lists compactly. Modules math, random and statistics are imported with import; random.randint(a,b) includes both ends, random.random() gives a float in [0,1). Common errors: SyntaxError, NameError, TypeError, IndexError, KeyError, ValueError, ZeroDivisionError.
## Deep dive: Types and mutability
Lists, dicts and sets are mutable; strings, tuples and numbers are immutable. This affects assignment, passing to functions and use as dictionary keys.
## Deep dive: Control flow
for iterates over a sequence, while repeats on a condition. break exits, continue skips, and loop else runs when no break happened.
## Deep dive: Sequences
Indexing and slicing work across strings, lists and tuples. Methods differ: lists change in place while string methods return new strings.
## Hindi saransh
Python punarvriti: data prakar, sanchalak, niyantran pravah, string, list, tuple aur dictionary.
> Remember: range(a,b) excludes b; a single element tuple needs a comma.
@formulas
## Key facts
Floor division | // | Integer quotient
Power | ** | Right associative
Slice | s[a:b:c] | b excluded
Mutable | list dict set | Changed in place
Immutable | str tuple int | Cannot change

@qa
Q: Which is an interpreted high level language?
A: Python is an interpreted high level language.
Q: What do you know about Python?
A: Python is an interpreted high level language.
Q: Which is dynamically typed?
A: Python is dynamically typed.
Q: Which created Python?
A: Guido van Rossum created Python.
Q: What do you know about Guido van Rossum?
A: Guido van Rossum created Python.
Q: Which is case sensitive?
A: Identifier is case sensitive.
Q: What do you know about Identifier?
A: Identifier is case sensitive.
Q: Which is a reserved word?
A: Keyword is a reserved word.
Q: What do you know about Keyword?
A: Keyword is a reserved word.
Q: Which defines blocks in Python?
A: Indentation defines blocks in Python.
Q: What do you know about Indentation?
A: Indentation defines blocks in Python.
Q: Which starts with a hash symbol?
A: Comment starts with a hash symbol.
Q: What do you know about Comment?
A: Comment starts with a hash symbol.
Q: Which has unlimited precision in Python?
A: Integer has unlimited precision in Python.
Q: What do you know about Integer?
A: Integer has unlimited precision in Python.
Q: Which holds decimal numbers?
A: Float holds decimal numbers.
Q: What do you know about Float?
A: Float holds decimal numbers.
Q: Which has values True and False?
A: Boolean has values True and False.
Q: What do you know about Boolean?
A: Boolean has values True and False.
Q: Which represents absence of a value?
A: None represents absence of a value.
Q: What do you know about None?
A: None represents absence of a value.
Q: Which is mutable?
A: List is mutable.
Q: What do you know about List?
A: List is mutable.
Q: Which is immutable?
A: Tuple is immutable.
Q: What do you know about Tuple?
A: Tuple is immutable.
Q: What do you know about String?
A: String is immutable.
Q: Which stores key value pairs?
A: Dictionary stores key value pairs.
Q: What do you know about Dictionary?
A: Dictionary stores key value pairs.
Q: Which stores unique elements?
A: Set stores unique elements.
Q: What do you know about Set?
A: Set stores unique elements.
Q: Which must be immutable?
A: Dictionary key must be immutable.
Q: What do you know about Dictionary key?
A: Dictionary key must be immutable.
Q: Which needs a trailing comma?
A: Single element tuple needs a trailing comma.
Q: What do you know about Single element tuple?
A: Single element tuple needs a trailing comma.
Q: Which is floor division?
A: Double slash is floor division.
Q: What do you know about Double slash?
A: Double slash is floor division.
Q: Which gives the remainder?
A: Percent gives the remainder.
Q: What do you know about Percent?
A: Percent gives the remainder.
Q: Which is exponentiation?
A: Double star is exponentiation.
Q: What do you know about Double star?
A: Double star is exponentiation.
Q: Which tests identity?
A: Is operator tests identity.
Q: What do you know about Is operator?
A: Is operator tests identity.
Q: Which tests membership?
A: In operator tests membership.
Q: What do you know about In operator?
A: In operator tests membership.
Q: Which returns true only if both are true?
A: And operator returns true only if both are true.
Q: What do you know about And operator?
A: And operator returns true only if both are true.
Q: Which negates a condition?
A: Not operator negates a condition.
Q: What do you know about Not operator?
A: Not operator negates a condition.
Q: Which is tested with double equals?
A: Equality is tested with double equals.
Q: What do you know about Equality?
A: Equality is tested with double equals.
Q: Which returns a string?
A: Input function returns a string.
Q: What do you know about Input function?
A: Input function returns a string.
Q: Which controls the line ending?
A: Print end parameter controls the line ending.
Q: What do you know about Print end parameter?
A: Print end parameter controls the line ending.
Q: Which sets the separator?
A: Print sep parameter sets the separator.
Q: What do you know about Print sep parameter?
A: Print sep parameter sets the separator.
Q: Which converts to integer?
A: Int function converts to integer.
Q: What do you know about Int function?
A: Int function converts to integer.
Q: Which returns the type of an object?
A: Type function returns the type of an object.
Q: What do you know about Type function?
A: Type function returns the type of an object.
Q: Which runs a block on a true condition?
A: If statement runs a block on a true condition.
Q: What do you know about If statement?
A: If statement runs a block on a true condition.
Q: Which tests another condition?
A: Elif tests another condition.
Q: What do you know about Elif?
A: Elif tests another condition.
Q: Which iterates over a sequence?
A: For loop iterates over a sequence.
Q: What do you know about For loop?
A: For loop iterates over a sequence.
Q: Which repeats while a condition is true?
A: While loop repeats while a condition is true.
Q: What do you know about While loop?
A: While loop repeats while a condition is true.
Q: Which exits the loop?
A: Break exits the loop.
Q: What do you know about Break?
A: Break exits the loop.
Q: Which skips to the next iteration?
A: Continue skips to the next iteration.
Q: What do you know about Continue?
A: Continue skips to the next iteration.
Q: Which excludes the stop value?
A: Range function excludes the stop value.
Q: What do you know about Range function?
A: Range function excludes the stop value.
Q: Which can count backwards?
A: Range with step can count backwards.
Q: What do you know about Range with step?
A: Range with step can count backwards.
Q: Which runs when the loop is not broken?
A: Loop else runs when the loop is not broken.
Q: What do you know about Loop else?
A: Loop else runs when the loop is not broken.
Q: Which is the first character?
A: Index zero is the first character.
Q: What do you know about Index zero?
A: Index zero is the first character.
Q: Which is the last character?
A: Negative index minus one is the last character.
Q: What do you know about Negative index minus one?
A: Negative index minus one is the last character.
Q: Which excludes the end index?
A: Slicing excludes the end index.
Q: What do you know about Slicing?
A: Slicing excludes the end index.
Q: Which converts to capitals?
A: Upper converts to capitals.
Q: What do you know about Upper?
A: Upper converts to capitals.
Q: Which removes surrounding whitespace?
A: Strip removes surrounding whitespace.
Q: What do you know about Strip?
A: Strip removes surrounding whitespace.
Q: Which breaks a string into a list?
A: Split breaks a string into a list.
Q: What do you know about Split?
A: Split breaks a string into a list.
Q: Which combines a list into a string?
A: Join combines a list into a string.
Q: What do you know about Join?
A: Join combines a list into a string.
Q: Which returns minus one if absent?
A: Find returns minus one if absent.
Q: What do you know about Find?
A: Find returns minus one if absent.
Q: Which returns a new string?
A: Replace returns a new string.
Q: What do you know about Replace?
A: Replace returns a new string.
Q: Which tests for digits?
A: Isdigit tests for digits.
Q: What do you know about Isdigit?
A: Isdigit tests for digits.
Q: Which adds an item at the end?
A: Append adds an item at the end.
Q: What do you know about Append?
A: Append adds an item at the end.
Q: Which adds all items of an iterable?
A: Extend adds all items of an iterable.
Q: What do you know about Extend?
A: Extend adds all items of an iterable.
Q: Which adds at a given index?
A: Insert adds at a given index.
Q: What do you know about Insert?
A: Insert adds at a given index.
Q: Which deletes the first matching value?
A: Remove deletes the first matching value.
Q: What do you know about Remove?
A: Remove deletes the first matching value.
Q: Which removes and returns an item?
A: Pop removes and returns an item.
Q: What do you know about Pop?
A: Pop removes and returns an item.
Q: Which orders a list in place?
A: Sort orders a list in place.
Q: What do you know about Sort?
A: Sort orders a list in place.
Q: Which returns a new sorted list?
A: Sorted returns a new sorted list.
Q: What do you know about Sorted?
A: Sorted returns a new sorted list.
Q: Which reverses a list in place?
A: Reverse reverses a list in place.
Q: What do you know about Reverse?
A: Reverse reverses a list in place.
Q: Which returns None for a missing key?
A: Get method returns None for a missing key.
Q: What do you know about Get method?
A: Get method returns None for a missing key.
Q: Which gives key value pairs?
A: Items method gives key value pairs.
Q: What do you know about Items method?
A: Items method gives key value pairs.
Q: Which merges dictionaries?
A: Update method merges dictionaries.
Q: What do you know about Update method?
A: Update method merges dictionaries.
Q: Which builds a list compactly?
A: List comprehension builds a list compactly.
Q: What do you know about List comprehension?
A: List comprehension builds a list compactly.
Q: Which models a matrix?
A: Nested list models a matrix.
Q: What do you know about Nested list?
A: Nested list models a matrix.
Q: Which provides sqrt and floor?
A: Math module provides sqrt and floor.
Q: What do you know about Math module?
A: Math module provides sqrt and floor.
Q: Which includes both endpoints?
A: Random randint includes both endpoints.
Q: What do you know about Random randint?
A: Random randint includes both endpoints.
Q: Which returns a float from 0 to 1?
A: Random random returns a float from 0 to 1.
Q: What do you know about Random random?
A: Random random returns a float from 0 to 1.
Q: Which provides mean and median?
A: Statistics module provides mean and median.
Q: What do you know about Statistics module?
A: Statistics module provides mean and median.
Q: Which occurs for an invalid index?
A: IndexError occurs for an invalid index.
Q: What do you know about IndexError?
A: IndexError occurs for an invalid index.
Q: Which occurs for a missing dictionary key?
A: KeyError occurs for a missing dictionary key.
Q: What do you know about KeyError?
A: KeyError occurs for a missing dictionary key.
Q: Which occurs on division by zero?
A: ZeroDivisionError occurs on division by zero.
Q: What do you know about ZeroDivisionError?
A: ZeroDivisionError occurs on division by zero.
Q: Which occurs for an undefined name?
A: NameError occurs for an undefined name.
Q: What do you know about NameError?
A: NameError occurs for an undefined name.
Q: Which occurs for an unsuitable operand type?
A: TypeError occurs for an unsuitable operand type.
Q: What do you know about TypeError?
A: TypeError occurs for an unsuitable operand type.
Q: What is Python?
A: A high level interpreted language.
Q: What is mutability?
A: Ability of an object to change in place.
Q: What does range(2,10,3) generate?
A: 2, 5, 8.
Q: What is the difference between append and extend?
A: Append adds one item; extend adds each item of an iterable.
Q: What is slicing?
A: Extracting part of a sequence with [start:stop:step].
Q: What does the get method of a dictionary return for a missing key?
A: None or a given default.
Q: What is a list comprehension?
A: A compact way of building a list from an iterable.
Q: What is the result of 7//2?
A: 3.
@quiz
? Which is an interpreted high level language?
- Keyword
- Guido van Rossum
- Identifier
+ Python
! Python is an interpreted high level language.
? Which statement is true of Python?
- Is case sensitive
+ Is an interpreted high level language
- Starts with a hash symbol
- Created Python
! Python is an interpreted high level language.
? Which is dynamically typed?
- Identifier
+ Python
- Keyword
- Guido van Rossum
! Python is dynamically typed.
? Which created Python?
- Python
- Identifier
- Comment
+ Guido van Rossum
! Guido van Rossum created Python.
? Which statement is true of Guido van Rossum?
- Starts with a hash symbol
+ Created Python
- Defines blocks in Python
- Is case sensitive
! Guido van Rossum created Python.
? Which is case sensitive?
- Python
- Keyword
- Guido van Rossum
+ Identifier
! Identifier is case sensitive.
? Which statement is true of Identifier?
+ Is case sensitive
- Defines blocks in Python
- Created Python
- Starts with a hash symbol
! Identifier is case sensitive.
? Which is a reserved word?
- Comment
- Python
- Indentation
+ Keyword
! Keyword is a reserved word.
? Which statement is true of Keyword?
+ Is a reserved word
- Is dynamically typed
- Created Python
- Starts with a hash symbol
! Keyword is a reserved word.
? Which defines blocks in Python?
- Comment
- Python
- Keyword
+ Indentation
! Indentation defines blocks in Python.
? Which statement is true of Indentation?
- Is an interpreted high level language
- Is dynamically typed
+ Defines blocks in Python
- Created Python
! Indentation defines blocks in Python.
? Which starts with a hash symbol?
+ Comment
- Keyword
- Guido van Rossum
- Identifier
! Comment starts with a hash symbol.
? Which statement is true of Comment?
+ Starts with a hash symbol
- Defines blocks in Python
- Created Python
- Is a reserved word
! Comment starts with a hash symbol.
? Which has unlimited precision in Python?
+ Integer
- Dictionary
- Single element tuple
- Tuple
! Integer has unlimited precision in Python.
? Which statement is true of Integer?
- Has values True and False
+ Has unlimited precision in Python
- Stores key value pairs
- Is mutable
! Integer has unlimited precision in Python.
? Which holds decimal numbers?
- String
- Boolean
+ Float
- Single element tuple
! Float holds decimal numbers.
? Which statement is true of Float?
- Stores unique elements
- Has unlimited precision in Python
+ Holds decimal numbers
- Is immutable
! Float holds decimal numbers.
? Which has values True and False?
- Set
- List
- Dictionary key
+ Boolean
! Boolean has values True and False.
? Which statement is true of Boolean?
- Stores key value pairs
+ Has values True and False
- Needs a trailing comma
- Represents absence of a value
! Boolean has values True and False.
? Which represents absence of a value?
- Integer
- Single element tuple
- Dictionary key
+ None
! None represents absence of a value.
? Which statement is true of None?
- Must be immutable
+ Represents absence of a value
- Holds decimal numbers
- Has values True and False
! None represents absence of a value.
? Which is mutable?
- Float
- Single element tuple
+ List
- Tuple
! List is mutable.
? Which statement is true of List?
- Is immutable
- Holds decimal numbers
- Represents absence of a value
+ Is mutable
! List is mutable.
? Which is immutable?
- Boolean
- Set
- Dictionary
+ Tuple
! Tuple is immutable.
? Which statement is true of Tuple?
- Is mutable
+ Is immutable
- Has values True and False
- Must be immutable
! Tuple is immutable.
? Which statement is true of String?
- Needs a trailing comma
- Must be immutable
+ Is immutable
- Has values True and False
! String is immutable.
? Which stores key value pairs?
- Dictionary key
- Set
+ Dictionary
- Tuple
! Dictionary stores key value pairs.
? Which statement is true of Dictionary?
- Represents absence of a value
- Has values True and False
- Is mutable
+ Stores key value pairs
! Dictionary stores key value pairs.
? Which stores unique elements?
- Boolean
- Single element tuple
- String
+ Set
! Set stores unique elements.
? Which statement is true of Set?
+ Stores unique elements
- Holds decimal numbers
- Has unlimited precision in Python
- Is immutable
! Set stores unique elements.
? Which must be immutable?
- Boolean
+ Dictionary key
- Tuple
- Float
! Dictionary key must be immutable.
? Which statement is true of Dictionary key?
- Is immutable
+ Must be immutable
- Stores key value pairs
- Has values True and False
! Dictionary key must be immutable.
? Which needs a trailing comma?
+ Single element tuple
- Integer
- Dictionary key
- Dictionary
! Single element tuple needs a trailing comma.
? Which statement is true of Single element tuple?
- Represents absence of a value
- Holds decimal numbers
- Stores unique elements
+ Needs a trailing comma
! Single element tuple needs a trailing comma.
? Which is floor division?
- Equality
+ Double slash
- Double star
- Not operator
! Double slash is floor division.
? Which statement is true of Double slash?
- Gives the remainder
+ Is floor division
- Is exponentiation
- Negates a condition
! Double slash is floor division.
? Which gives the remainder?
- Double slash
- In operator
- Equality
+ Percent
! Percent gives the remainder.
? Which statement is true of Percent?
- Is exponentiation
- Is floor division
+ Gives the remainder
- Negates a condition
! Percent gives the remainder.
? Which is exponentiation?
+ Double star
- And operator
- Equality
- Is operator
! Double star is exponentiation.
? Which statement is true of Double star?
- Is floor division
+ Is exponentiation
- Returns true only if both are true
- Tests identity
! Double star is exponentiation.
? Which tests identity?
- Percent
- Double star
+ Is operator
- In operator
! Is operator tests identity.
? Which statement is true of Is operator?
- Is floor division
+ Tests identity
- Returns true only if both are true
- Is tested with double equals
! Is operator tests identity.
? Which tests membership?
- Equality
- And operator
- Is operator
+ In operator
! In operator tests membership.
? Which statement is true of In operator?
- Returns true only if both are true
+ Tests membership
- Tests identity
- Negates a condition
! In operator tests membership.
? Which returns true only if both are true?
+ And operator
- Double star
- In operator
- Percent
! And operator returns true only if both are true.
? Which statement is true of And operator?
+ Returns true only if both are true
- Tests membership
- Is exponentiation
- Is floor division
! And operator returns true only if both are true.
? Which negates a condition?
- And operator
+ Not operator
- In operator
- Double slash
! Not operator negates a condition.
? Which statement is true of Not operator?
+ Negates a condition
- Is exponentiation
- Tests identity
- Tests membership
! Not operator negates a condition.
? Which is tested with double equals?
- Not operator
- And operator
- In operator
+ Equality
! Equality is tested with double equals.
? Which statement is true of Equality?
- Returns true only if both are true
- Is floor division
- Negates a condition
+ Is tested with double equals
! Equality is tested with double equals.
? Which returns a string?
- Type function
- Print end parameter
+ Input function
- Print sep parameter
! Input function returns a string.
? Which statement is true of Input function?
+ Returns a string
- Controls the line ending
- Converts to integer
- Sets the separator
! Input function returns a string.
? Which controls the line ending?
+ Print end parameter
- Input function
- Int function
- Print sep parameter
! Print end parameter controls the line ending.
? Which statement is true of Print end parameter?
+ Controls the line ending
- Returns the type of an object
- Converts to integer
- Sets the separator
! Print end parameter controls the line ending.
? Which sets the separator?
- Int function
+ Print sep parameter
- Input function
- Print end parameter
! Print sep parameter sets the separator.
? Which statement is true of Print sep parameter?
- Returns a string
- Returns the type of an object
+ Sets the separator
- Converts to integer
! Print sep parameter sets the separator.
? Which converts to integer?
- Type function
+ Int function
- Print sep parameter
- Print end parameter
! Int function converts to integer.
? Which statement is true of Int function?
- Controls the line ending
- Returns the type of an object
+ Converts to integer
- Returns a string
! Int function converts to integer.
? Which returns the type of an object?
- Int function
- Print sep parameter
+ Type function
- Input function
! Type function returns the type of an object.
? Which statement is true of Type function?
- Sets the separator
- Converts to integer
- Controls the line ending
+ Returns the type of an object
! Type function returns the type of an object.
? Which runs a block on a true condition?
+ If statement
- Elif
- For loop
- Break
! If statement runs a block on a true condition.
? Which statement is true of If statement?
- Exits the loop
+ Runs a block on a true condition
- Runs when the loop is not broken
- Can count backwards
! If statement runs a block on a true condition.
? Which tests another condition?
+ Elif
- Break
- Range function
- Range with step
! Elif tests another condition.
? Which statement is true of Elif?
- Runs a block on a true condition
- Excludes the stop value
- Runs when the loop is not broken
+ Tests another condition
! Elif tests another condition.
? Which iterates over a sequence?
- Loop else
- Continue
+ For loop
- Break
! For loop iterates over a sequence.
? Which statement is true of For loop?
- Skips to the next iteration
+ Iterates over a sequence
- Exits the loop
- Tests another condition
! For loop iterates over a sequence.
? Which repeats while a condition is true?
- For loop
- Range function
+ While loop
- Range with step
! While loop repeats while a condition is true.
? Which statement is true of While loop?
- Can count backwards
- Skips to the next iteration
+ Repeats while a condition is true
- Exits the loop
! While loop repeats while a condition is true.
? Which exits the loop?
- Continue
+ Break
- Elif
- Loop else
! Break exits the loop.
? Which statement is true of Break?
- Can count backwards
- Repeats while a condition is true
+ Exits the loop
- Skips to the next iteration
! Break exits the loop.
? Which skips to the next iteration?
- Range with step
- If statement
+ Continue
- Loop else
! Continue skips to the next iteration.
? Which statement is true of Continue?
- Repeats while a condition is true
- Runs when the loop is not broken
- Tests another condition
+ Skips to the next iteration
! Continue skips to the next iteration.
? Which excludes the stop value?
+ Range function
- Range with step
- While loop
- If statement
! Range function excludes the stop value.
? Which statement is true of Range function?
- Repeats while a condition is true
+ Excludes the stop value
- Can count backwards
- Exits the loop
! Range function excludes the stop value.
? Which can count backwards?
- Loop else
- While loop
- For loop
+ Range with step
! Range with step can count backwards.
? Which statement is true of Range with step?
+ Can count backwards
- Exits the loop
- Skips to the next iteration
- Iterates over a sequence
! Range with step can count backwards.
? Which runs when the loop is not broken?
- Range function
- Continue
+ Loop else
- Range with step
! Loop else runs when the loop is not broken.
? Which statement is true of Loop else?
- Tests another condition
- Excludes the stop value
- Can count backwards
+ Runs when the loop is not broken
! Loop else runs when the loop is not broken.
? Which is the first character?
- Isdigit
- Upper
+ Index zero
- Split
! Index zero is the first character.
? Which statement is true of Index zero?
- Tests for digits
- Returns minus one if absent
+ Is the first character
- Removes surrounding whitespace
! Index zero is the first character.
? Which is the last character?
- Upper
+ Negative index minus one
- Index zero
- Join
! Negative index minus one is the last character.
? Which statement is true of Negative index minus one?
- Removes surrounding whitespace
- Tests for digits
- Excludes the end index
+ Is the last character
! Negative index minus one is the last character.
? Which excludes the end index?
- Strip
+ Slicing
- Negative index minus one
- Isdigit
! Slicing excludes the end index.
? Which statement is true of Slicing?
+ Excludes the end index
- Combines a list into a string
- Is the last character
- Removes surrounding whitespace
! Slicing excludes the end index.
? Which converts to capitals?
- Split
+ Upper
- Find
- Negative index minus one
! Upper converts to capitals.
? Which statement is true of Upper?
- Removes surrounding whitespace
+ Converts to capitals
- Tests for digits
- Breaks a string into a list
! Upper converts to capitals.
? Which removes surrounding whitespace?
- Join
- Isdigit
+ Strip
- Negative index minus one
! Strip removes surrounding whitespace.
? Which statement is true of Strip?
+ Removes surrounding whitespace
- Is the first character
- Excludes the end index
- Returns a new string
! Strip removes surrounding whitespace.
? Which breaks a string into a list?
- Isdigit
- Find
- Negative index minus one
+ Split
! Split breaks a string into a list.
? Which statement is true of Split?
+ Breaks a string into a list
- Returns minus one if absent
- Converts to capitals
- Combines a list into a string
! Split breaks a string into a list.
? Which combines a list into a string?
- Find
- Split
+ Join
- Slicing
! Join combines a list into a string.
? Which statement is true of Join?
- Removes surrounding whitespace
- Breaks a string into a list
- Tests for digits
+ Combines a list into a string
! Join combines a list into a string.
? Which returns minus one if absent?
- Strip
- Index zero
+ Find
- Replace
! Find returns minus one if absent.
? Which statement is true of Find?
- Converts to capitals
- Is the first character
- Breaks a string into a list
+ Returns minus one if absent
! Find returns minus one if absent.
? Which returns a new string?
- Index zero
- Upper
+ Replace
- Negative index minus one
! Replace returns a new string.
? Which statement is true of Replace?
- Returns minus one if absent
- Combines a list into a string
+ Returns a new string
- Breaks a string into a list
! Replace returns a new string.
? Which tests for digits?
+ Isdigit
- Negative index minus one
- Upper
- Slicing
! Isdigit tests for digits.
? Which statement is true of Isdigit?
- Is the last character
- Is the first character
+ Tests for digits
- Returns minus one if absent
! Isdigit tests for digits.
? Which adds an item at the end?
- Pop
- Remove
+ Append
- Insert
! Append adds an item at the end.
? Which statement is true of Append?
- Removes and returns an item
- Adds at a given index
- Adds all items of an iterable
+ Adds an item at the end
! Append adds an item at the end.
? Which adds all items of an iterable?
+ Extend
- Sorted
- Append
- Insert
! Extend adds all items of an iterable.
? Which statement is true of Extend?
- Adds an item at the end
+ Adds all items of an iterable
- Orders a list in place
- Models a matrix
! Extend adds all items of an iterable.
? Which adds at a given index?
- Sorted
+ Insert
- Remove
- Pop
! Insert adds at a given index.
? Which statement is true of Insert?
- Merges dictionaries
- Gives key value pairs
+ Adds at a given index
- Reverses a list in place
! Insert adds at a given index.
? Which deletes the first matching value?
- Get method
- Sort
- Sorted
+ Remove
! Remove deletes the first matching value.
? Which statement is true of Remove?
- Adds all items of an iterable
+ Deletes the first matching value
- Gives key value pairs
- Orders a list in place
! Remove deletes the first matching value.
? Which removes and returns an item?
- Sorted
- Update method
+ Pop
- Sort
! Pop removes and returns an item.
? Which statement is true of Pop?
- Adds an item at the end
- Returns a new sorted list
- Adds at a given index
+ Removes and returns an item
! Pop removes and returns an item.
? Which orders a list in place?
- Append
- Insert
+ Sort
- Update method
! Sort orders a list in place.
? Which statement is true of Sort?
- Returns None for a missing key
- Models a matrix
+ Orders a list in place
- Adds an item at the end
! Sort orders a list in place.
? Which returns a new sorted list?
- Append
- Nested list
+ Sorted
- Sort
! Sorted returns a new sorted list.
? Which statement is true of Sorted?
- Adds all items of an iterable
+ Returns a new sorted list
- Models a matrix
- Deletes the first matching value
! Sorted returns a new sorted list.
? Which reverses a list in place?
- Remove
- Items method
- Sort
+ Reverse
! Reverse reverses a list in place.
? Which statement is true of Reverse?
- Returns None for a missing key
- Orders a list in place
+ Reverses a list in place
- Deletes the first matching value
! Reverse reverses a list in place.
? Which returns None for a missing key?
- Reverse
- Update method
- Nested list
+ Get method
! Get method returns None for a missing key.
? Which statement is true of Get method?
- Orders a list in place
- Deletes the first matching value
- Reverses a list in place
+ Returns None for a missing key
! Get method returns None for a missing key.
? Which gives key value pairs?
- Update method
+ Items method
- Reverse
- Nested list
! Items method gives key value pairs.
? Which statement is true of Items method?
+ Gives key value pairs
- Adds all items of an iterable
- Adds an item at the end
- Merges dictionaries
! Items method gives key value pairs.
? Which merges dictionaries?
- Sort
- Remove
+ Update method
- Reverse
! Update method merges dictionaries.
? Which statement is true of Update method?
+ Merges dictionaries
- Reverses a list in place
- Adds an item at the end
- Deletes the first matching value
! Update method merges dictionaries.
? Which builds a list compactly?
+ List comprehension
- Get method
- Append
- Extend
! List comprehension builds a list compactly.
? Which statement is true of List comprehension?
- Orders a list in place
- Reverses a list in place
+ Builds a list compactly
- Returns a new sorted list
! List comprehension builds a list compactly.
? Which models a matrix?
- Remove
+ Nested list
- Append
- Sorted
! Nested list models a matrix.
? Which statement is true of Nested list?
- Adds all items of an iterable
- Merges dictionaries
+ Models a matrix
- Removes and returns an item
! Nested list models a matrix.
? Which provides sqrt and floor?
+ Math module
- NameError
- IndexError
- Random random
! Math module provides sqrt and floor.
? Which statement is true of Math module?
- Provides mean and median
- Returns a float from 0 to 1
+ Provides sqrt and floor
- Occurs for an undefined name
! Math module provides sqrt and floor.
? Which includes both endpoints?
- Statistics module
- KeyError
+ Random randint
- ZeroDivisionError
! Random randint includes both endpoints.
? Which statement is true of Random randint?
- Occurs for an undefined name
- Occurs for an invalid index
- Occurs for an unsuitable operand type
+ Includes both endpoints
! Random randint includes both endpoints.
? Which returns a float from 0 to 1?
+ Random random
- IndexError
- Random randint
- KeyError
! Random random returns a float from 0 to 1.
? Which statement is true of Random random?
+ Returns a float from 0 to 1
- Occurs on division by zero
- Provides mean and median
- Provides sqrt and floor
! Random random returns a float from 0 to 1.
? Which provides mean and median?
+ Statistics module
- NameError
- ZeroDivisionError
- TypeError
! Statistics module provides mean and median.
? Which statement is true of Statistics module?
- Occurs for an undefined name
+ Provides mean and median
- Occurs for an unsuitable operand type
- Provides sqrt and floor
! Statistics module provides mean and median.
? Which occurs for an invalid index?
+ IndexError
- Random random
- TypeError
- NameError
! IndexError occurs for an invalid index.
? Which statement is true of IndexError?
- Occurs for an unsuitable operand type
- Occurs for an undefined name
- Provides sqrt and floor
+ Occurs for an invalid index
! IndexError occurs for an invalid index.
? Which occurs for a missing dictionary key?
- Random random
+ KeyError
- TypeError
- Statistics module
! KeyError occurs for a missing dictionary key.
? Which statement is true of KeyError?
- Provides sqrt and floor
- Occurs for an invalid index
+ Occurs for a missing dictionary key
- Occurs on division by zero
! KeyError occurs for a missing dictionary key.
? Which occurs on division by zero?
+ ZeroDivisionError
- KeyError
- IndexError
- Math module
! ZeroDivisionError occurs on division by zero.
? Which statement is true of ZeroDivisionError?
- Occurs for an unsuitable operand type
- Returns a float from 0 to 1
+ Occurs on division by zero
- Includes both endpoints
! ZeroDivisionError occurs on division by zero.
? Which occurs for an undefined name?
- Random randint
+ NameError
- Math module
- ZeroDivisionError
! NameError occurs for an undefined name.
? Which statement is true of NameError?
+ Occurs for an undefined name
- Includes both endpoints
- Occurs on division by zero
- Occurs for a missing dictionary key
! NameError occurs for an undefined name.
? Which occurs for an unsuitable operand type?
- IndexError
- NameError
- Math module
+ TypeError
! TypeError occurs for an unsuitable operand type.
? Which statement is true of TypeError?
- Includes both endpoints
- Provides sqrt and floor
+ Occurs for an unsuitable operand type
- Occurs for an invalid index
! TypeError occurs for an unsuitable operand type.
? Immutable
- List
- Dictionary
+ Tuple
- Set
! Type.
? input() returns
+ String
- Integer
- Float
- List
! Type.
? Floor division
- /
- %
+ //
- **
! Operator.
? Missing key
- IndexError
- NameError
- TypeError
+ KeyError
! Error.
? range(5) last value
- 5
+ 4
- 6
- 3
! Value.
? Membership
- is
- ==
- and
+ in
! Operator.
@visual
compare | List and tuple | List=Mutable~Square brackets; Tuple=Immutable~Parentheses
blocks | Loops | for; while; break; continue
flow | Program run | Source; Interpreter; Bytecode; Output
mind | Python basics | Types; Operators; Control; Sequences
steps | Dictionary lookup | Key; Hash; Value; Return
@problems
## Moderate
P: What does print(10//3, 10%3, 2**3) display?
A: 3 1 8
R: 3 | Floor division
R: 3 | Remainder and power
## High
P: Why can a list not be a dictionary key?
A: Dictionary keys must be immutable and hashable, and a list is mutable.
R: 2 | Immutable
R: 2 | Hashable
R: 2 | List mutable
R: 2 | Tuple allowed
## Advanced
P: Write code to count vowels in a string.
A: Loop over each character and increment a counter when it is in aeiou after lower().
R: 2 | Loop
R: 2 | Condition
R: 2 | Counter
R: 2 | Output
