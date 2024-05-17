// JavaScript (in script.js file)
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDiv = document.getElementById("result");

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  const winner = getWinner(playerSelection, computerSelection);

  if (winner === "player") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
  }

  resultDiv.textContent = `You chose ${playerSelection}, computer chose ${computerSelection}. ${
    winner === "player"
      ? "You win!"
      : winner === "computer"
      ? "Computer wins!"
      : "Tie!"
  }`;
  resultDiv.textContent += `\r\nPlayer score: ${playerScore}, Computer score: ${computerScore}`;

  if (playerScore === 5) {
    resultDiv.textContent += "\r\nYou win the game!";
  } else if (computerScore === 5) {
    resultDiv.textContent += "\r\nComputer wins the game!";
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  }
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}
