import React from 'react';

const Congratulations = props => {
  return (
    <>
      <div className={window.screen.width > 415 ?'form-position' : 'form-position-final'}>
        <header className='form-header'>
          THANK YOU FOR SIGNING UP!
        </header>
        <br/>
        <header className='congratulations-body-text'>
          Look out for the lastest news on your favorite shows.
        </header>
      </div>
    </>
  )
}

export default Congratulations;
