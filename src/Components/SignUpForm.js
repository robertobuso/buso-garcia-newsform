import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

class SignUpForm extends Component {

  state = {
    emailInput: ''
  }

  handleChange = (e) => {
    this.setState( {
      emailInput: e.currentTarget.value
    })
  }

  render() {
    return (
      <div className='form-position'>
      <Form onSubmit={(e, value) =>  this.props.handleNextClick(e, this.state.emailInput)}
    >
      <header className='form-header'>
      SIGN UP FOR THE TLC NEWSLETTER.
      </header>
      <Form.Field
        className='email-input email-text'
         required name='email'
         placeholder='enter email address'
         control='input'
         type='password'
         onChange={event => this.handleChange(event)}/>
      <Form.Button className='next-button' color='red' size='huge'
      >
      NEXT
      </Form.Button>
      </Form>
    </div>
    )
  }
}

export default SignUpForm;
