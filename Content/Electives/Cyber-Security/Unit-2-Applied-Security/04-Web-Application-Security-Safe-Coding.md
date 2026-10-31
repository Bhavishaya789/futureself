# Web application security and safe coding
minutes: 30
yt: owasp top 10 explained sql injection prevention
@study
The **OWASP Top 10** lists common web risks: broken access control, cryptographic failures, **injection**, insecure design, security misconfiguration, vulnerable components, authentication failures, integrity failures, logging failures, and server-side request forgery. Developers defend by never trusting input.
- **SQL injection:** user input is mixed into a query so it changes its meaning. **Defence: parameterised queries** (prepared statements), which keep data separate from code.
- **XSS (cross-site scripting):** untrusted text is shown as HTML. Defence: escape output, use a Content-Security-Policy.
- **CSRF:** a browser is tricked into sending an authenticated request. Defence: anti-CSRF tokens and SameSite cookies.
- **Broken access control:** always check on the server that the user may see the record.
- **Secrets** (API keys) go in environment variables, never in Git.
The demo below shows why parameterised queries are safe:
```python
import sqlite3
db = sqlite3.connect(":memory:")
db.execute("create table users(name text, pw text)")
db.execute("insert into users values('asha','x')")
evil = "nobody' OR '1'='1"
unsafe = db.execute("select * from users where name='" + evil + "'").fetchall()
safe = db.execute("select * from users where name=?", (evil,)).fetchall()
print(len(unsafe), len(safe))   # 1 0
```
The string-built query returns a row it should not; the parameterised one correctly returns none.
## Hindi saransh
Kabhi bhi user input par bharosa mat karo. SQL injection se bachne ke liye parameterised query, XSS se bachne ke liye output escape, CSRF ke liye token. API keys ko code mein mat likho.
> Use parameterised queries for every database call that includes user input.
@qa
Q: What is SQL injection?
A: Attacker-supplied input changes the structure of a database query.
Q: What is the main defence against SQL injection?
A: Parameterised (prepared) queries, plus least-privilege database accounts.
Q: What is XSS?
A: Injection of malicious script into a page viewed by other users; defend by escaping output and using CSP.
Q: Why must access checks happen on the server?
A: Client-side checks can be bypassed by attackers.
@quiz
? The best defence against SQL injection is
- longer passwords
+ parameterised queries
- a bigger server
- hiding the login page
! Data stays separate from code.
? XSS involves
- stealing a router
+ running untrusted script in a page
- guessing hashes
- DDoS
! Escape output.
? API keys should be stored
- in the public repository
+ in environment variables or a secret manager
- in the page's HTML
- in comments
! Keep secrets out of code.
? CSRF tokens protect against
- SQL injection
+ forged cross-site requests
- malware
- DNS spoofing
! They prove the request came from your page.
@visual
compare | Unsafe vs safe query | Unsafe=String concatenation~Input changes the query~Data can leak; Safe=Parameterised~Input is only data~Attack fails
@problems
## Moderate
P: Name three OWASP Top 10 risks.
A: Injection, broken access control, cryptographic failures (others also accepted).
R: 2 | Three risks
R: 1 | Correct names
## High
P: Explain how parameterised queries stop SQL injection.
A: The query structure is sent to the database first, and user values are bound separately as data, so they can never be parsed as SQL commands.
R: 2 | Separation of code and data
R: 1 | Binding
## Advanced
P: Make a secure-coding checklist for a student sign-up page.
A: Validate and escape input, parameterised queries, hash passwords with Argon2, HTTPS, rate limiting, CSRF tokens, safe error messages, no secrets in code, logging.
R: 3 | Items
R: 1 | Reasons
