`use strict`;
// 1 Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.

let introSentence = `hello, my name is Fran and I am`;
let age = 25;
let fullSentence = introSentence + " " + age; // operator (+) adds string & string

console.log(fullSentence);

// 2 Converting'
// Create a variable with the value of "1005". Convert it to a number.
let varValue = `1005`;
let varTransforming = parseInt(varValue);

console.log(varTransforming);

// Create a variable with the value of "10.05". Convert it to a number.
let varValueFloating = `10.05`;
let varResult = parseFloat(varValueFloating);

console.log(varResult);

// 3 Remain there
// checking if numbers are even
let a = 30;
let b = 939;
let c = 40.9;


let resultA = a % 2;
let resultB = b % 2;
let resultC = c % 2;
console.log(`
    ${a} ${(resultA ? "is Not even" : "is Even")}
    ${b} ${(!resultB ? "is Even" : "is Not even")}
    ${c} ${(resultC === 0 ? "is Even" : "is Not even")}
`);

// if i want equal 0 pls use === >>> ${a} ${(resultA ? === 0 "is Even" : "is Not even")}

// line 35 solution Nr2 >> zero === is not even
// line 36 solution Nr3 