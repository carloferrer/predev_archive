var uniqueLetter = {};

function countLetters(letters) {
  for (var i = 0; i < letters.length; i++) {

    // console.log(letters[i]);
    // console.log(letters[i] in uniqueLetter);

    if (!(letters[i] in uniqueLetter)) {
      uniqueLetter[letters[i]] = [i];
      // console.log(i);
      // console.log(letters[i]);
    }
    else
      uniqueLetter[letters[i]].push(i);
  }
  return uniqueLetter;
}

console.log(countLetters("lighthouse in the house"));