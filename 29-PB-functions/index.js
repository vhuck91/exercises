"use strict";

// 1. add up number 4 times while 1 times is +1 (eturn 10 because 1 + 2 + 3 + 4 = 10)
const addUp = (numberX) => {
    let summe = 0;

    for (let i = 1; i <= numberX; i++) {
        summe = summe + i;
    }
    return summe;
}

const addUp4 = addUp(4);
const addUp5 = addUp(13);
const addUp6 = addUp(600);

console.log(addUp4);
console.log(addUp5);
console.log(addUp6);


console.log();
// 2 sum of its cubes (2³ = 2*2*2)
const cubed = (num1 = 0, num2 = 0, num3 = 0) => {
    let calcNum = 0;

    calcNum = (num1 ** 3) + (num2 ** 3) + (num3 ** 3);
    return calcNum
}

// shorter version
// const cubed = (num1 = 0, num2 = 0, num3 = 0) => num1 ** 3 + num2 ** 3 + num3 ** 3;

let sumOfCubes = cubed(1, 5, 9);
let sumOfCubes2 = cubed(2);
let sumOfCubesEmpty = cubed();

console.log(sumOfCubes);
console.log(sumOfCubes2);
console.log(sumOfCubesEmpty);

console.log()
// 3 Word starting with [var = true if  var[content] has [content]rest_of_word

const stringStart = (init, word) => word.startsWith(init);

console.log("3:")
console.log(stringStart("bu", "button"));

let checkMe = "tri"; // check substring content
const dictonary = "button";
const dictonary2 = "triplet";
const dictonary3 = "pas";

const stringCheck = (word, checkMe) => {
    if (checkMe.startsWith(word)) {
        return true;
    } else {
        return false;
    }

}

let checkOne = stringCheck(checkMe, dictonary);
let checkOne2 = stringCheck(checkMe, dictonary2);
let checkOne3 = stringCheck(checkMe, dictonary3);
console.log(checkOne2);


console.log();
//4
const numCheck = (num) => {
    if (num <= 0) {
        return true;
    } else {
        return false;
    }
}

const result = numCheck(3);
const result2 = numCheck(0);
const result3 = numCheck(-4);
const result4 = numCheck(10);

console.log(result, result2, result3, result4);


console.log();
// 5
let stringCheckI = "this is a string";
let letterCheck = "i";

const countLetter = (string, letter) => {
    let result = 0;

    if (string.includes(letter)) {
        for (let i = 0; i <= string.length; i++) {
            if (string[i] === letter) {
                result += 1;
            };
        }
        return `Count ${result}x ${letter}`;
    } else {
        return `Your string does not contains ${letter}`;
    }
}

let firstCheck = countLetter(stringCheckI, letterCheck);

console.log(firstCheck);

// 6
const calculateBaseToExponenent = (baseNumber = 0, exponentNumber = 0) =>
    baseNumber ** exponentNumber;
console
const calculateBaseToExponent = (base = 0, exponent = 0) => {
    return (base ** exponent);
};
console.log(`Task 6:`, calculateBaseToExponent(2, 3));

console.log();
// 7
console.log();

const dogAge = (doggYears) => {
    let humanYears = 7;
    let result = doggYears * humanYears;
    return `Your doggo is ${result} years old in human years!`
}

const dogAgeResult = dogAge(4);
console.log(dogAgeResult);


// 8
function calcSuppyCorrect(years, amount) {
    const maxAge = 80;
    if (years > maxAge) {
        return "to old"
    }
    let leftYears = maxAge - years;
    return leftYears * 365 * amount;
}

console.log(calcSuppyCorrect(25, 2));


// 9
const isWaldoHere = (myString) => {
    let myNewString = '';
    myNewString = myString;
    
    console.log(myNewString);
    return myNewString.includes('waldo') || myNewString.includes('Waldo');
}


const myResult = isWaldoHere('is there wal here ?');
console.log('is waldo here? ' + myResult);
console.log('is waldo here? ' + isWaldoHere('is there wal here'));
console.log('is waldo here? ' + isWaldoHere('waldo is here'));

// 10
const equalSlices = (slices, recipients, persons) => {
    if (persons * recipients <= slices) {
        return true;
    } else {
        return false;
    }
}
console.log(equalSlices(11, 5, 3));
console.log(equalSlices(8, 3, 2));
console.log(equalSlices(8, 3, 3));
console.log(equalSlices(24, 12, 2));

// 11
const xo = (myString) => {
    let checkForX = 0; // "x"
    let checkForO = 0; // "o"
    let myNewString = myString.toLowerCase();
    for (let position = 0; position < myNewString.length; position++) {
        if (myNewString.charAt(position) === "x") {
            checkForX++;
        } else if (myNewString.charAt(position) === "o") {
            checkForO++;
        }
    }
    if (checkForO === checkForX) {
        return true;
    } else {
        return false;
    }
}
console.log(xo("ooxx"));// ➞ true
console.log(xo("xooxx"));// ➞ false
console.log(xo("ooxXm")); // ➞ true (case insensitive)
console.log(xo("zpzpzpp")); // ➞ true (returns true if no x and o)
console.log(xo("zzoo")); // ➞ false

// 12
const isPrime = (x) => {
    if (x < 2) {
        return false;
    } else {
        for (let i = 2; i < x; i++) {
            if (x % i === 0) {
                // console.log(i);
                return false;
            }
        }
    }
    return true;
}
console.log('is it prime: ', isPrime(7));
console.log('is it prime: ', isPrime(9));
console.log('is it prime: ', isPrime(10));

// 13