"use strict"
// 1a
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
console.log();


// 1b add new var with string of 
let secondItem = euroCities[1];
console.log(secondItem);
console.log();


// 2 first item change to berlin
euroCities[0] = "Berlin";
console.log(euroCities);
console.log("");


// 3 lengh of array "euroCities" aka count arrays
console.log(euroCities.length)
console.log();


// 4 remove last item of arays
euroCities.pop();
console.log(euroCities);
console.log();


// 5 just add Nudapest to array
euroCities.push("Budapest");
console.log(euroCities);
console.log();


// 6 remove arrays by selecting them if i know position of them
euroCities.splice(1, 2);
console.log(euroCities);
console.log("");

// 7 creat second var "asianCitys" 5 citys
const asianCities = ["Macau", "mekka", "Teheran", "Seoul", "Tokio"];
console.log(asianCities);
console.log("");

// 8 select array 1 and 4 print out with new var
let arraySlice = asianCities.slice(1, 4);
console.log(arraySlice);
console.log("");

// 9 use 2 array vars together in one big var, liek var newCitys = [array] + [array2]
var comboCitys = asianCities.concat(euroCities);
console.log("Combo city//", comboCitys);
console.log("");

// 10 reverse order of citys
comboCitys.reverse();
console.log(comboCitys);
console.log("");

//11 replace the 3th array of comboCitys with "Toronto".
comboCitys.splice(2, 2, "Toronto")
console.log("11:", comboCitys);
console.log("");

//12 inser "washington at second position"
comboCitys.splice(1, 0, "Washington");
console.log("12:", comboCitys);
console.log("");

// 13 i dont get what


// bonus function spelled backwords with arrays
let strWord = "Hallo"

function reverseString(str) {
    return str.split("") // all letters as one element splited
    .reverse() // reversed order
    .join(""); // join = combine arays without space inbetween
}

console.log(reverseString(strWord));