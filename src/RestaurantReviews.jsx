import React from 'react';

export default function RestaurantReviews({ reviews }) {
  if (!reviews) {
    return (
      <p>아직 작성된 리뷰가 없습니다.</p>
    );
  }

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          {review.name}
          <br />
          {`${review.score}점`}
          <br />
          {review.description}
        </li>
      ))}
    </ul>
  );
}
