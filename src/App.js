import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/index';
import { Login, Login2 } from './forms/index';
export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/login2">
          <Login2 />
        </Route>
      </Switch>
    </div>
  );
}
