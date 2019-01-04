var r_p_s = ['rock', 'paper', 'scissors'];
function computerPlay(array){
    return array[Math.floor(Math.random()*array.length)];}
function rockPaperScissors(playerSelection, computerSelection){
if (playerSelection == "rock" && computerSelection == "paper") {
  return "You lose! Paper beats rock.";
} else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win! Rock beats scissors.";
} else if (playerSelection == "rock" && computerSelection == "rock") {
    return "Draw";
}else if (playerSelection == "paper" && computerSelection == "rock")
  return "You lose! Rock beats paper.";
}
