const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
function createMathLibrary() {
  return {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b !== 0 ? a / b : "Error Division By zero"),
  };
}

const mathLibrary = createMathLibrary();

function performOperations(operation) {
  const number1 = parseInt(num1.value);
  const number2 = parseInt(num2.value);
  let result;

  switch (operation) {
    case "add":
      result = mathLibrary.add(number1, number2);
      break;
    case "subtract":
      result = mathLibrary.subtract(number1, number2);
      break;
    case "multiply":
      result = mathLibrary.multiply(number1, number2);
      break;
    case "divide":
      result = mathLibrary.divide(number1, number2);
      break;
    default:
      result = "Invalid Operation";
  }
  document.getElementById("result").textContent = `Result: ${result}`;
}
