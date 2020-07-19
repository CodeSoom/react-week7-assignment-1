import React from 'react';

export default function ReviewForm({ onChange }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <div>
      <label htmlFor="review-score">
        평점
      </label>
      <input 
       type="text"
       id="review-score"
       name="score"
       onChange={handleChange}
      />
      <label htmlFor="review-description">
        리뷰 내용
      </label>
      <input 
       type="text"
       id="review-description"
       name="description"
       onChange={handleChange}
      />
    </div>
  );
}