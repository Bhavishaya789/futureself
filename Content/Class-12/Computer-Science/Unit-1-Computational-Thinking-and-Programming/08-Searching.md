# Searching
minutes: 45
yt: class 12 computer science searching linear binary hashing complexity
@study
Searching finds the position of a target value in a collection. Linear search checks each element in turn until the target is found or the list ends; works on unsorted data; best case O(1), average and worst O(n). Binary search works only on sorted data: compare the target with the middle element; if equal, done; if the target is smaller, search the left half; otherwise the right half; repeat until found or the range is empty; each step halves the range, so time is O(log n); iterative version uses low, high and mid = (low+high)//2. Example: finding 23 in [2,5,8,12,16,23,38]: mid 12, then right half mid 23. Maximum comparisons for n elements is about log2(n) + 1; for 1000 items, about 10. Binary search needs random access, so it works well on lists. Hashing maps a key to an index using a hash function, e.g. key % table size, giving near O(1) average search; a collision occurs when two keys map to the same index and is resolved by chaining or open addressing (linear probing); a good hash function distributes keys uniformly; Python dictionaries and sets use hashing. Choose linear for small or unsorted data and binary for large sorted data; sorting costs O(n log n), worth it for many searches. Python also offers the in operator, index() and count().
## Deep dive: Linear search
Scans elements one by one; simple and works on any list but slow for large data.
## Deep dive: Binary search
Needs sorted data and halves the range each step, giving logarithmic time.
## Deep dive: Hashing
A hash function jumps straight to an index; collisions are handled by chaining or probing.
## Hindi saransh
Khoj: linear khoj, binary khoj aur hashing, unki jatilata.
> Remember: binary search requires sorted data; linear search does not.
@formulas
## Key facts
Linear | O(n) | Unsorted ok
Binary | O(log n) | Sorted only
mid | (low+high)//2
Hash | key % size
Collision | Same index

