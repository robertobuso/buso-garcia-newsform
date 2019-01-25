import React from 'react';
import SignUpForm from '../Components/SignUpForm.js'

const CallToAction = props => {
  return (
    <>
    <div className='call-to-action'>
    Join {<br/>}the list
    </div>
    <SignUpForm handleNextClick={props.handleNextClick }/>
    </>
  )
}

export default CallToAction;
