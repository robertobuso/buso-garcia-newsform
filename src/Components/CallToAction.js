import React from 'react';
import EmailForm from '../Components/EmailForm.js'
import FullNameForm from '../Components/FullNameForm.js'

const CallToAction = props => {
  return (
    <>
    <div className='call-to-action'>
    Join {<br/>}the list
    </div>
    {props.email === '' ?
    <EmailForm handleNextClick={props.handleNextClick }
    email={props.email}
    fullName={props.fullName}/>
    :
    <FullNameForm handleNextClick={props.handleNextClick }
    email={props.email}
    fullName={props.fullName}/>
    }
    </>

  )
}

export default CallToAction;
