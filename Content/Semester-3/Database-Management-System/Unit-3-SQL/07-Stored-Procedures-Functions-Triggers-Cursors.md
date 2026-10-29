# Stored procedures, functions, triggers and cursors (PL/SQL)
minutes: 35
yt: PL/SQL stored procedure function trigger cursor
yt: MySQL trigger stored procedure tutorial
@study
SQL is declarative. **PL/SQL** (Oracle) and similar extensions (T-SQL, MySQL stored programs) add variables, conditions, loops and error handling so logic can live **inside the database**.

## PL/SQL block structure
```plsql
DECLARE
  v_name  Student.name%TYPE;
  v_cgpa  NUMBER := 0;
BEGIN
  SELECT name, cgpa INTO v_name, v_cgpa FROM Student WHERE roll = 1;
  IF v_cgpa >= 9 THEN
    DBMS_OUTPUT.PUT_LINE(v_name || ' is a topper');
  ELSE
    DBMS_OUTPUT.PUT_LINE(v_name || ' needs more effort');
  END IF;
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('No such student');
END;
```
Parts: `DECLARE` (optional), `BEGIN ... END` (required), `EXCEPTION` (optional). `%TYPE` copies a column's data type.

## Stored procedure
A named, saved block that can take `IN`, `OUT` and `IN OUT` parameters and is called with `CALL` or `EXEC`. It does not have to return a value.
```plsql
CREATE OR REPLACE PROCEDURE raise_cgpa (p_roll IN NUMBER, p_by IN NUMBER) AS
BEGIN
  UPDATE Student SET cgpa = cgpa + p_by WHERE roll = p_roll;
  COMMIT;
END;
```

## Function
Like a procedure but it **must return a value** and can be used inside SQL expressions.
```plsql
CREATE OR REPLACE FUNCTION grade_of (p_cgpa NUMBER) RETURN VARCHAR2 IS
BEGIN
  RETURN CASE WHEN p_cgpa >= 9 THEN 'A' WHEN p_cgpa >= 8 THEN 'B' ELSE 'C' END;
END;
```
Usage: `SELECT name, grade_of(cgpa) FROM Student;`

## Cursor
A **cursor** lets you process a multi-row result one row at a time. **Implicit** cursors are created automatically for DML. **Explicit** cursors are declared:
```plsql
DECLARE
  CURSOR c IS SELECT name, cgpa FROM Student;
  r c%ROWTYPE;
BEGIN
  OPEN c;
  LOOP
    FETCH c INTO r;
    EXIT WHEN c%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE(r.name || ' ' || r.cgpa);
  END LOOP;
  CLOSE c;
END;
```
Cursor attributes: `%FOUND`, `%NOTFOUND`, `%ISOPEN`, `%ROWCOUNT`. The life cycle is DECLARE, OPEN, FETCH, CLOSE.

## Trigger
A **trigger** runs automatically when an event (INSERT, UPDATE, DELETE) happens on a table. It can run `BEFORE` or `AFTER`, and for each statement or **for each row**. In a row trigger, `:OLD` and `:NEW` (Oracle) or `OLD`/`NEW` (MySQL) hold the old and new values.
```plsql
CREATE OR REPLACE TRIGGER trg_no_cgpa_drop
BEFORE UPDATE OF cgpa ON Student
FOR EACH ROW
BEGIN
  IF :NEW.cgpa < :OLD.cgpa - 2 THEN
    RAISE_APPLICATION_ERROR(-20001, 'cgpa cannot fall by more than 2');
  END IF;
END;
```
Uses: audit logs, enforcing complex rules, maintaining derived data. Misuse makes behaviour hard to follow and debug.

## Procedure vs function vs trigger
| Feature | Procedure | Function | Trigger |
| --- | --- | --- | --- |
| Called by | User / program | SQL expression or program | Database event automatically |
| Returns value | Optional (OUT) | Required | No |
| Parameters | Yes | Yes | No |
| Use in SELECT | No | Yes | No |

