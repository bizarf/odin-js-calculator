let displayValue = "";
let chosenOperator = "";

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
    numberBtn("0");
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
    displayValue = "";
    displayScreen.value = "";
})

// Function for the number buttons
function numberBtn(value) {
    if (displayScreen.value.length < 10) {
        displayScreen.value += `${value}`
        displayValue = displayScreen.value
    }
}