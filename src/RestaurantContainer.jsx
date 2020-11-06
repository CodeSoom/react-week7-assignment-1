import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
} from './actions';

import { get } from './utils';

import ReviewForm from './ReviewForm';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  const restaurant = useSelector(get('restaurant'));
  const reviewField = useSelector(get('reviewField'));

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit() {
    dispatch(sendReview({ restaurantId }));
  }

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <ReviewForm
        fields={reviewField}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}
