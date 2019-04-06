// From the rightmost digit, which is the check digit, and moving left, double the value of every second digit. If the result of this doubling operation is greater than 9 (e.g., 8 × 2 = 16), then add the digits of the product (e.g., 16: 1 + 6 = 7, 18: 1 + 8 = 9) or alternatively subtract 9 from the product (e.g., 16: 16 - 9 = 7, 18: 18 - 9 = 9).

// Take the sum of all the digits.

// If the total modulo 10 is equal to 0 (if the total ends in zero) then the number is valid according to the Luhn formula; else it is not valid.

// As this will be coded stepwise, the end product of the initial solution could use some major refactoring.
function check(input) {

  let original = input.toString().split("");
  let originalReverse = input.toString().split("").reverse(); // Converts to string, separates individual numbers into single elements in an array, then reverses.

  // console.log(originalReverse); // debugging

  let doublesSeconds = originalReverse; // Set to originalReverse, but every second number will be doubled later in the script.
  let douSecSum = 0;
  let checkDig = 0;

  let finalVal = 0;

  for (var i = 1; i < originalReverse.length; i+=2) {
    doublesSeconds[i] = doublesSeconds[i]*2;
    if (doublesSeconds[i] > 9)
      doublesSeconds[i] = doublesSeconds[i] - 9;
  }

  for (var j = 0; j < doublesSeconds.length; j++) {
    douSecSum += Number(doublesSeconds[j]);
    // console.log(douSecSum); // debugging
  }

  checkDig = (douSecSum * 9) % 10;

  // original.push(Number(checkDig));
  // console.log(original);

  console.log(doublesSeconds); // debugging
  console.log(douSecSum); // debugging
  console.log(checkDig); // debugging

  return checkDig === 0;
}

console.log(check(79927398713));


module.exports = check;