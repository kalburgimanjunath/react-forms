import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <h1>Simple forms</h1>
        </li>
        <li>
          <Link to="./login">Simple Login</Link>
        </li>
        <li>
          <Link to="./login2">Login </Link>With less code Login
        </li>
        <li>
          <Link to="./subscription">Subscription</Link>
        </li>
        <li>
          <Link to="./signup">Signup</Link> (validate)
        </li>
        <li>
          <Link to="./signupYup">Signup with Yup </Link>(validationSchema)
        </li>
        <li>
          <Link to="./signuplesscode">Signup with Yup</Link> (Less Code using
          getFieldProps)
        </li>
        <li>
          <Link to="./signupcomponent">Signup with Component</Link>
        </li>
        <li>
          <Link to="./signupabstration">Signup with abstration</Link>
        </li>
      </ul>
    </div>
  );
}
