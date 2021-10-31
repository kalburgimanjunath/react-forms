import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/index';
import {
  Login,
  Login2,
  Subscription,
  Signup,
  SignupYup,
  SignupLessCode,
  SignupComponent,
  SignupAbstration,
} from './forms/index';
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
        <Route path="/subscription">
          <Subscription />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signupYup">
          <SignupYup />
        </Route>
        <Route path="/signuplesscode">
          <SignupLessCode />
        </Route>

        <Route path="/signupcomponent">
          <SignupComponent />
        </Route>
        <Route path="/signupabstration">
          <SignupAbstration />
        </Route>
      </Switch>
    </div>
  );
}
