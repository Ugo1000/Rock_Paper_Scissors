// ROCK SCISSOR PAPER

const playerSelection = prompt("Enter Your Word : ");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function getComputerChoice() {
  // Function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win! Computer choose " + computerSelection + ".";
  } else {
    return "You lose! Computer choose " + computerSelection + ".";
  }
}

function playGame() {
  // Play a single round
  const playerSelection = prompt("Enter Your Word : ");
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
}

// Call the playGame function to start the game
playGame();
