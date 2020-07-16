import React from 'react';

export default function Reviews({ reviews }) {
  return (
    <>
      <h3>리뷰</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.name}</li>
        ))}
      </ul>
    </>
  );
}
