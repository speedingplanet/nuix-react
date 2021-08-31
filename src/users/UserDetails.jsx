import React from 'react';

const UserDetails = ( { user } ) => {
  return (
    <div className="card">
      <div className="card-header bg-info text-center">
        <p>{user.displayName}</p>
      </div>
      <ul className="list-group">
        <li className="list-group-item">{user.address.street}</li>
        <li className="list-group-item">
          {user.address.city}, {user.address.state} {user.address.postalCode}
        </li>
        <li className="list-group-item">
          Active? {user.active ? 'yes' : 'no'}
        </li>
      </ul>
    </div>
  );
};

export default UserDetails;
