# Revision: OOP, exceptions and strings
minutes: 35
yt: java oop concepts inheritance polymorphism abstraction encapsulation
yt: java exception handling try catch finally throws custom exception
@study
Advanced Java builds on core Java. This lesson refreshes the parts used everywhere later.

## Four pillars of OOP
- **Encapsulation:** private fields with public getters/setters.
- **Inheritance:** `class Dog extends Animal` reuses code. Java allows single inheritance of classes, but many interfaces.
- **Polymorphism:** one call, many forms. *Overloading* (same name, different parameters, compile time) and *overriding* (subclass redefines a method, run time).
- **Abstraction:** `abstract` classes and `interface`s hide details and define contracts.

## Run-time polymorphism example
```java
public class Shapes {
    static abstract class Shape {
        abstract double area();
        public String toString() { return getClass().getSimpleName() + " area=" + String.format("%.2f", area()); }
    }
    static class Circle extends Shape {
        double r; Circle(double r) { this.r = r; }
        double area() { return Math.PI * r * r; }
    }
    static class Rect extends Shape {
        double w, h; Rect(double w, double h) { this.w = w; this.h = h; }
        double area() { return w * h; }
    }
    public static void main(String[] args) {
        Shape[] shapes = { new Circle(2), new Rect(3, 4) };
        for (Shape s : shapes) System.out.println(s);
    }
}
```
Output:
```
Circle area=12.57
Rect area=12.00
```
The reference type is `Shape` but the method that runs depends on the real object.

## Exceptions
An **exception** is an event that disrupts normal flow. Hierarchy: `Throwable` → `Error` (not meant to be caught, e.g. `OutOfMemoryError`) and `Exception`.
- **Checked** exceptions (`IOException`, `SQLException`) must be handled or declared with `throws`.
- **Unchecked** (`RuntimeException`: `NullPointerException`, `ArithmeticException`, `ArrayIndexOutOfBoundsException`) need not be.
```java
public class ExDemo {
    static class LowBalance extends Exception {
        LowBalance(String m) { super(m); }
    }
    static void withdraw(int bal, int amt) throws LowBalance {
        if (amt > bal) throw new LowBalance("need " + (amt - bal) + " more");
    }
    public static void main(String[] args) {
        try {
            withdraw(100, 150);
        } catch (LowBalance e) {
            System.out.println("caught: " + e.getMessage());
        } finally {
            System.out.println("finally always runs");
        }
        try { int x = 5 / 0; } catch (ArithmeticException e) { System.out.println(e.getMessage()); }
    }
}
```
Output:
```
caught: need 50 more
finally always runs
/ by zero
```
**try-with-resources** closes `AutoCloseable` objects (files, connections) automatically.

## Strings
`String` is **immutable**; use `StringBuilder` for repeated edits (not thread-safe, fast) or `StringBuffer` (synchronised). Compare with `equals()`, not `==` (which compares references). Common methods: `length`, `charAt`, `substring`, `indexOf`, `split`, `trim`, `toUpperCase`, `replace`, `String.join`.

## Hindi saransh (हिंदी सारांश)
OOP के चार स्तंभ हैं: encapsulation, inheritance, polymorphism, abstraction। Exceptions को try-catch-finally से संभाला जाता है; checked exception को handle करना ज़रूरी है।

> Overriding is decided at run time by the real object, overloading at compile time by the arguments.
@qa
Q: Difference between overloading and overriding?
A: Overloading uses the same method name with different parameters in one class and is resolved at compile time. Overriding redefines a superclass method in a subclass with the same signature and is resolved at run time.
Q: Checked versus unchecked exceptions?
A: Checked exceptions are verified by the compiler and must be caught or declared; unchecked exceptions (subclasses of RuntimeException) need not be.
Q: What does finally do?
A: It contains code that runs whether or not an exception occurs, usually releasing resources.
Q: Why is String immutable?
A: Immutability makes strings safe to share, cache (string pool), use as hash keys and in security-sensitive code.
Q: Difference between == and equals() on Strings?
A: == compares object references; equals() compares the character contents.
@quiz
? Run-time polymorphism is achieved by
- overloading
+ overriding
- constructors
- static methods
! The overriding method is chosen from the actual object.
? Which is a checked exception?
- ArithmeticException
- NullPointerException
+ IOException
- ArrayIndexOutOfBoundsException
! IOException must be handled or declared.
? Which block always executes?
- try
- catch
+ finally
- throw
! finally runs in both normal and exceptional cases.
? A class can extend
- many classes
+ one class
- no class
- two classes
! Java supports single class inheritance.
? Which class is best for many string modifications?
- String
+ StringBuilder
- Object
- Integer
! String creates a new object each time.

@visual
tree | The Java exception hierarchy | Throwable(Error, Exception(IOException, RuntimeException(NullPointerException, ArithmeticException)))

@problems
## Moderate
P: Name the four pillars of OOP and give a one-line Java example of each.
A: Encapsulation: private fields with public getters and setters. Inheritance: class Dog extends Animal. Polymorphism: a method overridden in a subclass and called through an Animal reference. Abstraction: an abstract class or interface that hides the details, such as interface Shape with area().
R: 2 | Four pillars named
R: 2 | Example for each
## High
P: What is printed by this code, and in what order? try { int x = 10 / 0; } catch (ArithmeticException e) { System.out.println("A"); } finally { System.out.println("F"); } System.out.println("E");
A: Output: A, then F, then E (each on its own line). The division throws an ArithmeticException, the catch block prints A, the finally block always runs and prints F, and since the exception was handled the program continues and prints E.
R: 2 | Output A F E
R: 2 | Explains catch, finally and continuation
R: 1 | Mentions finally always executes
## Advanced
P: For String s1 = "hi", s2 = "hi", s3 = new String("hi"); give the values of s1 == s2, s1 == s3, s1.equals(s3) and s1 == s3.intern(). Why are strings immutable and when should StringBuilder be used?
A: s1 == s2 is true (same pooled literal). s1 == s3 is false (new creates a separate object on the heap). s1.equals(s3) is true (same characters). s1 == s3.intern() is true (intern returns the pooled string).
Strings are immutable for security, thread safety, caching of hash codes and the string pool. Use StringBuilder when building strings in loops, because each concatenation of a String creates a new object.
R: 2 | The four values true, false, true, true
R: 1 | Pool versus heap explained
R: 2 | Immutability reason and StringBuilder use
