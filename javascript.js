const operators = document.querySelectorAll(".operatorButton");
const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".numberButton");
const clear = document.querySelector("#clear");

let tempNumber = 123;
let displayNumber = "";

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        display.textContent += number.innerText;
        displayNumber = display.textContent;
    })
});

operators.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        let number1 = tempNumber;
        let number2 = Number(displayNumber);
        let operator = operatorButton.id;
        let total = operate(operator, number1, number2);
        display.textContent = total;
    })
});

clear.addEventListener('click', () => {
    display.textContent = "";
    displayNumber = "";
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

