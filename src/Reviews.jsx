import React from 'react';

export default function Reviews({ reviews = [] }) {
  return (
    <div>
      <ul>
        {reviews.map((review) => (
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
