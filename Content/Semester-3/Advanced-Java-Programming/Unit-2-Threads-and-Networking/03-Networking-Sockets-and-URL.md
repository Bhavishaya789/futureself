# Networking: IP, TCP sockets, UDP and URL
minutes: 35
yt: java socket programming client server tcp
yt: java networking url inetaddress udp datagram
@study
Java's `java.net` package supports network programming.

## Network basics
- **IP address** identifies a host (IPv4 such as 192.168.1.5, IPv6). **Port** (0–65535) identifies an application on that host; 80 is HTTP, 443 HTTPS, 22 SSH. Ports below 1024 are well-known.
- **TCP:** connection-oriented, reliable, ordered (web, email). **UDP:** connectionless, faster, may lose packets (video calls, DNS, games).
- **Socket** = IP address + port: an endpoint of two-way communication.

## Classes
- `InetAddress`: `getByName("localhost")`, `getLocalHost()`.
- `URL`/`URLConnection`/`HttpURLConnection`: fetch resources over HTTP. Newer: `java.net.http.HttpClient`.
- `ServerSocket` (server), `Socket` (client), `DatagramSocket`/`DatagramPacket` (UDP).

## TCP client-server steps
Server: create `ServerSocket(port)` → `accept()` (blocks until a client connects) → get streams → read/write → close.
Client: `new Socket(host, port)` → get streams → read/write → close.

### Working example (server and client in one program)
```java
import java.io.*;
import java.net.*;
public class EchoDemo {
    public static void main(String[] args) throws Exception {
        ServerSocket server = new ServerSocket(0);          // 0 = any free port
        int port = server.getLocalPort();
        Thread t = new Thread(() -> {
            try (Socket s = server.accept();
                 BufferedReader in = new BufferedReader(new InputStreamReader(s.getInputStream()));
                 PrintWriter out = new PrintWriter(s.getOutputStream(), true)) {
                String msg = in.readLine();
                out.println("ECHO: " + msg.toUpperCase());
            } catch (IOException e) { e.printStackTrace(); }
        });
        t.start();
        try (Socket c = new Socket("localhost", port);
             PrintWriter out = new PrintWriter(c.getOutputStream(), true);
             BufferedReader in = new BufferedReader(new InputStreamReader(c.getInputStream()))) {
            out.println("hello futureself");
            System.out.println(in.readLine());
        }
        t.join(); server.close();
    }
}
```
Output:
```
ECHO: HELLO FUTURESELF
```
A real server handles each client in its own thread so one slow client does not block others.

## UDP in brief
The sender builds a `DatagramPacket(data, length, address, port)` and calls `send`; the receiver calls `receive` on a `DatagramSocket(port)`. There is no connection and no delivery guarantee.

## URL parsing
`new URL("https://example.com:8080/path?q=1")` gives protocol `https`, host `example.com`, port 8080, path `/path`, query `q=1`.

## Hindi saransh
Socket = IP + port। TCP भरोसेमंद है (connection बनता है), UDP तेज़ है पर packet खो सकता है। Server `accept()` करता है और client `Socket` बनाकर जुड़ता है।

> TCP for reliability, UDP for speed. A socket is IP plus port.
@qa
Q: Difference between TCP and UDP?
A: TCP is connection-oriented, reliable and ordered; UDP is connectionless and faster but offers no delivery or ordering guarantee.
Q: What does ServerSocket.accept() do?
A: It waits (blocks) until a client connects and returns a Socket for communicating with that client.
Q: What is a port?
A: A 16-bit number identifying a particular application or service on a host.
Q: Which Java classes are used for UDP?
A: DatagramSocket and DatagramPacket.
Q: Why does a server usually create a thread per client?
A: So it can serve several clients at once; otherwise one client would block all others while being served.
@quiz
? The client-side class for TCP is
- ServerSocket
+ Socket
- DatagramSocket
- URL
! A client creates a Socket to connect.
? Default HTTP port
- 21
- 25
+ 80
- 443
! HTTP uses 80; HTTPS uses 443.
? Which protocol is connectionless?
- TCP
+ UDP
- HTTP
- FTP
! UDP sends independent datagrams.
? ServerSocket.accept() is
+ blocking
- non-blocking
- static
- private
! It waits for a client.
? A socket is the combination of
- name and age
+ IP address and port
- URL and path
- thread and process
! It identifies an endpoint.

@visual
sequence | A TCP conversation | Client > Server socket : connect to port 5000; Server socket > Client : accept() returns a Socket; Client > Server socket : send a line of text; Server socket > Client : send the reply

@problems
## Moderate
P: Differentiate TCP and UDP and name the matching Java classes.
A: TCP is connection-oriented, reliable and ordered (Socket and ServerSocket). UDP is connectionless, faster but with no delivery guarantee (DatagramSocket and DatagramPacket).
R: 2 | TCP properties and classes
R: 2 | UDP properties and classes
## High
P: Write the outline of a simple TCP server on port 5000 that reads one line from a client and sends it back.
A: try (ServerSocket ss = new ServerSocket(5000); Socket s = ss.accept()) {
  BufferedReader in = new BufferedReader(new InputStreamReader(s.getInputStream()));
  PrintWriter out = new PrintWriter(s.getOutputStream(), true);
  out.println("Echo: " + in.readLine());
}
The server waits in accept() until a client connects.
R: 2 | ServerSocket and accept
R: 2 | Input and output streams from the socket
R: 1 | Echo reply
## Advanced
P: For URL u = new URL("https://example.com:8080/path/page?q=1#top") give getProtocol, getHost, getPort, getPath, getQuery, getRef and getDefaultPort.
A: getProtocol = https, getHost = example.com, getPort = 8080, getPath = /path/page, getQuery = q=1, getRef = top, getDefaultPort = 443. (getPort returns -1 when no port is given in the URL.)
R: 3 | Protocol, host, port, path correct
R: 2 | Query, reference and default port 443
