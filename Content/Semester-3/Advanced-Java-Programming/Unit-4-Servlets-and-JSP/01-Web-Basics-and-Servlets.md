# Web application basics and servlets
minutes: 40
yt: java servlet life cycle doGet doPost web.xml tomcat
yt: http request response methods status codes
@study
## How the web works
A browser sends an **HTTP request** (method, URL, headers, body); the server returns an **HTTP response** (status code, headers, body).
- Methods: **GET** (read; parameters in the URL), **POST** (send data in the body), PUT, DELETE, HEAD.
- Status codes: 200 OK, 201 Created, 301/302 redirect, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Server Error.
- HTTP is **stateless**, so sessions and cookies are added for memory.

## Servlet
A **servlet** is a Java class that runs inside a **web container** (Apache Tomcat, Jetty) and handles requests. It extends `HttpServlet` (package `javax.servlet` in older versions, `jakarta.servlet` from Jakarta EE 9 / Tomcat 10+).

### Life cycle
1. **Loading and instantiation** by the container.
2. **`init()`**: called once.
3. **`service()`** → `doGet()` / `doPost()`: called for each request (each in its own thread of one servlet instance).
4. **`destroy()`**: called once at unloading.

### Example servlet (runs in Tomcat; shown for reference)
```javaee
import jakarta.servlet.*;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import java.io.*;

@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String name = req.getParameter("name");
        if (name == null) name = "student";
        resp.setContentType("text/html");
        PrintWriter out = resp.getWriter();
        out.println("<h1>Hello, " + name + "!</h1>");
    }
}
```
Visiting `/hello?name=Anil` shows "Hello, Anil!". Output must be escaped when it contains user input, to prevent cross-site scripting (XSS).

## Request and response objects
`getParameter`, `getParameterValues`, `getHeader`, `getSession`, `getRequestDispatcher`; response: `setContentType`, `getWriter`, `sendRedirect`, `setStatus`, `addCookie`.

## Deployment descriptor and annotations
Servlets can be mapped using `web.xml` (`<servlet>` and `<servlet-mapping>`) or the `@WebServlet` annotation.

## forward versus redirect
- `RequestDispatcher.forward()`: server-side, same request, URL does not change.
- `response.sendRedirect()`: tells the browser to make a **new** request, URL changes.

## Session management
- **Cookies:** small data stored in the browser.
- **HttpSession:** server-side object per user, identified by the `JSESSIONID` cookie: `session.setAttribute("user", name)`.
- **URL rewriting** and **hidden form fields**.

## Filters and listeners
Filters intercept requests (logging, authentication); listeners react to events such as application start or session creation.

## Hindi saransh
Servlet एक Java class है जो Tomcat जैसे container में चलती है। Life cycle: init → service (doGet/doPost) → destroy। HTTP stateless है, इसलिए session और cookie इस्तेमाल होते हैं।

> init once, service many times, destroy once.
@qa
Q: Explain the servlet life cycle.
A: The container loads the servlet and calls init() once, then calls service() (doGet or doPost) for every request, and finally calls destroy() once before unloading it.
Q: Difference between doGet and doPost?
A: doGet handles GET requests with parameters in the URL (visible, size-limited, idempotent); doPost handles POST requests with data in the body, used for forms and sensitive data.
Q: Difference between forward and sendRedirect?
A: forward is handled inside the server with the same request and no URL change; sendRedirect sends a response asking the browser to make a new request to another URL.
Q: Why is HTTP called stateless and how is state kept?
A: Each request is independent and the server does not remember earlier ones. Cookies, HttpSession and URL rewriting maintain state across requests.
Q: What is a web container?
A: Server software such as Tomcat that manages servlets: it receives HTTP requests, creates request/response objects, calls servlets and manages their life cycle.
@quiz
? init() of a servlet is called
+ once
- on every request
- twice
- never
! It initialises the servlet one time.
? Status code for "page not found"
- 200
- 301
+ 404
- 500
! 404 means not found.
? HttpSession is identified by the cookie
- SESSIONNAME
+ JSESSIONID
- USERID
- TOKEN
! The container sets JSESSIONID.
? Which keeps the same URL in the browser?
- sendRedirect
+ forward
- both
- neither
! Forward is internal to the server.
? Servlet container example
- MySQL
+ Tomcat
- Git
- Maven
! Tomcat runs servlets and JSP.

@visual
sequence | A servlet request | Browser > Servlet container : HTTP request; Servlet container > Servlet : init() once, then service(); Servlet > Browser : HTTP response

@problems
## Moderate
P: List the three servlet life cycle methods and when each is called.
A: init() is called once when the servlet is first loaded. service() (which calls doGet or doPost) is called for every request. destroy() is called once when the servlet is removed from service.
R: 2 | init, service, destroy
R: 2 | When each is called
## High
P: Differentiate doGet and doPost. Write a doGet that reads the parameter name and prints a greeting.
A: GET sends data in the URL (visible, limited length, can be bookmarked, should not change data). POST sends data in the request body (hidden, larger, used for forms that change data).
protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException { String n = req.getParameter("name"); res.setContentType("text/html"); res.getWriter().println("<h1>Hello " + n + "</h1>"); }
R: 2 | GET versus POST
R: 3 | Working doGet
## Advanced
P: Compare forward and sendRedirect. Name three ways to track a user session.
A: forward is done on the server inside the same request, the browser URL does not change and request attributes are kept. sendRedirect tells the browser to make a new request, the URL changes and request attributes are lost.
Session tracking: cookies, HttpSession, URL rewriting, hidden form fields.
R: 2 | Forward behaviour
R: 2 | Redirect behaviour
R: 1 | Three tracking methods
