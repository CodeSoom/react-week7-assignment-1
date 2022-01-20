import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Restaurant from '../components/Restaurant';

import { loadRestaurant } from '../modules/actions';

import { get } from '../utils';

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

  return (
    <>
      <Restaurant restaurant={restaurant} />
    </>
  );
}
