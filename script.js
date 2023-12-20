//Set values for buttons and retrieve them for functions from with ?
let firstNumber;
let secondNumber;
let operator;
const btn = document.querySelector('button');
// btn.addEventListener('click', (e) => {
//     console.log(e.target.value);
// })


function substract (a,b) {console.log( a-b)}
function multiply (a,b) {console.log( a*b)}
function divide (a,b) {console.log( a/b)}
function add (a,b) {console.log( a+b)}

function operate (firstNumber, operator, secondNumber) { 
    switch (operator) {
        case '-': substract(firstNumber, secondNumber)
        break;
        case '*': multiply(firstNumber, secondNumber)
        break;
        case '/': divide(firstNumber, secondNumber) 
        break;
        case '+': add(firstNumber, secondNumber) 
        break;
    }
    
}

//TO DO: overflowing value on display?
