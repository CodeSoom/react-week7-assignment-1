import { useParams } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';

export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return (
    <div>
      <RestaurantContainer restaurantId={id} />
      <label htmlFor="rating-input">
        평점
      </label>
      <input
        id="rating-input"
        type="number"
        name="rating"
      />
    </div>
  );
}
