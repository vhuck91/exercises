"use strict";

//1 
console.log("\nTask 1:");
class Dog {
    constructor(name) {
        this.name = name;
    }
    bark = function () {
        console.log(`${this.name} says woof`);
    }
};

let fido = new Dog("fido");
fido.bark();


//2
console.log("\nTask 2:");

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const getMonthName = (num) => {
    try {
        if (num <= 12) {
            return months[num - 1];
        } else {
            throw new Error('Invalid Month Number!');
        }

    } catch (e) {
        return e;
    }
}
console.log(getMonthName(13));
console.log(getMonthName(12));git 



// 3. Reverse string
console.log("\nTask 3:");
function reverseString(str) {
    try {
        if (typeof (str) === "string") {
            return str.split("").reverse().join("");
        } else {
            throw new Error("ERROR! This is not a string!");
        }
    } catch (e) {
        return e;
    }
}

console.log(reverseString("How are you?"));
console.log(reverseString(15));
console.log(reverseString(true));


// fix given function
console.log("\nTask 4:");
function compareArrays(arr1, arr2) {
    if (arr1.join('|') === arr2.join('|')) {
        return true;
    } else {
        return false;
    }
}


console.log(compareArrays([1, 2], [1, 3])); // false
console.log(compareArrays([1, 2], [1, 2])); // true
console.log(compareArrays([4, 5, 6], [4, 5, 6])); // true
console.log(compareArrays([4, 7, 6], [4, 5, 6])); // false 


//5 Recursion
console.log("\nTask 5:");
function sum(array) {
    if (array.length === 0) { // base case 
        return 0;
    } else {
        return array[0] + sum(array.slice(1));
    }
}

console.log(sum([1, 2, 3]));