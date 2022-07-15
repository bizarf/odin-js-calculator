let displayValue = "";
let chosenOperator = "";
let firstValue = 0;
let secondValue = 0;
let totalValue = 0;
let clearFlag = false;
let clearFlagSecond = false;
let clearFlagThree = false;

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
    if (displayValue === "") {
        displayScreen.value = "0"
        displayValue = "0"
    } else if (displayValue != "0" && chosenOperator != "" & clearFlagThree === false) {
        displayScreen.value = "0"
        displayValue = "0"
        clearFlagThree = true;
        console.log("test89")
    } else if (displayValue[0] != "0") {
        displayScreen.value += "0"
        displayValue += "0"
    }
})

// One button
let oneBtnPress = document.querySelector("#oneBtn");
oneBtnPress.addEventListener('click', () => {
    numberBtn("1");
})

// Two button
let twoBtnPress = document.querySelector("#twoBtn");
twoBtnPress.addEventListener('click', () => {
    numberBtn("2");
})

// Three button
let threeBtnPress = document.querySelector("#threeBtn");
threeBtnPress.addEventListener('click', () => {
    numberBtn("3");
})

// Four button
let fourBtnPress = document.querySelector("#fourBtn");
fourBtnPress.addEventListener('click', () => {
    numberBtn("4");
})

// Five button
let fiveBtnPress = document.querySelector("#fiveBtn");
fiveBtnPress.addEventListener('click', () => {
    numberBtn("5");
})

// Six button
let sixBtnPress = document.querySelector("#sixBtn");
sixBtnPress.addEventListener('click', () => {
    numberBtn("6");
})

// Seven button
let sevenBtnPress = document.querySelector("#sevenBtn");
sevenBtnPress.addEventListener('click', () => {
    numberBtn("7");
})

// Eight button
let eightBtnPress = document.querySelector("#eightBtn");
eightBtnPress.addEventListener('click', () => {
    numberBtn("8");
})

// Nine button
let nineBtnPress = document.querySelector("#nineBtn");
nineBtnPress.addEventListener('click', () => {
    numberBtn("9");
})

// Clear button
let clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => {
    chosenOperator = "";
    firstValue = 0;
    secondValue = 0;
    displayValue = "";
    displayScreen.value = "";
    totalValue = 0;
    clearFlag = false;
    clearFlagSecond = false;
    clearFlagThree = false;
})

// Add button
let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener('click', () => {
    // if (totalValue === 0) {
    //     chosenOperator = "add";
    //     totalValue = displayValue;
    //     displayValue = "";
    //     displayScreen.value = "0"
    // } else if (secondValue === "") {
    //     operateResults();
    // } else {
    //     chosenOperator = "add";
    //     operateResults();
    // }
    operatorBtn("add");
})

// Subtract button
let subtractBtn = document.querySelector("#subtractBtn");
subtractBtn.addEventListener('click', () => {
    operatorBtn("subtract");
})

// Multiply button
let multiplyBtn = document.querySelector("#multiplyBtn");
multiplyBtn.addEventListener('click', () => {
    operatorBtn("multiply");
})

// Divide button
let divideBtn = document.querySelector("#divideBtn");
divideBtn.addEventListener('click', () => {
    operatorBtn("divide");
})

// Equal button
let equalBtn = document.querySelector('#equalBtn');
equalBtn.addEventListener('click', () => {
    // secondValue = displayValue;
    // totalValue = parseInt(totalValue);
    // secondValue = parseInt(secondValue);
    // operate(chosenOperator, totalValue, secondValue);
    // displayValue = totalValue;
    // displayScreen.value = totalValue;
    // clearFlag = true;
    operateResults();
})

// Function to generate a total and show it on the display
function operateResults() {
    secondValue = displayValue;
    secondValue = parseInt(secondValue);
    operate(chosenOperator, firstValue, secondValue);
    displayValue = totalValue;
    displayScreen.value = totalValue;
    firstValue = totalValue;
    // chosenOperator = "";
    clearFlag = true;
}

// Function for the number buttons
function numberBtn(value) {
    if (firstValue === 0 && displayValue != "0") {
        // displayScreen.value = "";
        displayScreen.value += `${value}`
        displayValue += `${value}`
    } else if (firstValue === 0 && displayScreen.value === "0") {
        displayScreen.value = `${value}`
        displayValue = `${value}`
    } else if (clearFlag === true) {
        displayScreen.value = ""
        clearFlag = false;
        displayScreen.value = `${value}`
        displayValue = `${value}`
        chosenOperator = ""
    } else {
        if (displayValue.value != "" && clearFlagSecond === false) {
            displayScreen.value = `${value}`
            displayValue = `${value}`
            clearFlagSecond = true;
        } else {
            displayScreen.value += `${value}`
            displayValue += `${value}`
        }
    }
}

function operatorBtn(operator) {
    if (firstValue === 0 && displayValue === "") {
        chosenOperator = `${operator}`;
        displayValue = 0;
        displayScreen.value = "0";
        firstValue = displayValue;
        firstValue = parseInt(firstValue);
        console.log("test")
    } else if (firstValue === 0) {
        chosenOperator = `${operator}`;
        firstValue = displayValue;
        firstValue = parseInt(firstValue);
        console.log("test2")
    } else if (secondValue === 0) {
        operateResults();
    } else if (firstValue === totalValue) {
        chosenOperator = `${operator}`;
        console.log("test6596")
        if (secondValue != secondValue) {
            operateResults();
        }
    } else {
        chosenOperator = `${operator}`;
        operateResults();
        console.log("test999")
    }
}