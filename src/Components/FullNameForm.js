import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react'

class FullNameForm extends Component {

  state = {
    firstName: '',
    lastName: '',
    error: false
  }

  handleFirstNameChange = (event) => {
    this.setState( {
      firstName: event.currentTarget.value
    })
  }

  handleSecondNameChange = (event) => {
    this.setState( {
      secondName: event.currentTarget.value
    })
  }

  handleSubmit = (event, firstName, secondName) => {
    if (firstName !== undefined && secondName !== undefined && firstName !== '' && secondName !== '') {
      event.preventDefault()
      event.target.reset()
      this.setState( { error: false}, () => this.props.handleSubmitClick(firstName + ' ' + secondName))
    } else {
      this.setState( { error: true} )
    }
  }

  render() {
    return (
      <>
        <div className='full-name-error-position'>
        {this.state.error === true ?
          <Message
            error
            header='Name is Incomplete'
            content={window.screen.width > 415 ? 'Please enter a first name and a last name.' : null}
          />
        : null}
        </div>

        <div className='form-position'>
          <Form error
            onSubmit={(event, value) =>  this.handleSubmit(event, this.state.firstName, this.state.secondName)}>

            <header className='form-header'>
              ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME.
            </header>

            <Form.Group widths='equal' className='full-name-input email-text'>
              <Form.Input
                name='first name'
                placeholder='First Name'
                control='input'
                type='text'
                onChange={event => this.handleFirstNameChange(event)}/>

              <Form.Input
                name='last name'
                placeholder='Last Name'
                control='input'
                type='text'
                onChange={event => this.handleSecondNameChange(event)}/>
            </Form.Group>

            <Form.Button
              size={window.screen.width > 415 ? 'large' : 'tiny'}
              color='red'
              className='full-name-button'>
                SIGN UP
            </Form.Button>
          </Form>
        </div>
      </>
    )
  }
}

export default FullNameForm;
