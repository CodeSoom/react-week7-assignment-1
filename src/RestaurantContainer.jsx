import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';

import {
  loadRestaurant,
  changeReviewField,
} from './actions';

import { get } from './utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  const { score, description } = useSelector(get('reviewFields'));

  const handleChange = ({ name, value }) => {
    dispatch(changeReviewField({ name, value }));
  };

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
      <ReviewForm value={score} onChange={handleChange} title="평점" name="score" />
      <ReviewForm value={description} onChange={handleChange} title="리뷰 내용" name="description" />
    </>
  );
}
