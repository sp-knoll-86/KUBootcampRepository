// Gets the myBands object from the bands file.
var bandList = require("./bands.js");

// Loop through band list and print out details
for (var key in bandList) {
  console.log("A " + key + " band is " + bandList[key] + ".");
}
