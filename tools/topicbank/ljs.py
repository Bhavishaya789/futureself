from lcpp import *
subject('js', 'JavaScript', 'javascript', 'lang', 'Language-specific practice: input parsing, array methods, strings and regex, objects, Map/Set and classes, closures and recursion.')
Aj = ar(-9, 20, 1, 10)
def nz(a): return [x for x in a if x]
def pd(a): return a
def collen(n):
    c = 1
    while n != 1: n = n // 2 if n % 2 == 0 else 3 * n + 1; c += 1
    return c
def nw(n):
    o = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split()
    t = 'x x twenty thirty forty fifty sixty seventy eighty ninety'.split()
    if n < 20: return o[n]
    return t[n // 10] + ('-' + o[n % 10] if n % 10 else '')

def toroman(n):
    o = ''
    for v, r in zip([1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], 'M CM D CD C XC L XL X IX V IV I'.split()):
        while n >= v: o += r; n -= v
    return o

def emi(cs):
    h = defaultdict(list); o = []
    for c in cs:
        p = c.split()
        if p[0] == 'on': h[p[1]].append(p[2])
        else: o += ['%s:%s' % (x, p[1]) for x in h[p[1]]]
    return '\n'.join(o) or 'NONE'
def dc(t):
    d = m = 0; c = len(re.findall(r'\d+', t))
    for ch in t:
        if ch == '[': d += 1; m = max(m, d)
        elif ch == ']': d -= 1
    return '%d %d' % (c, m)
def adjl(l):
    g = defaultdict(set)
    for x in l[1:1 + int(l[0])]: a, b = x.split(); g[int(a)].add(int(b)); g[int(b)].add(int(a))
    return '\n'.join('%d: %s' % (k, J(sorted(v))) for k, v in sorted(g.items()))

def ways(t):
    k = t[0]; cs = t[1:1 + k]; T = t[-1]; d = [1] + [0] * T
    for c in cs:
        for x in range(c, T + 1): d[x] += d[x - c]
    return d[T]


topic('jsio', 'Basics and Input Parsing', 'Reading stdin lines, Number/parseInt, template literals, operators and loops')
Q('Easy', 'Sum Two Numbers', 'Read two numbers from one line (split and Number) and print their sum. | Input: two integers. | Output: the sum.', lambda s: sum(iv(s)), [L('3 4')], two(-1000, 1000))
Q('Easy', 'Template Literal Greeting', 'Print `Hello, NAME! You are AGE.` using a template literal. | Input: name then age. | Output: the sentence.', lambda s: 'Hello, %s! You are %s.' % tuple(W(s)), [L('Asha', 20)], lambda r: L(r.choice(['Asha', 'Ravi', 'Isha']), r.randint(1, 90)))
Q('Easy', 'Strict Equality Types', 'Print true if the two tokens are equal as strings AND as numbers 0-9 compare strictly (use ===). Print "true" if tokens are identical, else "false". | Input: two tokens. | Output: true/false.', lambda s: 'true' if W(s)[0] == W(s)[1] else 'false', [L('1', '1')], lambda r: L(r.choice('12'), r.choice('12')))
Q('Easy', 'Largest Of Three', 'Print the largest number using Math.max. | Input: three integers. | Output: the largest.', lambda s: max(iv(s)), [L('3 9 2')], lambda r: L(J([r.randint(-50, 50) for _ in range(3)])))
Q('Easy', 'Even Or Odd', 'Print even or odd in lower case. | Input: N. | Output: even/odd.', lambda s: 'even' if int(s) % 2 == 0 else 'odd', [L(7)], num(-100, 100))
Q('Easy', 'Sum 1 To N', 'Print the sum 1..N with a loop. | Input: N. | Output: the sum.', lambda s: sum(range(1, int(s) + 1)), [L(10)], num(1, 1000))
Q('Easy', 'toFixed Rounding', 'Print the number with toFixed(2). | Input: a real number. | Output: two decimals.', lambda s: '%.2f' % float(s), [L('3.14159')], lambda r: L(round(r.uniform(0, 100), 4)))
Q('Medium', 'FizzBuzz', 'Print 1..N with Fizz/Buzz/FizzBuzz. | Input: N. | Output: N lines.', lambda s: '\n'.join('FizzBuzz' if i % 15 == 0 else 'Fizz' if i % 3 == 0 else 'Buzz' if i % 5 == 0 else str(i) for i in range(1, int(s) + 1)), [L(5)], num(1, 40))
Q('Medium', 'Leap Year Check', 'Print true or false. | Input: a year. | Output: true/false.', lambda s: 'true' if (lambda y: y % 4 == 0 and (y % 100 != 0 or y % 400 == 0))(int(s)) else 'false', [L(1900)], num(1, 3000))
Q('Medium', 'Digit Sum With Strings', 'Sum digits using split("") and reduce. | Input: N (non-negative). | Output: digit sum.', lambda s: ds(int(s)), [L(1234)], num(0, 999999))
Q('Medium', 'Number Parsing Mixed', 'Tokens may be numbers or words; print the sum of the numeric tokens only. | Input: a line of tokens. | Output: the sum.', lambda s: sum(int(t) for t in s.split() if re.fullmatch(r'-?\d+', t)), [L('3 abc 4')], lambda r: L(' '.join(r.choice(['3', '-2', 'x', 'y1', '10', 'ab']) for _ in range(r.randint(1, 8)))))
Q('Medium', 'BigInt Factorial', 'Print N! using BigInt (N<=30). | Input: N. | Output: N!.', lambda s: fact(int(s)), [L(25)], num(0, 30))
Q('Medium', 'Prime Check', 'Print true/false for primality. | Input: N. | Output: true/false.', lambda s: 'true' if isp(int(s)) else 'false', [L(13)], num(0, 5000))
Q('Medium', 'Multiplication Table Padded', 'Print `N x i = v` for i in 1..5. | Input: N. | Output: 5 lines.', lambda s: '\n'.join('%d x %d = %d' % (int(s), i, int(s) * i) for i in range(1, 6)), [L(3)], num(1, 30))
Q('Hard', 'Parse Multiple Lines', 'First line T, then T lines "a b": print a+b for each. | Input: T then T lines. | Output: T sums.', lambda s: '\n'.join(str(sum(map(int, l.split()))) for l in W(s)[1:]), [L(2, '1 2', '3 4')], lambda r: L(*([3] + ['%d %d' % (r.randint(-9, 9), r.randint(-9, 9)) for _ in range(3)])))
Q('Hard', 'Binary String Of Number', 'Print N in base 2 with toString(2). | Input: N. | Output: binary text.', lambda s: bin(int(s))[2:], [L(10)], num(0, 100000))
Q('Hard', 'Collatz Longest Start', 'Among 1..N print the start with the longest Collatz chain (smallest on tie). | Input: N. | Output: start number.', lambda s: max(range(1, int(s) + 1), key=lambda n: (collen(n), -n)), [L(10)], num(1, 300))
Q('Hard', 'GCD Of Many', 'Print the GCD of all numbers. | Input: N, then N positive integers. | Output: the gcd.', lambda s: functools.reduce(math.gcd, arrs(s)), [L(3, '12 18 24')], ar(1, 60, 1, 8))
Q('Hard', 'Pascal Triangle Rows', 'Print N rows of Pascal triangle. | Input: N. | Output: N rows.', lambda s: tri(s), [L(4)], num(1, 10))
Q('Hard', 'Number To Words Under 100', 'Print the English words for N (0..99) in lower case with hyphens like twenty-one. | Input: N. | Output: words.', lambda s: nw(int(s)), [L(42)], num(0, 99))
topic('jsarr', 'Array Methods', 'map, filter, reduce, sort, slice, splice, flat, find and destructuring')
Q('Easy', 'Map Squares', 'Use map to print squares. | Input: N, then N integers. | Output: squares.', lambda s: J(x * x for x in arrs(s)), [L(3, '1 2 3')], Aj)
Q('Easy', 'Filter Evens', 'Use filter for even numbers, or NONE. | Input: N, then N integers. | Output: evens.', lambda s: J(x for x in arrs(s) if x % 2 == 0) or 'NONE', [L(4, '1 2 3 4')], Aj)
Q('Easy', 'Reduce Sum', 'Use reduce to sum. | Input: N, then N integers. | Output: sum.', lambda s: sum(arrs(s)), [L(3, '1 2 3')], Aj)
Q('Easy', 'Numeric Sort', 'Sort numerically (not lexicographically). | Input: N, then N integers. | Output: sorted.', lambda s: J(sorted(arrs(s))), [L(3, '10 9 100')], Aj)
Q('Easy', 'Reverse Array', 'Use reverse(). | Input: N, then N integers. | Output: reversed.', lambda s: J(arrs(s)[::-1]), [L(3, '1 2 3')], Aj)
Q('Easy', 'Includes Check', 'Print true/false whether X is in the array. | Input: N, list, X. | Output: true/false.', lambda s: 'true' if iv(s)[-1] in iv(s)[1:-1] else 'false', [L(3, '1 2 3', 2)], arq(0, 9, 1, 8, 0, 9))
Q('Easy', 'Find First Greater', 'Use find to print the first element greater than X, or none. | Input: N, list, X. | Output: element or none.', lambda s: next((str(v) for v in iv(s)[1:-1] if v > iv(s)[-1]), 'none'), [L(3, '1 5 3', 2)], arq(0, 9, 1, 8, 0, 9))
Q('Medium', 'Flat And Unique', 'Combine rows into one array, then print the sorted unique values. | Input: R, then R lines of numbers. | Output: sorted unique.', lambda s: J(sorted({int(x) for l in W(s)[1:] for x in l.split()})), [L(2, '3 1 2', '2 5')], lambda r: L(*([3] + [J([r.randint(0, 9) for _ in range(r.randint(1, 4))]) for _ in range(3)])))
Q('Medium', 'Splice Remove Index', 'Remove the element at index K with splice and print the rest. | Input: N, list, K (valid index). | Output: remaining or NONE.', lambda s: (lambda t: (lambda a, k: J(a[:k] + a[k + 1:]) or 'NONE')(t[1:1 + t[0]], t[-1]))(iv(s)), [L(3, '1 2 3', 1)], lambda r: (lambda n: L(n, J([r.randint(0, 9) for _ in range(n)]), r.randint(0, n - 1)))(r.randint(1, 8)))
Q('Medium', 'Slice Window Sums', 'Sum every window of K via slice+reduce. | Input: N, list, K. | Output: sums.', lambda s: (lambda t: J(sum(t[1:1 + t[0]][i:i + t[-1]]) for i in range(t[0] - t[-1] + 1)))(iv(s)), [L(5, '1 2 3 4 5', 2)], lambda r: (lambda n: L(n, J([r.randint(0, 9) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 8)))
Q('Medium', 'Sort Objects By Key', 'Lines "name mark": sort by mark desc then name asc; print names. | Input: N, then lines. | Output: names.', lambda s: J(l.split()[0] for l in sorted(W(s)[1:], key=lambda l: (-int(l.split()[1]), l.split()[0]))), [L(3, 'b 5', 'a 5', 'c 9')], lambda r: L(*([4] + ['%s %d' % (c, r.randint(0, 3)) for c in 'abcd'])))
Q('Medium', 'Group By Parity', 'Print "evens: ..." and "odds: ..." lines (NONE if empty after the colon). | Input: N, then N integers. | Output: two lines.', lambda s: 'evens: %s\nodds: %s' % (J(x for x in arrs(s) if x % 2 == 0) or 'NONE', J(x for x in arrs(s) if x % 2) or 'NONE'), [L(4, '1 2 3 4')], Aj)
Q('Medium', 'Every And Some', 'Print "every some" as true/false: every number positive; some number negative. | Input: N, then N integers. | Output: two words.', lambda s: '%s %s' % (str(all(x > 0 for x in arrs(s))).lower(), str(any(x < 0 for x in arrs(s))).lower()), [L(3, '1 -2 3')], lambda r: (lambda n, lo: L(n, J([r.randint(lo, 9) for _ in range(n)])))(r.randint(1, 6), r.choice([-2, 1, 1, -9])))
Q('Medium', 'Destructure Swap First Last', 'Swap first and last elements using destructuring. | Input: N, then N integers. | Output: array.', lambda s: J((lambda a: [a[-1]] + a[1:-1] + [a[0]] if len(a) > 1 else a)(arrs(s))), [L(3, '1 2 3')], Aj)
Q('Medium', 'Running Total With Reduce', 'Print the running totals. | Input: N, then N integers. | Output: totals.', lambda s: J(itertools.accumulate(arrs(s))), [L(3, '1 2 3')], Aj)
Q('Hard', 'Chunk Array', 'Split into chunks of K; print one chunk per line. | Input: N, list, K. | Output: chunks.', lambda s: (lambda t: '\n'.join(J(t[1:1 + t[0]][i:i + t[-1]]) for i in range(0, t[0], t[-1])))(iv(s)), [L(5, '1 2 3 4 5', 2)], lambda r: (lambda n: L(n, J([r.randint(0, 9) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 8)))
Q('Hard', 'Rotate Array', 'Rotate right by K. | Input: N, list, K. | Output: rotated.', lambda s: (lambda t: (lambda a, k: J(a[-(k % len(a)):] + a[:-(k % len(a))] if k % len(a) else a))(t[1:1 + t[0]], t[-1]))(iv(s)), [L(5, '1 2 3 4 5', 2)], arq(0, 9, 1, 8, 0, 15))
Q('Hard', 'Max Subarray', 'Maximum contiguous sum. | Input: N, then N integers. | Output: sum.', lambda s: kad(arrs(s)), [L(5, '-2 1 -3 4 5')], ar(-9, 9, 1, 12))
Q('Hard', 'Intersection Of Arrays', 'Print sorted common distinct values or NONE. | Input: two lines "n values". | Output: common.', lambda s: J(sorted(set(map(int, W(s)[0].split()[1:])) & set(map(int, W(s)[1].split()[1:])))) or 'NONE', [L('3 1 2 3', '2 2 5')], lambda r: L(*[J([k] + [r.randint(0, 6) for _ in range(k)]) for k in (r.randint(1, 5), r.randint(1, 5))]))
Q('Hard', 'Matrix Transpose With map', 'Transpose using nested map. | Input: R C, then rows. | Output: C rows.', lambda s: '\n'.join(J(c) for c in zip(*[list(map(int, l.split())) for l in W(s)[1:]])), [L('2 3', '1 2 3', '4 5 6')], lambda r: (lambda n, m: L('%d %d' % (n, m)) + ''.join(L(J([r.randint(0, 9) for _ in range(m)])) for _ in range(n)))(r.randint(1, 4), r.randint(1, 4)))

topic('jsstr', 'Strings and Regular Expressions', 'split, join, replace, slice, padStart, regex test/match/replace')
Q('Easy', 'Reverse String', 'Use split/reverse/join. | Input: a word. | Output: reversed.', lambda s: s.strip()[::-1], [L('abc')], st(1, 12, 'abcxyz'))
Q('Easy', 'Upper And Length', 'Print UPPER and length. | Input: a word. | Output: "UPPER len".', lambda s: '%s %d' % (s.strip().upper(), len(s.strip())), [L('js')], st(1, 12, 'abcxyz'))
Q('Easy', 'Count Vowels', 'Count vowels with a regex match. | Input: a line. | Output: count.', lambda s: sum(c in 'aeiouAEIOU' for c in s), [L('Hello World')], lambda r: L(''.join(r.choice('abEiOxyz ') for _ in range(r.randint(1, 15)))))
Q('Easy', 'Repeat String', 'Print the word repeated N times joined by "-". | Input: word then N. | Output: repeated text.', lambda s: '-'.join([W(s)[0]] * int(W(s)[1])), [L('ab', 3)], lambda r: L(r.choice(['ab', 'x', 'hey']), r.randint(1, 6)))
Q('Easy', 'PadStart Number', 'Print N padded to width 5 with zeros. | Input: N. | Output: padded.', lambda s: '%05d' % int(s), [L(42)], num(0, 99999))
Q('Easy', 'Title Case Words', 'Capitalize each word. | Input: a line. | Output: title cased.', lambda s: ' '.join(w[0].upper() + w[1:] for w in s.split()), [L('hello big world')], wl())
Q('Easy', 'Trim And Brackets', 'Trim and print inside [ ]. | Input: padded text. | Output: [text].', lambda s: '[' + s.strip() + ']', [L('  hi  ')], lambda r: L(' ' * r.randint(0, 3) + ''.join(r.choice('abc ') for _ in range(r.randint(1, 5))).strip() + ' ' * r.randint(0, 3)))
Q('Medium', 'Regex Digits Extract', 'Print all digit groups found in the text joined by commas, or NONE. | Input: a line. | Output: groups.', lambda s: ','.join(re.findall(r'\d+', s)) or 'NONE', [L('a12b345c6')], lambda r: L(''.join(r.choice('ab12 9') for _ in range(r.randint(1, 12)))))
Q('Medium', 'Email Validity', 'Print valid if the text matches name@domain.tld (letters/digits only parts) else invalid. | Input: a token. | Output: valid/invalid.', lambda s: 'valid' if re.fullmatch(r'[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}', s.strip()) else 'invalid', [L('a@b.com')], lambda r: L(r.choice(['a@b.com', 'x@y', '@a.com', 'ab12@cd.org', 'a b@c.com', 'u@v.c', 'user@site.io'])))
Q('Medium', 'Replace All With Regex', 'Replace all digits with #. | Input: a line. | Output: result.', lambda s: re.sub(r'\d', '#', s.rstrip('\n')), [L('a1b22')], lambda r: L(''.join(r.choice('ab12 ') for _ in range(r.randint(1, 12)))))
Q('Medium', 'Word Frequency', 'Print words with counts sorted alphabetically as "w:n" lines. | Input: a line. | Output: rows.', lambda s: '\n'.join('%s:%d' % kv for kv in sorted(Counter(s.split()).items())), [L('b a b')], wl(8))
Q('Medium', 'Camel To Kebab', 'Convert camelCase to kebab-case. | Input: an identifier. | Output: kebab-case.', lambda s: re.sub(r'([A-Z])', lambda m: '-' + m.group(1).lower(), s.strip()), [L('myVarName')], lambda r: L(''.join(r.choice(['my', 'Var', 'Name', 'x', 'Id']) for _ in range(r.randint(1, 4))).replace('My', 'my')))
Q('Medium', 'Is Palindrome Phrase', 'Ignore non-letters and case; print true/false. | Input: a line. | Output: true/false.', lambda s: (lambda t: 'true' if t == t[::-1] else 'false')(''.join(c.lower() for c in s if c.isalpha())), [L('A man, a plan, a canal: Panama')], lambda r: L(r.choice(['A man, a plan, a canal: Panama', 'hello', 'Was it a car or a cat I saw?', 'ab', 'x', 'abca'])))
Q('Medium', 'Longest Word', 'Print the first longest word. | Input: a line. | Output: word.', lambda s: max(s.split(), key=len), [L('a bcd ef')], wl())
Q('Hard', 'Template Replace Placeholders', 'Replace {a} and {b} in the template by the two values. | Input: template, a, b. | Output: result.', lambda s: W(s)[0].replace('{a}', W(s)[1]).replace('{b}', W(s)[2]), [L('{a}+{b}={a}{b}', 1, 2)], lambda r: L(r.choice(['{a}+{b}={a}{b}', 'x{b}y{a}', '{a}{a}{b}']), r.randint(0, 9), r.randint(0, 9)))
Q('Hard', 'Longest Unique Substring', 'Length of the longest substring without repeats. | Input: a word. | Output: length.', lambda s: lsr(s.strip()), [L('abcabcbb')], st(1, 14, 'abcd'))
Q('Hard', 'Run Length Encode', 'Encode as a3b2. | Input: a word. | Output: encoded.', lambda s: ''.join(k + str(len(list(g))) for k, g in itertools.groupby(s.strip())), [L('aaabbc')], st(1, 12, 'abc'))
Q('Hard', 'Roman Numerals From Number', 'Convert 1..3999 to Roman. | Input: N. | Output: numeral.', lambda s: toroman(int(s)), [L(1994)], num(1, 3999))
Q('Hard', 'Valid Brackets', 'true/false for balanced ()[]{}. | Input: bracket string. | Output: true/false.', lambda s: 'true' if bal(s) == 'YES' else 'false', [L('([])')], lambda r: L(''.join(r.choice('()[]{}') for _ in range(r.randint(2, 8)))))
Q('Hard', 'Caesar Shift', 'Shift lowercase letters by K. | Input: a line then K. | Output: result.', lambda s: ''.join(chr((ord(c) - 97 + int(W(s)[1])) % 26 + 97) if c.islower() else c for c in W(s)[0]), [L('abc xyz', 3)], lambda r: L(''.join(r.choice('abcxyz ') for _ in range(r.randint(1, 10))), r.randint(0, 30)))
topic('jsobj', 'Objects, Map/Set and Classes', 'object literals, Map, Set, destructuring, classes and getters')
Q('Easy', 'Object Count Keys', 'Count how many keys an object built from "k v" lines has (later duplicates overwrite). | Input: N, then N lines "k v". | Output: key count.', lambda s: len({l.split()[0] for l in W(s)[1:]}), [L(3, 'a 1', 'b 2', 'a 3')], lambda r: L(*([5] + ['%s %d' % (r.choice('abc'), r.randint(0, 9)) for _ in range(5)])))
Q('Easy', 'Set Unique Count', 'Use a Set. | Input: N, then N integers. | Output: distinct count.', lambda s: len(set(arrs(s))), [L(4, '1 2 2 3')], ar(0, 6, 1, 12))
Q('Easy', 'Map Last Value Wins', 'Use a Map from "k v" lines and print the value for the query key or undefined. | Input: N, N lines, query key. | Output: value or undefined.', lambda s: (lambda l: (lambda d, q: d.get(q, 'undefined'))(dict(x.split() for x in l[1:1 + int(l[0])]), l[-1]))(W(s)), [L(2, 'a 1', 'b 2', 'a')], lambda r: L(*([4] + ['%s %d' % (r.choice('abc'), r.randint(0, 9)) for _ in range(4)] + [r.choice('abcd')])))
Q('Easy', 'Class Rectangle', 'class Rectangle with area() and perimeter(). | Input: w h. | Output: "area perimeter".', lambda s: '%d %d' % (iv(s)[0] * iv(s)[1], 2 * sum(iv(s))), [L('3 4')], two(1, 30))
Q('Easy', 'Object Destructure Sum', 'Lines "x y" form {x,y}; print x*y sums. | Input: N, then N lines. | Output: sum of products.', lambda s: sum(math.prod(map(int, l.split())) for l in W(s)[1:]), [L(2, '1 2', '3 4')], lambda r: L(*([3] + ['%d %d' % (r.randint(0, 9), r.randint(0, 9)) for _ in range(3)])))
Q('Easy', 'Getter Full Name', 'class Person with get fullName() = first + " " + last. | Input: first last. | Output: full name.', lambda s: ' '.join(W(s)[0].split()), [L('Asha Rao')], lambda r: L(r.choice(['Asha', 'Ravi']) + ' ' + r.choice(['Rao', 'Singh'])))
Q('Easy', 'Object Keys Sorted', 'Print keys of the object sorted alphabetically. | Input: N, then N lines "k v". | Output: keys.', lambda s: J(sorted({l.split()[0] for l in W(s)[1:]})), [L(2, 'b 1', 'a 2')], lambda r: L(*([4] + ['%s %d' % (r.choice('abcd'), r.randint(0, 9)) for _ in range(4)])))
Q('Medium', 'Counter Map Top', 'Print the most common word (alphabetical on tie) and its count. | Input: a line of words. | Output: "word count".', lambda s: '%s %d' % min(Counter(s.split()).items(), key=lambda x: (-x[1], x[0])), [L('a b a')], wl(8))
Q('Medium', 'Class Inheritance Speak', 'Lines "dog n", "cat n": print "n says Woof/Meow" via subclasses. | Input: N, then N lines. | Output: N lines.', lambda s: '\n'.join('%s says %s' % (l.split()[1], 'Woof' if l.split()[0] == 'dog' else 'Meow') for l in W(s)[1:]), [L(2, 'dog rex', 'cat tom')], lambda r: L(*([4] + ['%s %s' % (r.choice(['dog', 'cat']), r.choice('abc')) for _ in range(4)])))
Q('Medium', 'Bank Account Class', 'deposit/withdraw/balance; print INSUFFICIENT when too much. | Input: start, N, commands. | Output: replies.', acct, [L(100, 3, 'deposit 50', 'withdraw 200', 'balance')], gac)
Q('Medium', 'Stack Class', 'Class Stack with push/pop/peek; EMPTY when empty. | Input: N, commands. | Output: pop/peek lines.', skc, [L(4, 'push 1', 'peek', 'pop', 'pop')], lambda r: L(*([6] + [r.choice(['push %d' % r.randint(1, 9), 'pop', 'peek']) for _ in range(6)])))
Q('Medium', 'Group By Key With Map', 'Lines "key value": print each key (sorted) with its values in input order as "key: v1 v2". | Input: N, lines. | Output: groups.', lambda s: '\n'.join('%s: %s' % (k, v) for k, v in sorted((lambda d: [d[l.split()[0]].append(l.split()[1]) for l in W(s)[1:]] and d or d)(defaultdict(list)).items())), [L(3, 'a 1', 'b 2', 'a 3')], lambda r: L(*([5] + ['%s %d' % (r.choice('abc'), r.randint(0, 9)) for _ in range(5)])))
Q('Medium', 'Set Operations', 'Print union size, intersection size, and difference size (A minus B) of two lines of numbers. | Input: two lines "n values". | Output: three numbers.', lambda s: (lambda a, b: '%d %d %d' % (len(a | b), len(a & b), len(a - b)))(set(map(int, W(s)[0].split()[1:])), set(map(int, W(s)[1].split()[1:]))), [L('3 1 2 3', '2 2 5')], lambda r: L(*[J([k] + [r.randint(0, 6) for _ in range(k)]) for k in (r.randint(1, 5), r.randint(1, 5))]))
Q('Medium', 'Static Method Counter', 'A static counter counts instances created. Create N and print count. | Input: N. | Output: N.', lambda s: int(s), [L(3)], num(0, 40))
Q('Hard', 'LRU Cache Map', 'Use Map insertion order for an LRU cache; print gets. | Input: C, Q, commands. | Output: gets.', lambda s: lrud(s), [L(2, 4, 'put 1 1', 'put 2 2', 'get 1', 'get 3')], lambda r: L(*([r.randint(1, 3), 8] + [r.choice(['put %d %d' % (r.randint(1, 4), r.randint(1, 9)), 'get %d' % r.randint(1, 4)]) for _ in range(8)])))
Q('Hard', 'Event Emitter', 'on name handlerId / emit name: emit prints "handlerId:name" for each handler of name in registration order. | Input: N, commands. | Output: lines.', lambda s: emi(W(s)[1:]), [L(3, 'on a h1', 'on a h2', 'emit a')], lambda r: L(*([6] + [r.choice(['on a h1', 'on b h2', 'on a h3', 'emit a', 'emit b']) for _ in range(6)])))
Q('Hard', 'Deep Count Nested', 'The JSON array may nest arrays like [1,[2,[3]]]. Print the count of numbers and the maximum depth as "count depth". | Input: one line. | Output: "count depth".', lambda s: dc(s.strip()), [L('[1,[2,[3]]]')], lambda r: L(r.choice(['[1,[2,[3]]]', '[1,2,3]', '[[1],[2]]', '[[[5]]]', '[7]', '[1,[2,3],[4,[5,6]]]'])))
Q('Hard', 'Priority Queue Class', 'add name priority / next; highest priority first, earliest on tie, or EMPTY. | Input: N, commands. | Output: next replies.', lambda s: ptm(s), [L(4, 'add a 1', 'add b 5', 'next', 'next')], lambda r: L(*([7] + [r.choice(['add %s %d' % (r.choice('abc'), r.randint(1, 3)), 'next']) for _ in range(7)])))
Q('Hard', 'Anagram Groups With Map', 'Group anagrams, sorted inside, groups ordered by first word. | Input: a line. | Output: groups.', lambda s: anag(s), [L('eat tea tan ate nat bat')], wds(1, 8, 'abc', (1, 3)))
Q('Hard', 'Graph Neighbors Map', 'Undirected edges "a b": print each node (sorted) and its sorted neighbors as "n: x y". | Input: M, then M lines. | Output: adjacency lines.', lambda s: adjl(W(s)), [L(2, '1 2', '2 3')], lambda r: L(*([4] + ['%d %d' % tuple(r.sample(range(1, 6), 2)) for _ in range(4)])))
topic('jsfn', 'Functions, Closures and Recursion', 'arrow functions, closures, higher-order functions, recursion and memoization')
Q('Easy', 'Arrow Add', 'Define add = (a, b) => a + b and print the result. | Input: a b. | Output: sum.', lambda s: sum(iv(s)), [L('3 4')], two(-99, 99))
Q('Easy', 'Default Parameter', 'greet(name = "friend"): if the line is empty print "Hello, friend" else "Hello, NAME". | Input: a possibly empty word. | Output: greeting.', lambda s: 'Hello, ' + (s.strip() or 'friend'), [L('Asha')], lambda r: L(r.choice(['Asha', '', 'Ravi', '', 'Dev'])))
Q('Easy', 'Rest Parameters Sum', 'sum(...nums) with rest params over the numbers. | Input: N, then N integers. | Output: sum.', lambda s: sum(arrs(s)), [L(3, '1 2 3')], Aj)
Q('Easy', 'Spread Max', 'Math.max(...arr). | Input: N, then N integers. | Output: max.', lambda s: max(arrs(s)), [L(3, '4 9 2')], Aj)
Q('Easy', 'Factorial Recursive', 'Recursive factorial (N<=20, use BigInt if needed). | Input: N. | Output: N!.', lambda s: fact(int(s)), [L(5)], num(0, 20))
Q('Easy', 'Power Function', 'Compute a^b with recursion. | Input: a b. | Output: a^b.', lambda s: iv(s)[0] ** iv(s)[1], [L('2 8')], lambda r: L('%d %d' % (r.randint(0, 5), r.randint(0, 9))))
Q('Easy', 'Counter Closure', 'A closure counter: call it N times and print each value 1..N. | Input: N. | Output: N lines.', lambda s: '\n'.join(map(str, range(1, int(s) + 1))), [L(3)], num(1, 20))
Q('Medium', 'Fibonacci Memo', 'Memoized fib(N) for N up to 90 with BigInt-free numbers up to fib(78) (N<=78). | Input: N. | Output: F(N).', lambda s: fibn(int(s)), [L(50)], num(0, 78))
Q('Medium', 'Compose Functions', 'compose(f,g)(x)=f(g(x)) with f=x+1, g=x*2; print for each number. | Input: N, then N integers. | Output: results.', lambda s: J(x * 2 + 1 for x in arrs(s)), [L(3, '1 2 3')], Aj)
Q('Medium', 'Curry Multiplier', 'multiplier(k)(x) for k then each x. | Input: k, N, then N integers. | Output: products.', lambda s: (lambda t: J(t[0] * x for x in t[2:2 + t[1]]))(iv(s)), [L(3, 2, '1 2')], lambda r: (lambda n: L(r.randint(-5, 5), n, J([r.randint(-9, 9) for _ in range(n)])))(r.randint(1, 7)))
Q('Medium', 'Flatten Nested Numbers', 'Recursively flatten a nested list text like [1,[2,[3]]] into "1 2 3". | Input: one line. | Output: numbers.', lambda s: J(re.findall(r'-?\d+', s)), [L('[1,[2,[3]]]')], lambda r: L(r.choice(['[1,[2,[3]]]', '[1,2,3]', '[[1],[2]]', '[[[5]]]', '[7]', '[1,[2,3],[4,[5,6]]]'])))
Q('Medium', 'Sum Digits Recursive', 'Recursive digit sum. | Input: N. | Output: sum.', lambda s: ds(int(s)), [L(1234)], num(0, 999999))
Q('Medium', 'Binary Search Recursive', 'Recursive binary search; index or -1. | Input: N, sorted list, X. | Output: index.', lambda s: (lambda t: (lambda a, x: a.index(x) if x in a else -1)(t[1:1 + t[0]], t[-1]))(iv(s)), [L(4, '1 3 5 7', 7)], lambda r: (lambda n: L(n, J(sorted(r.sample(range(0, 30), n))), r.randint(0, 30)))(r.randint(1, 8)))
Q('Medium', 'Once Wrapper', 'once(f) only runs f the first time. Calls: N times add k; print the value after each call as the first result repeated. | Input: N then k. | Output: N lines of k.', lambda s: '\n'.join([str(iv(s)[1])] * iv(s)[0]), [L('3 5')], lambda r: L('%d %d' % (r.randint(1, 6), r.randint(0, 9))))
Q('Medium', 'Reduce Pipeline', 'Apply pipeline x+1 then x*3 to each number via reduce. | Input: N, then N integers. | Output: results.', lambda s: J((x + 1) * 3 for x in arrs(s)), [L(3, '1 2 3')], Aj)
Q('Hard', 'Permutations', 'Print all permutations of distinct digits in order of generation by lexicographic input permutation. | Input: a word of distinct letters (<=4). | Output: permutations one per line.', lambda s: '\n'.join(''.join(p) for p in itertools.permutations(s.strip())), [L('abc')], lambda r: L(''.join(r.sample('abcd', r.randint(1, 4)))))
Q('Hard', 'Subsets Sum Target', 'Count subsets (by position) with sum S. | Input: N, list, S. | Output: count.', lambda s: (lambda t: sum(1 for m in range(1 << t[0]) if sum(t[1 + i] for i in range(t[0]) if m >> i & 1) == t[-1]))(iv(s)), [L(3, '1 2 3', 3)], arq(0, 5, 1, 9, 0, 12))
Q('Hard', 'Debounce Simulation', 'Calls at times t (sorted) with delay D: a call fires only if no later call comes within D. Print the fired call times. | Input: N D then times. | Output: fired times.', lambda s: (lambda t: J(t[2 + i] for i in range(t[0]) if i == t[0] - 1 or t[3 + i] - t[2 + i] >= t[1]))(iv(s)), [L('4 3', '1 2 8 9')], lambda r: (lambda n: L('%d %d' % (n, r.randint(1, 5)), J(sorted(r.randint(0, 20) for _ in range(n)))))(r.randint(1, 7)))
Q('Hard', 'Tower Of Hanoi Moves', 'Print moves "A C" for N discs. | Input: N. | Output: moves.', lambda s: hanoi(int(s)), [L(2)], num(1, 4))
Q('Hard', 'N Queens Count', 'Count solutions. | Input: N (<=8). | Output: count.', lambda s: nq(int(s)), [L(4)], num(1, 8))
Q('Hard', 'Edit Distance', 'Levenshtein distance. | Input: two words. | Output: distance.', lambda s: ed(*W(s)), [L('kitten', 'sitting')], lambda r: L(*[''.join(r.choice('abc') for _ in range(r.randint(1, 7))) for _ in range(2)]))
Q('Hard', 'Coin Change Ways', 'Number of ways to make T with unlimited coins. | Input: K, coins, T. | Output: ways.', lambda s: ways(iv(s)), [L(3, '1 2 5', 5)], lambda r: (lambda k: L(k, J(r.sample(range(1, 7), k)), r.randint(0, 20)))(r.randint(1, 4)))
#end
