"use strict";

// task 1

// task 2
// get longest word of array
/* function longestWord(str) {
    let getLongestWord = "";
    let word = str.split(" ") // add space bar inside string of split other wise each character will be seen as word

    for (let i = 0; i < word.length; i += 1) {
        let oneWord = word[i];

        if (oneWord.lenght > getLongestWord.length) {
            getLongestWord = oneWord;
        }
    }
    return getLongestWord;
}

console.log(longestWord("this is a web development course")); */

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
// task 5

// task 6
// calc the cubes of given nunbers, cube = 3
const cubes = (numbers) => {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += Math.pow(numbers[i], 3);
    }

    return sum;
}
let calcSumN = cubes([1, 5, 9]);
console.log("Return cube of Numbers inside an array")
console.log("CubeN is", calcSumN, "\n");

// task 7