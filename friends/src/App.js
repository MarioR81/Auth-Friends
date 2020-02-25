import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <a>
            <Link to='/login'>Login</Link>
          </a>
          <a>
            <Link to='/protected'>Protected Page</Link>
          </a>
        </nav>
        <h1>App js!</h1>
        <Login />
        
      </div>
    </Router>
  );
}

export default App;
