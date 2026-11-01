# Electronic spreadsheet
minutes: 40
yt: class 9 electronic spreadsheet
@study
An electronic spreadsheet (MS Excel, LibreOffice Calc, Google Sheets) arranges data in rows and columns. Rows are numbered, columns are lettered and a cell address such as B3 joins them. A formula starts with = and uses cell references and operators. Common functions: SUM, AVERAGE, MAX, MIN, COUNT and IF. Cell references can be relative (A1), absolute ($A$1) or mixed. Charts show data visually.
## Deep dive: the spreadsheet window
A workbook contains worksheets (sheets). A sheet has rows (1, 2, 3 ...) and columns (A, B, C ...). The intersection of a row and column is a cell with an address such as C5. The active cell is the one selected. The name box shows the address and the formula bar shows the content. A range is a group of cells written as first:last, for example A1:C4 (3 columns x 4 rows = 12 cells). Data types: text, number, date and formula.
## Deep dive: formulas and operators
Every formula starts with =. Arithmetic operators: + addition, - subtraction, * multiplication, / division and ^ power. Brackets change the order: BODMAS applies. Example: =B2*C2 multiplies two cells; =(A1+A2)/2 finds an average. Cell references in formulas update automatically when data changes. A relative reference changes when the formula is copied; an absolute reference ($A$1) does not; a mixed reference ($A1 or A$1) fixes only the column or row.
## Deep dive: functions
SUM(range) adds numbers; AVERAGE(range) gives the mean; MAX(range) the largest; MIN(range) the smallest; COUNT(range) the number of numeric cells; COUNTA counts non-empty cells; IF(condition, value_if_true, value_if_false) makes a decision, for example =IF(B2>=33,"Pass","Fail"). ROUND(number, digits) rounds a value. Errors: #DIV/0! (division by zero), #NAME? (wrong function name), #REF! (invalid reference), #VALUE! (wrong type of value).
## Deep dive: formatting, sorting and charts
Format cells: number formats (currency, percent, date), fonts, borders, colours, merge and centre. Sort data ascending (A to Z, small to large) or descending. Filter shows only rows that match a condition. Charts: column or bar (compare), line (trend over time), pie (parts of a whole). A chart has a title, axes, labels, legend and data series. Freeze panes keep headings visible while scrolling.
## Hindi saransh
Spreadsheet: rows, columns, cells. Formula = se shuru hota hai. =SUM(A1:A5).
> A formula always starts with =. A range is written like A1:A5.
@formulas
## Functions
Add numbers | =SUM(A1:A5) | 
Mean | =AVERAGE(A1:A5) | 
Largest | =MAX(A1:A5) | 
Smallest | =MIN(A1:A5) | 
Count numbers | =COUNT(A1:A5) | 
Decision | =IF(B2>=33,"Pass","Fail") | 
## References
Relative | A1 | changes when copied
Absolute | $A$1 | fixed
Mixed | $A1 or A$1 | one part fixed

