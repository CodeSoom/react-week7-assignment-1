import React from 'react';

import TextField from './TextField';

export default function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, desctiption } = fields;
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="평점"
          name="score"
          type="number"
          value={score}
          onChange={onChange}
        />
        <TextField
          label="리뷰 내용"
          name="description"
          value={desctiption}
          onChange={onChange}
        />
        <button type="submit">리뷰 남기기</button>
      </form>
    </div>
  );
}
