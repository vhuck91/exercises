"use strict";
// 1 a) cacl(∅) score of teams
let teamAleeza = (89 + 120 + 103) / 3;
let teamLis = (116 + 94 + 123) / 3;

let teamWinner = null;

// 1 b) Who has highes ∅ Score? print in consol
if (teamAleeza > teamLis){
    teamWinner = "Aleeza\'s team " + teamAleeza + " Points";
} else {
    teamWinner = "Lis\'s team with " + teamLis + " Points";
}
console.log("Q: Who has bigger ∅ Score?\n" + "A: The best avarage score goes to " + teamWinner +".\n")

// 1 c) Diffrent outcome
let teamAleeza2 = (116 + 94 + 123) / 3;
let teamLis2 = (89 + 120 + 103) / 3;
let teamWinner2 = null;

if (teamAleeza2 > teamLis2){
    teamWinner2 = "Aleeza\'s team " + teamAleeza2 + " Points";
} else {
    teamWinner2 = "Lis\'s team with " + teamLis2 + " Points";
}
console.log("Q: Who has bigger ∅ Score2?\n" + "A: The best avarage score goes to " + teamWinner2 +".")

// 1 d) Same like a) but with + 1 Person
let teamMary = (97 + 134 + 105) / 3;

if (teamMary > teamLis && teamMary > teamAleeza) {
    
    console.log(`${teamWinner} with ${teamMary}\n`);
} else if (teamLis > teamMary && teamLis > teamAleeza) {
    
    console.log(`${teamWinner} twith ${teamLis}\n`);

} else if (teamAleeza > teamMary && teamAleeza > teamLis) {
    
    console.log(`${teamWinner} with ${teamAleeza}\n`);

} else if (teamAleeza === teamMary === teamLis) {
    
    console.log(`${teamWinner}${teamLis}, DRAW!!!`);
}

console.log("Q: Who has bigger ∅ Score of the 3 Players?\n" + "A: The best avarage score goes to " + teamWinner +".\n")


// 1 e)
let teamAleeza3 = (89 + 10 + 103) / 3;
let teamLis3 = (16 + 94 + 123) / 3;
let teamMary3 = (90 + 234 + 105) / 3;

if (teamMary3 > teamLis3 && teamMary3 > teamAleeza3) {
    console.log(`${teamWinner} with ${teamMary}\n`);
} else if (teamLis > teamMary && teamLis > teamAleeza) {
    console.log(`${teamWinner} twith ${teamLis}\n`);

} else if (teamAleeza > teamMary && teamAleeza > teamLis) {
    console.log(`${teamWinner} with ${teamAleeza}\n`);

} else if (teamAleeza === teamMary === teamLis) {
    console.log(`${teamWinner}${teamLis}, DRAW!!!`);
}

console.log("Q: Who has bigger ∅ Score of the 3 Players?\n" + "A: The best avarage score goes to " + teamWinner +".\n")
