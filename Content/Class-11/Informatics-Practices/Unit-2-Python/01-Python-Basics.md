# Python Basics
minutes: 40
yt: class 11 informatics practices python basics variables data types operators
@study
Python is a high-level, interpreted, general-purpose language created by Guido van Rossum and released in 1991. It is case sensitive, uses indentation to define blocks and is free and open source. A Python program can be run in interactive mode (the shell, with the >>> prompt) or script mode (a .py file). Tokens are the smallest units: keywords (such as if, else, while, for, def, True, False, None), identifiers (names given to variables and functions), literals, operators and punctuators. Identifier rules: they may contain letters, digits and underscore, cannot start with a digit and cannot be a keyword. A variable is a name referring to a value; Python is dynamically typed, so the type is decided by the value. Standard data types are int, float, complex, bool, str, list, tuple, dict and set; None is the null type. Mutable types (list, dict, set) can be changed after creation; immutable types (int, float, str, tuple) cannot. Operators: arithmetic (+, -, *, /, //, %, **), relational (<, >, <=, >=, ==, !=), logical (and, or, not), assignment (=, +=, -=), identity (is, is not) and membership (in, not in). Division / always gives a float, // gives floor division and % gives the remainder. Precedence: parentheses, then **, then unary minus, then *, /, //, %, then + and -, then comparison, not, and, or. The input() function reads a string, so int() or float() converts it; print() displays output with the sep and end parameters. Comments begin with #. type() shows the type and id() the memory address. Type conversion can be implicit or explicit.
## Deep dive: Data types and variables
Numbers are int, float and complex. A string is a sequence of characters in quotes. The bool type has True and False, equal to 1 and 0. Assigning a = b = 5 gives both names the value 5. Multiple assignment a, b = 1, 2 is allowed. Variables can change type when reassigned.
## Deep dive: Operators
** is exponentiation and is right associative. // floors the result, so -7 // 2 is -4. % gives the remainder, so 7 % 3 is 1. == compares values, while is compares identity. and returns the first false operand or the last value.
## Deep dive: Input and output
input() always returns a string. For numbers write int(input()). print(a, b, sep="-", end="!") controls separators. Escape sequences include newline and tab. f-strings were added in Python 3.6.
## Hindi saransh
Python ek saral, interpreted bhasha hai; variable, data type aur operator iski buniyaad hain.
> Remember: / gives float, // gives floor, % gives remainder.
@formulas
## Key facts
// | Floor division | 7//2 = 3
% | Remainder | 7%3 = 1
** | Power | 2**3 = 8
input() | Returns | String
Mutable | list dict set | Changeable

@qa
Q: Which is a high-level interpreted language?
A: Python is a high-level interpreted language.
Q: What do you know about Python?
A: Python is a high-level interpreted language.
Q: Which created Python?
A: Guido van Rossum created Python.
Q: What do you know about Guido van Rossum?
A: Guido van Rossum created Python.
Q: Which is the year of first Python release?
A: Python 1991 is the year of first Python release.
Q: What do you know about Python 1991?
A: Python 1991 is the year of first Python release.
Q: Which means executed line by line?
A: Interpreted means executed line by line.
Q: What do you know about Interpreted?
A: Interpreted means executed line by line.
Q: Which means upper and lower case letters are different?
A: Case sensitive means upper and lower case letters are different.
Q: What do you know about Case sensitive?
A: Case sensitive means upper and lower case letters are different.
Q: Which defines blocks in Python?
A: Indentation defines blocks in Python.
Q: What do you know about Indentation?
A: Indentation defines blocks in Python.
Q: Which executes one statement at a time at the prompt?
A: Interactive mode executes one statement at a time at the prompt.
Q: What do you know about Interactive mode?
A: Interactive mode executes one statement at a time at the prompt.
Q: Which runs a saved file with a py extension?
A: Script mode runs a saved file with a py extension.
Q: What do you know about Script mode?
A: Script mode runs a saved file with a py extension.
Q: Which is the symbol >>> in Python shell?
A: Prompt is the symbol >>> in Python shell.
Q: What do you know about Prompt?
A: Prompt is the symbol >>> in Python shell.
Q: Which starts with the hash symbol?
A: Comment starts with the hash symbol.
Q: What do you know about Comment?
A: Comment starts with the hash symbol.
Q: Which is the smallest unit of a program?
A: Token is the smallest unit of a program.
Q: What do you know about Token?
A: Token is the smallest unit of a program.
Q: Which is a reserved word with a special meaning?
A: Keyword is a reserved word with a special meaning.
Q: What do you know about Keyword?
A: Keyword is a reserved word with a special meaning.
Q: Which is a name given to a variable or function?
A: Identifier is a name given to a variable or function.
Q: What do you know about Identifier?
A: Identifier is a name given to a variable or function.
Q: Which is a fixed value in a program?
A: Literal is a fixed value in a program.
Q: What do you know about Literal?
A: Literal is a fixed value in a program.
Q: Which is a name that refers to a value?
A: Variable is a name that refers to a value.
Q: What do you know about Variable?
A: Variable is a name that refers to a value.
Q: Which means the type is decided at run time?
A: Dynamic typing means the type is decided at run time.
Q: What do you know about Dynamic typing?
A: Dynamic typing means the type is decided at run time.
Q: Which is allowed in identifiers?
A: Underscore is allowed in identifiers.
Q: What do you know about Underscore?
A: Underscore is allowed in identifiers.
Q: Which is not allowed for an identifier?
A: Digit start is not allowed for an identifier.
Q: What do you know about Digit start?
A: Digit start is not allowed for an identifier.
Q: Which is the type of whole numbers?
A: int is the type of whole numbers.
Q: What do you know about int?
A: Int is the type of whole numbers.
Q: Which is the type of numbers with decimals?
A: float is the type of numbers with decimals.
Q: What do you know about float?
A: Float is the type of numbers with decimals.
Q: Which is the type of numbers with real and imaginary parts?
A: complex is the type of numbers with real and imaginary parts.
Q: What do you know about complex?
A: Complex is the type of numbers with real and imaginary parts.
Q: Which is the type with True and False?
A: bool is the type with True and False.
Q: What do you know about bool?
A: Bool is the type with True and False.
Q: Which is the type of text?
A: str is the type of text.
Q: What do you know about str?
A: Str is the type of text.
Q: Which is a mutable ordered sequence?
A: list is a mutable ordered sequence.
Q: What do you know about list?
A: List is a mutable ordered sequence.
Q: Which is an immutable ordered sequence?
A: tuple is an immutable ordered sequence.
Q: What do you know about tuple?
A: Tuple is an immutable ordered sequence.
Q: Which is a collection of key-value pairs?
A: dict is a collection of key-value pairs.
Q: What do you know about dict?
A: Dict is a collection of key-value pairs.
Q: Which is an unordered collection of unique items?
A: set is an unordered collection of unique items.
Q: What do you know about set?
A: Set is an unordered collection of unique items.
Q: Which is the type of None?
A: NoneType is the type of None.
Q: What do you know about NoneType?
A: NoneType is the type of None.
Q: Which means the value can be changed after creation?
A: Mutable means the value can be changed after creation.
Q: What do you know about Mutable?
A: Mutable means the value can be changed after creation.
Q: Which means the value cannot be changed after creation?
A: Immutable means the value cannot be changed after creation.
Q: What do you know about Immutable?
A: Immutable means the value cannot be changed after creation.
Q: Which shows the data type of a value?
A: type function shows the data type of a value.
Q: What do you know about type function?
A: Type function shows the data type of a value.
Q: Which gives the memory address of an object?
A: id function gives the memory address of an object.
Q: What do you know about id function?
A: Id function gives the memory address of an object.
Q: Which adds numbers or joins strings?
A: Plus adds numbers or joins strings.
Q: What do you know about Plus?
A: Plus adds numbers or joins strings.
Q: Which with the slash always gives a float?
A: Division with the slash always gives a float.
Q: What do you know about Division?
A: Division with the slash always gives a float.
Q: Which is done by the double slash operator?
A: Floor division is done by the double slash operator.
Q: What do you know about Floor division?
A: Floor division is done by the double slash operator.
Q: Which gives the remainder and is the percent operator?
A: Modulus gives the remainder and is the percent operator.
Q: What do you know about Modulus?
A: Modulus gives the remainder and is the percent operator.
Q: Which is the double star operator?
A: Exponent is the double star operator.
Q: What do you know about Exponent?
A: Exponent is the double star operator.
Q: Which compare two values?
A: Relational operators compare two values.
Q: What do you know about Relational operators?
A: Relational operators compare two values.
Q: Which are and, or and not?
A: Logical operators are and, or and not.
Q: What do you know about Logical operators?
A: Logical operators are and, or and not.
Q: Which are is and is not?
A: Identity operators are is and is not.
Q: What do you know about Identity operators?
A: Identity operators are is and is not.
Q: Which are in and not in?
A: Membership operators are in and not in.
Q: What do you know about Membership operators?
A: Membership operators are in and not in.
Q: Which uses the single equals sign?
A: Assignment uses the single equals sign.
Q: What do you know about Assignment?
A: Assignment uses the single equals sign.
Q: Which combines an operator with assignment?
A: Augmented assignment combines an operator with assignment.
Q: What do you know about Augmented assignment?
A: Augmented assignment combines an operator with assignment.
Q: Which decides the order of evaluating operators?
A: Precedence decides the order of evaluating operators.
Q: What do you know about Precedence?
A: Precedence decides the order of evaluating operators.
Q: Which have the highest precedence?
A: Parentheses have the highest precedence.
Q: What do you know about Parentheses?
A: Parentheses have the highest precedence.
Q: Which reads text from the user?
A: input function reads text from the user.
Q: What do you know about input function?
A: Input function reads text from the user.
Q: Which displays output?
A: print function displays output.
Q: What do you know about print function?
A: Print function displays output.
Q: Which converts a value to an integer?
A: int function converts a value to an integer.
Q: What do you know about int function?
A: Int function converts a value to an integer.
Q: Which converts a value to a float?
A: float function converts a value to a float.
Q: What do you know about float function?
A: Float function converts a value to a float.
Q: Which converts a value to a string?
A: str function converts a value to a string.
Q: What do you know about str function?
A: Str function converts a value to a string.
Q: Who created Python?
A: Guido van Rossum.
Q: What does input() return?
A: A string.
Q: What is 7 // 2?
A: 3.
Q: What is 2 ** 3?
A: 8.
Q: Is Python case sensitive?
A: Yes.
Q: Name two mutable types.
A: List and dictionary.
Q: What defines a block in Python?
A: Indentation.
Q: What does % give?
A: The remainder.
@quiz
? Which is a high-level interpreted language?
- Python 1991
- Prompt
+ Python
- Literal
! Python is a high-level interpreted language.
? Which statement is true of Python?
+ Is a high-level interpreted language
- Executes one statement at a time at the prompt
- Starts with the hash symbol
- Means executed line by line
! Python is a high-level interpreted language.
? Which created Python?
+ Guido van Rossum
- Case sensitive
- Digit start
- Interpreted
! Guido van Rossum created Python.
? Which statement is true of Guido van Rossum?
- Is allowed in identifiers
+ Created Python
- Is a name that refers to a value
- Means the type is decided at run time
! Guido van Rossum created Python.
? Which is the year of first Python release?
- Literal
+ Python 1991
- Dynamic typing
- Python
! Python 1991 is the year of first Python release.
? Which statement is true of Python 1991?
- Is a high-level interpreted language
- Is a reserved word with a special meaning
+ Is the year of first Python release
- Runs a saved file with a py extension
! Python 1991 is the year of first Python release.
? Which means executed line by line?
+ Interpreted
- Case sensitive
- Prompt
- Indentation
! Interpreted means executed line by line.
? Which statement is true of Interpreted?
+ Means executed line by line
- Runs a saved file with a py extension
- Executes one statement at a time at the prompt
- Defines blocks in Python
! Interpreted means executed line by line.
? Which means upper and lower case letters are different?
- Dynamic typing
- Interactive mode
+ Case sensitive
- Prompt
! Case sensitive means upper and lower case letters are different.
? Which statement is true of Case sensitive?
- Executes one statement at a time at the prompt
- Is a name that refers to a value
- Defines blocks in Python
+ Means upper and lower case letters are different
! Case sensitive means upper and lower case letters are different.
? Which defines blocks in Python?
- Literal
- Guido van Rossum
+ Indentation
- Underscore
! Indentation defines blocks in Python.
? Which statement is true of Indentation?
- Runs a saved file with a py extension
- Is the year of first Python release
- Is a high-level interpreted language
+ Defines blocks in Python
! Indentation defines blocks in Python.
? Which executes one statement at a time at the prompt?
- Underscore
- Dynamic typing
+ Interactive mode
- Case sensitive
! Interactive mode executes one statement at a time at the prompt.
? Which statement is true of Interactive mode?
- Is a fixed value in a program
+ Executes one statement at a time at the prompt
- Means executed line by line
- Is allowed in identifiers
! Interactive mode executes one statement at a time at the prompt.
? Which runs a saved file with a py extension?
- Token
- Prompt
+ Script mode
- Python
! Script mode runs a saved file with a py extension.
? Which statement is true of Script mode?
- Is the symbol >>> in Python shell
- Is a name given to a variable or function
+ Runs a saved file with a py extension
- Executes one statement at a time at the prompt
! Script mode runs a saved file with a py extension.
? Which is the symbol >>> in Python shell?
- Variable
- Guido van Rossum
+ Prompt
- Literal
! Prompt is the symbol >>> in Python shell.
? Which statement is true of Prompt?
+ Is the symbol >>> in Python shell
- Is not allowed for an identifier
- Is the smallest unit of a program
- Is a reserved word with a special meaning
! Prompt is the symbol >>> in Python shell.
? Which starts with the hash symbol?
- Variable
- Prompt
- Script mode
+ Comment
! Comment starts with the hash symbol.
? Which statement is true of Comment?
- Means upper and lower case letters are different
- Is a name given to a variable or function
+ Starts with the hash symbol
- Executes one statement at a time at the prompt
! Comment starts with the hash symbol.
? Which is the smallest unit of a program?
- Comment
- Digit start
- Python
+ Token
! Token is the smallest unit of a program.
? Which statement is true of Token?
- Executes one statement at a time at the prompt
- Defines blocks in Python
- Means the type is decided at run time
+ Is the smallest unit of a program
! Token is the smallest unit of a program.
? Which is a reserved word with a special meaning?
- Python
- Script mode
- Interpreted
+ Keyword
! Keyword is a reserved word with a special meaning.
? Which statement is true of Keyword?
- Is the smallest unit of a program
- Means the type is decided at run time
+ Is a reserved word with a special meaning
- Is the year of first Python release
! Keyword is a reserved word with a special meaning.
? Which is a name given to a variable or function?
- Dynamic typing
- Variable
- Token
+ Identifier
! Identifier is a name given to a variable or function.
? Which statement is true of Identifier?
- Means upper and lower case letters are different
- Is a high-level interpreted language
- Executes one statement at a time at the prompt
+ Is a name given to a variable or function
! Identifier is a name given to a variable or function.
? Which is a fixed value in a program?
- Underscore
+ Literal
- Case sensitive
- Script mode
! Literal is a fixed value in a program.
? Which statement is true of Literal?
- Defines blocks in Python
- Is the year of first Python release
+ Is a fixed value in a program
- Is allowed in identifiers
! Literal is a fixed value in a program.
? Which is a name that refers to a value?
+ Variable
- Comment
- Underscore
- Guido van Rossum
! Variable is a name that refers to a value.
? Which statement is true of Variable?
- Is the year of first Python release
- Is not allowed for an identifier
+ Is a name that refers to a value
- Starts with the hash symbol
! Variable is a name that refers to a value.
? Which means the type is decided at run time?
+ Dynamic typing
- Interactive mode
- Underscore
- Python 1991
! Dynamic typing means the type is decided at run time.
? Which statement is true of Dynamic typing?
+ Means the type is decided at run time
- Means executed line by line
- Is the smallest unit of a program
- Created Python
! Dynamic typing means the type is decided at run time.
? Which is allowed in identifiers?
- Identifier
+ Underscore
- Interactive mode
- Variable
! Underscore is allowed in identifiers.
? Which statement is true of Underscore?
+ Is allowed in identifiers
- Means executed line by line
- Created Python
- Defines blocks in Python
! Underscore is allowed in identifiers.
? Which is not allowed for an identifier?
+ Digit start
- Keyword
- Indentation
- Identifier
! Digit start is not allowed for an identifier.
? Which statement is true of Digit start?
- Is the smallest unit of a program
- Means upper and lower case letters are different
+ Is not allowed for an identifier
- Means executed line by line
! Digit start is not allowed for an identifier.
? Which is the type of whole numbers?
- float
- id function
- complex
+ int
! Int is the type of whole numbers.
? Which statement is true of int?
- Is a mutable ordered sequence
- Is the type of text
- Means the value can be changed after creation
+ Is the type of whole numbers
! Int is the type of whole numbers.
? Which is the type of numbers with decimals?
- str
+ float
- list
- NoneType
! Float is the type of numbers with decimals.
? Which statement is true of float?
- Shows the data type of a value
+ Is the type of numbers with decimals
- Is the type of numbers with real and imaginary parts
- Is the type of whole numbers
! Float is the type of numbers with decimals.
? Which is the type of numbers with real and imaginary parts?
+ complex
- str
- int
- id function
! Complex is the type of numbers with real and imaginary parts.
? Which statement is true of complex?
- Is a mutable ordered sequence
- Means the value cannot be changed after creation
- Is the type of numbers with decimals
+ Is the type of numbers with real and imaginary parts
! Complex is the type of numbers with real and imaginary parts.
? Which is the type with True and False?
- Immutable
+ bool
- NoneType
- tuple
! Bool is the type with True and False.
? Which statement is true of bool?
- Is the type of numbers with real and imaginary parts
- Is the type of whole numbers
+ Is the type with True and False
- Shows the data type of a value
! Bool is the type with True and False.
? Which is the type of text?
+ str
- NoneType
- list
- type function
! Str is the type of text.
? Which statement is true of str?
- Is an unordered collection of unique items
+ Is the type of text
- Is the type of numbers with decimals
- Means the value cannot be changed after creation
! Str is the type of text.
? Which is a mutable ordered sequence?
- type function
+ list
- set
- tuple
! List is a mutable ordered sequence.
? Which statement is true of list?
- Gives the memory address of an object
- Is the type of numbers with real and imaginary parts
+ Is a mutable ordered sequence
- Is the type with True and False
! List is a mutable ordered sequence.
? Which is an immutable ordered sequence?
+ tuple
- int
- type function
- str
! Tuple is an immutable ordered sequence.
? Which statement is true of tuple?
- Is the type of text
- Means the value cannot be changed after creation
- Is the type with True and False
+ Is an immutable ordered sequence
! Tuple is an immutable ordered sequence.
? Which is a collection of key-value pairs?
- set
- complex
- int
+ dict
! Dict is a collection of key-value pairs.
? Which statement is true of dict?
- Is the type of None
- Is the type of numbers with decimals
- Means the value cannot be changed after creation
+ Is a collection of key-value pairs
! Dict is a collection of key-value pairs.
? Which is an unordered collection of unique items?
+ set
- Immutable
- type function
- list
! Set is an unordered collection of unique items.
? Which statement is true of set?
+ Is an unordered collection of unique items
- Is the type of text
- Means the value cannot be changed after creation
- Is the type with True and False
! Set is an unordered collection of unique items.
? Which is the type of None?
- id function
- type function
- list
+ NoneType
! NoneType is the type of None.
? Which statement is true of NoneType?
- Shows the data type of a value
+ Is the type of None
- Means the value can be changed after creation
- Is the type of numbers with real and imaginary parts
! NoneType is the type of None.
? Which means the value can be changed after creation?
+ Mutable
- set
- bool
- Immutable
! Mutable means the value can be changed after creation.
? Which statement is true of Mutable?
+ Means the value can be changed after creation
- Is an unordered collection of unique items
- Is a mutable ordered sequence
- Is an immutable ordered sequence
! Mutable means the value can be changed after creation.
? Which means the value cannot be changed after creation?
- tuple
- str
+ Immutable
- complex
! Immutable means the value cannot be changed after creation.
? Which statement is true of Immutable?
- Is a collection of key-value pairs
- Is a mutable ordered sequence
+ Means the value cannot be changed after creation
- Is the type of numbers with real and imaginary parts
! Immutable means the value cannot be changed after creation.
? Which shows the data type of a value?
+ type function
- int
- float
- id function
! Type function shows the data type of a value.
? Which statement is true of type function?
- Is an unordered collection of unique items
- Is the type of text
- Means the value can be changed after creation
+ Shows the data type of a value
! Type function shows the data type of a value.
? Which gives the memory address of an object?
- Immutable
- tuple
- dict
+ id function
! Id function gives the memory address of an object.
? Which statement is true of id function?
- Is the type with True and False
+ Gives the memory address of an object
- Means the value can be changed after creation
- Is the type of text
! Id function gives the memory address of an object.
? Which adds numbers or joins strings?
- Membership operators
- Assignment
- print function
+ Plus
! Plus adds numbers or joins strings.
? Which statement is true of Plus?
- Is done by the double slash operator
- Is the double star operator
+ Adds numbers or joins strings
- Have the highest precedence
! Plus adds numbers or joins strings.
? Which with the slash always gives a float?
- Exponent
- Augmented assignment
- print function
+ Division
! Division with the slash always gives a float.
? Which statement is true of Division?
- Uses the single equals sign
+ With the slash always gives a float
- Is done by the double slash operator
- Converts a value to a string
! Division with the slash always gives a float.
? Which is done by the double slash operator?
- Exponent
- Augmented assignment
+ Floor division
- str function
! Floor division is done by the double slash operator.
? Which statement is true of Floor division?
+ Is done by the double slash operator
- Are and, or and not
- Converts a value to a string
- Converts a value to a float
! Floor division is done by the double slash operator.
? Which gives the remainder and is the percent operator?
- Assignment
- Logical operators
+ Modulus
- Identity operators
! Modulus gives the remainder and is the percent operator.
? Which statement is true of Modulus?
- Are and, or and not
- Are in and not in
+ Gives the remainder and is the percent operator
- Converts a value to a float
! Modulus gives the remainder and is the percent operator.
? Which is the double star operator?
- Precedence
- print function
- input function
+ Exponent
! Exponent is the double star operator.
? Which statement is true of Exponent?
+ Is the double star operator
- Reads text from the user
- Decides the order of evaluating operators
- Combines an operator with assignment
! Exponent is the double star operator.
? Which compare two values?
- int function
- Exponent
- Assignment
+ Relational operators
! Relational operators compare two values.
? Which statement is true of Relational operators?
- Converts a value to a string
- Adds numbers or joins strings
- Are is and is not
+ Compare two values
! Relational operators compare two values.
? Which are and, or and not?
- Exponent
+ Logical operators
- float function
- Modulus
! Logical operators are and, or and not.
? Which statement is true of Logical operators?
+ Are and, or and not
- Converts a value to a string
- Reads text from the user
- Displays output
! Logical operators are and, or and not.
? Which are is and is not?
- int function
- float function
- Membership operators
+ Identity operators
! Identity operators are is and is not.
? Which statement is true of Identity operators?
- Gives the remainder and is the percent operator
+ Are is and is not
- Is the double star operator
- Adds numbers or joins strings
! Identity operators are is and is not.
? Which are in and not in?
- int function
- Augmented assignment
+ Membership operators
- Assignment
! Membership operators are in and not in.
? Which statement is true of Membership operators?
- Adds numbers or joins strings
- Compare two values
+ Are in and not in
- Reads text from the user
! Membership operators are in and not in.
? Which uses the single equals sign?
+ Assignment
- print function
- Identity operators
- Floor division
! Assignment uses the single equals sign.
? Which statement is true of Assignment?
- Decides the order of evaluating operators
- Are in and not in
+ Uses the single equals sign
- Have the highest precedence
! Assignment uses the single equals sign.
? Which combines an operator with assignment?
+ Augmented assignment
- Membership operators
- input function
- Division
! Augmented assignment combines an operator with assignment.
? Which statement is true of Augmented assignment?
- Compare two values
- Are in and not in
- Uses the single equals sign
+ Combines an operator with assignment
! Augmented assignment combines an operator with assignment.
? Which decides the order of evaluating operators?
- Assignment
- Plus
+ Precedence
- Floor division
! Precedence decides the order of evaluating operators.
? Which statement is true of Precedence?
- Combines an operator with assignment
+ Decides the order of evaluating operators
- Converts a value to a float
- Are in and not in
! Precedence decides the order of evaluating operators.
? Which have the highest precedence?
- Logical operators
- Identity operators
- Plus
+ Parentheses
! Parentheses have the highest precedence.
? Which statement is true of Parentheses?
- Combines an operator with assignment
- Displays output
- Are and, or and not
+ Have the highest precedence
! Parentheses have the highest precedence.
? Which reads text from the user?
- Relational operators
+ input function
- print function
- Plus
! Input function reads text from the user.
? Which statement is true of input function?
- Combines an operator with assignment
- Is done by the double slash operator
- Adds numbers or joins strings
+ Reads text from the user
! Input function reads text from the user.
? Which displays output?
+ print function
- Plus
- Modulus
- float function
! Print function displays output.
? Which statement is true of print function?
- Converts a value to a string
- Are in and not in
+ Displays output
- Combines an operator with assignment
! Print function displays output.
? Which converts a value to an integer?
+ int function
- Floor division
- Plus
- str function
! Int function converts a value to an integer.
? Which statement is true of int function?
- Gives the remainder and is the percent operator
+ Converts a value to an integer
- Is done by the double slash operator
- Are is and is not
! Int function converts a value to an integer.
? Which converts a value to a float?
+ float function
- Assignment
- Precedence
- str function
! Float function converts a value to a float.
? Which statement is true of float function?
- Are in and not in
- Combines an operator with assignment
+ Converts a value to a float
- Decides the order of evaluating operators
! Float function converts a value to a float.
? Which converts a value to a string?
- Logical operators
- Modulus
+ str function
- Floor division
! Str function converts a value to a string.
? Which statement is true of str function?
- With the slash always gives a float
- Decides the order of evaluating operators
+ Converts a value to a string
- Are and, or and not
! Str function converts a value to a string.
? Python is
- Compiled only
- Assembly
- Machine
+ Interpreted
! Language.
? 7 % 3 gives
- 2
- 3
- 0
+ 1
! Remainder.
? Immutable type
+ tuple
- list
- dict
- set
! Fixed.
? Comment starts with
- Slash
- Star
- Dollar
+ Hash
! Symbol.
? input returns
+ str
- int
- float
- bool
! Text.
? Keyword example
- speed
+ while
- total
- name
! Reserved.
@visual
flow | Program run | Write; Interpret; Output; Debug
compare | Mutable and immutable | Mutable=list dict set~Change; Immutable=int str tuple~Fixed
blocks | Operators | Arithmetic; Relational; Logical; Assignment
mind | Python basics | Tokens; Variables; Types; Operators
steps | Input a number | input; int convert; process; print
@problems
## Moderate
P: What is the output of 17 // 5 and 17 % 5?
A: 3 and 2.
R: 3 | Floor
R: 3 | Remainder
## High
P: Write a program to read two numbers and print their sum.
A: a = int(input()); b = int(input()); print(a + b).
R: 2 | Input
R: 2 | Convert
R: 2 | Add
R: 2 | Print
## Advanced
P: Distinguish between mutable and immutable types with examples.
A: Lists, dicts and sets can change; ints, strings and tuples cannot.
R: 2 | Mutable
R: 2 | Immutable
R: 2 | Examples
R: 2 | Reason
