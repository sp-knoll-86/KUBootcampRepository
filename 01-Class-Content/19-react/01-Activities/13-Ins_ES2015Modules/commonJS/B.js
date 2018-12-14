// We require and use a module using the require syntax shown below:

var A = require("./A");

console.log(A); // Prints 1

// One way of exporting multiple values from a file is to use the exports syntax below

exports.B1 = 2;
exports.B2 = A;