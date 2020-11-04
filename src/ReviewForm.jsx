import React from 'react';

export default function LoginForm() {
  return (
    <>
      <div>
        <label htmlFor="review-rate">
          평점
          <input
            id="review-rate"
            type="number"
            name="rate"
          />
        </label>
        <label htmlFor="review-description">
          리뷰 내용
          <input
            id="review-description"
            type="text"
            name="description"
          />
        </label>
      </div>
      <button type="button">
        리뷰 남기기
      </button>
    </>
  );
}
