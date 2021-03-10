import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';

import {
  loadRestaurant,
  changeReviewField,
  saveReview,
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

  const { score, description } = useSelector(get('reviewFields'));

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleClick() {
    dispatch(saveReview());
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <ReviewForm
        fields={{ score, description }}
        onChange={handleChange}
        onClick={handleClick}
      />
    </>
  );
}
