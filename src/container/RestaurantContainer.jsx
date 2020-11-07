import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from 'presentational/RestaurantDetail';
import ReviewForm from 'presentational/ReviewForm';

import {
  loadRestaurant,
} from '_redux/actions';

import { get } from '../utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));
  const accessToken = useSelector(get('accessToken'));

  function handleChangeReviewField() {

  }

  function handleSubmit() {

  }

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <RestaurantDetail
        restaurant={restaurant}
        accessToken={accessToken}
      >
        <ReviewForm
          score="10"
          description="description"
          onChange={handleChangeReviewField}
          onClick={handleSubmit}
        />
      </RestaurantDetail>
    </>
  );
}
