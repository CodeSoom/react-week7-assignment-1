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
      <div>
        <label htmlFor="input-description">리뷰 내용</label>
        <input type="text" id="input-description" />
      </div>
      <button type="button">리뷰 남기기</button>
    </>
  );
}
