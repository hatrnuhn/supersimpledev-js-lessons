// 12a
const add = function() {
  console.log(2 + 3);
};

add();

// 12b
function runTwice(fun) {
  for (let i = 0; i < 2; i++){
    fun();
  }
}

runTwice(function() {
  console.log('12b');
});

runTwice(add);

// 12cd
function startTimeout() {
  const startButtonElement = document.querySelector('.js-start-button');

  startButtonElement.innerHTML = 'Loading...';

  setTimeout(function() {
    startButtonElement.innerHTML = 'Finished!';
  }, 2000);
}

// 12ef
let isTimingout = false;
let timeoutId;

function renderMessage(text, seconds) {
  const messageElement = document.querySelector('.js-message');

  if (isTimingout) {
    clearTimeout(timeoutId);
    isTimingout = false;
  } else {
    timeoutId = setTimeout(function() {
      messageElement.innerHTML = '';
    }, seconds);
    isTimingout = true;
  }

  messageElement.innerHTML = text;
}

// 12gh
let totalMessage = 0;
const titleElement = document.querySelector('.js-title');
let isAlternating = false;
let intervalId;
const defaultTitle = 'Lesson 12 Exercises'; 

function alternateTitle() {
  if (titleElement.innerHTML === defaultTitle) {
    titleElement.innerHTML = `(${totalMessage}) New messages`;
  } else {
    titleElement.innerHTML = defaultTitle;
  }
}

function addMessage() {
  if (isAlternating) {
    clearInterval(intervalId);
  }

  isAlternating = true;
  totalMessage++;
  titleElement.innerHTML = `(${totalMessage}) New messages`;
  intervalId = setInterval(alternateTitle, 2000);
}

function removeMessage() {
  if (totalMessage - 1 >= 0) {
    totalMessage--;
    titleElement.innerHTML = `(${totalMessage}) New messages`;
    if (totalMessage === 0) {
      titleElement.innerHTML = defaultTitle;
      clearInterval(intervalId);
      isAlternating = false;
    }
  }
}