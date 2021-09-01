import React from 'react';
import { Route, Link } from 'react-router-dom';
import AddUser from './AddUser';
import ListUsers from './ListUsers';
import FindUsers from './FindUsers';
import UserBrowser from './UserBrowser';

export default function UsersView() {
  const handleSearchDisplayName = ( searchCriteria ) => {
    console.log( 'UsersView: Searching on ', searchCriteria );
  };

  const handleCreateUser = ( user ) => {
    console.log( 'UsersView: user to add: ', user );
  };

  let routes = [
    {
      url: '/users/find',
      label: 'Find users',
      component: FindUsers,
      props: {
        searchDisplayName: handleSearchDisplayName,
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
