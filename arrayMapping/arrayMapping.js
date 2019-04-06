var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

// var result = input.map(Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2)));

var result = input.map(function(xy){
  return Math.sqrt(Math.pow(xy.x,2) + Math.pow(xy.y,2));
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);