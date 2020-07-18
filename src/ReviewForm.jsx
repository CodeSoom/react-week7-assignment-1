import React from 'react';
import InputField from './InputField';

export default function ReviewForm({ onChange }) {
  return (
    <>
      <InputField
        label="평점"
        type="number"
        name="score"
        onChange={onChange}
      />
      <InputField
        label="리뷰 내용"
        name="description"
        onChange={onChange}
      />
      <button type="button">리뷰 남기기</button>
    </>
  );
}
