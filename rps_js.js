var computer_score = 1;
var player_score = 0;
var r_p_s = ["rock", "paper", "scissors"];
function computerPlay(array){
    return array[Math.floor(Math.random()*array.length)];}



function game(){


  var selection = prompt();
  return rockPaperScissors(selection, "paper");



}

function rockPaperScissors(playerSelection, computerSelection){

playerSelection = playerSelection.toLowerCase();
if (playerSelection == "rock" &&  computerSelection== "paper") {
  alert ("You lose! Paper beats rock." + " Computer: " + computer_score + " Player: " + player_score );
  computer_score += 1;
  return game();


}
//something wrong with the rest of the conditionals that is preventing game() from functioning
else if (playerSelection == "rock" && computerSelection == "scissors") {

 alert("You win! Rock beats scissors."+ " Computer: " + computer_score + " Player: " + player_score );
 return game();
}
  else if (playerSelection == "rock" && computerSelection == "rock") {
 alert("Draw."+ " Computer: " + computer_score + " Player: " + player_score );
 return game();
}
else if (playerSelection == "paper" && computerSelection == "rock") {

alert("You win! Paper beats rock."+ " Computer: " + computer_score + " Player: " + player_score );
return game();
}
else if (playerSelection == "paper" && computerSelection == "paper") {
alert("Draw."+ " Computer: " + computer_score + " Player: " + player_score );
return game();
}
else if (playerSelection == "paper" && computerSelection == "scissors") {

alert("You lose! Scissors beats paper."+ " Computer: " + computer_score + " Player: " + player_score );
return game();
}
else if (playerSelection == "scissors" && computerSelection == "rock") {

alert("You lose! Rock beats paper."+ " Computer: " + computer_score + " Player: " + player_score );
return game();
}
else if (playerSelection == "scissors" && computerSelection == "paper") {

alert("You win! Scissors beats paper."+ " Computer: " + computer_score + " Player: " + player_score );
return game();
}
else if (playerSelection == "scissors" && computerSelection == "scissors") {
alert("Draw."+ " Computer: " + computer_score + " Player: " + player_score );
return game();
}

}
