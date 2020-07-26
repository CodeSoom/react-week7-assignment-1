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
          <div>
            {review.name}
          </div>
          <div>
            {`${review.score}점`}
          </div>
          <div>
            {review.description}
          </div>
        </li>
      ))}
    </ul>
  );
}
