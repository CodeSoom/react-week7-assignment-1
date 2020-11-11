import React from 'react';
import ErrorMessage from './ErrorMessage';

import TextField from './TextField';

function ReviewForm({
  onChange, onSubmit, fields, error,
}) {
  const ERROR_MESSAGE = '입력이 안된 사항이 있습니다.';

  const { score, description } = fields;

  return (
    <>
      <TextField
        label="평점"
        name="score"
        type="number"
        inputValue={score}
        onChange={onChange}
      />
      <TextField
        label="리뷰 내용"
        name="description"
        inputValue={description}
        onChange={onChange}
      />
      {error && <ErrorMessage message={ERROR_MESSAGE} />}
      <button
        type="button"
        onClick={onSubmit}
      >
        리뷰 남기기
      </button>
    </>
  );
}

export default ReviewForm;
