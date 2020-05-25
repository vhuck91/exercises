"use strict";

// 1 What type
// a)
console.log(`- 3 == "3" output: ${3 == "3"}`); // == loose comparison result true, cuz same value; number is a string
console.log(`- 3 === "3" output: ${3 === "3"}`); // === strict comparison result false, cuz diffrent type of var

/*
b)
Is there a difference? Why/why not?
- loose checks if the value is matching & ignores the type
- strict comparison checks also the type of the var(value) >> Result = False, cuz we compare string and number 

c)
Which comparison operator should we generally use? Why?
- use strict for accurate results. Becouse its also checking the type.

d)
What would happen if we were to use =?
- we get error, cuz =? stands for assignment
*/


// task 2
let varSetTrue = true;

console.log(varSetTrue === false ? true : false);
// or !arSetTrue ? true : false

// task 3
// result = Stacey, it checks for other var if firstName was emty
