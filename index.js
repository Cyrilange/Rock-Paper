const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

//choice

const choices = document.querySelectorAll("button");

let userChoice = "";
let computerChoice = "";
let result = ";";

choices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateChoiceCumputer();
    determineWinner();
  })
);

function generateChoiceCumputer() {
  const random = Math.floor(Math.random() * choices.length);

  if (random === 0) {
    computerChoice = "rock";
  } else if (random === 1) {
    computerChoice = "paper";
  } else if (random === 2) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function determineWinner() {
  if (userChoice === computerChoice) {
    result = "Vous êtes à égalité!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "Félicitations, vous avez gagné cette manche!";
  } else {
    result = "Ouch, vous avez perdu cette manche!";
  }

  resultDisplay.innerHTML = result;
}
