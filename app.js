// //Mode functionality
const modeBtn = document.querySelector("#btn");
let body = document.querySelector("body");
const resetBtn = document.querySelector("#reset");

let currMode = "light";

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
});

// Game Functionality
let userScore = 0;
let compScore = 0;
let gameOver = false;

// Selecting Elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Generate computer choices
const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return option[randomIndex];
};

// Draw game function
const drawGame = () => {
  msg.innerText = "Game was draw! Try again.";
  msg.style.backgroundColor = "#024e63";
};

// Reset game
const resetGame = () => {
  userScore = 0;
  compScore = 0;
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
  msg.innerText = "Game reset! Play again!";
  msg.style.backgroundColor = "#052e3a";
  gameOver = false;
};

// Show winner function
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
  if (userScore === 5 || compScore === 5) {
    gameOver = true;
    resetBtn.innerText = "play again!";
    if (userScore > compScore) {
      msg.style.backgroundColor = "green";
      msg.innerText = "Congratulations! You have won the game!";
    } else {
      msg.style.backgroundColor = "red";
      msg.innerText = "Computer Has won the game!";
    }
  }
};

// User choices handling
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

resetBtn.addEventListener("click", () => {
  resetGame();
  resetBtn.innerText = "Play again!";
});

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    if (gameOver) return;
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
