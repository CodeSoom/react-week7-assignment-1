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
          <p>
            이름 :
            {review.name}
          </p>
          <p>
            점수 :
            {review.score}
          </p>
          <p>
            리뷰 :
            {review.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
