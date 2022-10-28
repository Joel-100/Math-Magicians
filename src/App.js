/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Calculator from './components/calculator';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}
export default App;
