import React from 'react';

export default function RestaurantReview({ score, description }) {
  return (
    <>
      <div>
        <div>
          <label htmlFor="score-input">평점</label>
          <input type="number" id="score-input" value={score} />
        </div>
        <div>
          <label htmlFor="description-input">리뷰 내용</label>
          <input type="text" id="description-input" value={description} />
        </div>

        <button type="button">리뷰 남기기</button>
      </div>
    </>
  );
}
