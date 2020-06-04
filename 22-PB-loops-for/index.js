"use strict";
// 1
let sum = 0;
for (let i = 1; i <= 20; i++) {
    sum = sum + i;
} console.log(sum);


// 2
for (let i = 1; i < 6; i++) { // i = 1, cuz its defined and pc counts from 0
    console.log(`The is ${i} bottle of beer at the wall`);
}

// 3 use if else cuz we have if this then that issue
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}
/* 
alternative same like 2 
for (let i = 0; i < 20; i++) {
    console.log(`${i} is ${i % 2 === 0 ? "even" : "odd"}`);
}
*/


// 4
for (let i = 0; i <= 10; i++) {
    console.log(`${i} * 9 = ` + i * 9);
}
/* Explained what happens
let myString = '';
for (let i = 0, multiple = 0; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        myString = myString + ' ' + (j * i);
    }
    multiple = i * 9;
    console.log(`${i} * 9 = ${multiple}`);
}
*/


// 5 wait likes last task but only without let outside of for ???
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// 6

sum
for (let i = 0; i < 1000; i++)
{
    if (i % 3 === 0 || i % 5 === 0)
    {
       sum += i;
    }
}
console.log(sum);


// 7 Bonus: write sum with steps inbetween
for (let i = 1; i <= 10; i++) {
    let multiNum = i * 2; // just replace 2 with number u want to miltiply with
    console.log(multiNum);
}

/// Closer look for 7 and 8
let hundred = '';
for (let i = 100; i <= 1000; i += 100) {
    console.log('7.a ' + i);


    hundred = hundred + ' ' + i;
}
console.log(hundred);

let multiple2 = ''
for (let j = 1; j <= 128; j = j * 2) {
    console.log('7.b ' + j);



    multiple2 = multiple2 + ' ' + j;
}
console.log(multiple2);

let plus2 = '';
for (let i = 0; i <= 10; i += 2) {
    console.log('7.c ', i);




    plus2 = plus2 + ' ' + i;
}
console.log(plus2);

let plus3 = '';
for (let i = 3; i <= 15; i += 3) {
    console.log('7.d ', i);


    plus3 = plus3 + ' ' + i;
}
console.log(plus3);

let minus = '';
for (let i = 9; i >= 0; i--) {
    console.log('7.e ', i);


    minus = minus + ' ' + i;
}
console.log(minus);

let many = '';
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log('7.f ', i);



        many = many + ' ' + i;
    }
}
console.log(many);

let toFour = '';
for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 4; j++) {
        console.log('7. j', j);


        toFour = toFour + ' ' + j;
    }
}
console.log(toFour);
// 8.
console.log('ex.8');
let myString8 = 'madam';
let myLength = myString8.length;
let palindrome = false;
for (let i = 1, first = '', last = ''; i <= myLength; i++) {
    //  console.log(myString[myString.length - i]);
    //  console.log(myString[i-1]);
    last = myString8[myString8.length - i];
    first = myString8[i - 1];
    if (first === last) {
        palindrome = true;
    } else {
        palindrome = false;
        i = myLength + 1;
    }
}
console.log(palindrome);

// second solution


let inputString = "12345";
let compareString = "";
for (let i = inputString.length; i >= 1; i--) {
    compareString += inputString[i - 1];
    //   console.log(compareString);
}
console.log(
    inputString === compareString ?
    `'${inputString}' is a palindrome. :)` :
    `'${inputString}' is not a palindrome. :(`
);