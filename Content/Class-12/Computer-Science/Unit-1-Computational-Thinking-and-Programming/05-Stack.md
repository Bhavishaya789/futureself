# Stack
minutes: 45
yt: class 12 computer science stack lifo push pop peek python list application infix postfix
@study
A stack is a linear data structure in which insertion and deletion happen at one end called the top; it follows LIFO (Last In First Out). Operations: push (insert at the top), pop (remove from the top), peek or top (view the top without removing), isEmpty and size. Overflow occurs when pushing into a full stack (bounded implementation) and underflow when popping an empty stack. In Python a list serves as a stack: append() for push and pop() for pop; peek is s[-1]; empty check is len(s)==0. Applications: reversing a string or list, undo and redo in editors, back button of a browser, function call stack and recursion, balanced parenthesis checking, conversion of infix to postfix and evaluation of postfix expressions, and backtracking such as maze solving. Expression forms: infix (A+B, operator between operands), prefix (+AB) and postfix (AB+). Postfix evaluation: scan left to right; push operands; on an operator pop two, apply, and push the result; the last item is the answer. Infix to postfix: scan; operands go to output; operators are held on a stack according to precedence; ( is pushed and ) pops until (. Precedence: ^ then * / then + -. Push and pop each take constant time O(1).
## Deep dive: LIFO
The most recently added item is removed first, like a pile of plates.
## Deep dive: Python implementation
append for push and pop for pop on a list. Always check emptiness before popping.
## Deep dive: Applications
Reversal, undo, bracket matching, function calls and postfix evaluation all rely on a stack.
## Hindi saransh
Stack: LIFO sanrachna, push, pop, peek aur uske upyog.
> Remember: pop on an empty stack is an underflow; guard it with an emptiness check.
@formulas
## Key facts
Stack | LIFO
Push | Add at top
Pop | Remove top
Peek | s[-1]
Complexity | O(1)

@qa
Q: Which is a linear structure with one open end?
A: Stack is a linear structure with one open end.
Q: What do you know about Stack?
A: Stack is a linear structure with one open end.
Q: Which is LIFO?
A: Stack order is LIFO.
Q: What do you know about Stack order?
A: Stack order is LIFO.
Q: Which is the end where operations happen?
A: Top is the end where operations happen.
Q: What do you know about Top?
A: Top is the end where operations happen.
Q: Which inserts at the top?
A: Push inserts at the top.
Q: What do you know about Push?
A: Push inserts at the top.
Q: Which removes from the top?
A: Pop removes from the top.
Q: What do you know about Pop?
A: Pop removes from the top.
Q: Which reads the top without removing?
A: Peek reads the top without removing.
Q: What do you know about Peek?
A: Peek reads the top without removing.
Q: Which occurs when pushing into a full stack?
A: Overflow occurs when pushing into a full stack.
Q: What do you know about Overflow?
A: Overflow occurs when pushing into a full stack.
Q: Which occurs when popping an empty stack?
A: Underflow occurs when popping an empty stack.
Q: What do you know about Underflow?
A: Underflow occurs when popping an empty stack.
Q: Which take constant time?
A: Stack operations take constant time.
Q: What do you know about Stack operations?
A: Stack operations take constant time.
Q: Which implements push?
A: List append implements push.
Q: What do you know about List append?
A: List append implements push.
Q: Which implements pop?
A: List pop implements pop.
Q: What do you know about List pop?
A: List pop implements pop.
Q: Which gives the top element?
A: Negative index minus one gives the top element.
Q: What do you know about Negative index minus one?
A: Negative index minus one gives the top element.
Q: Which uses len equal to zero?
A: Empty check uses len equal to zero.
Q: What do you know about Empty check?
A: Empty check uses len equal to zero.
Q: Which is usually a list?
A: Python stack is usually a list.
Q: What do you know about Python stack?
A: Python stack is usually a list.
Q: Which moves up on push?
A: Stack top pointer moves up on push.
Q: What do you know about Stack top pointer?
A: Stack top pointer moves up on push.
Q: Which is the first inserted element?
A: Stack bottom is the first inserted element.
Q: What do you know about Stack bottom?
A: Stack bottom is the first inserted element.
Q: Which is the reverse of push order?
A: Stack pop order is the reverse of push order.
Q: What do you know about Stack pop order?
A: Stack pop order is the reverse of push order.
Q: Which is the count of elements?
A: Stack size is the count of elements.
Q: What do you know about Stack size?
A: Stack size is the count of elements.
Q: Which does not change the size?
A: Stack peek does not change the size.
Q: What do you know about Stack peek?
A: Stack peek does not change the size.
Q: Which is a real life analogy?
A: Stack of plates is a real life analogy.
Q: What do you know about Stack of plates?
A: Stack of plates is a real life analogy.
Q: Which stores local variables of calls?
A: Stack memory stores local variables of calls.
Q: What do you know about Stack memory?
A: Stack memory stores local variables of calls.
Q: Which holds one function call data?
A: Stack frame holds one function call data.
Q: What do you know about Stack frame?
A: Stack frame holds one function call data.
Q: Which means size is zero?
A: Stack empty means size is zero.
Q: What do you know about Stack empty?
A: Stack empty means size is zero.
Q: Which has a fixed capacity?
A: Bounded stack has a fixed capacity.
Q: What do you know about Bounded stack?
A: Bounded stack has a fixed capacity.
Q: Which grows as needed?
A: Dynamic stack grows as needed.
Q: What do you know about Dynamic stack?
A: Dynamic stack grows as needed.
Q: Which removes the last item?
A: List pop with no argument removes the last item.
Q: What do you know about List pop with no argument?
A: List pop with no argument removes the last item.
Q: Which adds to the end in O one time?
A: Append adds to the end in O one time.
Q: What do you know about Append?
A: Append adds to the end in O one time.
Q: Which can be done with a stack?
A: Reversing a list can be done with a stack.
Q: What do you know about Reversing a list?
A: Reversing a list can be done with a stack.
Q: Which is obtained by popping characters?
A: Reversed string is obtained by popping characters.
Q: What do you know about Reversed string?
A: Reversed string is obtained by popping characters.
Q: Which is stored as a stack?
A: Undo history is stored as a stack.
Q: What do you know about Undo history?
A: Undo history is stored as a stack.
Q: Which uses a second stack?
A: Redo uses a second stack.
Q: What do you know about Redo?
A: Redo uses a second stack.
Q: Which uses operand stack?
A: Expression evaluation uses operand stack.
Q: What do you know about Expression evaluation?
A: Expression evaluation uses operand stack.
Q: Which goes left to right?
A: Postfix scan goes left to right.
Q: What do you know about Postfix scan?
A: Postfix scan goes left to right.
Q: Which pops two operands?
A: Postfix operator pops two operands.
Q: What do you know about Postfix operator?
A: Postfix operator pops two operands.
Q: Which is the last item on the stack?
A: Postfix result is the last item on the stack.
Q: What do you know about Postfix result?
A: Postfix result is the last item on the stack.
Q: Which holds pending operators?
A: Conversion operator stack holds pending operators.
Q: What do you know about Conversion operator stack?
A: Conversion operator stack holds pending operators.
Q: Which is popped first?
A: Higher precedence operator is popped first.
Q: What do you know about Higher precedence operator?
A: Higher precedence operator is popped first.
Q: Which fails if the stack is not empty at the end?
A: Parenthesis checking fails if the stack is not empty at the end.
Q: What do you know about Parenthesis checking?
A: Parenthesis checking fails if the stack is not empty at the end.
Q: Which fails when pop does not match?
A: Mismatched bracket fails when pop does not match.
Q: What do you know about Mismatched bracket?
A: Mismatched bracket fails when pop does not match.
Q: Which can use a stack?
A: Depth first search can use a stack.
Q: What do you know about Depth first search?
A: Depth first search can use a stack.
Q: Which uses backtracking with a stack?
A: Maze solving uses backtracking with a stack.
Q: What do you know about Maze solving?
A: Maze solving uses backtracking with a stack.
Q: Which is abstract data type?
A: Stack data structure is abstract data type.
Q: What do you know about Stack data structure?
A: Stack data structure is abstract data type.
Q: Which defines operations not implementation?
A: Abstract data type defines operations not implementation.
Q: What do you know about Abstract data type?
A: Abstract data type defines operations not implementation.
Q: Which differs in allowed operations?
A: Stack versus list differs in allowed operations.
Q: What do you know about Stack versus list?
A: Stack versus list differs in allowed operations.
Q: Which uses a stack?
A: String reversal uses a stack.
Q: What do you know about String reversal?
A: String reversal uses a stack.
Q: What do you know about Undo feature?
A: Undo feature uses a stack.
Q: What do you know about Browser back button?
A: Browser back button uses a stack.
Q: Which use the call stack?
A: Function calls use the call stack.
Q: What do you know about Function calls?
A: Function calls use the call stack.
Q: Which uses the call stack?
A: Recursion uses the call stack.
Q: What do you know about Recursion?
A: Recursion uses the call stack.
Q: What do you know about Bracket matching?
A: Bracket matching uses a stack.
Q: What do you know about Backtracking?
A: Backtracking uses a stack.
Q: What do you know about Postfix evaluation?
A: Postfix evaluation uses a stack.
Q: Which places the operator between operands?
A: Infix places the operator between operands.
Q: What do you know about Infix?
A: Infix places the operator between operands.
Q: Which places the operator before operands?
A: Prefix places the operator before operands.
Q: What do you know about Prefix?
A: Prefix places the operator before operands.
Q: Which places the operator after operands?
A: Postfix places the operator after operands.
Q: What do you know about Postfix?
A: Postfix places the operator after operands.
Q: Which needs no parentheses?
A: Postfix needs no parentheses.
Q: Which puts power above multiplication?
A: Operator precedence puts power above multiplication.
Q: What do you know about Operator precedence?
A: Operator precedence puts power above multiplication.
Q: Which has higher precedence than addition?
A: Multiplication has higher precedence than addition.
Q: What do you know about Multiplication?
A: Multiplication has higher precedence than addition.
Q: Which is pushed in conversion?
A: Opening bracket is pushed in conversion.
Q: What do you know about Opening bracket?
A: Opening bracket is pushed in conversion.
Q: Which pops operators until the opening bracket?
A: Closing bracket pops operators until the opening bracket.
Q: What do you know about Closing bracket?
A: Closing bracket pops operators until the opening bracket.
Q: Which is AB plus?
A: Postfix of A plus B is AB plus.
Q: What do you know about Postfix of A plus B?
A: Postfix of A plus B is AB plus.
Q: What is a stack?
A: A LIFO linear data structure.
Q: What is push?
A: Inserting an item at the top.
Q: What is pop?
A: Removing the top item.
Q: What is underflow?
A: Popping from an empty stack.
Q: Name two applications of a stack.
A: Undo and bracket matching.
Q: How is a stack implemented in Python?
A: Using a list with append and pop.
Q: What is postfix notation?
A: Operator written after its operands.
Q: What is the time complexity of push?
A: O(1).
@quiz
? Which is a linear structure with one open end?
- Overflow
+ Stack
- Stack operations
- Stack order
! Stack is a linear structure with one open end.
? Which statement is true of Stack?
- Take constant time
- Occurs when pushing into a full stack
+ Is a linear structure with one open end
- Occurs when popping an empty stack
! Stack is a linear structure with one open end.
? Which is LIFO?
- Overflow
- Underflow
+ Stack order
- Stack operations
! Stack order is LIFO.
? Which statement is true of Stack order?
- Is a linear structure with one open end
- Occurs when pushing into a full stack
+ Is LIFO
- Occurs when popping an empty stack
! Stack order is LIFO.
? Which is the end where operations happen?
+ Top
- Overflow
- Peek
- Underflow
! Top is the end where operations happen.
? Which statement is true of Top?
- Take constant time
+ Is the end where operations happen
- Inserts at the top
- Reads the top without removing
! Top is the end where operations happen.
? Which inserts at the top?
- Peek
+ Push
- Stack
- Stack operations
! Push inserts at the top.
? Which statement is true of Push?
- Removes from the top
- Is a linear structure with one open end
- Is LIFO
+ Inserts at the top
! Push inserts at the top.
? Which removes from the top?
- Push
- Underflow
+ Pop
- Overflow
! Pop removes from the top.
? Which statement is true of Pop?
- Occurs when popping an empty stack
- Take constant time
- Is a linear structure with one open end
+ Removes from the top
! Pop removes from the top.
? Which reads the top without removing?
+ Peek
- Stack order
- Pop
- Top
! Peek reads the top without removing.
? Which statement is true of Peek?
+ Reads the top without removing
- Is LIFO
- Take constant time
- Removes from the top
! Peek reads the top without removing.
? Which occurs when pushing into a full stack?
- Push
- Top
- Stack order
+ Overflow
! Overflow occurs when pushing into a full stack.
? Which statement is true of Overflow?
- Reads the top without removing
- Is LIFO
- Take constant time
+ Occurs when pushing into a full stack
! Overflow occurs when pushing into a full stack.
? Which occurs when popping an empty stack?
- Stack operations
- Top
- Pop
+ Underflow
! Underflow occurs when popping an empty stack.
? Which statement is true of Underflow?
- Take constant time
+ Occurs when popping an empty stack
- Occurs when pushing into a full stack
- Inserts at the top
! Underflow occurs when popping an empty stack.
? Which take constant time?
- Push
- Overflow
- Peek
+ Stack operations
! Stack operations take constant time.
? Which statement is true of Stack operations?
- Inserts at the top
+ Take constant time
- Removes from the top
- Is a linear structure with one open end
! Stack operations take constant time.
? Which implements push?
- Reversing a list
+ List append
- Stack frame
- Append
! List append implements push.
? Which statement is true of List append?
+ Implements push
- Pops two operands
- Gives the top element
- Uses operand stack
! List append implements push.
? Which implements pop?
+ List pop
- Empty check
- Maze solving
- Reversed string
! List pop implements pop.
? Which statement is true of List pop?
- Is the first inserted element
+ Implements pop
- Is the last item on the stack
- Holds pending operators
! List pop implements pop.
? Which gives the top element?
- Redo
+ Negative index minus one
- Postfix scan
- Stack frame
! Negative index minus one gives the top element.
? Which statement is true of Negative index minus one?
- Is usually a list
+ Gives the top element
- Is obtained by popping characters
- Is the reverse of push order
! Negative index minus one gives the top element.
? Which uses len equal to zero?
- Conversion operator stack
- Undo history
- Stack data structure
+ Empty check
! Empty check uses len equal to zero.
? Which statement is true of Empty check?
+ Uses len equal to zero
- Is stored as a stack
- Is a real life analogy
- Is abstract data type
! Empty check uses len equal to zero.
? Which is usually a list?
- Depth first search
- Stack peek
+ Python stack
- Expression evaluation
! Python stack is usually a list.
? Which statement is true of Python stack?
- Is popped first
- Uses operand stack
- Goes left to right
+ Is usually a list
! Python stack is usually a list.
? Which moves up on push?
+ Stack top pointer
- Stack frame
- Negative index minus one
- Stack pop order
! Stack top pointer moves up on push.
? Which statement is true of Stack top pointer?
- Grows as needed
- Uses backtracking with a stack
- Goes left to right
+ Moves up on push
! Stack top pointer moves up on push.
? Which is the first inserted element?
- Stack size
- Parenthesis checking
- Bounded stack
+ Stack bottom
! Stack bottom is the first inserted element.
? Which statement is true of Stack bottom?
- Defines operations not implementation
- Is abstract data type
+ Is the first inserted element
- Holds pending operators
! Stack bottom is the first inserted element.
? Which is the reverse of push order?
- Empty check
- Dynamic stack
- Bounded stack
+ Stack pop order
! Stack pop order is the reverse of push order.
? Which statement is true of Stack pop order?
- Means size is zero
- Is usually a list
- Holds one function call data
+ Is the reverse of push order
! Stack pop order is the reverse of push order.
? Which is the count of elements?
- Stack frame
- Mismatched bracket
- Stack empty
+ Stack size
! Stack size is the count of elements.
? Which statement is true of Stack size?
- Is the reverse of push order
+ Is the count of elements
- Grows as needed
- Is abstract data type
! Stack size is the count of elements.
? Which does not change the size?
- Conversion operator stack
- Dynamic stack
+ Stack peek
- Stack frame
! Stack peek does not change the size.
? Which statement is true of Stack peek?
+ Does not change the size
- Grows as needed
- Means size is zero
- Fails when pop does not match
! Stack peek does not change the size.
? Which is a real life analogy?
- Stack empty
+ Stack of plates
- Postfix operator
- Dynamic stack
! Stack of plates is a real life analogy.
? Which statement is true of Stack of plates?
- Can use a stack
- Holds one function call data
- Is the last item on the stack
+ Is a real life analogy
! Stack of plates is a real life analogy.
? Which stores local variables of calls?
- Dynamic stack
- Abstract data type
+ Stack memory
- Redo
! Stack memory stores local variables of calls.
? Which statement is true of Stack memory?
- Has a fixed capacity
- Is obtained by popping characters
- Can use a stack
+ Stores local variables of calls
! Stack memory stores local variables of calls.
? Which holds one function call data?
- Stack size
+ Stack frame
- Postfix operator
- Reversing a list
! Stack frame holds one function call data.
? Which statement is true of Stack frame?
- Does not change the size
- Adds to the end in O one time
- Is the count of elements
+ Holds one function call data
! Stack frame holds one function call data.
? Which means size is zero?
- List append
- Postfix result
- Undo history
+ Stack empty
! Stack empty means size is zero.
? Which statement is true of Stack empty?
- Grows as needed
+ Means size is zero
- Uses len equal to zero
- Is the last item on the stack
! Stack empty means size is zero.
? Which has a fixed capacity?
- Stack peek
- Empty check
- Stack size
+ Bounded stack
! Bounded stack has a fixed capacity.
? Which statement is true of Bounded stack?
+ Has a fixed capacity
- Means size is zero
- Is the count of elements
- Implements pop
! Bounded stack has a fixed capacity.
? Which grows as needed?
- Negative index minus one
- Maze solving
+ Dynamic stack
- Python stack
! Dynamic stack grows as needed.
? Which statement is true of Dynamic stack?
- Pops two operands
- Does not change the size
+ Grows as needed
- Removes the last item
! Dynamic stack grows as needed.
? Which removes the last item?
- Maze solving
+ List pop with no argument
- Negative index minus one
- Depth first search
! List pop with no argument removes the last item.
? Which statement is true of List pop with no argument?
- Moves up on push
+ Removes the last item
- Differs in allowed operations
- Holds pending operators
! List pop with no argument removes the last item.
? Which adds to the end in O one time?
- Stack size
- Mismatched bracket
- Stack peek
+ Append
! Append adds to the end in O one time.
? Which statement is true of Append?
- Grows as needed
+ Adds to the end in O one time
- Is stored as a stack
- Is the first inserted element
! Append adds to the end in O one time.
? Which can be done with a stack?
- Stack of plates
- Python stack
- Stack versus list
+ Reversing a list
! Reversing a list can be done with a stack.
? Which statement is true of Reversing a list?
- Holds pending operators
- Fails when pop does not match
- Differs in allowed operations
+ Can be done with a stack
! Reversing a list can be done with a stack.
? Which is obtained by popping characters?
- Parenthesis checking
- Postfix result
- Abstract data type
+ Reversed string
! Reversed string is obtained by popping characters.
? Which statement is true of Reversed string?
- Does not change the size
- Is the count of elements
- Has a fixed capacity
+ Is obtained by popping characters
! Reversed string is obtained by popping characters.
? Which is stored as a stack?
- Empty check
- Stack empty
- Stack versus list
+ Undo history
! Undo history is stored as a stack.
? Which statement is true of Undo history?
+ Is stored as a stack
- Implements push
- Uses a second stack
- Can use a stack
! Undo history is stored as a stack.
? Which uses a second stack?
- Bounded stack
+ Redo
- List pop with no argument
- Stack of plates
! Redo uses a second stack.
? Which statement is true of Redo?
- Has a fixed capacity
+ Uses a second stack
- Uses backtracking with a stack
- Is usually a list
! Redo uses a second stack.
? Which uses operand stack?
+ Expression evaluation
- Reversed string
- Depth first search
- Maze solving
! Expression evaluation uses operand stack.
? Which statement is true of Expression evaluation?
- Differs in allowed operations
- Removes the last item
- Pops two operands
+ Uses operand stack
! Expression evaluation uses operand stack.
? Which goes left to right?
- Stack bottom
+ Postfix scan
- Reversed string
- List pop with no argument
! Postfix scan goes left to right.
? Which statement is true of Postfix scan?
- Moves up on push
- Fails if the stack is not empty at the end
+ Goes left to right
- Adds to the end in O one time
! Postfix scan goes left to right.
? Which pops two operands?
- Stack data structure
- Maze solving
+ Postfix operator
- Postfix result
! Postfix operator pops two operands.
? Which statement is true of Postfix operator?
- Can use a stack
- Uses backtracking with a stack
+ Pops two operands
- Uses a second stack
! Postfix operator pops two operands.
? Which is the last item on the stack?
+ Postfix result
- Stack versus list
- List pop
- Stack empty
! Postfix result is the last item on the stack.
? Which statement is true of Postfix result?
- Is abstract data type
- Is stored as a stack
+ Is the last item on the stack
- Differs in allowed operations
! Postfix result is the last item on the stack.
? Which holds pending operators?
- Python stack
+ Conversion operator stack
- Dynamic stack
- Stack pop order
! Conversion operator stack holds pending operators.
? Which statement is true of Conversion operator stack?
- Is popped first
- Is the reverse of push order
+ Holds pending operators
- Is usually a list
! Conversion operator stack holds pending operators.
? Which is popped first?
+ Higher precedence operator
- Abstract data type
- Stack data structure
- Negative index minus one
! Higher precedence operator is popped first.
? Which statement is true of Higher precedence operator?
- Fails when pop does not match
- Removes the last item
+ Is popped first
- Does not change the size
! Higher precedence operator is popped first.
? Which fails if the stack is not empty at the end?
- Postfix result
+ Parenthesis checking
- Maze solving
- Reversing a list
! Parenthesis checking fails if the stack is not empty at the end.
? Which statement is true of Parenthesis checking?
+ Fails if the stack is not empty at the end
- Is popped first
- Removes the last item
- Is usually a list
! Parenthesis checking fails if the stack is not empty at the end.
? Which fails when pop does not match?
- Bounded stack
+ Mismatched bracket
- Postfix result
- Stack pop order
! Mismatched bracket fails when pop does not match.
? Which statement is true of Mismatched bracket?
- Is the count of elements
+ Fails when pop does not match
- Adds to the end in O one time
- Gives the top element
! Mismatched bracket fails when pop does not match.
? Which can use a stack?
- Stack data structure
- Stack versus list
+ Depth first search
- Append
! Depth first search can use a stack.
? Which statement is true of Depth first search?
- Has a fixed capacity
- Fails when pop does not match
+ Can use a stack
- Is abstract data type
! Depth first search can use a stack.
? Which uses backtracking with a stack?
+ Maze solving
- Parenthesis checking
- Append
- Empty check
! Maze solving uses backtracking with a stack.
? Which statement is true of Maze solving?
+ Uses backtracking with a stack
- Can be done with a stack
- Implements push
- Is stored as a stack
! Maze solving uses backtracking with a stack.
? Which is abstract data type?
- Empty check
+ Stack data structure
- Redo
- Stack of plates
! Stack data structure is abstract data type.
? Which statement is true of Stack data structure?
+ Is abstract data type
- Pops two operands
- Has a fixed capacity
- Is a real life analogy
! Stack data structure is abstract data type.
? Which defines operations not implementation?
- Reversed string
- Postfix scan
+ Abstract data type
- Postfix operator
! Abstract data type defines operations not implementation.
? Which statement is true of Abstract data type?
- Implements push
- Is the last item on the stack
- Is the reverse of push order
+ Defines operations not implementation
! Abstract data type defines operations not implementation.
? Which differs in allowed operations?
- Stack empty
+ Stack versus list
- Maze solving
- Bounded stack
! Stack versus list differs in allowed operations.
? Which statement is true of Stack versus list?
- Pops two operands
- Gives the top element
- Is popped first
+ Differs in allowed operations
! Stack versus list differs in allowed operations.
? Which uses a stack?
- Undo feature
- Function calls
- Backtracking
+ String reversal
! String reversal uses a stack.
? Which statement is true of String reversal?
- Is pushed in conversion
- Is a real life analogy
- Is the last item on the stack
+ Uses a stack
! String reversal uses a stack.
? Which statement is true of Undo feature?
+ Uses a stack
- Places the operator after operands
- Places the operator before operands
- Reads the top without removing
! Undo feature uses a stack.
? Which statement is true of Browser back button?
- Removes the last item
+ Uses a stack
- Gives the top element
- Is the first inserted element
! Browser back button uses a stack.
? Which use the call stack?
+ Function calls
- Bracket matching
- Backtracking
- Undo feature
! Function calls use the call stack.
? Which statement is true of Function calls?
- Is a real life analogy
+ Use the call stack
- Is a linear structure with one open end
- Implements pop
! Function calls use the call stack.
? Which uses the call stack?
- Undo feature
+ Recursion
- String reversal
- Postfix evaluation
! Recursion uses the call stack.
? Which statement is true of Recursion?
- Holds pending operators
- Holds one function call data
- Has a fixed capacity
+ Uses the call stack
! Recursion uses the call stack.
? Which statement is true of Bracket matching?
+ Uses a stack
- Removes from the top
- Fails if the stack is not empty at the end
- Is pushed in conversion
! Bracket matching uses a stack.
? Which statement is true of Backtracking?
- Use the call stack
- Grows as needed
+ Uses a stack
- Holds one function call data
! Backtracking uses a stack.
? Which statement is true of Postfix evaluation?
- Puts power above multiplication
- Is abstract data type
+ Uses a stack
- Means size is zero
! Postfix evaluation uses a stack.
? Which places the operator between operands?
- Postfix of A plus B
+ Infix
- Prefix
- Opening bracket
! Infix places the operator between operands.
? Which statement is true of Infix?
+ Places the operator between operands
- Pops operators until the opening bracket
- Puts power above multiplication
- Is pushed in conversion
! Infix places the operator between operands.
? Which places the operator before operands?
+ Prefix
- Closing bracket
- Opening bracket
- Postfix of A plus B
! Prefix places the operator before operands.
? Which statement is true of Prefix?
- Puts power above multiplication
- Places the operator after operands
- Pops operators until the opening bracket
+ Places the operator before operands
! Prefix places the operator before operands.
? Which places the operator after operands?
+ Postfix
- Postfix of A plus B
- Infix
- Closing bracket
! Postfix places the operator after operands.
? Which statement is true of Postfix?
- Puts power above multiplication
+ Places the operator after operands
- Is AB plus
- Pops operators until the opening bracket
! Postfix places the operator after operands.
? Which needs no parentheses?
+ Postfix
- Opening bracket
- Operator precedence
- Multiplication
! Postfix needs no parentheses.
? Which puts power above multiplication?
- Postfix
- Infix
+ Operator precedence
- Prefix
! Operator precedence puts power above multiplication.
? Which statement is true of Operator precedence?
+ Puts power above multiplication
- Places the operator before operands
- Pops operators until the opening bracket
- Is pushed in conversion
! Operator precedence puts power above multiplication.
? Which has higher precedence than addition?
- Postfix of A plus B
+ Multiplication
- Infix
- Operator precedence
! Multiplication has higher precedence than addition.
? Which statement is true of Multiplication?
- Places the operator before operands
+ Has higher precedence than addition
- Puts power above multiplication
- Is pushed in conversion
! Multiplication has higher precedence than addition.
? Which is pushed in conversion?
- Multiplication
- Closing bracket
- Postfix
+ Opening bracket
! Opening bracket is pushed in conversion.
? Which statement is true of Opening bracket?
- Places the operator between operands
+ Is pushed in conversion
- Places the operator after operands
- Needs no parentheses
! Opening bracket is pushed in conversion.
? Which pops operators until the opening bracket?
- Multiplication
- Postfix
- Postfix of A plus B
+ Closing bracket
! Closing bracket pops operators until the opening bracket.
? Which statement is true of Closing bracket?
- Places the operator before operands
- Is AB plus
+ Pops operators until the opening bracket
- Places the operator between operands
! Closing bracket pops operators until the opening bracket.
? Which is AB plus?
- Opening bracket
- Infix
+ Postfix of A plus B
- Prefix
! Postfix of A plus B is AB plus.
? Which statement is true of Postfix of A plus B?
- Pops operators until the opening bracket
+ Is AB plus
- Needs no parentheses
- Is pushed in conversion
! Postfix of A plus B is AB plus.
? LIFO
- Queue
- Array
+ Stack
- Tree
! Structure.
? Empty pop
+ Underflow
- Overflow
- Peek
- Push
! Condition.
? Push in Python
- pop
- insert
- remove
+ append
! Method.
? Postfix of A+B
- +AB
- A+B
- BA
+ AB+
! Form.
? Call stack
- Sorting
- Searching
- Hashing
+ Recursion
! Use.
? Top element
- s[0]
- s[1]
- s[len]
+ s[-1]
! Access.
@visual
flow | Push and pop | Push item; Top moves up; Pop item; Top moves down
blocks | Applications | Undo; Brackets; Recursion; Postfix
compare | Stack and queue | Stack=LIFO~One end; Queue=FIFO~Two ends
mind | Stack | Operations; Python; Errors; Uses
steps | Postfix evaluation | Scan; Push operand; Apply operator; Result
@problems
## Moderate
P: What does LIFO mean?
A: Last In First Out: the latest inserted item is removed first.
R: 3 | Last in
R: 3 | First out
## High
P: Evaluate the postfix expression 5 3 + 2 *.
A: Push 5 and 3, + gives 8, push 2, * gives 16.
R: 2 | Push
R: 2 | Apply plus
R: 2 | Apply multiply
R: 2 | 16
## Advanced
P: Write a function to check balanced parentheses.
A: Push each opening bracket, pop on closing and compare, and the stack must be empty at the end.
R: 2 | Push
R: 2 | Pop and match
R: 2 | Empty check
R: 2 | Return
