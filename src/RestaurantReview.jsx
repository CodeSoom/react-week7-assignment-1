import React from 'react';

export default function RestaurantReview({ score, description, onChange }) {
  function handleChange(event) {
    const { target: { name, value } } = event;

    onChange({ name, value });
  }

  return (
    <>
      <div>
        <div>
          <label htmlFor="score-input">평점</label>
          <input
            type="number"
            id="score-input"
            name="score"
            value={score}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description-input">리뷰 내용</label>
          <input
            type="text"
            id="description-input"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </div>

        <button type="button">리뷰 남기기</button>
      </div>
    </>
  );
}
