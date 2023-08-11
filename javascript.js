const operators = document.querySelectorAll(".operatorButton");
const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".numberButton");
const clear = document.querySelector("#clear");

let displayNumber = "";
let total = 0;
let operatorButton = "+";

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        displayNumber += number.innerText;
        display.textContent = displayNumber;
    })
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        let number = Number(displayNumber);
        let result = operate(operatorButton, total, number);
        if(operator.id !== "=") {
            operatorButton = operator.id;
        }
        total = result;
        display.textContent = result;
        displayNumber = "";
    })
});

clear.addEventListener('click', () => {
    display.textContent = "";
    displayNumber = "";
    total = 0;
    operatorButton = "+";
});

function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}

function operate(operator, firstNumber, secondNumber) {
    if(operator === "+") {
        return add(firstNumber, secondNumber);
    } else if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operator === "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operator === "/") {
        return divide(firstNumber, secondNumber);
    }
}