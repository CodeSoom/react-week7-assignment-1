import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  changeReviewField,
} from '_redux/actions';

import ReviewForm from '../presentational/ReviewForm';

export default function ReviewFormContainer() {
  const dispatch = useDispatch();

  const { score = 0, description } = useSelector((state) => ({
    score: state.reviewField.score,
    description: state.reviewField.description,
  }));

  function handleChangeReviewField({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleClickRegisterReviewButton() {
    // TODO : dispatch requestReview action
  }
  return (
    <>
      <ReviewForm
        score={score}
        description={description}
        onChange={handleChangeReviewField}
        onClick={handleClickRegisterReviewButton}
      />
    </>
  );
}
