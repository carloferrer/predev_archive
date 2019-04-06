var arr = [45, 24, 35, 31, 40, 38, 11];

function maxProfit(arr) {
  let max = 0;


  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      // console.log("i:", i, ", j:", j, "profit:", (arr[j] - arr[i]));
      if (max < (arr[j] - arr[i])) {
        max = arr[j] - arr[i];
      }
    }
  }

  return max;
}

module.exports = maxProfit;

console.log(maxProfit(arr));