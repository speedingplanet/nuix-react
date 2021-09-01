import React, { useState, useRef } from 'react';

export default function FormWidgets( { initialValue } ) {
  const [ userName, setUserName ] = useState( initialValue ?? '' );
  const [ ucUserName, setUcUserName ] = useState( '' );
  const inputRef = useRef( null );

  function handleButtonClick() {
    console.log(
      'Current value of the uncontrolled component: ',
      uncontrolledValue,
    );

    uncontrolledValue && setUcUserName( uncontrolledValue );
  }

  function handleUpdateText( event ) {
    setUserName( event.target.value );
  }

  let uncontrolledValue = '';

  return (
    // section>.row>.col>.form-group>label+input:text.form-control
    <section>
      {/* Controlled component */}
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="user-name">Enter your name:</label>
            <input
              type="text"
              id="user-name"
              className="form-control"
              onChange={handleUpdateText}
              value={userName}
            />
          </div>
          <p>Hello, {userName}</p>
        </div>
      </div>

      {/* Uncontrolled component */}
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="uc-user-name">Enter your name:</label>
            <input
              type="text"
              id="uc-user-name"
              ref={inputRef}
              onBlur={( e ) => ( uncontrolledValue = e.target.value )}
              className="form-control"
            />
            <button className="btn btn-info mt-2" onClick={handleButtonClick}>
              Say hello!
            </button>
          </div>
          <p>Hello, {ucUserName}</p>
        </div>
      </div>
    </section>
  );
}
