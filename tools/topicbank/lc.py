from ljava import *
subject('c', 'C', 'c', 'lang', 'Language-specific practice: scanf/printf, arrays, char strings, pointers and functions, structs and bit operations.')
Ac = ar(-9, 20, 1, 10)

def pop(n): return bin(n).count('1')
def rev_bits8(n): return int(format(n, '08b')[::-1], 2)
def cntsub(a, k): return sum(1 for i in range(len(a)) for j in range(i, len(a)) if sum(a[i:j + 1]) == k)
def isqrt(n): return int(math.isqrt(n))
def toh(s): return s
def cvt(n, b):
    d = '0123456789ABCDEF'; o = ''
    while n: o = d[n % b] + o; n //= b
    return o or '0'
def trailing(n): return (n & -n).bit_length() - 1
def stocks(a):
    b = 0; m = 10**9
    for x in a: m = min(m, x); b = max(b, x - m)
    return b
def prefsum(s):
    t = iv(s); a = t[1:1 + t[0]]; q = t[1 + t[0]:]; o = []
    for i in range(0, len(q), 2): o.append(str(sum(a[q[i]:q[i + 1] + 1])))
    return '\n'.join(o)
def gps(r):
    n = r.randint(1, 8); a = [r.randint(-5, 9) for _ in range(n)]; m = r.randint(1, 4); q = []
    for _ in range(m): l = r.randint(0, n - 1); q += [l, r.randint(l, n - 1)]
    return L(n, J(a), m, *['%d %d' % (q[i], q[i + 1]) for i in range(0, len(q), 2)])
def prefsum2(s):
    l = W(s); n = int(l[0]); a = list(map(int, l[1].split())); m = int(l[2]); o = []
    for x in l[3:3 + m]: p, q = map(int, x.split()); o.append(str(sum(a[p:q + 1])))
    return '\n'.join(o)
def hap(n):
    seen = set()
    while n != 1 and n not in seen: seen.add(n); n = sum(int(c) ** 2 for c in str(n))
    return 'HAPPY' if n == 1 else 'UNHAPPY'

def matmul(l):
    a, k, c = map(int, l[0].split()); A = [list(map(int, x.split())) for x in l[1:1 + a]]; B = [list(map(int, x.split())) for x in l[1 + a:1 + a + k]]
    return '\n'.join(J(sum(A[i][t] * B[t][j] for t in range(k)) for j in range(c)) for i in range(a))
def rain(h):
    return sum(min(max(h[:i + 1]), max(h[i:])) - h[i] for i in range(len(h)))

def ack(m, n):
    return n + 1 if m == 0 else ack(m - 1, 1) if n == 0 else ack(m - 1, ack(m, n - 1))
def jos(n, k):
    r = 0
    for i in range(2, n + 1): r = (r + k) % i
    return r + 1


