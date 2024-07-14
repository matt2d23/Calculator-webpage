'use strict'

// calculator functions
function add(num) {
    let result = 0;
    return result = num.reduce((a,b) => a+b);
}

function subtract(num) {
    let result = 0;
    return result = num.reduce((a,b) => a-b);
}

function multiply(num) {
    let result = 0;
    return result = num.reduce((a,b) => a*b);
}

function divide(num) {
    let result = 0;
    return result = num.reduce((a,b) => {
        if (a === 0 || b === 0) {
            return 'lol dumbass';
        } else {
            return a/b;
        }
    });
}

let num;
let operatorType;

function operate(operatorType, ...num) {
    console.log(num);
    let result;
    switch (operatorType) {
        case ('+'):
            result = add(num);
            break;
        case ('-'):
            result = subtract(num);
            break;
        case ('x'):
            result = multiply(num);
            break;
        case ('/'):
            result = divide(num);
            break;
            
    }
    return result;
}

// DOM manipulation

const resultBox = document.querySelector(".results");
const currentOperation = document.querySelector('.currentOperation');
const buttons = document.querySelectorAll(".button");
let currentValue;
let prevValue;
let values = [];
let operator;
let result = 0;
let errorText = 'nice try lmao';

function updateNumbers() {
    buttons.forEach((button) => {
        button.addEventListener("click", (value) => {
            if (currentOperation.textContent === errorText) {
                resultBox.textContent = '';
                currentOperation.textContent = '';
            }

            button.firstElementChild.classList.contains('one') ? value = 1 :
            button.firstElementChild.classList.contains('two') ? value = 2 :
            button.firstElementChild.classList.contains('three') ? value = 3 :
            button.firstElementChild.classList.contains('four') ? value = 4 :
            button.firstElementChild.classList.contains('five') ? value = 5 :
            button.firstElementChild.classList.contains('six') ? value = 6 :
            button.firstElementChild.classList.contains('seven') ? value = 7 :
            button.firstElementChild.classList.contains('eight') ? value = 8 :
            button.firstElementChild.classList.contains('nine') ?  value = 9 :
            button.firstElementChild.classList.contains('zero') ? value = 0 :
            value = '';
    
            currentValue = resultBox.textContent += value;
            currentOperation.textContent += value;

            if (button.firstElementChild.classList.contains('clear')) {
                resultBox.textContent = '';
                currentOperation.textContent = '';
            }

            if (button.classList.contains('operator')) {
                if (values.length < 2) {
                    prevValue = currentValue;
                    operator = button.firstElementChild.textContent
                    console.log(operator);
                    values.push(prevValue);
                    values.push(operator);
                    resultBox.textContent = '';
                    currentOperation.textContent += ` ${operator} `;
                }
                
               
                
            }
            
            if (button.firstElementChild.classList.contains('equals')) {
                let newValues;
                let result;
                values.push(currentValue);
                if (values.find((element) => element === '+')) {
                    newValues = values.slice(0, (values.indexOf('+') + 2));
                    result = resultBox.textContent = add(newValues.filter((item) => +item).reduce((acc,x) => acc.concat(+x), []));
                    currentOperation.textContent = result;
                }
                if (values.find((element) => element === '-')) {
                    newValues = values.slice(0, (values.indexOf('-') + 2));
                    result = resultBox.textContent = subtract(newValues.filter((item) => +item).reduce((acc,x) => acc.concat(+x), []));
                    currentOperation.textContent = result;
                }
                if (values.find((element) => element === 'x')) {
                    newValues = values.slice(0, (values.indexOf('x') + 2));
                    result = resultBox.textContent = multiply(newValues.filter((item) => +item).reduce((acc,x) => acc.concat(+x), []));
                    currentOperation.textContent = result;
                }
                if (values.find((element) => element === '/')) {
                    newValues = values.slice(0, (values.indexOf('/') + 2));
                    let checkIfDivideByZero = newValues.filter((item) => +item).reduce((acc,x) => acc.concat(+x), []);
                    if (checkIfDivideByZero.length === 1) {
                        result = resultBox.textContent = errorText;
                        currentOperation.textContent = result;
                    } else {
                        resultBox.textContent = divide(checkIfDivideByZero);
                        currentOperation.textContent = result;
                    }
                }
                values = [];
            }
        })
    })
}

updateNumbers();
