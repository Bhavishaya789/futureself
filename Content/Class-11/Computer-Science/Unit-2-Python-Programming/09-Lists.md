# Lists
minutes: 40
yt: class 11 computer science python lists methods sorting
@study
A list is an ordered, mutable sequence of items in square brackets; items can be of different types. Indexing and slicing as in strings. Operations: concatenation, repetition, membership, comparison. Functions: len, max, min, sum, sorted, list(). Methods: append, extend, insert, remove, pop, clear, index, count, reverse, sort, copy. del statement. Nested lists. Traversal with for. Difference between sort (in place) and sorted (new list). Aliasing versus copy. Programs: sum, maximum, linear search, bubble sort, count even numbers, remove duplicates, merge lists, list comprehension.
## Deep dive: Basics
L = [10, 20, 30, 40]: L[0] = 10, L[-1] = 40, L[1:3] = [20, 30]. Mutable: L[1] = 25. Creating lists: list("abc") gives [a, b, c]; list(range(5)). Concatenation [1,2] + [3]; repetition [0] * 3 = [0,0,0]. Nested list matrix M[1][2].
## Deep dive: Methods
append(x) adds at the end; extend(iterable) adds many; insert(i, x) adds at a position; remove(x) deletes the first occurrence; pop(i) removes and returns the item (last by default); clear(); index(x); count(x); reverse(); sort() sorts in place (reverse=True for descending); sorted(L) returns a new list; copy() makes a shallow copy; del L[i]. Aliasing: M = L refers to the same list; M = L.copy() or L[:] creates a copy.
## Deep dive: Programs
Sum: total = 0; for x in L: total += x. Maximum without max(). Linear search. Bubble sort with nested loops and swap L[j], L[j+1] = L[j+1], L[j]. Remove duplicates by checking membership. Count even numbers. Reverse list. Merge sorted lists. List comprehension: [x*x for x in range(1, 6)]. Statistics: mean, median.
## Hindi saransh
Soochi (list) kramit aur parivartaniya hoti hai. append, extend, insert, remove, pop, sort. Copy aur alias mein antar.
> sort() changes the list in place and returns None, while sorted() returns a new list.
@formulas
## Methods
append | Add at end | L.append(5)
insert | Add at index | L.insert(0, 5)
remove | Delete value | L.remove(5)
pop | Delete index | L.pop()
sort | In place | L.sort()
reverse | Reverse | L.reverse()
## Slicing
L[1:3] | Items 1 and 2 | Stop excluded
L[::-1] | Reverse | Step -1

