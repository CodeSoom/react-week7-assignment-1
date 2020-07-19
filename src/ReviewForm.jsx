import React from 'react';

export default function ReviewForm() {
  return (
    <div>
      <label htmlFor="review-score">
        평점
      </label>
      <input 
       type="text"
       id="review-score"
      />
      <label htmlFor="review-description">
        리뷰 내용
      </label>
      <input 
       type="text"
       id="review-description"
      />
    </div>
  );
}