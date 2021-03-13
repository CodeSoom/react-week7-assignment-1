import React from 'react';

const initialReviewInputs = {
  rating: 4,
  content: '맛있는 편이에요',
};

export default function ReviewForm({ reviewInputs = initialReviewInputs, onChange }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  const { rating, content } = reviewInputs;

  return (
    <>
      <div>
        <label htmlFor="review-rating">평점</label>
        <input
          type="number"
          id="review-rating"
          name="rating"
          value={rating}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="review-content">리뷰내용</label>
        <input
          type="text"
          id="review-content"
          name="content"
          value={content}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
