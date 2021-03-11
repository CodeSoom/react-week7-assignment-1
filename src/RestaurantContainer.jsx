import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import {
  loadRestaurant,
  changeReviewFields,
} from './actions';

import { get } from './utils';
import RestaurantReview from './RestaurantReview';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  function handleChange({ value, name }) {
    dispatch(changeReviewFields({ value, name }));
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <RestaurantReview onChange={handleChange} />
    </>
  );
}
