import React from 'react';

export default function ReviewForm({ reviewfields, onChange, onSubmit }) {
  const { score, description } = reviewfields;

  return (
    <>
      <label htmlFor="review-score">
        평점
      </label>
      <input
        type="number"
        id="review-score"
        name="score"
        value={score}
        onChange={onChange}
      />
      <label htmlFor="review-description">
        리뷰 내용
      </label>
      <input
        type="text"
        id="review-description"
        name="description"
        value={description}
        onChange={onChange}
      />
      <button type="submit" onClick={onSubmit}>
        리뷰 남기기
      </button>
    </>
  );
}
