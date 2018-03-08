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
      </div>
    );
  }
}

export default App;
