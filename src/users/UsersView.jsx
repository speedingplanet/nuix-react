import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import AddUser from './AddUser';
import ListUsers from './ListUsers';
import UserBrowser from './UserBrowser';
import FindUsersContainer from './FindUsersContainer';

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

async function fetchUsers( setUsers ) {
  try {
    let response = await fetch( 'http://localhost:8000/api/zippay/v1/users' );
    let users = await response.json();
    setUsers( users );
  } catch ( err ) {
    console.error( err );
  }
}

export default function UsersView() {
  const [ users, setUsers ] = useState( [] );

  /*
  useEffect( () => {
    fetch( 'http://localhost:8000/api/zippay/v1/users ' )
      .then( ( response ) => response.json() )
      .then( ( users ) => setUsers( users ) )
      .catch( console.error );
  }, [] );
  */

  useEffect( () => {
    fetchUsers( setUsers );
  }, [] );

  const handleCreateUser = ( user ) => {
    console.log( 'UsersView: user to add: ', user );
  };

  let routes = [
    {
      url: '/users/find',
      label: 'Find users',
      component: FindUsersContainer,
      props: {
        users,
        columns,
      },
    },
    {
      url: '/users/add',
      label: 'Add a user',
      component: AddUser,
      props: {
        createUser: handleCreateUser,
      },
    },
    {
      url: '/users/browse',
      label: 'Browse users',
      component: UserBrowser,
    },
    {
      url: '/users/list',
      label: 'List users',
      component: ListUsers,
      props: {
        users,
      },
    },
  ];

  /*
  forEach((item, index, array) => void)
  some((item, index, array) => boolean) / every()
  map((item, index, array) => array item)
  filter((item, index, array) => boolean)
  find((item, index, array) => boolean): find the first match
  findIndex((item, index, array) => boolean): find the index of the first match

  reduce((accumulatedValue, currentValue, index, array) => nextValue, initialValue)
  */

  return (
    <section>
      <div className="row">
        <div className="col">
          <h2>Users</h2>
          <p>There are {users.length} users.</p>
        </div>
      </div>
      <div className="row">
        <nav className="col">
          <ul className="list-inline">
            {routes.map( ( route ) => (
              <li className="list-inline-item" key={route.url}>
                <Link to={route.url}>{route.label}</Link>
              </li>
            ) )}
          </ul>
        </nav>
      </div>
      {routes.map( ( route ) => (
        <Route path={route.url} key={route.url}>
          <route.component {...route.props} />
        </Route>
      ) )}
    </section>
  );
}
