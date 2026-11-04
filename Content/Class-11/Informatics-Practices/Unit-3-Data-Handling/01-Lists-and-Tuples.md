# Lists and Tuples
minutes: 40
yt: class 11 informatics practices lists tuples python data handling
@study
A list is an ordered, mutable collection written in square brackets, for example [1, 2, "a", 3.5]. Elements can be of different types, indexed from 0, and sliced like strings. Operations: concatenation (+), repetition (*), membership (in), len(), min(), max(), sum(), sorted() and list(). Methods: append() adds one element at the end, extend() adds many, insert(i, x) adds at a position, remove(x) deletes the first occurrence, pop() removes and returns the last (or at index), del removes by index or slice, index() finds a position, count() counts occurrences, sort() orders in place, reverse() reverses in place and clear() empties the list. Lists can be nested (a list of lists), as in a matrix. Copying with b = a gives another name for the same list; b = a.copy() or list(a) makes a separate copy. A tuple is an ordered immutable collection written in parentheses, for example (1, 2, 3); a single-element tuple needs a comma, as (5,). Tuples support indexing, slicing, concatenation, repetition, count() and index(), but not append, remove or item assignment. Tuple packing and unpacking allow a, b = b, a to swap values. Tuples are faster and safer for fixed data. Traversal uses a for loop. Common programs: finding the largest number, linear search, reversing a list, counting frequency, and computing mean and median of a list. sorted() returns a new list while sort() changes the original. A tuple can contain a mutable list, and that inner list can still change.
## Deep dive: Lists
Lists are mutable, so assignment to an index changes them. append adds a single item, even a list. extend adds each element of an iterable. pop(i) returns the removed item. Slicing creates a new list. Sorting needs comparable items.
## Deep dive: Tuples
Tuples are immutable and hashable if elements are hashable. They are used for fixed records and as dictionary keys. Tuples can be returned from functions to give many values. Concatenation makes a new tuple.
## Deep dive: Comparison and programs
Lists are for changing data; tuples for constant data. Linear search checks each element in turn. Bubble sort swaps adjacent elements. Mean is sum divided by count; median is the middle value of sorted data.
## Hindi saransh
List badli ja sakti hai (mutable), tuple nahi; dono mein indexing aur slicing hoti hai.
> Remember: a one-element tuple needs a comma, as (5,).
@formulas
## Key facts
List | [ ] | Mutable
Tuple | ( ) | Immutable
append | One item | End
extend | Many items | End
pop | Remove last | Returns

