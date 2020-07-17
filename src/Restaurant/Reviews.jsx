import React from 'react';

import ReviewItems from './ReviewItems';

export default function Reviews({ reviews }) {
  return (
    <div>
      <h3>리뷰 목록</h3>
      <ReviewItems reviewItems={reviews} />
    </div>
  );
}
