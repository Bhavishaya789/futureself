# Phases of a compiler and lexical analysis
minutes: 25
yt: phases of compiler lexical analysis
@study
A **compiler** translates source code to target code. Phases: **lexical analysis** (tokens), **syntax analysis** (parse tree), **semantic analysis** (type checking), **intermediate code generation**, **code optimisation**, **code generation**; the symbol table and error handler are used throughout. Front end (analysis) and back end (synthesis).
## Lexical analysis
The lexer groups characters into **tokens** (identifier, keyword, number, operator) using regular expressions and finite automata. For `int x = a + 10;` the tokens are: int, x, =, a, +, 10, ; : **7 tokens**.
Identifier: letter (letter | digit)*; integer: digit+.
## Syntax analysis
Grammars (context-free) and parsers. **Top-down** (LL(1), recursive descent) and **bottom-up** (LR, SLR, LALR). FIRST and FOLLOW sets build the LL(1) table. Ambiguous grammars have more than one parse tree.
## Intermediate code
Three-address code: `t1 = b * c; t2 = a + t1` for a + b * c. Optimisations: constant folding (2 + 3 becomes 5), dead-code elimination, common sub-expression elimination, loop-invariant motion.
## Hindi saransh
Compiler ke phases: lexical, syntax, semantic, intermediate code, optimisation, code generation. Lexer tokens banata hai.
> The lexer is built from regular expressions; the parser from context-free grammars.
@qa
Q: How many tokens are in `int x = a + 10;`?
A: 7.
Q: What is constant folding?
A: Evaluating constant expressions at compile time, such as 2 + 3 to 5.
Q: Which parser is top-down?
A: LL(1) or recursive descent.
Q: What is three-address code?
A: Intermediate code where each instruction has at most three operands, like t1 = b * c.
@quiz
? Number of tokens in `int x = a + 10;`
- 5
- 6
+ 7
- 8
! int, x, =, a, +, 10, ;
? Which phase detects type errors?
- lexical
- syntax
+ semantic
- code generation
! Type checking.
? Constant folding is a
- parsing method
+ code optimisation
- lexical rule
- linking step
! Evaluates constants early.
? Lexers are described using
+ regular expressions
- context-free grammars only
- Turing machines
- pushdown automata
! Finite automata.
@visual
flow | Compiler phases | Source code > Lexical analysis > Syntax analysis > Semantic analysis > Intermediate code > Optimisation > Code generation > Target code
@problems
## Moderate
P: List the phases of a compiler in order.
A: Lexical, syntax, semantic, intermediate code, optimisation, code generation.
R: 2 | Order
R: 1 | Names
## High
P: Tokenise `int x = a + 10;`.
A: int, x, =, a, +, 10, ; (7 tokens).
R: 2 | Tokens
R: 1 | Count
## Advanced
P: Generate three-address code for x = a + b * c.
A: t1 = b * c; t2 = a + t1; x = t2.
R: 2 | Precedence
R: 2 | Code
