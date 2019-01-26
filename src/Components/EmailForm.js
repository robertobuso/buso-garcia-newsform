import React, { Component } from 'react';
import { Form, Message, Checkbox } from 'semantic-ui-react'

class EmailForm extends Component {

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
              header='Email is Not Valid'
              content={window.screen.width > 415 ? 'Please check your email and try again.' : null}
            /> : null }
          </div>
        <div className='form-position'>
          <Form error
          onSubmit={(event, value) =>  this.handleSubmit(event, this.state.emailInput)}
          >
            <header className='form-header'>
              SIGN UP FOR THE TLC NEWSLETTER.
            </header>
            <Form.Field
              className='email-input email-text'
              required name='email'
              placeholder='enter email address'
              control='input'
              type='text'
              onChange={event => this.handleChange(event)}/>
            <Form.Button className='next-button' color='red' size={window.screen.width > 415 ? 'large' : 'mini'}>
              NEXT
            </Form.Button>
          </Form>
        </div>
        <Checkbox
        className='disclaimer-checkbox'
        label={<label className='disclaimer-text'>I agree to receive information from Discovery Comunications in accordance with the following
        {<a href='https://en.wikipedia.org/wiki/Privacy_policy'
        rel="noopener noreferrer"
        target='_blank'>
        Privacy Policy.
        </a>}
        </label>}/>
      </>
    )
  }
}

export default EmailForm;
