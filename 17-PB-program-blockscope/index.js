`use strict`;

// Case 1
let determiner = 1;
let x= ``

x = determiner > 0 ? `Greter or equal 0` : `Less then 0`
console.log(`//What is x\n`+ x);

// Case 2
let updater = ``
if (determiner >= 0){
    updater = `Greater or equal`;
    let massage = updater +  `[Positive integer]`
    //console.log(massage)
} else {
    updater = `Les than 0`;
    let massage = updater + `[Positive integer]`
}
console.log(`//What is updater\n`+ updater); 
// Anwser: if print msg. out side of it will be a defined var

// Case 3
// Use ternary example if its a simple if else question
let age = 18;
if (age >= 18){
    let statmentMSG = true;
} else {
    let statmentMSG = false;
}
console.log(`// Are you older then 18\n`, age >= 18 ? `U are` : `No U are not`)

/*
let dlc = ``;
if (dlc === bought){
    let bought = `You bought DLC`;
} else {
    let notBought = `You can buy DLC`
}
console.log(dlc);
*/