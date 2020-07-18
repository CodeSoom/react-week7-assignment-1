import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import RestaurantReviewForm from './RestaurantReviewForm';
import RestaurantReviews from './RestaurantReviews';

import {
  loadRestaurant, setReviewFields, registerReview,
} from './actions';

import { get } from './utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();
  const restaurant = useSelector(get('restaurant'));
  const accessToken = useSelector(get('accessToken'));
  const { score, description } = useSelector(get('reviewFields'));

  const handleChange = ({ name, value }) => {
    dispatch(setReviewFields({ name, value }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    dispatch(registerReview());
  };

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <RestaurantDetail
        restaurant={restaurant}
      />
      {accessToken ? (
        <RestaurantReviewForm
          score={score}
          description={description}
          onSubmit={handleSubmitReview}
          onChange={handleChange}
        />
      ) : null}
      <h3>리뷰</h3>
      <RestaurantReviews
        reviews={restaurant.reviews}
      />
    </>
  );
}
