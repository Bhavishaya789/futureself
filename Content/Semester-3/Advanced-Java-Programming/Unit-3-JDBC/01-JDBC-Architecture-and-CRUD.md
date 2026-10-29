# JDBC: architecture, drivers and CRUD operations
minutes: 40
yt: jdbc tutorial java database connectivity steps
yt: jdbc preparedstatement vs statement sql injection
@study
**JDBC (Java Database Connectivity)** is the standard API (`java.sql`) for Java programs to talk to relational databases.

## Architecture
Application → **JDBC API** → **DriverManager** → **JDBC driver** (vendor-specific JAR) → Database. The database can be changed by switching the driver and URL, with little code change.

### Driver types
1. Type 1: JDBC-ODBC bridge (removed).
2. Type 2: native API driver.
3. Type 3: network protocol (middleware).
4. **Type 4: pure Java thin driver** (used today: MySQL Connector/J, PostgreSQL, SQLite).

## Steps to connect
1. Add the driver JAR to the class path (modern drivers auto-register).
2. Open `Connection con = DriverManager.getConnection(url, user, pass);`
   URL examples: `jdbc:mysql://localhost:3306/college`, `jdbc:postgresql://localhost/college`, `jdbc:sqlite:college.db`.
3. Create `Statement`/`PreparedStatement`.
4. Execute: `executeQuery` (SELECT, returns `ResultSet`), `executeUpdate` (INSERT/UPDATE/DELETE, returns row count), `execute`.
5. Process the `ResultSet`: `while (rs.next()) rs.getString("name")`.
6. Close resources (try-with-resources).

## Statement types
- `Statement`: plain SQL, vulnerable to **SQL injection**.
- `PreparedStatement`: precompiled with `?` placeholders; safe and faster for repeated use.
- `CallableStatement`: calls stored procedures.

## CRUD example (needs a database driver, so shown without main)
```java
import java.sql.*;
public class StudentDao {
    private final String url = "jdbc:mysql://localhost:3306/college";
    public void add(int id, String name, double cgpa) throws SQLException {
        String sql = "INSERT INTO student(id, name, cgpa) VALUES (?, ?, ?)";
        try (Connection con = DriverManager.getConnection(url, "root", "password");
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setInt(1, id); ps.setString(2, name); ps.setDouble(3, cgpa);
            ps.executeUpdate();
        }
    }
    public void printAll() throws SQLException {
        try (Connection con = DriverManager.getConnection(url, "root", "password");
             Statement st = con.createStatement();
             ResultSet rs = st.executeQuery("SELECT id, name, cgpa FROM student")) {
            while (rs.next())
                System.out.println(rs.getInt("id") + " " + rs.getString("name") + " " + rs.getDouble("cgpa"));
        }
    }
    public int updateCgpa(int id, double cgpa) throws SQLException {
        try (Connection con = DriverManager.getConnection(url, "root", "password");
             PreparedStatement ps = con.prepareStatement("UPDATE student SET cgpa = ? WHERE id = ?")) {
            ps.setDouble(1, cgpa); ps.setInt(2, id);
            return ps.executeUpdate();
        }
    }
}
```
Never hard-code real passwords; read them from configuration or environment.

## SQL injection
With string concatenation `"... WHERE name='" + input + "'"` the input `' OR '1'='1` returns every row. With `PreparedStatement`, the input is treated only as data.

## Transactions
`con.setAutoCommit(false); ... con.commit();` and `con.rollback()` on error, giving the ACID behaviour of the DBMS course. **Batch updates** (`addBatch`, `executeBatch`) speed up many inserts.

## ResultSet types
Default is forward-only and read-only; scrollable and updatable result sets can be requested. `ResultSetMetaData` gives column names and types.

## Connection pooling
Opening a connection is expensive; production systems use a pool (HikariCP, DBCP) that reuses connections.

## Hindi saransh
JDBC से Java program database से जुड़ता है: driver load → connection → PreparedStatement → execute → ResultSet पढ़ना → close। SQL injection रोकने के लिए PreparedStatement इस्तेमाल करें।

> Use PreparedStatement with ? placeholders, always.
@qa
Q: List the steps of JDBC programming.
A: Load or register the driver, open a Connection, create a Statement or PreparedStatement, execute the SQL, process the ResultSet, and close the resources.
Q: Difference between Statement and PreparedStatement?
A: PreparedStatement is precompiled with ? parameters, which prevents SQL injection and is faster when reused; Statement sends a plain SQL string every time.
Q: What does executeQuery return?
A: A ResultSet for SELECT statements; executeUpdate returns the number of affected rows for INSERT, UPDATE and DELETE.
Q: Which JDBC driver type is common now?
A: Type 4, the pure Java thin driver that talks to the database directly over the network.
Q: How do you make several updates atomic in JDBC?
A: Turn off auto-commit, execute the statements, call commit() when all succeed, and rollback() on failure.
@quiz
? Which interface prevents SQL injection by using placeholders?
- Statement
+ PreparedStatement
- ResultSet
- Connection
! Parameters are bound, not concatenated.
? For SELECT queries you call
- executeUpdate
+ executeQuery
- commit
- close
! executeQuery returns a ResultSet.
? Common driver type today
- Type 1
- Type 2
- Type 3
+ Type 4
! It is pure Java and needs no native library.
? To start a manual transaction you call
- con.commit()
+ con.setAutoCommit(false)
- con.rollback()
- rs.next()
! Auto-commit must be disabled first.
? rs.next() does
- opens a connection
+ moves the cursor to the next row, returning false at the end
- inserts a row
- closes the result set
! Used to loop over rows.

@visual
steps | The JDBC steps | Load the driver and open a Connection; Create a Statement or PreparedStatement; Execute the SQL; Read the ResultSet row by row; Close everything

@problems
## Moderate
P: List the four JDBC driver types and say which one is used most today.
A: Type 1 JDBC-ODBC bridge, Type 2 native-API driver, Type 3 network-protocol (middleware) driver and Type 4 thin pure-Java driver. Type 4 is used most today because it needs no native code or middleware.
R: 2 | Four types
R: 2 | Type 4 and reason
## High
P: Write code that prints the names of students with marks above a limit using a PreparedStatement.
A: String sql = "SELECT name FROM student WHERE marks > ?";
try (Connection c = DriverManager.getConnection(url, user, pass); PreparedStatement ps = c.prepareStatement(sql)) {
  ps.setInt(1, 60);
  try (ResultSet rs = ps.executeQuery()) { while (rs.next()) System.out.println(rs.getString("name")); }
}
R: 2 | Parameterised SQL with ?
R: 2 | setInt and executeQuery
R: 1 | ResultSet loop with next
## Advanced
P: Explain how a PreparedStatement prevents SQL injection using the input ' OR '1'='1. Write the steps of a JDBC transaction that moves money between two accounts.
A: With string concatenation the input becomes WHERE name = '' OR '1'='1', which is always true. A PreparedStatement sends the SQL structure first and the value separately as data, so the whole input is treated as a literal name, not as SQL.
Transaction: con.setAutoCommit(false); run both UPDATE statements; con.commit() if both succeed; in a catch block call con.rollback().
R: 2 | Injection explained with the example
R: 2 | Data and structure are separate
R: 1 | setAutoCommit, commit and rollback
