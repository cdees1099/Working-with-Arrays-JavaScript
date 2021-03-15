var Knight = 5;
var Dragon = 10;
var DHEle = document.body.querySelector(".Dragon");
var KHEle = document.body.querySelector(".Knight");

document.body.querySelector(".Dragon").innerHTML=Dragon;
document.body.querySelector(".Knight").innerHTML=Knight;

var prompter1 = prompt("Type a number between 1 and 5");
var KDMG = Math.floor(Math.random() * prompter1 + 1);
var DDMG = Math.floor(Math.random() * 2 + 1);
var dTaken = Dragon-KDMG;
var pTaken = Knight-DDMG;

for (var i=0; i<4; i++){
  repeat=Number(prompt("Type a number between 1 and 5"));
  
  document.body.querySelector(".Dragon").innerHTML=dTaken;
  document.body.querySelector(".Knight").innerHTML=pTaken;
}

if (Dragon <= 0){
  document.body.querySelector(".Game").innerHTML="You Killed IT!"
}else if (Knight <= 0){
  document.body.querySelector(".Game").innerHTML="You got Killed!"
}