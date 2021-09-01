import React from 'react';
import lodashGet from 'lodash-es/get';

const UsersGrid = ( { users, columns } ) => {
  return (
    <table
      className="table table-striped table-hover"
      hidden={users.length === 0}
    >
      <thead>
        <tr>
          {columns.map( ( column ) => (
            <th key={column.field}>{column.label}</th>
          ) )}
        </tr>
      </thead>
      <tbody>
        {users.map( ( user ) => (
          <tr key={user.id}>
            {columns.map( ( column ) => (
              <td key={column.field}>{lodashGet( user, column.field )}</td>
            ) )}
          </tr>
        ) )}
      </tbody>
    </table>
  );
};

export default UsersGrid;
