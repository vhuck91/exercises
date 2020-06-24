"use strict";

// 1) get information out of object
const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12
};

console.log(student.firstName + " " + student.lastName + "is a student in class " + student.class);
console.log();


// 
const person = {
    firstName: "Tobias",
    lastName: "Schneider",
    age: 29,
    job: "Entrepreneur",
    city: "NYC/Manhattan"
};

console.log(
    person.firstName + " " + person.lastName + "is a " + person.age + " years old " 
    + person.job + " living in " + person.city + "."
);
console.log();

// Bonus

  const propOwn = Object.getOwnPropertyNames(person);
  console.log(propOwn.length); // whats inside

  let propSymb = Object.getOwnPropertySymbols(person);
  console.log(propSymb.length); // Symbolic propertys

// Edge is dead
// so we can use Object.keys(obj).length (ps martina is it true)