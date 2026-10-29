# File concepts, access methods and directory structure
minutes: 30
yt: file system concepts access methods directory structure operating system
yt: file attributes operations types OS
@study
A **file** is a named collection of related information stored on secondary storage. The OS gives it a logical view independent of the physical device.

## File attributes
Name, identifier, type, location, size, protection (permissions), time stamps (created, modified, accessed), and owner.

## File operations
Create, write, read, **seek** (reposition), delete, truncate, open and close. `open()` loads file metadata into the system-wide **open-file table** and the per-process open-file table, and returns a **file descriptor**.

## File types and extensions
Regular files (text, binary), directories, and in Unix special files (device files, pipes, sockets). Extensions like `.c` or `.pdf` hint at the type; Unix may also use **magic numbers**.

## Access methods
- **Sequential access:** records are read in order; a **current position pointer** moves forward. Typical for text files and tapes.
- **Direct (random) access:** read any block by number: `read(n)`. Needed by databases.
- **Indexed access:** an index file points to records; search the index, then go directly to the record.

## Directory structure
A **directory** maps names to file control blocks (or inodes).
- **Single-level:** one directory for all files. Name clashes, no grouping.
- **Two-level:** a directory for each user. Isolates users but no sharing of subdirectories.
- **Tree-structured:** directories contain files and subdirectories. Uses **absolute paths** (`/home/anil/notes.txt`) and **relative paths** (`../notes.txt`). Most common.
- **Acyclic graph:** allows sharing through **links**. A **hard link** is another name for the same inode (the file lives until the last link is removed). A **symbolic (soft) link** is a small file containing a path; it can dangle if the target is deleted.
- **General graph:** may have cycles; needs garbage collection or cycle checking.

## File protection
Unix uses **owner, group, other** with read, write, execute bits (rwx). Example `rwxr-x---`: owner can do everything, group can read and execute, others have nothing. Access-control lists (ACLs) give finer control.

## File system mounting
A file system on a device is **mounted** at a mount point in the directory tree to make it accessible.

## Consistency semantics
When several users share a file: **Unix semantics** (writes immediately visible), **session semantics** (changes visible only after close, used in AFS), **immutable shared files**.

> A directory is itself a file that maps names to metadata.
@qa
Q: What is a file descriptor?
A: A small integer returned by open() that identifies an open file in a process's open-file table.
Q: What is the difference between sequential and direct access?
A: Sequential access reads records in order from the current position. Direct access can read or write any block by its number without reading the earlier ones.
Q: What is the difference between hard and soft links?
A: A hard link is an additional directory entry for the same inode, and the data survives until all hard links are removed. A soft link is a separate file containing the target path and breaks if the target is removed.
Q: What does the mode rwxr-x--- mean?
A: The owner has read, write and execute permission, the group has read and execute, and everyone else has no permission.
Q: Why is a tree-structured directory preferred over a single-level directory?
A: It allows grouping, avoids filename clashes between users and projects, and supports path names.
@quiz
? Reading blocks in order from a position pointer is
+ sequential access
- direct access
- indexed access
- hashed access
! The pointer advances after each read.
? A symbolic link
- shares the same inode
+ stores the path of another file
- cannot point to directories
- always survives deletion of the target
! It contains a path and may dangle.
? In rwxr-x---, the group can
- read, write, execute
+ read and execute
- only write
- nothing
! The middle triplet r-x gives read and execute.
? The system call that returns a file descriptor is
- read
- seek
+ open
- close
! open creates the entry in the open-file table.
? Which directory structure allows sharing of files through links?
- Single-level
- Two-level
+ Acyclic graph
- None
! Links create multiple names for the same file.

@visual
tree | A typical directory tree | root(home(alice(notes.txt, project), bob), etc(passwd), bin(ls))

@problems
## Moderate
P: List five common file attributes and five basic file operations.
A: Attributes: name, type, location, size, protection (permissions), timestamps (created, modified), owner. Operations: create, open, read, write, seek (reposition), delete, truncate, close.
R: 2 | Five correct attributes
R: 2 | Five correct operations
## High
P: Explain sequential, direct and indexed access methods with one use case each.
A: Sequential access reads records one after another in order (log files, tape). Direct (random) access jumps to any block number directly without reading earlier ones (databases, fixed-size records). Indexed access keeps an index of keys that points to records, so a search finds the position quickly and then uses direct access (a book index, database index).
R: 2 | Sequential and direct explained
R: 2 | Indexed access explained
R: 1 | Use cases
## Advanced
P: Compare single-level, two-level, tree-structured and acyclic-graph directories. For an acyclic graph with sharing, what happens to a hard link and to a soft link when the original file is deleted?
A: Single-level: one directory for all files, name clashes, no grouping. Two-level: one directory per user, no sharing of files between users easily. Tree: hierarchy with sub-directories and path names, natural grouping. Acyclic graph: allows shared files and directories using links.
Hard link: another name for the same inode, the data stays until the last link is removed. Soft (symbolic) link: stores the path to the file; if the original is deleted it becomes a dangling link and access fails.
R: 2 | Four directory structures compared
R: 2 | Hard link keeps the data
R: 1 | Soft link dangles
