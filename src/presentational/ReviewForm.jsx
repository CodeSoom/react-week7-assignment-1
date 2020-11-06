import React from 'react';

import Input from './Input';

export default function ReviewForm({
  score, description, onChange, onClick,
}) {
  return (
    <form>
      <Input
        id="review-score"
        name="score"
        type="number"
        value={score}
        onChange={onChange}
      >
        평점
      </Input>
      <Input
        id="review-description"
        name="description"
        type="text"
        value={description}
        onChange={onChange}
      >
        리뷰 내용
      </Input>
      <button type="button" onClick={onClick}>리뷰 남기기</button>
    </form>
  );
}
