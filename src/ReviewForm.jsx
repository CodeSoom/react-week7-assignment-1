import React from 'react';

export default function ReviewForm({ reviewFields: { score, description }, onChange, onClick }) {
  function handleChange(event) {
    const { name, value } = event.target;

    onChange({ name, value });
  }
  return (
    <>
      <div>
        <label htmlFor="review-score">
          평점
        </label>
        <input
          type="number"
          id="review-score"
          name="score"
          onChange={handleChange}
          value={score}
        />
      </div>
      <div>
        <label htmlFor="review-description">
          리뷰 내용
        </label>
        <input
          type="text"
          id="review-description"
          name="description"
          onChange={handleChange}
          value={description}
        />
      </div>
      <button
        type="button"
        onClick={onClick}
      >
        리뷰 남기기
      </button>
    </>
  );
}
