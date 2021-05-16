import React from 'react';

export default function ReviewList({ reviews }) {
  return (
    <>
      <h3>리뷰</h3>
      <ul>
        {reviews?.map(({
          id, restaurantId, name, score, description,
        }) => (
          <li key={`${restaurantId}-${id}`}>
            <div>{name}</div>
            <div>{score}</div>
            <div>{description}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
