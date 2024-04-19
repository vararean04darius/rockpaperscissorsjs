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

function getPlayerChoice() {
    return prompt("Choose one from: Rock, Paper or Scissors").toLowerCase();
}


// console.log(playerSelection);
// console.log(computerSelection);

// console.log(playRound(playerSelection, computerSelection));
function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === "rock"){
        if(computerSelection.toLowerCase() === "rock"){
            return "It's a draw!";
        } else if(computerSelection.toLowerCase() === "paper") {
            return "You lost! Computer picked Paper.";
        } else {
            return "You won! Computer picked Scissors.";
        }
    }
    if(playerSelection.toLowerCase() === "paper"){
        if(computerSelection.toLowerCase() === "rock"){
            return "You won! Computer picked Rock.";
        } else if(computerSelection.toLowerCase() === "paper") {
            return "It's a draw!";
        } else {
            return "You lost! Computer picked Scissors.";
        }
    }
    if(playerSelection.toLowerCase() === "scissors"){
        if(computerSelection.toLowerCase() === "rock"){
            return "You lost! Computer picked Rock.";
        } else if(computerSelection.toLowerCase() === "paper") {
            return "You won! Computer picked Paper.";
        } else {
            return "It's a draw!";
        }
    }
}

function searchResult(string) {
    if(string.search("draw") > 0){
        return 0;
    }
    if(string.search("won") > 0){
        return 1;
    }
    if(string.search("lost") > 0){
        return -1;
    }
}

function playGame() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let player = 0;
    let computer = 0;
    let completedrounds = 0;
    let validrounds = 0;
    while( validrounds !=5){
        let won = searchResult(playRound(playerSelection, computerSelection));
        if(won === 1){
            player++;
            validrounds++;
            completedrounds++;
        }else if(won === -1) {
            computer++;
            validrounds++;
            completedrounds++;
        }else if(won === 0) {
            completedrounds++;
        }
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        console.log("Current score: " + player + " you - " + computer + " computer");
        console.log("Total rounds played: " + completedrounds + " from which, rounds without draw: " + validrounds);
    }
}

playGame();