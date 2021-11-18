
const numberBtn = document.querySelectorAll('.number-key');
const display = document.querySelector('.display');
const equals = document.querySelector('.equals-key');
const deleteBtn = document.querySelectorAll('.delete-key');
const operatorBtn = document.querySelectorAll('.operator-key');

let firstNumber = null;
let operator = null;
let secondNumber = null;

// Also handles decimal point.
const handleNumber = (e) => {
  let input = e.target.innerText;
  if (!operator){
    firstNumber = firstNumber === null ? input : firstNumber + input;
    display.innerText = firstNumber;
  } else if (operator) {
    secondNumber = secondNumber === null ? input : secondNumber + input;
    display.innerText = secondNumber;
  }
  display.style.color = 'black';
}

const handleOperator = (e) => {
  let input = e.target.innerText;
  operator = input;
  display.style.color = 'green';
}

const handleEquals = () => {
  let answer = operator == '/' ? firstNumber / secondNumber
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
  display.innerText = answer;
}

const handleDelete = () => {
  display.innerText = 0;
  firstNumber = null;
  operator = null;
  secondNumber = null;
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
