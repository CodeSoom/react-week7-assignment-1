import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ReviewForm from './ReviewForm';

import {
  changeReviewField,
  sendReview,
} from './actions';

import { get } from './utils';

export default function ReviewFormContainer() {
  const reviewFields = useSelector(get('reviewFields'));
  const isLoggedOut = useSelector(get('accessToken')) === null;

  const dispatch = useDispatch();

  const handleChange = ({ name, value }) => {
    dispatch(changeReviewField({ name, value }));
  };

  const handleSubmit = () => {
    dispatch(sendReview());
  };

  return (
    <>
      {isLoggedOut ? ''
        : (
          <ReviewForm
            fields={reviewFields}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )}
    </>
  );
}
