import React from 'react';

export default function RestaurantReviewForm({
  onSubmit, onChange, fields,
}) {
  const { score, reviewContent } = fields;

  function handleChange(event) {
    const { name, value } = event.target;
    onChange({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor="review-score">
          평점
        </label>
        <input type="number" id="review-score" name="score" onChange={handleChange} value={score} />
      </div>
      <div>
        <label htmlFor="review-content">
          리뷰 내용
        </label>
        <input type="reviewContent" id="review-content" name="reviewContent" onChange={handleChange} value={reviewContent} />
      </div>

      <button type="button" onClick={onSubmit}>리뷰 남기기</button>
    </>
  );
}
