import React from 'react';

export default function Reviews({ reviews }) {
  return (
    <ul>
      {reviews.map(({
        id, name, score, description,
      }) => (
        <li key={id}>
          <div>{name}</div>
          <div>{score}</div>
          <div>{description}</div>
        </li>
      ))}
    </ul>
  );
}
