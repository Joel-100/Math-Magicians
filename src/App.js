/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Calculator from './components/calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quotes from './components/Quotes';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/calculator" element={<Calculator />} />
          <Route exact path="/quotes" element={<Quotes />} />
        </Routes>
      </div>
    );
  }
}
export default App;
