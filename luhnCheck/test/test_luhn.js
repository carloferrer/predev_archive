var assert = require("chai").assert;
var check = require("../luhn");

describe("The Luhn check", function() {
  it("should return true if the number satisfies the Luhn Algorithm", function() {
    var input = 79927398713;
    var result = check(input);
    assert.isTrue(result);
  });

  it("should return false if the input fails the Luhn Algorithm", function() {
    var input = 1;
    var result = check(input);
    assert.isFalse(result);
  });


});