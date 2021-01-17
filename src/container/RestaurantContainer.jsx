import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from 'presentational/RestaurantDetail';
import ReviewForm from 'presentational/ReviewForm';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
} from '_redux/actions';

import { get } from '../utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));
  const accessToken = useSelector(get('accessToken'));
  const { score, description } = useSelector(get('reviewField'));

  function handleChangeReviewField({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit() {
    dispatch(sendReview({ restaurantId }));
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
        {accessToken && (
          <ReviewForm
            score={score}
            description={description}
            onChange={handleChangeReviewField}
            onClick={handleSubmit}
          />
        )}

      </RestaurantDetail>
    </>
  );
}
