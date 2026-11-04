# File Handling
minutes: 45
yt: class 12 computer science python file handling text binary csv pickle seek tell
@study
Files store data permanently on secondary storage. Python handles text files (lines of characters ending with newline), binary files (bytes, such as images and pickled objects) and CSV files (comma separated values). open(filename, mode) returns a file object. Text modes: r (read, error if missing), w (write, creates or truncates), a (append), r+ (read and write), w+ and a+. Add b for binary: rb, wb, ab. The with statement closes the file automatically. Methods: read(n) reads n characters or the whole file, readline() reads one line, readlines() returns a list of lines, write(string), writelines(list) and close(). Newline characters must be added manually in write. File pointer: tell() returns the current position and seek(offset, whence) moves it; whence 0 is start, 1 current and 2 end. Binary files use the pickle module: pickle.dump(obj, file) writes and pickle.load(file) reads, raising EOFError at the end; the file must be opened in binary mode. Updating a binary record means reading all, modifying and writing back, or seeking to the record position. CSV uses the csv module: csv.reader(file) iterates rows as lists; csv.writer(file) with writerow and writerows; the newline="" argument avoids blank lines on Windows; delimiter can be changed. Absolute path starts at the root; relative path is from the current directory. Using os.path functions such as exists and getsize helps. Text files translate end-of-line characters, binary do not. Typical tasks: counting words, lines, vowels, copying selected lines, searching a record, and updating a record.
## Deep dive: Modes
r, w, a and r+ differ in whether the file must exist and whether content is erased. Add b for binary.
## Deep dive: Pointer
tell() reports and seek() moves the file pointer, enabling random access.
## Deep dive: Binary and CSV
pickle stores Python objects as bytes; csv reads and writes rows of text.
## Hindi saransh
Fail sanchalan: text, binary aur CSV file, open ke mode, seek aur tell, pickle.
> Remember: mode w erases an existing file; mode a keeps it and adds at the end.
@formulas
## Key facts
r | Read | File must exist
w | Write | Truncates
a | Append | End
tell | Position
seek | Move pointer

