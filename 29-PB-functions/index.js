"use strict";

// 1. add up number 4 times while 1 times is +1 (eturn 10 because 1 + 2 + 3 + 4 = 10)
const addUp = (numberX) => {
    let summe = 0;

    for (let i = 0; i <= numberX; i++) {
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

let sumOfCubes = cubed(1, 5, 9);
let sumOfCubes2 = cubed(2);
let sumOfCubesEmpty = cubed();

console.log(sumOfCubes);
console.log(sumOfCubes2);
console.log(sumOfCubesEmpty);

console.log()
// 3 Word starting with [var = true if  var[content] has [content]rest_of_word
/* 
bs from my site cuz I say that var1 & var2 are true rest is false 
const dictionary = (string1, string2) => {
    let result = string2.startsWith(string1) ? true : false;
    return result;
}
*/

// strict version if 100% true; includes capital or lowercase as property
let dictionaryCheckMe = "bu"; // over write to check other parameters [tri] [beau]

const dictionary = "bu";
const dictionary2 = "tri";
const dictionary3 = "pastry";


function CompareString(language) {
    if (dictionaryCheckMe.indexOf(language) >= 0) {
        console.log(language + " [✓] True");
    } else {
        console.log(language + " [x] False");

    }
}

CompareString(dictionary);
/*  note requeres change in var const and let + output */

// 
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
const numCheck = (num) =>{
    if (num <= 0){
        return true;
    } else {
        return false;
    }
}

const result = numCheck(3);
console.log(result);


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


// 9


// 10


// 11


// 12


// 13