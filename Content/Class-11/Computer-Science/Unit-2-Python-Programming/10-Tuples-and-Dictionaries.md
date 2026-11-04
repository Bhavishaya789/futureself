# Tuples and Dictionaries
minutes: 40
yt: class 11 computer science python tuples dictionaries methods
@study
A tuple is an ordered immutable sequence in parentheses; a single-element tuple needs a trailing comma (5,). Operations: indexing, slicing, concatenation, repetition, membership; functions len, max, min, sum, sorted, tuple(); methods count and index. Tuple assignment and unpacking: a, b = b, a. Nested tuples. Dictionary: unordered (insertion-ordered since 3.7) mutable collection of key-value pairs in braces; keys are unique and immutable; values any type. Access d[key], get(key, default), keys(), values(), items(), update(), pop(), popitem(), del, clear(), len(), in checks keys. Traversal. Programs: count word frequency, student marks, phone book.
## Deep dive: Tuples
t = (1, 2, 3); t[0] = 1; t cannot be changed (TypeError). Single element: t = (5,). Packing and unpacking: x, y, z = t. Return of multiple values from functions as a tuple. Why tuples: faster, safe, usable as dictionary keys. Sort a tuple with sorted() returns a list. tuple("abc") gives (a, b, c). Concatenation creates a new tuple.
## Deep dive: Dictionaries
d = {"name": "Ria", "age": 16}. d["name"] returns Ria; d["city"] raises KeyError; d.get("city") returns None. Adding or updating d["city"] = "Delhi". Methods: keys(), values(), items(), update(other), pop(key), popitem(), del d[key], clear(), copy(). Membership "age" in d checks keys. Dictionary comprehension. len(d) counts pairs. Keys must be immutable (strings, numbers, tuples).
## Deep dive: Programs
Word frequency: for w in words: d[w] = d.get(w, 0) + 1. Count characters. Student marks dictionary and find topper. Merge dictionaries with update. Invert a dictionary. Sort by key with sorted(d). Use items() in a for loop: for k, v in d.items(). Nested dictionary for records. Mean of values using sum(d.values()) / len(d).
## Hindi saransh
Tuple achal kramit sangrah hai; shabdkosh (dictionary) key-value jod hai. get(), keys(), values(), items(). Kunji anokhi aur achal.
> Dictionary keys must be unique and immutable; values can be of any type.
@formulas
## Tuple vs list
Brackets | () vs [] | Syntax
Mutability | Immutable vs mutable | Key difference
Single | (5,) | Comma
## Dictionary methods
keys | All keys | d.keys()
values | All values | d.values()
items | Pairs | d.items()
get | Safe lookup | d.get(k)
update | Merge | d.update(e)

