// Get the user input

function getUserChoice() {
  return prompt("Rock? Paper? Scissors?");
}

/*
 * Get a random number between 0, 1 or 2
 * 0: Rock
 * 1: Paper
 * 2: Scissor
 * */

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice === 0) return console.log("Rock");
  else if (randomChoice === 1) return console.log("Paper");
  else return console.log("Scissor");
}

// Store score for both players

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) return console.log("Draw!");
}

const humanSelection = getUserChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
