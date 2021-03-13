import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import ReviewForm from './ReviewForm';

import {
  loadRestaurant, setReviewInputs,
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

  function handleChange({ name, value }) {
    dispatch(setReviewInputs({ name, value }));
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
