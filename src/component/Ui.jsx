// import React from 'react'
import React, { useState } from 'react';



const Add = () => {

    const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNumber, setWaitingForNumber] = useState(true);

  // Modified handleNumber - only handles numeric input
  const handleNumber = (num) => {
    if (waitingForNumber) {
      setDisplay(num.toString());
      setWaitingForNumber(false);
    } else {
      setDisplay(display === '0' ? num.toString() : display + num);
    }
  };

  // Modified handleOperator - properly updates state
  const handleOperator = (op) => {
    const currentValue = parseFloat(display);
    
    if (operator && !waitingForNumber) {
      const result = calculate(previousValue, currentValue, operator);
      setDisplay(result.toString());
      setPreviousValue(result);
      setEquation(`${result} ${op} `);
    } else {
      setPreviousValue(currentValue);
      setEquation(`${display} ${op} `);
    }
    
    setOperator(op);
    setWaitingForNumber(true);
  };

  // Modified handleEqual - proper calculation trigger
  const handleEqual = () => {
    if (!operator || !previousValue) return;

    const currentValue = parseFloat(display);
    const result = calculate(previousValue, currentValue, operator);
    
    setDisplay(result.toString());
    setEquation(`${equation} ${currentValue} = `);
    setPreviousValue(result);
    setOperator(null);
    setWaitingForNumber(true);
  };

  const calculate = (a, b, op) => {
    switch(op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b !== 0 ? a / b : 'Error';
      default: return b;
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNumber(true);
  };
  const handleDecimal = () => {
    if (waitingForNumber) {
      setDisplay('0.');
      setWaitingForNumber(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleBackspace = () => {
    if (display === 'Error') {
      setDisplay('0');
      return;
    }

    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
    setWaitingForNumber(false);
  };


 
  return (
    //creating a UI designing
    <>
    <div className='cal-3'><a>Calculator</a>
    </div>
    <div className="container">
        <div className="calculator dark">
            <div className="theme-toggler active">
                <i className="toggler-icon"></i>
            </div>
            <div className="display-screen">
                <div className="equation">{equation}</div>
        <div className="current">{display}</div>

            </div>
            <div className="buttons">
                <table>
                    <tr>
                        <td><button className="btn-operator" id="clear" onClick={handleClear}>Ac</button></td>
                        <td><button className="btn-operator" id="/" onClick={() => handleOperator('/')}>&divide;</button></td>
                        <td><button className="btn-operator" id="*" onClick={() => handleOperator('*')}>&times;</button></td>
                        {/* <td><button className="btn-operator" id="backspace"></button></td> */}
                        <td><button className="btn-operator" id="backspace" onClick={handleBackspace}>&#x232B;
                        </button></td>

                    </tr>
                    <tr>
                        <td><button className="btn-number" id="7" onClick={() => handleNumber(7)}>7</button></td>
                        <td><button className="btn-number" id="8"onClick={() => handleNumber(8)} >8</button></td>
                        <td><button className="btn-number" id="9"onClick={() => handleNumber(9)}>9</button></td>
                        <td><button className="btn-operator" id="-" onClick={() => handleOperator('-')}>-</button></td>
                    </tr>
                    <tr>
                        <td><button className="btn-number" id="4" onClick={() => handleNumber(4)}>4</button></td>
                        <td><button className="btn-number" id="5 " onClick={() => handleNumber(5)}>5</button></td>
                        <td><button className="btn-number" id="6" onClick={() => handleNumber(6)}>6</button></td>
                        <td><button className="btn-operator" id="+" onClick={() => handleOperator('+')}>+</button></td>
                    </tr>
                    <tr>
                        <td><button className="btn-number" id="1" onClick={() => handleNumber(1)}>1</button></td>
                        <td><button className="btn-number" id="2" onClick={() => handleNumber(2)}>2</button></td>
                        <td><button className="btn-number" id="3" onClick={() => handleNumber(3)}>3</button></td>
                        <td rowSpan="2"><button className="btn-equal" id="equal" onClick={handleEqual}>=</button></td>
                    </tr>
                    <tr>
                        {/* <td><button className="btn-operator" id="("></button></td> */}
                        <td><button className="btn-number" id="0"onClick={() => handleNumber(0)}> 0</button></td>
                        <td><button className="btn-operator" id="." onClick={handleDecimal}>.</button></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    </>

  )
}

export default Add



