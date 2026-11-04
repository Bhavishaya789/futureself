# Binomial Theorem
minutes: 45
yt: class 11 maths binomial theorem expansion general term pascal triangle
@study
The binomial theorem gives the expansion of (a + b)^n for a positive integer n: (a + b)^n = nC0 a^n + nC1 a^(n-1) b + nC2 a^(n-2) b^2 + ... + nCn b^n, where nCr = n!/(r!(n - r)!). The expansion has n + 1 terms. The general term (r + 1)th is T(r+1) = nCr a^(n-r) b^r. The coefficients are the entries of Pascal's triangle, where each entry is the sum of the two above, and nCr = n-1Cr-1 + n-1Cr. Properties: nCr = nC(n-r); the sum of all coefficients is 2^n (put a = b = 1); the sum of coefficients with alternate signs is 0 (put a = 1, b = -1); the sum of the coefficients of odd terms equals the sum of even terms, each 2^(n-1). In (a - b)^n the signs alternate. Middle terms: if n is even there is one middle term, the (n/2 + 1)th; if n is odd there are two, the ((n+1)/2)th and ((n+3)/2)th. The coefficient of x^k in (x + 1/x)^n is found by setting the power of x in T(r+1) equal to k. The term independent of x has power zero. The greatest coefficient is the middle binomial coefficient. Special cases: (1 + x)^n = sum nCr x^r and (1 - x)^n. Applications: finding approximate values such as (1.01)^10, divisibility questions and remainders. The expansion of (a + b)^2 = a^2 + 2ab + b^2 and (a + b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3. Also nC0 + nC1 + ... + nCn = 2^n.
## Deep dive: Expansion and general term
Write T(r+1) with the power of each part. For a term containing x^k solve the equation for r. r must be a whole number between 0 and n. For (a + b)^n the powers of a fall from n to 0 while those of b rise from 0 to n.
## Deep dive: Properties
Coefficients are symmetric. Sum of coefficients is 2^n. Pascal triangle gives coefficients quickly. The middle term has the greatest coefficient.
## Deep dive: Applications
Approximation: (1 + x)^n is about 1 + nx for small x. Divisibility: express a number as (1 + k)^n or similar. Remainder questions use the first terms of the expansion.
## Hindi saransh
Dvipad prameya: (a+b)^n ke n+1 pad hote hain; samanya pad nCr a^(n-r) b^r; gunankon ka yog 2^n.
> The (r+1)th term uses nCr, not nC(r+1).
@formulas
## Key formulas
Expansion | n+1 terms | (a+b)^n
General term | nCr a^(n-r) b^r | T(r+1)
Sum of coefficients | 2^n | a = b = 1
nCr | nC(n-r) | Symmetry
Middle term | n even: (n/2+1)th | One term

