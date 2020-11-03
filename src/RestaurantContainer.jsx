import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import {
  loadRestaurant, changeReviewField,
} from './actions';

import { get } from './utils';

function ReviewForm({ onChange }) {
  function handleChange(event) {
    const { name, value } = event.target;
    onChange({ name, value });
  }
  return (
    <>
      <label htmlFor="input-score">
        평점
      </label>
      <input
        type="number"
        id="input-score"
        name="score"
        onChange={handleChange}
      />
      <label htmlFor="input-description">
        리뷰 내용
      </label>
      <input
        type="text"
        id="input-description"
        name="description"
        onChange={handleChange}

      />
    </>
  );
}

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

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <ReviewForm onChange={handleChange} />
    </>
  );
}
