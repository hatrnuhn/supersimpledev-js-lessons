// 10c
console.log(document.querySelector('.js-button').classList.contains('js-button'));

// 10defg
let toggleButtonMem = JSON.parse(localStorage.getItem('toggleButtonMem')) || '';

if (toggleButtonMem) {
  toggleButtonOn(toggleButtonMem);
}

function checkToggle(toggleButtonElement) {
  return toggleButtonElement.classList.contains('is-toggled');
}

function toggleButtonOn(buttonNum) {
  document.querySelector(`.js-toggle-${buttonNum}`).classList.add('is-toggled');
}

function toggleButtonOff(buttonNum) {
  document.querySelector(`.js-toggle-${buttonNum}`).classList.remove('is-toggled');
}

function storeToggle() {
  localStorage.setItem('toggleButtonMem', JSON.stringify(toggleButtonMem));
}

function toggleButton(buttonNum) {
  let toggleButtonElement = document.querySelector(`.js-toggle-${buttonNum}`);

  if (!checkToggle(toggleButtonElement) && !toggleButtonMem) {
    toggleButtonOn(buttonNum);
    toggleButtonMem = buttonNum;
  } else if (checkToggle(toggleButtonElement)){
    toggleButtonOff(buttonNum);
    toggleButtonMem = '';
  }

  storeToggle();
}

