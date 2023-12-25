let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};


const scoreElement = document.querySelector('.js-score');

updateScoreElement();

const resultElement = document.querySelector('.js-result');

if ((score.wins === 0 || score.losses === 0 || score.ties === 0)) {
resultElement.innerHTML = '';
}

function updateScoreElement() {
  scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function writeResult(text) {
  document.querySelector('.js-result')
    .innerHTML = `${text}`;
}

function writeMove(text) {
  document.querySelector('.js-move')
    .innerHTML = `${text}`;
}

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  const autoPlayButtonElement = document.querySelector('.js-auto-play-button');

  if (!isAutoPlaying) {
    intervalId = setInterval(function() {
      playGame(pickComputerMove());
    }, 1000); 
    isAutoPlaying = true;
    autoPlayButtonElement.innerHTML = 'Stop Auto Play';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    autoPlayButtonElement.innerHTML = 'Auto Play';
  }
}

function playGame(userMove) {
  const computerMove = pickComputerMove();
  let result;

  // scissors > paper > rock > scissors
  if (computerMove === userMove) {
    result = 'You\'re both tied!';
    score.ties++;
  } else if ((computerMove === 'scissors' && userMove === 'paper') || (computerMove === 'rock' && userMove === 'scissors') || (computerMove === 'paper' && userMove === 'rock')) {
    result = 'You lose!';
    score.losses++;
  } else {
    result = 'You win!';
    score.wins++;
  }

  storeScore(score);
  writeResult(result);
  writeMove(`You 
    <img class="move-icon" src="files/images/${userMove}.png"> 
    - 
    <img class="move-icon" src="files/images/${computerMove}.png"> 
    Computer`);
  updateScoreElement();
}


function storeScore(score) {
  localStorage.setItem('score', JSON.stringify(score));
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove;

  if ((2 / 3) <= randomNumber && randomNumber < 1) {
    computerMove = 'scissors';
  } else if ((1 / 3) <= randomNumber && randomNumber < (2 / 3)) {
    computerMove = 'paper';
  } else {
    computerMove = 'rock';
  }

  return computerMove; 
}


function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  localStorage.removeItem('score');

  writeResult('Score was reset.');
  writeMove('');
  updateScoreElement();
}
