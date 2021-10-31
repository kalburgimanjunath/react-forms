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
          <Link to="./login2">With less code Login</Link>
        </li>
      </ul>
    </div>
  );
}
