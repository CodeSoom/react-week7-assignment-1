import { useParams } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';

export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return (
    <div>
      <RestaurantContainer restaurantId={id} />
      <label htmlFor="rate-input">
        평점
      </label>
      <input id="rate-input" />
    </div>
  );
}
