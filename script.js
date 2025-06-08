const choise = ["rock", "paper", "scissors"];

function getComputerChoise() {
  let randnum = Math.floor(Math.random() * 3);
  return choise[randnum];
}

let playerChoise = "";
document.getElementById("rock").onclick = function () {
  playerChoise = 'rock';
let computerChoise = getComputerChoise();
  let result = check(playerChoise , computerChoise);
  document.getElementById('result').innerText = `You choose ${playerChoise} ; Computer Choose ${computerChoise} \n ${result}`
};
document.getElementById("paper").onclick = function () {
  playerChoise = 'paper';
let computerChoise = getComputerChoise();
  let result = check(playerChoise , computerChoise);
  document.getElementById('result').innerText = `You choose ${playerChoise} ; Computer Choose ${computerChoise} \n ${result}`
};

document.getElementById("scissor").onclick = function () {
  playerChoise = 'scissor';
let computerChoise = getComputerChoise();
  let result = check(playerChoise , computerChoise);
  document.getElementById('result').innerText = `You choose ${playerChoise} ; Computer Choose ${computerChoise} \n ${result}`
};



function check(player, computer) {
  if (player == computer) return "Draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You Win!";
  }
  return "Computer Win!";
}


