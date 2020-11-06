import React from 'react';

export default function Reviews({ reviews }) {
  return (

    <div>

      <ul>
        {
          reviews.map(({
            id, name, score, description,
          }) => (
            <li key={id}>
              <p>{name}</p>
              <p>{score}</p>
              <p>{description}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
