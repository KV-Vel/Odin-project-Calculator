let firstNumber = ''; 
let secondNumber = '';
let operator = '';
const controlPanel = document.querySelector('.control-panel');
const display = document.querySelector('.operation-display');
const equals = document.querySelector('.equals');
let result;
const expression = document.querySelector('.expression')
const clearBtn = document.querySelector('#clearBtn');
expression.textContent = 0;
const decimalBtn = document.querySelector('.decimal')
let saveFullExpression;

controlPanel.addEventListener('click', displayControl) 
function displayControl (e) {
    let pressedBtn = e.target;
    
    if (pressedBtn.className == 'numbers') {
        operator == '' ? firstNumber += pressedBtn.value : secondNumber += pressedBtn.value;
    } else if ((operator !='' && secondNumber != '' && pressedBtn.className == 'operators') || (pressedBtn.value == '=' && secondNumber != '')) { 
        operate (firstNumber, operator, secondNumber);
        if (result == Infinity) {
            alert("Can't delete by zero. Try again")
            secondNumber = '';
            expression.textContent = `${firstNumber}${operator}`;
            return
        } else {
            toFixed();
            saveFullExpression = expression.textContent + '=';
            pressedBtn.value == '=' ? display.textContent = result : display.textContent = '';
            secondNumber = '';
            firstNumber = result;
            pressedBtn.value == '=' ? operator = '' : operator = pressedBtn.value;
    }
    } else if (pressedBtn.className == 'operators') {
        operator = pressedBtn.value;
    }
    checkValueToZero()
    pressedBtn.value == '=' ? expression.textContent = saveFullExpression : expression.textContent = `${firstNumber}${operator}${secondNumber}`;
}

function substract (a,b) {result = a-b}
function multiply (a,b) {result = a*b}
function divide (a,b) {result = a/b}
function add (a,b) {result = Number(a) + Number(b)}

function operate (firstNum, oper, secondNum) { 
    switch (oper) {
        case '-': substract(firstNum, secondNum)
        break;
        case '*': multiply(firstNum, secondNum)
        break;
        case '/': divide(firstNum, secondNum) 
        break;
        case '+': add(firstNum, secondNum) 
        break;
    }
}

clearBtn.addEventListener('click', clear);

function clear () {
    firstNumber = ''; 
    secondNumber = '';
    operator = '';
    display.textContent = ''
    expression.textContent = 0;
}

function toFixed () {
    result % 1 == 0 ? result : result = result.toFixed(2);  
}

decimalBtn.addEventListener('click', addDecimal)

function addDecimal () {
    operator == '' ? addDotToFirstNumber() : addDotToSecondNumber();
    function addDotToFirstNumber () {
        if (firstNumber.includes('.')) {
            firstNumber;
        }
        else if (firstNumber.length == 0) {
            firstNumber += '0.';
        }
        else {
            firstNumber += '.';
        } 
    }
    function addDotToSecondNumber () {
        if (secondNumber.includes('.')) {
            secondNumber;
        }
        else if (secondNumber.length == 0) {
            secondNumber += '0.';
        }
        else {
            secondNumber += '.';
        }
    }
}

function checkValueToZero () {
    firstNumber == '' ? firstNumber = 0 : firstNumber;
}
//TO DO: overflowing value on display?
