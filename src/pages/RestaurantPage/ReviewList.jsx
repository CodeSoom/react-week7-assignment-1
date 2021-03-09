import React from 'react';

export default function ReviewList({ reviews }) {
  return (
    <>
      <h3>리뷰</h3>
      <ul>
        {reviews.map(({
          id, restaurantId, name, score, description,
        }) => (
          <li key={`${restaurantId}-${id}`}>
            <p>{name}</p>
            <p>{score}</p>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
