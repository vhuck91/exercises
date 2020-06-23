"use strict";


// 1) add up min. 3 numbers and return the sum
const sum = (array) => {

    let sumReseult = 0;

    for (let numN of array) { // instead of let i =0; i < arr.length; 1++
       sumReseult += parseFloat(numN);
    }
    return sumReseult + " Is the result if we add up " + array + " together\n"
}
console.log("Task 1")
console.log(sum([1, 4, 3, 0]))


// 2) creat array that returns all own content in a loop e.g. Hallo Mark!, Hallo Steven!
console.log("Task 2")
const nameX = (array) => {
    let namesGiven = array;

    for (let names in namesGiven) {
        console.log("Hallo " + namesGiven[names] + "!");
    }
}
nameX(["Frank", "tom"]);
console.log();

// let outside if we get array from Form field for example
let formInfo = [
    {name: "Mark", lastname: "Kranz"},
    {name: "Woody", lastname: "Alien"}, 
    {name: "Matilda", lastname: "Findlay"}
];

function getAllNames(array) {
    let outputString = "";
    for (let i = 0; i < formInfo.length; i++) {
        outputString += "Hallo " + formInfo[i].name + " " + formInfo[i].lastname + "!\n";
    }
    return outputString;
}

console.log(getAllNames())


// 3) create a loop of city names
console.log("Task 3")
const cityNames = (array) => {
    
    let str = '';
    
    for (let i = 0; i < array.length; i++) {
        str += array[i] + ',';
    }
    return str;
}
console.log(cityNames(['Berlin', 'Paris', 'Prague', 'Rome']));
console.log()


// 4) add +1 to each number in array Numbers have to be even for set true;
console.log("Task 4")

const oddsAndEvens = (array) => {
    let myArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            myArray.push(array[i]- 1)
        } else {
            myArray.push(array[i]+ 1);
        }
    }
    return myArray;
}

console.log(oddsAndEvens([3, 5, 2, 4]));
console.log(oddsAndEvens([6, 9, 10, 20]));
console.log();

// 5 capitalize fist letter of array
console.log("Task 5")
const capitalize = arr => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase());
    }
    return result;
}

console.log(capitalize(["matt", "sara", "lara"])); // ➞ ["Matt", "Sara", "Lara"]
console.log(capitalize(["samuel", "MARIA", "luke", "mary"])); // ➞ ["Samuel", "Maria", "Luke", "Mary"]
console.log(capitalize(["Cynthia", "Karen", "Jane", "Carrie"])); // ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

// 6 dell all duplicated charecters/numbers
console.log("Task 6")
const unique = array => {
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    var unique = array.filter(onlyUnique);
    return unique;
}

console.log(noDuplicates([1, 6, 6, 9, 9])); // ➞ [1, 6, 9]
console.log(noDuplicates([2, 2, 2, 2, 2, 2])); // ➞ [2]
console.log(noDuplicates([5, 10, 15, 20, 25])); // ➞ [5, 10, 15, 20, 25]
console.log();

// right solution
function noDuplicates(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            // we don't have it already
            newArray.push(array[i]);
            // we push it once!
        }
    }
    return newArray;
}
console.log(noDuplicates([1, 6, 6, 9, 9])); // ➞ [1, 6, 9]
console.log(noDuplicates([2, 2, 2, 2, 2, 2])); // ➞ [2]
console.log(noDuplicates([5, 10, 15, 20, 25])); // ➞ [5, 10, 15, 20, 25]


// 7
console.log("\n7:");

const repeatIt = (item, times = 1) => {
    const OUTPUT_ARRAY = [];

    for (let i = 1; i <= times; i++) {
        OUTPUT_ARRAY.push(item);
    }
    return OUTPUT_ARRAY;
}

console.log(repeatIt("example", 3)); //➞["example", "example", "example"]