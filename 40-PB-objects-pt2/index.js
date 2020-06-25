"use strict";
/* Function to check if num x is in min and max range
function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}

console.log(inRange(9, 1, 10));
console.log(inRange(-5, 1, 10));
console.log(inRange(20, 1, 10));  

how to make it like in bottom but with this function?!
*/
//1
console.log()
const range = {
    min: 6,
    max: 10
}

const inRange = (num, obj) => {
    if (num >= obj.min && num <= obj.max){
        console.log(true);
    } else {
        console.log(false);
    }
}

inRange(4, {min: 0, max: 5});
inRange(4, {min: 4, max: 5});
inRange(4, {min: 6, max: 10});
inRange(5, {min: 5, max: 5});

//2
console.log()
const givenArray = [
    {tile: "N", score: 1},
    {tile: "K", score: 5},
    {tile: "Z", score: 10},
    {tile: "X", score: 8},
    {tile: "D", score: 2},
    {tile: "A", score: 1},
    {tile: "E",score: 1}
]

const scrabble = (arr) => {
    let result = 0;
    for (let numN of arr) { // instead of let i =0; i < arr.length; 1++
        result += numN.score;
     }
    /* for (let i = 0; i < arr.length; i++) {
        result += arr[i].score;
    } */
    return result;
}

console.log('The player\'s maximum score: ', scrabble(givenArray));

//3 
console.log()
const EmptyObject = (obj) => Object.keys(obj).length === 0;

console.log('ex 3', EmptyObject({}));
console.log('ex 3', EmptyObject({
    a: 1
}));

//4
console.log()
const countLetters = str => {
    let result = {};
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        count = str.split(str[i]).length - 1;
        result[str[i]] = count;
    }
    return result;
};

console.log(countLetters("tree"));

//5
console.log()
const freeShipping = (obj) => {
    let myVal = Object.values(obj);
    let sum = 0;
    for (let i = 0; i < myVal.length; i++) {
        sum += myVal[i];
    }
    return sum > 50;
}

console.log('ex 5', freeShipping({"Sponge": 3.50, "Soap": 5.99}));
console.log('ex 5', freeShipping({"Surround Sound Equipment": 499.99}));
console.log('ex 5', freeShipping({
    "Wool": 13.99,
    "Knitting Needles": 15.50,
    "Bag": 13.99
}));

//6
const programm = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
    method: function () {
        if (this.isChallenging && this.isRewarding === true) {
            return `Learning the programming languages: ${this.languages} is rewarding and challenging.`;
        }
    }
};