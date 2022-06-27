import React from 'react';
import { Link } from 'react-router-dom';

export default function Restaurants({ restaurants }) {
  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/restaurants/${id}`}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
