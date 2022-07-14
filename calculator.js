let displayValue = "";
let chosenOperator = "";
let firstValue = "";
let secondValue = "";
let totalValue = 0;

// Adds two numbers
function addNum(a, b) {
    return a += b;
}

// Subtracts two numbers
function subNum(a, b) {
    return a -= b;
}

// Multiplies two numbers
function multiplyNum(a, b) {
    return a *= b;
}

// Divides two numbers
function divNum(a, b) {
    return a /= b;
}

// Selects the operator to be used
function operate(operator, a, b) {
    switch (operator) {
        case "add":
            return totalValue = addNum(a, b);
        case "subtract":
            return totalValue = subNum(a, b);
        case "multiply":
            return totalValue = multiplyNum(a, b);
        case "divide":
            return totalValue = divNum(a, b);
    }
}

// Zero button
let zeroBtnPress = document.querySelector("#zeroBtn");
zeroBtnPress.addEventListener('click', () => {
    displayScreen.value += "0"
    displayValue += "0"
})

// One button
let oneBtnPress = document.querySelector("#oneBtn");
oneBtnPress.addEventListener('click', () => {
    if (displayScreen.value <= "0") {
        displayScreen.value = "";
        displayScreen.value += "1"
        displayValue += "1"
    } else {
        displayScreen.value += "1"
        displayValue += "1"
    }
})

// Two button
let twoBtnPress = document.querySelector("#twoBtn");
twoBtnPress.addEventListener('click', () => {
    if (displayScreen.value <= "0") {
        displayScreen.value = "";
        displayScreen.value += "2"
        displayValue += "2"
    } else {
        displayScreen.value += "2"
        displayValue += "2"
    }
})

// Three button
let threeBtnPress = document.querySelector("#threeBtn");
threeBtnPress.addEventListener('click', () => {
    if (displayScreen.value <= "0") {
        displayScreen.value = "";
        displayScreen.value += "3"
        displayValue += "3"
    } else {
        displayScreen.value += "3"
        displayValue += "3"
    }
})

// Four button
let fourBtnPress = document.querySelector("#fourBtn");
fourBtnPress.addEventListener('click', () => {
    if (displayScreen.value <= "0") {
        displayScreen.value = "";
        displayScreen.value += "4"
        displayValue += "4"
    } else {
        displayScreen.value += "4"
        displayValue += "4"
    }
})

// Five button
let fiveBtnPress = document.querySelector("#fiveBtn");
fiveBtnPress.addEventListener('click', () => {
    if (displayScreen.value <= "0") {
        displayScreen.value = "";
        displayScreen.value += "5"
        displayValue += "5"
    } else {
        displayScreen.value += "5"
        displayValue += "5"
    }
})

// Six button
let sixBtnPress = document.querySelector("#sixBtn");
sixBtnPress.addEventListener('click', () => {
    if (displayScreen.value <= "0") {
        displayScreen.value = "";
        displayScreen.value += "6"
        displayValue += "6"
    } else {
        displayScreen.value += "6"
        displayValue += "6"
    }
})

// Seven button
let sevenBtnPress = document.querySelector("#sevenBtn");
sevenBtnPress.addEventListener('click', () => {
    if (displayScreen.value <= "0") {
        displayScreen.value = "";
        displayScreen.value += "7"
        displayValue += "7"
    } else {
        displayScreen.value += "7"
        displayValue += "7"
    }
})

// Eight button
let eightBtnPress = document.querySelector("#eightBtn");
eightBtnPress.addEventListener('click', () => {
    if (displayScreen.value <= "0") {
        displayScreen.value = "";
        displayScreen.value += "8"
        displayValue += "8"
    } else {
        displayScreen.value += "8"
        displayValue += "8"
    }
})

// Nine button
let nineBtnPress = document.querySelector("#nineBtn");
nineBtnPress.addEventListener('click', () => {
    if (displayScreen.value <= "0") {
        displayScreen.value = "";
        displayScreen.value += "9"
        displayValue += "9"
    } else {
        displayScreen.value += "9"
        displayValue += "9"
    }
})

// Clear button
let clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => {
    chosenOperator = "";
    firstValue = "";
    secondValue = "";
    displayValue = "";
    displayScreen.value = "0";
    totalValue = 0;
})

// Add button
let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener('click', () => {
    chosenOperator = "add";
    firstValue = displayValue
    displayValue = "";
    displayScreen.value = "0"
})

// Subtract button
let subtractBtn = document.querySelector("#subtractBtn");
subtractBtn.addEventListener('click', () => {
    chosenOperator = "subtract";
    firstValue = displayValue
    displayValue = "";
    displayScreen.value = "0"
})

// Multiply button
let multiplyBtn = document.querySelector("#multiplyBtn");
multiplyBtn.addEventListener('click', () => {
    chosenOperator = "multiply";
    firstValue = displayValue
    displayValue = "";
    displayScreen.value = "0"
})

// Divide button
let divideBtn = document.querySelector("#divideBtn");
divideBtn.addEventListener('click', () => {
    chosenOperator = "divide";
    firstValue = displayValue
    displayValue = "";
    displayScreen.value = "0"
})

// Equal button
let equalBtn = document.querySelector('#equalBtn');
equalBtn.addEventListener('click', () => {
    secondValue = displayValue;
    firstValue = parseInt(firstValue);
    secondValue = parseInt(secondValue);
    operate(chosenOperator, firstValue, secondValue);
    displayValue = totalValue;
    displayScreen.value = totalValue;
})