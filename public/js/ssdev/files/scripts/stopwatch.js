// Initializing JS elements
const timerDisplayElement = document.querySelector('.js-timer-display');

const startButtonElement = document.querySelector('.js-start-button');

const resetButtonElement = document.querySelector('.js-reset-button');

// Declaring and or initializing global variables
let intervalId;
const timer = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  mili: 0,
}
let timerCount = 0;
let isCounting = false;

// Setting event listeners
startButtonElement.addEventListener('click', toggleTimer);
resetButtonElement.addEventListener('click', resetTimer);

// Declaring functions
function startTimer() {
  isCounting = true;
  intervalId = setInterval(() => {
    addMiliseconds();
    updateTimerDisplay();
  }, 10);
}

function stopTimer() {
  clearInterval(intervalId);
  isCounting = false;
}

function resetTimer() {
  stopTimer();
  timerCount = 0;
  updateTimerDisplay();
  startButtonElement.innerHTML = 'Start';
}

function toggleTimer() {
  if (!isCounting) {
    startTimer();
    startButtonElement.innerHTML = 'Pause';
  } else {
    stopTimer();
    startButtonElement.innerHTML = 'Continue';
  }
  console.log(isOnPause);
  console.log(isCounting);
}

function addMiliseconds() {
  timerCount += 10;
}

function updateTimerDisplay() {
  const millisecondsInADay = 86400000;
  const millisecondsInAnHour = 3600000;
  const millisecondsInAMinute = 60000;
  const millisecondsInASecond = 1000;

  function formatTimeUnit(value, unit) {
    return value ? `${value}${unit} ` : '';
  }

  let { days, hours, minutes, seconds, mili } = timer;

  days = Math.floor(timerCount / millisecondsInADay);
  hours = Math.floor((timerCount % millisecondsInADay) / millisecondsInAnHour);
  minutes = Math.floor((timerCount % millisecondsInAnHour) / millisecondsInAMinute);
  seconds = Math.floor((timerCount % millisecondsInAMinute) / millisecondsInASecond);
  mili = Math.floor((timerCount % millisecondsInASecond) / 10);

  const formattedDays = formatTimeUnit(days, 'd');
  const formattedHours = formatTimeUnit(hours, 'h');
  const formattedMinutes = formatTimeUnit(minutes, 'm');
  const formattedSecondsMili = `${seconds}s ${mili}`;

  const timerDisplay = `${formattedDays}${formattedHours}${formattedMinutes}${formattedSecondsMili}`;

  timerDisplayElement.innerHTML = timerDisplay;
}