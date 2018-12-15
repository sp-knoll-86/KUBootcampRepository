// var expect = require("chai").expect;

var disemvowel = function(str) {
  if (typeof str === "number") {
    return String(str);
  }
  return str.replace(/[aeiou]/gi, "");
};

module.exports = disemvowel;
