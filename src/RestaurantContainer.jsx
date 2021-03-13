import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import ReviewForm from './ReviewForm';

import {
  loadRestaurant,
} from './actions';

import { get } from './utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  const reviewInputs = useSelector(get('reviewInputs'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  function handleChange() {
    dispatch();
  }

  function handleClick() {
    dispatch();
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <ReviewForm
        reviewInputs={reviewInputs}
        onChange={handleChange}
        onClick={handleClick}
      />
    </>
  );
}
