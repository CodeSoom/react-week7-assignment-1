import { useSelector } from 'react-redux';

import { get } from '../utils';
import Restaurants from './Restaurants';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  return (
    <Restaurants
      restaurants={restaurants}
      onClick={onClickRestaurant}
    />
  );
}
