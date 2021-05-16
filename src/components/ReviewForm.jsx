import React from 'react';

export default function ReviewForm({ onChange, onSubmit, reviewFields }) {
  const { score, description } = reviewFields;

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="score">score</label>
      <input
        type="number"
        id="score"
        name="score"
        onChange={onChange}
        value={score}
      />
      <label htmlFor="review">description</label>
      <input
        type="text"
        id="review"
        name="description"
        onChange={onChange}
        value={description}
      />
      <button type="submit">리뷰 남기기</button>
    </form>
  );
}
