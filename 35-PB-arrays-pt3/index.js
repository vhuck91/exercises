"use strict"

// 1 show only words with 4 words
const isFourLetters = array => {
    const outputArray = [];

    for (let i = 0; i < array.length; i++) {
        array[i].length === 4 ? outputArray.push(array[i]) : "";
    }
    return outputArray;
}

console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));
console.log(isFourLetters(["Tomato", "Corn", "Lettuce"]));
console.log(isFourLetters(["Dog", "Cat", "Deer"]));


// 2 chose numberN (e.g. 12) and return the month name inside function
const getMonth = monthNumber => {
    let monthName = ["Januar", "Febuar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

    return monthName[monthNumber - 1];
}

console.log(getMonth(3));
console.log(getMonth(12));
console.log(getMonth(6));

/*  non function way
let months = {'01':'Jan', '02':'Feb'};
console.log( months['01'] ); */


// 3  if number devideble by (modolo) 4 then push number 4 to end else multiply it by 10
const amplify = number => {
    const outputArray = [];

    for (let i = 1; i <= number; i++) {
        i % 4 !== 0 ? outputArray.push(i) : outputArray.push(i * 10);
    }
    return outputArray;
}

console.log(amplify(4));
console.log(amplify(3));
console.log(amplify(25));


// 4 write function that display unique character
function unique(array) {
    let number = array[0];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i-1] !== array[i]) {
            number = array[i-1];
        }
    }
    return number;
}

console.log(unique([3, 3, 3, 7, 3, 3]));
console.log(unique([0, 0, 0.77, 0, 0]));
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1]));

/* // display all unic charecters in array only once
const unique = array => {
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    var unique = array.filter(onlyUnique);
    return unique;
}

console.log(unique([3, 3, 3, 7, 3, 3]));
console.log(unique([0, 0, 0.77, 0, 0]));
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1])); */


// 5 rank words bbased on letters
const wordRank = string => {
    const wordArray = string.split(" ");
    let highestValue = 0;
    let highestPosition = 0;
    let word = "";
    let wordValue = 0;

    for (let i = 0; i < wordArray.length; i++) {
        wordValue = 0;
        word = wordArray[i];

        for (let ii = 0; ii < word.length; ii++) {
            switch (word[ii]) {
                case "a":
                    wordValue += 1;
                    break;
                case "b":
                    wordValue += 2;
                    break;
                case "c":
                    wordValue += 3;
                    break;
                case "d":
                    wordValue += 4;
                    break;
                case "e":
                    wordValue += 5;
                    break;
                case "f":
                    wordValue += 6;
                    break;
                case "g":
                    wordValue += 7;
                    break;
                case "h":
                    wordValue += 8;
                    break;
                case "i":
                    wordValue += 9;
                    break;
                case "j":
                    wordValue += 10;
                    break;
                case "k":
                    wordValue += 11;
                    break;
                case "l":
                    wordValue += 12;
                    break;
                case "m":
                    wordValue += 13;
                    break;
                case "n":
                    wordValue += 14;
                    break;
                case "o":
                    wordValue += 15;
                    break;
                case "p":
                    wordValue += 16;
                    break;
                case "q":
                    wordValue += 17;
                    break;
                case "r":
                    wordValue += 18;
                    break;
                case "s":
                    wordValue += 19;
                    break;
                case "t":
                    wordValue += 20;
                    break;
                case "u":
                    wordValue += 21;
                    break;
                case "v":
                    wordValue += 22;
                    break;
                case "w":
                    wordValue += 23;
                    break;
                case "x":
                    wordValue += 24;
                    break;
                case "y":
                    wordValue += 25;
                    break;
                case "z":
                    wordValue += 26;
                    break;
            }
        }
        if (wordValue > highestValue) {
            highestValue = wordValue;
            highestPosition = i;
        }
    }
    return wordArray[highestPosition];
}

console.log(wordRank("The quick brown fox."));
console.log(wordRank("Nancy is very pretty."));
console.log(wordRank("Check back tomorrow, man!"));
console.log(wordRank("Today is Wednesday."));


// 6 leech speak
const hackerSpeak = string => {
    let funcString = string
    const replaceCharacter = [null, /a/gi, "4", /e/gi, "3", /i/gi, "i", /o/gi, "0", /s/gi, "5"];

    for (let i = 1; i <= 9; i = i + 2) {
        funcString = funcString.replace(replaceCharacter[i], replaceCharacter[i + 1]);
    }
    return funcString;
}

console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));