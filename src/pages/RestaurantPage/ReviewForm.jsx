import React from 'react';

export default function ReviewForm({
  review,
  onChange,
  onSubmit,
}) {
  const { score, description } = review;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor="review-score">평점</label>
        <input
          value={score}
          type="number"
          id="review-score"
          name="score"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="review-description">리뷰 내용</label>
        <input
          value={description}
          type="text"
          id="review-description"
          name="description"
          onChange={handleChange}
        />
        <button type="button" onClick={onSubmit}>리뷰 남기기</button>
      </div>
    </>
  );
}
