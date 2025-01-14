// Get the user input

function getUserChoice() {
  let answer = prompt("Rock? Paper? Scissors?");

  if (!answer) {
    console.log("Please input a valid choice!");
  } else {
    return answer;
  }
}

/*
 * Get a random number between 0, 1 or 2
 * 0: Rock
 * 1: Paper
 * 2: Scissor
 * */

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice === 0) return "Rock";
  else if (randomChoice === 1) return "Paper";
  else return "Scissors";
}

// Store score for both players

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // If both choices are the same, then draw
  let firstLetter = humanChoice.slice(0, 1).toUpperCase();
  let restOfWord = humanChoice.slice(1).toLowerCase();
  let humanWord = firstLetter + restOfWord;

  if (humanWord === computerChoice)
    console.log(`Draw!\nPlayer: ${humanWord}\nComputer: ${computerChoice}`);
  // paper x rock
  // paper x scissors
  if (humanWord === "Paper" && computerChoice === "Rock")
    console.log(
      `Player won!\nPlayer: ${humanWord}\nComputer: ${computerChoice}`,
    );
  if (humanWord === "Paper" && computerChoice === "Scissors")
    console.log(
      `Computer won!\nPlayer: ${humanWord}\nComputer: ${computerChoice}`,
    );
  // rock x paper
  // rock x scissors
  if (humanWord === "Rock" && computerChoice === "Paper")
    console.log(
      `Computer won!\nPlayer: ${humanWord}\nComputer: ${computerChoice}`,
    );
  if (humanWord === "Rock" && computerChoice === "Scissors")
    console.log(
      `Player won!\nPlayer: ${humanWord}\nComputer: ${computerChoice}`,
    );

  // scissors x paper
  // scissors x rock
  if (humanWord === "Scissors" && computerChoice === "Paper")
    console.log(
      `Player won!\nPlayer: ${humanWord}\nComputer: ${computerChoice}`,
    );
  if (humanWord === "Scissors" && computerChoice === "Rock")
    console.log(
      `Computer won!\nPlayer: ${humanWord}\nComputer: ${computerChoice}`,
    );
}

const humanSelection = getUserChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
