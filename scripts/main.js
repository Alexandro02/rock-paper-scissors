// Store score for both players
let humanScore = 0
let computerScore = 0

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
  const result = document.querySelector("#result")
  const score = document.querySelector("#score")
  const winner = getWinner(humanChoice, computerChoice)

  if (winner === "draw") result.textContent = "It's a draw!"
  else if (winner === "human") {
    result.textContent = `Player wins! ${humanChoice} beats ${computerChoice}`
    humanScore++
  }
  else if (winner === "computer") {
    result.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}`
    computerScore++
  }

  score.textContent = `Score - Player: ${humanScore} | Computer: ${computerScore}`
}

document.querySelectorAll("#choice button").forEach(button => {
  button.addEventListener("click", (event) => {
    const humanChoice = event.target.id
    const computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
  })
})