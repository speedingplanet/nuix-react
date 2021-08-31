import React, { useState, useRef } from 'react';

export default function FormWidgets( {
  initialValue,
} ) {
  const [ userName, setUserName ] = useState( initialValue ?? '' );
  const [ ucUserName, setUcUserName ] = useState( '' );
  const inputRef = useRef( null );

  function handleUpdateText( event ) {
    setUserName( event.currentTarget.value );
  }

  function handleButtonClick() {
    /*
    if ( inputRef.current ) {
      console.log(
        'Current value of the uncontrolled component: ',
        inputRef.current.value,
      );
    }

    console.log(
      'Current value of the uncontrolled component: ',
      inputRef.current && inputRef.current.value,
    );
    */

    console.log(
      'Current value of the uncontrolled component: ',
      inputRef.current?.value,
    );

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    inputRef.current?.value && setUcUserName( inputRef.current?.value );
  }

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
