import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from '../components/RestaurantDetail';
import RestaurantReviewForm from '../components/RestaurantReviewForm';
import RestaurantReviews from '../components/RestaurantReviews';

import {
  loadRestaurant,
  setReviewFields,
  requestAddReview,
} from '../modules/actions';

import { get } from '../utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  const restaurant = useSelector(get('restaurant'));
  const accessToken = useSelector(get('accessToken'));
  const { score, reviewContent } = useSelector(get('reviewFields'));

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const handleSubmit = async () => {
    await dispatch(requestAddReview(restaurantId));
    await dispatch(setReviewFields({ name: 'score', value: '' }));
    await dispatch(setReviewFields({ name: 'reviewContent', value: '' }));
    await dispatch(loadRestaurant({ restaurantId }));
  };

  const handleChange = ({ name, value }) => {
    dispatch(setReviewFields({ name, value }));
  };

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken
      && (
        <RestaurantReviewForm
          onSubmit={handleSubmit}
          onChange={handleChange}
          fields={{ score, reviewContent }}
        />
      )}
      <RestaurantReviews reviews={restaurant && restaurant.reviews} />
    </>
  );
}
