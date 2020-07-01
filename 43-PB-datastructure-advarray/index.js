"use strict";

// 1
const orders = [{
        amount: 250
    },
    {
        amount: 400
    },
    {
        amount: 100
    },
    {
        amount: 325
    }
];

const sumN = arr => {
    let sum = 0;

    for (let each of arr) {
        sum += each.amount;
    }
    return sum;
}


console.log(sumN(orders));
console.log();


//2
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

console.log(arrayOfNumbers.map(item => item + 1));
console.log();

//3
const filterEvens = arr =>
    arr.filter(number => !(number % 2));

console.log(filterEvens([1, 2, 3, 11, 12, 13])); //returns [2,12]
console.log(filterEvens([22, 2, 31, 110, 6, 13])); //returns [22,2,110,6]
console.log();

//4
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

const filterItems = (arr, str) => {
    let output = arr.filter(word => word.includes(str));

    output = output.map(word => word[0].toUpperCase() + word.slice(1));
    return output;
}

console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];
console.log();

//5
const sum = arr =>
    arr.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([6, 7, 7]));
console.log();


//6
const numberN = [4, 9, 16, 25];

const squRoot = arr =>
    arr.map(num => Math.sqrt(num));

console.log(squRoot(numberN));


//Bonus animals
const source = [{
        cow: "🐮",
        potato: "🍠",
        chicken: "🐔",
        corn: "🌽"
    }, // source

];

const cooked = source.map(function () {
    return {
        cow: "🍔",
        potato: "🍟",
        chicken: "🍗",
        corn: "🍿"
    }; // end result
});

console.log(cooked);

// right way
let first = ['🐮', '🍠', '🐔', '🌽'];

function cook(value) {
    if (value === '🐮') {
        return '🍔'
    } else if (value === '🍠') {
        return '🍟'
    } else if (value === '🐔') {
        return '🍗'
    } else if (value === '🌽') {
        return '🍿'
    }
}

const after = first.map(cook);

console.log(after);

// vegetarian
const isVegetarian(value) => {
    return (value === '🍿' || value === '🍟');
});

const vegetarianFood = processedFood.filter(isVegetarian);

console.log(isVegetarian);

// REDUCE 

function eat(prevValue, currentValue) {
    //if(prevValue || currentValue) {
    return '💩';
    //}
}
const finalOutput = processedFood.reduce(eat);
// const empty = [].reduce(eat); empty Array not possible by default 
console.log(finalOutput);
//console.log(empty);

// forEach again version
const array1 = ['a', 'b', 'c'];
// developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
function consoleLog(el, index, array) {
    array[index] = el.toUpperCase();
    console.log(el);
}

array1.forEach(consoleLog);
console.log(array1);