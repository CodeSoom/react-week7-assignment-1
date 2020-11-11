import React from 'react';

export default function ReviewForm() {
  return (
    <div>
      <div>
        <label htmlFor="review-number">평점</label>
        <input type="number" id="review-number" />
      </div>
      <div>
        <label htmlFor="review-text">리뷰 내용</label>
        <input type="text" id="review-text" />
      </div>
      <button type="button">
        리뷰 남기기
      </button>
    </div>
  );
}
