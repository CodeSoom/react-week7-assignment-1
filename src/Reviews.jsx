import React from 'react';

export default function Reviews({ reviews }) {
  if (!(reviews || []).length) {
    return (
      <p>리뷰가 없어요!</p>
    );
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);
  return (
    <ul>
      {sortedReviews.map((review) => (
        <li key={review.id}>
          {review.name}
          <br />
          {review.score}
          <br />
          {review.description}
          <br />
        </li>
      ))}
    </ul>
  );
}
