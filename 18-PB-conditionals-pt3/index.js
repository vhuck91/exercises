"use strict";
// 1 a + b) cacl(∅) score of teams
let teamAleeza = (89 + 120 + 103) / 3;
let teamLis = (116 + 94 + 123) / 3;
let teamWinner = null;
​
if (teamAleeza > teamLis) {
    teamWinner = "Aleeza\'s team " + teamAleeza + " Points";
} else {
    teamWinner = "Lis\'s team with " + teamLis + " Points";
}
console.log("Q: Who has bigger ∅ Score?\n" + "A: The best avarage score goes to " + teamWinner + ".\n")
​
​
// 1 c) Diffrent outcome
teamAleeza = (116 + 94 + 12) / 3;
teamLis = (89 + 120 + 3) / 3;
​
if (teamAleeza > teamLis) {
    teamWinner = "Aleeza\'s team " + teamAleeza + " Points";
} else {
    teamWinner = "Lis\'s team with " + teamLis + " Points";
}
console.log("Q: Who2 has bigger ∅ Score2?\n" + "A: The best avarage score goes to " + teamWinner + ".\n")
​
​
// 1 d) Same like a) but with + 1 Person
let teamMary = (97 + 134 + 105) / 3;
​
if (teamMary > teamLis && teamMary > teamAleeza) {
    teamWinner = "Mary\'s team " + teamMary + " Points";
} else if (teamLis > teamMary && teamLis > teamAleeza) {
    teamWinner = "Lis\'s team " + teamMary + " Points";
} else if (teamAleeza > teamMary && teamAleeza > teamLis) {
    teamWinner = "Aleeza\'s team " + teamMary + " Points";
} else if (teamAleeza === teamMary === teamLis) {
    console.log(`${teamWinner}${teamLis}, DRAW!!!`);
}
console.log("Q: Who has bigger ∅ Score of the 3 Players?\n" + "A: The best avarage score goes to " + teamWinner + ".\n")
​
​
// 1 e)
teamAleeza = (1 + 1 + 1) / 3;
teamLis = (16 + 94 + 123) / 3;
teamMary = (90 + 234 + 105) / 3;
​
if (teamMary > teamLis && teamMary > teamAleeza) {
    teamWinner = "Mary\'s team " + teamMary + " Points";
} else if (teamLis > teamMary && teamLis > teamAleeza) {
    teamWinner = "Lis\'s team " + teamMary + " Points";
} else if (teamAleeza > teamMary && teamAleeza > teamLis) {
    teamWinner = "Aleeza\'s team " + teamMary + " Points";
} else if (teamAleeza === teamMary === teamLis) {
    console.log(`${teamWinner}${teamLis}, DRAW!!!`);
}
console.log("Q: Who has bigger ∅ Score of the 3 Players?\n" + "A: The best avarage score goes to " + teamWinner + ".\n")