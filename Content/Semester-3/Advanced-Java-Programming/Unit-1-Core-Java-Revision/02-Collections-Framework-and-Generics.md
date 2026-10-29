# Collections framework and generics
minutes: 40
yt: java collections framework list set map hashmap explained
yt: java generics wildcard bounded types
@study
The **Java Collections Framework** (`java.util`) gives ready data structures and algorithms.

## Interfaces
- `Collection` → `List` (ordered, duplicates allowed), `Set` (no duplicates), `Queue`/`Deque`.
- `Map` (key → value; not a Collection).

## Main implementations
| Interface | Class | Notes |
| --- | --- | --- |
| List | ArrayList | Resizable array; fast get by index, slow insert in middle |
| List | LinkedList | Doubly linked; fast insert/remove at ends |
| Set | HashSet | Hash table, no order, O(1) average |
| Set | LinkedHashSet | Keeps insertion order |
| Set | TreeSet | Sorted (red-black tree), O(log n) |
| Map | HashMap | Hash table, allows one null key |
| Map | TreeMap | Sorted by key |
| Queue | PriorityQueue | Smallest element first (heap) |

## Example
```java
import java.util.*;
public class CollDemo {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>(List.of("Ravi", "Anil", "Meena", "Anil"));
        Set<String> unique = new TreeSet<>(names);
        Map<String, Integer> count = new TreeMap<>();
        for (String n : names) count.merge(n, 1, Integer::sum);
        Collections.sort(names);
        PriorityQueue<Integer> pq = new PriorityQueue<>(List.of(5, 1, 3));
        System.out.println(names);
        System.out.println(unique);
        System.out.println(count);
        System.out.println(pq.poll() + " " + pq.poll());
    }
}
```
Output:
```
[Anil, Anil, Meena, Ravi]
[Anil, Meena, Ravi]
{Anil=2, Meena=1, Ravi=1}
1 3
```

## Iterating
Enhanced for, `Iterator` (supports `remove()`), `forEach` with lambda. Modifying a list while looping with enhanced for throws `ConcurrentModificationException` — use the iterator's `remove`.

## equals() and hashCode()
`HashMap`/`HashSet` use `hashCode()` to choose a bucket and `equals()` to compare. If two objects are equal they **must** have the same hash code. Override both together.

## Comparable and Comparator
- `Comparable<T>`: natural order via `compareTo` inside the class.
- `Comparator<T>`: external order, e.g. `list.sort(Comparator.comparing(Student::getMarks).reversed())`.

## Generics
Generics give **compile-time type safety** and remove casts.
```java
public class Box<T extends Comparable<T>> {
    private T value;
    Box(T v) { value = v; }
    boolean isBigger(Box<T> o) { return value.compareTo(o.value) > 0; }
    public static void main(String[] args) {
        System.out.println(new Box<>(7).isBigger(new Box<>(3)));
        System.out.println(new Box<>("apple").isBigger(new Box<>("pear")));
    }
}
```
Output:
```
true
false
```
Wildcards: `List<?>` (unknown), `List<? extends Number>` (read-only producer), `List<? super Integer>` (consumer). Generics use **type erasure**: type information is removed at run time. Primitives are not allowed (`List<int>` is illegal; use `Integer` with autoboxing).

## Hindi saransh
List में क्रम और duplicates चलते हैं, Set में duplicates नहीं, Map में key-value जोड़े होते हैं। Generics से type-safety मिलती है।

> HashMap for speed, TreeMap for sorted keys, LinkedHashMap for insertion order.
@qa
Q: Difference between ArrayList and LinkedList?
A: ArrayList is backed by an array with fast random access but slow insertion in the middle. LinkedList is a doubly linked list with fast insertion and deletion at known positions but slow indexed access.
Q: How does HashMap work?
A: It computes the key's hashCode to find a bucket, then uses equals() to find the exact key within the bucket. Collisions are chained in a list or tree.
Q: Why override hashCode when overriding equals?
A: Equal objects must produce the same hash code, otherwise hash-based collections cannot find them.
Q: Difference between Comparable and Comparator?
A: Comparable defines one natural ordering inside the class via compareTo; a Comparator defines a separate ordering and lets you have many.
Q: What is type erasure?
A: The compiler removes generic type information after checking, so at run time List<String> and List<Integer> are the same class.
@quiz
? Which collection stores unique elements in sorted order?
- HashSet
- ArrayList
+ TreeSet
- LinkedList
! TreeSet is a sorted set.
? Which interface does Map extend?
- Collection
- List
- Set
+ none of these
! Map is separate from the Collection hierarchy.
? Which allows duplicate elements?
- Set
+ List
- Map keys
- TreeSet
! Lists allow duplicates.
? List<int> is
- valid
+ invalid; use Integer
- faster
- sorted
! Generics need reference types.
? PriorityQueue.poll() returns
- the largest
+ the head (smallest by natural order)
- a random element
- the last element
! It is a min-heap by default.

@visual
tree | The Collection family (Map is separate) | Collection(List(ArrayList, LinkedList), Set(HashSet, TreeSet), Queue(PriorityQueue))

@problems
## Moderate
P: Differentiate between List, Set and Map with one implementation of each.
A: List: ordered, allows duplicates, access by index (ArrayList). Set: no duplicates (HashSet, no order; TreeSet, sorted). Map: stores key-value pairs with unique keys (HashMap).
R: 2 | List and Set
R: 2 | Map with an implementation
## High
P: Write code to count the words of "to be or not to be" with a Map and show the result when a TreeMap is used.
A: Map<String,Integer> m = new TreeMap<>(); for (String w : "to be or not to be".split(" ")) m.merge(w, 1, Integer::sum); System.out.println(m);
Output: {be=2, not=1, or=1, to=2}. TreeMap keeps keys sorted; a HashMap gives the same counts in no guaranteed order.
R: 2 | Loop with merge or containsKey and put
R: 2 | Correct counts
R: 1 | TreeMap sorted order
## Advanced
P: Write a generic method that returns the larger of two values and explain the bound. Why is List<Integer> not a List<Number>, and what does List<? extends Number> allow?
A: public static <T extends Comparable<T>> T max(T a, T b) { return a.compareTo(b) >= 0 ? a : b; } The bound T extends Comparable<T> guarantees compareTo exists.
List<Integer> is not a List<Number> because generics are invariant: if it were, you could add a Double through the Number view and break the Integer list. List<? extends Number> accepts a list of any Number subtype for reading values, but you cannot add to it. Generics are erased at runtime (type erasure).
R: 2 | Correct bounded generic method
R: 2 | Invariance explained
R: 1 | Wildcard read-only meaning