topic('cio', 'Formatted Input and Output', 'scanf, printf format specifiers, types, loops and conditions')
Q('Easy', 'Add With scanf', 'Read two ints with scanf and print their sum with printf. | Input: two integers. | Output: the sum.', lambda s: sum(iv(s)), [L('3 4')], two(-1000, 1000))
Q('Easy', 'Print Float Precision', 'Read a double with %lf and print it using %.3f. | Input: a real number. | Output: three decimals.', lambda s: '%.3f' % float(s), [L('2.71828')], lambda r: L(round(r.uniform(-50, 50), 5)))
Q('Easy', 'ASCII Of Character', 'Read one char and print its ASCII code using %d. | Input: one character. | Output: the code.', lambda s: ord(s.strip()), [L('A')], lambda r: L(r.choice('ABCxyz019')))
Q('Easy', 'Swap Using Temp', 'Read a and b and print them swapped as "b a". | Input: a b. | Output: swapped.', lambda s: '%d %d' % tuple(iv(s)[::-1]), [L('1 2')], two(-99, 99))
Q('Easy', 'Area Of Circle', 'Read radius r and print 3.14159*r*r with two decimals. | Input: r. | Output: area.', lambda s: '%.2f' % (3.14159 * float(s) ** 2), [L(2)], lambda r: L(r.randint(1, 30)))
Q('Easy', 'Check Positive Negative Zero', 'Print POSITIVE, NEGATIVE or ZERO. | Input: N. | Output: the word.', lambda s: 'POSITIVE' if int(s) > 0 else 'NEGATIVE' if int(s) < 0 else 'ZERO', [L(-3)], num(-5, 5))
Q('Easy', 'Sum Of N Numbers Loop', 'Read N then N ints in a loop and print the sum. | Input: N, then N integers. | Output: the sum.', lambda s: sum(arrs(s)), [L(3, '1 2 3')], Ac)
Q('Medium', 'Hex And Octal Output', 'Print N in hexadecimal (uppercase) and octal separated by a space using printf. | Input: N. | Output: "HEX OCT".', lambda s: '%X %o' % (int(s), int(s)), [L(255)], num(0, 100000))
Q('Medium', 'Temperature Table', 'Print Celsius 0..N step 10 with Fahrenheit (c*9/5+32 as double, %.1f) as "c f". | Input: N (multiple of 10). | Output: rows.', lambda s: '\n'.join('%d %.1f' % (c, c * 9 / 5 + 32) for c in range(0, int(s) + 1, 10)), [L(30)], lambda r: L(10 * r.randint(0, 12)))
Q('Medium', 'Count Digits', 'Count the digits of N (0 has one digit). | Input: N. | Output: digit count.', lambda s: len(str(abs(int(s)))), [L(12345)], num(-99999, 99999))
Q('Medium', 'Sum Of Even Numbers', 'Sum of even numbers from 1..N. | Input: N. | Output: sum.', lambda s: sum(range(2, int(s) + 1, 2)), [L(10)], num(1, 1000))
Q('Medium', 'Fixed Width Columns', 'Print N, its square and its cube right-aligned in width 6 each (printf %6d). | Input: N. | Output: one line.', lambda s: '%6d%6d%6d' % (int(s), int(s) ** 2, int(s) ** 3), [L(3)], num(1, 40))
Q('Medium', 'Unsigned Wraparound', 'Read an int and print it as an unsigned 32-bit value (negative numbers wrap). | Input: N. | Output: unsigned value.', lambda s: int(s) % 2**32, [L(-1)], num(-100000, 100000))
Q('Medium', 'Collatz Steps', 'Count steps to reach 1 (n even: n/2, odd: 3n+1). | Input: N. | Output: steps.', lambda s: (lambda f: f(f, int(s), 0))(lambda f, x, c: c if x == 1 else f(f, x // 2 if x % 2 == 0 else 3 * x + 1, c + 1)), [L(6)], num(1, 500))
Q('Medium', 'Nested Loop Pattern', 'Print N rows; row i has the digits 1..i. | Input: N. | Output: triangle.', lambda s: '\n'.join(''.join(str(k) for k in range(1, i + 1)) for i in range(1, int(s) + 1)), [L(3)], num(1, 9))
Q('Hard', 'Base Conversion', 'Convert N to base B (2..16) with uppercase digits. | Input: N B. | Output: the text.', lambda s: cvt(iv(s)[0], iv(s)[1]), [L('255 16')], lambda r: L('%d %d' % (r.randint(0, 5000), r.randint(2, 16))))
Q('Hard', 'Perfect Numbers Up To N', 'Print all perfect numbers up to N, or NONE. | Input: N. | Output: numbers.', lambda s: J(x for x in range(2, int(s) + 1) if sum(d for d in range(1, x) if x % d == 0) == x) or 'NONE', [L(500)], num(1, 600))
Q('Hard', 'Nth Prime', 'Print the Nth prime. | Input: N. | Output: the prime.', lambda s: [p for p in range(2, 5000) if isp(p)][int(s) - 1], [L(5)], num(1, 200))
Q('Hard', 'Sum Of Series e', 'Print sum of 1/k! for k=0..N with 6 decimals. | Input: N. | Output: the sum.', lambda s: '%.6f' % sum(1 / math.factorial(k) for k in range(int(s) + 1)), [L(5)], num(0, 15))
Q('Hard', 'Diamond Pattern', 'Print a diamond of stars with N rows in the top half (N>=1). | Input: N. | Output: 2N-1 rows.', lambda s: '\n'.join(' ' * (int(s) - i) + '*' * (2 * i - 1) for i in list(range(1, int(s) + 1)) + list(range(int(s) - 1, 0, -1))), [L(2)], num(1, 6))
Q('Hard', 'Happy Number', 'A number is happy if repeatedly summing squares of digits reaches 1. Print HAPPY or UNHAPPY. | Input: N. | Output: verdict.', lambda s: hap(int(s)), [L(19)], num(1, 1000))
topic('carr', 'Arrays and Matrices', 'One- and two-dimensional arrays, prefix sums and searching')
Q('Easy', 'Average Of Array', 'Print the average of the array with two decimals. | Input: N, then N integers. | Output: the average.', lambda s: '%.2f' % (sum(arrs(s)) / len(arrs(s))), [L(3, '1 2 4')], ar(-9, 20, 1, 10))
Q('Easy', 'Minimum And Maximum', 'Print minimum and maximum. | Input: N, then N integers. | Output: "min max".', lambda s: '%d %d' % (min(arrs(s)), max(arrs(s))), [L(3, '4 9 2')], Ac)
Q('Easy', 'Count Positives', 'Count numbers greater than zero. | Input: N, then N integers. | Output: the count.', lambda s: sum(x > 0 for x in arrs(s)), [L(4, '1 -2 3 0')], Ac)
Q('Easy', 'Print Reverse', 'Print the array backwards. | Input: N, then N integers. | Output: reversed.', lambda s: J(arrs(s)[::-1]), [L(3, '1 2 3')], Ac)
Q('Easy', 'Copy And Double', 'Copy the array into another and print each element doubled. | Input: N, then N integers. | Output: doubled.', lambda s: J(x * 2 for x in arrs(s)), [L(3, '1 2 3')], Ac)
Q('Easy', 'Even Index Sum', 'Sum elements at even indices (0,2,4...). | Input: N, then N integers. | Output: the sum.', lambda s: sum(arrs(s)[::2]), [L(4, '1 2 3 4')], Ac)
Q('Easy', 'Is Sorted', 'Print YES if non-decreasing else NO. | Input: N, then N integers. | Output: YES/NO.', lambda s: 'YES' if arrs(s) == sorted(arrs(s)) else 'NO', [L(3, '1 2 2')], lambda r: (lambda n: L(n, J(sorted([r.randint(0, 5) for _ in range(n)]) if r.random() < .5 else [r.randint(0, 5) for _ in range(n)])))(r.randint(1, 7)))
Q('Medium', 'Prefix Sum Queries', 'Answer M range-sum queries [l, r] (0-based inclusive). | Input: N, array, M, then M lines "l r". | Output: M sums.', prefsum2, [L(4, '1 2 3 4', 2, '0 1', '1 3')], gps)
Q('Medium', 'Matrix Addition', 'Add two R x C matrices. | Input: "R C", R rows, R rows. | Output: R rows.', lambda s: (lambda l: (lambda r, c: '\n'.join(J(int(x) + int(y) for x, y in zip(l[1 + i].split(), l[1 + r + i].split())) for i in range(r)))(*map(int, l[0].split())))(W(s)), [L('1 2', '1 2', '3 4')], lambda r: (lambda n, m: L('%d %d' % (n, m)) + ''.join(L(J([r.randint(0, 9) for _ in range(m)])) for _ in range(2 * n)))(r.randint(1, 3), r.randint(1, 3)))
Q('Medium', 'Matrix Transpose', 'Transpose R x C. | Input: "R C" and the rows. | Output: C rows.', lambda s: '\n'.join(J(c) for c in zip(*[list(map(int, l.split())) for l in W(s)[1:]])), [L('2 3', '1 2 3', '4 5 6')], lambda r: (lambda n, m: L('%d %d' % (n, m)) + ''.join(L(J([r.randint(0, 9) for _ in range(m)])) for _ in range(n)))(r.randint(1, 4), r.randint(1, 4)))
Q('Medium', 'Remove Element', 'Remove all occurrences of X and print the rest, or NONE. | Input: N, list, X. | Output: remaining.', lambda s: J(x for x in iv(s)[1:-1] if x != iv(s)[-1]) or 'NONE', [L(4, '1 2 1 3', 1)], arq(0, 4, 1, 9, 0, 4))
Q('Medium', 'Leaders In Array', 'Print elements greater than everything to their right (rightmost always counts), in original order. | Input: N, then N integers. | Output: leaders.', lambda s: J(x for i, x in enumerate(arrs(s)) if all(x > y for y in arrs(s)[i + 1:])), [L(5, '16 17 4 3 5')], Ac)
Q('Medium', 'Move Zeros To End', 'Move zeros to the end keeping order of others. | Input: N, then N integers. | Output: result.', lambda s: J([x for x in arrs(s) if x] + [0] * arrs(s).count(0)), [L(5, '0 1 0 3 2')], ar(0, 3, 1, 10))
Q('Medium', 'Row And Column Max', 'Print the max of each row, then the max of each column, on two lines. | Input: "R C" and rows. | Output: two lines.', lambda s: (lambda m: J(max(r) for r in m) + '\n' + J(max(c) for c in zip(*m)))([list(map(int, l.split())) for l in W(s)[1:]]), [L('2 2', '1 5', '3 2')], lambda r: (lambda n, m: L('%d %d' % (n, m)) + ''.join(L(J([r.randint(0, 9) for _ in range(m)])) for _ in range(n)))(r.randint(1, 4), r.randint(1, 4)))
Q('Hard', 'Matrix Multiplication', 'Multiply A (R x K) by B (K x C). | Input: "R K C", A rows, then B rows. | Output: R rows.', lambda s: matmul(W(s)), [L('1 2 1', '1 2', '3', '4')], lambda r: (lambda a, k, c: L('%d %d %d' % (a, k, c)) + ''.join(L(J([r.randint(0, 5) for _ in range(k)])) for _ in range(a)) + ''.join(L(J([r.randint(0, 5) for _ in range(c)])) for _ in range(k)))(r.randint(1, 3), r.randint(1, 3), r.randint(1, 3)))
Q('Hard', 'Spiral Print', 'Print the matrix in spiral order. | Input: R C and rows. | Output: one line.', lambda s: spiral([list(map(int, l.split())) for l in W(s)[1:]]), [L('2 2', '1 2', '3 4')], lambda r: (lambda n, m: L('%d %d' % (n, m)) + ''.join(L(J([r.randint(0, 9) for _ in range(m)])) for _ in range(n)))(r.randint(1, 4), r.randint(1, 4)))
Q('Hard', 'Max Profit Single Trade', 'Max profit buying once then selling later, 0 if none. | Input: N, prices. | Output: profit.', lambda s: stocks(arrs(s)), [L(5, '7 1 5 3 6')], ar(1, 30, 1, 10))
Q('Hard', 'Product Except Self', 'For each i print the product of all other elements. | Input: N, then N integers (N>=2). | Output: N products.', lambda s: J(math.prod(arrs(s)[:i] + arrs(s)[i + 1:]) for i in range(len(arrs(s)))), [L(4, '1 2 3 4')], ar(-3, 4, 2, 7))
Q('Hard', 'Subarray Sum Equals K', 'Count subarrays with sum K. | Input: N, list, K. | Output: count.', lambda s: cntsub(iv(s)[1:-1], iv(s)[-1]), [L(3, '1 1 1', 2)], arq(-2, 4, 1, 9, -2, 6))
Q('Hard', 'Majority Element', 'Print the element appearing more than N/2 times or NONE. | Input: N, then N integers. | Output: element or NONE.', lambda s: next((str(k) for k, v in Counter(arrs(s)).items() if v > len(arrs(s)) // 2), 'NONE'), [L(5, '2 2 1 2 3')], ar(1, 3, 1, 9))
Q('Hard', 'Trap Rain Water', 'Print the trapped water for the bar heights. | Input: N, then heights. | Output: units.', lambda s: rain(arrs(s)), [L(6, '0 2 0 3 0 2')], ar(0, 6, 1, 10))
topic('cstr', 'Character Arrays and string.h', 'char[], strlen, strcmp, strcpy-style logic and character classification')
Q('Easy', 'String Length No strlen', 'Count characters of the word with a loop. | Input: a word. | Output: length.', lambda s: len(s.strip()), [L('hello')], st(1, 15, 'abcxyz'))
Q('Easy', 'Reverse A String', 'Reverse the word in a char array. | Input: a word. | Output: reversed.', lambda s: s.strip()[::-1], [L('abc')], st(1, 12, 'abcxyz'))
Q('Easy', 'To Uppercase', 'Convert letters to upper case, leave other characters. | Input: a line. | Output: the line.', lambda s: s.rstrip('\n').upper(), [L('Hi 5!')], lambda r: L(''.join(r.choice('abXY 5!') for _ in range(r.randint(1, 12)))))
Q('Easy', 'Count Words', 'Count the words separated by spaces. | Input: a line. | Output: the count.', lambda s: len(s.split()), [L('a b  c')], wl())
Q('Easy', 'Vowel Or Consonant', 'Print VOWEL, CONSONANT or OTHER for a char. | Input: one character. | Output: the class.', lambda s: 'VOWEL' if s.strip().lower() in 'aeiou' else 'CONSONANT' if s.strip().isalpha() else 'OTHER', [L('e')], lambda r: L(r.choice('aeXbz5!U')))
Q('Easy', 'Compare Two Strings', 'Like strcmp: print EQUAL, LESS or GREATER. | Input: two words. | Output: verdict.', lambda s: 'EQUAL' if W(s)[0] == W(s)[1] else 'LESS' if W(s)[0] < W(s)[1] else 'GREATER', [L('abc', 'abd')], lambda r: L(*[''.join(r.choice('ab') for _ in range(r.randint(1, 3))) for _ in range(2)]))
Q('Easy', 'Digit Characters Sum', 'Sum the digit characters in the line. | Input: a line. | Output: the sum.', lambda s: sum(int(c) for c in s if c.isdigit()), [L('a1b2c3')], lambda r: L(''.join(r.choice('ab123 9') for _ in range(r.randint(1, 12)))))
Q('Medium', 'Concatenate Two Strings', 'Concatenate the two words into one and print its length and the text. | Input: two words. | Output: "len text".', lambda s: '%d %s' % (len(''.join(W(s))), ''.join(W(s))), [L('ab', 'cd')], lambda r: L(*[''.join(r.choice('abc') for _ in range(r.randint(1, 5))) for _ in range(2)]))
Q('Medium', 'Remove Spaces', 'Remove all spaces from the line. | Input: a line. | Output: compacted line.', lambda s: s.rstrip('\n').replace(' ', ''), [L('a b c')], lambda r: L(''.join(r.choice('ab  c') for _ in range(r.randint(1, 12))).strip() or 'x'))
Q('Medium', 'Toggle Case', 'Swap upper and lower case. | Input: a line. | Output: toggled.', lambda s: s.rstrip('\n').swapcase(), [L('Hello')], lambda r: L(''.join(r.choice('abXY') for _ in range(r.randint(1, 10)))))
Q('Medium', 'Caesar Cipher', 'Shift lower-case letters by K (wrap), leave others. | Input: a line then K. | Output: ciphered line.', lambda s: ''.join(chr((ord(c) - 97 + int(W(s)[1])) % 26 + 97) if c.islower() else c for c in W(s)[0]), [L('abc xyz', 3)], lambda r: L(''.join(r.choice('abcxyz ') for _ in range(r.randint(1, 10))), r.randint(0, 30)))
Q('Medium', 'Find Substring Index', 'Print the first index where pattern occurs or -1 (strstr). | Input: text then pattern. | Output: index.', lambda s: W(s)[0].find(W(s)[1]), [L('hello', 'll')], lambda r: L(''.join(r.choice('ab') for _ in range(r.randint(1, 10))), ''.join(r.choice('ab') for _ in range(r.randint(1, 3)))))
Q('Medium', 'Most Frequent Letter', 'Print the lower-case letter with the highest count (alphabetically first on tie). | Input: a word. | Output: the letter.', lambda s: min(Counter(s.strip()).items(), key=lambda x: (-x[1], x[0]))[0], [L('banana')], st(1, 12, 'abcd'))
Q('Medium', 'Is Isogram', 'Print YES if no letter repeats. | Input: a word. | Output: YES/NO.', lambda s: 'YES' if len(set(s.strip())) == len(s.strip()) else 'NO', [L('abc')], st(1, 7, 'abcdef'))
Q('Medium', 'Word Lengths', 'Print the length of each word. | Input: a line. | Output: lengths.', lambda s: J(len(w) for w in s.split()), [L('hi there')], wl())
Q('Hard', 'Longest Word', 'Print the first longest word. | Input: a line. | Output: the word.', lambda s: max(s.split(), key=len), [L('a bcd ef')], wl())
Q('Hard', 'Run Length Encode', 'Encode like a3b2c1. | Input: a word. | Output: encoded text.', lambda s: ''.join(k + str(len(list(g))) for k, g in itertools.groupby(s.strip())), [L('aaabbc')], st(1, 12, 'abc'))
Q('Hard', 'Valid Parentheses', 'Print YES if the brackets ()[]{} are balanced. | Input: a bracket string. | Output: YES/NO.', lambda s: bal(s), [L('([])')], lambda r: L(''.join(r.choice('()[]{}') for _ in range(r.randint(2, 8)))))
Q('Hard', 'Longest Palindromic Substring Length', 'Print the length of the longest palindromic substring. | Input: a word. | Output: length.', lambda s: max(j - i for i in range(len(s.strip())) for j in range(i + 1, len(s.strip()) + 1) if s.strip()[i:j] == s.strip()[i:j][::-1]), [L('babad')], st(1, 12, 'ab'))
Q('Hard', 'Add Big Numbers', 'Add two non-negative integers given as strings of up to 40 digits. | Input: two numbers. | Output: their sum.', lambda s: str(int(W(s)[0]) + int(W(s)[1])), [L('99999999999999999999', 1)], lambda r: L(*[str(r.randint(0, 10**r.randint(1, 40))) for _ in range(2)]))
Q('Hard', 'Multiply Big By Small', 'Multiply a number of up to 40 digits by a small int K (<=1000). | Input: number then K. | Output: the product.', lambda s: str(int(W(s)[0]) * int(W(s)[1])), [L('123456789123456789', 11)], lambda r: L(str(r.randint(0, 10**r.randint(1, 40))), r.randint(0, 1000)))
Q('Hard', 'Check Rotation', 'Print YES if the second word is a rotation of the first. | Input: two words. | Output: YES/NO.', lambda s: 'YES' if len(W(s)[0]) == len(W(s)[1]) and W(s)[1] in W(s)[0] * 2 else 'NO', [L('abcd', 'cdab')], lambda r: L(*[''.join(r.choice('ab') for _ in range(r.randint(2, 4))) for _ in range(2)]))

topic('cptr', 'Functions and Pointers', 'Writing functions, passing by pointer, recursion, and pointer-style array walking')
Q('Easy', 'Function Max', 'Write int max(int a, int b) and print max of the two inputs. | Input: a b. | Output: the larger.', lambda s: max(iv(s)), [L('3 8')], two(-50, 50))
Q('Easy', 'Swap By Pointer', 'Write void swap(int *a, int *b); print the values after swapping. | Input: a b. | Output: "b a".', lambda s: '%d %d' % tuple(iv(s)[::-1]), [L('1 2')], two(-50, 50))
Q('Easy', 'Factorial Function', 'Write long factorial(int n). | Input: N (<=15). | Output: N!.', lambda s: fact(int(s)), [L(5)], num(0, 15))
Q('Easy', 'Is Prime Function', 'Write int isPrime(int n); print YES/NO. | Input: N. | Output: YES/NO.', lambda s: 'YES' if isp(int(s)) else 'NO', [L(7)], num(0, 3000))
Q('Easy', 'Pointer Sum Of Array', 'Sum the array by advancing a pointer (*p++). | Input: N, then N integers. | Output: sum.', lambda s: sum(arrs(s)), [L(3, '1 2 3')], Ac)
Q('Easy', 'Power Function', 'Write long power(int a, int b) with a loop. | Input: a b. | Output: a^b.', lambda s: iv(s)[0] ** iv(s)[1], [L('3 4')], lambda r: L('%d %d' % (r.randint(0, 9), r.randint(0, 9))))
Q('Easy', 'Min Max By Pointers', 'Write a function that returns min and max through int* parameters. | Input: N, then N integers. | Output: "min max".', lambda s: '%d %d' % (min(arrs(s)), max(arrs(s))), [L(3, '4 9 2')], Ac)
Q('Medium', 'Recursive Digit Sum', 'Write int digitSum(int n) recursively (n>=0). | Input: N. | Output: sum of digits.', lambda s: ds(int(s)), [L(1234)], num(0, 999999))
Q('Medium', 'Recursive GCD', 'Euclid with recursion. | Input: a b. | Output: gcd.', lambda s: gcd(*iv(s)), [L('12 18')], two(1, 999))
Q('Medium', 'Pass Array To Function', 'Write int countGreater(int a[], int n, int x). | Input: N, array, X. | Output: count > X.', lambda s: sum(1 for v in iv(s)[1:-1] if v > iv(s)[-1]), [L(4, '1 5 3 7', 3)], arq(0, 9, 1, 9, 0, 9))
Q('Medium', 'Reverse Array In Place', 'Reverse using two pointers swapping in place. | Input: N, then N integers. | Output: reversed.', lambda s: J(arrs(s)[::-1]), [L(4, '1 2 3 4')], Ac)
Q('Medium', 'Binary Search Function', 'Write a binary search returning index or -1. | Input: N, sorted array, X. | Output: index.', lambda s: (lambda t: (lambda a, x: a.index(x) if x in a else -1)(t[1:1 + t[0]], t[-1]))(iv(s)), [L(4, '1 3 5 7', 7)], lambda r: (lambda n: L(n, J(sorted(r.sample(range(0, 30), n))), r.randint(0, 30)))(r.randint(1, 8)))
Q('Medium', 'Fibonacci Memo Array', 'Use a global array to memoize fib up to 90. | Input: N. | Output: F(N).', lambda s: fibn(int(s)), [L(50)], num(0, 90))
Q('Medium', 'Count Ways Decimal To Binary Digits', 'Print the number of 1 bits in N using a function. | Input: N. | Output: popcount.', lambda s: pop(int(s)), [L(255)], num(0, 10**9))
Q('Medium', 'Selection Sort Function', 'Write selectionSort(int a[], int n). | Input: N, then N integers. | Output: sorted.', lambda s: J(sorted(arrs(s))), [L(3, '3 1 2')], Ac)
Q('Hard', 'Tower Of Hanoi Count', 'Print the minimum moves for N discs. | Input: N (<=30). | Output: moves.', lambda s: 2 ** int(s) - 1, [L(3)], num(1, 30))
Q('Hard', 'Ackermann Small', 'Compute Ackermann(m, n) recursively for m<=2, n<=10. | Input: m n. | Output: value.', lambda s: ack(*iv(s)), [L('2 3')], lambda r: L('%d %d' % (r.randint(0, 2), r.randint(0, 10))))
Q('Hard', 'Generate Subsets Recursively', 'Print all subsets of the first N numbers 1..N in binary order (bit i = include i+1), empty set as {}. | Input: N (<=4). | Output: one subset per line.', lambda s: '\n'.join('{' + ' '.join(str(i + 1) for i in range(int(s)) if m >> i & 1) + '}' for m in range(1 << int(s))), [L(2)], num(1, 4))
Q('Hard', 'Josephus Problem', 'N people in a circle, every K-th is eliminated; print the survivor (1-based). | Input: N K. | Output: survivor.', lambda s: jos(*iv(s)), [L('5 2')], lambda r: L('%d %d' % (r.randint(1, 40), r.randint(1, 8))))
Q('Hard', 'Count Paths In Grid', 'Count monotone paths in an R x C grid of cells (right/down). | Input: R C. | Output: paths.', lambda s: math.comb(iv(s)[0] + iv(s)[1] - 2, iv(s)[0] - 1), [L('3 3')], lambda r: L('%d %d' % (r.randint(1, 12), r.randint(1, 12))))
Q('Hard', 'Quick Sort Function', 'Implement quicksort and print the sorted array. | Input: N, then N integers. | Output: sorted.', lambda s: J(sorted(arrs(s))), [L(5, '5 3 8 1 2')], ar(-20, 20, 1, 14))
Q('Hard', 'Pointer To Pointer Matrix Sum', 'Read an R x C matrix into int** and print the total sum. | Input: R C and rows. | Output: sum.', lambda s: sum(int(x) for l in W(s)[1:] for x in l.split()), [L('2 2', '1 2', '3 4')], lambda r: (lambda n, m: L('%d %d' % (n, m)) + ''.join(L(J([r.randint(-5, 9) for _ in range(m)])) for _ in range(n)))(r.randint(1, 4), r.randint(1, 4)))
topic('cstruct', 'Structs, Bits and Dynamic Memory', 'struct arrays, bitwise operators, malloc/free and enums')
Q('Easy', 'Struct Student Average', 'struct Student{name; marks[3]}; print the name and average with 1 decimal. | Input: name m1 m2 m3. | Output: "name avg".', lambda s: '%s %.1f' % (W(s)[0].split()[0], sum(map(int, W(s)[0].split()[1:])) / 3), [L('Asha 80 90 70')], lambda r: L('%s %d %d %d' % (r.choice(['Asha', 'Dev']), r.randint(0, 100), r.randint(0, 100), r.randint(0, 100))))
Q('Easy', 'Struct Point Distance Squared', 'struct Point{x,y}; print squared distance. | Input: x1 y1 x2 y2. | Output: dist^2.', lambda s: (iv(s)[0] - iv(s)[2]) ** 2 + (iv(s)[1] - iv(s)[3]) ** 2, [L('0 0 3 4')], lambda r: L(J([r.randint(-5, 5) for _ in range(4)])))
Q('Easy', 'Count Set Bits', 'Print the number of 1 bits using n & (n-1). | Input: N. | Output: popcount.', lambda s: pop(int(s)), [L(13)], num(0, 10**9))
Q('Easy', 'Check Power Of Two', 'Print YES if N is a power of two (N>0) using bit tricks. | Input: N. | Output: YES/NO.', lambda s: 'YES' if int(s) > 0 and int(s) & (int(s) - 1) == 0 else 'NO', [L(16)], lambda r: L(r.choice([1, 2, 3, 4, 6, 8, 16, 18, 64, 100, 128, 1024, 1000])))
Q('Easy', 'Bitwise And Or Xor', 'Print a&b, a|b and a^b. | Input: a b. | Output: three values.', lambda s: '%d %d %d' % (iv(s)[0] & iv(s)[1], iv(s)[0] | iv(s)[1], iv(s)[0] ^ iv(s)[1]), [L('12 10')], lambda r: L('%d %d' % (r.randint(0, 1000), r.randint(0, 1000))))
Q('Easy', 'Shift Left Right', 'Print n<<k and n>>k. | Input: n k. | Output: two values.', lambda s: '%d %d' % (iv(s)[0] << iv(s)[1], iv(s)[0] >> iv(s)[1]), [L('5 2')], lambda r: L('%d %d' % (r.randint(0, 1000), r.randint(0, 10))))
Q('Easy', 'Enum Day Name', 'enum Day {MON..SUN}; print the name of day number 1..7. | Input: N. | Output: MON..SUN.', lambda s: 'MON TUE WED THU FRI SAT SUN'.split()[int(s) - 1], [L(3)], num(1, 7))
Q('Medium', 'Get Set Clear Bit', 'Print n with bit k set, cleared and toggled (three numbers). | Input: n k. | Output: set clear toggle.', lambda s: '%d %d %d' % (iv(s)[0] | 1 << iv(s)[1], iv(s)[0] & ~(1 << iv(s)[1]), iv(s)[0] ^ 1 << iv(s)[1]), [L('5 1')], lambda r: L('%d %d' % (r.randint(0, 1000), r.randint(0, 10))))
Q('Medium', 'Sort Structs By Marks', 'Sort "name mark" records by mark descending then name; print names. | Input: N, then N lines. | Output: names.', lambda s: J(l.split()[0] for l in sorted(W(s)[1:], key=lambda l: (-int(l.split()[1]), l.split()[0]))), [L(3, 'b 5', 'a 5', 'c 9')], lambda r: L(*([4] + ['%s %d' % (c, r.randint(0, 3)) for c in 'abcd'])))
Q('Medium', 'Top Scorer', 'Records "name mark": print the name with the highest mark (first on tie). | Input: N, then N lines. | Output: name.', lambda s: max(enumerate(W(s)[1:]), key=lambda e: (int(e[1].split()[1]), -e[0]))[1].split()[0], [L(3, 'a 5', 'b 9', 'c 2')], lambda r: L(*([4] + ['%s %d' % (c, r.randint(0, 20)) for c in 'abcd'])))
Q('Medium', 'Reverse Bits Of Byte', 'Reverse the 8 bits of N (0..255). | Input: N. | Output: reversed value.', lambda s: rev_bits8(int(s)), [L(1)], num(0, 255))
Q('Medium', 'Single Non Repeating', 'Every number appears twice except one; print it (XOR). | Input: N, then N integers. | Output: the single one.', lambda s: functools.reduce(lambda a, b: a ^ b, arrs(s)), [L(5, '2 3 2 4 3')], lambda r: (lambda k: (lambda a: L(len(a), J(a)))(r.sample(a := [x for x in r.sample(range(1, 30), k)], len(a)) if False else (lambda p: r.sample(p * 2 + [r.randint(30, 60)], len(p) * 2 + 1))(r.sample(range(1, 30), k))))(r.randint(1, 5)))
Q('Medium', 'Dynamic Array Sum', 'malloc an array of N ints, read them and print the sum. | Input: N, then N integers. | Output: sum.', lambda s: sum(arrs(s)), [L(3, '1 2 3')], Ac)
Q('Medium', 'Employee Payroll Struct', 'Records "name salary"; print total and the highest-paid name (first on tie) as "total name". | Input: N, then lines. | Output: "total name".', lambda s: '%d %s' % (sum(int(l.split()[1]) for l in W(s)[1:]), max(enumerate(W(s)[1:]), key=lambda e: (int(e[1].split()[1]), -e[0]))[1].split()[0]), [L(2, 'a 100', 'b 300')], lambda r: L(*([3] + ['%s %d' % (c, r.randint(1, 500)) for c in 'abc'])))
Q('Medium', 'Union Of Bit Masks', 'Subsets as masks: print the OR and AND of all masks. | Input: N, then N integers. | Output: "or and".', lambda s: '%d %d' % (functools.reduce(lambda a, b: a | b, arrs(s)), functools.reduce(lambda a, b: a & b, arrs(s))), [L(3, '5 3 7')], ar(0, 255, 1, 8))
Q('Hard', 'Hamming Distance', 'Print the number of differing bits between a and b. | Input: a b. | Output: distance.', lambda s: pop(iv(s)[0] ^ iv(s)[1]), [L('1 4')], lambda r: L('%d %d' % (r.randint(0, 10**6), r.randint(0, 10**6))))
Q('Hard', 'Count Bits From 0 To N', 'Print total set bits over numbers 0..N. | Input: N. | Output: total.', lambda s: sum(pop(i) for i in range(int(s) + 1)), [L(5)], num(0, 5000))
Q('Hard', 'Subsets With XOR K', 'Count subsets (by position, including empty) whose XOR equals K. | Input: N, list, K. | Output: count.', lambda s: (lambda t: sum(1 for m in range(1 << t[0]) if functools.reduce(lambda a, b: a ^ b, [t[1 + i] for i in range(t[0]) if m >> i & 1], 0) == t[-1]))(iv(s)), [L(3, '1 2 3', 0)], arq(0, 7, 1, 8, 0, 7))
Q('Hard', 'Linked List Via Struct', 'Build a linked list of N values with malloc, delete all nodes equal to X, print the rest or NONE. | Input: N, list, X. | Output: remaining.', lambda s: J(v for v in iv(s)[1:-1] if v != iv(s)[-1]) or 'NONE', [L(4, '1 2 1 3', 1)], arq(0, 3, 1, 9, 0, 3))
Q('Hard', 'Bit DP Subset Count', 'Count subsets of the numbers whose sum is a multiple of M. | Input: N, list, M. | Output: count (includes empty subset).', lambda s: (lambda t: sum(1 for m in range(1 << t[0]) if sum(t[1 + i] for i in range(t[0]) if m >> i & 1) % t[-1] == 0))(iv(s)), [L(3, '1 2 3', 3)], arq(1, 9, 1, 9, 1, 5))
Q('Hard', 'Gray Code', 'Print the first 2^N Gray codes as decimal numbers (i ^ i>>1). | Input: N (<=5). | Output: codes.', lambda s: J(i ^ i >> 1 for i in range(2 ** int(s))), [L(2)], num(1, 5))
Q('Hard', 'Matrix Struct Trace And Det', 'For a 2x2 matrix a b c d print trace and determinant. | Input: four numbers. | Output: "trace det".', lambda s: '%d %d' % (iv(s)[0] + iv(s)[3], iv(s)[0] * iv(s)[3] - iv(s)[1] * iv(s)[2]), [L('1 2 3 4')], lambda r: L(J([r.randint(-9, 9) for _ in range(4)])))

#end
