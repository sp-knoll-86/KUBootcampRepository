var numOne = parseInt(prompt("Give me a number!"));
var numTwo = parseInt(prompt("Give me another number!"));
var result;

var operation = prompt("What would you like to do? (add, subtract, multiply, divide)").toUpperCase();

if (operation === "ADD") {
  result = numOne + numTwo;
  alert("The sum of " + numOne + " and " + numTwo + " is " + result);
} else if (operation === "SUBTRACT") {
  result = numOne - numTwo;
  alert("The difference between " + numOne + " and " + numTwo + " is " + result);
} else if (operation === "MULTIPLY") {
  result = numOne * numTwo;
  alert("The product of " + numOne + " and " + numTwo + " is " + result);
} else if (operation === "DIVIDE") {
  result = numOne / numTwo;
  alert("The quotient of " + numOne + " and " + numTwo + " is " + result);
} else {
  alert("Not a valid option!");
}

