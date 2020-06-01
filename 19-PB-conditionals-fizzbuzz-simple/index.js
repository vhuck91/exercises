"use strict";

const playFizzBuzz = (num) => {
    let isDivisible3 = (num % 3) === 0;
    let isDivisible5 = (num % 5) === 0;
    let isDivisible4Both = ((num % 3) === 0 && (num % 5) === 0);
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
            message = "You lose!";
            break;

    }
    return message;
}
// Play here
console.log(playFizzBuzz(7));