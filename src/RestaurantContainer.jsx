import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import {
  loadRestaurant,
} from './actions';

import { get } from './utils';

function ReviewForm() {
  return (
    <>
      <div>
        <label htmlFor="review-rating">평점</label>
        <input type="text" id="review-rating" />
      </div>

      <div>
        <label htmlFor="review-content">리뷰내용</label>
        <input type="text" id="review-content" />
      </div>
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

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <ReviewForm />
    </>
  );
}
