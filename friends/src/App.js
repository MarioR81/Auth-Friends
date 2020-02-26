import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import Login from "./components/Login";
import LandingPage from './components/LandingPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/landingPage'>Landing Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path='/landingPage' component={LandingPage} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
