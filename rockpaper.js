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
console.log(getComputerChoice());