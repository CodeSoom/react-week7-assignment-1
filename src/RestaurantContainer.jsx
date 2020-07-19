import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';

import {
  loadRestaurant,
  changeReviewField,
} from './actions';

import { get } from './utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));
  const reviewField = useSelector(get('reviewField'));

  function handleReviewSubmit() {

  }

  function handleReviewChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

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
        onChange={handleReviewChange}
        onSubmit={handleReviewSubmit}
      />
    </>
  );
}
