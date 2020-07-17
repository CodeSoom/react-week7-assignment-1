import React from 'react';

export default function ReviewForm({
  reviewField, accessToken, onChangeReviewField, onSubmitReviewField,
}) {
  const {
    score, description,
  } = reviewField;

  if (accessToken === '' || accessToken === undefined) {
    return (
      <>
        <h3>리뷰 작성</h3>
        <p>
          <a href="/login">로그인</a>
          {' '}
          후 이용해주세요
        </p>

      </>
    );
  }

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
