import React from 'react';
import UserDetails from './UserDetails';

const UserDetailsTy = ( { user } ) => {
  return (
    <div className="row">
      <div className="col-4 offset-4">
        <UserDetails user={user} />
      </div>
    </div>
  );
};

export default UserDetailsTy;
