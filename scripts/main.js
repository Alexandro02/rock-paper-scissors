// Store score for both players
let humanScore = 0
let computerScore = 0

/*  
 * Gets user choice and lowercases it to normalize it.
 * 
 * @param choice: string
 *
*/
const normalizeChoice = (choice) => {
  if (!choice) return null
  const formattedChoice = choice.trim().toLowerCase()
  const choices = { rock: "rock", paper: "paper", scissors: "scissors" }
  return choices[formattedChoice] || null
}

// Get the user input
const getUserChoice = () => {
  let choice = ""

  do {
    choice = normalizeChoice(prompt("Rock? Paper? Scissors?"))
    if (!choice) { console.log("Please input a valid choice!") }
  } while (!choice)

  return choice
}

/*
 * Gets computer choice by taking a number from 0-2
 * 0: Rock
 * 1: Paper
 * 2: Scissor
 * */
const getComputerChoice = () => {
  const options = ['rock', 'paper', 'scissors']

  return options[Math.floor(Math.random() * 3)]
}

const getWinner = (humanCoice, computerChoice) => {
  if (humanCoice === computerChoice) return "draw"

  const winningCases = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  }

  return winningCases[humanCoice] === computerChoice ? "human" : "computer"
}

const playRound = (humanChoice, computerChoice) => {
  console.log(`Player: ${humanScore}\nComputer: ${computerScore}`)

  const winner = getWinner(humanChoice, computerChoice)

  if (winner === "draw") console.log("It's a draw!")
  else if (winner === "human") {
    console.log("Human wins")
    humanScore++
  }
  else if (winner === "computer") {
    console.log("Computer wins")
    computerScore++
  }

  console.log(`Score - Player: ${humanScore} | Computer: ${computerScore}`);
}

// Play game for 5 rounds
const playGame = () => {
  // Game loop
  for (let i = 1; i <= 5; i++) {
    console.log(`Round #${i}`)

    // Get user and computer input
    const humanSelection = getUserChoice()
    const computerSelection = getComputerChoice()

    playRound(humanSelection, computerSelection);
  }
}

// playGame();
