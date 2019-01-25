import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react'

class FullNameForm extends Component {

  state = {
    emailInput: '',
    error: false
  }

  handleChange = (e) => {
    this.setState( {
      emailInput: e.currentTarget.value
    })
  }

  handleSubmit = (event, value) => {
    const validEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)

    if (validEmail) {
      event.preventDefault()
      event.target.reset()

      this.setState( { error: false}, () => this.props.handleNextClick( this.state.emailInput))
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
        onSubmit={(event, value) =>  this.handleSubmit(event, this.state.emailInput)}
        >
          <header className='form-header'>
            ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME.
          </header>
          <Form.Group widths='equal' className='full-name-input email-text'>
          <Form.Input fluid
            required name='first name'
            placeholder='First Name'
            control='input'
            type='text'
            onChange={event => this.handleChange(event)}/>
            <Form.Input fluid
              required name='last name'
              placeholder='Last Name'
              control='input'
              type='text'
              onChange={event => this.handleChange(event)}/>
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
