# Lists, Dictionaries and Functions
minutes: 35
yt: class 10 ai and it lists, dictionaries and functions
@study
A list is an ordered, mutable collection written in square brackets; methods include append, insert, remove, pop, sort, reverse and index. A tuple is immutable. A dictionary stores key:value pairs in braces. Functions are defined with def, take parameters and return values; they promote reuse. Variables can be local or global. Modules are imported with import (math, random). Files can be opened with open() in modes r, w and a and closed with close().
## Deep dive: lists
Lists are mutable; index from 0 or from -1 at the end. Methods: append, insert, remove, pop, sort, reverse, count, index, extend. Slicing L[a:b] gives items a to b-1.
## Deep dive: tuples and dictionaries
Tuples are immutable. Dictionaries map unique keys to values; use keys(), values(), items(), and d[key] to read.
## Deep dive: functions
def name(parameters): body; return value. Arguments can be positional, keyword or default. Local variables live inside the function; global variables are visible everywhere.
## Deep dive: modules and files
import math, random. open(name, mode) with r, w, a; read(), readline(), write(), close().
## Hindi saransh
लिस्ट परिवर्तनीय होती है, ट्यूपल नहीं। डिक्शनरी में key:value जोड़े होते हैं। फ़ंक्शन def से बनता है।
> List [ ] mutable; tuple ( ) immutable; dict { } key:value.
@formulas
## Key points
List/tuple/dict | [ ] ( ) { } | 
Function | def name(): return | 
File modes | r w a | 

