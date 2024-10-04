const input = document.querySelector("#input")
const numpadButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".op");
const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals")
let displayValue;
let a;
let b;
let operator;
let inputEmpty = true;

numpadButtons.forEach((button) => button.addEventListener("click", (event) => {
    if (inputEmpty) {
        input.textContent = event.target.textContent;
        displayValue = input.textContent;
        inputEmpty = false;
    } else {
        input.textContent += event.target.textContent;
        displayValue = input.textContent;
    }
    if ( !operator ) {
        a = displayValue;
    } else if ( operator ) {
        b = displayValue;
    }
}));

clearButton.addEventListener("click", (event) => {
    input.textContent = 0;
    displayValue = null;
    inputEmpty = true;
    operator = null;
    a = null;
    b = null;
})

operatorButtons.forEach((button) => button.addEventListener("click", (event) => {
    if (operator === '/' && b === '0') {
        input.textContent = "Can't divide by 0!"
        a = null;
        b = null;
        operator = null;
    } else if(!operator) {
        operator = event.target.textContent;
    } else {
        input.textContent = operate(a, b, operator);
        a = operate(a, b, operator);
        b = null;
        operator = event.target.textContent;
    }
    inputEmpty = true;
}))

equalsButton.addEventListener("click", (event) => {
    if (operator === '/' && b === '0') {
        input.textContent = "Can't divide by 0!"
        a = null;
    } else if ( !operator || !b ) {
        a = null;
    } else {
        input.textContent = operate(a,b, operator);
        a = operate(a, b, operator);
    }
    b = null;
    inputEmpty = true;
    operator = null;
})


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a,) {
    return a * b;
}

function divide(a,b) {
    return a/b;
}

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(+a, +b);
            break;
        case '-':
            return subtract(+a, +b);
            break;
        case 'X':
            return multiply(+a, +b);
            break;
        case '/':
            return divide(+a, +b);
            break;
    }
}