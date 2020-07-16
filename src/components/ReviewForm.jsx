import React from 'react';

export default function ReviewForm({ onChange, onSubmit }) {
  return (
    <form onChange={onChange} onSubmit={onSubmit}>
      <div>
        <label>
          평점
          <input type="number" name="score" />
        </label>
      </div>
      <div>
        <label>
          리뷰 내용
          <input type="text" name="description" />
        </label>
      </div>
      <input type="submit" value="리뷰 남기기" />
    </form>
  );
}
