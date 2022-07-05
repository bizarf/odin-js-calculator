let firstNum = 0;
let secondNum = 0;

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
            return addNum(a, b);
        case "subtract":
            return subNum(a, b);
        case "multiply":
            return multiplyNum(a, b);
        case "divide":
            return divNum(a, b);
    }
}