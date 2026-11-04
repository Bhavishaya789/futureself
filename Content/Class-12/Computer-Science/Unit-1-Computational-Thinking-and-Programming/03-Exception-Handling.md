# Exception Handling
minutes: 45
yt: class 12 computer science python exception handling try except finally raise assert
@study
Errors are of three kinds: syntax errors (detected before running), runtime errors or exceptions (raised during execution) and logical errors (wrong output, no error message). An exception is an event that disrupts normal flow; if unhandled the program terminates with a traceback. Common built-in exceptions: SyntaxError, NameError, TypeError, ValueError, IndexError, KeyError, ZeroDivisionError, FileNotFoundError, ImportError, IOError, OverflowError, AttributeError and EOFError. Handling uses try, except, else and finally. The try block holds risky code; except catches a specific exception (or several, or a bare except for all); else runs if no exception occurred; finally always runs, used for cleanup such as closing files. Multiple except blocks are tested in order; the first match runs. The as keyword binds the exception object: except ValueError as e. The raise statement throws an exception deliberately: raise ValueError("message"). The assert statement checks a condition and raises AssertionError if false, useful for debugging. Exceptions can be user defined by subclassing Exception. Handling keeps programs robust and gives friendly messages. Debugging techniques: reading the traceback from the last line, using print statements, a debugger with breakpoints, and testing with sample inputs.
## Deep dive: try-except flow
Risky code goes in try. A matching except handles the error, else runs if none occurred, and finally always runs.
## Deep dive: raise and assert
raise creates an exception on purpose; assert checks a condition during development.
## Deep dive: Error kinds
Syntax errors stop compilation, runtime errors raise exceptions, and logical errors give wrong answers silently.
## Hindi saransh
Apvad prabandhan: try, except, else, finally, raise aur assert.
> Remember: finally runs whether or not an exception occurred.
@formulas
## Key facts
try | Risky code
except | Handler
else | No exception
finally | Always runs
raise | Throw exception

