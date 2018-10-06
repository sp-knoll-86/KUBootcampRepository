// Gets the myBands object from the bands file.
var bandList = require("./bands.js");
  
// Grabs the genre information
if (process.argv[2]) {
  var genre = process.argv[2];
}

for (var key in bandList) {

  // If the genre matches the key then print that band.
  if (key === genre || genre === undefined) {
    console.log("A " + key + " band is " + bandList[key] + ".");
  }
}

// Example:
// User Input: node runBonus rap
// Output: A rap band is Run DMC.

