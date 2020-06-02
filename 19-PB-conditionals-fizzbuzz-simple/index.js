"use strict";

const playFizzBuzz = (num) => {
    let isDivisible3 = (num % 3) === 0;
    let isDivisible5 = (num % 5) === 0;
    let isDivisible4Both = isDivisible3 && isDivisible5;
    let message = "";

    switch (true) {
        case isDivisible4Both:
            message = "Fizz_Buzz";
            break;
        case isDivisible3:
            message = "Fizz";
            break;
        case isDivisible5:
            message = "Buzz";
            break;
        default:
            message = num;
    }
    return message;
}
// Play here
console.log(playFizzBuzz(7));
// if else
let fixNumber = 16;

if (fixNumber % 3 === 0 && fixNumber % 5 === 0){
    console.log("Fizz_buzz");
} else if (fixNumber % 3 === 0){
    console.log("Fiz");
} else if (fixNumber % 5 === 0){
    console.log("Buzz");
} else {
    console.log(fixNumber);
}