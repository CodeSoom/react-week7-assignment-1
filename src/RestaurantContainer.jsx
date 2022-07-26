import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setReviewFields,
  loadRestaurant,
  addReview,
} from './actions';

import RestaurantDetail from './RestaurantDetail';

import { get } from './utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));
  const reviewFields = useSelector(get('reviewFields'));

  function handleChangeReviewForm({ name, value }) {
    dispatch(setReviewFields({ name, value }));
  }

  async function handleSubmitReviewForm() {
    await dispatch(addReview({ restaurantId }));
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
        reviewFields={reviewFields}
        onChangeReviewForm={handleChangeReviewForm}
        onSubmitReviewForm={handleSubmitReviewForm}
      />
    </>
  );
}
