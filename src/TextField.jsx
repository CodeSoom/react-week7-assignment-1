import React from 'react';

export default function TextField({ onChange }) {
  return (
    <div>
      <label htmlFor="review-score">
        평점
      </label>
      <input
        type="number"
        id="review-score"
        name="score"
        onChange={handleChange}
      />
    </div>
  );
}
