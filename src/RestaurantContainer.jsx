import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';

import {
  loadRestaurant,
  sendReview,
  changeReviewFields,
} from './actions';

import { get } from './utils';
import ReviewList from './ReviewList';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));
  const accessToken = useSelector(get('accessToken'));
  const reviewFields = useSelector(get('reviewFields'));
  const errorMessage = useSelector(get('errorMessage'));

  function handleSubmit() {
    dispatch(sendReview({ restaurantId }));
    dispatch(changeReviewFields({
      reviewFields: {
        score: '',
        description: '',
      },
    }));
  }

  function handleChange({ name, value }) {
    dispatch(changeReviewFields({ name, value }));
  }

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  if (!accessToken?.length) {
    return (
      <>
        <RestaurantDetail
          restaurant={restaurant}
        />
        <ReviewList reviews={restaurant.reviews} />
      </>
    );
  }

  return (
    <>
      <RestaurantDetail
        restaurant={restaurant}
      />
      <ReviewForm
        fields={reviewFields}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <p>{errorMessage}</p>
      <ReviewList reviews={restaurant.reviews} />
    </>
  );
}
