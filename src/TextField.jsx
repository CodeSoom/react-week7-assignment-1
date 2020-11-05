import React from 'react';

export default function TextField({ onChange }) {
  function handleChange(event) {
    const { target: { name, value } } = event;

    onChange({ name, value });
  }

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
