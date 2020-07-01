"use strict";

// 1
/* let fruit;
let vegetable;
let food;

fruit = ["banana"];
vegetable = ["cucumber"]
food = ["bread", "cakes", "pizza"];
console.log(fruit);
console.log(vegetable);
console.log(food); */

let fruit,
    vegetable,
    food;

[fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];
console.log("Fruits:", fruit, "Vegetables:", vegetable, "Foods:", food);

console.log();
//2
const halloween = {
    fran: "witch",
    peter: "spider",
    reaper: "death"
};

let fran, peter, reaper;
({
    fran,
    peter,
    reaper
} = halloween);


console.log(peter);
console.log(fran);
console.log(reaper);

console.log();
//3.
/* Also possible
const musicianDetails = {
    name: "Regina Spektor",
    genre: "indie-pop",
    hit: "us",
    nationality: "american-russian",
    type: "singer-songwriter and pianist"
};

function musician({
    name,
    genre,
    hit,
    nationality,
    type
}) {
    return `${name} is a ${nationality} ${type}. The musician sings ${genre} and their greatest hit is "${hit}".`;
}
console.log(musician(musicianDetails)); */


let name2, nationality2, genre2, greatestHit2;
({
    name2,
    nationality2,
    genre2,
    greatestHit2
} = {
    name2: "Slipknot",
    nationality2: "American",
    genre2: "Nu Metal",
    greatestHit2: "Sulfur"
});

console.log(`${name2} is a ${nationality2} band. They make ${genre2} and their greatest hit is ${greatestHit2}.`);