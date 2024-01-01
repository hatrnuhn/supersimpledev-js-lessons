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
const startButtonElement = document.querySelector('.js-start-button');

startButtonElement.addEventListener('click', startTimeout);

function startTimeout() {
  startButtonElement.innerHTML = 'Loading...';

  setTimeout(() => {
    startButtonElement.innerHTML = 'Finished!';
  }, 2000);
}

// 12ef
let isTimingout = false;
let timeoutId;
document.querySelector('.js-add-to-cart')
  .addEventListener('click', function() {
    renderMessage('Added!', 5000);
  });

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
document.querySelector('.js-add-message')
  .addEventListener('click', addMessage);
document.querySelector('.js-remove-message')
  .addEventListener('click', removeMessage);

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

// 12jk
const multiply = (num1, num2) => num1 * num2;

console.log(multiply(2, 3));
console.log(multiply(7, 10));

// 12l
const countPositive = numbers => {
  let totalPositives = 0;

  const positives = numbers.filter(value => (value >= 0)); 

  positives.forEach(number => totalPositives++);

  return totalPositives;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

// 12m
const addNum = (array, num) => {
   return array.map(value => value + num);
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));

// 12n
const removeEgg = foods => {
  return foods.filter(value => value !== 'egg');
};

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

// 12o
const removeFirstTwoEggs = foods => {
  let eggCounter = 0;
  return foods.filter(value => {
    eggCounter++;

    if ((value !== 'egg' || eggCounter > 3)) {
      return true;
    }
  });

};

console.log(removeFirstTwoEggs(['egg', 'apple', 'egg', 'egg', 'ham']));