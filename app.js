var h1 = document.querySelector("h1");
var ph = document.querySelector("p");
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var reset = document.getElementById("reset");
var inputNum = document.getElementById("inputNum");
var numDisplay = document.getElementById("numDisplay");


var playerOne = 0;
var playerTwo = 0;
var GameOver = false;
var winningScore = 5;
// this is the First Player in the website!


p1.addEventListener("click",function() {
  if(!GameOver){
    playerOne++
    console.log(playerOne,winningScore)
    if(playerOne === winningScore){
      p1Display.classList.add("winner");
      GameOver = true;
    }
    p1Display.textContent = playerOne;
  }
});

// this is the second player in the website!
        // the old one!
// p2.addEventListener("click",function() {
//   playerTwo++
//   console.log(playerTwo);
//   p2Display.textContent = playerTwo;
//   if(playerTwo >= 3){
//     p2Display.style.color = "orange";
//   }
//   if (playerTwo <= 5) {
//     p2Display.style.color = "grren";
//   }
// });

p2.addEventListener("click",function() {
  if(!GameOver){
    playerTwo++
    if(playerTwo === winningScore){
      p2Display.classList.add("winner");
      GameOver = true;
    }
    p2Display.textContent = playerTwo;
  }
});



reset.addEventListener("click",function(){
  playerOne = 0;
  playerTwo = 0;
  p1Display.textContent = playerOne;
  p2Display.textContent = playerTwo;
  p1Display.classList.remove("winner")
  p2Display.classList.remove("winner")
  GameOver = false;
  console.log(clear())
});

inputNum.addEventListener("change",function(){
  winningScore = Number(inputNum.value);
  numDisplay.textContent = inputNum.value;

})
