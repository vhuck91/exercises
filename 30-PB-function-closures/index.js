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
function multiply(numberN1) {

    function multiSum(numberN2) { // function of sum
        return numberN1 * numberN2; // use return to calc
    }
    return multiSum; // print / quicksave result

}

const multiplyByN = multiply(3)(4) // function called + stored in var of const multiplyByN
console.log(multiplyByN);


// 3 Calculate saved money till date(numX)

let money = (function (ageNow, retirementAge, wage, savingRate) {
    if (ageNow >= retirementAge) {
        return "You're retired!"
    }
    return ((retirementAge - ageNow) * 12) * wage * (savingRate * 0.01)
    }
)(40, 60, 1000, 5);
console.log(money);