@qa
Q: Which an ordered mutable sequence?
A: List an ordered mutable sequence.
Q: What do you know about List?
A: List an ordered mutable sequence.
Q: Which an item of a list?
A: Element an item of a list.
Q: What do you know about Element?
A: Element an item of a list.
Q: Which the position of an element?
A: Index the position of an element.
Q: What do you know about Index?
A: Index the position of an element.
Q: Which a part of a list?
A: Slice a part of a list.
Q: What do you know about Slice?
A: Slice a part of a list.
Q: Which able to change in place?
A: Mutable able to change in place.
Q: What do you know about Mutable?
A: Mutable able to change in place.
Q: Which a list containing lists?
A: Nested list a list containing lists.
Q: What do you know about Nested list?
A: Nested list a list containing lists.
Q: Which adds an element at the end?
A: append() adds an element at the end.
Q: What do you know about append()?
A: Append() adds an element at the end.
Q: Which adds all elements of an iterable?
A: extend() adds all elements of an iterable.
Q: What do you know about extend()?
A: Extend() adds all elements of an iterable.
Q: Which adds an element at a position?
A: insert() adds an element at a position.
Q: What do you know about insert()?
A: Insert() adds an element at a position.
Q: Which deletes the first occurrence of a value?
A: remove() deletes the first occurrence of a value.
Q: What do you know about remove()?
A: Remove() deletes the first occurrence of a value.
Q: Which removes and returns an element?
A: pop() removes and returns an element.
Q: What do you know about pop()?
A: Pop() removes and returns an element.
Q: Which removes all elements?
A: clear() removes all elements.
Q: What do you know about clear()?
A: Clear() removes all elements.
Q: Which returns the position of a value?
A: index() returns the position of a value.
Q: What do you know about index()?
A: Index() returns the position of a value.
Q: Which counts occurrences of a value?
A: count() counts occurrences of a value.
Q: What do you know about count()?
A: Count() counts occurrences of a value.
Q: Which reverses the list in place?
A: reverse() reverses the list in place.
Q: What do you know about reverse()?
A: Reverse() reverses the list in place.
Q: Which sorts the list in place?
A: sort() sorts the list in place.
Q: What do you know about sort()?
A: Sort() sorts the list in place.
Q: Which returns a sorted new list?
A: sorted() returns a sorted new list.
Q: What do you know about sorted()?
A: Sorted() returns a sorted new list.
Q: Which creates a shallow copy?
A: copy() creates a shallow copy.
Q: What do you know about copy()?
A: Copy() creates a shallow copy.
Q: Which the statement deleting an element or slice?
A: del the statement deleting an element or slice.
Q: What do you know about del?
A: Del the statement deleting an element or slice.
Q: Which the function giving the number of elements?
A: len() the function giving the number of elements.
Q: What do you know about len()?
A: Len() the function giving the number of elements.
Q: Which the function giving the largest element?
A: max() the function giving the largest element.
Q: What do you know about max()?
A: Max() the function giving the largest element.
Q: Which the function giving the smallest element?
A: min() the function giving the smallest element.
Q: What do you know about min()?
A: Min() the function giving the smallest element.
Q: Which the function adding all elements?
A: sum() the function adding all elements.
Q: What do you know about sum()?
A: Sum() the function adding all elements.
Q: Which the function creating a list?
A: list() the function creating a list.
Q: What do you know about list()?
A: List() the function creating a list.
Q: Which the function producing a sequence of integers?
A: range() the function producing a sequence of integers.
Q: What do you know about range()?
A: Range() the function producing a sequence of integers.
Q: Which joining two lists with plus?
A: Concatenation joining two lists with plus.
Q: What do you know about Concatenation?
A: Concatenation joining two lists with plus.
Q: Which repeating a list with star?
A: Repetition repeating a list with star.
Q: What do you know about Repetition?
A: Repetition repeating a list with star.
Q: Which testing with in?
A: Membership testing with in.
Q: What do you know about Membership?
A: Membership testing with in.
Q: Which visiting each element?
A: Traversal visiting each element.
Q: What do you know about Traversal?
A: Traversal visiting each element.
Q: Which two names referring to the same list?
A: Aliasing two names referring to the same list.
Q: What do you know about Aliasing?
A: Aliasing two names referring to the same list.
Q: Which a copy sharing nested objects?
A: Shallow copy a copy sharing nested objects.
Q: What do you know about Shallow copy?
A: Shallow copy a copy sharing nested objects.
Q: Which checking elements one by one?
A: Linear search checking elements one by one.
Q: What do you know about Linear search?
A: Linear search checking elements one by one.
Q: Which sorting by swapping adjacent elements?
A: Bubble sort sorting by swapping adjacent elements.
Q: What do you know about Bubble sort?
A: Bubble sort sorting by swapping adjacent elements.
Q: Which exchanging two values?
A: Swap exchanging two values.
Q: What do you know about Swap?
A: Swap exchanging two values.
Q: Which repeated elements?
A: Duplicates repeated elements.
Q: What do you know about Duplicates?
A: Duplicates repeated elements.
Q: Which a compact way to create lists?
A: List comprehension a compact way to create lists.
Q: What do you know about List comprehension?
A: List comprehension a compact way to create lists.
Q: Which a list of lists?
A: Matrix a list of lists.
Q: What do you know about Matrix?
A: Matrix a list of lists.
Q: Which the average of values?
A: Mean the average of values.
Q: What do you know about Mean?
A: Mean the average of values.
Q: Which the middle value of sorted data?
A: Median the middle value of sorted data.
Q: What do you know about Median?
A: Median the middle value of sorted data.
Q: Which the most frequent value?
A: Mode the most frequent value.
Q: What do you know about Mode?
A: Mode the most frequent value.
Q: Which largest to smallest?
A: Descending order largest to smallest.
Q: What do you know about Descending order?
A: Descending order largest to smallest.
Q: Which smallest to largest?
A: Ascending order smallest to largest.
Q: What do you know about Ascending order?
A: Ascending order smallest to largest.
Q: Which the error for an invalid index?
A: IndexError the error for an invalid index.
Q: What do you know about IndexError?
A: IndexError the error for an invalid index.
Q: Which the error for removing a missing value?
A: ValueError the error for removing a missing value.
Q: What do you know about ValueError?
A: ValueError the error for removing a missing value.
Q: Which a variable collecting a total?
A: Accumulator a variable collecting a total.
Q: What do you know about Accumulator?
A: Accumulator a variable collecting a total.
Q: Which a list with no elements?
A: Empty list a list with no elements.
Q: What do you know about Empty list?
A: Empty list a list with no elements.
Q: Which an object that can be looped over?
A: Iterable an object that can be looped over.
Q: What do you know about Iterable?
A: Iterable an object that can be looped over.
Q: Which a last-in first-out structure using append and pop?
A: Stack a last-in first-out structure using append and pop.
Q: What do you know about Stack?
A: Stack a last-in first-out structure using append and pop.
Q: Which a first-in first-out structure?
A: Queue a first-in first-out structure.
Q: What do you know about Queue?
A: Queue a first-in first-out structure.
Q: Which containing different data types?
A: Heterogeneous containing different data types.
Q: What do you know about Heterogeneous?
A: Heterogeneous containing different data types.
Q: Which assigning elements to variables?
A: Unpacking assigning elements to variables.
Q: What do you know about Unpacking?
A: Unpacking assigning elements to variables.
Q: Are lists mutable?
A: Yes, they can be changed in place.
Q: What does append do?
A: Adds one element at the end.
Q: What is the difference between append and extend?
A: append adds one item; extend adds each item of an iterable.
Q: What does pop do without argument?
A: Removes and returns the last element.
Q: What does remove do?
A: Deletes the first matching value.
Q: What happens when remove cannot find the value?
A: ValueError.
Q: What is the difference between sort and sorted?
A: sort changes the list; sorted returns a new list.
Q: What is the output of [1, 2] * 2?
A: [1, 2, 1, 2].
Q: What is aliasing?
A: Two names referring to the same list.
Q: How do you copy a list?
A: L.copy() or L[:].
Q: What does L[: : -1] do?
A: Gives a reversed copy.
Q: How do you access an element of a nested list?
A: M[i][j].
Q: What does del L[0] do?
A: Deletes the first element.
Q: What does index return?
A: The position of the first occurrence.
Q: How do you find the largest element manually?
A: Compare each element in a loop.
Q: How does bubble sort work?
A: It swaps adjacent elements that are out of order, repeatedly.
Q: What is list comprehension?
A: A short syntax to build lists.
@quiz
? Which an ordered mutable sequence?
- copy()
+ List
- Traversal
- Matrix
! List an ordered mutable sequence.
? Which statement is true of List?
- The error for an invalid index
+ An ordered mutable sequence
- Repeating a list with star
- Largest to smallest
! List an ordered mutable sequence.
? Which an item of a list?
- append()
+ Element
- Heterogeneous
- min()
! Element an item of a list.
? Which statement is true of Element?
- Repeating a list with star
- The position of an element
+ An item of a list
- Sorting by swapping adjacent elements
! Element an item of a list.
? Which the position of an element?
- extend()
+ Index
- Duplicates
- range()
! Index the position of an element.
? Which statement is true of Index?
- Checking elements one by one
- The function adding all elements
+ The position of an element
- An item of a list
! Index the position of an element.
? Which a part of a list?
- Queue
- Heterogeneous
+ Slice
- Stack
! Slice a part of a list.
? Which statement is true of Slice?
+ A part of a list
- Exchanging two values
- Creates a shallow copy
- The function adding all elements
! Slice a part of a list.
? Which able to change in place?
- Bubble sort
- min()
+ Mutable
- IndexError
! Mutable able to change in place.
? Which statement is true of Mutable?
- Sorting by swapping adjacent elements
- A copy sharing nested objects
+ Able to change in place
- Repeated elements
! Mutable able to change in place.
? Which a list containing lists?
- sort()
- extend()
- count()
+ Nested list
! Nested list a list containing lists.
? Which statement is true of Nested list?
- Adds an element at the end
- The function giving the smallest element
+ A list containing lists
- The average of values
! Nested list a list containing lists.
? Which adds an element at the end?
- Membership
- remove()
- Iterable
+ append()
! Append() adds an element at the end.
? Which statement is true of append()?
+ Adds an element at the end
- Removes and returns an element
- Adds all elements of an iterable
- An object that can be looped over
! Append() adds an element at the end.
? Which adds all elements of an iterable?
+ extend()
- insert()
- Iterable
- clear()
! Extend() adds all elements of an iterable.
? Which statement is true of extend()?
- Two names referring to the same list
- Counts occurrences of a value
- Repeated elements
+ Adds all elements of an iterable
! Extend() adds all elements of an iterable.
? Which adds an element at a position?
+ insert()
- Membership
- List
- Queue
! Insert() adds an element at a position.
? Which statement is true of insert()?
- The average of values
- A list with no elements
+ Adds an element at a position
- Able to change in place
! Insert() adds an element at a position.
? Which deletes the first occurrence of a value?
- Duplicates
- Slice
+ remove()
- Matrix
! Remove() deletes the first occurrence of a value.
? Which statement is true of remove()?
- Adds an element at a position
- The function giving the number of elements
+ Deletes the first occurrence of a value
- An ordered mutable sequence
! Remove() deletes the first occurrence of a value.
? Which removes and returns an element?
+ pop()
- min()
- Mutable
- IndexError
! Pop() removes and returns an element.
? Which statement is true of pop()?
- Counts occurrences of a value
- The position of an element
+ Removes and returns an element
- Reverses the list in place
! Pop() removes and returns an element.
? Which removes all elements?
- reverse()
- Heterogeneous
+ clear()
- Slice
! Clear() removes all elements.
? Which statement is true of clear()?
- The function giving the largest element
+ Removes all elements
- A list with no elements
- Adds an element at the end
! Clear() removes all elements.
? Which returns the position of a value?
- Aliasing
+ index()
- Descending order
- copy()
! Index() returns the position of a value.
? Which statement is true of index()?
+ Returns the position of a value
- Largest to smallest
- The function creating a list
- Visiting each element
! Index() returns the position of a value.
? Which counts occurrences of a value?
- IndexError
- clear()
- Unpacking
+ count()
! Count() counts occurrences of a value.
? Which statement is true of count()?
+ Counts occurrences of a value
- A list with no elements
- A variable collecting a total
- A list containing lists
! Count() counts occurrences of a value.
? Which reverses the list in place?
- List
- sum()
+ reverse()
- extend()
! Reverse() reverses the list in place.
? Which statement is true of reverse()?
- The function giving the largest element
- Adds an element at a position
+ Reverses the list in place
- The function giving the number of elements
! Reverse() reverses the list in place.
? Which sorts the list in place?
- Median
- List
+ sort()
- remove()
! Sort() sorts the list in place.
? Which statement is true of sort()?
- Repeated elements
- The function producing a sequence of integers
+ Sorts the list in place
- The average of values
! Sort() sorts the list in place.
? Which returns a sorted new list?
- max()
- Mutable
- Aliasing
+ sorted()
! Sorted() returns a sorted new list.
? Which statement is true of sorted()?
- The position of an element
+ Returns a sorted new list
- A part of a list
- The function adding all elements
! Sorted() returns a sorted new list.
? Which creates a shallow copy?
- del
- list()
+ copy()
- clear()
! Copy() creates a shallow copy.
? Which statement is true of copy()?
- Sorting by swapping adjacent elements
- The middle value of sorted data
+ Creates a shallow copy
- The function giving the smallest element
! Copy() creates a shallow copy.
? Which the statement deleting an element or slice?
+ del
- sort()
- append()
- Mode
! Del the statement deleting an element or slice.
? Which statement is true of del?
- Visiting each element
- Sorts the list in place
+ The statement deleting an element or slice
- Returns the position of a value
! Del the statement deleting an element or slice.
? Which the function giving the number of elements?
- Stack
+ len()
- List
- IndexError
! Len() the function giving the number of elements.
? Which statement is true of len()?
- Exchanging two values
- Creates a shallow copy
- Removes all elements
+ The function giving the number of elements
! Len() the function giving the number of elements.
? Which the function giving the largest element?
- clear()
+ max()
- index()
- pop()
! Max() the function giving the largest element.
? Which statement is true of max()?
- An ordered mutable sequence
+ The function giving the largest element
- Joining two lists with plus
- Deletes the first occurrence of a value
! Max() the function giving the largest element.
? Which the function giving the smallest element?
- Concatenation
- Aliasing
- Index
+ min()
! Min() the function giving the smallest element.
? Which statement is true of min()?
- Adds an element at the end
- Returns the position of a value
- Sorts the list in place
+ The function giving the smallest element
! Min() the function giving the smallest element.
? Which the function adding all elements?
- max()
- Nested list
- Shallow copy
+ sum()
! Sum() the function adding all elements.
? Which statement is true of sum()?
+ The function adding all elements
- The function creating a list
- The position of an element
- Two names referring to the same list
! Sum() the function adding all elements.
? Which the function creating a list?
- sorted()
- Swap
+ list()
- sum()
! List() the function creating a list.
? Which statement is true of list()?
+ The function creating a list
- Exchanging two values
- A copy sharing nested objects
- Checking elements one by one
! List() the function creating a list.
? Which the function producing a sequence of integers?
- insert()
- list()
+ range()
- clear()
! Range() the function producing a sequence of integers.
? Which statement is true of range()?
- Repeated elements
- Assigning elements to variables
+ The function producing a sequence of integers
- Counts occurrences of a value
! Range() the function producing a sequence of integers.
? Which joining two lists with plus?
- range()
- ValueError
+ Concatenation
- Aliasing
! Concatenation joining two lists with plus.
? Which statement is true of Concatenation?
- Assigning elements to variables
+ Joining two lists with plus
- The function creating a list
- An item of a list
! Concatenation joining two lists with plus.
? Which repeating a list with star?
- Matrix
- Traversal
+ Repetition
- Empty list
! Repetition repeating a list with star.
? Which statement is true of Repetition?
- The error for an invalid index
- Adds an element at a position
- The function giving the smallest element
+ Repeating a list with star
! Repetition repeating a list with star.
? Which testing with in?
+ Membership
- Heterogeneous
- ValueError
- Iterable
! Membership testing with in.
? Which statement is true of Membership?
- Able to change in place
+ Testing with in
- Exchanging two values
- An item of a list
! Membership testing with in.
? Which visiting each element?
- Accumulator
+ Traversal
- List comprehension
- sum()
! Traversal visiting each element.
? Which statement is true of Traversal?
+ Visiting each element
- Smallest to largest
- A last-in first-out structure using append and pop
- The middle value of sorted data
! Traversal visiting each element.
? Which two names referring to the same list?
- max()
- ValueError
+ Aliasing
- Linear search
! Aliasing two names referring to the same list.
? Which statement is true of Aliasing?
- Containing different data types
- Joining two lists with plus
+ Two names referring to the same list
- The function giving the largest element
! Aliasing two names referring to the same list.
? Which a copy sharing nested objects?
+ Shallow copy
- Swap
- Mode
- Queue
! Shallow copy a copy sharing nested objects.
? Which statement is true of Shallow copy?
- The middle value of sorted data
+ A copy sharing nested objects
- The statement deleting an element or slice
- A last-in first-out structure using append and pop
! Shallow copy a copy sharing nested objects.
? Which checking elements one by one?
+ Linear search
- remove()
- Slice
- insert()
! Linear search checking elements one by one.
? Which statement is true of Linear search?
- A part of a list
+ Checking elements one by one
- The function giving the smallest element
- Adds all elements of an iterable
! Linear search checking elements one by one.
? Which sorting by swapping adjacent elements?
- insert()
- Accumulator
- Element
+ Bubble sort
! Bubble sort sorting by swapping adjacent elements.
? Which statement is true of Bubble sort?
+ Sorting by swapping adjacent elements
- Repeating a list with star
- The function creating a list
- Removes and returns an element
! Bubble sort sorting by swapping adjacent elements.
? Which exchanging two values?
- Queue
- Iterable
+ Swap
- Stack
! Swap exchanging two values.
? Which statement is true of Swap?
- Adds all elements of an iterable
- The function creating a list
- Repeating a list with star
+ Exchanging two values
! Swap exchanging two values.
? Which repeated elements?
- list()
- sorted()
- remove()
+ Duplicates
! Duplicates repeated elements.
? Which statement is true of Duplicates?
+ Repeated elements
- Counts occurrences of a value
- A list of lists
- Repeating a list with star
! Duplicates repeated elements.
? Which a compact way to create lists?
- copy()
+ List comprehension
- sort()
- insert()
! List comprehension a compact way to create lists.
? Which statement is true of List comprehension?
+ A compact way to create lists
- Adds an element at a position
- A copy sharing nested objects
- Visiting each element
! List comprehension a compact way to create lists.
? Which a list of lists?
- Traversal
- Accumulator
+ Matrix
- Swap
! Matrix a list of lists.
? Which statement is true of Matrix?
- An item of a list
+ A list of lists
- Sorting by swapping adjacent elements
- A list containing lists
! Matrix a list of lists.
? Which the average of values?
- append()
- Duplicates
- Heterogeneous
+ Mean
! Mean the average of values.
? Which statement is true of Mean?
- The error for removing a missing value
- Counts occurrences of a value
- Largest to smallest
+ The average of values
! Mean the average of values.
? Which the middle value of sorted data?
- clear()
+ Median
- Iterable
- Element
! Median the middle value of sorted data.
? Which statement is true of Median?
- Adds all elements of an iterable
- The function adding all elements
- Visiting each element
+ The middle value of sorted data
! Median the middle value of sorted data.
? Which the most frequent value?
- Traversal
- Accumulator
- Descending order
+ Mode
! Mode the most frequent value.
? Which statement is true of Mode?
- An item of a list
- Largest to smallest
+ The most frequent value
- Removes and returns an element
! Mode the most frequent value.
? Which largest to smallest?
- del
- Membership
- extend()
+ Descending order
! Descending order largest to smallest.
? Which statement is true of Descending order?
- Two names referring to the same list
- A compact way to create lists
- The most frequent value
+ Largest to smallest
! Descending order largest to smallest.
? Which smallest to largest?
+ Ascending order
- sum()
- Concatenation
- reverse()
! Ascending order smallest to largest.
? Which statement is true of Ascending order?
- The error for an invalid index
- The most frequent value
+ Smallest to largest
- The function producing a sequence of integers
! Ascending order smallest to largest.
? Which the error for an invalid index?
- Shallow copy
- Bubble sort
+ IndexError
- copy()
! IndexError the error for an invalid index.
? Which statement is true of IndexError?
- An object that can be looped over
- Testing with in
- Sorting by swapping adjacent elements
+ The error for an invalid index
! IndexError the error for an invalid index.
? Which the error for removing a missing value?
+ ValueError
- Descending order
- Mean
- Heterogeneous
! ValueError the error for removing a missing value.
? Which statement is true of ValueError?
- An item of a list
+ The error for removing a missing value
- The function giving the number of elements
- The function producing a sequence of integers
! ValueError the error for removing a missing value.
? Which a variable collecting a total?
- Iterable
- max()
- Repetition
+ Accumulator
! Accumulator a variable collecting a total.
? Which statement is true of Accumulator?
+ A variable collecting a total
- A part of a list
- Two names referring to the same list
- The error for an invalid index
! Accumulator a variable collecting a total.
? Which a list with no elements?
- Mutable
- append()
+ Empty list
- Median
! Empty list a list with no elements.
? Which statement is true of Empty list?
- Repeated elements
- Adds an element at the end
- Removes all elements
+ A list with no elements
! Empty list a list with no elements.
? Which an object that can be looped over?
- Membership
- Aliasing
+ Iterable
- Slice
! Iterable an object that can be looped over.
? Which statement is true of Iterable?
- Repeating a list with star
+ An object that can be looped over
- The function adding all elements
- Sorting by swapping adjacent elements
! Iterable an object that can be looped over.
? Which a last-in first-out structure using append and pop?
- range()
+ Stack
- remove()
- count()
! Stack a last-in first-out structure using append and pop.
? Which statement is true of Stack?
- Reverses the list in place
- Checking elements one by one
+ A last-in first-out structure using append and pop
- Returns a sorted new list
! Stack a last-in first-out structure using append and pop.
? Which a first-in first-out structure?
- Membership
- Concatenation
+ Queue
- Linear search
! Queue a first-in first-out structure.
? Which statement is true of Queue?
- Adds an element at a position
+ A first-in first-out structure
- An item of a list
- Returns a sorted new list
! Queue a first-in first-out structure.
? Which containing different data types?
- Mode
- ValueError
- IndexError
+ Heterogeneous
! Heterogeneous containing different data types.
? Which statement is true of Heterogeneous?
- The error for removing a missing value
+ Containing different data types
- Sorting by swapping adjacent elements
- Testing with in
! Heterogeneous containing different data types.
? Which assigning elements to variables?
- remove()
- List
- Mutable
+ Unpacking
! Unpacking assigning elements to variables.
? Which statement is true of Unpacking?
- Reverses the list in place
- The function creating a list
+ Assigning elements to variables
- The average of values
! Unpacking assigning elements to variables.
? List is written in
- Parentheses
+ Square brackets
- Braces
- Quotes
! [].
? append adds at
- Start
+ End
- Middle
- None
! Last.
? sort() returns
- List
- Tuple
+ None
- Int
! In place.
? Lists are
+ Mutable
- Immutable
- Fixed
- Constants
! Change.
? L = [1,2,3]; L[-1] is
- 1
+ 3
- 2
- Error
! Last.
? pop() removes
- First item
- All
+ Last item
- None
! Default.
@visual
blocks | List methods | append; extend; insert; remove; pop; sort
compare | sort and sorted | sort=In place~Returns None; sorted=New list~Original unchanged
flow | Bubble sort | Compare pair; Swap; Repeat pass; Sorted
table | Method | Name=append/extend/insert/pop; Effect=Add one/Add many/Add at index/Remove
mind | Lists | Basics; Methods; Copy; Programs
steps | Linear search | Take item; Compare; Found or next
cycle | Traversal | Pick item; Process; Next
@problems
## Moderate
P: Write a program to find the sum and maximum of a list.
A: s = 0; m = L[0]; for x in L: s += x; if x > m: m = x.
R: 3 | Sum
R: 3 | Maximum
## High
P: Differentiate append, extend and insert with examples.
A: append adds one item at end; extend adds each item of an iterable; insert adds at a given index.
R: 2 | Append
R: 2 | Extend
R: 2 | Insert
R: 2 | Example
## Advanced
P: Write a bubble sort for a list and explain aliasing versus copy.
A: Nested loops swapping adjacent items; M = L aliases; L.copy() creates a new list.
R: 2 | Loops
R: 2 | Swap
R: 2 | Alias
R: 2 | Copy
