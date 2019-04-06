var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("Printing ingredient list w/ a while loop:");
var count = 0;
while(count < ingredients.length) {
  console.log(ingredients[count]);
  count++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("\nPrinting ingredient list w/ a for loop:");
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\nPrinting ingredient list backwards w/ a for loop:");
for (var i = ingredients.length - 1; i > -1; i--) {
  console.log(ingredients[i]);
}