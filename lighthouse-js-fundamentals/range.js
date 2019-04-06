function range(start,end,step) {
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
      console.log("Empty array returned.");
      return [];
    }


  var cursor = start;
  var array = [cursor];

  while (cursor != end) {
    cursor = cursor + step;

    if (cursor > end)
      break;

    array.push(cursor);

    // console.log("Cursor value is now: " + cursor);
  }

  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));


    // Expected indentation of 4 space characters but found 6.
    // Line: 3, Col: 7
    // Expected indentation of 4 space characters but found 6.
    // Line: 4, Col: 7
    // Expected indentation of 2 space characters but found 4.
    // Line: 5, Col: 5
