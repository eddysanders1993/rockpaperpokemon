var computer_score = 0;
var player_score = 0;
var round = 0;

var r_p_s = ["rock", "paper", "scissors"];
function computerPlay(array){
    return array[Math.floor(Math.random()*array.length)];}



function game(){
  round += 1;
  if (round == 5) {
      if (computer_score > player_score) {
    alert("Game Over. Computer wins!" + " Computer: " + computer_score + " Player: " + player_score);
    round = 0;
    computer_score = 0;
    player_score = 0;
  }
  else if (player_score > computer_score) {
    alert("Game Over. Player wins!" + " Computer: " + computer_score + " Player: " + player_score);
    round = 0;
    computer_score = 0;
    player_score = 0;
  }
    else {
      alert("Game Over. It's a tie!" + " Computer: " + computer_score + " Player: " + player_score);
      round = 0;
      computer_score = 0;
      player_score = 0;
    }
  }

}

function rockPaperScissors(playerSelection, computerSelection){

playerSelection = playerSelection.toLowerCase();
if (playerSelection == "rock" &&  computerSelection== "paper") {
  computer_score += 1;
  alert ("You lose! Paper beats rock." + " Computer: " + computer_score + " Player: " + player_score );
  return game();
}
else if (playerSelection == "rock" && computerSelection == "scissors") {
player_score += 1;
 alert("You win! Rock beats scissors."+ " Computer: " + computer_score + " Player: " + player_score );
return game();
}
  else if (playerSelection == "rock" && computerSelection == "rock") {
 alert("Draw."+ " Computer: " + computer_score + " Player: " + player_score );
return game();
}
else if (playerSelection == "paper" && computerSelection == "rock") {
player_score += 1;
alert("You win! Paper beats rock."+ " Computer: " + computer_score + " Player: " + player_score );
return game();
}
else if (playerSelection == "paper" && computerSelection == "paper") {
alert("Draw."+ " Computer: " + computer_score + " Player: " + player_score );
return game();
}
else if (playerSelection == "paper" && computerSelection == "scissors") {
computer_score += 1;
alert("You lose! Scissors beats paper."+ " Computer: " + computer_score + " Player: " + player_score );
return game();
}
else if (playerSelection == "scissors" && computerSelection == "rock") {
computer_score += 1;
alert("You lose! Rock beats paper."+ " Computer: " + computer_score + " Player: " + player_score );
return game();
}
else if (playerSelection == "scissors" && computerSelection == "paper") {
player_score += 1;
alert("You win! Scissors beats paper."+ " Computer: " + computer_score + " Player: " + player_score );
return game();
}
else if (playerSelection == "scissors" && computerSelection == "scissors") {
alert("Draw."+ " Computer: " + computer_score + " Player: " + player_score );
return game();
}


}







var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");

rock.addEventListener("click",(e) => {
    rockPaperScissors("rock", computerPlay(r_p_s));
  });

paper.addEventListener("click",(e) => {
    rockPaperScissors("paper", computerPlay(r_p_s));
    });

scissors.addEventListener("click",(e) => {
      rockPaperScissors("scissors", computerPlay(r_p_s));
      });
