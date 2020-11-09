import React from 'react';

export default function Reviews({ reviews }) {
  return (
    <>
      <h2>리뷰</h2>
      <ul>
        {reviews.map(({
          id, name, score, description,
        }) => (
          <li key={id}>
            <p>{name}</p>
            <p>
              {`${score}점`}
            </p>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
