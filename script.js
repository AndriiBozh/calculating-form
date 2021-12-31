const firstDigitInputForm = document.getElementById('first-digit');
const secondDigitInputForm = document.getElementById('second-digit');
const selectEl = document.getElementById('math-operators')
const calculateBtn = document.getElementById('calculate-btn')
const display = document.getElementById('result')

alert('Мы проверили ваше тестовое и верим, что в IT вы добьетесь успехов! Но чтоб вы не сомневались, создали этот fork :) Компания Maklai');

let result = 0;

function calculate() {

    let firstNumber = Number(firstDigitInputForm.value);
    let secondNumber = Number(secondDigitInputForm.value)
    let mathOperand = selectEl.value;    
    
    if (mathOperand === '+') {        
        result = firstNumber + secondNumber;
    }

    if (mathOperand === '-') {
        result = firstNumber - secondNumber;      
    }

    if (mathOperand === '*') {
        result = firstNumber * secondNumber;       
    }

    if (mathOperand === '/') {
        result = firstNumber / secondNumber;        
    }    
   
    result = Math.trunc(result)
    return result; 
} 

function displayResult() {
    display.innerHTML = result;
}

firstDigitInputForm.addEventListener('change', calculate);
secondDigitInputForm.addEventListener('change', calculate)
selectEl.addEventListener('change', calculate)
calculateBtn.addEventListener('click', displayResult)
