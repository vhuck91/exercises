let sizeTree = 4;
let myString = "";
for (let i = 1; i <= sizeTree; i++) {
    // Emty space
    myString = "";
    for (let j = i; j < sizeTree; j++) {
        myString += " ";
    }
    // Tree
    for (let k = 1; k <= (2 * i - 1); k++) {
        myString += "*";
    }
    console.log(myString);
}
console.log("");


// bonus
let sizeTree2 = 6;
let myString2 = ""
for (let i = 0; i <= sizeTree2; i++) {
    // Emty space
    myString2 = ""
    for (let l = 0; l < i; l++) {
        myString2 += "_";
    }
    // Tree
    for (let l = (sizeTree2); l >= i * 2; l--) {
        myString2 += "*";
    }
    console.log(myString2);
}