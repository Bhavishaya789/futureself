# Getting Started with Python
minutes: 45
yt: class 11 computer science getting started with python data types operators
@study
Python is an interpreted, high-level, general-purpose, open-source language created by Guido van Rossum. Modes: interactive and script. Tokens: keywords, identifiers, literals, operators, punctuators. Variables and dynamic typing. Data types: int, float, complex, bool, str, list, tuple, dict, set, NoneType. Operators: arithmetic (+, -, *, /, //, %, **), relational, logical (and, or, not), assignment (+=), identity (is), membership (in). Operator precedence. Expressions, statements, comments (#), input() returns a string, print(), type conversion int(), float(), str(). Indentation defines blocks. Debugging: syntax, logical, runtime errors. Mutable and immutable. Modules: math, random, statistics.
## Deep dive: Basics
Python identifiers: letters, digits, underscore, not starting with a digit, case sensitive. Keywords: if, else, while, for, def, True, False, None, and, or, not. Literals: numeric, string, Boolean, None. Statements: print("Hello"). Variables: x = 5; id(x). Dynamic typing: the type is determined at run time. Multiple assignment a, b = 1, 2. Comments for readability.
## Deep dive: Operators and expressions
Arithmetic: 7 // 2 = 3; 7 % 2 = 1; 2 ** 3 = 8; 7 / 2 = 3.5. Relational: == != > < >= <=. Logical: and or not with short-circuit evaluation. Precedence: ** then unary, then * / // %, then + -, then comparisons, then not, and, or. Type conversion: implicit (int to float) and explicit. input() returns str: n = int(input()). Mutability: int, float, str, tuple immutable; list, dict, set mutable.
## Deep dive: Using functions and modules
import math: math.sqrt(16), math.pi, math.ceil, math.floor, math.pow. import random: random.randint(1, 6), random.random(). statistics: mean, median, mode. Built-ins: len(), type(), abs(), round(), max(), min(), sum(). Escape sequences: \n, \t. Formatted output. Errors: NameError, TypeError, ZeroDivisionError, SyntaxError, IndentationError.
## Hindi saransh
Python: vyakhyakar, uchch-stareey bhasha. Chara, data prakar, sanchalak. input() hamesha string deta hai.
> In Python, input() always returns a string; convert with int() or float() when needed.
@formulas
## Operators
// | Floor division | 7 // 2 = 3
% | Remainder | 7 % 2 = 1
** | Power | 2 ** 3 = 8
/ | True division | 7 / 2 = 3.5
## Data types
int | Whole numbers | 5
float | Decimals | 3.14
str | Text | "hi"
bool | True or False | True

@qa
Q: Which a high-level interpreted programming language?
A: Python a high-level interpreted programming language.
Q: What do you know about Python?
A: Python a high-level interpreted programming language.
Q: Which the creator of Python?
A: Guido van Rossum the creator of Python.
Q: What do you know about Guido van Rossum?
A: Guido van Rossum the creator of Python.
Q: Which the program executing Python code line by line?
A: Interpreter the program executing Python code line by line.
Q: What do you know about Interpreter?
A: Interpreter the program executing Python code line by line.
Q: Which executing commands one at a time?
A: Interactive mode executing commands one at a time.
Q: What do you know about Interactive mode?
A: Interactive mode executing commands one at a time.
Q: Which executing a saved program file?
A: Script mode executing a saved program file.
Q: What do you know about Script mode?
A: Script mode executing a saved program file.
Q: Which the smallest unit of a program?
A: Token the smallest unit of a program.
Q: What do you know about Token?
A: Token the smallest unit of a program.
Q: Which a reserved word with special meaning?
A: Keyword a reserved word with special meaning.
Q: What do you know about Keyword?
A: Keyword a reserved word with special meaning.
Q: Which a name given to a variable or function?
A: Identifier a name given to a variable or function.
Q: What do you know about Identifier?
A: Identifier a name given to a variable or function.
Q: Which a fixed value in code?
A: Literal a fixed value in code.
Q: What do you know about Literal?
A: Literal a fixed value in code.
Q: Which a name referring to a value?
A: Variable a name referring to a value.
Q: What do you know about Variable?
A: Variable a name referring to a value.
Q: Which the type is decided at run time?
A: Dynamic typing the type is decided at run time.
Q: What do you know about Dynamic typing?
A: Dynamic typing the type is decided at run time.
Q: Which a note ignored by the interpreter?
A: Comment a note ignored by the interpreter.
Q: What do you know about Comment?
A: Comment a note ignored by the interpreter.
Q: Which spaces that define a block of code?
A: Indentation spaces that define a block of code.
Q: What do you know about Indentation?
A: Indentation spaces that define a block of code.
Q: Which an instruction executed by Python?
A: Statement an instruction executed by Python.
Q: What do you know about Statement?
A: Statement an instruction executed by Python.
Q: Which a combination of values and operators?
A: Expression a combination of values and operators.
Q: What do you know about Expression?
A: Expression a combination of values and operators.
Q: Which the whole number data type?
A: int the whole number data type.
Q: What do you know about int?
A: Int the whole number data type.
Q: Which the decimal number data type?
A: float the decimal number data type.
Q: What do you know about float?
A: Float the decimal number data type.
Q: Which the data type for complex numbers?
A: complex the data type for complex numbers.
Q: What do you know about complex?
A: Complex the data type for complex numbers.
Q: Which the Boolean data type?
A: bool the Boolean data type.
Q: What do you know about bool?
A: Bool the Boolean data type.
Q: Which the string data type?
A: str the string data type.
Q: What do you know about str?
A: Str the string data type.
Q: Which the null value?
A: None the null value.
Q: What do you know about None?
A: None the null value.
Q: Which able to change after creation?
A: Mutable able to change after creation.
Q: What do you know about Mutable?
A: Mutable able to change after creation.
Q: Which unable to change after creation?
A: Immutable unable to change after creation.
Q: What do you know about Immutable?
A: Immutable unable to change after creation.
Q: Which an operator for mathematics?
A: Arithmetic operator an operator for mathematics.
Q: What do you know about Arithmetic operator?
A: Arithmetic operator an operator for mathematics.
Q: Which an operator comparing values?
A: Relational operator an operator comparing values.
Q: What do you know about Relational operator?
A: Relational operator an operator comparing values.
Q: Which and, or and not?
A: Logical operator and, or and not.
Q: What do you know about Logical operator?
A: Logical operator and, or and not.
Q: Which the operator storing a value in a variable?
A: Assignment operator the operator storing a value in a variable.
Q: What do you know about Assignment operator?
A: Assignment operator the operator storing a value in a variable.
Q: Which is and is not?
A: Identity operator is and is not.
Q: What do you know about Identity operator?
A: Identity operator is and is not.
Q: Which in and not in?
A: Membership operator in and not in.
Q: What do you know about Membership operator?
A: Membership operator in and not in.
Q: Which the // operator?
A: Floor division the // operator.
Q: What do you know about Floor division?
A: Floor division the // operator.
Q: Which the % operator giving the remainder?
A: Modulus the % operator giving the remainder.
Q: What do you know about Modulus?
A: Modulus the % operator giving the remainder.
Q: Which the ** operator?
A: Exponent the ** operator.
Q: What do you know about Exponent?
A: Exponent the ** operator.
Q: Which the order of evaluating operators?
A: Operator precedence the order of evaluating operators.
Q: What do you know about Operator precedence?
A: Operator precedence the order of evaluating operators.
Q: Which skipping unneeded operands?
A: Short-circuit evaluation skipping unneeded operands.
Q: What do you know about Short-circuit evaluation?
A: Short-circuit evaluation skipping unneeded operands.
Q: Which changing the data type?
A: Type conversion changing the data type.
Q: What do you know about Type conversion?
A: Type conversion changing the data type.
Q: Which automatic type change?
A: Implicit conversion automatic type change.
Q: What do you know about Implicit conversion?
A: Implicit conversion automatic type change.
Q: Which type change by the programmer?
A: Explicit conversion type change by the programmer.
Q: What do you know about Explicit conversion?
A: Explicit conversion type change by the programmer.
Q: Which the function reading text from the user?
A: input() the function reading text from the user.
Q: What do you know about input()?
A: Input() the function reading text from the user.
Q: Which the function displaying output?
A: print() the function displaying output.
Q: What do you know about print()?
A: Print() the function displaying output.
Q: Which the function returning the data type?
A: type() the function returning the data type.
Q: What do you know about type()?
A: Type() the function returning the data type.
Q: Which the function returning the memory identity?
A: id() the function returning the memory identity.
Q: What do you know about id()?
A: Id() the function returning the memory identity.
Q: Which the function returning the length?
A: len() the function returning the length.
Q: What do you know about len()?
A: Len() the function returning the length.
Q: Which a module of mathematical functions?
A: math module a module of mathematical functions.
Q: What do you know about math module?
A: Math module a module of mathematical functions.
Q: Which a module generating random numbers?
A: random module a module generating random numbers.
Q: What do you know about random module?
A: Random module a module generating random numbers.
Q: Which a module with mean, median and mode?
A: statistics module a module with mean, median and mode.
Q: What do you know about statistics module?
A: Statistics module a module with mean, median and mode.
Q: Which the statement bringing in a module?
A: import the statement bringing in a module.
Q: What do you know about import?
A: Import the statement bringing in a module.
Q: Which a backslash code such as newline?
A: Escape sequence a backslash code such as newline.
Q: What do you know about Escape sequence?
A: Escape sequence a backslash code such as newline.
Q: Which an error for an undefined name?
A: NameError an error for an undefined name.
Q: What do you know about NameError?
A: NameError an error for an undefined name.
Q: Which an error for an invalid operation on a type?
A: TypeError an error for an invalid operation on a type.
Q: What do you know about TypeError?
A: TypeError an error for an invalid operation on a type.
Q: Which an error for division by zero?
A: ZeroDivisionError an error for division by zero.
Q: What do you know about ZeroDivisionError?
A: ZeroDivisionError an error for division by zero.
Q: Which an error for wrong indentation?
A: IndentationError an error for wrong indentation.
Q: What do you know about IndentationError?
A: IndentationError an error for wrong indentation.
Q: Who created Python?
A: Guido van Rossum.
Q: Is Python compiled or interpreted?
A: Interpreted.
Q: What is a variable?
A: A name that refers to a value in memory.
Q: What are the rules for identifiers?
A: Letters, digits and underscore, not starting with a digit.
Q: What is dynamic typing?
A: The variable type is set when a value is assigned.
Q: What does input() return?
A: A string.
Q: How do you read an integer?
A: n = int(input()).
Q: What is the output of 7 // 2?
A: 3.
Q: What is the output of 7 % 2?
A: 1.
Q: What is the output of 2 ** 3?
A: 8.
Q: What does the == operator do?
A: Compares two values for equality.
Q: What is the difference between = and ==?
A: = assigns; == compares.
Q: What is the precedence of and and or?
A: and is higher than or.
Q: What are mutable types?
A: Types that can be changed, like lists.
Q: What does the import statement do?
A: Loads a module for use.
Q: What does math.sqrt(16) return?
A: 4.0.
Q: What does random.randint(1, 6) give?
A: A random integer between 1 and 6 inclusive.
@quiz
? Which a high-level interpreted programming language?
- id()
- Identity operator
+ Python
- type()
! Python a high-level interpreted programming language.
? Which statement is true of Python?
- The order of evaluating operators
+ A high-level interpreted programming language
- A reserved word with special meaning
- The function returning the length
! Python a high-level interpreted programming language.
? Which the creator of Python?
- int
+ Guido van Rossum
- Exponent
- Floor division
! Guido van Rossum the creator of Python.
? Which statement is true of Guido van Rossum?
- The function displaying output
+ The creator of Python
- Type change by the programmer
- The string data type
! Guido van Rossum the creator of Python.
? Which the program executing Python code line by line?
- Dynamic typing
- input()
+ Interpreter
- NameError
! Interpreter the program executing Python code line by line.
? Which statement is true of Interpreter?
+ The program executing Python code line by line
- In and not in
- A backslash code such as newline
- The function returning the memory identity
! Interpreter the program executing Python code line by line.
? Which executing commands one at a time?
- Type conversion
+ Interactive mode
- complex
- Arithmetic operator
! Interactive mode executing commands one at a time.
? Which statement is true of Interactive mode?
- An error for wrong indentation
- The Boolean data type
- Changing the data type
+ Executing commands one at a time
! Interactive mode executing commands one at a time.
? Which executing a saved program file?
- Short-circuit evaluation
- id()
- complex
+ Script mode
! Script mode executing a saved program file.
? Which statement is true of Script mode?
+ Executing a saved program file
- A module with mean, median and mode
- The operator storing a value in a variable
- The % operator giving the remainder
! Script mode executing a saved program file.
? Which the smallest unit of a program?
- TypeError
+ Token
- Keyword
- Mutable
! Token the smallest unit of a program.
? Which statement is true of Token?
- The ** operator
- The function returning the memory identity
+ The smallest unit of a program
- Type change by the programmer
! Token the smallest unit of a program.
? Which a reserved word with special meaning?
- Arithmetic operator
- Guido van Rossum
- len()
+ Keyword
! Keyword a reserved word with special meaning.
? Which statement is true of Keyword?
- The // operator
- And, or and not
+ A reserved word with special meaning
- In and not in
! Keyword a reserved word with special meaning.
? Which a name given to a variable or function?
+ Identifier
- Interpreter
- Token
- Dynamic typing
! Identifier a name given to a variable or function.
? Which statement is true of Identifier?
- The ** operator
- The order of evaluating operators
+ A name given to a variable or function
- The whole number data type
! Identifier a name given to a variable or function.
? Which a fixed value in code?
+ Literal
- IndentationError
- math module
- Expression
! Literal a fixed value in code.
? Which statement is true of Literal?
- The function returning the data type
- The % operator giving the remainder
- The function reading text from the user
+ A fixed value in code
! Literal a fixed value in code.
? Which a name referring to a value?
- NameError
+ Variable
- Literal
- ZeroDivisionError
! Variable a name referring to a value.
? Which statement is true of Variable?
- The statement bringing in a module
- Type change by the programmer
- The operator storing a value in a variable
+ A name referring to a value
! Variable a name referring to a value.
? Which the type is decided at run time?
- Token
+ Dynamic typing
- bool
- print()
! Dynamic typing the type is decided at run time.
? Which statement is true of Dynamic typing?
- The whole number data type
+ The type is decided at run time
- An error for division by zero
- Changing the data type
! Dynamic typing the type is decided at run time.
? Which a note ignored by the interpreter?
+ Comment
- Short-circuit evaluation
- len()
- Statement
! Comment a note ignored by the interpreter.
? Which statement is true of Comment?
- An error for an invalid operation on a type
- The ** operator
+ A note ignored by the interpreter
- Executing a saved program file
! Comment a note ignored by the interpreter.
? Which spaces that define a block of code?
- Comment
- Relational operator
+ Indentation
- str
! Indentation spaces that define a block of code.
? Which statement is true of Indentation?
- A name given to a variable or function
+ Spaces that define a block of code
- The function reading text from the user
- A combination of values and operators
! Indentation spaces that define a block of code.
? Which an instruction executed by Python?
- Implicit conversion
- math module
- Variable
+ Statement
! Statement an instruction executed by Python.
? Which statement is true of Statement?
- Spaces that define a block of code
- A reserved word with special meaning
+ An instruction executed by Python
- Executing a saved program file
! Statement an instruction executed by Python.
? Which a combination of values and operators?
- float
- math module
+ Expression
- Token
! Expression a combination of values and operators.
? Which statement is true of Expression?
- An error for an invalid operation on a type
+ A combination of values and operators
- A module of mathematical functions
- A backslash code such as newline
! Expression a combination of values and operators.
? Which the whole number data type?
- Token
- Expression
+ int
- NameError
! Int the whole number data type.
? Which statement is true of int?
+ The whole number data type
- The type is decided at run time
- A module with mean, median and mode
- Unable to change after creation
! Int the whole number data type.
? Which the decimal number data type?
- Floor division
- str
+ float
- Variable
! Float the decimal number data type.
? Which statement is true of float?
- Changing the data type
- An error for wrong indentation
- An operator comparing values
+ The decimal number data type
! Float the decimal number data type.
? Which the data type for complex numbers?
- Escape sequence
- Short-circuit evaluation
+ complex
- Variable
! Complex the data type for complex numbers.
? Which statement is true of complex?
+ The data type for complex numbers
- A name referring to a value
- Spaces that define a block of code
- A module of mathematical functions
! Complex the data type for complex numbers.
? Which the Boolean data type?
- type()
+ bool
- Statement
- str
! Bool the Boolean data type.
? Which statement is true of bool?
- A module of mathematical functions
- An operator comparing values
+ The Boolean data type
- The function returning the length
! Bool the Boolean data type.
? Which the string data type?
+ str
- Immutable
- Identifier
- Variable
! Str the string data type.
? Which statement is true of str?
- A name given to a variable or function
- A fixed value in code
- The function returning the data type
+ The string data type
! Str the string data type.
? Which the null value?
+ None
- bool
- str
- Interactive mode
! None the null value.
? Which statement is true of None?
- An error for wrong indentation
- A module with mean, median and mode
- Spaces that define a block of code
+ The null value
! None the null value.
? Which able to change after creation?
+ Mutable
- statistics module
- NameError
- Expression
! Mutable able to change after creation.
? Which statement is true of Mutable?
+ Able to change after creation
- The // operator
- The statement bringing in a module
- Changing the data type
! Mutable able to change after creation.
? Which unable to change after creation?
- Type conversion
- NameError
- Interactive mode
+ Immutable
! Immutable unable to change after creation.
? Which statement is true of Immutable?
- The order of evaluating operators
- An error for wrong indentation
+ Unable to change after creation
- An error for an invalid operation on a type
! Immutable unable to change after creation.
? Which an operator for mathematics?
- import
+ Arithmetic operator
- Token
- ZeroDivisionError
! Arithmetic operator an operator for mathematics.
? Which statement is true of Arithmetic operator?
- The smallest unit of a program
+ An operator for mathematics
- A module of mathematical functions
- The ** operator
! Arithmetic operator an operator for mathematics.
? Which an operator comparing values?
- input()
+ Relational operator
- Type conversion
- Logical operator
! Relational operator an operator comparing values.
? Which statement is true of Relational operator?
- An error for an undefined name
+ An operator comparing values
- The creator of Python
- A backslash code such as newline
! Relational operator an operator comparing values.
? Which and, or and not?
- bool
- Membership operator
- Interactive mode
+ Logical operator
! Logical operator and, or and not.
? Which statement is true of Logical operator?
- The order of evaluating operators
+ And, or and not
- A name given to a variable or function
- An operator for mathematics
! Logical operator and, or and not.
? Which the operator storing a value in a variable?
- Relational operator
- Dynamic typing
- Exponent
+ Assignment operator
! Assignment operator the operator storing a value in a variable.
? Which statement is true of Assignment operator?
+ The operator storing a value in a variable
- An error for wrong indentation
- A name referring to a value
- And, or and not
! Assignment operator the operator storing a value in a variable.
? Which is and is not?
- Mutable
+ Identity operator
- Interpreter
- Indentation
! Identity operator is and is not.
? Which statement is true of Identity operator?
+ Is and is not
- The function reading text from the user
- A name referring to a value
- Type change by the programmer
! Identity operator is and is not.
? Which in and not in?
- id()
- Dynamic typing
+ Membership operator
- import
! Membership operator in and not in.
? Which statement is true of Membership operator?
- A high-level interpreted programming language
- The null value
+ In and not in
- Unable to change after creation
! Membership operator in and not in.
? Which the // operator?
- Interactive mode
- Variable
+ Floor division
- Python
! Floor division the // operator.
? Which statement is true of Floor division?
+ The // operator
- The function returning the length
- The function reading text from the user
- An operator comparing values
! Floor division the // operator.
? Which the % operator giving the remainder?
+ Modulus
- Relational operator
- complex
- Logical operator
! Modulus the % operator giving the remainder.
? Which statement is true of Modulus?
- A module generating random numbers
+ The % operator giving the remainder
- The data type for complex numbers
- A high-level interpreted programming language
! Modulus the % operator giving the remainder.
? Which the ** operator?
- Indentation
+ Exponent
- Assignment operator
- str
! Exponent the ** operator.
? Which statement is true of Exponent?
- A name referring to a value
- A high-level interpreted programming language
+ The ** operator
- The string data type
! Exponent the ** operator.
? Which the order of evaluating operators?
+ Operator precedence
- Explicit conversion
- len()
- input()
! Operator precedence the order of evaluating operators.
? Which statement is true of Operator precedence?
- The Boolean data type
- The program executing Python code line by line
+ The order of evaluating operators
- The operator storing a value in a variable
! Operator precedence the order of evaluating operators.
? Which skipping unneeded operands?
+ Short-circuit evaluation
- Mutable
- NameError
- Identity operator
! Short-circuit evaluation skipping unneeded operands.
? Which statement is true of Short-circuit evaluation?
- The type is decided at run time
+ Skipping unneeded operands
- An error for wrong indentation
- The decimal number data type
! Short-circuit evaluation skipping unneeded operands.
? Which changing the data type?
- Assignment operator
- import
- Escape sequence
+ Type conversion
! Type conversion changing the data type.
? Which statement is true of Type conversion?
- An error for an undefined name
+ Changing the data type
- An error for division by zero
- A module of mathematical functions
! Type conversion changing the data type.
? Which automatic type change?
+ Implicit conversion
- Comment
- Literal
- Identifier
! Implicit conversion automatic type change.
? Which statement is true of Implicit conversion?
- Skipping unneeded operands
- The creator of Python
- A backslash code such as newline
+ Automatic type change
! Implicit conversion automatic type change.
? Which type change by the programmer?
- None
- print()
- input()
+ Explicit conversion
! Explicit conversion type change by the programmer.
? Which statement is true of Explicit conversion?
- The function returning the memory identity
- The function returning the data type
- A fixed value in code
+ Type change by the programmer
! Explicit conversion type change by the programmer.
? Which the function reading text from the user?
+ input()
- TypeError
- Expression
- Identity operator
! Input() the function reading text from the user.
? Which statement is true of input()?
- A reserved word with special meaning
- The order of evaluating operators
+ The function reading text from the user
- Unable to change after creation
! Input() the function reading text from the user.
? Which the function displaying output?
- ZeroDivisionError
+ print()
- type()
- import
! Print() the function displaying output.
? Which statement is true of print()?
- The smallest unit of a program
- A note ignored by the interpreter
- A combination of values and operators
+ The function displaying output
! Print() the function displaying output.
? Which the function returning the data type?
+ type()
- Short-circuit evaluation
- bool
- id()
! Type() the function returning the data type.
? Which statement is true of type()?
- A fixed value in code
- A backslash code such as newline
- Type change by the programmer
+ The function returning the data type
! Type() the function returning the data type.
? Which the function returning the memory identity?
- Escape sequence
- Short-circuit evaluation
+ id()
- Token
! Id() the function returning the memory identity.
? Which statement is true of id()?
- The order of evaluating operators
+ The function returning the memory identity
- The string data type
- A fixed value in code
! Id() the function returning the memory identity.
? Which the function returning the length?
- Literal
- Operator precedence
+ len()
- None
! Len() the function returning the length.
? Which statement is true of len()?
- The // operator
- In and not in
- Skipping unneeded operands
+ The function returning the length
! Len() the function returning the length.
? Which a module of mathematical functions?
- input()
+ math module
- Membership operator
- TypeError
! Math module a module of mathematical functions.
? Which statement is true of math module?
- Automatic type change
- The function returning the length
+ A module of mathematical functions
- The // operator
! Math module a module of mathematical functions.
? Which a module generating random numbers?
+ random module
- Guido van Rossum
- Mutable
- Explicit conversion
! Random module a module generating random numbers.
? Which statement is true of random module?
- Changing the data type
- Executing commands one at a time
+ A module generating random numbers
- An error for an invalid operation on a type
! Random module a module generating random numbers.
? Which a module with mean, median and mode?
+ statistics module
- Explicit conversion
- Identity operator
- Dynamic typing
! Statistics module a module with mean, median and mode.
? Which statement is true of statistics module?
- An error for wrong indentation
+ A module with mean, median and mode
- The program executing Python code line by line
- The order of evaluating operators
! Statistics module a module with mean, median and mode.
? Which the statement bringing in a module?
+ import
- Mutable
- Implicit conversion
- math module
! Import the statement bringing in a module.
? Which statement is true of import?
- Changing the data type
- The % operator giving the remainder
- In and not in
+ The statement bringing in a module
! Import the statement bringing in a module.
? Which a backslash code such as newline?
- Statement
- Relational operator
+ Escape sequence
- math module
! Escape sequence a backslash code such as newline.
? Which statement is true of Escape sequence?
- An operator comparing values
+ A backslash code such as newline
- Is and is not
- Changing the data type
! Escape sequence a backslash code such as newline.
? Which an error for an undefined name?
- ZeroDivisionError
- type()
- import
+ NameError
! NameError an error for an undefined name.
? Which statement is true of NameError?
- Type change by the programmer
+ An error for an undefined name
- The Boolean data type
- And, or and not
! NameError an error for an undefined name.
? Which an error for an invalid operation on a type?
- Statement
+ TypeError
- Mutable
- id()
! TypeError an error for an invalid operation on a type.
? Which statement is true of TypeError?
- An error for division by zero
- And, or and not
- The % operator giving the remainder
+ An error for an invalid operation on a type
! TypeError an error for an invalid operation on a type.
? Which an error for division by zero?
- Escape sequence
+ ZeroDivisionError
- Indentation
- Membership operator
! ZeroDivisionError an error for division by zero.
? Which statement is true of ZeroDivisionError?
- The type is decided at run time
- Changing the data type
- The // operator
+ An error for division by zero
! ZeroDivisionError an error for division by zero.
? Which an error for wrong indentation?
+ IndentationError
- import
- Exponent
- Assignment operator
! IndentationError an error for wrong indentation.
? Which statement is true of IndentationError?
- Type change by the programmer
- The creator of Python
+ An error for wrong indentation
- The ** operator
! IndentationError an error for wrong indentation.
? 7 // 2 equals
- 3.5
- 4
+ 3
- 1
! Floor.
? input() returns
- Integer
+ String
- Float
- Boolean
! Text.
? Immutable type is
+ tuple
- list
- dict
- set
! Fixed.
? Comment starts with
- //
- /*
+ #
- --
! Hash.
? 2 ** 3 equals
- 6
- 5
- 9
+ 8
! Power.
? Python is
- Compiled only
+ Interpreted
- Machine
- Assembly
! High-level.
@visual
blocks | Data types | int; float; str; bool; list; tuple; dict
compare | Mutable and immutable | Mutable=list dict set; Immutable=int str tuple
flow | Program | Input; Process; Output
table | Operator | Op=//, %, **, /; Result=Floor/Remainder/Power/Division
mind | Python | Tokens; Types; Operators; Modules
steps | Run a script | Write code; Save; Run; Debug
cycle | Coding | Edit; Run; Test; Fix
@problems
## Moderate
P: Write the output of 17 // 5, 17 % 5, 2 ** 4 and 17 / 5.
A: 3, 2, 16, 3.4.
R: 3 | Four values
R: 1 | Clear presentation and correct terms
## High
P: Write a Python program to read two numbers and print their sum and average.
A: a = int(input()); b = int(input()); print(a + b, (a + b) / 2).
R: 2 | Input
R: 2 | Conversion
R: 2 | Sum
R: 2 | Average
## Advanced
P: Explain mutable and immutable types and write code to compute the area of a circle using the math module.
A: Lists change in place; strings do not; import math; area = math.pi * r ** 2.
R: 2 | Mutable
R: 2 | Immutable
R: 2 | Import
R: 2 | Area
