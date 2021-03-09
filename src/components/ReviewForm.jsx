import React from 'react';

export default function ReviewForm({ onChange }) {
  return (
    <form>
      <label htmlFor="score">평점</label>
      <input
        type="number"
        id="score"
        name="score"
        onChange={onChange}
      />

      <label htmlFor="review">리뷰</label>
      <input
        type="text"
        id="review"
        name="description"
        onChange={onChange}
      />

      <button type="submit">리뷰 남기기</button>
    </form>
  );
}
