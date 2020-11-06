import React from 'react';
import { useDispatch } from 'react-redux';
import ReviewForm from '../presentational/ReviewForm';

export default function ReviewFormContainer() {
  const dispatch = useDispatch();
  function handleChangeReviewField({ name, value }) {
    dispatch(changeReviewField({ name, value }));
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
