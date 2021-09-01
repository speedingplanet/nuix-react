/* eslint-disable no-empty */
import React, { useState } from 'react';
import UserDetails from './UserDetails';
import { users } from '@speedingplanet/rest-server';

const UserBrowser = () => {
  const [ currentUser, setCurrentUser ] = useState( 0 );

  const handleButtonClick = ( event ) => {
    if ( event.target.textContent === 'Back' ) {
      setCurrentUser( Math.max( 0, currentUser - 1 ) );
    } else if ( event.target.textContent === 'Forward' ) {
      setCurrentUser( Math.min( currentUser + 1, users.length - 1 ) );
    }
  };

  return (
    <div className="row">
      <div className="col-4 offset-4">
        <div className="row mb-2">
          <div className="col">
            <UserDetails user={users[currentUser]} />
          </div>
        </div>
        <div className="row">
          <div className="col text-start">
            <button className="btn btn-danger" onClick={handleButtonClick}>
              Back
            </button>
          </div>
          <div className="col text-end">
            <button className="btn btn-success" onClick={handleButtonClick}>
              Forward
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBrowser;
