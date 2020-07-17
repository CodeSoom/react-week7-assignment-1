import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

import {
  loadRestaurant,
  changeReviewField,
} from './actions';

import { get } from './utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));
  const reviewField = useSelector(get('reviewField'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  function handleChangeReviewField(event) {
    const { target: { name, value } } = event;
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmitReviewField() {
    // TODO : 강의 듣고 진행하기
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <ReviewForm
        reviewField={reviewField}
        onChangeReviewField={handleChangeReviewField}
        onSubmitReviewField={handleSubmitReviewField}
      />
      <Reviews reviews={restaurant.reviews} />
    </>
  );
}
