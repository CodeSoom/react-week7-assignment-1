import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import {
  handleReviewForm,
  loadRestaurant,
  requestReviewPost,
} from './actions';

import { get } from './utils';
import ReviewForm from './components/ReviewForm/ReviewForm';

export default function RestaurantContainer({ restaurantId }) {
  const { name, description, score } = useSelector((state) => state.reviewForm);
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
      <ReviewForm
        onChange={(key, value) => dispatch(handleReviewForm(key, value))}
        onSubmit={() => dispatch(requestReviewPost())}
        name={name}
        description={description}
        score={score}
      />
    </>
  );
}
