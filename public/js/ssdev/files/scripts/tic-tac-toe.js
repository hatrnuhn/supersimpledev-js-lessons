// Initializing global variables
const board = ['', '', '', '', '', '', '', '', ''];
let playerTurn = 'x';
const result = {
  tick: 0,
  ties: 0,
  cross: 0
};
let isPlaying = false;

// Initializing HTML element variables
const gameGridElement = document.querySelector('.game-grid');
const playButtonElement = document.querySelector('.js-play-button');
const gameResultElement = document.querySelector('.js-game-result');
const scoreGridElement = document.querySelector('.js-score-grid');

// Initializing event listeners
playButtonElement.addEventListener('click', () => {
    if (!isPlaying) {
      resetBoard();
      renderBoard();
      gameResultElement.innerHTML = '';
      isPlaying = true;
    }
  });

// Declaring functions
function renderBoard(isClickable = true) {
  let boardHTML = '';

  board.forEach((player, index) => {
    let imgPath = '';

    if (player === 'v') {
      imgPath = 'files/images/tictactoe/check.png';
    } else if (player === 'x') {
      imgPath = 'files/images/tictactoe/cross.png';
    } else {
      imgPath = '';
    }

    const html = `
      <button class="js-cell-button button${index} cell-button">
        <img src="${imgPath}" class="move-icon">
      </button>
    `;

    boardHTML += html;

    gameGridElement.innerHTML = boardHTML;
    
    if (isClickable) {
      document.querySelectorAll('.js-cell-button').forEach((cellElement, i) => {
        cellElement.addEventListener('click', () => {
          if (isValidMove(i)) {
            switchPlayer();
            makeMove(`button${i}`);
            if (isWinner()) {
              announceWinner();
            } else if (isBoardFull()) {
              announceTie();
            }
            renderScore();
          }
        });

        cellElement.classList.add('cell-button-pointer');
      });
    }
  });
}

function makeMove(buttonNum) {
  const index = buttonNum[buttonNum.length - 1];
  board[index] = `${playerTurn}`;
  renderBoard();
}

function switchPlayer() {
  (playerTurn === 'x') ? playerTurn = 'v' : playerTurn = 'x';
}

function isValidMove(index) {
  return (!board[index]);
}

function isWinner() {
  const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], // h wins
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical wins
    [0, 4, 8], [2, 4, 6]]; // diagonal wins

  for (const winArray of wins) {
    let winnerFound = true;

    for (const atIndex of winArray) {
      if (board[atIndex] !== playerTurn) {
        winnerFound = false;
        break;
      }
    }

    if (winnerFound) return true;
  }

  return false;
}

function isBoardFull() {
  for (const value of board) {
    if (!value) return false;
  }

  return true;
}

function announceWinner() {
  let winner;
  if (playerTurn === 'v') {
    winner = 'Tick';
    result.tick++;
  } else if (playerTurn === 'x') {
    winner = 'Cross';
    result.cross++;
  }
  gameResultElement.innerHTML = `
    ${winner} wins!
  `;
  isPlaying = false;
  renderBoard(false);
}

function announceTie() {
  gameResultElement.innerHTML = 'It\'s a tie!';
  result.ties++;
  isPlaying = false;
  renderBoard(false);
}

function renderScore() {
  const resultKeys = Object.keys(result);
  let scoreHTML = '';
  
  resultKeys.forEach(key => {
    html = `<p>${key.charAt(0).toUpperCase() + key.slice(1)}: ${result[key]}</p>`;
    scoreHTML += html;
  });

  scoreGridElement.innerHTML = scoreHTML;
}

function resetBoard() {
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
  }

  playerTurn = 'x';
}
// Load non-playable game board when first visiting
renderBoard(false);