import React from 'react';

export default function RestaurantReviews({ reviews }) {
  if (!(reviews || []).length) {
    return (
      <p>리뷰가 없어요!</p>
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
