import React from 'react';

export default function ReviewFormContainer() {
  return (
    <div>
      <label htmlFor="review-rate">
        평점
        <input type="number" id="review-rate" />
      </label>
    </div>
  );
}
