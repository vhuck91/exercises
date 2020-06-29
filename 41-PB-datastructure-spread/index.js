"use strict";

//1
const euroCountries = ["italy", "spain", "france", "germany"];
const asianCountries = ["japan", "cina", "india", "singapore"];

for (let country of asianCountries) {
    euroCountries.push(country);
}
console.log(euroCountries);

console.log()
//2
let otherArray = ["coding", "is", "fun"];
let copyArray = [...otherArray];

console.log(copyArray);

console.log();
//3
const varNumN = [-1,0,3,45, 66, 2, 99];

function arrayNumberN(varNumN) {
  return Math.max.apply(Math, varNumN);
}

console.log(arrayNumberN(varNumN));
