const choices = ["rock", "paper", "scissors"];
const winners = [];

// Keep the game going until the desired number of rounds has been played
function game() {
  for (let i = 0; i <= 5; i++) {
    playRound(i);
  }
  logWins();
}

// adding the main game functionality
// defining player and computer choice
// defining the winner
function playRound(round) {
  const playerChoice = playerSelection();
  const computerChoice = computerSelection();
  const winner = detectWinner(playerChoice, computerChoice);
  winners.push(winner);
  console.log(computerChoice);
  console.log(winner);
  logRound(playerChoice, computerChoice, winner, round);
}

// Setting up the prompt so that the player can enter the necessary text
function playerSelection() {
  let input = prompt("Type rock, paper or scissors");
  input = input.toLowerCase();
  while (input == null) {
    input = prompt("Type rock, paper, scissors");
  }

  // Setting characters to lowercase
  // Setting up correct input requirements, so that player can only choose rock, paper or scissors.
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt("Type rock, paper, scissors");
    while (input == null) {
      input = prompt("Type rock, paper, scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  // returning player's choice
  return input;
}

//Computer will choose a random option from the list
function computerSelection() {
  return choices[Math.floor(Math.random() * choices.length)];
}
// Validating and returning computer's choice
function validateInput(choice) {
  return choices.includes(choice);
}

// determining the winner
function detectWinner(selectionP, selectionC) {
  if (selectionP === selectionC) {
    return "Tie";
  } else if (
    (selectionP === "rock" && selectionC === "scissors") ||
    (selectionP === "paper" && selectionC === "rock") ||
    (selectionP === "scissors" && selectionC === "paper")
  ) {
    return "You  win!" + " " + selectionP + " " + "beats" + " " + selectionC;
  } else {
    return (
      "You lose! - " +
      " " +
      selectionC +
      " " +
      "beats" +
      " " +
      selectionP
    );
  }
}

// displaying the number of wins and ties
function logWins() {
  let playerWins = winners.filter((item) => item == "Player wins").length;
  let computerWins = winners.filter((item) => item == "Computer wins").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Outcome:");
  console.log("player wins:", playerWins);
  console.log("computer wins:", computerWins);
  console.log(" Ties:", ties);
}

// displaying the results of each round
function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round", round);
  console.log("Player picked ", playerChoice);
  console.log("computer picked ", computerChoice);
  console.log(winner);
  console.log("--------------------------------");
}

game();
