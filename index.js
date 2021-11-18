
const btn = document.querySelectorAll('.btn');
const display = document.querySelector('.display');


const handleClick = (e) => {
  console.log(e.target.innerText);
  display.innerText = e.target.innerText;
}

btn.forEach(element => {
  element.addEventListener('click', handleClick);
});
