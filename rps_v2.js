let computer_score = 0;
let player_score = 0;
let round = 0;
const win = document.createElement('win');
const lose = document.createElement('lose');
const draw = document.createElement('draw');
const result = document.createElement('result');
const body = document.querySelector('body');
lose.textContent = "You lose this round!";
win.textContent = "You win this round!";
draw.textContent = "It's a tie this round!";


let r_p_s = ["rock", "paper", "scissors"];
function computerPlay(array){
    return array[Math.floor(Math.random()*array.length)];}



function game(){
round += 1;
  if (round == 5){

    result.style.display = "initial";
      if (computer_score > player_score) {

        result.textContent = ("Game Over. Computer wins!" + " Computer: " + computer_score + " Player: " + player_score + "\nPick a Pokemon to play again!" );

        final.appendChild(result);

        round = 0;
        computer_score = 0;
        player_score = 0;





  }
  else if (player_score > computer_score) {
    result.textContent = ("Game Over. Player wins!" + " Computer: " + computer_score + " Player: " + player_score + "\nPick a Pokemon to play again!");
    round = 0;
    computer_score = 0;
    player_score = 0;

    final.appendChild(result);
  }

    else {
      result.textContent = ("Game Over. It's a tie!" + " Computer: " + computer_score + " Player: " + player_score + "\nPick a Pokemon to play again!");

      final.appendChild(result);

      round = 0;
      computer_score = 0;
      player_score = 0;






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
