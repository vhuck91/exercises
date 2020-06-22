"use strict";

// task
// compare aray with string >> display highestN in array[]
const findGreatest = (array, num) => {
    let result = "";

    for (const outPutValue of array) {
        if (outPutValue > num) {
            result += outPutValue;
        }
    }
    return result;
}

const greatestN = findGreatest([3, 4, 5], 4);

console.log("What is the greatest Number?")
console.log("it's Nr." + greatestN + "\n")


// task 2
// get longest word of array
function longest(string) {
    let words = string.split(" ");
    return words.reduce((prev, next) => prev.length > next.length ? prev : next);
}
// calc the longest word in array
/* function countLongestWord(str) {
    var words = str.split(" ");
    var longestWord = "";

    for (var i = 0; i < words.length; i++) {
        if (words.length > longestWord) {
            longestWord = words[i].length;
        }
    }
    return longestWord;
}
let longWord = countLongestWord("this is a web development course");  */

console.log("Longest word of array?")
console.log(longest("this is a web development course"), "= longest word\n");

// task 3
// reverse given number
function reversNumber(numberN) {
    let countBackwords = numberN.toString().split("").reverse().join("");
    return parseInt(countBackwords);
}

const varResult = reversNumber(34532);

console.log("reverse this Number [34532] so it becomes ")
console.log(varResult, "\n");


// task 4
function vowelCount(strVowel) {
    let count = "";
    let vowels = "aeiou";

    for (let i = 0; i < strVowel.length; i++) {
        if (vowels.indexOf(strVowel[i]) > -1) {
            count++
        }
    }
    return "It has " + count + "x Vowels in the String\n";
}

console.log("how many Vowels are present in string?");
console.log(vowelCount("this is a string"))

// or
const findVowels = (str) => {
    const vowels = str.match(/[aeiou]/gi);
    return vowels.length;
}

console.log(findVowels("this is a string"));

// task 5
function missingNums(num) {
    let min = 1;
    num.sort(function (a, b) {
        return a - b;
    });

    for (let i in num) {
        if (num[i] > -1 && num[i] == min) {
            min++;
        }
    }
    return min;
}
console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));


/* // count letter i in stri
let letterCheck = "i";

const countLetter = (array, letter) => {
    let result = 0;

    if (array.includes(letter)) {
        for (let i = 0; i <= array.length; i++) {
            if (array[i] === letter) {
                result += 1;
            };
        }
        return `Count ${result}x ${letter}`;
    }
}

let firstCheck = countLetter("this is a string", letterCheck);
console.log(firstCheck); */

// task 6
// calc the cubes of given nunbers, cube = 3 aka numN³
const cubes = (numbers) => {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += Math.pow(numbers[i], 3); // or sum += numbers[i] **3 if needed to be shortest chat count
    }

    return sum;
}
let calcSumN = cubes([1, 5, 9] );
console.log("CubeN is", calcSumN, "\n");
let calcSumN2 = cubes([2]);
console.log("CubeN is", calcSumN2, "\n");
let calcSumN3 = cubes([]);
console.log("Return cube of Numbers inside an array")
console.log("CubeN is", calcSumN3, "\n");

// task 7
// Check if array matches defined letters on start
const dictionary = (string, array) => {
    let compareArray = [];

    for (let i = 0; i < array.length; i++) {
        array[i].includes(string) ? compareArray.push(array[i]) : "";
    }
    return compareArray;
}

console.log(dictionary("bu", ["button", "breakfast", "border"]));

// task 8
// genarate evenN numbers based on array input
const evenN = number => {
    const outputArray = [];

    for (let i = 1; i <= number; i++) {
        i % 2 === 0 ? outputArray.push(i) : "";
    }
    return outputArray;
}

console.log(evenN(8));
console.log(evenN(4));
console.log(evenN(2));

// alphabetical order
function alphaOrder(str) {
    const strInArr = str.split(''); // to make array from str
    const arrLetters = strInArr.sort();
    const line = arrLetters.join(""); // to make atr from array
    return line;
}
console.log("Bonus: ", alphaOrder("webdev")); // "bdeevw"