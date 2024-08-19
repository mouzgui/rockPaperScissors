const rockElement = document.getElementById("rockElement");
const paperElement = document.getElementById("paperElement");
const scissorsElement = document.getElementById("scissorsElement");

const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const drawScore = document.getElementById("draw-score");

const userPickElement = document.getElementById("user-pick");
const computerPickElement = document.getElementById("computer-pick");
const loseOrWin = document.getElementById("loseOrWin");

const newGameBtn = document.getElementById("newGameBtn");

let winTracker = 0;
let loseTracker = 0;
let drawTracker = 0;

function generateComputerPick() {
  let randomPick = Math.floor(Math.random() * 3) + 1;
  return randomPick === 1 ? "rock" : randomPick === 2 ? "paper" : "scissors";
}

function updateUi(result, choice, computerPick) {
  if (result === "win") {
    winTracker++;
    userScore.innerHTML = winTracker;
    loseOrWin.innerHTML = "You win";
  } else if (result === "lose") {
    loseTracker++;
    computerScore.innerHTML = loseTracker;
    loseOrWin.innerHTML = "You lose";
  } else {
    drawTracker++;
    drawScore.innerHTML = drawTracker;
    loseOrWin.innerHTML = "Draw";
  }
  userPickElement.innerHTML = choice;
  computerPickElement.innerHTML = computerPick;
}
function handleChoice(choice) {
  const computerPick = generateComputerPick();
  if (choice === computerPick) {
    updateUi(`draw`, choice, computerPick);
  } else if (
    (choice === "rock" && computerPick === "scissors") ||
    (choice === "paper" && computerPick === "rock") ||
    (choice === "scissors" && computerPick === "paper")
  ) {
    updateUi("win", choice, computerPick);
  } else {
    updateUi("lose", choice, computerPick);
  }
}

function resetGame() {
  winTracker = 0;
  loseTracker = 0;
  drawTracker = 0;

  userScore.innerHTML = winTracker;
  computerScore.innerHTML = loseTracker;
  drawScore.innerHTML = drawTracker;

  userPickElement.innerHTML = "";
  computerPickElement.innerHTML = "";
  loseOrWin.innerHTML = "Make Your Choice!";
}

rockElement.addEventListener("click", () => {
  handleChoice("rock");
});
paperElement.addEventListener("click", () => {
  handleChoice("paper");
});
scissorsElement.addEventListener("click", () => {
  handleChoice("scissors");
});

newGameBtn.addEventListener("click", resetGame);
