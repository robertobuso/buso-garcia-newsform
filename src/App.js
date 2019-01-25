import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CallToAction from './Components/CallToAction.js'
import SignUpForm from './Components/SignUpForm.js'

class App extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='rectangle'>

            <CallToAction />
            <SignUpForm />

        </div>
      </div>
    );
  }
}

export default App;
