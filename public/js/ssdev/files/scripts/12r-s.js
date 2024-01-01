let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

const scoreElement = document.querySelector('.js-score');

updateScoreElement();

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

document.body.addEventListener('keydown', (eventObject) => {
  if (eventObject.key === 'q') {
    playGame('rock');
  } else if (eventObject.key === 'w') {
    playGame('paper');
  } else if (eventObject.key === 'e') {
    playGame('scissors');
  }
});

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

document.body.addEventListener('keyup', eventObj => {
    if (eventObj.key === 'a' && (!isConfirming)) {
      autoPlay();    
    }
  });

function autoPlay() {
  if (!isAutoPlaying) {
    startAutoPlay();
  } else {
    stopAutoPlay();
  }
}

function startAutoPlay() {
  intervalId = setInterval(() => {
    playGame(pickComputerMove());
  }, 1000); 
  isAutoPlaying = true;
  
  document.querySelector('.js-auto-play-button')
    .innerHTML = 'Stop Auto Play';
}

function stopAutoPlay() {
  clearInterval(intervalId);
  isAutoPlaying = false;
  if (!isConfirming) document.querySelector('.js-auto-play-button')
    .innerHTML = 'Auto Play';
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

document.body.addEventListener('keyup', eventObj => {
  if (eventObj.key === 'Backspace') {
    resetScore();
  }
});

function resetScore() {
  if (isAutoPlaying) stopAutoPlay();
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  localStorage.removeItem('score');

  writeResult('Score was reset.');
  writeMove('');
  updateScoreElement();
}

let isConfirming = false;
const resetAutoContainerElement = document.querySelector('.js-reset-auto-container');
renderDefaultResetAutoElement();

function toggleResetAutoConfirm(isFromResetButton = false) {
  if (isFromResetButton) {
    isConfirming = true;
    renderConfirmation();
  } else {
    isConfirming = false;
  }

  if (!isConfirming) renderDefaultResetAutoElement();
}

function renderDefaultResetAutoElement() {
  const htmlDefault = `
    <button class="js-reset-button reset-score-button">Reset Score</button>
            
    <button class="auto-play-button js-auto-play-button">Auto Play</button>
  `;

  resetAutoContainerElement
    .classList.remove('confirmation-grid');


  resetAutoContainerElement.innerHTML = htmlDefault;
  document.querySelector('.js-reset-button')
    .addEventListener('click', () => toggleResetAutoConfirm(true));
  document.querySelector('.js-auto-play-button')
    .addEventListener('click', autoPlay);
}

function renderConfirmation() {
  const htmlConfirm = `
    <p>U sure u want to reset the score?</p>
    <button class="confirmation-button" onclick="
      resetScore();
      toggleResetAutoConfirm();
    ">Yes</button>
    <button class="confirmation-button" onclick="
      if (isAutoPlaying) autoPlay();
      toggleResetAutoConfirm();
    ">No</button>
  `;
  resetAutoContainerElement.innerHTML = htmlConfirm;
  resetAutoContainerElement.classList.add('confirmation-grid');
  if (isAutoPlaying) stopAutoPlay();
}