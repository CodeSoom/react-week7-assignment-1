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

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  const handleChange = ({ name, value }) => {
    dispatch(changeReviewField({ name, value }));
  };

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <ReviewForm onChange={handleChange} />
    </>
  );
}
