import React from 'react';
import UserDetails from './UserDetails';
import { users } from '@speedingplanet/rest-server';

const UserBrowser = () => {
  return (
    <div className="row">
      <div className="col-4 offset-4">
        <div className="row mb-2">
          <div className="col">
            <UserDetails user={users[5]} />
          </div>
        </div>
        <div className="row">
          <div className="col text-start">
            <button
              className="btn btn-danger"
              onClick={( event ) =>
                console.log( `Clicked the ${event.target.textContent} button` )
              }
            >
              Back
            </button>
          </div>
          <div className="col text-end">
            <button
              className="btn btn-success"
              onClick={( event ) =>
                console.log( `Clicked the ${event.target.textContent} button` )
              }
            >
              Forward
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBrowser;
