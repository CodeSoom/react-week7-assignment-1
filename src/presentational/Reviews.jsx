import React from 'react';

export default function Reviews({ reviews }) {
  return (
    <ul>
      {
        reviews.map(({ name, score, description }) => (
          <li>
            <p>{name}</p>
            <p>{score}</p>
            <p>{description}</p>
          </li>
        ))
      }
    </ul>
  );
}
