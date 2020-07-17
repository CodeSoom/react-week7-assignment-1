import React from 'react';

export default function Reviews({ reviews }) {
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
          {`${review.score}점`}
          {review.description}
        </li>
      ))}
    </ul>
  );
}
