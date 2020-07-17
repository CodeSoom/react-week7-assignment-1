import React from 'react';

export default function ReviewForm({
  score, description, onSubmit, onChange,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="score">
          평점
        </label>
        <input
          id="score"
          name="score"
          type="number"
          min="1"
          max="5"
          value={score}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="description">
          리뷰 내용
        </label>
        <input
          id="description"
          name="description"
          type="description"
          value={description}
          onChange={onChange}
        />
      </div>
      <button type="submit">리뷰 남기기</button>
    </form>
  );
}
