import React from 'react';

import ReviewItems from './ReviewItems';

export default function Reviews({ reviews }) {
  return (
    <>
      <h2>리뷰</h2>
      <ReviewItems reviews={reviews} />
    </>
  );
}