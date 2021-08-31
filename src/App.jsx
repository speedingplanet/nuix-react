import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import DemosView from './demos/DemosView';
import TransactionsView from './transactions/TransactionsView';
import UsersView from './users/UsersView';

function App() {
  return (
    <BrowserRouter>
      <main className="container">
        <header className="row">
          <div className="col">
            <h1>Zippay (Nuix React)</h1>
          </div>
        </header>
        <hr />
        <nav className="row">
          <div className="col">
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to="/demos">Demos</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/users">Users</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/transactions">Transactions</Link>{' '}
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/demos">
          <DemosView />
        </Route>
        <Route path="/users">
          <UsersView />
        </Route>
        <Route path="/transactions">
          <TransactionsView />
        </Route>
      </main>
    </BrowserRouter>
  );
}

export default App;
