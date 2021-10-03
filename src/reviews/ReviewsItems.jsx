import React from 'react';

export default function ReviewsItems({ reviews }) {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <p>{review.name}</p>
          <p>
            {review.score}
            점
          </p>
          <p>{review.description}</p>
        </li>
      ))}
    </ul>
  );
}