@qa
Q: Which stores data permanently?
A: File stores data permanently.
Q: What do you know about File?
A: File stores data permanently.
Q: Which stores characters?
A: Text file stores characters.
Q: What do you know about Text file?
A: Text file stores characters.
Q: Which stores bytes?
A: Binary file stores bytes.
Q: What do you know about Binary file?
A: Binary file stores bytes.
Q: Which stores comma separated values?
A: CSV file stores comma separated values.
Q: What do you know about CSV file?
A: CSV file stores comma separated values.
Q: Which returns a file object?
A: Open function returns a file object.
Q: What do you know about Open function?
A: Open function returns a file object.
Q: Which closes the file automatically?
A: With statement closes the file automatically.
Q: What do you know about With statement?
A: With statement closes the file automatically.
Q: Which starts from the root?
A: Absolute path starts from the root.
Q: What do you know about Absolute path?
A: Absolute path starts from the root.
Q: Which is relative to the current directory?
A: Relative path is relative to the current directory.
Q: What do you know about Relative path?
A: Relative path is relative to the current directory.
Q: Which needs an existing file?
A: Read mode needs an existing file.
Q: What do you know about Read mode?
A: Read mode needs an existing file.
Q: Which truncates an existing file?
A: Write mode truncates an existing file.
Q: What do you know about Write mode?
A: Write mode truncates an existing file.
Q: Which creates a file if missing?
A: Write mode creates a file if missing.
Q: Which writes at the end?
A: Append mode writes at the end.
Q: What do you know about Append mode?
A: Append mode writes at the end.
Q: Which allows both reading and writing?
A: Plus mode allows both reading and writing.
Q: What do you know about Plus mode?
A: Plus mode allows both reading and writing.
Q: Which adds the letter b?
A: Binary mode adds the letter b.
Q: What do you know about Binary mode?
A: Binary mode adds the letter b.
Q: Which returns file content as a string?
A: Read method returns file content as a string.
Q: What do you know about Read method?
A: Read method returns file content as a string.
Q: Which reads one line?
A: Readline reads one line.
Q: What do you know about Readline?
A: Readline reads one line.
Q: Which returns a list of lines?
A: Readlines returns a list of lines.
Q: What do you know about Readlines?
A: Readlines returns a list of lines.
Q: Which writes a string?
A: Write writes a string.
Q: What do you know about Write?
A: Write writes a string.
Q: Which writes a list of strings?
A: Writelines writes a list of strings.
Q: What do you know about Writelines?
A: Writelines writes a list of strings.
Q: Which must be added manually when writing?
A: Newline must be added manually when writing.
Q: What do you know about Newline?
A: Newline must be added manually when writing.
Q: Which releases the file?
A: Close releases the file.
Q: What do you know about Close?
A: Close releases the file.
Q: Which returns the pointer position?
A: Tell returns the pointer position.
Q: What do you know about Tell?
A: Tell returns the pointer position.
Q: Which moves the file pointer?
A: Seek moves the file pointer.
Q: What do you know about Seek?
A: Seek moves the file pointer.
Q: Which means from the start?
A: Seek whence zero means from the start.
Q: What do you know about Seek whence zero?
A: Seek whence zero means from the start.
Q: Which means from the end?
A: Seek whence two means from the end.
Q: What do you know about Seek whence two?
A: Seek whence two means from the end.
Q: Which serialises Python objects?
A: Pickle serialises Python objects.
Q: What do you know about Pickle?
A: Pickle serialises Python objects.
Q: Which writes an object?
A: Pickle dump writes an object.
Q: What do you know about Pickle dump?
A: Pickle dump writes an object.
Q: Which reads an object?
A: Pickle load reads an object.
Q: What do you know about Pickle load?
A: Pickle load reads an object.
Q: Which raises EOFError?
A: Pickle load at end raises EOFError.
Q: What do you know about Pickle load at end?
A: Pickle load at end raises EOFError.
Q: Which needs binary mode?
A: Pickling needs binary mode.
Q: What do you know about Pickling?
A: Pickling needs binary mode.
Q: Which yields rows as lists?
A: CSV reader yields rows as lists.
Q: What do you know about CSV reader?
A: CSV reader yields rows as lists.
Q: Which writes rows with writerow?
A: CSV writer writes rows with writerow.
Q: What do you know about CSV writer?
A: CSV writer writes rows with writerow.
Q: Which writes many rows?
A: Writerows writes many rows.
Q: What do you know about Writerows?
A: Writerows writes many rows.
Q: Which avoids blank lines in csv output?
A: Newline empty string avoids blank lines in csv output.
Q: What do you know about Newline empty string?
A: Newline empty string avoids blank lines in csv output.
Q: Which separates fields in a csv?
A: Delimiter separates fields in a csv.
Q: What do you know about Delimiter?
A: Delimiter separates fields in a csv.
Q: Which checks whether a file exists?
A: Os path exists checks whether a file exists.
Q: What do you know about Os path exists?
A: Os path exists checks whether a file exists.
Q: Which converts objects to a byte stream?
A: Serialisation converts objects to a byte stream.
Q: What do you know about Serialisation?
A: Serialisation converts objects to a byte stream.
Q: Which is a newline character?
A: Text file line ending is a newline character.
Q: What do you know about Text file line ending?
A: Text file line ending is a newline character.
Q: Which is not human readable?
A: Binary file is not human readable.
Q: Which is the purpose of files?
A: Data persistence is the purpose of files.
Q: What do you know about Data persistence?
A: Data persistence is the purpose of files.
Q: Which holds files permanently?
A: Secondary storage holds files permanently.
Q: What do you know about Secondary storage?
A: Secondary storage holds files permanently.
Q: Which is also called a file handle?
A: File object is also called a file handle.
Q: What do you know about File object?
A: File object is also called a file handle.
Q: Which reads that many characters?
A: Read with size reads that many characters.
Q: What do you know about Read with size?
A: Read with size reads that many characters.
Q: Which returns an empty string?
A: Reading beyond end returns an empty string.
Q: What do you know about Reading beyond end?
A: Reading beyond end returns an empty string.
Q: What do you know about Readline at end?
A: Readline at end returns an empty string.
Q: Which gives one line at a time?
A: Iterating a file gives one line at a time.
Q: What do you know about Iterating a file?
A: Iterating a file gives one line at a time.
Q: Which is the number of characters written?
A: Write return value is the number of characters written.
Q: What do you know about Write return value?
A: Write return value is the number of characters written.
Q: Which flushes buffered data?
A: Close flushes buffered data.
Q: Which may lose buffered data?
A: Unclosed file may lose buffered data.
Q: What do you know about Unclosed file?
A: Unclosed file may lose buffered data.
Q: Which returns to the start?
A: Seek zero zero returns to the start.
Q: What do you know about Seek zero zero?
A: Seek zero zero returns to the start.
Q: Which gives zero in read mode?
A: Tell after open gives zero in read mode.
Q: What do you know about Tell after open?
A: Tell after open gives zero in read mode.
Q: Which starts at the end?
A: Append mode tell starts at the end.
Q: What do you know about Append mode tell?
A: Append mode tell starts at the end.
Q: Which is often dat?
A: Pickle file extension is often dat.
Q: What do you know about Pickle file extension?
A: Pickle file extension is often dat.
Q: Which is csv?
A: CSV extension is csv.
Q: What do you know about CSV extension?
A: CSV extension is csv.
Q: Which names the columns?
A: CSV header row names the columns.
Q: What do you know about CSV header row?
A: CSV header row names the columns.
Q: Which is iterable?
A: Reader object is iterable.
Q: What do you know about Reader object?
A: Reader object is iterable.
Q: Which writes a row at a time?
A: Writer object writes a row at a time.
Q: What do you know about Writer object?
A: Writer object writes a row at a time.
Q: Which needs rewriting the record?
A: Record update in binary needs rewriting the record.
Q: What do you know about Record update in binary?
A: Record update in binary needs rewriting the record.
Q: Which loads records in a loop?
A: Searching a binary file loads records in a loop.
Q: What do you know about Searching a binary file?
A: Searching a binary file loads records in a loop.
Q: Which uses ab mode?
A: Appending to binary file uses ab mode.
Q: What do you know about Appending to binary file?
A: Appending to binary file uses ab mode.
Q: Which enable random access?
A: Tell and seek enable random access.
Q: What do you know about Tell and seek?
A: Tell and seek enable random access.
Q: Which gives file system functions?
A: Os module gives file system functions.
Q: What do you know about Os module?
A: Os module gives file system functions.
Q: Which returns file size in bytes?
A: Getsize returns file size in bytes.
Q: What do you know about Getsize?
A: Getsize returns file size in bytes.
Q: Which deletes a file?
A: Remove deletes a file.
Q: What do you know about Remove?
A: Remove deletes a file.
Q: Which changes a file name?
A: Rename changes a file name.
Q: What do you know about Rename?
A: Rename changes a file name.
Q: Which maps characters to bytes?
A: Encoding maps characters to bytes.
Q: What do you know about Encoding?
A: Encoding maps characters to bytes.
Q: Which is a common text encoding?
A: UTF 8 is a common text encoding.
Q: What do you know about UTF 8?
A: UTF 8 is a common text encoding.
Q: What is a text file?
A: A file of characters organised in lines.
Q: What does open() return?
A: A file object.
Q: What is the use of seek()?
A: To move the file pointer.
Q: What does tell() return?
A: The current file pointer position.
Q: What is pickling?
A: Converting a Python object into a byte stream.
Q: What is a CSV file?
A: A text file of values separated by commas.
Q: What does mode a do?
A: Opens for appending at the end.
Q: What happens in mode w on an existing file?
A: Its content is erased.
@quiz
? Which stores data permanently?
- Relative path
- Binary file
- CSV file
+ File
! File stores data permanently.
? Which statement is true of File?
- Is relative to the current directory
- Returns a file object
+ Stores data permanently
- Starts from the root
! File stores data permanently.
? Which stores characters?
- Absolute path
- Binary file
- File
+ Text file
! Text file stores characters.
? Which statement is true of Text file?
- Returns a file object
- Stores data permanently
- Stores comma separated values
+ Stores characters
! Text file stores characters.
? Which stores bytes?
- With statement
- Open function
+ Binary file
- CSV file
! Binary file stores bytes.
? Which statement is true of Binary file?
- Starts from the root
- Returns a file object
- Is relative to the current directory
+ Stores bytes
! Binary file stores bytes.
? Which stores comma separated values?
- File
+ CSV file
- Open function
- Binary file
! CSV file stores comma separated values.
? Which statement is true of CSV file?
- Stores data permanently
- Closes the file automatically
- Starts from the root
+ Stores comma separated values
! CSV file stores comma separated values.
? Which returns a file object?
- Binary file
+ Open function
- File
- CSV file
! Open function returns a file object.
? Which statement is true of Open function?
- Closes the file automatically
- Stores data permanently
+ Returns a file object
- Stores comma separated values
! Open function returns a file object.
? Which closes the file automatically?
- Text file
+ With statement
- Open function
- Relative path
! With statement closes the file automatically.
? Which statement is true of With statement?
- Starts from the root
- Stores bytes
- Stores characters
+ Closes the file automatically
! With statement closes the file automatically.
? Which starts from the root?
- CSV file
+ Absolute path
- File
- Relative path
! Absolute path starts from the root.
? Which statement is true of Absolute path?
- Stores bytes
- Returns a file object
- Stores comma separated values
+ Starts from the root
! Absolute path starts from the root.
? Which is relative to the current directory?
- Open function
- Absolute path
+ Relative path
- CSV file
! Relative path is relative to the current directory.
? Which statement is true of Relative path?
- Stores bytes
- Stores comma separated values
+ Is relative to the current directory
- Stores data permanently
! Relative path is relative to the current directory.
? Which needs an existing file?
- Binary mode
- Append mode
+ Read mode
- Plus mode
! Read mode needs an existing file.
? Which statement is true of Read mode?
+ Needs an existing file
- Adds the letter b
- Allows both reading and writing
- Truncates an existing file
! Read mode needs an existing file.
? Which truncates an existing file?
+ Write mode
- Plus mode
- Append mode
- Read mode
! Write mode truncates an existing file.
? Which statement is true of Write mode?
- Writes at the end
- Needs an existing file
+ Truncates an existing file
- Adds the letter b
! Write mode truncates an existing file.
? Which creates a file if missing?
- Append mode
- Plus mode
+ Write mode
- Binary mode
! Write mode creates a file if missing.
? Which writes at the end?
+ Append mode
- Read mode
- Binary mode
- Plus mode
! Append mode writes at the end.
? Which statement is true of Append mode?
+ Writes at the end
- Adds the letter b
- Truncates an existing file
- Needs an existing file
! Append mode writes at the end.
? Which allows both reading and writing?
- Append mode
+ Plus mode
- Write mode
- Read mode
! Plus mode allows both reading and writing.
? Which statement is true of Plus mode?
- Creates a file if missing
- Truncates an existing file
+ Allows both reading and writing
- Adds the letter b
! Plus mode allows both reading and writing.
? Which adds the letter b?
- Write mode
+ Binary mode
- Plus mode
- Append mode
! Binary mode adds the letter b.
? Which statement is true of Binary mode?
- Needs an existing file
+ Adds the letter b
- Writes at the end
- Creates a file if missing
! Binary mode adds the letter b.
? Which returns file content as a string?
- Readline
+ Read method
- Seek whence zero
- Seek whence two
! Read method returns file content as a string.
? Which statement is true of Read method?
- Means from the end
- Writes a string
- Reads one line
+ Returns file content as a string
! Read method returns file content as a string.
? Which reads one line?
- Seek
- Seek whence two
+ Readline
- Readlines
! Readline reads one line.
? Which statement is true of Readline?
- Moves the file pointer
+ Reads one line
- Returns the pointer position
- Writes a list of strings
! Readline reads one line.
? Which returns a list of lines?
+ Readlines
- Write
- Close
- Readline
! Readlines returns a list of lines.
? Which statement is true of Readlines?
- Returns file content as a string
- Reads one line
+ Returns a list of lines
- Returns the pointer position
! Readlines returns a list of lines.
? Which writes a string?
+ Write
- Close
- Writelines
- Newline
! Write writes a string.
? Which statement is true of Write?
- Writes a list of strings
- Moves the file pointer
+ Writes a string
- Reads one line
! Write writes a string.
? Which writes a list of strings?
+ Writelines
- Seek whence two
- Seek whence zero
- Seek
! Writelines writes a list of strings.
? Which statement is true of Writelines?
- Means from the end
- Reads one line
+ Writes a list of strings
- Returns the pointer position
! Writelines writes a list of strings.
? Which must be added manually when writing?
- Read method
- Seek whence two
- Writelines
+ Newline
! Newline must be added manually when writing.
? Which statement is true of Newline?
- Writes a list of strings
- Returns a list of lines
- Returns file content as a string
+ Must be added manually when writing
! Newline must be added manually when writing.
? Which releases the file?
- Seek
- Readlines
- Newline
+ Close
! Close releases the file.
? Which statement is true of Close?
- Returns the pointer position
- Returns a list of lines
- Means from the end
+ Releases the file
! Close releases the file.
? Which returns the pointer position?
+ Tell
- Newline
- Readline
- Write
! Tell returns the pointer position.
? Which statement is true of Tell?
- Writes a string
+ Returns the pointer position
- Writes a list of strings
- Must be added manually when writing
! Tell returns the pointer position.
? Which moves the file pointer?
- Seek whence zero
- Readlines
+ Seek
- Tell
! Seek moves the file pointer.
? Which statement is true of Seek?
- Means from the end
- Returns a list of lines
+ Moves the file pointer
- Releases the file
! Seek moves the file pointer.
? Which means from the start?
- Newline
- Seek
- Write
+ Seek whence zero
! Seek whence zero means from the start.
? Which statement is true of Seek whence zero?
- Writes a string
- Releases the file
+ Means from the start
- Moves the file pointer
! Seek whence zero means from the start.
? Which means from the end?
- Seek
+ Seek whence two
- Readline
- Close
! Seek whence two means from the end.
? Which statement is true of Seek whence two?
- Writes a list of strings
- Moves the file pointer
- Returns the pointer position
+ Means from the end
! Seek whence two means from the end.
? Which serialises Python objects?
- Remove
+ Pickle
- Pickling
- Tell and seek
! Pickle serialises Python objects.
? Which statement is true of Pickle?
+ Serialises Python objects
- Is the purpose of files
- Writes many rows
- Gives one line at a time
! Pickle serialises Python objects.
? Which writes an object?
- Writerows
- Pickle load
+ Pickle dump
- UTF 8
! Pickle dump writes an object.
? Which statement is true of Pickle dump?
- Names the columns
- Is the number of characters written
- Is also called a file handle
+ Writes an object
! Pickle dump writes an object.
? Which reads an object?
- Pickle load at end
+ Pickle load
- Pickle
- Read with size
! Pickle load reads an object.
? Which statement is true of Pickle load?
- Is the number of characters written
+ Reads an object
- Raises EOFError
- Changes a file name
! Pickle load reads an object.
? Which raises EOFError?
- CSV header row
- Getsize
- Encoding
+ Pickle load at end
! Pickle load at end raises EOFError.
? Which statement is true of Pickle load at end?
- Returns an empty string
+ Raises EOFError
- Avoids blank lines in csv output
- Is csv
! Pickle load at end raises EOFError.
? Which needs binary mode?
- Tell and seek
- Pickle file extension
- Readline at end
+ Pickling
! Pickling needs binary mode.
? Which statement is true of Pickling?
- Raises EOFError
+ Needs binary mode
- Yields rows as lists
- Maps characters to bytes
! Pickling needs binary mode.
? Which yields rows as lists?
+ CSV reader
- Serialisation
- CSV header row
- Read with size
! CSV reader yields rows as lists.
? Which statement is true of CSV reader?
- Writes rows with writerow
- Gives one line at a time
- Writes an object
+ Yields rows as lists
! CSV reader yields rows as lists.
? Which writes rows with writerow?
- Reader object
+ CSV writer
- Remove
- Write return value
! CSV writer writes rows with writerow.
? Which statement is true of CSV writer?
+ Writes rows with writerow
- Loads records in a loop
- Is the number of characters written
- Returns an empty string
! CSV writer writes rows with writerow.
? Which writes many rows?
- Pickling
- Remove
+ Writerows
- Writer object
! Writerows writes many rows.
? Which statement is true of Writerows?
- Gives file system functions
+ Writes many rows
- Converts objects to a byte stream
- Deletes a file
! Writerows writes many rows.
? Which avoids blank lines in csv output?
- Pickling
+ Newline empty string
- Searching a binary file
- UTF 8
! Newline empty string avoids blank lines in csv output.
? Which statement is true of Newline empty string?
- Raises EOFError
+ Avoids blank lines in csv output
- Deletes a file
- Names the columns
! Newline empty string avoids blank lines in csv output.
? Which separates fields in a csv?
- Searching a binary file
+ Delimiter
- CSV extension
- Tell and seek
! Delimiter separates fields in a csv.
? Which statement is true of Delimiter?
- Writes an object
+ Separates fields in a csv
- Is often dat
- Is the purpose of files
! Delimiter separates fields in a csv.
? Which checks whether a file exists?
- Getsize
+ Os path exists
- Writer object
- Data persistence
! Os path exists checks whether a file exists.
? Which statement is true of Os path exists?
- Needs binary mode
- Deletes a file
- May lose buffered data
+ Checks whether a file exists
! Os path exists checks whether a file exists.
? Which converts objects to a byte stream?
- Tell and seek
- Write return value
- Newline empty string
+ Serialisation
! Serialisation converts objects to a byte stream.
? Which statement is true of Serialisation?
+ Converts objects to a byte stream
- Is the purpose of files
- Separates fields in a csv
- Needs binary mode
! Serialisation converts objects to a byte stream.
? Which is a newline character?
- CSV reader
- Newline empty string
- Serialisation
+ Text file line ending
! Text file line ending is a newline character.
? Which statement is true of Text file line ending?
+ Is a newline character
- Converts objects to a byte stream
- May lose buffered data
- Gives file system functions
! Text file line ending is a newline character.
? Which is not human readable?
- Writer object
- Record update in binary
+ Binary file
- Pickle dump
! Binary file is not human readable.
? Which is the purpose of files?
- Close
- Rename
+ Data persistence
- CSV writer
! Data persistence is the purpose of files.
? Which statement is true of Data persistence?
- Uses ab mode
+ Is the purpose of files
- Gives one line at a time
- Changes a file name
! Data persistence is the purpose of files.
? Which holds files permanently?
+ Secondary storage
- Reader object
- Text file line ending
- Tell and seek
! Secondary storage holds files permanently.
? Which statement is true of Secondary storage?
- Is not human readable
+ Holds files permanently
- Changes a file name
- Deletes a file
! Secondary storage holds files permanently.
? Which is also called a file handle?
+ File object
- Newline empty string
- Pickle file extension
- Close
! File object is also called a file handle.
? Which statement is true of File object?
- Names the columns
- Enable random access
+ Is also called a file handle
- Is the number of characters written
! File object is also called a file handle.
? Which reads that many characters?
+ Read with size
- CSV extension
- Pickle dump
- CSV header row
! Read with size reads that many characters.
? Which statement is true of Read with size?
- Is the purpose of files
- Separates fields in a csv
+ Reads that many characters
- Loads records in a loop
! Read with size reads that many characters.
? Which returns an empty string?
+ Reading beyond end
- Serialisation
- File object
- Pickle load at end
! Reading beyond end returns an empty string.
? Which statement is true of Reading beyond end?
+ Returns an empty string
- Is a newline character
- Is csv
- Changes a file name
! Reading beyond end returns an empty string.
? Which statement is true of Readline at end?
- Writes a row at a time
- Changes a file name
+ Returns an empty string
- Flushes buffered data
! Readline at end returns an empty string.
? Which gives one line at a time?
- Pickle file extension
- Close
- Binary file
+ Iterating a file
! Iterating a file gives one line at a time.
? Which statement is true of Iterating a file?
+ Gives one line at a time
- Loads records in a loop
- Is also called a file handle
- Changes a file name
! Iterating a file gives one line at a time.
? Which is the number of characters written?
+ Write return value
- Getsize
- Remove
- Delimiter
! Write return value is the number of characters written.
? Which statement is true of Write return value?
- Maps characters to bytes
- Is often dat
+ Is the number of characters written
- Returns file size in bytes
! Write return value is the number of characters written.
? Which flushes buffered data?
+ Close
- Seek zero zero
- Read with size
- Pickling
! Close flushes buffered data.
? Which may lose buffered data?
+ Unclosed file
- Tell and seek
- Reading beyond end
- Seek zero zero
! Unclosed file may lose buffered data.
? Which statement is true of Unclosed file?
- Needs rewriting the record
+ May lose buffered data
- Converts objects to a byte stream
- Writes a row at a time
! Unclosed file may lose buffered data.
? Which returns to the start?
- Serialisation
- Text file line ending
+ Seek zero zero
- Appending to binary file
! Seek zero zero returns to the start.
? Which statement is true of Seek zero zero?
- Gives zero in read mode
- Gives file system functions
- Flushes buffered data
+ Returns to the start
! Seek zero zero returns to the start.
? Which gives zero in read mode?
- Pickling
- Pickle load
+ Tell after open
- File object
! Tell after open gives zero in read mode.
? Which statement is true of Tell after open?
- Deletes a file
- Needs rewriting the record
- Flushes buffered data
+ Gives zero in read mode
! Tell after open gives zero in read mode.
? Which starts at the end?
+ Append mode tell
- Reading beyond end
- Record update in binary
- Appending to binary file
! Append mode tell starts at the end.
? Which statement is true of Append mode tell?
- Gives one line at a time
- Gives file system functions
- Holds files permanently
+ Starts at the end
! Append mode tell starts at the end.
? Which is often dat?
+ Pickle file extension
- Secondary storage
- Encoding
- Newline empty string
! Pickle file extension is often dat.
? Which statement is true of Pickle file extension?
- Checks whether a file exists
- Gives one line at a time
+ Is often dat
- Returns an empty string
! Pickle file extension is often dat.
? Which is csv?
- Record update in binary
- Pickle load at end
+ CSV extension
- Append mode tell
! CSV extension is csv.
? Which statement is true of CSV extension?
- Deletes a file
- Is a newline character
- Returns file size in bytes
+ Is csv
! CSV extension is csv.
? Which names the columns?
+ CSV header row
- Readline at end
- Close
- Newline empty string
! CSV header row names the columns.
? Which statement is true of CSV header row?
- Gives file system functions
- Is iterable
+ Names the columns
- Is the number of characters written
! CSV header row names the columns.
? Which is iterable?
- Append mode tell
- File object
+ Reader object
- Write return value
! Reader object is iterable.
? Which statement is true of Reader object?
+ Is iterable
- Reads that many characters
- Changes a file name
- Gives one line at a time
! Reader object is iterable.
? Which writes a row at a time?
- Write return value
+ Writer object
- Remove
- Reader object
! Writer object writes a row at a time.
? Which statement is true of Writer object?
- Is csv
+ Writes a row at a time
- Deletes a file
- Is also called a file handle
! Writer object writes a row at a time.
? Which needs rewriting the record?
+ Record update in binary
- Getsize
- Unclosed file
- Data persistence
! Record update in binary needs rewriting the record.
? Which statement is true of Record update in binary?
+ Needs rewriting the record
- Gives file system functions
- Is often dat
- Names the columns
! Record update in binary needs rewriting the record.
? Which loads records in a loop?
- CSV writer
+ Searching a binary file
- Pickle
- Close
! Searching a binary file loads records in a loop.
? Which statement is true of Searching a binary file?
+ Loads records in a loop
- Deletes a file
- Gives file system functions
- Gives one line at a time
! Searching a binary file loads records in a loop.
? Which uses ab mode?
- Encoding
- UTF 8
+ Appending to binary file
- Iterating a file
! Appending to binary file uses ab mode.
? Which statement is true of Appending to binary file?
- Names the columns
- Writes an object
- Checks whether a file exists
+ Uses ab mode
! Appending to binary file uses ab mode.
? Which enable random access?
- Pickle load at end
- Os module
- Searching a binary file
+ Tell and seek
! Tell and seek enable random access.
? Which statement is true of Tell and seek?
- Writes many rows
- Reads an object
- Is the number of characters written
+ Enable random access
! Tell and seek enable random access.
? Which gives file system functions?
- Rename
- Pickle
+ Os module
- Data persistence
! Os module gives file system functions.
? Which statement is true of Os module?
+ Gives file system functions
- Starts at the end
- Gives one line at a time
- Loads records in a loop
! Os module gives file system functions.
? Which returns file size in bytes?
- Appending to binary file
- Encoding
- Pickle load
+ Getsize
! Getsize returns file size in bytes.
? Which statement is true of Getsize?
- Is iterable
- Flushes buffered data
- Writes an object
+ Returns file size in bytes
! Getsize returns file size in bytes.
? Which deletes a file?
+ Remove
- Pickling
- Os module
- Pickle load
! Remove deletes a file.
? Which statement is true of Remove?
- Returns to the start
- Names the columns
+ Deletes a file
- Is a newline character
! Remove deletes a file.
? Which changes a file name?
- Os path exists
- CSV extension
- Pickling
+ Rename
! Rename changes a file name.
? Which statement is true of Rename?
- Is also called a file handle
- Writes an object
+ Changes a file name
- Gives zero in read mode
! Rename changes a file name.
? Which maps characters to bytes?
- Delimiter
- Read with size
+ Encoding
- File object
! Encoding maps characters to bytes.
? Which statement is true of Encoding?
- Writes a row at a time
+ Maps characters to bytes
- Writes an object
- Is a common text encoding
! Encoding maps characters to bytes.
? Which is a common text encoding?
- Unclosed file
+ UTF 8
- Encoding
- Pickle load
! UTF 8 is a common text encoding.
? Which statement is true of UTF 8?
- Avoids blank lines in csv output
+ Is a common text encoding
- Maps characters to bytes
- Writes many rows
! UTF 8 is a common text encoding.
? Position
- seek
- read
- open
+ tell
! Method.
? Pickle mode
- w
- a
- r
+ wb
! Mode.
? CSV row
+ writerow
- write
- dump
- seek
! Method.
? Appending
- w
- r
+ a
- x
! Mode.
? End of pickle
- KeyError
+ EOFError
- IOError
- NameError
! Error.
? Auto close
- try
+ with
- def
- for
! Statement.
@visual
compare | Text and binary file | Text=Characters~Newline translation; Binary=Bytes~Pickle
blocks | Modes | r; w; a; r+
flow | Read file | open; read; process; close
mind | File handling | Text; Binary; CSV; Pointer
steps | Pickle update | Load records; Modify; Seek start; Dump
@problems
## Moderate
P: What is the difference between w and a?
A: w truncates an existing file; a appends at the end without erasing.
R: 3 | w erases
R: 3 | a appends
## High
P: Why use the with statement?
A: It closes the file automatically even if an error occurs.
R: 2 | Auto close
R: 2 | Error safe
R: 2 | Cleaner
R: 2 | Example
## Advanced
P: Write code to count lines in a text file.
A: with open(name) as f: print(len(f.readlines())) or loop counting lines.
R: 2 | open
R: 2 | read lines
R: 2 | count
R: 2 | close
