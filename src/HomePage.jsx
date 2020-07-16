import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { get } from './utils';

export default function HomePage() {
  const accessToken = useSelector(get('accessToken'));

  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li>
          {
            !accessToken
              ? <Link to="/login">Login</Link>
              : <Link to="/logout">Logout</Link>
          }
        </li>
        <li><Link to="/restaurants">Restaurants</Link></li>
      </ul>
    </div>
  );
}
