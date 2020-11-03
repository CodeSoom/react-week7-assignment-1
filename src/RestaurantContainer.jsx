import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import {
  loadRestaurant, changeReviewField,
} from './actions';

import { get } from './utils';

function ReviewForm({ onChange }) {
  return (
    <>
      <label htmlFor="input-score">
        평점
      </label>
      <input
        type="score"
        id="input-score"
        onChange={onChange}
      />
      <label htmlFor="input-description">
        리뷰 내용
      </label>
      <input
        type="text"
        id="input-description"
        onChange={onChange}

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

  function handleChange() {
    dispatch(changeReviewField());
  }
  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <ReviewForm onChange={handleChange} />
    </>
  );
}
