# Strings
minutes: 40
yt: class 11 computer science python strings slicing methods
@study
A string is an immutable sequence of Unicode characters in single, double or triple quotes. Indexing: forward 0 to n-1, backward -1 to -n. Slicing s[start:stop:step]; s[::-1] reverses. Operations: concatenation +, repetition *, membership in, comparison. Functions: len(), max(), min(). Methods: upper(), lower(), title(), capitalize(), swapcase(), strip(), lstrip(), rstrip(), find(), index(), count(), replace(), split(), join(), startswith(), endswith(), isalpha(), isdigit(), isalnum(), islower(), isupper(), isspace(), partition(). Traversal with for loop and index. Programs: palindrome, count vowels, reverse, capitalise words.
## Deep dive: Indexing and slicing
s = "HELLO": s[0] = H, s[-1] = O, s[1:4] = ELL, s[:3] = HEL, s[2:] = LLO, s[::2] = HLO, s[::-1] = OLLEH. Strings are immutable: s[0] = "J" gives TypeError. Concatenation "Hi" + "There"; repetition "ab" * 3 = ababab. in: "ell" in s is True. Comparison uses Unicode values. ord("A") = 65, chr(97) = a.
## Deep dive: String methods
"hello world".title() gives Hello World; "abc".upper() gives ABC; " hi ".strip() gives hi; "banana".count("a") gives 3; "banana".find("n") gives 2 (-1 if not found); index raises ValueError if absent; replace("a", "o"); "a,b,c".split(",") gives list; "-".join(["a","b"]) gives a-b; startswith, endswith; isalpha, isdigit; partition returns a 3-tuple.
## Deep dive: Traversal and programs
for ch in s: print(ch); for i in range(len(s)): print(s[i]). Count vowels: if ch in "aeiouAEIOU". Palindrome: s == s[::-1]. Reverse words. Count uppercase letters with isupper(). Replace spaces. Word count with split(). Escape sequences in strings. Raw strings. Multi-line strings with triple quotes.
## Hindi saransh
Python mein string: anuvartan, katan (slicing), vidhiyan. s[::-1] ulta karta hai. String achal (immutable) hota hai.
> Strings are immutable: individual characters cannot be changed after creation.
@formulas
## Slicing HELLO
s[0] | H | First
s[-1] | O | Last
s[1:4] | ELL | Slice
s[::-1] | OLLEH | Reverse
## Methods
upper | Capitals | ABC
find | Index or -1 | Search
split | List | Words
join | String | Combine

