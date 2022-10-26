/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calc">
        <input type="number" placeholder="0" />
        <div className="calc-btns">
          <button type="button" className="calc-btn">AC</button>
          <button type="button" className="calc-btn">+/-</button>
          <button type="button" className="calc-btn">%</button>
          <button type="button" className="calc-btn ops">&divide;</button>
          <button type="button" className="calc-btn">7</button>
          <button type="button" className="calc-btn">8</button>
          <button type="button" className="calc-btn">9</button>
          <button type="button" className="calc-btn ops">&times;</button>
          <button type="button" className="calc-btn">4</button>
          <button type="button" className="calc-btn">5</button>
          <button type="button" className="calc-btn">6</button>
          <button type="button" className="calc-btn ops">-</button>
          <button type="button" className="calc-btn">1</button>
          <button type="button" className="calc-btn">2</button>
          <button type="button" className="calc-btn">3</button>
          <button type="button" className="calc-btn ops">+</button>
          <button type="button" className="calc-btn" id="zero">0</button>
          <button type="button" className="calc-btn">.</button>
          <button type="button" className="calc-btn ops">=</button>
        </div>
      </div>
    );
  }
}
export default Calculator;
