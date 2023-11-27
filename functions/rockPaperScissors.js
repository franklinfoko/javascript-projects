/*

Rock, Paper, or Scissors
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. 
The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

- Rock destroys scissors.
- Scissors cut paper.
- Paper covers rock.
- If there’s a tie, then the game ends in a draw.

Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results

*/

// Get the user’s choice.

const getUserChoice = (userInput) => {

  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Please put the correct choice')
  }
}


// Get the computer’s choice.

const getComputerChoice = () => {

  number = Math.floor(Math.random()*3)

  let computerChoice = ''

  if (number === 0) {
    computerChoice = 'rock'
  }
  else if (number === 1) {
    computerChoice = 'paper'
  }
  else if (number === 2) {
    computerChoice = 'scissors'
  } else {
    computerChoice = ''
  }

  return computerChoice
}


// Compare the two choices and determine a winner.

const determineWinner = (userInput, computerChoice) => {

  if (userInput === computerChoice) {
    return 'The game was a tie'
  }

  if (userInput === 'rock') {
    if ( computerChoice === 'paper') {
      return 'Computer won'
    } else {
      return 'The user won'
    }
  }

  if (userInput === 'paper') {
    if (computerChoice === 'scissors') {
      return ' Computer won'
    } else {
      return 'The user won'
    }
  }

  if (userInput === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won'
    } else {
      return ' The user won'
    }
  }
}


// Start the program and display the results
const playGame = () => {

  let userChoice = getUserChoice('rock')
  let computerChoice = getComputerChoice()

  console.log(userChoice)
  console.log(computerChoice)

  console.log(determineWinner(userChoice, computerChoice))
}

playGame()