var computer_score = 0;
var player_score = 0;
var round = 0;
const win = document.createElement('win');
const lose = document.createElement('lose');
const draw = document.createElement('draw');
const result = document.createElement('result');
const body = document.querySelector('body');
lose.textContent = "You lose!";
win.textContent = "You win!";
draw.textContent = "Draw.";


var r_p_s = ["rock", "paper", "scissors"];
function computerPlay(array){
    return array[Math.floor(Math.random()*array.length)];}



function game(){
  round += 1;
  if (round == 5) {
    result.style.display = "initial";
      if (computer_score > player_score) {

        result.textContent = ("Game Over. Computer wins!" + " Computer: " + computer_score + " Player: " + player_score);
        body.removeChild(win);
        body.removeChild(lose);
        body.removeChild(draw);
        body.appendChild(result);

        round = 0;
        computer_score = 0;
        player_score = 0;
        result.addEventListener("click",(e) => {
          body.removeChild(result);
});



  }
  else if (player_score > computer_score) {
    result.textContent = ("Game Over. Player wins!" + " Computer: " + computer_score + " Player: " + player_score);
    round = 0;
    computer_score = 0;
    player_score = 0;
    body.removeChild(win);
    body.removeChild(lose);
    body.removeChild(draw);
    body.appendChild(result);

    result.addEventListener("click",(e) => {
      body.removeChild(result);


    });


  }
    else {
      result.textContent = ("Game Over. It's a tie!" + " Computer: " + computer_score + " Player: " + player_score);
      body.removeChild(win);
      body.removeChild(lose);
      body.removeChild(draw);
      body.appendChild(result);

      round = 0;
      computer_score = 0;
      player_score = 0;
      result.addEventListener("click",(e) => {
        body.removeChild(result);

      });



    }
  }

}

function playRound(playerSelection, computerSelection){

playerSelection = playerSelection.toLowerCase();

if (playerSelection == "rock" &&  computerSelection== "paper") {

  computer_score += 1;
  result.style.display = "none";
  draw.style.display = "none";
  win.style.display = "none";
  lose.style.display = "initial";
  body.appendChild(lose);

  return game();
}
else if (playerSelection == "rock" && computerSelection == "scissors") {

player_score += 1;
draw.style.display = "none";
result.style.display = "none";
lose.style.display = "none";
win.style.display = "initial";
body.appendChild(win);

return game();
}
  else if (playerSelection == "rock" && computerSelection == "rock") {
win.style.display = "none";
result.style.display = "none";
lose.style.display = "none";
draw.style.display = "initial";
body.appendChild(draw);
return game();
}
else if (playerSelection == "paper" && computerSelection == "rock") {
player_score += 1;
draw.style.display = "none";
result.style.display = "none";
lose.style.display = "none";
win.style.display = "initial";
body.appendChild(win);

return game();
}
else if (playerSelection == "paper" && computerSelection == "paper") {
  win.style.display = "none";
  result.style.display = "none";
  lose.style.display = "none";
  draw.style.display = "initial";
  body.appendChild(draw);
return game();
}
else if (playerSelection == "paper" && computerSelection == "scissors") {
  computer_score += 1;
  draw.style.display = "none";
  win.style.display = "none";
  lose.style.display = "initial";
  result.style.display = "none";
  body.appendChild(lose);
  return game();
}
else if (playerSelection == "scissors" && computerSelection == "rock") {
  computer_score += 1;
  draw.style.display = "none";
  result.style.display = "none";
  win.style.display = "none";
  lose.style.display = "initial";
  body.appendChild(lose);
  return game();
}
else if (playerSelection == "scissors" && computerSelection == "paper") {
  player_score += 1;
  draw.style.display = "none";
  result.style.display = "none";
  lose.style.display = "none";
  win.style.display = "initial";
  body.appendChild(win);

return game();
}
else if (playerSelection == "scissors" && computerSelection == "scissors") {
  win.style.display = "none";
  result.style.display = "none";
  lose.style.display = "none";
  draw.style.display = "initial";
  body.appendChild(draw);
return game();
}


}







var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");


  rock.addEventListener("click",(e) => {
      playRound("rock", computerPlay(r_p_s));
      });

  paper.addEventListener("click",(e) => {
      playRound("paper", computerPlay(r_p_s));
      });

  scissors.addEventListener("click",(e) => {
        playRound("scissors", computerPlay(r_p_s));
        });
