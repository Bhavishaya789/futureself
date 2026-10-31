# HTML, CSS, JavaScript and HTTP
minutes: 25
yt: html css javascript basics
@study
**HTML** gives structure (headings, paragraphs, forms), **CSS** gives style (selectors, box model, flexbox, grid), **JavaScript** gives behaviour (DOM, events, fetch).
**Box model:** content + padding + border + margin. **Flexbox** lays items in a row or column: `display: flex; justify-content: space-between;`. **Selectors:** element, `.class`, `#id`, descendant. Specificity: inline > id > class > element.
```html
<button id="b">Click</button>
<script>
  document.getElementById("b").addEventListener("click", () => {
    fetch("/api/hello").then(r => r.json()).then(d => console.log(d));
  });
</script>
```
**HTTP:** methods GET, POST, PUT, DELETE; status codes 200, 301, 404, 500. **REST** APIs use URLs for resources and JSON for data. **Security basics:** escape output to prevent XSS, use parameterised queries to prevent SQL injection, use HTTPS, and hash passwords with a slow algorithm (bcrypt, argon2).
**Frameworks:** React or Vue (front end), Node.js with Express or Flask (back end), MongoDB or MySQL (database).
## Hindi saransh
HTML structure, CSS style, JavaScript behaviour. GET data padhta hai, POST bhejta hai. XSS aur SQL injection se bachne ke liye input escape karo.
> Never build SQL strings by joining user input.
@qa
Q: Roles of HTML, CSS and JavaScript?
A: Structure, presentation and behaviour.
Q: What is XSS?
A: Cross-site scripting: injecting script into a page viewed by others; prevent by escaping output.
Q: Difference between GET and POST?
A: GET requests data and puts parameters in the URL; POST sends data in the body and changes server state.
Q: What does the CSS box model consist of?
A: Content, padding, border and margin.
@quiz
? HTTP status 404 means
- OK
- server error
+ not found
- redirect
! Resource missing.
? The correct CSS box model order from inside is
+ content, padding, border, margin
- margin, border, padding, content
- content, margin, border, padding
- padding, content, border, margin
! Content outwards.
? SQL injection is prevented by
- bigger fonts
+ parameterised queries
- longer URLs
- cookies
! Separate code from data.
? Higher CSS specificity belongs to
- element selector
- class selector
+ id selector
- universal selector
! id beats class beats element.
@visual
layers | Web stack | Front end: HTML, CSS, JavaScript; Back end: server code and API; Database: MongoDB or MySQL
@problems
## Moderate
P: Explain the roles of HTML, CSS and JavaScript.
A: HTML structure, CSS appearance, JavaScript interactivity.
R: 2 | Roles
R: 1 | Example
## High
P: Describe three ways to make a web app secure.
A: Escape output (XSS), use parameterised queries (SQL injection), use HTTPS and hash passwords with bcrypt or argon2.
R: 2 | Two measures
R: 1 | Three measures
## Advanced
P: Explain the request-response cycle for a REST call fetch("/api/hello").
A: The browser sends an HTTP GET to the server; the server routes it to a handler, which returns JSON with status 200; the browser parses it and updates the page.
R: 2 | Request
R: 2 | Response
