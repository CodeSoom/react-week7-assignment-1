import React from 'react';

import InputField from './InputField';

export default function ReviewForm({ fields, onChange, onClick }) {
  const { score, description } = fields;

  return (
    <>
      <InputField
        label="평점"
        type="number"
        name="score"
        value={score}
        onChange={onChange}
      />
      <InputField
        label="리뷰 내용"
        type="text"
        name="description"
        value={description}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onClick}
      >
        리뷰 남기기
      </button>
    </>
  );
}
