"use strict"

// 1

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
        i % 4 === 0 ? outputArray.push(i) : outputArray.push(i * 10);
    }
    return outputArray;
}

console.log(amplify(4));
console.log(amplify(3));
console.log(amplify(25));


// 4 write function that 

const unique = array => {
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    var unique = array.filter(onlyUnique);
    return unique;
}

console.log(unique([3, 3, 3, 7, 3, 3]));
console.log(unique([0, 0, 0.77, 0, 0]));
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1]));


// 5



// 6
console.log("\n6:0");

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