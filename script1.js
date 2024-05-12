"use strict";

const choices = ["rock", "paper", "scissors"];

let rockButton = document.querySelector("#rock");
let scissorsButton = document.querySelector("#scissors");
let paperButton = document.querySelector("#paper");
let resultElement = document.querySelector("#result");

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

rockButton.addEventListener("click", function () {
  const result = playRound("rock");
  resultElement.textContent = result;
});

scissorsButton.addEventListener("click", function () {
  const result = playRound("scissors");
  resultElement.textContent = result;
});

paperButton.addEventListener("click", function () {
  const result = playRound("paper");
  resultElement.textContent = result;
});

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win! Computer chose " + computerSelection + ".";
  } else {
    return "You lose! Computer chose " + computerSelection + ".";
  }
}
