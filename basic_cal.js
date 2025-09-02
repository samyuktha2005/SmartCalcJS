// Get the user input for the operation
let operation = window.prompt("Enter the operation (+, -, *, /): ");

// Get the user input for the two numbers
let num1 = parseFloat(window.prompt("Enter the first number: "));
let num2 = parseFloat(window.prompt("Enter the second number: "));

// Perform the operation
let result;
switch (operation) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      alert("Error: cannot divide by zero!");
      return;
    }
    result = num1 / num2;
    break;
  default:
    alert("Error: invalid operation!");
    return;
}

// Display the result
alert(`The result is: ${result}`);