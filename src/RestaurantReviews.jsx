import React from 'react';

export default function RestaurantReviews({ reviews }) {
  if (!reviews) {
    return null;
  }

  return (
    <ul>
      {reviews.map(({
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
