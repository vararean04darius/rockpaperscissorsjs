console.log("Hello World!")

function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }

function getComputerChoice() {
    let compchoice =getRandomInt();
    if (compchoice === 0){
        return "Rock";
    } else if (compchoice === 1){
        return "Paper";
    } else {
        return "Scissors";
    }
}

let computerSelection = getComputerChoice();

function getPlayerChoice() {
    return prompt("Choose one from: Rock, Paper or Scissors");
}


// function playRound(playerSelection, computerSelection) {
//     if(playerSelection === "rock")
// }

console.log(getComputerChoice());