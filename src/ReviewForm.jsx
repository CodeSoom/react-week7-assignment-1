import React from 'react';

import InputField from './InputField';

export default function ReviewForm({ onChange, onSubmit, fields }) {
  const { score, description } = fields;

  return (
    <>
      <InputField
        label="평점"
        type="number"
        name="score"
        field={score}
        onChange={onChange}
      />
      <InputField
        label="리뷰 내용"
        name="description"
        field={description}
        onChange={onChange}
      />
      <button type="button" onClick={onSubmit}>리뷰 남기기</button>
    </>
  );
}
