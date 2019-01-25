import React, { Component } from 'react';
import './App.css';
import CallToAction from './Components/CallToAction.js'

class App extends Component {

  state = {
      email: '',
      fullName: ''
    }

  handleNextClick = (value) => {
    this.setState({ email: value})
  }

  render() {
    return (
      <div className='footer'>
        <div className='rectangle'>
            <CallToAction handleNextClick={this.handleNextClick}
            email={this.state.email}
            fullName={this.state.fullName}/>
        </div>
      </div>
    );
  }
}

export default App;
