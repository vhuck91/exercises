"use strict";

// 1) get information out of object (write it with method)
const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
    myMethod: function (){
        return `${this.firstName} ${this.lastName} is a student in class ${this.class}.`;
    }
};

console.log(student.myMethod());
console.log();


// 
const person = {
    firstName: "Tobias",
    lastName: "Schneider",
    age: 29,
    job: "Entrepreneur",
    city: "NYC/Manhattan",
    myMethod: function () { // function in obj need to be in there if we use method
        return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} living in ${this.city}`;
    }
}

console.log(person.myMethod());

// Bonus + maybe use with myMethod home work
  const propOwn = Object.getOwnPropertyNames(person);
  console.log(propOwn.length); // whats inside

  let propSymb = Object.getOwnPropertySymbols(person);
  console.log(propSymb.length); // Symbolic propertys not needed for now

// Edge is dead
// so we can use Object.keys(obj).length (ps martina is it true)