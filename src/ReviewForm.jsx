import React from 'react';

export default function ReviewForm({ fields, onChange, onClick }) {
  const { score, description } = fields;
  
  return (
    <>
      <div>
        <label htmlFor="input-score">점수</label>
        <input
          id="input-score"
          name="score"
          type="number"
          value={score}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="input-description">내용</label>
        <input
          id="input-description"
          name="description"
          type="text"
          value={description}
          onChange={onChange}
        />
      </div>
      <button
        type="button"
        onClick={onClick}
      >
        의견남기기
      </button>
    </>
  );
}
