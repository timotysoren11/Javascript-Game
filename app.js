
// Need to select all the necessary ID's 
// set the variables to all

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('your-choice');
const resultDisplay  = document.getElementById('result');

// Query selector for selecting all buttons
const possibleChoices = document.querySelectorAll('button');
// Global declaration 
let userChoice;
let computerChoice;
let result;

// For each possible choices, targeting the id
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;

  //calling the function inside the actionEventListener
  generateComputerChoice();
  getResult();

}))

// Generating computer choice
function generateComputerChoice(){
  const randomNumber = Math.floor(Math.random() *3) +1 ;

  if (randomNumber === 1) {
    computerChoice = 'rock';
  }

  if (randomNumber === 2) {
    computerChoice = 'scissors';
  }

  if (randomNumber === 3) {
    computerChoice = 'paper';
  }

  //Displaying computer choice
   computerChoiceDisplay.innerHTML = computerChoice;
}  

// Result Display
function getResult() {
  if (computerChoice === userChoice){
    result = 'its a draw !';
  }

  if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'you win !';
  }
  
  if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = 'you lost !';
  }
  
  if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'you win !';
  }
  
  if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'you lost !';
  }
  
  if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'you win !';
  }

  if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'you lost !';
  }

  // Displaying the result 
  resultDisplay.innerHTML =result;
}
