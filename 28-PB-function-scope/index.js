"use strict";

// Consol.log(); solution
const twoNumbers = (xNumber, yNumber) => {
    const xNum = xNumber;
    const yNum = yNumber;

    console.log("xNumber is a", typeof xNum);
    console.log("yNumber is a", typeof yNum);
    console.log();
    console.log(Math.pow(xNum, yNum));
}
twoNumbers(2, 3);

console.log();

// function If else
function printNum(a, b) {

    if ((typeof a !== "number") || (typeof b !== "number")) {
        console.log("ERRO");
    } else {
        let result = null;
        for (let i = 1; i <= b; i++) {
            result = Math.pow(a, i)
            console.log(result);
        }
    }

}
printNum(2, 8);


// 2
let fruit = "Fruit-Test";

const printFavoriteFruit = () => {
    fruit = "Banane";
    console.log(`My favorite fruit is: ${fruit}`);
}

printFavoriteFruit();


// 3
const exponent = (x, y) => {
    let result = null;
    result = x ** y;
    console.log(result);
}

exponent(2, 4);

// i cant acces result var cuz its scoped within the function