import { useSelector } from 'react-redux';

import { get } from '../utils';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <button
            type="button"
            onClick={() => onClickRestaurant(restaurant)}
          >
            {restaurant.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
