import React from 'react';

import ReviewInput from './ReviewInput';

export default function ReviewForm(
  {
    reviewFields: { score, description },
    onChange,
    onClick,
  },
) {
  return (
    <>
      <ReviewInput
        label="평점"
        type="number"
        name="score"
        onChange={onChange}
        value={score}
      />
      <ReviewInput
        label="리뷰 내용"
        name="description"
        onChange={onChange}
        value={description}
      />
      <button
        type="button"
        onClick={onClick}
      >
        리뷰 남기기
      </button>
    </>
  );
}
