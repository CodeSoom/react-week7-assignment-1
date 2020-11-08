import React from 'react';

import TextField from './TextField';

export default function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  function handleClick(event) {
    event.preventDefault();

    onSubmit();
  }

  return (
    <>
      <TextField
        label="평점"
        name="score"
        value={score}
        type="number"
        onChange={onChange}
      />
      <TextField
        label="리뷰 내용"
        name="description"
        value={description}
        onChange={onChange}
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