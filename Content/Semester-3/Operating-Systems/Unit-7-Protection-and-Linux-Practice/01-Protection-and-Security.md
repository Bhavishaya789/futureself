# Protection and security in operating systems
minutes: 25
yt: operating system protection security access matrix authentication
yt: domain of protection access control list capability
@study
**Protection** controls access of programs, processes and users to the resources defined by the OS (internal). **Security** defends the system against external and internal attacks (viruses, intruders, denial of service).

## Principle of least privilege
Programs and users should get only the privileges needed for their task, nothing more. It limits the damage of bugs and attacks.

## Domain of protection
A **domain** is a set of (object, access-rights) pairs. A process executes in a domain. In Unix, a domain is the user ID, plus a special bit: the **setuid** bit makes a program run with the owner's privileges (used by `passwd`, risky if misused).

## Access matrix
Rows are domains, columns are objects, entries are rights.
| | File A | File B | Printer |
| --- | --- | --- | --- |
| Domain 1 | read | | |
| Domain 2 | | read, write | print |
| Domain 3 | read, write, execute | | |
Storing the whole matrix wastes space, so it is implemented as:
- **Access-control list (ACL):** per object, a list of (domain, rights). Easy to revoke; used by file systems.
- **Capability list:** per domain, a list of objects with rights (unforgeable tokens). Efficient access checks, harder revocation.

## Authentication
- **Passwords:** stored as **salted hashes**, never plain text. Salt defeats precomputed rainbow tables. Attacks: brute force, dictionary, phishing, guessing.
- **Multi-factor authentication:** something you know (password), have (phone, token), are (fingerprint).
- **One-time passwords** and **biometrics**.

## Common threats
- **Malware:** virus (attaches to programs), worm (spreads by itself over a network), trojan horse (disguised as useful software), ransomware, spyware.
- **Buffer overflow:** writing past the end of a buffer to overwrite the return address. Defences: bounds checks, stack canaries, **ASLR** (randomised addresses), **NX** (non-executable stack).
- **Denial of Service (DoS/DDoS):** flooding to exhaust resources.
- **Privilege escalation, social engineering, man-in-the-middle.**

## Defence mechanisms
Firewalls, intrusion detection, patching, antivirus, encryption, logging and auditing, sandboxing (containers, virtual machines), and secure boot.

## Security levels
Physical, network, operating system and application level: a chain is only as strong as its weakest link.

> Least privilege + strong authentication + patching prevent most incidents.
@qa
Q: What is the principle of least privilege?
A: Give each user or program only the minimum access rights it needs to do its job, which limits the harm from mistakes or attacks.
Q: What is the difference between an ACL and a capability list?
A: An ACL is stored with each object and lists the domains that may access it. A capability list is stored with each domain and lists the objects it may access.
Q: Why are passwords stored as salted hashes?
A: A hash hides the actual password, and a random salt makes identical passwords hash differently and stops rainbow-table attacks.
Q: What is a buffer overflow attack and one defence?
A: Writing more data than a buffer holds to overwrite neighbouring memory, such as the return address. Defences include bounds checking, stack canaries, ASLR and non-executable stacks.
Q: What is the difference between a virus and a worm?
A: A virus needs a host program and user action to spread; a worm spreads by itself across networks.
@quiz
? A list stored with each object showing who may access it is an
+ access-control list
- capability list
- page table
- inode
! ACLs are object-centred.
? Passwords should be stored as
- plain text
- encrypted with a shared key
+ salted hashes
- reversible codes
! A salted hash cannot be reversed easily and resists rainbow tables.
? ASLR helps defend against
- deadlock
+ memory exploits such as buffer overflows
- thrashing
- fragmentation
! Randomising addresses makes jump targets hard to predict.
? Malware that spreads on its own over a network is a
- virus
+ worm
- trojan
- spyware
! Worms replicate without a host file.
? Giving a user only necessary permissions is the principle of
- maximum access
- open access
+ least privilege
- shared secrets
! It limits possible damage.

@visual
compare | Access control list and capability list | Access control list=Stored with each object~Answers: who can use this file?~Easy to revoke for one object; Capability list=Stored with each subject~Answers: what can this user use?~Easy to pass rights along

@problems
## Moderate
P: Differentiate between protection and security in an operating system. Give one threat and one defence.
A: Protection is the internal mechanism that controls access of programs, processes and users to resources defined by the system (permissions, modes). Security is the wider defence of the system against external and internal attacks, including authentication, encryption and network defence. Threat example: a virus or password guessing. Defence example: strong passwords with hashing, antivirus, firewalls.
R: 2 | Correct difference between protection and security
R: 2 | One threat and one defence
## High
P: Access matrix: domain D1 has F1: read; domain D2 has F1: read and F2: read, write; domain D3 has F1: read, write, execute. Write the access control list for F1 and the capability list for D2.
A: ACL for F1: D1 {read}; D2 {read}; D3 {read, write, execute}.
Capability list for D2: (F1, read) and (F2, read, write).
R: 2 | ACL for F1 with all three domains
R: 2 | Capability list for D2
## Advanced
P: Explain how a buffer overflow attack works and list three defences used by modern operating systems and compilers.
A: A program copies input into a fixed-size buffer without checking its length. Extra data overwrites neighbouring memory on the stack, including the return address. The attacker sets the return address to injected code, so when the function returns, the attacker's code runs with the program's privileges.
Defences: bounds checking and safe functions; stack canaries that detect overwrites; non-executable stack (NX/DEP); address space layout randomisation (ASLR).
R: 2 | Overwriting the return address explained
R: 3 | Three valid defences
