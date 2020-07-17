import React from 'react';

export default function RestaurantReviewForm({
  score, description, onSubmit, onChange,
}) {
  const handleChange = (e) => {
    const { target: { name, value } } = e;
    onChange({ name, value });
  };

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
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </div>
      <button type="submit">리뷰 남기기</button>
    </form>
  );
}
