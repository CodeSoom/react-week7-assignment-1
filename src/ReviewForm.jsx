import React from 'react';

export default function ReviewForm() {
  return (
    <>
      <div>
        <label htmlFor="input-score">평점</label>
        <input type="number" id="input-score" />
      </div>
      <div>
        <label htmlFor="input-description">리뷰 내용</label>
        <input type="text" id="input-description" />
      </div>
      <button type="button">리뷰 남기기</button>
    </>
  );
}
