const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

let currentInput = "";
let previousInput = "";
let operator = "";

function updateDisplay(value) {
  display.textContent = value || "0";
}

function clearCalculator() {
  currentInput = "";
  previousInput = "";
  operator = "";
  updateDisplay("0");
}

function calculate(a, b, operator) {
  a = parseFloat(a);
  b = b !== null ? parseFloat(b) : null;

  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Error";
    case "√":
      return Math.sqrt(a);
    case "x²":
      return Math.pow(a, 2);
    case "%":
      return a / 100; // Converts to percentage
    default:
      return 0;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (!isNaN(value) || value === ".") {
      // Handle numbers and decimal points
      currentInput += value;
      updateDisplay(currentInput);
    } else if (value === "C") {
      // Clear the calculator
      clearCalculator();
    } else if (value === "=") {
      // Perform the calculation
      if (previousInput && currentInput && operator) {
        const result = calculate(previousInput, currentInput, operator);
        updateDisplay(result);
        currentInput = result.toString();
        previousInput = "";
        operator = "";
      }
    } else if (value === "√" || value === "x²") {
      // Handle square root and square
      if (currentInput) {
        const result = calculate(currentInput, null, value);
        updateDisplay(result);
        currentInput = result.toString();
      }
    } else if (value === "%") {
      // Handle percentage
      if (currentInput) {
        const result = calculate(currentInput, null, value);
        updateDisplay(result);
        currentInput = result.toString();
      }
    } else {
      // Handle operators (+, -, *, /)
      if (currentInput) {
        previousInput = currentInput;
        currentInput = "";
        operator = value;
      }
    }
  });
});
