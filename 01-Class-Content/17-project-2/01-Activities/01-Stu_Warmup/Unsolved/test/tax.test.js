var expect = require("chai").expect;
var calculateTax = require("../tax");

describe("calulateTax", function() {
   it("should add tax to a value", function() {
       var amount = 100;
       var result = calculateTax(amount);
       expect(result).to.equal(108.00);
   });
   
//    it("should not be a character", function() {
//     expect(function() {
//         calculateTax("a", .8);
//     }).to.throw(Error);
//    });
})

// Write tests for the calculateTax function here
