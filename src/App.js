import React from 'react';
import logo from './logo.svg';
import './App.css';
import CheckBoxComponent from './CheckBoxComponent.jsx';
import ComboBoxComponent from './ComboBoxComponent.jsx';
import InputTextComponent from './InputTextComponent.jsx';
import LogArea from './LogArea.jsx';

function App() {

  function handleChange(e) {
    //const state = e.target.value;
    console.log(e.target.value);
    LogArea.name = e.target.value;
    //this.setState({textIn: e.target.value})
    //this.handleChange(e.target.value);
  }

  return (
    <div className="MyApp">
      <div className="MyApp-InputText" name="textIn" onChange={handleChange}><InputTextComponent></InputTextComponent></div>
      <div className="MyApp-CheckBox"><CheckBoxComponent></CheckBoxComponent></div>
      <div className="MyApp-ComboBox"><ComboBoxComponent></ComboBoxComponent></div>
      <div className="MyApp-LogArea"><LogArea></LogArea></div>
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
