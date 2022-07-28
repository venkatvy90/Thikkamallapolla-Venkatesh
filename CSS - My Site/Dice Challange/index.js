
var a = Math.floor(Math.random() * 6) + 1;
var randomImage1="dice" + a + ".png";
var dice1="images/" + randomImage1 ;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",dice1);


var b = Math.floor(Math.random() * 6) + 1;
var dice2="images/dice" + b + ".png";
document.querySelectorAll("img")[1].setAttribute("src",dice2);


if (a>b) {
  document.getElementById("ac").innerHTML ="player 1 has won"
}
else if (a<b) {
  document.getElementById("ac").innerHTML ="player 2 has won"
}
else {
  document.getElementById("ac").innerHTML ="Draw Game"
}