@qa
Q: Which is an ordered mutable sequence in square brackets?
A: List is an ordered mutable sequence in square brackets.
Q: What do you know about List?
A: List is an ordered mutable sequence in square brackets.
Q: Which is an ordered immutable sequence in round brackets?
A: Tuple is an ordered immutable sequence in round brackets.
Q: What do you know about Tuple?
A: Tuple is an ordered immutable sequence in round brackets.
Q: Which starts from 0 in lists and tuples?
A: Index starts from 0 in lists and tuples.
Q: What do you know about Index?
A: Index starts from 0 in lists and tuples.
Q: Which gives a part of a list or tuple?
A: Slicing gives a part of a list or tuple.
Q: What do you know about Slicing?
A: Slicing gives a part of a list or tuple.
Q: Which is a list that contains lists?
A: Nested list is a list that contains lists.
Q: What do you know about Nested list?
A: Nested list is a list that contains lists.
Q: Which adds one element at the end of a list?
A: append adds one element at the end of a list.
Q: What do you know about append?
A: Append adds one element at the end of a list.
Q: Which adds all elements of an iterable to a list?
A: extend adds all elements of an iterable to a list.
Q: What do you know about extend?
A: Extend adds all elements of an iterable to a list.
Q: Which adds an element at a given position?
A: insert adds an element at a given position.
Q: What do you know about insert?
A: Insert adds an element at a given position.
Q: Which deletes the first occurrence of a value?
A: remove deletes the first occurrence of a value.
Q: What do you know about remove?
A: Remove deletes the first occurrence of a value.
Q: Which removes and returns an element?
A: pop removes and returns an element.
Q: What do you know about pop?
A: Pop removes and returns an element.
Q: Which deletes by index or slice?
A: del statement deletes by index or slice.
Q: What do you know about del statement?
A: Del statement deletes by index or slice.
Q: Which returns the position of a value?
A: index method returns the position of a value.
Q: What do you know about index method?
A: Index method returns the position of a value.
Q: Which returns the number of occurrences?
A: count method returns the number of occurrences.
Q: What do you know about count method?
A: Count method returns the number of occurrences.
Q: Which orders the list in place?
A: sort method orders the list in place.
Q: What do you know about sort method?
A: Sort method orders the list in place.
Q: Which returns a new sorted list?
A: sorted function returns a new sorted list.
Q: What do you know about sorted function?
A: Sorted function returns a new sorted list.
Q: Which reverses the list in place?
A: reverse method reverses the list in place.
Q: What do you know about reverse method?
A: Reverse method reverses the list in place.
Q: Which empties the list?
A: clear method empties the list.
Q: What do you know about clear method?
A: Clear method empties the list.
Q: Which makes a separate copy of a list?
A: copy method makes a separate copy of a list.
Q: What do you know about copy method?
A: Copy method makes a separate copy of a list.
Q: Which gives the number of elements?
A: len function gives the number of elements.
Q: What do you know about len function?
A: Len function gives the number of elements.
Q: Which gives the smallest element?
A: min function gives the smallest element.
Q: What do you know about min function?
A: Min function gives the smallest element.
Q: Which gives the largest element?
A: max function gives the largest element.
Q: What do you know about max function?
A: Max function gives the largest element.
Q: Which adds the numbers in a list?
A: sum function adds the numbers in a list.
Q: What do you know about sum function?
A: Sum function adds the numbers in a list.
Q: Which converts a sequence to a list?
A: list function converts a sequence to a list.
Q: What do you know about list function?
A: List function converts a sequence to a list.
Q: Which means two names refer to the same list?
A: Aliasing means two names refer to the same list.
Q: What do you know about Aliasing?
A: Aliasing means two names refer to the same list.
Q: Which joins lists with plus?
A: Concatenation joins lists with plus.
Q: What do you know about Concatenation?
A: Concatenation joins lists with plus.
Q: Which repeats a list with star?
A: Repetition repeats a list with star.
Q: What do you know about Repetition?
A: Repetition repeats a list with star.
Q: Which is tested with in?
A: Membership is tested with in.
Q: What do you know about Membership?
A: Membership is tested with in.
Q: Which is visiting each element using a loop?
A: Traversal is visiting each element using a loop.
Q: What do you know about Traversal?
A: Traversal is visiting each element using a loop.
Q: Which can be represented as a list of lists?
A: Matrix can be represented as a list of lists.
Q: What do you know about Matrix?
A: Matrix can be represented as a list of lists.
Q: Which needs a trailing comma?
A: Single-element tuple needs a trailing comma.
Q: What do you know about Single-element tuple?
A: Single-element tuple needs a trailing comma.
Q: Which puts values into a tuple?
A: Tuple packing puts values into a tuple.
Q: What do you know about Tuple packing?
A: Tuple packing puts values into a tuple.
Q: Which assigns tuple items to variables?
A: Tuple unpacking assigns tuple items to variables.
Q: What do you know about Tuple unpacking?
A: Tuple unpacking assigns tuple items to variables.
Q: Which means tuple items cannot be changed?
A: Immutable means tuple items cannot be changed.
Q: What do you know about Immutable?
A: Immutable means tuple items cannot be changed.
Q: What do you know about Tuple count?
A: Tuple count returns the number of occurrences.
Q: What do you know about Tuple index?
A: Tuple index returns the position of a value.
Q: Which allows a, b = b, a?
A: Tuple assignment allows a, b = b, a.
Q: What do you know about Tuple assignment?
A: Tuple assignment allows a, b = b, a.
Q: Which makes a new tuple?
A: Tuple concatenation makes a new tuple.
Q: What do you know about Tuple concatenation?
A: Tuple concatenation makes a new tuple.
Q: Which is that it is faster and safer?
A: Tuple advantage is that it is faster and safer.
Q: What do you know about Tuple advantage?
A: Tuple advantage is that it is faster and safer.
Q: Which can be built with a list using append and pop?
A: Stack can be built with a list using append and pop.
Q: What do you know about Stack?
A: Stack can be built with a list using append and pop.
Q: Which can be built with a list using append and pop at index 0?
A: Queue can be built with a list using append and pop at index 0.
Q: What do you know about Queue?
A: Queue can be built with a list using append and pop at index 0.
Q: Which builds a list in one line?
A: List comprehension builds a list in one line.
Q: What do you know about List comprehension?
A: List comprehension builds a list in one line.
Q: Which protects fixed data from change?
A: Tuple immutability protects fixed data from change.
Q: What do you know about Tuple immutability?
A: Tuple immutability protects fixed data from change.
Q: Which is written as two square brackets?
A: Empty list is written as two square brackets.
Q: What do you know about Empty list?
A: Empty list is written as two square brackets.
Q: Which is written as two round brackets?
A: Empty tuple is written as two round brackets.
Q: What do you know about Empty tuple?
A: Empty tuple is written as two round brackets.
Q: Which stores rows of a table?
A: List of lists stores rows of a table.
Q: What do you know about List of lists?
A: List of lists stores rows of a table.
Q: Which is the third value in a slice?
A: Slice step is the third value in a slice.
Q: What do you know about Slice step?
A: Slice step is the third value in a slice.
Q: Which checks if a value is present in a list?
A: In operator checks if a value is present in a list.
Q: What do you know about In operator?
A: In operator checks if a value is present in a list.
Q: Which can be used as a dictionary key?
A: Tuple as key can be used as a dictionary key.
Q: What do you know about Tuple as key?
A: Tuple as key can be used as a dictionary key.
Q: Which a function can return a tuple?
A: Return many values a function can return a tuple.
Q: What do you know about Return many values?
A: Return many values a function can return a tuple.
Q: Which converts a sequence to a tuple?
A: tuple function converts a sequence to a tuple.
Q: What do you know about tuple function?
A: Tuple function converts a sequence to a tuple.
Q: Which checks each element in turn?
A: Linear search checks each element in turn.
Q: What do you know about Linear search?
A: Linear search checks each element in turn.
Q: Which swaps adjacent elements?
A: Bubble sort swaps adjacent elements.
Q: What do you know about Bubble sort?
A: Bubble sort swaps adjacent elements.
Q: Which is the sum divided by the number of items?
A: Mean is the sum divided by the number of items.
Q: What do you know about Mean?
A: Mean is the sum divided by the number of items.
Q: Which is the middle value of sorted data?
A: Median is the middle value of sorted data.
Q: What do you know about Median?
A: Median is the middle value of sorted data.
Q: Which brackets does a list use?
A: Square brackets.
Q: Which brackets does a tuple use?
A: Round brackets.
Q: Can a tuple be changed?
A: No, it is immutable.
Q: What does append do?
A: Adds one element at the end.
Q: What does pop do?
A: Removes and returns an element.
Q: How is a one-element tuple written?
A: With a trailing comma, as (5,).
Q: What does sort do?
A: Orders the list in place.
Q: What is the index of the first element?
A: 0.
@quiz
? Which is an ordered mutable sequence in square brackets?
- count method
+ List
- Concatenation
- clear method
! List is an ordered mutable sequence in square brackets.
? Which statement is true of List?
+ Is an ordered mutable sequence in square brackets
- Is visiting each element using a loop
- Removes and returns an element
- Reverses the list in place
! List is an ordered mutable sequence in square brackets.
? Which is an ordered immutable sequence in round brackets?
+ Tuple
- Concatenation
- Matrix
- Aliasing
! Tuple is an ordered immutable sequence in round brackets.
? Which statement is true of Tuple?
- Deletes the first occurrence of a value
- Adds one element at the end of a list
- Gives a part of a list or tuple
+ Is an ordered immutable sequence in round brackets
! Tuple is an ordered immutable sequence in round brackets.
? Which starts from 0 in lists and tuples?
- max function
- reverse method
+ Index
- clear method
! Index starts from 0 in lists and tuples.
? Which statement is true of Index?
- Adds all elements of an iterable to a list
+ Starts from 0 in lists and tuples
- Gives the largest element
- Is visiting each element using a loop
! Index starts from 0 in lists and tuples.
? Which gives a part of a list or tuple?
- Concatenation
- reverse method
+ Slicing
- len function
! Slicing gives a part of a list or tuple.
? Which statement is true of Slicing?
- Repeats a list with star
+ Gives a part of a list or tuple
- Deletes by index or slice
- Gives the smallest element
! Slicing gives a part of a list or tuple.
? Which is a list that contains lists?
- copy method
- len function
+ Nested list
- Index
! Nested list is a list that contains lists.
? Which statement is true of Nested list?
- Is visiting each element using a loop
- Empties the list
+ Is a list that contains lists
- Converts a sequence to a list
! Nested list is a list that contains lists.
? Which adds one element at the end of a list?
- List
- remove
- clear method
+ append
! Append adds one element at the end of a list.
? Which statement is true of append?
- Reverses the list in place
+ Adds one element at the end of a list
- Returns the number of occurrences
- Gives the smallest element
! Append adds one element at the end of a list.
? Which adds all elements of an iterable to a list?
+ extend
- remove
- Concatenation
- insert
! Extend adds all elements of an iterable to a list.
? Which statement is true of extend?
- Returns the number of occurrences
- Joins lists with plus
- Is an ordered mutable sequence in square brackets
+ Adds all elements of an iterable to a list
! Extend adds all elements of an iterable to a list.
? Which adds an element at a given position?
+ insert
- Slicing
- Aliasing
- count method
! Insert adds an element at a given position.
? Which statement is true of insert?
- Returns the position of a value
- Starts from 0 in lists and tuples
+ Adds an element at a given position
- Gives the number of elements
! Insert adds an element at a given position.
? Which deletes the first occurrence of a value?
+ remove
- reverse method
- Repetition
- list function
! Remove deletes the first occurrence of a value.
? Which statement is true of remove?
+ Deletes the first occurrence of a value
- Removes and returns an element
- Is an ordered immutable sequence in round brackets
- Adds one element at the end of a list
! Remove deletes the first occurrence of a value.
? Which removes and returns an element?
- Concatenation
+ pop
- len function
- Aliasing
! Pop removes and returns an element.
? Which statement is true of pop?
- Reverses the list in place
- Returns the position of a value
- Returns the number of occurrences
+ Removes and returns an element
! Pop removes and returns an element.
? Which deletes by index or slice?
+ del statement
- sum function
- copy method
- Nested list
! Del statement deletes by index or slice.
? Which statement is true of del statement?
+ Deletes by index or slice
- Makes a separate copy of a list
- Reverses the list in place
- Empties the list
! Del statement deletes by index or slice.
? Which returns the position of a value?
- Slicing
- Repetition
+ index method
- pop
! Index method returns the position of a value.
? Which statement is true of index method?
- Is an ordered immutable sequence in round brackets
+ Returns the position of a value
- Adds one element at the end of a list
- Is a list that contains lists
! Index method returns the position of a value.
? Which returns the number of occurrences?
- reverse method
- sort method
- min function
+ count method
! Count method returns the number of occurrences.
? Which statement is true of count method?
- Is an ordered immutable sequence in round brackets
- Adds an element at a given position
- Converts a sequence to a list
+ Returns the number of occurrences
! Count method returns the number of occurrences.
? Which orders the list in place?
- sum function
- Nested list
+ sort method
- reverse method
! Sort method orders the list in place.
? Which statement is true of sort method?
- Makes a separate copy of a list
- Adds all elements of an iterable to a list
- Gives the largest element
+ Orders the list in place
! Sort method orders the list in place.
? Which returns a new sorted list?
- List
- Repetition
+ sorted function
- count method
! Sorted function returns a new sorted list.
? Which statement is true of sorted function?
- Converts a sequence to a list
+ Returns a new sorted list
- Gives the largest element
- Is visiting each element using a loop
! Sorted function returns a new sorted list.
? Which reverses the list in place?
+ reverse method
- del statement
- min function
- list function
! Reverse method reverses the list in place.
? Which statement is true of reverse method?
- Returns a new sorted list
+ Reverses the list in place
- Removes and returns an element
- Gives the largest element
! Reverse method reverses the list in place.
? Which empties the list?
+ clear method
- del statement
- append
- Matrix
! Clear method empties the list.
? Which statement is true of clear method?
+ Empties the list
- Is an ordered immutable sequence in round brackets
- Removes and returns an element
- Adds one element at the end of a list
! Clear method empties the list.
? Which makes a separate copy of a list?
+ copy method
- Membership
- Matrix
- insert
! Copy method makes a separate copy of a list.
? Which statement is true of copy method?
- Adds one element at the end of a list
- Returns the number of occurrences
+ Makes a separate copy of a list
- Repeats a list with star
! Copy method makes a separate copy of a list.
? Which gives the number of elements?
- pop
- remove
- clear method
+ len function
! Len function gives the number of elements.
? Which statement is true of len function?
+ Gives the number of elements
- Gives a part of a list or tuple
- Empties the list
- Can be represented as a list of lists
! Len function gives the number of elements.
? Which gives the smallest element?
- Index
+ min function
- max function
- Tuple
! Min function gives the smallest element.
? Which statement is true of min function?
- Gives the number of elements
- Is visiting each element using a loop
- Adds an element at a given position
+ Gives the smallest element
! Min function gives the smallest element.
? Which gives the largest element?
+ max function
- Tuple
- Aliasing
- sorted function
! Max function gives the largest element.
? Which statement is true of max function?
+ Gives the largest element
- Deletes the first occurrence of a value
- Adds one element at the end of a list
- Empties the list
! Max function gives the largest element.
? Which adds the numbers in a list?
+ sum function
- list function
- min function
- sort method
! Sum function adds the numbers in a list.
? Which statement is true of sum function?
- Gives the smallest element
+ Adds the numbers in a list
- Reverses the list in place
- Starts from 0 in lists and tuples
! Sum function adds the numbers in a list.
? Which converts a sequence to a list?
+ list function
- extend
- List
- copy method
! List function converts a sequence to a list.
? Which statement is true of list function?
- Is visiting each element using a loop
- Adds the numbers in a list
- Is an ordered immutable sequence in round brackets
+ Converts a sequence to a list
! List function converts a sequence to a list.
? Which means two names refer to the same list?
- List
- append
+ Aliasing
- pop
! Aliasing means two names refer to the same list.
? Which statement is true of Aliasing?
- Gives the largest element
- Empties the list
- Adds one element at the end of a list
+ Means two names refer to the same list
! Aliasing means two names refer to the same list.
? Which joins lists with plus?
- len function
- index method
- Nested list
+ Concatenation
! Concatenation joins lists with plus.
? Which statement is true of Concatenation?
+ Joins lists with plus
- Returns a new sorted list
- Adds all elements of an iterable to a list
- Repeats a list with star
! Concatenation joins lists with plus.
? Which repeats a list with star?
- copy method
- Nested list
+ Repetition
- sorted function
! Repetition repeats a list with star.
? Which statement is true of Repetition?
- Removes and returns an element
- Is visiting each element using a loop
+ Repeats a list with star
- Means two names refer to the same list
! Repetition repeats a list with star.
? Which is tested with in?
+ Membership
- Tuple
- append
- index method
! Membership is tested with in.
? Which statement is true of Membership?
- Gives the number of elements
- Makes a separate copy of a list
+ Is tested with in
- Is a list that contains lists
! Membership is tested with in.
? Which is visiting each element using a loop?
+ Traversal
- Index
- sort method
- Tuple
! Traversal is visiting each element using a loop.
? Which statement is true of Traversal?
- Is a list that contains lists
- Orders the list in place
- Deletes the first occurrence of a value
+ Is visiting each element using a loop
! Traversal is visiting each element using a loop.
? Which can be represented as a list of lists?
+ Matrix
- Concatenation
- reverse method
- count method
! Matrix can be represented as a list of lists.
? Which statement is true of Matrix?
- Removes and returns an element
+ Can be represented as a list of lists
- Repeats a list with star
- Means two names refer to the same list
! Matrix can be represented as a list of lists.
? Which needs a trailing comma?
- List of lists
+ Single-element tuple
- Mean
- Tuple advantage
! Single-element tuple needs a trailing comma.
? Which statement is true of Single-element tuple?
- Is that it is faster and safer
- Swaps adjacent elements
- Is the sum divided by the number of items
+ Needs a trailing comma
! Single-element tuple needs a trailing comma.
? Which puts values into a tuple?
- Median
- Tuple count
- Tuple index
+ Tuple packing
! Tuple packing puts values into a tuple.
? Which statement is true of Tuple packing?
+ Puts values into a tuple
- Can be built with a list using append and pop at index 0
- Checks if a value is present in a list
- Builds a list in one line
! Tuple packing puts values into a tuple.
? Which assigns tuple items to variables?
- Median
- Bubble sort
+ Tuple unpacking
- Single-element tuple
! Tuple unpacking assigns tuple items to variables.
? Which statement is true of Tuple unpacking?
- Returns the number of occurrences
- Swaps adjacent elements
+ Assigns tuple items to variables
- Can be built with a list using append and pop
! Tuple unpacking assigns tuple items to variables.
? Which means tuple items cannot be changed?
+ Immutable
- In operator
- Bubble sort
- Empty tuple
! Immutable means tuple items cannot be changed.
? Which statement is true of Immutable?
- Converts a sequence to a tuple
- Is written as two square brackets
- Assigns tuple items to variables
+ Means tuple items cannot be changed
! Immutable means tuple items cannot be changed.
? Which statement is true of Tuple count?
+ Returns the number of occurrences
- Is the sum divided by the number of items
- A function can return a tuple
- Can be built with a list using append and pop at index 0
! Tuple count returns the number of occurrences.
? Which statement is true of Tuple index?
- Can be built with a list using append and pop
- Is the sum divided by the number of items
+ Returns the position of a value
- Is that it is faster and safer
! Tuple index returns the position of a value.
? Which allows a, b = b, a?
- Empty tuple
- Single-element tuple
+ Tuple assignment
- Queue
! Tuple assignment allows a, b = b, a.
? Which statement is true of Tuple assignment?
- Converts a sequence to a tuple
- Can be built with a list using append and pop at index 0
+ Allows a, b = b, a
- Checks each element in turn
! Tuple assignment allows a, b = b, a.
? Which makes a new tuple?
+ Tuple concatenation
- Stack
- tuple function
- Linear search
! Tuple concatenation makes a new tuple.
? Which statement is true of Tuple concatenation?
- Returns the position of a value
- Can be built with a list using append and pop
- Is written as two round brackets
+ Makes a new tuple
! Tuple concatenation makes a new tuple.
? Which is that it is faster and safer?
- Mean
+ Tuple advantage
- Median
- tuple function
! Tuple advantage is that it is faster and safer.
? Which statement is true of Tuple advantage?
- Is the third value in a slice
- Builds a list in one line
+ Is that it is faster and safer
- A function can return a tuple
! Tuple advantage is that it is faster and safer.
? Which can be built with a list using append and pop?
- Mean
+ Stack
- Tuple assignment
- List of lists
! Stack can be built with a list using append and pop.
? Which statement is true of Stack?
+ Can be built with a list using append and pop
- Assigns tuple items to variables
- Needs a trailing comma
- Means tuple items cannot be changed
! Stack can be built with a list using append and pop.
? Which can be built with a list using append and pop at index 0?
- Tuple assignment
+ Queue
- Immutable
- Tuple index
! Queue can be built with a list using append and pop at index 0.
? Which statement is true of Queue?
- Is the third value in a slice
- Can be used as a dictionary key
- Protects fixed data from change
+ Can be built with a list using append and pop at index 0
! Queue can be built with a list using append and pop at index 0.
? Which builds a list in one line?
- Bubble sort
+ List comprehension
- In operator
- Tuple unpacking
! List comprehension builds a list in one line.
? Which statement is true of List comprehension?
- Swaps adjacent elements
- Makes a new tuple
+ Builds a list in one line
- Means tuple items cannot be changed
! List comprehension builds a list in one line.
? Which protects fixed data from change?
- Queue
+ Tuple immutability
- tuple function
- Single-element tuple
! Tuple immutability protects fixed data from change.
? Which statement is true of Tuple immutability?
- Returns the position of a value
- A function can return a tuple
+ Protects fixed data from change
- Checks if a value is present in a list
! Tuple immutability protects fixed data from change.
? Which is written as two square brackets?
- Single-element tuple
+ Empty list
- Tuple assignment
- Linear search
! Empty list is written as two square brackets.
? Which statement is true of Empty list?
- Can be built with a list using append and pop
- Returns the position of a value
+ Is written as two square brackets
- Checks if a value is present in a list
! Empty list is written as two square brackets.
? Which is written as two round brackets?
+ Empty tuple
- tuple function
- Tuple immutability
- Tuple concatenation
! Empty tuple is written as two round brackets.
? Which statement is true of Empty tuple?
- Converts a sequence to a tuple
- Builds a list in one line
- Returns the position of a value
+ Is written as two round brackets
! Empty tuple is written as two round brackets.
? Which stores rows of a table?
+ List of lists
- Tuple packing
- Tuple advantage
- Bubble sort
! List of lists stores rows of a table.
? Which statement is true of List of lists?
- Returns the position of a value
- Means tuple items cannot be changed
- Is that it is faster and safer
+ Stores rows of a table
! List of lists stores rows of a table.
? Which is the third value in a slice?
- Tuple index
+ Slice step
- Stack
- Tuple packing
! Slice step is the third value in a slice.
? Which statement is true of Slice step?
- Is that it is faster and safer
- Protects fixed data from change
- Can be built with a list using append and pop at index 0
+ Is the third value in a slice
! Slice step is the third value in a slice.
? Which checks if a value is present in a list?
+ In operator
- Return many values
- Stack
- Mean
! In operator checks if a value is present in a list.
? Which statement is true of In operator?
+ Checks if a value is present in a list
- Is written as two round brackets
- Assigns tuple items to variables
- Can be used as a dictionary key
! In operator checks if a value is present in a list.
? Which can be used as a dictionary key?
+ Tuple as key
- Empty tuple
- Median
- List comprehension
! Tuple as key can be used as a dictionary key.
? Which statement is true of Tuple as key?
- Can be built with a list using append and pop
+ Can be used as a dictionary key
- Is written as two round brackets
- Checks if a value is present in a list
! Tuple as key can be used as a dictionary key.
? Which a function can return a tuple?
- Empty tuple
- Single-element tuple
- Tuple assignment
+ Return many values
! Return many values a function can return a tuple.
? Which statement is true of Return many values?
- Makes a new tuple
+ A function can return a tuple
- Is the middle value of sorted data
- Can be built with a list using append and pop
! Return many values a function can return a tuple.
? Which converts a sequence to a tuple?
- Median
- Return many values
+ tuple function
- List of lists
! Tuple function converts a sequence to a tuple.
? Which statement is true of tuple function?
+ Converts a sequence to a tuple
- Puts values into a tuple
- Can be built with a list using append and pop at index 0
- Swaps adjacent elements
! Tuple function converts a sequence to a tuple.
? Which checks each element in turn?
- Median
- Return many values
+ Linear search
- Empty tuple
! Linear search checks each element in turn.
? Which statement is true of Linear search?
- Returns the position of a value
- Is written as two square brackets
+ Checks each element in turn
- Is the sum divided by the number of items
! Linear search checks each element in turn.
? Which swaps adjacent elements?
- Median
+ Bubble sort
- Tuple packing
- Immutable
! Bubble sort swaps adjacent elements.
? Which statement is true of Bubble sort?
- Allows a, b = b, a
- Returns the number of occurrences
+ Swaps adjacent elements
- Is that it is faster and safer
! Bubble sort swaps adjacent elements.
? Which is the sum divided by the number of items?
- List comprehension
- Tuple advantage
+ Mean
- Single-element tuple
! Mean is the sum divided by the number of items.
? Which statement is true of Mean?
- Protects fixed data from change
- Returns the number of occurrences
+ Is the sum divided by the number of items
- A function can return a tuple
! Mean is the sum divided by the number of items.
? Which is the middle value of sorted data?
- Tuple as key
- Linear search
- Slice step
+ Median
! Median is the middle value of sorted data.
? Which statement is true of Median?
- Is the third value in a slice
- Can be used as a dictionary key
- Assigns tuple items to variables
+ Is the middle value of sorted data
! Median is the middle value of sorted data.
? List is
- Immutable
- Fixed
- Constant
+ Mutable
! Changeable.
? Tuple brackets
+ ( )
- [ ]
- { }
- < >
! Round.
? append adds
- Many
- None
- Keys
+ One element
! End.
? sorted() returns
- None
- Tuple
+ New list
- Set
! Copy.
? (5,) is a
- Integer
- List
+ Tuple
- Dict
! Comma.
? pop() returns
- None
+ Removed item
- Index
- List
! Last.
@visual
compare | List and tuple | List=Mutable~Square brackets; Tuple=Immutable~Round brackets
flow | Linear search | Start; Compare each; Found; Report
blocks | List methods | append; insert; remove; pop
mind | Sequences | List; Tuple; Methods; Programs
steps | Swap values | Pack; Unpack; Assign; Check
@problems
## Moderate
P: What is the output of [1,2,3] + [4]?
A: [1, 2, 3, 4].
R: 3 | Concatenate
R: 3 | Result
## High
P: Write a program to find the largest element in a list.
A: Take the first as max and compare with each other element, updating when larger.
R: 2 | Initialise
R: 2 | Loop
R: 2 | Compare
R: 2 | Print
## Advanced
P: Differentiate between append and extend with examples.
A: append([1]) adds one element; extend adds each element of the iterable.
R: 2 | Append
R: 2 | Extend
R: 2 | Example
R: 2 | Difference
