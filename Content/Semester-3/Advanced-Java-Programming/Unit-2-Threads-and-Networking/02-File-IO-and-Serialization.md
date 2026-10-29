# File I/O and serialization
minutes: 30
yt: java file handling io streams reader writer
yt: java serialization transient serialVersionUID
@study
## Streams
Java I/O uses **streams**:
- **Byte streams:** `InputStream`/`OutputStream` (`FileInputStream`, `BufferedInputStream`) for binary data.
- **Character streams:** `Reader`/`Writer` (`FileReader`, `BufferedReader`, `PrintWriter`) for text.
Buffered classes reduce disk access and give `readLine()`.

## NIO.2 (modern way)
`java.nio.file.Files` and `Path` read or write whole files in one line and work with directories.
```java
import java.io.*;
import java.nio.file.*;
import java.util.*;
public class FileDemo {
    public static void main(String[] args) throws IOException {
        Path p = Files.createTempFile("notes", ".txt");
        Files.write(p, List.of("java", "streams", "files"));
        try (BufferedReader br = Files.newBufferedReader(p)) {
            String line; int n = 0;
            while ((line = br.readLine()) != null) { n++; System.out.println(n + ": " + line); }
        }
        System.out.println("size=" + Files.size(p) + " bytes");
        Files.delete(p);
    }
}
```
Output:
```
1: java
2: streams
3: files
size=19 bytes
```
(Each line includes a newline: 4 + 1 + 7 + 1 + 5 + 1 = 19 bytes.)

## Classic `File` class
`exists()`, `isDirectory()`, `list()`, `length()`, `mkdir()`, `delete()`.

## Serialization
**Serialization** converts an object to a byte stream (to save or send it); **deserialization** rebuilds it. The class implements the marker interface `Serializable`.
- `transient` fields are skipped (passwords, caches).
- `static` fields are not serialized.
- `serialVersionUID` identifies the class version.
```java
import java.io.*;
public class SerDemo {
    static class User implements Serializable {
        private static final long serialVersionUID = 1L;
        String name; transient String password;
        User(String n, String p) { name = n; password = p; }
    }
    public static void main(String[] args) throws Exception {
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        try (ObjectOutputStream out = new ObjectOutputStream(bos)) { out.writeObject(new User("anil", "secret")); }
        try (ObjectInputStream in = new ObjectInputStream(new ByteArrayInputStream(bos.toByteArray()))) {
            User u = (User) in.readObject();
            System.out.println(u.name + " " + u.password);
        }
    }
}
```
Output:
```
anil null
```
The transient password was not saved, so it comes back as `null`.

## Hindi saransh
Text के लिए Reader/Writer, binary के लिए InputStream/OutputStream। Serialization से object को bytes में बदलकर save या भेजा जा सकता है; `transient` field छोड़ दी जाती है।

> Always use try-with-resources so streams are closed.
@qa
Q: Difference between byte streams and character streams?
A: Byte streams handle raw binary data (InputStream/OutputStream); character streams handle text with encoding (Reader/Writer).
Q: Why use BufferedReader?
A: It reads a block of data at once, reducing I/O calls and providing the readLine() method.
Q: What is serialization?
A: Converting an object's state into a byte stream so it can be saved or transmitted, and later rebuilt by deserialization.
Q: What does the transient keyword do?
A: It marks a field to be excluded from serialization; it is restored with its default value.
Q: What is the purpose of serialVersionUID?
A: It identifies the class version so deserialization can detect incompatible class changes.
@quiz
? Interface needed to serialize a class
- Cloneable
+ Serializable
- Comparable
- Runnable
! Serializable is a marker interface.
? A transient field is
- encrypted
+ not serialized
- always saved
- static
! It is skipped and gets its default value.
? Which class reads lines of text efficiently?
- FileInputStream
+ BufferedReader
- ObjectOutputStream
- DataInput
! BufferedReader has readLine().
? try-with-resources automatically
- compiles code
+ closes the resources
- creates threads
- sorts files
! The AutoCloseable objects are closed at the end.
? Byte streams are best for
- plain text only
+ binary data such as images
- strings only
- URLs
! They do not apply character encoding.

@visual
flow | Reading a file line by line | FileReader opens the file > BufferedReader reads one line at a time > Your code processes the line > try-with-resources closes the stream

@problems
## Moderate
P: Differentiate byte streams and character streams. Name two classes of each.
A: Byte streams read and write raw bytes (InputStream and OutputStream, for example FileInputStream and FileOutputStream); they suit images and binary data. Character streams read and write text characters with encoding (Reader and Writer, for example FileReader and BufferedWriter).
R: 2 | Difference
R: 2 | Two classes of each kind
## High
P: Write a method that copies a text file using try-with-resources and buffered streams.
A: static void copy(String from, String to) throws IOException {
  try (BufferedReader in = new BufferedReader(new FileReader(from)); BufferedWriter out = new BufferedWriter(new FileWriter(to))) {
    String line; while ((line = in.readLine()) != null) { out.write(line); out.newLine(); }
  }
}
try-with-resources closes both streams automatically even when an exception occurs.
R: 2 | Reader and writer with buffering
R: 2 | Read loop until null
R: 1 | Automatic closing explained
## Advanced
P: What is serialization? Explain Serializable, transient and serialVersionUID. After deserializing an object with fields name = "Ravi" and transient String pw = "secret", what are the values?
A: Serialization converts an object into a byte stream so it can be saved or sent; deserialization rebuilds it. A class must implement the marker interface Serializable. A transient field is skipped. serialVersionUID is a version number checked while deserializing, so an incompatible class change raises InvalidClassException.
After deserialization name is "Ravi" and pw is null (an int transient field would be 0).
R: 2 | Serialization and Serializable
R: 2 | transient and serialVersionUID
R: 1 | Values Ravi and null
