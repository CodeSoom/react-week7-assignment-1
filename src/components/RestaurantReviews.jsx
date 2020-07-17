import React from 'react';

export default function RestaurantReviews({ reviews }) {
  if (!reviews) {
    return (
      <>
        <h2>리뷰</h2>
        <p>리뷰가 없습니다.</p>
      </>
    );
  }
  return (
    <>
      <h2>리뷰</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.name}</p>
            <p>{review.score}</p>
            <p>{review.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
