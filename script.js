// Initialize variables
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let playerSelection = '';

// Create score screen
let playerScreen = document.querySelector("#playerScore");
let computerScreen = document.querySelector("#computerScore");
let winnerScreen = document.querySelector(".winner");
let mainScreen = document.querySelector(".screen")

// Import buttons
const btns = document.querySelectorAll(".btn");
document.addEventListener("click", (e) => {
    playerSelection = e.target.id
    playRound()
    playerSelection = ''
});

// generates choice via random method
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(computerChoice = getComputerChoice()) {
    /*
    Controls the flow of each round.
    */

    // game logic
    if ((playerSelection == "rock" && computerChoice == "scissors") ||
        (playerSelection == "paper" && computerChoice == "rock") ||
        (playerSelection == "scissors" && computerChoice == "paper")) {
        playerScore++;
    } else if (playerSelection == computerChoice) {
        "Draw";
    } else {
        computerScore++;
    };

    // updates scores
    playerScreen.textContent = `Player score: ${playerScore}`;
    computerScreen.textContent = `Computer score: ${computerScore}`;

    // Check for winner
    if (playerScore > 4) {
        winnerScreen.textContent = "You win!";
        return;
    } else if (computerScore > 4) {
        winnerScreen.textContent = "You lost ;(";
        return;
    };
};