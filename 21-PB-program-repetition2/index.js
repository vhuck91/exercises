"use strict";

// 1 Creat a while loop (15x)
let i = 0;

while (i < 15) {
    console.log("Number", i);
    i++;
}
console.log(i + "\n");


// 2 Sums 1 - 20 using "while" loop
let sum = 0;
let number = 1;

while (number <= 20) {
    sum += number;
    number++; //number + = 1 or number = Number +1
}
console.log("Sum is " + sum + "\n");


// 3 do while loop count till 20
let myNumber = "";
let addingValueI = "0"

do {
    myNumber += "My Number " + addingValueI + "\n";
    addingValueI++ // +1
} while (addingValueI < 20); // smaller 20 is loop count
console.log(myNumber);
