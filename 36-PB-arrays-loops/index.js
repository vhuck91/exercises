"use strict";


// 1) add up min. 3 numbers and return the sum
const sum = (array) => {

    let sumReseult = 0;

    for (let numN of array) {
        if (parseFloat(numN)) sumReseult += parseFloat(numN);
    }
    return sumReseult + " Is the result if we add up " + array + " together\n"
}
console.log("Task 1")
console.log(sum([1, 4.4, 3]))


// 2) creat array that returns all own content in a loop e.g. Hallo Mark!, Hallo Steven!
console.log("Task 2")
const nameX = (array) => {
    let namesGiven = array;

    for (let i in namesGiven) {
        console.log("Hallo " + namesGiven[i] + "!");
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
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            array[i]--;
        } else {
            array[i]++;
        }
    }
    return array;
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

console.log(unique([1, 4, 4, 7, 7, 7]));
console.log(unique([1, 6, 6, 9, 9]));
console.log(unique([2, 2, 2, 2, 2, 2]));