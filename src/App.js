import React from 'react';
import logo from './logo.svg';
import './App.css';
import CheckBoxComponent from './CheckBoxComponent'

function App() {
  return (
    <div className="CheckBoxComp">
      <CheckBoxComponent></CheckBoxComponent>
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
