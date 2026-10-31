# Classes, inheritance and polymorphism (C++)
minutes: 25
yt: oop concepts c++ inheritance polymorphism
@study
**Four pillars:** encapsulation (data hidden behind methods), abstraction (hide complexity), inheritance (reuse a base class), polymorphism (one interface, many forms).
**Compile-time polymorphism:** function and operator overloading. **Run-time polymorphism:** virtual functions with a base-class pointer.
```cpp
#include <iostream>
using namespace std;
class Shape {
public:
    virtual double area() const = 0;          // abstract
    virtual ~Shape() {}
};
class Rect : public Shape {
    double w, h;
public:
    Rect(double w, double h) : w(w), h(h) {}
    double area() const override { return w * h; }
};
class Circle : public Shape {
    double r;
public:
    Circle(double r) : r(r) {}
    double area() const override { return 3.14159 * r * r; }
};
int main() {
    Shape *s[] = { new Rect(3, 4), new Circle(2) };
    for (Shape *p : s) cout << p->area() << endl;   // 12 and 12.5664
    for (Shape *p : s) delete p;
}
```
Output: 12 and 12.5664. A **constructor** initialises an object; a **destructor** cleans up; make base destructors virtual. Access specifiers: private, protected, public.
## Hindi saransh
Teen pillars aur chautha polymorphism. Virtual function se run-time par sahi function chalta hai.
> Declare the base destructor virtual when using virtual functions.
@qa
Q: What is a pure virtual function?
A: A virtual function with no body (= 0) that makes the class abstract.
Q: Difference between overloading and overriding?
A: Overloading uses the same name with different parameters (compile time); overriding redefines a virtual function in a derived class (run time).
Q: What is encapsulation?
A: Bundling data with methods and restricting direct access.
Q: When is a destructor called?
A: When the object goes out of scope or is deleted.
@quiz
? Run-time polymorphism needs
- overloading
+ virtual functions
- static members
- templates only
! Late binding.
? A class with a pure virtual function is
- final
+ abstract
- static
- private
! Cannot be instantiated.
? Area of Rect(3, 4) is
- 7
+ 12
- 14
- 10
! 3 x 4.
? Function overloading is resolved at
+ compile time
- run time
- link time only
- never
! Static binding.
@visual
layers | Shape hierarchy | Shape: abstract base with area(); Rect: width and height; Circle: radius
@problems
## Moderate
P: List the four pillars of OOP with a one-line meaning of each.
A: Encapsulation: bundle data and methods. Abstraction: hide complexity. Inheritance: reuse a base class. Polymorphism: one interface with many forms.
R: 2 | Names
R: 2 | Meanings
## High
P: Differentiate overloading and overriding.
A: Overloading: same name, different parameters, compile time. Overriding: derived class redefines a virtual function, run time.
R: 2 | Overloading
R: 2 | Overriding
## Advanced
P: Why should a base class destructor be virtual?
A: Deleting a derived object through a base pointer otherwise calls only the base destructor, skipping derived cleanup and causing leaks or undefined behaviour.
R: 2 | Problem
R: 2 | Fix
