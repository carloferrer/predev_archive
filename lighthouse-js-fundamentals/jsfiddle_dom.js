//getElementbyId
var elm = document.getElementbyId("info");
alert(elm);

//getElementsByTagName
var elm = document.getElementsByTagName("p");
alert(elm[1].innerHTML);

//getElementsByClassName
var names = document.getElementsByClassName("name");
alert(names[2].innerHTML);

//change text via innerHTML
var elm = document.getElementById("info");
elm.innerHTML = "JavaScript Rocks!";

//change attribute
document.getElementById('lhl-logo').width = '200';
setTimeout(function(){document.getElementById('lhl-logo').width = '400';}, 1000);

//querySelector
document.querySelector("#name").setAttribute("placeholder","this is space for an input");