@qa
Q: Which an ordered immutable sequence?
A: Tuple an ordered immutable sequence.
Q: What do you know about Tuple?
A: Tuple an ordered immutable sequence.
Q: Which a tuple with one item and a trailing comma?
A: Single-element tuple a tuple with one item and a trailing comma.
Q: What do you know about Single-element tuple?
A: Single-element tuple a tuple with one item and a trailing comma.
Q: Which putting values into a tuple?
A: Packing putting values into a tuple.
Q: What do you know about Packing?
A: Packing putting values into a tuple.
Q: Which assigning tuple items to variables?
A: Unpacking assigning tuple items to variables.
Q: What do you know about Unpacking?
A: Unpacking assigning tuple items to variables.
Q: Which assigning many variables at once?
A: Tuple assignment assigning many variables at once.
Q: What do you know about Tuple assignment?
A: Tuple assignment assigning many variables at once.
Q: Which a tuple inside another tuple?
A: Nested tuple a tuple inside another tuple.
Q: What do you know about Nested tuple?
A: Nested tuple a tuple inside another tuple.
Q: Which the tuple method counting a value?
A: count() the tuple method counting a value.
Q: What do you know about count()?
A: Count() the tuple method counting a value.
Q: Which the tuple method giving the position of a value?
A: index() the tuple method giving the position of a value.
Q: What do you know about index()?
A: Index() the tuple method giving the position of a value.
Q: Which the function creating a tuple?
A: tuple() the function creating a tuple.
Q: What do you know about tuple()?
A: Tuple() the function creating a tuple.
Q: Which unable to change?
A: Immutable unable to change.
Q: What do you know about Immutable?
A: Immutable unable to change.
Q: Which a collection of key-value pairs?
A: Dictionary a collection of key-value pairs.
Q: What do you know about Dictionary?
A: Dictionary a collection of key-value pairs.
Q: Which the unique identifier in a dictionary?
A: Key the unique identifier in a dictionary.
Q: What do you know about Key?
A: Key the unique identifier in a dictionary.
Q: Which the data mapped to a key?
A: Value the data mapped to a key.
Q: What do you know about Value?
A: Value the data mapped to a key.
Q: Which an item of a dictionary?
A: Key-value pair an item of a dictionary.
Q: What do you know about Key-value pair?
A: Key-value pair an item of a dictionary.
Q: Which the association from keys to values?
A: Mapping the association from keys to values.
Q: What do you know about Mapping?
A: Mapping the association from keys to values.
Q: Which the error for a missing key?
A: KeyError the error for a missing key.
Q: What do you know about KeyError?
A: KeyError the error for a missing key.
Q: Which the method returning a value or a default?
A: get() the method returning a value or a default.
Q: What do you know about get()?
A: Get() the method returning a value or a default.
Q: Which the method returning all keys?
A: keys() the method returning all keys.
Q: What do you know about keys()?
A: Keys() the method returning all keys.
Q: Which the method returning all values?
A: values() the method returning all values.
Q: What do you know about values()?
A: Values() the method returning all values.
Q: Which the method returning pairs?
A: items() the method returning pairs.
Q: What do you know about items()?
A: Items() the method returning pairs.
Q: Which the method merging another dictionary?
A: update() the method merging another dictionary.
Q: What do you know about update()?
A: Update() the method merging another dictionary.
Q: Which the method removing a key and returning the value?
A: pop() the method removing a key and returning the value.
Q: What do you know about pop()?
A: Pop() the method removing a key and returning the value.
Q: Which the method removing the last inserted pair?
A: popitem() the method removing the last inserted pair.
Q: What do you know about popitem()?
A: Popitem() the method removing the last inserted pair.
Q: Which the method removing all items?
A: clear() the method removing all items.
Q: What do you know about clear()?
A: Clear() the method removing all items.
Q: Which the method making a shallow copy?
A: copy() the method making a shallow copy.
Q: What do you know about copy()?
A: Copy() the method making a shallow copy.
Q: Which the statement removing an item?
A: del the statement removing an item.
Q: What do you know about del?
A: Del the statement removing an item.
Q: Which the function giving the number of pairs?
A: len() the function giving the number of pairs.
Q: What do you know about len()?
A: Len() the function giving the number of pairs.
Q: Which the test for the presence of a key?
A: in operator the test for the presence of a key.
Q: What do you know about in operator?
A: In operator the test for the presence of a key.
Q: Which a compact way to build a dictionary?
A: Dictionary comprehension a compact way to build a dictionary.
Q: What do you know about Dictionary comprehension?
A: Dictionary comprehension a compact way to build a dictionary.
Q: Which an immutable object usable as a key?
A: Hashable an immutable object usable as a key.
Q: What do you know about Hashable?
A: Hashable an immutable object usable as a key.
Q: Which the count of each word?
A: Word frequency the count of each word.
Q: What do you know about Word frequency?
A: Word frequency the count of each word.
Q: Which a variable counting occurrences?
A: Counter a variable counting occurrences.
Q: What do you know about Counter?
A: Counter a variable counting occurrences.
Q: Which the value used when a key is absent?
A: Default value the value used when a key is absent.
Q: What do you know about Default value?
A: Default value the value used when a key is absent.
Q: Which a dictionary within a dictionary?
A: Nested dictionary a dictionary within a dictionary.
Q: What do you know about Nested dictionary?
A: Nested dictionary a dictionary within a dictionary.
Q: Which a collection of fields about one entity?
A: Record a collection of fields about one entity.
Q: What do you know about Record?
A: Record a collection of fields about one entity.
Q: Which visiting each item?
A: Traversal visiting each item.
Q: What do you know about Traversal?
A: Traversal visiting each item.
Q: Which the function returning a sorted list?
A: sorted() the function returning a sorted list.
Q: What do you know about sorted()?
A: Sorted() the function returning a sorted list.
Q: Which the order in which items were added?
A: Insertion order the order in which items were added.
Q: What do you know about Insertion order?
A: Insertion order the order in which items were added.
Q: Which finding a value by its key?
A: Lookup finding a value by its key.
Q: What do you know about Lookup?
A: Lookup finding a value by its key.
Q: Which the data structure behind dictionaries?
A: Hash table the data structure behind dictionaries.
Q: What do you know about Hash table?
A: Hash table the data structure behind dictionaries.
Q: Which an example of a dictionary?
A: Phone book an example of a dictionary.
Q: What do you know about Phone book?
A: Phone book an example of a dictionary.
Q: Which a dictionary with keys and values swapped?
A: Inverse dictionary a dictionary with keys and values swapped.
Q: What do you know about Inverse dictionary?
A: Inverse dictionary a dictionary with keys and values swapped.
Q: Which combining two dictionaries?
A: Merge combining two dictionaries.
Q: What do you know about Merge?
A: Merge combining two dictionaries.
Q: Which an ordered collection?
A: Sequence an ordered collection.
Q: What do you know about Sequence?
A: Sequence an ordered collection.
Q: Which an object that can be looped over?
A: Iterable an object that can be looped over.
Q: What do you know about Iterable?
A: Iterable an object that can be looped over.
Q: Which a tuple used as a key?
A: Composite key a tuple used as a key.
Q: What do you know about Composite key?
A: Composite key a tuple used as a key.
Q: Which testing presence?
A: Membership testing presence.
Q: What do you know about Membership?
A: Membership testing presence.
Q: Which joining tuples with plus?
A: Concatenation joining tuples with plus.
Q: What do you know about Concatenation?
A: Concatenation joining tuples with plus.
Q: Which repeating a tuple with star?
A: Repetition repeating a tuple with star.
Q: What do you know about Repetition?
A: Repetition repeating a tuple with star.
Q: Which extracting part of a tuple?
A: Slicing extracting part of a tuple.
Q: What do you know about Slicing?
A: Slicing extracting part of a tuple.
Q: Which exchanging two values by tuple assignment?
A: Swap exchanging two values by tuple assignment.
Q: What do you know about Swap?
A: Swap exchanging two values by tuple assignment.
Q: Which returning a tuple from a function?
A: Return multiple values returning a tuple from a function.
Q: What do you know about Return multiple values?
A: Return multiple values returning a tuple from a function.
Q: Which safety and use as keys?
A: Immutability benefit safety and use as keys.
Q: What do you know about Immutability benefit?
A: Immutability benefit safety and use as keys.
Q: Why is a tuple used?
A: For fixed data that must not change.
Q: How do you create a tuple with one element?
A: Use a trailing comma, as in (5,).
Q: Can a tuple be modified?
A: No, it is immutable.
Q: What is tuple unpacking?
A: Assigning the items to separate variables.
Q: How do you swap two variables in Python?
A: a, b = b, a.
Q: What is a dictionary?
A: A mapping of unique keys to values.
Q: Can a dictionary key be a list?
A: No, keys must be immutable.
Q: What happens on accessing a missing key?
A: KeyError.
Q: What does get do?
A: Returns the value or a default without error.
Q: What does items return?
A: The key-value pairs.
Q: What does update do?
A: Adds or modifies pairs from another dictionary.
Q: How do you delete a key?
A: del d[key] or d.pop(key).
Q: What does in check for a dictionary?
A: Whether a key is present.
Q: How do you count word frequency?
A: Use d[w] = d.get(w, 0) + 1.
Q: How do you loop through a dictionary?
A: for k, v in d.items().
Q: What is the difference between a list and a dictionary?
A: List is positional; dictionary is key-based.
Q: Can values be repeated?
A: Yes, only keys must be unique.
@quiz
? Which an ordered immutable sequence?
+ Tuple
- Membership
- items()
- pop()
! Tuple an ordered immutable sequence.
? Which statement is true of Tuple?
- The method making a shallow copy
- Putting values into a tuple
+ An ordered immutable sequence
- The method returning a value or a default
! Tuple an ordered immutable sequence.
? Which a tuple with one item and a trailing comma?
- in operator
- clear()
- Word frequency
+ Single-element tuple
! Single-element tuple a tuple with one item and a trailing comma.
? Which statement is true of Single-element tuple?
- An ordered collection
- The method making a shallow copy
+ A tuple with one item and a trailing comma
- Unable to change
! Single-element tuple a tuple with one item and a trailing comma.
? Which putting values into a tuple?
- sorted()
- Merge
+ Packing
- len()
! Packing putting values into a tuple.
? Which statement is true of Packing?
+ Putting values into a tuple
- The test for the presence of a key
- The function returning a sorted list
- An immutable object usable as a key
! Packing putting values into a tuple.
? Which assigning tuple items to variables?
- Repetition
+ Unpacking
- Record
- Word frequency
! Unpacking assigning tuple items to variables.
? Which statement is true of Unpacking?
- The method merging another dictionary
- The function giving the number of pairs
- The data structure behind dictionaries
+ Assigning tuple items to variables
! Unpacking assigning tuple items to variables.
? Which assigning many variables at once?
- count()
+ Tuple assignment
- clear()
- Key-value pair
! Tuple assignment assigning many variables at once.
? Which statement is true of Tuple assignment?
- The method returning pairs
- An immutable object usable as a key
+ Assigning many variables at once
- Exchanging two values by tuple assignment
! Tuple assignment assigning many variables at once.
? Which a tuple inside another tuple?
- Return multiple values
+ Nested tuple
- Merge
- sorted()
! Nested tuple a tuple inside another tuple.
? Which statement is true of Nested tuple?
- A dictionary within a dictionary
- An immutable object usable as a key
- Joining tuples with plus
+ A tuple inside another tuple
! Nested tuple a tuple inside another tuple.
? Which the tuple method counting a value?
- Concatenation
- Mapping
+ count()
- Membership
! Count() the tuple method counting a value.
? Which statement is true of count()?
- A variable counting occurrences
- The association from keys to values
- The method making a shallow copy
+ The tuple method counting a value
! Count() the tuple method counting a value.
? Which the tuple method giving the position of a value?
+ index()
- clear()
- in operator
- Insertion order
! Index() the tuple method giving the position of a value.
? Which statement is true of index()?
- The method removing a key and returning the value
+ The tuple method giving the position of a value
- An ordered collection
- Putting values into a tuple
! Index() the tuple method giving the position of a value.
? Which the function creating a tuple?
- sorted()
- keys()
- Slicing
+ tuple()
! Tuple() the function creating a tuple.
? Which statement is true of tuple()?
- A tuple with one item and a trailing comma
+ The function creating a tuple
- A collection of key-value pairs
- The error for a missing key
! Tuple() the function creating a tuple.
? Which unable to change?
+ Immutable
- items()
- Traversal
- Composite key
! Immutable unable to change.
? Which statement is true of Immutable?
- The data mapped to a key
+ Unable to change
- An ordered collection
- A dictionary with keys and values swapped
! Immutable unable to change.
? Which a collection of key-value pairs?
- keys()
- Record
- get()
+ Dictionary
! Dictionary a collection of key-value pairs.
? Which statement is true of Dictionary?
- Exchanging two values by tuple assignment
- Joining tuples with plus
- The function returning a sorted list
+ A collection of key-value pairs
! Dictionary a collection of key-value pairs.
? Which the unique identifier in a dictionary?
- pop()
- Iterable
- Lookup
+ Key
! Key the unique identifier in a dictionary.
? Which statement is true of Key?
- The function returning a sorted list
- Assigning tuple items to variables
- A tuple with one item and a trailing comma
+ The unique identifier in a dictionary
! Key the unique identifier in a dictionary.
? Which the data mapped to a key?
- Dictionary
- update()
- Immutable
+ Value
! Value the data mapped to a key.
? Which statement is true of Value?
- The order in which items were added
- A tuple used as a key
- Repeating a tuple with star
+ The data mapped to a key
! Value the data mapped to a key.
? Which an item of a dictionary?
- pop()
+ Key-value pair
- Packing
- Default value
! Key-value pair an item of a dictionary.
? Which statement is true of Key-value pair?
- The unique identifier in a dictionary
- The method returning pairs
- Combining two dictionaries
+ An item of a dictionary
! Key-value pair an item of a dictionary.
? Which the association from keys to values?
- clear()
- values()
+ Mapping
- in operator
! Mapping the association from keys to values.
? Which statement is true of Mapping?
- The data mapped to a key
- An example of a dictionary
+ The association from keys to values
- Joining tuples with plus
! Mapping the association from keys to values.
? Which the error for a missing key?
- Tuple assignment
- index()
+ KeyError
- get()
! KeyError the error for a missing key.
? Which statement is true of KeyError?
- The method removing a key and returning the value
- The test for the presence of a key
- The method returning a value or a default
+ The error for a missing key
! KeyError the error for a missing key.
? Which the method returning a value or a default?
+ get()
- Lookup
- index()
- Traversal
! Get() the method returning a value or a default.
? Which statement is true of get()?
- Safety and use as keys
- A compact way to build a dictionary
- Joining tuples with plus
+ The method returning a value or a default
! Get() the method returning a value or a default.
? Which the method returning all keys?
- Inverse dictionary
- Immutability benefit
- Merge
+ keys()
! Keys() the method returning all keys.
? Which statement is true of keys()?
- A collection of key-value pairs
- The method returning all values
+ The method returning all keys
- A tuple used as a key
! Keys() the method returning all keys.
? Which the method returning all values?
- Swap
+ values()
- Inverse dictionary
- Hash table
! Values() the method returning all values.
? Which statement is true of values()?
- The method making a shallow copy
+ The method returning all values
- The test for the presence of a key
- The function giving the number of pairs
! Values() the method returning all values.
? Which the method returning pairs?
- sorted()
- clear()
- Key-value pair
+ items()
! Items() the method returning pairs.
? Which statement is true of items()?
- The function creating a tuple
- The data mapped to a key
+ The method returning pairs
- A collection of fields about one entity
! Items() the method returning pairs.
? Which the method merging another dictionary?
- sorted()
- Swap
+ update()
- Unpacking
! Update() the method merging another dictionary.
? Which statement is true of update()?
- Testing presence
- The method returning all values
- Joining tuples with plus
+ The method merging another dictionary
! Update() the method merging another dictionary.
? Which the method removing a key and returning the value?
- Sequence
+ pop()
- Single-element tuple
- Key-value pair
! Pop() the method removing a key and returning the value.
? Which statement is true of pop()?
- An item of a dictionary
- The method removing all items
- The function giving the number of pairs
+ The method removing a key and returning the value
! Pop() the method removing a key and returning the value.
? Which the method removing the last inserted pair?
+ popitem()
- Sequence
- Tuple assignment
- Default value
! Popitem() the method removing the last inserted pair.
? Which statement is true of popitem()?
- The tuple method counting a value
- Assigning tuple items to variables
- Visiting each item
+ The method removing the last inserted pair
! Popitem() the method removing the last inserted pair.
? Which the method removing all items?
- Insertion order
- Swap
- Value
+ clear()
! Clear() the method removing all items.
? Which statement is true of clear()?
- Finding a value by its key
- Visiting each item
+ The method removing all items
- The value used when a key is absent
! Clear() the method removing all items.
? Which the method making a shallow copy?
- Nested dictionary
- KeyError
- Repetition
+ copy()
! Copy() the method making a shallow copy.
? Which statement is true of copy()?
- Extracting part of a tuple
- An object that can be looped over
- The function giving the number of pairs
+ The method making a shallow copy
! Copy() the method making a shallow copy.
? Which the statement removing an item?
- Key
- count()
+ del
- Key-value pair
! Del the statement removing an item.
? Which statement is true of del?
- A tuple used as a key
- Extracting part of a tuple
+ The statement removing an item
- The test for the presence of a key
! Del the statement removing an item.
? Which the function giving the number of pairs?
- Nested tuple
+ len()
- Repetition
- Merge
! Len() the function giving the number of pairs.
? Which statement is true of len()?
- The tuple method giving the position of a value
- Assigning tuple items to variables
+ The function giving the number of pairs
- Combining two dictionaries
! Len() the function giving the number of pairs.
? Which the test for the presence of a key?
+ in operator
- update()
- Hash table
- Tuple assignment
! In operator the test for the presence of a key.
? Which statement is true of in operator?
+ The test for the presence of a key
- The method returning a value or a default
- The method returning all values
- Joining tuples with plus
! In operator the test for the presence of a key.
? Which a compact way to build a dictionary?
+ Dictionary comprehension
- Packing
- Key-value pair
- Counter
! Dictionary comprehension a compact way to build a dictionary.
? Which statement is true of Dictionary comprehension?
- The method removing all items
+ A compact way to build a dictionary
- Assigning tuple items to variables
- A tuple used as a key
! Dictionary comprehension a compact way to build a dictionary.
? Which an immutable object usable as a key?
- Immutability benefit
+ Hashable
- Slicing
- values()
! Hashable an immutable object usable as a key.
? Which statement is true of Hashable?
+ An immutable object usable as a key
- The value used when a key is absent
- An item of a dictionary
- An object that can be looped over
! Hashable an immutable object usable as a key.
? Which the count of each word?
- sorted()
- del
- Key-value pair
+ Word frequency
! Word frequency the count of each word.
? Which statement is true of Word frequency?
+ The count of each word
- The method removing a key and returning the value
- An example of a dictionary
- A collection of key-value pairs
! Word frequency the count of each word.
? Which a variable counting occurrences?
+ Counter
- Lookup
- Inverse dictionary
- Default value
! Counter a variable counting occurrences.
? Which statement is true of Counter?
+ A variable counting occurrences
- A collection of key-value pairs
- The test for the presence of a key
- The method returning all values
! Counter a variable counting occurrences.
? Which the value used when a key is absent?
- pop()
+ Default value
- items()
- Mapping
! Default value the value used when a key is absent.
? Which statement is true of Default value?
- A tuple inside another tuple
+ The value used when a key is absent
- Finding a value by its key
- Returning a tuple from a function
! Default value the value used when a key is absent.
? Which a dictionary within a dictionary?
- Swap
+ Nested dictionary
- Key
- sorted()
! Nested dictionary a dictionary within a dictionary.
? Which statement is true of Nested dictionary?
+ A dictionary within a dictionary
- Returning a tuple from a function
- Joining tuples with plus
- Finding a value by its key
! Nested dictionary a dictionary within a dictionary.
? Which a collection of fields about one entity?
+ Record
- get()
- Phone book
- Unpacking
! Record a collection of fields about one entity.
? Which statement is true of Record?
+ A collection of fields about one entity
- Joining tuples with plus
- Finding a value by its key
- The method removing all items
! Record a collection of fields about one entity.
? Which visiting each item?
- Key-value pair
- del
+ Traversal
- update()
! Traversal visiting each item.
? Which statement is true of Traversal?
+ Visiting each item
- The function creating a tuple
- The statement removing an item
- The method returning a value or a default
! Traversal visiting each item.
? Which the function returning a sorted list?
- Tuple assignment
- clear()
+ sorted()
- items()
! Sorted() the function returning a sorted list.
? Which statement is true of sorted()?
- An item of a dictionary
+ The function returning a sorted list
- A dictionary within a dictionary
- The association from keys to values
! Sorted() the function returning a sorted list.
? Which the order in which items were added?
- Repetition
- Tuple
- Counter
+ Insertion order
! Insertion order the order in which items were added.
? Which statement is true of Insertion order?
- Finding a value by its key
- The function giving the number of pairs
- Joining tuples with plus
+ The order in which items were added
! Insertion order the order in which items were added.
? Which finding a value by its key?
- Mapping
- Unpacking
+ Lookup
- len()
! Lookup finding a value by its key.
? Which statement is true of Lookup?
- An ordered collection
- An example of a dictionary
- An ordered immutable sequence
+ Finding a value by its key
! Lookup finding a value by its key.
? Which the data structure behind dictionaries?
+ Hash table
- Repetition
- Tuple assignment
- Key
! Hash table the data structure behind dictionaries.
? Which statement is true of Hash table?
- The function creating a tuple
- The test for the presence of a key
+ The data structure behind dictionaries
- A collection of fields about one entity
! Hash table the data structure behind dictionaries.
? Which an example of a dictionary?
- clear()
- Repetition
- Composite key
+ Phone book
! Phone book an example of a dictionary.
? Which statement is true of Phone book?
- The order in which items were added
- A tuple used as a key
+ An example of a dictionary
- The value used when a key is absent
! Phone book an example of a dictionary.
? Which a dictionary with keys and values swapped?
- Key
+ Inverse dictionary
- Record
- Dictionary comprehension
! Inverse dictionary a dictionary with keys and values swapped.
? Which statement is true of Inverse dictionary?
- A collection of fields about one entity
- Finding a value by its key
+ A dictionary with keys and values swapped
- The method making a shallow copy
! Inverse dictionary a dictionary with keys and values swapped.
? Which combining two dictionaries?
- update()
+ Merge
- count()
- Swap
! Merge combining two dictionaries.
? Which statement is true of Merge?
- The unique identifier in a dictionary
- A collection of key-value pairs
- Assigning many variables at once
+ Combining two dictionaries
! Merge combining two dictionaries.
? Which an ordered collection?
+ Sequence
- Single-element tuple
- Hash table
- Return multiple values
! Sequence an ordered collection.
? Which statement is true of Sequence?
- The method making a shallow copy
- The test for the presence of a key
- An item of a dictionary
+ An ordered collection
! Sequence an ordered collection.
? Which an object that can be looped over?
+ Iterable
- Return multiple values
- Hashable
- Counter
! Iterable an object that can be looped over.
? Which statement is true of Iterable?
- The method returning all values
- The function creating a tuple
- The method removing a key and returning the value
+ An object that can be looped over
! Iterable an object that can be looped over.
? Which a tuple used as a key?
- in operator
+ Composite key
- Key-value pair
- Value
! Composite key a tuple used as a key.
? Which statement is true of Composite key?
+ A tuple used as a key
- The method removing the last inserted pair
- A tuple inside another tuple
- A compact way to build a dictionary
! Composite key a tuple used as a key.
? Which testing presence?
- Unpacking
+ Membership
- Record
- Key
! Membership testing presence.
? Which statement is true of Membership?
- The function creating a tuple
- The method making a shallow copy
- The function giving the number of pairs
+ Testing presence
! Membership testing presence.
? Which joining tuples with plus?
- len()
- pop()
+ Concatenation
- Dictionary
! Concatenation joining tuples with plus.
? Which statement is true of Concatenation?
+ Joining tuples with plus
- The function creating a tuple
- The unique identifier in a dictionary
- An item of a dictionary
! Concatenation joining tuples with plus.
? Which repeating a tuple with star?
- Immutable
+ Repetition
- Default value
- Nested dictionary
! Repetition repeating a tuple with star.
? Which statement is true of Repetition?
- Assigning many variables at once
+ Repeating a tuple with star
- The value used when a key is absent
- Joining tuples with plus
! Repetition repeating a tuple with star.
? Which extracting part of a tuple?
- Single-element tuple
+ Slicing
- Tuple assignment
- pop()
! Slicing extracting part of a tuple.
? Which statement is true of Slicing?
- A variable counting occurrences
+ Extracting part of a tuple
- The association from keys to values
- An item of a dictionary
! Slicing extracting part of a tuple.
? Which exchanging two values by tuple assignment?
- Single-element tuple
- Merge
+ Swap
- copy()
! Swap exchanging two values by tuple assignment.
? Which statement is true of Swap?
- An immutable object usable as a key
+ Exchanging two values by tuple assignment
- The error for a missing key
- The method removing the last inserted pair
! Swap exchanging two values by tuple assignment.
? Which returning a tuple from a function?
- Dictionary comprehension
- Iterable
- Insertion order
+ Return multiple values
! Return multiple values returning a tuple from a function.
? Which statement is true of Return multiple values?
- Assigning tuple items to variables
+ Returning a tuple from a function
- Repeating a tuple with star
- The data structure behind dictionaries
! Return multiple values returning a tuple from a function.
? Which safety and use as keys?
- copy()
- count()
- popitem()
+ Immutability benefit
! Immutability benefit safety and use as keys.
? Which statement is true of Immutability benefit?
+ Safety and use as keys
- Unable to change
- Finding a value by its key
- The statement removing an item
! Immutability benefit safety and use as keys.
? Tuple is
- Mutable
- Unordered
+ Immutable
- Fixed length only
! Parentheses.
? d.get("x") for missing key
- Error
- 0
- False
+ None
! Safe.
? Dictionary keys must be
- Lists
- Mutable
- Sets
+ Unique and immutable
! Rule.
? (5) is
+ int
- tuple
- list
- str
! No comma.
? d.items() returns
+ Pairs
- Keys
- Values
- Count
! View.
? Dictionary uses
- Brackets
+ Braces
- Parentheses
- Quotes
! {}.
@visual
compare | Tuple and list | Tuple=Immutable~Parentheses; List=Mutable~Brackets
blocks | Dictionary methods | keys; values; items; get; update; pop
flow | Word count | Split text; Loop words; Update count; Print
table | Dictionary | Key=name/age/city; Value=Ria/16/Delhi
mind | Tuples and dictionaries | Tuples; Dictionaries; Methods; Programs
steps | Unpack | Create tuple; Assign variables; Use
cycle | Dictionary use | Add; Read; Update; Delete
@problems
## Moderate
P: Write a dictionary of three students with marks and print the marks of one.
A: d = {"A": 80, "B": 75, "C": 90}; print(d["B"]).
R: 3 | Dictionary
R: 3 | Access
## High
P: Differentiate a tuple and a list; create a one-element tuple.
A: Tuple is immutable, list mutable; t = (5,).
R: 2 | Mutability
R: 2 | Syntax
R: 2 | Use
R: 2 | One element
## Advanced
P: Write a program to count the frequency of each word in a sentence.
A: d = {}; for w in s.split(): d[w] = d.get(w, 0) + 1; print(d).
R: 2 | Split
R: 2 | Loop
R: 2 | Get default
R: 2 | Output
