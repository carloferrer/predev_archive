var pattern = /y/g;
// pattern.lastIndex = 1;
// The lastIndex property updates its own value whenever used in conjunction with exec method.  Its value can also be manipulated manually.
var match = pattern.exec("xyzzyaay");
console.log("1st match.index = " + match.index);
// → 1
console.log("1st pattern.lastIndex = " + pattern.lastIndex);
// → 2
pattern.exec("xyzzyaay");
console.log("2nd match.index = " + match.index);
// → 4
console.log("2nd pattern.lastIndex = " + pattern.lastIndex);
// → 5
match = pattern.exec("xyzzyaay");
console.log("3rd match.index = " + match.index);
// → 7
console.log("3rd pattern.lastIndex = " + pattern.lastIndex);
// → 8
match = pattern.exec("xyzzyaay");
console.log("4th match.index generates error.");
// console.log(match.index);
// // → 7
console.log("4th pattern.lastIndex = " + pattern.lastIndex);
// → 0