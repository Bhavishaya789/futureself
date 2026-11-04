from cs11b import *
from cs11 import W
from collections import deque
import re
def sp_stack(s):
    st = []; o = []
    for c in W(s)[1:]:
        if c == 'pop': o.append(str(st.pop()) if st else 'UNDERFLOW')
        else: st.append(int(c.split()[1]))
    return '\n'.join(o)
def bank(s):
    t = iv(s); b = t[0]; o = []
    for x in t[2:2 + t[1]]:
        if x > b: o.append('INSUFFICIENT')
        else: b -= x
    o.append('BALANCE %d' % b); return '\n'.join(o)
def nest(s):
    o = []; e = 0
    for l in W(s)[1:]:
        a, b = l.split()
        try: o.append(str(int(a) // int(b)))
        except Exception: o.append('ERR'); e += 1
    o.append('ERRORS %d' % e); return '\n'.join(o)
def walk(s):
    a = arrs(s); i = 0; seen = set(); o = []
    while True:
        if not 0 <= i < len(a): o.append('OUTSIDE'); break
        if i in seen: o.append('LOOP'); break
        seen.add(i); o.append(str(i)); i += a[i]
    return ' '.join(o)

subject('cs12', 'Computer Science - Class 12 (Python)', 'python', 'cs12', 'Python practice for the Class 12 syllabus. Every topic is a no-timer session.')

topic('fn12', 'Functions, Scope and Recursion', 'Parameters, return values, scope, recursion and higher-order use')
Q('Easy', 'Sum of Natural Numbers Recursion', 'Write sum_to(n) recursively and print sum_to(N). | Input: N. | Output: 1+2+...+N.', lambda s: int(s) * (int(s) + 1) // 2, [L(10)], num(0, 300))
Q('Easy', 'Reverse a String Recursively', 'Reverse the word using recursion. | Input: a word. | Output: the reversed word.', lambda s: s.strip()[::-1], [L('python')], S)
Q('Easy', 'Power of Two Check', 'Print True if N is a power of two using a function. | Input: N (N>=1). | Output: True or False.', lambda s: str((lambda n: n & (n - 1) == 0)(int(s))), [L(16)], num(1, 600))
Q('Easy', 'Count Digits Recursively', 'Count the digits of N using recursion. | Input: N. | Output: the count.', lambda s: len(str(int(s))), [L(12345)], num(0, 10**9))
Q('Easy', 'Min of List Function', 'Write smallest(list) without using min() and print the answer. | Input: N, then N integers. | Output: the minimum.', lambda s: min(arrs(s)), [L(4, '5 2 9 1')], LA)
Q('Easy', 'Global Counter', 'Write a function that increments a global counter each call. Call it N times and print the counter. | Input: N. | Output: N.', lambda s: int(s), [L(5)], num(0, 40))
Q('Easy', 'Lambda Square', 'Use a lambda to square every number of the list and print the results. | Input: N, then N integers. | Output: the squares.', lambda s: J(x * x for x in arrs(s)), [L(3, '1 2 3')], LA)
Q('Medium', 'Binary Search Recursive', 'The list is sorted. Print the index of K (recursive binary search) or -1. | Input: N, the sorted list, then K. | Output: the index.', lambda s: (lambda t: (lambda a: a.index(t[-1]) if t[-1] in a else -1)(t[1:1 + t[0]]))(iv(s)), [L(5, '1 3 5 7 9', 7)], lambda r: (lambda a: L(len(a), J(a), r.randint(0, 30)))(sorted(r.sample(range(0, 30), r.randint(1, 8)))))
Q('Medium', 'Fibonacci With Memo', 'Print F(N) (F(0)=0, F(1)=1) using a dictionary memo. | Input: N (0 to 60). | Output: F(N).', lambda s: (lambda n: (lambda a, b: [(a := b, b := a + b) for _ in range(n)] and a if n else 0)(0, 1))(int(s)), [L(30)], num(0, 60))
Q('Medium', 'Flatten Digits', 'Print the digits of N, each followed by a space, using recursion (no str conversion needed). | Input: N. | Output: the digits separated by spaces.', lambda s: J(s.strip()), [L(4052)], num(1, 10**8))
Q('Medium', 'Mutual Even Odd', 'Using two functions that call each other, print EVEN or ODD for N. | Input: N. | Output: EVEN or ODD.', lambda s: 'EVEN' if int(s) % 2 == 0 else 'ODD', [L(7)], num(0, 50))
Q('Medium', 'Sum of Digits Recursively', 'Print the digit sum of N using recursion. | Input: N. | Output: the sum.', lambda s: sum(map(int, s.strip())), [L(12345)], num(0, 10**9))
Q('Medium', 'Apply Function List', 'Apply "double" to the first number, then "add one", then "square", in that order, and print the result. | Input: N. | Output: ((N*2)+1)^2.', lambda s: (int(s) * 2 + 1) ** 2, [L(3)], num(-10, 10))
Q('Medium', 'Keyword Arguments', 'Write area(length=1, breadth=1) and print area for the given values (missing values default to 1). | Input: a line "L B" or just "L". | Output: the area.', lambda s: iv(s)[0] * (iv(s)[1] if len(iv(s)) > 1 else 1), [L('5'), L('4 3')], lambda r: L(*(['%d' % r.randint(1, 9)] if r.random() < .5 else ['%d %d' % (r.randint(1, 9), r.randint(1, 9))])))
Q('Hard', 'Tower of Hanoi Moves', 'Print the moves of Tower of Hanoi for N disks as "from to" lines using pegs A, B, C (move from A to C). | Input: N (1 to 4). | Output: 2^N - 1 lines.', lambda s: (lambda n: '\n'.join((lambda f: f(f, n, 'A', 'C', 'B'))(lambda f, k, a, c, b: [] if k == 0 else f(f, k - 1, a, b, c) + ['%s %s' % (a, c)] + f(f, k - 1, b, c, a))))(int(s)), [L(2)], num(1, 4))
Q('Hard', 'All Permutations Count', 'Print the number of permutations of N distinct items using recursion. | Input: N (0 to 8). | Output: N!.', lambda s: math.factorial(int(s)), [L(4)], num(0, 8))
Q('Hard', 'Ackermann-lite', 'Define f(m, n): if m=0 return n+1; if n=0 return f(m-1,1); else f(m-1, f(m, n-1)). Print f(M, N) for small M, N. | Input: M then N (M<=2, N<=6). | Output: f(M,N).', lambda s: (lambda m, n: (lambda f: f(f, m, n))(lambda f, m, n: n + 1 if m == 0 else f(f, m - 1, 1) if n == 0 else f(f, m - 1, f(f, m, n - 1))))(*iv(s)), [L(1, 2)], lambda r: L(r.randint(0, 2), r.randint(0, 6)))
Q('Hard', 'Count Paths In Grid', 'Count the paths from the top-left to the bottom-right of an R x C grid moving right or down, using recursion with memo. | Input: R then C. | Output: the paths.', lambda s: math.comb(iv(s)[0] + iv(s)[1] - 2, iv(s)[0] - 1), [L(3, 3)], two(1, 9))
Q('Hard', 'Decimal To Base', 'Convert N to base B (2..9) using recursion and print it. | Input: N then B. | Output: the number in base B.', lambda s: (lambda n, b: (lambda f: f(f, n) if n else '0')(lambda f, x: '' if x == 0 else f(f, x // b) + str(x % b)))(*iv(s)), [L(10, 2)], lambda r: L(r.randint(0, 500), r.randint(2, 9)))
Q('Hard', 'Sum of Nested Digits', 'Repeatedly replace N by its digit sum until it has one digit, using recursion. Print the final digit. | Input: N. | Output: the digit.', lambda s: (lambda f: f(f, int(s)))(lambda f, n: n if n < 10 else f(f, sum(map(int, str(n))))), [L(9875)], num(0, 10**9))

topic('exc12', 'Exception Handling', 'try, except, else and finally with typical errors')
def intsafe(t):
    try: return int(t)
    except ValueError: return None
Q('Easy', 'Safe Integer', 'Print the integer if the input is a valid integer, otherwise print INVALID (use try/except). | Input: one token. | Output: the integer or INVALID.', lambda s: (lambda v: v if v is not None else 'INVALID')(intsafe(s.strip())), [L('42'), L('abc')], lambda r: L(r.choice(['12', '-5', 'x1', '3.5', '007', 'abc', '0'])))
Q('Easy', 'Safe Division', 'Print A/B with two decimals, or DIVISION BY ZERO if B is 0. | Input: A then B. | Output: the result or the message.', lambda s: 'DIVISION BY ZERO' if iv(s)[1] == 0 else '%.2f' % (iv(s)[0] / iv(s)[1]), [L(7, 2), L(1, 0)], lambda r: L(r.randint(-20, 20), r.choice([0, 1, 2, 3, 4, 5])))
Q('Easy', 'List Index Check', 'Print the element at index I of the list, or INDEX ERROR if it does not exist. | Input: N, the list, then I. | Output: the element or INDEX ERROR.', lambda s: (lambda t: t[1 + t[-1]] if 0 <= t[-1] < t[0] else 'INDEX ERROR')(iv(s)), [L(3, '4 5 6', 5)], lambda r: (lambda n: L(n, J([r.randint(0, 9) for _ in range(n)]), r.randint(-1, n + 1)))(r.randint(1, 5)))
Q('Easy', 'Key Check', 'N lines "key value" then a key. Print the value, or KEY ERROR. | Input: N, N lines, then the key. | Output: the value or KEY ERROR.', lambda s: (lambda l: dict(x.split() for x in l[1:-1]).get(l[-1], 'KEY ERROR'))(W(s)), [L(2, 'a 1', 'b 2', 'c')], lambda r: L(*([2, 'a 1', 'b 2', r.choice('abc')])))
Q('Easy', 'Convert Float', 'Print the number rounded to one decimal, or NOT A NUMBER. | Input: one token. | Output: the rounded number or message.', lambda s: (lambda t: ('%.1f' % float(t)) if re.fullmatch(r'-?\d+(\.\d+)?', t) else 'NOT A NUMBER')(s.strip()), [L('3.14159')], lambda r: L(r.choice(['2.55', '-1.2', 'abc', '7', '1e3x', '0.05'])))
Q('Easy', 'Square Root Check', 'Print the square root with two decimals, or NEGATIVE if the number is negative (use an exception). | Input: N. | Output: the root or NEGATIVE.', lambda s: 'NEGATIVE' if int(s) < 0 else '%.2f' % math.sqrt(int(s)), [L(16), L(-4)], num(-10, 100))
Q('Easy', 'Age Validation', 'Print VALID if the age is an integer from 0 to 120, otherwise INVALID. | Input: one token. | Output: VALID or INVALID.', lambda s: (lambda v: 'VALID' if v is not None and 0 <= v <= 120 else 'INVALID')(intsafe(s.strip())), [L('25')], lambda r: L(r.choice(['25', '-3', '121', 'x', '120', '0', '12.5'])))
import re
Q('Medium', 'Sum Valid Numbers', 'Add up the valid integers in the line and skip the rest; also print how many were skipped. | Input: a line of tokens. | Output: "sum skipped".', lambda s: (lambda v: '%d %d' % (sum(x for x in v if x is not None), sum(1 for x in v if x is None)))([intsafe(t) for t in s.split()]), [L('3 x 4 y 5')], lambda r: L(' '.join(r.choice(['1', '22', 'a', '-3', '4.5', 'zz']) for _ in range(r.randint(1, 8)))))
Q('Medium', 'Retry Until Valid', 'Tokens are given one per line; print the first valid positive integer, or NONE. | Input: N, then N tokens. | Output: the integer or NONE.', lambda s: next((int(t) for t in W(s)[1:] if intsafe(t) is not None and int(t) > 0), 'NONE'), [L(3, 'x', '-1', '8')], lambda r: L(*([4] + [r.choice(['x', '-1', '8', '0', '12']) for _ in range(4)])))
Q('Medium', 'Average With Guard', 'Print the average of the integers with two decimals; if the list is empty (N=0) print NO DATA. | Input: N, then N integers (second line may be empty). | Output: the average or NO DATA.', lambda s: 'NO DATA' if iv(s)[0] == 0 else '%.2f' % (sum(arrs(s)) / len(arrs(s))), [L(3, '1 2 4'), L(0, '')], lambda r: (lambda n: L(n, J([r.randint(0, 9) for _ in range(n)])))(r.choice([0, 1, 2, 5])))
Q('Medium', 'Parse Date', 'Input is D/M/Y. Print YEAR-MONTH-DAY with two-digit month and day, or BAD DATE when parts are not numbers or the month is not 1-12. | Input: one token like 5/3/2024. | Output: the date or BAD DATE.', lambda s: (lambda p: 'BAD DATE' if len(p) != 3 or any(intsafe(x) is None for x in p) or not 1 <= int(p[1]) <= 12 else '%d-%02d-%02d' % (int(p[2]), int(p[1]), int(p[0])))(s.strip().split('/')), [L('5/3/2024')], lambda r: L(r.choice(['5/3/2024', '12/13/2020', 'a/1/2000', '1/1/1999', '31/12/2021', '7/0/2001'])))
Q('Medium', 'Stack Underflow Guard', 'Process commands push X and pop; print each popped value, or UNDERFLOW when popping an empty stack. | Input: N, then N commands. | Output: one line per pop.', sp_stack, [L(4, 'push 1', 'pop', 'pop', 'push 2')], lambda r: L(*([5] + [r.choice(['push %d' % r.randint(1, 9), 'pop']) for _ in range(5)])))

Q('Medium', 'Finally Counter', 'For each token print "OK n" if it is an integer n, else "ERR token". After all tokens print "DONE". | Input: a line of tokens. | Output: one line per token then DONE.', lambda s: '\n'.join(('OK %d' % int(t)) if intsafe(t) is not None else 'ERR ' + t for t in s.split()) + '\nDONE', [L('4 b 6')], lambda r: L(' '.join(r.choice(['1', 'x', '-7', 'y']) for _ in range(r.randint(1, 6)))))
Q('Medium', 'Safe Power', 'Print A^B; if B is negative print NEGATIVE EXPONENT. | Input: A then B. | Output: the power or message.', lambda s: 'NEGATIVE EXPONENT' if iv(s)[1] < 0 else iv(s)[0] ** iv(s)[1], [L(2, 5)], lambda r: L(r.randint(-5, 5), r.randint(-2, 8)))
Q('Hard', 'Expression Evaluator', 'Evaluate "A op B" for + - * / ; print DIVISION BY ZERO, BAD OPERATOR or INVALID NUMBER when needed (division prints with two decimals). | Input: one line "A op B". | Output: the result or the error.', lambda s: (lambda p: 'INVALID NUMBER' if len(p) != 3 or intsafe(p[0]) is None or intsafe(p[2]) is None else 'BAD OPERATOR' if p[1] not in '+-*/' or len(p[1]) != 1 else 'DIVISION BY ZERO' if p[1] == '/' and int(p[2]) == 0 else ('%.2f' % (int(p[0]) / int(p[2]))) if p[1] == '/' else str({'+': int(p[0]) + int(p[2]), '-': int(p[0]) - int(p[2]), '*': int(p[0]) * int(p[2])}[p[1]]))(s.split()), [L('6 / 4'), L('5 ^ 2')], lambda r: L('%s %s %s' % (r.choice(['3', '10', 'x', '0']), r.choice(['+', '-', '*', '/', '^']), r.choice(['2', '0', 'y', '5']))))
Q('Hard', 'Matrix Dimension Check', 'Two matrices are given by sizes "r1 c1" and "r2 c2". Print PRODUCT r1xc2 if they can be multiplied, else CANNOT MULTIPLY. | Input: two lines of sizes. | Output: the result.', lambda s: (lambda a, b: 'PRODUCT %dx%d' % (a[0], b[1]) if a[1] == b[0] else 'CANNOT MULTIPLY')(*[list(map(int, l.split())) for l in W(s)]), [L('2 3', '3 4')], lambda r: L('%d %d' % (r.randint(1, 4), r.randint(1, 4)), '%d %d' % (r.randint(1, 4), r.randint(1, 4))))
Q('Hard', 'Bank Withdrawal', 'Balance B; then N withdrawals. If a withdrawal exceeds the balance print INSUFFICIENT for it, else reduce the balance. Print the final balance after the lines of messages. | Input: B, N, then N amounts. | Output: messages then the balance.', bank, [L(100, 3, 30, 90, 50)], lambda r: L(r.randint(0, 100), 4, *[r.randint(1, 60) for _ in range(4)]))

Q('Hard', 'Grade File Parser', 'N lines "name mark". Print "name: grade" (A 80+, B 60-79, C 33-59, F below) and for a mark that is not an integer between 0 and 100 print "name: INVALID". | Input: N, then N lines. | Output: N lines.', lambda s: '\n'.join('%s: %s' % (l.split()[0], 'INVALID' if intsafe(l.split()[1]) is None or not 0 <= int(l.split()[1]) <= 100 else 'A' if int(l.split()[1]) >= 80 else 'B' if int(l.split()[1]) >= 60 else 'C' if int(l.split()[1]) >= 33 else 'F') for l in W(s)[1:]), [L(2, 'Asha 91', 'Ravi x')], lambda r: L(*([3] + ['%s %s' % (n, r.choice(['91', '45', 'x', '101', '70', '20'])) for n in ('A', 'B', 'C')])))
Q('Hard', 'Nested Try Counter', 'For each pair "a b" on N lines, print a//b or ERR (division by zero or non-integer). Finally print the number of ERR lines as "ERRORS n". | Input: N, then N lines. | Output: N lines then the count.', nest, [L(3, '7 2', '5 0', 'x 1')], lambda r: L(*([4] + ['%s %s' % (r.choice(['7', '10', 'x', '3']), r.choice(['2', '0', '1', 'y'])) for _ in range(4)])))

Q('Hard', 'Safe Index Walk', 'Start at index 0 of the list and repeatedly jump by the value at the current index. Print the visited indices until you step outside the list or revisit an index; end with OUTSIDE or LOOP. | Input: N, then N integers. | Output: indices then OUTSIDE or LOOP.', walk, [L(4, '1 1 -2 5')], lambda r: (lambda n: L(n, J([r.randint(-3, 3) for _ in range(n)])))(r.randint(1, 7)))
