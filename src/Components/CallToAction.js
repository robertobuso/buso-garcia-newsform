import React from 'react';
import EmailForm from '../Components/EmailForm.js'
import FullNameForm from '../Components/FullNameForm.js'
import Congratulations from '../Components/Congratulations.js'

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
    props.completeForm === false ?
    <FullNameForm handleSubmitClick={props.handleSubmitClick }
    email={props.email}
    fullName={props.fullName}/>
    :
    <Congratulations />
    }
    </>

  )
}

export default CallToAction;
