
var bludgers = [
  document.getElementById("bludger1"),
  document.getElementById("bludger2"),
  document.getElementById("bludger3"),
  document.getElementById("bludger4"),
  document.getElementById("bludger5"),
  document.getElementById("bludger6"),
  document.getElementById("bludger7"),
  document.getElementById("bludger8"),
  document.getElementById("bludger9"),
  document.getElementById("bludger10"),
  document.getElementById("bludger11"),
  document.getElementById("bludger21"),
  document.getElementById("bludger31"),
  document.getElementById("bludger41"),
  document.getElementById("bludger51"),
  document.getElementById("bludger61"),
  document.getElementById("bludger71"),
  document.getElementById("bludger81"),
  document.getElementById("bludger91"),
  document.getElementById("bludger101"),
  document.getElementById("bludger12"),
  document.getElementById("bludger22"),
  document.getElementById("bludger32"),
  document.getElementById("bludger42"),
  document.getElementById("bludger52"),
  document.getElementById("bludger62"),
  document.getElementById("bludger72"),
  document.getElementById("bludger82"),
  document.getElementById("bludger92"),
  document.getElementById("bludger102"),
  document.getElementById("bludger13"),
  document.getElementById("bludger23"),
  document.getElementById("bludger33"),
  document.getElementById("bludger43"),
  document.getElementById("bludger53"),
  document.getElementById("bludger63"),
  document.getElementById("bludger73"),
  document.getElementById("bludger83"),
  document.getElementById("bludger93"),
  document.getElementById("bludger103"),
]

for(i = 0; i < bludgers.length; i++){
  bludgers[i].style.right = -50;
}

document.getElementById("snitch").style.right = -50;

for(i = 0; i < bludgers.length; i++){
  var x = Math.floor((Math.random() * 650) + 15);
  bludgers[i].style.top = x;
}

document.getElementById("snitch").style.top = 400;

for(i = 0; i < bludgers.length; i++){
  bludgers[i].onclick = lose;
}

document.getElementById("snitch").onclick = win;

for(i = 0; i < bludgers.length; i++){
  window.onload= moveB(bludgers[i]);
}

window.onload= moveS(document.getElementById("snitch"));



function moveB(ball){

  var x = Math.floor((Math.random() * 40) + 2);
  setInterval(function(){moveBLeft(ball)}, x);

}

function moveS(ball){

  setInterval(function(){moveSLeft(ball)}, 30);

}



function moveBLeft(ball){

  var y = Math.floor((Math.random() * 20) + 5);

  ball.style.right =
    parseInt(ball.style.right) + y + 'px';

  var x = Math.floor((Math.random() * 650) + 15);
  if(parseInt(ball.style.right) > 1500){
    ball.style.right = -100;
    ball.style.top = x;
  }

}

function moveSLeft(ball){

  var y = Math.floor((Math.random() * 15) + 5);
  var z = Math.floor((Math.random() * 2));
  var up = Math.floor((Math.random() * 50) + 1);

  ball.style.right =
    parseInt(ball.style.right) + y + 'px';
  if(up == 20){
    ball.style.top =
      parseInt(ball.style.right) + z + 'px';
    console.log("UP YA GO");
  }
  else if(up == 30){
    ball.style.top =
      parseInt(ball.style.right) - z + 'px';
    console.log("DOWN YA GO");
  }

  if(parseInt(ball.style.top) > 600){
    ball.style.top = 500;
  }
  else if(parseInt(ball.style.top) < 50){
    ball.style.top = 60;
  }

  var x = Math.floor((Math.random() * 600) + 50);
  if(parseInt(ball.style.right) > 1500){
    ball.style.right = -500;
    ball.style.top = x;
  }
}

function win(){
  document.getElementById("balls").style.display = "none";
  document.getElementById("win-message").style.display = "block";
  document.getElementById("win-message").style.margin.right = "auto";
  document.getElementById("win-message").style.margin.left = "auto";
}

function lose(){
  document.getElementById("balls").style.display = "none";
  document.getElementById("lose-message").style.display = "block";
  document.getElementById("win-message").style.margin.right = "auto";
  document.getElementById("win-message").style.margin.left = "auto";
}





//in the spirit of preserving the original purpose of this page
document.getElementById("return-to-original").addEventListener("click", original);
document.getElementById("return to game").addEventListener("click", toGame);

function original(){
  document.getElementById("old").style.display = "inline-block";
  document.getElementById("return-to-original").style.display = "none";
  document.getElementById("new").style.display = "none";
  document.getElementById("return to game").style.display = "inline-block";
  document.body.style.backgroundColor = "white";
}

function toGame(){
  document.getElementById("old").style.display = "none";
  document.getElementById("return-to-original").style.display = "inline-block";
  document.getElementById("new").style.display = "inline-block";
  document.getElementById("return to game").style.display = "none";
  document.body.style.backgroundColor = "#740001";
}





//testing that javascript works still
//document.getElementById("my name").style.color = "orange";
