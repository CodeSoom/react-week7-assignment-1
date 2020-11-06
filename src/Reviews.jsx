import React from 'react';

export default function Reviews({ reviews }) {
  return (
    <ul>
      {reviews.map(({ id, score, description }) => (
        <li key={id}>
          <p>{score}</p>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  );
}
