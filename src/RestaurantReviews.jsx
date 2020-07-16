import React from 'react';

export default function RestaurantReviews({ reviews }) {
  return (
    <>
      <h2>리뷰</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            {review.name}
            {review.score}
            {review.description}
          </li>
        ))}
      </ul>
    </>
  );
}
