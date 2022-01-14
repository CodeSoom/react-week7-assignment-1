import { useSelector } from 'react-redux';

import { get } from '../modules/utils';
import Restaurants from './Restaurants';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  return (

    <Restaurants
      restaurants={restaurants}
      onClick={onClickRestaurant}
    />
    // <ul>
    //   {
    //     restaurants.map((restaurant) => (
    //       <li key={restaurant.id}>
    //         <button onClick={() => onClickRestaurant(restaurant)} type="button">
    //           {restaurant.name}
    //         </button>
    //       </li>
    //     ))
    //   }
    // </ul>
  );
}