@qa
Q: What is meant by Spreadsheet?
A: Software that arranges data in rows and columns and does calculations.
Q: What is meant by Workbook?
A: A spreadsheet file that contains one or more sheets.
Q: What is meant by Worksheet?
A: A single page of rows and columns in a workbook.
Q: What is meant by Row?
A: A horizontal line of cells identified by a number.
Q: What is meant by Column?
A: A vertical line of cells identified by a letter.
Q: What is meant by Cell?
A: The box where a row and a column meet.
Q: What is meant by Cell address?
A: The column letter and row number of a cell such as B3.
Q: What is meant by Active cell?
A: The cell that is currently selected.
Q: What is meant by Range?
A: A group of cells such as A1:A5.
Q: What is meant by Name box?
A: The box that shows the address of the active cell.
Q: What is meant by Formula bar?
A: The bar that shows the content of the active cell.
Q: What is meant by Formula?
A: An expression that starts with = and calculates a value.
Q: What is meant by Function?
A: A ready-made formula such as SUM.
Q: What is meant by SUM?
A: The function that adds the numbers in a range.
Q: What is meant by AVERAGE?
A: The function that finds the mean of the numbers in a range.
Q: What is meant by MAX?
A: The function that returns the largest value in a range.
Q: What is meant by MIN?
A: The function that returns the smallest value in a range.
Q: What is meant by COUNT?
A: The function that counts the cells containing numbers.
Q: What is meant by COUNTA?
A: The function that counts the cells that are not empty.
Q: What is meant by IF?
A: The function that returns one value if a condition is true and another if false.
Q: What is meant by ROUND?
A: The function that rounds a number to the given digits.
Q: What is meant by Relative reference?
A: A cell reference that changes when a formula is copied.
Q: What is meant by Absolute reference?
A: A cell reference that stays fixed and uses the $ sign.
Q: What is meant by Mixed reference?
A: A reference in which only the row or the column is fixed.
Q: What is meant by Operator?
A: A symbol such as + or * that tells what calculation to do.
Q: What is meant by Sort?
A: Arranging data in ascending or descending order.
Q: What is meant by Ascending order?
A: Arranging from smallest to largest or A to Z.
Q: What is meant by Descending order?
A: Arranging from largest to smallest or Z to A.
Q: What is meant by Filter?
A: Showing only the rows that meet a condition.
Q: What is meant by Chart?
A: A picture that shows data visually.
Q: What is meant by Column chart?
A: A chart that compares values using vertical bars.
Q: What is meant by Line chart?
A: A chart that shows how values change over time.
Q: What is meant by Pie chart?
A: A chart that shows parts of a whole.
Q: What is meant by Legend?
A: The key that explains the colours in a chart.
Q: What is meant by Axis?
A: The line along which values or categories are shown in a chart.
Q: What is meant by Merge and centre?
A: Joining selected cells and centring the content.
Q: What is meant by Freeze panes?
A: Keeping rows or columns visible while scrolling.
Q: What is meant by Autofill?
A: Filling cells automatically by dragging the fill handle.
Q: What is meant by Fill handle?
A: The small square at the corner of the active cell.
Q: What is meant by Currency format?
A: A number format that shows a money symbol.
Q: What is meant by Percent format?
A: A number format that shows a value with the % sign.
Q: What is meant by #DIV/0!?
A: The error shown when a number is divided by zero.
Q: What is meant by #NAME??
A: The error shown when a function name is wrong.
Q: What is meant by #REF!?
A: The error shown when a cell reference is not valid.
Q: What is meant by #VALUE!?
A: The error shown when the wrong type of value is used.
Q: What is meant by Data validation?
A: A rule that limits what can be typed in a cell.
Q: What is meant by Conditional formatting?
A: Formatting that changes automatically when a condition is met.
Q: What is meant by Template?
A: A ready-made spreadsheet layout.
Q: Which term is described as: software that arranges data in rows and columns and does calculations?
A: Spreadsheet.
Q: Which term is described as: a spreadsheet file that contains one or more sheets?
A: Workbook.
Q: Which term is described as: a single page of rows and columns in a workbook?
A: Worksheet.
Q: Which term is described as: a horizontal line of cells identified by a number?
A: Row.
Q: Which term is described as: a vertical line of cells identified by a letter?
A: Column.
Q: Which term is described as: the box where a row and a column meet?
A: Cell.
Q: Which term is described as: the column letter and row number of a cell such as B3?
A: Cell address.
Q: Which term is described as: the cell that is currently selected?
A: Active cell.
Q: Which term is described as: a group of cells such as A1:A5?
A: Range.
Q: Which term is described as: the box that shows the address of the active cell?
A: Name box.
Q: Which term is described as: the bar that shows the content of the active cell?
A: Formula bar.
Q: Which term is described as: an expression that starts with = and calculates a value?
A: Formula.
Q: Which term is described as: a ready-made formula such as SUM?
A: Function.
Q: Which term is described as: the function that adds the numbers in a range?
A: SUM.
Q: Which term is described as: the function that finds the mean of the numbers in a range?
A: AVERAGE.
Q: Which term is described as: the function that returns the largest value in a range?
A: MAX.
Q: Which term is described as: the function that returns the smallest value in a range?
A: MIN.
Q: Which term is described as: the function that counts the cells containing numbers?
A: COUNT.
Q: Which term is described as: the function that counts the cells that are not empty?
A: COUNTA.
Q: Which term is described as: the function that returns one value if a condition is true and another if false?
A: IF.
Q: Which term is described as: the function that rounds a number to the given digits?
A: ROUND.
Q: Which term is described as: a cell reference that changes when a formula is copied?
A: Relative reference.
Q: Which term is described as: a cell reference that stays fixed and uses the $ sign?
A: Absolute reference.
Q: Which term is described as: a reference in which only the row or the column is fixed?
A: Mixed reference.
Q: Which term is described as: a symbol such as + or * that tells what calculation to do?
A: Operator.
Q: Which term is described as: arranging data in ascending or descending order?
A: Sort.
Q: Which term is described as: arranging from smallest to largest or A to Z?
A: Ascending order.
Q: Which term is described as: arranging from largest to smallest or Z to A?
A: Descending order.
Q: Which term is described as: showing only the rows that meet a condition?
A: Filter.
Q: Which term is described as: a picture that shows data visually?
A: Chart.
Q: Which term is described as: a chart that compares values using vertical bars?
A: Column chart.
Q: Which term is described as: a chart that shows how values change over time?
A: Line chart.
Q: Which term is described as: a chart that shows parts of a whole?
A: Pie chart.
Q: Which term is described as: the key that explains the colours in a chart?
A: Legend.
Q: Which term is described as: the line along which values or categories are shown in a chart?
A: Axis.
Q: Which term is described as: joining selected cells and centring the content?
A: Merge and centre.
Q: Which term is described as: keeping rows or columns visible while scrolling?
A: Freeze panes.
Q: Which term is described as: filling cells automatically by dragging the fill handle?
A: Autofill.
Q: Which term is described as: the small square at the corner of the active cell?
A: Fill handle.
Q: Which term is described as: a number format that shows a money symbol?
A: Currency format.
Q: Which term is described as: a number format that shows a value with the % sign?
A: Percent format.
Q: Which term is described as: the error shown when a number is divided by zero?
A: #DIV/0!.
Q: Which term is described as: the error shown when a function name is wrong?
A: #NAME?.
Q: Which term is described as: the error shown when a cell reference is not valid?
A: #REF!.
Q: Which term is described as: the error shown when the wrong type of value is used?
A: #VALUE!.
Q: Which term is described as: a rule that limits what can be typed in a cell?
A: Data validation.
Q: Which term is described as: formatting that changes automatically when a condition is met?
A: Conditional formatting.
Q: Which term is described as: a ready-made spreadsheet layout?
A: Template.
Q: With which symbol does every formula begin?
A: The equals sign (=).
Q: How are columns named?
A: With letters.
Q: How are rows named?
A: With numbers.
Q: What is the address of the cell in column C and row 5?
A: C5.
Q: What does A1:B3 represent?
A: A range of 6 cells.
Q: Which function adds numbers?
A: SUM.
Q: Which function finds the largest number?
A: MAX.
Q: Which function finds the smallest number?
A: MIN.
Q: Which function finds the mean?
A: AVERAGE.
Q: Which function counts numeric cells?
A: COUNT.
Q: Which function makes a decision?
A: IF.
Q: Which sign makes a reference absolute?
A: The dollar sign ($).
Q: Which chart is best for parts of a whole?
A: A pie chart.
Q: Which chart is best for a trend over time?
A: A line chart.
Q: What is the file extension of an Excel file?
A: .xlsx
Q: What is the file extension of a Calc file?
A: .ods
Q: Which operator is used for multiplication?
A: The asterisk (*).
Q: Which operator is used for division?
A: The slash (/).
Q: Which operator is used for power?
A: The caret (^).
Q: What error appears when dividing by zero?
A: #DIV/0!
Q: If 10, 20, 30, 40 are in cells A1:A4, the result of =SUM(A1:A4)
A: 100.
Q: If 10, 20, 30, 40 are in cells A1:A4, the result of =AVERAGE(A1:A4)
A: 25.
Q: If 10, 20, 30, 40 are in cells A1:A4, the result of =MAX(A1:A4)
A: 40.
Q: If 10, 20, 30, 40 are in cells A1:A4, the result of =MIN(A1:A4)
A: 10.
Q: If 10, 20, 30, 40 are in cells A1:A4, the result of =COUNT(A1:A4)
A: 4.
Q: If 5, 15, 25, 35, 45 are in cells A1:A5, the result of =SUM(A1:A5)
A: 125.
Q: If 5, 15, 25, 35, 45 are in cells A1:A5, the result of =AVERAGE(A1:A5)
A: 25.
Q: If 5, 15, 25, 35, 45 are in cells A1:A5, the result of =MAX(A1:A5)
A: 45.
Q: If 5, 15, 25, 35, 45 are in cells A1:A5, the result of =MIN(A1:A5)
A: 5.
Q: If 5, 15, 25, 35, 45 are in cells A1:A5, the result of =COUNT(A1:A5)
A: 5.
Q: If 12, 18, 24 are in cells A1:A3, the result of =SUM(A1:A3)
A: 54.
Q: If 12, 18, 24 are in cells A1:A3, the result of =AVERAGE(A1:A3)
A: 18.
Q: If 12, 18, 24 are in cells A1:A3, the result of =MAX(A1:A3)
A: 24.
Q: If 12, 18, 24 are in cells A1:A3, the result of =MIN(A1:A3)
A: 12.
Q: If 12, 18, 24 are in cells A1:A3, the result of =COUNT(A1:A3)
A: 3.
Q: If 7, 14, 21, 28 are in cells A1:A4, the result of =SUM(A1:A4)
A: 70.
Q: If 7, 14, 21, 28 are in cells A1:A4, the result of =AVERAGE(A1:A4)
A: 17.5.
Q: If 7, 14, 21, 28 are in cells A1:A4, the result of =MAX(A1:A4)
A: 28.
Q: If 7, 14, 21, 28 are in cells A1:A4, the result of =MIN(A1:A4)
A: 7.
Q: If 7, 14, 21, 28 are in cells A1:A4, the result of =COUNT(A1:A4)
A: 4.
Q: If 100, 200, 300 are in cells A1:A3, the result of =SUM(A1:A3)
A: 600.
Q: If 100, 200, 300 are in cells A1:A3, the result of =AVERAGE(A1:A3)
A: 200.
Q: If 100, 200, 300 are in cells A1:A3, the result of =MAX(A1:A3)
A: 300.
Q: If 100, 200, 300 are in cells A1:A3, the result of =MIN(A1:A3)
A: 100.
Q: If 100, 200, 300 are in cells A1:A3, the result of =COUNT(A1:A3)
A: 3.
Q: If 8, 6, 9, 5, 12 are in cells A1:A5, the result of =SUM(A1:A5)
A: 40.
Q: If 8, 6, 9, 5, 12 are in cells A1:A5, the result of =AVERAGE(A1:A5)
A: 8.
Q: If 8, 6, 9, 5, 12 are in cells A1:A5, the result of =MAX(A1:A5)
A: 12.
Q: If 8, 6, 9, 5, 12 are in cells A1:A5, the result of =MIN(A1:A5)
A: 5.
Q: If 8, 6, 9, 5, 12 are in cells A1:A5, the result of =COUNT(A1:A5)
A: 5.
Q: If 3, 9, 6, 12 are in cells A1:A4, the result of =SUM(A1:A4)
A: 30.
Q: If 3, 9, 6, 12 are in cells A1:A4, the result of =AVERAGE(A1:A4)
A: 7.5.
Q: If 3, 9, 6, 12 are in cells A1:A4, the result of =MAX(A1:A4)
A: 12.
Q: If 3, 9, 6, 12 are in cells A1:A4, the result of =MIN(A1:A4)
A: 3.
Q: If 3, 9, 6, 12 are in cells A1:A4, the result of =COUNT(A1:A4)
A: 4.
Q: If 50, 40, 30, 20, 10 are in cells A1:A5, the result of =SUM(A1:A5)
A: 150.
Q: If 50, 40, 30, 20, 10 are in cells A1:A5, the result of =AVERAGE(A1:A5)
A: 30.
Q: If 50, 40, 30, 20, 10 are in cells A1:A5, the result of =MAX(A1:A5)
A: 50.
Q: If 50, 40, 30, 20, 10 are in cells A1:A5, the result of =MIN(A1:A5)
A: 10.
Q: If 50, 40, 30, 20, 10 are in cells A1:A5, the result of =COUNT(A1:A5)
A: 5.
Q: If 15, 25, 35 are in cells A1:A3, the result of =SUM(A1:A3)
A: 75.
Q: If 15, 25, 35 are in cells A1:A3, the result of =AVERAGE(A1:A3)
A: 25.
Q: If 15, 25, 35 are in cells A1:A3, the result of =MAX(A1:A3)
A: 35.
Q: If 15, 25, 35 are in cells A1:A3, the result of =MIN(A1:A3)
A: 15.
Q: If 15, 25, 35 are in cells A1:A3, the result of =COUNT(A1:A3)
A: 3.
Q: If 2, 4, 6, 8, 10, 12 are in cells A1:A6, the result of =SUM(A1:A6)
A: 42.
Q: If 2, 4, 6, 8, 10, 12 are in cells A1:A6, the result of =AVERAGE(A1:A6)
A: 7.
Q: If 2, 4, 6, 8, 10, 12 are in cells A1:A6, the result of =MAX(A1:A6)
A: 12.
Q: If 2, 4, 6, 8, 10, 12 are in cells A1:A6, the result of =MIN(A1:A6)
A: 2.
Q: If 2, 4, 6, 8, 10, 12 are in cells A1:A6, the result of =COUNT(A1:A6)
A: 6.
Q: How many cells are in a range of 3 columns and 4 rows?
A: 12.
Q: How many cells are in a range of 2 columns and 5 rows?
A: 1.
Q: How many cells are in a range of 4 columns and 4 rows?
A: 16.
Q: How many cells are in a range of 5 columns and 3 rows?
A: 15.
Q: How many cells are in a range of 3 columns and 6 rows?
A: 18.
Q: How many cells are in a range of 6 columns and 2 rows?
A: 12.
Q: If B2 holds 20, what does =IF(B2>=33,"Pass","Fail") return?
A: Fail.
Q: If B2 holds 32, what does =IF(B2>=33,"Pass","Fail") return?
A: Fail.
Q: If B2 holds 33, what does =IF(B2>=33,"Pass","Fail") return?
A: Pass.
Q: If B2 holds 45, what does =IF(B2>=33,"Pass","Fail") return?
A: Pass.
Q: If B2 holds 60, what does =IF(B2>=33,"Pass","Fail") return?
A: Pass.
Q: If B2 holds 29, what does =IF(B2>=33,"Pass","Fail") return?
A: Fail.
@quiz
? What is meant by Spreadsheet?
- A cell reference that stays fixed and uses the $ sign
- The function that counts the cells containing numbers
- The bar that shows the content of the active cell
+ Software that arranges data in rows and columns and does calculations
! From the CBSE Class 9 syllabus.
? What is meant by Workbook?
+ A spreadsheet file that contains one or more sheets
- The function that returns the smallest value in a range
- The function that adds the numbers in a range
- A cell reference that stays fixed and uses the $ sign
! From the CBSE Class 9 syllabus.
? What is meant by Worksheet?
- A ready-made formula such as SUM
- A reference in which only the row or the column is fixed
+ A single page of rows and columns in a workbook
- A horizontal line of cells identified by a number
! From the CBSE Class 9 syllabus.
? What is meant by Row?
- A picture that shows data visually
- Software that arranges data in rows and columns and does calculations
+ A horizontal line of cells identified by a number
- The function that returns the smallest value in a range
! From the CBSE Class 9 syllabus.
? What is meant by Column?
+ A vertical line of cells identified by a letter
- A rule that limits what can be typed in a cell
- The error shown when a number is divided by zero
- A chart that compares values using vertical bars
! From the CBSE Class 9 syllabus.
? What is meant by Cell?
- A ready-made formula such as SUM
- A rule that limits what can be typed in a cell
- The function that counts the cells that are not empty
+ The box where a row and a column meet
! From the CBSE Class 9 syllabus.
? What is meant by Cell address?
- A cell reference that stays fixed and uses the $ sign
- The small square at the corner of the active cell
- A vertical line of cells identified by a letter
+ The column letter and row number of a cell such as B3
! From the CBSE Class 9 syllabus.
? What is meant by Active cell?
+ The cell that is currently selected
- The key that explains the colours in a chart
- The function that counts the cells that are not empty
- A horizontal line of cells identified by a number
! From the CBSE Class 9 syllabus.
? What is meant by Range?
+ A group of cells such as A1:A5
- The function that adds the numbers in a range
- Showing only the rows that meet a condition
- A rule that limits what can be typed in a cell
! From the CBSE Class 9 syllabus.
? What is meant by Name box?
+ The box that shows the address of the active cell
- Arranging from smallest to largest or A to Z
- The small square at the corner of the active cell
- A spreadsheet file that contains one or more sheets
! From the CBSE Class 9 syllabus.
? What is meant by Formula bar?
- A cell reference that changes when a formula is copied
+ The bar that shows the content of the active cell
- A vertical line of cells identified by a letter
- Showing only the rows that meet a condition
! From the CBSE Class 9 syllabus.
? What is meant by Formula?
- The cell that is currently selected
- The box that shows the address of the active cell
- Arranging from smallest to largest or A to Z
+ An expression that starts with = and calculates a value
! From the CBSE Class 9 syllabus.
? What is meant by Function?
- The function that returns the smallest value in a range
+ A ready-made formula such as SUM
- Arranging from smallest to largest or A to Z
- The error shown when a cell reference is not valid
! From the CBSE Class 9 syllabus.
? What is meant by SUM?
- The function that returns the largest value in a range
- Filling cells automatically by dragging the fill handle
- Arranging from largest to smallest or Z to A
+ The function that adds the numbers in a range
! From the CBSE Class 9 syllabus.
? What is meant by AVERAGE?
+ The function that finds the mean of the numbers in a range
- The function that rounds a number to the given digits
- A cell reference that stays fixed and uses the $ sign
- A number format that shows a money symbol
! From the CBSE Class 9 syllabus.
? What is meant by MAX?
- Arranging data in ascending or descending order
+ The function that returns the largest value in a range
- A ready-made formula such as SUM
- Joining selected cells and centring the content
! From the CBSE Class 9 syllabus.
? What is meant by MIN?
- Arranging from largest to smallest or Z to A
+ The function that returns the smallest value in a range
- Joining selected cells and centring the content
- The box that shows the address of the active cell
! From the CBSE Class 9 syllabus.
? What is meant by COUNT?
- The error shown when a number is divided by zero
- A vertical line of cells identified by a letter
- Arranging from largest to smallest or Z to A
+ The function that counts the cells containing numbers
! From the CBSE Class 9 syllabus.
? What is meant by COUNTA?
- A chart that compares values using vertical bars
- The small square at the corner of the active cell
- The function that returns one value if a condition is true and another if false
+ The function that counts the cells that are not empty
! From the CBSE Class 9 syllabus.
? What is meant by IF?
- The function that finds the mean of the numbers in a range
- Software that arranges data in rows and columns and does calculations
- The function that rounds a number to the given digits
+ The function that returns one value if a condition is true and another if false
! From the CBSE Class 9 syllabus.
? What is meant by ROUND?
- The error shown when the wrong type of value is used
- The function that counts the cells containing numbers
+ The function that rounds a number to the given digits
- Arranging from smallest to largest or A to Z
! From the CBSE Class 9 syllabus.
? What is meant by Relative reference?
- Software that arranges data in rows and columns and does calculations
- Arranging data in ascending or descending order
+ A cell reference that changes when a formula is copied
- A single page of rows and columns in a workbook
! From the CBSE Class 9 syllabus.
? What is meant by Absolute reference?
- The key that explains the colours in a chart
- A rule that limits what can be typed in a cell
+ A cell reference that stays fixed and uses the $ sign
- The function that returns one value if a condition is true and another if false
! From the CBSE Class 9 syllabus.
? What is meant by Mixed reference?
- Keeping rows or columns visible while scrolling
- Formatting that changes automatically when a condition is met
+ A reference in which only the row or the column is fixed
- A chart that shows parts of a whole
! From the CBSE Class 9 syllabus.
? What is meant by Operator?
- A rule that limits what can be typed in a cell
- The error shown when the wrong type of value is used
- A spreadsheet file that contains one or more sheets
+ A symbol such as + or * that tells what calculation to do
! From the CBSE Class 9 syllabus.
? What is meant by Sort?
- The function that returns one value if a condition is true and another if false
- A chart that shows parts of a whole
- A spreadsheet file that contains one or more sheets
+ Arranging data in ascending or descending order
! From the CBSE Class 9 syllabus.
? What is meant by Ascending order?
- A ready-made formula such as SUM
+ Arranging from smallest to largest or A to Z
- Arranging from largest to smallest or Z to A
- A horizontal line of cells identified by a number
! From the CBSE Class 9 syllabus.
? What is meant by Descending order?
- The cell that is currently selected
- The line along which values or categories are shown in a chart
- The box where a row and a column meet
+ Arranging from largest to smallest or Z to A
! From the CBSE Class 9 syllabus.
? What is meant by Filter?
+ Showing only the rows that meet a condition
- A rule that limits what can be typed in a cell
- The line along which values or categories are shown in a chart
- Software that arranges data in rows and columns and does calculations
! From the CBSE Class 9 syllabus.
? What is meant by Chart?
- A horizontal line of cells identified by a number
+ A picture that shows data visually
- A chart that shows parts of a whole
- The bar that shows the content of the active cell
! From the CBSE Class 9 syllabus.
? What is meant by Column chart?
+ A chart that compares values using vertical bars
- A picture that shows data visually
- A number format that shows a money symbol
- The function that returns the smallest value in a range
! From the CBSE Class 9 syllabus.
? What is meant by Line chart?
- The error shown when the wrong type of value is used
+ A chart that shows how values change over time
- A horizontal line of cells identified by a number
- The function that returns the largest value in a range
! From the CBSE Class 9 syllabus.
? What is meant by Pie chart?
- The function that returns the smallest value in a range
- A horizontal line of cells identified by a number
- A ready-made spreadsheet layout
+ A chart that shows parts of a whole
! From the CBSE Class 9 syllabus.
? What is meant by Legend?
+ The key that explains the colours in a chart
- Keeping rows or columns visible while scrolling
- The function that returns the smallest value in a range
- The box where a row and a column meet
! From the CBSE Class 9 syllabus.
? What is meant by Axis?
- The function that returns one value if a condition is true and another if false
+ The line along which values or categories are shown in a chart
- A cell reference that changes when a formula is copied
- The box that shows the address of the active cell
! From the CBSE Class 9 syllabus.
? What is meant by Merge and centre?
- The bar that shows the content of the active cell
+ Joining selected cells and centring the content
- A number format that shows a value with the % sign
- A chart that shows parts of a whole
! From the CBSE Class 9 syllabus.
? What is meant by Freeze panes?
+ Keeping rows or columns visible while scrolling
- The bar that shows the content of the active cell
- Software that arranges data in rows and columns and does calculations
- A cell reference that changes when a formula is copied
! From the CBSE Class 9 syllabus.
? What is meant by Autofill?
- An expression that starts with = and calculates a value
- The cell that is currently selected
- A number format that shows a value with the % sign
+ Filling cells automatically by dragging the fill handle
! From the CBSE Class 9 syllabus.
? What is meant by Fill handle?
+ The small square at the corner of the active cell
- A vertical line of cells identified by a letter
- The function that counts the cells containing numbers
- The error shown when a number is divided by zero
! From the CBSE Class 9 syllabus.
? What is meant by Currency format?
- The function that finds the mean of the numbers in a range
- Joining selected cells and centring the content
- A chart that shows parts of a whole
+ A number format that shows a money symbol
! From the CBSE Class 9 syllabus.
? What is meant by Percent format?
- The error shown when a function name is wrong
+ A number format that shows a value with the % sign
- The cell that is currently selected
- The function that finds the mean of the numbers in a range
! From the CBSE Class 9 syllabus.
? What is meant by #DIV/0!?
- The key that explains the colours in a chart
+ The error shown when a number is divided by zero
- The small square at the corner of the active cell
- Showing only the rows that meet a condition
! From the CBSE Class 9 syllabus.
? What is meant by #NAME??
- A picture that shows data visually
- The box that shows the address of the active cell
- The column letter and row number of a cell such as B3
+ The error shown when a function name is wrong
! From the CBSE Class 9 syllabus.
? What is meant by #REF!?
- The error shown when the wrong type of value is used
- Arranging data in ascending or descending order
+ The error shown when a cell reference is not valid
- Software that arranges data in rows and columns and does calculations
! From the CBSE Class 9 syllabus.
? What is meant by #VALUE!?
- The key that explains the colours in a chart
- A horizontal line of cells identified by a number
+ The error shown when the wrong type of value is used
- The function that rounds a number to the given digits
! From the CBSE Class 9 syllabus.
? What is meant by Data validation?
- The function that adds the numbers in a range
- Keeping rows or columns visible while scrolling
- The function that counts the cells that are not empty
+ A rule that limits what can be typed in a cell
! From the CBSE Class 9 syllabus.
? What is meant by Conditional formatting?
- The cell that is currently selected
+ Formatting that changes automatically when a condition is met
- The error shown when a number is divided by zero
- The small square at the corner of the active cell
! From the CBSE Class 9 syllabus.
? What is meant by Template?
- The bar that shows the content of the active cell
+ A ready-made spreadsheet layout
- A number format that shows a money symbol
- A symbol such as + or * that tells what calculation to do
! From the CBSE Class 9 syllabus.
? Which term is described as: software that arranges data in rows and columns and does calculations?
- COUNT
- AVERAGE
+ Spreadsheet
- Column
! From the CBSE Class 9 syllabus.
? Which term is described as: a spreadsheet file that contains one or more sheets?
- Fill handle
+ Workbook
- Column
- Range
! From the CBSE Class 9 syllabus.
? Which term is described as: a single page of rows and columns in a workbook?
- #NAME?
+ Worksheet
- Row
- IF
! From the CBSE Class 9 syllabus.
? Which term is described as: a horizontal line of cells identified by a number?
- Column chart
- Legend
+ Row
- COUNT
! From the CBSE Class 9 syllabus.
? Which term is described as: a vertical line of cells identified by a letter?
- Workbook
- Function
+ Column
- Data validation
! From the CBSE Class 9 syllabus.
? Which term is described as: the box where a row and a column meet?
- Operator
+ Cell
- Conditional formatting
- Function
! From the CBSE Class 9 syllabus.
? Which term is described as: the column letter and row number of a cell such as B3?
- Absolute reference
- COUNT
+ Cell address
- Ascending order
! From the CBSE Class 9 syllabus.
? Which term is described as: the cell that is currently selected?
+ Active cell
- Currency format
- Formula
- MAX
! From the CBSE Class 9 syllabus.
? Which term is described as: a group of cells such as A1:A5?
- COUNT
- Absolute reference
- IF
+ Range
! From the CBSE Class 9 syllabus.
? Which term is described as: the box that shows the address of the active cell?
- Fill handle
- Row
- Column
+ Name box
! From the CBSE Class 9 syllabus.
? Which term is described as: the bar that shows the content of the active cell?
- Mixed reference
- Template
- #VALUE!
+ Formula bar
! From the CBSE Class 9 syllabus.
? Which term is described as: an expression that starts with = and calculates a value?
- Column chart
- Column
+ Formula
- Axis
! From the CBSE Class 9 syllabus.
? Which term is described as: a ready-made formula such as SUM?
- MAX
- Currency format
+ Function
- Percent format
! From the CBSE Class 9 syllabus.
? Which term is described as: the function that adds the numbers in a range?
+ SUM
- #NAME?
- Line chart
- #DIV/0!
! From the CBSE Class 9 syllabus.
? Which term is described as: the function that finds the mean of the numbers in a range?
- Name box
- Fill handle
- Axis
+ AVERAGE
! From the CBSE Class 9 syllabus.
? Which term is described as: the function that returns the largest value in a range?
- Spreadsheet
- Chart
+ MAX
- Cell address
! From the CBSE Class 9 syllabus.
? Which term is described as: the function that returns the smallest value in a range?
+ MIN
- Formula bar
- Filter
- Percent format
! From the CBSE Class 9 syllabus.
? Which term is described as: the function that counts the cells containing numbers?
+ COUNT
- ROUND
- Template
- Column
! From the CBSE Class 9 syllabus.
? Which term is described as: the function that counts the cells that are not empty?
- Formula bar
+ COUNTA
- Worksheet
- Autofill
! From the CBSE Class 9 syllabus.
? Which term is described as: the function that returns one value if a condition is true and another if false?
+ IF
- Absolute reference
- Function
- Percent format
! From the CBSE Class 9 syllabus.
? Which term is described as: the function that rounds a number to the given digits?
- Row
- AVERAGE
+ ROUND
- Descending order
! From the CBSE Class 9 syllabus.
? Which term is described as: a cell reference that changes when a formula is copied?
+ Relative reference
- Absolute reference
- Formula
- Operator
! From the CBSE Class 9 syllabus.
? Which term is described as: a cell reference that stays fixed and uses the $ sign?
- Function
- Currency format
- Formula bar
+ Absolute reference
! From the CBSE Class 9 syllabus.
? Which term is described as: a reference in which only the row or the column is fixed?
- MAX
- Function
- Formula
+ Mixed reference
! From the CBSE Class 9 syllabus.
? Which term is described as: a symbol such as + or * that tells what calculation to do?
- ROUND
+ Operator
- Ascending order
- Line chart
! From the CBSE Class 9 syllabus.
? Which term is described as: arranging data in ascending or descending order?
- Row
- Formula
- Freeze panes
+ Sort
! From the CBSE Class 9 syllabus.
? Which term is described as: arranging from smallest to largest or A to Z?
- Freeze panes
- Data validation
- Range
+ Ascending order
! From the CBSE Class 9 syllabus.
? Which term is described as: arranging from largest to smallest or Z to A?
- Operator
- Function
+ Descending order
- Pie chart
! From the CBSE Class 9 syllabus.
? Which term is described as: showing only the rows that meet a condition?
- MIN
- Formula bar
+ Filter
- #DIV/0!
! From the CBSE Class 9 syllabus.
? Which term is described as: a picture that shows data visually?
- Absolute reference
+ Chart
- Data validation
- Workbook
! From the CBSE Class 9 syllabus.
? Which term is described as: a chart that compares values using vertical bars?
+ Column chart
- Axis
- SUM
- Merge and centre
! From the CBSE Class 9 syllabus.
? Which term is described as: a chart that shows how values change over time?
- Axis
- Formula
- Range
+ Line chart
! From the CBSE Class 9 syllabus.
? Which term is described as: a chart that shows parts of a whole?
+ Pie chart
- Ascending order
- Filter
- Descending order
! From the CBSE Class 9 syllabus.
? Which term is described as: the key that explains the colours in a chart?
+ Legend
- Row
- Range
- Chart
! From the CBSE Class 9 syllabus.
? Which term is described as: the line along which values or categories are shown in a chart?
- IF
- #VALUE!
+ Axis
- #REF!
! From the CBSE Class 9 syllabus.
? Which term is described as: joining selected cells and centring the content?
- Template
- Worksheet
- Legend
+ Merge and centre
! From the CBSE Class 9 syllabus.
? Which term is described as: keeping rows or columns visible while scrolling?
- Currency format
- Line chart
- #REF!
+ Freeze panes
! From the CBSE Class 9 syllabus.
? Which term is described as: filling cells automatically by dragging the fill handle?
- Freeze panes
- Name box
+ Autofill
- #DIV/0!
! From the CBSE Class 9 syllabus.
? Which term is described as: the small square at the corner of the active cell?
- Chart
+ Fill handle
- Data validation
- Conditional formatting
! From the CBSE Class 9 syllabus.
? Which term is described as: a number format that shows a money symbol?
- Absolute reference
- Axis
- Conditional formatting
+ Currency format
! From the CBSE Class 9 syllabus.
? Which term is described as: a number format that shows a value with the % sign?
+ Percent format
- Column
- Conditional formatting
- Filter
! From the CBSE Class 9 syllabus.
? Which term is described as: the error shown when a number is divided by zero?
- Cell address
- COUNTA
+ #DIV/0!
- Data validation
! From the CBSE Class 9 syllabus.
? Which term is described as: the error shown when a function name is wrong?
- Column chart
- COUNTA
- Formula
+ #NAME?
! From the CBSE Class 9 syllabus.
? Which term is described as: the error shown when a cell reference is not valid?
- Operator
- Formula bar
- IF
+ #REF!
! From the CBSE Class 9 syllabus.
? Which term is described as: the error shown when the wrong type of value is used?
- IF
+ #VALUE!
- AVERAGE
- Percent format
! From the CBSE Class 9 syllabus.
? Which term is described as: a rule that limits what can be typed in a cell?
- Chart
- Absolute reference
- Ascending order
+ Data validation
! From the CBSE Class 9 syllabus.
? Which term is described as: formatting that changes automatically when a condition is met?
+ Conditional formatting
- Operator
- Cell address
- COUNT
! From the CBSE Class 9 syllabus.
? Which term is described as: a ready-made spreadsheet layout?
- Legend
- Fill handle
- Range
+ Template
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Spreadsheet".
- The function that adds the numbers in a range
+ Software that arranges data in rows and columns and does calculations
- Showing only the rows that meet a condition
- Arranging from smallest to largest or A to Z
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Workbook".
- Arranging from smallest to largest or A to Z
- The function that adds the numbers in a range
+ A spreadsheet file that contains one or more sheets
- A group of cells such as A1:A5
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Worksheet".
- The error shown when a function name is wrong
- A ready-made spreadsheet layout
+ A single page of rows and columns in a workbook
- An expression that starts with = and calculates a value
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Row".
+ A horizontal line of cells identified by a number
- A chart that compares values using vertical bars
- Arranging from largest to smallest or Z to A
- A single page of rows and columns in a workbook
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Column".
- The box that shows the address of the active cell
+ A vertical line of cells identified by a letter
- Joining selected cells and centring the content
- The function that adds the numbers in a range
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Cell".
- A horizontal line of cells identified by a number
- A chart that shows parts of a whole
+ The box where a row and a column meet
- Arranging from largest to smallest or Z to A
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Cell address".
+ The column letter and row number of a cell such as B3
- A cell reference that changes when a formula is copied
- Arranging from smallest to largest or A to Z
- An expression that starts with = and calculates a value
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Active cell".
- Filling cells automatically by dragging the fill handle
+ The cell that is currently selected
- A chart that compares values using vertical bars
- The key that explains the colours in a chart
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Range".
+ A group of cells such as A1:A5
- Showing only the rows that meet a condition
- The bar that shows the content of the active cell
- A chart that shows how values change over time
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Name box".
+ The box that shows the address of the active cell
- An expression that starts with = and calculates a value
- The function that returns the smallest value in a range
- The bar that shows the content of the active cell
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Formula bar".
- Arranging from smallest to largest or A to Z
+ The bar that shows the content of the active cell
- A symbol such as + or * that tells what calculation to do
- The error shown when a function name is wrong
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Formula".
- Arranging from largest to smallest or Z to A
- A spreadsheet file that contains one or more sheets
+ An expression that starts with = and calculates a value
- A cell reference that changes when a formula is copied
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Function".
- The box where a row and a column meet
- The function that returns one value if a condition is true and another if false
+ A ready-made formula such as SUM
- The error shown when the wrong type of value is used
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "SUM".
+ The function that adds the numbers in a range
- The line along which values or categories are shown in a chart
- A picture that shows data visually
- Filling cells automatically by dragging the fill handle
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "AVERAGE".
- The line along which values or categories are shown in a chart
- The function that returns the smallest value in a range
- Formatting that changes automatically when a condition is met
+ The function that finds the mean of the numbers in a range
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "MAX".
- A chart that shows how values change over time
+ The function that returns the largest value in a range
- The error shown when a cell reference is not valid
- A symbol such as + or * that tells what calculation to do
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "MIN".
- A cell reference that stays fixed and uses the $ sign
+ The function that returns the smallest value in a range
- The box that shows the address of the active cell
- A chart that shows parts of a whole
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "COUNT".
- A group of cells such as A1:A5
+ The function that counts the cells containing numbers
- A picture that shows data visually
- Software that arranges data in rows and columns and does calculations
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "COUNTA".
+ The function that counts the cells that are not empty
- Arranging from smallest to largest or A to Z
- Joining selected cells and centring the content
- An expression that starts with = and calculates a value
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "IF".
- A single page of rows and columns in a workbook
- The function that counts the cells containing numbers
- The error shown when the wrong type of value is used
+ The function that returns one value if a condition is true and another if false
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "ROUND".
- Filling cells automatically by dragging the fill handle
- A chart that shows parts of a whole
- The function that finds the mean of the numbers in a range
+ The function that rounds a number to the given digits
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Relative reference".
- The function that rounds a number to the given digits
- A picture that shows data visually
+ A cell reference that changes when a formula is copied
- The function that returns the smallest value in a range
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Absolute reference".
- The error shown when a number is divided by zero
- A number format that shows a value with the % sign
- The function that returns the largest value in a range
+ A cell reference that stays fixed and uses the $ sign
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Mixed reference".
- Arranging data in ascending or descending order
- The line along which values or categories are shown in a chart
- Arranging from smallest to largest or A to Z
+ A reference in which only the row or the column is fixed
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Operator".
+ A symbol such as + or * that tells what calculation to do
- Filling cells automatically by dragging the fill handle
- The error shown when a cell reference is not valid
- An expression that starts with = and calculates a value
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Sort".
- Keeping rows or columns visible while scrolling
+ Arranging data in ascending or descending order
- A chart that shows how values change over time
- A chart that shows parts of a whole
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Ascending order".
- A single page of rows and columns in a workbook
- Joining selected cells and centring the content
+ Arranging from smallest to largest or A to Z
- The function that returns one value if a condition is true and another if false
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Descending order".
- A rule that limits what can be typed in a cell
- The cell that is currently selected
- Arranging data in ascending or descending order
+ Arranging from largest to smallest or Z to A
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Filter".
- A single page of rows and columns in a workbook
- The function that returns one value if a condition is true and another if false
+ Showing only the rows that meet a condition
- The function that adds the numbers in a range
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Chart".
- A vertical line of cells identified by a letter
- The function that counts the cells that are not empty
+ A picture that shows data visually
- Arranging from largest to smallest or Z to A
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Column chart".
- The box that shows the address of the active cell
+ A chart that compares values using vertical bars
- The key that explains the colours in a chart
- The small square at the corner of the active cell
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Line chart".
- A cell reference that changes when a formula is copied
+ A chart that shows how values change over time
- A number format that shows a value with the % sign
- A rule that limits what can be typed in a cell
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Pie chart".
- The box that shows the address of the active cell
- The function that rounds a number to the given digits
- A number format that shows a value with the % sign
+ A chart that shows parts of a whole
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Legend".
- The error shown when a cell reference is not valid
- A symbol such as + or * that tells what calculation to do
- A cell reference that changes when a formula is copied
+ The key that explains the colours in a chart
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Axis".
- Filling cells automatically by dragging the fill handle
+ The line along which values or categories are shown in a chart
- The function that returns the smallest value in a range
- The key that explains the colours in a chart
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Merge and centre".
- A picture that shows data visually
+ Joining selected cells and centring the content
- An expression that starts with = and calculates a value
- A horizontal line of cells identified by a number
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Freeze panes".
- The error shown when the wrong type of value is used
- The error shown when a function name is wrong
+ Keeping rows or columns visible while scrolling
- Arranging from largest to smallest or Z to A
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Autofill".
- A picture that shows data visually
- A number format that shows a value with the % sign
+ Filling cells automatically by dragging the fill handle
- The key that explains the colours in a chart
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Fill handle".
- Software that arranges data in rows and columns and does calculations
+ The small square at the corner of the active cell
- A horizontal line of cells identified by a number
- Formatting that changes automatically when a condition is met
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Currency format".
- The function that returns the largest value in a range
+ A number format that shows a money symbol
- The bar that shows the content of the active cell
- A rule that limits what can be typed in a cell
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Percent format".
- The box where a row and a column meet
- The function that counts the cells containing numbers
+ A number format that shows a value with the % sign
- The function that returns one value if a condition is true and another if false
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "#DIV/0!".
- Joining selected cells and centring the content
- The function that adds the numbers in a range
+ The error shown when a number is divided by zero
- The key that explains the colours in a chart
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "#NAME?".
- The function that adds the numbers in a range
- Showing only the rows that meet a condition
+ The error shown when a function name is wrong
- Arranging from smallest to largest or A to Z
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "#REF!".
- A cell reference that stays fixed and uses the $ sign
+ The error shown when a cell reference is not valid
- Filling cells automatically by dragging the fill handle
- The error shown when the wrong type of value is used
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "#VALUE!".
- The function that returns the smallest value in a range
- An expression that starts with = and calculates a value
+ The error shown when the wrong type of value is used
- The function that finds the mean of the numbers in a range
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Data validation".
- A spreadsheet file that contains one or more sheets
- A vertical line of cells identified by a letter
+ A rule that limits what can be typed in a cell
- The column letter and row number of a cell such as B3
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Conditional formatting".
- Arranging from smallest to largest or A to Z
- Keeping rows or columns visible while scrolling
- The error shown when a cell reference is not valid
+ Formatting that changes automatically when a condition is met
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Template".
- Joining selected cells and centring the content
+ A ready-made spreadsheet layout
- The function that counts the cells containing numbers
- A cell reference that changes when a formula is copied
! From the CBSE Class 9 syllabus.
? If 10, 20, 30, 40 are in cells A1:A4, the result of =SUM(A1:A4)
- 110
- 90
- 300
+ 100
! Add the values.
? If 10, 20, 30, 40 are in cells A1:A4, the result of =AVERAGE(A1:A4)
- 22.5
- 50
+ 25
- 31.25
! Sum divided by count.
? If 10, 20, 30, 40 are in cells A1:A4, the result of =MAX(A1:A4)
- 50
- 120
- 80
+ 40
! Largest value.
? If 10, 20, 30, 40 are in cells A1:A4, the result of =MIN(A1:A4)
- 30
- 8
- 11
+ 10
! Smallest value.
? If 10, 20, 30, 40 are in cells A1:A4, the result of =COUNT(A1:A4)
- 8
+ 4
- 3
- 12
! Number of cells.
? If 5, 15, 25, 35, 45 are in cells A1:A5, the result of =SUM(A1:A5)
+ 125
- 250
- 137.5
- 156.25
! Add the values.
? If 5, 15, 25, 35, 45 are in cells A1:A5, the result of =AVERAGE(A1:A5)
- 12.5
+ 25
- 75
- 20
! Sum divided by count.
? If 5, 15, 25, 35, 45 are in cells A1:A5, the result of =MAX(A1:A5)
- 56.25
- 22.5
+ 45
- 49.5
! Largest value.
? If 5, 15, 25, 35, 45 are in cells A1:A5, the result of =MIN(A1:A5)
+ 5
- 10
- 4
- 4.5
! Smallest value.
? If 5, 15, 25, 35, 45 are in cells A1:A5, the result of =COUNT(A1:A5)
- 2
- 1
- 15
+ 5
! Number of cells.
? If 12, 18, 24 are in cells A1:A3, the result of =SUM(A1:A3)
+ 54
- 67.5
- 162
- 48.6
! Add the values.
? If 12, 18, 24 are in cells A1:A3, the result of =AVERAGE(A1:A3)
+ 18
- 22.5
- 54
- 14.4
! Sum divided by count.
? If 12, 18, 24 are in cells A1:A3, the result of =MAX(A1:A3)
+ 24
- 19.2
- 12
- 26.4
! Largest value.
? If 12, 18, 24 are in cells A1:A3, the result of =MIN(A1:A3)
- 10.8
- 9.6
- 36
+ 12
! Smallest value.
? If 12, 18, 24 are in cells A1:A3, the result of =COUNT(A1:A3)
- 4
+ 3
- 6
- 2
! Number of cells.
? If 7, 14, 21, 28 are in cells A1:A4, the result of =SUM(A1:A4)
- 63
- 210
+ 70
- 140
! Add the values.
? If 7, 14, 21, 28 are in cells A1:A4, the result of =AVERAGE(A1:A4)
+ 17.5
- 14
- 52.5
- 21.88
! Sum divided by count.
? If 7, 14, 21, 28 are in cells A1:A4, the result of =MAX(A1:A4)
- 56
+ 28
- 35
- 30.8
! Largest value.
? If 7, 14, 21, 28 are in cells A1:A4, the result of =MIN(A1:A4)
+ 7
- 7.7
- 5.6
- 6.3
! Smallest value.
? If 7, 14, 21, 28 are in cells A1:A4, the result of =COUNT(A1:A4)
- 2
- 5
- 8
+ 4
! Number of cells.
? If 100, 200, 300 are in cells A1:A3, the result of =SUM(A1:A3)
+ 600
- 660
- 300
- 1800
! Add the values.
? If 100, 200, 300 are in cells A1:A3, the result of =AVERAGE(A1:A3)
- 220
+ 200
- 160
- 180
! Sum divided by count.
? If 100, 200, 300 are in cells A1:A3, the result of =MAX(A1:A3)
- 240
- 375
+ 300
- 270
! Largest value.
? If 100, 200, 300 are in cells A1:A3, the result of =MIN(A1:A3)
- 80
- 125
- 110
+ 100
! Smallest value.
? If 100, 200, 300 are in cells A1:A3, the result of =COUNT(A1:A3)
- 2
- 6
+ 3
- 4
! Number of cells.
? If 8, 6, 9, 5, 12 are in cells A1:A5, the result of =SUM(A1:A5)
+ 40
- 44
- 80
- 120
! Add the values.
? If 8, 6, 9, 5, 12 are in cells A1:A5, the result of =AVERAGE(A1:A5)
- 4
- 24
+ 8
- 8.8
! Sum divided by count.
? If 8, 6, 9, 5, 12 are in cells A1:A5, the result of =MAX(A1:A5)
- 9.6
- 24
+ 12
- 10.8
! Largest value.
? If 8, 6, 9, 5, 12 are in cells A1:A5, the result of =MIN(A1:A5)
- 15
+ 5
- 6.25
- 5.5
! Smallest value.
? If 8, 6, 9, 5, 12 are in cells A1:A5, the result of =COUNT(A1:A5)
- 4
- 1
+ 5
- 15
! Number of cells.
? If 3, 9, 6, 12 are in cells A1:A4, the result of =SUM(A1:A4)
+ 30
- 27
- 37.5
- 60
! Add the values.
? If 3, 9, 6, 12 are in cells A1:A4, the result of =AVERAGE(A1:A4)
+ 7.5
- 3.75
- 6
- 15
! Sum divided by count.
? If 3, 9, 6, 12 are in cells A1:A4, the result of =MAX(A1:A4)
- 13.2
- 15
- 10.8
+ 12
! Largest value.
? If 3, 9, 6, 12 are in cells A1:A4, the result of =MIN(A1:A4)
+ 3
- 3.3
- 2.4
- 9
! Smallest value.
? If 3, 9, 6, 12 are in cells A1:A4, the result of =COUNT(A1:A4)
+ 4
- 12
- 5
- 3
! Number of cells.
? If 50, 40, 30, 20, 10 are in cells A1:A5, the result of =SUM(A1:A5)
- 75
- 450
+ 150
- 120
! Add the values.
? If 50, 40, 30, 20, 10 are in cells A1:A5, the result of =AVERAGE(A1:A5)
- 60
- 15
+ 30
- 24
! Sum divided by count.
? If 50, 40, 30, 20, 10 are in cells A1:A5, the result of =MAX(A1:A5)
- 62.5
- 150
- 100
+ 50
! Largest value.
? If 50, 40, 30, 20, 10 are in cells A1:A5, the result of =MIN(A1:A5)
- 20
- 30
- 8
+ 10
! Smallest value.
? If 50, 40, 30, 20, 10 are in cells A1:A5, the result of =COUNT(A1:A5)
- 15
- 6
+ 5
- 1
! Number of cells.
? If 15, 25, 35 are in cells A1:A3, the result of =SUM(A1:A3)
- 93.75
+ 75
- 150
- 82.5
! Add the values.
? If 15, 25, 35 are in cells A1:A3, the result of =AVERAGE(A1:A3)
- 75
- 31.25
+ 25
- 22.5
! Sum divided by count.
? If 15, 25, 35 are in cells A1:A3, the result of =MAX(A1:A3)
+ 35
- 70
- 38.5
- 43.75
! Largest value.
? If 15, 25, 35 are in cells A1:A3, the result of =MIN(A1:A3)
- 7.5
+ 15
- 18.75
- 13.5
! Smallest value.
? If 15, 25, 35 are in cells A1:A3, the result of =COUNT(A1:A3)
- 4
+ 3
- 9
- 6
! Number of cells.
? If 2, 4, 6, 8, 10, 12 are in cells A1:A6, the result of =SUM(A1:A6)
- 46.2
+ 42
- 21
- 33.6
! Add the values.
? If 2, 4, 6, 8, 10, 12 are in cells A1:A6, the result of =AVERAGE(A1:A6)
- 21
- 3.5
+ 7
- 5.6
! Sum divided by count.
? If 2, 4, 6, 8, 10, 12 are in cells A1:A6, the result of =MAX(A1:A6)
+ 12
- 13.2
- 15
- 6
! Largest value.
? If 2, 4, 6, 8, 10, 12 are in cells A1:A6, the result of =MIN(A1:A6)
+ 2
- 6
- 2.5
- 1
! Smallest value.
? If 2, 4, 6, 8, 10, 12 are in cells A1:A6, the result of =COUNT(A1:A6)
+ 6
- 5
- 8
- 3
! Number of cells.
? How many cells are in a range of 3 columns and 4 rows?
+ 12
- 6
- 13
- 24
! Columns x rows.
? How many cells are in a range of 2 columns and 5 rows?
- 12
- 9
+ 1
- 11
! Columns x rows.
? How many cells are in a range of 4 columns and 4 rows?
- 2
- 48
- 8
+ 16
! Columns x rows.
? How many cells are in a range of 5 columns and 3 rows?
- 14
- 8
- 3
+ 15
! Columns x rows.
? How many cells are in a range of 3 columns and 6 rows?
- 14
+ 18
- 2
- 16
! Columns x rows.
? How many cells are in a range of 6 columns and 2 rows?
- 15
- 1
- 11
+ 12
! Columns x rows.
? If B2 holds 20, the result of =IF(B2>=33,"Pass","Fail") is
- True
- Error
+ Fail
- Pass
! 33 is the pass mark.
? If B2 holds 32, the result of =IF(B2>=33,"Pass","Fail") is
- Error
- True
+ Fail
- Pass
! 33 is the pass mark.
? If B2 holds 33, the result of =IF(B2>=33,"Pass","Fail") is
- Error
- True
+ Pass
- Fail
! 33 is the pass mark.
? If B2 holds 45, the result of =IF(B2>=33,"Pass","Fail") is
- Fail
- Error
+ Pass
- True
! 33 is the pass mark.
? If B2 holds 60, the result of =IF(B2>=33,"Pass","Fail") is
+ Pass
- Fail
- Error
- True
! 33 is the pass mark.
? If B2 holds 29, the result of =IF(B2>=33,"Pass","Fail") is
- Error
+ Fail
- True
- Pass
! 33 is the pass mark.
@visual
steps | Making a chart | Enter the data; Select the data; Insert a chart; Choose the type; Add title and labels
mind | Common functions | Functions: SUM, AVERAGE, MAX, MIN, COUNT, IF
compare | Relative and absolute reference | Relative=Changes when copied~Example: A1~Moves with the formula; Absolute=Does not change~Example: $A$1~Stays fixed
@problems
P: Cells A1 to A4 hold 10, 20, 30 and 40. Give the result of =SUM(A1:A4) and =AVERAGE(A1:A4).
A: SUM is 100 and AVERAGE is 25.
R: 1 | SUM = 100
R: 1 | AVERAGE = 25
