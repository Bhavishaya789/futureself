# Lambda expressions and the Stream API
minutes: 35
yt: java 8 lambda functional interface stream api
yt: java streams filter map reduce collect
@study
Java 8 added **functional programming** features.

## Functional interface and lambda
A **functional interface** has exactly one abstract method (`Runnable`, `Comparator`, `Function<T,R>`, `Predicate<T>`, `Consumer<T>`, `Supplier<T>`). A **lambda** `(params) -> expression` implements it concisely. A **method reference** `String::length` is shorthand.

## Stream API
A stream is a pipeline over a data source (it does not store data or modify the source):
1. **Source:** `list.stream()`, `Arrays.stream`, `Stream.of`, `IntStream.range`.
2. **Intermediate** (lazy) operations: `filter`, `map`, `sorted`, `distinct`, `limit`.
3. **Terminal** operation (starts the work): `collect`, `forEach`, `count`, `sum`, `reduce`, `anyMatch`.
```java
import java.util.*;
import java.util.stream.*;
public class StreamDemo {
    record Student(String name, int marks) {}
    public static void main(String[] args) {
        List<Student> list = List.of(new Student("Ravi", 78), new Student("Anil", 91),
                                     new Student("Meena", 85), new Student("Kiran", 62));
        List<String> toppers = list.stream().filter(s -> s.marks() >= 80)
                .sorted(Comparator.comparingInt(Student::marks).reversed())
                .map(Student::name).collect(Collectors.toList());
        double avg = list.stream().mapToInt(Student::marks).average().orElse(0);
        int sum = IntStream.rangeClosed(1, 5).sum();
        System.out.println(toppers);
        System.out.println(avg);
        System.out.println(sum);
        System.out.println(list.stream().anyMatch(s -> s.marks() < 70));
    }
}
```
Output:
```
[Anil, Meena]
79.0
15
true
```

## Optional
`Optional<T>` represents a value that may be absent, avoiding null checks: `opt.orElse("none")`, `opt.ifPresent(...)`.

## Parallel streams
`list.parallelStream()` splits work across cores; useful only for large, CPU-heavy, independent tasks.

## Why use streams?
Short, readable code; operations are declarative ("what" rather than "how").

## Common functional interfaces
| Interface | Method | Use |
| --- | --- | --- |
| Predicate<T> | boolean test(T) | filtering |
| Function<T,R> | R apply(T) | mapping |
| Consumer<T> | void accept(T) | forEach |
| Supplier<T> | T get() | lazy creation |
| UnaryOperator<T> / BinaryOperator<T> | T apply | reduce |
| Comparator<T> | int compare(T,T) | sorting |

## Collectors
`Collectors.toList()`, `toSet()`, `joining(", ")`, `counting()`, `groupingBy(classifier)`, `partitioningBy(predicate)`, `toMap(keyFn, valueFn)`. Example: `list.stream().collect(Collectors.groupingBy(s -> s.marks() >= 80))` splits students into two groups.

## Lambda rules
- A lambda can use local variables only if they are **effectively final** (never reassigned).
- `this` inside a lambda refers to the enclosing class, unlike an anonymous class.
- Lambdas replace anonymous classes for single-method interfaces: `new Thread(() -> work())`.

## Default and static methods in interfaces
Java 8 let interfaces carry `default` methods (with a body) so that new methods like `forEach` could be added to old interfaces without breaking existing classes.

## Hindi saransh
Lambda छोटा anonymous function है। Stream data पर filter, map, collect जैसे operations की pipeline बनाता है।

> Intermediate operations are lazy; nothing runs until a terminal operation is called.
@qa
Q: What is a functional interface?
A: An interface with exactly one abstract method, which can be implemented by a lambda expression.
Q: Difference between intermediate and terminal operations?
A: Intermediate operations such as filter and map return a new stream and are lazy. Terminal operations such as collect or count trigger execution and end the stream.
Q: Can a stream be reused after a terminal operation?
A: No. A stream can be consumed only once; a second use throws IllegalStateException.
Q: What does map do and how does it differ from filter?
A: map transforms each element into another value; filter keeps only elements that satisfy a condition.
Q: What is Optional?
A: A container that may or may not hold a non-null value, used to avoid null pointer errors.
@quiz
? Which is a terminal operation?
- filter
- map
+ collect
- sorted
! collect produces the final result.
? A lambda can implement
- any interface
+ a functional interface
- an abstract class
- an enum
! Only one abstract method is allowed.
? Streams are
- eager
+ lazy until a terminal operation
- stored in memory permanently
- always parallel
! Intermediate steps run only when needed.
? Predicate<T> returns
- T
- void
+ boolean
- String
! It is used for tests such as filtering.
? String::length is a
+ method reference
- constructor
- exception
- package
! A shorthand for a lambda calling length.

@visual
flow | A stream pipeline | Source such as a list > filter keeps matching items > map transforms each item > collect or reduce gives the result

@problems
## Moderate
P: What is a functional interface? Write a lambda for Comparator<String> that sorts by length.
A: A functional interface has exactly one abstract method (Runnable, Comparator, Function). A lambda gives its implementation: Comparator<String> byLen = (a, b) -> a.length() - b.length(); or list.sort(Comparator.comparingInt(String::length));
R: 2 | Functional interface definition
R: 2 | Correct lambda
## High
P: Use streams to find the sum of the squares of the even numbers from 1 to 10. What is the result?
A: IntStream.rangeClosed(1, 10).filter(i -> i % 2 == 0).map(i -> i * i).sum(); The even numbers are 2, 4, 6, 8, 10 with squares 4, 16, 36, 64, 100. Sum = 220.
R: 3 | Correct pipeline
R: 2 | Result 220
## Advanced
P: Group the words apple, fig, kiwi, plum, pear by length using streams and give the result. What is the difference between intermediate and terminal operations, and why is a stream lazy?
A: words.stream().collect(Collectors.groupingBy(String::length)); Result: {3=[fig], 4=[kiwi, plum, pear], 5=[apple]}.
Intermediate operations (filter, map, sorted) return a new stream and do nothing yet; terminal operations (collect, forEach, sum) start the processing. Streams are lazy: elements flow through the whole pipeline only when a terminal operation runs, which allows short-circuiting like limit or findFirst.
R: 2 | Grouping result
R: 2 | Intermediate versus terminal
R: 1 | Laziness explained
