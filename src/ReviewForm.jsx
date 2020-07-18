import React from 'react';

export default function ReviewForm() {
  return (
    <>
      <div>
        <label htmlFor="review-score">
          평점
        </label>
        <input type="number" id="review-score" />
      </div>
      <div>
        <label htmlFor="review-description">
          리뷰 남기기
        </label>
        <input type="text" id="review-description" />
      </div>
    </>
  );
}
