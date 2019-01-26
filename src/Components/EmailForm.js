import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react'

class EmailForm extends Component {

  state = {
    emailInput: '',
    error: false,
    disclaimer: false
  }

  handleChange = (event) => {
    this.setState( { emailInput: event.currentTarget.value }
    )
  }

  handleCheckbox = () => {
    this.setState( { disclaimer: !this.state.disclaimer }
    )
  }

  handleSubmit = (event, value) => {
//Uses regex to validate email by character and structure
    const validEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)

//In case checkbox is required
    if (this.state.disclaimer === false) {
      console.log('I wasnt sure whether this was optional or required, so included the code in case we need to require it.')
    }

//Sends error if email is invalid, proceeds if valid
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
            />
            : null
          }
        </div>

        <div className='form-position'>
          <Form
            error
            onSubmit={(event, value) => this.handleSubmit(event, this.state.emailInput)}>

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

            <Form.Button
              fluid
              className='next-button'
              color='red'
              size={window.screen.width > 415 ? 'large' : 'mini'}>
                NEXT
            </Form.Button>

          </Form>
        </div>

        <div className='disclaimer-checkbox' >
          <input type='checkbox' name='disclaimer' onChange={this.handleCheckbox}/>

          <label className='disclaimer-text'>
            I agree to receive information from Discovery Comunications in accordance with the following
              {<a href='https://en.wikipedia.org/wiki/Privacy_policy' rel="noopener noreferrer" target='_blank'>
                {' Privacy Policy.'}
              </a>}
          </label>
        </div>
      </>
    )
  }
}

export default EmailForm;
