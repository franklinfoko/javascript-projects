let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generatedTarget = () => {
  return Math.floor(Math.random(0, 9))
}

const compareGuesses = (userGuess, computerGuess, secretTargetNumber) => {
  const userClosest = Math.abs(userGuess - secretTargetNumber)
  const computerClosest = Math.abs(computerGuess - secretTargetNumber)

  if (userClosest < computerClosest) {
    return true
  } else if (userClosest > computerClosest) {
    return false
  } else {
    return true
  }
}

// console.log(compareGuesses(23,43,65))

const updateScore = (winner) => {
  if (winner ===  'human') {
    humanScore++
  } else if (winner === 'computer') {
    computerScore++
  } else {
    console.log('The winner should be human or computer')
  }
}

const advancedRound = () => {
  currentRoundNumber++
}