const modules     = require('./module');

const multiply    = modules.multiply;
const division    = modules.division;
const addition    = modules.addition;
const subtraction = modules.subtraction;

let firstNumber  = document.querySelector(".fNumber");
let secondNumber = document.querySelector(".secNumber");
let answer_div   = document.querySelector(".answer");

document.querySelector('.multiply').addEventListener('click', () => {
    answer_div.textContent = multiply(firstNumber.value, secondNumber.value);
});
document.querySelector('.division').addEventListener('click', () => {
    answer_div.textContent = division(firstNumber.value, secondNumber.value);
});
document.querySelector('.addition').addEventListener('click', () => {
    answer_div.textContent = addition(firstNumber.value, secondNumber.value);
});
document.querySelector('.subtraction').addEventListener('click', () => {
    answer_div.textContent = subtraction(firstNumber.value, secondNumber.value);
});



