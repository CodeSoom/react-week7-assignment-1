import React from 'react';

import TextField from './TextField';

export default function ReviewForm({ fields, onChange, onSubmit }) {
  return (
    <>
      <TextField
        label="평점"
        type="number"
        name="score"
        value={fields.score}
        onChange={onChange}
      />
      <TextField
        label="리뷰 내용"
        name="description"
        value={fields.description}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onSubmit}
      >
        리뷰 남기기
      </button>
    </>
  );
}
