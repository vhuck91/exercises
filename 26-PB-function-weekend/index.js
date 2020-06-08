"use strict";

const isWeekend = date => {
    if (date.getDay() % 6) {
        return 'Work';
    } else {
        return 'Party';
    }
};

console.log(isWeekend(new Date('Jun 8, 2020')));
console.log(isWeekend(new Date('Jun 12, 2020')));
console.log(isWeekend(new Date('Jun 13, 2020')));
console.log(isWeekend(new Date('Jun 14, 2020')));