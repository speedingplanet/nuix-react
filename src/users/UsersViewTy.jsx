import React from 'react';
import { Route, Link } from 'react-router-dom';
import { users } from '@speedingplanet/rest-server';
import AddUser from './AddUser';
import BrowseUsers from './BrowseUsers';
import FindUsers from './FindUsers';
import UserDetails from './UserDetailsTy';

let routes = [
  { url: '/users/find', label: 'Find users', component: FindUsers },
  { url: '/users/add', label: 'Add a user', component: AddUser },
  {
    url: '/users/browse',
    label: 'Browse users',
    component: BrowseUsers,
  },
  {
    url: '/users/detail',
    label: 'User details',
    component: UserDetails,
    props: {
      user: users[3],
    },
  },
];

export default function UsersView() {
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
        <Route path={route.url}>
          <route.component {...route.props} />
        </Route>
      ) )}
    </section>
  );
}
