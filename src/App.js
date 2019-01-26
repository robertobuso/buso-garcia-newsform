import React, { Component } from 'react';
import './App.css';
import CallToAction from './Components/CallToAction.js'

class App extends Component {

  state = {
      email: '',
      fullName: '',
      completeForm: false
    }

  handleNextClick = (value) => {
    this.setState({ email: value}, () => console.log('The valid email is: ', this.state.email))
  }

  handleSubmitClick = (name) => {
    this.setState({
          fullName: name,
          completeForm: true}, () => console.log('The valid full name is: ', this.state.fullName))
  }

  render() {
    return (
      <div className='footer'>
        <div className='rectangle'>
            <CallToAction handleNextClick={this.handleNextClick}
            handleSubmitClick={this.handleSubmitClick}
            email={this.state.email}
            fullName={this.state.fullName}
            completeForm={this.state.completeForm}/>
        </div>
      </div>
    );
  }
}

export default App;
