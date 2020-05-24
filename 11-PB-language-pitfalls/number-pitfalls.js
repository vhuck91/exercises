`use strict`
//1 NaN = Not a Number
console.log(`is Hello NaN: ${isNaN('Hello')}`);
console.log(`is 3 NaN: ${isNaN(3)}`);
console.log(`type of NaN: ${typeof NaN}`);

// 2
let floatNumber = 0.1 * 0.2;
floatNumberResult = floatNumber.toFixed(2);
console.log(floatNumberResult);

// 3
console.log(Infinity / 0); // infinity/0
console.log(Infinity / Infinity); // infinity/infinity
console.log(1 / 0); // 1/0

console.log(`Infinity / 0 result:` + (Infinity/0));
console.log(`1 / 0 result:` +(1/0));
console.log(`Infinity : Infinity result:` + (Infinity/Infinity))
