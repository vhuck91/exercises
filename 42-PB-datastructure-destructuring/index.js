"use strict";

// 1
let fruit;
let vegetable;
let food;

fruit = ["banana"];
vegetable = ["cucumber"]
food = ["bread", "cakes", "pizza"];
console.log(fruit);
console.log(vegetable);
console.log(food);

console.log();
//2
const halloweenObj = {
    fran: "witch",
    peter: "spider",
    reaper: "death"
};

// let fran, jim, pam;
console.log(halloweenObj.peter);
console.log(halloweenObj.fran);
console.log(halloweenObj.reaper);

console.log();
//3.
const musicianDetails = {
    name: "Regina Spektor",
    genre: "indie-pop",
    hit: "us",
    nationality: "american-russian",
    type: "singer-songwriter and pianist"
};

function musician({name, genre, hit, nationality, type}) {
    return `${name} is a ${nationality} ${type}. The musician sings ${genre} and their greatest hit is "${hit}".`;
}
console.log(musician(musicianDetails));