// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed

const twofer = who => {
  // return `Two for me and one for ${who}`; og function
  if (typeof who === "string") {
    return `Two for me and one for ${who}`
  }
};

console.log(twofer("Fran")); // -> "Two for me and one for Fran"
<<<<<<< HEAD
console.log(twofer()); // -> "Two for me and one for you"
=======
console.log(twofer()); // -> "Two for me and one for you"


const twofer = (who = "Two for me and one for you") => {
  
  return `Two for me and one for ${who}`;
};
console.log(twofer("Fran")); // -> "Two for me and one for Fran"
console.log(twofer()); // -> "Two for me and one for you"


>>>>>>> 2c9827f06e5df85d10e801ba6773343ea8007404
