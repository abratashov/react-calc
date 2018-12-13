import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from './Header';
import Calc from '../containers/Calc';

import calculator from '../reducers'

const App = () => (
  <div className="App">
    <Header />
    <Calc />
  </div>
)

// React syntax fix :(

export default App;
