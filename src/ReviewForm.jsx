import React from 'react';

import TextField from './TextField';

export default function ReviewForm({ onChange }) {
  return (
    <>
      <div>
        <TextField
          label="평점"
          name="score"
          type="number"
          onChange={onChange}
        />
      </div>
      <div>
        <TextField
          label="리뷰 내용"
          name="description"
          onChange={onChange}
        />
      </div>
    </>
  );
}
