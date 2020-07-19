import React from 'react';

import ReviewItems from './ReviewItems';

export default function Reviews({ reviewItems }) {
  return (
    <div>
      <h3>리뷰 목록</h3>
      <ReviewItems reviewItems={reviewItems} />
    </div>
  );
}
