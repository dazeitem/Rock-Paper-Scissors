const choices = ["rock", "paper", "scissors"]

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?").toLowerCase
}

function playRound(computerChoice, humanChoice) {
    /*
    Controls the flow of each round.
    */
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                console.log("You lose.")
            } else if (computerChoice == "scissors") {
                console.log("You win.")
            }
        case "paper":
            if (computerChoice == "rock") {
                console.log("You win.")
            } else if (computerChoice == "scissors") {
                console.log("You lose.")
            }
        case "scissors":
            if (computerChoice == "paper") {
                console.log("You win.")
            } else if (computerChoice == "rock") {
                console.log("You lose.")
            }
        default:
            console.log("Draw.")

    }
}