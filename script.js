const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?").toLowerCase()
}

function playRound(computerChoice, humanChoice) {
    /*
    Controls the flow of each round.
    */
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                console.log("You lose.");
                computerScore ++;
            } else if (computerChoice == "scissors") {
                console.log("You win.");
                humanScore ++;
            }
        case "paper":
            if (computerChoice == "rock") {
                console.log("You win.");
                humanScore ++;
            } else if (computerChoice == "scissors") {
                console.log("You lose.");
                computerScore ++;
            }
        case "scissors":
            if (computerChoice == "paper") {
                console.log("You win.");
                humanScore ++;
            } else if (computerChoice == "rock") {
                console.log("You lose.");
                computerScore ++;
            }
        default:
            console.log("Draw.");

    }
}

function playGame() {
    let humanScore = 0
    let computerScore = 0

    for(let i = 0; i < 5; i++) {
        playRound(computerChoice = getComputerChoice(), humanChoice = getHumanChoice())
    }

    if (humanScore > computerScore) {
        console.log(`You won by ${humanScore - computerScore} games. You win.`)
    } else if (humanScore < computerScore) {
        console.log("You lose.")
    } else {
        console.log("Uhhh— Let's play again, I guess.")
    }
}