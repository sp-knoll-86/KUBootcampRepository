var calculateTax = function(price) {
  if (typeof price !== "number") {
    throw new Error("Parameter `price` is required and must be a number.");
  }

  return Number((price * 1.08).toFixed(2));
};

module.exports = calculateTax;
