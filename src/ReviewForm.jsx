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
      </div>
      <button type="button">
        리뷰 남기기
      </button>
    </>
  );
}
