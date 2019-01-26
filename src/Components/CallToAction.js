import React from 'react';

import EmailForm from '../Components/EmailForm.js'
import FullNameForm from '../Components/FullNameForm.js'
import Congratulations from '../Components/Congratulations.js'

const CallToAction = props => {
  return (
    <>
    {props.completeForm === true ?
      <div className='call-to-action-final'>
      congratula{<br/>}tions!
      </div>
      :
      <div className='call-to-action'>
      Join {<br/>}the list
      </div>
    }

    {props.email === '' ?
    <EmailForm handleNextClick={props.handleNextClick }
    email={props.email} />
    :
    props.completeForm === false ?
    <FullNameForm handleSubmitClick={props.handleSubmitClick }
    email={props.email} />
    :
    <Congratulations />
    }
    </>

  )
}

export default CallToAction;
