// the following is psuedocode
// go through letters one by one
// at a letter, check if such letter counter exists in "unique" array
// if letter counter does not exist, create it, and set value to 1
// if it does, add +1 to letter counter

const uniqueLetters = [];

console.log(uniqueLetters);

function countLetters(letters) {

  // const allAlphas = [];

  for (var i = 0; i < letters.length; i++) {
    if (i == 0)
        addUnique(letters[i]);
    if (uniqueLetters[i].letter !== letters[i]) {
      addUnique(letters[i]);

      console.log(uniqueLetters);

    }
    else {
      uniqueLetters.letters[i].count +=1;
    }

    // allAlphas.push(letters[i]);
  }

  return uniqueLetters;
}

function addUnique(letter) {
  var unique = {
    letter,
    count: 1
  };

  uniqueLetters.push(unique);
}

console.log(countLetters(process.argv[2]));