import React from 'react';

export default function ReviewForm({
  reviewField, onChangeReviewField, onSubmitReviewField,
}) {
  const {
    score, description,
  } = reviewField;

  return (
    <>
      <h3>리뷰 작성</h3>
      <div>
        <label htmlFor="review-score">평점</label>
        <input
          type="number"
          id="review-score"
          onChange={onChangeReviewField}
          name="score"
          value={score}
        />
      </div>
      <div>
        <label htmlFor="review-description">내용</label>
        <input
          type="text"
          id="review-description"
          onChange={onChangeReviewField}
          name="description"
          value={description}
        />
      </div>
      <button type="button" onClick={onSubmitReviewField}>
        리뷰 남기기
      </button>
    </>
  );
}
