import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CallToAction from './Components/CallToAction.js'

class App extends Component {
  render() {
    return (
      <div className='footer'>
      <div className='rectangle'>
      <CallToAction />
      </div>
      </div>
    );
  }
}

export default App;
