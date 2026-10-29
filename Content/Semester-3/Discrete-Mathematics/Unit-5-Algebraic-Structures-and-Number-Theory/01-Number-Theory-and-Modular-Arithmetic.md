# Number theory and modular arithmetic
minutes: 40
yt: number theory gcd euclid extended modular inverse
yt: RSA algorithm explained modular arithmetic
@study
## Divisibility
a | b means b = ka for some integer k. Division algorithm: a = bq + r with 0 ≤ r < b.

## Primes
A prime has exactly two positive divisors. The **fundamental theorem of arithmetic**: every integer > 1 is a unique product of primes (360 = 2³·3²·5). There are infinitely many primes (Euclid's proof by contradiction).

## GCD and LCM
gcd(a, b) is the largest common divisor. **Euclid's algorithm:** gcd(a, b) = gcd(b, a mod b).
gcd(240, 46): 240 = 5·46 + 10; 46 = 4·10 + 6; 10 = 1·6 + 4; 6 = 1·4 + 2; 4 = 2·2 + 0, so gcd = 2.
Also gcd(a,b)·lcm(a,b) = a·b.

## Extended Euclid and Bézout
There exist integers x, y with ax + by = gcd(a, b). For 240 and 46: 240(−9) + 46(47) = −2160 + 2162 = **2** (verified by program).

## Modular arithmetic
a ≡ b (mod m) means m | (a − b). Operations respect congruence: addition, subtraction and multiplication work modulo m.
- **Modular inverse** of a mod m exists iff gcd(a, m) = 1, found by extended Euclid. Example: inverse of 3 mod 11 is **4**, since 3·4 = 12 ≡ 1.
- Units of Z_6 are {1, 5}.
- Linear congruence ax ≡ b (mod m) has a solution iff gcd(a, m) divides b.

## Fermat and Euler
- **Fermat's little theorem:** if p is prime and p ∤ a then a^(p−1) ≡ 1 (mod p). So 7^128 mod 13: since 7^12 ≡ 1, 128 = 10·12 + 8, so 7^128 ≡ 7^8 ≡ 3 (mod 13) (verified).
- **Euler's totient φ(n):** count of integers 1..n coprime with n. φ(p) = p − 1; φ(pq) = (p−1)(q−1); Euler: a^φ(n) ≡ 1 (mod n) if gcd(a,n)=1.

## Chinese remainder theorem
If the moduli are pairwise coprime, the system x ≡ a_i (mod m_i) has a unique solution modulo the product. Example: x ≡ 2 (mod 3), x ≡ 3 (mod 5) gives x ≡ 8 (mod 15).

## Application: RSA
1. Choose primes p, q; n = pq; φ(n) = (p−1)(q−1).
2. Choose e coprime to φ(n); compute d = e⁻¹ mod φ(n).
3. Public key (n, e), private key d. Encrypt c = m^e mod n; decrypt m = c^d mod n.
Security relies on the difficulty of factoring n. Toy example p=3, q=11: n = 33, φ = 20, e = 3, d = 7; message 4 gives c = 64 mod 33 = 31; decrypt 31^7 mod 33 = 4.
```python
n, e, d = 33, 3, 7
c = pow(4, e, n); print(c, pow(c, d, n))
```
Output:
```
31 4
```
Other uses: hashing, checksums (ISBN, Aadhaar-type check digits), pseudo-random number generators, hash table sizes.

> Modular inverse exists only when the number is coprime to the modulus.
@qa
Q: Find gcd(48, 18) by Euclid's algorithm.
A: 48 = 2·18 + 12; 18 = 1·12 + 6; 12 = 2·6 + 0. So gcd = 6.
Q: When does a modular inverse of a modulo m exist?
A: Exactly when gcd(a, m) = 1; it is found with the extended Euclidean algorithm.
Q: State Fermat's little theorem.
A: If p is prime and p does not divide a, then a^(p−1) ≡ 1 (mod p).
Q: What is Euler's totient function of 35?
A: φ(35) = φ(5)·φ(7) = 4·6 = 24.
Q: Why is RSA secure?
A: Computing d from the public key requires φ(n), which needs the prime factors of n; factoring a large n is computationally infeasible with known methods.
@quiz
? gcd(240, 46) equals
- 1
+ 2
- 6
- 10
! Euclid's algorithm ends at 2.
? The inverse of 3 modulo 11 is
- 3
- 5
+ 4
- 7
! 3 x 4 = 12 which is 1 mod 11.
? φ(p) for a prime p is
- p
+ p − 1
- p + 1
- 1
! All smaller positive numbers are coprime.
? Fermat's theorem needs the modulus to be
- even
+ prime
- a power of 2
- composite
! a^(p-1) is congruent to 1 mod p for prime p.
? In toy RSA with n = 33, e = 3, d = 7 the message 4 encrypts to
- 12
+ 31
- 7
- 4
! 4^3 = 64 and 64 mod 33 = 31.

@visual
steps | Euclid's algorithm for gcd(48, 18) | 48 = 2 x 18 + 12; 18 = 1 x 12 + 6; 12 = 2 x 6 + 0; The last non-zero remainder 6 is the gcd

@problems
## Moderate
P: Find gcd(48, 18) using Euclid's algorithm, and compute 17 mod 5 and -7 mod 5.
A: 48 = 2 x 18 + 12, 18 = 1 x 12 + 6, 12 = 2 x 6 + 0, so gcd = 6. 17 mod 5 = 2. -7 mod 5 = 3, because -7 = -2 x 5 + 3.
R: 2 | gcd 6 with steps
R: 2 | 2 and 3
## High
P: Express gcd(35, 15) as 35x + 15y. Find the inverse of 7 modulo 26.
A: 35 = 2 x 15 + 5, so 5 = 35 - 2 x 15 = 35 x 1 + 15 x (-2). The inverse of 7 modulo 26 is 15, since 7 x 15 = 105 = 4 x 26 + 1.
R: 2 | 5 = 35(1) + 15(-2)
R: 3 | Inverse 15 with the check
## Advanced
P: RSA with p = 3 and q = 11. Find n, phi(n), take e = 3, find d, then encrypt m = 4 and decrypt the result.
A: n = 33, phi = (3 - 1)(11 - 1) = 20. e = 3 is coprime to 20. d satisfies 3d = 1 mod 20, so d = 7 (3 x 7 = 21). Encrypt: c = 4^3 mod 33 = 64 mod 33 = 31. Decrypt: 31^7 mod 33 = 4. (Fermat check: 2^10 mod 11 = 1.)
R: 2 | n = 33 and phi = 20
R: 2 | d = 7
R: 1 | Ciphertext 31
R: 1 | Decrypts back to 4
