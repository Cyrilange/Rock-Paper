const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const choices = document.querySelectorAll(".button"); // Use class selector for buttons

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    const userChoice = e.currentTarget.id; // Use currentTarget to get the clicked button
    userChoiceDisplay.textContent = userChoice; // Update the user choice display

    const computerChoice = generateChoiceComputer();
    computerChoiceDisplay.textContent = computerChoice; // Update the computer choice display

    determineWinner(userChoice, computerChoice); // Determine the winner
  });
});

function generateChoiceComputer() {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    resultDisplay.textContent = "Vous êtes à égalité!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    resultDisplay.textContent = "Félicitations, vous avez gagné cette manche!";
  } else {
    resultDisplay.textContent = "Ouch, vous avez perdu cette manche!";
  }
}
