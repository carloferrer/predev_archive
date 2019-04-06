// for (var i = 100; i <= 200; i++) {
//   if (i % 3 === 0 && i % 4 !== 0)
//     console.log("Loopy");
//   else if (i % 4 === 0 && i % 3 !== 0)
//     console.log("Lighthouse");
//   else if (i % 3 === 0 && i % 4 === 0)
//     console.log("LoopyLighthouse");
//   else
//     console.log(i);

for (var i = 100; i <= 200; i++) {
  var loopy = "";

  if (i % 3 === 0)
    loopy += "Loopy";
  if (i % 4 === 0)
    loopy += "Lighthouse";
  else
    loopy = i;

  console.log(loopy);
}