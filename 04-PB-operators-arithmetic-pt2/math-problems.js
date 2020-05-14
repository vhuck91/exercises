"use strict";

// q1
let tiketPrice = 6450;
let tiketSold = 15;
let result = tiketPrice * tiketSold;

console.log(
    new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 })
    .format(result) + " USD"
);

// q2
const INCOME_SYLVIA = 500;
const WEEK_DURATION = 3;
let paymentMonth = INCOME_SYLVIA * WEEK_DURATION;
let payYear = paymentMonth * 12;
console.log(
    new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 })
    .format(payYear) + " USD"
);

//q3
let number1 = 17;
let number2 = 30;

console.log(Math.floor((number1 / number2) * 100));

// q4
const SQUARE_SIDE = 4.75
let parSquare = 4 * SQUARE_SIDE;

console.log(parSquare);

// q5
let a = 5;
let b = 6;
let c = 7;
let p = a + b +c;
console.log(p);

// q6
let baseSquare = 5;
let areaSquare = 4 * baseSquare;
console.log(areaSquare);

// q7 ehe what

//q8
let volumeSquare = (9^4)
console.log(volumeSquare);

// q9
function percentage(num, per){
return (num/100)*per;
}
          
let tipp1 = (percentage(22.35, 10));
let tipp2 = (percentage(22.35, 10));
let tipp3 = (percentage(22.35, 10));

console.log(tipp1, tipp2, tipp3);

// q10
let hoursPerDay = (8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4) / 10;
console.log(hoursPerDay);

// Q11.
let averageAfter = 85 * 6 - 75 - 70 - 85 - 90 - 100;
console.log('score in the sixth test: ' + averageAfter);

//Q12. 
let averageNow = 78 * 8;
let averageMust = 80 * 9;
let minimum = averageMust - averageNow;
console.log('james needs a minimum of ' + minimum + '%');
