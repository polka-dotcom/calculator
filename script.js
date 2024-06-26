function add(a, b) {
    return a + b;
}

function subtract(a , b) {
    return a - b;
}

function multiply(a, b) {
    return a * b; 
}

function divide(a, b) {
    return a / b; 
}

let num1; 
let num2; 
let op; 

function operate() {
    if (op == "+") {
        add(num1, num2); 
    } else if (op == "-") {
        subtract(num1,num2);
    } else if (op == "*") {
        multiply(num1, num2);
    } else if (op == "/") {
        divide(num1, num2);
    } else {
        alert("ERROR!"); 
    }
}