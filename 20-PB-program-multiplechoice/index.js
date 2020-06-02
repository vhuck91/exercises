"use strict";
/* [lookup colors]

let red = "C: Red";
let blue = "C: Blue";
let green = "C: Green";
let yellow = "C: Yellow";
*/

// 1 Print Color

let selectedColor = "red"

switch (selectedColor) {
    case "red":
        console.log("Red is Selected");
        break;
    case "blue":
        console.log("Blue is Selected");
        break;
    case "green":
        console.log("Green is Selected");
        break;
    case "yellow":
        console.log("Yellow is Selected");
        break;
    default:
        console.log("No color Selected");
}

// 2 Grade
let gradeStatus = "E"

switch (gradeStatus) {
    case "A":
        console.log("A = [90 - 100%]");
        break;
    case "B":
        console.log("B = [80 - 89%]");
        break;
    case "C":
        console.log("C = [70 - 79%]");
        break;
    case "D":
        console.log("D = [60 - 69%]");
        break;
    default:
        console.log("Do not come home...");
}

// 3 Fruit
let getFruit = "apple"

switch (getFruit) {
    case "banana":
        console.log("Banana is a fruit;");
        break;
    case "orange":
        console.log("Orange is a fruit");
        break;
    case "strawberry":
        console.log("Strawberry is a fruit");
        break;
    case "apple":
        console.log("Apple is a fruit");
        break;
    default:
        console.log("Its not a fruit");
}

let satusPrecent = 31;
if (satusPrecent < 30) {
    console.log('Still a long way to go');
} else if (satusPrecent >= 30 && satusPrecent >= 50) {
    console.log('Slowly getting there');
} else if (satusPrecent >= 51 && satusPrecent >= 80) {
    console.log('You can do it!');
} else if (satusPrecent >= 81 && satusPrecent >= 99) {
    console.log('This is the last push!');
} else {
    console.log('You\'re there.Well done!');
}

/*
Display all possible states at once

let colorName;
let colorNameNum = new Array(0 - 2);
colorNameNum[0] = "Red"
colorNameNum[1] = "Blue"
colorNameNum[2] = "Green"
colorNameNum[3] = "Yellow"

console.log(colorNameNum)
*/