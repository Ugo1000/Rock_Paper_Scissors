# Rock, Paper, Scissors Game

This is a simple JavaScript implementation of the classic rock-paper-scissors game. The game allows the player to enter their choice (rock, paper, or scissors) via a prompt and then plays a single round against the computer, determining the winner based on the game rules.

## Usage

1. Open the `index.html` file in a web browser or run the JavaScript code in a suitable environment.
2. Follow the prompt to enter your choice (rock, paper, or scissors).
3. The game will then display the result of the round, indicating whether the player wins, loses, or ties with the computer.

## Code Structure

### `getComputerChoice()`

This function generates a random choice for the computer. It randomly selects from the options: 'Rock', 'Paper', or 'Scissors'.

### `playRound(playerSelection, computerSelection)`

This function compares the player's selection with the computer's selection to determine the winner of a single round. It returns a message indicating the result of the round.

### `playGame()`

This function facilitates playing a single round of the game. It prompts the user to enter their choice and then calls the `playRound()` function to determine the outcome of the round.

## Example

```javascript
// Prompt the user for their choice and play a single round
const playerSelection = prompt("Enter Your Word : ");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
