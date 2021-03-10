import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from '@components/RestaurantDetail';
import ReviewForm from '@components/ReviewForm';

import { loadRestaurant } from '../actions';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const { restaurant, accessToken, reviewFields } = useSelector((state) => ({
    restaurant: state.restaurant,
    accessToken: state.accessToken,
    reviewFields: state.reviewFields,
  }));

  if (!restaurant) {
    return <p>Loading...</p>;
  }

  function handleChange({ target: { name, value } }) {
    dispatch({
      type: 'changeReviewFields',
      payload: { name, value },
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch();
    dispatch();
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken ? (
        <ReviewForm
          onChange={handleChange}
          onSubmit={handleSubmit}
          reviewFields={reviewFields}
        />
      ) : <></>}
    </>
  );
}
