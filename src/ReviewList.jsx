import React from 'react';

export default function ReviewList({ reviews }) {
  return (
    <div>
      <ul>
        {reviews.map(({
          id, name, score, description,
        }) => (
          <li key={id}>
            {name}
            <br />
            {score}
            <br />
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
}
