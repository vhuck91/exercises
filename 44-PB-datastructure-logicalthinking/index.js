"use strict";

// sort list array from low to high
/* Pseudo code
const numberN(array) = [aray1, aray2...]

const (function; arrow) numberArray = arr {
    get sortNumbers = array with .sort(a, b => a-b)
    return sortnumbers
}
consol.log sort numbers(numberN) aka array of given numbers
*/

const numberN = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];

const sortNumbers = array => {
    let sort = array.sort((a, b) => a - b);
    return sort;
}

console.log(sortNumbers(numberN));
console.log();

// Sort by alphabeth 
/* Pseudo code
array of names = [aray1, aray2...]

function (arrow) {
    get sort = aray.sort()
    return sort
}
consol.log(functionArrow (aray of Names))
*/

const arrayOfNames = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];

const sortNames = array => {
    let sort = array.sort();
    return sort;
}

console.log(sortNames(arrayOfNames));
console.log();

// Bonus see 1 & 2

// Bonus 2
// like first but with .length in sort section
const sortWords = ["house", "car", "digimon", "pokemon", "car", "big"];

const orderNamesForLength = array => {

    let order = array.sort((a, b) => a.length - b.length);
    return order;

}

console.log(orderNamesForLength(sortWords));
