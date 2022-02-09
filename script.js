
let computerScore = 0;
let playerScore = 0;

playerPoints = document.querySelector("#playerPoints");
computerPoints = document.querySelector("#computerPoints");
results = document.querySelector("#showResults");

const rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
    choiceRock();
    firstToFive();
});
const paper = document.querySelector("#paper");
paper.addEventListener('click', () => {
    choicePaper();
    firstToFive();
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => {
    choiceScissors();
    firstToFive();
});

function choiceRock() {
    return "rock";
}

function choicePaper() {
    return "paper";
}

function choiceScissors() {
    return "scissors";
}

function computerOption() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return "rock";
    } else if (number === 1) {
        return "paper";
    } else if (number === 2) {
        return "scissors";
    }
}
//Plays a single round. Needs to be more efficient (1 player selection function instead of 3). 
function singleRound() {
    let selectRock = choiceRock();
    let selectPaper = choicePaper();
    let selectScissors = choiceScissors();
    let computerChoice = computerOption(); 
    if (selectRock && selectPaper && selectScissors == computerChoice) {
        return results.textContent = "Its a Tie!";
    } else if (selectRock == "rock" && computerChoice == "paper") {
        results.textContent = "You lose. Paper beats rock!";
        return computerPoints.textContent = ++computerScore;
    } else if (selectRock == "rock" && computerChoice == "scissors") {
        results.textContent = "You win. Rock beats scissors!";
        return playerPoints.textContent = ++playerScore;
    } else if (selectPaper == "paper" && computerChoice == "rock") {
        results.textContent = "You win. Paper beats rock!";
        return playerPoints.textContent = ++playerScore;
    } else if (selectPaper == "paper" && computerChoice == "scissors") {
        results.textContent = "You lose. Scissors beats paper!";
        return computerPoints.textContent = ++computerScore;
    } else if (selectScissors == "scissors" && computerChoice == "rock") {
        results.textContent = "You lose. Rock beats scissors!";
        return computerPoints.textContent = ++computerScore;
    } else if (selectScissors == "scissors" && computerChoice == "paper") {
        results.textContent = "You win. Scissors beats paper!";
        return playerPoints.textContent = ++playerScore;
    } 
}
//Runs single Round until a score reaches five.
function firstToFive() {
    singleRound()
    if (playerScore >= 5) {
        showResults.textContent = "Player Wins!";
        gameOver()
    } else if (computerScore >= 5) 
        showResults.textContent = "Computer Wins!";
        gameOver()
}
//Resets the game once a score reaches five.
function gameOver() {
    if (playerScore >= 5 || computerScore >= 5) {
        playerScore = 0;
        playerPoints.textContent = "0"
        computerScore = 0;
        computerPoints.textContent = "0"
    }
}
 

