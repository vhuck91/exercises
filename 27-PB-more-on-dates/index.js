"use strict";

let today = new Date();
today.setFullYear(2020, 2, 2);
const remainingDays = (now) => {
    let yearToday = now.getFullYear();
    let monthToday = now.getMonth();
    let dayToday = now.getDate();
    let endOfMonth = new Date(yearToday, monthToday + 1, 0).getDate();
    console.log(endOfMonth - dayToday);
}
remainingDays(today);
///////////////////////////////////////7


const daysLeftTillXmas = {
    year: new Date().getFullYear(),
    dateNow: Date.now(),
    dateXmas() {
        return new Date(`${this.year}`, 11, 25).getTime();
    },
    daysLeft() {
        return this.dateXmas() - this.dateNow;
    },
    convertDays() {
        return Math.ceil(this.daysLeft() / 1000 / 60 / 60 / 24);
    }
};
console.log(daysLeftTillXmas.convertDays());