@qa
Q: What is meant by List?
A: Ordered mutable collection.
Q: What is meant by Tuple?
A: Ordered immutable collection.
Q: What is meant by Dictionary?
A: Key-value collection.
Q: What is meant by Set?
A: Unordered unique collection.
Q: What is meant by Index?
A: Position number.
Q: What is meant by Slice?
A: Part of a sequence.
Q: What is meant by append?
A: Add at end.
Q: What is meant by insert?
A: Add at position.
Q: What is meant by remove?
A: Delete a value.
Q: What is meant by pop?
A: Remove by index.
Q: What is meant by sort?
A: Order items.
Q: What is meant by reverse?
A: Flip order.
Q: What is meant by count?
A: Number of occurrences.
Q: What is meant by index method?
A: Position of value.
Q: What is meant by extend?
A: Add many items.
Q: What is meant by Mutable?
A: Can be changed.
Q: What is meant by Immutable?
A: Cannot be changed.
Q: What is meant by Key?
A: Label in a dictionary.
Q: What is meant by Value?
A: Data stored under a key.
Q: What is meant by Function?
A: Reusable code block.
Q: What is meant by def?
A: Defines a function.
Q: What is meant by Parameter?
A: Variable in definition.
Q: What is meant by Argument?
A: Value passed in.
Q: What is meant by return?
A: Sends back a result.
Q: What is meant by Default argument?
A: Preset parameter value.
Q: What is meant by Local variable?
A: Exists inside function.
Q: What is meant by Global variable?
A: Exists everywhere.
Q: What is meant by Scope?
A: Where a variable is visible.
Q: What is meant by Module?
A: Importable file.
Q: What is meant by import?
A: Loads a module.
Q: What is meant by math module?
A: Mathematical functions.
Q: What is meant by random module?
A: Random numbers.
Q: What is meant by File handling?
A: Reading and writing files.
Q: What is meant by open?
A: Opens a file.
Q: What is meant by Mode?
A: Purpose for opening file.
Q: What is meant by Recursion?
A: Function calling itself.
Q: What is meant by Docstring?
A: Function description.
Q: What is meant by Built-in function?
A: Provided by Python.
Q: What is meant by User-defined function?
A: Written by programmer.
Q: What is meant by Library?
A: Collection of modules.
Q: Which term matches this description: Ordered mutable collection?
A: List.
Q: Which term matches this description: Ordered immutable collection?
A: Tuple.
Q: Which term matches this description: Key-value collection?
A: Dictionary.
Q: Which term matches this description: Unordered unique collection?
A: Set.
Q: Which term matches this description: Position number?
A: Index.
Q: Which term matches this description: Part of a sequence?
A: Slice.
Q: Which term matches this description: Add at end?
A: append.
Q: Which term matches this description: Add at position?
A: insert.
Q: Which term matches this description: Delete a value?
A: remove.
Q: Which term matches this description: Remove by index?
A: pop.
Q: Which term matches this description: Order items?
A: sort.
Q: Which term matches this description: Flip order?
A: reverse.
Q: Which term matches this description: Number of occurrences?
A: count.
Q: Which term matches this description: Position of value?
A: index method.
Q: Which term matches this description: Add many items?
A: extend.
Q: Which term matches this description: Can be changed?
A: Mutable.
Q: Which term matches this description: Cannot be changed?
A: Immutable.
Q: Which term matches this description: Label in a dictionary?
A: Key.
Q: Which term matches this description: Data stored under a key?
A: Value.
Q: Which term matches this description: Reusable code block?
A: Function.
Q: Which term matches this description: Defines a function?
A: def.
Q: Which term matches this description: Variable in definition?
A: Parameter.
Q: Which term matches this description: Value passed in?
A: Argument.
Q: Which term matches this description: Sends back a result?
A: return.
Q: Which term matches this description: Preset parameter value?
A: Default argument.
Q: Which term matches this description: Exists inside function?
A: Local variable.
Q: Which term matches this description: Exists everywhere?
A: Global variable.
Q: Which term matches this description: Where a variable is visible?
A: Scope.
Q: Which term matches this description: Importable file?
A: Module.
Q: Which term matches this description: Loads a module?
A: import.
Q: Which term matches this description: Mathematical functions?
A: math module.
Q: Which term matches this description: Random numbers?
A: random module.
Q: Which term matches this description: Reading and writing files?
A: File handling.
Q: Which term matches this description: Opens a file?
A: open.
Q: Which term matches this description: Purpose for opening file?
A: Mode.
Q: Which term matches this description: Function calling itself?
A: Recursion.
Q: Which term matches this description: Function description?
A: Docstring.
Q: Which term matches this description: Provided by Python?
A: Built-in function.
Q: Which term matches this description: Written by programmer?
A: User-defined function.
Q: Which term matches this description: Collection of modules?
A: Library.
Q: What is a list?
A: An ordered, changeable collection of items in [ ].
Q: What is the index of the first item?
A: 0.
Q: What does negative index -1 mean?
A: The last item.
Q: What does append() do?
A: Adds an item at the end of a list.
Q: What does insert() do?
A: Adds an item at a given position.
Q: What does remove() do?
A: Deletes the first occurrence of a value.
Q: What does pop() do?
A: Removes and returns an item (last by default).
Q: What does sort() do?
A: Arranges list items in order.
Q: What does reverse() do?
A: Reverses the order of items.
Q: What does len() do for a list?
A: Returns the number of items.
Q: What does sum() do?
A: Adds all numbers in a list.
Q: What does max() do?
A: Returns the largest item.
Q: What does min() do?
A: Returns the smallest item.
Q: What is list slicing?
A: Selecting part of a list with [start:stop].
Q: What is a tuple?
A: An ordered, unchangeable collection in ( ).
Q: Why use tuples?
A: To protect data from change.
Q: What is a dictionary?
A: A collection of key:value pairs in { }.
Q: How do you access a dictionary value?
A: By its key, d[key].
Q: Can dictionary keys repeat?
A: No, keys are unique.
Q: What does keys() return?
A: All keys of a dictionary.
Q: What does values() return?
A: All values of a dictionary.
Q: What does items() return?
A: Key-value pairs.
Q: What is a function?
A: A named block of reusable code.
Q: Which keyword defines a function?
A: def.
Q: What is a parameter?
A: A variable in the function definition.
Q: What is an argument?
A: The value passed to the function.
Q: What does return do?
A: Sends a value back to the caller.
Q: What is a default argument?
A: A parameter value used when none is passed.
Q: What is a local variable?
A: A variable defined inside a function.
Q: What is a global variable?
A: A variable defined outside functions.
Q: What is a module?
A: A file of Python code that can be imported.
Q: How do you import a module?
A: With the import keyword.
Q: What does math.sqrt(16) return?
A: 4.0.
Q: What does random.randint(1,6) return?
A: A random integer from 1 to 6.
Q: What does open() do?
A: Opens a file.
Q: What are the file modes r, w, a?
A: Read, write and append.
Q: What does close() do?
A: Closes an open file.
Q: What does readline() do?
A: Reads one line from a file.
Q: What is a recursive function?
A: A function that calls itself.
Q: What is a docstring?
A: A string describing a function.
Q: What is list comprehension?
A: A short way to create a list.
Q: In Python, what is the value of 9 // 4 ?
A: 2.
Q: In Python, what is the value of 9 % 4 ?
A: 1.
Q: In Python, what is the value of 13 // 9 ?
A: 1.
Q: In Python, what is the value of 13 % 9 ?
A: 4.
Q: In Python, what is the value of 20 // 3 ?
A: 6.
Q: In Python, what is the value of 20 % 3 ?
A: 2.
Q: In Python, what is the value of 2 // 9 ?
A: 0.
Q: In Python, what is the value of 2 % 9 ?
A: 2.
Q: In Python, what is the value of 10 // 5 ?
A: 2.
Q: In Python, what is the value of 10 % 5 ?
A: 0.
Q: In Python, what is the value of 8 // 9 ?
A: 0.
Q: In Python, what is the value of 8 % 9 ?
A: 8.
Q: In Python, what is the value of 19 // 9 ?
A: 2.
Q: In Python, what is the value of 19 % 9 ?
A: 1.
Q: In Python, what is the value of 14 // 4 ?
A: 3.
Q: In Python, what is the value of 14 % 4 ?
A: 2.
Q: In Python, what is the value of 18 // 8 ?
A: 2.
Q: In Python, what is the value of 18 % 8 ?
A: 2.
Q: In Python, what is the value of 2 // 3 ?
A: 0.
Q: In Python, what is the value of 2 % 3 ?
A: 2.
Q: In Python, what is the value of 7 // 2 ?
A: 3.
Q: In Python, what is the value of 7 % 2 ?
A: 1.
Q: In Python, what is the value of 11 // 2 ?
A: 5.
Q: In Python, what is the value of 11 % 2 ?
A: 1.
Q: In Python, what is the value of 10 // 9 ?
A: 1.
Q: In Python, what is the value of 10 % 9 ?
A: 1.
Q: In Python, what is the value of 5 ** 4 ?
A: 625.
Q: In Python, what is the value of 5 ** 3 ?
A: 125.
Q: In Python, what is the value of 5 ** 2 ?
A: 25.
Q: In Python, what is the value of 4 ** 2 ?
A: 16.
Q: In Python, what is the value of 2 ** 2 ?
A: 4.
Q: In Python, what is the value of 4 ** 4 ?
A: 256.
Q: In Python, what is the value of 4 ** 3 ?
A: 64.
Q: How many times does the loop "for i in range(5):" run?
A: 5.
Q: How many values does range(4, 11) produce?
A: 7.
Q: How many values does range(1, 12) produce?
A: 11.
Q: How many times does the loop "for i in range(7):" run?
A: 7.
Q: How many values does range(2, 13) produce?
A: 11.
Q: How many values does range(1, 11) produce?
A: 10.
Q: How many times does the loop "for i in range(8):" run?
A: 8.
Q: How many values does range(3, 12) produce?
A: 9.
Q: How many times does the loop "for i in range(3):" run?
A: 3.
Q: How many values does range(1, 15) produce?
A: 14.
Q: How many times does the loop "for i in range(9):" run?
A: 9.
Q: How many values does range(4, 9) produce?
A: 5.
Q: How many values does range(1, 14) produce?
A: 13.
Q: How many times does the loop "for i in range(4):" run?
A: 4.
Q: How many times does the loop "for i in range(6):" run?
A: 6.
Q: If L = [1, 1, 7, 6, 9], what is L[2]?
A: 7.
Q: If L = [1, 1, 7, 6, 9], what is sum(L)?
A: 24.
Q: If L = [9, 4, 1, 5, 1], what is L[0]?
A: 9.
Q: If L = [9, 4, 1, 5, 1], what is sum(L)?
A: 20.
Q: If L = [2, 9, 1, 4, 7], what is L[2]?
A: 1.
Q: If L = [2, 9, 1, 4, 7], what is sum(L)?
A: 23.
Q: If L = [5, 3, 1, 6, 6], what is L[2]?
A: 1.
Q: If L = [5, 3, 1, 6, 6], what is sum(L)?
A: 21.
Q: If L = [3, 7, 7, 8, 9], what is L[3]?
A: 8.
Q: If L = [3, 7, 7, 8, 9], what is sum(L)?
A: 34.
Q: If L = [9, 2, 9, 5, 7], what is L[1]?
A: 2.
Q: If L = [9, 2, 9, 5, 7], what is sum(L)?
A: 32.
Q: If L = [5, 7, 5, 9, 5], what is L[4]?
A: 5.
Q: If L = [5, 7, 5, 9, 5], what is sum(L)?
A: 31.
Q: If L = [6, 1, 7, 6, 1], what is L[3]?
A: 6.
Q: If L = [6, 1, 7, 6, 1], what is sum(L)?
A: 21.
@quiz
? What is meant by List?
- Provided by Python
- Unordered unique collection
- Number of occurrences
+ Ordered mutable collection
! From the CBSE Class 9 syllabus.
? What is meant by Tuple?
- Position number
- Label in a dictionary
- Purpose for opening file
+ Ordered immutable collection
! From the CBSE Class 9 syllabus.
? What is meant by Dictionary?
- Can be changed
- Remove by index
- Function description
+ Key-value collection
! From the CBSE Class 9 syllabus.
? What is meant by Set?
- Label in a dictionary
- Loads a module
+ Unordered unique collection
- Function description
! From the CBSE Class 9 syllabus.
? What is meant by Index?
- Random numbers
- Where a variable is visible
+ Position number
- Provided by Python
! From the CBSE Class 9 syllabus.
? What is meant by Slice?
- Exists everywhere
- Preset parameter value
- Ordered mutable collection
+ Part of a sequence
! From the CBSE Class 9 syllabus.
? What is meant by append?
+ Add at end
- Loads a module
- Function description
- Unordered unique collection
! From the CBSE Class 9 syllabus.
? What is meant by insert?
+ Add at position
- Reading and writing files
- Mathematical functions
- Importable file
! From the CBSE Class 9 syllabus.
? What is meant by remove?
- Can be changed
+ Delete a value
- Collection of modules
- Order items
! From the CBSE Class 9 syllabus.
? What is meant by pop?
- Position number
- Reading and writing files
- Part of a sequence
+ Remove by index
! From the CBSE Class 9 syllabus.
? What is meant by sort?
+ Order items
- Opens a file
- Reusable code block
- Delete a value
! From the CBSE Class 9 syllabus.
? What is meant by reverse?
- Remove by index
- Label in a dictionary
+ Flip order
- Preset parameter value
! From the CBSE Class 9 syllabus.
? What is meant by count?
- Add many items
- Reusable code block
- Label in a dictionary
+ Number of occurrences
! From the CBSE Class 9 syllabus.
? What is meant by index method?
- Reading and writing files
+ Position of value
- Sends back a result
- Part of a sequence
! From the CBSE Class 9 syllabus.
? What is meant by extend?
- Function description
- Reusable code block
- Remove by index
+ Add many items
! From the CBSE Class 9 syllabus.
? What is meant by Mutable?
- Opens a file
- Position number
+ Can be changed
- Remove by index
! From the CBSE Class 9 syllabus.
? What is meant by Immutable?
+ Cannot be changed
- Opens a file
- Mathematical functions
- Add at end
! From the CBSE Class 9 syllabus.
? What is meant by Key?
- Exists everywhere
- Delete a value
- Purpose for opening file
+ Label in a dictionary
! From the CBSE Class 9 syllabus.
? What is meant by Value?
- Exists inside function
- Number of occurrences
+ Data stored under a key
- Can be changed
! From the CBSE Class 9 syllabus.
? What is meant by Function?
- Opens a file
+ Reusable code block
- Exists inside function
- Delete a value
! From the CBSE Class 9 syllabus.
? What is meant by def?
- Order items
- Reusable code block
+ Defines a function
- Number of occurrences
! From the CBSE Class 9 syllabus.
? What is meant by Parameter?
- Order items
+ Variable in definition
- Reusable code block
- Part of a sequence
! From the CBSE Class 9 syllabus.
? What is meant by Argument?
- Number of occurrences
- Provided by Python
- Label in a dictionary
+ Value passed in
! From the CBSE Class 9 syllabus.
? What is meant by return?
+ Sends back a result
- Part of a sequence
- Loads a module
- Purpose for opening file
! From the CBSE Class 9 syllabus.
? What is meant by Default argument?
- Exists inside function
+ Preset parameter value
- Data stored under a key
- Cannot be changed
! From the CBSE Class 9 syllabus.
? What is meant by Local variable?
- Key-value collection
- Data stored under a key
- Written by programmer
+ Exists inside function
! From the CBSE Class 9 syllabus.
? What is meant by Global variable?
- Reusable code block
- Provided by Python
+ Exists everywhere
- Label in a dictionary
! From the CBSE Class 9 syllabus.
? What is meant by Scope?
- Provided by Python
- Add many items
+ Where a variable is visible
- Delete a value
! From the CBSE Class 9 syllabus.
? What is meant by Module?
- Delete a value
+ Importable file
- Defines a function
- Exists everywhere
! From the CBSE Class 9 syllabus.
? What is meant by import?
- Unordered unique collection
+ Loads a module
- Sends back a result
- Mathematical functions
! From the CBSE Class 9 syllabus.
? What is meant by math module?
- Exists everywhere
- Written by programmer
- Cannot be changed
+ Mathematical functions
! From the CBSE Class 9 syllabus.
? What is meant by random module?
- Mathematical functions
+ Random numbers
- Add at position
- Number of occurrences
! From the CBSE Class 9 syllabus.
? What is meant by File handling?
- Loads a module
- Function description
+ Reading and writing files
- Ordered mutable collection
! From the CBSE Class 9 syllabus.
? What is meant by open?
- Add many items
+ Opens a file
- Flip order
- Mathematical functions
! From the CBSE Class 9 syllabus.
? What is meant by Mode?
- Can be changed
+ Purpose for opening file
- Number of occurrences
- Defines a function
! From the CBSE Class 9 syllabus.
? What is meant by Recursion?
- Add many items
- Importable file
- Random numbers
+ Function calling itself
! From the CBSE Class 9 syllabus.
? What is meant by Docstring?
+ Function description
- Sends back a result
- Ordered immutable collection
- Preset parameter value
! From the CBSE Class 9 syllabus.
? What is meant by Built-in function?
+ Provided by Python
- Function description
- Remove by index
- Exists everywhere
! From the CBSE Class 9 syllabus.
? What is meant by User-defined function?
+ Written by programmer
- Add at end
- Purpose for opening file
- Provided by Python
! From the CBSE Class 9 syllabus.
? What is meant by Library?
- Value passed in
- Loads a module
- Mathematical functions
+ Collection of modules
! From the CBSE Class 9 syllabus.
? Which term matches this description: Ordered mutable collection?
- File handling
+ List
- Mutable
- Function
! From the CBSE Class 9 syllabus.
? Which term matches this description: Ordered immutable collection?
- Dictionary
- open
- Function
+ Tuple
! From the CBSE Class 9 syllabus.
? Which term matches this description: Key-value collection?
- random module
+ Dictionary
- reverse
- Global variable
! From the CBSE Class 9 syllabus.
? Which term matches this description: Unordered unique collection?
+ Set
- Slice
- sort
- Key
! From the CBSE Class 9 syllabus.
? Which term matches this description: Position number?
+ Index
- Immutable
- return
- import
! From the CBSE Class 9 syllabus.
? Which term matches this description: Part of a sequence?
- Value
+ Slice
- Argument
- Global variable
! From the CBSE Class 9 syllabus.
? Which term matches this description: Add at end?
- Index
+ append
- extend
- Recursion
! From the CBSE Class 9 syllabus.
? Which term matches this description: Add at position?
- count
- index method
- pop
+ insert
! From the CBSE Class 9 syllabus.
? Which term matches this description: Delete a value?
+ remove
- math module
- Recursion
- open
! From the CBSE Class 9 syllabus.
? Which term matches this description: Remove by index?
- Key
- Argument
- Set
+ pop
! From the CBSE Class 9 syllabus.
? Which term matches this description: Order items?
- Set
- Docstring
+ sort
- Scope
! From the CBSE Class 9 syllabus.
? Which term matches this description: Flip order?
- Dictionary
+ reverse
- Docstring
- Global variable
! From the CBSE Class 9 syllabus.
? Which term matches this description: Number of occurrences?
- Tuple
- random module
+ count
- append
! From the CBSE Class 9 syllabus.
? Which term matches this description: Position of value?
- Recursion
+ index method
- Built-in function
- reverse
! From the CBSE Class 9 syllabus.
? Which term matches this description: Add many items?
- sort
- Argument
- Mode
+ extend
! From the CBSE Class 9 syllabus.
? Which term matches this description: Can be changed?
- open
- random module
- Local variable
+ Mutable
! From the CBSE Class 9 syllabus.
? Which term matches this description: Cannot be changed?
- Library
- Slice
- random module
+ Immutable
! From the CBSE Class 9 syllabus.
? Which term matches this description: Label in a dictionary?
- Set
- Scope
+ Key
- List
! From the CBSE Class 9 syllabus.
? Which term matches this description: Data stored under a key?
- List
- Local variable
- Dictionary
+ Value
! From the CBSE Class 9 syllabus.
? Which term matches this description: Reusable code block?
- math module
+ Function
- Set
- return
! From the CBSE Class 9 syllabus.
? Which term matches this description: Defines a function?
- Scope
+ def
- Mutable
- sort
! From the CBSE Class 9 syllabus.
? Which term matches this description: Variable in definition?
- Key
- math module
+ Parameter
- Dictionary
! From the CBSE Class 9 syllabus.
? Which term matches this description: Value passed in?
- Library
- Index
- Dictionary
+ Argument
! From the CBSE Class 9 syllabus.
? Which term matches this description: Sends back a result?
- Immutable
- Slice
+ return
- Default argument
! From the CBSE Class 9 syllabus.
? Which term matches this description: Preset parameter value?
- return
- Mode
+ Default argument
- Key
! From the CBSE Class 9 syllabus.
? Which term matches this description: Exists inside function?
+ Local variable
- Scope
- Parameter
- Tuple
! From the CBSE Class 9 syllabus.
? Which term matches this description: Exists everywhere?
- Argument
- pop
+ Global variable
- index method
! From the CBSE Class 9 syllabus.
? Which term matches this description: Where a variable is visible?
+ Scope
- Set
- pop
- def
! From the CBSE Class 9 syllabus.
? Which term matches this description: Importable file?
- File handling
- Default argument
- Local variable
+ Module
! From the CBSE Class 9 syllabus.
? Which term matches this description: Loads a module?
- Set
+ import
- Module
- User-defined function
! From the CBSE Class 9 syllabus.
? Which term matches this description: Mathematical functions?
- import
- Recursion
+ math module
- File handling
! From the CBSE Class 9 syllabus.
? Which term matches this description: Random numbers?
- extend
- Scope
- Tuple
+ random module
! From the CBSE Class 9 syllabus.
? Which term matches this description: Reading and writing files?
+ File handling
- index method
- Docstring
- Index
! From the CBSE Class 9 syllabus.
? Which term matches this description: Opens a file?
- Docstring
+ open
- Global variable
- index method
! From the CBSE Class 9 syllabus.
? Which term matches this description: Purpose for opening file?
- Value
- Slice
- Global variable
+ Mode
! From the CBSE Class 9 syllabus.
? Which term matches this description: Function calling itself?
- Argument
- Index
- insert
+ Recursion
! From the CBSE Class 9 syllabus.
? Which term matches this description: Function description?
+ Docstring
- Mode
- Key
- remove
! From the CBSE Class 9 syllabus.
? Which term matches this description: Provided by Python?
- Recursion
+ Built-in function
- return
- Value
! From the CBSE Class 9 syllabus.
? Which term matches this description: Written by programmer?
+ User-defined function
- Local variable
- List
- File handling
! From the CBSE Class 9 syllabus.
? Which term matches this description: Collection of modules?
- def
+ Library
- extend
- random module
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "List".
- Function description
- Provided by Python
- Exists everywhere
+ Ordered mutable collection
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Tuple".
- Label in a dictionary
- Variable in definition
- Unordered unique collection
+ Ordered immutable collection
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Dictionary".
- Defines a function
- Add many items
+ Key-value collection
- Position of value
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Set".
- Key-value collection
- Add many items
+ Unordered unique collection
- Value passed in
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Index".
- Add at position
+ Position number
- Loads a module
- Part of a sequence
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Slice".
- Opens a file
- Written by programmer
+ Part of a sequence
- Purpose for opening file
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "append".
- Remove by index
- Position of value
- Part of a sequence
+ Add at end
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "insert".
+ Add at position
- Exists everywhere
- Label in a dictionary
- Random numbers
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "remove".
- Loads a module
- Ordered immutable collection
+ Delete a value
- Opens a file
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "pop".
- Reusable code block
+ Remove by index
- Delete a value
- Collection of modules
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "sort".
- Exists everywhere
- Value passed in
- Where a variable is visible
+ Order items
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "reverse".
- Ordered immutable collection
- Unordered unique collection
- Value passed in
+ Flip order
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "count".
- Position of value
- Collection of modules
+ Number of occurrences
- Part of a sequence
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "index method".
- Exists everywhere
- Unordered unique collection
- Random numbers
+ Position of value
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "extend".
+ Add many items
- Function description
- Position of value
- Variable in definition
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Mutable".
- Cannot be changed
- Opens a file
+ Can be changed
- Add many items
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Immutable".
- Unordered unique collection
- Function calling itself
- Provided by Python
+ Cannot be changed
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Key".
- Cannot be changed
+ Label in a dictionary
- Ordered mutable collection
- Exists everywhere
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Value".
- Exists everywhere
+ Data stored under a key
- Purpose for opening file
- Ordered immutable collection
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Function".
- Exists everywhere
- Mathematical functions
+ Reusable code block
- Delete a value
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "def".
- Exists everywhere
+ Defines a function
- Random numbers
- Loads a module
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Parameter".
- Reusable code block
+ Variable in definition
- Add at position
- Collection of modules
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Argument".
- Importable file
- Reading and writing files
+ Value passed in
- Label in a dictionary
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "return".
+ Sends back a result
- Ordered immutable collection
- Importable file
- Key-value collection
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Default argument".
- Order items
- Data stored under a key
+ Preset parameter value
- Unordered unique collection
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Local variable".
- Number of occurrences
+ Exists inside function
- Ordered immutable collection
- Add many items
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Global variable".
+ Exists everywhere
- Can be changed
- Opens a file
- Random numbers
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Scope".
- Add at position
- Importable file
+ Where a variable is visible
- Random numbers
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Module".
- Collection of modules
- Purpose for opening file
- Reading and writing files
+ Importable file
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "import".
- Function calling itself
- Opens a file
+ Loads a module
- Importable file
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "math module".
+ Mathematical functions
- Defines a function
- Variable in definition
- Data stored under a key
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "random module".
- Add at position
- Exists inside function
- Defines a function
+ Random numbers
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "File handling".
- Defines a function
+ Reading and writing files
- Position number
- Collection of modules
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "open".
- Collection of modules
- Where a variable is visible
+ Opens a file
- Position number
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Mode".
- Written by programmer
+ Purpose for opening file
- Opens a file
- Cannot be changed
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Recursion".
- Exists everywhere
+ Function calling itself
- Provided by Python
- Loads a module
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Docstring".
+ Function description
- Unordered unique collection
- Key-value collection
- Part of a sequence
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Built-in function".
- Ordered immutable collection
- Order items
- Collection of modules
+ Provided by Python
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "User-defined function".
- Delete a value
- Preset parameter value
+ Written by programmer
- Part of a sequence
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Library".
- Add many items
- Ordered immutable collection
+ Collection of modules
- Can be changed
! From the CBSE Class 9 syllabus.
? In Python, what is the value of 9 // 4 ?
- 4
+ 2
- 3
- 1
! Worked out step by step.
? In Python, what is the value of 9 % 4 ?
- 0.5
- 6
+ 1
- 0.9
! Worked out step by step.
? In Python, what is the value of 13 // 9 ?
- 0.25
+ 1
- 1.1
- 0.9
! Worked out step by step.
? In Python, what is the value of 13 % 9 ?
- 9
- 8
- 6
+ 4
! Worked out step by step.
? In Python, what is the value of 20 // 3 ?
+ 6
- 4
- 1.5
- 6.6
! Worked out step by step.
? In Python, what is the value of 20 % 3 ?
- 20
- 0.5
- 3
+ 2
! Worked out step by step.
? In Python, what is the value of 2 // 9 ?
+ 0
- 1
- 2
- 5
! Worked out step by step.
? In Python, what is the value of 2 % 9 ?
- 7
+ 2
- 4
- 0.5
! Worked out step by step.
? In Python, what is the value of 10 // 5 ?
+ 2
- 4
- 7
- 1.8
! Worked out step by step.
? In Python, what is the value of 10 % 5 ?
- 1
- 2
- 5
+ 0
! Worked out step by step.
? In Python, what is the value of 8 // 9 ?
+ 0
- 5
- 2
- 1
! Worked out step by step.
? In Python, what is the value of 8 % 9 ?
- 5.333
- 12
- 0.8
+ 8
! Worked out step by step.
? In Python, what is the value of 19 // 9 ?
- 7
+ 2
- 4
- 20
! Worked out step by step.
? In Python, what is the value of 19 % 9 ?
- 10
- 0.25
+ 1
- 2
! Worked out step by step.
? In Python, what is the value of 14 // 4 ?
- 8
- 3.3
- 2.7
+ 3
! Worked out step by step.
? In Python, what is the value of 14 % 4 ?
+ 2
- 1.8
- 3
- 2.2
! Worked out step by step.
? In Python, what is the value of 18 // 8 ?
- 2.2
+ 2
- 1.333
- 3
! Worked out step by step.
? In Python, what is the value of 18 % 8 ?
- 4
- 0.2
+ 2
- 8
! Worked out step by step.
? In Python, what is the value of 2 // 3 ?
- 1
- 5
+ 0
- 2
! Worked out step by step.
? In Python, what is the value of 2 % 3 ?
- 20
- 1.333
- 1.8
+ 2
! Worked out step by step.
? In Python, what is the value of 7 // 2 ?
+ 3
- 6
- 12
- 0.75
! Worked out step by step.
? In Python, what is the value of 7 % 2 ?
+ 1
- 3
- 1.5
- 0.5
! Worked out step by step.
? In Python, what is the value of 11 // 2 ?
- 50
- 4
+ 5
- 6
! Worked out step by step.
? In Python, what is the value of 11 % 2 ?
+ 1
- 4
- 1.5
- 0.1
! Worked out step by step.
? In Python, what is the value of 10 // 9 ?
+ 1
- 0.25
- 0.9
- 2
! Worked out step by step.
? In Python, what is the value of 10 % 9 ?
- 1.5
- 6
+ 1
- 0.667
! Worked out step by step.
? In Python, what is the value of 5 ** 4 ?
- 630
- 626
- 416.667
+ 625
! Worked out step by step.
? In Python, what is the value of 5 ** 3 ?
+ 125
- 137.5
- 112.5
- 126
! Worked out step by step.
? In Python, what is the value of 5 ** 2 ?
- 23
- 26
+ 25
- 250
! Worked out step by step.
? In Python, what is the value of 4 ** 2 ?
- 8
- 4
- 14.4
+ 16
! Worked out step by step.
? In Python, what is the value of 2 ** 2 ?
- 3
+ 4
- 1
- 9
! Worked out step by step.
? In Python, what is the value of 4 ** 4 ?
- 230.4
- 512
+ 256
- 170.667
! Worked out step by step.
? In Python, what is the value of 4 ** 3 ?
- 6.4
+ 64
- 32
- 70.4
! Worked out step by step.
? How many times does the loop "for i in range(5):" run?
- 20
- 10
+ 5
- 4.5
! Worked out step by step.
? How many values does range(4, 11) produce?
- 10.5
- 1.75
+ 7
- 70
! Worked out step by step.
? How many values does range(1, 12) produce?
- 5.5
+ 11
- 1.1
- 22
! Worked out step by step.
? How many times does the loop "for i in range(7):" run?
- 28
- 8
+ 7
- 6
! Worked out step by step.
? How many values does range(2, 13) produce?
- 44
- 13
+ 11
- 12.1
! Worked out step by step.
? How many values does range(1, 11) produce?
- 6.667
+ 10
- 9
- 11
! Worked out step by step.
? How many times does the loop "for i in range(8):" run?
- 10
- 7
+ 8
- 80
! Worked out step by step.
? How many values does range(3, 12) produce?
- 13.5
- 0.9
- 14
+ 9
! Worked out step by step.
? How many times does the loop "for i in range(3):" run?
+ 3
- 4
- 0.75
- 5
! Worked out step by step.
? How many values does range(1, 15) produce?
+ 14
- 9.333
- 21
- 56
! Worked out step by step.
? How many times does the loop "for i in range(9):" run?
- 13.5
+ 9
- 2.25
- 18
! Worked out step by step.
? How many values does range(4, 9) produce?
- 20
- 2.5
+ 5
- 6
! Worked out step by step.
? How many values does range(1, 14) produce?
- 130
- 26
+ 13
- 18
! Worked out step by step.
? How many times does the loop "for i in range(4):" run?
- 2.667
- 0.4
+ 4
- 3.6
! Worked out step by step.
? How many times does the loop "for i in range(6):" run?
- 4
- 3
- 5
+ 6
! Worked out step by step.
? If L = [1, 1, 7, 6, 9], what is L[2]?
- 14
- 0.7
+ 7
- 8
! Worked out step by step.
? If L = [1, 1, 7, 6, 9], what is sum(L)?
+ 24
- 6
- 2.4
- 29
! Worked out step by step.
? If L = [9, 4, 1, 5, 1], what is L[0]?
- 2.25
- 4.5
- 13.5
+ 9
! Worked out step by step.
? If L = [9, 4, 1, 5, 1], what is sum(L)?
+ 20
- 80
- 13.333
- 21
! Worked out step by step.
? If L = [2, 9, 1, 4, 7], what is L[2]?
- 0.9
- 3
+ 1
- 4
! Worked out step by step.
? If L = [2, 9, 1, 4, 7], what is sum(L)?
- 22
+ 23
- 92
- 2.3
! Worked out step by step.
? If L = [5, 3, 1, 6, 6], what is L[2]?
+ 1
- 1.1
- 0.5
- 10
! Worked out step by step.
? If L = [5, 3, 1, 6, 6], what is sum(L)?
- 2.1
- 14
+ 21
- 23
! Worked out step by step.
? If L = [3, 7, 7, 8, 9], what is L[3]?
- 13
+ 8
- 0.8
- 6
! Worked out step by step.
? If L = [3, 7, 7, 8, 9], what is sum(L)?
- 22.667
- 136
- 33
+ 34
! Worked out step by step.
? If L = [9, 2, 9, 5, 7], what is L[1]?
+ 2
- 3
- 8
- 7
! Worked out step by step.
? If L = [9, 2, 9, 5, 7], what is sum(L)?
+ 32
- 3.2
- 48
- 33
! Worked out step by step.
? If L = [5, 7, 5, 9, 5], what is L[4]?
- 6
- 2.5
+ 5
- 3
! Worked out step by step.
? If L = [5, 7, 5, 9, 5], what is sum(L)?
- 27.9
- 32
- 3.1
+ 31
! Worked out step by step.
? If L = [6, 1, 7, 6, 1], what is L[3]?
- 24
- 4
- 1.5
+ 6
! Worked out step by step.
? If L = [6, 1, 7, 6, 1], what is sum(L)?
- 19
+ 21
- 22
- 210
! Worked out step by step.
@visual
flow | Function call | Define with def; Pass arguments; Run body; return value
compare | Collections | List: ordered mutable; Tuple: ordered immutable; Dict: key-value
@problems
P: Which keyword defines a function?
A: def.
R: 1 | Key idea
R: 1 | Example
