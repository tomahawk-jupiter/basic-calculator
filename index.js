
const numberBtn = document.querySelectorAll('.number-key');
const display = document.querySelector('.display');
const equals = document.querySelector('.equals-key');
const deleteBtn = document.querySelectorAll('.delete-key');
const operatorBtn = document.querySelectorAll('.operator-key');

let firstNumber = null;
let operator = null;
let secondNumber = null;
let equalsPressed = false;

// Also handles decimal point.
const handleNumber = (e) => {
  let input = e.target.innerText;
  if (!operator){
    if (firstNumber && firstNumber.includes('.') && input == '.') {
      display.innerText = '. error';
    } else {
      firstNumber = firstNumber === null ? input : firstNumber + input;
      display.innerText = firstNumber;
    }
  } else if (operator) {
    if (secondNumber && secondNumber.includes('.') && input == '.') {
      display.innerText = '. error';
    } else {
      secondNumber = secondNumber === null ? input : secondNumber + input;
      display.innerText = secondNumber;
    }
  }
  display.style.color = 'black';
}

const calculation = () => {
  let answer = operator == '/' ? +firstNumber / +secondNumber
      : operator == '*' ? +firstNumber * +secondNumber
      : operator == '-' ? +firstNumber - +secondNumber
      : operator == '+' ? +firstNumber + +secondNumber
      : 'error';

  if (String(answer).length > 9){
    answer = answer.toFixed(2);
    if (answer > 9){
      answer = 'max error';
    }
  }
  return answer;
}
/*
The operators act like equals when pressing a second time
without pressing equals button, example:
4 + 4 + (display 8) 4 + (display 12)
*/
const handleOperator = (e) => {
  let input = e.target.innerText;
  if (operator && equalsPressed == false){
    firstNumber = calculation();
    display.innerText = firstNumber;
  }
  operator = input;
  display.style.color = 'green';
  secondNumber = null;
}

const handleEquals = () => {
  let answer = calculation();
  display.innerText = answer;
  firstNumber = answer;
  equalsPressed = true;
}

const handleDelete = () => {
  display.innerText = 0;
  firstNumber = null;
  operator = null;
  secondNumber = null;
  equalsPressed = false;
}

numberBtn.forEach(element => {
  element.addEventListener('click', handleNumber);
});

deleteBtn.forEach(element => {
  element.addEventListener('click', handleDelete);
});

operatorBtn.forEach(element => {
  element.addEventListener('click', handleOperator);
});

equals.addEventListener('click', handleEquals);
