// function for random result of rock papaer scissors

function getComputerChoice(max) {
    let choice = Math.floor(Math.random() * max);

    switch (choice) {
        case 0: return "rock";
        case 1: return "paper";
        default: return "scissors";
    }
}


// For human input

function getHumanChoice() {
    let guess = prompt("Please enter your guess:");
    return guess;
}


// comparing the result 

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computeChoice) {

    if (humanChoice == computeChoice) {
        return "Draw";
    } 
    
    if (humanChoice == "rock" && computeChoice == "scissors") {
        humanScore++;
        return "You win! Rock beats Scissors";
    } else if (humanChoice == "paper" && computeChoice == "rock") {
        humanScore++;
        return "You win! Paper beats Rock";
    } else if (humanChoice == "scissors" && computeChoice == "paper") {
        humanScore++;
        return "You win! Scissors beats Paper";
    } else {
        computerScore++;
        return `You lose! ${computeChoice} beats ${humanChoice}`;
    }

}

//5 times loop round

for (let i = 0; i < 5; i++) 
    {const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(3);
        
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Scores -> You: ${humanScore} | Computer: ${computerScore}`);
        console.log("---------------------------");
    }

    // the final resultd

if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
} else if (humanScore < computerScore) {
    console.log("💻 Computer won the game!");
} else {
    console.log("🤝 The game is a draw!");
}


