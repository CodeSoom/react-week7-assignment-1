import React from 'react';

import InputField from './InputField';

export default function ReviewForm({ reviewFields, onChange }) {
  const { score, description } = reviewFields;

  return (
    <div>
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
    </div>
  );
}
