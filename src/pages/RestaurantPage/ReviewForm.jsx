import React from 'react';

export default function ReviewForm({
  review,
  onChange,
  onSubmit,
}) {
  const { score, description } = review;

  return (
    <>
      <div>
        <label htmlFor="review-score">평점</label>
        <input
          value={score}
          type="number"
          id="review-score"
          name="score"
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="review-description">리뷰 내용</label>
        <input
          value={description}
          type="text"
          id="review-description"
          name="description"
          onChange={onChange}
        />
        <button type="button" onClick={onSubmit}>리뷰 남기기</button>
      </div>
    </>
  );
}
