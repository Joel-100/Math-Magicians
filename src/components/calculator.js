/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: 0,
  });

  const handleClick = (e) => {
    const buttonName = e.target.textContent;
    setState((prevState) => calculate(prevState, buttonName));
  };

  const { total, next } = state;
  let result = 0;
  if (total === null && next !== null) {
    result = next;
  } else if (total !== null && next === null) {
    result = total;
  } else {
    result = next;
  }

  return (
    <div className="calc">
      <div className="result">{result}</div>
      <div className="calc-btns">
        <button type="button" className="calc-btn" onClick={handleClick}>
          AC
        </button>
        <button type="button" className="calc-btn" onClick={handleClick}>
          +/-
        </button>
        <button type="button" className="calc-btn" onClick={handleClick}>
          %
        </button>
        <button
          type="button"
          className="calc-btn ops"
          onClick={handleClick}
        >
          &divide;
        </button>
        <button type="button" className="calc-btn" onClick={handleClick}>
          7
        </button>
        <button type="button" className="calc-btn" onClick={handleClick}>
          8
        </button>
        <button type="button" className="calc-btn" onClick={handleClick}>
          9
        </button>
        <button
          type="button"
          className="calc-btn ops"
          onClick={handleClick}
        >
          x
        </button>
        <button type="button" className="calc-btn" onClick={handleClick}>
          4
        </button>
        <button type="button" className="calc-btn" onClick={handleClick}>
          5
        </button>
        <button type="button" className="calc-btn" onClick={handleClick}>
          6
        </button>
        <button
          type="button"
          className="calc-btn ops"
          onClick={handleClick}
        >
          -
        </button>
        <button type="button" className="calc-btn" onClick={handleClick}>
          1
        </button>
        <button type="button" className="calc-btn" onClick={handleClick}>
          2
        </button>
        <button type="button" className="calc-btn" onClick={handleClick}>
          3
        </button>
        <button
          type="button"
          className="calc-btn ops"
          onClick={handleClick}
        >
          +
        </button>
        <button
          type="button"
          className="calc-btn"
          id="zero"
          onClick={handleClick}
        >
          0
        </button>
        <button type="button" className="calc-btn" onClick={handleClick}>
          .
        </button>
        <button
          type="button"
          className="calc-btn ops"
          onClick={handleClick}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
