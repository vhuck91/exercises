"use strict";

//1
class Person { // start with capital letter cuz class
    constructor(name, age) {
        this.name = name; //use this. to set content
        this.age = age;
        this.speak = function () { // creat function of sentence
            return `${this.name} is ${this.age} years old.`;
        }
    }
};
const vadim = new Person("Vadim", 29); // define contetn of name and age

console.log(vadim.speak()); // call vadim, with content of person, select speak

//2
class Volume { // start with capital letter cuz class
    constructor(radius, height) {
        this.pi = Math.PI; //use this. to set content
        this.radius = radius;
        this.height = height;
        this.power = this.radius, 2;
        this.calcVolume = function () { // creat function of sentence

            return this.height * this.pi * this.power;
        }
    }
};

const newCylinder = new Volume(6, 4); // define contetn calc
console.log(newCylinder.calcVolume());

// 4
console.log("\n4. TV Class:");

class Tv {
    constructor(brand) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
    }

    increaseVolume = () => {
        if (this.volume === 100) {
            console.log("Max volume reached!");
            return;
        } else {
            this.volume += 10;
            console.log("Volume up!");
        }
    }

    decreaseVolume = () => {
        if (this.volume === 0) {
            console.log("Min volume reached!");
            return;
        } else {
            this.volume -= 10;
            console.log("Volume Down!");;
        }
    }

    randomZapping = () => this.channel = Math.floor(Math.random() * 50);

    resetTv = () => {
        this.volume = 50;
        this.channel = 1;
    }

    getTvStatus = () => `${this.brand} at channel ${this.channel}, volume ${this.volume}`;

}

const myTv = new Tv("Samsung");
console.log(myTv.volume);
myTv.increaseVolume();
myTv.increaseVolume();
myTv.increaseVolume();
myTv.increaseVolume();
myTv.increaseVolume();
console.log(myTv.volume);

myTv.decreaseVolume();
myTv.decreaseVolume();
myTv.decreaseVolume();
myTv.decreaseVolume();
myTv.decreaseVolume();
myTv.decreaseVolume();
myTv.decreaseVolume();
myTv.decreaseVolume();
myTv.decreaseVolume();
myTv.decreaseVolume();
myTv.decreaseVolume();
myTv.decreaseVolume();
console.log(myTv.volume);

myTv.randomZapping();
console.log(myTv.channel);
console.log(myTv.getTvStatus());
myTv.increaseVolume();
console.log(myTv.getTvStatus());
myTv.resetTv();
console.log(myTv.getTvStatus());