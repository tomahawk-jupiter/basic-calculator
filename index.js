
const numberBtn = document.querySelectorAll('.number-btn');
const display = document.querySelector('.display');
const equals = document.querySelector('.equals-btn');
const clearBtn = document.querySelectorAll('.clear-btn');
const operatorBtn = document.querySelectorAll('.operator-btn');
const backBtn = document.querySelector('.back-btn');
const offBtn = document.querySelector('.off-btn');

let firstNumber = null;
let operator = null;
let secondNumber = null;
let equalsPressed = false;
let off = false;

// Also handles decimal point.
const handleNumber = (e) => {
  let input;
  if (e.type === 'keydown') {
    input = e.key;
  } else if (e.type === 'click') {
    input = e.target.innerText;
  }
console.log(input);
  if (!operator && !off){
    if (firstNumber && firstNumber.includes('.') && input === '.') {
      display.innerText = '. error';
    } else {
      firstNumber = firstNumber === null && input === '.' ? '0' + '.'
      : firstNumber === null ? input : firstNumber + input;
      display.innerText = firstNumber;
    }
  } else if (operator && !off) {
    if (secondNumber && secondNumber.includes('.') && input === '.') {
      display.innerText = '. error';
    } else {
      secondNumber = secondNumber === null && input === '.' ? '0' + '.'
      : secondNumber === null ? input : secondNumber + input;
      display.innerText = secondNumber;
    }
  }
  display.style.color = input ? '#141111' : 'green';
}

const calculation = () => {
  if (!off) {
    let answer = operator === '/' ? +firstNumber / +secondNumber
        : operator === '*' ? +firstNumber * +secondNumber
        : operator === '-' ? +firstNumber - +secondNumber
        : operator === '+' ? +firstNumber + +secondNumber
        : 'error';

    if (String(answer).length > 9){
      answer = answer.toFixed(2);
      if (answer > 9){
        answer = 'max error';
      }
    }
    return answer;
  }
}

const handleOperator = (e) => {
  let input;
  if (e.type === 'keydown') {
    input = e.key;
  } else if (e.type === 'click') {
    input = e.target.innerText;
  }

  if (!off && input) {
    if (operator && equalsPressed == false){
      firstNumber = calculation();
      display.innerText = firstNumber;
    }
    operator = input;
    display.style.color = 'green';
    secondNumber = null;
    equalsPressed = false;
  }
}

const handleEquals = () => {
  if (!off) {
    let answer = calculation();
    display.innerText = answer;
    firstNumber = answer;
    equalsPressed = true;
  }
}

const handleOff = () => {
  if (off == false) {
    handleClear();
    display.style['background-color'] = 'black';
    display.style.color = '#141111';
    off = true;
  } else if (off == true) {
    display.style['background-color'] = '#c7bcbcfc';
    off = false;
  }
}

const handleClear = () => {
  display.innerText = 0;
  firstNumber = null;
  operator = null;
  secondNumber = null;
  equalsPressed = false;
  display.style.color = '#141111';
}

const handleBack = () => {
  if (!operator && firstNumber){
    firstNumber = firstNumber.slice(0, -1);
    display.innerText = firstNumber;
  } else if (operator && secondNumber) {
    secondNumber = secondNumber.slice(0, -1);
    display.innerText = secondNumber;
  }
}

numberBtn.forEach(element => {
  element.addEventListener('click', handleNumber);
});

offBtn.addEventListener('click', handleOff);

clearBtn.forEach(element => {
  element.addEventListener('click', handleClear);
});

backBtn.addEventListener('click', handleBack);

operatorBtn.forEach(element => {
  element.addEventListener('click', handleOperator);
});

equals.addEventListener('click', handleEquals);

document.addEventListener('keydown', (e)=> {
  console.log(e.key);
  if (/\/|\*|-|\+/.test(e.key)) {
    handleOperator(e);
  }
  if (/\d|\./.test(e.key)) {
    handleNumber(e);
  }
  if (e.key === 'Enter') {
    handleEquals();
  }
  if (e.key === 'Delete') {
    handleClear();
  }
  if (e.key === 'Backspace') {
    handleBack();
  }
});
