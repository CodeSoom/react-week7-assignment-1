import React from 'react';

export default function Review({ reviews }) {
  return (
    <ul>
      {reviews.reverse().map(({
        id,
        name,
        score,
        description,
      }) => (
        <li key={id}>
          <p>
            {name}
          </p>
          <p>
            {score}
            점
          </p>
          <p>
            {description}
          </p>
        </li>
      ))}
    </ul>
  );
}
