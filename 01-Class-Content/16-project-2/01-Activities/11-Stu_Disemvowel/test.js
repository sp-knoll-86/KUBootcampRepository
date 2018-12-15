var expect = require("chai").expect;
var disemvowel = require("./disemvowel");

describe("Disemvowel", function () {
    it("should remove all vowels from a string", function () {
        expect(disemvowel("I am a man")).to.equal(" m  mn");
    });

    it("This is a number", function () {
        expect(disemvowel(12345)).to.equal("12345");
    });
});