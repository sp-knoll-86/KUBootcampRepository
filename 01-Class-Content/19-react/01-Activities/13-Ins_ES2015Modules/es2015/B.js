// We require and use a default module using the import syntax shown below:

import A from "./A";

console.log(A); // Prints 1

// The es2015 way of exporting multiple values from a file is to use the exports syntax below

export const B1 = 2;
export const B2 = A;