import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ReviewForm from './ReviewForm';
import ReviewItems from './ReviewItems';

import {
  changeReviewFields,
  sendReview,
} from './actions';

import { get } from './utils';

export default function ReviewContainer({ restaurantId, reviewItems }) {
  const dispatch = useDispatch();

  const accessToken = useSelector(get('accessToken'));
  const { score, description } = useSelector(get('reviewFields'));

  function handleChange({ name, value }) {
    dispatch(changeReviewFields({ name, value }));
  }

  function handleSubmit() {
    dispatch(sendReview({ restaurantId }));
  }

  return (
    <>
      {
        accessToken ? (
          <ReviewForm
            fields={{ score, description }}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        ) : null
      }
      <h3>리뷰</h3>
      <ReviewItems reviewItems={reviewItems} />
    </>
  );
}
