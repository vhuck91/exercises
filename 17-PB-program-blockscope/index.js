`use strict`;

// Case 1
let determiner = 1;
let x = null;
if (determiner < 0) {
    x = `less than 0`;
} else {
    x = `greater or equal to 0`;
}
console.log(x)

// Case 2
let updater = null;
if (determiner >= 0) {
    updater = `Greater or equal`;
    let massage = updater + `[Positive integer]`
    // console.log(massage) (can be hádded here if i want to check what I am doing or debug)
} else {
    updater = `Les than 0`;
}
console.log(`//What is updater\n` + updater);
// Anwser: if print msg. out side of it will be a defined var

// Case 3
// Use ternary example if its a simple if else question
let age = 18;

if (age >= 18) {
    console.log("i can vote");
    drive = true;
} else {
    console.log("i cannot vote");
    drive = false;
}
console.log(`// Are you older then 18\n` + drive)