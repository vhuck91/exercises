"use strict";

// 1 Creat a while loop (15x)
let i = 0;

while (i < 15) {
    console.log("Number", i);
    i++
}
console.log(i + "\n");


// 2 Sums 1 - 20 using "while" loop
let sum = 0;
let number = 1;

while (number <= 20) {
    sum += number;
    number++;
}
console.log("Sum is " + sum + "\n");


// 3 do while loop count til 20
let myNumber = "";
i = "1"

do {
    myNumber += "My Number " + i + "\n";
    i++
} while(i < 20);
console.log(myNumber);
