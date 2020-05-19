"use strict"

// 01 add var w/ "txt1" >> print [park] in console
let txt1 = "I can walk in the park all day!";
console.log(txt1.substring(18, 22));

// 02 add var w/ "txt2" >> display "txt2" UpperCase
let txt2 = "Hello World";
txt2 = txt2.toUpperCase(); // save var property to Uppercase, else solution = console.log(txtContentSecond.toUpperCase)
console.log(txt2);

// 03 add var w/ "txt3" >> display "txt3" LowerCase
let txt3 = "Hello Earthling";
txt3 = txt3.toLowerCase();
console.log(txt3);

// 04 add var w/ "txt4" >> print charSet= aSc f/ "txt4"
let txt4 = "JavaScript";
txt4 = txt4.substring(3, 6); // subString (startChar, endChar)
console.log(txt4);

// 05 check var "txt5" if char = (l or| n) set t/ truth
let txt5 = "nice shoes";
let txtResultL = txt5.includes("l") ? "L is present" : "L is missing";
let txtResultN = txt5.includes("n") ? "N is present" : "N is missing";
console.log(txtResultL, "and", txtResultN);

// 06 add first char of var "txt6" :before & :after var
let txt6 = "Bananas";
let charStringCombo = txt6[0] + txt6 + txt6[0];
console.log(charStringCombo);

// 07 like 06 but with charSet = last 3 charecter
let txt7 = "Hildryn";
let treeCharString = txt7.slice(-3) + txt7 + txt7.slice(-3); // else select CharSet from end of word 3 times
console.log(treeCharString);

// 08 switch :first and :last char of var "txt8"
let txt8 = "First";
let switchedChar = txt8[txt8.length - 1] + txt8.substring(1, 4) + txt8[0];
console.log(switchedChar);

// 09 add 3x var >> print sentence using interpolation strings
let firstName = "Vadim";
let levelRank = "27";
let gameTitle = "Warframe";
console.log(`${firstName} is LV${levelRank} in ${gameTitle}.`);

// 10
let stringTen = "the quick brown fox";
stringTen = stringTen[0].toUpperCase() + stringTen.substr(1);
console.log("10.", stringTen);