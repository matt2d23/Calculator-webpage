'use strict'

// calculator functions
function add(num) {
    let result = 0;
    return result = num.reduce((a,b) => a+b);
}




function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let num;
let operatorType;

function operate(operatorType, ...num) {
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
const buttons = document.querySelectorAll(".button");
let currentValue;
let prevValue;
let values = [];
let operator;

function updateNumbers() {
    buttons.forEach((button) => {
        button.addEventListener("click", (value) => {
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

            if (button.firstElementChild.classList.contains('clear')) {
                resultBox.textContent = '';
                currentValue = null;
            }

            if (button.classList.contains('operator')) {
                if (values.length < 2) {
                    prevValue = currentValue;
                    operator = button.firstElementChild.textContent
                    values.push(prevValue);
                    values.push(operator);
                    resultBox.textContent = '';
                }
               
                
            }
            
            if (button.firstElementChild.classList.contains('equals')) {
                values.push(currentValue);
                if (values.find((element) => element === '+')) {
                    let newValues = values.slice(0, (values.indexOf('+') + 2));
                    resultBox.textContent = add(newValues.filter((item) => +item).reduce((acc,x) => acc.concat(+x), []));
                }
                values = [];
            }
            
        })
    })
}

updateNumbers();
