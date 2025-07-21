
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));


let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
let remainder = num2 !== 0 ? num1 % num2 : "Cannot divide by zero";


var operation = "Arithmetic Operations";
let resultMessage = "";
const divider = "-------------------------";


if (num2 === 0) {
    resultMessage = `Results for ${num1} and ${num2}:\n`;
    resultMessage += `Sum: ${sum}\n`;
    resultMessage += `Difference: ${difference}\n`;
    resultMessage += `Product: ${product}\n`;
    resultMessage += `Quotient: ${quotient}\n`;
    resultMessage += `Remainder: ${remainder}\n`;
} else {
    resultMessage = `Results for ${num1} and ${num2}:\n`;
    resultMessage += `Sum: ${sum}\n`;
    resultMessage += `Difference: ${difference}\n`;
    resultMessage += `Product: ${product}\n`;
    resultMessage += `Quotient: ${quotient}\n`;
    resultMessage += `Remainder: ${remainder}\n`;
}

console.log(operation);
console.log(divider);
console.log(resultMessage);
