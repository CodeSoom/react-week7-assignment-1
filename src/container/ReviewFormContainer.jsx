import React from 'react';
import ReviewForm from '../presentational/ReviewForm';

export default function ReviewFormContainer() {
  function handleChangeReviewField() {
    // TODO : dispatch review field change action
  }

  function handleClickRegisterReviewButton() {
    // TODO : dispatch requestReview action
  }
  return (
    <>
      <ReviewForm
        score={10}
        description="test"
        onChange={handleChangeReviewField}
        onClick={handleClickRegisterReviewButton}
      />
    </>
  );
}
