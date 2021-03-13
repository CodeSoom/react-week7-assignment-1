import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';

import { requestReview, loadRestaurant } from '@actions';
import { get } from '../../utils/utils';

import ReviewForm from './ReviewForm';

export default function ReviewFormContainer({ restaurantId }) {
  const accessToken = useSelector(get('accessToken'));

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(requestReview({
      reviewFields: {
        ...data,
        restaurantId,
        accessToken,
      },
    }));

    dispatch(loadRestaurant({ restaurantId }));

    reset();
  };

  if (!accessToken) {
    return (
      <p>로그인을 해주세요.</p>
    );
  }

  return (
    <ReviewForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
    />
  );
}
