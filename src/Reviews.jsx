import React from 'react';

export default function Reviews({ reviews }) {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          {review.name}
          <br />
          {review.score}
          <br />
          {review.description}
          <br />
        </li>
      ))}
    </ul>
  );
}
