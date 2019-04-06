var raining = true;
var cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

// 1st addition to script per LHL
else {
  console.log("Short sleeves are fine.");
}
// *** *** ***

// 2nd addition to script per LHL
var temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}
// *** *** ***

console.log("Now you're ready to go outside!");
