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
    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")) {
        humanScore++
    } else if (humanChoice == computerChoice) {
        "Draw"
    } else {
        computerScore++
    }
}

function playGame() {

    for(let i = 0; i < 5; i++) {
        playRound(computerChoice = getComputerChoice(), humanChoice = getHumanChoice())
    }

    if (humanScore > computerScore) {
        console.log(`You won by ${humanScore - computerScore} rounds.`)
    } else if (humanScore < computerScore) {
        console.log(`You lose by ${computerScore - humanScore} rounds.`)
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