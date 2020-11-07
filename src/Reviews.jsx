import React from 'react';

export default function Reviews({ reviews = [] }) {
  if (reviews.length === 0) {
    return <p>리뷰가 없어요!</p>;
  }

  return (
    <div>
      <ul>
        {reviews.reverse().map((review) => (
          <li key={review.id}>
            <div>
              {review.name}
            </div>
            <div>
              {review.score}
              점
            </div>
            <div>
              {review.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
