
const btn = document.querySelectorAll('.btn');
const display = document.querySelector('.display');
const equals = document.querySelector('.equals-key');

let firstNumber = null;
let operator = null;
let secondNumber = null;

// operator functions:
const divide = (a, b)=> {
  return +a / +b;
}
const multiply = (a, b)=> {
  return +a * +b;
}
const minus = (a, b)=> {
  return +a - +b;
}
const add = (a, b) => {
  return +a + +b;
}

const handleClick = (e) => {
  //console.log(e.target.innerText);
  let input = e.target.innerText;
  if (firstNumber == null && /\d/g.test(input)){
    firstNumber = input;
    display.innerText = input;
  } else if (firstNumber && /\/|\*|-|\+/.test(input)) {
    operator = input;
  } else if (firstNumber && operator && /\d/g.test(input)) {
    secondNumber = input;
  }
  console.log(firstNumber);
  console.log(operator);
  console.log(secondNumber);
}

const handleEquals = () => {
  let answer = operator == '/' ? divide(firstNumber, secondNumber)
      : operator == '*' ? multiply(firstNumber, secondNumber)
      : operator == '-' ? minus(firstNumber, secondNumber)
      : operator == '+' ? add(firstNumber, secondNumber)
      : 'error';

      display.innerText = answer;
}

btn.forEach(element => {
  element.addEventListener('click', handleClick);
});

equals.addEventListener('click', handleEquals);
