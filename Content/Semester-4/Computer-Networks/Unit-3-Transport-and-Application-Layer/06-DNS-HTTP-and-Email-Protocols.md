# Application layer: DNS, HTTP and email
minutes: 25
yt: how DNS works step by step
yt: HTTP request response methods status codes
@study
Application-layer protocols give users useful services on top of TCP or UDP.

## DNS (Domain Name System)
Maps names such as www.example.com to IP addresses. It is a **distributed, hierarchical database**.
- **Hierarchy:** root servers, then top-level domains (.com, .in, .edu), then authoritative servers of each organisation.
- **Resolver:** your ISP or router asks on your behalf (a **recursive** query) and the resolver walks the hierarchy (**iterative** queries) and **caches** the answer for its time-to-live (TTL).
- **Records:** A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail server), NS (name server), TXT.
- Usually UDP port 53 (TCP for large replies and zone transfers).

## HTTP (HyperText Transfer Protocol)
A text-based **request-response** protocol on TCP port 80 (HTTPS 443 with TLS).
- **Methods:** GET (read), POST (send data), PUT (replace), DELETE, HEAD.
- **Status codes:** 200 OK, 301 moved permanently, 304 not modified, 400 bad request, 401 unauthorised, 403 forbidden, 404 not found, 500 server error.
- **Stateless:** the server keeps no memory between requests; sites use **cookies** or tokens to remember users.
- **HTTP/1.1** adds persistent connections; **HTTP/2** multiplexes many requests on one connection; **HTTP/3** runs over QUIC (UDP).

```
GET /index.html HTTP/1.1
Host: www.example.com
```

## Email
- **SMTP** (port 25/587) pushes mail from the sender to the server and between servers.
- **POP3** (110) downloads mail to one device. **IMAP** (143) keeps mail on the server so many devices stay in sync.

## DHCP
Gives a device its IP address, mask, gateway and DNS server automatically (UDP ports 67 and 68) using Discover, Offer, Request and Acknowledge.

## What happens when you open a website?
1. DNS finds the IP address. 2. TCP handshake with the server. 3. TLS handshake for HTTPS. 4. HTTP request is sent. 5. The server responds and the browser renders the page.

## Hindi saransh
DNS naam ko IP address mein badalta hai. HTTP request-response protocol hai (GET, POST; 200, 404). Email bhejne ke liye SMTP, padhne ke liye POP3 ya IMAP. DHCP automatically IP deta hai.

> SMTP sends, POP3/IMAP receive.
@qa
Q: What is the role of DNS?
A: It translates human-friendly domain names into IP addresses (and other records) so a browser can connect to the right server.
Q: What is the difference between recursive and iterative DNS queries?
A: In a recursive query the resolver must return the final answer to the client. In iterative queries the resolver asks each server in turn and each one only replies with the answer or the next server to ask.
Q: Why is HTTP called stateless and how do websites remember users?
A: The server treats every request independently. Sites use cookies, session ids or tokens sent with each request to identify a user.
Q: Which protocol keeps email on the server so many devices stay in sync?
A: IMAP. POP3 normally downloads and (by default) removes mail from the server.
Q: What does HTTP status 404 mean?
A: The server could not find the requested resource.
@quiz
? Which DNS record maps a name to an IPv4 address?
+ A
- MX
- CNAME
- NS
! An A record holds an IPv4 address; AAAA holds IPv6.
? HTTPS uses by default port
- 80
- 21
+ 443
- 25
! HTTPS is HTTP over TLS on port 443.
? The protocol used to send email from a client to a mail server is
- POP3
- IMAP
+ SMTP
- DHCP
! SMTP is for sending; POP3 and IMAP are for retrieving.
? HTTP status code 301 means
- not found
- server error
+ moved permanently
- OK
! 301 redirects the client to a new permanent URL.
? DHCP provides
- web pages
+ IP address configuration
- secure shell login
- email delivery
! DHCP automatically assigns IP address, mask, gateway and DNS server.
@visual
flow | Opening a website | Browser asks DNS for the IP > TCP handshake with the server > TLS handshake (HTTPS) > HTTP GET request > Server sends the page > Browser renders it
sequence | DHCP in four steps | Client > Server : DISCOVER; Server > Client : OFFER; Client > Server : REQUEST; Server > Client : ACKNOWLEDGE
@problems
## Moderate
P: Match each protocol with its job: DNS, DHCP, SMTP, HTTP.
A: DNS translates names to IP addresses. DHCP assigns IP configuration automatically. SMTP sends email. HTTP transfers web pages and other resources.
R: 2 | Two correct matches
R: 2 | All four correct
## High
P: Describe every network step that occurs between typing https://www.example.com in a browser and seeing the page.
A: The browser checks its DNS cache; if missing, the resolver finds the IP address of www.example.com through root, TLD and authoritative servers. The browser opens a TCP connection (SYN, SYN-ACK, ACK) to port 443, then a TLS handshake to agree keys and verify the certificate. It sends an HTTP GET request; the server replies with status 200 and the HTML. The browser requests further files (CSS, images, scripts) and renders the page.
R: 2 | DNS resolution
R: 2 | TCP and TLS handshakes
R: 2 | HTTP request/response and rendering
## Advanced
P: Compare POP3 and IMAP, and explain why a person with a phone, laptop and tablet should use IMAP.
A: POP3 downloads messages to one device and usually deletes them from the server, so other devices never see them and read/unread status is not shared. IMAP keeps messages and folders on the server; every device views the same mailbox, and actions such as reading, deleting and moving mail are synchronised. With several devices IMAP keeps everything consistent and keeps a copy safe on the server.
R: 2 | Explains POP3 behaviour
R: 2 | Explains IMAP behaviour
R: 2 | Links the advantage to multiple devices
