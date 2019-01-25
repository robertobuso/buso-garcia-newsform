import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react'

class FullNameForm extends Component {

  state = {
    firstName: '',
    lastName: '',
    error: false
  }

  handleFirstNameChange = (e) => {
    this.setState( {
      firstName: e.currentTarget.value
    })
  }

  handleSecondNameChange = (e) => {
    this.setState( {
      secondName: e.currentTarget.value
    })
  }

  handleSubmit = (event, firstName, secondName) => {
    if (firstName !== '' && secondName !== '') {
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
        <div className='error-position'>
        {this.state.error === true ?
          <Message
            error
            header='Incomplete'
            content='Please enter a first name and a last name.'
          /> : null }
        </div>
      <div className='form-position'>
        <Form error
        onSubmit={(event, value) =>  this.handleSubmit(event, this.state.firstName, this.state.secondName)}
        >
          <header className='form-header'>
            ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME.
          </header>
          <Form.Group widths='equal' className='full-name-input email-text'>
          <Form.Input
            required name='first name'
            placeholder='First Name'
            control='input'
            type='text'
            onChange={event => this.handleFirstNameChange(event)}/>
            <Form.Input
              required name='last name'
              placeholder='Last Name'
              control='input'
              type='text'
              onChange={event => this.handleSecondNameChange(event)}/>
          <Form.Button color='red' size='huge' className='full-name-button'>
            SIGN UP
          </Form.Button>
        </Form.Group>
        </Form>
        </div>
      </>
    )
  }
}

export default FullNameForm;