@qa
Q: Which an immutable sequence of characters?
A: String an immutable sequence of characters.
Q: What do you know about String?
A: String an immutable sequence of characters.
Q: Which the position of a character?
A: Index the position of a character.
Q: What do you know about Index?
A: Index the position of a character.
Q: Which counting from the end?
A: Negative index counting from the end.
Q: What do you know about Negative index?
A: Negative index counting from the end.
Q: Which extracting a part of a string?
A: Slicing extracting a part of a string.
Q: What do you know about Slicing?
A: Slicing extracting a part of a string.
Q: Which the stride in a slice?
A: Step the stride in a slice.
Q: What do you know about Step?
A: Step the stride in a slice.
Q: Which joining strings with plus?
A: Concatenation joining strings with plus.
Q: What do you know about Concatenation?
A: Concatenation joining strings with plus.
Q: Which repeating a string with star?
A: Repetition repeating a string with star.
Q: What do you know about Repetition?
A: Repetition repeating a string with star.
Q: Which testing presence using in?
A: Membership testing presence using in.
Q: What do you know about Membership?
A: Membership testing presence using in.
Q: Which unable to be changed in place?
A: Immutable unable to be changed in place.
Q: What do you know about Immutable?
A: Immutable unable to be changed in place.
Q: Which visiting each character?
A: Traversal visiting each character.
Q: What do you know about Traversal?
A: Traversal visiting each character.
Q: Which the function giving the length?
A: len() the function giving the length.
Q: What do you know about len()?
A: Len() the function giving the length.
Q: Which converts to uppercase?
A: upper() converts to uppercase.
Q: What do you know about upper()?
A: Upper() converts to uppercase.
Q: Which converts to lowercase?
A: lower() converts to lowercase.
Q: What do you know about lower()?
A: Lower() converts to lowercase.
Q: Which capitalises the first letter of each word?
A: title() capitalises the first letter of each word.
Q: What do you know about title()?
A: Title() capitalises the first letter of each word.
Q: Which capitalises the first character?
A: capitalize() capitalises the first character.
Q: What do you know about capitalize()?
A: Capitalize() capitalises the first character.
Q: Which swaps the case of letters?
A: swapcase() swaps the case of letters.
Q: What do you know about swapcase()?
A: Swapcase() swaps the case of letters.
Q: Which removes spaces from both ends?
A: strip() removes spaces from both ends.
Q: What do you know about strip()?
A: Strip() removes spaces from both ends.
Q: Which removes spaces on the left?
A: lstrip() removes spaces on the left.
Q: What do you know about lstrip()?
A: Lstrip() removes spaces on the left.
Q: Which removes spaces on the right?
A: rstrip() removes spaces on the right.
Q: What do you know about rstrip()?
A: Rstrip() removes spaces on the right.
Q: Which returns the index of a substring or minus one?
A: find() returns the index of a substring or minus one.
Q: What do you know about find()?
A: Find() returns the index of a substring or minus one.
Q: Which returns the index or raises an error?
A: index() returns the index or raises an error.
Q: What do you know about index()?
A: Index() returns the index or raises an error.
Q: Which counts occurrences of a substring?
A: count() counts occurrences of a substring.
Q: What do you know about count()?
A: Count() counts occurrences of a substring.
Q: Which replaces a substring?
A: replace() replaces a substring.
Q: What do you know about replace()?
A: Replace() replaces a substring.
Q: Which splits a string into a list?
A: split() splits a string into a list.
Q: What do you know about split()?
A: Split() splits a string into a list.
Q: Which joins items into a string?
A: join() joins items into a string.
Q: What do you know about join()?
A: Join() joins items into a string.
Q: Which checks the beginning?
A: startswith() checks the beginning.
Q: What do you know about startswith()?
A: Startswith() checks the beginning.
Q: Which checks the ending?
A: endswith() checks the ending.
Q: What do you know about endswith()?
A: Endswith() checks the ending.
Q: Which checks all letters?
A: isalpha() checks all letters.
Q: What do you know about isalpha()?
A: Isalpha() checks all letters.
Q: Which checks all digits?
A: isdigit() checks all digits.
Q: What do you know about isdigit()?
A: Isdigit() checks all digits.
Q: Which checks letters and digits?
A: isalnum() checks letters and digits.
Q: What do you know about isalnum()?
A: Isalnum() checks letters and digits.
Q: Which checks all lowercase?
A: islower() checks all lowercase.
Q: What do you know about islower()?
A: Islower() checks all lowercase.
Q: Which checks all uppercase?
A: isupper() checks all uppercase.
Q: What do you know about isupper()?
A: Isupper() checks all uppercase.
Q: Which checks only whitespace?
A: isspace() checks only whitespace.
Q: What do you know about isspace()?
A: Isspace() checks only whitespace.
Q: Which splits at the first separator into three parts?
A: partition() splits at the first separator into three parts.
Q: What do you know about partition()?
A: Partition() splits at the first separator into three parts.
Q: Which returns the Unicode code of a character?
A: ord() returns the Unicode code of a character.
Q: What do you know about ord()?
A: Ord() returns the Unicode code of a character.
Q: Which returns the character of a code?
A: chr() returns the character of a code.
Q: What do you know about chr()?
A: Chr() returns the character of a code.
Q: Which a backslash code in a string?
A: Escape sequence a backslash code in a string.
Q: What do you know about Escape sequence?
A: Escape sequence a backslash code in a string.
Q: Which the escape sequence for a new line?
A: Newline the escape sequence for a new line.
Q: What do you know about Newline?
A: Newline the escape sequence for a new line.
Q: Which the escape sequence for a tab?
A: Tab the escape sequence for a tab.
Q: What do you know about Tab?
A: Tab the escape sequence for a tab.
Q: Which quotes for multi-line strings?
A: Triple quotes quotes for multi-line strings.
Q: What do you know about Triple quotes?
A: Triple quotes quotes for multi-line strings.
Q: Which a string ignoring escape sequences?
A: Raw string a string ignoring escape sequences.
Q: What do you know about Raw string?
A: Raw string a string ignoring escape sequences.
Q: Which a part of a string?
A: Substring a part of a string.
Q: What do you know about Substring?
A: Substring a part of a string.
Q: Which a string reading the same backwards?
A: Palindrome a string reading the same backwards.
Q: What do you know about Palindrome?
A: Palindrome a string reading the same backwards.
Q: Which the letters a, e, i, o, u?
A: Vowel the letters a, e, i, o, u.
Q: What do you know about Vowel?
A: Vowel the letters a, e, i, o, u.
Q: Which a letter that is not a vowel?
A: Consonant a letter that is not a vowel.
Q: What do you know about Consonant?
A: Consonant a letter that is not a vowel.
Q: Which the number of words in text?
A: Word count the number of words in text.
Q: What do you know about Word count?
A: Word count the number of words in text.
Q: Which to join end to end?
A: Concatenate to join end to end.
Q: What do you know about Concatenate?
A: Concatenate to join end to end.
Q: Which to reverse the order of characters?
A: Reverse to reverse the order of characters.
Q: What do you know about Reverse?
A: Reverse to reverse the order of characters.
Q: Which upper or lower form of a letter?
A: Case upper or lower form of a letter.
Q: What do you know about Case?
A: Case upper or lower form of a letter.
Q: Which spaces, tabs and newlines?
A: Whitespace spaces, tabs and newlines.
Q: What do you know about Whitespace?
A: Whitespace spaces, tabs and newlines.
Q: Which the separator in split and join?
A: Delimiter the separator in split and join.
Q: What do you know about Delimiter?
A: Delimiter the separator in split and join.
Q: Which to arrange text with placeholders?
A: Format to arrange text with placeholders.
Q: What do you know about Format?
A: Format to arrange text with placeholders.
Q: Which a string with embedded expressions?
A: f-string a string with embedded expressions.
Q: What do you know about f-string?
A: F-string a string with embedded expressions.
Q: What is a string?
A: A sequence of characters enclosed in quotes.
Q: Why are strings immutable?
A: Their contents cannot be changed after creation.
Q: What is the index of the last character?
A: Minus one or length minus one.
Q: What does s[: : -1] do?
A: Reverses the string.
Q: What is the difference between find and index?
A: find gives minus one if absent; index raises an error.
Q: What does split do?
A: Divides a string into a list of words.
Q: What does join do?
A: Combines list items using a separator.
Q: What does strip do?
A: Removes leading and trailing spaces.
Q: What does count do?
A: Counts occurrences of a substring.
Q: What does replace do?
A: Substitutes a substring by another.
Q: How do you check for digits only?
A: Use isdigit.
Q: What does title do?
A: Capitalises the first letter of every word.
Q: What does in operator check?
A: Whether a substring is present.
Q: How are strings compared?
A: By Unicode code values.
Q: What does ord return?
A: The Unicode code point of a character.
Q: What does chr return?
A: The character for a code.
Q: How do you count words?
A: len(s.split()).
@quiz
? Which an immutable sequence of characters?
- Palindrome
- Format
- Step
+ String
! String an immutable sequence of characters.
? Which statement is true of String?
+ An immutable sequence of characters
- Checks letters and digits
- A string with embedded expressions
- Checks the beginning
! String an immutable sequence of characters.
? Which the position of a character?
- split()
- lower()
- replace()
+ Index
! Index the position of a character.
? Which statement is true of Index?
+ The position of a character
- The escape sequence for a new line
- A letter that is not a vowel
- Joins items into a string
! Index the position of a character.
? Which counting from the end?
- find()
- Tab
+ Negative index
- isalpha()
! Negative index counting from the end.
? Which statement is true of Negative index?
+ Counting from the end
- Quotes for multi-line strings
- Replaces a substring
- Checks all uppercase
! Negative index counting from the end.
? Which extracting a part of a string?
+ Slicing
- Tab
- Reverse
- join()
! Slicing extracting a part of a string.
? Which statement is true of Slicing?
- Visiting each character
+ Extracting a part of a string
- A part of a string
- A string reading the same backwards
! Slicing extracting a part of a string.
? Which the stride in a slice?
- strip()
- partition()
+ Step
- Newline
! Step the stride in a slice.
? Which statement is true of Step?
- Visiting each character
- A string ignoring escape sequences
+ The stride in a slice
- Checks the ending
! Step the stride in a slice.
? Which joining strings with plus?
- islower()
- find()
- Substring
+ Concatenation
! Concatenation joining strings with plus.
? Which statement is true of Concatenation?
+ Joining strings with plus
- A letter that is not a vowel
- Checks all uppercase
- Checks the beginning
! Concatenation joining strings with plus.
? Which repeating a string with star?
+ Repetition
- Palindrome
- Delimiter
- Raw string
! Repetition repeating a string with star.
? Which statement is true of Repetition?
- Removes spaces on the right
- Returns the Unicode code of a character
- Returns the index or raises an error
+ Repeating a string with star
! Repetition repeating a string with star.
? Which testing presence using in?
- f-string
+ Membership
- partition()
- Delimiter
! Membership testing presence using in.
? Which statement is true of Membership?
- To arrange text with placeholders
- Swaps the case of letters
- The escape sequence for a tab
+ Testing presence using in
! Membership testing presence using in.
? Which unable to be changed in place?
- Reverse
- Consonant
+ Immutable
- Escape sequence
! Immutable unable to be changed in place.
? Which statement is true of Immutable?
+ Unable to be changed in place
- Testing presence using in
- Extracting a part of a string
- Converts to uppercase
! Immutable unable to be changed in place.
? Which visiting each character?
- Substring
+ Traversal
- strip()
- join()
! Traversal visiting each character.
? Which statement is true of Traversal?
- Upper or lower form of a letter
- Spaces, tabs and newlines
+ Visiting each character
- Converts to lowercase
! Traversal visiting each character.
? Which the function giving the length?
- Traversal
- Palindrome
- Format
+ len()
! Len() the function giving the length.
? Which statement is true of len()?
- Checks all digits
- A part of a string
- Joins items into a string
+ The function giving the length
! Len() the function giving the length.
? Which converts to uppercase?
- ord()
+ upper()
- isalpha()
- len()
! Upper() converts to uppercase.
? Which statement is true of upper()?
- Converts to lowercase
- Replaces a substring
+ Converts to uppercase
- Joining strings with plus
! Upper() converts to uppercase.
? Which converts to lowercase?
+ lower()
- join()
- replace()
- Step
! Lower() converts to lowercase.
? Which statement is true of lower()?
+ Converts to lowercase
- The number of words in text
- The escape sequence for a new line
- The stride in a slice
! Lower() converts to lowercase.
? Which capitalises the first letter of each word?
- Vowel
+ title()
- Whitespace
- f-string
! Title() capitalises the first letter of each word.
? Which statement is true of title()?
+ Capitalises the first letter of each word
- Returns the character of a code
- Joins items into a string
- Upper or lower form of a letter
! Title() capitalises the first letter of each word.
? Which capitalises the first character?
+ capitalize()
- Raw string
- startswith()
- lstrip()
! Capitalize() capitalises the first character.
? Which statement is true of capitalize()?
- Checks letters and digits
- Returns the character of a code
+ Capitalises the first character
- Checks all letters
! Capitalize() capitalises the first character.
? Which swaps the case of letters?
+ swapcase()
- Negative index
- Membership
- replace()
! Swapcase() swaps the case of letters.
? Which statement is true of swapcase()?
- Joins items into a string
- Quotes for multi-line strings
- A string ignoring escape sequences
+ Swaps the case of letters
! Swapcase() swaps the case of letters.
? Which removes spaces from both ends?
- Whitespace
+ strip()
- Word count
- Vowel
! Strip() removes spaces from both ends.
? Which statement is true of strip()?
- Checks all lowercase
- A string reading the same backwards
- Replaces a substring
+ Removes spaces from both ends
! Strip() removes spaces from both ends.
? Which removes spaces on the left?
+ lstrip()
- Negative index
- Concatenation
- Concatenate
! Lstrip() removes spaces on the left.
? Which statement is true of lstrip()?
- Visiting each character
+ Removes spaces on the left
- A string ignoring escape sequences
- A backslash code in a string
! Lstrip() removes spaces on the left.
? Which removes spaces on the right?
+ rstrip()
- isalnum()
- f-string
- ord()
! Rstrip() removes spaces on the right.
? Which statement is true of rstrip()?
- To arrange text with placeholders
- A string ignoring escape sequences
- The escape sequence for a new line
+ Removes spaces on the right
! Rstrip() removes spaces on the right.
? Which returns the index of a substring or minus one?
- capitalize()
- Traversal
+ find()
- Delimiter
! Find() returns the index of a substring or minus one.
? Which statement is true of find()?
- A string reading the same backwards
- Splits a string into a list
- Extracting a part of a string
+ Returns the index of a substring or minus one
! Find() returns the index of a substring or minus one.
? Which returns the index or raises an error?
- title()
- find()
+ index()
- Concatenate
! Index() returns the index or raises an error.
? Which statement is true of index()?
+ Returns the index or raises an error
- The number of words in text
- Swaps the case of letters
- A backslash code in a string
! Index() returns the index or raises an error.
? Which counts occurrences of a substring?
- Membership
- Triple quotes
+ count()
- Delimiter
! Count() counts occurrences of a substring.
? Which statement is true of count()?
- A string with embedded expressions
- Counting from the end
+ Counts occurrences of a substring
- The letters a, e, i, o, u
! Count() counts occurrences of a substring.
? Which replaces a substring?
- find()
+ replace()
- Format
- isdigit()
! Replace() replaces a substring.
? Which statement is true of replace()?
- Checks all lowercase
+ Replaces a substring
- Quotes for multi-line strings
- The position of a character
! Replace() replaces a substring.
? Which splits a string into a list?
+ split()
- ord()
- title()
- isdigit()
! Split() splits a string into a list.
? Which statement is true of split()?
- An immutable sequence of characters
+ Splits a string into a list
- Removes spaces from both ends
- Checks the beginning
! Split() splits a string into a list.
? Which joins items into a string?
+ join()
- Repetition
- Case
- Index
! Join() joins items into a string.
? Which statement is true of join()?
- To reverse the order of characters
+ Joins items into a string
- The number of words in text
- Returns the character of a code
! Join() joins items into a string.
? Which checks the beginning?
- ord()
- isalnum()
+ startswith()
- swapcase()
! Startswith() checks the beginning.
? Which statement is true of startswith()?
- Checks the ending
- The function giving the length
+ Checks the beginning
- The escape sequence for a tab
! Startswith() checks the beginning.
? Which checks the ending?
- Triple quotes
- String
- isalpha()
+ endswith()
! Endswith() checks the ending.
? Which statement is true of endswith()?
- An immutable sequence of characters
- Counting from the end
- To reverse the order of characters
+ Checks the ending
! Endswith() checks the ending.
? Which checks all letters?
+ isalpha()
- rstrip()
- isdigit()
- swapcase()
! Isalpha() checks all letters.
? Which statement is true of isalpha()?
+ Checks all letters
- Replaces a substring
- A string reading the same backwards
- To arrange text with placeholders
! Isalpha() checks all letters.
? Which checks all digits?
+ isdigit()
- startswith()
- Consonant
- title()
! Isdigit() checks all digits.
? Which statement is true of isdigit()?
- The number of words in text
- The separator in split and join
+ Checks all digits
- Spaces, tabs and newlines
! Isdigit() checks all digits.
? Which checks letters and digits?
- Newline
+ isalnum()
- Consonant
- Negative index
! Isalnum() checks letters and digits.
? Which statement is true of isalnum()?
+ Checks letters and digits
- Splits at the first separator into three parts
- The number of words in text
- Counting from the end
! Isalnum() checks letters and digits.
? Which checks all lowercase?
- Vowel
+ islower()
- join()
- replace()
! Islower() checks all lowercase.
? Which statement is true of islower()?
- Returns the index or raises an error
- To reverse the order of characters
- Checks all digits
+ Checks all lowercase
! Islower() checks all lowercase.
? Which checks all uppercase?
- Case
- endswith()
+ isupper()
- Reverse
! Isupper() checks all uppercase.
? Which statement is true of isupper()?
- Extracting a part of a string
- A backslash code in a string
- Splits at the first separator into three parts
+ Checks all uppercase
! Isupper() checks all uppercase.
? Which checks only whitespace?
- Step
+ isspace()
- lstrip()
- len()
! Isspace() checks only whitespace.
? Which statement is true of isspace()?
- Converts to uppercase
- Unable to be changed in place
+ Checks only whitespace
- Capitalises the first character
! Isspace() checks only whitespace.
? Which splits at the first separator into three parts?
- strip()
+ partition()
- isupper()
- Concatenation
! Partition() splits at the first separator into three parts.
? Which statement is true of partition()?
+ Splits at the first separator into three parts
- A string ignoring escape sequences
- Checks only whitespace
- Returns the index of a substring or minus one
! Partition() splits at the first separator into three parts.
? Which returns the Unicode code of a character?
+ ord()
- Traversal
- find()
- Membership
! Ord() returns the Unicode code of a character.
? Which statement is true of ord()?
- Testing presence using in
- Capitalises the first character
+ Returns the Unicode code of a character
- Checks only whitespace
! Ord() returns the Unicode code of a character.
? Which returns the character of a code?
+ chr()
- Vowel
- Word count
- f-string
! Chr() returns the character of a code.
? Which statement is true of chr()?
+ Returns the character of a code
- Returns the Unicode code of a character
- Counts occurrences of a substring
- Checks only whitespace
! Chr() returns the character of a code.
? Which a backslash code in a string?
- find()
+ Escape sequence
- lstrip()
- Delimiter
! Escape sequence a backslash code in a string.
? Which statement is true of Escape sequence?
- Checks only whitespace
- Removes spaces on the left
+ A backslash code in a string
- Capitalises the first letter of each word
! Escape sequence a backslash code in a string.
? Which the escape sequence for a new line?
- Traversal
+ Newline
- startswith()
- Tab
! Newline the escape sequence for a new line.
? Which statement is true of Newline?
- To join end to end
- Testing presence using in
+ The escape sequence for a new line
- Repeating a string with star
! Newline the escape sequence for a new line.
? Which the escape sequence for a tab?
- lower()
- endswith()
+ Tab
- swapcase()
! Tab the escape sequence for a tab.
? Which statement is true of Tab?
- A part of a string
- Quotes for multi-line strings
+ The escape sequence for a tab
- A string ignoring escape sequences
! Tab the escape sequence for a tab.
? Which quotes for multi-line strings?
- String
- Escape sequence
+ Triple quotes
- ord()
! Triple quotes quotes for multi-line strings.
? Which statement is true of Triple quotes?
- A part of a string
- The function giving the length
+ Quotes for multi-line strings
- Returns the index of a substring or minus one
! Triple quotes quotes for multi-line strings.
? Which a string ignoring escape sequences?
- isalpha()
+ Raw string
- Reverse
- Concatenation
! Raw string a string ignoring escape sequences.
? Which statement is true of Raw string?
+ A string ignoring escape sequences
- The escape sequence for a tab
- Testing presence using in
- Unable to be changed in place
! Raw string a string ignoring escape sequences.
? Which a part of a string?
- Triple quotes
- startswith()
- Escape sequence
+ Substring
! Substring a part of a string.
? Which statement is true of Substring?
- Removes spaces on the left
+ A part of a string
- To reverse the order of characters
- The escape sequence for a tab
! Substring a part of a string.
? Which a string reading the same backwards?
- Concatenation
- len()
+ Palindrome
- ord()
! Palindrome a string reading the same backwards.
? Which statement is true of Palindrome?
+ A string reading the same backwards
- Returns the index or raises an error
- Counting from the end
- Unable to be changed in place
! Palindrome a string reading the same backwards.
? Which the letters a, e, i, o, u?
- String
+ Vowel
- Immutable
- index()
! Vowel the letters a, e, i, o, u.
? Which statement is true of Vowel?
- Counts occurrences of a substring
- Checks all letters
- Removes spaces on the right
+ The letters a, e, i, o, u
! Vowel the letters a, e, i, o, u.
? Which a letter that is not a vowel?
+ Consonant
- Index
- lstrip()
- swapcase()
! Consonant a letter that is not a vowel.
? Which statement is true of Consonant?
+ A letter that is not a vowel
- Replaces a substring
- The function giving the length
- The escape sequence for a tab
! Consonant a letter that is not a vowel.
? Which the number of words in text?
- Reverse
- Membership
+ Word count
- chr()
! Word count the number of words in text.
? Which statement is true of Word count?
- Converts to lowercase
- Upper or lower form of a letter
+ The number of words in text
- Counts occurrences of a substring
! Word count the number of words in text.
? Which to join end to end?
- chr()
+ Concatenate
- isalnum()
- strip()
! Concatenate to join end to end.
? Which statement is true of Concatenate?
- The escape sequence for a new line
- Checks the ending
- Spaces, tabs and newlines
+ To join end to end
! Concatenate to join end to end.
? Which to reverse the order of characters?
+ Reverse
- len()
- find()
- capitalize()
! Reverse to reverse the order of characters.
? Which statement is true of Reverse?
- Visiting each character
+ To reverse the order of characters
- Joining strings with plus
- The escape sequence for a new line
! Reverse to reverse the order of characters.
? Which upper or lower form of a letter?
- Delimiter
- split()
+ Case
- Repetition
! Case upper or lower form of a letter.
? Which statement is true of Case?
- The stride in a slice
- Unable to be changed in place
+ Upper or lower form of a letter
- A part of a string
! Case upper or lower form of a letter.
? Which spaces, tabs and newlines?
+ Whitespace
- Index
- swapcase()
- index()
! Whitespace spaces, tabs and newlines.
? Which statement is true of Whitespace?
+ Spaces, tabs and newlines
- A string reading the same backwards
- Unable to be changed in place
- Repeating a string with star
! Whitespace spaces, tabs and newlines.
? Which the separator in split and join?
- lstrip()
- f-string
+ Delimiter
- islower()
! Delimiter the separator in split and join.
? Which statement is true of Delimiter?
- Joins items into a string
- Checks the ending
+ The separator in split and join
- The stride in a slice
! Delimiter the separator in split and join.
? Which to arrange text with placeholders?
+ Format
- isdigit()
- Delimiter
- replace()
! Format to arrange text with placeholders.
? Which statement is true of Format?
- Quotes for multi-line strings
- Checks all letters
+ To arrange text with placeholders
- Removes spaces from both ends
! Format to arrange text with placeholders.
? Which a string with embedded expressions?
- rstrip()
- Consonant
- isdigit()
+ f-string
! F-string a string with embedded expressions.
? Which statement is true of f-string?
- A backslash code in a string
- Splits a string into a list
+ A string with embedded expressions
- Spaces, tabs and newlines
! F-string a string with embedded expressions.
? String is
- Mutable
+ Immutable
- Number
- Boolean
! Sequence.
? s[: : -1] gives
- Same
+ Reverse
- Empty
- Error
! Step -1.
? len("abc") is
+ 3
- 2
- 4
- 0
! Length.
? "a,b".split(",") returns
- String
- Tuple
- Int
+ List
! Parts.
? find missing gives
- 0
+ -1
- Error
- None
! Safe.
? isdigit checks
- Letters
- Spaces
- Symbols
+ Digits
! Numeric.
@visual
blocks | Methods | upper; lower; strip; find; split; join
compare | find and index | find=Returns -1~Safe; index=Raises error~Strict
flow | Slicing | Start; Stop; Step; Result
table | Slice | Expr=s[1:4]/s[::-1]/s[:3]/s[2:]; Result=ELL/OLLEH/HEL/LLO
mind | Strings | Indexing; Slicing; Methods; Programs
steps | Palindrome | Read string; Reverse; Compare; Print
cycle | Traversal | Take char; Test; Count; Next
@problems
## Moderate
P: For s = "PYTHON", write s[1:4], s[-2:], s[: : -1] and len(s).
A: YTH, ON, NOHTYP, 6.
R: 3 | Four results
R: 1 | Clear presentation and correct terms
## High
P: Write a program to count the vowels in a string.
A: count = 0; for ch in s: if ch in "aeiouAEIOU": count += 1; print(count).
R: 2 | Loop
R: 2 | Condition
R: 2 | Counter
R: 2 | Output
## Advanced
P: Write a program to check a palindrome and capitalise each word of a sentence.
A: s == s[: : -1]; sentence.title() or " ".join(w.capitalize() for w in s.split()).
R: 2 | Palindrome
R: 2 | Capitalise
R: 2 | Slicing
R: 2 | Methods
