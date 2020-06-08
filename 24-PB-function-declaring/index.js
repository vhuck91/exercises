"use strict";

// 1
function firstFunction(x, y) {
    console.log(x * y);
}
firstFunction(9, 2);


// 2
const secondFunction = function (x, y) {
    console.log(x * y);
}
secondFunction(5, 5);


// 3
const thirdFunction = (x, y) => {
    console.log(x * y);
}
thirdFunction(4, 6);

// 4.1
function fourthFunctionA(a, b) {
    console.log(a % b);
}
fourthFunctionA(20, 3);


// 4.2
const fourthFunctionB = function (a, b) {
    console.log(a % b);
}
fourthFunctionB(4, 20);


// 4.3
const fourthFunctionC = (a, b) => {
    console.log(a % b);
}
fourthFunctionC(6, 6);