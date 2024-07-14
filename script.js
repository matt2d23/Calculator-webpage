'use strict'

function add(num1, num2) {
    return num1 + num2;
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

let firstOperator;
let secondOperator;
let operatorType;

function operate(operatorType, firstOperator, secondOperator) {
    let result;
    switch (operatorType) {
        case ('+'):
            result = add(firstOperator, secondOperator);
            break;
        case ('-'):
            result = subtract(firstOperator, secondOperator);
            break;
        case ('*'):
            result = multiply(firstOperator, secondOperator);
            break;
        case ('/'):
            result = divide(firstOperator, secondOperator);
            break;
    }
    return result;
}