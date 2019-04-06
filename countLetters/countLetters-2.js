const unique = [];

function countLetters(letters) {


  for (var i = 0; i < letters.length; i++) {
    if (unique[i].letter == undefined || unique[i].letter !== letters[i]) {
      addUnique(letters[i]);
      // console.log(i, letters[i]);
    }
    else
      unique[i].count += 1;
  }
  return unique;
}

function addUnique(singleLetter) {

  var newLetter = {
    letter: singleLetter,
    count: 1
  };

  unique.push(newLetter);
}

console.log(countLetters(process.argv[2]));