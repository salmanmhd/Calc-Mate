import CalcBtn from "./CalcBtn";
import React, { useEffect, useState } from "react";
import HistoryLog from "./HistoryLog";
const Scientific = () => {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNumber, setWaitingForNumber] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const keyFunction = keyMap[event.key];
      if (keyFunction) {
        event.preventDefault();  // Stop the default action of the event
        keyFunction();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
   
  const handleNumber = (number) => {
    console.log("Handle number:",number);
    if (waitingForNumber) {
      setDisplay(number.toString());
      setWaitingForNumber(false);
    } else {

      setDisplay(display === '0' ? number.toString() : display + number.toString());

    }
  };
  

  const handleOperation = (operation) => {
    const currentValue = parseFloat(display);
    if (operator && !waitingForNumber) {
      const result = calculate(previousValue, currentValue, operator);
      setDisplay(result.toString());
      setPreviousValue(result);
    } else {
      setPreviousValue(currentValue);
    }
    setOperator(operation);
    setWaitingForNumber(true);
  };

  const calculate = (prev, current, operation) => {
    switch (operation) {
      case "+":
        return prev + current;
      case "-":
        return prev - current;
      case "*":
        return prev * current;
      case "/":
        return current !== 0 ? prev / current : "Error: Divide by zero";
      default:
        return current; // default case added for safety
    }
  };

  const handleTrigonometric = (func) => {
    const currentValue = parseFloat(display);
    const result = Math[func]((currentValue * Math.PI) / 180); // Assuming input in degrees
    setDisplay(result.toString());
    setWaitingForNumber(true);
  };

  const handleLogarithm = (type) => {
    const currentValue = parseFloat(display);
    const result =
      type === "log" ? Math.log10(currentValue) : Math.log(currentValue);
    setDisplay(result.toString());
    setWaitingForNumber(true);
  };

  const handleInverse = () => {
    const currentValue = parseFloat(display);
    const result =
      currentValue !== 0 ? 1 / currentValue : "Error: Division by zero";
    setDisplay(result.toString());
    setWaitingForNumber(true);
  };

  const handleFactorial = () => {
    const currentValue = parseInt(display);
    const result = factorial(currentValue);
    setDisplay(result.toString());
    setWaitingForNumber(true);
  };

  const factorial = (n) => {
    if (n < 0) return "Error: Negative value";
    if (n === 0) return 1;
    return n * factorial(n - 1);
  };

  const handlePi = () => {
    setDisplay(Math.PI.toString());
    setWaitingForNumber(true);
  };

  const handleSquareRoot = () => {
    const currentValue = parseFloat(display);
    const result =
      currentValue >= 0 ? Math.sqrt(currentValue) : "Error: Negative root";
    setDisplay(result.toString());
    setWaitingForNumber(true);
  };

  const handleClear = () => {
    setDisplay("0");
    setEquation("");
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNumber(true);
  };

  const handleDecimal = () => {
    if (waitingForNumber) {
      setDisplay("0.");
      setWaitingForNumber(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleEqual = () => {
    const currentValue = parseFloat(display);
    const result = calculate(previousValue, currentValue, operator);
    setDisplay(result.toString());
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNumber(true);
  };

  const handleBackspace = () => {
    if (display === "Error") {
      setDisplay("0");
      return;
    }

    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
    setWaitingForNumber(false);
  };

   // KeyBoard Mapping
  const keyMap = {
    '1': () => handleNumber('1'),
    '2': () => handleNumber('2'),
    '3': () => handleNumber('3'),
    '4': () => handleNumber('4'),
    '5': () => handleNumber('5'),
    '6': () => handleNumber('6'),
    '7': () => handleNumber('7'),
    '8': () => handleNumber('8'),
    '9': () => handleNumber('9'),
    '0': () => handleNumber('0'),
    '.': () => handleDecimal(),
    '+': () => handleOperation('+'),
    '-': () => handleOperation('-'),
    '*': () => handleOperation('*'),
    '/': () => handleOperation('/'),
    '=': () => handleEqual(),
    'Enter': () => handleEqual(),
    'Backspace': () => handleBackspace(),
    'A': () => handleClear(),
    'a': () => handleClear(),
    's': () => handleTrigonometric('sin'),
    'l': () => handleLogarithm('log'),
    't': () => handleTrigonometric('tan'),
    'c': () => handleTrigonometric('cos'),
    'p': () => handlePi(),
    'r': () => handleSquareRoot(),
    'f': () => handleFactorial(),
    'i': () => handleInverse()
  };

  return (

    <div className='h-[63vh] w-[95vw] sm:w-[70vw] md:w-[53vw] bg-black rounded-2xl shadow-lg shadow-gray-800'>
      <div className='h-[18vh] w-[95%] bg-white m-auto mt-10 rounded-lg text-right text-8xl p-2'>
                <div className="equation">{equation}</div>
        <div className="current">{display}</div>

      </div>
      <div className="m-auto mt-2 w-[95%] rounded-lg p-1 text-right text-2xl">
        <table className="w-full">
          <tr className="flex w-[100%] items-center justify-between">
            <td>
              <CalcBtn
                sign={"sin"}
                onClick={() => handleTrigonometric("sin")}
                type="blue"
              />
            </td>
            <td>
              <CalcBtn sign={"AC"} onClick={handleClear} type="red" />
            </td>
            <td>
              <CalcBtn
                sign={"/"}
                onClick={() => handleOperation("/")}
                type="blue"
              />
            </td>
            <td>
              <CalcBtn
                sign={"x"}
                onClick={() => handleOperation("*")}
                type="blue"
              />
            </td>
            <td>
              <CalcBtn
                logo={<i className="ri-delete-back-2-line"></i>}
                onClick={handleBackspace}
                type="blue"
              />
            </td>
            <td>
              <CalcBtn
                sign={"ln"}
                onClick={() => handleLogarithm("ln")}
                type="blue"
              />
            </td>
          </tr>
          <tr className="flex w-[100%] items-center justify-between">
            <td>
              <CalcBtn
                sign={"cos"}
                onClick={() => handleTrigonometric("cos")}
                type="blue"
              />
            </td>
            <td>
              <CalcBtn
                sign={"7"}
                onClick={() => handleNumber("7")}
                type="gray"
              />
            </td>
            <td>
              <CalcBtn
                sign={"8"}
                onClick={() => handleNumber("8")}
                type="gray"
              />
            </td>
            <td>
              <CalcBtn
                sign={"9"}
                onClick={() => handleNumber("9")}
                type="gray"
              />
            </td>
            <td>
              <CalcBtn
                sign={"-"}
                onClick={() => handleOperation("-")}
                type="blue"
              />
            </td>
            <td>
              <CalcBtn
                sign={"log"}
                onClick={() => handleLogarithm("log")}
                type="blue"
              />
            </td>
          </tr>
          <tr className="flex w-[100%] items-center justify-between">
            <td>
              <CalcBtn
                sign={"tan"}
                onClick={() => handleTrigonometric("tan")}
                type="blue"
              />
            </td>
            <td>
              <CalcBtn
                sign={"4"}
                onClick={() => handleNumber("4")}
                type="gray"
              />
            </td>
            <td>
              <CalcBtn
                sign={"5"}
                onClick={() => handleNumber("5")}
                type="gray"
              />
            </td>
            <td>
              <CalcBtn
                sign={"6"}
                onClick={() => handleNumber("6")}
                type="gray"
              />
            </td>
            <td>
              <CalcBtn
                sign={"+"}
                onClick={() => handleOperation("+")}
                type="blue"
              />
            </td>
            <td>
              <CalcBtn sign={"1/x"} onClick={handleInverse} type="blue" />
            </td>
          </tr>
          <tr className="flex w-[100%] items-center justify-between">
            <td>
              <CalcBtn sign={"π"} onClick={handlePi} type="blue" />
            </td>
            <td>
              <CalcBtn
                sign={"1"}
                onClick={() => handleNumber("1")}
                type="gray"
              />
            </td>
            <td>
              <CalcBtn
                sign={"2"}
                onClick={() => handleNumber("2")}
                type="gray"
              />
            </td>
            <td>
              <CalcBtn
                sign={"3"}
                onClick={() => handleNumber("3")}
                type="gray"
              />
            </td>
            <td>
              <CalcBtn sign={"="} onClick={handleEqual} type="red" />
            </td>
            <td>
              <CalcBtn
                logo={<i className="ri-square-root"></i>}
                onClick={handleSquareRoot}
                type="blue"
              />
            </td>
          </tr>
          <tr className="flex w-[100%] items-center justify-between">
            <td>
              <CalcBtn sign={"!"} onClick={handleFactorial} type="blue" />
            </td>
            <td>
              <CalcBtn
                sign={"0"}
                onClick={() => handleNumber("0")}
                type="gray"
              />
            </td>
            <td>
              <CalcBtn sign={"."} onClick={handleDecimal} type="gray" />
            </td>
            <td>
              <CalcBtn
                sign={"00"}
                onClick={() => handleNumber("00")}
                type="gray"
              />
            </td>
            <td>
              <CalcBtn sign={"C"} onClick={handleClear} type="red" />
            </td>
            <td>
              <CalcBtn
                sign={"*"}
                onClick={() => handleOperation("*")}
                type="blue"
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Scientific;
