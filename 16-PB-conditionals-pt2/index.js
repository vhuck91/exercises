`use strict`;
// Data of Makr & Jon (height & weight ==> calc BMI
let heightMark = 1.60;
let weightMark = 66.65;
let heightJohn = 1.80;
let weightJohn = 76;

let markBMI = weightMark / (heightMark * heightMark);
let johnBMI = weightJohn / (heightJohn * heightJohn);

// compare John and Mark BMI
let isBiggerBMI = markBMI > johnBMI;console.log(isBiggerBMI);

// Question + anwser
console.log(`Q: Is Mark\'s BMI higher than John\'s? \nA:Yes, it's ${isBiggerBMI}\n`);
// Compare with result anwser
if (markBMI > johnBMI) {
    console.log(`Mark\ 's BMI is ${markBMI.toFixed(2)} and it is bigger than John\'s`);
} 
else {
    console.log(`John\'s BMI is ${johnBMI.toFixed(2)} and it is bigger than Mark\'s`);
}

