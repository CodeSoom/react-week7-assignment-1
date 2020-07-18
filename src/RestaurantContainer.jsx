import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import {
  loadRestaurant, changeReviewField,
} from './actions';

import { get } from './utils';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));
  const accessToken = useSelector(get('accessToken'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  const { reviews } = restaurant;

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit() {
    dispatch();
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken ? (
        <>
          <ReviewForm
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
          <Reviews reviews={reviews} />
        </>
      ) : null}
    </>
  );
}