> The code on this page is Oracle PL/SQL. MySQL and SQL Server use similar ideas with different syntax (for example `DELIMITER`, `NEW`/`OLD`, or T-SQL `inserted`/`deleted`).
@qa
Q: What is the difference between a procedure and a function in PL/SQL?
A: A function must return a value and can be called inside SQL statements. A procedure may return values only through OUT parameters and is called as a statement.
Q: What is a cursor and why is it needed?
A: A cursor is a pointer to a query result that lets a program process the rows one at a time. It is needed because procedural code works on one record at a time while SELECT returns a set.
Q: What are the four steps of using an explicit cursor?
A: Declare, open, fetch (usually in a loop) and close.
Q: What are :OLD and :NEW in a trigger?
A: Row-level references to the row values before and after the change that fired the trigger.
Q: Give two uses of triggers.
A: Maintaining an audit trail of changes and enforcing business rules that a simple constraint cannot express.
@quiz
? A trigger is executed
- by calling it with CALL
+ automatically when a specified event occurs
- only by the DBA at night
- when the server restarts
! Triggers are fired by DML events such as INSERT, UPDATE or DELETE.
? Which subprogram must return a value?
- Procedure
+ Function
- Trigger
- Cursor
! A function always returns a value.
? The correct order for an explicit cursor is
- FETCH, OPEN, CLOSE, DECLARE
+ DECLARE, OPEN, FETCH, CLOSE
- OPEN, DECLARE, CLOSE, FETCH
- DECLARE, FETCH, OPEN, CLOSE
! You declare it, open it, fetch rows and finally close it.
? The attribute that tells whether the last FETCH found no row is
- %FOUND
- %ISOPEN
+ %NOTFOUND
- %ROWTYPE
! %NOTFOUND becomes TRUE when the fetch returns no more rows.
? In a row-level update trigger, the value before the change is
- :NEW
+ :OLD
- :PREV
- :BASE
! :OLD holds the previous values and :NEW the new ones.

@visual
sequence | An AFTER INSERT trigger | User > Orders table : INSERT a new order; Orders table > Trigger : fires automatically after the insert; Trigger > Stock table : subtract the ordered quantity

@problems
## Moderate
P: Differentiate between a stored procedure and a function in SQL.
A: A function must return a value (a single value or table) and can be used inside SQL expressions such as SELECT. A stored procedure is called with CALL, can return zero or more values through OUT parameters or result sets, and can perform actions such as inserting rows and managing transactions.
R: 2 | Function returns a value and is used in expressions
R: 2 | Procedure called separately and can perform actions
## High
P: Write a MySQL trigger that records every salary change of Emp(id, salary) into SalaryLog(emp_id, old_salary, new_salary).
A: CREATE TRIGGER log_salary AFTER UPDATE ON Emp
FOR EACH ROW
BEGIN
  IF OLD.salary <> NEW.salary THEN
    INSERT INTO SalaryLog (emp_id, old_salary, new_salary) VALUES (OLD.id, OLD.salary, NEW.salary);
  END IF;
END;
OLD holds the row before the update and NEW holds the row after it.
R: 2 | Correct trigger timing and event
R: 2 | Uses OLD and NEW
R: 1 | Inserts into the log table
## Advanced
P: Explain the four steps of using a cursor. Why should set-based SQL usually be preferred to a cursor loop?
A: Steps: DECLARE the cursor with a SELECT, OPEN it, FETCH rows one at a time into variables inside a loop, then CLOSE it.
A cursor processes one row at a time, which is slow and uses more resources; set-based SQL (a single UPDATE or SELECT) lets the database optimiser handle all rows together and is usually much faster.
R: 2 | Declare, open, fetch, close
R: 2 | Row-by-row cost explained
R: 1 | Prefers set-based operations
