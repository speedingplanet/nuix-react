import React from 'react';
import { Route, Link } from 'react-router-dom';
import { users } from '@speedingplanet/rest-server';
import AddUser from './AddUser';
import BrowseUsers from './BrowseUsers';
import FindUsers from './FindUsers';
import UserDetails from './UserDetails';

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
            <li className="list-inline-item">
              <Link to="/users/add">Add a user</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/users/find">Find users</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/users/browse">Browse users</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/users/detail">User Details</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Route path="/users/add">
        <AddUser />
      </Route>
      <Route path="/users/find">
        <FindUsers />
      </Route>
      <Route path="/users/browse">
        <BrowseUsers />
      </Route>
      <Route path="/users/detail">
        <div className="row">
          <div className="col-4 offset-4">
            <UserDetails user={users[0]} />
          </div>
        </div>
      </Route>
    </section>
  );
}
