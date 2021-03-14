import React from 'react';

export default function ReviewForm({ onChange }) {
  const handleChange = (event) => {
    const { target: { name, value } } = event;
    onChange({ name, value });
  };

  return (
    <div>
      <label htmlFor="review-score">
        평점
      </label>
      <input
        type="number"
        id="review-score"
        onChange={handleChange}
      />
      <label htmlFor="review-description">
        리뷰 내용
      </label>
      <input
        type="text"
        id="review-description"
        onChange={handleChange}
      />
    </div>
  );
}
