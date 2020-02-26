import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/protected'>Protected Page</Link>
          </li>
        </nav>
        <h1>App js!</h1>
        <Login />
        
      </div>
    </Router>
  );
}

export default App;
