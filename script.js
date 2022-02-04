
let computerScore = 0;
let playerScore = 0;
function game() {
    while (playerScore < 5 && computerScore < 5) {
        singleRound();
    } if (playerScore <= 5) {
        alert("You win. Go touch grass.")
    } else if (computerScore <= 5) {
        alert("You lose. Get gud.")
    }
}


function singleRound() {
    let co = computerChoice();
    let po = playerChoice();
        if (po == co) {
            alert("Its a Tie!");
        } else if (po == "rock" && co == "paper") {
            alert("You lose. Paper beats rock!");
            return console.log("Computer Score: " + ++computerScore);
        } else if (po == "rock" && co == "scissors") {
            alert("You win. Rock beats scissors!");
            return console.log("Player Score: " + ++playerScore);
        } else if (po == "paper" && co == "rock") {
            alert("You win. Paper beats rock!");
            return console.log("Player Score: " + ++playerScore);
        } else if (po == "paper" && co == "scissors") {
            alert("You lose. Scissors beats paper!");
            return console.log("Computer Score: " + ++computerScore);
        } else if (po == "scissors" && co == "rock") {
            alert("You lose. Rock beats scissors!");
            return console.log("Computer Score: " + ++computerScore);
        } else if (po == "scissors" && co == "paper") {
            alert("You win. Scissors beats paper!");
            return console.log("Player Score: " + ++playerScore);
        } 
}   


//Function "computerChoice" picks a random number that correlates to rock, paper, or scissors.
function computerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return "rock";
    } else if (number === 1) {
        return "paper";
    } else if (number === 2) {
        return "scissors";
    }
}
//Function "playerChoice" takes a user's input of rock, paper, or scissors, or it returns "Choose Again" they do not. 
function playerChoice() {
    let userInput = prompt("Chooce Rock, Paper, or Scissors");
    if (userInput.toLowerCase() == "rock") {
        return "rock";
    } else if (userInput.toLowerCase() == "paper") {
        return "paper";
    } else if (userInput.toLowerCase() == "scissors") {
        return "scissors";
    } else alert("Pick Again")
}

game()