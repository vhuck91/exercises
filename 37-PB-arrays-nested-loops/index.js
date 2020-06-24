"use strict";

// 1) draw half tree
const starNestedArray = (character, lines) => {

    let characterStr = character;
    let runArray = [];

    for (let i = 0; i < lines; i++) {
        runArray = [];
        for (let j = 0; j <= i; j++) {
            runArray.push(characterStr);
        }
        console.log(runArray.join(" "));
    }
    return "";
}

/* // alternativ
const halfPyramid = (lines) => {
    let array = [];

    for (let i = 0; i < lines; i++) {
        for (let j = 0; j <= i; j++) {
            array.push("*")
        }
        array.push("\n")
    }
    return array.join("")
}

console.log(halfPyramid(3)) */

console.log(starNestedArray("+", 4));
console.log()
// 2) loop charecters of array from outer loop 
let arr = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

const numArray = (array) => {

    for (let i = 1; i < array.length; i++) {
        console.log(`Row ${i}`);

        for (let j = 0; j < array[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}

numArray(arr);
console.log()


// 3) put out loops with diffrent 
// pattern 1 = numN 3x in loop with NumX
// pattern 2 = 0-4 print 3
const numNArray = (times, numN) => {
    const outputArray = [];

    for (let i = 0; i < times; i++) {
        if (numN > 0) {
            for (let j = 0; j < numN; j++) {
                outputArray.push(i + 1);
            }
        } else if (numN < 0) {
            for (let j = 0; j <= Math.abs(numN); j++) {
                outputArray.push(j);
            }

        }
    }
    return outputArray.join("");
}

console.log(numNArray(4, 3));
console.log(numNArray(3, -4));
console.log(numNArray());