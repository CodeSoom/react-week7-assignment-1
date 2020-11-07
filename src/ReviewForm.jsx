import React from 'react';

export default function ReviewForm({ onChange }) {
  function handleChange(event) {
    const { target: { name, value } } = event;

    onChange({ name, value });
  }
  return (
    <>
      <div>
        <label htmlFor="input-score">
          평점
        </label>
        <input
          type="number"
          name="score"
          id="input-score"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="input-review">
          리뷰 내용
        </label>
        <input
          type="text"
          name="description"
          id="input-review"
        />
      </div>
    </>
  );
}
