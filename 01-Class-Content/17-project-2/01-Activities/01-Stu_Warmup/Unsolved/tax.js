// var z = x * y;

var calculateTax = function(price) {
  if (typeof price !== "number") {
    throw new Error("x is not a number.");
  }
  return Number((price * 1.08).toFixed(2));
};

module.exports = calculateTax;
