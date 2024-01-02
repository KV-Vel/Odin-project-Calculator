let firstNumber = ''; 
let secondNumber = '';
let operator = '';
let result;
expression.textContent = 0;
let saveFullExpression;
const controlPanel = document.querySelector('.control-panel');
const display = document.querySelector('.operation-display');
const equals = document.querySelector('.equals');
const deleteBtn = document.querySelector('#deleteBtn');
const expression = document.querySelector('.expression');
const clearBtn = document.querySelector('#clearBtn');

controlPanel.addEventListener('click', displayControl) 
function displayControl (e) {
    let pressedBtn = e.target;
    if (pressedBtn.className == 'numbers') {
        operator == '' ? firstNumber += pressedBtn.value : secondNumber += pressedBtn.value; // If operator is not unknown then adding number to secondNumber
        //if after whole expression instead of '=' press another operator than it will operate, firstNumber = result, with new operator 
    } else if ((operator !='' && secondNumber != '' && pressedBtn.className == 'operators') || (pressedBtn.value == '=' && secondNumber != '')) { 
        operate (firstNumber, operator, secondNumber);
        if (result == Infinity) {
            alert("Can't delete by zero. Try again");
            secondNumber = '';
            expression.textContent = `${firstNumber}${operator}`;
            return
        } else {
            toFixed();
            saveFullExpression = expression.textContent + '='; // To show full expression after operation
            pressedBtn.value == '=' ? display.textContent = result : display.textContent = '';
            secondNumber = '';
            result == 0 ? firstNumber = '' : firstNumber = result; //To prevent 0+number to happen
            pressedBtn.value == '=' ? operator = '' : operator = pressedBtn.value;
            pressedBtn.value == '=' ? expression.textContent = saveFullExpression : expression.textContent = `${firstNumber}${operator}${secondNumber}`;
            return
    }
    } else if (pressedBtn.className == 'operators') {
        operator = pressedBtn.value;
    } else if (pressedBtn.className == 'decimal') {
        addDecimal()
    } else {
        return
    }
    checkValueToZero()
    checkNumberLength()
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
    display.textContent = '';
    expression.textContent = 0;
}

function toFixed () {
    result % 1 == 0 ? result : result = result.toFixed(2);  
}

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

deleteBtn.addEventListener('click', deleteSymbol)

function deleteSymbol () {
    if(secondNumber != '') {
       secondNumber = secondNumber.slice(0,-1);
       expression.textContent = `${firstNumber}${operator}${secondNumber}`;
    } else if (operator != '') {
       operator = operator.slice(0,-1);
       expression.textContent = `${firstNumber}${operator}${secondNumber}`;
    } else if (firstNumber != '') {
       firstNumber = firstNumber.slice(0,-1);
       expression.textContent = `${firstNumber}${operator}${secondNumber}`;
    }
}

document.addEventListener ('keydown', (e) => {
    if(e.key == Number(e.key)) {
        operator == '' ? firstNumber += e.key : secondNumber += e.key;
    } else if ((operator !='' && secondNumber != '' && (e.key === '/' || e.key === '*' || e.key === '+' || e.key === '-'))  || (e.key == 'Enter' && secondNumber != '')) {
        operate (firstNumber, operator, secondNumber);
        if (result == Infinity) {
            alert("Can't delete by zero. Try again");
            secondNumber = '';
            expression.textContent = `${firstNumber}${operator}`;
            return
        } else {
            toFixed();
            saveFullExpression = expression.textContent + '=';
            e.key == 'Enter' ? display.textContent = result : display.textContent = '';
            secondNumber = '';
            result == 0 ? firstNumber = '' : firstNumber = result;
            e.key == 'Enter' ? operator = '' : operator = e.key;
            e.key == 'Enter' ? expression.textContent = saveFullExpression : expression.textContent = `${firstNumber}${operator}${secondNumber}`;
            return
        }
    
    } else if (e.key === '/' || e.key === '*' || e.key === '+' || e.key === '-') {
        operator = e.key;
    } else if (e.key == '.') {
        addDecimal()
    } else if (e.key === 'Backspace') {
        deleteSymbol()
    } else {
        return
    }
    checkValueToZero()
    checkNumberLength()
    e.key == '=' ? expression.textContent = saveFullExpression : expression.textContent = `${firstNumber}${operator}${secondNumber}`;
}
)
function checkNumberLength () {
    if(firstNumber.length > 8 || secondNumber > 8) {
        alert('Number cant be longer than 8 symbols');
        clear()
    }
}