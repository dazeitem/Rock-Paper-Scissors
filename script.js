const choices = ["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0

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
                break;
            } else if (computerChoice == "scissors") {
                console.log("You win.");
                humanScore ++;
                break;
            }
        case "paper":
            if (computerChoice == "rock") {
                console.log("You win.");
                humanScore ++;
                break;
            } else if (computerChoice == "scissors") {
                console.log("You lose.");
                computerScore ++;
                break;
            }
        case "scissors":
            if (computerChoice == "paper") {
                console.log("You win.");
                humanScore ++;
                break;
            } else if (computerChoice == "rock") {
                console.log("You lose.");
                computerScore ++;
                break;
            }
        default:
            console.log("Draw.");

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