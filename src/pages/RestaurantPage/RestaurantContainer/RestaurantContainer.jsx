import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurant } from '@/store/async-actions';

import { get } from '@/utils';

import RestaurantDetail from './RestaurantDetail';
import ReviewFormContainer from './ReviewFormContainer';
import Reviews from './Reviews';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <ReviewFormContainer restaurantId={restaurantId} />
      <Reviews reviews={restaurant.reviews} />
    </>
  );
}
