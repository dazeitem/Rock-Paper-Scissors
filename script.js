// Initialize variables
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let playerSelection = '';

// Import screen & buttons
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
        console.log("Uhhh— Let's play again, I guess.")
    }
}

let continuePlaying = true
while (continuePlaying) { // main function run 
    playGame();
    continuePlaying = prompt(`Type "no" if you want to stop playing.`).toLowerCase() !== "no"
    if (continuePlaying == "no") {
        break
    };
}