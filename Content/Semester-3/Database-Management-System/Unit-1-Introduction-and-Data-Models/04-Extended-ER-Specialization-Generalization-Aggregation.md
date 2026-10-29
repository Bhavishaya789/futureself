# Extended ER: specialization, generalization and aggregation
minutes: 25
yt: EER model specialization generalization aggregation DBMS
yt: superclass subclass inheritance ER diagram
@study
The **Extended ER (EER) model** adds object-oriented ideas to basic ER so that real designs with "kinds of" entities can be modelled cleanly.

## Superclass and subclass
A **subclass** is a special kind of a **superclass**. `Student` and `Teacher` are subclasses of `Person`. A subclass **inherits** all attributes and relationships of its superclass and may add its own. A subclass entity is the same real-world entity as the superclass entity, seen in a specific role.

## Specialization (top-down)
Start from a general entity set and define subgroups that have extra attributes or relationships. From `Employee` we define `Engineer` (with `specialty`) and `Secretary` (with `typing_speed`).

## Generalization (bottom-up)
Start from several entity sets with common features and combine them into a general one. `Car` and `Truck` share `reg_no` and `owner`, so we generalise them to `Vehicle`. Specialization and generalization are the same idea from opposite directions.

## Constraints on specialization
- **Disjoint (d)** versus **overlapping (o):** can one entity belong to more than one subclass? A person who is only a Student or only a Teacher is disjoint; a person who is both is overlapping.
- **Total** versus **partial completeness:** must every superclass entity belong to at least one subclass? In total specialization (double line) yes; in partial (single line) no.

So there are four combinations: disjoint-total, disjoint-partial, overlapping-total, overlapping-partial.

## Aggregation
A plain ER relationship cannot relate to another relationship. **Aggregation** treats a relationship set (with its participating entities) as a higher-level entity so that it can take part in another relationship. Example: `Employee works_on Project` is aggregated and then related to `Machine` through `uses`, to record which machine is used for which assignment.

## Union types (categories)
A **category** is a subclass whose members come from the union of several different superclasses, for example `Owner` may be a Person, a Company or a Bank.

> Inheritance in EER is not the same as inheritance in Java: here it is a data-modelling idea that is later mapped to tables.
@qa
Q: What is the difference between specialization and generalization?
A: Specialization is top-down: split a general entity set into more specific subsets. Generalization is bottom-up: merge similar entity sets into one general set. They describe the same hierarchy from opposite directions.
Q: What do disjoint and overlapping mean?
A: In a disjoint specialization an entity can belong to at most one subclass. In an overlapping one it can belong to several at once.
Q: What is total specialization?
A: Every entity in the superclass must belong to at least one subclass, shown by a double line to the specialization circle.
Q: Why do we need aggregation?
A: ER relationships connect entity sets only. Aggregation turns a relationship into an abstract entity so it can participate in another relationship.
Q: What does a subclass inherit?
A: All attributes and relationship types of its superclass, plus it can have its own local attributes and relationships.
@quiz
? Combining Car and Truck into Vehicle is an example of
- specialization
+ generalization
- aggregation
- normalisation
! Moving from specific entity sets to a more general one is generalization.
? In a disjoint specialization, an entity
- must be in all subclasses
+ can be in at most one subclass
- cannot be in any subclass
- must be in exactly two subclasses
! Disjoint means the subclasses do not share members.
? Which concept allows a relationship to participate in another relationship?
- Weak entity
- Specialization
+ Aggregation
- Cardinality
! Aggregation abstracts a relationship into a higher-level entity.
? A double line from the superclass to the specialization circle shows
- partial participation
+ total specialization
- overlapping specialization
- a weak entity
! Total specialization means every superclass entity belongs to a subclass.
? Subclass entities inherit
- nothing
- only the primary key
+ attributes and relationships of the superclass
- only the relationships
! A subclass has all superclass attributes and relationships and may add more.

@visual
tree | Specialization of Vehicle | Vehicle(Car, Truck, Bike)

@problems
## Moderate
P: Differentiate between specialization and generalization with an example.
A: Specialization is top-down: start with a general entity and split it into more specific sub-entities, for example Employee into Engineer and Manager. Generalization is bottom-up: combine entities with common features into one super entity, for example Car and Truck into Vehicle. Sub-entities inherit attributes of the super entity.
R: 2 | Specialization is top-down
R: 2 | Generalization is bottom-up with examples
## High
P: Explain the constraints disjoint versus overlapping, and total versus partial participation, in a specialization. Give an example for each.
A: Disjoint: an entity belongs to at most one subclass (a Vehicle is a Car or a Truck, not both). Overlapping: it can belong to several (a Person can be both Student and Employee). Total: every super-entity must belong to some subclass (every Account is either Savings or Current). Partial: some may belong to no subclass (an Employee need not be a Manager).
R: 2 | Disjoint and overlapping with examples
R: 2 | Total and partial with examples
## Advanced
P: Employees work on projects, and the company also records which sponsor monitors each employee-project assignment. Why is aggregation needed here and how would you map it to tables?
A: A relationship cannot normally participate in another relationship. Aggregation treats the relationship Works_On (Employee, Project) as a single higher-level entity, so Monitors can link Sponsor with that assignment.
Tables: Works_On(EmpID, ProjID) with primary key (EmpID, ProjID); Monitors(SponsorID, EmpID, ProjID) where (EmpID, ProjID) is a foreign key to Works_On.
R: 2 | Explains aggregation as treating a relationship as an entity
R: 2 | Monitors table references the Works_On key
R: 1 | Correct composite primary and foreign keys
