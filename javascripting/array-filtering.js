var numbers = [1,2,3,4,5,6,7,8,9,10];
var filtered = numbers.filter(function (numbers) {
  return (numbers % 2 === 0); // returns even numbers by returning numbers that, when divided by two, have a remainder of zero
});

console.log(filtered);