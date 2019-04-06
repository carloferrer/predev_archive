function merge(a1,a2) {

  var i = 0;
  var j = 0;
  var a3 = [];

  while (i < a1.length || j < a2.length) {
    if (a1[i] > a2[j] || i == a1.length) {
      a3[i + j] = a2[j];
      j++;
    }
    else {
      a3[i + j] = a1[i];
      i++;
    }
  }

  return a3;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);