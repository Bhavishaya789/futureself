# Classical ciphers and RSA
minutes: 25
yt: rsa algorithm explained with example
@study
**Goals of security (CIA):** confidentiality, integrity, availability; plus authentication and non-repudiation.
## Classical ciphers
**Caesar cipher:** shift every letter by k. With k = 3, HELLO becomes **KHOOR**. Only 25 keys, so brute force breaks it. Others: Vigenere (repeating key), Playfair, Hill, rail fence, one-time pad (unbreakable if the key is random, as long as the message and never reused).
## Symmetric and asymmetric
Symmetric (AES, DES): one shared key; fast. Asymmetric (RSA, ECC): public and private keys; slower; solves key distribution and enables digital signatures. AES uses 128-bit blocks and 128, 192 or 256-bit keys.
## RSA worked example
Choose primes p = 61 and q = 53. n = p q = **3233**; phi = (p - 1)(q - 1) = **3120**. Choose e = 17 (coprime with phi). Then d = e^-1 mod phi = **2753**. Public key (17, 3233); private key (2753, 3233).
Encrypt m = 65: c = 65^17 mod 3233 = **2790**. Decrypt: 2790^2753 mod 3233 = **65**.
```python
p, q, e = 61, 53, 17
n, phi = p * q, (p - 1) * (q - 1)
d = pow(e, -1, phi)
c = pow(65, e, n)
print(n, phi, d, c, pow(c, d, n))   # 3233 3120 2753 2790 65
```
Real RSA uses 2048-bit or larger n and padding (OAEP); textbook RSA as shown is insecure.
## Hashing and signatures
A hash (SHA-256) maps data to a fixed-size digest: one-way, collision resistant. A digital signature is the hash encrypted with the private key; anyone can verify it with the public key.
## Hindi saransh
Caesar cipher mein har letter k jagah shift hota hai. RSA mein n = pq, d = e^-1 mod phi; public key se encrypt, private key se decrypt.
> Never use textbook RSA or a Caesar cipher to protect real data.
@qa
Q: Encrypt HELLO with a Caesar shift of 3.
A: KHOOR.
Q: In the example what is d?
A: 2753.
Q: Difference between symmetric and asymmetric encryption?
A: Symmetric uses one shared key; asymmetric uses a public-private key pair.
Q: What does a digital signature provide?
A: Authentication, integrity and non-repudiation.
@quiz
? Caesar shift 3 on HELLO gives
- IFMMP
+ KHOOR
- EBIIL
- LIPPS
! H->K, E->H, L->O, L->O, O->R.
? In RSA with p = 61 and q = 53, n equals
- 114
+ 3233
- 3120
- 2753
! 61 x 53.
? phi(n) in that example is
- 3233
+ 3120
- 2753
- 17
! 60 x 52.
? Encrypting 65 with e = 17 gives
- 65
+ 2790
- 3120
- 17
! 65^17 mod 3233.
? A hash function is
- reversible
+ one-way
- a key exchange
- a cipher with a key
! Cannot be inverted.
@visual
flow | RSA | Choose primes p and q > Compute n and phi > Choose e > Compute d > Encrypt with e and decrypt with d
formula | RSA | n = p q ; phi = (p-1)(q-1) ; c = m^e mod n ; m = c^d mod n
@problems
## Moderate
P: Encrypt HELLO with a Caesar cipher of shift 3.
A: KHOOR.
R: 1 | Shift
R: 1 | KHOOR
## High
P: For p = 61, q = 53, e = 17 find n, phi and d.
A: n = 3233, phi = 3120, d = 2753.
R: 1 | n
R: 1 | phi
R: 1 | d
## Advanced
P: Encrypt m = 65 and decrypt the result using the keys above.
A: c = 65^17 mod 3233 = 2790; m = 2790^2753 mod 3233 = 65.
R: 2 | Encrypt
R: 2 | Decrypt
