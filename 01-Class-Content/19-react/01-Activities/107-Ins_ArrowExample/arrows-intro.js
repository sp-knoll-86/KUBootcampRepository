// Function Expression
const multiply1 = function(a, b) {
  return a * b;
};

// Arrow Function Expression
const multiply2 = (a, b) => {
  return a * b;
};

multiply2(2, 3); // 6 - called the same way as usual

// Arrow Function Expression - concise
const multiply3 = (a, b) => a * b;
// without curly brackets, the return statement is implied

// can omit the parenthesis if there's only a single parameter
const square = x => x * x;


// Note: there's no arrow-function equivalent of function declarations
function multiply4(a, b) {
  return a * b;
}

// ¯\_(ツ)_/¯
