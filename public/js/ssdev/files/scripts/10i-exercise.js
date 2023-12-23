const calcMem = JSON.parse(localStorage.getItem('calcMem')) || {
  calculation: '',
  lastPressed: ''
};

writeCalc(calcMem.calculation);

function addToCal(button) {
  // last pressed
  if (((!calcMem.calculation) && (button === ' / ' || button === ' * ' || button === ' - ' || button === ' + ')) || (calcMem.calculation &&  (calcMem.lastPressed === ' / ' || calcMem.lastPressed === ' * ' || calcMem.lastPressed === ' - ' || calcMem.lastPressed === ' + ' || calcMem.lastPressed === '')) && (button === ' / ' || button === ' * ' || button === ' - ' || button === ' + ')) {
    writeMisc('Please input a number before any operator');
    calcMem.lastPressed = '';
    storeCalcMem();
  } else {
    writeMisc('');
    calcMem.calculation += button;
    calcMem.lastPressed = button;
    storeCalcMem();
  }
  writeCalc(calcMem.calculation);
}

function storeCalcMem() {
  localStorage.setItem('calcMem', JSON.stringify(calcMem));
}

function writeCalc(calculation) {
  document.querySelector('.js-display')
    .innerHTML = calculation;
}

function writeMisc(text) {
  document.querySelector('.js-misc')
    .innerHTML = text;
}

function resetCalculator() {
  calcMem.calculation = '';
  calcMem.lastPressed = '';

  localStorage.removeItem('calcMem');

  writeCalc(calcMem.calculation);
  writeMisc('Calculator was reset');
}