@qa
Q: Which is detected before execution?
A: Syntax error is detected before execution.
Q: What do you know about Syntax error?
A: Syntax error is detected before execution.
Q: Which is raised during execution?
A: Runtime error is raised during execution.
Q: What do you know about Runtime error?
A: Runtime error is raised during execution.
Q: Which gives wrong output without an error message?
A: Logical error gives wrong output without an error message.
Q: What do you know about Logical error?
A: Logical error gives wrong output without an error message.
Q: Which disrupts the normal flow of a program?
A: Exception disrupts the normal flow of a program.
Q: What do you know about Exception?
A: Exception disrupts the normal flow of a program.
Q: Which shows where an error occurred?
A: Traceback shows where an error occurred.
Q: What do you know about Traceback?
A: Traceback shows where an error occurred.
Q: Which terminates the program?
A: Unhandled exception terminates the program.
Q: What do you know about Unhandled exception?
A: Unhandled exception terminates the program.
Q: Which is raised on division by zero?
A: ZeroDivisionError is raised on division by zero.
Q: What do you know about ZeroDivisionError?
A: ZeroDivisionError is raised on division by zero.
Q: Which is raised for an inappropriate value?
A: ValueError is raised for an inappropriate value.
Q: What do you know about ValueError?
A: ValueError is raised for an inappropriate value.
Q: Which is raised for an unsupported operation on a type?
A: TypeError is raised for an unsupported operation on a type.
Q: What do you know about TypeError?
A: TypeError is raised for an unsupported operation on a type.
Q: Which is raised for an undefined variable?
A: NameError is raised for an undefined variable.
Q: What do you know about NameError?
A: NameError is raised for an undefined variable.
Q: Which is raised for an out of range index?
A: IndexError is raised for an out of range index.
Q: What do you know about IndexError?
A: IndexError is raised for an out of range index.
Q: Which is raised for a missing dictionary key?
A: KeyError is raised for a missing dictionary key.
Q: What do you know about KeyError?
A: KeyError is raised for a missing dictionary key.
Q: Which is raised when a file is missing?
A: FileNotFoundError is raised when a file is missing.
Q: What do you know about FileNotFoundError?
A: FileNotFoundError is raised when a file is missing.
Q: Which is raised when a module cannot be imported?
A: ImportError is raised when a module cannot be imported.
Q: What do you know about ImportError?
A: ImportError is raised when a module cannot be imported.
Q: Which is raised for a missing attribute?
A: AttributeError is raised for a missing attribute.
Q: What do you know about AttributeError?
A: AttributeError is raised for a missing attribute.
Q: Which is raised when input ends unexpectedly?
A: EOFError is raised when input ends unexpectedly.
Q: What do you know about EOFError?
A: EOFError is raised when input ends unexpectedly.
Q: Which contains code that may fail?
A: Try block contains code that may fail.
Q: What do you know about Try block?
A: Try block contains code that may fail.
Q: Which handles a raised exception?
A: Except block handles a raised exception.
Q: What do you know about Except block?
A: Except block handles a raised exception.
Q: Which runs when no exception occurred?
A: Else block runs when no exception occurred.
Q: What do you know about Else block?
A: Else block runs when no exception occurred.
Q: Which always runs?
A: Finally block always runs.
Q: What do you know about Finally block?
A: Finally block always runs.
Q: Which is used to close resources?
A: Finally is used to close resources.
Q: What do you know about Finally?
A: Finally is used to close resources.
Q: Which are tested in order?
A: Multiple except blocks are tested in order.
Q: What do you know about Multiple except blocks?
A: Multiple except blocks are tested in order.
Q: Which catches all exceptions?
A: Bare except catches all exceptions.
Q: What do you know about Bare except?
A: Bare except catches all exceptions.
Q: Which binds the exception object to a name?
A: As keyword binds the exception object to a name.
Q: What do you know about As keyword?
A: As keyword binds the exception object to a name.
Q: Which throws an exception deliberately?
A: Raise statement throws an exception deliberately.
Q: What do you know about Raise statement?
A: Raise statement throws an exception deliberately.
Q: Which raises AssertionError on a false condition?
A: Assert statement raises AssertionError on a false condition.
Q: What do you know about Assert statement?
A: Assert statement raises AssertionError on a false condition.
Q: Which is used for debugging checks?
A: Assertion is used for debugging checks.
Q: What do you know about Assertion?
A: Assertion is used for debugging checks.
Q: Which subclasses Exception?
A: Custom exception subclasses Exception.
Q: What do you know about Custom exception?
A: Custom exception subclasses Exception.
Q: Which starts from the last line?
A: Reading a traceback starts from the last line.
Q: What do you know about Reading a traceback?
A: Reading a traceback starts from the last line.
Q: Which shows intermediate values?
A: Print debugging shows intermediate values.
Q: What do you know about Print debugging?
A: Print debugging shows intermediate values.
Q: Which pauses execution in a debugger?
A: Breakpoint pauses execution in a debugger.
Q: What do you know about Breakpoint?
A: Breakpoint pauses execution in a debugger.
Q: Which reveal logical errors?
A: Test cases reveal logical errors.
Q: What do you know about Test cases?
A: Test cases reveal logical errors.
Q: Which handles errors gracefully?
A: Robust program handles errors gracefully.
Q: What do you know about Robust program?
A: Robust program handles errors gracefully.
Q: Which is raised when a result is too large?
A: OverflowError is raised when a result is too large.
Q: What do you know about OverflowError?
A: OverflowError is raised when a result is too large.
Q: Which is raised for input output failures?
A: IOError is raised for input output failures.
Q: What do you know about IOError?
A: IOError is raised for input output failures.
Q: Which is raised for invalid code structure?
A: SyntaxError is raised for invalid code structure.
Q: What do you know about SyntaxError?
A: SyntaxError is raised for invalid code structure.
Q: Which is raised for wrong indentation?
A: IndentationError is raised for wrong indentation.
Q: What do you know about IndentationError?
A: IndentationError is raised for wrong indentation.
Q: Which is raised for a missing module?
A: ModuleNotFoundError is raised for a missing module.
Q: What do you know about ModuleNotFoundError?
A: ModuleNotFoundError is raised for a missing module.
Q: Which has BaseException at the top?
A: Exception hierarchy has BaseException at the top.
Q: What do you know about Exception hierarchy?
A: Exception hierarchy has BaseException at the top.
Q: Which is better than a bare except?
A: Specific except is better than a bare except.
Q: What do you know about Specific except?
A: Specific except is better than a bare except.
Q: Which matters because the first match runs?
A: Except order matters because the first match runs.
Q: What do you know about Except order?
A: Except order matters because the first match runs.
Q: Which is a try inside another try?
A: Nested try is a try inside another try.
Q: What do you know about Nested try?
A: Nested try is a try inside another try.
Q: Which re-raises the current exception?
A: Raise without argument re-raises the current exception.
Q: What do you know about Raise without argument?
A: Raise without argument re-raises the current exception.
Q: Which is created by inheritance?
A: User defined exception is created by inheritance.
Q: What do you know about User defined exception?
A: User defined exception is created by inheritance.
Q: Which should help the user fix the input?
A: Error message should help the user fix the input.
Q: What do you know about Error message?
A: Error message should help the user fix the input.
Q: Which prevents many exceptions?
A: Input validation prevents many exceptions.
Q: What do you know about Input validation?
A: Input validation prevents many exceptions.
Q: Which records errors for later study?
A: Logging records errors for later study.
Q: What do you know about Logging?
A: Logging records errors for later study.
Q: Which lists the chain of calls?
A: Stack trace lists the chain of calls.
Q: What do you know about Stack trace?
A: Stack trace lists the chain of calls.
Q: Which still executes?
A: Finally with return still executes.
Q: What do you know about Finally with return?
A: Finally with return still executes.
Q: Which prints a traceback?
A: Unhandled error prints a traceback.
Q: What do you know about Unhandled error?
A: Unhandled error prints a traceback.
Q: Which needs a finally block?
A: Try without except needs a finally block.
Q: What do you know about Try without except?
A: Try without except needs a finally block.
Q: Which carries the error message?
A: Exception object carries the error message.
Q: What do you know about Exception object?
A: Exception object carries the error message.
Q: Which anticipates failures?
A: Defensive programming anticipates failures.
Q: What do you know about Defensive programming?
A: Defensive programming anticipates failures.
Q: Which signals a failed assert?
A: Assertion error signals a failed assert.
Q: What do you know about Assertion error?
A: Assertion error signals a failed assert.
Q: Which raises KeyboardInterrupt?
A: Ctrl C raises KeyboardInterrupt.
Q: What do you know about Ctrl C?
A: Ctrl C raises KeyboardInterrupt.
Q: Which ends an iterator?
A: StopIteration ends an iterator.
Q: What do you know about StopIteration?
A: StopIteration ends an iterator.
Q: Which avoids mixing success code with the risky code?
A: Else clause avoids mixing success code with the risky code.
Q: What do you know about Else clause?
A: Else clause avoids mixing success code with the risky code.
Q: Which separates normal and error code?
A: Exception handling separates normal and error code.
Q: What do you know about Exception handling?
A: Exception handling separates normal and error code.
Q: Which steps through code line by line?
A: Debugger steps through code line by line.
Q: What do you know about Debugger?
A: Debugger steps through code line by line.
Q: Which finds errors before running?
A: Syntax checker finds errors before running.
Q: What do you know about Syntax checker?
A: Syntax checker finds errors before running.
Q: Which can be caught and handled?
A: Runtime exception can be caught and handled.
Q: What do you know about Runtime exception?
A: Runtime exception can be caught and handled.
Q: What is an exception?
A: An event during execution that disrupts the normal flow.
Q: What are the three kinds of errors?
A: Syntax, runtime and logical.
Q: What does finally do?
A: Always runs, used for cleanup.
Q: What does raise do?
A: Throws an exception deliberately.
Q: What does assert do?
A: Raises AssertionError if the condition is false.
Q: What exception results from int("abc")?
A: ValueError.
Q: What does the else block do in try?
A: Runs when no exception occurred.
Q: What is a traceback?
A: A report of where the exception occurred.
@quiz
? Which is detected before execution?
- Traceback
- Logical error
+ Syntax error
- Exception
! Syntax error is detected before execution.
? Which statement is true of Syntax error?
- Is raised during execution
- Disrupts the normal flow of a program
+ Is detected before execution
- Shows where an error occurred
! Syntax error is detected before execution.
? Which is raised during execution?
- Syntax error
- Traceback
- Logical error
+ Runtime error
! Runtime error is raised during execution.
? Which statement is true of Runtime error?
- Terminates the program
- Disrupts the normal flow of a program
- Is detected before execution
+ Is raised during execution
! Runtime error is raised during execution.
? Which gives wrong output without an error message?
- Syntax error
- Exception
+ Logical error
- Unhandled exception
! Logical error gives wrong output without an error message.
? Which statement is true of Logical error?
- Is detected before execution
- Terminates the program
+ Gives wrong output without an error message
- Disrupts the normal flow of a program
! Logical error gives wrong output without an error message.
? Which disrupts the normal flow of a program?
- Unhandled exception
- Syntax error
- Traceback
+ Exception
! Exception disrupts the normal flow of a program.
? Which statement is true of Exception?
- Gives wrong output without an error message
- Shows where an error occurred
- Is detected before execution
+ Disrupts the normal flow of a program
! Exception disrupts the normal flow of a program.
? Which shows where an error occurred?
- Runtime error
- Logical error
- Syntax error
+ Traceback
! Traceback shows where an error occurred.
? Which statement is true of Traceback?
+ Shows where an error occurred
- Is raised during execution
- Terminates the program
- Is detected before execution
! Traceback shows where an error occurred.
? Which terminates the program?
+ Unhandled exception
- Runtime error
- Syntax error
- Exception
! Unhandled exception terminates the program.
? Which statement is true of Unhandled exception?
- Gives wrong output without an error message
- Is raised during execution
- Shows where an error occurred
+ Terminates the program
! Unhandled exception terminates the program.
? Which is raised on division by zero?
- AttributeError
+ ZeroDivisionError
- ImportError
- TypeError
! ZeroDivisionError is raised on division by zero.
? Which statement is true of ZeroDivisionError?
- Is raised for a missing attribute
- Is raised when input ends unexpectedly
+ Is raised on division by zero
- Is raised for an undefined variable
! ZeroDivisionError is raised on division by zero.
? Which is raised for an inappropriate value?
- IndexError
- EOFError
- TypeError
+ ValueError
! ValueError is raised for an inappropriate value.
? Which statement is true of ValueError?
- Is raised for an out of range index
- Is raised when a file is missing
+ Is raised for an inappropriate value
- Is raised for an undefined variable
! ValueError is raised for an inappropriate value.
? Which is raised for an unsupported operation on a type?
- IndexError
+ TypeError
- ValueError
- ImportError
! TypeError is raised for an unsupported operation on a type.
? Which statement is true of TypeError?
+ Is raised for an unsupported operation on a type
- Is raised when input ends unexpectedly
- Is raised for an out of range index
- Is raised when a module cannot be imported
! TypeError is raised for an unsupported operation on a type.
? Which is raised for an undefined variable?
- IndexError
- ZeroDivisionError
- TypeError
+ NameError
! NameError is raised for an undefined variable.
? Which statement is true of NameError?
+ Is raised for an undefined variable
- Is raised when a module cannot be imported
- Is raised when a file is missing
- Is raised when input ends unexpectedly
! NameError is raised for an undefined variable.
? Which is raised for an out of range index?
- NameError
+ IndexError
- AttributeError
- EOFError
! IndexError is raised for an out of range index.
? Which statement is true of IndexError?
+ Is raised for an out of range index
- Is raised when input ends unexpectedly
- Is raised for an inappropriate value
- Is raised for an undefined variable
! IndexError is raised for an out of range index.
? Which is raised for a missing dictionary key?
+ KeyError
- EOFError
- NameError
- ValueError
! KeyError is raised for a missing dictionary key.
? Which statement is true of KeyError?
- Is raised on division by zero
- Is raised when input ends unexpectedly
- Is raised for a missing attribute
+ Is raised for a missing dictionary key
! KeyError is raised for a missing dictionary key.
? Which is raised when a file is missing?
- AttributeError
- EOFError
+ FileNotFoundError
- TypeError
! FileNotFoundError is raised when a file is missing.
? Which statement is true of FileNotFoundError?
- Is raised when input ends unexpectedly
- Is raised for an inappropriate value
+ Is raised when a file is missing
- Is raised for an undefined variable
! FileNotFoundError is raised when a file is missing.
? Which is raised when a module cannot be imported?
+ ImportError
- EOFError
- FileNotFoundError
- TypeError
! ImportError is raised when a module cannot be imported.
? Which statement is true of ImportError?
- Is raised for an out of range index
+ Is raised when a module cannot be imported
- Is raised for an inappropriate value
- Is raised when a file is missing
! ImportError is raised when a module cannot be imported.
? Which is raised for a missing attribute?
- KeyError
+ AttributeError
- ZeroDivisionError
- TypeError
! AttributeError is raised for a missing attribute.
? Which statement is true of AttributeError?
+ Is raised for a missing attribute
- Is raised when a file is missing
- Is raised for an undefined variable
- Is raised when input ends unexpectedly
! AttributeError is raised for a missing attribute.
? Which is raised when input ends unexpectedly?
+ EOFError
- KeyError
- TypeError
- ValueError
! EOFError is raised when input ends unexpectedly.
? Which statement is true of EOFError?
- Is raised for an unsupported operation on a type
+ Is raised when input ends unexpectedly
- Is raised for an out of range index
- Is raised on division by zero
! EOFError is raised when input ends unexpectedly.
? Which contains code that may fail?
- Else block
+ Try block
- Except block
- Finally
! Try block contains code that may fail.
? Which statement is true of Try block?
+ Contains code that may fail
- Is used for debugging checks
- Subclasses Exception
- Is used to close resources
! Try block contains code that may fail.
? Which handles a raised exception?
- Assert statement
+ Except block
- Raise statement
- Finally block
! Except block handles a raised exception.
? Which statement is true of Except block?
- Contains code that may fail
- Are tested in order
+ Handles a raised exception
- Catches all exceptions
! Except block handles a raised exception.
? Which runs when no exception occurred?
- Assertion
- Raise statement
+ Else block
- Custom exception
! Else block runs when no exception occurred.
? Which statement is true of Else block?
- Contains code that may fail
- Are tested in order
- Binds the exception object to a name
+ Runs when no exception occurred
! Else block runs when no exception occurred.
? Which always runs?
- Custom exception
+ Finally block
- Bare except
- Try block
! Finally block always runs.
? Which statement is true of Finally block?
- Subclasses Exception
- Contains code that may fail
- Raises AssertionError on a false condition
+ Always runs
! Finally block always runs.
? Which is used to close resources?
- Except block
+ Finally
- Assert statement
- As keyword
! Finally is used to close resources.
? Which statement is true of Finally?
- Always runs
- Binds the exception object to a name
- Catches all exceptions
+ Is used to close resources
! Finally is used to close resources.
? Which are tested in order?
- Finally block
- Except block
- Else block
+ Multiple except blocks
! Multiple except blocks are tested in order.
? Which statement is true of Multiple except blocks?
- Contains code that may fail
+ Are tested in order
- Is used for debugging checks
- Throws an exception deliberately
! Multiple except blocks are tested in order.
? Which catches all exceptions?
- Multiple except blocks
- Finally
- Except block
+ Bare except
! Bare except catches all exceptions.
? Which statement is true of Bare except?
- Binds the exception object to a name
+ Catches all exceptions
- Raises AssertionError on a false condition
- Throws an exception deliberately
! Bare except catches all exceptions.
? Which binds the exception object to a name?
- Bare except
+ As keyword
- Finally
- Custom exception
! As keyword binds the exception object to a name.
? Which statement is true of As keyword?
- Contains code that may fail
+ Binds the exception object to a name
- Runs when no exception occurred
- Is used for debugging checks
! As keyword binds the exception object to a name.
? Which throws an exception deliberately?
- As keyword
- Assert statement
- Assertion
+ Raise statement
! Raise statement throws an exception deliberately.
? Which statement is true of Raise statement?
- Subclasses Exception
- Handles a raised exception
+ Throws an exception deliberately
- Always runs
! Raise statement throws an exception deliberately.
? Which raises AssertionError on a false condition?
- Assertion
- Except block
+ Assert statement
- Finally block
! Assert statement raises AssertionError on a false condition.
? Which statement is true of Assert statement?
- Binds the exception object to a name
- Contains code that may fail
- Always runs
+ Raises AssertionError on a false condition
! Assert statement raises AssertionError on a false condition.
? Which is used for debugging checks?
- Try block
+ Assertion
- Finally block
- Finally
! Assertion is used for debugging checks.
? Which statement is true of Assertion?
- Is used to close resources
- Binds the exception object to a name
+ Is used for debugging checks
- Always runs
! Assertion is used for debugging checks.
? Which subclasses Exception?
- Try block
- Assertion
+ Custom exception
- Bare except
! Custom exception subclasses Exception.
? Which statement is true of Custom exception?
+ Subclasses Exception
- Binds the exception object to a name
- Always runs
- Raises AssertionError on a false condition
! Custom exception subclasses Exception.
? Which starts from the last line?
+ Reading a traceback
- IOError
- OverflowError
- Syntax checker
! Reading a traceback starts from the last line.
? Which statement is true of Reading a traceback?
- Ends an iterator
- Is raised when a result is too large
- Has BaseException at the top
+ Starts from the last line
! Reading a traceback starts from the last line.
? Which shows intermediate values?
- Runtime exception
- Except order
+ Print debugging
- User defined exception
! Print debugging shows intermediate values.
? Which statement is true of Print debugging?
+ Shows intermediate values
- Should help the user fix the input
- Carries the error message
- Ends an iterator
! Print debugging shows intermediate values.
? Which pauses execution in a debugger?
- Debugger
- IOError
+ Breakpoint
- ModuleNotFoundError
! Breakpoint pauses execution in a debugger.
? Which statement is true of Breakpoint?
- Reveal logical errors
- Is raised for input output failures
- Is raised for invalid code structure
+ Pauses execution in a debugger
! Breakpoint pauses execution in a debugger.
? Which reveal logical errors?
- Exception handling
- SyntaxError
+ Test cases
- OverflowError
! Test cases reveal logical errors.
? Which statement is true of Test cases?
- Signals a failed assert
- Matters because the first match runs
+ Reveal logical errors
- Can be caught and handled
! Test cases reveal logical errors.
? Which handles errors gracefully?
- Runtime exception
- Finally with return
- Exception hierarchy
+ Robust program
! Robust program handles errors gracefully.
? Which statement is true of Robust program?
- Is raised for invalid code structure
- Raises KeyboardInterrupt
+ Handles errors gracefully
- Is a try inside another try
! Robust program handles errors gracefully.
? Which is raised when a result is too large?
- Ctrl C
- Error message
+ OverflowError
- User defined exception
! OverflowError is raised when a result is too large.
? Which statement is true of OverflowError?
- Records errors for later study
+ Is raised when a result is too large
- Is better than a bare except
- Can be caught and handled
! OverflowError is raised when a result is too large.
? Which is raised for input output failures?
- Finally with return
+ IOError
- Logging
- Assertion error
! IOError is raised for input output failures.
? Which statement is true of IOError?
- Is raised when a result is too large
- Is raised for wrong indentation
- Shows intermediate values
+ Is raised for input output failures
! IOError is raised for input output failures.
? Which is raised for invalid code structure?
- Breakpoint
- Exception hierarchy
- Nested try
+ SyntaxError
! SyntaxError is raised for invalid code structure.
? Which statement is true of SyntaxError?
- Steps through code line by line
+ Is raised for invalid code structure
- Is raised for input output failures
- Should help the user fix the input
! SyntaxError is raised for invalid code structure.
? Which is raised for wrong indentation?
- Exception object
- Assertion error
- Specific except
+ IndentationError
! IndentationError is raised for wrong indentation.
? Which statement is true of IndentationError?
- Can be caught and handled
+ Is raised for wrong indentation
- Avoids mixing success code with the risky code
- Shows intermediate values
! IndentationError is raised for wrong indentation.
? Which is raised for a missing module?
- Print debugging
+ ModuleNotFoundError
- Assertion error
- Unhandled error
! ModuleNotFoundError is raised for a missing module.
? Which statement is true of ModuleNotFoundError?
- Still executes
+ Is raised for a missing module
- Is raised for invalid code structure
- Is created by inheritance
! ModuleNotFoundError is raised for a missing module.
? Which has BaseException at the top?
- SyntaxError
- Else clause
+ Exception hierarchy
- Finally with return
! Exception hierarchy has BaseException at the top.
? Which statement is true of Exception hierarchy?
- Avoids mixing success code with the risky code
- Lists the chain of calls
+ Has BaseException at the top
- Ends an iterator
! Exception hierarchy has BaseException at the top.
? Which is better than a bare except?
+ Specific except
- Nested try
- Runtime exception
- StopIteration
! Specific except is better than a bare except.
? Which statement is true of Specific except?
- Is a try inside another try
- Is raised for input output failures
- Is created by inheritance
+ Is better than a bare except
! Specific except is better than a bare except.
? Which matters because the first match runs?
- Defensive programming
- Unhandled error
+ Except order
- Finally with return
! Except order matters because the first match runs.
? Which statement is true of Except order?
+ Matters because the first match runs
- Finds errors before running
- Is raised for input output failures
- Is better than a bare except
! Except order matters because the first match runs.
? Which is a try inside another try?
- Reading a traceback
- Specific except
- User defined exception
+ Nested try
! Nested try is a try inside another try.
? Which statement is true of Nested try?
- Ends an iterator
+ Is a try inside another try
- Is created by inheritance
- Carries the error message
! Nested try is a try inside another try.
? Which re-raises the current exception?
- Ctrl C
+ Raise without argument
- OverflowError
- Robust program
! Raise without argument re-raises the current exception.
? Which statement is true of Raise without argument?
- Starts from the last line
- Is created by inheritance
- Records errors for later study
+ Re-raises the current exception
! Raise without argument re-raises the current exception.
? Which is created by inheritance?
+ User defined exception
- Else clause
- SyntaxError
- Stack trace
! User defined exception is created by inheritance.
? Which statement is true of User defined exception?
- Prints a traceback
- Is raised for a missing module
- Should help the user fix the input
+ Is created by inheritance
! User defined exception is created by inheritance.
? Which should help the user fix the input?
- Test cases
- Reading a traceback
+ Error message
- Syntax checker
! Error message should help the user fix the input.
? Which statement is true of Error message?
- Anticipates failures
+ Should help the user fix the input
- Still executes
- Has BaseException at the top
! Error message should help the user fix the input.
? Which prevents many exceptions?
- Assertion error
- Else clause
- Syntax checker
+ Input validation
! Input validation prevents many exceptions.
? Which statement is true of Input validation?
- Reveal logical errors
- Finds errors before running
- Records errors for later study
+ Prevents many exceptions
! Input validation prevents many exceptions.
? Which records errors for later study?
- Input validation
+ Logging
- ModuleNotFoundError
- IndentationError
! Logging records errors for later study.
? Which statement is true of Logging?
- Is raised when a result is too large
+ Records errors for later study
- Starts from the last line
- Can be caught and handled
! Logging records errors for later study.
? Which lists the chain of calls?
- SyntaxError
- Defensive programming
- OverflowError
+ Stack trace
! Stack trace lists the chain of calls.
? Which statement is true of Stack trace?
- Prevents many exceptions
- Is better than a bare except
- Is a try inside another try
+ Lists the chain of calls
! Stack trace lists the chain of calls.
? Which still executes?
- Input validation
+ Finally with return
- IndentationError
- Ctrl C
! Finally with return still executes.
? Which statement is true of Finally with return?
- Should help the user fix the input
+ Still executes
- Is created by inheritance
- Is raised for a missing module
! Finally with return still executes.
? Which prints a traceback?
- OverflowError
- Runtime exception
- Exception hierarchy
+ Unhandled error
! Unhandled error prints a traceback.
? Which statement is true of Unhandled error?
- Lists the chain of calls
+ Prints a traceback
- Still executes
- Raises KeyboardInterrupt
! Unhandled error prints a traceback.
? Which needs a finally block?
+ Try without except
- Nested try
- Defensive programming
- Syntax checker
! Try without except needs a finally block.
? Which statement is true of Try without except?
- Has BaseException at the top
+ Needs a finally block
- Is a try inside another try
- Still executes
! Try without except needs a finally block.
? Which carries the error message?
- Print debugging
- Test cases
- OverflowError
+ Exception object
! Exception object carries the error message.
? Which statement is true of Exception object?
- Reveal logical errors
- Prints a traceback
+ Carries the error message
- Ends an iterator
! Exception object carries the error message.
? Which anticipates failures?
- Except order
- Specific except
- Exception object
+ Defensive programming
! Defensive programming anticipates failures.
? Which statement is true of Defensive programming?
- Pauses execution in a debugger
- Raises KeyboardInterrupt
- Has BaseException at the top
+ Anticipates failures
! Defensive programming anticipates failures.
? Which signals a failed assert?
- Defensive programming
- Error message
- Print debugging
+ Assertion error
! Assertion error signals a failed assert.
? Which statement is true of Assertion error?
- Avoids mixing success code with the risky code
- Records errors for later study
+ Signals a failed assert
- Ends an iterator
! Assertion error signals a failed assert.
? Which raises KeyboardInterrupt?
- Test cases
- Exception object
- Raise without argument
+ Ctrl C
! Ctrl C raises KeyboardInterrupt.
? Which statement is true of Ctrl C?
- Needs a finally block
- Carries the error message
+ Raises KeyboardInterrupt
- Separates normal and error code
! Ctrl C raises KeyboardInterrupt.
? Which ends an iterator?
+ StopIteration
- Error message
- Logging
- Try without except
! StopIteration ends an iterator.
? Which statement is true of StopIteration?
- Carries the error message
- Reveal logical errors
+ Ends an iterator
- Needs a finally block
! StopIteration ends an iterator.
? Which avoids mixing success code with the risky code?
+ Else clause
- SyntaxError
- Logging
- Defensive programming
! Else clause avoids mixing success code with the risky code.
? Which statement is true of Else clause?
- Separates normal and error code
+ Avoids mixing success code with the risky code
- Prevents many exceptions
- Starts from the last line
! Else clause avoids mixing success code with the risky code.
? Which separates normal and error code?
- Breakpoint
- IndentationError
+ Exception handling
- Runtime exception
! Exception handling separates normal and error code.
? Which statement is true of Exception handling?
- Re-raises the current exception
- Is raised for wrong indentation
+ Separates normal and error code
- Needs a finally block
! Exception handling separates normal and error code.
? Which steps through code line by line?
- Assertion error
- Nested try
+ Debugger
- Ctrl C
! Debugger steps through code line by line.
? Which statement is true of Debugger?
+ Steps through code line by line
- Raises KeyboardInterrupt
- Separates normal and error code
- Should help the user fix the input
! Debugger steps through code line by line.
? Which finds errors before running?
+ Syntax checker
- Logging
- Ctrl C
- Input validation
! Syntax checker finds errors before running.
? Which statement is true of Syntax checker?
- Is created by inheritance
+ Finds errors before running
- Reveal logical errors
- Avoids mixing success code with the risky code
! Syntax checker finds errors before running.
? Which can be caught and handled?
- Else clause
- Exception handling
+ Runtime exception
- Print debugging
! Runtime exception can be caught and handled.
? Which statement is true of Runtime exception?
- Separates normal and error code
- Finds errors before running
- Reveal logical errors
+ Can be caught and handled
! Runtime exception can be caught and handled.
? Always runs
- else
- except
+ finally
- try
! Block.
? 1/0
+ ZeroDivisionError
- ValueError
- TypeError
- KeyError
! Exception.
? Bad index
- KeyError
+ IndexError
- NameError
- OSError
! Error.
? Deliberate throw
- assert
- try
+ raise
- catch
! Keyword.
? Undefined name
+ NameError
- TypeError
- ValueError
- EOFError
! Exception.
? Wrong answer silently
- Syntax
- Runtime
- Import
+ Logical
! Error.
@visual
flow | try except | try block; Exception?; except; Continue
blocks | Error types | Syntax; Runtime; Logical; Exception
compare | else and finally | else=Only without exception~Success path; finally=Always~Cleanup
mind | Exceptions | try; except; raise; assert
steps | Handling | Try code; Catch; Else; Finally
@problems
## Moderate
P: What is the difference between syntax error and exception?
A: A syntax error is found before running; an exception occurs while the program runs.
R: 3 | Before running
R: 3 | During run
## High
P: When does the else block of try run?
A: Only when the try block finishes without raising an exception.
R: 2 | No exception
R: 2 | After try
R: 2 | Skipped otherwise
R: 2 | Example
## Advanced
P: Write code to read an integer and handle bad input.
A: Use try with int(input()) and except ValueError printing a message, optionally in a while loop until valid.
R: 2 | try
R: 2 | except ValueError
R: 2 | Message
R: 2 | Loop
