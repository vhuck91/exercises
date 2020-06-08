"use strict";

const currentDate = new Date(); // set date
const bookingDate = new Date(2019, 2, 12);
let nameUser = "Marija";

const bookEventDate = function (name, date, bookedDate) {
    if (date > bookedDate) {
        console.log(`${name}, date is already taken`);
    } else {
        console.log(`${name}, we signed you up for the ${bookedDate}`);
    }

}
bookEventDate(nameUser, currentDate, bookingDate);
bookEventDate("Vadim", new Date(), new Date(2020, 3, 27));

/* my first try, should note use vars inside cuz they become scoped 
const bookEventDate = function (name, date) {
    const currentDate = new Date(); // set date
    const bookingDate = "2021-06-08";
    if (currentDate < bookingDate) {
        console.log(`${name}, date is already taken`)
    } else {
        console.log(`${name}, we signed you up for the ${date}`)
    }

} 
bookEventDate("Marija", 2020);
*/