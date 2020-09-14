import React from 'react';

import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';

import { TodosContainer } from './TodosContainer';
import { NotFound } from './NotFound';
import { InProgress } from './InProgress';

import './styles/App.less';

export function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <p className="logo">
            TODO
          </p>
          <div className="btns-sign">
            <button className="btn-signIn">sign in</button>
            <button className="btn-signUp">sign up</button>
          </div>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/todos">todos</Link>
            </li>
            <li>
              <Link to="/target">target list</Link>
            </li>
            <li>
              <Link to="/goals">life goals</Link>
            </li>
            <li>
              <Link to="/movie">movie list</Link>
            </li>
            <li>
              <Link to="/book">book list</Link>
            </li>
            <li>
              <Link to="/shopping">shopping list</Link>
            </li>
            <li>
              <Link to="/courses">courses</Link>
            </li>
            <li>
              <Link to="/notepad">notepad</Link>
            </li>
          </ul>
        </nav>

        <content className="content">
          <Switch>
            <Route exact path="/">
              <h1>Welcome</h1>
            </Route>
            <Route path="/todos">
              <TodosContainer />
            </Route>
            <Route path="/target">
              <InProgress />
            </Route>
            <Route path="/goals">
              <InProgress />
            </Route>
            <Route path="/movie">
              <InProgress />
            </Route>
            <Route path="/book">
              <InProgress />
            </Route>
            <Route path="/shopping">
              <InProgress />
            </Route>
            <Route path="/courses">
              <InProgress />
            </Route>
            <Route path="/notepad">
              <InProgress />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </content>
        <footer>
          <p>
            coded by lagunnna
          </p>
        </footer>
      </div>

    </Router>
  );
}
