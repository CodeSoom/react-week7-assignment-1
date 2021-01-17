import React from 'react';

import ReviewItems from './ReviewItems';

export default function Reviews({ reviews }) {
  return (
    <>
      <h2>리뷰</h2>
      {
        !(reviews || []).length
          ? (<p>리뷰가 없어요!</p>)
          : (<ReviewItems reviews={reviews} />)
      }
    </>
  );
}
