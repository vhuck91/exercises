"use strict";
// 1
let sumNumber = "";

for (let i = 0; i <= 20; i++) {
    console.log("Nr.", i);
    sumNumber += i;
}


// 2
for (let i = 1; i < 6; i++) { // i = 1, cuz its defined and pc counts from 0
    console.log("The is ${i} bottle of beer at the wall");
}

// 3 use if else cuz we have if this then that issue
for (let i = 0; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}
/* 
alternative same like 2 
for (let i = 0; i < 21; i++) {
    console.log(`${i} is ${i % 2 === 0 ? "even" : "odd"}`);
}
*/


// 4
for (let i = 0; i <= 10; i++) {
    console.log(`${i} * 9 = ` + i * 9);
}
/* Explained what happens
let myString = '';
for (let i = 0, multiple = 0; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        myString = myString + ' ' + (j * i);
    }
    multiple = i * 9;
    console.log(`${i} * 9 = ${multiple}`);
}
*/


// 5 wait likes last task but only without let outside of for ???
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// 6
let sumBig = 0;

for (let i = 0; i <= 1000; i++) {
    sumBig = i + sumBig;
}
console.log(sumBig);
