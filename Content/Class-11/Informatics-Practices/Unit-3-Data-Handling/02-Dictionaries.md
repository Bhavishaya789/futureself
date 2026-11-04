# Dictionaries
minutes: 40
yt: class 11 informatics practices dictionary python key value
@study
A dictionary is an unordered (insertion-ordered from Python 3.7) mutable collection of key-value pairs written in curly braces, for example d = {"name": "Asha", "age": 16}. Keys must be unique and immutable (numbers, strings, tuples); values can be of any type and may repeat. Items are accessed by key, as d["name"]; a missing key raises KeyError, while d.get("x") returns None or a default. Adding or changing a pair uses d[key] = value. Deleting uses del d[key], pop(key) or popitem(), and clear() empties it. Methods: keys() returns the keys, values() the values, items() the (key, value) pairs, update() merges another dictionary, copy() makes a copy, setdefault() inserts a key if absent, and fromkeys() creates a dictionary from keys. len() gives the number of pairs and the in operator tests for a key, not a value. Traversal uses for k in d, for k, v in d.items(). Dictionaries are built with dict() or from a list of pairs. Nested dictionaries hold dictionaries as values. Typical programs: counting character frequency, counting words, storing student records and finding the key with the maximum value. sorted(d) sorts the keys. Dictionaries use hashing, which makes lookup very fast. Unlike lists, they are accessed by key and not by position. json files resemble dictionaries.
## Deep dive: Basics
Keys are unique; assigning a duplicate key overwrites the old value. Keys must be hashable, so lists cannot be keys but tuples can. Values may be lists or other dictionaries.
## Deep dive: Methods
get avoids errors for missing keys. update adds or replaces many pairs. pop removes a key and returns its value. items gives pairs for unpacking in loops. keys and values give views of the dictionary.
## Deep dive: Programs
Frequency counting: for ch in s: d[ch] = d.get(ch, 0) + 1. Student record: a dictionary of dictionaries. Searching by key is faster than searching a list.
## Hindi saransh
Dictionary key-value jodiyon ka sangrah hai; key unique aur immutable honi chahiye.
> Remember: in checks keys, not values.
@formulas
## Key facts
Dictionary | { } | Key-value
Keys | Unique | Immutable
get | Safe access | None
items | Pairs | Loop
update | Merge | Dictionary

