'use strict';

// 1 a) Print lowest number
console.log(Math.min(-1, 0, 1, 2, 3, 4) + ' is the lowest number');

// 1 b) Print lowest number
console.log(Math.max(-1, 0, 1, 2, 3, 4) + ' is the highest number');

// 2 a) Print rounded(up) number
console.log(Math.ceil(3321.32321));
console.log(Math.ceil(326.76));
console.log(Math.ceil(76788.7));
console.log(Math.ceil(-9.78));
console.log(Math.ceil(28.329) + "\n");

// 2 b) Print rounded(down) number
console.log(Math.ceil(3321.32321));
console.log(Math.ceil(326.76));
console.log(Math.ceil(76788.7));
console.log(Math.ceil(-9.78));
console.log(Math.ceil(28.329));
// txt out put but why >> ` << console.log(`${Math.floor(3321.32321)} is round down`);


// 3
let random = Math.round(Math.random() * 6 + 1); // use round & make variable cuz integer
console.log(random + ` is random`);