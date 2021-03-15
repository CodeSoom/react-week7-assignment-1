import React from 'react';

import ReviewItems from './ReviewItems';

export default function RestaurantReviews({ reviews }) {
  return (
    <>
      <h3>리뷰</h3>
      <ReviewItems reviews={reviews} />
    </>
  );
}
