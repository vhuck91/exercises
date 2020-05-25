`use strict`;

// 0 define a = true and b = false
let a = true;
let b = false;

// 1 a) Check results of a AND b
console.log("Result of a and b is\n" + (a && b) + "\n");
// b) result of a OR b
console.log("Result of a OR b is\n" + (a || b) + "\n");
// c) NOT (a AND b)
console.log("Result of NOT a AND b is\n" + !(a && b) + "\n");


//2 Declare variabels x, y, z with numbers
let x = 9;
let y = 4;
let z = 5;
// 3 a)
console.log(x > z && x > y); // x = bigger than y AND z
// 3 b
console.log(!(x === y)); // (x===y) false
// 3 c
console.log((z < y) || (z > x)); // z is smaler than y
// 3 d
console.log((x === z) || (x !== y)); // one of the statements are true
// 3 f
console.log(x >= 10 && y <= 10); // first statement is false rest get ignored
// 3 g
console.log((x * z) <= 100 || (x * y) > 100); // 