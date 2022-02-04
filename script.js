//Function "computerChoice" picks a random number that correlates to rock, paper, or scissors.
function computerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        console.log("rock");
    } else if (number === 1) {
        console.log("paper");
    } else if (number === 2) {
        console.log("scissors");
    }
}
//Function "playerChoice" takes a user's input of rock, paper, or scissors, or it returns "Choose Again" they do not. 
function playerChoice() {
    let userInput = prompt("Chooce Rock, Paper, or Scissors");
    if (userInput.toLowerCase() == "rock") {
        console.log("rock");
    } else if (userInput.toLowerCase() == "paper") {
        console.log("paper");
    } else if (userInput.toLowerCase() == "Scissors") {
        console.log("scissors");
    } else alert("Pick Again")
}
computerChoice()
playerChoice()