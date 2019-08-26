# بسم الله الرحمن الرحيم

1. For each of the following elements, what is its HTML start tag?
  1. A table row element
  2. An element within a table row that holds data
  3. An element in the top row of a table that describes the data in the column below
2. Using type selectors, write a CSS rule that creates a thin solid single-line border around all tables and uses a single line to separate adjacent columns and adjacent rows.
3. Using type selectors, write a CSS rule that puts 5 pixels of padding around the text in each table header and data cell.
4. Write a CSS structural pseudo-class selector that selects the odd table row elements, starting with the third one.
5. What is the purpose of the `thead` element, what is the purpose of the `tbody` element, and what is the purpose of `tfoot` element ? Hint: <https://www.w3schools.com/tags/tag_thead.asp><https://www.w3schools.com/tags/tag_tbody.asp>
6. What does the following CSS rule do?
```css
body {display: flex; justify-content: center;}```

7. Assume the following style and body elements are part of a complete html5 document. Provide a sketch that shows what the code displays.
```html
<style>
th, td {padding: 5px 20px;}
table, th, td {border: solid thin; border-collapse: collapse;}
</style>
<body>
<table>
<tr> <th></th> <th colspan="2"></th> <th></th> </tr>
<tr> <td></td> <td></td> <td></td> <td></td> </tr>
<tr>
<td rowspan="3"></td> <td></td> <td></td>
<td rowspan="3"></td>
</tr>
<tr> <td></td> <td></td> </tr>
<tr> <td></td> <td></td> </tr>
</table>
</body>
```

8. What is a screen reader?
10. Why is the `div` element a good choice for CSS implementation of table and row components?
11. The `display: table-cell` property does not work well with elements in the embedded category like img , audio , and video . How can you work around this problem?
12. Describe how to apply absolute positioning to an element.
13. With absolute positioning, the top and left properties indicate the position of the target element’s top-left corner relative to what?
14. What CSS properties establish offsets from container sides to corresponding component sides?
15. With relative positioning, the top and left properties indicate the position of the target element’s top-left corner relative to what?
16. If you apply the position: relative property-value pair to a container, that container can then serve as a containing block for absolute positioned elements inside it. True or false.
17. Suppose you have a table implemented with a table element, and borders are displayed around each table cell and around the table’s perimeter. Provide a CSS type selector rule that eliminates the gaps between each of the adjacent borders.