import React from 'react';

export default function ReviewForm({ onChange, onSubmit }) {
  return (
    <div>
      <div>
        <label>
          평점
          <input type="number" name="score"  onChange={onChange}/>
        </label>
      </div>
      <div>
        <label>
          리뷰 내용
          <input type="text" name="description"  onChange={onChange}/>
        </label>
      </div>
      <button type="submit" onClick={onSubmit}>리뷰 남기기</button>
    </div>
  );
}
