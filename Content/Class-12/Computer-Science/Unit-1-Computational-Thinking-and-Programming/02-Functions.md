# Functions
minutes: 45
yt: class 12 computer science python functions parameters arguments scope recursion lambda
@study
A function is a named block of reusable code defined with def and called by name. Benefits: modularity, reuse, readability and easier debugging. Syntax: def name(parameters): body, with return to send back a value; a function without return gives None. Parameters appear in the definition; arguments are the values passed in a call. Types of arguments: positional (matched by order), keyword (matched by name), default (parameter with a default value, which must come after non-default parameters) and variable length (*args collects extra positional arguments into a tuple, **kwargs collects keywords into a dictionary). A function can return multiple values as a tuple. Scope and the LEGB rule: Local, Enclosing, Global, Built-in. A variable assigned inside a function is local; to modify a global variable inside a function the global keyword is needed. Mutable arguments such as lists are changed in place, while immutable arguments like integers and strings are not changed outside. Python passes object references, often called pass by object reference. Built-in functions: len, type, range, sum, min, max, abs, round, input, print, sorted. Module functions: math.sqrt, math.ceil, math.floor, math.pow, math.fabs, random.randint, random.randrange, statistics.mean, median, mode. User-defined modules are imported with import or from module import name. Recursion is a function calling itself with a base case and a recursive case; examples are factorial and Fibonacci; recursion uses stack frames and can raise RecursionError if the base case is missing. Lambda is an anonymous single-expression function: lambda x: x*x. Docstrings document a function. Functions are first-class objects: they can be passed as arguments or stored in variables.
## Deep dive: Arguments
Positional, keyword, default and variable length arguments give flexible calls. Default parameters must follow non-default ones.
## Deep dive: Scope
LEGB rule decides name lookup. Assignment in a function creates a local name unless declared global.
## Deep dive: Recursion
A recursive function needs a base case and moves toward it. Each call adds a frame to the call stack.
## Hindi saransh
Function: def se paribhashit, argument ke prakar, scope ka LEGB niyam, recursion aur lambda.
> Remember: a function with no return statement returns None.
@formulas
## Key facts
def | Defines a function
return | Sends back value
*args | Tuple of extras
**kwargs | Dictionary of keywords
LEGB | Local Enclosing Global Built-in

