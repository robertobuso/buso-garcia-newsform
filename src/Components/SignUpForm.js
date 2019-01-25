import React from 'react';
import { Button } from 'semantic-ui-react'

const SignUpForm = props => {

  return (
    <>
    <form>
    <div className='form-header'>
    SIGN UP FOR THE TLC NEWSLETTER.
    </div>
    <input className='email-input email-text'
    name='email' />
    <Button className='next-button' color='red' size='large'>NEXT</Button>
  </form>
  </>
  )
}

export default SignUpForm;
