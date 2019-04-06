const unique = [];

function countLetters(letters) {
  for (var i = 0; i < letters.length; i++) {
    if (unique[i].includes(letters[i]))
      addUnique(letters[i]);
    else
      unique["newLetter"].count += 1;
  }

}

function addUnique(singleLetter) {

  var newLetter = {
    letter: singleLetter,
    count: 1
  };

  unique.push(newLetter);
}

console.log(countLetters(process.argv[2]));