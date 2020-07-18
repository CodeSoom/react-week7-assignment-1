import React from 'react';

import TextField from './TextField';

export default function RestaurantReviewForm({
  score, description, onSubmit, onChange,
}) {
  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="평점"
        name="score"
        type="number"
        value={score}
        onChange={onChange}
      />
      <TextField
        label="리뷰 내용"
        name="description"
        type="text"
        value={description}
        onChange={onChange}
      />
      <button type="submit">리뷰 남기기</button>
    </form>
  );
}