@qa
Q: Which is a named reusable block of code?
A: Function is a named reusable block of code.
Q: What do you know about Function?
A: Function is a named reusable block of code.
Q: Which defines a function?
A: Def keyword defines a function.
Q: What do you know about Def keyword?
A: Def keyword defines a function.
Q: Which sends a value back to the caller?
A: Return statement sends a value back to the caller.
Q: What do you know about Return statement?
A: Return statement sends a value back to the caller.
Q: Which returns None?
A: Function without return returns None.
Q: What do you know about Function without return?
A: Function without return returns None.
Q: Which is a name in the function definition?
A: Parameter is a name in the function definition.
Q: What do you know about Parameter?
A: Parameter is a name in the function definition.
Q: Which is a value passed in the call?
A: Argument is a value passed in the call.
Q: What do you know about Argument?
A: Argument is a value passed in the call.
Q: Which documents a function?
A: Docstring documents a function.
Q: What do you know about Docstring?
A: Docstring documents a function.
Q: Which is a benefit of functions?
A: Modularity is a benefit of functions.
Q: What do you know about Modularity?
A: Modularity is a benefit of functions.
Q: Which is matched by order?
A: Positional argument is matched by order.
Q: What do you know about Positional argument?
A: Positional argument is matched by order.
Q: Which is matched by name?
A: Keyword argument is matched by name.
Q: What do you know about Keyword argument?
A: Keyword argument is matched by name.
Q: Which has a preset value?
A: Default parameter has a preset value.
Q: What do you know about Default parameter?
A: Default parameter has a preset value.
Q: Which must follow non default parameters?
A: Default parameter must follow non default parameters.
Q: Which collects extra positional arguments into a tuple?
A: Star args collects extra positional arguments into a tuple.
Q: What do you know about Star args?
A: Star args collects extra positional arguments into a tuple.
Q: Which collects keyword arguments into a dictionary?
A: Double star kwargs collects keyword arguments into a dictionary.
Q: What do you know about Double star kwargs?
A: Double star kwargs collects keyword arguments into a dictionary.
Q: Which are returned as a tuple?
A: Multiple return values are returned as a tuple.
Q: What do you know about Multiple return values?
A: Multiple return values are returned as a tuple.
Q: Which can be changed inside the function?
A: Mutable argument can be changed inside the function.
Q: What do you know about Mutable argument?
A: Mutable argument can be changed inside the function.
Q: Which is not changed outside the function?
A: Immutable argument is not changed outside the function.
Q: What do you know about Immutable argument?
A: Immutable argument is not changed outside the function.
Q: Which exists only inside the function?
A: Local variable exists only inside the function.
Q: What do you know about Local variable?
A: Local variable exists only inside the function.
Q: Which is defined at module level?
A: Global variable is defined at module level.
Q: What do you know about Global variable?
A: Global variable is defined at module level.
Q: Which allows modification of a global name?
A: Global keyword allows modification of a global name.
Q: What do you know about Global keyword?
A: Global keyword allows modification of a global name.
Q: Which stands for local enclosing global built in?
A: LEGB stands for local enclosing global built in.
Q: What do you know about LEGB?
A: LEGB stands for local enclosing global built in.
Q: Which contains names like len and print?
A: Built in scope contains names like len and print.
Q: What do you know about Built in scope?
A: Built in scope contains names like len and print.
Q: Which ends when the function returns?
A: Lifetime of a local variable ends when the function returns.
Q: What do you know about Lifetime of a local variable?
A: Lifetime of a local variable ends when the function returns.
Q: Which returns the length?
A: Len function returns the length.
Q: What do you know about Len function?
A: Len function returns the length.
Q: Which returns absolute value?
A: Abs function returns absolute value.
Q: What do you know about Abs function?
A: Abs function returns absolute value.
Q: Which rounds a number?
A: Round function rounds a number.
Q: What do you know about Round function?
A: Round function rounds a number.
Q: Which returns a new sorted list?
A: Sorted function returns a new sorted list.
Q: What do you know about Sorted function?
A: Sorted function returns a new sorted list.
Q: Which is in the math module?
A: Sqrt is in the math module.
Q: What do you know about Sqrt?
A: Sqrt is in the math module.
Q: Which rounds up?
A: Ceil rounds up.
Q: What do you know about Ceil?
A: Ceil rounds up.
Q: Which rounds down?
A: Floor rounds down.
Q: What do you know about Floor?
A: Floor rounds down.
Q: Which excludes the stop value?
A: Randrange excludes the stop value.
Q: What do you know about Randrange?
A: Randrange excludes the stop value.
Q: Which is in the statistics module?
A: Mean is in the statistics module.
Q: What do you know about Mean?
A: Mean is in the statistics module.
Q: Which is the middle value?
A: Median is the middle value.
Q: What do you know about Median?
A: Median is the middle value.
Q: Which is the most frequent value?
A: Mode is the most frequent value.
Q: What do you know about Mode?
A: Mode is the most frequent value.
Q: Which brings a module into a program?
A: Import brings a module into a program.
Q: What do you know about Import?
A: Import brings a module into a program.
Q: Which brings a specific name?
A: From import brings a specific name.
Q: What do you know about From import?
A: From import brings a specific name.
Q: Which is a function calling itself?
A: Recursion is a function calling itself.
Q: What do you know about Recursion?
A: Recursion is a function calling itself.
Q: Which stops the recursion?
A: Base case stops the recursion.
Q: What do you know about Base case?
A: Base case stops the recursion.
Q: Which raises RecursionError?
A: Recursion without base case raises RecursionError.
Q: What do you know about Recursion without base case?
A: Recursion without base case raises RecursionError.
Q: Which stores frames of recursive calls?
A: Call stack stores frames of recursive calls.
Q: What do you know about Call stack?
A: Call stack stores frames of recursive calls.
Q: Which is a classic recursive example?
A: Factorial is a classic recursive example.
Q: What do you know about Factorial?
A: Factorial is a classic recursive example.
Q: What do you know about Fibonacci?
A: Fibonacci is a classic recursive example.
Q: Which is an anonymous function?
A: Lambda is an anonymous function.
Q: What do you know about Lambda?
A: Lambda is an anonymous function.
Q: Which is a single expression?
A: Lambda body is a single expression.
Q: What do you know about Lambda body?
A: Lambda body is a single expression.
Q: Which can be passed as an argument?
A: First class function can be passed as an argument.
Q: What do you know about First class function?
A: First class function can be passed as an argument.
Q: Which is a cost of very deep recursion?
A: Function call overhead is a cost of very deep recursion.
Q: What do you know about Function call overhead?
A: Function call overhead is a cost of very deep recursion.
Q: Which can be any object?
A: Return value can be any object.
Q: What do you know about Return value?
A: Return value can be any object.
Q: Which describes Python argument passing?
A: Pass by object reference describes Python argument passing.
Q: What do you know about Pass by object reference?
A: Pass by object reference describes Python argument passing.
Q: Which follows identifier rules?
A: Function name follows identifier rules.
Q: What do you know about Function name?
A: Function name follows identifier rules.
Q: Which matters for positional arguments?
A: Argument order matters for positional arguments.
Q: What do you know about Argument order?
A: Argument order matters for positional arguments.
Q: Which can be given in any order?
A: Keyword argument can be given in any order.
Q: Which is defined inside another function?
A: Nested function is defined inside another function.
Q: What do you know about Nested function?
A: Nested function is defined inside another function.
Q: Which belongs to an outer function?
A: Enclosing scope belongs to an outer function.
Q: What do you know about Enclosing scope?
A: Enclosing scope belongs to an outer function.
Q: Which happens when a local name hides a global one?
A: Variable shadowing happens when a local name hides a global one.
Q: What do you know about Variable shadowing?
A: Variable shadowing happens when a local name hides a global one.
Q: Which is a file of Python definitions?
A: Module is a file of Python definitions.
Q: What do you know about Module?
A: Module is a file of Python definitions.
Q: What is a function?
A: A named block of reusable code.
Q: What is the difference between parameter and argument?
A: A parameter is in the definition; an argument is the value in the call.
Q: What is a default parameter?
A: A parameter with a preset value used when no argument is given.
Q: What does *args do?
A: Collects extra positional arguments in a tuple.
Q: What is the LEGB rule?
A: Name lookup order: Local, Enclosing, Global, Built-in.
Q: What is recursion?
A: A function calling itself.
Q: What is a lambda?
A: An anonymous one expression function.
Q: What does a function without return give?
A: None.
@quiz
? Which is a named reusable block of code?
- Parameter
+ Function
- Def keyword
- Modularity
! Function is a named reusable block of code.
? Which statement is true of Function?
- Is a name in the function definition
+ Is a named reusable block of code
- Documents a function
- Is a value passed in the call
! Function is a named reusable block of code.
? Which defines a function?
- Function without return
- Function
+ Def keyword
- Docstring
! Def keyword defines a function.
? Which statement is true of Def keyword?
- Is a name in the function definition
- Is a benefit of functions
+ Defines a function
- Is a value passed in the call
! Def keyword defines a function.
? Which sends a value back to the caller?
+ Return statement
- Argument
- Function
- Function without return
! Return statement sends a value back to the caller.
? Which statement is true of Return statement?
+ Sends a value back to the caller
- Defines a function
- Is a name in the function definition
- Is a value passed in the call
! Return statement sends a value back to the caller.
? Which returns None?
- Def keyword
+ Function without return
- Argument
- Function
! Function without return returns None.
? Which statement is true of Function without return?
+ Returns None
- Defines a function
- Documents a function
- Is a named reusable block of code
! Function without return returns None.
? Which is a name in the function definition?
+ Parameter
- Argument
- Docstring
- Modularity
! Parameter is a name in the function definition.
? Which statement is true of Parameter?
- Documents a function
- Returns None
- Is a benefit of functions
+ Is a name in the function definition
! Parameter is a name in the function definition.
? Which is a value passed in the call?
- Function without return
- Docstring
+ Argument
- Modularity
! Argument is a value passed in the call.
? Which statement is true of Argument?
+ Is a value passed in the call
- Defines a function
- Is a name in the function definition
- Returns None
! Argument is a value passed in the call.
? Which documents a function?
- Modularity
- Argument
- Function
+ Docstring
! Docstring documents a function.
? Which statement is true of Docstring?
- Returns None
- Sends a value back to the caller
- Is a benefit of functions
+ Documents a function
! Docstring documents a function.
? Which is a benefit of functions?
- Return statement
- Docstring
- Def keyword
+ Modularity
! Modularity is a benefit of functions.
? Which statement is true of Modularity?
- Is a value passed in the call
- Is a name in the function definition
+ Is a benefit of functions
- Sends a value back to the caller
! Modularity is a benefit of functions.
? Which is matched by order?
- Default parameter
- Immutable argument
- Star args
+ Positional argument
! Positional argument is matched by order.
? Which statement is true of Positional argument?
- Are returned as a tuple
+ Is matched by order
- Is matched by name
- Collects keyword arguments into a dictionary
! Positional argument is matched by order.
? Which is matched by name?
- Star args
- Mutable argument
- Multiple return values
+ Keyword argument
! Keyword argument is matched by name.
? Which statement is true of Keyword argument?
+ Is matched by name
- Is matched by order
- Must follow non default parameters
- Can be changed inside the function
! Keyword argument is matched by name.
? Which has a preset value?
+ Default parameter
- Mutable argument
- Star args
- Double star kwargs
! Default parameter has a preset value.
? Which statement is true of Default parameter?
- Collects extra positional arguments into a tuple
- Is matched by order
- Is matched by name
+ Has a preset value
! Default parameter has a preset value.
? Which must follow non default parameters?
- Multiple return values
- Immutable argument
- Double star kwargs
+ Default parameter
! Default parameter must follow non default parameters.
? Which collects extra positional arguments into a tuple?
- Immutable argument
- Positional argument
+ Star args
- Multiple return values
! Star args collects extra positional arguments into a tuple.
? Which statement is true of Star args?
- Can be changed inside the function
- Are returned as a tuple
- Is not changed outside the function
+ Collects extra positional arguments into a tuple
! Star args collects extra positional arguments into a tuple.
? Which collects keyword arguments into a dictionary?
- Immutable argument
- Positional argument
- Keyword argument
+ Double star kwargs
! Double star kwargs collects keyword arguments into a dictionary.
? Which statement is true of Double star kwargs?
- Can be changed inside the function
+ Collects keyword arguments into a dictionary
- Collects extra positional arguments into a tuple
- Are returned as a tuple
! Double star kwargs collects keyword arguments into a dictionary.
? Which are returned as a tuple?
+ Multiple return values
- Keyword argument
- Positional argument
- Mutable argument
! Multiple return values are returned as a tuple.
? Which statement is true of Multiple return values?
+ Are returned as a tuple
- Collects extra positional arguments into a tuple
- Must follow non default parameters
- Can be changed inside the function
! Multiple return values are returned as a tuple.
? Which can be changed inside the function?
- Default parameter
+ Mutable argument
- Star args
- Keyword argument
! Mutable argument can be changed inside the function.
? Which statement is true of Mutable argument?
+ Can be changed inside the function
- Are returned as a tuple
- Has a preset value
- Must follow non default parameters
! Mutable argument can be changed inside the function.
? Which is not changed outside the function?
- Star args
- Mutable argument
+ Immutable argument
- Multiple return values
! Immutable argument is not changed outside the function.
? Which statement is true of Immutable argument?
+ Is not changed outside the function
- Is matched by order
- Collects keyword arguments into a dictionary
- Are returned as a tuple
! Immutable argument is not changed outside the function.
? Which exists only inside the function?
+ Local variable
- Lifetime of a local variable
- Built in scope
- LEGB
! Local variable exists only inside the function.
? Which statement is true of Local variable?
- Ends when the function returns
- Is defined at module level
- Contains names like len and print
+ Exists only inside the function
! Local variable exists only inside the function.
? Which is defined at module level?
- LEGB
- Lifetime of a local variable
+ Global variable
- Built in scope
! Global variable is defined at module level.
? Which statement is true of Global variable?
- Ends when the function returns
- Exists only inside the function
+ Is defined at module level
- Allows modification of a global name
! Global variable is defined at module level.
? Which allows modification of a global name?
+ Global keyword
- LEGB
- Built in scope
- Global variable
! Global keyword allows modification of a global name.
? Which statement is true of Global keyword?
- Contains names like len and print
+ Allows modification of a global name
- Ends when the function returns
- Stands for local enclosing global built in
! Global keyword allows modification of a global name.
? Which stands for local enclosing global built in?
- Global variable
- Lifetime of a local variable
- Local variable
+ LEGB
! LEGB stands for local enclosing global built in.
? Which statement is true of LEGB?
- Ends when the function returns
- Is defined at module level
+ Stands for local enclosing global built in
- Allows modification of a global name
! LEGB stands for local enclosing global built in.
? Which contains names like len and print?
- Global variable
- Global keyword
- LEGB
+ Built in scope
! Built in scope contains names like len and print.
? Which statement is true of Built in scope?
- Ends when the function returns
- Is defined at module level
+ Contains names like len and print
- Allows modification of a global name
! Built in scope contains names like len and print.
? Which ends when the function returns?
+ Lifetime of a local variable
- Global keyword
- Local variable
- Global variable
! Lifetime of a local variable ends when the function returns.
? Which statement is true of Lifetime of a local variable?
- Contains names like len and print
- Exists only inside the function
- Stands for local enclosing global built in
+ Ends when the function returns
! Lifetime of a local variable ends when the function returns.
? Which returns the length?
- Import
+ Len function
- Floor
- Mean
! Len function returns the length.
? Which statement is true of Len function?
- Rounds down
+ Returns the length
- Brings a specific name
- Returns absolute value
! Len function returns the length.
? Which returns absolute value?
+ Abs function
- Floor
- Len function
- Sqrt
! Abs function returns absolute value.
? Which statement is true of Abs function?
- Brings a module into a program
- Is in the statistics module
+ Returns absolute value
- Is the most frequent value
! Abs function returns absolute value.
? Which rounds a number?
- Abs function
- Ceil
- From import
+ Round function
! Round function rounds a number.
? Which statement is true of Round function?
+ Rounds a number
- Is the middle value
- Is in the statistics module
- Is the most frequent value
! Round function rounds a number.
? Which returns a new sorted list?
- Mode
+ Sorted function
- Floor
- Ceil
! Sorted function returns a new sorted list.
? Which statement is true of Sorted function?
- Returns absolute value
+ Returns a new sorted list
- Brings a module into a program
- Brings a specific name
! Sorted function returns a new sorted list.
? Which is in the math module?
+ Sqrt
- Import
- Floor
- Mean
! Sqrt is in the math module.
? Which statement is true of Sqrt?
- Brings a specific name
- Brings a module into a program
+ Is in the math module
- Rounds a number
! Sqrt is in the math module.
? Which rounds up?
- Randrange
+ Ceil
- From import
- Import
! Ceil rounds up.
? Which statement is true of Ceil?
- Brings a specific name
+ Rounds up
- Is the middle value
- Returns the length
! Ceil rounds up.
? Which rounds down?
- Len function
- Abs function
+ Floor
- Sqrt
! Floor rounds down.
? Which statement is true of Floor?
+ Rounds down
- Rounds up
- Returns the length
- Brings a specific name
! Floor rounds down.
? Which excludes the stop value?
+ Randrange
- Len function
- Ceil
- Abs function
! Randrange excludes the stop value.
? Which statement is true of Randrange?
- Returns absolute value
+ Excludes the stop value
- Rounds up
- Is the most frequent value
! Randrange excludes the stop value.
? Which is in the statistics module?
- Ceil
- Sorted function
- Import
+ Mean
! Mean is in the statistics module.
? Which statement is true of Mean?
- Brings a module into a program
- Is the most frequent value
+ Is in the statistics module
- Is in the math module
! Mean is in the statistics module.
? Which is the middle value?
- Ceil
+ Median
- Import
- Randrange
! Median is the middle value.
? Which statement is true of Median?
- Returns the length
+ Is the middle value
- Brings a specific name
- Excludes the stop value
! Median is the middle value.
? Which is the most frequent value?
- Randrange
- Floor
- Sorted function
+ Mode
! Mode is the most frequent value.
? Which statement is true of Mode?
+ Is the most frequent value
- Excludes the stop value
- Rounds down
- Returns absolute value
! Mode is the most frequent value.
? Which brings a module into a program?
- Len function
- Sorted function
+ Import
- Mode
! Import brings a module into a program.
? Which statement is true of Import?
- Rounds a number
- Returns the length
- Excludes the stop value
+ Brings a module into a program
! Import brings a module into a program.
? Which brings a specific name?
- Ceil
+ From import
- Abs function
- Mode
! From import brings a specific name.
? Which statement is true of From import?
- Returns absolute value
- Brings a module into a program
+ Brings a specific name
- Rounds up
! From import brings a specific name.
? Which is a function calling itself?
+ Recursion
- Call stack
- Factorial
- Recursion without base case
! Recursion is a function calling itself.
? Which statement is true of Recursion?
- Is defined inside another function
- Is a cost of very deep recursion
+ Is a function calling itself
- Follows identifier rules
! Recursion is a function calling itself.
? Which stops the recursion?
+ Base case
- Lambda
- Enclosing scope
- Pass by object reference
! Base case stops the recursion.
? Which statement is true of Base case?
- Describes Python argument passing
- Is an anonymous function
+ Stops the recursion
- Can be any object
! Base case stops the recursion.
? Which raises RecursionError?
- Lambda
+ Recursion without base case
- Recursion
- Nested function
! Recursion without base case raises RecursionError.
? Which statement is true of Recursion without base case?
- Describes Python argument passing
- Is an anonymous function
+ Raises RecursionError
- Is a classic recursive example
! Recursion without base case raises RecursionError.
? Which stores frames of recursive calls?
+ Call stack
- Recursion without base case
- Fibonacci
- Return value
! Call stack stores frames of recursive calls.
? Which statement is true of Call stack?
- Is an anonymous function
- Is a function calling itself
+ Stores frames of recursive calls
- Is a file of Python definitions
! Call stack stores frames of recursive calls.
? Which is a classic recursive example?
- Keyword argument
+ Factorial
- Return value
- Recursion
! Factorial is a classic recursive example.
? Which statement is true of Factorial?
- Is an anonymous function
+ Is a classic recursive example
- Stores frames of recursive calls
- Can be any object
! Factorial is a classic recursive example.
? Which statement is true of Fibonacci?
+ Is a classic recursive example
- Stops the recursion
- Matters for positional arguments
- Is defined inside another function
! Fibonacci is a classic recursive example.
? Which is an anonymous function?
- Enclosing scope
- Call stack
- Keyword argument
+ Lambda
! Lambda is an anonymous function.
? Which statement is true of Lambda?
- Stops the recursion
- Describes Python argument passing
+ Is an anonymous function
- Is a file of Python definitions
! Lambda is an anonymous function.
? Which is a single expression?
+ Lambda body
- Call stack
- Function name
- First class function
! Lambda body is a single expression.
? Which statement is true of Lambda body?
- Is a function calling itself
- Raises RecursionError
+ Is a single expression
- Describes Python argument passing
! Lambda body is a single expression.
? Which can be passed as an argument?
- Call stack
- Nested function
+ First class function
- Pass by object reference
! First class function can be passed as an argument.
? Which statement is true of First class function?
- Can be any object
+ Can be passed as an argument
- Stores frames of recursive calls
- Is a single expression
! First class function can be passed as an argument.
? Which is a cost of very deep recursion?
- Lambda
- Fibonacci
- Call stack
+ Function call overhead
! Function call overhead is a cost of very deep recursion.
? Which statement is true of Function call overhead?
- Can be any object
+ Is a cost of very deep recursion
- Is a single expression
- Belongs to an outer function
! Function call overhead is a cost of very deep recursion.
? Which can be any object?
- Pass by object reference
+ Return value
- Base case
- Module
! Return value can be any object.
? Which statement is true of Return value?
+ Can be any object
- Describes Python argument passing
- Can be passed as an argument
- Is a classic recursive example
! Return value can be any object.
? Which describes Python argument passing?
- First class function
- Variable shadowing
- Recursion
+ Pass by object reference
! Pass by object reference describes Python argument passing.
? Which statement is true of Pass by object reference?
+ Describes Python argument passing
- Stores frames of recursive calls
- Stops the recursion
- Is a function calling itself
! Pass by object reference describes Python argument passing.
? Which follows identifier rules?
+ Function name
- Variable shadowing
- Fibonacci
- Return value
! Function name follows identifier rules.
? Which statement is true of Function name?
- Describes Python argument passing
+ Follows identifier rules
- Is an anonymous function
- Raises RecursionError
! Function name follows identifier rules.
? Which matters for positional arguments?
- Keyword argument
- Fibonacci
- First class function
+ Argument order
! Argument order matters for positional arguments.
? Which statement is true of Argument order?
+ Matters for positional arguments
- Raises RecursionError
- Can be given in any order
- Is a cost of very deep recursion
! Argument order matters for positional arguments.
? Which can be given in any order?
- Function name
+ Keyword argument
- Recursion without base case
- Call stack
! Keyword argument can be given in any order.
? Which is defined inside another function?
- Lambda
- Call stack
+ Nested function
- Base case
! Nested function is defined inside another function.
? Which statement is true of Nested function?
- Describes Python argument passing
+ Is defined inside another function
- Is a single expression
- Is a cost of very deep recursion
! Nested function is defined inside another function.
? Which belongs to an outer function?
- Factorial
+ Enclosing scope
- First class function
- Pass by object reference
! Enclosing scope belongs to an outer function.
? Which statement is true of Enclosing scope?
+ Belongs to an outer function
- Matters for positional arguments
- Is a file of Python definitions
- Can be any object
! Enclosing scope belongs to an outer function.
? Which happens when a local name hides a global one?
- Nested function
+ Variable shadowing
- Enclosing scope
- Argument order
! Variable shadowing happens when a local name hides a global one.
? Which statement is true of Variable shadowing?
+ Happens when a local name hides a global one
- Matters for positional arguments
- Follows identifier rules
- Is a cost of very deep recursion
! Variable shadowing happens when a local name hides a global one.
? Which is a file of Python definitions?
+ Module
- Function call overhead
- Function name
- Variable shadowing
! Module is a file of Python definitions.
? Which statement is true of Module?
- Belongs to an outer function
- Raises RecursionError
- Can be any object
+ Is a file of Python definitions
! Module is a file of Python definitions.
? Keyword def
- Delete
- Default
- Declare
+ Define
! Function.
? kwargs
+ Dictionary
- Tuple
- List
- Set
! Type.
? Base case
+ Stops recursion
- Starts it
- Loops
- Imports
! Role.
? global
- Create local
+ Modify global
- Import
- Return
! Keyword.
? Lookup order
- GLEB
+ LEGB
- BGLE
- ELGB
! Rule.
? Lambda
- Recursive
- Global
+ Anonymous
- Built-in
! Function.
@visual
flow | Function call | Call; Arguments bound; Body runs; Return
blocks | Argument types | Positional; Keyword; Default; Variable length
compare | Parameter and argument | Parameter=In definition~Placeholder; Argument=In call~Actual value
mind | Functions | Definition; Arguments; Scope; Recursion
steps | Recursion | Base case; Recursive call; Stack grows; Unwind
@problems
## Moderate
P: What is the output of a function with no return?
A: None.
R: 3 | None
R: 3 | No return
## High
P: Explain the LEGB rule.
A: Python looks up a name in Local, then Enclosing, then Global and finally Built-in scope.
R: 2 | Local
R: 2 | Enclosing
R: 2 | Global
R: 2 | Built-in
## Advanced
P: Write a recursive function for factorial.
A: def fact(n): return 1 if n<=1 else n*fact(n-1).
R: 2 | Base case
R: 2 | Recursive call
R: 2 | Return
R: 2 | Correct result
