// Yours will take in two arguments. The first will be an array to map and the second will be a callback function. The function will return a new array based on the results of the callback function.

var words = ["ground", "control", "to", "major", "tom"];

// I wanted to implement forEach, but couldn't figure out how to.
function map(words, instruction) {
  // console.log(words.forEach(instruction));
  var result = [];

  for (var i = 0; i < words.length; i++) {
    result.push(instruction(words[i]));
  }

  console.log(result);
}

// [6, 7, 2, 5, 3]
map(words, function(word) {
  return word.length;
});

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]
map(words, function(word) {
  return word.toUpperCase();
});

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
map(words, function(word) {
  return word.split('').reverse().join('');
});