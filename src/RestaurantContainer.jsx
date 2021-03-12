import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import {
  loadRestaurant,
  changeReviewFields,
  sendReview,
} from './actions';

import { get } from './utils';
import RestaurantReview from './RestaurantReview';

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

  function handleChange({ value, name }) {
    dispatch(changeReviewFields({ value, name }));
  }

  function handleClick() {
    dispatch(sendReview({ restaurantId }));
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <RestaurantReview onChange={handleChange} onClick={handleClick} />
      <ul>
        <li>
          <p>테스터</p>
          <p>5점</p>
          <p>맛있어요</p>
        </li>
      </ul>
    </>
  );
}
