# Passwords, hashing and authentication
minutes: 25
yt: password hashing salt bcrypt explained
@study
**Password entropy** = length x log2(alphabet size). Eight random characters from 62 (a-z, A-Z, 0-9): 8 x log2(62) = **47.6 bits**. Four random words from a 2048-word list: 4 x 11 = **44 bits** and far easier to remember. Twelve random lowercase letters: **56.4 bits**. Length and randomness matter most; reused or common passwords are weak.
**Storing passwords:** never store plain text. Store a **salted, slow hash** using bcrypt, scrypt or Argon2 (not plain MD5 or SHA-1). A **salt** is a random value per user so equal passwords have different hashes and precomputed (rainbow) tables fail. A slow function makes guessing expensive.
**Multi-factor authentication (MFA):** something you know + have + are. **TOTP** codes (authenticator apps) are made from a shared secret and the current 30-second time step using HMAC; the RFC 6238 test value for the standard secret at T = 59 s is **94287082** (8 digits). Prefer passkeys / FIDO2 and use a password manager.
```python
import hashlib, os
salt = os.urandom(16)
h = hashlib.scrypt(b"my-password", salt=salt, n=2**14, r=8, p=1)
print(len(h), h != hashlib.scrypt(b"my-password", salt=os.urandom(16), n=2**14, r=8, p=1))   # 64 True
```
## Hindi saransh
Password entropy = lambai x log2(akshar-samuh). Password ko salt ke saath dheemi hash (bcrypt/Argon2) se store karo. MFA mein do alag cheezein chahiye; authenticator app ya passkey behtar hai.
> Use a long unique passphrase for each account plus MFA, managed by a password manager.
@qa
Q: Why add a salt to a password hash?
A: So identical passwords hash differently and precomputed tables become useless.
Q: Why use bcrypt or Argon2 rather than SHA-256 for passwords?
A: They are deliberately slow and memory-hard, making brute-force guessing costly.
Q: What are the three authentication factors?
A: Something you know, something you have, and something you are.
Q: How is entropy computed?
A: Length x log2(number of possible symbols), assuming random choices.
@quiz
? Entropy of 8 random characters from 62 symbols is about
- 24 bits
- 36 bits
+ 47.6 bits
- 62 bits
! 8 x 5.95.
? Four random words from 2048 words give
- 22 bits
+ 44 bits
- 64 bits
- 88 bits
! 4 x 11.
? A salt is
- a secret key
+ a random per-user value added before hashing
- an encryption algorithm
- a firewall
! It defeats rainbow tables.
? MFA is stronger because
+ an attacker needs more than the password
- passwords become longer
- hashes become faster
- it removes phishing
! Multiple independent factors.
@visual
steps | Safe login storage | User sets a password; Server adds a random salt; Slow hash (bcrypt or Argon2); Store salt and hash only; On login, repeat and compare
@problems
## Moderate
P: Compute the entropy of a 12-letter random lowercase password.
A: 12 x log2(26) = 12 x 4.70 = 56.4 bits.
R: 1 | Formula
R: 1 | 56.4
## High
P: Compare two policies: 8 random characters from 62 symbols vs four random words from 2048.
A: 47.6 vs 44 bits. About equal; the words are easier to remember.
R: 2 | Both values
R: 1 | Comparison
## Advanced
P: Explain how a website should store and verify passwords.
A: Generate a random salt per user, hash with Argon2 or bcrypt, store both, and on login hash the entered password with the stored salt and compare in constant time; add rate limiting and MFA.
R: 3 | Salt and slow hash
R: 1 | MFA and limits
