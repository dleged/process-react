import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Router as BrowerRouter} from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BasicLayout />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