@qa
Q: Which is a collection of key-value pairs?
A: Dictionary is a collection of key-value pairs.
Q: What do you know about Dictionary?
A: Dictionary is a collection of key-value pairs.
Q: Which is the unique identifier in a dictionary?
A: Key is the unique identifier in a dictionary.
Q: What do you know about Key?
A: Key is the unique identifier in a dictionary.
Q: Which is the data stored against a key?
A: Value is the data stored against a key.
Q: What do you know about Value?
A: Value is the data stored against a key.
Q: Which are used to write a dictionary?
A: Curly braces are used to write a dictionary.
Q: What do you know about Curly braces?
A: Curly braces are used to write a dictionary.
Q: Which are required in a dictionary?
A: Unique keys are required in a dictionary.
Q: What do you know about Unique keys?
A: Unique keys are required in a dictionary.
Q: What do you know about Immutable keys?
A: Immutable keys are required in a dictionary.
Q: Which is not allowed in a dictionary?
A: List as key is not allowed in a dictionary.
Q: What do you know about List as key?
A: List as key is not allowed in a dictionary.
Q: Which is allowed in a dictionary?
A: Tuple as key is allowed in a dictionary.
Q: What do you know about Tuple as key?
A: Tuple as key is allowed in a dictionary.
Q: Which overwrites the earlier value?
A: Duplicate key overwrites the earlier value.
Q: What do you know about Duplicate key?
A: Duplicate key overwrites the earlier value.
Q: Which is raised when a key is missing?
A: KeyError is raised when a key is missing.
Q: What do you know about KeyError?
A: KeyError is raised when a key is missing.
Q: Which returns None or a default for a missing key?
A: get method returns None or a default for a missing key.
Q: What do you know about get method?
A: Get method returns None or a default for a missing key.
Q: Which returns the keys of a dictionary?
A: keys method returns the keys of a dictionary.
Q: What do you know about keys method?
A: Keys method returns the keys of a dictionary.
Q: Which returns the values of a dictionary?
A: values method returns the values of a dictionary.
Q: What do you know about values method?
A: Values method returns the values of a dictionary.
Q: Which returns key-value pairs?
A: items method returns key-value pairs.
Q: What do you know about items method?
A: Items method returns key-value pairs.
Q: Which merges another dictionary?
A: update method merges another dictionary.
Q: What do you know about update method?
A: Update method merges another dictionary.
Q: Which removes a key and returns its value?
A: pop method removes a key and returns its value.
Q: What do you know about pop method?
A: Pop method removes a key and returns its value.
Q: Which removes the last inserted pair?
A: popitem method removes the last inserted pair.
Q: What do you know about popitem method?
A: Popitem method removes the last inserted pair.
Q: Which empties a dictionary?
A: clear method empties a dictionary.
Q: What do you know about clear method?
A: Clear method empties a dictionary.
Q: Which makes a shallow copy?
A: copy method makes a shallow copy.
Q: What do you know about copy method?
A: Copy method makes a shallow copy.
Q: Which inserts a key if it is absent?
A: setdefault method inserts a key if it is absent.
Q: What do you know about setdefault method?
A: Setdefault method inserts a key if it is absent.
Q: Which creates a dictionary from a sequence of keys?
A: fromkeys method creates a dictionary from a sequence of keys.
Q: What do you know about fromkeys method?
A: Fromkeys method creates a dictionary from a sequence of keys.
Q: Which deletes a pair by key?
A: del statement deletes a pair by key.
Q: What do you know about del statement?
A: Del statement deletes a pair by key.
Q: Which gives the number of pairs?
A: len function gives the number of pairs.
Q: What do you know about len function?
A: Len function gives the number of pairs.
Q: Which tests whether a key is present?
A: in operator tests whether a key is present.
Q: What do you know about in operator?
A: In operator tests whether a key is present.
Q: Which creates a dictionary?
A: dict function creates a dictionary.
Q: What do you know about dict function?
A: Dict function creates a dictionary.
Q: Which sorts the keys of a dictionary?
A: sorted function sorts the keys of a dictionary.
Q: What do you know about sorted function?
A: Sorted function sorts the keys of a dictionary.
Q: Which has dictionaries as values?
A: Nested dictionary has dictionaries as values.
Q: What do you know about Nested dictionary?
A: Nested dictionary has dictionaries as values.
Q: Which uses for k in d?
A: Traversal uses for k in d.
Q: What do you know about Traversal?
A: Traversal uses for k in d.
Q: Which uses for k, v in d.items()?
A: Items traversal uses for k, v in d.items().
Q: What do you know about Items traversal?
A: Items traversal uses for k, v in d.items().
Q: Which makes dictionary lookup fast?
A: Hashing makes dictionary lookup fast.
Q: What do you know about Hashing?
A: Hashing makes dictionary lookup fast.
Q: Which describes a dictionary?
A: Mutable describes a dictionary.
Q: What do you know about Mutable?
A: Mutable describes a dictionary.
Q: Which by insertion in Python 3.7 and later?
A: Ordered by insertion in Python 3.7 and later.
Q: What do you know about Ordered?
A: Ordered by insertion in Python 3.7 and later.
Q: Which is counted using a dictionary?
A: Frequency is counted using a dictionary.
Q: What do you know about Frequency?
A: Frequency is counted using a dictionary.
Q: Which can be stored as a dictionary?
A: Student record can be stored as a dictionary.
Q: What do you know about Student record?
A: Student record can be stored as a dictionary.
Q: Which is a data format similar to a dictionary?
A: JSON is a data format similar to a dictionary.
Q: What do you know about JSON?
A: JSON is a data format similar to a dictionary.
Q: Which is done as d[key]?
A: Value access is done as d[key].
Q: What do you know about Value access?
A: Value access is done as d[key].
Q: Which is done as d[key] = value?
A: Adding a pair is done as d[key] = value.
Q: What do you know about Adding a pair?
A: Adding a pair is done as d[key] = value.
Q: Which needs values method?
A: Membership of value needs values method.
Q: What do you know about Membership of value?
A: Membership of value needs values method.
Q: Which builds a dictionary in one line?
A: Dictionary comprehension builds a dictionary in one line.
Q: What do you know about Dictionary comprehension?
A: Dictionary comprehension builds a dictionary in one line.
Q: Which is a common dictionary program?
A: Word count is a common dictionary program.
Q: What do you know about Word count?
A: Word count is a common dictionary program.
Q: Which is found using max with a key function?
A: Max by value is found using max with a key function.
Q: What do you know about Max by value?
A: Max by value is found using max with a key function.
Q: Which is faster than searching a list?
A: Lookup speed is faster than searching a list.
Q: What do you know about Lookup speed?
A: Lookup speed is faster than searching a list.
Q: Which pair is also called an item?
A: Key-value pair is also called an item.
Q: What do you know about Key-value?
A: Key-value pair is also called an item.
Q: Which is written as two curly braces?
A: Empty dictionary is written as two curly braces.
Q: What do you know about Empty dictionary?
A: Empty dictionary is written as two curly braces.
Q: Which pattern uses get with default 0?
A: Counter pattern uses get with default 0.
Q: What do you know about Counter?
A: Counter pattern uses get with default 0.
Q: Which is the number of keys?
A: Dictionary length is the number of keys.
Q: What do you know about Dictionary length?
A: Dictionary length is the number of keys.
Q: Which can be given to get?
A: Default value can be given to get.
Q: What do you know about Default value?
A: Default value can be given to get.
Q: Which can be any type?
A: Value types can be any type.
Q: What do you know about Value types?
A: Value types can be any type.
Q: Which are separated by commas?
A: Pairs are separated by commas.
Q: What do you know about Pairs?
A: Pairs are separated by commas.
Q: Which separates key and value?
A: Colon separates key and value.
Q: What do you know about Colon?
A: Colon separates key and value.
Q: Which can pair two lists into a dictionary?
A: Zip can pair two lists into a dictionary.
Q: What do you know about Zip?
A: Zip can pair two lists into a dictionary.
Q: How is a dictionary written?
A: In curly braces as key-value pairs.
Q: Can keys repeat?
A: No, keys are unique.
Q: What does get do?
A: Returns the value or a default without error.
Q: What does items() return?
A: Key-value pairs.
Q: Can a list be a key?
A: No.
Q: What does in test in a dictionary?
A: Whether a key is present.
Q: What does update do?
A: Merges another dictionary.
Q: What error occurs for a missing key?
A: KeyError.
@quiz
? Which is a collection of key-value pairs?
- Zip
+ Dictionary
- Pairs
- Value
! Dictionary is a collection of key-value pairs.
? Which statement is true of Dictionary?
- Can be any type
- Are required in a dictionary
- Are used to write a dictionary
+ Is a collection of key-value pairs
! Dictionary is a collection of key-value pairs.
? Which is the unique identifier in a dictionary?
- get method
- update method
+ Key
- Max by value
! Key is the unique identifier in a dictionary.
? Which statement is true of Key?
- Merges another dictionary
- Removes a key and returns its value
- Creates a dictionary
+ Is the unique identifier in a dictionary
! Key is the unique identifier in a dictionary.
? Which is the data stored against a key?
- Pairs
+ Value
- Empty dictionary
- Immutable keys
! Value is the data stored against a key.
? Which statement is true of Value?
- Is faster than searching a list
- Merges another dictionary
- Is the unique identifier in a dictionary
+ Is the data stored against a key
! Value is the data stored against a key.
? Which are used to write a dictionary?
+ Curly braces
- Dictionary
- Dictionary length
- Key-value
! Curly braces are used to write a dictionary.
? Which statement is true of Curly braces?
- Pair is also called an item
- Returns None or a default for a missing key
- Creates a dictionary
+ Are used to write a dictionary
! Curly braces are used to write a dictionary.
? Which are required in a dictionary?
- del statement
+ Unique keys
- Frequency
- clear method
! Unique keys are required in a dictionary.
? Which statement is true of Unique keys?
- Creates a dictionary from a sequence of keys
- Is raised when a key is missing
- Pair is also called an item
+ Are required in a dictionary
! Unique keys are required in a dictionary.
? Which statement is true of Immutable keys?
- Makes dictionary lookup fast
+ Are required in a dictionary
- Creates a dictionary
- Is the number of keys
! Immutable keys are required in a dictionary.
? Which is not allowed in a dictionary?
+ List as key
- Unique keys
- items method
- in operator
! List as key is not allowed in a dictionary.
? Which statement is true of List as key?
- Merges another dictionary
+ Is not allowed in a dictionary
- Are used to write a dictionary
- Pattern uses get with default 0
! List as key is not allowed in a dictionary.
? Which is allowed in a dictionary?
+ Tuple as key
- Ordered
- update method
- Nested dictionary
! Tuple as key is allowed in a dictionary.
? Which statement is true of Tuple as key?
+ Is allowed in a dictionary
- Returns the values of a dictionary
- Returns None or a default for a missing key
- Are required in a dictionary
! Tuple as key is allowed in a dictionary.
? Which overwrites the earlier value?
- update method
- clear method
- Value
+ Duplicate key
! Duplicate key overwrites the earlier value.
? Which statement is true of Duplicate key?
+ Overwrites the earlier value
- Pattern uses get with default 0
- Separates key and value
- Merges another dictionary
! Duplicate key overwrites the earlier value.
? Which is raised when a key is missing?
+ KeyError
- sorted function
- keys method
- Frequency
! KeyError is raised when a key is missing.
? Which statement is true of KeyError?
- Makes dictionary lookup fast
- Is the unique identifier in a dictionary
- Creates a dictionary
+ Is raised when a key is missing
! KeyError is raised when a key is missing.
? Which returns None or a default for a missing key?
- Dictionary
- Value
+ get method
- setdefault method
! Get method returns None or a default for a missing key.
? Which statement is true of get method?
+ Returns None or a default for a missing key
- Is the number of keys
- Pair is also called an item
- Is done as d[key] = value
! Get method returns None or a default for a missing key.
? Which returns the keys of a dictionary?
- Counter
- Items traversal
- Adding a pair
+ keys method
! Keys method returns the keys of a dictionary.
? Which statement is true of keys method?
- Builds a dictionary in one line
- Is not allowed in a dictionary
- Gives the number of pairs
+ Returns the keys of a dictionary
! Keys method returns the keys of a dictionary.
? Which returns the values of a dictionary?
+ values method
- Dictionary comprehension
- Counter
- Default value
! Values method returns the values of a dictionary.
? Which statement is true of values method?
- Is a data format similar to a dictionary
- Is the data stored against a key
+ Returns the values of a dictionary
- Is a collection of key-value pairs
! Values method returns the values of a dictionary.
? Which returns key-value pairs?
- Pairs
- Zip
+ items method
- Membership of value
! Items method returns key-value pairs.
? Which statement is true of items method?
- Can be any type
- Is counted using a dictionary
+ Returns key-value pairs
- Has dictionaries as values
! Items method returns key-value pairs.
? Which merges another dictionary?
- Ordered
+ update method
- Max by value
- Tuple as key
! Update method merges another dictionary.
? Which statement is true of update method?
+ Merges another dictionary
- Is not allowed in a dictionary
- Sorts the keys of a dictionary
- Is a collection of key-value pairs
! Update method merges another dictionary.
? Which removes a key and returns its value?
+ pop method
- Items traversal
- values method
- Word count
! Pop method removes a key and returns its value.
? Which statement is true of pop method?
+ Removes a key and returns its value
- Returns None or a default for a missing key
- Creates a dictionary
- Makes dictionary lookup fast
! Pop method removes a key and returns its value.
? Which removes the last inserted pair?
- Immutable keys
- pop method
- values method
+ popitem method
! Popitem method removes the last inserted pair.
? Which statement is true of popitem method?
+ Removes the last inserted pair
- Gives the number of pairs
- Can be any type
- Is a collection of key-value pairs
! Popitem method removes the last inserted pair.
? Which empties a dictionary?
- get method
- Immutable keys
+ clear method
- Value
! Clear method empties a dictionary.
? Which statement is true of clear method?
- Creates a dictionary
- Are used to write a dictionary
- Overwrites the earlier value
+ Empties a dictionary
! Clear method empties a dictionary.
? Which makes a shallow copy?
- dict function
- JSON
- Curly braces
+ copy method
! Copy method makes a shallow copy.
? Which statement is true of copy method?
- Can be stored as a dictionary
- Are required in a dictionary
- Separates key and value
+ Makes a shallow copy
! Copy method makes a shallow copy.
? Which inserts a key if it is absent?
+ setdefault method
- Zip
- sorted function
- Dictionary comprehension
! Setdefault method inserts a key if it is absent.
? Which statement is true of setdefault method?
- Is a common dictionary program
- Is faster than searching a list
- Creates a dictionary from a sequence of keys
+ Inserts a key if it is absent
! Setdefault method inserts a key if it is absent.
? Which creates a dictionary from a sequence of keys?
+ fromkeys method
- Unique keys
- Items traversal
- Dictionary length
! Fromkeys method creates a dictionary from a sequence of keys.
? Which statement is true of fromkeys method?
- Uses for k in d
- Are required in a dictionary
+ Creates a dictionary from a sequence of keys
- Deletes a pair by key
! Fromkeys method creates a dictionary from a sequence of keys.
? Which deletes a pair by key?
- pop method
- Mutable
+ del statement
- JSON
! Del statement deletes a pair by key.
? Which statement is true of del statement?
- Makes a shallow copy
+ Deletes a pair by key
- Removes the last inserted pair
- Gives the number of pairs
! Del statement deletes a pair by key.
? Which gives the number of pairs?
+ len function
- get method
- sorted function
- Dictionary
! Len function gives the number of pairs.
? Which statement is true of len function?
- Merges another dictionary
+ Gives the number of pairs
- Is allowed in a dictionary
- Is the number of keys
! Len function gives the number of pairs.
? Which tests whether a key is present?
- Nested dictionary
+ in operator
- Ordered
- Hashing
! In operator tests whether a key is present.
? Which statement is true of in operator?
+ Tests whether a key is present
- Overwrites the earlier value
- Returns the values of a dictionary
- Describes a dictionary
! In operator tests whether a key is present.
? Which creates a dictionary?
- Empty dictionary
- setdefault method
- len function
+ dict function
! Dict function creates a dictionary.
? Which statement is true of dict function?
+ Creates a dictionary
- Is the data stored against a key
- Has dictionaries as values
- Is the number of keys
! Dict function creates a dictionary.
? Which sorts the keys of a dictionary?
+ sorted function
- setdefault method
- Dictionary comprehension
- Curly braces
! Sorted function sorts the keys of a dictionary.
? Which statement is true of sorted function?
- Is allowed in a dictionary
+ Sorts the keys of a dictionary
- Is written as two curly braces
- Gives the number of pairs
! Sorted function sorts the keys of a dictionary.
? Which has dictionaries as values?
- Frequency
- Dictionary
+ Nested dictionary
- Tuple as key
! Nested dictionary has dictionaries as values.
? Which statement is true of Nested dictionary?
- Is the unique identifier in a dictionary
+ Has dictionaries as values
- Are required in a dictionary
- Is a common dictionary program
! Nested dictionary has dictionaries as values.
? Which uses for k in d?
- copy method
- popitem method
+ Traversal
- Tuple as key
! Traversal uses for k in d.
? Which statement is true of Traversal?
+ Uses for k in d
- Is written as two curly braces
- Is a data format similar to a dictionary
- Can be stored as a dictionary
! Traversal uses for k in d.
? Which uses for k, v in d.items()?
- Hashing
- Membership of value
- Immutable keys
+ Items traversal
! Items traversal uses for k, v in d.items().
? Which statement is true of Items traversal?
- Removes a key and returns its value
- Makes a shallow copy
- Pair is also called an item
+ Uses for k, v in d.items()
! Items traversal uses for k, v in d.items().
? Which makes dictionary lookup fast?
+ Hashing
- Key
- Ordered
- Dictionary
! Hashing makes dictionary lookup fast.
? Which statement is true of Hashing?
- Are required in a dictionary
+ Makes dictionary lookup fast
- Is a collection of key-value pairs
- Creates a dictionary
! Hashing makes dictionary lookup fast.
? Which describes a dictionary?
- Pairs
- del statement
+ Mutable
- popitem method
! Mutable describes a dictionary.
? Which statement is true of Mutable?
- Pair is also called an item
- Is a collection of key-value pairs
- Merges another dictionary
+ Describes a dictionary
! Mutable describes a dictionary.
? Which by insertion in Python 3.7 and later?
- Max by value
+ Ordered
- dict function
- Tuple as key
! Ordered by insertion in Python 3.7 and later.
? Which statement is true of Ordered?
+ By insertion in Python 3.7 and later
- Empties a dictionary
- Returns the keys of a dictionary
- Is a common dictionary program
! Ordered by insertion in Python 3.7 and later.
? Which is counted using a dictionary?
- Value
+ Frequency
- get method
- Empty dictionary
! Frequency is counted using a dictionary.
? Which statement is true of Frequency?
- Overwrites the earlier value
+ Is counted using a dictionary
- Creates a dictionary from a sequence of keys
- Empties a dictionary
! Frequency is counted using a dictionary.
? Which can be stored as a dictionary?
- Colon
- values method
- Key
+ Student record
! Student record can be stored as a dictionary.
? Which statement is true of Student record?
+ Can be stored as a dictionary
- Creates a dictionary
- Can be given to get
- Are required in a dictionary
! Student record can be stored as a dictionary.
? Which is a data format similar to a dictionary?
- List as key
+ JSON
- Frequency
- Colon
! JSON is a data format similar to a dictionary.
? Which statement is true of JSON?
- Returns the keys of a dictionary
- Are separated by commas
+ Is a data format similar to a dictionary
- Removes a key and returns its value
! JSON is a data format similar to a dictionary.
? Which is done as d[key]?
- Counter
- Traversal
- in operator
+ Value access
! Value access is done as d[key].
? Which statement is true of Value access?
- Is written as two curly braces
- Empties a dictionary
+ Is done as d[key]
- Has dictionaries as values
! Value access is done as d[key].
? Which is done as d[key] = value?
- del statement
- items method
+ Adding a pair
- Word count
! Adding a pair is done as d[key] = value.
? Which statement is true of Adding a pair?
- Is the number of keys
- Is written as two curly braces
- Is a data format similar to a dictionary
+ Is done as d[key] = value
! Adding a pair is done as d[key] = value.
? Which needs values method?
- update method
+ Membership of value
- get method
- fromkeys method
! Membership of value needs values method.
? Which statement is true of Membership of value?
- Makes dictionary lookup fast
- Pattern uses get with default 0
- Creates a dictionary from a sequence of keys
+ Needs values method
! Membership of value needs values method.
? Which builds a dictionary in one line?
- Key-value
+ Dictionary comprehension
- keys method
- Max by value
! Dictionary comprehension builds a dictionary in one line.
? Which statement is true of Dictionary comprehension?
- Overwrites the earlier value
- Tests whether a key is present
+ Builds a dictionary in one line
- Returns None or a default for a missing key
! Dictionary comprehension builds a dictionary in one line.
? Which is a common dictionary program?
- fromkeys method
+ Word count
- Nested dictionary
- Key-value
! Word count is a common dictionary program.
? Which statement is true of Word count?
+ Is a common dictionary program
- Inserts a key if it is absent
- Can pair two lists into a dictionary
- Is a data format similar to a dictionary
! Word count is a common dictionary program.
? Which is found using max with a key function?
- clear method
- Key
- Counter
+ Max by value
! Max by value is found using max with a key function.
? Which statement is true of Max by value?
- Is a collection of key-value pairs
+ Is found using max with a key function
- Creates a dictionary
- Overwrites the earlier value
! Max by value is found using max with a key function.
? Which is faster than searching a list?
- Student record
- sorted function
+ Lookup speed
- List as key
! Lookup speed is faster than searching a list.
? Which statement is true of Lookup speed?
- Makes dictionary lookup fast
- Empties a dictionary
- Describes a dictionary
+ Is faster than searching a list
! Lookup speed is faster than searching a list.
? Which pair is also called an item?
- Curly braces
- Max by value
+ Key-value
- copy method
! Key-value pair is also called an item.
? Which statement is true of Key-value?
- Builds a dictionary in one line
- Is the data stored against a key
- Empties a dictionary
+ Pair is also called an item
! Key-value pair is also called an item.
? Which is written as two curly braces?
- Colon
- Value types
+ Empty dictionary
- Curly braces
! Empty dictionary is written as two curly braces.
? Which statement is true of Empty dictionary?
- Inserts a key if it is absent
- Pair is also called an item
- Is counted using a dictionary
+ Is written as two curly braces
! Empty dictionary is written as two curly braces.
? Which pattern uses get with default 0?
- Lookup speed
- popitem method
- List as key
+ Counter
! Counter pattern uses get with default 0.
? Which statement is true of Counter?
- Is not allowed in a dictionary
+ Pattern uses get with default 0
- Builds a dictionary in one line
- Is a common dictionary program
! Counter pattern uses get with default 0.
? Which is the number of keys?
- Empty dictionary
+ Dictionary length
- Unique keys
- update method
! Dictionary length is the number of keys.
? Which statement is true of Dictionary length?
- By insertion in Python 3.7 and later
+ Is the number of keys
- Removes the last inserted pair
- Pair is also called an item
! Dictionary length is the number of keys.
? Which can be given to get?
+ Default value
- Mutable
- items method
- copy method
! Default value can be given to get.
? Which statement is true of Default value?
- Sorts the keys of a dictionary
- Is the number of keys
+ Can be given to get
- Separates key and value
! Default value can be given to get.
? Which can be any type?
- Counter
- Nested dictionary
+ Value types
- List as key
! Value types can be any type.
? Which statement is true of Value types?
- Tests whether a key is present
- Describes a dictionary
+ Can be any type
- Gives the number of pairs
! Value types can be any type.
? Which are separated by commas?
- del statement
- Zip
- sorted function
+ Pairs
! Pairs are separated by commas.
? Which statement is true of Pairs?
+ Are separated by commas
- Removes the last inserted pair
- Is a collection of key-value pairs
- Inserts a key if it is absent
! Pairs are separated by commas.
? Which separates key and value?
- Duplicate key
- setdefault method
- JSON
+ Colon
! Colon separates key and value.
? Which statement is true of Colon?
- Is faster than searching a list
- Is the unique identifier in a dictionary
+ Separates key and value
- Are separated by commas
! Colon separates key and value.
? Which can pair two lists into a dictionary?
+ Zip
- setdefault method
- Hashing
- Nested dictionary
! Zip can pair two lists into a dictionary.
? Which statement is true of Zip?
- Is the unique identifier in a dictionary
- Is a collection of key-value pairs
- Has dictionaries as values
+ Can pair two lists into a dictionary
! Zip can pair two lists into a dictionary.
? Dictionary uses
- Index only
+ Key-value
- Rows
- Columns
! Pairs.
? Key must be
- Mutable
- List
- Set
+ Immutable
! Hashable.
? get() missing key gives
- Error
+ None
- Zero
- Empty
! Default.
? in checks
- Values
- Items
+ Keys
- Length
! Dictionary.
? items() gives
- Keys
- Values
+ Pairs
- Length
! Tuples.
? Empty dict
- [ ]
- ( )
+ { }
- < >
! Braces.
@visual
compare | List and dictionary | List=Index~Ordered; Dictionary=Key~Pairs
flow | Frequency count | Read char; get count; add one; store
blocks | Methods | keys; values; items; get
mind | Dictionary | Keys; Values; Methods; Programs
steps | Add a pair | Choose key; Assign value; Store; Display
@problems
## Moderate
P: What is the output of d = {1:2, 3:4}; d.get(5, 0)?
A: 0.
R: 3 | get
R: 3 | Default
## High
P: Write a program to count character frequency.
A: Loop over characters and update d[ch] = d.get(ch, 0) + 1.
R: 2 | Loop
R: 2 | get
R: 2 | Update
R: 2 | Print
## Advanced
P: Explain why keys must be immutable.
A: Keys are hashed for fast lookup; a changing key would change its hash.
R: 2 | Hashing
R: 2 | Immutable
R: 2 | Lookup
R: 2 | Example
