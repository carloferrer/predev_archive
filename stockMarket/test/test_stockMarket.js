var assert = require("chai").assert;
var stockMarket = require("../stockMarket");

describe("The stock market function should return", function() {
  it("true if the max profit is found", function() {
    var input = [45, 24, 35, 31, 40, 38, 11];
    var result = stockMarket(input);
    assert.isTrue(result === 16);
  });
});