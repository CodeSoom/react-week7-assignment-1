import React from 'react';

import TextField from './TextField';

export default function ReviewForm({ field, onChange, onSubmit }) {
  const { score, description } = field;

  return (
    <>
      <TextField
        label="평점"
        type="number"
        name="score"
        inputValue={score}
        onChange={onChange}
      />
      <TextField
        label="리뷰 내용"
        type="text"
        name="description"
        inputValue={description}
        onChange={onChange}
      />
      <button type="button" onClick={onSubmit}> 리뷰 남기기 </button>
    </>
  );
}
