import React from 'react';
import UsersGrid from './UsersGrid';

const columns = [
  {
    field: 'displayName',
    label: 'Display Name',
  },
  {
    field: 'address.city',
    label: 'City',
  },
  {
    field: 'address.state',
    label: 'State',
  },
];

const ListUsers = ( { users } ) => {
  return (
    <div className="row">
      <div className="col">
        <h3>List all Users</h3>
        <UsersGrid users={users} columns={columns} />
      </div>
    </div>
  );
};

export default ListUsers;
