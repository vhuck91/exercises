"use strict";

// 1) print both the property and value of the object(person) using a loop
 

for (let prop in person) {
    console.log(`${prop}: ${person[prop]}`);
}

/* 2) write function(getObjectValues) that returns an array of all **values** of an object's properties aka content of my person.

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
/* const getObjectPerson = (myObjectPerson) => {
    return Object.values(myObjectPerson);
} */
console.log(getObjectValues(person));

// 3 use with method like previous tasks
console.log("\nTask 3")
let personTwo = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris"
    /*  myMethod: function () {
         return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} living in ${this.city}`;
     } */
}

/* use if method is inside object
const myMethod = function () {
    return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} living in ${this.city}`;
}; */

// function took out from object = method: ..., to make work please use personTwo (object)
personTwo.myMethod = function () { // add feature
    return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} living in ${this.city}`; // array
}

console.log(personTwo.myMethod());

//Bonus 1

function convertToArray(obj) {
    const result = [];
    //for (let i = 0; i < Object.length; i++ ){
    for (const item in obj) {
        let newArr = [];
        newArr.push(item);
        newArr.push(obj[item]);
        result.push(newArr);
    }
    return result;
}
const objectToArray = {
    A: 1,
    B: 2,
    C: 3
}
console.log(convertToArray(objectToArray));

console.log(`
Bonus Questions
1. Convert keys and values into an array:
`);

let object = {
    A: 1,
    B: 2,
    C: 3
}

const objectToArray = (obj) => {
    console.log(Object.entries(obj));
}


objectToArray(object);


//////////////////////////////////////////////////

// 3. Merge.
console.log("\n3. Merge:");


let first = {
    firstName: "John"
}
let last = {
    lastName: "Smith"
}

/* const newObject = {
    ...first,
    ...last
};
console.log(newObject); */

/* const mergeObjects = (obj) => {
    let newObject = Object.assign({}, obj);
    return newObject;
}
console.log(mergeObjects(first, last)); */

let newObject = Object.assign({}, first, last);
console.log(newObject);