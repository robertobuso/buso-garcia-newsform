import React, { Component } from 'react';
import './App.css';
import CallToAction from './Components/CallToAction.js'

class App extends Component {

  handleNextClick = (value) => {
    console.log(value)
  }

  render() {
    return (
      <div className='footer'>
        <div className='rectangle'>
            <CallToAction handleNextClick={this.handleNextClick}/>
        </div>
      </div>
    );
  }
}

export default App;
