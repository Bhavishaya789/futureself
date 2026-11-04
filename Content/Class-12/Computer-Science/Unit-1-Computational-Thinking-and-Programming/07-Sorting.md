# Sorting
minutes: 45
yt: class 12 computer science sorting bubble selection insertion time complexity stable python
@study
Sorting arranges data in ascending or descending order, which speeds up searching and makes data easier to read. Bubble sort repeatedly compares adjacent elements and swaps them if out of order; after each pass the largest element settles at the end; n-1 passes; best case O(n) with an early-exit flag, average and worst O(n squared); stable and in place. Selection sort finds the minimum of the unsorted part and swaps it into position; always O(n squared) comparisons but at most n-1 swaps; not stable in the usual form; in place. Insertion sort builds a sorted portion by inserting each new element into its correct place by shifting larger elements; best case O(n) for already sorted data, worst O(n squared); stable; efficient for small or nearly sorted data and online data. Python offers list.sort() which sorts in place and sorted() which returns a new list, with reverse=True and key arguments; Python uses Timsort, O(n log n). Terms: pass (one scan through data), swap, comparison, stable sort (equal elements keep their original order), in place (needs O(1) extra memory). Example: sorting [5,2,4] by insertion: 2,5,4 then 2,4,5. Merge sort and quick sort are faster divide and conquer methods with O(n log n) average time, beyond the syllabus. Choose algorithm by size, partial order and memory.
## Deep dive: Bubble sort
Adjacent swaps push the largest value to the end each pass. Add a swapped flag to stop early.
## Deep dive: Selection and insertion
Selection picks the minimum each pass; insertion shifts larger elements to place the new one.
## Deep dive: Complexity
All three are O(n squared) in the worst case; insertion and bubble reach O(n) when data is already sorted.
## Hindi saransh
Chhantna: bubble, selection aur insertion sort, jatilata aur stable chhantna.
> Remember: insertion sort is best for nearly sorted data.
@formulas
## Key facts
Bubble | Adjacent swaps | O(n2)
Selection | Minimum | n-1 swaps
Insertion | Shift and insert | O(n) best
sort() | In place
sorted() | New list

