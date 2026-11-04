# Functions
minutes: 40
yt: class 11 computer science python functions arguments scope recursion
@study
A function is a named block of reusable code. Definition: def name(parameters): body; return. Call by name with arguments. Types: built-in, module, user-defined. Parameters (formal) and arguments (actual). Positional, keyword, default and variable arguments. Returning values and multiple values (tuple). Functions without return give None. Scope: local, global; the global keyword; LEGB rule. Mutable arguments are modified in place. Recursion: a function calling itself with a base case (factorial, Fibonacci). Docstrings. Modules and importing. Flow of execution. Advantages: reusability, modularity, readability, easy debugging.
## Deep dive: Defining and calling
def add(a, b): return a + b. Call add(3, 4) gives 7. Default arguments must come after non-default ones: def greet(name, msg="Hello"). Keyword arguments: greet(msg="Hi", name="Ram"). Returning multiple values: return a, b. A function without return returns None. Functions may call other functions. Docstring in triple quotes describes the function.
## Deep dive: Scope and mutability
A variable defined inside a function is local; one defined outside is global. A local variable hides a global of the same name; to modify global use the global keyword. Lists passed to functions can be changed in place; integers cannot. Order of search: Local, Enclosing, Global, Built-in.
## Deep dive: Recursion and modules
Recursive factorial: def fact(n): if n == 0: return 1; return n * fact(n-1). Fibonacci recursion. Each call adds a frame to the stack; missing base case causes RecursionError. Modules: math, random, statistics; user modules. from math import sqrt. Built-in functions: abs, round, max, min, sum, sorted, len, type, int, str.
## Hindi saransh
Phalan: def, return, argument, sthaniya aur vaishvik paridhi, punaravriti. Default tark ant mein.
> A recursive function must have a base case to stop the recursion.
@formulas
## Argument types
Positional | By order | f(3, 4)
Keyword | By name | f(b=4, a=3)
Default | Preset value | f(a, b=2)
## Scope
Local | Inside function | Temporary
Global | Outside | Whole file
global | Modify global | Keyword

