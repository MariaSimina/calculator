const operator = "+";
const firstNumber = 1;
const secondNumber = 2;
const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".numberButton");

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        display.textContent += number.innerText;
    })
});

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

