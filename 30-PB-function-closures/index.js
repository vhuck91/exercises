"use strict"

// closure Function a

function add(numberOne) {

    return function sum(numberTwo) {
        return numberOne + numberTwo
    }

}

let sum = add(3)(4);
console.log(sum);

// 2 closure function with multiply and outer function stored in var then called
// anonomys, save var to function 
const multiply = function (numberN1) {

    return function multiSum(numberN2) { // function of sum
        return numberN1 * numberN2; // use return to calc
    }

}

console.log(multiply(3)(4));
// arrow function
/* 
const multiply = numberN1 => {
    return secondNumber => numberN1 * numberN2;
}

let result = multiply(3)(4);
console.log(result);
*/

// 3 Calculate saved money till date(numX)

let money = (function (ageNow, retirementAge, wage, savingRate) {
    if (ageNow >= retirementAge) {
        return "You're retired!"
    }
    return ((retirementAge - ageNow) * 12) * wage * (savingRate * 0.01)
    }
)(40, 60, 1000, 5);
console.log(money);