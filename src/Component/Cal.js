import React, { useState } from "react";
import ReactDOM from "react-dom";

const Cal = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e, num) => {
    const inputValue = e.target.value;

    if (!isNaN(inputValue) || inputValue === "") {
      if (num === 1) {
        setNum1(inputValue);
      } else if (num === 2) {
        setNum2(inputValue);
      }
    }
  };

  const performOperation = (operator) => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
      switch (operator) {
        case "+":
          setResult(parsedNum1 + parsedNum2);
          break;
        case "-":
          setResult(parsedNum1 - parsedNum2);
          break;
        case "*":
          setResult(parsedNum1 * parsedNum2);
          break;
        case "/":
          setResult(parsedNum1 / parsedNum2);
          break;
        default:
          setResult(null);
      }
      setErrorMessage("Success"); // Reset error message on success
    } else {
      setResult(null);
      setErrorMessage("Error: Invalid input! Please enter valid numbers.");
    }
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <input
        type="text"
        placeholder="Num1"
        value={num1}
        onChange={(e) => handleInputChange(e, 1)}
      />
      <input
        type="text"
        placeholder="Num2"
        value={num2}
        onChange={(e) => handleInputChange(e, 2)}
      />
      <div className="btn">
        <button onClick={() => performOperation("+")}>+</button>
        <button onClick={() => performOperation("-")}>-</button>
        <button onClick={() => performOperation("*")}>*</button>
        <button onClick={() => performOperation("/")}>/</button>
      </div>
      {errorMessage ? (
  <p id="success" style={{ color: errorMessage.includes("Success") ? "green" : "red" }}>
    {errorMessage}
  </p>
) : null}

      {result !== null &&  <p id="result">Result: {result}</p>}
    </div>
  );
};

export default Cal;

