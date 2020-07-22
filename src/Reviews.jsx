import React from 'react';

import { sort } from './utils';

export default function Reviews({ reviews }) {
  if (!(reviews || []).length) {
    return (
      <p>리뷰가 없어요!</p>
    );
  }

  const sortedReviews = sort(reviews);
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
