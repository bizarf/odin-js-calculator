let firstValue = 0;
let secondValue = 0;
let totalValue = 0;
let chosenOperator = null;
let clearFlag = false;
let firstValueChosen = false;
let operatorSign = "";

// Adds two numbers
function addNum(a, b) {
    return a + b;
}

// Subtracts two numbers
function subNum(a, b) {
    return a - b;
}

// Multiplies two numbers
function multiplyNum(a, b) {
    return a * b;
}

// Divides two numbers
function divNum(a, b) {
    return a / b;
}

// Selects the operator to be used
function operate(operator, a, b) {
    switch (operator) {
        case "add":
            return (totalValue = addNum(a, b));
        case "subtract":
            return (totalValue = subNum(a, b));
        case "multiply":
            return (totalValue = multiplyNum(a, b));
        case "divide":
            return (totalValue = divNum(a, b));
    }
}

// Number buttons
let numBtnPress = document.querySelectorAll(".numButtons");
numBtnPress.forEach((button) => {
    button.addEventListener("click", () => {
        numberBtn(button.innerText);
    });
});

// Clear button
let clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
    chosenOperator = null;
    firstValue = 0;
    secondValue = 0;
    totalValue = 0;
    displayScreen.value = "";
    previousValue.value = "";
    firstValueChosen = false;
    clearFlag = false;
});

// Operator buttons
let opBtnPress = document.querySelectorAll(".opButtons");
opBtnPress.forEach((button) => {
    button.addEventListener("click", () => {
        operatorBtn(button.id, button.innerText);
        operatorSign = button.innerText;
    });
});

// Equal button
let equalBtn = document.querySelector("#equalBtn");
equalBtn.addEventListener("click", () => {
    operateResults();
});

// Function for the number buttons
function numberBtn(value) {
    if (value === "." && displayScreen.value.includes(".")) {
        return;
    }

    if (displayScreen.value === "" && value === ".") {
        displayScreen.value = displayScreen.value + `0${value}`;
        return;
    }

    if (displayScreen.value[0] === "0" && value === ".") {
        updateDisplay(value);
        return;
    }

    if (displayScreen.value === "0") {
        displayScreen.value = `${value}`;
        return;
    } else if (value === "." && displayScreen.value[0] === "") {
        displayScreen.value = displayScreen.value + `0${value}`;
        return;
    } else if (displayScreen.value[0] === "0" && firstValueChosen === true) {
        displayScreen.value = `${value}`;
        return;
    } else if (clearFlag === true) {
        displayScreen.value = "";
        clearFlag = false;
        updateDisplay(value);
    } else if (displayScreen.value.length < 10) {
        updateDisplay(value);
    }
}

// Operator button functions
function operatorBtn(operator, operatorSignValue) {
    if (firstValueChosen != true) {
        firstValue = displayScreen.value;
        firstValue = parseFloat(firstValue);
        chosenOperator = operator;
        clearFlag = true;
        firstValueChosen = true;
        displayScreen.value = "";
        updatePreviousDisplay(firstValue, operatorSignValue);
    } else if (firstValueChosen === true) {
        chosenOperator = operator;
        // operateResults();
    }
}

// Function that generates the results
function operateResults() {
    if (firstValueChosen === false) {
        if (displayScreen.value === "") {
            displayScreen.value = 0
            return
        } else {
            firstValue = displayScreen.value;
            return
        }
    }

    secondValue = displayScreen.value;
    secondValue = parseFloat(secondValue);
    operate(chosenOperator, firstValue, secondValue);
    totalRound(totalValue);
    displayScreen.value = totalValue;
    updatePreviousDisplay(firstValue, operatorSign, secondValue);
    firstValue = totalValue;
    clearFlag = true;
}

// Function to update the main display
function updateDisplay(value) {
    displayScreen.value = displayScreen.value + `${value}`;
}

// Function to show previous numbers and operator entered
function updatePreviousDisplay(firstValue, operatorSign, secondValue) {
    if (clearFlag === true) {
        previousValue.value = `${firstValue} ${operatorSign}`;
    } else {
        previousValue.value = `${firstValue} ${operatorSign} ${secondValue} =`;
    }
}

function totalRound(value) {
    value = value.toFixed(10);
    value = value.substring(0, 10);
    return (totalValue = parseFloat(value));
}