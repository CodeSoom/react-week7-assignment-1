import React from 'react';

import ReviewsItems from './ReviewsItems';

export default function ReviewsList({ reviews }) {
  return (
    <div>
      <h2>Reviews</h2>
      {
        !(reviews)
          ? (<p>리뷰가 없습니다!</p>)
          : <ReviewsItems reviews={reviews} />
      }
    </div>
  );
}
