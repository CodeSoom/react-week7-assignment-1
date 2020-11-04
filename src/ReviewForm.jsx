import React from 'react';

export default function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  function handleChange(event) {
    const { name, value } = event.target;

    onChange({ name, value });
  }

  function handleClick(event) {
    event.preventDefault();

    onSubmit();
  }

  return (
    <>
      <label htmlFor="input-score">
        평점
      </label>
      <input
        type="number"
        id="input-score"
        name="score"
        value={score}
        onChange={handleChange}
      />
      <label htmlFor="input-description">
        리뷰 내용
      </label>
      <input
        type="text"
        id="input-description"
        name="description"
        value={description}
        onChange={handleChange}
      />
      <button
        type="submit"
        onClick={handleClick}
      >
        리뷰 남기기
      </button>
    </>
  );
}
