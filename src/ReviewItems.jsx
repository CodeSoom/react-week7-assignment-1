import React from 'react';

export default function ReviewItems({ reviews }) {
  return (
    <ul>
      {reviews
        .sort((a, b) => (b.id - a.id))
        .map(({
          id, name, score, description,
        }) => (
          <li key={id}>
            <p>{name}</p>
            <p>
              {score}
              점
            </p>
            <p>{description}</p>
          </li>
        ))}
    </ul>
  );
}
