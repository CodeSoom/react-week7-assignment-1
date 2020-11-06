import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
} from './actions';

import { get } from './utils';

function Reviews() {
  return (
    <>
      <p>테스터</p>
      <p>5점</p>
      <p>테스트</p>
      <p>test</p>
    </>
  );
}

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));
  const accessToken = useSelector(get('accessToken'));
  const reviewfields = useSelector(get('reviewFields'));

  function handleChangeReviewField(event) {
    const { target: { name, value } } = event;
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit() {
    dispatch(sendReview({ restaurantId }));
  }

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken ? (
        <ReviewForm
          reviewfields={reviewfields}
          onChange={handleChangeReviewField}
          onSubmit={handleSubmit}
        />
      ) : ''}
      <Reviews />
    </>
  );
}
