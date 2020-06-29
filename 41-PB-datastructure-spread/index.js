"use strict";

//1
const euroCountries = ["italy", "spain", "france", "germany"];
const asianCountries = ["japan", "cina", "india", "singapore"];

for (let country of asianCountries) {
    euroCountries.push(country);
}
console.log(euroCountries);


//1b
let combinedCountries1 = euroCountries + asianCountries; //we get a string
let combinedCountries2 = [...euroCountries, ...asianCountries]; //we get an array //unpack
let combinedCountries3 = [].concat(euroCountries, asianCountries); //also get an array //concat
let combinedCountries4 = euroCountries.concat(asianCountries); //same concat as before in a different way

console.log(combinedCountries1, combinedCountries2, combinedCountries3);

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

console.log();
//4
const varNumNmin = [-1,0,3,45, 66, 2, 99];

function arrayNumberNmin(varNumN) {
  return Math.min.apply(Math, varNumN);
}

console.log(arrayNumberNmin(varNumNmin));

console.log();
//5
const person = {name: "John"};
const job = { role: "Teacher" };

const personClone = { ...person };
console.log(personClone);

console.log();
// 5.2
const employee = { ...person, ...job };
console.log(employee);

console.log();
// 5.3
employee.name = "Max";
employee.role = "Student";
console.log(employee);

//6
const isWhole = (num1, num2,num3, num4) => {
    let avarage = (num1 + num2 + num3 +num4) / 4;
    return Number.isInteger(avarage);
}

console.log(isWhole(1, 2, 3, 4));
console.log(isWhole(9, 2, 2, 5));
console.log(isWhole(1, 1, 1, 1));