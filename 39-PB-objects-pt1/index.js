"use strict";

// 1) print both the property and value of the object(person) using a loop
const person = {
    firstName: "Vadim",
    lastName: "Huck",
    age: 29,
    skill: "Guitar"
};

for (let prop in person) {
    console.log(`${prop}: ${person[prop]}`);
}

/* 2) write function(getObjectValues) that returns an array of all **values** of an object's properties aka content of my person.
getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
}); 

console.log() => ["tea", "coffee", "milk"]*/
console.log("\nTask 2 from Example")
const getObjectValues = (myObj) => {
    return Object.values(myObj);
}
 // insert values from example
console.log(getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
}));

console.log("\nTask 2 if I need to use existing object")
const getObjectPerson = (myObjectPerson) => {
    return Object.values(myObjectPerson);
}
console.log(getObjectPerson(person));

// 3 use with method like previous tasks
console.log("\nTask 3")
let personTwo = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris",
    myMethod: function () {
        return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} living in ${this.city}`;
    }
}

console.log(personTwo.myMethod());