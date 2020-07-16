import React from 'react';

export default function RestaurantReviews({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return (
      <p>리뷰가 없습니다.</p>
    );
  }

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
