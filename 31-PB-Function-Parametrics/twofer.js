// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed

const twofer = who => {
  return `Two for me and one for ${who}`;
};

console.log(twofer("Fran")); // -> "Two for me and one for Fran"
console.log(twofer("You")); // -> "Two for me and one for you"
