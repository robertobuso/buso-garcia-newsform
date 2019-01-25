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

  handleSubmitClick = (name) => {
    this.setState({ fullName: name}, () => console.log('FROM THE STATE: ', this.state.fullName))
  }

  render() {
    return (
      <div className='footer'>
        <div className='rectangle'>
            <CallToAction handleNextClick={this.handleNextClick}
            handleSubmitClick={this.handleSubmitClick}
            email={this.state.email}
            fullName={this.state.fullName}/>
        </div>
      </div>
    );
  }
}

export default App;
