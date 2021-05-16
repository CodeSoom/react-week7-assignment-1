import React from 'react';

export default function ReviewForm({
  handleSubmit,
  onSubmit,
  register,
  errors,
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="review-score">
        평점
      </label>
      <input
        type="number"
        id="review-score"
        name="score"
        ref={register({ required: true })}
      />

      <label htmlFor="review-description">
        리뷰 내용
      </label>
      <input
        type="text"
        id="review-description"
        name="description"
        ref={register({ required: true })}
      />

      <button type="submit">
        리뷰 남기기
      </button>

      {errors.score && <p>평점을 입력해주세요</p>}
      {errors.description && <p>리뷰 내용을 입력해주세요</p>}
    </form>
  );
}
