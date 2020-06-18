"use strict";
// 1a
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
console.log(euroCities);


// 1b take second city(array) and print it out in second item var
let secondItem = euroCities[1];
console.log(secondItem);
console.log();


// 2 first item change to berlin
euroCities[0] = "Berlin";
console.log(euroCities);
console.log("");


// 3 lengh of array "euroCities" aka count arrays
console.log(euroCities.length);
console.log();


// 4 remove last item of arays
euroCities.pop(); //method
console.log("4", euroCities);
console.log();


// 5 just add Budapest to array
euroCities.unshift("Budapest"); // also push is possible
console.log(euroCities);
console.log();


// 6 remove arrays by selecting them if i know position of them
euroCities.splice(1, 2); // position second number amount of removed arrays afterwords
console.log("6", euroCities);
console.log("");

// 7 creat second var "asianCitys" 5 citys
const asianCities = ["Macau", "mekka", "Teheran", "Seoul", "Tokio"];
console.log("7", asianCities);
console.log("");

// 8 select array 1 and 4 print out with new var
const arraySlice = asianCities.slice(1, 4);
console.log("8////", arraySlice);
console.log("");

// 9 use 2 array vars together in one big var, liek var newCitys = [array] + [array2]
const comboCitys = asianCities.concat(euroCities);
console.log("Combo city//", comboCitys);
console.log("");

// 10 reverse order of citys
comboCitys.reverse();
console.log(comboCitys);
console.log("");

//11 replace the 3th array of comboCitys with "Toronto".
comboCitys.splice(2, 1, "Toronto");
comboCitys[2] = "Toronto"; // simpler way
console.log("11:", comboCitys);
console.log("");

//12 inser "washington at second position"
comboCitys.splice(1, 0, "Washington"); // 1 = position 0 = how much items to del "toronto" = what to insert
console.log("12:", comboCitys);
console.log("");

// 13 i dont get what
console.log("13:", comboCitys.join(", ")) // .join= combine all arrays together; ("") defines spacer between array

// bonus function spelled backwords with arrays
let strWord = "Hallo"

function reverseString(str) {
    return str.split("") // all letters as one element splited
        .reverse() // reversed order
        .join(""); // join = combine arays without space inbetween
}

console.log(reverseString(strWord));