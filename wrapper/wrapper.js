// Create a function called wrapLog() that takes in a function (callback) and a string (name) and returns a function that does the same thing as callback but also logs the name, input parameters, and return value of the callback function:

// https://www.w3schools.com/js/js_function_parameters.asp

var wrapLog = function (callback, name) {
  var args = "";
  var input = [];

  return function () {
    for (var i = 0; i < arguments.length; i++){
      args += arguments[i] + ", ";
      input.push(arguments[i]);
    }

    args += "\b\b"; // Get rid of extra comma at the end.

    console.log(name + "(" + args + ") => " + callback.apply(null, input));

    args = ""; // Clear arguments list for next time
    input = []; // Clear inputs for next time
  };
};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24

