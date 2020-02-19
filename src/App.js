import React from 'react';
import logo from './logo.svg';
import './App.css';
import CheckBoxComponent from './CheckBoxComponent.jsx';
import ComboBoxComponent from './ComboBoxComponent.jsx';
import InputTextComponent from './InputTextComponent.jsx';

function App() {
  return (
    <div>
      <InputTextComponent></InputTextComponent>
      <CheckBoxComponent></CheckBoxComponent>
      <ComboBoxComponent></ComboBoxComponent>      
    </div>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js or other files</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
