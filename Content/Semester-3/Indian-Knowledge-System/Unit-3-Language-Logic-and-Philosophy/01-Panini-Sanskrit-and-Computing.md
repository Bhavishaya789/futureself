# Panini, Sanskrit grammar and computing
minutes: 30
yt: panini ashtadhyayi grammar computer science
yt: sanskrit and programming languages
@study
## Panini's Ashtadhyayi
Panini (around the 4th century BCE) composed the *Ashtadhyayi* ("eight chapters") with roughly 4,000 concise rules (sutras) describing Sanskrit completely. It is a famous early example of a **formal, generative grammar**.

### Features resembling computing
- **Rule-based system:** rules apply in an order, with a conflict-resolution principle (a later rule can override an earlier one in certain cases).
- **Meta-rules and metalanguage:** technical labels (*pratyahara* abbreviations, *it* markers) used to refer to groups of sounds compactly, similar to variables and macros.
- **Compactness:** extreme economy, like compression.
- **Context-sensitive rules** and operations such as substitution, deletion and insertion.
- Comparison with **Backus–Naur Form (BNF)**: scholars have noted similarities, and some call it the Panini–Backus Form. This is an analogy in methods, not a claim that modern languages were derived from it.

## Phonetics: Shiksha
Sounds are arranged scientifically by place of articulation (guttural, palatal, retroflex, dental, labial) in the **varnamala**, which is why Devanagari order is systematic.

## Pratyahara example
The Shiva Sutras list sounds in a fixed order with marker letters; a pratyahara like **ac** denotes all vowels from a to the marker c. This is like specifying a range (a..c) in a list.

## Sanskrit and technology
- Sanskrit's regular grammar and rich morphology attract natural language processing (NLP) research: tokenisation, sandhi splitting, parsing, machine translation.
- Tools: Sanskrit Heritage platform, the Digital Corpus of Sanskrit, Bhashini (India's language translation mission).
- The claim that Sanskrit is "the best language for computers" is popular but not proven; what is accurate is that its formal grammar is a rich subject for computational linguistics.

## Other traditions
*Nirukta* (Yaska, etymology), Tolkappiyam (Tamil grammar), Prakrit and Pali grammars, Kannada, Telugu and Bengali literary traditions. India has 22 languages in the Eighth Schedule.

## Tiny code illustration: rule-based substitution
```python
rules = [("ai", "ay"), ("au", "av")]     # simplified vowel-sandhi style substitution
def apply(word):
    for a, b in rules:
        word = word.replace(a, b)
    return word
print(apply("nai"), apply("pau"))
```
Output:
```
nay pav
```
This is not real Sanskrit grammar, only a demonstration of ordered, rule-based rewriting, the idea shared with formal grammars in the Theory of Computation.

> Panini's rules rewrite symbols step by step, like a formal grammar.
@qa
Q: Who was Panini and what is the Ashtadhyayi?
A: Panini was an ancient Sanskrit grammarian (around the 4th century BCE) whose Ashtadhyayi describes Sanskrit using about 4,000 concise rules in eight chapters.
Q: Why is Panini's grammar relevant to computer science?
A: It is an early formal, rule-based generative system with a metalanguage and ordered rule application, comparable to formal grammars and BNF.
Q: What is a pratyahara?
A: A compact label formed from a letter and an end marker in the Shiva Sutras to denote a whole group of sounds.
Q: Is it proven that Sanskrit is the best language for computers?
A: No. That is a popular claim without evidence; however its formal grammar is a valuable subject for computational linguistics.
Q: Name an Indian initiative for language technology.
A: Bhashini, the National Language Translation Mission, supports translation and speech tools across Indian languages.
@quiz
? Panini's Ashtadhyayi has about
- 400 rules
+ 4,000 rules
- 40,000 rules
- 40 rules
! Roughly four thousand sutras.
? Which modern concept resembles Panini's approach?
- Spreadsheet
+ Formal grammar (BNF)
- Bluetooth
- HTML
! Both specify language generation by rules.
? Varnamala is the
+ ordered arrangement of sounds
- type of metre
- festival
- weapon
! Letters are grouped by articulation.
? Sandhi concerns
+ sound changes at word boundaries
- planets
- medicine
- coins
! A phonological rule area.
? Bhashini is related to
- space missions
+ language translation technology
- banking
- railways
! A National Language Translation Mission.

@visual
compare | Panini's grammar and a programming language grammar | Panini's Ashtadhyayi=About 4000 short rules in 8 chapters~Rules apply in a fixed order with exceptions~Uses abbreviation tricks (pratyahara); Programming language grammar=Rules written in BNF or similar~Parsers apply them to build a syntax tree~Uses symbols that stand for sets of tokens

@problems
## Moderate
P: Who was Panini, what is the Ashtadhyayi and how is it organised?
A: Panini was an ancient Sanskrit grammarian (around the 4th century BCE). The Ashtadhyayi ("eight chapters") is his grammar of Sanskrit with roughly 4000 very short rules (sutras) arranged in eight chapters. It describes word formation and sound changes in a precise, rule-based way.
R: 2 | Who and when
R: 2 | Eight chapters and about 4000 sutras
## High
P: What are the Maheshwara Sutras and a pratyahara? Give an example.
A: The Maheshwara (Shiva) Sutras are 14 short sound lists that arrange the Sanskrit sounds. A pratyahara is a short label formed by taking the first sound and the end marker of a stretch of the list to mean every sound in between. Example: "ac" stands for all vowels, which makes rules very compact (like a variable that stands for a set).
R: 2 | The 14 sutras
R: 2 | Pratyahara explained
R: 1 | Example such as ac for vowels
## Advanced
P: Relate Panini's grammar to formal grammars and computing. Give two ideas that resemble programming practice.
A: Panini's rules generate correct words from roots and suffixes, like a production system in a formal grammar; the 20th-century BNF notation for programming languages has been compared with his method. Ideas: (1) abbreviation (pratyahara) is like defining a name for a set of values; (2) anuvritti, carrying a word forward from earlier sutras to avoid repeating it, is like reuse of code; (3) ordering of rules with general rules and exceptions resembles priority of rules in a parser.
Sanskrit's precise structure is studied for natural language processing.
R: 2 | Rule-based generation like a formal grammar
R: 2 | Two programming parallels
R: 1 | NLP interest
