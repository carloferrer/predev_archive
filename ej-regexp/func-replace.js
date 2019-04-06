// http://eloquentjavascript.net/09_regexp.html
// seeing what happens when "match" is removed from function inputs

var stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  else if (amount == 0)
    amount = "no";
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

// as it so happens, "match" is needed for regular expressions to be manipulated/utilized within a function