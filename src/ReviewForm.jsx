import React from 'react';

export default function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  const handleChange = (event) => {
    const { target: { name, value } } = event;

    onChange({ name, value });
  };

  return (
    <>
      <div>
        <label htmlFor="review-score">
          평점
          <input
            id="review-score"
            value={score}
            type="number"
            name="score"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="review-description">
          리뷰 내용
          <input
            id="review-description"
            value={description}
            type="text"
            name="description"
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="button" onClick={onSubmit}>
        리뷰 남기기
      </button>
    </>
  );
}