@qa
Q: Which expands (a + b)^n for positive integer n?
A: Binomial theorem expands (a + b)^n for positive integer n.
Q: What do you know about Binomial theorem?
A: Binomial theorem expands (a + b)^n for positive integer n.
Q: Which in (a + b)^n is n + 1?
A: Number of terms in (a + b)^n is n + 1.
Q: What do you know about Number of terms?
A: Number of terms in (a + b)^n is n + 1.
Q: Which is T(r+1) = nCr a^(n-r) b^r?
A: General term is T(r+1) = nCr a^(n-r) b^r.
Q: What do you know about General term?
A: General term is T(r+1) = nCr a^(n-r) b^r.
Q: Which is nCr = n!/(r!(n-r)!)?
A: Binomial coefficient is nCr = n!/(r!(n-r)!).
Q: What do you know about Binomial coefficient?
A: Binomial coefficient is nCr = n!/(r!(n-r)!).
Q: Which gives binomial coefficients?
A: Pascal triangle gives binomial coefficients.
Q: What do you know about Pascal triangle?
A: Pascal triangle gives binomial coefficients.
Q: Which says each entry is the sum of two above?
A: Pascal rule says each entry is the sum of two above.
Q: What do you know about Pascal rule?
A: Pascal rule says each entry is the sum of two above.
Q: Which is nCr = nC(n-r)?
A: Symmetry of coefficients is nCr = nC(n-r).
Q: What do you know about Symmetry of coefficients?
A: Symmetry of coefficients is nCr = nC(n-r).
Q: Which is 2^n?
A: Sum of coefficients is 2^n.
Q: What do you know about Sum of coefficients?
A: Sum of coefficients is 2^n.
Q: Which is 0?
A: Alternate sum of coefficients is 0.
Q: What do you know about Alternate sum of coefficients?
A: Alternate sum of coefficients is 0.
Q: Which is 2^(n-1)?
A: Sum of odd coefficients is 2^(n-1).
Q: What do you know about Sum of odd coefficients?
A: Sum of odd coefficients is 2^(n-1).
Q: What do you know about Sum of even coefficients?
A: Sum of even coefficients is 2^(n-1).
Q: Which equals 1?
A: nC0 equals 1.
Q: What do you know about nC0?
A: NC0 equals 1.
Q: What do you know about nCn?
A: NCn equals 1.
Q: Which equals n?
A: nC1 equals n.
Q: What do you know about nC1?
A: NC1 equals n.
Q: Which equals n(n-1)/2?
A: nC2 equals n(n-1)/2.
Q: What do you know about nC2?
A: NC2 equals n(n-1)/2.
Q: Which is the (n/2 + 1)th term?
A: Middle term for even n is the (n/2 + 1)th term.
Q: What do you know about Middle term for even n?
A: Middle term for even n is the (n/2 + 1)th term.
Q: Which are the ((n+1)/2)th and ((n+3)/2)th?
A: Middle terms for odd n are the ((n+1)/2)th and ((n+3)/2)th.
Q: What do you know about Middle terms for odd n?
A: Middle terms for odd n are the ((n+1)/2)th and ((n+3)/2)th.
Q: Which occurs at the middle term?
A: Greatest coefficient occurs at the middle term.
Q: What do you know about Greatest coefficient?
A: Greatest coefficient occurs at the middle term.
Q: Which has power of x equal to zero?
A: Term independent of x has power of x equal to zero.
Q: What do you know about Term independent of x?
A: Term independent of x has power of x equal to zero.
Q: Which is found by equating the power to k?
A: Coefficient of x^k is found by equating the power to k.
Q: What do you know about Coefficient of x^k?
A: Coefficient of x^k is found by equating the power to k.
Q: Which decrease from n to 0?
A: Powers of a decrease from n to 0.
Q: What do you know about Powers of a?
A: Powers of a decrease from n to 0.
Q: Which increase from 0 to n?
A: Powers of b increase from 0 to n.
Q: What do you know about Powers of b?
A: Powers of b increase from 0 to n.
Q: Which in each term is n?
A: Sum of indices in each term is n.
Q: What do you know about Sum of indices?
A: Sum of indices in each term is n.
Q: Which has alternating signs?
A: Expansion of (a - b)^n has alternating signs.
Q: What do you know about Expansion of (a - b)^n?
A: Expansion of (a - b)^n has alternating signs.
Q: Which equals a^2 + 2ab + b^2?
A: (a + b)^2 equals a^2 + 2ab + b^2.
Q: What do you know about (a + b)^2?
A: (a + b)^2 equals a^2 + 2ab + b^2.
Q: Which equals a^3 + 3a^2 b + 3a b^2 + b^3?
A: (a + b)^3 equals a^3 + 3a^2 b + 3a b^2 + b^3.
Q: What do you know about (a + b)^3?
A: (a + b)^3 equals a^3 + 3a^2 b + 3a b^2 + b^3.
Q: Which equals the sum of nCr x^r?
A: (1 + x)^n equals the sum of nCr x^r.
Q: What do you know about (1 + x)^n?
A: (1 + x)^n equals the sum of nCr x^r.
Q: Which (1 + x)^n is about 1 + nx for small x?
A: Approximation (1 + x)^n is about 1 + nx for small x.
Q: What do you know about Approximation?
A: Approximation (1 + x)^n is about 1 + nx for small x.
Q: Which is about 1.1046?
A: (1.01)^10 is about 1.1046.
Q: What do you know about (1.01)^10?
A: (1.01)^10 is about 1.1046.
Q: Which can be proved using the binomial expansion?
A: Divisibility can be proved using the binomial expansion.
Q: What do you know about Divisibility?
A: Divisibility can be proved using the binomial expansion.
Q: Which use the first terms of the expansion?
A: Remainder problems use the first terms of the expansion.
Q: What do you know about Remainder problems?
A: Remainder problems use the first terms of the expansion.
Q: Which n! is the product of the first n naturals?
A: Factorial n! is the product of the first n naturals.
Q: What do you know about Factorial?
A: Factorial n! is the product of the first n naturals.
Q: What do you know about 0 factorial?
A: 0 factorial equals 1.
Q: Which nCr = (n-1)C(r-1) + (n-1)Cr?
A: Recurrence nCr = (n-1)C(r-1) + (n-1)Cr.
Q: What do you know about Recurrence?
A: Recurrence nCr = (n-1)C(r-1) + (n-1)Cr.
Q: Which T(r+1)/T(r) = (n - r + 1)/r times b/a?
A: Ratio of terms T(r+1)/T(r) = (n - r + 1)/r times b/a.
Q: What do you know about Ratio of terms?
A: Ratio of terms T(r+1)/T(r) = (n - r + 1)/r times b/a.
Q: What do you know about Sum of nC0 to nCn?
A: Sum of nC0 to nCn is 2^n.
Q: Which is another name for the term independent of x?
A: Constant term is another name for the term independent of x.
Q: What do you know about Constant term?
A: Constant term is another name for the term independent of x.
Q: Which generalised the binomial theorem to any index?
A: Isaac Newton generalised the binomial theorem to any index.
Q: What do you know about Isaac Newton?
A: Isaac Newton generalised the binomial theorem to any index.
Q: Which means an expression of two terms?
A: Binomial means an expression of two terms.
Q: What do you know about Binomial?
A: Binomial means an expression of two terms.
Q: Which is nCn?
A: Coefficient of the last term is nCn.
Q: What do you know about Coefficient of the last term?
A: Coefficient of the last term is nCn.
Q: Which is 20?
A: Value of 6C3 is 20.
Q: What do you know about Value of 6C3?
A: Value of 6C3 is 20.
Q: Which is 35?
A: Value of 7C3 is 35.
Q: What do you know about Value of 7C3?
A: Value of 7C3 is 35.
Q: Which is 70?
A: Value of 8C4 is 70.
Q: What do you know about Value of 8C4?
A: Value of 8C4 is 70.
Q: Which is 6?
A: Value of 4C2 is 6.
Q: What do you know about Value of 4C2?
A: Value of 4C2 is 6.
Q: What do you know about Coefficient of x^3 in (1+x)^6?
A: Coefficient of x^3 in (1+x)^6 is 20.
Q: Which is n?
A: Coefficient of x in (1+x)^n is n.
Q: What do you know about Coefficient of x in (1+x)^n?
A: Coefficient of x in (1+x)^n is n.
Q: Which is n a^(n-1) b?
A: Second term of (a+b)^n is n a^(n-1) b.
Q: What do you know about Second term of (a+b)^n?
A: Second term of (a+b)^n is n a^(n-1) b.
Q: Which is b^n?
A: Last term of (a+b)^n is b^n.
Q: What do you know about Last term of (a+b)^n?
A: Last term of (a+b)^n is b^n.
Q: Which is a^n?
A: First term of (a+b)^n is a^n.
Q: What do you know about First term of (a+b)^n?
A: First term of (a+b)^n is a^n.
Q: Which of a set relate to the sum of binomial coefficients?
A: Total subsets of a set relate to the sum of binomial coefficients.
Q: What do you know about Total subsets?
A: Total subsets of a set relate to the sum of binomial coefficients.
Q: Which is 10?
A: Value of 5C2 is 10.
Q: What do you know about Value of 5C2?
A: Value of 5C2 is 10.
Q: How many terms are in (a + b)^7?
A: 8.
Q: What is the general term of (a + b)^n?
A: nCr a^(n-r) b^r.
Q: What is the sum of the coefficients of (1 + x)^5?
A: 32.
Q: What is the middle term position for n = 6?
A: The 4th term.
Q: What is 5C2?
A: 10.
Q: What is 6C3?
A: 20.
Q: Expand (1 + x)^3.
A: 1 + 3x + 3x^2 + x^3.
Q: What is nCr equal to besides nCr?
A: nC(n-r).
Q: What is the sum of odd-term coefficients in (1+x)^8?
A: 128.
Q: What is the coefficient of x^2 in (1 + x)^5?
A: 10.
Q: How many middle terms for n = 7?
A: Two.
Q: What is 0 factorial?
A: 1.
@quiz
? Which expands (a + b)^n for positive integer n?
- (a + b)^2
+ Binomial theorem
- Isaac Newton
- nC0
! Binomial theorem expands (a + b)^n for positive integer n.
? Which statement is true of Binomial theorem?
+ Expands (a + b)^n for positive integer n
- Is nCr = n!/(r!(n-r)!)
- Equals a^2 + 2ab + b^2
- Has power of x equal to zero
! Binomial theorem expands (a + b)^n for positive integer n.
? Which in (a + b)^n is n + 1?
- Binomial coefficient
- nCn
- Value of 4C2
+ Number of terms
! Number of terms in (a + b)^n is n + 1.
? Which statement is true of Number of terms?
- Equals 1
- Is n a^(n-1) b
+ In (a + b)^n is n + 1
- Is the (n/2 + 1)th term
! Number of terms in (a + b)^n is n + 1.
? Which is T(r+1) = nCr a^(n-r) b^r?
- Value of 4C2
- Alternate sum of coefficients
- Sum of odd coefficients
+ General term
! General term is T(r+1) = nCr a^(n-r) b^r.
? Which statement is true of General term?
- Is 6
- N! is the product of the first n naturals
- Has power of x equal to zero
+ Is T(r+1) = nCr a^(n-r) b^r
! General term is T(r+1) = nCr a^(n-r) b^r.
? Which is nCr = n!/(r!(n-r)!)?
- First term of (a+b)^n
- nC1
+ Binomial coefficient
- Coefficient of x^3 in (1+x)^6
! Binomial coefficient is nCr = n!/(r!(n-r)!).
? Which statement is true of Binomial coefficient?
- T(r+1)/T(r) = (n - r + 1)/r times b/a
- Has power of x equal to zero
+ Is nCr = n!/(r!(n-r)!)
- Says each entry is the sum of two above
! Binomial coefficient is nCr = n!/(r!(n-r)!).
? Which gives binomial coefficients?
- Pascal rule
- Term independent of x
- Approximation
+ Pascal triangle
! Pascal triangle gives binomial coefficients.
? Which statement is true of Pascal triangle?
+ Gives binomial coefficients
- Is the (n/2 + 1)th term
- Equals n
- Is 20
! Pascal triangle gives binomial coefficients.
? Which says each entry is the sum of two above?
- Divisibility
- General term
- Approximation
+ Pascal rule
! Pascal rule says each entry is the sum of two above.
? Which statement is true of Pascal rule?
- Is 35
- Gives binomial coefficients
+ Says each entry is the sum of two above
- Equals the sum of nCr x^r
! Pascal rule says each entry is the sum of two above.
? Which is nCr = nC(n-r)?
+ Symmetry of coefficients
- Constant term
- Ratio of terms
- Second term of (a+b)^n
! Symmetry of coefficients is nCr = nC(n-r).
? Which statement is true of Symmetry of coefficients?
+ Is nCr = nC(n-r)
- Equals the sum of nCr x^r
- Generalised the binomial theorem to any index
- Means an expression of two terms
! Symmetry of coefficients is nCr = nC(n-r).
? Which is 2^n?
- Powers of a
- Isaac Newton
- First term of (a+b)^n
+ Sum of coefficients
! Sum of coefficients is 2^n.
? Which statement is true of Sum of coefficients?
+ Is 2^n
- Has alternating signs
- Equals a^2 + 2ab + b^2
- Is 10
! Sum of coefficients is 2^n.
? Which is 0?
+ Alternate sum of coefficients
- nC2
- Coefficient of x in (1+x)^n
- Coefficient of x^3 in (1+x)^6
! Alternate sum of coefficients is 0.
? Which statement is true of Alternate sum of coefficients?
- Use the first terms of the expansion
+ Is 0
- Equals n(n-1)/2
- Is 2^(n-1)
! Alternate sum of coefficients is 0.
? Which is 2^(n-1)?
+ Sum of odd coefficients
- Coefficient of x^3 in (1+x)^6
- Coefficient of x^k
- nC1
! Sum of odd coefficients is 2^(n-1).
? Which statement is true of Sum of odd coefficients?
+ Is 2^(n-1)
- In (a + b)^n is n + 1
- Is nCr = nC(n-r)
- Is a^n
! Sum of odd coefficients is 2^(n-1).
? Which statement is true of Sum of even coefficients?
- N! is the product of the first n naturals
- Is 35
+ Is 2^(n-1)
- Equals n
! Sum of even coefficients is 2^(n-1).
? Which equals 1?
- (a + b)^3
- (1.01)^10
+ nC0
- Divisibility
! NC0 equals 1.
? Which statement is true of nC0?
- T(r+1)/T(r) = (n - r + 1)/r times b/a
+ Equals 1
- Is 10
- N! is the product of the first n naturals
! NC0 equals 1.
? Which statement is true of nCn?
- Is a^n
+ Equals 1
- Is the (n/2 + 1)th term
- NCr = (n-1)C(r-1) + (n-1)Cr
! NCn equals 1.
? Which equals n?
- Value of 7C3
+ nC1
- (a + b)^3
- nC0
! NC1 equals n.
? Which statement is true of nC1?
- Is 6
- Can be proved using the binomial expansion
- Gives binomial coefficients
+ Equals n
! NC1 equals n.
? Which equals n(n-1)/2?
+ nC2
- First term of (a+b)^n
- (a + b)^3
- Value of 6C3
! NC2 equals n(n-1)/2.
? Which statement is true of nC2?
- Can be proved using the binomial expansion
- Is another name for the term independent of x
- Is 2^n
+ Equals n(n-1)/2
! NC2 equals n(n-1)/2.
? Which is the (n/2 + 1)th term?
- Pascal triangle
- Expansion of (a - b)^n
+ Middle term for even n
- Divisibility
! Middle term for even n is the (n/2 + 1)th term.
? Which statement is true of Middle term for even n?
- Is 20
+ Is the (n/2 + 1)th term
- Equals a^2 + 2ab + b^2
- Decrease from n to 0
! Middle term for even n is the (n/2 + 1)th term.
? Which are the ((n+1)/2)th and ((n+3)/2)th?
- (a + b)^2
+ Middle terms for odd n
- Value of 4C2
- (a + b)^3
! Middle terms for odd n are the ((n+1)/2)th and ((n+3)/2)th.
? Which statement is true of Middle terms for odd n?
- Equals n
- Equals n(n-1)/2
+ Are the ((n+1)/2)th and ((n+3)/2)th
- Is about 1.1046
! Middle terms for odd n are the ((n+1)/2)th and ((n+3)/2)th.
? Which occurs at the middle term?
+ Greatest coefficient
- Pascal rule
- Recurrence
- (1 + x)^n
! Greatest coefficient occurs at the middle term.
? Which statement is true of Greatest coefficient?
+ Occurs at the middle term
- Has power of x equal to zero
- Is 20
- Is 2^(n-1)
! Greatest coefficient occurs at the middle term.
? Which has power of x equal to zero?
- Symmetry of coefficients
- Sum of nC0 to nCn
- Divisibility
+ Term independent of x
! Term independent of x has power of x equal to zero.
? Which statement is true of Term independent of x?
+ Has power of x equal to zero
- Is 20
- Is nCr = nC(n-r)
- Use the first terms of the expansion
! Term independent of x has power of x equal to zero.
? Which is found by equating the power to k?
- Sum of indices
- Powers of a
- (a + b)^3
+ Coefficient of x^k
! Coefficient of x^k is found by equating the power to k.
? Which statement is true of Coefficient of x^k?
- Equals 1
- Is a^n
+ Is found by equating the power to k
- Decrease from n to 0
! Coefficient of x^k is found by equating the power to k.
? Which decrease from n to 0?
+ Powers of a
- nC0
- Value of 4C2
- Second term of (a+b)^n
! Powers of a decrease from n to 0.
? Which statement is true of Powers of a?
- T(r+1)/T(r) = (n - r + 1)/r times b/a
+ Decrease from n to 0
- Has alternating signs
- Is 20
! Powers of a decrease from n to 0.
? Which increase from 0 to n?
- Divisibility
- Isaac Newton
- Coefficient of x^3 in (1+x)^6
+ Powers of b
! Powers of b increase from 0 to n.
? Which statement is true of Powers of b?
- (1 + x)^n is about 1 + nx for small x
- Is 70
- Equals a^3 + 3a^2 b + 3a b^2 + b^3
+ Increase from 0 to n
! Powers of b increase from 0 to n.
? Which in each term is n?
- Term independent of x
- Recurrence
+ Sum of indices
- Coefficient of x^k
! Sum of indices in each term is n.
? Which statement is true of Sum of indices?
- Equals n(n-1)/2
- Is 2^n
+ In each term is n
- Occurs at the middle term
! Sum of indices in each term is n.
? Which has alternating signs?
- Sum of odd coefficients
- Number of terms
+ Expansion of (a - b)^n
- (a + b)^3
! Expansion of (a - b)^n has alternating signs.
? Which statement is true of Expansion of (a - b)^n?
- Is nCr = nC(n-r)
+ Has alternating signs
- Equals n(n-1)/2
- Is the (n/2 + 1)th term
! Expansion of (a - b)^n has alternating signs.
? Which equals a^2 + 2ab + b^2?
+ (a + b)^2
- Value of 4C2
- (1 + x)^n
- (a + b)^3
! (a + b)^2 equals a^2 + 2ab + b^2.
? Which statement is true of (a + b)^2?
- T(r+1)/T(r) = (n - r + 1)/r times b/a
- Equals 1
+ Equals a^2 + 2ab + b^2
- Is about 1.1046
! (a + b)^2 equals a^2 + 2ab + b^2.
? Which equals a^3 + 3a^2 b + 3a b^2 + b^3?
- Powers of a
+ (a + b)^3
- Divisibility
- Term independent of x
! (a + b)^3 equals a^3 + 3a^2 b + 3a b^2 + b^3.
? Which statement is true of (a + b)^3?
+ Equals a^3 + 3a^2 b + 3a b^2 + b^3
- Is the (n/2 + 1)th term
- Equals 1
- Use the first terms of the expansion
! (a + b)^3 equals a^3 + 3a^2 b + 3a b^2 + b^3.
? Which equals the sum of nCr x^r?
- nC1
+ (1 + x)^n
- nC0
- Alternate sum of coefficients
! (1 + x)^n equals the sum of nCr x^r.
? Which statement is true of (1 + x)^n?
- In each term is n
- Is found by equating the power to k
- NCr = (n-1)C(r-1) + (n-1)Cr
+ Equals the sum of nCr x^r
! (1 + x)^n equals the sum of nCr x^r.
? Which (1 + x)^n is about 1 + nx for small x?
- nC0
+ Approximation
- Coefficient of x^3 in (1+x)^6
- Pascal rule
! Approximation (1 + x)^n is about 1 + nx for small x.
? Which statement is true of Approximation?
- Of a set relate to the sum of binomial coefficients
+ (1 + x)^n is about 1 + nx for small x
- Is a^n
- Expands (a + b)^n for positive integer n
! Approximation (1 + x)^n is about 1 + nx for small x.
? Which is about 1.1046?
- Value of 7C3
- Sum of nC0 to nCn
+ (1.01)^10
- (a + b)^2
! (1.01)^10 is about 1.1046.
? Which statement is true of (1.01)^10?
+ Is about 1.1046
- Is 0
- Is another name for the term independent of x
- Is 2^n
! (1.01)^10 is about 1.1046.
? Which can be proved using the binomial expansion?
- (1 + x)^n
+ Divisibility
- Last term of (a+b)^n
- Remainder problems
! Divisibility can be proved using the binomial expansion.
? Which statement is true of Divisibility?
+ Can be proved using the binomial expansion
- Is 70
- Is another name for the term independent of x
- Equals a^2 + 2ab + b^2
! Divisibility can be proved using the binomial expansion.
? Which use the first terms of the expansion?
- Divisibility
+ Remainder problems
- Expansion of (a - b)^n
- Pascal triangle
! Remainder problems use the first terms of the expansion.
? Which statement is true of Remainder problems?
- Equals a^3 + 3a^2 b + 3a b^2 + b^3
- Equals 1
- Increase from 0 to n
+ Use the first terms of the expansion
! Remainder problems use the first terms of the expansion.
? Which n! is the product of the first n naturals?
- Isaac Newton
+ Factorial
- Value of 6C3
- Approximation
! Factorial n! is the product of the first n naturals.
? Which statement is true of Factorial?
- Is 10
+ N! is the product of the first n naturals
- In (a + b)^n is n + 1
- Is another name for the term independent of x
! Factorial n! is the product of the first n naturals.
? Which statement is true of 0 factorial?
+ Equals 1
- Is the (n/2 + 1)th term
- Is 2^(n-1)
- Of a set relate to the sum of binomial coefficients
! 0 factorial equals 1.
? Which nCr = (n-1)C(r-1) + (n-1)Cr?
- Remainder problems
- Value of 5C2
+ Recurrence
- Term independent of x
! Recurrence nCr = (n-1)C(r-1) + (n-1)Cr.
? Which statement is true of Recurrence?
- Is found by equating the power to k
- Expands (a + b)^n for positive integer n
+ NCr = (n-1)C(r-1) + (n-1)Cr
- Equals n
! Recurrence nCr = (n-1)C(r-1) + (n-1)Cr.
? Which T(r+1)/T(r) = (n - r + 1)/r times b/a?
- Coefficient of x^3 in (1+x)^6
- Approximation
- Recurrence
+ Ratio of terms
! Ratio of terms T(r+1)/T(r) = (n - r + 1)/r times b/a.
? Which statement is true of Ratio of terms?
- Is 10
- Means an expression of two terms
+ T(r+1)/T(r) = (n - r + 1)/r times b/a
- Is another name for the term independent of x
! Ratio of terms T(r+1)/T(r) = (n - r + 1)/r times b/a.
? Which statement is true of Sum of nC0 to nCn?
- Is 20
+ Is 2^n
- (1 + x)^n is about 1 + nx for small x
- Has power of x equal to zero
! Sum of nC0 to nCn is 2^n.
? Which is another name for the term independent of x?
- Greatest coefficient
- Pascal triangle
- Coefficient of x in (1+x)^n
+ Constant term
! Constant term is another name for the term independent of x.
? Which statement is true of Constant term?
- Of a set relate to the sum of binomial coefficients
- Is 2^n
- Is T(r+1) = nCr a^(n-r) b^r
+ Is another name for the term independent of x
! Constant term is another name for the term independent of x.
? Which generalised the binomial theorem to any index?
- Value of 6C3
- General term
- Coefficient of x^3 in (1+x)^6
+ Isaac Newton
! Isaac Newton generalised the binomial theorem to any index.
? Which statement is true of Isaac Newton?
+ Generalised the binomial theorem to any index
- Is found by equating the power to k
- Is 20
- Increase from 0 to n
! Isaac Newton generalised the binomial theorem to any index.
? Which means an expression of two terms?
- Coefficient of x^k
- Divisibility
- First term of (a+b)^n
+ Binomial
! Binomial means an expression of two terms.
? Which statement is true of Binomial?
- In (a + b)^n is n + 1
- Decrease from n to 0
+ Means an expression of two terms
- Equals n
! Binomial means an expression of two terms.
? Which is nCn?
- Powers of b
- Value of 5C2
+ Coefficient of the last term
- Binomial theorem
! Coefficient of the last term is nCn.
? Which statement is true of Coefficient of the last term?
+ Is nCn
- Says each entry is the sum of two above
- Is 10
- Equals n
! Coefficient of the last term is nCn.
? Which is 20?
- nC2
- Powers of a
+ Value of 6C3
- General term
! Value of 6C3 is 20.
? Which statement is true of Value of 6C3?
- Decrease from n to 0
+ Is 20
- Has power of x equal to zero
- Is 10
! Value of 6C3 is 20.
? Which is 35?
- Term independent of x
- Powers of a
+ Value of 7C3
- Remainder problems
! Value of 7C3 is 35.
? Which statement is true of Value of 7C3?
+ Is 35
- Says each entry is the sum of two above
- Is nCn
- Equals n(n-1)/2
! Value of 7C3 is 35.
? Which is 70?
+ Value of 8C4
- 0 factorial
- Value of 4C2
- General term
! Value of 8C4 is 70.
? Which statement is true of Value of 8C4?
+ Is 70
- Is n
- T(r+1)/T(r) = (n - r + 1)/r times b/a
- Is the (n/2 + 1)th term
! Value of 8C4 is 70.
? Which is 6?
+ Value of 4C2
- Binomial
- Isaac Newton
- Approximation
! Value of 4C2 is 6.
? Which statement is true of Value of 4C2?
- Is a^n
- Is 0
- Use the first terms of the expansion
+ Is 6
! Value of 4C2 is 6.
? Which statement is true of Coefficient of x^3 in (1+x)^6?
- Gives binomial coefficients
+ Is 20
- Is 2^(n-1)
- Occurs at the middle term
! Coefficient of x^3 in (1+x)^6 is 20.
? Which is n?
- Alternate sum of coefficients
+ Coefficient of x in (1+x)^n
- Sum of odd coefficients
- First term of (a+b)^n
! Coefficient of x in (1+x)^n is n.
? Which statement is true of Coefficient of x in (1+x)^n?
+ Is n
- Is a^n
- Equals 1
- Use the first terms of the expansion
! Coefficient of x in (1+x)^n is n.
? Which is n a^(n-1) b?
- Factorial
- Sum of nC0 to nCn
+ Second term of (a+b)^n
- Middle term for even n
! Second term of (a+b)^n is n a^(n-1) b.
? Which statement is true of Second term of (a+b)^n?
+ Is n a^(n-1) b
- Is 35
- Equals 1
- Equals the sum of nCr x^r
! Second term of (a+b)^n is n a^(n-1) b.
? Which is b^n?
- Middle term for even n
+ Last term of (a+b)^n
- Sum of even coefficients
- General term
! Last term of (a+b)^n is b^n.
? Which statement is true of Last term of (a+b)^n?
+ Is b^n
- Is 70
- Has alternating signs
- Equals 1
! Last term of (a+b)^n is b^n.
? Which is a^n?
- Second term of (a+b)^n
- Pascal rule
- Recurrence
+ First term of (a+b)^n
! First term of (a+b)^n is a^n.
? Which statement is true of First term of (a+b)^n?
- Is n a^(n-1) b
- Is 35
+ Is a^n
- Is 2^n
! First term of (a+b)^n is a^n.
? Which of a set relate to the sum of binomial coefficients?
- Binomial coefficient
- Sum of indices
- Factorial
+ Total subsets
! Total subsets of a set relate to the sum of binomial coefficients.
? Which statement is true of Total subsets?
- Is 0
- Generalised the binomial theorem to any index
- Is 2^n
+ Of a set relate to the sum of binomial coefficients
! Total subsets of a set relate to the sum of binomial coefficients.
? Which is 10?
- Binomial coefficient
+ Value of 5C2
- Powers of b
- Expansion of (a - b)^n
! Value of 5C2 is 10.
? Which statement is true of Value of 5C2?
- Is 0
- Is found by equating the power to k
- Is 70
+ Is 10
! Value of 5C2 is 10.
? Terms in (a+b)^10
- 10
- 9
- 12
+ 11
! n+1.
? Sum of coefficients (1+x)^6
- 32
- 36
- 12
+ 64
! 2^n.
? nCr =
- n!/r!
- r!/n!
- n r
+ n!/(r!(n-r)!)
! Formula.
? T(r+1) uses
+ nCr
- nC(r+1)
- nC(r-1)
- n^r
! General.
? Middle terms n=5
- One
+ Two
- Three
- None
! Odd.
? 5C3 =
- 15
+ 10
- 5
- 20
! Symmetry.
? Pascal row for n=3
- 1 2 1
- 1 4 6 4 1
+ 1 3 3 1
- 1 3 1
! Triangle.
? (a-b)^n signs
- All plus
+ Alternate
- All minus
- Random
! Minus.
@visual
flow | Find a term | Write T(r+1); Powers of x; Solve r; Evaluate
compare | n even and odd | Even=One middle term~(n/2+1)th; Odd=Two middle terms~Two
blocks | Properties | Symmetry; Sum 2^n; Pascal; Middle
mind | Binomial theorem | Expansion; General term; Properties; Applications
steps | Independent term | General term; Set power zero; Solve r; Find value
@problems
## Moderate
P: Expand (x + 2)^3.
A: x^3 + 6x^2 + 12x + 8.
R: 3 | Coefficients
R: 3 | Terms
## High
P: Find the 4th term of (2x - 1)^6.
A: T4 = 6C3 (2x)^3 (-1)^3 = -160 x^3.
R: 2 | r value
R: 2 | nCr
R: 2 | Powers
R: 2 | Sign
## Advanced
P: Find the term independent of x in (x + 1/x)^6.
A: General term has power 6 - 2r = 0, r = 3; term = 6C3 = 20.
R: 2 | General term
R: 2 | Power zero
R: 2 | r
R: 2 | Value