@qa
Q: Which arranges data in order?
A: Sorting arranges data in order.
Q: What do you know about Sorting?
A: Sorting arranges data in order.
Q: Which goes from smallest to largest?
A: Ascending order goes from smallest to largest.
Q: What do you know about Ascending order?
A: Ascending order goes from smallest to largest.
Q: Which makes searching faster?
A: Sorting makes searching faster.
Q: Which is one scan of the data?
A: Pass is one scan of the data.
Q: What do you know about Pass?
A: Pass is one scan of the data.
Q: Which exchanges two elements?
A: Swap exchanges two elements.
Q: What do you know about Swap?
A: Swap exchanges two elements.
Q: Which keeps equal elements in original order?
A: Stable sort keeps equal elements in original order.
Q: What do you know about Stable sort?
A: Stable sort keeps equal elements in original order.
Q: Which needs constant extra memory?
A: In place sort needs constant extra memory.
Q: What do you know about In place sort?
A: In place sort needs constant extra memory.
Q: Which compares adjacent elements?
A: Bubble sort compares adjacent elements.
Q: What do you know about Bubble sort?
A: Bubble sort compares adjacent elements.
Q: Which moves the largest element to the end each pass?
A: Bubble sort moves the largest element to the end each pass.
Q: Which number n minus one?
A: Bubble sort passes number n minus one.
Q: What do you know about Bubble sort passes?
A: Bubble sort passes number n minus one.
Q: Which is order n squared?
A: Bubble sort worst case is order n squared.
Q: What do you know about Bubble sort worst case?
A: Bubble sort worst case is order n squared.
Q: Which stops early on sorted data?
A: Bubble sort with flag stops early on sorted data.
Q: What do you know about Bubble sort with flag?
A: Bubble sort with flag stops early on sorted data.
Q: Which is order n with a flag?
A: Bubble sort best case is order n with a flag.
Q: What do you know about Bubble sort best case?
A: Bubble sort best case is order n with a flag.
Q: Which is stable?
A: Bubble sort is stable.
Q: Which finds the minimum of the unsorted part?
A: Selection sort finds the minimum of the unsorted part.
Q: What do you know about Selection sort?
A: Selection sort finds the minimum of the unsorted part.
Q: Which are at most n minus one?
A: Selection sort swaps are at most n minus one.
Q: What do you know about Selection sort swaps?
A: Selection sort swaps are at most n minus one.
Q: Which always makes order n squared comparisons?
A: Selection sort always makes order n squared comparisons.
Q: Which is not stable in its basic form?
A: Selection sort is not stable in its basic form.
Q: Which inserts each element in the sorted part?
A: Insertion sort inserts each element in the sorted part.
Q: What do you know about Insertion sort?
A: Insertion sort inserts each element in the sorted part.
Q: Which shifts larger elements right?
A: Insertion sort shifts larger elements right.
Q: Which is order n?
A: Insertion sort best case is order n.
Q: What do you know about Insertion sort best case?
A: Insertion sort best case is order n.
Q: Which suits nearly sorted data?
A: Insertion sort suits nearly sorted data.
Q: Which suits small data?
A: Insertion sort suits small data.
Q: Which works as data arrives?
A: Insertion sort works as data arrives.
Q: Which sort hands like insertion sort?
A: Card players sort hands like insertion sort.
Q: What do you know about Card players?
A: Card players sort hands like insertion sort.
Q: Which sorts in place?
A: List sort method sorts in place.
Q: What do you know about List sort method?
A: List sort method sorts in place.
Q: Which returns None?
A: List sort method returns None.
Q: Which returns a new list?
A: Sorted function returns a new list.
Q: What do you know about Sorted function?
A: Sorted function returns a new list.
Q: Which sorts in descending order?
A: Reverse true sorts in descending order.
Q: What do you know about Reverse true?
A: Reverse true sorts in descending order.
Q: Which customises the sort order?
A: Key parameter customises the sort order.
Q: What do you know about Key parameter?
A: Key parameter customises the sort order.
Q: Which is the algorithm used by Python?
A: Timsort is the algorithm used by Python.
Q: What do you know about Timsort?
A: Timsort is the algorithm used by Python.
Q: Which is n log n?
A: Python sort complexity is n log n.
Q: What do you know about Python sort complexity?
A: Python sort complexity is n log n.
Q: Which is a divide and conquer sort?
A: Merge sort is a divide and conquer sort.
Q: What do you know about Merge sort?
A: Merge sort is a divide and conquer sort.
Q: What do you know about Quick sort?
A: Quick sort is a divide and conquer sort.
Q: What do you know about Merge sort complexity?
A: Merge sort complexity is n log n.
Q: Which has a pivot?
A: Quick sort has a pivot.
Q: Which allows binary search?
A: Sorted data allows binary search.
Q: What do you know about Sorted data?
A: Sorted data allows binary search.
Q: Which measures sorting cost?
A: Comparison count measures sorting cost.
Q: What do you know about Comparison count?
A: Comparison count measures sorting cost.
Q: Which describes growth with input size?
A: Time complexity describes growth with input size.
Q: What do you know about Time complexity?
A: Time complexity describes growth with input size.
Q: Which describes memory use?
A: Space complexity describes memory use.
Q: What do you know about Space complexity?
A: Space complexity describes memory use.
Q: Which describes the upper bound?
A: Big O notation describes the upper bound.
Q: What do you know about Big O notation?
A: Big O notation describes the upper bound.
Q: Which comes from large values bubbling to the top?
A: Bubble sort name comes from large values bubbling to the top.
Q: What do you know about Bubble sort name?
A: Bubble sort name comes from large values bubbling to the top.
Q: Which is in place?
A: Bubble sort is in place.
Q: Which moves larger elements one step right?
A: Insertion sort shifting moves larger elements one step right.
Q: What do you know about Insertion sort shifting?
A: Insertion sort shifting moves larger elements one step right.
Q: Which places one element in its final position?
A: Selection sort pass places one element in its final position.
Q: What do you know about Selection sort pass?
A: Selection sort pass places one element in its final position.
Q: Which places the largest remaining element?
A: Bubble sort pass places the largest remaining element.
Q: What do you know about Bubble sort pass?
A: Bubble sort pass places the largest remaining element.
Q: Which has each element not greater than the next?
A: Sorted list has each element not greater than the next.
Q: What do you know about Sorted list?
A: Sorted list has each element not greater than the next.
Q: Which goes from largest to smallest?
A: Descending order goes from largest to smallest.
Q: What do you know about Descending order?
A: Descending order goes from largest to smallest.
Q: Which follows alphabetical order?
A: Sorting strings follows alphabetical order.
Q: What do you know about Sorting strings?
A: Sorting strings follows alphabetical order.
Q: Which can sort by length?
A: Sort key function can sort by length.
Q: What do you know about Sort key function?
A: Sort key function can sort by length.
Q: Which compares the first item first?
A: Sorting a list of tuples compares the first item first.
Q: What do you know about Sorting a list of tuples?
A: Sorting a list of tuples compares the first item first.
Q: Which matters when sorting by multiple keys?
A: Sort stability matters when sorting by multiple keys.
Q: What do you know about Sort stability?
A: Sort stability matters when sorting by multiple keys.
Q: Which is the best case for insertion sort?
A: Already sorted input is the best case for insertion sort.
Q: What do you know about Already sorted input?
A: Already sorted input is the best case for insertion sort.
Q: Which is the worst case for insertion sort?
A: Reverse sorted input is the worst case for insertion sort.
Q: What do you know about Reverse sorted input?
A: Reverse sorted input is the worst case for insertion sort.
Q: Which does fewer swaps than bubble sort?
A: Selection sort does fewer swaps than bubble sort.
Q: Which depends on data size?
A: Sorting algorithm choice depends on data size.
Q: What do you know about Sorting algorithm choice?
A: Sorting algorithm choice depends on data size.
Q: Which needs extra memory?
A: Merge sort needs extra memory.
Q: Which uses a heap?
A: Heap sort uses a heap.
Q: What do you know about Heap sort?
A: Heap sort uses a heap.
Q: Which avoids comparisons?
A: Counting sort avoids comparisons.
Q: What do you know about Counting sort?
A: Counting sort avoids comparisons.
Q: What is sorting?
A: Arranging data in ascending or descending order.
Q: How does bubble sort work?
A: It repeatedly swaps adjacent out of order elements.
Q: How does selection sort work?
A: It selects the minimum and places it in position.
Q: How does insertion sort work?
A: It inserts each element into the sorted part.
Q: What is a stable sort?
A: One that keeps equal elements in their original order.
Q: Difference between sort() and sorted()?
A: sort() changes the list in place; sorted() returns a new list.
Q: What is the worst case of bubble sort?
A: O(n squared).
Q: Which sort suits nearly sorted data?
A: Insertion sort.
@quiz
? Which arranges data in order?
- Stable sort
+ Sorting
- Pass
- Swap
! Sorting arranges data in order.
? Which statement is true of Sorting?
- Exchanges two elements
- Goes from smallest to largest
- Keeps equal elements in original order
+ Arranges data in order
! Sorting arranges data in order.
? Which goes from smallest to largest?
- Stable sort
- In place sort
- Sorting
+ Ascending order
! Ascending order goes from smallest to largest.
? Which statement is true of Ascending order?
+ Goes from smallest to largest
- Makes searching faster
- Exchanges two elements
- Keeps equal elements in original order
! Ascending order goes from smallest to largest.
? Which makes searching faster?
+ Sorting
- Stable sort
- Ascending order
- Pass
! Sorting makes searching faster.
? Which is one scan of the data?
- Ascending order
- Sorting
- Swap
+ Pass
! Pass is one scan of the data.
? Which statement is true of Pass?
- Exchanges two elements
- Keeps equal elements in original order
- Arranges data in order
+ Is one scan of the data
! Pass is one scan of the data.
? Which exchanges two elements?
- Stable sort
- In place sort
- Sorting
+ Swap
! Swap exchanges two elements.
? Which statement is true of Swap?
+ Exchanges two elements
- Arranges data in order
- Makes searching faster
- Keeps equal elements in original order
! Swap exchanges two elements.
? Which keeps equal elements in original order?
+ Stable sort
- Sorting
- In place sort
- Swap
! Stable sort keeps equal elements in original order.
? Which statement is true of Stable sort?
- Needs constant extra memory
+ Keeps equal elements in original order
- Goes from smallest to largest
- Makes searching faster
! Stable sort keeps equal elements in original order.
? Which needs constant extra memory?
- Ascending order
+ In place sort
- Swap
- Pass
! In place sort needs constant extra memory.
? Which statement is true of In place sort?
- Makes searching faster
- Is one scan of the data
- Exchanges two elements
+ Needs constant extra memory
! In place sort needs constant extra memory.
? Which compares adjacent elements?
- Bubble sort with flag
- Bubble sort passes
+ Bubble sort
- Bubble sort best case
! Bubble sort compares adjacent elements.
? Which statement is true of Bubble sort?
+ Compares adjacent elements
- Stops early on sorted data
- Is order n with a flag
- Number n minus one
! Bubble sort compares adjacent elements.
? Which moves the largest element to the end each pass?
+ Bubble sort
- Bubble sort worst case
- Bubble sort with flag
- Bubble sort passes
! Bubble sort moves the largest element to the end each pass.
? Which number n minus one?
- Bubble sort best case
- Bubble sort
- Bubble sort with flag
+ Bubble sort passes
! Bubble sort passes number n minus one.
? Which statement is true of Bubble sort passes?
- Compares adjacent elements
- Moves the largest element to the end each pass
+ Number n minus one
- Is order n with a flag
! Bubble sort passes number n minus one.
? Which is order n squared?
- Bubble sort with flag
+ Bubble sort worst case
- Bubble sort
- Bubble sort best case
! Bubble sort worst case is order n squared.
? Which statement is true of Bubble sort worst case?
+ Is order n squared
- Number n minus one
- Is order n with a flag
- Is stable
! Bubble sort worst case is order n squared.
? Which stops early on sorted data?
- Bubble sort
- Bubble sort worst case
+ Bubble sort with flag
- Bubble sort best case
! Bubble sort with flag stops early on sorted data.
? Which statement is true of Bubble sort with flag?
- Is stable
- Compares adjacent elements
- Number n minus one
+ Stops early on sorted data
! Bubble sort with flag stops early on sorted data.
? Which is order n with a flag?
- Bubble sort
- Bubble sort with flag
- Bubble sort worst case
+ Bubble sort best case
! Bubble sort best case is order n with a flag.
? Which statement is true of Bubble sort best case?
+ Is order n with a flag
- Stops early on sorted data
- Moves the largest element to the end each pass
- Is stable
! Bubble sort best case is order n with a flag.
? Which is stable?
+ Bubble sort
- Bubble sort worst case
- Bubble sort best case
- Bubble sort passes
! Bubble sort is stable.
? Which finds the minimum of the unsorted part?
- Bubble sort
+ Selection sort
- Sort stability
- Bubble sort pass
! Selection sort finds the minimum of the unsorted part.
? Which statement is true of Selection sort?
- Makes searching faster
- Describes the upper bound
+ Finds the minimum of the unsorted part
- Keeps equal elements in original order
! Selection sort finds the minimum of the unsorted part.
? Which are at most n minus one?
- Sorting algorithm choice
- Sorting a list of tuples
- Sorting strings
+ Selection sort swaps
! Selection sort swaps are at most n minus one.
? Which statement is true of Selection sort swaps?
+ Are at most n minus one
- Finds the minimum of the unsorted part
- Is not stable in its basic form
- Always makes order n squared comparisons
! Selection sort swaps are at most n minus one.
? Which always makes order n squared comparisons?
- Sorting strings
+ Selection sort
- Sorting a list of tuples
- Merge sort complexity
! Selection sort always makes order n squared comparisons.
? Which is not stable in its basic form?
- Insertion sort best case
- Space complexity
- Big O notation
+ Selection sort
! Selection sort is not stable in its basic form.
? Which inserts each element in the sorted part?
- Descending order
+ Insertion sort
- Merge sort complexity
- Time complexity
! Insertion sort inserts each element in the sorted part.
? Which statement is true of Insertion sort?
- Has a pivot
+ Inserts each element in the sorted part
- Finds the minimum of the unsorted part
- Moves larger elements one step right
! Insertion sort inserts each element in the sorted part.
? Which shifts larger elements right?
- Selection sort
+ Insertion sort
- Sorted list
- Counting sort
! Insertion sort shifts larger elements right.
? Which is order n?
- Bubble sort best case
- Selection sort
- Sorted data
+ Insertion sort best case
! Insertion sort best case is order n.
? Which statement is true of Insertion sort best case?
- Works as data arrives
+ Is order n
- Shifts larger elements right
- Inserts each element in the sorted part
! Insertion sort best case is order n.
? Which suits nearly sorted data?
- Bubble sort passes
+ Insertion sort
- Counting sort
- Bubble sort
! Insertion sort suits nearly sorted data.
? Which suits small data?
- Selection sort
- Sorting a list of tuples
+ Insertion sort
- Time complexity
! Insertion sort suits small data.
? Which works as data arrives?
- Already sorted input
- Sorting algorithm choice
+ Insertion sort
- Time complexity
! Insertion sort works as data arrives.
? Which sort hands like insertion sort?
- Python sort complexity
+ Card players
- Merge sort complexity
- Bubble sort with flag
! Card players sort hands like insertion sort.
? Which statement is true of Card players?
- Suits nearly sorted data
- Inserts each element in the sorted part
- Is stable
+ Sort hands like insertion sort
! Card players sort hands like insertion sort.
? Which sorts in place?
- Key parameter
- Python sort complexity
+ List sort method
- Timsort
! List sort method sorts in place.
? Which statement is true of List sort method?
- Is the algorithm used by Python
+ Sorts in place
- Sorts in descending order
- Returns a new list
! List sort method sorts in place.
? Which returns None?
- Python sort complexity
- Timsort
- Key parameter
+ List sort method
! List sort method returns None.
? Which returns a new list?
- Reverse true
- List sort method
+ Sorted function
- Timsort
! Sorted function returns a new list.
? Which statement is true of Sorted function?
- Sorts in place
+ Returns a new list
- Customises the sort order
- Is the algorithm used by Python
! Sorted function returns a new list.
? Which sorts in descending order?
- Timsort
+ Reverse true
- List sort method
- Python sort complexity
! Reverse true sorts in descending order.
? Which statement is true of Reverse true?
- Returns a new list
- Customises the sort order
+ Sorts in descending order
- Is n log n
! Reverse true sorts in descending order.
? Which customises the sort order?
+ Key parameter
- Reverse true
- Sorted function
- Timsort
! Key parameter customises the sort order.
? Which statement is true of Key parameter?
- Returns None
- Sorts in descending order
+ Customises the sort order
- Is the algorithm used by Python
! Key parameter customises the sort order.
? Which is the algorithm used by Python?
- Python sort complexity
- Key parameter
- List sort method
+ Timsort
! Timsort is the algorithm used by Python.
? Which statement is true of Timsort?
- Is n log n
+ Is the algorithm used by Python
- Returns None
- Sorts in descending order
! Timsort is the algorithm used by Python.
? Which is n log n?
- List sort method
+ Python sort complexity
- Timsort
- Reverse true
! Python sort complexity is n log n.
? Which statement is true of Python sort complexity?
- Customises the sort order
- Returns None
+ Is n log n
- Sorts in place
! Python sort complexity is n log n.
? Which is a divide and conquer sort?
- Sorting a list of tuples
- Bubble sort name
+ Merge sort
- Merge sort complexity
! Merge sort is a divide and conquer sort.
? Which statement is true of Merge sort?
+ Is a divide and conquer sort
- Places one element in its final position
- Compares the first item first
- Follows alphabetical order
! Merge sort is a divide and conquer sort.
? Which statement is true of Quick sort?
- Is in place
- Compares the first item first
+ Is a divide and conquer sort
- Is the best case for insertion sort
! Quick sort is a divide and conquer sort.
? Which statement is true of Merge sort complexity?
- Can sort by length
- Depends on data size
+ Is n log n
- Needs extra memory
! Merge sort complexity is n log n.
? Which has a pivot?
- Merge sort
+ Quick sort
- Big O notation
- Bubble sort name
! Quick sort has a pivot.
? Which allows binary search?
+ Sorted data
- Already sorted input
- Descending order
- Merge sort
! Sorted data allows binary search.
? Which statement is true of Sorted data?
- Comes from large values bubbling to the top
- Depends on data size
- Moves larger elements one step right
+ Allows binary search
! Sorted data allows binary search.
? Which measures sorting cost?
- Merge sort
- Counting sort
- Selection sort
+ Comparison count
! Comparison count measures sorting cost.
? Which statement is true of Comparison count?
- Follows alphabetical order
- Is n log n
- Comes from large values bubbling to the top
+ Measures sorting cost
! Comparison count measures sorting cost.
? Which describes growth with input size?
+ Time complexity
- Insertion sort
- Already sorted input
- Comparison count
! Time complexity describes growth with input size.
? Which statement is true of Time complexity?
- Comes from large values bubbling to the top
+ Describes growth with input size
- Goes from largest to smallest
- Follows alphabetical order
! Time complexity describes growth with input size.
? Which describes memory use?
- Counting sort
- Time complexity
+ Space complexity
- Insertion sort
! Space complexity describes memory use.
? Which statement is true of Space complexity?
- Has each element not greater than the next
- Is the best case for insertion sort
- Places the largest remaining element
+ Describes memory use
! Space complexity describes memory use.
? Which describes the upper bound?
- Merge sort complexity
+ Big O notation
- Merge sort
- Bubble sort
! Big O notation describes the upper bound.
? Which statement is true of Big O notation?
- Goes from largest to smallest
+ Describes the upper bound
- Describes memory use
- Avoids comparisons
! Big O notation describes the upper bound.
? Which comes from large values bubbling to the top?
- Insertion sort shifting
- Bubble sort pass
- Space complexity
+ Bubble sort name
! Bubble sort name comes from large values bubbling to the top.
? Which statement is true of Bubble sort name?
+ Comes from large values bubbling to the top
- Measures sorting cost
- Needs extra memory
- Allows binary search
! Bubble sort name comes from large values bubbling to the top.
? Which is in place?
- Reverse sorted input
- Bubble sort pass
+ Bubble sort
- Heap sort
! Bubble sort is in place.
? Which moves larger elements one step right?
+ Insertion sort shifting
- Descending order
- Sorting algorithm choice
- Big O notation
! Insertion sort shifting moves larger elements one step right.
? Which statement is true of Insertion sort shifting?
- Is n log n
+ Moves larger elements one step right
- Is the best case for insertion sort
- Describes the upper bound
! Insertion sort shifting moves larger elements one step right.
? Which places one element in its final position?
- Counting sort
+ Selection sort pass
- Insertion sort shifting
- Bubble sort
! Selection sort pass places one element in its final position.
? Which statement is true of Selection sort pass?
- Places the largest remaining element
- Is a divide and conquer sort
+ Places one element in its final position
- Is in place
! Selection sort pass places one element in its final position.
? Which places the largest remaining element?
+ Bubble sort pass
- Descending order
- Insertion sort
- Big O notation
! Bubble sort pass places the largest remaining element.
? Which statement is true of Bubble sort pass?
+ Places the largest remaining element
- Has each element not greater than the next
- Has a pivot
- Measures sorting cost
! Bubble sort pass places the largest remaining element.
? Which has each element not greater than the next?
- Quick sort
- Big O notation
+ Sorted list
- Insertion sort shifting
! Sorted list has each element not greater than the next.
? Which statement is true of Sorted list?
- Measures sorting cost
- Matters when sorting by multiple keys
+ Has each element not greater than the next
- Can sort by length
! Sorted list has each element not greater than the next.
? Which goes from largest to smallest?
- Big O notation
- Bubble sort name
- Heap sort
+ Descending order
! Descending order goes from largest to smallest.
? Which statement is true of Descending order?
- Compares the first item first
- Measures sorting cost
- Is in place
+ Goes from largest to smallest
! Descending order goes from largest to smallest.
? Which follows alphabetical order?
+ Sorting strings
- Comparison count
- Insertion sort
- Sorted list
! Sorting strings follows alphabetical order.
? Which statement is true of Sorting strings?
+ Follows alphabetical order
- Matters when sorting by multiple keys
- Places the largest remaining element
- Moves larger elements one step right
! Sorting strings follows alphabetical order.
? Which can sort by length?
- Merge sort
- Sorting a list of tuples
+ Sort key function
- Heap sort
! Sort key function can sort by length.
? Which statement is true of Sort key function?
+ Can sort by length
- Is a divide and conquer sort
- Is the best case for insertion sort
- Is in place
! Sort key function can sort by length.
? Which compares the first item first?
+ Sorting a list of tuples
- Space complexity
- Sorted list
- Comparison count
! Sorting a list of tuples compares the first item first.
? Which statement is true of Sorting a list of tuples?
- Is a divide and conquer sort
- Can sort by length
+ Compares the first item first
- Has a pivot
! Sorting a list of tuples compares the first item first.
? Which matters when sorting by multiple keys?
- Bubble sort pass
- Quick sort
+ Sort stability
- Bubble sort name
! Sort stability matters when sorting by multiple keys.
? Which statement is true of Sort stability?
- Avoids comparisons
- Has a pivot
+ Matters when sorting by multiple keys
- Describes the upper bound
! Sort stability matters when sorting by multiple keys.
? Which is the best case for insertion sort?
- Descending order
+ Already sorted input
- Bubble sort pass
- Time complexity
! Already sorted input is the best case for insertion sort.
? Which statement is true of Already sorted input?
+ Is the best case for insertion sort
- Allows binary search
- Measures sorting cost
- Is the worst case for insertion sort
! Already sorted input is the best case for insertion sort.
? Which is the worst case for insertion sort?
- Already sorted input
+ Reverse sorted input
- Space complexity
- Merge sort complexity
! Reverse sorted input is the worst case for insertion sort.
? Which statement is true of Reverse sorted input?
- Avoids comparisons
+ Is the worst case for insertion sort
- Does fewer swaps than bubble sort
- Places one element in its final position
! Reverse sorted input is the worst case for insertion sort.
? Which does fewer swaps than bubble sort?
- Sorting a list of tuples
- Sort stability
+ Selection sort
- Sorted data
! Selection sort does fewer swaps than bubble sort.
? Which depends on data size?
- Heap sort
- Bubble sort
+ Sorting algorithm choice
- Sorting a list of tuples
! Sorting algorithm choice depends on data size.
? Which statement is true of Sorting algorithm choice?
- Can sort by length
+ Depends on data size
- Places the largest remaining element
- Comes from large values bubbling to the top
! Sorting algorithm choice depends on data size.
? Which needs extra memory?
- Comparison count
+ Merge sort
- Heap sort
- Bubble sort
! Merge sort needs extra memory.
? Which uses a heap?
- Merge sort complexity
+ Heap sort
- Counting sort
- Comparison count
! Heap sort uses a heap.
? Which statement is true of Heap sort?
+ Uses a heap
- Has a pivot
- Does fewer swaps than bubble sort
- Allows binary search
! Heap sort uses a heap.
? Which avoids comparisons?
- Sort key function
- Bubble sort pass
+ Counting sort
- Space complexity
! Counting sort avoids comparisons.
? Which statement is true of Counting sort?
- Needs extra memory
- Depends on data size
+ Avoids comparisons
- Is the worst case for insertion sort
! Counting sort avoids comparisons.
? Adjacent swap
- Selection
+ Bubble
- Insertion
- Merge
! Sort.
? Minimum each pass
- Bubble
- Insertion
- Quick
+ Selection
! Sort.
? New list
- sort
+ sorted
- reverse
- append
! Python.
? Best case n
+ Insertion
- Selection
- Merge
- None
! Sort.
? Python algorithm
- Heapsort
- Radix
+ Timsort
- Bogo
! Name.
? Equal order kept
- Unstable
- Inplace
+ Stable
- Cyclic
! Property.
@visual
flow | Bubble pass | Compare pair; Swap if larger; Next pair; Largest at end
compare | sort and sorted | sort=In place~Returns None; sorted=New list~Original kept
blocks | Algorithms | Bubble; Selection; Insertion; Timsort
mind | Sorting | Bubble; Selection; Insertion; Python
steps | Insertion | Take key; Shift larger; Insert; Repeat
@problems
## Moderate
P: Sort 5 2 4 using one pass of bubble sort.
A: 2 4 5
R: 3 | Compare 5 and 2
R: 3 | Compare 5 and 4
## High
P: Compare bubble and selection sort.
A: Both are O(n squared); bubble swaps adjacent elements and may stop early, selection makes at most n-1 swaps and always scans fully.
R: 2 | Complexity
R: 2 | Swaps
R: 2 | Early exit
R: 2 | Stability
## Advanced
P: Write insertion sort in Python.
A: For i from 1: key=a[i]; j=i-1; while j>=0 and a[j]>key: a[j+1]=a[j]; j-=1; then a[j+1]=key.
R: 2 | Key
R: 2 | Shift loop
R: 2 | Insert
R: 2 | Result
