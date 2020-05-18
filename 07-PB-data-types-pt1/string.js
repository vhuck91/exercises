"use strickt"

// 01
let myVariable = "Placeholder.";
console.log("Answer 1//\n" + myVariable);

// 02
console.log("Answer 2//\n" + myVariable[1], myVariable[5]);

// 03
let name = "Vadim";
console.log("Answer 3//\n" + name);

// 04
let age = 29;
console.log("Answer 4//\n" + age);

// 05
let year = 1991;
console.log("Answer 5//\n" + year);

// 06
console.log("Answer 6//\n", `${name}, "is", ${age}, "in", ${year}`);

// 07
let isMarried = true;

// 08
name = isMarried ? console.log(`Anwser 8//\n`, `${name} is is married: true`) : console.log(`${name} is married: false`);

// 09
let programmingLanguage = "JawesomeJS";
let isFun = true;
let answer;

answer = isFun ? `${programmingLanguage} is fun: true` : `${programmingLanguage} is fun: false`;
console.log("Anwser 8//\n", answer);

// 10
console.log("Abswer 10//\n", programmingLanguage[0] + " and " + programmingLanguage[9]);

// 11
console.log(programmingLanguage.length);