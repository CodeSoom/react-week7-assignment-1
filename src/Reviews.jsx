import React from 'react';

export default function Reviews({ reviews = [] }) {
  if (!reviews || !reviews.length) {
    return <p>리뷰가 없어요!</p>;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <div>
      <ul>
        {sortedReviews.map((review) => (
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
