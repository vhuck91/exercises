"use strict";

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