@qa
Q: Which a named reusable block of code?
A: Function a named reusable block of code.
Q: What do you know about Function?
A: Function a named reusable block of code.
Q: Which the keyword defining a function?
A: def the keyword defining a function.
Q: What do you know about def?
A: Def the keyword defining a function.
Q: Which the statement sending back a value?
A: return the statement sending back a value.
Q: What do you know about return?
A: Return the statement sending back a value.
Q: Which a variable in the function definition?
A: Parameter a variable in the function definition.
Q: What do you know about Parameter?
A: Parameter a variable in the function definition.
Q: Which a value passed in a function call?
A: Argument a value passed in a function call.
Q: What do you know about Argument?
A: Argument a value passed in a function call.
Q: Which an argument matched by position?
A: Positional argument an argument matched by position.
Q: What do you know about Positional argument?
A: Positional argument an argument matched by position.
Q: Which an argument matched by name?
A: Keyword argument an argument matched by name.
Q: What do you know about Keyword argument?
A: Keyword argument an argument matched by name.
Q: Which a parameter with a preset value?
A: Default argument a parameter with a preset value.
Q: What do you know about Default argument?
A: Default argument a parameter with a preset value.
Q: Which an argument taking many values?
A: Variable-length argument an argument taking many values.
Q: What do you know about Variable-length argument?
A: Variable-length argument an argument taking many values.
Q: Which the statement invoking a function?
A: Function call the statement invoking a function.
Q: What do you know about Function call?
A: Function call the statement invoking a function.
Q: Which the first line of a function?
A: Function header the first line of a function.
Q: What do you know about Function header?
A: Function header the first line of a function.
Q: Which the indented block of statements?
A: Function body the indented block of statements.
Q: What do you know about Function body?
A: Function body the indented block of statements.
Q: Which the value a function gives back?
A: Return value the value a function gives back.
Q: What do you know about Return value?
A: Return value the value a function gives back.
Q: Which the value returned by a function without return?
A: None the value returned by a function without return.
Q: What do you know about None?
A: None the value returned by a function without return.
Q: Which a function available in Python?
A: Built-in function a function available in Python.
Q: What do you know about Built-in function?
A: Built-in function a function available in Python.
Q: Which a function written by the programmer?
A: User-defined function a function written by the programmer.
Q: What do you know about User-defined function?
A: User-defined function a function written by the programmer.
Q: Which a file of functions and variables?
A: Module a file of functions and variables.
Q: What do you know about Module?
A: Module a file of functions and variables.
Q: Which a collection of modules?
A: Library a collection of modules.
Q: What do you know about Library?
A: Library a collection of modules.
Q: Which the region where a name is valid?
A: Scope the region where a name is valid.
Q: What do you know about Scope?
A: Scope the region where a name is valid.
Q: Which a variable defined inside a function?
A: Local variable a variable defined inside a function.
Q: What do you know about Local variable?
A: Local variable a variable defined inside a function.
Q: Which a variable defined outside functions?
A: Global variable a variable defined outside functions.
Q: What do you know about Global variable?
A: Global variable a variable defined outside functions.
Q: Which the keyword to modify a global inside a function?
A: global keyword the keyword to modify a global inside a function.
Q: What do you know about global keyword?
A: Global keyword the keyword to modify a global inside a function.
Q: Which local, enclosing, global, built-in lookup order?
A: LEGB rule local, enclosing, global, built-in lookup order.
Q: What do you know about LEGB rule?
A: LEGB rule local, enclosing, global, built-in lookup order.
Q: Which a function calling itself?
A: Recursion a function calling itself.
Q: What do you know about Recursion?
A: Recursion a function calling itself.
Q: Which the stopping condition of recursion?
A: Base case the stopping condition of recursion.
Q: What do you know about Base case?
A: Base case the stopping condition of recursion.
Q: Which the step calling the function again?
A: Recursive case the step calling the function again.
Q: What do you know about Recursive case?
A: Recursive case the step calling the function again.
Q: Which the stack of active function calls?
A: Call stack the stack of active function calls.
Q: What do you know about Call stack?
A: Call stack the stack of active function calls.
Q: Which the error for too deep recursion?
A: RecursionError the error for too deep recursion.
Q: What do you know about RecursionError?
A: RecursionError the error for too deep recursion.
Q: Which a string documenting a function?
A: Docstring a string documenting a function.
Q: What do you know about Docstring?
A: Docstring a string documenting a function.
Q: Which dividing a program into functions?
A: Modularity dividing a program into functions.
Q: What do you know about Modularity?
A: Modularity dividing a program into functions.
Q: Which using code many times?
A: Reusability using code many times.
Q: What do you know about Reusability?
A: Reusability using code many times.
Q: Which the order in which statements run?
A: Flow of execution the order in which statements run.
Q: What do you know about Flow of execution?
A: Flow of execution the order in which statements run.
Q: Which the way Python passes arguments?
A: Pass by object reference the way Python passes arguments.
Q: What do you know about Pass by object reference?
A: Pass by object reference the way Python passes arguments.
Q: Which a list or dict that can be changed in the function?
A: Mutable argument a list or dict that can be changed in the function.
Q: What do you know about Mutable argument?
A: Mutable argument a list or dict that can be changed in the function.
Q: Which an int or string that cannot be changed?
A: Immutable argument an int or string that cannot be changed.
Q: What do you know about Immutable argument?
A: Immutable argument an int or string that cannot be changed.
Q: Which returning many values as a tuple?
A: Tuple return returning many values as a tuple.
Q: What do you know about Tuple return?
A: Tuple return returning many values as a tuple.
Q: Which assigning tuple items to separate variables?
A: Unpacking assigning tuple items to separate variables.
Q: What do you know about Unpacking?
A: Unpacking assigning tuple items to separate variables.
Q: Which a small anonymous function?
A: Lambda a small anonymous function.
Q: What do you know about Lambda?
A: Lambda a small anonymous function.
Q: Which the built-in returning the absolute value?
A: abs() the built-in returning the absolute value.
Q: What do you know about abs()?
A: Abs() the built-in returning the absolute value.
Q: Which the built-in rounding a number?
A: round() the built-in rounding a number.
Q: What do you know about round()?
A: Round() the built-in rounding a number.
Q: Which the built-in returning the largest value?
A: max() the built-in returning the largest value.
Q: What do you know about max()?
A: Max() the built-in returning the largest value.
Q: Which the built-in returning the smallest value?
A: min() the built-in returning the smallest value.
Q: What do you know about min()?
A: Min() the built-in returning the smallest value.
Q: Which the built-in adding items?
A: sum() the built-in adding items.
Q: What do you know about sum()?
A: Sum() the built-in adding items.
Q: Which the built-in returning a sorted list?
A: sorted() the built-in returning a sorted list.
Q: What do you know about sorted()?
A: Sorted() the built-in returning a sorted list.
Q: Which the function returning the square root?
A: math.sqrt the function returning the square root.
Q: What do you know about math.sqrt?
A: Math.sqrt the function returning the square root.
Q: Which the function returning a random integer?
A: random.randint the function returning a random integer.
Q: What do you know about random.randint?
A: Random.randint the function returning a random integer.
Q: Which the statement importing a name from a module?
A: from import the statement importing a name from a module.
Q: What do you know about from import?
A: From import the statement importing a name from a module.
Q: Which the mapping of names to objects?
A: Namespace the mapping of names to objects.
Q: What do you know about Namespace?
A: Namespace the mapping of names to objects.
Q: Which a small function supporting another?
A: Helper function a small function supporting another.
Q: What do you know about Helper function?
A: Helper function a small function supporting another.
Q: Which a change made outside the function?
A: Side effect a change made outside the function.
Q: What do you know about Side effect?
A: Side effect a change made outside the function.
Q: Which a function without side effects?
A: Pure function a function without side effects.
Q: What do you know about Pure function?
A: Pure function a function without side effects.
Q: What is a function?
A: A named block of code performing a task.
Q: Why use functions?
A: Reusability, modularity and easier debugging.
Q: What is the difference between a parameter and an argument?
A: Parameter is in the definition; argument is the value passed.
Q: What does a function without return give?
A: None.
Q: Where must default parameters be placed?
A: After non-default parameters.
Q: What are keyword arguments?
A: Arguments passed with the parameter name.
Q: What is a local variable?
A: A variable created inside a function and valid only there.
Q: What does the global keyword do?
A: Lets a function modify a global variable.
Q: What is the LEGB rule?
A: The order of name lookup.
Q: Can a function return many values?
A: Yes, as a tuple.
Q: What is recursion?
A: A function calling itself.
Q: Why is a base case needed?
A: To stop the recursion.
Q: What happens without a base case?
A: A RecursionError occurs.
Q: What is a docstring?
A: A string describing the function.
Q: How are lists passed to a function?
A: By reference, so changes are visible outside.
Q: What is a module?
A: A file with functions that can be imported.
Q: What is the use of the import statement?
A: To use functions from a module.
@quiz
? Which a named reusable block of code?
- sorted()
+ Function
- from import
- Recursive case
! Function a named reusable block of code.
? Which statement is true of Function?
- A variable defined outside functions
+ A named reusable block of code
- A file of functions and variables
- The step calling the function again
! Function a named reusable block of code.
? Which the keyword defining a function?
- Recursion
- from import
- Pure function
+ def
! Def the keyword defining a function.
? Which statement is true of def?
- The built-in returning the smallest value
- Dividing a program into functions
- The error for too deep recursion
+ The keyword defining a function
! Def the keyword defining a function.
? Which the statement sending back a value?
- Side effect
- Base case
+ return
- Default argument
! Return the statement sending back a value.
? Which statement is true of return?
+ The statement sending back a value
- The built-in returning a sorted list
- Local, enclosing, global, built-in lookup order
- A variable defined outside functions
! Return the statement sending back a value.
? Which a variable in the function definition?
+ Parameter
- Mutable argument
- Function header
- Flow of execution
! Parameter a variable in the function definition.
? Which statement is true of Parameter?
- The first line of a function
- An int or string that cannot be changed
+ A variable in the function definition
- A function available in Python
! Parameter a variable in the function definition.
? Which a value passed in a function call?
+ Argument
- Pure function
- Immutable argument
- Scope
! Argument a value passed in a function call.
? Which statement is true of Argument?
+ A value passed in a function call
- Returning many values as a tuple
- A collection of modules
- A function written by the programmer
! Argument a value passed in a function call.
? Which an argument matched by position?
+ Positional argument
- Flow of execution
- from import
- global keyword
! Positional argument an argument matched by position.
? Which statement is true of Positional argument?
- Using code many times
+ An argument matched by position
- A variable in the function definition
- The keyword defining a function
! Positional argument an argument matched by position.
? Which an argument matched by name?
+ Keyword argument
- Variable-length argument
- Base case
- def
! Keyword argument an argument matched by name.
? Which statement is true of Keyword argument?
- The built-in returning the absolute value
+ An argument matched by name
- The way Python passes arguments
- Using code many times
! Keyword argument an argument matched by name.
? Which a parameter with a preset value?
- return
- Scope
+ Default argument
- global keyword
! Default argument a parameter with a preset value.
? Which statement is true of Default argument?
- Dividing a program into functions
- A function calling itself
+ A parameter with a preset value
- The value a function gives back
! Default argument a parameter with a preset value.
? Which an argument taking many values?
- Tuple return
- sum()
+ Variable-length argument
- Side effect
! Variable-length argument an argument taking many values.
? Which statement is true of Variable-length argument?
+ An argument taking many values
- The built-in rounding a number
- The built-in returning the largest value
- The built-in returning the absolute value
! Variable-length argument an argument taking many values.
? Which the statement invoking a function?
- Flow of execution
- Immutable argument
- Parameter
+ Function call
! Function call the statement invoking a function.
? Which statement is true of Function call?
- The built-in returning a sorted list
- The built-in rounding a number
- The indented block of statements
+ The statement invoking a function
! Function call the statement invoking a function.
? Which the first line of a function?
- sum()
- Variable-length argument
- Return value
+ Function header
! Function header the first line of a function.
? Which statement is true of Function header?
- The order in which statements run
- The error for too deep recursion
+ The first line of a function
- A named reusable block of code
! Function header the first line of a function.
? Which the indented block of statements?
- math.sqrt
+ Function body
- Argument
- Reusability
! Function body the indented block of statements.
? Which statement is true of Function body?
- The value a function gives back
+ The indented block of statements
- The error for too deep recursion
- The mapping of names to objects
! Function body the indented block of statements.
? Which the value a function gives back?
- Tuple return
+ Return value
- Modularity
- min()
! Return value the value a function gives back.
? Which statement is true of Return value?
- A variable in the function definition
- A collection of modules
- A function calling itself
+ The value a function gives back
! Return value the value a function gives back.
? Which the value returned by a function without return?
- Recursive case
- Tuple return
+ None
- Recursion
! None the value returned by a function without return.
? Which statement is true of None?
- A string documenting a function
+ The value returned by a function without return
- The function returning a random integer
- The value a function gives back
! None the value returned by a function without return.
? Which a function available in Python?
- Recursive case
+ Built-in function
- sorted()
- Function
! Built-in function a function available in Python.
? Which statement is true of Built-in function?
- The statement invoking a function
- A variable defined inside a function
+ A function available in Python
- A named reusable block of code
! Built-in function a function available in Python.
? Which a function written by the programmer?
- return
- Function header
- Built-in function
+ User-defined function
! User-defined function a function written by the programmer.
? Which statement is true of User-defined function?
- A collection of modules
- A small function supporting another
- The built-in returning a sorted list
+ A function written by the programmer
! User-defined function a function written by the programmer.
? Which a file of functions and variables?
- Built-in function
- Keyword argument
- return
+ Module
! Module a file of functions and variables.
? Which statement is true of Module?
- Assigning tuple items to separate variables
+ A file of functions and variables
- The built-in returning the smallest value
- A small function supporting another
! Module a file of functions and variables.
? Which a collection of modules?
+ Library
- Keyword argument
- Function body
- abs()
! Library a collection of modules.
? Which statement is true of Library?
- A small anonymous function
- The error for too deep recursion
+ A collection of modules
- The value returned by a function without return
! Library a collection of modules.
? Which the region where a name is valid?
- RecursionError
+ Scope
- Recursive case
- LEGB rule
! Scope the region where a name is valid.
? Which statement is true of Scope?
+ The region where a name is valid
- A variable in the function definition
- A string documenting a function
- The statement invoking a function
! Scope the region where a name is valid.
? Which a variable defined inside a function?
- Default argument
- RecursionError
- User-defined function
+ Local variable
! Local variable a variable defined inside a function.
? Which statement is true of Local variable?
- The value returned by a function without return
- The statement invoking a function
- A function available in Python
+ A variable defined inside a function
! Local variable a variable defined inside a function.
? Which a variable defined outside functions?
- Function header
- random.randint
+ Global variable
- return
! Global variable a variable defined outside functions.
? Which statement is true of Global variable?
- A function without side effects
- The built-in returning the largest value
- An argument taking many values
+ A variable defined outside functions
! Global variable a variable defined outside functions.
? Which the keyword to modify a global inside a function?
+ global keyword
- Pass by object reference
- Module
- math.sqrt
! Global keyword the keyword to modify a global inside a function.
? Which statement is true of global keyword?
+ The keyword to modify a global inside a function
- A list or dict that can be changed in the function
- The built-in returning the largest value
- The region where a name is valid
! Global keyword the keyword to modify a global inside a function.
? Which local, enclosing, global, built-in lookup order?
- max()
- Docstring
+ LEGB rule
- Namespace
! LEGB rule local, enclosing, global, built-in lookup order.
? Which statement is true of LEGB rule?
- A function available in Python
- The function returning the square root
- The built-in rounding a number
+ Local, enclosing, global, built-in lookup order
! LEGB rule local, enclosing, global, built-in lookup order.
? Which a function calling itself?
+ Recursion
- Modularity
- Function call
- RecursionError
! Recursion a function calling itself.
? Which statement is true of Recursion?
- A small function supporting another
- The value a function gives back
+ A function calling itself
- The first line of a function
! Recursion a function calling itself.
? Which the stopping condition of recursion?
- def
- LEGB rule
+ Base case
- Default argument
! Base case the stopping condition of recursion.
? Which statement is true of Base case?
- The region where a name is valid
- A function without side effects
+ The stopping condition of recursion
- The built-in returning the largest value
! Base case the stopping condition of recursion.
? Which the step calling the function again?
- abs()
+ Recursive case
- RecursionError
- round()
! Recursive case the step calling the function again.
? Which statement is true of Recursive case?
- The error for too deep recursion
+ The step calling the function again
- The keyword to modify a global inside a function
- A string documenting a function
! Recursive case the step calling the function again.
? Which the stack of active function calls?
- min()
+ Call stack
- Immutable argument
- Recursive case
! Call stack the stack of active function calls.
? Which statement is true of Call stack?
- A function calling itself
- A value passed in a function call
- The way Python passes arguments
+ The stack of active function calls
! Call stack the stack of active function calls.
? Which the error for too deep recursion?
- sorted()
- Library
- Namespace
+ RecursionError
! RecursionError the error for too deep recursion.
? Which statement is true of RecursionError?
- The mapping of names to objects
- The region where a name is valid
- A small function supporting another
+ The error for too deep recursion
! RecursionError the error for too deep recursion.
? Which a string documenting a function?
- math.sqrt
- Keyword argument
- Immutable argument
+ Docstring
! Docstring a string documenting a function.
? Which statement is true of Docstring?
- A parameter with a preset value
+ A string documenting a function
- An argument taking many values
- The built-in returning the absolute value
! Docstring a string documenting a function.
? Which dividing a program into functions?
- abs()
- Function call
+ Modularity
- RecursionError
! Modularity dividing a program into functions.
? Which statement is true of Modularity?
+ Dividing a program into functions
- The region where a name is valid
- The error for too deep recursion
- A change made outside the function
! Modularity dividing a program into functions.
? Which using code many times?
- Namespace
- Variable-length argument
- RecursionError
+ Reusability
! Reusability using code many times.
? Which statement is true of Reusability?
+ Using code many times
- An int or string that cannot be changed
- The built-in returning a sorted list
- The step calling the function again
! Reusability using code many times.
? Which the order in which statements run?
+ Flow of execution
- Function body
- Module
- Pass by object reference
! Flow of execution the order in which statements run.
? Which statement is true of Flow of execution?
- Dividing a program into functions
- The function returning the square root
- The built-in rounding a number
+ The order in which statements run
! Flow of execution the order in which statements run.
? Which the way Python passes arguments?
- Flow of execution
- min()
+ Pass by object reference
- Variable-length argument
! Pass by object reference the way Python passes arguments.
? Which statement is true of Pass by object reference?
- The order in which statements run
+ The way Python passes arguments
- The built-in returning the smallest value
- A function without side effects
! Pass by object reference the way Python passes arguments.
? Which a list or dict that can be changed in the function?
- Base case
- Reusability
+ Mutable argument
- Argument
! Mutable argument a list or dict that can be changed in the function.
? Which statement is true of Mutable argument?
+ A list or dict that can be changed in the function
- The keyword to modify a global inside a function
- The value a function gives back
- The region where a name is valid
! Mutable argument a list or dict that can be changed in the function.
? Which an int or string that cannot be changed?
- Side effect
- RecursionError
- Tuple return
+ Immutable argument
! Immutable argument an int or string that cannot be changed.
? Which statement is true of Immutable argument?
- A function available in Python
- Local, enclosing, global, built-in lookup order
- The mapping of names to objects
+ An int or string that cannot be changed
! Immutable argument an int or string that cannot be changed.
? Which returning many values as a tuple?
- Namespace
- Docstring
- math.sqrt
+ Tuple return
! Tuple return returning many values as a tuple.
? Which statement is true of Tuple return?
- The step calling the function again
- A function calling itself
- A file of functions and variables
+ Returning many values as a tuple
! Tuple return returning many values as a tuple.
? Which assigning tuple items to separate variables?
- sum()
- Argument
- Namespace
+ Unpacking
! Unpacking assigning tuple items to separate variables.
? Which statement is true of Unpacking?
- A variable defined outside functions
- The function returning a random integer
- The keyword defining a function
+ Assigning tuple items to separate variables
! Unpacking assigning tuple items to separate variables.
? Which a small anonymous function?
- Flow of execution
+ Lambda
- sorted()
- Mutable argument
! Lambda a small anonymous function.
? Which statement is true of Lambda?
+ A small anonymous function
- A function calling itself
- The statement invoking a function
- A string documenting a function
! Lambda a small anonymous function.
? Which the built-in returning the absolute value?
- round()
- Recursive case
+ abs()
- sum()
! Abs() the built-in returning the absolute value.
? Which statement is true of abs()?
- An argument taking many values
- A variable defined inside a function
+ The built-in returning the absolute value
- An argument matched by name
! Abs() the built-in returning the absolute value.
? Which the built-in rounding a number?
+ round()
- Call stack
- RecursionError
- Function body
! Round() the built-in rounding a number.
? Which statement is true of round()?
- A variable defined outside functions
- The first line of a function
+ The built-in rounding a number
- A file of functions and variables
! Round() the built-in rounding a number.
? Which the built-in returning the largest value?
+ max()
- Call stack
- Parameter
- Return value
! Max() the built-in returning the largest value.
? Which statement is true of max()?
- The stopping condition of recursion
+ The built-in returning the largest value
- The value a function gives back
- Local, enclosing, global, built-in lookup order
! Max() the built-in returning the largest value.
? Which the built-in returning the smallest value?
- None
+ min()
- Side effect
- Return value
! Min() the built-in returning the smallest value.
? Which statement is true of min()?
- A value passed in a function call
- A named reusable block of code
+ The built-in returning the smallest value
- The step calling the function again
! Min() the built-in returning the smallest value.
? Which the built-in adding items?
- min()
- Pass by object reference
+ sum()
- math.sqrt
! Sum() the built-in adding items.
? Which statement is true of sum()?
- Dividing a program into functions
- The stack of active function calls
- A list or dict that can be changed in the function
+ The built-in adding items
! Sum() the built-in adding items.
? Which the built-in returning a sorted list?
- random.randint
+ sorted()
- Argument
- Parameter
! Sorted() the built-in returning a sorted list.
? Which statement is true of sorted()?
- The keyword defining a function
+ The built-in returning a sorted list
- The region where a name is valid
- The mapping of names to objects
! Sorted() the built-in returning a sorted list.
? Which the function returning the square root?
+ math.sqrt
- Scope
- Function call
- RecursionError
! Math.sqrt the function returning the square root.
? Which statement is true of math.sqrt?
+ The function returning the square root
- Using code many times
- The keyword to modify a global inside a function
- Dividing a program into functions
! Math.sqrt the function returning the square root.
? Which the function returning a random integer?
- Modularity
+ random.randint
- Argument
- Parameter
! Random.randint the function returning a random integer.
? Which statement is true of random.randint?
- A change made outside the function
- The stack of active function calls
+ The function returning a random integer
- The order in which statements run
! Random.randint the function returning a random integer.
? Which the statement importing a name from a module?
- Side effect
- Helper function
- random.randint
+ from import
! From import the statement importing a name from a module.
? Which statement is true of from import?
- The order in which statements run
+ The statement importing a name from a module
- The region where a name is valid
- An argument matched by name
! From import the statement importing a name from a module.
? Which the mapping of names to objects?
- Side effect
+ Namespace
- Library
- Base case
! Namespace the mapping of names to objects.
? Which statement is true of Namespace?
- The way Python passes arguments
+ The mapping of names to objects
- The keyword to modify a global inside a function
- Assigning tuple items to separate variables
! Namespace the mapping of names to objects.
? Which a small function supporting another?
- sum()
+ Helper function
- max()
- Library
! Helper function a small function supporting another.
? Which statement is true of Helper function?
+ A small function supporting another
- A variable in the function definition
- The region where a name is valid
- The keyword defining a function
! Helper function a small function supporting another.
? Which a change made outside the function?
- max()
- Variable-length argument
- Keyword argument
+ Side effect
! Side effect a change made outside the function.
? Which statement is true of Side effect?
- The built-in rounding a number
+ A change made outside the function
- A parameter with a preset value
- The value a function gives back
! Side effect a change made outside the function.
? Which a function without side effects?
- Variable-length argument
- Modularity
- Function body
+ Pure function
! Pure function a function without side effects.
? Which statement is true of Pure function?
- A function available in Python
- The statement importing a name from a module
- A function calling itself
+ A function without side effects
! Pure function a function without side effects.
? Keyword to define a function
+ def
- func
- function
- define
! Python.
? Default return value
- 0
+ None
- False
- Empty
! No return.
? Local variable lives in
- File
- Module
- Program
+ Function
! Scope.
? Recursion needs
+ Base case
- Loop
- Class
- Import
! Stop.
? Parameters are in
+ Definition
- Call
- Output
- Module
! Header.
? Return can send
- One only
- No value
+ Many values
- Nothing
! Tuple.
@visual
flow | Function call | Call; Pass arguments; Execute body; Return
compare | Parameter and argument | Parameter=In the definition; Argument=In the call
blocks | Function types | Built-in; Module; User-defined
table | Scope | Type=Local/Global; Where=Inside/Outside
mind | Functions | Definition; Arguments; Scope; Recursion
steps | Recursion | Base case; Recursive call; Return; Unwind
cycle | Recursive factorial | fact(n); fact(n-1); Base; Multiply
@problems
## Moderate
P: Write a function to return the square of a number.
A: def sq(n): return n * n; print(sq(5)) gives 25.
R: 3 | Definition
R: 3 | Call
## High
P: Write a function with default argument for simple interest.
A: def si(p, r, t=1): return p * r * t / 100.
R: 2 | Parameters
R: 2 | Default
R: 2 | Formula
R: 2 | Return
## Advanced
P: Write a recursive factorial and explain the base case and scope.
A: def fact(n): if n == 0 return 1 else return n * fact(n-1); local n in each call.
R: 2 | Base case
R: 2 | Recursive step
R: 2 | Scope
R: 2 | Output
