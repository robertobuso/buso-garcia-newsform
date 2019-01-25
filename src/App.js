import React, { Component } from 'react';
import './App.css';
import CallToAction from './Components/CallToAction.js'

class App extends Component {

  handleNextClick = (event, value) => {
    event.preventDefault()
    event.target.reset()
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
