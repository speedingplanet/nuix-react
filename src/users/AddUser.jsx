import React, { useState } from 'react';
import lodashSet from 'lodash-es/set';

/*
{
  displayName: 'Whatever',
  address: {
    street: 'Wherever',
    state: 'NJ',
    country: 'USA'
  }
}
*/

const AddUser = ( { createUser, buttonDisabled } ) => {
  const handleSubmit = ( event ) => {
    event.preventDefault();
    const data = new FormData( event.target );
    let formState = {};
    for ( let [ field, value ] of data ) {
      lodashSet( formState, field, value );
    }
    createUser( formState );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="displayName" className="form-label">
          Display Name
        </label>
        <input
          type="text"
          className="form-control"
          id="displayName"
          name="displayName"
        />
      </div>
      <TextInput fieldType="email" label="Email" fieldName="email" />
      <TextInput label="Street" fieldName="address.street" />
      <TextInput label="City" fieldName="address.city" />
      <TextInput label="State" fieldName="address.state" />
      <TextInput label="Postal Code" fieldName="address.postalCode" />
      <div className="mb-3">
        <label htmlFor="country" className="form-label">
          Country
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="address.country"
        >
          <option value="">Choose a country</option>
          <option value="USA">United States</option>
          <option value="CAN">Canada</option>
          <option value="UK">United Kingdom</option>
          <option value="MX">Mexico</option>
        </select>
      </div>
      <div className="mb-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="userType"
            id="person"
            value="person"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="person">
            Person
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="userType"
            id="corporation"
            value="corporation"
          />
          <label className="form-check-label" htmlFor="corporation">
            Corporation
          </label>
        </div>
      </div>
      <div className="mb-3">
        <button
          className="btn btn-success"
          type="submit"
          disabled={buttonDisabled}
        >
          Add User
        </button>
      </div>
    </form>
  );
};

const TextInput = ( { fieldName, fieldType, label, fieldValue } ) => {
  const [ controlledFieldValue, setFieldValue ] = useState( fieldValue ?? '' );
  return (
    <div className="mb-3">
      <label htmlFor={fieldName} className="form-label">
        {label}
      </label>
      <input
        type={fieldType ?? 'text'}
        className="form-control"
        id={fieldName}
        name={fieldName}
        value={controlledFieldValue}
        onInput={( e ) => {
          setFieldValue( e.target.value );
        }}
      />
    </div>
  );
};

export default AddUser;
