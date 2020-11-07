import React from 'react';

export default function RestaurantReview({
  description, score, onChangeDescription, onChangeScore, onClick,
}) {
  const isValid = score && description;

  return (
    <form>
      <input
        type="number"
        value={score}
        placeholder="평가 점수"
        min="1"
        max="5"
        onChange={onChangeScore}
      />
      <input
        type="text"
        placeholder="리뷰를 작성해 주세요!"
        value={description}
        onChange={onChangeDescription}
      />
      <button
        type="button"
        onClick={onClick}
        disabled={!isValid}
      >
        작성하기
      </button>
    </form>
  );
}
