let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operation = prompt("Enter operation(+,-,*,/):");

if (isNaN(num1) || 5isNaN(num2)) {
    console.log("Invalid input! Please enter valid numbers.");
} else {
    if (operation === "+") {
        console.log("Result:", num1 + num2);
    } else if (operation === "-") {
        console.log("Result:", num1 - num2);
    } else if (operation === "*") {
        console.log("Result:", num1 * num2);
    } else if (operation === "/") {
        if (num2 !== 0) {
            console.log("Result:", num1 / num2);
        } else {
            console.log("Cannot divide by zero!");
        }
    } else {
        console.log("Invalid operation! Please enter +, -, *, or /.");
    }
}
