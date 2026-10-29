# JSP, JSTL and the MVC pattern
minutes: 35
yt: jsp tutorial scriptlet expression directive implicit objects
yt: mvc architecture servlet jsp java web application
@study
**JavaServer Pages (JSP)** let you write HTML with embedded Java. The container **translates a JSP into a servlet** on first request, compiles it and runs it.

## JSP elements
- **Directives:** `<%@ page import="java.util.*" %>`, `<%@ include file="header.jsp" %>`, `<%@ taglib ... %>`.
- **Declaration:** `<%! int count = 0; %>`.
- **Scriptlet:** `<% ... %>` Java code.
- **Expression:** `<%= name %>` prints a value.
- **Comments:** `<%-- hidden --%>`.
- **Actions:** `<jsp:include>`, `<jsp:forward>`, `<jsp:useBean>`.

## Implicit objects
`request`, `response`, `session`, `application` (ServletContext), `out`, `config`, `pageContext`, `page`, `exception`.

## Example (reference)
```javaee
<%@ page contentType="text/html;charset=UTF-8" %>
<html><body>
<% String name = request.getParameter("name"); %>
<h2>Welcome, <%= name == null ? "guest" : name %></h2>
</body></html>
```

## Scopes
Page, request, session and application: where an attribute lives. `request.setAttribute("students", list)` shares data with a JSP after a forward.

## Expression Language and JSTL
**EL**: `${student.name}`. **JSTL** tags remove scriptlets:
```javaee
<c:forEach var="s" items="${students}">
  <tr><td>${s.name}</td><td>${s.cgpa}</td></tr>
</c:forEach>
<c:if test="${s.cgpa >= 8}">Distinction</c:if>
```

## JSP vs servlet
Servlets are best for logic; JSP is best for presentation. Mixing both leads to the MVC pattern.

## MVC architecture
- **Model:** data and business rules (Java beans, DAO classes using JDBC).
- **View:** presentation (JSP).
- **Controller:** servlet that receives the request, calls the model, picks the view.
Flow: Browser → Controller servlet → Model (DAO, database) → request attribute → forward to View JSP → HTML back to browser.
Benefits: separation of concerns, easier testing, parallel work by designers and developers. Frameworks such as **Spring MVC** implement this pattern.

## JavaBean
A reusable class with a no-argument constructor, private fields and getters/setters, usable by JSP via `jsp:useBean` or EL.

## Security basics
Validate input, use PreparedStatement, escape output (`<c:out>`), store passwords hashed, use HTTPS, and set session timeout.

## Hindi saransh
JSP में HTML के अंदर Java लिखी जाती है और container उसे servlet में बदल देता है। MVC में Model = data, View = JSP, Controller = servlet।

> Controller decides, Model works with data, View displays it.
@qa
Q: How is a JSP executed?
A: On the first request the container translates the JSP into a servlet, compiles it, loads it and then runs the servlet to produce HTML.
Q: Difference between scriptlet and expression?
A: A scriptlet <% %> contains arbitrary Java statements; an expression <%= %> evaluates one expression and prints its value.
Q: What is MVC?
A: A design pattern that splits an application into Model (data and logic), View (user interface) and Controller (request handling).
Q: Name four JSP implicit objects.
A: request, response, session, out (also application, config, pageContext, page, exception).
Q: Why use JSTL and EL?
A: They remove Java code from pages, making JSPs cleaner, safer and easier for designers to maintain.
@quiz
? In MVC the servlet usually acts as the
- Model
- View
+ Controller
- Database
! It receives requests and coordinates.
? <%= x %> is a JSP
- declaration
- directive
+ expression
- comment
! It prints the value of x.
? A JSP is converted by the container into a
- class file directly
+ servlet
- applet
- XML file
! The generated servlet handles requests.
? EL syntax for a bean property
- <%= name %>
+ ${student.name}
- #{name}%
- @name
! Expression language uses ${}.
? Attribute that lives for the whole user session is in
- page scope
- request scope
+ session scope
- none
! Session scope lasts until the session ends.

@visual
flow | The MVC pattern in a Java web app | Browser sends a request > Controller servlet handles it > Model (JavaBean and database) supplies data > View (JSP) shows the page

@problems
## Moderate
P: List the four main JSP element types with one example of each.
A: Directive: <%@ page import="java.util.*" %>. Declaration: <%! int count = 0; %>. Scriptlet: <% int x = 5; %>. Expression: <%= x * 2 %> which prints a value. (Action tags such as <jsp:include> are also elements.)
R: 2 | Four types
R: 2 | Examples
## High
P: Explain the roles of Model, View and Controller using a student login example.
A: Model: a Student JavaBean and a DAO that checks the database. View: login.jsp and welcome.jsp, which only display. Controller: a servlet that receives the form, calls the model and then forwards to welcome.jsp or back to login.jsp. This keeps logic and presentation separate.
R: 2 | Model and View
R: 2 | Controller
R: 1 | Benefit of separation
## Advanced
P: Name five JSP implicit objects and say what Expression Language (EL) does, with ${user.name}.
A: request, response, session, application, out (also config, pageContext, page, exception). EL gives simple access to data in scopes without Java code: ${user.name} reads the name property of the user object found in page, request, session or application scope.
R: 2 | Five implicit objects
R: 3 | EL purpose with the example