@qa
Q: Which finds a target in a collection?
A: Searching finds a target in a collection.
Q: What do you know about Searching?
A: Searching finds a target in a collection.
Q: Which is a position or not found?
A: Search result is a position or not found.
Q: What do you know about Search result?
A: Search result is a position or not found.
Q: Which is often returned as minus one?
A: Not found is often returned as minus one.
Q: What do you know about Not found?
A: Not found is often returned as minus one.
Q: Which checks elements one by one?
A: Linear search checks elements one by one.
Q: What do you know about Linear search?
A: Linear search checks elements one by one.
Q: Which works on unsorted data?
A: Linear search works on unsorted data.
Q: Which is order one?
A: Linear search best case is order one.
Q: What do you know about Linear search best case?
A: Linear search best case is order one.
Q: Which is order n?
A: Linear search worst case is order n.
Q: What do you know about Linear search worst case?
A: Linear search worst case is order n.
Q: Which is also called sequential search?
A: Linear search is also called sequential search.
Q: Which suits small lists?
A: Linear search suits small lists.
Q: Which needs sorted data?
A: Binary search needs sorted data.
Q: What do you know about Binary search?
A: Binary search needs sorted data.
Q: Which halves the range each step?
A: Binary search halves the range each step.
Q: Which is order log n?
A: Binary search time is order log n.
Q: What do you know about Binary search time?
A: Binary search time is order log n.
Q: Which is low plus high divided by two?
A: Binary search mid is low plus high divided by two.
Q: What do you know about Binary search mid?
A: Binary search mid is low plus high divided by two.
Q: Which compares the target with the middle?
A: Binary search compares the target with the middle.
Q: Which means search the left half?
A: Target smaller than mid means search the left half.
Q: What do you know about Target smaller than mid?
A: Target smaller than mid means search the left half.
Q: Which means search the right half?
A: Target larger than mid means search the right half.
Q: What do you know about Target larger than mid?
A: Target larger than mid means search the right half.
Q: Which stops when low exceeds high?
A: Binary search stops when low exceeds high.
Q: Which needs about ten comparisons?
A: Binary search on one thousand items needs about ten comparisons.
Q: What do you know about Binary search on one thousand items?
A: Binary search on one thousand items needs about ten comparisons.
Q: Which needs random access?
A: Binary search needs random access.
Q: What do you know about Binary search best case?
A: Binary search best case is order one.
Q: Which is a divide and conquer method?
A: Binary search is a divide and conquer method.
Q: Which maps a key to an index?
A: Hashing maps a key to an index.
Q: What do you know about Hashing?
A: Hashing maps a key to an index.
Q: Which computes the index from the key?
A: Hash function computes the index from the key.
Q: What do you know about Hash function?
A: Hash function computes the index from the key.
Q: Which stores values by index?
A: Hash table stores values by index.
Q: What do you know about Hash table?
A: Hash table stores values by index.
Q: Which takes constant time on average?
A: Hash lookup takes constant time on average.
Q: What do you know about Hash lookup?
A: Hash lookup takes constant time on average.
Q: Which occurs when two keys map to the same index?
A: Collision occurs when two keys map to the same index.
Q: What do you know about Collision?
A: Collision occurs when two keys map to the same index.
Q: Which stores colliding keys in a list?
A: Chaining stores colliding keys in a list.
Q: What do you know about Chaining?
A: Chaining stores colliding keys in a list.
Q: Which looks for the next empty slot?
A: Linear probing looks for the next empty slot.
Q: What do you know about Linear probing?
A: Linear probing looks for the next empty slot.
Q: Which spreads keys uniformly?
A: Good hash function spreads keys uniformly.
Q: What do you know about Good hash function?
A: Good hash function spreads keys uniformly.
Q: Which uses key mod table size?
A: Modulo hashing uses key mod table size.
Q: What do you know about Modulo hashing?
A: Modulo hashing uses key mod table size.
Q: Which uses hashing?
A: Python dictionary uses hashing.
Q: What do you know about Python dictionary?
A: Python dictionary uses hashing.
Q: What do you know about Python set?
A: Python set uses hashing.
Q: Which measures how full a hash table is?
A: Load factor measures how full a hash table is.
Q: What do you know about Load factor?
A: Load factor measures how full a hash table is.
Q: Which justify sorting first?
A: Many searches justify sorting first.
Q: What do you know about Many searches?
A: Many searches justify sorting first.
Q: Which is order n log n?
A: Sorting cost is order n log n.
Q: What do you know about Sorting cost?
A: Sorting cost is order n log n.
Q: Which tests membership in a list?
A: In operator tests membership in a list.
Q: What do you know about In operator?
A: In operator tests membership in a list.
Q: Which returns the first position?
A: Index method returns the first position.
Q: What do you know about Index method?
A: Index method returns the first position.
Q: Which returns occurrences?
A: Count method returns occurrences.
Q: What do you know about Count method?
A: Count method returns occurrences.
Q: Which depends on data order?
A: Search efficiency depends on data order.
Q: What do you know about Search efficiency?
A: Search efficiency depends on data order.
Q: Which happens when the item is last or absent?
A: Linear search worst case happens when the item is last or absent.
Q: Which discards half of the data each step?
A: Binary search discards half of the data each step.
Q: Which is faster than linear search on large sorted data?
A: Binary search is faster than linear search on large sorted data.
Q: Which uses integer division?
A: Binary search midpoint uses integer division.
Q: What do you know about Binary search midpoint?
A: Binary search midpoint uses integer division.
Q: Which runs while low is at most high?
A: Binary search loop runs while low is at most high.
Q: What do you know about Binary search loop?
A: Binary search loop runs while low is at most high.
Q: Which returns the position when equal?
A: Binary search returns the position when equal.
Q: Which gives wrong results?
A: Binary search on unsorted data gives wrong results.
Q: What do you know about Binary search on unsorted data?
A: Binary search on unsorted data gives wrong results.
Q: Which are about log base two of n?
A: Binary search iterations are about log base two of n.
Q: What do you know about Binary search iterations?
A: Binary search iterations are about log base two of n.
Q: Which needs no preparation?
A: Linear search needs no preparation.
Q: Which uses a simple loop?
A: Linear search uses a simple loop.
Q: Which can use enumerate?
A: Linear search on list can use enumerate.
Q: What do you know about Linear search on list?
A: Linear search on list can use enumerate.
Q: Which may need finding all matches?
A: Search for duplicates may need finding all matches.
Q: What do you know about Search for duplicates?
A: Search for duplicates may need finding all matches.
Q: Which should be immutable?
A: Hash key should be immutable.
Q: What do you know about Hash key?
A: Hash key should be immutable.
Q: Which should be fast to compute?
A: Hash function should be fast to compute.
Q: Which lies between zero and table size minus one?
A: Hash index lies between zero and table size minus one.
Q: What do you know about Hash index?
A: Hash index lies between zero and table size minus one.
Q: Which cannot be avoided entirely?
A: Hash collision cannot be avoided entirely.
Q: What do you know about Hash collision?
A: Hash collision cannot be avoided entirely.
Q: Which stores all items in the table itself?
A: Open addressing stores all items in the table itself.
Q: What do you know about Open addressing?
A: Open addressing stores all items in the table itself.
Q: Which computes a new index after a collision?
A: Rehashing computes a new index after a collision.
Q: What do you know about Rehashing?
A: Rehashing computes a new index after a collision.
Q: Which has no collisions?
A: Perfect hash has no collisions.
Q: What do you know about Perfect hash?
A: Perfect hash has no collisions.
Q: Which is average constant time?
A: Dictionary lookup is average constant time.
Q: What do you know about Dictionary lookup?
A: Dictionary lookup is average constant time.
Q: Which also supports fast search?
A: Binary search tree also supports fast search.
Q: What do you know about Binary search tree?
A: Binary search tree also supports fast search.
Q: Which guesses the position from values?
A: Interpolation search guesses the position from values.
Q: What do you know about Interpolation search?
A: Interpolation search guesses the position from values.
Q: What is searching?
A: Finding the position of a value in data.
Q: What is linear search?
A: Checking each element sequentially.
Q: What is binary search?
A: Repeatedly halving a sorted list to find a value.
Q: What is the complexity of binary search?
A: O(log n).
Q: What is hashing?
A: Mapping keys to indices with a hash function.
Q: What is a collision?
A: Two keys mapping to the same index.
Q: How are collisions resolved?
A: By chaining or open addressing like linear probing.
Q: Why must data be sorted for binary search?
A: Because halving relies on order.
@quiz
? Which finds a target in a collection?
- Binary search time
- Linear search best case
+ Searching
- Dictionary lookup
! Searching finds a target in a collection.
? Which statement is true of Searching?
+ Finds a target in a collection
- Uses hashing
- Cannot be avoided entirely
- Stores colliding keys in a list
! Searching finds a target in a collection.
? Which is a position or not found?
- Linear probing
- Hash collision
+ Search result
- Binary search time
! Search result is a position or not found.
? Which statement is true of Search result?
+ Is a position or not found
- Depends on data order
- Measures how full a hash table is
- Takes constant time on average
! Search result is a position or not found.
? Which is often returned as minus one?
- Linear search worst case
- Hash key
+ Not found
- Binary search midpoint
! Not found is often returned as minus one.
? Which statement is true of Not found?
- Is a position or not found
- Runs while low is at most high
+ Is often returned as minus one
- Can use enumerate
! Not found is often returned as minus one.
? Which checks elements one by one?
+ Linear search
- Load factor
- Count method
- Hash lookup
! Linear search checks elements one by one.
? Which statement is true of Linear search?
- May need finding all matches
+ Checks elements one by one
- Spreads keys uniformly
- Compares the target with the middle
! Linear search checks elements one by one.
? Which works on unsorted data?
- Binary search best case
- Search result
- Linear probing
+ Linear search
! Linear search works on unsorted data.
? Which is order one?
- Modulo hashing
+ Linear search best case
- Binary search iterations
- Hash function
! Linear search best case is order one.
? Which statement is true of Linear search best case?
- Is order n
- Works on unsorted data
+ Is order one
- Checks elements one by one
! Linear search best case is order one.
? Which is order n?
- Modulo hashing
- Linear search
- Hashing
+ Linear search worst case
! Linear search worst case is order n.
? Which statement is true of Linear search worst case?
+ Is order n
- Works on unsorted data
- Suits small lists
- Is order one
! Linear search worst case is order n.
? Which is also called sequential search?
- Count method
- In operator
- Binary search tree
+ Linear search
! Linear search is also called sequential search.
? Which suits small lists?
- Many searches
+ Linear search
- Binary search
- Binary search midpoint
! Linear search suits small lists.
? Which needs sorted data?
- Target larger than mid
+ Binary search
- Binary search mid
- Target smaller than mid
! Binary search needs sorted data.
? Which statement is true of Binary search?
+ Needs sorted data
- Needs about ten comparisons
- Is order one
- Is low plus high divided by two
! Binary search needs sorted data.
? Which halves the range each step?
- Binary search time
+ Binary search
- Target smaller than mid
- Target larger than mid
! Binary search halves the range each step.
? Which is order log n?
- Target smaller than mid
+ Binary search time
- Binary search
- Binary search on one thousand items
! Binary search time is order log n.
? Which statement is true of Binary search time?
+ Is order log n
- Needs random access
- Means search the left half
- Needs sorted data
! Binary search time is order log n.
? Which is low plus high divided by two?
+ Binary search mid
- Target larger than mid
- Binary search
- Binary search time
! Binary search mid is low plus high divided by two.
? Which statement is true of Binary search mid?
+ Is low plus high divided by two
- Halves the range each step
- Is order log n
- Means search the right half
! Binary search mid is low plus high divided by two.
? Which compares the target with the middle?
- Binary search best case
+ Binary search
- Binary search time
- Binary search on one thousand items
! Binary search compares the target with the middle.
? Which means search the left half?
+ Target smaller than mid
- Binary search time
- Binary search
- Target larger than mid
! Target smaller than mid means search the left half.
? Which statement is true of Target smaller than mid?
- Means search the right half
- Needs about ten comparisons
- Halves the range each step
+ Means search the left half
! Target smaller than mid means search the left half.
? Which means search the right half?
- Binary search
+ Target larger than mid
- Binary search mid
- Binary search best case
! Target larger than mid means search the right half.
? Which statement is true of Target larger than mid?
- Stops when low exceeds high
+ Means search the right half
- Is a divide and conquer method
- Needs sorted data
! Target larger than mid means search the right half.
? Which stops when low exceeds high?
+ Binary search
- Binary search on one thousand items
- Binary search best case
- Binary search time
! Binary search stops when low exceeds high.
? Which needs about ten comparisons?
- Binary search best case
+ Binary search on one thousand items
- Target smaller than mid
- Binary search mid
! Binary search on one thousand items needs about ten comparisons.
? Which statement is true of Binary search on one thousand items?
- Compares the target with the middle
+ Needs about ten comparisons
- Is a divide and conquer method
- Needs sorted data
! Binary search on one thousand items needs about ten comparisons.
? Which needs random access?
- Binary search time
- Binary search mid
- Binary search on one thousand items
+ Binary search
! Binary search needs random access.
? Which statement is true of Binary search best case?
- Is low plus high divided by two
- Halves the range each step
+ Is order one
- Needs sorted data
! Binary search best case is order one.
? Which is a divide and conquer method?
- Target larger than mid
- Binary search time
- Binary search on one thousand items
+ Binary search
! Binary search is a divide and conquer method.
? Which maps a key to an index?
- Hash table
+ Hashing
- Python dictionary
- Load factor
! Hashing maps a key to an index.
? Which statement is true of Hashing?
- Uses hashing
+ Maps a key to an index
- Stores values by index
- Spreads keys uniformly
! Hashing maps a key to an index.
? Which computes the index from the key?
- Hash lookup
- Linear probing
- Python dictionary
+ Hash function
! Hash function computes the index from the key.
? Which statement is true of Hash function?
+ Computes the index from the key
- Takes constant time on average
- Uses key mod table size
- Looks for the next empty slot
! Hash function computes the index from the key.
? Which stores values by index?
- Python set
- Good hash function
+ Hash table
- Hash lookup
! Hash table stores values by index.
? Which statement is true of Hash table?
+ Stores values by index
- Takes constant time on average
- Computes the index from the key
- Measures how full a hash table is
! Hash table stores values by index.
? Which takes constant time on average?
- Linear probing
+ Hash lookup
- Good hash function
- Hash function
! Hash lookup takes constant time on average.
? Which statement is true of Hash lookup?
- Stores colliding keys in a list
- Measures how full a hash table is
+ Takes constant time on average
- Maps a key to an index
! Hash lookup takes constant time on average.
? Which occurs when two keys map to the same index?
- Modulo hashing
- Good hash function
- Hash function
+ Collision
! Collision occurs when two keys map to the same index.
? Which statement is true of Collision?
- Stores values by index
- Maps a key to an index
+ Occurs when two keys map to the same index
- Stores colliding keys in a list
! Collision occurs when two keys map to the same index.
? Which stores colliding keys in a list?
- Hashing
+ Chaining
- Python dictionary
- Hash table
! Chaining stores colliding keys in a list.
? Which statement is true of Chaining?
- Looks for the next empty slot
- Uses key mod table size
+ Stores colliding keys in a list
- Computes the index from the key
! Chaining stores colliding keys in a list.
? Which looks for the next empty slot?
- Collision
- Hashing
+ Linear probing
- Python set
! Linear probing looks for the next empty slot.
? Which statement is true of Linear probing?
+ Looks for the next empty slot
- Uses hashing
- Stores values by index
- Maps a key to an index
! Linear probing looks for the next empty slot.
? Which spreads keys uniformly?
- Modulo hashing
+ Good hash function
- Chaining
- Linear probing
! Good hash function spreads keys uniformly.
? Which statement is true of Good hash function?
- Takes constant time on average
- Stores colliding keys in a list
+ Spreads keys uniformly
- Occurs when two keys map to the same index
! Good hash function spreads keys uniformly.
? Which uses key mod table size?
+ Modulo hashing
- Hash lookup
- Linear probing
- Load factor
! Modulo hashing uses key mod table size.
? Which statement is true of Modulo hashing?
- Spreads keys uniformly
+ Uses key mod table size
- Computes the index from the key
- Measures how full a hash table is
! Modulo hashing uses key mod table size.
? Which uses hashing?
- Chaining
- Hashing
+ Python dictionary
- Linear probing
! Python dictionary uses hashing.
? Which statement is true of Python dictionary?
- Measures how full a hash table is
+ Uses hashing
- Computes the index from the key
- Stores values by index
! Python dictionary uses hashing.
? Which statement is true of Python set?
- Measures how full a hash table is
- Stores colliding keys in a list
- Spreads keys uniformly
+ Uses hashing
! Python set uses hashing.
? Which measures how full a hash table is?
- Modulo hashing
- Python set
- Good hash function
+ Load factor
! Load factor measures how full a hash table is.
? Which statement is true of Load factor?
- Maps a key to an index
+ Measures how full a hash table is
- Takes constant time on average
- Uses key mod table size
! Load factor measures how full a hash table is.
? Which justify sorting first?
- Perfect hash
+ Many searches
- Linear search worst case
- Binary search on unsorted data
! Many searches justify sorting first.
? Which statement is true of Many searches?
- May need finding all matches
- Uses integer division
- Can use enumerate
+ Justify sorting first
! Many searches justify sorting first.
? Which is order n log n?
- Hash key
+ Sorting cost
- Binary search loop
- Index method
! Sorting cost is order n log n.
? Which statement is true of Sorting cost?
- Stores all items in the table itself
- Runs while low is at most high
+ Is order n log n
- Guesses the position from values
! Sorting cost is order n log n.
? Which tests membership in a list?
+ In operator
- Count method
- Binary search tree
- Many searches
! In operator tests membership in a list.
? Which statement is true of In operator?
- Returns occurrences
- Is faster than linear search on large sorted data
+ Tests membership in a list
- Stores all items in the table itself
! In operator tests membership in a list.
? Which returns the first position?
- Binary search on unsorted data
- Many searches
- Interpolation search
+ Index method
! Index method returns the first position.
? Which statement is true of Index method?
- Guesses the position from values
+ Returns the first position
- Is average constant time
- Are about log base two of n
! Index method returns the first position.
? Which returns occurrences?
+ Count method
- Hash function
- In operator
- Index method
! Count method returns occurrences.
? Which statement is true of Count method?
- Uses integer division
- Happens when the item is last or absent
- Needs no preparation
+ Returns occurrences
! Count method returns occurrences.
? Which depends on data order?
+ Search efficiency
- Binary search
- In operator
- Rehashing
! Search efficiency depends on data order.
? Which statement is true of Search efficiency?
- Lies between zero and table size minus one
- Returns the position when equal
- Discards half of the data each step
+ Depends on data order
! Search efficiency depends on data order.
? Which happens when the item is last or absent?
+ Linear search worst case
- Binary search
- Linear search on list
- Open addressing
! Linear search worst case happens when the item is last or absent.
? Which discards half of the data each step?
- Binary search midpoint
- Linear search
- Hash key
+ Binary search
! Binary search discards half of the data each step.
? Which is faster than linear search on large sorted data?
- Hash index
+ Binary search
- Hash key
- Linear search worst case
! Binary search is faster than linear search on large sorted data.
? Which uses integer division?
+ Binary search midpoint
- Hash index
- Binary search iterations
- Search efficiency
! Binary search midpoint uses integer division.
? Which statement is true of Binary search midpoint?
- Has no collisions
- Returns the first position
+ Uses integer division
- Guesses the position from values
! Binary search midpoint uses integer division.
? Which runs while low is at most high?
+ Binary search loop
- Hash collision
- In operator
- Binary search midpoint
! Binary search loop runs while low is at most high.
? Which statement is true of Binary search loop?
- Justify sorting first
+ Runs while low is at most high
- Gives wrong results
- Returns the position when equal
! Binary search loop runs while low is at most high.
? Which returns the position when equal?
- Binary search loop
- Linear search worst case
- Linear search
+ Binary search
! Binary search returns the position when equal.
? Which gives wrong results?
- Search for duplicates
+ Binary search on unsorted data
- Interpolation search
- Binary search
! Binary search on unsorted data gives wrong results.
? Which statement is true of Binary search on unsorted data?
- Is order n log n
- Stores all items in the table itself
- Computes a new index after a collision
+ Gives wrong results
! Binary search on unsorted data gives wrong results.
? Which are about log base two of n?
- Count method
+ Binary search iterations
- Perfect hash
- Hash function
! Binary search iterations are about log base two of n.
? Which statement is true of Binary search iterations?
- Computes a new index after a collision
+ Are about log base two of n
- Needs no preparation
- Stores all items in the table itself
! Binary search iterations are about log base two of n.
? Which needs no preparation?
- Count method
+ Linear search
- Hash index
- Binary search
! Linear search needs no preparation.
? Which uses a simple loop?
- Linear search on list
+ Linear search
- Interpolation search
- Hash index
! Linear search uses a simple loop.
? Which can use enumerate?
- Interpolation search
+ Linear search on list
- Index method
- Open addressing
! Linear search on list can use enumerate.
? Which statement is true of Linear search on list?
+ Can use enumerate
- Also supports fast search
- Discards half of the data each step
- Is order n log n
! Linear search on list can use enumerate.
? Which may need finding all matches?
- Index method
- Count method
+ Search for duplicates
- Linear search
! Search for duplicates may need finding all matches.
? Which statement is true of Search for duplicates?
+ May need finding all matches
- Happens when the item is last or absent
- Returns the position when equal
- Cannot be avoided entirely
! Search for duplicates may need finding all matches.
? Which should be immutable?
- Interpolation search
- Hash index
- Binary search loop
+ Hash key
! Hash key should be immutable.
? Which statement is true of Hash key?
- Guesses the position from values
- Runs while low is at most high
- Justify sorting first
+ Should be immutable
! Hash key should be immutable.
? Which should be fast to compute?
- Binary search
- Binary search tree
+ Hash function
- Open addressing
! Hash function should be fast to compute.
? Which lies between zero and table size minus one?
- Linear search
- Perfect hash
- Count method
+ Hash index
! Hash index lies between zero and table size minus one.
? Which statement is true of Hash index?
- Are about log base two of n
+ Lies between zero and table size minus one
- Should be fast to compute
- Has no collisions
! Hash index lies between zero and table size minus one.
? Which cannot be avoided entirely?
- Perfect hash
- Binary search on unsorted data
+ Hash collision
- Linear search
! Hash collision cannot be avoided entirely.
? Which statement is true of Hash collision?
- Has no collisions
- Uses a simple loop
+ Cannot be avoided entirely
- Happens when the item is last or absent
! Hash collision cannot be avoided entirely.
? Which stores all items in the table itself?
- In operator
+ Open addressing
- Linear search on list
- Sorting cost
! Open addressing stores all items in the table itself.
? Which statement is true of Open addressing?
- May need finding all matches
- Depends on data order
- Returns the first position
+ Stores all items in the table itself
! Open addressing stores all items in the table itself.
? Which computes a new index after a collision?
- Dictionary lookup
+ Rehashing
- Many searches
- Hash collision
! Rehashing computes a new index after a collision.
? Which statement is true of Rehashing?
- Justify sorting first
- Uses a simple loop
- Discards half of the data each step
+ Computes a new index after a collision
! Rehashing computes a new index after a collision.
? Which has no collisions?
+ Perfect hash
- Linear search worst case
- Index method
- Sorting cost
! Perfect hash has no collisions.
? Which statement is true of Perfect hash?
- Discards half of the data each step
+ Has no collisions
- Uses integer division
- Can use enumerate
! Perfect hash has no collisions.
? Which is average constant time?
- Open addressing
+ Dictionary lookup
- Hash function
- Index method
! Dictionary lookup is average constant time.
? Which statement is true of Dictionary lookup?
- Runs while low is at most high
- Has no collisions
- Stores all items in the table itself
+ Is average constant time
! Dictionary lookup is average constant time.
? Which also supports fast search?
+ Binary search tree
- Index method
- Linear search on list
- Search for duplicates
! Binary search tree also supports fast search.
? Which statement is true of Binary search tree?
- Gives wrong results
- Tests membership in a list
+ Also supports fast search
- Lies between zero and table size minus one
! Binary search tree also supports fast search.
? Which guesses the position from values?
- Hash function
- Linear search worst case
- Linear search on list
+ Interpolation search
! Interpolation search guesses the position from values.
? Which statement is true of Interpolation search?
- Happens when the item is last or absent
- Is order n log n
- Returns the first position
+ Guesses the position from values
! Interpolation search guesses the position from values.
? Sorted needed
+ Binary
- Linear
- Hash
- None
! Search.
? Log n
+ Binary
- Linear
- Bubble
- Selection
! Time.
? Collision
- New key
+ Same index
- Empty
- Sorted
! Meaning.
? Mid index
- low-high
- high*2
+ (low+high)//2
- low
! Formula.
? Unsorted ok
- Binary
- Both no
- Hash only
+ Linear
! Search.
? Constant average
- Linear
- Binary
+ Hashing
- Sorting
! Time.
@visual
flow | Binary search | Find mid; Compare; Halve range; Found or empty
compare | Linear and binary | Linear=Any order~O(n); Binary=Sorted only~O(log n)
blocks | Collision handling | Chaining; Linear probing; Rehash; Good hash
mind | Searching | Linear; Binary; Hashing; Complexity
steps | Binary | Low high; Mid; Compare; Narrow
@problems
## Moderate
P: When can binary search be used?
A: Only when the list is sorted.
R: 3 | Sorted
R: 3 | Random access
## High
P: Trace binary search for 23 in 2 5 8 12 16 23 38.
A: mid is 12, 23 is greater so search right half; mid is 23 and it is found.
R: 2 | First mid
R: 2 | Right half
R: 2 | Second mid
R: 2 | Found
## Advanced
P: Write an iterative binary search.
A: Use low and high; mid=(low+high)//2; return mid if equal; set high=mid-1 or low=mid+1; return -1 when low exceeds high.
R: 2 | Loop
R: 2 | Mid
R: 2 | Update
R: 2 | Return
